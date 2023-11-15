import { Injectable } from '@angular/core';
import { IAlabanza } from './IAlabanza';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AlabanzaService{
	constructor (private http: HttpClient){}

	getAlabanza(numero): Observable<IAlabanza[]>{
		return this.http.get<IAlabanza[]>('./assets/data/alabanzas/alabanza'+numero+'.json');
	}

	getIndiceAlabanzas() : Observable<IAlabanza[]>{
		return this.http.get<IAlabanza[]>('./assets/data/indiceAlabanzas.json');
	}
}
