import { Injectable } from '@angular/core';
import { ICoro } from './ICoro';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CorosService{
	constructor (private http: HttpClient){}

	getCoro(numero): Observable<ICoro[]>{
		return this.http.get<ICoro[]>('./assets/data/coros/cadenaCoros'+numero+'.json');
	}

    getIndiceCoros() : Observable<ICoro[]>{
        return this.http.get<ICoro[]>('./assets/data/coros/indiceCoros.json');
    }	
}
