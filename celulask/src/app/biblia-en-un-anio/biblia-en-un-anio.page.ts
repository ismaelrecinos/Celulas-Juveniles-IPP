import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CalendarizacionService } from '../biblia-en-un-anio/calendarizacion.service';
import { ILecturaDiaria } from '../biblia-en-un-anio/ILecturaDiaria';

@Component({
  selector: 'app-biblia-en-un-anio',
  templateUrl: './biblia-en-un-anio.page.html',
  styleUrls: ['./biblia-en-un-anio.page.scss'],
})
export class BibliaEnUnAnioPage implements OnInit {
  public lecturas: ILecturaDiaria[] = [];
  
  currentDay: number = null;
  currentMonth: number = null;
  currentYear: number = null;

  constructor(public calendarizacionService:CalendarizacionService, private router: Router) { 
  }

  ngOnInit() {
    this.loadWeekData();
  }

  pushPage(tit:string, vers:string, cont:string){
    this.router.navigate(['mostrar-devocional',tit, vers, cont]); 
  }

  async loadWeekData(){
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();

    this.currentDay = parseInt(dd);
    this.currentMonth = parseInt(mm);
    this.currentYear = yyyy;

    await this.calendarizacionService.getWeekData(null);
    this.calendarizacionService.ordenar();
    this.lecturas = this.calendarizacionService.lecturas;
  }

  async loadPreviousWeekData(){
    await this.calendarizacionService.getNextOrPreviousWeekData(0, this.lecturas[0][0].dia, this.lecturas[0][0].numeroMes, this.lecturas[0][0].numeroAnio);  
    this.calendarizacionService.ordenar();
    this.lecturas = this.calendarizacionService.lecturas;
  }

  async loadNextWeekData(){
    await this.calendarizacionService.getNextOrPreviousWeekData(1, this.lecturas[0][0].dia, this.lecturas[0][0].numeroMes, this.lecturas[0][0].numeroAnio);  
    this.calendarizacionService.ordenar();
    this.lecturas = this.calendarizacionService.lecturas;
  }

  burbuja() {
      var n, i, k, aux;
      n = this.lecturas.length;
      console.log(`n: ${n}`);
      // Algoritmo de burbuja
      for (k = 1; k < n; k++) {
          for (i = 0; i < (n - k); i++) {
              if (this.lecturas[i][0].numeroDiaSemana > this.lecturas[i+1][0].numeroDiaSemana) {
                  aux = this.lecturas[i];
                  this.lecturas[i] = this.lecturas[i + 1];
                  this.lecturas[i+1] = aux;
              }
          }
      }
  }

}
