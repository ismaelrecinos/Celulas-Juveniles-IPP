"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_indice-alabanzas_indice-alabanzas_module_ts"],{

/***/ 4181:
/*!*********************************************************************!*\
  !*** ./src/app/indice-alabanzas/indice-alabanzas-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IndiceAlabanzasPageRoutingModule": () => (/* binding */ IndiceAlabanzasPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _indice_alabanzas_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./indice-alabanzas.page */ 218);




const routes = [
    {
        path: '',
        component: _indice_alabanzas_page__WEBPACK_IMPORTED_MODULE_0__.IndiceAlabanzasPage
    }
];
let IndiceAlabanzasPageRoutingModule = class IndiceAlabanzasPageRoutingModule {
};
IndiceAlabanzasPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], IndiceAlabanzasPageRoutingModule);



/***/ }),

/***/ 6629:
/*!*************************************************************!*\
  !*** ./src/app/indice-alabanzas/indice-alabanzas.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IndiceAlabanzasPageModule": () => (/* binding */ IndiceAlabanzasPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _indice_alabanzas_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./indice-alabanzas-routing.module */ 4181);
/* harmony import */ var _indice_alabanzas_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./indice-alabanzas.page */ 218);







let IndiceAlabanzasPageModule = class IndiceAlabanzasPageModule {
};
IndiceAlabanzasPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _indice_alabanzas_routing_module__WEBPACK_IMPORTED_MODULE_0__.IndiceAlabanzasPageRoutingModule
        ],
        declarations: [_indice_alabanzas_page__WEBPACK_IMPORTED_MODULE_1__.IndiceAlabanzasPage]
    })
], IndiceAlabanzasPageModule);



/***/ }),

/***/ 218:
/*!***********************************************************!*\
  !*** ./src/app/indice-alabanzas/indice-alabanzas.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IndiceAlabanzasPage": () => (/* binding */ IndiceAlabanzasPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _indice_alabanzas_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./indice-alabanzas.page.html?ngResource */ 4363);
/* harmony import */ var _indice_alabanzas_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./indice-alabanzas.page.scss?ngResource */ 5938);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _alabanza_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alabanza.service */ 8670);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);






let IndiceAlabanzasPage = class IndiceAlabanzasPage {
    constructor(alabanzaService, router) {
        this.alabanzaService = alabanzaService;
        this.router = router;
        this.alabanzas = null;
        this.alabanzasFiltro = [];
    }
    ngOnInit() {
        this.loadIndice();
    }
    ionViewDidLoad() {
    }
    pushPage(id) {
        this.router.navigate(['mostrar-alabanza', id]);
    }
    loadIndice() {
        this.alabanzaService.getIndiceAlabanzas()
            .subscribe((alabanzasData) => this.alabanzas = alabanzasData);
    }
    buscarAlabanza(ev) {
        // Reset items back to all of the items
        this.loadIndice();
        this.alabanzasFiltro = [];
        // set val to the value of the ev target
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            for (let al of this.alabanzas) {
                if (al.titulo.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
                    al.numero.toString().toLowerCase().indexOf(val.toLowerCase()) > -1) {
                    this.alabanzasFiltro.push(al);
                }
            }
        }
    }
};
IndiceAlabanzasPage.ctorParameters = () => [
    { type: _alabanza_service__WEBPACK_IMPORTED_MODULE_2__.AlabanzaService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
IndiceAlabanzasPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-indice-alabanzas',
        template: _indice_alabanzas_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_indice_alabanzas_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], IndiceAlabanzasPage);



/***/ }),

/***/ 5938:
/*!************************************************************************!*\
  !*** ./src/app/indice-alabanzas/indice-alabanzas.page.scss?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbmRpY2UtYWxhYmFuemFzLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 4363:
/*!************************************************************************!*\
  !*** ./src/app/indice-alabanzas/indice-alabanzas.page.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title style=\"font-size: large;\">Alabanzas Congregacionales</ion-title>\n  </ion-toolbar>\n  <ion-toolbar color=\"primary\" style=\"vertical-align: center;\">\n    <ion-searchbar (ionInput)=\"buscarAlabanza($event)\"></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <div *ngIf=\"alabanzasFiltro?.length == '0'\">\n    <ion-list>\n      <ion-item text-wrap\n        *ngFor=\"let al of alabanzas\"\n        style=\"font-size: large;padding-left: 2px;\">\n        <ion-icon name='musical-note' is-active=\"false\" style=\"color: #003153;\">\n        </ion-icon>\n        <div *ngIf=\" al.escuchar != null && al.escuchar != ''\">\n          <a href=\"{{ al.escuchar }}\" target=\"_blank\" style=\"text-decoration: none;color: red;\">\n            &nbsp;&nbsp;\n            <ion-icon name=\"logo-youtube\"></ion-icon>\n            &nbsp;&nbsp;\n          </a>\n        </div>\n        <label (click)=\"pushPage(al.numero)\" style=\"font-size: large;padding-left: 2px;\">{{ al.numero }}. {{ al.titulo }}</label>\n      </ion-item>\n    </ion-list>  \n  </div>\n  <div *ngIf=\"alabanzasFiltro?.length != '0'\">\n    <ion-list>\n      <ion-item text-wrap\n        *ngFor=\"let al of alabanzasFiltro\"\n        style=\"font-size: large;padding-left: 2px;\">\n        <ion-icon name='musical-note' is-active=\"false\" style=\"color: #003153;\">\n        </ion-icon>\n        <div *ngIf=\" al.escuchar != null && al.escuchar != ''\">\n          <a href=\"{{ al.escuchar }}\" target=\"_blank\" style=\"text-decoration: none;color: red;\">\n            &nbsp;&nbsp;\n            <ion-icon name=\"logo-youtube\"></ion-icon>\n            &nbsp;&nbsp;\n          </a>\n        </div>\n        <label (click)=\"pushPage(al.numero)\" style=\"font-size: large;padding-left: 2px;\">{{ al.numero }}. {{ al.titulo }}</label>\n      </ion-item>\n    </ion-list>  \n  </div>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_indice-alabanzas_indice-alabanzas_module_ts.js.map