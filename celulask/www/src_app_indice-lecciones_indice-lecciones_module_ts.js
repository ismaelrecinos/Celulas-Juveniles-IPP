"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_indice-lecciones_indice-lecciones_module_ts"],{

/***/ 9558:
/*!*********************************************************************!*\
  !*** ./src/app/indice-lecciones/indice-lecciones-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IndiceLeccionesPageRoutingModule": () => (/* binding */ IndiceLeccionesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _indice_lecciones_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./indice-lecciones.page */ 7881);




const routes = [
    {
        path: '',
        component: _indice_lecciones_page__WEBPACK_IMPORTED_MODULE_0__.IndiceLeccionesPage
    }
];
let IndiceLeccionesPageRoutingModule = class IndiceLeccionesPageRoutingModule {
};
IndiceLeccionesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], IndiceLeccionesPageRoutingModule);



/***/ }),

/***/ 1888:
/*!*************************************************************!*\
  !*** ./src/app/indice-lecciones/indice-lecciones.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IndiceLeccionesPageModule": () => (/* binding */ IndiceLeccionesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _indice_lecciones_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./indice-lecciones-routing.module */ 9558);
/* harmony import */ var _indice_lecciones_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./indice-lecciones.page */ 7881);







let IndiceLeccionesPageModule = class IndiceLeccionesPageModule {
};
IndiceLeccionesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _indice_lecciones_routing_module__WEBPACK_IMPORTED_MODULE_0__.IndiceLeccionesPageRoutingModule
        ],
        declarations: [_indice_lecciones_page__WEBPACK_IMPORTED_MODULE_1__.IndiceLeccionesPage]
    })
], IndiceLeccionesPageModule);



/***/ }),

/***/ 7881:
/*!***********************************************************!*\
  !*** ./src/app/indice-lecciones/indice-lecciones.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IndiceLeccionesPage": () => (/* binding */ IndiceLeccionesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _indice_lecciones_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./indice-lecciones.page.html?ngResource */ 4552);
/* harmony import */ var _indice_lecciones_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./indice-lecciones.page.scss?ngResource */ 1669);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _lecciones_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lecciones.service */ 5092);






let IndiceLeccionesPage = class IndiceLeccionesPage {
    constructor(leccionesService, router) {
        this.leccionesService = leccionesService;
        this.router = router;
        this.lecciones = null;
    }
    ngOnInit() {
        this.loadIndice();
    }
    pushPage(id) {
        this.router.navigate(['mostrar-leccion', id]);
    }
    loadIndice() {
        this.leccionesService.getIndiceLecciones()
            .subscribe((leccionesData) => this.lecciones = leccionesData);
    }
};
IndiceLeccionesPage.ctorParameters = () => [
    { type: _lecciones_service__WEBPACK_IMPORTED_MODULE_2__.LeccionesService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
IndiceLeccionesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-indice-lecciones',
        template: _indice_lecciones_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_indice_lecciones_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], IndiceLeccionesPage);



/***/ }),

/***/ 1669:
/*!************************************************************************!*\
  !*** ./src/app/indice-lecciones/indice-lecciones.page.scss?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbmRpY2UtbGVjY2lvbmVzLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 4552:
/*!************************************************************************!*\
  !*** ./src/app/indice-lecciones/indice-lecciones.page.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title style=\"font-size: large;\">Discipulado 1.A.1</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-list>\n    <ion-item text-wrap *ngFor=\"let lec of lecciones\" (click)=\"pushPage(lec.numero)\">\n    <ion-icon name='document' is-active=\"false\" color=\"primary\">\n    </ion-icon>\n    <label style=\"font-size: medium;padding-left: 2px;\">\n      {{ lec.titulo }}\n    </label>\n    </ion-item>\n  </ion-list>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_indice-lecciones_indice-lecciones_module_ts.js.map