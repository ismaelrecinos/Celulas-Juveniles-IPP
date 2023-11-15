import { Injectable } from '@angular/core';
import { ICalendarizacion } from './ICalendarizacion';
import { ILecturaDiaria } from './ILecturaDiaria';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CalendarizacionService{
	public lecturas: ILecturaDiaria[] = null;

	public lecturaDomingo: ILecturaDiaria = null;
	public lecturaLunes: ILecturaDiaria = null;
	public lecturaMartes: ILecturaDiaria = null;
	public lecturaMiercoles: ILecturaDiaria = null;
	public lecturaJueves: ILecturaDiaria = null;
	public lecturaViernes: ILecturaDiaria = null;
	public lecturaSabado: ILecturaDiaria = null;

	constructor (private http: HttpClient){}

	getNextOrPreviousWeekData(nextOrPrevious, diaReferencia, mesReferencia, anioReferencia) { 
		let mesActualIndice = 0;
		let numeroDiasmeses = [31,28,31,30,31,30,31,31,30,31,30,31];

		console.log(`diaReferencia: ${diaReferencia}, mesReferencia: ${mesReferencia}, anioReferencia: ${anioReferencia}`);
		let dateStr = mesReferencia+'/'+diaReferencia+'/'+anioReferencia+'';
		let date = new Date(dateStr);
		let dd = String(date.getDate()).padStart(2, '0');
		let mm = String(date.getMonth() + 1).padStart(2, '0');
		let yyyy = date.getFullYear();

		if(mm === "01"){
			mesActualIndice = 0;

		} else if(mm === "02"){
			mesActualIndice = 1;
		
		} else if(mm === "03"){
			mesActualIndice = 2;
		
		} else if(mm === "04"){
			mesActualIndice = 3;

		} else if(mm === "05"){
			mesActualIndice = 4;

		} else if(mm === "06"){
			mesActualIndice = 5;

		} else if(mm === "07"){
			mesActualIndice = 6;
		
		} else if(mm === "08"){
			mesActualIndice = 7;
		
		} else if(mm === "09"){
			mesActualIndice = 8;
		
		} else if(mm === "10"){
			mesActualIndice = 9;
		
		} else if(mm === "11"){
			mesActualIndice = 10;
		
		} else if(mm === "12"){
			mesActualIndice = 11;
		}

		let sumador = 7;
		if(nextOrPrevious == 0){ //Semana anterior
			sumador *= -1;
		}
		
		let diaInicioSemana = parseInt(dd) + sumador;
		let numeroMes = parseInt(mm);

		if(diaInicioSemana <= 0){
			if(mesActualIndice-1 <= 0){
				diaInicioSemana = diaInicioSemana + numeroDiasmeses[11];
				mesActualIndice = 11;
				numeroMes = 12;
				yyyy = yyyy - 1;
			}else {
				diaInicioSemana = diaInicioSemana + numeroDiasmeses[mesActualIndice-1];
				mesActualIndice = mesActualIndice - 1;
				numeroMes = numeroMes - 1;
			}
		} else if(diaInicioSemana > numeroDiasmeses[mesActualIndice]){
			if(mesActualIndice+1 > 11){
				diaInicioSemana = diaInicioSemana - numeroDiasmeses[0] - 1;
				mesActualIndice = 0;
				numeroMes = 1;
				yyyy = yyyy + 1;
			}else {
				diaInicioSemana = diaInicioSemana - numeroDiasmeses[mesActualIndice];
				mesActualIndice = mesActualIndice + 1;
				numeroMes = numeroMes + 1;
			}
		}

		if(diaInicioSemana <= 0){
			//console.log(`diaInicioSemana: ${diaInicioSemana}`);
			diaInicioSemana = 1;
		}

		let dateRef = numeroMes+'/'+diaInicioSemana+'/'+yyyy+'';
		//console.log(`dateRef: ${diaInicioSemana+'/'+numeroMes+'/'+yyyy+''}`);
		this.getWeekData(dateRef);
		
		return new Promise((resolve) => {
		    setTimeout(() => {
		    	resolve('resolved');
		    }, 500);
		});
	}

	getWeekData(dateRef) {
		this.lecturaDomingo = null;
		this.lecturaLunes = null;
		this.lecturaMartes = null;
		this.lecturaMiercoles = null;
		this.lecturaJueves = null;
		this.lecturaViernes = null;
		this.lecturaSabado = null;

		let mesActual = "";
		let mesAnterior = "";
		let mesSiguiente = "";
		let mesActualIndice = 0;

		let hayMesAnterior = false;
		let hayMesSiguiente = false;
		let diaInicioMesAnterior = null;
		let diaFinMesAnterior = null;
		let diaInicioMesSiguiente = null;
		let diaFinMesSiguiente = null;

		this.lecturas = [];

		let numeroDiasmeses = [31,28,31,30,31,30,31,31,30,31,30,31];
		
		let today = new Date();
		if(dateRef != null){
			today = new Date(dateRef);
		}
		var dd = String(today.getDate()).padStart(2, '0');
		var mm = String(today.getMonth() + 1).padStart(2, '0');
		var yyyy = today.getFullYear();
	
		if(mm === "01"){
			mesAnterior = "diciembre";
			mesActual = "enero";
			mesSiguiente = "febrero";
			mesActualIndice = 0;

		} else if(mm === "02"){
			mesAnterior = "enero";
			mesActual = "febrero";
			mesSiguiente = "marzo";
			mesActualIndice = 1;

		} else if(mm === "03"){
			mesAnterior = "febrero";
			mesActual = "marzo";
			mesSiguiente = "abril";
			mesActualIndice = 2;

		} else if(mm === "04"){
			mesAnterior = "marzo";
			mesActual = "abril";
			mesSiguiente = "mayo";
			mesActualIndice = 3;

		} else if(mm === "05"){
			mesAnterior = "abril";
			mesActual = "mayo";
			mesSiguiente = "junio";
			mesActualIndice = 4;

		} else if(mm === "06"){
			mesAnterior = "mayo";
			mesActual = "junio";
			mesSiguiente = "julio";
			mesActualIndice = 5;

		} else if(mm === "07"){
			mesAnterior = "junio";
			mesActual = "julio";
			mesSiguiente = "agosto";
			mesActualIndice = 6;

		} else if(mm === "08"){
			mesAnterior = "julio";
			mesActual = "agosto";
			mesSiguiente = "septiembre";
			mesActualIndice = 7;

		} else if(mm === "09"){
			mesAnterior = "agosto";
			mesActual = "septiembre";
			mesSiguiente = "octubre";
			mesActualIndice = 8;

		} else if(mm === "10"){
			mesAnterior = "septiembre";
			mesActual = "octubre";
			mesSiguiente = "noviembre";
			mesActualIndice = 9;

		} else if(mm === "11"){
			mesAnterior = "octubre";
			mesActual = "noviembre";
			mesSiguiente = "diciembre";
			mesActualIndice = 10;

		} else if(mm === "12"){
			mesAnterior = "noviembre";
			mesActual = "diciembre";
			mesSiguiente = "enero";
			mesActualIndice = 11;

		}

		var dateStr = mm+'/'+dd+'/'+yyyy+'';
		var date = new Date(dateStr);
		var dayOfWeek = date.toLocaleDateString("es-ES", { weekday: 'long' });

		let diaInicioSemana = parseInt(dd);
		switch(dayOfWeek){
			case "domingo":
				break;
			case "lunes":
				diaInicioSemana = parseInt(dd)-1;
				if(diaInicioSemana < 0){
					if(mesActualIndice-1 < 0){
						diaInicioMesAnterior = diaInicioSemana + numeroDiasmeses[11];
					}else{
						diaInicioMesAnterior = diaInicioSemana + numeroDiasmeses[mesActualIndice-1];
					}
					hayMesAnterior = true;
					diaInicioSemana = 1;
				}
				break;
			case "martes":
				diaInicioSemana = parseInt(dd)-2;
				if(diaInicioSemana < 0){
					if(mesActualIndice-1 < 0){
						diaInicioMesAnterior = diaInicioSemana + numeroDiasmeses[11];
					}else{
						diaInicioMesAnterior = diaInicioSemana + numeroDiasmeses[mesActualIndice-1];
					}
					hayMesAnterior = true;
					diaInicioSemana = 1;
				}
				break;
			case "miércoles":
				diaInicioSemana = parseInt(dd)-3;
				if(diaInicioSemana < 0){
					if(mesActualIndice-1 < 0){
						diaInicioMesAnterior = diaInicioSemana + numeroDiasmeses[11];
					}else{
						diaInicioMesAnterior = diaInicioSemana + numeroDiasmeses[mesActualIndice-1];
					}
					hayMesAnterior = true;
					diaInicioSemana = 1;
				}
				break;
			case "jueves":
				diaInicioSemana = parseInt(dd)-4;
				if(diaInicioSemana < 0){
					if(mesActualIndice-1 < 0){
						diaInicioMesAnterior = diaInicioSemana + numeroDiasmeses[11];
					}else{
						diaInicioMesAnterior = diaInicioSemana + numeroDiasmeses[mesActualIndice-1];
					}
					hayMesAnterior = true;
					diaInicioSemana = 1;
				}
				break;
			case "viernes":
				diaInicioSemana = parseInt(dd)-5;
				if(diaInicioSemana < 0){
					if(mesActualIndice-1 < 0){
						diaInicioMesAnterior = diaInicioSemana + numeroDiasmeses[11];
					}else{
						diaInicioMesAnterior = diaInicioSemana + numeroDiasmeses[mesActualIndice-1];
					}
					hayMesAnterior = true;
					diaInicioSemana = 1;
				}
				break;
			case "sábado":
				diaInicioSemana = parseInt(dd)-6;
				if(diaInicioSemana < 0){
					if(mesActualIndice-1 < 0){
						diaInicioMesAnterior = diaInicioSemana + numeroDiasmeses[11];
					}else{
						diaInicioMesAnterior = diaInicioSemana + numeroDiasmeses[mesActualIndice-1];
					}
					hayMesAnterior = true;
					diaInicioSemana = 1;
				}
				break;
		}

		//console.log(`diaInicioSemana+6 ${diaInicioSemana+6} > numeroDiasmeses[mesActualIndice] ${numeroDiasmeses[mesActualIndice]}`);
		let indiceMesSiguiente = mesActualIndice;
		if((diaInicioSemana+6) > numeroDiasmeses[mesActualIndice]){
			hayMesSiguiente = true;
			indiceMesSiguiente = mesActualIndice+1
			if(indiceMesSiguiente > 11){
				indiceMesSiguiente = 0;
			}
			diaFinMesSiguiente = diaInicioSemana + 6 - numeroDiasmeses[mesActualIndice];
			diaInicioMesSiguiente = 1;
			//console.log(`indiceMesSiguiente: ${indiceMesSiguiente}, diaInicioMesSiguiente: ${diaInicioMesSiguiente}, diaFinMesSiguiente: ${diaFinMesSiguiente}`);
		}

		let sumador = 6;
		if(hayMesAnterior){
			let indiceMes = mesActualIndice-1;
			if(indiceMes < 0){
				indiceMes = 11;
			}
			sumador = 6 - (numeroDiasmeses[indiceMes] - diaInicioMesAnterior) - 1;
		}

		let diaFinSemana = diaInicioSemana+sumador;
		if(diaFinSemana > numeroDiasmeses[mesActualIndice]){
			diaFinSemana = numeroDiasmeses[mesActualIndice];
		}

		let numeroAnio = yyyy;

		if(hayMesAnterior){
			let indiceMes = mesActualIndice-1;
			if(indiceMes < 0){
				indiceMes = 11;
				numeroAnio --;
			}
			for(let i=diaInicioMesAnterior; i<=numeroDiasmeses[indiceMes];i++){
				this.http.get<ILecturaDiaria>('./assets/data/bibliaEnUnAnio/'+mesAnterior+i+'.json')
				.subscribe((lecturaDiariaData) => {

					lecturaDiariaData[0].numeroMes = indiceMes+1;
					lecturaDiariaData[0].numeroAnio = numeroAnio;

					let dateStr = lecturaDiariaData[0].numeroMes+'/'+lecturaDiariaData[0].dia+'/'+lecturaDiariaData[0].numeroAnio+'';
					let date = new Date(dateStr);
					let dayOfWeek = date.toLocaleDateString("es-ES", { weekday: 'long' });
					lecturaDiariaData[0].nombreDia = dayOfWeek;

					switch(dayOfWeek){
						case "domingo":
							lecturaDiariaData[0].numeroDiaSemana = 1;
							this.lecturaDomingo = lecturaDiariaData;
							break;
						case "lunes":
							lecturaDiariaData[0].numeroDiaSemana = 2;
							this.lecturaLunes = lecturaDiariaData;
							break;
						case "martes":
							lecturaDiariaData[0].numeroDiaSemana = 3;
							this.lecturaMartes = lecturaDiariaData;
							break;
						case "miércoles":
							lecturaDiariaData[0].numeroDiaSemana = 4;
							this.lecturaMiercoles = lecturaDiariaData;
							break;
						case "jueves":
							lecturaDiariaData[0].numeroDiaSemana = 5;
							this.lecturaJueves = lecturaDiariaData;
							break;
						case "viernes":
							lecturaDiariaData[0].numeroDiaSemana = 6;
							this.lecturaViernes = lecturaDiariaData;
							break;
						case "sábado":
							lecturaDiariaData[0].numeroDiaSemana = 7;
							this.lecturaSabado = lecturaDiariaData;
							break;
					}
			    });
			}
		}

		for(let x=diaInicioSemana; x<=diaFinSemana;x++){
			this.http.get<ILecturaDiaria>('./assets/data/bibliaEnUnAnio/'+mesActual+x+'.json')
			.subscribe((lecturaDiariaData) => {

				lecturaDiariaData[0].numeroMes = mesActualIndice+1;
				lecturaDiariaData[0].numeroAnio = numeroAnio;

				let dateStr = lecturaDiariaData[0].numeroMes+'/'+lecturaDiariaData[0].dia+'/'+lecturaDiariaData[0].numeroAnio+'';
				let date = new Date(dateStr);
				let dayOfWeek = date.toLocaleDateString("es-ES", { weekday: 'long' });
				lecturaDiariaData[0].nombreDia = dayOfWeek;
					switch(dayOfWeek){
						case "domingo":
							lecturaDiariaData[0].numeroDiaSemana = 1;
							this.lecturaDomingo = lecturaDiariaData;
							break;
						case "lunes":
							lecturaDiariaData[0].numeroDiaSemana = 2;
							this.lecturaLunes = lecturaDiariaData;
							break;
						case "martes":
							lecturaDiariaData[0].numeroDiaSemana = 3;
							this.lecturaMartes = lecturaDiariaData;
							break;
						case "miércoles":
							lecturaDiariaData[0].numeroDiaSemana = 4;
							this.lecturaMiercoles = lecturaDiariaData;
							break;
						case "jueves":
							lecturaDiariaData[0].numeroDiaSemana = 5;
							this.lecturaJueves = lecturaDiariaData;
							break;
						case "viernes":
							lecturaDiariaData[0].numeroDiaSemana = 6;
							this.lecturaViernes = lecturaDiariaData;
							break;
						case "sábado":
							lecturaDiariaData[0].numeroDiaSemana = 7;
							this.lecturaSabado = lecturaDiariaData;
							break;
					}
		    });
		}

		if(hayMesSiguiente){
			for(let z=diaInicioMesSiguiente; z<=diaFinMesSiguiente;z++){
				this.http.get<ILecturaDiaria>('./assets/data/bibliaEnUnAnio/'+mesSiguiente+z+'.json')
				.subscribe((lecturaDiariaData) => {

					lecturaDiariaData[0].numeroMes = indiceMesSiguiente+1;
					lecturaDiariaData[0].numeroAnio = numeroAnio;

					let dateStr = lecturaDiariaData[0].numeroMes+'/'+lecturaDiariaData[0].dia+'/'+lecturaDiariaData[0].numeroAnio+'';
					let date = new Date(dateStr);
					let dayOfWeek = date.toLocaleDateString("es-ES", { weekday: 'long' });
					lecturaDiariaData[0].nombreDia = dayOfWeek;

					switch(dayOfWeek){
						case "domingo":
							lecturaDiariaData[0].numeroDiaSemana = 1;
							this.lecturaDomingo = lecturaDiariaData;
							break;
						case "lunes":
							lecturaDiariaData[0].numeroDiaSemana = 2;
							this.lecturaLunes = lecturaDiariaData;
							break;
						case "martes":
							lecturaDiariaData[0].numeroDiaSemana = 3;
							this.lecturaMartes = lecturaDiariaData;
							break;
						case "miércoles":
							lecturaDiariaData[0].numeroDiaSemana = 4;
							this.lecturaMiercoles = lecturaDiariaData;
							break;
						case "jueves":
							lecturaDiariaData[0].numeroDiaSemana = 5;
							this.lecturaJueves = lecturaDiariaData;
							break;
						case "viernes":
							lecturaDiariaData[0].numeroDiaSemana = 6;
							this.lecturaViernes = lecturaDiariaData;
							break;
						case "sábado":
							lecturaDiariaData[0].numeroDiaSemana = 7;
							this.lecturaSabado = lecturaDiariaData;
							break;
					}
			    });
			}
		}
		return new Promise((resolve) => {
		    setTimeout(() => {
		    	resolve('resolved');
		    }, 500);
		});
	}

	getDayData() {
		let mesActualIndice = 0;
		let mesActual = "";
		this.lecturas = [];
		
		let today = new Date();
		var dd = String(today.getDate()).padStart(2, '0');
		var mm = String(today.getMonth() + 1).padStart(2, '0');
		var yyyy = today.getFullYear();
		let dayOfWeek = today.toLocaleDateString("es-ES", { weekday: 'long' });


		if(mm === "01"){
			mesActual = "enero";
			mesActualIndice = 0;

		} else if(mm === "02"){
			mesActual = "febrero";
			mesActualIndice = 1;

		} else if(mm === "03"){
			mesActual = "marzo";
			mesActualIndice = 2;

		} else if(mm === "04"){
			mesActual = "abril";
			mesActualIndice = 3;

		} else if(mm === "05"){
			mesActual = "mayo";
			mesActualIndice = 4;

		} else if(mm === "06"){
			mesActual = "junio";
			mesActualIndice = 5;

		} else if(mm === "07"){
			mesActual = "julio";
			mesActualIndice = 6;

		} else if(mm === "08"){
			mesActual = "agosto";
			mesActualIndice = 7;

		} else if(mm === "09"){
			mesActual = "septiembre";
			mesActualIndice = 8;

		} else if(mm === "10"){
			mesActual = "octubre";
			mesActualIndice = 9;

		} else if(mm === "11"){
			mesActual = "noviembre";
			mesActualIndice = 10;

		} else if(mm === "12"){
			mesActual = "diciembre";
			mesActualIndice = 11;

		}

		this.http.get<ILecturaDiaria>('./assets/data/bibliaEnUnAnio/'+mesActual+parseInt(dd)+'.json')
		.subscribe((lecturaDiariaData) => {
			lecturaDiariaData[0].numeroMes = mesActualIndice+1;
			lecturaDiariaData[0].numeroAnio = yyyy;
			lecturaDiariaData[0].nombreDia = dayOfWeek;
			this.lecturas.push(lecturaDiariaData);
	    });

		return new Promise((resolve) => {
		    setTimeout(() => {
		    	resolve('resolved');
		    }, 500);
		});
	}

	ordenar(){
		if(this.lecturaDomingo != null  ) this.lecturas.push(this.lecturaDomingo);
		if(this.lecturaLunes != null    ) this.lecturas.push(this.lecturaLunes);
		if(this.lecturaMartes != null   ) this.lecturas.push(this.lecturaMartes);
		if(this.lecturaMiercoles != null) this.lecturas.push(this.lecturaMiercoles);
		if(this.lecturaJueves != null   ) this.lecturas.push(this.lecturaJueves);
		if(this.lecturaViernes != null  ) this.lecturas.push(this.lecturaViernes);
		if(this.lecturaSabado != null   ) this.lecturas.push(this.lecturaSabado);
	}
}
