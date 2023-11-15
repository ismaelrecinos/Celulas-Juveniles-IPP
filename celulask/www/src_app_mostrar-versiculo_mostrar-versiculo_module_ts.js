"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_mostrar-versiculo_mostrar-versiculo_module_ts"],{

/***/ 3243:
/*!***********************************************************************!*\
  !*** ./src/app/mostrar-versiculo/mostrar-versiculo-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MostrarVersiculoPageRoutingModule": () => (/* binding */ MostrarVersiculoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _mostrar_versiculo_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mostrar-versiculo.page */ 327);




const routes = [
    {
        path: '',
        component: _mostrar_versiculo_page__WEBPACK_IMPORTED_MODULE_0__.MostrarVersiculoPage
    }
];
let MostrarVersiculoPageRoutingModule = class MostrarVersiculoPageRoutingModule {
};
MostrarVersiculoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MostrarVersiculoPageRoutingModule);



/***/ }),

/***/ 9918:
/*!***************************************************************!*\
  !*** ./src/app/mostrar-versiculo/mostrar-versiculo.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MostrarVersiculoPageModule": () => (/* binding */ MostrarVersiculoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _mostrar_versiculo_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mostrar-versiculo-routing.module */ 3243);
/* harmony import */ var _mostrar_versiculo_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mostrar-versiculo.page */ 327);







let MostrarVersiculoPageModule = class MostrarVersiculoPageModule {
};
MostrarVersiculoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _mostrar_versiculo_routing_module__WEBPACK_IMPORTED_MODULE_0__.MostrarVersiculoPageRoutingModule
        ],
        declarations: [_mostrar_versiculo_page__WEBPACK_IMPORTED_MODULE_1__.MostrarVersiculoPage]
    })
], MostrarVersiculoPageModule);



/***/ }),

/***/ 327:
/*!*************************************************************!*\
  !*** ./src/app/mostrar-versiculo/mostrar-versiculo.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MostrarVersiculoPage": () => (/* binding */ MostrarVersiculoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _mostrar_versiculo_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mostrar-versiculo.page.html?ngResource */ 3457);
/* harmony import */ var _mostrar_versiculo_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mostrar-versiculo.page.scss?ngResource */ 264);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _indice_biblia_biblia_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../indice-biblia/biblia.service */ 3567);
/* harmony import */ var _bible_indice_bible_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../bible-indice/bible.service */ 2685);
/* harmony import */ var _awesome_cordova_plugins_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @awesome-cordova-plugins/social-sharing/ngx */ 1952);








let MostrarVersiculoPage = class MostrarVersiculoPage {
    constructor(activatedRoute, bibliaService, bibleService, socialSharing) {
        this.activatedRoute = activatedRoute;
        this.bibliaService = bibliaService;
        this.bibleService = bibleService;
        this.socialSharing = socialSharing;
        this.textoLecturaAuto = "Activar Lectura Automática";
        this.lecturaAuto = "N";
        this.numeroCuentaRegresiva = 10;
        this.tracking = null;
        this.cuentaRegresiva = null;
        this.textoInfo = "El versículo siguiente se mostrará luego de 10 segundos.";
        this.message = null;
        this.file = null;
        this.link = null;
        this.subject = null;
        this.versos = null;
        this.versosAux = null;
    }
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
            if (this.numeroCuentaRegresiva == 0) {
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
            this.mostrarVersiculoSiguiente(this.libro, this.capitulo, this.numVersiculo, this.biblia, null);
        }, 10000);
    }
    stopTrackingLoop() {
        clearInterval(this.tracking);
        this.tracking = null;
    }
    establecerLecturaAutomatica() {
        if (this.lecturaAuto == "N") {
            this.lecturaAuto = "S";
            this.textoLecturaAuto = "Desactivar Lectura Automática";
            this.startTrackingLoop();
            this.startCuentaRegresivaLoop();
        }
        else {
            this.lecturaAuto = "N";
            this.textoLecturaAuto = "Activar Lectura Automática";
            this.stopTrackingLoop();
            this.stopCuentaRegresivaLoop();
        }
    }
    obtenerNumVersiculo() {
        let palabras = this.versiculo.split('.');
        this.numVersiculo = palabras[0];
        if (this.numVersiculo >= 10 && this.numVersiculo < 100) {
            this.versiculo = this.versiculo.substring(3, this.versiculo.length);
        }
        else if (this.numVersiculo >= 100) {
            this.versiculo = this.versiculo.substring(4, this.versiculo.length);
        }
        else {
            this.versiculo = this.versiculo.substring(2, this.versiculo.length);
        }
    }
    mostrarVersiculoAnterior(lib, cap, vers, bibl, versiculoTexto) {
        let versAux = +vers;
        versAux = versAux - 1;
        if (versAux != 0) {
            this.libro = lib;
            this.capitulo = cap;
            this.versiculo = "" + versAux;
            this.biblia = bibl;
            let hayCoincidencia = false;
            if (this.biblia == 'Santa Biblia RV1960') {
                this.bibliaService.getCapitulo(this.libro, this.capitulo, this.biblia)
                    .subscribe((versosData) => {
                    this.versos = versosData;
                    for (let versiculoIter of this.versos[0].versiculos) {
                        let palabras = versiculoIter.split('.');
                        let numVer = +palabras[0];
                        if (versAux == numVer) {
                            hayCoincidencia = true;
                            if (numVer >= 10 && numVer < 100) {
                                this.versiculo = versiculoIter.substring(3, versiculoIter.length);
                            }
                            else if (numVer >= 100) {
                                this.versiculo = versiculoIter.substring(4, versiculoIter.length);
                            }
                            else {
                                this.versiculo = versiculoIter.substring(2, versiculoIter.length);
                            }
                            this.numVersiculo = "" + numVer;
                            //this.obtenerNumVersiculo();	
                        }
                    }
                });
            }
            else {
                this.bibleService.getCapitulo(this.libro, this.capitulo)
                    .subscribe((versosData) => {
                    this.versos = versosData;
                    for (let versiculoIter of this.versos[0].versiculos) {
                        let palabras = versiculoIter.split('.');
                        let numVer = +palabras[0];
                        if (versAux == numVer) {
                            hayCoincidencia = true;
                            if (numVer >= 10 && numVer < 100) {
                                this.versiculo = versiculoIter.substring(3, versiculoIter.length);
                            }
                            else if (numVer >= 100) {
                                this.versiculo = versiculoIter.substring(4, versiculoIter.length);
                            }
                            else {
                                this.versiculo = versiculoIter.substring(2, versiculoIter.length);
                            }
                            this.numVersiculo = "" + numVer;
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
    mostrarVersiculoSiguiente(lib, cap, vers, bibl, versiculoTexto) {
        let versAux = +vers;
        versAux = versAux + 1;
        this.libro = lib;
        this.capitulo = cap;
        this.versiculo = "" + versAux;
        this.biblia = bibl;
        let hayCoincidencia = false;
        if (this.biblia == 'Santa Biblia RV1960') {
            this.bibliaService.getCapitulo(this.libro, this.capitulo, this.biblia)
                .subscribe((versosData) => {
                this.versos = versosData;
                for (let versiculoIter of this.versos[0].versiculos) {
                    let palabras = versiculoIter.split('.');
                    let numVer = +palabras[0];
                    if (versAux == numVer) {
                        hayCoincidencia = true;
                        if (numVer >= 10 && numVer < 100) {
                            this.versiculo = versiculoIter.substring(3, versiculoIter.length);
                        }
                        else if (numVer >= 100) {
                            this.versiculo = versiculoIter.substring(4, versiculoIter.length);
                        }
                        else {
                            this.versiculo = versiculoIter.substring(2, versiculoIter.length);
                        }
                        this.numVersiculo = "" + numVer;
                    }
                }
                if (!hayCoincidencia) {
                    let capAux = +this.capitulo;
                    capAux = capAux + 1;
                    console.log(capAux);
                    this.bibliaService.getCapitulo(this.libro, "" + capAux, this.biblia)
                        .subscribe((versosData) => {
                        this.versosAux = versosData;
                        for (let vIter of this.versosAux[0].versiculos) {
                            let pal = vIter.split('.');
                            let numV = +pal[0];
                            if (1 == numV) {
                                this.versiculo = vIter.substring(2, vIter.length);
                                this.numVersiculo = "" + numV;
                                this.capitulo = "" + capAux;
                            }
                        }
                    });
                }
            });
        }
        else {
            this.bibleService.getCapitulo(this.libro, this.capitulo)
                .subscribe((versosData) => {
                this.versos = versosData;
                for (let versiculoIter of this.versos[0].versiculos) {
                    let palabras = versiculoIter.split('.');
                    let numVer = +palabras[0];
                    if (versAux == numVer) {
                        hayCoincidencia = true;
                        if (numVer >= 10 && numVer < 100) {
                            this.versiculo = versiculoIter.substring(3, versiculoIter.length);
                        }
                        else if (numVer >= 100) {
                            this.versiculo = versiculoIter.substring(4, versiculoIter.length);
                        }
                        else {
                            this.versiculo = versiculoIter.substring(2, versiculoIter.length);
                        }
                        this.numVersiculo = "" + numVer;
                    }
                }
                if (!hayCoincidencia) {
                    let capAux = +this.capitulo;
                    capAux = capAux + 1;
                    console.log(capAux);
                    this.bibleService.getCapitulo(this.libro, "" + capAux)
                        .subscribe((versosData) => {
                        this.versosAux = versosData;
                        for (let vIter of this.versosAux[0].versiculos) {
                            let pal = vIter.split('.');
                            let numV = +pal[0];
                            if (1 == numV) {
                                this.versiculo = vIter.substring(2, vIter.length);
                                this.numVersiculo = "" + numV;
                                this.capitulo = "" + capAux;
                            }
                        }
                    });
                }
            });
        }
    }
    share(versiculo, libro, capitulo, numVersiculo) {
        this.message = versiculo;
        this.message += "\n";
        this.message += libro + " " + capitulo + ":" + numVersiculo;
        this.socialSharing.share(this.message, this.subject, this.file, this.link)
            .then(() => { })
            .catch(() => { });
    }
};
MostrarVersiculoPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _indice_biblia_biblia_service__WEBPACK_IMPORTED_MODULE_2__.BibliaService },
    { type: _bible_indice_bible_service__WEBPACK_IMPORTED_MODULE_3__.BibleService },
    { type: _awesome_cordova_plugins_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_4__.SocialSharing }
];
MostrarVersiculoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-mostrar-versiculo',
        template: _mostrar_versiculo_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_mostrar_versiculo_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MostrarVersiculoPage);



/***/ }),

/***/ 264:
/*!**************************************************************************!*\
  !*** ./src/app/mostrar-versiculo/mostrar-versiculo.page.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb3N0cmFyLXZlcnNpY3Vsby5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 3457:
/*!**************************************************************************!*\
  !*** ./src/app/mostrar-versiculo/mostrar-versiculo.page.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title style=\"font-size: large;\">\n      {{biblia}}\n     </ion-title> \n  </ion-toolbar>\n</ion-header>\n                                                                       \n <ion-content class=\"background\"> \n    <ion-list no-lines class=\"contenido\">                                                 \n     <ion-item text-wrap style=\"text-align: justify !important;\"  class=\"contenido\">\n       <label style=\"font-size: xx-large;\">{{ versiculo }}</label> \n     </ion-item>                                                      \n     <ion-item text-wrap  class=\"contenido\">\n       <label style=\"font-size: xx-large;text-align: justify;\">{{libro}} {{capitulo}}:{{numVersiculo}}</label> \n     </ion-item>\n    </ion-list>\n </ion-content>\n \n <ion-footer>\n  <ion-toolbar color=\"light\">\n     <table width=\"100%\" style=\"text-align: center;\">\n       <tr *ngIf=\"lecturaAuto == 'S'\">\n         <td width=\"100%\" colspan=\"2\">\n          <label style=\"font-size: small;color: #003153;\">{{ textoInfo }}</label>  \n         </td>\n       </tr>\n       <tr>\n         <td width=\"100%\" colspan=\"2\">\n          <ion-button expand=\"full\" color=\"light\"  \n           (click)=\"establecerLecturaAutomatica()\">\n             <label>{{textoLecturaAuto}}</label>\n           </ion-button>\n         </td>\n       </tr>\n       <tr>\n         <td width=\"50%\">\n          <ion-button expand=\"full\" color=\"light\"  \n           (click)=\"mostrarVersiculoAnterior(libro,capitulo,numVersiculo,biblia,versiculo)\">\n             <ion-icon ios=\"arrow-back-circle\" md=\"arrow-back-circle\" style=\"font-size: xx-large;\" color=\"primary\"></ion-icon>\n           </ion-button>\n         </td>\n         <!--td width=\"30%\">\n          <ion-button expand=\"full\" color=\"light\" (click)=\"share(versiculo,libro,capitulo,numVersiculo)\"\n           style=\"text-align: right;\">\n             <ion-icon ios=\"share-social-outline\" md=\"share-social-outline\" style=\"font-size: xx-large;\" color=\"primary\"></ion-icon>\n           </ion-button>\n         </td-->\n         <td width=\"50%\">\n          <ion-button expand=\"full\" color=\"light\"\n           (click)=\"mostrarVersiculoSiguiente(libro,capitulo,numVersiculo,biblia,versiculo)\">\n             <ion-icon ios=\"arrow-forward-circle\" md=\"arrow-forward-circle\" style=\"font-size: xx-large;\" color=\"primary\"></ion-icon>\n           </ion-button>\n         </td>\n       </tr>\n     </table>\n  </ion-toolbar> \n </ion-footer>\n                                                     \n ";

/***/ })

}]);
//# sourceMappingURL=src_app_mostrar-versiculo_mostrar-versiculo_module_ts.js.map