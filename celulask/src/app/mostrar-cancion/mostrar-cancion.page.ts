import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICancion } from '../indice-canciones/ICancion';
import { CancionesService } from '../indice-canciones/canciones.service';
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';

@Component({
  selector: 'app-mostrar-cancion',
  templateUrl: './mostrar-cancion.page.html',
  styleUrls: ['./mostrar-cancion.page.scss'],
})
export class MostrarCancionPage implements OnInit {
  public contenido;
  public numCancion;
  canciones:ICancion[] = null;
  cancion:ICancion = null;
  message:string = null;
  file:string = null;
  link:string = null;
  subject:string = null;

  constructor(private activatedRoute: ActivatedRoute,
              public cancionesService:CancionesService,
              private socialSharing: SocialSharing) { }

  ngOnInit() {
    this.numCancion = this.activatedRoute.snapshot.paramMap.get("id");
    this.loadCanciones();
  }

  loadCanciones(){
    this.cancionesService.getCancion(this.numCancion)
    .subscribe((cancionesData) => this.canciones = cancionesData);
  }

  share(ca){
   this.message = ""+ca.numero+" "+ca.titulo;
   this.message += "\n\n";
   for (let verso of ca.versos) {
        if(verso != "♪"){
          this.message += verso+"\n";
        }else{
          this.message += "\n";
        }
   }
   this.socialSharing.share(this.message,this.subject,this.file,this.link)
   .then(()=>{

    })
   .catch(()=>{

    }); 
  }

}
