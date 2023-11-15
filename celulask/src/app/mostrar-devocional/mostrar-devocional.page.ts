import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-mostrar-devocional',
  templateUrl: './mostrar-devocional.page.html',
  styleUrls: ['./mostrar-devocional.page.scss'],
})
export class MostrarDevocionalPage implements OnInit {
  titulo:string = null;
  versiculo:string = null;
  contenido:string = null;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router){}

  ngOnInit() {
    this.titulo =this.activatedRoute.snapshot.paramMap.get("tit");
    this.versiculo = this.activatedRoute.snapshot.paramMap.get("vers");
    this.contenido = this.activatedRoute.snapshot.paramMap.get("cont");
  }

}
