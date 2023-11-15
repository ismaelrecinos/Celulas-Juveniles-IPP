"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_acerca-de_acerca-de_module_ts"],{

/***/ 7377:
/*!*******************************************************!*\
  !*** ./src/app/acerca-de/acerca-de-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AcercaDePageRoutingModule": () => (/* binding */ AcercaDePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _acerca_de_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./acerca-de.page */ 7320);




const routes = [
    {
        path: '',
        component: _acerca_de_page__WEBPACK_IMPORTED_MODULE_0__.AcercaDePage
    }
];
let AcercaDePageRoutingModule = class AcercaDePageRoutingModule {
};
AcercaDePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AcercaDePageRoutingModule);



/***/ }),

/***/ 2783:
/*!***********************************************!*\
  !*** ./src/app/acerca-de/acerca-de.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AcercaDePageModule": () => (/* binding */ AcercaDePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _acerca_de_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./acerca-de-routing.module */ 7377);
/* harmony import */ var _acerca_de_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./acerca-de.page */ 7320);







let AcercaDePageModule = class AcercaDePageModule {
};
AcercaDePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _acerca_de_routing_module__WEBPACK_IMPORTED_MODULE_0__.AcercaDePageRoutingModule
        ],
        declarations: [_acerca_de_page__WEBPACK_IMPORTED_MODULE_1__.AcercaDePage]
    })
], AcercaDePageModule);



/***/ }),

/***/ 7320:
/*!*********************************************!*\
  !*** ./src/app/acerca-de/acerca-de.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AcercaDePage": () => (/* binding */ AcercaDePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _acerca_de_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./acerca-de.page.html?ngResource */ 5535);
/* harmony import */ var _acerca_de_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./acerca-de.page.scss?ngResource */ 4257);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let AcercaDePage = class AcercaDePage {
    constructor() { }
    ngOnInit() {
    }
};
AcercaDePage.ctorParameters = () => [];
AcercaDePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-acerca-de',
        template: _acerca_de_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_acerca_de_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AcercaDePage);



/***/ }),

/***/ 4257:
/*!**********************************************************!*\
  !*** ./src/app/acerca-de/acerca-de.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = ".page-acercaDe .tdTable {\n  padding-right: 5px;\n  padding-left: 5px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n.page-acercaDe .tdTable2 {\n  padding-right: 2px;\n  padding-left: 2px;\n  padding-top: 2px;\n  padding-bottom: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjZXJjYS1kZS5wYWdlLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi9DZWx1bGFzJTIwSnV2ZW5pbGVzJTIwSVBQL2lvbmljJTIwdjIvY2VsdWxhc2svc3JjL2FwcC9hY2VyY2EtZGUvYWNlcmNhLWRlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQztFQUNDLGtCQUFBO0VBQW1CLGlCQUFBO0VBQWtCLGdCQUFBO0VBQWlCLG1CQUFBO0FDR3hEO0FEREM7RUFDQyxrQkFBQTtFQUFtQixpQkFBQTtFQUFrQixnQkFBQTtFQUFpQixtQkFBQTtBQ014RCIsImZpbGUiOiJhY2VyY2EtZGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2UtYWNlcmNhRGUge1xuXHQudGRUYWJsZXtcblx0XHRwYWRkaW5nLXJpZ2h0OiA1cHg7cGFkZGluZy1sZWZ0OiA1cHg7cGFkZGluZy10b3A6IDVweDtwYWRkaW5nLWJvdHRvbTogNXB4O1xuXHR9XG5cdC50ZFRhYmxlMntcblx0XHRwYWRkaW5nLXJpZ2h0OiAycHg7cGFkZGluZy1sZWZ0OiAycHg7cGFkZGluZy10b3A6IDJweDtwYWRkaW5nLWJvdHRvbTogMnB4O1xuXHR9XG59IiwiLnBhZ2UtYWNlcmNhRGUgLnRkVGFibGUge1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuLnBhZ2UtYWNlcmNhRGUgLnRkVGFibGUyIHtcbiAgcGFkZGluZy1yaWdodDogMnB4O1xuICBwYWRkaW5nLWxlZnQ6IDJweDtcbiAgcGFkZGluZy10b3A6IDJweDtcbiAgcGFkZGluZy1ib3R0b206IDJweDtcbn0iXX0= */";

/***/ }),

/***/ 5535:
/*!**********************************************************!*\
  !*** ./src/app/acerca-de/acerca-de.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title style=\"font-size: large;\"></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" text-center class=\"page-acercaDe\">\n  <ion-list no-lines>\n    <ion-item text-wrap>\n      <div style=\"text-align:center;width:100%;\">\n      <label style=\"font-size:large;font-weight:bold;color: #003153;\">\n        Iglesia Evangélica del Príncipe de Paz\n      </label>\n      <br/>\n      <table width=\"100%\">\n        <tr>\n          <td class=\"tdTable2\" style=\"font-weight: bold;\">Isaias 9:6, Con un mensaje de fe y esperanza</td>\n        </tr>\n        <tr>\n          <td class=\"tdTable2\">Colonia Anémona, pasaje 2, casa #10, San Martín, San Salvador, El Salvador</td>\n        </tr>\n        <tr>\n          <td class=\"tdTable2\">Pastor Lic. Noé Nehemías Marroquín</td>\n        </tr>\n      </table>\n      </div>   \n    </ion-item>\n\n    <ion-item>\n      <div style=\"text-align: center;\">\n        <img src=\"assets/img/IEPP.png\" \n        style=\"width: 75%;\" >\n      </div>      \n    </ion-item>\n\n    <ion-item text-wrap>\n      <div style=\"text-align:left;width:100%;\">\n      <h2 style=\"text-align: center;font-weight: bold;\">Programación de Cultos</h2>\n      \n      <br/>\n      <table border=\"1\" style=\"border-color:auto;\">\n        <tr>\n          <td class=\"tdTable\" style=\"font-weight: bold;\">Domingo</td>\n          <td class=\"tdTable\">\n          08:00 AM - 09:45 AM Culto de Jóvenes, \n          10:00 AM - 12:00 PM Culto General, \n          03:00 PM - 05:00 PM Culto General</td>\n        </tr>\n        <tr>\n          <td class=\"tdTable\" style=\"font-weight: bold;\">Lunes</td>\n          <td class=\"tdTable\">05:00 PM - 07:00 PM Culto de oración</td>\n        </tr>\n        <tr>\n          <td class=\"tdTable\" style=\"font-weight: bold;\">Martes</td>\n          <td class=\"tdTable\">\n            <table>\n              <tr>\n                <td>\n                  08:00 AM Ayuno dirigido por Unión Femenil\n                </td>\n              </tr>\n              <tr>\n                <td>\n                  &nbsp;\n                </td>\n              </tr>\n              <tr>\n                <td>\n                  04:00 PM - 06:00 PM Culto de Unión Femenil  \n                </td>\n              </tr>\n            </table>\n        </td>\n        </tr>\n        <tr>\n          <td class=\"tdTable\" style=\"font-weight: bold;\">Miércoles</td>\n          <td class=\"tdTable\">Red de células</td>\n        </tr>\n        <tr>\n          <td class=\"tdTable\" style=\"font-weight: bold;\">Jueves</td>\n          <td class=\"tdTable\">05:00 PM - 07:00 PM Culto de Consejeros</td>\n        </tr>\n        <tr>\n          <td class=\"tdTable\" style=\"font-weight: bold;\">Viernes</td>\n          <td class=\"tdTable\">Red de células</td>\n        </tr>\n        <tr>\n          <td class=\"tdTable\" style=\"font-weight: bold;\">Sábado</td>\n          <td class=\"tdTable\">\n            <table>\n              <tr>\n                <td>\n                  01:30 PM - 06:00 PM Evangelismo y Discipulado\n                </td>\n              </tr>\n              <tr>\n                <td>\n                  &nbsp;\n                </td>\n              </tr>\n              <tr>\n                <td>\n                  Red de células\n                </td>\n              </tr>\n            </table>\n          </td>\n        </tr>\n      </table>\n      </div>   \n    </ion-item>\n\n    <ion-item text-wrap style=\"vertical-align: middle;\">\n      <div style=\"text-align:center;width:100%;font-size:medium;font-weight:bold;color: #003153;\">\n        <a style=\"text-decoration: none;\" href=\"https://www.facebook.com/ipp.sanmartin7\" target=\"_blank\">\n          <ion-icon name=\"logo-facebook\"></ion-icon>\n          &nbsp;  \n          IPP San Martín\n        </a>\n      </div>   \n    </ion-item>\n\n    <ion-item>\n      <div style=\"text-align: right;font-size: small;\">\n        <label>© Ismael Recinos</label>\n        <br>\n        <label>Versión: 2.0.10</label>\n      </div>\n    </ion-item>\n  </ion-list>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_acerca-de_acerca-de_module_ts.js.map