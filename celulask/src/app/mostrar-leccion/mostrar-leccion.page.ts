import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LeccionesService } from '../indice-lecciones/lecciones.service';
import { ILeccion } from '../indice-lecciones/ILeccion';

@Component({
  selector: 'app-mostrar-leccion',
  templateUrl: './mostrar-leccion.page.html',
  styleUrls: ['./mostrar-leccion.page.scss'],
})
export class MostrarLeccionPage implements OnInit {
  public contenido;
  public numLeccion;
  lecciones:ILeccion[] = null;
  leccion:ILeccion = null;
  message:string = null;
  file:string = null;
  link:string = null;
  subject:string = null;

  constructor(private activatedRoute: ActivatedRoute,
              public leccionesService:LeccionesService) { }

  ngOnInit() {
    this.numLeccion = this.activatedRoute.snapshot.paramMap.get("id");
    this.loadLeccion();
  }

  loadLeccion(){
    this.leccionesService.getLeccion(this.numLeccion)
    .subscribe((leccionesData) => this.lecciones = leccionesData);
  }

}
