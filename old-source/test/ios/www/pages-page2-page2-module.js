(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-page2-page2-module"],{

/***/ "./src/app/pages/page2/page2.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/page2/page2.module.ts ***!
  \*********************************************/
/*! exports provided: Page2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page2PageModule", function() { return Page2PageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _page2_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page2.page */ "./src/app/pages/page2/page2.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _page2_page__WEBPACK_IMPORTED_MODULE_5__["Page2Page"],
    },
];
var Page2PageModule = /** @class */ (function () {
    function Page2PageModule() {
    }
    Page2PageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            ],
            declarations: [_page2_page__WEBPACK_IMPORTED_MODULE_5__["Page2Page"]],
        })
    ], Page2PageModule);
    return Page2PageModule;
}());



/***/ }),

/***/ "./src/app/pages/page2/page2.page.html":
/*!*********************************************!*\
  !*** ./src/app/pages/page2/page2.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n    <div class=\"header\">\n        <ion-img src=\"/assets/logoBlock.jpg\"></ion-img>\n    </div>\n    <div class=\"pageContent\">\n        <ion-img class=\"heroImage\" src=\"/assets/heroImageOne.jpg\"></ion-img>\n        <div class=\"pageContentText\">\n            <h1>Andy, Welcome to the Challenging Beliefs, Affecting Behaviour’ Safety Leadership Programme</h1>\n        </div>\n    </div>\n    <div class=\"footer\">\n        <button color=\"light\" icon-end ion-button routeDirection=\"forward\" routerLink=\"/page3\">\n            Begin\n            <div class=\"icon\">\n                <ion-img src=\"/assets/arrowRight.svg\"></ion-img>\n            </div>\n        </button>\n        <ul>\n            <li class=\"active\"></li>\n            <li></li>\n            <li></li>\n        </ul>\n    </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/page2/page2.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/page2/page2.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  background: #202230;\n  display: block; }\n\nimg {\n  display: block; }\n\nion-content {\n  --background: url('footerBG.jpg') no-repeat top center;\n  background-size: cover; }\n\n.pageContent {\n  background: url('NavyBG.jpg') no-repeat top center;\n  background-size: cover;\n  text-align: center; }\n\n.pageContent .pageContentText {\n  padding: 50px 30px 70px 30px; }\n\n.pageContent .pageContentText h1 {\n  margin: 0;\n  color: #fff;\n  font-size: 24px;\n  line-height: 28px;\n  text-align: center;\n  font-weight: bold; }\n\n.footer {\n  display: block;\n  padding: 40px 0 60px 0;\n  background: url('footerBG.jpg') no-repeat top center;\n  background-size: cover;\n  text-align: center; }\n\n.footer ul {\n  margin: 0;\n  display: inline-block;\n  padding: 0; }\n\n.footer ul li {\n  display: inline-block;\n  width: 18px;\n  height: 18px;\n  margin: 0 20px 0 0;\n  background: rgba(154, 156, 158, 0.7);\n  border-radius: 18px 18px 18px 18px; }\n\n.footer ul li.active {\n  border: 2px solid #fff;\n  background: none; }\n\n.footer ul li:last-of-type {\n  margin-right: 0; }\n\nbutton {\n  display: block;\n  padding: 22px 80px 22px 64px;\n  border-radius: 8px;\n  color: #202230;\n  background: #fff;\n  font-size: 22px;\n  line-height: 22px;\n  font-weight: bold;\n  margin: 0 auto;\n  margin-bottom: 50px;\n  position: relative; }\n\nbutton .icon {\n  position: absolute;\n  width: 14px;\n  height: 15px;\n  right: 55px;\n  top: 22px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYXVsLmNhcm5lbGwvZ2FsbGlmb3JkdHJ5LWFwcC9zcmMvYXBwL3BhZ2VzL3BhZ2UyL3BhZ2UyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsY0FBYyxFQUFBOztBQUdoQjtFQUNFLHNEQUFhO0VBQ2Isc0JBQXNCLEVBQUE7O0FBR3hCO0VBQ0Usa0RBQWdFO0VBQ2hFLHNCQUFzQjtFQUN0QixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSw0QkFBNEIsRUFBQTs7QUFHOUI7RUFDRSxTQUFTO0VBQ1QsV0FBVztFQUNYLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsb0RBQWtFO0VBQ2xFLHNCQUFzQjtFQUN0QixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxTQUFTO0VBQ1QscUJBQXFCO0VBQ3JCLFVBQVUsRUFBQTs7QUFHWjtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixvQ0FBb0M7RUFFcEMsa0NBQWtDLEVBQUE7O0FBR3BDO0VBQ0Usc0JBQXNCO0VBQ3RCLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxjQUFjO0VBQ2QsNEJBQTRCO0VBQzVCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztFQUNYLFNBQVMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhZ2UyL3BhZ2UyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiAjMjAyMjMwO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2Zvb3RlckJHLmpwZykgbm8tcmVwZWF0IHRvcCBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5wYWdlQ29udGVudCB7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvTmF2eUJHLmpwZykgbm8tcmVwZWF0IHRvcCBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnBhZ2VDb250ZW50IC5wYWdlQ29udGVudFRleHQge1xuICBwYWRkaW5nOiA1MHB4IDMwcHggNzBweCAzMHB4O1xufVxuXG4ucGFnZUNvbnRlbnQgLnBhZ2VDb250ZW50VGV4dCBoMSB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5mb290ZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogNDBweCAwIDYwcHggMDtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9mb290ZXJCRy5qcGcpIG5vLXJlcGVhdCB0b3AgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5mb290ZXIgdWwge1xuICBtYXJnaW46IDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMDtcbn1cblxuLmZvb3RlciB1bCBsaSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDE4cHg7XG4gIGhlaWdodDogMThweDtcbiAgbWFyZ2luOiAwIDIwcHggMCAwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDE1NCwgMTU2LCAxNTgsIDAuNyk7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMThweCAxOHB4IDE4cHggMThweDtcbiAgYm9yZGVyLXJhZGl1czogMThweCAxOHB4IDE4cHggMThweDtcbn1cblxuLmZvb3RlciB1bCBsaS5hY3RpdmUge1xuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuXG4uZm9vdGVyIHVsIGxpOmxhc3Qtb2YtdHlwZSB7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cblxuYnV0dG9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDIycHggODBweCAyMnB4IDY0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgY29sb3I6ICMyMDIyMzA7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5idXR0b24gLmljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxNHB4O1xuICBoZWlnaHQ6IDE1cHg7XG4gIHJpZ2h0OiA1NXB4O1xuICB0b3A6IDIycHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/page2/page2.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/page2/page2.page.ts ***!
  \*******************************************/
/*! exports provided: Page2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page2Page", function() { return Page2Page; });
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

var Page2Page = /** @class */ (function () {
    function Page2Page() {
    }
    Page2Page.prototype.ngOnInit = function () {
    };
    Page2Page = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page2',
            template: __webpack_require__(/*! ./page2.page.html */ "./src/app/pages/page2/page2.page.html"),
            styles: [__webpack_require__(/*! ./page2.page.scss */ "./src/app/pages/page2/page2.page.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], Page2Page);
    return Page2Page;
}());



/***/ })

}]);
//# sourceMappingURL=pages-page2-page2-module.js.map