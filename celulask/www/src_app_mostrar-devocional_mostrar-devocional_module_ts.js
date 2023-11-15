"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_mostrar-devocional_mostrar-devocional_module_ts"],{

/***/ 3443:
/*!*************************************************************************!*\
  !*** ./src/app/mostrar-devocional/mostrar-devocional-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MostrarDevocionalPageRoutingModule": () => (/* binding */ MostrarDevocionalPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _mostrar_devocional_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mostrar-devocional.page */ 4822);




const routes = [
    {
        path: '',
        component: _mostrar_devocional_page__WEBPACK_IMPORTED_MODULE_0__.MostrarDevocionalPage
    }
];
let MostrarDevocionalPageRoutingModule = class MostrarDevocionalPageRoutingModule {
};
MostrarDevocionalPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MostrarDevocionalPageRoutingModule);



/***/ }),

/***/ 2004:
/*!*****************************************************************!*\
  !*** ./src/app/mostrar-devocional/mostrar-devocional.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MostrarDevocionalPageModule": () => (/* binding */ MostrarDevocionalPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _mostrar_devocional_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mostrar-devocional-routing.module */ 3443);
/* harmony import */ var _mostrar_devocional_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mostrar-devocional.page */ 4822);







let MostrarDevocionalPageModule = class MostrarDevocionalPageModule {
};
MostrarDevocionalPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _mostrar_devocional_routing_module__WEBPACK_IMPORTED_MODULE_0__.MostrarDevocionalPageRoutingModule
        ],
        declarations: [_mostrar_devocional_page__WEBPACK_IMPORTED_MODULE_1__.MostrarDevocionalPage]
    })
], MostrarDevocionalPageModule);



/***/ }),

/***/ 4822:
/*!***************************************************************!*\
  !*** ./src/app/mostrar-devocional/mostrar-devocional.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MostrarDevocionalPage": () => (/* binding */ MostrarDevocionalPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _mostrar_devocional_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mostrar-devocional.page.html?ngResource */ 864);
/* harmony import */ var _mostrar_devocional_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mostrar-devocional.page.scss?ngResource */ 8927);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);





let MostrarDevocionalPage = class MostrarDevocionalPage {
    constructor(activatedRoute, router) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.titulo = null;
        this.versiculo = null;
        this.contenido = null;
    }
    ngOnInit() {
        this.titulo = this.activatedRoute.snapshot.paramMap.get("tit");
        this.versiculo = this.activatedRoute.snapshot.paramMap.get("vers");
        this.contenido = this.activatedRoute.snapshot.paramMap.get("cont");
    }
};
MostrarDevocionalPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
MostrarDevocionalPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-mostrar-devocional',
        template: _mostrar_devocional_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_mostrar_devocional_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MostrarDevocionalPage);



/***/ }),

/***/ 8927:
/*!****************************************************************************!*\
  !*** ./src/app/mostrar-devocional/mostrar-devocional.page.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb3N0cmFyLWRldm9jaW9uYWwucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 864:
/*!****************************************************************************!*\
  !*** ./src/app/mostrar-devocional/mostrar-devocional.page.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title style=\"font-size: large;\">Devocional</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-list>\n    <ion-item text-wrap>\n      <table width=\"100%\">\n        <tr style=\"vertical-align: top;\" width=\"100%\">\n          <td style=\"font-size: large;padding-left: 2px;padding-right: 2px;padding-top: 2px;padding-bottom: 2px;text-align: center;color: #003153;\">\n            <strong>{{titulo}}</strong>\n          </td>\n        </tr>\n        <tr style=\"vertical-align: top;\" width=\"100%\">\n          <td style=\"font-size: small;padding-left: 2px;padding-right: 2px;padding-top: 2px;padding-bottom: 2px;text-align: center;\">\n            Charles Haddon Spurgeon\n          </td>\n        </tr>\n      </table>\n    </ion-item>\n    <ion-item text-wrap style=\"text-align: center;\">\n      <strong>\n      <label style=\"font-size: large;padding-left: 2px;padding-right: 2px;padding-top: 2px;padding-bottom: 2px;font-weight: lighter;color:#003153;\">{{versiculo}}</label>\n      </strong>\n    </ion-item>\n    <ion-item text-wrap>\n      <label style=\"font-size: large;padding-left: 2px;padding-right: 2px;padding-top: 2px;padding-bottom: 25px;text-align: justify;\">{{contenido}}</label>\n    </ion-item>\n  </ion-list>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_mostrar-devocional_mostrar-devocional_module_ts.js.map