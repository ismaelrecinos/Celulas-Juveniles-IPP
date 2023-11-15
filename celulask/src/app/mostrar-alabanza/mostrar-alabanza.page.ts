import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlabanzaService } from '../indice-alabanzas/alabanza.service';
import { IAlabanza } from '../indice-alabanzas/IAlabanza';
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';

import JSPDF from 'jspdf';
import domtoimage from 'dom-to-image';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { File, IWriteOptions } from '@ionic-native/file/ngx';

@Component({
  selector: 'app-mostrar-alabanza',
  templateUrl: './mostrar-alabanza.page.html',
  styleUrls: ['./mostrar-alabanza.page.scss'],
})
export class MostrarAlabanzaPage implements OnInit {
  public numAlabanza: any;	
  public numeroAlabanza;
  alabanzas:IAlabanza[] = null;
  alabanza:IAlabanza = null;
  message:string = null;
  archivo:string = null;
  link:string = null;
  subject:string = null;

  constructor(private activatedRoute: ActivatedRoute, 
              public alabanzaService:AlabanzaService,
              private socialSharing: SocialSharing,
              private file: File,
              private fileOpener: FileOpener) { }

  ngOnInit() {
    this.numAlabanza = this.activatedRoute.snapshot.paramMap.get("id");
    this.loadAlabanza();	
  }

  loadAlabanza(){
  	this.alabanzaService.getAlabanza(this.numAlabanza)
  	.subscribe((alabanzasData) => this.alabanzas = alabanzasData);
  }

  share(al){
   this.message = al.titulo;
   this.message += "\n\n";
   for (let verso of al.versos) {
        if(verso != "♪"){
          this.message += verso+"\n";
        }else{
          this.message += "\n";
        }
   }
   this.socialSharing.share(this.message,this.subject,this.archivo,this.link)
   .then(()=>{

    })
   .catch(()=>{

    }); 
  }

  createPdf(al) {
    const pdfBlock = document.getElementById("print-wrapper");
    
    const options = { 
      background: "white", 
      height: pdfBlock.clientWidth, 
      width: pdfBlock.clientHeight 
    };
    domtoimage.toPng(pdfBlock, options).then((fileUrl) => {
      var doc = new JSPDF("p","mm","a4");
      doc.addImage(fileUrl, 'PNG', 10, 10, 240, 180);
  
      let docRes = doc.output();
      let buffer = new ArrayBuffer(docRes.length);
      let array = new Uint8Array(buffer);
      for (var i = 0; i < docRes.length; i++) {
          array[i] = docRes.charCodeAt(i);
      }
  
  
      const directory = this.file.dataDirectory;
      const fileName = al.numero + ". " + al.titulo + ".pdf";
      let options: IWriteOptions = { 
        replace: true 
      };
  
      this.file.checkFile(directory, fileName).then((res)=> {
        this.file.writeFile(directory, fileName,buffer, options)
        .then((res)=> {
          console.log("File generated" + JSON.stringify(res));
          this.fileOpener.open(this.file.dataDirectory + fileName, 'application/pdf')
            .then(() => console.log('File is exported'))
            .catch(e => console.log(e));
        }).catch((error)=> {
          console.log(JSON.stringify(error));
        });
      }).catch((error)=> {
        this.file.writeFile(directory,fileName,buffer).then((res)=> {
          console.log("File generated" + JSON.stringify(res));
          this.fileOpener.open(this.file.dataDirectory + fileName, 'application/pdf')
            .then(() => console.log('File exported'))
            .catch(e => console.log(e));
        })
        .catch((error)=> {
          console.log(JSON.stringify(error));
        });
      });
    }).catch(function (error) {
      console.error(error);
    });
  }
}
