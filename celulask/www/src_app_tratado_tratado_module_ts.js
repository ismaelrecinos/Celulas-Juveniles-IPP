"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tratado_tratado_module_ts"],{

/***/ 5325:
/*!***************************************************!*\
  !*** ./src/app/tratado/tratado-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TratadoPageRoutingModule": () => (/* binding */ TratadoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _tratado_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tratado.page */ 456);




const routes = [
    {
        path: '',
        component: _tratado_page__WEBPACK_IMPORTED_MODULE_0__.TratadoPage
    }
];
let TratadoPageRoutingModule = class TratadoPageRoutingModule {
};
TratadoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TratadoPageRoutingModule);



/***/ }),

/***/ 4747:
/*!*******************************************!*\
  !*** ./src/app/tratado/tratado.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TratadoPageModule": () => (/* binding */ TratadoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _tratado_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tratado-routing.module */ 5325);
/* harmony import */ var _tratado_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tratado.page */ 456);







let TratadoPageModule = class TratadoPageModule {
};
TratadoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _tratado_routing_module__WEBPACK_IMPORTED_MODULE_0__.TratadoPageRoutingModule
        ],
        declarations: [_tratado_page__WEBPACK_IMPORTED_MODULE_1__.TratadoPage]
    })
], TratadoPageModule);



/***/ }),

/***/ 456:
/*!*****************************************!*\
  !*** ./src/app/tratado/tratado.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TratadoPage": () => (/* binding */ TratadoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tratado_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tratado.page.html?ngResource */ 5785);
/* harmony import */ var _tratado_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tratado.page.scss?ngResource */ 442);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let TratadoPage = class TratadoPage {
    constructor() { }
    ngOnInit() {
    }
};
TratadoPage.ctorParameters = () => [];
TratadoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-tratado',
        template: _tratado_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tratado_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TratadoPage);



/***/ }),

/***/ 442:
/*!******************************************************!*\
  !*** ./src/app/tratado/tratado.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0cmF0YWRvLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 5785:
/*!******************************************************!*\
  !*** ./src/app/tratado/tratado.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title style=\"font-size: large;\">\n      ¡DIOS TE BENDIGA!\n    </ion-title> \n  </ion-toolbar>\n</ion-header>\n\n<ion-content text-center class=\"page-tratado\" [fullscreen]=\"true\">\n  <ion-list no-lines>                                                         \n  <ion-item text-wrap>\n    <div style=\"text-align:center;width:100%;\">\n    <br/>\n    <label style=\"color:auto;font-weight:bold;\">Querido</label> amigo o amiga en este precioso día Dios está\n    tocando la puerta de tu corazón. Él es caballeroso y espera que tú abras esa puerta para Él \n    poder entrar y hacer de ti un nuevo hombre o una nueva mujer para su gloria y honra. Amén.\n    </div>   \n    </ion-item> \n    <ion-item text-wrap>\n      <div>\n      </div>   \n    </ion-item>\n  \n  <ion-item text-wrap>                                                       \n    <div style=\"text-align:center;width:100%;\"> \n   <label>\n   He aquí, yo estoy a la puerta y llamo, si alguno oye mi voz, y abre la puerta entraré a él y \n   cenaré con él y él conmigo.\n   </label>\n   <br/>\n   <label style=\"font-weight:bold;\">Apocalipsis 3:20</label>  \n    </div>                                                       \n  </ion-item> \n  <ion-item text-wrap>\n    <div>\n    </div>   \n  </ion-item>\n  \n  <ion-item text-wrap>                                                       \n    <div style=\"text-align:center;width:100%;\"> \n   <label>\n   Venid luego, dice Jehová y estemos a cuenta; si vuestros pecados fueren como la grana,\n   como la nieve serán emblanquecidos; si fueren rojos como el carmesí, vendrán a ser como \n   blanca lana.\n   </label><br/>\n   <label style=\"font-weight:bold;\">Isaías 1:18</label> \n    </div>                                                       \n  </ion-item> \n  <ion-item text-wrap>\n    <div>\n    </div>   \n  </ion-item>\n  \n  <ion-item text-wrap>\n    <div style=\"text-align:center;width:100%;font-weight:bold;\">\n    <label style=\"color:auto;text-decoration:underline;\">¡HAY SALVACIÓN PARA TI!</label>\n    </div>   \n    </ion-item> \n  \n    <ion-item text-wrap>\n      DIOS TE AMA. \n      Porque de tal manera amó Dios al mundo, que ha dado a su hijo unigénito, para que todo aquel\n      que en Él crea no se pierda, mas tenga vida eterna. Juan 3:16 \n    </ion-item> \n  \n  <ion-item text-wrap>\n      DIOS DESEA BENDECIRTE \n      Yo he venido para que tengan vida, y la tengan en abundancia. Juan 10:10 \n    </ion-item>\n  \n  <ion-item text-wrap>\n      EL PECADO TE SEPARA DE DIOS \n      Por cuanto todos pecaron y están destituidos de la gloria de Dios. Romanos 3:23 \n    </ion-item>\n  \n  <ion-item text-wrap>\n      EL PECADO TRAE LA MUERTE \n      Porque la paga del pecado es muerte, mas la dádiva de Dios es vida eterna en Cristo Jesús, \n    Señor nuestro. Romanos 6:23 \n    </ion-item>\n  \n  <ion-item text-wrap>\n      JESÚS MURIÓ POR TUS PECADOS \n      Mas Dios muestra su amor para con nosotros, en que siendo aun pecadores Cristo murió por\n    nosotros. Romanos 5:8 \n    </ion-item>\n  \n  <ion-item text-wrap>\n      QUE SI CONFESARES CON TU BOCA QUE JESÚS \n      es el Señor, y creyeres en tu corazón que Dios le levantó de los muertos serás salvo. Romanos 10:9 \n    </ion-item>\n  \n  <ion-item text-wrap>\n      LA GRAN DECISIÓN: QUE RECIBAS A CRISTO COMO SALVADOR Y SEÑOR \n      Mas a todos los que le recibieron, a los que creen en su nombre les dio potestad de ser hechos \n    hijos de Dios. Juan 1:12 \n    </ion-item>\n\n  </ion-list>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_tratado_tratado_module_ts.js.map