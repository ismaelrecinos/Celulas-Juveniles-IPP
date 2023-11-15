(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);



const routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'acerca-de',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_acerca-de_acerca-de_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./acerca-de/acerca-de.module */ 2783)).then(m => m.AcercaDePageModule)
    },
    {
        path: 'home',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 3467)).then(m => m.HomePageModule)
    },
    {
        path: 'tratado',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tratado_tratado_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./tratado/tratado.module */ 4747)).then(m => m.TratadoPageModule)
    },
    {
        path: 'indice-canciones',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_indice-canciones_indice-canciones_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./indice-canciones/indice-canciones.module */ 4746)).then(m => m.IndiceCancionesPageModule)
    },
    {
        path: 'indice-dinamicas',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_indice-dinamicas_indice-dinamicas_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./indice-dinamicas/indice-dinamicas.module */ 6062)).then(m => m.IndiceDinamicasPageModule)
    },
    {
        path: 'indice-lecciones',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_indice-lecciones_indice-lecciones_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./indice-lecciones/indice-lecciones.module */ 1888)).then(m => m.IndiceLeccionesPageModule)
    },
    {
        path: 'indice-alabanzas',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_indice-alabanzas_indice-alabanzas_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./indice-alabanzas/indice-alabanzas.module */ 6629)).then(m => m.IndiceAlabanzasPageModule)
    },
    {
        path: 'indice-coros',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_indice-coros_indice-coros_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./indice-coros/indice-coros.module */ 1046)).then(m => m.IndiceCorosPageModule)
    },
    {
        path: 'bible-indice',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_bible-indice_bible-indice_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./bible-indice/bible-indice.module */ 796)).then(m => m.BibleIndicePageModule)
    },
    {
        path: 'indice-biblia',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_indice-biblia_indice-biblia_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./indice-biblia/indice-biblia.module */ 9805)).then(m => m.IndiceBibliaPageModule)
    },
    {
        path: 'mostrar-versiculo/:lib/:cap/:versiculo/:biblia',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_mostrar-versiculo_mostrar-versiculo_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./mostrar-versiculo/mostrar-versiculo.module */ 9918)).then(m => m.MostrarVersiculoPageModule)
    },
    {
        path: 'mostrar-alabanza/:id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_mostrar-alabanza_mostrar-alabanza_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./mostrar-alabanza/mostrar-alabanza.module */ 7334)).then(m => m.MostrarAlabanzaPageModule)
    },
    {
        path: 'mostrar-coros/:id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_mostrar-coros_mostrar-coros_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./mostrar-coros/mostrar-coros.module */ 1998)).then(m => m.MostrarCorosPageModule)
    },
    {
        path: 'mostrar-libro/:lib/:cap/:biblia',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_mostrar-libro_mostrar-libro_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./mostrar-libro/mostrar-libro.module */ 4901)).then(m => m.MostrarLibroPageModule)
    },
    {
        path: 'mostrar-leccion/:id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_mostrar-leccion_mostrar-leccion_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./mostrar-leccion/mostrar-leccion.module */ 3470)).then(m => m.MostrarLeccionPageModule)
    },
    {
        path: 'mostrar-cancion/:id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_mostrar-cancion_mostrar-cancion_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./mostrar-cancion/mostrar-cancion.module */ 8787)).then(m => m.MostrarCancionPageModule)
    },
    {
        path: 'mostrar-dinamica/:id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_mostrar-dinamica_mostrar-dinamica_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./mostrar-dinamica/mostrar-dinamica.module */ 4829)).then(m => m.MostrarDinamicaPageModule)
    },
    {
        path: 'biblia-en-un-anio',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_biblia-en-un-anio_biblia-en-un-anio_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./biblia-en-un-anio/biblia-en-un-anio.module */ 7185)).then(m => m.BibliaEnUnAnioPageModule)
    },
    {
        path: 'mostrar-devocional/:tit/:vers/:cont',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_mostrar-devocional_mostrar-devocional_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./mostrar-devocional/mostrar-devocional.module */ 2004)).then(m => m.MostrarDevocionalPageModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 3383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 9259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let AppComponent = class AppComponent {
    constructor() {
        this.appPages = [
            { title: 'Inicio', url: '/home', icon: 'home' },
            { title: 'Santa Biblia RV1960', url: '/indice-biblia', icon: 'book' },
            { title: 'Holy Bible', url: '/bible-indice', icon: 'bookmarks' },
            { title: 'Biblia en un Año', url: '/biblia-en-un-anio', icon: 'calendar' },
            { title: 'Himnario de Alabanzas', url: '/indice-alabanzas', icon: 'musical-note' },
            { title: 'Himnario de Coros', url: '/indice-coros', icon: 'musical-notes' },
            { title: 'Cancionero', url: '/indice-canciones', icon: 'headset' },
            { title: 'Discipulado 1.A.1', url: '/indice-lecciones', icon: 'document' },
            { title: 'Guía Dinámicas', url: '/indice-dinamicas', icon: 'american-football' },
            { title: 'Tratado Evangelístico', url: '/tratado', icon: 'people' },
            { title: 'Acerca De', url: '/acerca-de', icon: 'color-palette' },
        ];
    }
};
AppComponent.ctorParameters = () => [];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-root',
        template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _indice_alabanzas_alabanza_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./indice-alabanzas/alabanza.service */ 8670);
/* harmony import */ var _indice_coros_coros_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./indice-coros/coros.service */ 799);
/* harmony import */ var _indice_biblia_biblia_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./indice-biblia/biblia.service */ 3567);
/* harmony import */ var _indice_lecciones_lecciones_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./indice-lecciones/lecciones.service */ 5092);
/* harmony import */ var _indice_canciones_canciones_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./indice-canciones/canciones.service */ 1333);
/* harmony import */ var _bible_indice_bible_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bible-indice/bible.service */ 2685);
/* harmony import */ var _biblia_en_un_anio_calendarizacion_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./biblia-en-un-anio/calendarizacion.service */ 6743);
/* harmony import */ var _awesome_cordova_plugins_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @awesome-cordova-plugins/social-sharing/ngx */ 1952);
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/file/ngx */ 2358);
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ 3081);


















let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonicModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HttpClientModule],
        providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_17__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonicRouteStrategy },
            { provide: _indice_alabanzas_alabanza_service__WEBPACK_IMPORTED_MODULE_2__.AlabanzaService },
            { provide: _indice_coros_coros_service__WEBPACK_IMPORTED_MODULE_3__.CorosService },
            { provide: _indice_biblia_biblia_service__WEBPACK_IMPORTED_MODULE_4__.BibliaService },
            { provide: _indice_lecciones_lecciones_service__WEBPACK_IMPORTED_MODULE_5__.LeccionesService },
            { provide: _indice_canciones_canciones_service__WEBPACK_IMPORTED_MODULE_6__.CancionesService },
            { provide: _bible_indice_bible_service__WEBPACK_IMPORTED_MODULE_7__.BibleService },
            { provide: _biblia_en_un_anio_calendarizacion_service__WEBPACK_IMPORTED_MODULE_8__.CalendarizacionService },
            { provide: _awesome_cordova_plugins_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_9__.SocialSharing },
            { provide: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_10__.File },
            { provide: _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_11__.FileOpener }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 2685:
/*!***********************************************!*\
  !*** ./src/app/bible-indice/bible.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BibleService": () => (/* binding */ BibleService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 8987);



let BibleService = class BibleService {
    constructor(http) {
        this.http = http;
    }
    getCapitulo(libro, capitulo) {
        return this.http.get('./assets/data/Bible/' + libro + '/Capitulo' + capitulo + '.json');
    }
    getIndiceBiblia() {
        return this.http.get('./assets/data/indiceBible.json');
    }
    getIndiceCapitulos(libro) {
        return this.http.get('./assets/data/Chapters/' + libro + '.json');
    }
};
BibleService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
BibleService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()
], BibleService);



/***/ }),

/***/ 6743:
/*!**************************************************************!*\
  !*** ./src/app/biblia-en-un-anio/calendarizacion.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarizacionService": () => (/* binding */ CalendarizacionService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 8987);



let CalendarizacionService = class CalendarizacionService {
    constructor(http) {
        this.http = http;
        this.lecturas = null;
        this.lecturaDomingo = null;
        this.lecturaLunes = null;
        this.lecturaMartes = null;
        this.lecturaMiercoles = null;
        this.lecturaJueves = null;
        this.lecturaViernes = null;
        this.lecturaSabado = null;
    }
    getNextOrPreviousWeekData(nextOrPrevious, diaReferencia, mesReferencia, anioReferencia) {
        let mesActualIndice = 0;
        let numeroDiasmeses = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        console.log(`diaReferencia: ${diaReferencia}, mesReferencia: ${mesReferencia}, anioReferencia: ${anioReferencia}`);
        let dateStr = mesReferencia + '/' + diaReferencia + '/' + anioReferencia + '';
        let date = new Date(dateStr);
        let dd = String(date.getDate()).padStart(2, '0');
        let mm = String(date.getMonth() + 1).padStart(2, '0');
        let yyyy = date.getFullYear();
        if (mm === "01") {
            mesActualIndice = 0;
        }
        else if (mm === "02") {
            mesActualIndice = 1;
        }
        else if (mm === "03") {
            mesActualIndice = 2;
        }
        else if (mm === "04") {
            mesActualIndice = 3;
        }
        else if (mm === "05") {
            mesActualIndice = 4;
        }
        else if (mm === "06") {
            mesActualIndice = 5;
        }
        else if (mm === "07") {
            mesActualIndice = 6;
        }
        else if (mm === "08") {
            mesActualIndice = 7;
        }
        else if (mm === "09") {
            mesActualIndice = 8;
        }
        else if (mm === "10") {
            mesActualIndice = 9;
        }
        else if (mm === "11") {
            mesActualIndice = 10;
        }
        else if (mm === "12") {
            mesActualIndice = 11;
        }
        let sumador = 7;
        if (nextOrPrevious == 0) { //Semana anterior
            sumador *= -1;
        }
        let diaInicioSemana = parseInt(dd) + sumador;
        let numeroMes = parseInt(mm);
        if (diaInicioSemana <= 0) {
            if (mesActualIndice - 1 <= 0) {
                diaInicioSemana = diaInicioSemana + numeroDiasmeses[11];
                mesActualIndice = 11;
                numeroMes = 12;
                yyyy = yyyy - 1;
            }
            else {
                diaInicioSemana = diaInicioSemana + numeroDiasmeses[mesActualIndice - 1];
                mesActualIndice = mesActualIndice - 1;
                numeroMes = numeroMes - 1;
            }
        }
        else if (diaInicioSemana > numeroDiasmeses[mesActualIndice]) {
            if (mesActualIndice + 1 > 11) {
                diaInicioSemana = diaInicioSemana - numeroDiasmeses[0] - 1;
                mesActualIndice = 0;
                numeroMes = 1;
                yyyy = yyyy + 1;
            }
            else {
                diaInicioSemana = diaInicioSemana - numeroDiasmeses[mesActualIndice];
                mesActualIndice = mesActualIndice + 1;
                numeroMes = numeroMes + 1;
            }
        }
        if (diaInicioSemana <= 0) {
            //console.log(`diaInicioSemana: ${diaInicioSemana}`);
            diaInicioSemana = 1;
        }
        let dateRef = numeroMes + '/' + diaInicioSemana + '/' + yyyy + '';
        //console.log(`dateRef: ${diaInicioSemana+'/'+numeroMes+'/'+yyyy+''}`);
        this.getWeekData(dateRef);
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve('resolved');
            }, 500);
        });
    }
    getWeekData(dateRef) {
        this.lecturaDomingo = null;
        this.lecturaLunes = null;
        this.lecturaMartes = null;
        this.lecturaMiercoles = null;
        this.lecturaJueves = null;
        this.lecturaViernes = null;
        this.lecturaSabado = null;
        let mesActual = "";
        let mesAnterior = "";
        let mesSiguiente = "";
        let mesActualIndice = 0;
        let hayMesAnterior = false;
        let hayMesSiguiente = false;
        let diaInicioMesAnterior = null;
        let diaFinMesAnterior = null;
        let diaInicioMesSiguiente = null;
        let diaFinMesSiguiente = null;
        this.lecturas = [];
        let numeroDiasmeses = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        let today = new Date();
        if (dateRef != null) {
            today = new Date(dateRef);
        }
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0');
        var yyyy = today.getFullYear();
        if (mm === "01") {
            mesAnterior = "diciembre";
            mesActual = "enero";
            mesSiguiente = "febrero";
            mesActualIndice = 0;
        }
        else if (mm === "02") {
            mesAnterior = "enero";
            mesActual = "febrero";
            mesSiguiente = "marzo";
            mesActualIndice = 1;
        }
        else if (mm === "03") {
            mesAnterior = "febrero";
            mesActual = "marzo";
            mesSiguiente = "abril";
            mesActualIndice = 2;
        }
        else if (mm === "04") {
            mesAnterior = "marzo";
            mesActual = "abril";
            mesSiguiente = "mayo";
            mesActualIndice = 3;
        }
        else if (mm === "05") {
            mesAnterior = "abril";
            mesActual = "mayo";
            mesSiguiente = "junio";
            mesActualIndice = 4;
        }
        else if (mm === "06") {
            mesAnterior = "mayo";
            mesActual = "junio";
            mesSiguiente = "julio";
            mesActualIndice = 5;
        }
        else if (mm === "07") {
            mesAnterior = "junio";
            mesActual = "julio";
            mesSiguiente = "agosto";
            mesActualIndice = 6;
        }
        else if (mm === "08") {
            mesAnterior = "julio";
            mesActual = "agosto";
            mesSiguiente = "septiembre";
            mesActualIndice = 7;
        }
        else if (mm === "09") {
            mesAnterior = "agosto";
            mesActual = "septiembre";
            mesSiguiente = "octubre";
            mesActualIndice = 8;
        }
        else if (mm === "10") {
            mesAnterior = "septiembre";
            mesActual = "octubre";
            mesSiguiente = "noviembre";
            mesActualIndice = 9;
        }
        else if (mm === "11") {
            mesAnterior = "octubre";
            mesActual = "noviembre";
            mesSiguiente = "diciembre";
            mesActualIndice = 10;
        }
        else if (mm === "12") {
            mesAnterior = "noviembre";
            mesActual = "diciembre";
            mesSiguiente = "enero";
            mesActualIndice = 11;
        }
        var dateStr = mm + '/' + dd + '/' + yyyy + '';
        var date = new Date(dateStr);
        var dayOfWeek = date.toLocaleDateString("es-ES", { weekday: 'long' });
        let diaInicioSemana = parseInt(dd);
        switch (dayOfWeek) {
            case "domingo":
                break;
            case "lunes":
                diaInicioSemana = parseInt(dd) - 1;
                if (diaInicioSemana < 0) {
                    if (mesActualIndice - 1 < 0) {
                        diaInicioMesAnterior = diaInicioSemana + numeroDiasmeses[11];
                    }
                    else {
                        diaInicioMesAnterior = diaInicioSemana + numeroDiasmeses[mesActualIndice - 1];
                    }
                    hayMesAnterior = true;
                    diaInicioSemana = 1;
                }
                break;
            case "martes":
                diaInicioSemana = parseInt(dd) - 2;
                if (diaInicioSemana < 0) {
                    if (mesActualIndice - 1 < 0) {
                        diaInicioMesAnterior = diaInicioSemana + numeroDiasmeses[11];
                    }
                    else {
                        diaInicioMesAnterior = diaInicioSemana + numeroDiasmeses[mesActualIndice - 1];
                    }
                    hayMesAnterior = true;
                    diaInicioSemana = 1;
                }
                break;
            case "miércoles":
                diaInicioSemana = parseInt(dd) - 3;
                if (diaInicioSemana < 0) {
                    if (mesActualIndice - 1 < 0) {
                        diaInicioMesAnterior = diaInicioSemana + numeroDiasmeses[11];
                    }
                    else {
                        diaInicioMesAnterior = diaInicioSemana + numeroDiasmeses[mesActualIndice - 1];
                    }
                    hayMesAnterior = true;
                    diaInicioSemana = 1;
                }
                break;
            case "jueves":
                diaInicioSemana = parseInt(dd) - 4;
                if (diaInicioSemana < 0) {
                    if (mesActualIndice - 1 < 0) {
                        diaInicioMesAnterior = diaInicioSemana + numeroDiasmeses[11];
                    }
                    else {
                        diaInicioMesAnterior = diaInicioSemana + numeroDiasmeses[mesActualIndice - 1];
                    }
                    hayMesAnterior = true;
                    diaInicioSemana = 1;
                }
                break;
            case "viernes":
                diaInicioSemana = parseInt(dd) - 5;
                if (diaInicioSemana < 0) {
                    if (mesActualIndice - 1 < 0) {
                        diaInicioMesAnterior = diaInicioSemana + numeroDiasmeses[11];
                    }
                    else {
                        diaInicioMesAnterior = diaInicioSemana + numeroDiasmeses[mesActualIndice - 1];
                    }
                    hayMesAnterior = true;
                    diaInicioSemana = 1;
                }
                break;
            case "sábado":
                diaInicioSemana = parseInt(dd) - 6;
                if (diaInicioSemana < 0) {
                    if (mesActualIndice - 1 < 0) {
                        diaInicioMesAnterior = diaInicioSemana + numeroDiasmeses[11];
                    }
                    else {
                        diaInicioMesAnterior = diaInicioSemana + numeroDiasmeses[mesActualIndice - 1];
                    }
                    hayMesAnterior = true;
                    diaInicioSemana = 1;
                }
                break;
        }
        //console.log(`diaInicioSemana+6 ${diaInicioSemana+6} > numeroDiasmeses[mesActualIndice] ${numeroDiasmeses[mesActualIndice]}`);
        let indiceMesSiguiente = mesActualIndice;
        if ((diaInicioSemana + 6) > numeroDiasmeses[mesActualIndice]) {
            hayMesSiguiente = true;
            indiceMesSiguiente = mesActualIndice + 1;
            if (indiceMesSiguiente > 11) {
                indiceMesSiguiente = 0;
            }
            diaFinMesSiguiente = diaInicioSemana + 6 - numeroDiasmeses[mesActualIndice];
            diaInicioMesSiguiente = 1;
            //console.log(`indiceMesSiguiente: ${indiceMesSiguiente}, diaInicioMesSiguiente: ${diaInicioMesSiguiente}, diaFinMesSiguiente: ${diaFinMesSiguiente}`);
        }
        let sumador = 6;
        if (hayMesAnterior) {
            let indiceMes = mesActualIndice - 1;
            if (indiceMes < 0) {
                indiceMes = 11;
            }
            sumador = 6 - (numeroDiasmeses[indiceMes] - diaInicioMesAnterior) - 1;
        }
        let diaFinSemana = diaInicioSemana + sumador;
        if (diaFinSemana > numeroDiasmeses[mesActualIndice]) {
            diaFinSemana = numeroDiasmeses[mesActualIndice];
        }
        let numeroAnio = yyyy;
        if (hayMesAnterior) {
            let indiceMes = mesActualIndice - 1;
            if (indiceMes < 0) {
                indiceMes = 11;
                numeroAnio--;
            }
            for (let i = diaInicioMesAnterior; i <= numeroDiasmeses[indiceMes]; i++) {
                this.http.get('./assets/data/bibliaEnUnAnio/' + mesAnterior + i + '.json')
                    .subscribe((lecturaDiariaData) => {
                    lecturaDiariaData[0].numeroMes = indiceMes + 1;
                    lecturaDiariaData[0].numeroAnio = numeroAnio;
                    let dateStr = lecturaDiariaData[0].numeroMes + '/' + lecturaDiariaData[0].dia + '/' + lecturaDiariaData[0].numeroAnio + '';
                    let date = new Date(dateStr);
                    let dayOfWeek = date.toLocaleDateString("es-ES", { weekday: 'long' });
                    lecturaDiariaData[0].nombreDia = dayOfWeek;
                    switch (dayOfWeek) {
                        case "domingo":
                            lecturaDiariaData[0].numeroDiaSemana = 1;
                            this.lecturaDomingo = lecturaDiariaData;
                            break;
                        case "lunes":
                            lecturaDiariaData[0].numeroDiaSemana = 2;
                            this.lecturaLunes = lecturaDiariaData;
                            break;
                        case "martes":
                            lecturaDiariaData[0].numeroDiaSemana = 3;
                            this.lecturaMartes = lecturaDiariaData;
                            break;
                        case "miércoles":
                            lecturaDiariaData[0].numeroDiaSemana = 4;
                            this.lecturaMiercoles = lecturaDiariaData;
                            break;
                        case "jueves":
                            lecturaDiariaData[0].numeroDiaSemana = 5;
                            this.lecturaJueves = lecturaDiariaData;
                            break;
                        case "viernes":
                            lecturaDiariaData[0].numeroDiaSemana = 6;
                            this.lecturaViernes = lecturaDiariaData;
                            break;
                        case "sábado":
                            lecturaDiariaData[0].numeroDiaSemana = 7;
                            this.lecturaSabado = lecturaDiariaData;
                            break;
                    }
                });
            }
        }
        for (let x = diaInicioSemana; x <= diaFinSemana; x++) {
            this.http.get('./assets/data/bibliaEnUnAnio/' + mesActual + x + '.json')
                .subscribe((lecturaDiariaData) => {
                lecturaDiariaData[0].numeroMes = mesActualIndice + 1;
                lecturaDiariaData[0].numeroAnio = numeroAnio;
                let dateStr = lecturaDiariaData[0].numeroMes + '/' + lecturaDiariaData[0].dia + '/' + lecturaDiariaData[0].numeroAnio + '';
                let date = new Date(dateStr);
                let dayOfWeek = date.toLocaleDateString("es-ES", { weekday: 'long' });
                lecturaDiariaData[0].nombreDia = dayOfWeek;
                switch (dayOfWeek) {
                    case "domingo":
                        lecturaDiariaData[0].numeroDiaSemana = 1;
                        this.lecturaDomingo = lecturaDiariaData;
                        break;
                    case "lunes":
                        lecturaDiariaData[0].numeroDiaSemana = 2;
                        this.lecturaLunes = lecturaDiariaData;
                        break;
                    case "martes":
                        lecturaDiariaData[0].numeroDiaSemana = 3;
                        this.lecturaMartes = lecturaDiariaData;
                        break;
                    case "miércoles":
                        lecturaDiariaData[0].numeroDiaSemana = 4;
                        this.lecturaMiercoles = lecturaDiariaData;
                        break;
                    case "jueves":
                        lecturaDiariaData[0].numeroDiaSemana = 5;
                        this.lecturaJueves = lecturaDiariaData;
                        break;
                    case "viernes":
                        lecturaDiariaData[0].numeroDiaSemana = 6;
                        this.lecturaViernes = lecturaDiariaData;
                        break;
                    case "sábado":
                        lecturaDiariaData[0].numeroDiaSemana = 7;
                        this.lecturaSabado = lecturaDiariaData;
                        break;
                }
            });
        }
        if (hayMesSiguiente) {
            for (let z = diaInicioMesSiguiente; z <= diaFinMesSiguiente; z++) {
                this.http.get('./assets/data/bibliaEnUnAnio/' + mesSiguiente + z + '.json')
                    .subscribe((lecturaDiariaData) => {
                    lecturaDiariaData[0].numeroMes = indiceMesSiguiente + 1;
                    lecturaDiariaData[0].numeroAnio = numeroAnio;
                    let dateStr = lecturaDiariaData[0].numeroMes + '/' + lecturaDiariaData[0].dia + '/' + lecturaDiariaData[0].numeroAnio + '';
                    let date = new Date(dateStr);
                    let dayOfWeek = date.toLocaleDateString("es-ES", { weekday: 'long' });
                    lecturaDiariaData[0].nombreDia = dayOfWeek;
                    switch (dayOfWeek) {
                        case "domingo":
                            lecturaDiariaData[0].numeroDiaSemana = 1;
                            this.lecturaDomingo = lecturaDiariaData;
                            break;
                        case "lunes":
                            lecturaDiariaData[0].numeroDiaSemana = 2;
                            this.lecturaLunes = lecturaDiariaData;
                            break;
                        case "martes":
                            lecturaDiariaData[0].numeroDiaSemana = 3;
                            this.lecturaMartes = lecturaDiariaData;
                            break;
                        case "miércoles":
                            lecturaDiariaData[0].numeroDiaSemana = 4;
                            this.lecturaMiercoles = lecturaDiariaData;
                            break;
                        case "jueves":
                            lecturaDiariaData[0].numeroDiaSemana = 5;
                            this.lecturaJueves = lecturaDiariaData;
                            break;
                        case "viernes":
                            lecturaDiariaData[0].numeroDiaSemana = 6;
                            this.lecturaViernes = lecturaDiariaData;
                            break;
                        case "sábado":
                            lecturaDiariaData[0].numeroDiaSemana = 7;
                            this.lecturaSabado = lecturaDiariaData;
                            break;
                    }
                });
            }
        }
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve('resolved');
            }, 500);
        });
    }
    getDayData() {
        let mesActualIndice = 0;
        let mesActual = "";
        this.lecturas = [];
        let today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0');
        var yyyy = today.getFullYear();
        let dayOfWeek = today.toLocaleDateString("es-ES", { weekday: 'long' });
        if (mm === "01") {
            mesActual = "enero";
            mesActualIndice = 0;
        }
        else if (mm === "02") {
            mesActual = "febrero";
            mesActualIndice = 1;
        }
        else if (mm === "03") {
            mesActual = "marzo";
            mesActualIndice = 2;
        }
        else if (mm === "04") {
            mesActual = "abril";
            mesActualIndice = 3;
        }
        else if (mm === "05") {
            mesActual = "mayo";
            mesActualIndice = 4;
        }
        else if (mm === "06") {
            mesActual = "junio";
            mesActualIndice = 5;
        }
        else if (mm === "07") {
            mesActual = "julio";
            mesActualIndice = 6;
        }
        else if (mm === "08") {
            mesActual = "agosto";
            mesActualIndice = 7;
        }
        else if (mm === "09") {
            mesActual = "septiembre";
            mesActualIndice = 8;
        }
        else if (mm === "10") {
            mesActual = "octubre";
            mesActualIndice = 9;
        }
        else if (mm === "11") {
            mesActual = "noviembre";
            mesActualIndice = 10;
        }
        else if (mm === "12") {
            mesActual = "diciembre";
            mesActualIndice = 11;
        }
        this.http.get('./assets/data/bibliaEnUnAnio/' + mesActual + parseInt(dd) + '.json')
            .subscribe((lecturaDiariaData) => {
            lecturaDiariaData[0].numeroMes = mesActualIndice + 1;
            lecturaDiariaData[0].numeroAnio = yyyy;
            lecturaDiariaData[0].nombreDia = dayOfWeek;
            this.lecturas.push(lecturaDiariaData);
        });
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve('resolved');
            }, 500);
        });
    }
    ordenar() {
        if (this.lecturaDomingo != null)
            this.lecturas.push(this.lecturaDomingo);
        if (this.lecturaLunes != null)
            this.lecturas.push(this.lecturaLunes);
        if (this.lecturaMartes != null)
            this.lecturas.push(this.lecturaMartes);
        if (this.lecturaMiercoles != null)
            this.lecturas.push(this.lecturaMiercoles);
        if (this.lecturaJueves != null)
            this.lecturas.push(this.lecturaJueves);
        if (this.lecturaViernes != null)
            this.lecturas.push(this.lecturaViernes);
        if (this.lecturaSabado != null)
            this.lecturas.push(this.lecturaSabado);
    }
};
CalendarizacionService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
CalendarizacionService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()
], CalendarizacionService);



/***/ }),

/***/ 8670:
/*!******************************************************!*\
  !*** ./src/app/indice-alabanzas/alabanza.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlabanzaService": () => (/* binding */ AlabanzaService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 8987);



let AlabanzaService = class AlabanzaService {
    constructor(http) {
        this.http = http;
    }
    getAlabanza(numero) {
        return this.http.get('./assets/data/alabanzas/alabanza' + numero + '.json');
    }
    getIndiceAlabanzas() {
        return this.http.get('./assets/data/indiceAlabanzas.json');
    }
};
AlabanzaService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
AlabanzaService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()
], AlabanzaService);



/***/ }),

/***/ 3567:
/*!*************************************************!*\
  !*** ./src/app/indice-biblia/biblia.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BibliaService": () => (/* binding */ BibliaService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 8987);



let BibliaService = class BibliaService {
    constructor(http) {
        this.http = http;
    }
    getCapitulo(libro, capitulo, biblia) {
        if (biblia === 'Santa Biblia RV1960') {
            return this.http.get('./assets/data/Biblia/' + libro + '/Capitulo' + capitulo + '.json');
        }
        else {
            return this.http.get('./assets/data/Bible/' + libro + '/Capitulo' + capitulo + '.json');
        }
    }
    getIndiceBiblia() {
        return this.http.get('./assets/data/indiceBiblia.json');
    }
    getIndiceCapitulos(libro, biblia) {
        if (biblia === 'Santa Biblia RV1960') {
            return this.http.get('./assets/data/Capitulos/' + libro + '.json');
        }
        else {
            return this.http.get('./assets/data/Chapters/' + libro + '.json');
        }
    }
    getNumeroVersiculos(biblia) {
        return this.http.get('./assets/data/numeroVersiculos.json');
    }
};
BibliaService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
BibliaService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()
], BibliaService);



/***/ }),

/***/ 1333:
/*!*******************************************************!*\
  !*** ./src/app/indice-canciones/canciones.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CancionesService": () => (/* binding */ CancionesService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 8987);



let CancionesService = class CancionesService {
    constructor(http) {
        this.http = http;
    }
    getCancion(numero) {
        return this.http.get('./assets/data/canciones/cancion' + numero + '.json');
    }
    getIndiceCanciones() {
        return this.http.get('./assets/data/canciones/indiceCanciones.json');
    }
};
CancionesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
CancionesService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()
], CancionesService);



/***/ }),

/***/ 799:
/*!***********************************************!*\
  !*** ./src/app/indice-coros/coros.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CorosService": () => (/* binding */ CorosService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 8987);



let CorosService = class CorosService {
    constructor(http) {
        this.http = http;
    }
    getCoro(numero) {
        return this.http.get('./assets/data/coros/cadenaCoros' + numero + '.json');
    }
    getIndiceCoros() {
        return this.http.get('./assets/data/coros/indiceCoros.json');
    }
};
CorosService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
CorosService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()
], CorosService);



/***/ }),

/***/ 5092:
/*!*******************************************************!*\
  !*** ./src/app/indice-lecciones/lecciones.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeccionesService": () => (/* binding */ LeccionesService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 8987);



let LeccionesService = class LeccionesService {
    constructor(http) {
        this.http = http;
    }
    getLeccion(numero) {
        return this.http.get('./assets/data/discipulado/discipulado' + numero + '.json');
    }
    getIndiceLecciones() {
        return this.http.get('./assets/data/discipulado/indiceDiscipulado.json');
    }
};
LeccionesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
LeccionesService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()
], LeccionesService);



/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 6057);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		79,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		5593,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		3225,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4812,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		6655,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		4856,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		3059,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		8648,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		8308,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		4690,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		4090,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		6214,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		9447,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		9689,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		8840,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		749,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		9667,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		3288,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		5473,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		3634,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		2855,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		495,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		8737,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		9632,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		4446,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		2275,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		8050,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		8994,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		3592,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		5454,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		290,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		2666,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		4816,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		5534,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		4902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		1938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		8179,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		668,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		1624,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		9989,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		8902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		199,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		8395,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		6357,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		8268,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		5269,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		2875,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 9259:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-menu ion-content {\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\n\nion-menu.md ion-content {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n}\n\nion-menu.md ion-list {\n  padding: 20px 0;\n}\n\nion-menu.md ion-note {\n  margin-bottom: 30px;\n}\n\nion-menu.md ion-list-header,\nion-menu.md ion-note {\n  padding-left: 10px;\n}\n\nion-menu.md ion-list#inbox-list {\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n}\n\nion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n}\n\nion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n  margin-bottom: 18px;\n  color: #757575;\n  min-height: 26px;\n}\n\nion-menu.md ion-item {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\n\nion-menu.md ion-item.selected {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\n\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.md ion-item ion-icon {\n  color: #616e7e;\n}\n\nion-menu.md ion-item ion-label {\n  font-weight: 500;\n}\n\nion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\n\nion-menu.ios ion-list {\n  padding: 20px 0 0 0;\n}\n\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\n\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: #73849a;\n}\n\nion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\n\nion-menu.ios ion-list-header,\nion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\n\nion-item.selected {\n  --color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL0NlbHVsYXMlMjBKdXZlbmlsZXMlMjBJUFAvaW9uaWMlMjB2Mi9jZWx1bGFzay9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJFQUFBO0FDQ0Y7O0FERUE7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7QUNDRjs7QURFQTs7RUFFRSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsMkRBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUVBLGdCQUFBO0FDQUY7O0FER0E7RUFDRSxlQUFBO0VBRUEsbUJBQUE7RUFFQSxjQUFBO0VBRUEsZ0JBQUE7QUNIRjs7QURNQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0hGOztBRE1BO0VBQ0Usc0RBQUE7QUNIRjs7QURNQTtFQUNFLCtCQUFBO0FDSEY7O0FETUE7RUFDRSxjQUFBO0FDSEY7O0FETUE7RUFDRSxnQkFBQTtBQ0hGOztBRE1BO0VBQ0Usc0JBQUE7QUNIRjs7QURNQTtFQUNFLG1CQUFBO0FDSEY7O0FETUE7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0FDSEY7O0FETUE7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNIRjs7QURNQTtFQUNFLCtCQUFBO0FDSEY7O0FETUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQ0hGOztBRE1BO0VBQ0Usa0JBQUE7QUNIRjs7QURNQTs7RUFFRSxrQkFBQTtFQUNBLG1CQUFBO0FDSEY7O0FETUE7RUFDRSxrQkFBQTtBQ0hGOztBRE1BO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBRUEsb0NBQUE7QUNKRjs7QURPQTtFQUNFLGlDQUFBO0FDSkYiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLW1lbnUgaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmKSk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA4cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDhweDtcbiAgLS1wYWRkaW5nLXRvcDogMjBweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3Qge1xuICBwYWRkaW5nOiAyMHB4IDA7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1ub3RlIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QtaGVhZGVyLFxuaW9uLW1lbnUubWQgaW9uLW5vdGUge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0I2luYm94LWxpc3Qge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCAjZDdkOGRhKTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjaW5ib3gtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG5cbiAgbWluLWhlaWdodDogMjBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuXG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XG5cbiAgY29sb3I6ICM3NTc1NzU7XG5cbiAgbWluLWhlaWdodDogMjZweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQge1xuICAtLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4xNCk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0gaW9uLWljb24ge1xuICBjb2xvcjogIzYxNmU3ZTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1saXN0IHtcbiAgcGFkZGluZzogMjBweCAwIDAgMDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMTZweDtcbiAgLS1wYWRkaW5nLWVuZDogMTZweDtcbiAgLS1taW4taGVpZ2h0OiA1MHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0gaW9uLWljb24ge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAjNzM4NDlhO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3QtaGVhZGVyLFxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbmlvbi1ub3RlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDE2cHg7XG5cbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xufVxuXG5pb24taXRlbS5zZWxlY3RlZCB7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn0iLCJpb24tbWVudSBpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmZmYpKTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctc3RhcnQ6IDhweDtcbiAgLS1wYWRkaW5nLWVuZDogOHB4O1xuICAtLXBhZGRpbmctdG9wOiAyMHB4O1xuICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCB7XG4gIHBhZGRpbmc6IDIwcHggMDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLW5vdGUge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdC1oZWFkZXIsXG5pb24tbWVudS5tZCBpb24tbm90ZSB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjaW5ib3gtbGlzdCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsICNkN2Q4ZGEpO1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCNpbmJveC1saXN0IGlvbi1saXN0LWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWluLWhlaWdodDogMjBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xuICBjb2xvcjogIzc1NzU3NTtcbiAgbWluLWhlaWdodDogMjZweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQge1xuICAtLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4xNCk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0gaW9uLWljb24ge1xuICBjb2xvcjogIzYxNmU3ZTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1saXN0IHtcbiAgcGFkZGluZzogMjBweCAwIDAgMDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMTZweDtcbiAgLS1wYWRkaW5nLWVuZDogMTZweDtcbiAgLS1taW4taGVpZ2h0OiA1MHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0gaW9uLWljb24ge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAjNzM4NDlhO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3QtaGVhZGVyLFxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbmlvbi1ub3RlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbn1cblxuaW9uLWl0ZW0uc2VsZWN0ZWQge1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59Il19 */";

/***/ }),

/***/ 3383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-app>\n  <ion-split-pane contentId=\"main-content\">\n    <ion-menu contentId=\"main-content\" type=\"overlay\" color=\"dark\">\n      <ion-content>\n        <ion-list id=\"inbox-list\">\n          <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of appPages; let i = index\">\n            <ion-item routerDirection=\"root\" [routerLink]=\"[p.url]\" lines=\"none\" detail=\"false\" routerLinkActive=\"selected\">\n              <ion-icon slot=\"start\" [ios]=\"p.icon + '-outline'\" [md]=\"p.icon + '-sharp'\" color=\"primary\"></ion-icon>\n              <ion-label>{{ p.title }}</ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n        </ion-list>\n      </ion-content>\n    </ion-menu>\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\n  </ion-split-pane>\n</ion-app>\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map