"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_indice-coros_indice-coros_module_ts"],{

/***/ 1499:
/*!*************************************************************!*\
  !*** ./src/app/indice-coros/indice-coros-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IndiceCorosPageRoutingModule": () => (/* binding */ IndiceCorosPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _indice_coros_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./indice-coros.page */ 4464);




const routes = [
    {
        path: '',
        component: _indice_coros_page__WEBPACK_IMPORTED_MODULE_0__.IndiceCorosPage
    }
];
let IndiceCorosPageRoutingModule = class IndiceCorosPageRoutingModule {
};
IndiceCorosPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], IndiceCorosPageRoutingModule);



/***/ }),

/***/ 1046:
/*!*****************************************************!*\
  !*** ./src/app/indice-coros/indice-coros.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IndiceCorosPageModule": () => (/* binding */ IndiceCorosPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _indice_coros_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./indice-coros-routing.module */ 1499);
/* harmony import */ var _indice_coros_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./indice-coros.page */ 4464);







let IndiceCorosPageModule = class IndiceCorosPageModule {
};
IndiceCorosPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _indice_coros_routing_module__WEBPACK_IMPORTED_MODULE_0__.IndiceCorosPageRoutingModule
        ],
        declarations: [_indice_coros_page__WEBPACK_IMPORTED_MODULE_1__.IndiceCorosPage]
    })
], IndiceCorosPageModule);



/***/ }),

/***/ 4464:
/*!***************************************************!*\
  !*** ./src/app/indice-coros/indice-coros.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IndiceCorosPage": () => (/* binding */ IndiceCorosPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _indice_coros_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./indice-coros.page.html?ngResource */ 6774);
/* harmony import */ var _indice_coros_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./indice-coros.page.scss?ngResource */ 422);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _coros_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./coros.service */ 799);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);






let IndiceCorosPage = class IndiceCorosPage {
    constructor(corosService, router) {
        this.corosService = corosService;
        this.router = router;
        this.coros = null;
    }
    ngOnInit() {
        this.loadIndice();
    }
    pushPage(id) {
        this.router.navigate(['mostrar-coros', id]);
    }
    loadIndice() {
        this.corosService.getIndiceCoros()
            .subscribe((corosData) => {
            console.log();
            return (this.coros = corosData);
        });
    }
};
IndiceCorosPage.ctorParameters = () => [
    { type: _coros_service__WEBPACK_IMPORTED_MODULE_2__.CorosService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
IndiceCorosPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-indice-coros',
        template: _indice_coros_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_indice_coros_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], IndiceCorosPage);



/***/ }),

/***/ 422:
/*!****************************************************************!*\
  !*** ./src/app/indice-coros/indice-coros.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = ".contenido {\n  text-align: justify !important;\n  font-size: large;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGljZS1jb3Jvcy5wYWdlLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi9DZWx1bGFzJTIwSnV2ZW5pbGVzJTIwSVBQL2lvbmljJTIwdjIvY2VsdWxhc2svc3JjL2FwcC9pbmRpY2UtY29yb3MvaW5kaWNlLWNvcm9zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDhCQUFBO0VBQ0EsZ0JBQUE7QUNDSiIsImZpbGUiOiJpbmRpY2UtY29yb3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbmlkb3tcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5ICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiBsYXJnZTtcbn0iLCIuY29udGVuaWRvIHtcbiAgdGV4dC1hbGlnbjoganVzdGlmeSAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IGxhcmdlO1xufSJdfQ== */";

/***/ }),

/***/ 6774:
/*!****************************************************************!*\
  !*** ./src/app/indice-coros/indice-coros.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title style=\"font-size: large;\">Coros de Avivamiento</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-list>\n    <ion-item text-wrap *ngFor=\"let cor of coros\" (click)=\"pushPage(cor.numero)\" class=\"contenido\">\n      <table>\n        <tr>\n          <td>\n            <ion-icon *ngIf=\" cor.numero != 0\" name='musical-notes' is-active=\"false\" color=\"primary\">\n            </ion-icon>\n            &nbsp;\n          </td>\n          <td>\n            <label  *ngIf=\" cor.numero == 0\" style=\"font-size: large;padding-left: 2px;\">{{ cor.titulo }}</label>\n            <label  *ngIf=\" cor.numero != 0\" style=\"font-size: large;padding-left: 2px;\">{{ cor.numero }}. {{ cor.titulo }}</label>\n          </td>\n        </tr>\n      </table>\n    </ion-item>\n  </ion-list>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_indice-coros_indice-coros_module_ts.js.map