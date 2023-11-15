import { Injectable } from '@angular/core';
import { ILeccion } from './ILeccion';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LeccionesService{
	constructor (private http: HttpClient){}

	getLeccion(numero) : Observable<ILeccion[]>{
		return this.http.get<ILeccion[]>('./assets/data/discipulado/discipulado'+numero+'.json');
  	}

  	getIndiceLecciones() : Observable<ILeccion[]>{
        return this.http.get<ILeccion[]>('./assets/data/discipulado/indiceDiscipulado.json');
  	}	
}
