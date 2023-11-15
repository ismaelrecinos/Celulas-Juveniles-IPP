import { Injectable } from '@angular/core';
import { ILibro } from './ILibro';
import { ICapitulo } from './ICapitulo';
import { ICap } from './ICap';
import { INumVersiculos } from './INumVersiculos';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BibliaService{
	constructor (private http: HttpClient){}

	getCapitulo(libro,capitulo,biblia) : Observable<ICap[]>{
		if(biblia === 'Santa Biblia RV1960'){
			return this.http.get<ICap[]>('./assets/data/Biblia/'+libro+'/Capitulo'+capitulo+'.json');
		}else{
			return this.http.get<ICap[]>('./assets/data/Bible/'+libro+'/Capitulo'+capitulo+'.json');
		}
  	}

	getIndiceBiblia() : Observable<ILibro[]>{
        return this.http.get<ILibro[]>('./assets/data/indiceBiblia.json');
	}

	getIndiceCapitulos(libro,biblia) : Observable<ICapitulo[]>{
		if(biblia === 'Santa Biblia RV1960'){
			return this.http.get<ICapitulo[]>('./assets/data/Capitulos/'+libro+'.json');
		}else{
			return this.http.get<ICapitulo[]>('./assets/data/Chapters/'+libro+'.json');
		}
    }

    getNumeroVersiculos(biblia) : Observable<INumVersiculos[]>{
        return this.http.get<INumVersiculos[]>('./assets/data/numeroVersiculos.json');
    }  		
}
