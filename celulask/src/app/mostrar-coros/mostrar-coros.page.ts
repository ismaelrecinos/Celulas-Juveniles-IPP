import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICoro } from '../indice-coros/ICoro';
import { CorosService } from '../indice-coros/coros.service';
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';

@Component({
  selector: 'app-mostrar-coros',
  templateUrl: './mostrar-coros.page.html',
  styleUrls: ['./mostrar-coros.page.scss'],
})
export class MostrarCorosPage implements OnInit {
  public contenido;
  public numCoro;
  coros:ICoro[] = null;
  coro:ICoro = null;
  message:string = null;
  file:string = null;
  link:string = null;
  subject:string = null;

  constructor(private activatedRoute: ActivatedRoute,
             private corosService: CorosService,
             private socialSharing: SocialSharing) { }

  ngOnInit() {
    this.numCoro = this.activatedRoute.snapshot.paramMap.get("id");
    this.loadCoros();
  }

  loadCoros(){
    this.corosService.getCoro(this.numCoro)
    .subscribe((corosData) => this.coros = corosData);
  }

  share(cor){
   this.message = "Cadena de Coros "+cor.numero;
   this.message += "\n\n";
   for (let verso of cor.versos) {
        if(verso != "♪"){
          this.message += verso+"\n";
        }else{
          this.message += "\n";
        }
   }
   this.socialSharing.share(this.message,this.subject,this.file,this.link)
   .then(()=>{

    })
   .catch(()=>{

    }); 
  }
}
