import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICap } from '../indice-biblia/ICap';
import { INumVersiculos } from '../indice-biblia/INumVersiculos';
import { ILibro } from '../indice-biblia/ILibro';
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';
import { BibliaService } from '../indice-biblia/biblia.service';
import { CalendarizacionService } from '../biblia-en-un-anio/calendarizacion.service';
import { ILecturaDiaria } from '../biblia-en-un-anio/ILecturaDiaria';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  libros:ILibro[] = null;
  numVersiculosPorLibro:INumVersiculos[] = null;
  numVersiculosPorCapitulo:string = null;
  versos:ICap[] = null;
  message:string = null;
  file:string = null;
  link:string = null;
  subject:string = null;
  textoBibliaInput:string = null;
  public versiculosList: Array<ICap> = [];
  public lecturas: ILecturaDiaria[] = [];
  listadoLibros = [
                  'Genesis',
                  'Exodo',
                  'Levitico',
                  'Numeros',
                  'Deuteronomio',
                  'Josue',
                  'Jueces',
                  'Rut',
                  '1 Samuel',
                  '2 Samuel',
                  '1 Reyes',
                  '2 Reyes',
                  '1 Cronicas',
                  '2 Cronicas',
                  'Esdras',
                  'Nehemias',
                  'Ester',
                  'Job',
                  'Salmos',
                  'Proverbios',
                  'Eclesiastes',
                  'Cantares',
                  'Isaias',
                  'Jeremias',
                  'Lamentaciones',
                  'Ezequiel',
                  'Daniel',
                  'Oseas',
                  'Joel',
                  'Amos',
                  'Abdias',
                  'Jonas',
                  'Miqueas',
                  'Nahum',
                  'Habacuc',
                  'Sofonias',
                  'Hageo',
                  'Zacarias',
                  'Malaquias',
                  'Mateo',
                  'Marcos',
                  'Lucas',
                  'Juan',
                  'Hechos',
                  'Romanos',
                  '1 Corintios',
                  '2 Corintios',
                  'Galatas',
                  'Efesios',
                  'Filipenses',
                  'Colosenses',
                  '1 Tesalonicenses',
                  '2 Tesalonicenses',
                  '1 Timoteo',
                  '2 Timoteo',
                  'Tito',
                  'Filemon',
                  'Hebreos',
                  'Santiago',
                  '1 Pedro',
                  '2 Pedro',
                  '1 Juan',
                  '2 Juan',
                  '3 Juan',
                  'Judas',
                  'Apocalipsis'];

  public libro;
  public libroTexto;
  public capitulo;
  public versiculo;
  public versiculoTexto;
  biblia = 'Santa Biblia RV1960';

  constructor(private socialSharing: SocialSharing,
              private router: Router,
              private bibliaService: BibliaService,
              private calendarizacionService:CalendarizacionService) { }

  ngOnInit() {
    this.loadIndiceBiblia();
    this.loadNumeroVersiculos();
    this.getDayData(); 
  }

  establecerVersiculo(){
    this.libro = this.getRandomInt(1, 66);
    //this.libro = this.getRandomInt(18, 23);//Job, Salmos, Proverbios, Eclesiastés, Cantares
    //console.log('Libro: '+this.libro);
   
    this.numVersiculosPorCapitulo = this.numVersiculosPorLibro[this.libro-1].numeroVersiculos;
    let palabras = this.numVersiculosPorCapitulo.split(',');
    this.capitulo = this.getRandomInt(1, palabras.length);
    //console.log('Capítulo: '+this.capitulo); 

    this.versiculo = this.getRandomInt(1, palabras[this.capitulo-1]);
    //console.log('Versículo: '+this.versiculo);  

    this.libroTexto = this.listadoLibros[this.libro-1];
    //console.log('Libro: '+this.libroTexto);

    this.bibliaService.getCapitulo(this.libroTexto,this.capitulo,this.biblia)
    .subscribe((versosData) => {
      this.versos = versosData;
      for(let v of this.versos){
        for(let vs of v.versiculos){
          
          let t = vs.split('.');
          if(t[0]==this.versiculo){
            if(this.versiculo >= 10){
              this.versiculoTexto = vs.substring(3,vs.length);
            }else{
              this.versiculoTexto = vs.substring(2,vs.length);
            } 
          }
        }
      }
    });  
  }

  irAIndiceAlabanzas() {
    this.router.navigate(['indice-alabanzas']);
  }

  loadIndiceBiblia(){
      this.bibliaService.getIndiceBiblia()
      .subscribe((bibliaData) => {
        this.libros = bibliaData;
      });
  }

  async getDayData(){
    await this.calendarizacionService.getDayData();
    this.lecturas = this.calendarizacionService.lecturas;
  }

  mostrarDevocional(tit:string, vers:string, cont:string){
    this.router.navigate(['mostrar-devocional',tit, vers, cont]); 
  }

  loadNumeroVersiculos(){
    this.bibliaService.getNumeroVersiculos(this.biblia)
      .subscribe((numVersiculosData) => {
        this.numVersiculosPorLibro = numVersiculosData;

        this.establecerVersiculo();
      });
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  share(versiculo,libro,capitulo,numVersiculo){
   this.message = versiculo;
   this.message += "\n";
   this.message += libro+" "+capitulo+":"+numVersiculo;
   this.socialSharing.share(this.message,this.subject,this.file,this.link)
   .then(()=>{})
   .catch(()=>{}); 
  }

  mostrarCapitulo(lib:string,cap:string){
    this.router.navigate(['mostrar-libro',lib, cap, this.biblia]);
  }

}
