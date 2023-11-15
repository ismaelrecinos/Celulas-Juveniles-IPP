"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_biblia-en-un-anio_biblia-en-un-anio_module_ts"],{

/***/ 6570:
/*!***********************************************************************!*\
  !*** ./src/app/biblia-en-un-anio/biblia-en-un-anio-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BibliaEnUnAnioPageRoutingModule": () => (/* binding */ BibliaEnUnAnioPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _biblia_en_un_anio_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./biblia-en-un-anio.page */ 5529);




const routes = [
    {
        path: '',
        component: _biblia_en_un_anio_page__WEBPACK_IMPORTED_MODULE_0__.BibliaEnUnAnioPage
    }
];
let BibliaEnUnAnioPageRoutingModule = class BibliaEnUnAnioPageRoutingModule {
};
BibliaEnUnAnioPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], BibliaEnUnAnioPageRoutingModule);



/***/ }),

/***/ 7185:
/*!***************************************************************!*\
  !*** ./src/app/biblia-en-un-anio/biblia-en-un-anio.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BibliaEnUnAnioPageModule": () => (/* binding */ BibliaEnUnAnioPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _biblia_en_un_anio_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./biblia-en-un-anio-routing.module */ 6570);
/* harmony import */ var _biblia_en_un_anio_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./biblia-en-un-anio.page */ 5529);







let BibliaEnUnAnioPageModule = class BibliaEnUnAnioPageModule {
};
BibliaEnUnAnioPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _biblia_en_un_anio_routing_module__WEBPACK_IMPORTED_MODULE_0__.BibliaEnUnAnioPageRoutingModule
        ],
        declarations: [_biblia_en_un_anio_page__WEBPACK_IMPORTED_MODULE_1__.BibliaEnUnAnioPage]
    })
], BibliaEnUnAnioPageModule);



/***/ }),

/***/ 5529:
/*!*************************************************************!*\
  !*** ./src/app/biblia-en-un-anio/biblia-en-un-anio.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BibliaEnUnAnioPage": () => (/* binding */ BibliaEnUnAnioPage)
/* harmony export */ });
/* harmony import */ var _Users_srecinos_Documents_ionic_Celulas_Juveniles_IPP_ionic_v2_celulask_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _biblia_en_un_anio_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./biblia-en-un-anio.page.html?ngResource */ 9714);
/* harmony import */ var _biblia_en_un_anio_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./biblia-en-un-anio.page.scss?ngResource */ 369);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _biblia_en_un_anio_calendarizacion_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../biblia-en-un-anio/calendarizacion.service */ 6743);







let BibliaEnUnAnioPage = class BibliaEnUnAnioPage {
  constructor(calendarizacionService, router) {
    this.calendarizacionService = calendarizacionService;
    this.router = router;
    this.lecturas = [];
    this.currentDay = null;
    this.currentMonth = null;
    this.currentYear = null;
  }

  ngOnInit() {
    this.loadWeekData();
  }

  pushPage(tit, vers, cont) {
    this.router.navigate(['mostrar-devocional', tit, vers, cont]);
  }

  loadWeekData() {
    var _this = this;

    return (0,_Users_srecinos_Documents_ionic_Celulas_Juveniles_IPP_ionic_v2_celulask_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, '0');
      var mm = String(today.getMonth() + 1).padStart(2, '0');
      var yyyy = today.getFullYear();
      _this.currentDay = parseInt(dd);
      _this.currentMonth = parseInt(mm);
      _this.currentYear = yyyy;
      yield _this.calendarizacionService.getWeekData(null);

      _this.calendarizacionService.ordenar();

      _this.lecturas = _this.calendarizacionService.lecturas;
    })();
  }

  loadPreviousWeekData() {
    var _this2 = this;

    return (0,_Users_srecinos_Documents_ionic_Celulas_Juveniles_IPP_ionic_v2_celulask_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this2.calendarizacionService.getNextOrPreviousWeekData(0, _this2.lecturas[0][0].dia, _this2.lecturas[0][0].numeroMes, _this2.lecturas[0][0].numeroAnio);

      _this2.calendarizacionService.ordenar();

      _this2.lecturas = _this2.calendarizacionService.lecturas;
    })();
  }

  loadNextWeekData() {
    var _this3 = this;

    return (0,_Users_srecinos_Documents_ionic_Celulas_Juveniles_IPP_ionic_v2_celulask_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this3.calendarizacionService.getNextOrPreviousWeekData(1, _this3.lecturas[0][0].dia, _this3.lecturas[0][0].numeroMes, _this3.lecturas[0][0].numeroAnio);

      _this3.calendarizacionService.ordenar();

      _this3.lecturas = _this3.calendarizacionService.lecturas;
    })();
  }

  burbuja() {
    var n, i, k, aux;
    n = this.lecturas.length;
    console.log(`n: ${n}`); // Algoritmo de burbuja

    for (k = 1; k < n; k++) {
      for (i = 0; i < n - k; i++) {
        if (this.lecturas[i][0].numeroDiaSemana > this.lecturas[i + 1][0].numeroDiaSemana) {
          aux = this.lecturas[i];
          this.lecturas[i] = this.lecturas[i + 1];
          this.lecturas[i + 1] = aux;
        }
      }
    }
  }

};

BibliaEnUnAnioPage.ctorParameters = () => [{
  type: _biblia_en_un_anio_calendarizacion_service__WEBPACK_IMPORTED_MODULE_3__.CalendarizacionService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
}];

BibliaEnUnAnioPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-biblia-en-un-anio',
  template: _biblia_en_un_anio_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_biblia_en_un_anio_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], BibliaEnUnAnioPage);


/***/ }),

/***/ 369:
/*!**************************************************************************!*\
  !*** ./src/app/biblia-en-un-anio/biblia-en-un-anio.page.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiaWJsaWEtZW4tdW4tYW5pby5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 9714:
/*!**************************************************************************!*\
  !*** ./src/app/biblia-en-un-anio/biblia-en-un-anio.page.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title style=\"font-size: large;\">Biblia en un Año</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-list>\n    <ion-item text-wrap>\n      <table width=\"100%\">\n        <tr style=\"vertical-align: top;\" width=\"100%\">\n          <td width=\"25%\" style=\"text-align:center;padding-top:4px;padding-bottom:4px;\">\n            <strong><label style=\"font-size: large;padding-left: 2px;\">Día</label></strong>\n          </td>\n          <td width=\"75%\" style=\"text-align:center;padding-top:4px;padding-bottom:4px;\">\n            <strong>\n              <label style=\"font-size: large;padding-left: 4px;\">\n                Lectura Diaria y Devocional\n              </label><br/>\n            </strong>\n          </td>\n        </tr>\n      </table>\n    </ion-item>\n    <ion-item text-wrap (click)=\"loadPreviousWeekData();\" style=\"text-align: center;vertical-align: middle;\">\n      <div style=\"width:100%;text-align: center;\">\n        <table style=\"width:100%;text-align: center;\">\n          <tr>\n            <td style=\"text-align:right;width: 35%;\">\n            <ion-icon ios=\"arrow-back-circle\" md=\"arrow-back-circle\" style=\"font-size: xx-large;\" color=\"primary\"></ion-icon>       \n            </td>\n            <td style=\"text-align:left;width: 65%;\">\n              <label style=\"font-size: large;padding-left: 4px;\"> Semana Anterior </label>  \n            </td>\n          </tr>\n        </table>\n      </div>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-item text-wrap *ngFor=\"let lectura of lecturas\" (click)=\"pushPage(lectura[0].tituloDevocional, lectura[0].versiculoBaseDevocional, lectura[0].contenidoDevocional)\">\n      <table width=\"100%\">\n        <tr style=\"vertical-align: top;\" width=\"100%\">\n          <td width=\"25%\" \n            *ngIf=\"lectura[0].dia == currentDay && lectura[0].numeroMes == currentMonth && lectura[0].numeroAnio == currentYear\" style=\"background-color: #e4eedb;font-size: large;padding-left: 2px;text-align:center;padding-top:4px;padding-bottom:4px;border: 2px solid; border-color: #e4eedb;\">\n            <label style=\"font-size: large;padding-left: 2px;\">{{lectura[0].nombreDia}} {{lectura[0].dia}} de {{lectura[0].mes}}</label>\n          </td>\n          <td width=\"25%\"\n            *ngIf=\"lectura[0].dia != currentDay || lectura[0].numeroMes != currentMonth || lectura[0].numeroAnio != currentYear\" style=\"background-color: #e0eaf5;font-size: large;padding-left: 2px;text-align:center;padding-top:4px;padding-bottom:4px;border: 2px solid; border-color: #e0eaf5;\">\n            <label style=\"font-size: large;padding-left: 2px;\">{{lectura[0].nombreDia}} {{lectura[0].dia}} de {{lectura[0].mes}}</label>\n          </td>\n          <td width=\"75%\" \n              *ngIf=\"lectura[0].dia == currentDay && lectura[0].numeroMes == currentMonth && lectura[0].numeroAnio == currentYear\" \n              style=\"background-color: #e4eedb;text-align:justify;padding-top:4px;padding-bottom:4px;padding-left:4px;padding-right:4px;border: 2px solid; border-color: #e4eedb;\">\n            <strong>\n              <label style=\"font-size: large;\">{{ lectura[0].lecturaDiaria}}</label><br/>\n            </strong>\n            <label style=\"font-size: large;\">{{ lectura[0].tituloDevocional}}</label>\n          </td>\n          <td width=\"75%\" \n              *ngIf=\"lectura[0].dia != currentDay || lectura[0].numeroMes != currentMonth || lectura[0].numeroAnio != currentYear\" \n              style=\"text-align:justify;padding-top:4px;padding-bottom:4px;padding-left:4px;padding-right:4px;border: 2px solid; border-color: #e0eaf5;\">\n            <strong>\n              <label style=\"font-size: large;\">{{ lectura[0].lecturaDiaria}}</label><br/>\n            </strong>\n            <label style=\"font-size: large;\">{{ lectura[0].tituloDevocional}}</label>\n          </td>\n        </tr>\n      </table>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-item text-wrap (click)=\"loadNextWeekData();\" style=\"text-align: center;vertical-align: middle;\">\n      <div style=\"width:100%;text-align: center;\">\n        <table style=\"width:100%;text-align: center;\">\n          <tr>\n            <td style=\"text-align:right;width: 35%;\">\n            <ion-icon ios=\"arrow-forward-circle\" md=\"arrow-forward-circle\" style=\"font-size: xx-large;\" color=\"primary\"></ion-icon>\n            </td>\n            <td style=\"text-align:left;width: 65%;\">\n              <label style=\"font-size: large;padding-left: 4px;\"> Semana Siguiente </label>  \n            </td>\n          </tr>\n        </table>\n      </div>\n    </ion-item>\n  </ion-list>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_biblia-en-un-anio_biblia-en-un-anio_module_ts.js.map