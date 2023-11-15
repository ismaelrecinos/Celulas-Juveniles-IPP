"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_indice-biblia_indice-biblia_module_ts"],{

/***/ 1279:
/*!***************************************************************!*\
  !*** ./src/app/indice-biblia/indice-biblia-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IndiceBibliaPageRoutingModule": () => (/* binding */ IndiceBibliaPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _indice_biblia_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./indice-biblia.page */ 7785);




const routes = [
    {
        path: '',
        component: _indice_biblia_page__WEBPACK_IMPORTED_MODULE_0__.IndiceBibliaPage
    }
];
let IndiceBibliaPageRoutingModule = class IndiceBibliaPageRoutingModule {
};
IndiceBibliaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], IndiceBibliaPageRoutingModule);



/***/ }),

/***/ 9805:
/*!*******************************************************!*\
  !*** ./src/app/indice-biblia/indice-biblia.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IndiceBibliaPageModule": () => (/* binding */ IndiceBibliaPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _indice_biblia_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./indice-biblia-routing.module */ 1279);
/* harmony import */ var _indice_biblia_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./indice-biblia.page */ 7785);







let IndiceBibliaPageModule = class IndiceBibliaPageModule {
};
IndiceBibliaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _indice_biblia_routing_module__WEBPACK_IMPORTED_MODULE_0__.IndiceBibliaPageRoutingModule
        ],
        declarations: [_indice_biblia_page__WEBPACK_IMPORTED_MODULE_1__.IndiceBibliaPage]
    })
], IndiceBibliaPageModule);



/***/ }),

/***/ 7785:
/*!*****************************************************!*\
  !*** ./src/app/indice-biblia/indice-biblia.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IndiceBibliaPage": () => (/* binding */ IndiceBibliaPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _indice_biblia_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./indice-biblia.page.html?ngResource */ 8168);
/* harmony import */ var _indice_biblia_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./indice-biblia.page.scss?ngResource */ 5754);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _biblia_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./biblia.service */ 3567);






let IndiceBibliaPage = class IndiceBibliaPage {
    constructor(bibliaService, router) {
        this.bibliaService = bibliaService;
        this.router = router;
        this.libros = null;
        this.librosAntiguoTestamento = null;
        this.librosNuevoTestamento = null;
        this.biblia = 'Santa Biblia RV1960';
    }
    ngOnInit() {
        this.loadIndice();
    }
    pushPage(lib, cap) {
        if (lib != 'A.T.' && lib != 'N.T.') {
            this.router.navigate(['mostrar-libro', lib, cap, this.biblia]);
        }
    }
    loadIndice() {
        this.bibliaService.getIndiceBiblia()
            .subscribe((bibliaData) => {
            this.libros = bibliaData;
            this.librosAntiguoTestamento = [];
            this.librosNuevoTestamento = [];
            for (let lib of this.libros) {
                if ((lib.numero >= 1 && lib.numero <= 39) || lib.numero == -1) {
                    this.librosAntiguoTestamento.push(lib);
                }
                else {
                    this.librosNuevoTestamento.push(lib);
                }
            }
        });
    }
};
IndiceBibliaPage.ctorParameters = () => [
    { type: _biblia_service__WEBPACK_IMPORTED_MODULE_2__.BibliaService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
IndiceBibliaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-indice-biblia',
        template: _indice_biblia_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_indice_biblia_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], IndiceBibliaPage);



/***/ }),

/***/ 5754:
/*!******************************************************************!*\
  !*** ./src/app/indice-biblia/indice-biblia.page.scss?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbmRpY2UtYmlibGlhLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 8168:
/*!******************************************************************!*\
  !*** ./src/app/indice-biblia/indice-biblia.page.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title style=\"font-size: large;\">Santa Biblia RV1960</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <table width=\"100%\">\n    <tr style=\"vertical-align: top;\" width=\"100%\">\n      <td width=\"50%\">\n        <ion-list>\n          <ion-item text-wrap *ngFor=\"let lib of librosAntiguoTestamento\" (click)=\"pushPage(lib.ruta,1)\">\n          <ion-icon *ngIf=\" lib.numero != -1\" name='book' is-active=\"false\" color=\"primary\">\n          </ion-icon>\n          <label  *ngIf=\" lib.numero != -1\" style=\"font-size: large;padding-left: 2px;\">{{ lib.titulo }}</label>\n          <label  *ngIf=\" lib.numero == -1\" style=\"font-size: large;padding-left: 2px;\">{{ lib.titulo }}</label>\n          </ion-item>\n        </ion-list>\n      </td>\n      <td width=\"50%\">\n        <ion-list>\n          <ion-item text-wrap *ngFor=\"let lib of librosNuevoTestamento\" (click)=\"pushPage(lib.ruta,1)\">\n          <ion-icon *ngIf=\" lib.numero != -2\" name='book' is-active=\"false\" color=\"primary\">\n          </ion-icon>\n          <label  *ngIf=\" lib.numero != -2\" style=\"font-size: large;padding-left: 2px;\">{{ lib.titulo }}</label>\n          <label  *ngIf=\" lib.numero == -2\" style=\"font-size: large;padding-left: 2px;\">{{ lib.titulo }}</label>\n          </ion-item>\n        </ion-list>\n      </td>\n    </tr>\n  </table>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_indice-biblia_indice-biblia_module_ts.js.map