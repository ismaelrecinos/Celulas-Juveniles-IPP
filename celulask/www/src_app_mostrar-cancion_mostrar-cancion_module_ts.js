"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_mostrar-cancion_mostrar-cancion_module_ts"],{

/***/ 7995:
/*!*******************************************************************!*\
  !*** ./src/app/mostrar-cancion/mostrar-cancion-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MostrarCancionPageRoutingModule": () => (/* binding */ MostrarCancionPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _mostrar_cancion_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mostrar-cancion.page */ 3851);




const routes = [
    {
        path: '',
        component: _mostrar_cancion_page__WEBPACK_IMPORTED_MODULE_0__.MostrarCancionPage
    }
];
let MostrarCancionPageRoutingModule = class MostrarCancionPageRoutingModule {
};
MostrarCancionPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MostrarCancionPageRoutingModule);



/***/ }),

/***/ 8787:
/*!***********************************************************!*\
  !*** ./src/app/mostrar-cancion/mostrar-cancion.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MostrarCancionPageModule": () => (/* binding */ MostrarCancionPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _mostrar_cancion_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mostrar-cancion-routing.module */ 7995);
/* harmony import */ var _mostrar_cancion_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mostrar-cancion.page */ 3851);







let MostrarCancionPageModule = class MostrarCancionPageModule {
};
MostrarCancionPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _mostrar_cancion_routing_module__WEBPACK_IMPORTED_MODULE_0__.MostrarCancionPageRoutingModule
        ],
        declarations: [_mostrar_cancion_page__WEBPACK_IMPORTED_MODULE_1__.MostrarCancionPage]
    })
], MostrarCancionPageModule);



/***/ }),

/***/ 3851:
/*!*********************************************************!*\
  !*** ./src/app/mostrar-cancion/mostrar-cancion.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MostrarCancionPage": () => (/* binding */ MostrarCancionPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _mostrar_cancion_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mostrar-cancion.page.html?ngResource */ 4868);
/* harmony import */ var _mostrar_cancion_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mostrar-cancion.page.scss?ngResource */ 7406);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _indice_canciones_canciones_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../indice-canciones/canciones.service */ 1333);
/* harmony import */ var _awesome_cordova_plugins_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/social-sharing/ngx */ 1952);







let MostrarCancionPage = class MostrarCancionPage {
    constructor(activatedRoute, cancionesService, socialSharing) {
        this.activatedRoute = activatedRoute;
        this.cancionesService = cancionesService;
        this.socialSharing = socialSharing;
        this.canciones = null;
        this.cancion = null;
        this.message = null;
        this.file = null;
        this.link = null;
        this.subject = null;
    }
    ngOnInit() {
        this.numCancion = this.activatedRoute.snapshot.paramMap.get("id");
        this.loadCanciones();
    }
    loadCanciones() {
        this.cancionesService.getCancion(this.numCancion)
            .subscribe((cancionesData) => this.canciones = cancionesData);
    }
    share(ca) {
        this.message = "" + ca.numero + " " + ca.titulo;
        this.message += "\n\n";
        for (let verso of ca.versos) {
            if (verso != "♪") {
                this.message += verso + "\n";
            }
            else {
                this.message += "\n";
            }
        }
        this.socialSharing.share(this.message, this.subject, this.file, this.link)
            .then(() => {
        })
            .catch(() => {
        });
    }
};
MostrarCancionPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _indice_canciones_canciones_service__WEBPACK_IMPORTED_MODULE_2__.CancionesService },
    { type: _awesome_cordova_plugins_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_3__.SocialSharing }
];
MostrarCancionPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-mostrar-cancion',
        template: _mostrar_cancion_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_mostrar_cancion_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MostrarCancionPage);



/***/ }),

/***/ 7406:
/*!**********************************************************************!*\
  !*** ./src/app/mostrar-cancion/mostrar-cancion.page.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = ".background {\n  background: url('IPP-T.png') 0 0/50% 35% no-repeat;\n  opacity: 1;\n  background-position: center center;\n}\n\n.tituloCancion {\n  color: auto;\n  font-size: large;\n  text-align: center;\n  font-weight: bold;\n  width: 100%;\n}\n\n.contenidoCancion {\n  font-size: short;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vc3RyYXItY2FuY2lvbi5wYWdlLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi9DZWx1bGFzJTIwSnV2ZW5pbGVzJTIwSVBQL2lvbmljJTIwdjIvY2VsdWxhc2svc3JjL2FwcC9tb3N0cmFyLWNhbmNpb24vbW9zdHJhci1jYW5jaW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtEQUFBO0VBQ0EsVUFBQTtFQUNBLGtDQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7QUNDSiIsImZpbGUiOiJtb3N0cmFyLWNhbmNpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tncm91bmR7XG4gICAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWcvSVBQLVQucG5nKSAwIDAvNTAlIDM1JSBuby1yZXBlYXQ7XG4gICAgb3BhY2l0eTogMS4wO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG59XG5cbi50aXR1bG9DYW5jaW9ue1xuICAgIGNvbG9yOmF1dG87XG4gICAgZm9udC1zaXplOiBsYXJnZTtcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB3aWR0aDoxMDAlO1xufVxuXG4uY29udGVuaWRvQ2FuY2lvbntcbiAgICBmb250LXNpemU6IHNob3J0O1xufSIsIi5iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWcvSVBQLVQucG5nKSAwIDAvNTAlIDM1JSBuby1yZXBlYXQ7XG4gIG9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG59XG5cbi50aXR1bG9DYW5jaW9uIHtcbiAgY29sb3I6IGF1dG87XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY29udGVuaWRvQ2FuY2lvbiB7XG4gIGZvbnQtc2l6ZTogc2hvcnQ7XG59Il19 */";

/***/ }),

/***/ 4868:
/*!**********************************************************************!*\
  !*** ./src/app/mostrar-cancion/mostrar-cancion.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title *ngFor = \"let ca of canciones\" style=\"font-size: large;\">\n     ♪ {{ca.numero}} {{ca.titulo}}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n                                                                       \n <ion-content class=\"background\">\n     <div *ngFor = \"let ca of canciones\" text-wrap class=\"contenidoCancion\">\n       <!--table class=\"tituloCancion\">\n         <tr style=\"width:100%;\">\n          <td style=\"width:100%;padding-top: 10px;padding-bottom: 10px;background-color: #003153;color:white;\">\n            <ion-button expand=\"full\" color=\"light\" (click)=\"share(ca)\" color=\"primary\">\n              <ion-icon ios=\"share-social-outline\" md=\"share-social-outline\"></ion-icon>\n              &nbsp;\n              Compartir\n             </ion-button>\n           </td>\n         </tr>\n       </table-->\n       <ion-list no-lines class=\"contenidoCancion\">\n         <ion-item text-wrap  class=\"contenidoCancion\" *ngFor = \"let verso of ca.versos\">\n         <div class=\"contenidoCancion\">\n           <label class=\"contenido\" *ngIf=\" verso != '♪'\">{{ verso.replace(\"_\",\" \") }}</label><br/> \n         </div>                                                          \n       </ion-item>                                                      \n     </ion-list>\n     </div>\n </ion-content>                                                       \n                                                     \n ";

/***/ })

}]);
//# sourceMappingURL=src_app_mostrar-cancion_mostrar-cancion_module_ts.js.map