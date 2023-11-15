"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_home_module_ts"],{

/***/ 2003:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HomePageRoutingModule);



/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 2003);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page */ 2267);







let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomePageRoutingModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_1__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 2267:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var _Users_srecinos_Documents_ionic_Celulas_Juveniles_IPP_ionic_v2_celulask_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.html?ngResource */ 3853);
/* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page.scss?ngResource */ 1020);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _awesome_cordova_plugins_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/social-sharing/ngx */ 1952);
/* harmony import */ var _indice_biblia_biblia_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../indice-biblia/biblia.service */ 3567);
/* harmony import */ var _biblia_en_un_anio_calendarizacion_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../biblia-en-un-anio/calendarizacion.service */ 6743);









let HomePage = class HomePage {
  constructor(socialSharing, router, bibliaService, calendarizacionService) {
    this.socialSharing = socialSharing;
    this.router = router;
    this.bibliaService = bibliaService;
    this.calendarizacionService = calendarizacionService;
    this.libros = null;
    this.numVersiculosPorLibro = null;
    this.numVersiculosPorCapitulo = null;
    this.versos = null;
    this.message = null;
    this.file = null;
    this.link = null;
    this.subject = null;
    this.textoBibliaInput = null;
    this.versiculosList = [];
    this.lecturas = [];
    this.listadoLibros = ['Genesis', 'Exodo', 'Levitico', 'Numeros', 'Deuteronomio', 'Josue', 'Jueces', 'Rut', '1 Samuel', '2 Samuel', '1 Reyes', '2 Reyes', '1 Cronicas', '2 Cronicas', 'Esdras', 'Nehemias', 'Ester', 'Job', 'Salmos', 'Proverbios', 'Eclesiastes', 'Cantares', 'Isaias', 'Jeremias', 'Lamentaciones', 'Ezequiel', 'Daniel', 'Oseas', 'Joel', 'Amos', 'Abdias', 'Jonas', 'Miqueas', 'Nahum', 'Habacuc', 'Sofonias', 'Hageo', 'Zacarias', 'Malaquias', 'Mateo', 'Marcos', 'Lucas', 'Juan', 'Hechos', 'Romanos', '1 Corintios', '2 Corintios', 'Galatas', 'Efesios', 'Filipenses', 'Colosenses', '1 Tesalonicenses', '2 Tesalonicenses', '1 Timoteo', '2 Timoteo', 'Tito', 'Filemon', 'Hebreos', 'Santiago', '1 Pedro', '2 Pedro', '1 Juan', '2 Juan', '3 Juan', 'Judas', 'Apocalipsis'];
    this.biblia = 'Santa Biblia RV1960';
  }

  ngOnInit() {
    this.loadIndiceBiblia();
    this.loadNumeroVersiculos();
    this.getDayData();
  }

  establecerVersiculo() {
    this.libro = this.getRandomInt(1, 66); //this.libro = this.getRandomInt(18, 23);//Job, Salmos, Proverbios, Eclesiastés, Cantares
    //console.log('Libro: '+this.libro);

    this.numVersiculosPorCapitulo = this.numVersiculosPorLibro[this.libro - 1].numeroVersiculos;
    let palabras = this.numVersiculosPorCapitulo.split(',');
    this.capitulo = this.getRandomInt(1, palabras.length); //console.log('Capítulo: '+this.capitulo); 

    this.versiculo = this.getRandomInt(1, palabras[this.capitulo - 1]); //console.log('Versículo: '+this.versiculo);  

    this.libroTexto = this.listadoLibros[this.libro - 1]; //console.log('Libro: '+this.libroTexto);

    this.bibliaService.getCapitulo(this.libroTexto, this.capitulo, this.biblia).subscribe(versosData => {
      this.versos = versosData;

      for (let v of this.versos) {
        for (let vs of v.versiculos) {
          let t = vs.split('.');

          if (t[0] == this.versiculo) {
            if (this.versiculo >= 10) {
              this.versiculoTexto = vs.substring(3, vs.length);
            } else {
              this.versiculoTexto = vs.substring(2, vs.length);
            }
          }
        }
      }
    });
  }

  irAIndiceAlabanzas() {
    this.router.navigate(['indice-alabanzas']);
  }

  loadIndiceBiblia() {
    this.bibliaService.getIndiceBiblia().subscribe(bibliaData => {
      this.libros = bibliaData;
    });
  }

  getDayData() {
    var _this = this;

    return (0,_Users_srecinos_Documents_ionic_Celulas_Juveniles_IPP_ionic_v2_celulask_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.calendarizacionService.getDayData();
      _this.lecturas = _this.calendarizacionService.lecturas;
    })();
  }

  mostrarDevocional(tit, vers, cont) {
    this.router.navigate(['mostrar-devocional', tit, vers, cont]);
  }

  loadNumeroVersiculos() {
    this.bibliaService.getNumeroVersiculos(this.biblia).subscribe(numVersiculosData => {
      this.numVersiculosPorLibro = numVersiculosData;
      this.establecerVersiculo();
    });
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  share(versiculo, libro, capitulo, numVersiculo) {
    this.message = versiculo;
    this.message += "\n";
    this.message += libro + " " + capitulo + ":" + numVersiculo;
    this.socialSharing.share(this.message, this.subject, this.file, this.link).then(() => {}).catch(() => {});
  }

  mostrarCapitulo(lib, cap) {
    this.router.navigate(['mostrar-libro', lib, cap, this.biblia]);
  }

};

HomePage.ctorParameters = () => [{
  type: _awesome_cordova_plugins_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_3__.SocialSharing
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
}, {
  type: _indice_biblia_biblia_service__WEBPACK_IMPORTED_MODULE_4__.BibliaService
}, {
  type: _biblia_en_un_anio_calendarizacion_service__WEBPACK_IMPORTED_MODULE_5__.CalendarizacionService
}];

HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-home',
  template: _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], HomePage);


/***/ }),

/***/ 1020:
/*!************************************************!*\
  !*** ./src/app/home/home.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 3853:
/*!************************************************!*\
  !*** ./src/app/home/home.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title style=\"font-size: x-large;\">Bienvenido(a)</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <div style=\"text-align: center;background-color: #003153;\">\n    <img src=\"assets/img/CelulasJuveniles.png\" \n    style=\"width: 75%;\">\n  </div>\n  <ion-list no-border>\n   <!--ion-item text-wrap style=\"text-align: center;\">\n      <ion-label style=\"font-size: large;font-weight: bold;color: white;\">\n        Células Juveniles IPP San Martín\n      </ion-label>\n    </ion-item>\n    <ion-item text-wrap (click)=\"mostrarCapitulo(libroTexto,capitulo)\">\n      <label style=\"font-size: large;text-align: justify;\">\n        Una célula es un grupo de 4 a 15 personas que se reúnen semanalmente fuera del edificio de la iglesia\n        con el propósito de evangelizar, confraternizar y edificarse, y que están comprometidos con las funciones\n        de la iglesia local.\n      </label>\n    </ion-item-->\n\n    <ion-item style=\"padding-top: 5px;\">\n      <ion-list>\n        <ion-item text-wrap *ngFor=\"let lectura of lecturas\" (click)=\"mostrarDevocional(lectura[0].tituloDevocional, lectura[0].versiculoBaseDevocional, lectura[0].contenidoDevocional)\">\n          <table width=\"100%\" style=\"\">\n            <tr style=\"vertical-align: top;\" width=\"100%\">\n              <td width=\"25%\" \n                  style=\"text-align:center;border-top: 1px solid;border-left: 1px solid;border-right: 1px solid;border-color: #003153;\"\n                  colspan=\"2\">\n                <strong>  \n                  <label style=\"font-size: large;padding-bottom: 10px;font-weight: lighter;color: #003153;\">Devocional Diario</label>\n                </strong>\n              </td>\n            </tr>\n            <tr style=\"vertical-align: top;\" width=\"100%\">\n              <td width=\"25%\" \n                  style=\"text-align:center;border-bottom: 1px solid;border-left: 1px solid;border-color: #003153;padding-bottom: 5px;\">\n                <label style=\"font-size: large;padding-left: 2px;\">\n                  {{lectura[0].nombreDia}} {{lectura[0].dia}} de {{lectura[0].mes}}\n                </label>\n              </td>\n              <td width=\"75%\"\n                  style=\"text-align:center;border-bottom: 1px solid;border-right: 1px solid;border-color: #003153;padding-bottom: 5px;\">\n                <strong>\n                  <label style=\"font-size: large;padding-right: 2px !important;\">{{ lectura[0].lecturaDiaria}}</label>\n                  <br/>\n                </strong>\n                <label style=\"font-size: large;padding-right: 2px !important;\">{{ lectura[0].tituloDevocional}}</label>\n              </td>\n            </tr>\n          </table>\n        </ion-item>\n      </ion-list>\n    </ion-item>\n\n    <ion-item text-wrap style=\"vertical-align: middle;\">\n      <div style=\"text-align:center;width:100%;font-size:medium;font-weight:bold;color: #003153;\">\n        <a style=\"text-decoration: none;\" href=\"https://www.facebook.com/ipp.sanmartin7\" target=\"_blank\">\n          <ion-icon name=\"logo-facebook\"></ion-icon>\n          &nbsp;  \n          IPP San Martín\n        </a>\n      </div>   \n    </ion-item>\n    <ion-item text-wrap (click)=\"mostrarCapitulo(libroTexto,capitulo)\" style=\"padding-top: 15px;\">\n      <label style=\"font-size: large;text-align: center;\">\n        {{versiculoTexto}}\n      </label>\n    </ion-item>\n    <ion-item text-wrap style=\"font-size: large;text-align: center;\">\n      <ion-label>\n      {{libroTexto}} {{capitulo}}:{{versiculo}}\n      </ion-label>\n    </ion-item>\n    <ion-item style=\"text-align: center;font-size: xx-large;\">\n      <table width=\"100%\">\n        <tr width=\"100%\">\n          <td width=\"100%\" (click)=\"establecerVersiculo()\">\n            <ion-icon ios=\"sync\" md=\"sync\" color=\"primary\"></ion-icon>\n          </td>\n          <!--td width=\"50%\" (click)=\"share(versiculoTexto,libroTexto,capitulo,versiculo)\">\n            <ion-icon ios=\"share-social-outline\" md=\"share-social-outline\" color=\"primary\"></ion-icon>\n          </td-->\n        </tr>\n      </table>\n    </ion-item>\n    <ion-item style=\"font-size: large;text-align: center;\">\n      <ion-label>\n        Santa Biblia RV1960\n      </ion-label>\n    </ion-item>\n    <!--ion-item text-wrap>\n      <table width=\"100%\">\n        <tr>\n          <td width=\"65%\" style=\"text-align: right;\"> \n            <input type=\"text\" name=\"textoBibliaInput\" \n                   style=\"width: 99% !important;padding-right: 1px;\" \n                   [(ngModel)]=\"textoBibliaInput\"\n                   placeholder=\"Buscar texto bíblico\">\n          </td>\n          <td  width=\"35%\" style=\"text-align: left;padding-left: 1px;\">\n            <button ion-button full style=\"width: 99% !important;\" \n                    color=\"primary\" (click)=\"buscarTextoBiblia()\">\n              <ion-icon ios=\"ios-search\" md=\"md-search\"></ion-icon>\n              &nbsp;\n              Buscar\n            </button>\n          </td>\n        </tr>\n      </table>\n    </ion-item-->\n  </ion-list>\n</ion-content>\n\n\n";

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map