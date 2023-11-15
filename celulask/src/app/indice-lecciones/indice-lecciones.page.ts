import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ILeccion } from './ILeccion';
import { LeccionesService } from './lecciones.service';

@Component({
  selector: 'app-indice-lecciones',
  templateUrl: './indice-lecciones.page.html',
  styleUrls: ['./indice-lecciones.page.scss'],
})
export class IndiceLeccionesPage implements OnInit {
  lecciones:ILeccion[] = null;

  constructor(public leccionesService:LeccionesService, private router: Router) { }

  ngOnInit() {
    this.loadIndice();
  }

  pushPage(id:number){
    this.router.navigate(['mostrar-leccion',id]);
  }

  loadIndice(){
      this.leccionesService.getIndiceLecciones()
      .subscribe((leccionesData) => this.lecciones = leccionesData);
  }

}
