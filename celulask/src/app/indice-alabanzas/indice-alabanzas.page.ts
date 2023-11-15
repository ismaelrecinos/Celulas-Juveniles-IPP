import { Component, OnInit } from '@angular/core';
import { IAlabanza } from './IAlabanza';
import { AlabanzaService } from './alabanza.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-indice-alabanzas',
  templateUrl: './indice-alabanzas.page.html',
  styleUrls: ['./indice-alabanzas.page.scss'],
})
export class IndiceAlabanzasPage implements OnInit {
	alabanzas:IAlabanza[] = null;
	alabanzasFiltro:IAlabanza[] = [];

  constructor(public alabanzaService:AlabanzaService, private router: Router) { }

  ngOnInit() {
    this.loadIndice();
  }

  ionViewDidLoad(){
  }

  pushPage(id:string){
    this.router.navigate(['mostrar-alabanza',id]);
    }

  loadIndice(){
      this.alabanzaService.getIndiceAlabanzas()
      .subscribe((alabanzasData) => this.alabanzas = alabanzasData);
  }

  buscarAlabanza(ev) {
    // Reset items back to all of the items
    this.loadIndice();
    this.alabanzasFiltro = [];

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      for (let al of this.alabanzas) {
            if (al.titulo.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
                al.numero.toString().toLowerCase().indexOf(val.toLowerCase()) > -1) {
                  this.alabanzasFiltro.push(al);           
            }
      }
    }
  }
}
