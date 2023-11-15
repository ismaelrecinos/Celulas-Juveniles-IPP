import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ILibro } from '../indice-biblia/ILibro';
import { BibleService } from './bible.service';

@Component({
  selector: 'app-bible-indice',
  templateUrl: './bible-indice.page.html',
  styleUrls: ['./bible-indice.page.scss'],
})
export class BibleIndicePage implements OnInit {
  libros:ILibro[] = null;
  librosAntiguoTestamento:ILibro[] = null;
  librosNuevoTestamento:ILibro[] = null;
  biblia = 'Holy Bible';

  constructor(private router: Router, public bibleService:BibleService) { }

  ngOnInit() {
    this.loadIndice();
  }

  pushPage(lib:string,cap:number){
  	if(lib != 'OLD TESTAMENT' && lib != 'NEW TESTAMENT'){
      this.router.navigate(['mostrar-libro',lib, cap, this.biblia]);  
    }	
  }

  loadIndice(){
      this.bibleService.getIndiceBiblia()
      .subscribe((bibliaData) => {
        this.libros = bibliaData;

        this.librosAntiguoTestamento = [];
        this.librosNuevoTestamento = [];

        for (let lib of this.libros) {
          if((lib.numero >=1 && lib.numero <=39) ||lib.numero == -1){
            this.librosAntiguoTestamento.push(lib);
          }else{
            this.librosNuevoTestamento.push(lib);
          }
        }
        });
  }

}
