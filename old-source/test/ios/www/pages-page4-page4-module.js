(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-page4-page4-module"],{

/***/ "./src/app/pages/page4/page4.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/page4/page4.module.ts ***!
  \*********************************************/
/*! exports provided: Page4PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page4PageModule", function() { return Page4PageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _page4_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page4.page */ "./src/app/pages/page4/page4.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _page4_page__WEBPACK_IMPORTED_MODULE_5__["Page4Page"],
    },
];
var Page4PageModule = /** @class */ (function () {
    function Page4PageModule() {
    }
    Page4PageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            ],
            declarations: [_page4_page__WEBPACK_IMPORTED_MODULE_5__["Page4Page"]],
        })
    ], Page4PageModule);
    return Page4PageModule;
}());



/***/ }),

/***/ "./src/app/pages/page4/page4.page.html":
/*!*********************************************!*\
  !*** ./src/app/pages/page4/page4.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n    <div class=\"header\">\n        <ion-img src=\"/assets/logoBlock.jpg\"></ion-img>\n    </div>\n    <div class=\"pageContent\">\n        <div class=\"pageContentText\">\n            <h1>Why use this App?</h1>\n            <p>Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam orem ipsum dolor sit amet, conse\n                ctetuer adipisci.</p>\n            <h1>Simple, helpful resources</h1>\n            <p>Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam orem ipsum dolor sit amet, conse\n                ctetuer adipisci.</p>\n        </div>\n    </div>\n    <div class=\"footer\">\n        <button color=\"light\" icon-end ion-button routeDirection=\"forward\" routerLink=\"/page-listing\">\n            Begin\n            <div class=\"icon\">\n                <ion-img src=\"/assets/arrowRight.svg\"></ion-img>\n            </div>\n        </button>\n        <ul>\n            <li></li>\n            <li></li>\n            <li class=\"active\"></li>\n        </ul>\n    </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/page4/page4.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/page4/page4.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  background: #202230;\n  display: block; }\n\nimg {\n  display: block; }\n\nion-content {\n  --background: url('footerBG.jpg') no-repeat top center;\n  background-size: cover; }\n\n.pageContent {\n  background: url('NavyBG.jpg') no-repeat top center;\n  background-size: cover;\n  text-align: center; }\n\n.pageContent .pageContentText {\n  padding: 50px 30px 50px 30px; }\n\n.pageContent .pageContentText h1 {\n  margin: 0 0 15px 0;\n  color: #fff;\n  font-size: 24px;\n  line-height: 28px;\n  text-align: center;\n  font-weight: bold; }\n\n.pageContent .pageContentText p {\n  color: #9a9c9e;\n  font-size: 22px;\n  line-height: 26px;\n  margin: 0 0 30px 0; }\n\n.footer {\n  display: block;\n  padding: 40px 0 60px 0;\n  background: url('footerBG.jpg') no-repeat top center;\n  background-size: cover;\n  text-align: center; }\n\n.footer ul {\n  margin: 0;\n  display: inline-block;\n  padding: 0; }\n\n.footer ul li {\n  display: inline-block;\n  width: 18px;\n  height: 18px;\n  margin: 0 20px 0 0;\n  background: rgba(154, 156, 158, 0.7);\n  border-radius: 18px 18px 18px 18px; }\n\n.footer ul li.active {\n  border: 2px solid #fff;\n  background: none; }\n\n.footer ul li:last-of-type {\n  margin-right: 0; }\n\nbutton {\n  display: block;\n  padding: 22px 80px 22px 64px;\n  border-radius: 8px;\n  color: #202230;\n  background: #fff;\n  font-size: 22px;\n  line-height: 22px;\n  font-weight: bold;\n  margin: 0 auto;\n  margin-bottom: 50px;\n  position: relative; }\n\nbutton .icon {\n  position: absolute;\n  width: 14px;\n  height: 15px;\n  right: 55px;\n  top: 22px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYXVsLmNhcm5lbGwvZ2FsbGlmb3JkdHJ5LWFwcC9zcmMvYXBwL3BhZ2VzL3BhZ2U0L3BhZ2U0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsY0FBYyxFQUFBOztBQUdoQjtFQUNFLHNEQUFhO0VBQ2Isc0JBQXNCLEVBQUE7O0FBR3hCO0VBQ0Usa0RBQWdFO0VBQ2hFLHNCQUFzQjtFQUN0QixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSw0QkFBNEIsRUFBQTs7QUFHOUI7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsb0RBQWtFO0VBQ2xFLHNCQUFzQjtFQUN0QixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxTQUFTO0VBQ1QscUJBQXFCO0VBQ3JCLFVBQVUsRUFBQTs7QUFHWjtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixvQ0FBb0M7RUFFcEMsa0NBQWtDLEVBQUE7O0FBR3BDO0VBQ0Usc0JBQXNCO0VBQ3RCLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxjQUFjO0VBQ2QsNEJBQTRCO0VBQzVCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztFQUNYLFNBQVMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhZ2U0L3BhZ2U0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiAjMjAyMjMwO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2Zvb3RlckJHLmpwZykgbm8tcmVwZWF0IHRvcCBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5wYWdlQ29udGVudCB7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvTmF2eUJHLmpwZykgbm8tcmVwZWF0IHRvcCBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnBhZ2VDb250ZW50IC5wYWdlQ29udGVudFRleHQge1xuICBwYWRkaW5nOiA1MHB4IDMwcHggNTBweCAzMHB4O1xufVxuXG4ucGFnZUNvbnRlbnQgLnBhZ2VDb250ZW50VGV4dCBoMSB7XG4gIG1hcmdpbjogMCAwIDE1cHggMDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5wYWdlQ29udGVudCAucGFnZUNvbnRlbnRUZXh0IHAge1xuICBjb2xvcjogIzlhOWM5ZTtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbiAgbWFyZ2luOiAwIDAgMzBweCAwO1xufVxuXG4uZm9vdGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDQwcHggMCA2MHB4IDA7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvZm9vdGVyQkcuanBnKSBuby1yZXBlYXQgdG9wIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZm9vdGVyIHVsIHtcbiAgbWFyZ2luOiAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5mb290ZXIgdWwgbGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxOHB4O1xuICBoZWlnaHQ6IDE4cHg7XG4gIG1hcmdpbjogMCAyMHB4IDAgMDtcbiAgYmFja2dyb3VuZDogcmdiYSgxNTQsIDE1NiwgMTU4LCAwLjcpO1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDE4cHggMThweCAxOHB4IDE4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDE4cHggMThweCAxOHB4IDE4cHg7XG59XG5cbi5mb290ZXIgdWwgbGkuYWN0aXZlIHtcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cblxuLmZvb3RlciB1bCBsaTpsYXN0LW9mLXR5cGUge1xuICBtYXJnaW4tcmlnaHQ6IDA7XG59XG5cbmJ1dHRvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAyMnB4IDgwcHggMjJweCA2NHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGNvbG9yOiAjMjAyMjMwO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBmb250LXNpemU6IDIycHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuYnV0dG9uIC5pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTRweDtcbiAgaGVpZ2h0OiAxNXB4O1xuICByaWdodDogNTVweDtcbiAgdG9wOiAyMnB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/page4/page4.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/page4/page4.page.ts ***!
  \*******************************************/
/*! exports provided: Page4Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page4Page", function() { return Page4Page; });
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

var Page4Page = /** @class */ (function () {
    function Page4Page() {
    }
    Page4Page.prototype.ngOnInit = function () {
    };
    Page4Page = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page4',
            template: __webpack_require__(/*! ./page4.page.html */ "./src/app/pages/page4/page4.page.html"),
            styles: [__webpack_require__(/*! ./page4.page.scss */ "./src/app/pages/page4/page4.page.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], Page4Page);
    return Page4Page;
}());



/***/ })

}]);
//# sourceMappingURL=pages-page4-page4-module.js.map