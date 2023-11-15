import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ILibro } from '../indice-biblia/ILibro';
import { ICapitulo } from '../indice-biblia/ICapitulo';
import { ICap } from '../indice-biblia/ICap';
import { BibliaService } from '../indice-biblia/biblia.service';
import { BibleService } from '../bible-indice/bible.service';

@Component({
  selector: 'app-mostrar-libro',
  templateUrl: './mostrar-libro.page.html',
  styleUrls: ['./mostrar-libro.page.scss'],
})
export class MostrarLibroPage implements OnInit {
  public contenido;
  public numCapitulo;
  public libro;
  versos:ICap[] = null;
  verso:ICap = null;
  capitulos:ICapitulo[] = null;
  message:string = null;
  file:string = null;
  link:string = null;
  subject:string = null;
  biblia:string = null;

  constructor(private activatedRoute: ActivatedRoute,
              public bibliaService:BibliaService,
              private router: Router) { }

  ngOnInit() {
    this.libro =this.activatedRoute.snapshot.paramMap.get("lib");
    this.numCapitulo = this.activatedRoute.snapshot.paramMap.get("cap");
    this.biblia = this.activatedRoute.snapshot.paramMap.get("biblia");
    this.loadCapitulo();
    this.loadIndiceCapitulos();
  }

  loadCapitulo(){
    this.bibliaService.getCapitulo(this.libro,this.numCapitulo,this.biblia)
    .subscribe((versosData) => this.versos = versosData);
  }

  loadIndiceCapitulos(){
    this.bibliaService.getIndiceCapitulos(this.libro,this.biblia)
    .subscribe((capitulosData) => this.capitulos = capitulosData);
  }

  onSelectChange(cap: any) {
    this.bibliaService.getCapitulo(cap.detail.value.libro,cap.detail.value.numeroCapitulo,this.biblia)
    .subscribe((versosData) => this.versos = versosData);
  }

  mostrarVersiculo(lib:string,cap:string,versiculo:string){
    this.router.navigate(['mostrar-versiculo',lib, cap, versiculo, this.biblia]);  
  }

  mostrarCapituloAnterior(lib:string,cap:number){
    let capAux = cap-1;
    if(capAux != 0){
      this.bibliaService.getCapitulo(lib,capAux,this.biblia)
      .subscribe((versosData) => this.versos = versosData);
    }
  }

  mostrarCapituloSiguiente(lib:string,cap:number){
    let capAux = cap+1;
    try {
      this.bibliaService.getCapitulo(lib,capAux,this.biblia)
      .subscribe((versosData) => {
        this.versos = versosData;
      });  
    } catch (e) {
      capAux = cap;
      this.bibliaService.getCapitulo(lib,capAux,this.biblia)
      .subscribe((versosData) => {
        this.versos = versosData;
      }); 
    }
  }

}
