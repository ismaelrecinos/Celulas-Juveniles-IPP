import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ILibro } from './ILibro';
import { BibliaService } from './biblia.service';

@Component({
  selector: 'app-indice-biblia',
  templateUrl: './indice-biblia.page.html',
  styleUrls: ['./indice-biblia.page.scss'],
})
export class IndiceBibliaPage implements OnInit {
  libros:ILibro[] = null;
  librosAntiguoTestamento:ILibro[] = null;
  librosNuevoTestamento:ILibro[] = null;
  biblia = 'Santa Biblia RV1960';

  constructor(public bibliaService:BibliaService, private router: Router) { }

  ngOnInit() {
    this.loadIndice();
  }

  pushPage(lib:string,cap:number){
  	if(lib != 'A.T.' && lib != 'N.T.'){
      this.router.navigate(['mostrar-libro',lib, cap, this.biblia]);
    }	
  }

  loadIndice(){
      this.bibliaService.getIndiceBiblia()
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
