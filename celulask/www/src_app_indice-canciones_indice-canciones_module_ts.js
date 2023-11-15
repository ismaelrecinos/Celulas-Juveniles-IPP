"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_indice-canciones_indice-canciones_module_ts"],{

/***/ 8103:
/*!*********************************************************************!*\
  !*** ./src/app/indice-canciones/indice-canciones-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IndiceCancionesPageRoutingModule": () => (/* binding */ IndiceCancionesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _indice_canciones_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./indice-canciones.page */ 86);




const routes = [
    {
        path: '',
        component: _indice_canciones_page__WEBPACK_IMPORTED_MODULE_0__.IndiceCancionesPage
    }
];
let IndiceCancionesPageRoutingModule = class IndiceCancionesPageRoutingModule {
};
IndiceCancionesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], IndiceCancionesPageRoutingModule);



/***/ }),

/***/ 4746:
/*!*************************************************************!*\
  !*** ./src/app/indice-canciones/indice-canciones.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IndiceCancionesPageModule": () => (/* binding */ IndiceCancionesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _indice_canciones_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./indice-canciones-routing.module */ 8103);
/* harmony import */ var _indice_canciones_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./indice-canciones.page */ 86);







let IndiceCancionesPageModule = class IndiceCancionesPageModule {
};
IndiceCancionesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _indice_canciones_routing_module__WEBPACK_IMPORTED_MODULE_0__.IndiceCancionesPageRoutingModule
        ],
        declarations: [_indice_canciones_page__WEBPACK_IMPORTED_MODULE_1__.IndiceCancionesPage]
    })
], IndiceCancionesPageModule);



/***/ }),

/***/ 86:
/*!***********************************************************!*\
  !*** ./src/app/indice-canciones/indice-canciones.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IndiceCancionesPage": () => (/* binding */ IndiceCancionesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _indice_canciones_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./indice-canciones.page.html?ngResource */ 2526);
/* harmony import */ var _indice_canciones_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./indice-canciones.page.scss?ngResource */ 7430);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _canciones_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./canciones.service */ 1333);






let IndiceCancionesPage = class IndiceCancionesPage {
    constructor(cancionesService, router) {
        this.cancionesService = cancionesService;
        this.router = router;
        this.canciones = null;
    }
    ngOnInit() {
        this.loadIndice();
    }
    pushPage(id) {
        if (id != 0) {
            this.router.navigate(['mostrar-cancion', id]);
        }
    }
    loadIndice() {
        this.cancionesService.getIndiceCanciones()
            .subscribe((cancionesData) => this.canciones = cancionesData);
    }
};
IndiceCancionesPage.ctorParameters = () => [
    { type: _canciones_service__WEBPACK_IMPORTED_MODULE_2__.CancionesService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
IndiceCancionesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-indice-canciones',
        template: _indice_canciones_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_indice_canciones_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], IndiceCancionesPage);



/***/ }),

/***/ 7430:
/*!************************************************************************!*\
  !*** ./src/app/indice-canciones/indice-canciones.page.scss?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbmRpY2UtY2FuY2lvbmVzLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 2526:
/*!************************************************************************!*\
  !*** ./src/app/indice-canciones/indice-canciones.page.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title style=\"font-size: large;\">Cancionero</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-list>\n    <ion-item text-wrap *ngFor=\"let ca of canciones\" (click)=\"pushPage(ca.numero)\">\n    <ion-icon *ngIf=\" ca.numero != 0\" name='headset' is-active=\"false\" color=\"primary\">\n    </ion-icon>\n    <label  *ngIf=\" ca.numero == 0\" style=\"font-size: large;padding-left: 2px;\">{{ ca.titulo }}</label>\n    <label  *ngIf=\" ca.numero != 0\" style=\"font-size: large;padding-left: 2px;\">{{ ca.numero }}. {{ ca.titulo }}</label>\n    </ion-item>\n  </ion-list>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_indice-canciones_indice-canciones_module_ts.js.map