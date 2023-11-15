"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_indice-dinamicas_indice-dinamicas_module_ts"],{

/***/ 9750:
/*!*********************************************************************!*\
  !*** ./src/app/indice-dinamicas/indice-dinamicas-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IndiceDinamicasPageRoutingModule": () => (/* binding */ IndiceDinamicasPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _indice_dinamicas_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./indice-dinamicas.page */ 7844);




const routes = [
    {
        path: '',
        component: _indice_dinamicas_page__WEBPACK_IMPORTED_MODULE_0__.IndiceDinamicasPage
    }
];
let IndiceDinamicasPageRoutingModule = class IndiceDinamicasPageRoutingModule {
};
IndiceDinamicasPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], IndiceDinamicasPageRoutingModule);



/***/ }),

/***/ 6062:
/*!*************************************************************!*\
  !*** ./src/app/indice-dinamicas/indice-dinamicas.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IndiceDinamicasPageModule": () => (/* binding */ IndiceDinamicasPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _indice_dinamicas_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./indice-dinamicas-routing.module */ 9750);
/* harmony import */ var _indice_dinamicas_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./indice-dinamicas.page */ 7844);







let IndiceDinamicasPageModule = class IndiceDinamicasPageModule {
};
IndiceDinamicasPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _indice_dinamicas_routing_module__WEBPACK_IMPORTED_MODULE_0__.IndiceDinamicasPageRoutingModule
        ],
        declarations: [_indice_dinamicas_page__WEBPACK_IMPORTED_MODULE_1__.IndiceDinamicasPage]
    })
], IndiceDinamicasPageModule);



/***/ }),

/***/ 7844:
/*!***********************************************************!*\
  !*** ./src/app/indice-dinamicas/indice-dinamicas.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IndiceDinamicasPage": () => (/* binding */ IndiceDinamicasPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _indice_dinamicas_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./indice-dinamicas.page.html?ngResource */ 7522);
/* harmony import */ var _indice_dinamicas_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./indice-dinamicas.page.scss?ngResource */ 8186);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);





let IndiceDinamicasPage = class IndiceDinamicasPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        this.initializeItems();
    }
    pushPage(page) {
        let id = this.items.indexOf(page);
        if (id != 38 && id != 118) {
            this.router.navigate(['mostrar-dinamica', id]);
        }
    }
    initializeItems() {
        this.items = [
            '1. Coronemos al rey',
            '2. El rey de los elementos',
            '3. Me pica',
            '4. El náufrago',
            '5. Entrelazados',
            '6. Solo no puedes',
            '7. Rueda de nombres',
            '8. Rasgos en común',
            '9. La pelota',
            '10. Quemazón, reventazón',
            '11. La silla vacía',
            '12. Las lanchas',
            '13. Los refranes',
            '14. Las estatuas de marfil',
            '15. Los animales',
            '16. Hilos de colores',
            '17. Sonríe si me quieres',
            '18. El leñador o la leñadora',
            '19. La pelota cooperativa',
            '20. La pelota enrodillada',
            '21. Orden en la banca',
            '22. Buscando cola',
            '23. El túnel humano',
            '24. Rompecabezas',
            '25. Pelota caliente',
            '26. El fútbol de manos',
            '27. La reja',
            '28. El cuchicheo',
            '29. La espiral',
            '30. La rueda enrodillada',
            '31. Las olas'
        ];
    }
};
IndiceDinamicasPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
IndiceDinamicasPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-indice-dinamicas',
        template: _indice_dinamicas_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_indice_dinamicas_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], IndiceDinamicasPage);



/***/ }),

/***/ 8186:
/*!************************************************************************!*\
  !*** ./src/app/indice-dinamicas/indice-dinamicas.page.scss?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbmRpY2UtZGluYW1pY2FzLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 7522:
/*!************************************************************************!*\
  !*** ./src/app/indice-dinamicas/indice-dinamicas.page.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title style=\"font-size: large;\">Dinámicas</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content text-center [fullscreen]=\"true\">\n  <ion-list>\n    <ion-item text-wrap *ngFor=\"let item of items\" (click)=\"pushPage(item)\">\n    <ion-icon name='american-football' is-active=\"false\" color=\"primary\">\n    </ion-icon>\n    <label style=\"font-size: medium;padding-left: 2px;\">{{ item }}</label>\n    </ion-item>\n  </ion-list>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_indice-dinamicas_indice-dinamicas_module_ts.js.map