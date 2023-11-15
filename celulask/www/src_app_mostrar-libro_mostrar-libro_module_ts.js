"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_mostrar-libro_mostrar-libro_module_ts"],{

/***/ 4729:
/*!***************************************************************!*\
  !*** ./src/app/mostrar-libro/mostrar-libro-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MostrarLibroPageRoutingModule": () => (/* binding */ MostrarLibroPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _mostrar_libro_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mostrar-libro.page */ 2344);




const routes = [
    {
        path: '',
        component: _mostrar_libro_page__WEBPACK_IMPORTED_MODULE_0__.MostrarLibroPage
    }
];
let MostrarLibroPageRoutingModule = class MostrarLibroPageRoutingModule {
};
MostrarLibroPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MostrarLibroPageRoutingModule);



/***/ }),

/***/ 4901:
/*!*******************************************************!*\
  !*** ./src/app/mostrar-libro/mostrar-libro.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MostrarLibroPageModule": () => (/* binding */ MostrarLibroPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _mostrar_libro_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mostrar-libro-routing.module */ 4729);
/* harmony import */ var _mostrar_libro_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mostrar-libro.page */ 2344);







let MostrarLibroPageModule = class MostrarLibroPageModule {
};
MostrarLibroPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _mostrar_libro_routing_module__WEBPACK_IMPORTED_MODULE_0__.MostrarLibroPageRoutingModule
        ],
        declarations: [_mostrar_libro_page__WEBPACK_IMPORTED_MODULE_1__.MostrarLibroPage]
    })
], MostrarLibroPageModule);



/***/ }),

/***/ 2344:
/*!*****************************************************!*\
  !*** ./src/app/mostrar-libro/mostrar-libro.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MostrarLibroPage": () => (/* binding */ MostrarLibroPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _mostrar_libro_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mostrar-libro.page.html?ngResource */ 4506);
/* harmony import */ var _mostrar_libro_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mostrar-libro.page.scss?ngResource */ 9261);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _indice_biblia_biblia_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../indice-biblia/biblia.service */ 3567);






let MostrarLibroPage = class MostrarLibroPage {
    constructor(activatedRoute, bibliaService, router) {
        this.activatedRoute = activatedRoute;
        this.bibliaService = bibliaService;
        this.router = router;
        this.versos = null;
        this.verso = null;
        this.capitulos = null;
        this.message = null;
        this.file = null;
        this.link = null;
        this.subject = null;
        this.biblia = null;
    }
    ngOnInit() {
        this.libro = this.activatedRoute.snapshot.paramMap.get("lib");
        this.numCapitulo = this.activatedRoute.snapshot.paramMap.get("cap");
        this.biblia = this.activatedRoute.snapshot.paramMap.get("biblia");
        this.loadCapitulo();
        this.loadIndiceCapitulos();
    }
    loadCapitulo() {
        this.bibliaService.getCapitulo(this.libro, this.numCapitulo, this.biblia)
            .subscribe((versosData) => this.versos = versosData);
    }
    loadIndiceCapitulos() {
        this.bibliaService.getIndiceCapitulos(this.libro, this.biblia)
            .subscribe((capitulosData) => this.capitulos = capitulosData);
    }
    onSelectChange(cap) {
        this.bibliaService.getCapitulo(cap.detail.value.libro, cap.detail.value.numeroCapitulo, this.biblia)
            .subscribe((versosData) => this.versos = versosData);
    }
    mostrarVersiculo(lib, cap, versiculo) {
        this.router.navigate(['mostrar-versiculo', lib, cap, versiculo, this.biblia]);
    }
    mostrarCapituloAnterior(lib, cap) {
        let capAux = cap - 1;
        if (capAux != 0) {
            this.bibliaService.getCapitulo(lib, capAux, this.biblia)
                .subscribe((versosData) => this.versos = versosData);
        }
    }
    mostrarCapituloSiguiente(lib, cap) {
        let capAux = cap + 1;
        try {
            this.bibliaService.getCapitulo(lib, capAux, this.biblia)
                .subscribe((versosData) => {
                this.versos = versosData;
            });
        }
        catch (e) {
            capAux = cap;
            this.bibliaService.getCapitulo(lib, capAux, this.biblia)
                .subscribe((versosData) => {
                this.versos = versosData;
            });
        }
    }
};
MostrarLibroPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute },
    { type: _indice_biblia_biblia_service__WEBPACK_IMPORTED_MODULE_2__.BibliaService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
MostrarLibroPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-mostrar-libro',
        template: _mostrar_libro_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_mostrar_libro_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MostrarLibroPage);



/***/ }),

/***/ 9261:
/*!******************************************************************!*\
  !*** ./src/app/mostrar-libro/mostrar-libro.page.scss?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = ".background {\n  background: url('IPP-T.png') 0 0/50% 35% no-repeat;\n  opacity: 1;\n  background-position: center center;\n}\n\n.contenido {\n  text-align: justify !important;\n  font-size: large;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vc3RyYXItbGlicm8ucGFnZS5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vQ2VsdWxhcyUyMEp1dmVuaWxlcyUyMElQUC9pb25pYyUyMHYyL2NlbHVsYXNrL3NyYy9hcHAvbW9zdHJhci1saWJyby9tb3N0cmFyLWxpYnJvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtEQUFBO0VBQ0EsVUFBQTtFQUNBLGtDQUFBO0FDQ0o7O0FERUE7RUFDSSw4QkFBQTtFQUNBLGdCQUFBO0FDQ0oiLCJmaWxlIjoibW9zdHJhci1saWJyby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2dyb3VuZHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltZy9JUFAtVC5wbmcpIDAgMC81MCUgMzUlIG5vLXJlcGVhdDtcbiAgICBvcGFjaXR5OiAxLjA7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbn1cblxuLmNvbnRlbmlkb3tcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5ICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiBsYXJnZTtcbn0iLCIuYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1nL0lQUC1ULnBuZykgMCAwLzUwJSAzNSUgbm8tcmVwZWF0O1xuICBvcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xufVxuXG4uY29udGVuaWRvIHtcbiAgdGV4dC1hbGlnbjoganVzdGlmeSAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IGxhcmdlO1xufSJdfQ== */";

/***/ }),

/***/ 4506:
/*!******************************************************************!*\
  !*** ./src/app/mostrar-libro/mostrar-libro.page.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title *ngFor = \"let v of versos\" style=\"font-size: large;\">\n      {{v.libro}} {{v.capitulo}}                                                 \n     </ion-title> \n  </ion-toolbar>\n</ion-header>\n                                                                       \n <ion-content> \n    <ion-list class=\"contenido\" *ngFor = \"let v of versos\">\n    <ion-item *ngFor = \"let verso of v.versiculos\" text-wrap (click)=\"mostrarVersiculo(v.ruta,v.capitulo,verso)\" class=\"contenido\">\n      <label style=\"padding-top: 5px;padding-bottom: 5px;\">{{ verso }}</label> \n    </ion-item>                                                      \n  </ion-list>\n </ion-content>                                                       \n \n <ion-footer>\n  <ion-toolbar color=\"light\">\n     <table width=\"100%\">\n       <tr>\n         <td width=\"15%\" *ngFor = \"let v of versos\">\n           <ion-button expand=\"full\" color=\"light\" \n           (click)=\"mostrarCapituloAnterior(v.ruta,v.capitulo)\">\n             <ion-icon ios=\"arrow-back-circle\" md=\"arrow-back-circle\" style=\"font-size: xx-large;\" color=\"primary\"></ion-icon>\n           </ion-button>\n         </td>\n         <td width=\"70%\">\n           <ion-item style=\"text-align: left;width: 100%;\">\n            <ion-label>Capítulo</ion-label>\n            <ion-select ok-text=\"Ir\" cancel-text=\"Cancelar\" (ionChange)=\"onSelectChange($event)\" color=\"light\">\n               <ion-select-option *ngFor=\"let cap of capitulos\" [value]=\"cap\">\n                 {{cap.numeroCapitulo}}\n               </ion-select-option>\n           </ion-select>\n           </ion-item>\n         </td>\n         <td width=\"15%\" *ngFor = \"let v of versos\">\n           <ion-button expand=\"full\" color=\"light\"\n           (click)=\"mostrarCapituloSiguiente(v.ruta,v.capitulo)\">\n             <ion-icon ios=\"arrow-forward-circle\" md=\"arrow-forward-circle\" style=\"font-size: xx-large;\" color=\"primary\"></ion-icon>\n           </ion-button>\n         </td>\n       </tr>\n     </table>\n  </ion-toolbar> \n </ion-footer>\n                                                     \n ";

/***/ })

}]);
//# sourceMappingURL=src_app_mostrar-libro_mostrar-libro_module_ts.js.map