(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _book_list_book_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./book-list/book-list.component */ "./src/app/book-list/book-list.component.ts");
/* harmony import */ var _book_about_book_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./book-about/book-about.component */ "./src/app/book-about/book-about.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _book_home_book_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./book-home/book-home.component */ "./src/app/book-home/book-home.component.ts");
/* harmony import */ var _book_edit_book_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./book-edit/book-edit.component */ "./src/app/book-edit/book-edit.component.ts");
/* harmony import */ var _enter_form_enter_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./enter-form/enter-form.component */ "./src/app/enter-form/enter-form.component.ts");
/* harmony import */ var _regist_form_regist_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./regist-form/regist-form.component */ "./src/app/regist-form/regist-form.component.ts");
/* harmony import */ var _ef_details_ef_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ef-details/ef-details.component */ "./src/app/ef-details/ef-details.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









//Добавлен новый компонент

var routes = [
    { path: '', component: _book_home_book_home_component__WEBPACK_IMPORTED_MODULE_5__["BookHomeComponent"] },
    { path: 'book-home', component: _book_home_book_home_component__WEBPACK_IMPORTED_MODULE_5__["BookHomeComponent"] },
    { path: 'book-list', component: _book_list_book_list_component__WEBPACK_IMPORTED_MODULE_2__["BookListComponent"] },
    { path: 'enter-form', component: _enter_form_enter_form_component__WEBPACK_IMPORTED_MODULE_7__["EnterFormComponent"] },
    { path: 'regist-form', component: _regist_form_regist_form_component__WEBPACK_IMPORTED_MODULE_8__["RegistFormComponent"] },
    { path: 'book-about', component: _book_about_book_about_component__WEBPACK_IMPORTED_MODULE_3__["BookAboutComponent"] },
    { path: 'book/edit/:id', component: _book_edit_book_edit_component__WEBPACK_IMPORTED_MODULE_6__["BookEditComponent"] },
    //Добавлен новый компонент
    { path: 'ef-details/:id', component: _ef_details_ef_details_component__WEBPACK_IMPORTED_MODULE_9__["EfDetailsComponent"] },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__["PageNotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Muli:400,700');\r\n\r\nbody {\r\n    background:#e8e8e8;\r\n    font-family: 'Muli';\r\n}\r\n\r\n/* div.bgcblue{\r\n    background-color:#58B3F1;\r\n    height: 800px;\r\n} */\r\n\r\ndiv .apptitle{\r\n    color: #263238;\r\n    font-family: 'Libre Barcode 128 Text', cursive;\r\n    font-size: 75px;\r\n    text-align: center;\r\n}\r\n\r\nh2.slogan{\r\n    font-size: 30px;\r\n    color: #e8e8e8;\r\n    text-align: center;\r\n    font-family: 'Lato';\r\n    font-weight: 400;\r\n    margin-bottom: 50px;\r\n}\r\n\r\n.h300{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    padding: 50px;\r\n}\r\n\r\ndiv.bgcpink > .startnow{\r\n    padding: 20px;\r\n    color: rgb(51, 51, 236);\r\n    background-color: rgb(247, 177, 152);\r\n    font-size: 34px;\r\n    font-family: 'Montserrat', sans-serif;\r\n    text-align: center;\r\n    display: block;\r\n    text-decoration: none;\r\n    font-weight: bold;\r\n}\r\n\r\ndiv.bgcpink > .startnow:hover{\r\n    background-color:rgb(224, 147, 91);\r\n    color: rgb(79, 79, 221);\r\n\r\n}\r\n\r\nbutton{\r\n    text-transform: uppercase;\r\n}\r\n\r\nbutton.active{\r\n    background-color: #9ccc65;\r\n    color:blue;\r\n}\r\n\r\ndiv.enter-form{\r\n    margin-right: 0;\r\n\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"wrapper\">\n    <div class=\"bgcblue\">\n\n        <mat-toolbar color=\"primary\" class=\"h300\">\n            <nav>\n                <button mat-flat-button color=\"primary\" routerLink = \"/book-home\" routerLinkActive = \"active\">Добавить книги</button>\n                <button mat-flat-button color=\"primary\" routerLink = \"/book-list\" routerLinkActive = \"active\">Редактировать</button>\n                <button mat-flat-button color=\"primary\" routerLink = \"/book-about\" routerLinkActive = \"active\">Топ 10 книг</button>\n            </nav>\n            <h1 class=\"apptitle\">Bookorama</h1>\n            <nav>\n                <button mat-flat-button color=\"primary\" routerLink = \"/enter-form\" routerLinkActive = \"active\">Войти</button>\n                <button mat-flat-button color=\"primary\" routerLink = \"/regist-form\" routerLinkActive = \"active\">Регистрация</button>\n            </nav>\n\n\n\n\n        </mat-toolbar>\n\n\n\n        <!-- <h2 class=\"slogan\">Save your most favorite books here!</h2> -->\n\n        <!-- <app-enter-form></app-enter-form> -->\n\n\n\n    </div>\n\n</div>\n\n\n\n<router-outlet></router-outlet>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bookorama_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bookorama.service */ "./src/app/bookorama.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { FormGroup, FormControl } from '../../node_modules/@angular/forms';
//import { FormGroup, FormControl} from '@angular/forms';
var AppComponent = /** @class */ (function () {
    function AppComponent(_bookorama) {
        this._bookorama = _bookorama;
        this.books = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        this.books = this._bookorama.getListBooks();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_bookorama_service__WEBPACK_IMPORTED_MODULE_1__["BookoramaService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../node_modules/@angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _bookorama_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./bookorama.service */ "./src/app/bookorama.service.ts");
/* harmony import */ var _book_home_book_home_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./book-home/book-home.component */ "./src/app/book-home/book-home.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _book_list_book_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./book-list/book-list.component */ "./src/app/book-list/book-list.component.ts");
/* harmony import */ var _book_about_book_about_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./book-about/book-about.component */ "./src/app/book-about/book-about.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _shared_book_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./shared/book.service */ "./src/app/shared/book.service.ts");
/* harmony import */ var _book_edit_book_edit_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./book-edit/book-edit.component */ "./src/app/book-edit/book-edit.component.ts");
/* harmony import */ var _enter_form_enter_form_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./enter-form/enter-form.component */ "./src/app/enter-form/enter-form.component.ts");
/* harmony import */ var _regist_form_regist_form_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./regist-form/regist-form.component */ "./src/app/regist-form/regist-form.component.ts");
/* harmony import */ var _ef_details_ef_details_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./ef-details/ef-details.component */ "./src/app/ef-details/ef-details.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//Добавлен
























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _book_home_book_home_component__WEBPACK_IMPORTED_MODULE_17__["BookHomeComponent"],
                _book_list_book_list_component__WEBPACK_IMPORTED_MODULE_19__["BookListComponent"],
                _book_about_book_about_component__WEBPACK_IMPORTED_MODULE_20__["BookAboutComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_21__["PageNotFoundComponent"],
                _book_edit_book_edit_component__WEBPACK_IMPORTED_MODULE_23__["BookEditComponent"],
                _enter_form_enter_form_component__WEBPACK_IMPORTED_MODULE_24__["EnterFormComponent"],
                _regist_form_regist_form_component__WEBPACK_IMPORTED_MODULE_25__["RegistFormComponent"],
                _ef_details_ef_details_component__WEBPACK_IMPORTED_MODULE_26__["EfDetailsComponent"],
            ],
            imports: [
                _app_routing_module__WEBPACK_IMPORTED_MODULE_18__["AppRoutingModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                //Добавлен
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
                _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__["MatRadioModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatTableModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"]
            ],
            providers: [_bookorama_service__WEBPACK_IMPORTED_MODULE_16__["BookoramaService"], _shared_book_service__WEBPACK_IMPORTED_MODULE_22__["bookService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/book-about/book-about.component.css":
/*!*****************************************************!*\
  !*** ./src/app/book-about/book-about.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bgc{\r\n    background:#f1f8e9;\r\n    height: 100%;\r\n}\r\n\r\n.wrapper{\r\n    margin: 0 auto;\r\n    width: 80%;\r\n}\r\n\r\np{\r\n    padding-top: 20px;\r\n    margin-left: 20px;\r\n}\r\n\r\n.title{\r\n    margin-bottom: 35px;\r\n    margin-top: 40px;\r\n}\r\n\r\na{\r\n    margin-left: 20px;\r\n    padding-top: 20px;\r\n}"

/***/ }),

/***/ "./src/app/book-about/book-about.component.html":
/*!******************************************************!*\
  !*** ./src/app/book-about/book-about.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p>\n  book-about works!\n</p> -->\n<div class=\"bgc\">\n  <p>В 2003 году в Объединенном королевстве Великобритании телеканал и радиостанция BBC провели глобальный опрос жителей страны\n    с призывом голосовать за их любимые книги всех времен. Голосование длилось с апреля по октябрь, участие в опросе приняли\n    более 1 млн. человек.</p>\n  <p>В итоге был составлен известный список 200 лучших романов (The Big Read) по версии BBC, которые считаются лучшими литературнымипроизведениями\n    всех времен. Сам список представляет собой микс из любимых детских книг и классических произведений, но все же в списке\n    больше современной литературы.</p>\n\n  <div class=\"wrapper\">\n\n    <h2 class=\"title\">Топ-10 по версии BBC</h2>\n    <ul *ngFor=\"let book of allBooks\">\n      <mat-card>\n        <li (click)=\"onSelect(book)\">№{{book.id}} Автор: {{book.author}}\n          <br> Название: {{book.book}}</li>\n      </mat-card>\n    </ul>\n\n  </div>\n\n  <a href=\"https://ru.wikipedia.org/wiki/200_%D0%BB%D1%83%D1%87%D1%88%D0%B8%D1%85_%D0%BA%D0%BD%D0%B8%D0%B3_%D0%BF%D0%BE_%D0%B2%D0%B5%D1%80%D1%81%D0%B8%D0%B8_%D0%91%D0%B8-%D0%B1%D0%B8-%D1%81%D0%B8\">Полная версия списка</a>\n\n</div>\n"

/***/ }),

/***/ "./src/app/book-about/book-about.component.ts":
/*!****************************************************!*\
  !*** ./src/app/book-about/book-about.component.ts ***!
  \****************************************************/
/*! exports provided: BookAboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookAboutComponent", function() { return BookAboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bookorama_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bookorama.service */ "./src/app/bookorama.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookAboutComponent = /** @class */ (function () {
    function BookAboutComponent(_router, _bookorama1) {
        this._router = _router;
        this._bookorama1 = _bookorama1;
        this.allBooks = [];
    }
    BookAboutComponent.prototype.ngOnInit = function () {
        this.allBooks = this._bookorama1.getListBooks();
    };
    BookAboutComponent.prototype.onSelect = function () {
    };
    BookAboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-book-about',
            template: __webpack_require__(/*! ./book-about.component.html */ "./src/app/book-about/book-about.component.html"),
            styles: [__webpack_require__(/*! ./book-about.component.css */ "./src/app/book-about/book-about.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _bookorama_service__WEBPACK_IMPORTED_MODULE_2__["BookoramaService"]])
    ], BookAboutComponent);
    return BookAboutComponent;
}());



/***/ }),

/***/ "./src/app/book-edit/book-edit.component.css":
/*!***************************************************!*\
  !*** ./src/app/book-edit/book-edit.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\r\n  max-width: 1000px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.bgc {\r\n  background: #f1f8e9;\r\n  height: 100vh;\r\n}\r\n\r\n.mat-form-field {\r\n  width: 500px;\r\n}\r\n\r\n.label {\r\n  margin-right: 30px;\r\n  margin-left: 40px;\r\n}\r\n\r\n.btn-back {\r\n  margin-top: 30px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/book-edit/book-edit.component.html":
/*!****************************************************!*\
  !*** ./src/app/book-edit/book-edit.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bgc\">\n  <div class=\"wrapper\">\n    <mat-card>\n      <div *ngIf=\"book\">\n        <div>\n          <div>\n            <label class=\"label\" for=\"name\">Название книги:</label>\n            <mat-form-field>\n              <input matInput [(ngModel)]=\"book.book\">\n            </mat-form-field>\n          </div>\n        </div>\n        <div>\n          <div>\n            <mat-checkbox [(ngModel)]=\"book.completed\">Прочитана!</mat-checkbox>\n          </div>\n        </div>\n      </div>\n    </mat-card>\n\n    <button class=\"btn-back\" mat-flat-button routerLink=\"/book-list\">Назад</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/book-edit/book-edit.component.ts":
/*!**************************************************!*\
  !*** ./src/app/book-edit/book-edit.component.ts ***!
  \**************************************************/
/*! exports provided: BookEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookEditComponent", function() { return BookEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_book_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/book.service */ "./src/app/shared/book.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookEditComponent = /** @class */ (function () {
    function BookEditComponent(_currentRoute, _service) {
        this._currentRoute = _currentRoute;
        this._service = _service;
    }
    BookEditComponent.prototype.ngOnInit = function () {
        var id = +this._currentRoute.snapshot.paramMap.get("id");
        this.book = this._service.getById(id);
    };
    BookEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-book-edit',
            template: __webpack_require__(/*! ./book-edit.component.html */ "./src/app/book-edit/book-edit.component.html"),
            styles: [__webpack_require__(/*! ./book-edit.component.css */ "./src/app/book-edit/book-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_node_modules_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _shared_book_service__WEBPACK_IMPORTED_MODULE_2__["bookService"]])
    ], BookEditComponent);
    return BookEditComponent;
}());



/***/ }),

/***/ "./src/app/book-home/book-home.component.css":
/*!***************************************************!*\
  !*** ./src/app/book-home/book-home.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title_h3 {\r\n  text-align: center;\r\n}\r\n\r\n.d-f {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.wrapper {\r\n  max-width: 1000px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.title {\r\n  text-align: center;\r\n  margin-top: 30px;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.title_h3 {\r\n  padding-top: 30px;\r\n}\r\n\r\n.title_h4 {\r\n  padding-top: 30px;\r\n  padding-bottom: 20px;\r\n}\r\n\r\np {\r\n  margin-left: 20px;\r\n  margin-right: 20px;\r\n  text-align: justify;\r\n}\r\n\r\nmat-card {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.form-control-search {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.form-group-search {\r\n  margin-bottom: 70px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/book-home/book-home.component.html":
/*!****************************************************!*\
  !*** ./src/app/book-home/book-home.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h1 class=\"title\">Добавьте книгу</h1>\n  <p>С другой стороны укрепление и развитие структуры играет важную роль в формировании направлений прогрессивного развития.Значимость\n    этих проблем настолько очевидна, что реализация намеченных плановых заданий требуют от нас анализа соответствующийусловий\n    активизации. Повседневная практика показывает, что реализация намеченных плановых заданий позволяет выполнять важные\n    задания по разработке новых предложений. Разнообразный и богатый опыт дальнейшее развитие различных форм деятельности\n    требуют от нас анализа существенных финансовых и административных условий. Значимость этих проблем настолько очевидна,\n    что начало повседневной работы по формированию позиции в значительной степени обуславливает создание систем массового\n    участия.\n  </p>\n\n\n  <div class=\"wrapper\">\n    <div class=\"container-fluid\">\n\n      <div class=\"form-group form-group-search\">\n        <label for=\"\">Поиск</label>\n        <input type=\"text\" class=\"form-control form-control-search\" [(ngModel)]=\"search\">\n        <button type=\"button\" class=\"btn btn-primary btn-block\" (click)=\"onSearch()\">Найти книгу</button>\n\n        <h3 class=\"title_h4\" *ngIf=\"xy?.title\">{{xy?.title}} уже добавлена</h3>\n\n      </div>\n\n      <form #bookForm=\"ngForm\" novalidate>\n\n        <div class=\"form-group\">\n          <label for=\"\">Название книги</label>\n          <input type=\"text\" class=\"form-control\" name=\"bookName\" #name1=\"ngModel\" required [class.is-invalid]=\"name1.invalid && name1.touched\"\n            [(ngModel)]=\"bookModel.title\">\n          <small *ngIf=\"name1.invalid && name1.touched\">Введите название</small>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"\">Автор книги</label>\n          <input type=\"text\" class=\"form-control\" name=\"author\" #author=\"ngModel\" required [class.is-invalid]=\"author.invalid && author.touched\"\n            [(ngModel)]=\"bookModel.author\">\n          <small *ngIf=\"author.invalid && author.touched\">Введите автора</small>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"\">Год издания</label>\n          <select class=\"custom-select\" name=\"years\" #year=\"ngModel\" required [class.is-invalid]=\"year.invalid && year.touched\" [(ngModel)]=\"bookModel.year\">\n            <option value=\"\">Выберите год </option>\n            <option *ngFor=\"let year of years\">{{ year }}</option>\n          </select>\n\n        </div>\n      </form>\n    </div>\n\n    <button type=\"button\" class=\"btn btn-primary btn-block\" (click)=\"addBook(bookModel.title, bookModel.author, bookModel.year)\"\n      [disabled]=\"!bookForm.form.valid\">Добавить книгу</button>\n\n\n\n    <!-- <h2>Добавленные книги</h2> -->\n    <h4 class=\"title_h4\" *ngIf=\"countBook>0; else elseBlock\">Добавлено книг: {{countBook}}</h4>\n    <ng-template #elseBlock>\n      <h3 class=\"title_h3\">Нет добавленных книг</h3>\n    </ng-template>\n\n    <mat-card *ngFor=\"let book of books; let i = index\">\n      <div class=\"d-f\">\n        <div>{{book.title}} {{book.author}} - {{book.year}} год</div>\n\n        <div>\n          <button mat-icon-button (click)=\"deliteBook(i)\">\n            <mat-icon color=\"accent\">delete_sweep</mat-icon>\n          </button>\n        </div>\n      </div>\n    </mat-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/book-home/book-home.component.ts":
/*!**************************************************!*\
  !*** ./src/app/book-home/book-home.component.ts ***!
  \**************************************************/
/*! exports provided: FavBook, BookHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavBook", function() { return FavBook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookHomeComponent", function() { return BookHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FavBook = /** @class */ (function () {
    function FavBook(title, author, year) {
        if (title === void 0) { title = ''; }
        if (author === void 0) { author = ''; }
        this.title = title;
        this.author = author;
        this.year = year;
    }
    return FavBook;
}());

var BookHomeComponent = /** @class */ (function () {
    function BookHomeComponent() {
        this.years = [1900, 1950, 2000, 2050, 8080];
        this.bookModel = new FavBook('"Мастер и Маргарита"', 'М. Булгаков', 1966);
        this.books = [];
        this.search = '';
    }
    BookHomeComponent.prototype.addBook = function (title, author, year) {
        this.books.push(new FavBook(title, author, year));
        this.countBook = this.books.length;
        console.log(this.books);
    };
    BookHomeComponent.prototype.deliteBook = function (i) {
        this.books.splice(i, 1);
        this.countBook = this.books.length;
    };
    BookHomeComponent.prototype.onSearch = function () {
        var _this = this;
        this.xy = this.books.find(function (x) { return x.title === _this.search; });
        return this.xy;
    };
    BookHomeComponent.prototype.ngOnInit = function () {
    };
    BookHomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-book-home',
            template: __webpack_require__(/*! ./book-home.component.html */ "./src/app/book-home/book-home.component.html"),
            styles: [__webpack_require__(/*! ./book-home.component.css */ "./src/app/book-home/book-home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BookHomeComponent);
    return BookHomeComponent;
}());



/***/ }),

/***/ "./src/app/book-list/book-list.component.css":
/*!***************************************************!*\
  !*** ./src/app/book-list/book-list.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".completed {\r\n  text-decoration: line-through;\r\n}\r\n\r\n.wrapper {\r\n  max-width: 1000px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.bgc {\r\n  background: #f1f8e9;\r\n  height: 100%;\r\n}\r\n\r\n.title {\r\n  padding-top: 20px;\r\n  padding-bottom: 30px;\r\n}\r\n\r\n.btn-ed {\r\n  margin-right: 0;\r\n}\r\n\r\nbutton {\r\n  margin-right: 20px;\r\n}\r\n\r\n.btn {\r\n  margin-top: 30px;\r\n}\r\n\r\nmat-card {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\nspan {\r\n  margin-right: 10px;\r\n}\r\n\r\n.wrap-form {\r\n  margin-bottom: 30px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/book-list/book-list.component.html":
/*!****************************************************!*\
  !*** ./src/app/book-list/book-list.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n\n  <div class=\"wrap-form\">\n    <h3 class=\"title\">Добавить книгу</h3>\n    <form #bookForm=\"ngForm\" novalidate>\n      <div class=\"form-group\">\n        <label for=\"\">Порядковый номер книги</label>\n        <input type=\"text\" class=\"form-control\" name=\"id\" #listid=\"ngModel\" [(ngModel)]=\"bookList.id\" required [class.is-invalid]=\"listid.invalid && listid.touched\">\n        <small *ngIf=\"listid.invalid && listid.touched\">Введите номер</small>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"\">Название книги</label>\n        <input type=\"text\" class=\"form-control\" name=\"name\" #listname=\"ngModel\" [(ngModel)]=\"bookList.book\" required [class.is-invalid]=\"listname.invalid && listname.touched\">\n        <small *ngIf=\"listname.invalid && listname.touched\">Введите название</small>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"\">Автор книги</label>\n        <input type=\"text\" class=\"form-control\" name=\"author\" #listauthor=\"ngModel\" [(ngModel)]=\"bookList.author\" required [class.is-invalid]=\"listauthor.invalid && listauthor.touched\">\n        <small *ngIf=\"listauthor.invalid && listauthor.touched\">Введите автора</small>\n      </div>\n\n    </form>\n    <button class=\"btn btn-primary btn-block\" (click)=\"onCreate(bookList.id, bookList.author, bookList.book, bookList.completed)\">Добавить</button>\n  </div>\n\n\n  <h3 class=\"title\">Что я хочу прочесть</h3>\n  <ul *ngFor=\"let book of books\">\n    <mat-card>\n      <li>№{{book.id}}\n        <br>Author: {{book.name}}\n        <br>Book: {{book.author}}\n      </li>\n    </mat-card>\n  </ul>\n\n\n\n  <ul *ngFor=\"let book of booksNew; let i = index\">\n    <mat-card>\n      <div class=\"li\">\n        <li [class.completed]=\"book.completed\">\n          <span>{{i+1}}.</span>{{book.author}} {{book.book}}</li>\n      </div>\n      <div class=\"btn-ed\">\n        <button mat-flat-button (click)=\"onEdit(book)\">Редактировать</button>\n        <button mat-flat-button (click)=\"onDelete(i)\">Удалить</button>\n      </div>\n    </mat-card>\n  </ul>\n\n</div>\n"

/***/ }),

/***/ "./src/app/book-list/book-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/book-list/book-list.component.ts ***!
  \**************************************************/
/*! exports provided: BookListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookListComponent", function() { return BookListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_book_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/book.service */ "./src/app/shared/book.service.ts");
/* harmony import */ var _shared_book_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/book.model */ "./src/app/shared/book.model.ts");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BookListComponent = /** @class */ (function () {
    function BookListComponent(_bookservice, _router) {
        this._bookservice = _bookservice;
        this._router = _router;
        this.books = [];
        this.booksNew = [];
        this.bookList = new _shared_book_model__WEBPACK_IMPORTED_MODULE_2__["Book"](null, '', '', false);
    }
    BookListComponent.prototype.ngOnInit = function () {
        this.booksNew = this._bookservice.getAll();
    };
    ;
    BookListComponent.prototype.onCreate = function (book) {
        this.booksNew.push(this.bookList);
    };
    BookListComponent.prototype.onEdit = function (book) {
        this._router.navigate(["book", "edit", book.id]);
    };
    BookListComponent.prototype.onDelete = function (i) {
        this.booksNew.splice(i, 1);
    };
    BookListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-book-list',
            template: __webpack_require__(/*! ./book-list.component.html */ "./src/app/book-list/book-list.component.html"),
            styles: [__webpack_require__(/*! ./book-list.component.css */ "./src/app/book-list/book-list.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_book_service__WEBPACK_IMPORTED_MODULE_1__["bookService"], _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], BookListComponent);
    return BookListComponent;
}());



/***/ }),

/***/ "./src/app/bookorama.service.ts":
/*!**************************************!*\
  !*** ./src/app/bookorama.service.ts ***!
  \**************************************/
/*! exports provided: BookoramaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookoramaService", function() { return BookoramaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BookoramaService = /** @class */ (function () {
    function BookoramaService() {
    }
    BookoramaService.prototype.getListBooks = function () {
        return [
            { id: 1, author: 'Джон Р. Р. Толкин', book: '"Властелин колец"' },
            { id: 2, author: 'Джейн Остин', book: '"Гордость и предубеждение"' },
            { id: 3, author: 'Филип Пулман', book: '"Тёмные начала"' },
            { id: 4, author: 'Дуглас Адамс', book: '"Автостопом по галактике"' },
            { id: 5, author: 'Джоан Роулинг', book: '"Гарри Поттер и Кубок огня"' },
            { id: 6, author: 'Харпер Ли', book: '"Убить пересмешника"' },
            { id: 7, author: 'Алан Александр Милн', book: '"Винни Пух"' },
            { id: 8, author: 'Джордж Оруэлл', book: '"1984"' },
            { id: 9, author: 'Клайв Стэйплз Льюис', book: '"Лев, колдунья и платяной шкаф"' },
            { id: 10, author: 'Шарлотта Бронте', book: '"Джейн Эйр"' },
        ];
    };
    BookoramaService.prototype.addBook = function () {
    };
    BookoramaService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], BookoramaService);
    return BookoramaService;
}());



/***/ }),

/***/ "./src/app/ef-details/ef-details.component.css":
/*!*****************************************************!*\
  !*** ./src/app/ef-details/ef-details.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "strong {\r\n  margin-right: 10px;\r\n  margin-left: 30px;\r\n}\r\n\r\nh1 {\r\n  text-align: center;\r\n  margin-top: 20px;\r\n}\r\n\r\n.btn-back {\r\n  margin-left: 30px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/ef-details/ef-details.component.html":
/*!******************************************************!*\
  !*** ./src/app/ef-details/ef-details.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>{{ user.name}}</h1>\n\n<ul>\n  <li>\n    <strong>Name:</strong>{{ user.name}}</li>\n  <li>\n    <strong>Email:</strong>{{ user.email}}</li>\n  <li>\n    <strong>Phone:</strong>{{ user.phone}}</li>\n</ul>\n\n<button class=\"btn-back\" mat-flat-button routerLink=\"/enter-form\">Назад</button>\n"

/***/ }),

/***/ "./src/app/ef-details/ef-details.component.ts":
/*!****************************************************!*\
  !*** ./src/app/ef-details/ef-details.component.ts ***!
  \****************************************************/
/*! exports provided: EfDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EfDetailsComponent", function() { return EfDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _usersdata_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../usersdata.service */ "./src/app/usersdata.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EfDetailsComponent = /** @class */ (function () {
    function EfDetailsComponent(data, route) {
        var _this = this;
        this.data = data;
        this.route = route;
        this.route.params.subscribe(function (params) { return _this.user = params.id; });
    }
    EfDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.getUser(this.user).subscribe(function (data) { return _this.user = data; });
    };
    EfDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ef-details',
            template: __webpack_require__(/*! ./ef-details.component.html */ "./src/app/ef-details/ef-details.component.html"),
            styles: [__webpack_require__(/*! ./ef-details.component.css */ "./src/app/ef-details/ef-details.component.css")]
        }),
        __metadata("design:paramtypes", [_usersdata_service__WEBPACK_IMPORTED_MODULE_1__["UsersdataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], EfDetailsComponent);
    return EfDetailsComponent;
}());



/***/ }),

/***/ "./src/app/enter-form/enter-form.component.css":
/*!*****************************************************!*\
  !*** ./src/app/enter-form/enter-form.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-container {\r\n  display: block;\r\n  background: #f1f8e9;\r\n  width: 500px;\r\n  margin: 50px auto;\r\n}\r\n\r\n.flex {\r\n  padding: 0 20px 20px 20px;\r\n}\r\n\r\ninput {\r\n  font-size: 20px;\r\n}\r\n\r\nmat-error {\r\n  font-size: 15px;\r\n}\r\n\r\n.center-cont h1 {\r\n  font-size: 30px;\r\n  padding-top: 30px;\r\n  font-family: 'Lato', sans-serif;\r\n}\r\n\r\n.mat-flat-button {\r\n  display: block;\r\n  width: 100%;\r\n  margin: 20px 0px;\r\n}\r\n\r\nmat-form-field {\r\n  padding-bottom: 0.8em;\r\n  width: 450px;\r\n}\r\n\r\n.button {\r\n  margin-top: 3rem;\r\n}\r\n\r\nh1 {\r\n  margin-bottom: 2rem;\r\n  font-weight: bold;\r\n  font-family: 'Muli';\r\n  font-size: 2em;\r\n}\r\n\r\n.mat-form-field {\r\n  width: 600px;\r\n}\r\n\r\n.wrapper {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\ntable {\r\n  width: 100%;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.mat-form-field {\r\n  font-size: 14px;\r\n  width: 100%;\r\n}\r\n\r\nh1 {\r\n  text-align: center;\r\n  margin-top: 30px;\r\n  font-family: 'Lato', sans-serif;\r\n}\r\n"

/***/ }),

/***/ "./src/app/enter-form/enter-form.component.html":
/*!******************************************************!*\
  !*** ./src/app/enter-form/enter-form.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bgc\">\n  <div class=\"wrapper\">\n\n    <form [formGroup]=\"rForm\">\n      <div class=\"form-container\">\n        <div class=\"center-cont\">\n          <h1>Авторизация</h1>\n          <div class=\"flex\">\n            <mat-form-field>\n              <input matInput placeholder=\"Логин\" formControlName=\"name\">\n\n            </mat-form-field>\n\n            <br>\n            <mat-form-field>\n\n              <input matInput type=\"password\" placeholder=\"Пароль\" formControlName=\"password\">\n\n              <mat-error *ngIf=\"rForm.controls.password.invalid && rForm.controls.password.touched\">Пароль должен содержать минимум 6 символов</mat-error>\n            </mat-form-field>\n            <br>\n\n\n            <button class=\"btn-log\" mat-flat-button color=\"primary\" [disabled]=\"!rForm.valid\">Войти </button>\n\n          </div>\n\n        </div>\n      </div>\n    </form>\n\n  </div>\n</div>\n\n<h1>Наши наиболее активные пользователи</h1>\n\n<table mat-table [dataSource]=\"users\" class=\"mat-elevation-z8\">\n\n  <!--- Note that these columns can be defined in any order.\n        The actual rendered columns are set as a property on the row definition\" -->\n\n  <!-- ID Column -->\n  <ng-container matColumnDef=\"user.id\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> ID </th>\n    <td mat-cell *matCellDef=\"let user\"> {{user.id}} </td>\n  </ng-container>\n\n\n  <!-- Name Column -->\n  <ng-container matColumnDef=\"user.name\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\n    <td mat-cell *matCellDef=\"let user\">\n      <a routerLink=\"/ef-details/{{user.id}}\">{{user.name}}</a>\n    </td>\n  </ng-container>\n\n  <!-- Email Column -->\n  <ng-container matColumnDef=\"user.email\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> Email </th>\n    <td mat-cell *matCellDef=\"let user\"> {{user.email}} </td>\n  </ng-container>\n\n  <!-- Website Column -->\n  <ng-container matColumnDef=\"user.website\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> Website </th>\n    <td mat-cell *matCellDef=\"let user\">\n      <a href=\"http://{{user.website}}\">{{user.website}}</a>\n    </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"columnsToDisplay\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: columnsToDisplay;\"></tr>\n</table>\n"

/***/ }),

/***/ "./src/app/enter-form/enter-form.component.ts":
/*!****************************************************!*\
  !*** ./src/app/enter-form/enter-form.component.ts ***!
  \****************************************************/
/*! exports provided: EnterFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnterFormComponent", function() { return EnterFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _usersdata_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../usersdata.service */ "./src/app/usersdata.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EnterFormComponent = /** @class */ (function () {
    function EnterFormComponent(fb, data) {
        this.fb = fb;
        this.data = data;
        this.name = '';
        this.columnsToDisplay = ['user.id', 'user.name', 'user.email', 'user.website'];
        this.dataSourse = this.users;
        this.rForm = fb.group({
            name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                ])],
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                ])
            ],
        });
    }
    EnterFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.getUsers().subscribe(function (data) { return _this.users = data; });
    };
    EnterFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-enter-form',
            template: __webpack_require__(/*! ./enter-form.component.html */ "./src/app/enter-form/enter-form.component.html"),
            styles: [__webpack_require__(/*! ./enter-form.component.css */ "./src/app/enter-form/enter-form.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _usersdata_service__WEBPACK_IMPORTED_MODULE_2__["UsersdataService"]])
    ], EnterFormComponent);
    return EnterFormComponent;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p.nfound{\r\n    margin-top: 100px;\r\n    color: #285942;\r\n    font-family: 'Libre Barcode 128 Text', cursive;\r\n    font-size: 145px;\r\n}\r\n\r\ndiv.wrappernf{\r\n    background-color: #e6ee9c;\r\n    height: 100px;\r\n}"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrappernf\">\n  <p class=\"nfound\">\n    Page-not-found 404!\n  </p>\n</div>\n\n"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/regist-form/regist-form.component.css":
/*!*******************************************************!*\
  !*** ./src/app/regist-form/regist-form.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bgc{\r\n    background-color:#f1f8e9;\r\n    height: 100vh;\r\n\r\n}\r\n\r\n.wrapper{\r\n    max-width: 700px;\r\n    padding-top: 100px;\r\n    margin: 0px auto;\r\n    display: flex;\r\n}\r\n\r\n.title{\r\n    text-align: center;\r\n    margin-bottom: 50px;\r\n}\r\n\r\na{\r\n    margin-left: 30px;\r\n}\r\n\r\n.radio-group{\r\n    display: block;\r\n    margin-top: 10px;\r\n    margin-bottom: 15px;\r\n    width: 300px;\r\n}\r\n\r\n.flex{\r\n    max-width: 700px;\r\n}\r\n\r\n.mat-form-field{\r\n    width: 700px;\r\n\r\n}\r\n\r\n.btn-create{\r\n    margin-top: 30px;\r\n    display: block;\r\n    width: 100%;\r\n}"

/***/ }),

/***/ "./src/app/regist-form/regist-form.component.html":
/*!********************************************************!*\
  !*** ./src/app/regist-form/regist-form.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bgc\">\n\n\n  <div class=\"wrapper containet-fluid\">\n\n    <form [formGroup]=\"registForm\" (ngSubmit)=\"registIn(registForm.value)\">\n\n\n      <h1 class=\"title\">Регистрация</h1>\n      <p>Перед регистрацией необходимо прочесть и согласиться с нашими правилами.\n      </p>\n\n\n      <a href=\"#\">Какие-то правила</a>\n\n\n      <mat-radio-group class=\"radio-group\">\n        <mat-radio-button value=\"1\" checked>Я прочел правила и согласен с ними</mat-radio-button>\n        <mat-radio-button value=\"2\">Согласен со всем не читая</mat-radio-button>\n      </mat-radio-group>\n\n      <div class=\"flex\">\n        <mat-form-field>\n          <input matInput type=\"text\" placeholder=\"Логин\" formControlName=\"login\">\n\n          <mat-error *ngIf=\"registForm.controls.login.invalid && registForm.controls.login.touched\">Введите логин</mat-error>\n\n        </mat-form-field>\n\n        <br>\n\n        <mat-form-field>\n          <input matInput type=\"email\" placeholder=\"Email\" formControlName=\"email\">\n\n          <mat-error *ngIf=\"registForm.controls.email.invalid && registForm.controls.email.touched\">Введите email</mat-error>\n\n        </mat-form-field>\n\n        <br>\n\n        <mat-form-field>\n\n          <input matInput type=\"password\" placeholder=\"Пароль\" formControlName=\"password\">\n\n          <mat-error *ngIf=\"registForm.controls.password.invalid && registForm.controls.password.touched\">Введите пароль</mat-error>\n\n          <mat-hint>Пароль должен содержать минимум 6 символов и включать хотя бы одну цифру</mat-hint>\n        </mat-form-field>\n        <br>\n\n\n        <button class=\"btn-create\" mat-flat-button color=\"primary\" type=\"submit\" [disabled]=\"!registForm.valid\">Создать аккаунт</button>\n\n      </div>\n\n\n\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/regist-form/regist-form.component.ts":
/*!******************************************************!*\
  !*** ./src/app/regist-form/regist-form.component.ts ***!
  \******************************************************/
/*! exports provided: RegistFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistFormComponent", function() { return RegistFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegistFormComponent = /** @class */ (function () {
    function RegistFormComponent(fb) {
        this.fb = fb;
        this.registForm = fb.group({
            login: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-zA-Z0-9]+$'),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5)
                ])],
            email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email
                ])
            ],
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6),
                ])],
        });
    }
    RegistFormComponent.prototype.ngOnInit = function () {
    };
    RegistFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-regist-form',
            template: __webpack_require__(/*! ./regist-form.component.html */ "./src/app/regist-form/regist-form.component.html"),
            styles: [__webpack_require__(/*! ./regist-form.component.css */ "./src/app/regist-form/regist-form.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], RegistFormComponent);
    return RegistFormComponent;
}());



/***/ }),

/***/ "./src/app/shared/book.model.ts":
/*!**************************************!*\
  !*** ./src/app/shared/book.model.ts ***!
  \**************************************/
/*! exports provided: Book */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Book", function() { return Book; });
var Book = /** @class */ (function () {
    function Book(id, author, book, completed) {
        this.id = id;
        this.author = author;
        this.book = book;
        this.completed = completed;
    }
    return Book;
}());



/***/ }),

/***/ "./src/app/shared/book.service.ts":
/*!****************************************!*\
  !*** ./src/app/shared/book.service.ts ***!
  \****************************************/
/*! exports provided: bookService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bookService", function() { return bookService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _book_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./book.model */ "./src/app/shared/book.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var bookService = /** @class */ (function () {
    function bookService() {
        this.data = [
            new _book_model__WEBPACK_IMPORTED_MODULE_1__["Book"](1, 'Джон Р. Р. Толкин', '"Властелин колец"', false),
            new _book_model__WEBPACK_IMPORTED_MODULE_1__["Book"](2, 'Джейн Остин', '"Гордость и предубеждение"', false),
            new _book_model__WEBPACK_IMPORTED_MODULE_1__["Book"](3, 'Филип Пулман', '"Тёмные начала"', false),
            new _book_model__WEBPACK_IMPORTED_MODULE_1__["Book"](4, 'Дуглас Адамс', '"Автостопом по галактике"', false),
            new _book_model__WEBPACK_IMPORTED_MODULE_1__["Book"](5, 'Джоан Роулинг', '"Гарри Поттер и Кубок огня"', false),
            new _book_model__WEBPACK_IMPORTED_MODULE_1__["Book"](6, 'Харпер Ли', '"Убить пересмешника"', false),
            new _book_model__WEBPACK_IMPORTED_MODULE_1__["Book"](7, 'Алан Александр Милн', '"Винни Пух"', false),
            new _book_model__WEBPACK_IMPORTED_MODULE_1__["Book"](8, 'Джордж Оруэлл', '"1984"', false),
            new _book_model__WEBPACK_IMPORTED_MODULE_1__["Book"](9, 'Клайв Стэйплз Льюис', '"Лев, колдунья и платяной шкаф"', false),
            new _book_model__WEBPACK_IMPORTED_MODULE_1__["Book"](10, 'Шарлотта Бронте', '"Джейн Эйр"', false),
        ];
    }
    bookService.prototype.getAll = function () {
        return this.data;
    };
    bookService.prototype.getById = function (id) {
        return this.data.find(function (x) { return x.id == id; });
    };
    bookService.prototype.update = function (book) {
        var toUpdate = this.getById(book.id);
        Object.assign(toUpdate, book);
    };
    bookService.prototype.delite = function (book) {
        var toDelite = this.getById(book.id);
        this.data.splice(this.data.indexOf(book), 1);
    };
    bookService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], bookService);
    return bookService;
}());



/***/ }),

/***/ "./src/app/usersdata.service.ts":
/*!**************************************!*\
  !*** ./src/app/usersdata.service.ts ***!
  \**************************************/
/*! exports provided: UsersdataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersdataService", function() { return UsersdataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UsersdataService = /** @class */ (function () {
    function UsersdataService(http) {
        this.http = http;
    }
    UsersdataService.prototype.getUsers = function () {
        return this.http.get('https://jsonplaceholder.typicode.com/users');
    };
    UsersdataService.prototype.getUser = function (userId) {
        return this.http.get('https://jsonplaceholder.typicode.com/users/' + userId);
    };
    UsersdataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UsersdataService);
    return UsersdataService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Angular\my-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map