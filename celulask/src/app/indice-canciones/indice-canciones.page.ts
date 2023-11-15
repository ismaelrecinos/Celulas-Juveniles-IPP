import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICancion } from './ICancion';
import { CancionesService } from './canciones.service';

@Component({
  selector: 'app-indice-canciones',
  templateUrl: './indice-canciones.page.html',
  styleUrls: ['./indice-canciones.page.scss'],
})
export class IndiceCancionesPage implements OnInit {
  canciones:ICancion[] = null;

  constructor(public cancionesService:CancionesService, private router: Router) { }

  ngOnInit() {
    this.loadIndice();
  }

  pushPage(id:number){
  	if(id != 0){
      this.router.navigate(['mostrar-cancion',id]);
    }	
  }

  loadIndice(){
      this.cancionesService.getIndiceCanciones()
      .subscribe((cancionesData) => this.canciones = cancionesData);
  }

}
