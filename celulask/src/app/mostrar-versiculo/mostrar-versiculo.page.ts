import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BibliaService } from '../indice-biblia/biblia.service';
import { BibleService } from '../bible-indice/bible.service';
import { ICap } from '../indice-biblia/ICap';
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';

@Component({
  selector: 'app-mostrar-versiculo',
  templateUrl: './mostrar-versiculo.page.html',
  styleUrls: ['./mostrar-versiculo.page.scss'],
})
export class MostrarVersiculoPage implements OnInit {
  public libro:string;
  public capitulo:string;
  public versiculo:string;
  public numVersiculo;
  public biblia:string;
  public textoLecturaAuto:string = "Activar Lectura Automática";
  public lecturaAuto:string = "N";
  public numeroCuentaRegresiva = 10;
  public tracking = null;
  public cuentaRegresiva = null;
  public textoInfo = "El versículo siguiente se mostrará luego de 10 segundos.";
  message:string = null;
  file:string = null;
  link:string = null;
  subject:string = null;
  versos:ICap[] = null;
  versosAux:ICap[] = null;

  constructor(private activatedRoute: ActivatedRoute,
              public bibliaService:BibliaService,
              public bibleService:BibleService,
			  private socialSharing: SocialSharing) { }

  ngOnInit() {		
		this.libro = this.activatedRoute.snapshot.paramMap.get("lib");
		this.capitulo = this.activatedRoute.snapshot.paramMap.get("cap");
		this.versiculo = this.activatedRoute.snapshot.paramMap.get("versiculo");
		this.biblia = this.activatedRoute.snapshot.paramMap.get("biblia");	

    this.obtenerNumVersiculo();
  }
	
	startCuentaRegresivaLoop() {
    this.cuentaRegresiva = setInterval(() => {
        this.numeroCuentaRegresiva--;
        if(this.numeroCuentaRegresiva == 0){
        	this.numeroCuentaRegresiva = 10;
        }
    }, 1000);
	}

	stopCuentaRegresivaLoop() {
	    clearInterval(this.cuentaRegresiva);
	    this.cuentaRegresiva = null;
	    this.numeroCuentaRegresiva = 10;
	}
	
	startTrackingLoop() {
    this.tracking = setInterval(() => {
        this.mostrarVersiculoSiguiente(this.libro,this.capitulo,this.numVersiculo,this.biblia,null);
    }, 10000);
	}

	stopTrackingLoop() {
	    clearInterval(this.tracking);
	    this.tracking = null;
	}

	establecerLecturaAutomatica(){
		if(this.lecturaAuto=="N"){
			this.lecturaAuto="S";
			this.textoLecturaAuto="Desactivar Lectura Automática";
			this.startTrackingLoop();
			this.startCuentaRegresivaLoop();
		}else{
			this.lecturaAuto="N";
			this.textoLecturaAuto="Activar Lectura Automática";
			this.stopTrackingLoop();
			this.stopCuentaRegresivaLoop();
		}
	}

  obtenerNumVersiculo(){
  	let palabras = this.versiculo.split('.');
  	this.numVersiculo = palabras[0];
    
    if(this.numVersiculo >= 10 && this.numVersiculo < 100){
      this.versiculo = this.versiculo.substring(3,this.versiculo.length);
    }else if(this.numVersiculo >= 100){
	  this.versiculo = this.versiculo.substring(4,this.versiculo.length);	
	}else{
      this.versiculo = this.versiculo.substring(2,this.versiculo.length);
    }
  }
  
  mostrarVersiculoAnterior(lib,cap,vers,bibl,versiculoTexto){
	  
	let versAux = +vers;
	versAux = versAux-1;
    if(versAux != 0){
      this.libro = lib;
  	  this.capitulo = cap;
  	  this.versiculo = ""+versAux;
      this.biblia = bibl;
		
	  let hayCoincidencia = false;
		
		if(this.biblia == 'Santa Biblia RV1960'){
			this.bibliaService.getCapitulo(this.libro,this.capitulo,this.biblia)
			.subscribe((versosData) =>{
				this.versos = versosData;
				
				for(let versiculoIter of this.versos[0].versiculos) {
					let palabras = versiculoIter.split('.');
					let numVer = +palabras[0];
						
					if(versAux == numVer){
						hayCoincidencia = true;
						
						if(numVer >= 10 && numVer < 100){
						  this.versiculo = versiculoIter.substring(3,versiculoIter.length);
						}else if(numVer >= 100){
						  this.versiculo = versiculoIter.substring(4,versiculoIter.length);	
						}else{
						  this.versiculo = versiculoIter.substring(2,versiculoIter.length);
						}

						this.numVersiculo = ""+numVer;
						//this.obtenerNumVersiculo();	
					}
				}	
			});
		}else{
			this.bibleService.getCapitulo(this.libro,this.capitulo)
			.subscribe((versosData) =>{
				this.versos = versosData;
				
				for(let versiculoIter of this.versos[0].versiculos) {
					let palabras = versiculoIter.split('.');
					let numVer = +palabras[0];
						
					if(versAux == numVer){
						hayCoincidencia = true;
						
						if(numVer >= 10 && numVer < 100){
						  this.versiculo = versiculoIter.substring(3,versiculoIter.length);
						}else if(numVer >= 100){
						  this.versiculo = versiculoIter.substring(4,versiculoIter.length);	
						}else{
						  this.versiculo = versiculoIter.substring(2,versiculoIter.length);
						}

						this.numVersiculo = ""+numVer;
						//this.obtenerNumVersiculo();	
					}
				}	
			});
		}

		/*if(!hayCoincidencia){
			
			this.libro = lib;
			this.capitulo = cap;
			this.versiculo = "";
			this.versiculo = versiculoTexto;
			this.biblia = bibl;
			
			this.obtenerNumVersiculo();
		}*/	
	}  
  }
  
  mostrarVersiculoSiguiente(lib,cap,vers,bibl,versiculoTexto){
	  
	let versAux = +vers;
	versAux = versAux+1;
    this.libro = lib;
	this.capitulo = cap;
	this.versiculo = ""+versAux;
	this.biblia = bibl;
	
	let hayCoincidencia = false;
	
	if(this.biblia == 'Santa Biblia RV1960'){
		this.bibliaService.getCapitulo(this.libro,this.capitulo,this.biblia)
	    .subscribe((versosData) =>{
			this.versos = versosData;
			
			for(let versiculoIter of this.versos[0].versiculos) {
				let palabras = versiculoIter.split('.');
				let numVer = +palabras[0];
					
				if(versAux == numVer){
					hayCoincidencia = true;
					
					if(numVer >= 10 && numVer < 100){
					  this.versiculo = versiculoIter.substring(3,versiculoIter.length);
					}else if(numVer >= 100){
					  this.versiculo = versiculoIter.substring(4,versiculoIter.length);	
					}else{
					  this.versiculo = versiculoIter.substring(2,versiculoIter.length);
					}

					this.numVersiculo = ""+numVer;	
				}
			}

			if(!hayCoincidencia){
				let capAux = +this.capitulo;
				capAux = capAux+1;
				console.log(capAux);
				this.bibliaService.getCapitulo(this.libro,""+capAux,this.biblia)
			    .subscribe((versosData) =>{
					this.versosAux = versosData;
					
					for(let vIter of this.versosAux[0].versiculos) {
						let pal = vIter.split('.');
						let numV = +pal[0];
							
						if(1 == numV){
							this.versiculo = vIter.substring(2,vIter.length);
							this.numVersiculo = ""+numV;
							this.capitulo = ""+capAux;
						}
					}	
				}); 
			}	
		});

	}else{
		this.bibleService.getCapitulo(this.libro,this.capitulo)
	    .subscribe((versosData) =>{
			this.versos = versosData;
			
			for(let versiculoIter of this.versos[0].versiculos) {
				let palabras = versiculoIter.split('.');
				let numVer = +palabras[0];
					
				if(versAux == numVer){
					hayCoincidencia = true;
					
					if(numVer >= 10 && numVer < 100){
					  this.versiculo = versiculoIter.substring(3,versiculoIter.length);
					}else if(numVer >= 100){
					  this.versiculo = versiculoIter.substring(4,versiculoIter.length);	
					}else{
					  this.versiculo = versiculoIter.substring(2,versiculoIter.length);
					}

					this.numVersiculo = ""+numVer;	
				}
			}



			if(!hayCoincidencia){
				let capAux = +this.capitulo;
				capAux = capAux+1;
				console.log(capAux);
				this.bibleService.getCapitulo(this.libro,""+capAux)
			    .subscribe((versosData) =>{
					this.versosAux = versosData;
					
					for(let vIter of this.versosAux[0].versiculos) {
						let pal = vIter.split('.');
						let numV = +pal[0];
							
						if(1 == numV){
							this.versiculo = vIter.substring(2,vIter.length);
							this.numVersiculo = ""+numV;
							this.capitulo = ""+capAux;
						}
					}	
				}); 
			}	
		});
	}
  }

  share(versiculo,libro,capitulo,numVersiculo){
	  
   this.message = versiculo;
   this.message += "\n";
   this.message += libro+" "+capitulo+":"+numVersiculo;
   this.socialSharing.share(this.message,this.subject,this.file,this.link)
   .then(()=>{})
   .catch(()=>{}); 
  }

}
