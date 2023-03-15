(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-page-listing-page-listing-module"],{

/***/ "./src/app/pages/page-listing/page-listing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/page-listing/page-listing.module.ts ***!
  \***********************************************************/
/*! exports provided: PageListingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageListingPageModule", function() { return PageListingPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _page_listing_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page-listing.page */ "./src/app/pages/page-listing/page-listing.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _page_listing_page__WEBPACK_IMPORTED_MODULE_5__["PageListingPage"],
    },
];
var PageListingPageModule = /** @class */ (function () {
    function PageListingPageModule() {
    }
    PageListingPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            ],
            declarations: [_page_listing_page__WEBPACK_IMPORTED_MODULE_5__["PageListingPage"]],
        })
    ], PageListingPageModule);
    return PageListingPageModule;
}());



/***/ }),

/***/ "./src/app/pages/page-listing/page-listing.page.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/page-listing/page-listing.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"navBar\">\n    <ion-toolbar>\n        <ion-buttons class=\"menuIcon\" slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <div class=\"companyLogo\">\n            <ion-img (click)=\"home()\" src=\"/assets/gallifortLogo.svg\"></ion-img>\n        </div>\n    </ion-toolbar>\n</ion-header>\n\n<div class=\"spinner-wrapper\" *ngIf=\"uploadIsInProgress\">\n    <ion-spinner name=\"bubbles\"></ion-spinner>\n</div>\n\n<ion-content>\n    <div class=\"heading\">\n        <h1>Challenging Beliefs, Affecting Behaviour</h1>\n    </div>\n    <div class=\"linkListing\">\n        <ion-grid class=\"grid\" size=\"2\" *ngIf=\"links.length\">\n\n            <ion-row class=\"row\" justify-content-around align-items-start>\n                <ion-col class=\"column\" size=\"6\" (click)=\"open(link)\" *ngFor=\"let link of links; let i = index\">\n                    <ion-img [src]=\"link?.fields?.icon?.fields?.file?.url\"></ion-img>\n\n                    <div ngSwitch=\"{{link?.fields?.title}}\">\n\n                    <div class=\"listingBackground tools\" *ngSwitchCase=\"'Tools and Resources'\">\n                    <ion-text>\n                        <h2>{{link?.fields?.title}}</h2>\n                    </ion-text>\n                    </div>  \n\n                    <div class=\"listingBackground best\" *ngSwitchCase=\"'Sharing Best Practice'\">\n                    <ion-text>\n                        <h2>{{link?.fields?.title}}</h2>\n                    </ion-text>\n                    </div>  \n\n                    <div class=\"listingBackground\" *ngSwitchDefault>\n                    <ion-text>\n                        <h2>{{link?.fields?.title}}</h2>\n                    </ion-text>\n                    </div>\n                </div>\n                </ion-col>\n <ion-col class=\"column\" size=\"6\" (click)=\"sharing()\">\n              \n<ion-img src=\"http://images.ctfassets.net/kst95g92kfwh/7oI7keMzROZODFQ0R4v072/2055f70b3fe232cd2e35eef4a1f56fa9/sharingBestPractices.jpg\"></ion-img> \n<div class=\"listingBackground best\">\n                    <ion-text>\n                        <h2>Sharing Best Practice</h2>\n                    </ion-text>\n                    </div>  \n\n     </ion-col>\n\n\n            </ion-row>\n\n        </ion-grid>\n    </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/page-listing/page-listing.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/page-listing/page-listing.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  text-align: center; }\n\nion-content {\n  -webkit-transform-style: preserve-3d;\n  -webkit-backface-visibility: hidden; }\n\n.companyLogo {\n  width: 100%;\n  max-width: 115px;\n  margin: 0 auto;\n  cursor: pointer; }\n\n.menuIcon {\n  position: absolute;\n  right: 20px;\n  top: 10px;\n  width: 30px;\n  height: 30px; }\n\n.menuIcon .button {\n  --color: #548c99; }\n\nion-icon {\n  font-size: 50px; }\n\n.heading {\n  background: url('headingBG.jpg') no-repeat top center;\n  background-size: cover;\n  text-align: center;\n  padding: 30px 26px 30px 26px; }\n\n.linkListing {\n  background: url('NavyBG.jpg') no-repeat top center;\n  background-size: cover;\n  text-align: center;\n  padding: 15px 5px; }\n\n.listingBackground {\n  background: url('listingBG.png') no-repeat top center;\n  background-size: cover;\n  text-align: center;\n  padding: 0;\n  margin: 0;\n  height: 110px;\n  margin-top: -5px; }\n\n.tools {\n  background: url('listingToolsBG.png') no-repeat top center;\n  background-size: cover; }\n\n.tools h2 {\n    color: #000; }\n\n.best {\n  background: url('listingBestBG.png') no-repeat top center;\n  background-size: cover; }\n\n.grid {\n  padding: 0; }\n\n.grid .row {\n  margin: 0 0 15px 0; }\n\n.grid .row .column {\n  padding-bottom: 0;\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYXVsLmNhcm5lbGwvZ2FsbGlmb3JkdHJ5LWFwcC9zcmMvYXBwL3BhZ2VzL3BhZ2UtbGlzdGluZy9wYWdlLWxpc3RpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0Usb0NBQW9DO0VBQ3BDLG1DQUFtQyxFQUFBOztBQUdyQztFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFNBQVM7RUFDVCxXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUdkO0VBQ0UsZ0JBQVEsRUFBQTs7QUFHVjtFQUNFLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxxREFBbUU7RUFDbkUsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQiw0QkFBNEIsRUFBQTs7QUFHOUI7RUFDRSxrREFBZ0U7RUFDaEUsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxxREFBbUU7RUFDbkUsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsU0FBUTtFQUNSLGFBQWE7RUFDYixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSwwREFBd0U7RUFDdEUsc0JBQXNCLEVBQUE7O0FBRjFCO0lBSVEsV0FBVyxFQUFBOztBQUduQjtFQUNFLHlEQUF1RTtFQUNyRSxzQkFBc0IsRUFBQTs7QUFHMUI7RUFDRSxVQUFVLEVBQUE7O0FBR1o7RUFDRSxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxpQkFBaUI7RUFDakIsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcGFnZS1saXN0aW5nL3BhZ2UtbGlzdGluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcblxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLmNvbXBhbnlMb2dvIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTE1cHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5tZW51SWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDIwcHg7XG4gIHRvcDogMTBweDtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbn1cblxuLm1lbnVJY29uIC5idXR0b24ge1xuICAtLWNvbG9yOiAjNTQ4Yzk5O1xufVxuXG5pb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogNTBweDtcbn1cblxuLmhlYWRpbmcge1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2hlYWRpbmdCRy5qcGcpIG5vLXJlcGVhdCB0b3AgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDMwcHggMjZweCAzMHB4IDI2cHg7XG59XG5cbi5saW5rTGlzdGluZyB7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvTmF2eUJHLmpwZykgbm8tcmVwZWF0IHRvcCBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTVweCA1cHg7XG59XG5cbi5saXN0aW5nQmFja2dyb3VuZHtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9saXN0aW5nQkcucG5nKSBuby1yZXBlYXQgdG9wIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46MDtcbiAgaGVpZ2h0OiAxMTBweDtcbiAgbWFyZ2luLXRvcDogLTVweDtcbn1cblxuLnRvb2xzIHtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9saXN0aW5nVG9vbHNCRy5wbmcpIG5vLXJlcGVhdCB0b3AgY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgaDIge1xuICAgICAgICBjb2xvcjogIzAwMDtcbiAgICB9XG59XG4uYmVzdHtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9saXN0aW5nQmVzdEJHLnBuZykgbm8tcmVwZWF0IHRvcCBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLmdyaWQge1xuICBwYWRkaW5nOiAwO1xufVxuXG4uZ3JpZCAucm93IHtcbiAgbWFyZ2luOiAwIDAgMTVweCAwO1xufVxuXG4uZ3JpZCAucm93IC5jb2x1bW4ge1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/pages/page-listing/page-listing.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/page-listing/page-listing.page.ts ***!
  \*********************************************************/
/*! exports provided: PageListingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageListingPage", function() { return PageListingPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_content_service_content_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/content-service/content.service */ "./src/app/services/content-service/content.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_home_link_home_link_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/home-link/home-link.service */ "./src/app/services/home-link/home-link.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




//import { GoogleAnalytics } from '@ionic-native/google-analytics/ngx';
var PageListingPage = /** @class */ (function () {
    function PageListingPage(
    //  private ga: GoogleAnalytics,
    homeLinkService, router, contentService) {
        var _this = this;
        this.homeLinkService = homeLinkService;
        this.router = router;
        this.contentService = contentService;
        this.links = [];
        this.uploadIsInProgress = false;
        this.uploadIsInProgress = true;
        //this.ga.trackView('Home')
        contentService.articleTypes.subscribe(function (links) {
            _this.links = links;
            _this.links.sort(function (a, b) {
                return a.fields.weight - b.fields.weight;
            });
        });
        this.uploadIsInProgress = false;
    }
    PageListingPage.prototype.open = function (link) {
        this.router.navigate(['category', link.sys.id]);
    };
    PageListingPage.prototype.home = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.homeLinkService.home();
                return [2 /*return*/];
            });
        });
    };
    PageListingPage.prototype.sharing = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.homeLinkService.sharing();
                return [2 /*return*/];
            });
        });
    };
    PageListingPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-listing',
            template: __webpack_require__(/*! ./page-listing.page.html */ "./src/app/pages/page-listing/page-listing.page.html"),
            styles: [__webpack_require__(/*! ./page-listing.page.scss */ "./src/app/pages/page-listing/page-listing.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_home_link_home_link_service__WEBPACK_IMPORTED_MODULE_3__["HomeLinkService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_content_service_content_service__WEBPACK_IMPORTED_MODULE_1__["ContentService"]])
    ], PageListingPage);
    return PageListingPage;
}());



/***/ }),

/***/ "./src/app/services/home-link/home-link.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/home-link/home-link.service.ts ***!
  \*********************************************************/
/*! exports provided: HomeLinkService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeLinkService", function() { return HomeLinkService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var HomeLinkService = /** @class */ (function () {
    function HomeLinkService(router) {
        this.router = router;
    }
    HomeLinkService.prototype.home = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.router.navigateByUrl('page-listing');
                return [2 /*return*/];
            });
        });
    };
    HomeLinkService.prototype.upload = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.router.navigateByUrl('upload-best-practice');
                return [2 /*return*/];
            });
        });
    };
    HomeLinkService.prototype.sharing = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.router.navigateByUrl('best-practice');
                return [2 /*return*/];
            });
        });
    };
    HomeLinkService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HomeLinkService);
    return HomeLinkService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-page-listing-page-listing-module.js.map