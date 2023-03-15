(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-intro-intro-module"],{

/***/ "./src/app/pages/intro/intro.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/intro/intro.module.ts ***!
  \*********************************************/
/*! exports provided: IntroPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroPageModule", function() { return IntroPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _intro_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./intro.page */ "./src/app/pages/intro/intro.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _intro_page__WEBPACK_IMPORTED_MODULE_5__["IntroPage"],
    },
];
var IntroPageModule = /** @class */ (function () {
    function IntroPageModule() {
    }
    IntroPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            ],
            declarations: [_intro_page__WEBPACK_IMPORTED_MODULE_5__["IntroPage"]],
        })
    ], IntroPageModule);
    return IntroPageModule;
}());



/***/ }),

/***/ "./src/app/pages/intro/intro.page.html":
/*!*********************************************!*\
  !*** ./src/app/pages/intro/intro.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-slides pager=\"true\">\n    <ion-slide class=\"step-one\">\n\n        <h1>Heading</h1>\n        <p>Text</p>\n    </ion-slide>\n\n    <ion-slide class=\"step-two\">\n\n        <h1>Heading</h1>\n        <p>Text</p>\n    </ion-slide>\n\n    <ion-slide class=\"step-three\">\n\n        <h1>Heading</h1>\n        <p>Text</p>\n\n        <ion-button>FINISH TUTORIAL!</ion-button>\n    </ion-slide>\n</ion-slides>"

/***/ }),

/***/ "./src/app/pages/intro/intro.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/intro/intro.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-slide {\n  height: 100vh;\n  flex-direction: column; }\n\nion-img {\n  max-width: 50vw;\n  max-height: 50vh;\n  /*  overflow: hidden;*/ }\n\n.step-one {\n  background: var(--ion-color-primary);\n  color: var(--ion-color-primary-contrast); }\n\n.step-two {\n  background: var(--ion-color-success);\n  color: var(--ion-color-success-contrast); }\n\n.step-three {\n  background: var(--ion-color-dark);\n  color: var(--ion-color-dark-contrast); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYXVsLmNhcm5lbGwvZ2FsbGlmb3JkdHJ5LWFwcC9zcmMvYXBwL3BhZ2VzL2ludHJvL2ludHJvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixzQkFBc0IsRUFBQTs7QUFHeEI7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2xCLHNCQUFBLEVBQXVCOztBQUl2QjtFQUNFLG9DQUFvQztFQUNwQyx3Q0FBd0MsRUFBQTs7QUFHMUM7RUFDRSxvQ0FBb0M7RUFDcEMsd0NBQXdDLEVBQUE7O0FBRzFDO0VBQ0UsaUNBQWlDO0VBQ2pDLHFDQUFxQyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaW50cm8vaW50cm8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXNsaWRlIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuaW9uLWltZyB7XG4gIG1heC13aWR0aDogNTB2dztcbiAgbWF4LWhlaWdodDogNTB2aDtcbi8qICBvdmVyZmxvdzogaGlkZGVuOyovXG59XG5cblxuLnN0ZXAtb25lIHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QpO1xufVxuXG4uc3RlcC10d28ge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdCk7XG59XG5cbi5zdGVwLXRocmVlIHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmstY29udHJhc3QpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/intro/intro.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/intro/intro.page.ts ***!
  \*******************************************/
/*! exports provided: IntroPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroPage", function() { return IntroPage; });
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

var IntroPage = /** @class */ (function () {
    function IntroPage() {
    }
    IntroPage.prototype.ngOnInit = function () {
    };
    IntroPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-intro',
            template: __webpack_require__(/*! ./intro.page.html */ "./src/app/pages/intro/intro.page.html"),
            styles: [__webpack_require__(/*! ./intro.page.scss */ "./src/app/pages/intro/intro.page.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], IntroPage);
    return IntroPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-intro-intro-module.js.map