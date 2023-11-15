"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_mostrar-dinamica_mostrar-dinamica_module_ts"],{

/***/ 6038:
/*!*********************************************************************!*\
  !*** ./src/app/mostrar-dinamica/mostrar-dinamica-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MostrarDinamicaPageRoutingModule": () => (/* binding */ MostrarDinamicaPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _mostrar_dinamica_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mostrar-dinamica.page */ 6938);




const routes = [
    {
        path: '',
        component: _mostrar_dinamica_page__WEBPACK_IMPORTED_MODULE_0__.MostrarDinamicaPage
    }
];
let MostrarDinamicaPageRoutingModule = class MostrarDinamicaPageRoutingModule {
};
MostrarDinamicaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MostrarDinamicaPageRoutingModule);



/***/ }),

/***/ 4829:
/*!*************************************************************!*\
  !*** ./src/app/mostrar-dinamica/mostrar-dinamica.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MostrarDinamicaPageModule": () => (/* binding */ MostrarDinamicaPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _mostrar_dinamica_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mostrar-dinamica-routing.module */ 6038);
/* harmony import */ var _mostrar_dinamica_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mostrar-dinamica.page */ 6938);







let MostrarDinamicaPageModule = class MostrarDinamicaPageModule {
};
MostrarDinamicaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _mostrar_dinamica_routing_module__WEBPACK_IMPORTED_MODULE_0__.MostrarDinamicaPageRoutingModule
        ],
        declarations: [_mostrar_dinamica_page__WEBPACK_IMPORTED_MODULE_1__.MostrarDinamicaPage]
    })
], MostrarDinamicaPageModule);



/***/ }),

/***/ 6938:
/*!***********************************************************!*\
  !*** ./src/app/mostrar-dinamica/mostrar-dinamica.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MostrarDinamicaPage": () => (/* binding */ MostrarDinamicaPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _mostrar_dinamica_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mostrar-dinamica.page.html?ngResource */ 6271);
/* harmony import */ var _mostrar_dinamica_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mostrar-dinamica.page.scss?ngResource */ 7052);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);





let MostrarDinamicaPage = class MostrarDinamicaPage {
    constructor(activatedRoute) {
        this.activatedRoute = activatedRoute;
        this.paginas = [
            {
                html: `
		<div>
  <ion-list>                                                         
     <ion-item>                                                       
       <table class="tituloDinamica">
        <tr style="width:100%;">
          <td style="width:100%;padding-top: 10px;padding-bottom: 10px;">
            <br>
              CORONEMOS AL REY
            <br>  
          </td>
        </tr>
      </table>                                                       
     </ion-item>                                                      
    <ion-item text-wrap>
    <div class='contenidoDimanica'>
      <label class='subTituloDinamica'>Materiales: </label>Una pizarra, coronas de papel
    <br/><br/>
      <label class='subTituloDinamica'>Participantes: </label>Ilimitado
    <br/><br/>
      <label class='subTituloDinamica'>Desarrollo: </label>Dibuja en una pizarra unas gradas o escaleras que lleguen hasta un trono, donde está un rey 
	  sin corona. Divide al grupo en 4 equipos como de 10 participantes, asigna a cada grupo un color 
	  para diferenciarlos. Prepara de antemano unas coronas (se hacen con una cinta de regalo de las 
	  gruesas o con un papel de color) para dar a cada grupo una corona de acuerdo a su color. 
	  Realiza una pregunta sobre la Biblia, el grupo que la conteste va a colocar su corona en el 
	  primer escalón de la escalera que dibujaste, continúa haciendo más preguntas hasta que uno de 
	  los grupos llegue a coronar al Rey. Las coronas se van colocando en los escalones dibujados, 
	  pegándolas con cinta adhesiva que sea fácil de despegar, para que cuando el grupo conteste otra 
	  pregunta, se puedan despegar y pegar fácilmente.
    </div>
    </ion-item>

  </ion-list>
</div>
  		`
            },
            {
                html: `
		<div>
  <ion-list>                                                         
     <ion-item>                                                       
       <table class="tituloDinamica">
        <tr style="width:100%;">
          <td>
            <br>
            <label>
              EL REY DE LOS ELEMENTOS
            </label>
            <br>
          </td>
        </tr>
      </table>                                                       
     </ion-item>
	<ion-item text-wrap>
  <div class='contenidoDimanica'>
      <label class='subTituloDinamica'>Materiales: </label>Una pelota de cualquier tipo
    <br/><br/>
      <label class='subTituloDinamica'>Participantes: </label>Ilimitado
    <br/><br/>
      <label class='subTituloDinamica'>Desarrollo: </label>Se forma un circulo con todos los participantes, el animador tendrá la pelota y se la pasara a 
	  cualquiera, cuando la tire debe mencionar un elemento (Aire, Agua o Tierra) el que atrape 
	  la pelota debe mencionar un animal que pertenezca al elemento que mencionaron ejemplo
	  (Agua: tiburón) y pasársela a otro diciendo un elemento antes que la atrape el otro participante, 
	  no se vale repetir animales y debe responderse rápido, los que pierden van saliendo hasta elegir 
	  al ganador.
    </div>
    </ion-item>

  </ion-list>
</div>
  		`
            },
            {
                html: `
		<div>
  <ion-list>                                                         
     <ion-item>                                                       
       <table class="tituloDinamica">
        <tr style="width:100%;">
          <td>
          <br>
            <label>
              ME PICA
            </label>
          <br>
          </td>
        </tr>
      </table>                                                       
     </ion-item>
	<ion-item text-wrap>
  <div class='contenidoDimanica'>
      <label class='subTituloDinamica'>Materiales: </label>Ninguno
    <br/><br/>
      <label class='subTituloDinamica'>Participantes: </label>Ilimitado
    <br/><br/>
      <label class='subTituloDinamica'>Desarrollo: </label>Cada persona tiene que decir su nombre y 
	  a continuación un lugar donde le pica: 'Soy Juan y me pica la boca'. A continuación el siguiente 
	  tiene que decir cómo se llamaba al anterior, y decir dónde le picaba. Él también dice su nombre y 
	  donde le pica y así sucesivamente hasta la última persona. El último tiene que decir desde el 
	  primero, los nombres de cada persona y dónde les picaba..
    </div>
    </ion-item>

  </ion-list>
</div>
  		`
            },
            {
                html: `
		<div>
  <ion-list>
     <ion-item>
       <table class="tituloDinamica">
        <tr style="width:100%;">
          <td>
            <br>
            <label>
              EL NÁUFRAGO
            </label>
            <br>
          </td>
        </tr>
      </table> 
     </ion-item>
    <ion-item text-wrap>
    <div class='contenidoDimanica'>
      <label class='subTituloDinamica'>Materiales: </label>Papel periódico
      <br/><br/>
      <label class='subTituloDinamica'>Participantes: </label>Grupos grandes
	  <br/><br/>
      <label class='subTituloDinamica'>Desarrollo: </label>La dinámica consiste en formar grupos de dos 
	  o tres y repartirles un pedazo de papel periódico que los utilice como bote salvavidas en donde 
	  ninguna persona debe quedar fuera, todos deben salvarse. Se cuenta la historia “iba una vez 
	  un barco que cruzo con una tempestad y se formaron botes salvavidas les da unos segundos para 
	  subirse al bote, de los que sobrevivieron ¿? se dice el número de los que hicieron bien el bote”, 
	  se continua la dinámica doblando el papel por la mitad y así sucesivamente haciendo el papel más 
	  pequeño hasta encontrar el bote ganador. Al término se comparte la experiencia de salvarse de 
	  naufragar.
    </div>
    </ion-item>

  </ion-list>
</div>

  		`
            },
            {
                html: `
		<div>
  <ion-list>
     <ion-item>
       <table class="tituloDinamica">
        <tr style="width:100%;">
          <td>
            <br>
            <label>
              ENTRELAZADOS
            </label>
            <br>
          </td>
        </tr>
      </table>
     </ion-item>
    <ion-item text-wrap>
    <div class='contenidoDimanica'>
      <label class='subTituloDinamica'>Materiales: </label>Ninguno
	  <br/>	<br/>
      <label class='subTituloDinamica'>Participantes: </label>Grupos grandes
	  <br/>	<br/>
      <label class='subTituloDinamica'>Desarrollo: </label>Todos los participantes se dividen en parejas 
	  y se sientan en el suelo espalda con espalda y entrelazan los brazos, a la orden del animador intentan 
	  levantarse los dos al mismo tiempo sin soltarse. Una vez arriba, buscan otra pareja que se haya 
	  levantado y realizan el mismo ejercicio entre los cuatro, luego entre ocho y así hasta que todos 
	  estén de espaldas y con los brazos entrelazados y todos se puedan levantar.
    </div>
    </ion-item>

  </ion-list>
</div>

  		`
            },
            {
                html: `
		<div>
  <ion-list>
     <ion-item>
       <table class="tituloDinamica">
        <tr style="width:100%;">
          <td>
            <br>
            <label>
              SOLO NO PUEDES
            </label>
            <br>
          </td>
        </tr>
      </table>
     </ion-item>
    <ion-item text-wrap>
    <div class='contenidoDimanica'>
      <label class='subTituloDinamica'>Materiales: </label>Cinta adhesiva
	  <br/>	<br/>
      <label class='subTituloDinamica'>Participantes: </label>Ilimitado
	  <br/>	<br/>
      <label class='subTituloDinamica'>Desarrollo: </label>Esta dinámica trata de lo imposible que es 
	  deshacerte del pecado de tu vida por ti mismo. Lo que se aprende es que sólo con la ayuda de 
	  Jesucristo se puede hacer. Comienza dando un pedazo de cinta adhesiva o pegamento a cada uno 
	  de los jóvenes asegúrate de que todos tengan un pedazo. Luego anuncia que van a realizar un 
	  concurso, pídeles que tomen la cinta adhesiva y que se la peguen en la parte de atrás de la mano 
	  izquierda asegúrate que todos lo hagan bien. Una vez que todos lo hagan explica que el concurso 
	  va a dar inicio y que no se vale hacer trampa. Se trata de ver quien puede quitarse la cinta de 
	  la mano izquierda usando nada más que la propia mano izquierda. Al percatarse que nadie puede, 
	  explícales que así es el pecado en la vida del hombre. Luego pídeles que con la mano derecha 
	  remuevan la cinta. Explícales nuevamente que la mano derecha representa a Jesús que viene a 
	  ayudarnos y limpiarnos si nosotros se lo pedimos. La mano izquierda = el hombre, la cinta = el 
	  pecado, la mano derecha = Jesucristo, el remover la cinta = la libertad.
    </div>
    </ion-item>

  </ion-list>
</div>

  		`
            },
            {
                html: `
		<div>
  <ion-list>
     <ion-item>
       <table class="tituloDinamica">
        <tr style="width:100%;">
          <td>
            <br> 
            <label>
              RUEDA DE NOMBRES
            </label>
            <br>
          </td>
        </tr>
      </table>
     </ion-item>
    <ion-item text-wrap>
    <div class='contenidoDimanica'>
      <label class='subTituloDinamica'>Materiales: </label>Ninguno
	  <br/>	<br/>
      <label class='subTituloDinamica'>Participantes: </label>Más de 10
	  <br/><br/>
      <label class='subTituloDinamica'>Desarrollo: </label>Se hace un círculo entre todos los participantes. 
	  Comienza uno diciendo su nombre. El de su izquierda dice el nombre del anterior y el suyo, y así sucesivamente 
	  hasta el último, que deberá repetir todos los nombres. Se pueden meter varias variantes, tales como 
	  decir tu nombre y el de una fruta que empiece por la misma letra, decir tu nombre y algo que te gusta 
	  o disgusta, etc.	
	  </div>
    </ion-item>

  </ion-list>
</div>

  		`
            },
            {
                html: `
		<div>
  <ion-list>
     <ion-item>
       <table class="tituloDinamica">
        <tr style="width:100%;">
          <td>
            <br>
            <label>
              RASGOS EN COMÚN
            </label>
            <br>
          </td>
        </tr>
      </table>
     </ion-item>
    <ion-item text-wrap>
    <div class='contenidoDimanica'>
      <label class='subTituloDinamica'>Materiales: </label>Ninguno
	    <br/><br/>
      <label class='subTituloDinamica'>Participantes: </label>Más de 10
	    <br/><br/>
      <label class='subTituloDinamica'>Desarrollo: </label>Se divide el grupo por parejas. 
	    Cada pareja debe sacar el mayor número de similitudes que hay entre ellos, como color de pelo, 
	    ropa, aficiones, familia, etc. gana la pareja que mayor parecido tenga.
    </div>  
    </ion-item>

  </ion-list>
</div>

  		`
            }
        ];
    }
    ngOnInit() {
        this.numeroDinamica = this.activatedRoute.snapshot.paramMap.get("id");
        this.numDinamica = this.numeroDinamica;
        this.numeroDinamica++;
        if (this.numeroDinamica < 9) {
            this.contenido = this.paginas[this.numDinamica].html;
        }
        else {
            this.contenido = "<ion-list>";
            this.contenido += "<ion-item>";
            this.contenido += "<div>";
            this.contenido += "<img src='assets/img/dinamicas/dinamica" + this.numeroDinamica + "-a.gif'";
            this.contenido += "	style='width: 100%;' >";
            this.contenido += "</div>";
            this.contenido += "</ion-item>";
            if (this.numeroDinamica != 13 &&
                this.numeroDinamica != 16 &&
                this.numeroDinamica != 17 &&
                this.numeroDinamica != 18 &&
                this.numeroDinamica != 19 &&
                this.numeroDinamica != 20 &&
                this.numeroDinamica != 21 &&
                this.numeroDinamica != 23 &&
                this.numeroDinamica != 26 &&
                this.numeroDinamica != 27 &&
                this.numeroDinamica != 28 &&
                this.numeroDinamica != 29 &&
                this.numeroDinamica != 30) {
                this.contenido += "<ion-item>";
                this.contenido += "<div>";
                this.contenido += "<img src='assets/img/dinamicas/dinamica" + this.numeroDinamica + "-b.gif'";
                this.contenido += "	style='width: 100%;' >";
                this.contenido += "</div>";
                this.contenido += "</ion-item>";
            }
            this.contenido += "</ion-list>";
        }
    }
};
MostrarDinamicaPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute }
];
MostrarDinamicaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-mostrar-dinamica',
        template: _mostrar_dinamica_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_mostrar_dinamica_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MostrarDinamicaPage);



/***/ }),

/***/ 7052:
/*!************************************************************************!*\
  !*** ./src/app/mostrar-dinamica/mostrar-dinamica.page.scss?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = ".tituloDinamica {\n  font-size: large;\n  text-align: center;\n  font-weight: bold;\n  width: 100%;\n}\n\n.subTituloDinamica {\n  font-weight: bold;\n}\n\n.contenidoDimanica {\n  text-align: justify;\n  padding-top: 10px;\n  padding-left: 10px;\n  padding-right: 10px;\n  padding-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vc3RyYXItZGluYW1pY2EucGFnZS5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vQ2VsdWxhcyUyMEp1dmVuaWxlcyUyMElQUC9pb25pYyUyMHYyL2NlbHVsYXNrL3NyYy9hcHAvbW9zdHJhci1kaW5hbWljYS9tb3N0cmFyLWRpbmFtaWNhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FDQ0oiLCJmaWxlIjoibW9zdHJhci1kaW5hbWljYS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0dWxvRGluYW1pY2F7XG4gICAgZm9udC1zaXplOiBsYXJnZTtcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB3aWR0aDoxMDAlO1xufVxuXG4uc3ViVGl0dWxvRGluYW1pY2F7XG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcbn1cblxuLmNvbnRlbmlkb0RpbWFuaWNhe1xuICAgIHRleHQtYWxpZ246anVzdGlmeTtcbiAgICBwYWRkaW5nLXRvcDoxMHB4O1xuICAgIHBhZGRpbmctbGVmdDoxMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6MTBweDtcbiAgICBwYWRkaW5nLWJvdHRvbToxMHB4O1xufSIsIi50aXR1bG9EaW5hbWljYSB7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uc3ViVGl0dWxvRGluYW1pY2Ege1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNvbnRlbmlkb0RpbWFuaWNhIHtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59Il19 */";

/***/ }),

/***/ 6271:
/*!************************************************************************!*\
  !*** ./src/app/mostrar-dinamica/mostrar-dinamica.page.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title style=\"text-align: center;\" style=\"font-size: large;\">\n      Dinámica {{numeroDinamica}} \n    </ion-title>\n  </ion-toolbar>\n</ion-header>                                                 \n                                                                     \n<ion-content class=\"page-mostrarDinamica\">\n<div style=\"font-size: large;text-align: justify;\" *ngIf=\"contenido\" [innerHTML]=\"contenido\"></div>\t\t                                                                    \n</ion-content>                                                       \n\n";

/***/ })

}]);
//# sourceMappingURL=src_app_mostrar-dinamica_mostrar-dinamica_module_ts.js.map