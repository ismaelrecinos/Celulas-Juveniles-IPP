import { Injectable } from '@angular/core';
import { ILibro } from '../indice-biblia/ILibro';
import { ICapitulo } from '../indice-biblia/ICapitulo';
import { Observable } from 'rxjs';
import { ICap } from '../indice-biblia/ICap';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BibleService{
	constructor (private http: HttpClient){}

	getCapitulo(libro,capitulo) : Observable<ICap[]>{
        return this.http.get<ICap[]>('./assets/data/Bible/'+libro+'/Capitulo'+capitulo+'.json');
  	}

	getIndiceBiblia() : Observable<ILibro[]>{
        return this.http.get<ILibro[]>('./assets/data/indiceBible.json');
  	}

  	getIndiceCapitulos(libro) : Observable<ICapitulo[]>{
        return this.http.get<ICapitulo[]>('./assets/data/Chapters/'+libro+'.json');
  	}  		
}
