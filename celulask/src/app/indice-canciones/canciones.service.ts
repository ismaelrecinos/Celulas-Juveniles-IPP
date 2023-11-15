import { Injectable } from '@angular/core';
import { ICancion } from './ICancion';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CancionesService{
	constructor (private http: HttpClient){}

	getCancion(numero) : Observable<ICancion[]>{
        return this.http.get<ICancion[]>('./assets/data/canciones/cancion'+numero+'.json');
  	}

  	getIndiceCanciones() : Observable<ICancion[]>{
        return this.http.get<ICancion[]>('./assets/data/canciones/indiceCanciones.json');
  	}	
}
