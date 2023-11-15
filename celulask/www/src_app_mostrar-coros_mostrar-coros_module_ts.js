"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_mostrar-coros_mostrar-coros_module_ts"],{

/***/ 1179:
/*!***************************************************************!*\
  !*** ./src/app/mostrar-coros/mostrar-coros-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MostrarCorosPageRoutingModule": () => (/* binding */ MostrarCorosPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _mostrar_coros_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mostrar-coros.page */ 4258);




const routes = [
    {
        path: '',
        component: _mostrar_coros_page__WEBPACK_IMPORTED_MODULE_0__.MostrarCorosPage
    }
];
let MostrarCorosPageRoutingModule = class MostrarCorosPageRoutingModule {
};
MostrarCorosPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MostrarCorosPageRoutingModule);



/***/ }),

/***/ 1998:
/*!*******************************************************!*\
  !*** ./src/app/mostrar-coros/mostrar-coros.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MostrarCorosPageModule": () => (/* binding */ MostrarCorosPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _mostrar_coros_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mostrar-coros-routing.module */ 1179);
/* harmony import */ var _mostrar_coros_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mostrar-coros.page */ 4258);







let MostrarCorosPageModule = class MostrarCorosPageModule {
};
MostrarCorosPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _mostrar_coros_routing_module__WEBPACK_IMPORTED_MODULE_0__.MostrarCorosPageRoutingModule
        ],
        declarations: [_mostrar_coros_page__WEBPACK_IMPORTED_MODULE_1__.MostrarCorosPage]
    })
], MostrarCorosPageModule);



/***/ }),

/***/ 4258:
/*!*****************************************************!*\
  !*** ./src/app/mostrar-coros/mostrar-coros.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MostrarCorosPage": () => (/* binding */ MostrarCorosPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _mostrar_coros_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mostrar-coros.page.html?ngResource */ 191);
/* harmony import */ var _mostrar_coros_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mostrar-coros.page.scss?ngResource */ 8794);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _indice_coros_coros_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../indice-coros/coros.service */ 799);
/* harmony import */ var _awesome_cordova_plugins_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/social-sharing/ngx */ 1952);







let MostrarCorosPage = class MostrarCorosPage {
    constructor(activatedRoute, corosService, socialSharing) {
        this.activatedRoute = activatedRoute;
        this.corosService = corosService;
        this.socialSharing = socialSharing;
        this.coros = null;
        this.coro = null;
        this.message = null;
        this.file = null;
        this.link = null;
        this.subject = null;
    }
    ngOnInit() {
        this.numCoro = this.activatedRoute.snapshot.paramMap.get("id");
        this.loadCoros();
    }
    loadCoros() {
        this.corosService.getCoro(this.numCoro)
            .subscribe((corosData) => this.coros = corosData);
    }
    share(cor) {
        this.message = "Cadena de Coros " + cor.numero;
        this.message += "\n\n";
        for (let verso of cor.versos) {
            if (verso != "♪") {
                this.message += verso + "\n";
            }
            else {
                this.message += "\n";
            }
        }
        this.socialSharing.share(this.message, this.subject, this.file, this.link)
            .then(() => {
        })
            .catch(() => {
        });
    }
};
MostrarCorosPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _indice_coros_coros_service__WEBPACK_IMPORTED_MODULE_2__.CorosService },
    { type: _awesome_cordova_plugins_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_3__.SocialSharing }
];
MostrarCorosPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-mostrar-coros',
        template: _mostrar_coros_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_mostrar_coros_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MostrarCorosPage);



/***/ }),

/***/ 8794:
/*!******************************************************************!*\
  !*** ./src/app/mostrar-coros/mostrar-coros.page.scss?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = ".background {\n  background: url('IPP-T.png') 0 0/50% 35% no-repeat;\n  opacity: 1;\n  background-position: center center;\n}\n\n.contenido {\n  font-size: large;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vc3RyYXItY29yb3MucGFnZS5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vQ2VsdWxhcyUyMEp1dmVuaWxlcyUyMElQUC9pb25pYyUyMHYyL2NlbHVsYXNrL3NyYy9hcHAvbW9zdHJhci1jb3Jvcy9tb3N0cmFyLWNvcm9zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtEQUFBO0VBQ0EsVUFBQTtFQUNBLGtDQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtBQ0NKIiwiZmlsZSI6Im1vc3RyYXItY29yb3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tncm91bmR7XG4gICAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWcvSVBQLVQucG5nKSAwIDAvNTAlIDM1JSBuby1yZXBlYXQ7XG4gICAgb3BhY2l0eTogMS4wO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG59XG5cbi5jb250ZW5pZG97XG4gICAgZm9udC1zaXplOiBsYXJnZTtcbn0iLCIuYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1nL0lQUC1ULnBuZykgMCAwLzUwJSAzNSUgbm8tcmVwZWF0O1xuICBvcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xufVxuXG4uY29udGVuaWRvIHtcbiAgZm9udC1zaXplOiBsYXJnZTtcbn0iXX0= */";

/***/ }),

/***/ 191:
/*!******************************************************************!*\
  !*** ./src/app/mostrar-coros/mostrar-coros.page.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title *ngFor = \"let cor of coros\" style=\"font-size: large;\">\n      ♪ Cadena de Coros {{cor.numero}}                                                 \n     </ion-title>\n  </ion-toolbar>\n</ion-header>\n                                                                       \n <ion-content class=\"background\">\n   <div *ngFor = \"let cor of coros\" class=\"contenido\">\n     <!--ion-button expand=\"full\" color=\"light\" (click)=\"share(cor)\" color=\"primary\">\n       <ion-icon ios=\"share-social-outline\" md=\"share-social-outline\"></ion-icon>\n       &nbsp;\n       Compartir\n     </ion-button-->\n     <ion-list no-lines>                                                 \n     <ion-item text-wrap class=\"contenido\" *ngFor = \"let verso of cor.versos\">                                                     \n       <div style='font-size: large;text-align:center;width:100%;'>\n         <label *ngIf=\" verso != '♪'\">{{ verso }}</label><br/> \n       </div>                                                          \n     </ion-item>                                                      \n   </ion-list>\n   </div>\n </ion-content>                                                       \n                                                     \n ";

/***/ })

}]);
//# sourceMappingURL=src_app_mostrar-coros_mostrar-coros_module_ts.js.map