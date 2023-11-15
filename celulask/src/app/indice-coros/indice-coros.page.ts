import { Component, OnInit } from '@angular/core';
import { ICoro } from './Icoro';
import { CorosService } from './coros.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-indice-coros',
  templateUrl: './indice-coros.page.html',
  styleUrls: ['./indice-coros.page.scss'],
})
export class IndiceCorosPage implements OnInit {
  coros:ICoro[] = null;

  constructor(public corosService:CorosService, private router: Router) { }

  ngOnInit() {
    this.loadIndice();
  }
  
  pushPage(id:number){
  	this.router.navigate(['mostrar-coros',id]);
  }

  loadIndice(){
      this.corosService.getIndiceCoros()
      .subscribe((corosData) => {
        console.log();
        return (this.coros = corosData)
      });
  }

}
