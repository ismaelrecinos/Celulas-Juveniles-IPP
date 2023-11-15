"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_bible-indice_bible-indice_module_ts"],{

/***/ 1786:
/*!*************************************************************!*\
  !*** ./src/app/bible-indice/bible-indice-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BibleIndicePageRoutingModule": () => (/* binding */ BibleIndicePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _bible_indice_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bible-indice.page */ 2395);




const routes = [
    {
        path: '',
        component: _bible_indice_page__WEBPACK_IMPORTED_MODULE_0__.BibleIndicePage
    }
];
let BibleIndicePageRoutingModule = class BibleIndicePageRoutingModule {
};
BibleIndicePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], BibleIndicePageRoutingModule);



/***/ }),

/***/ 796:
/*!*****************************************************!*\
  !*** ./src/app/bible-indice/bible-indice.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BibleIndicePageModule": () => (/* binding */ BibleIndicePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _bible_indice_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bible-indice-routing.module */ 1786);
/* harmony import */ var _bible_indice_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bible-indice.page */ 2395);







let BibleIndicePageModule = class BibleIndicePageModule {
};
BibleIndicePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _bible_indice_routing_module__WEBPACK_IMPORTED_MODULE_0__.BibleIndicePageRoutingModule
        ],
        declarations: [_bible_indice_page__WEBPACK_IMPORTED_MODULE_1__.BibleIndicePage]
    })
], BibleIndicePageModule);



/***/ }),

/***/ 2395:
/*!***************************************************!*\
  !*** ./src/app/bible-indice/bible-indice.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BibleIndicePage": () => (/* binding */ BibleIndicePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _bible_indice_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bible-indice.page.html?ngResource */ 2562);
/* harmony import */ var _bible_indice_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bible-indice.page.scss?ngResource */ 7124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _bible_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bible.service */ 2685);






let BibleIndicePage = class BibleIndicePage {
    constructor(router, bibleService) {
        this.router = router;
        this.bibleService = bibleService;
        this.libros = null;
        this.librosAntiguoTestamento = null;
        this.librosNuevoTestamento = null;
        this.biblia = 'Holy Bible';
    }
    ngOnInit() {
        this.loadIndice();
    }
    pushPage(lib, cap) {
        if (lib != 'OLD TESTAMENT' && lib != 'NEW TESTAMENT') {
            this.router.navigate(['mostrar-libro', lib, cap, this.biblia]);
        }
    }
    loadIndice() {
        this.bibleService.getIndiceBiblia()
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
BibleIndicePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _bible_service__WEBPACK_IMPORTED_MODULE_2__.BibleService }
];
BibleIndicePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-bible-indice',
        template: _bible_indice_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_bible_indice_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], BibleIndicePage);



/***/ }),

/***/ 7124:
/*!****************************************************************!*\
  !*** ./src/app/bible-indice/bible-indice.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiaWJsZS1pbmRpY2UucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 2562:
/*!****************************************************************!*\
  !*** ./src/app/bible-indice/bible-indice.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title style=\"font-size: large;\">Holy Bible</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <table width=\"100%\">\n    <tr style=\"vertical-align: top;\" width=\"100%\">\n      <td width=\"50%\">\n        <ion-list>\n          <ion-item text-wrap *ngFor=\"let lib of librosAntiguoTestamento\" (click)=\"pushPage(lib.titulo,1)\">\n          <ion-icon *ngIf=\" lib.numero != -1\" name='book' is-active=\"false\" color=\"primary\">\n          </ion-icon>\n          <label  *ngIf=\" lib.numero != -1\" style=\"font-size: large;padding-left: 2px;\">{{ lib.titulo }}</label>\n          <label  *ngIf=\" lib.numero == -1\" style=\"font-size: large;padding-left: 2px;\">{{ lib.titulo }}</label>\n          </ion-item>\n        </ion-list>\n      </td>\n      <td width=\"50%\">\n        <ion-list>\n          <ion-item text-wrap *ngFor=\"let lib of librosNuevoTestamento\" (click)=\"pushPage(lib.titulo,1)\">\n          <ion-icon *ngIf=\" lib.numero != -2\" name='book' is-active=\"false\" color=\"primary\">\n          </ion-icon>\n          <label  *ngIf=\" lib.numero != -2\" style=\"font-size: large;padding-left: 2px;\">{{ lib.titulo }}</label>\n          <label  *ngIf=\" lib.numero == -2\" style=\"font-size: large;padding-left: 2px;\">{{ lib.titulo }}</label>\n          </ion-item>\n        </ion-list>\n      </td>\n    </tr>\n  </table>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_bible-indice_bible-indice_module_ts.js.map