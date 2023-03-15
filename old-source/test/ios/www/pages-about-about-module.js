(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-about-about-module"],{

/***/ "./src/app/pages/about/about.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/about/about.module.ts ***!
  \*********************************************/
/*! exports provided: AboutPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageModule", function() { return AboutPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _about_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about.page */ "./src/app/pages/about/about.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _about_page__WEBPACK_IMPORTED_MODULE_5__["AboutPage"],
    },
];
var AboutPageModule = /** @class */ (function () {
    function AboutPageModule() {
    }
    AboutPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            ],
            declarations: [_about_page__WEBPACK_IMPORTED_MODULE_5__["AboutPage"]],
        })
    ], AboutPageModule);
    return AboutPageModule;
}());



/***/ }),

/***/ "./src/app/pages/about/about.page.html":
/*!*********************************************!*\
  !*** ./src/app/pages/about/about.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"navBar\">\n    <ion-toolbar>\n        <ion-buttons class=\"menuIcon\" slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <div class=\"companyLogo\">\n            <ion-img (click)=\"home()\" src=\"/assets/gallifortLogo.svg\"></ion-img>\n        </div>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"appContent\">\n    <div class=\"heading\">\n        <h1 [innerHTML]=\"static.title\"></h1>\n    </div>\n    <div class=\"articleContent\">\n        <div class=\"row rowPadding\" [innerHTML]=\"static.content\"></div>\n    </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/about/about.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/about/about.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  background: url('NavyBG.jpg') no-repeat top center;\n  background-size: cover;\n  text-align: center; }\n\nion-content {\n  -webkit-transform-style: preserve-3d;\n  -webkit-backface-visibility: hidden; }\n\n.companyLogo {\n  width: 100%;\n  max-width: 115px;\n  margin: 0 auto;\n  cursor: pointer; }\n\n.menuIcon {\n  position: absolute;\n  right: 20px;\n  top: 10px;\n  width: 30px;\n  height: 30px; }\n\n.menuIcon .button {\n  --color: #548c99; }\n\nion-icon {\n  font-size: 50px; }\n\n.heading {\n  background: url('headingBG.jpg') no-repeat top center;\n  background-size: cover;\n  text-align: center;\n  height: 100px;\n  padding: 30px 26px 0 26px; }\n\n.linkListing {\n  background: url('NavyBG.jpg') no-repeat top center;\n  background-size: cover;\n  text-align: center;\n  padding: 15px 5px; }\n\n.grid {\n  padding: 0; }\n\n.grid .row {\n  margin: 0 0 15px 0; }\n\n.grid .row .column {\n  padding-bottom: 0; }\n\nion-content {\n  --background: #fff; }\n\n.redtitle {\n  background: #B70E0C;\n  min-height: 80px;\n  margin: 0px; }\n\n.redtitle ion-img {\n    float: left;\n    width: 80px;\n    padding: 5px; }\n\n.redtitle h2 {\n    color: #fff;\n    margin-top: 25px;\n    float: left; }\n\n.articleHeading {\n  margin: 0 0 20px 15px; }\n\n.articleHeading h1 {\n  padding: 20px 0 15px 20px;\n  border-bottom: 1px solid rgba(154, 156, 158, 0.75);\n  margin: 0;\n  color: #202230;\n  font-size: 20px;\n  line-height: 22px;\n  font-weight: bold; }\n\n.row {\n  margin: 0 0 0 15px; }\n\n.rowPadding {\n  padding: 0 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYXVsLmNhcm5lbGwvZ2FsbGlmb3JkdHJ5LWFwcC9zcmMvYXBwL3BhZ2VzL2Fib3V0L2Fib3V0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtEQUFnRTtFQUNoRSxzQkFBc0I7RUFDdEIsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0Usb0NBQW9DO0VBQ3BDLG1DQUFtQyxFQUFBOztBQUdyQztFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFNBQVM7RUFDVCxXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUdkO0VBQ0UsZ0JBQVEsRUFBQTs7QUFHVjtFQUNFLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxxREFBbUU7RUFDbkUsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IseUJBQXlCLEVBQUE7O0FBSTNCO0VBQ0Usa0RBQWdFO0VBQ2hFLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsVUFBVSxFQUFBOztBQUdaO0VBQ0Usa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0Usa0JBQWEsRUFBQTs7QUFHZjtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFFaEIsV0FBVyxFQUFBOztBQUpiO0lBT0ksV0FBVztJQUNYLFdBQVc7SUFDWCxZQUFZLEVBQUE7O0FBVGhCO0lBYUksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixXQUFXLEVBQUE7O0FBSWY7RUFDRSxxQkFBcUIsRUFBQTs7QUFHdkI7RUFDRSx5QkFBeUI7RUFDekIsa0RBQWtEO0VBQ2xELFNBQVM7RUFDVCxjQUFjO0VBQ2QsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hYm91dC9hYm91dC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9OYXZ5QkcuanBnKSBuby1yZXBlYXQgdG9wIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24tY29udGVudCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbi5jb21wYW55TG9nbyB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDExNXB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubWVudUljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAyMHB4O1xuICB0b3A6IDEwcHg7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG59XG5cbi5tZW51SWNvbiAuYnV0dG9uIHtcbiAgLS1jb2xvcjogIzU0OGM5OTtcbn1cblxuaW9uLWljb24ge1xuICBmb250LXNpemU6IDUwcHg7XG59XG5cbi5oZWFkaW5nIHtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9oZWFkaW5nQkcuanBnKSBuby1yZXBlYXQgdG9wIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDEwMHB4O1xuICBwYWRkaW5nOiAzMHB4IDI2cHggMCAyNnB4O1xufVxuXG5cbi5saW5rTGlzdGluZyB7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvTmF2eUJHLmpwZykgbm8tcmVwZWF0IHRvcCBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTVweCA1cHg7XG59XG5cbi5ncmlkIHtcbiAgcGFkZGluZzogMDtcbn1cblxuLmdyaWQgLnJvdyB7XG4gIG1hcmdpbjogMCAwIDE1cHggMDtcbn1cblxuLmdyaWQgLnJvdyAuY29sdW1uIHtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG4ucmVkdGl0bGUge1xuICBiYWNrZ3JvdW5kOiAjQjcwRTBDO1xuICBtaW4taGVpZ2h0OiA4MHB4O1xuXG4gIG1hcmdpbjogMHB4O1xuXG4gIGlvbi1pbWcge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgfVxuXG4gIGgyIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICAgIGZsb2F0OiBsZWZ0O1xuICB9XG59XG5cbi5hcnRpY2xlSGVhZGluZyB7XG4gIG1hcmdpbjogMCAwIDIwcHggMTVweDtcbn1cblxuLmFydGljbGVIZWFkaW5nIGgxIHtcbiAgcGFkZGluZzogMjBweCAwIDE1cHggMjBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMTU0LCAxNTYsIDE1OCwgMC43NSk7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6ICMyMDIyMzA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ucm93IHtcbiAgbWFyZ2luOiAwIDAgMCAxNXB4O1xufVxuXG4ucm93UGFkZGluZyB7XG4gIHBhZGRpbmc6IDAgMjBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/about/about.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/about/about.page.ts ***!
  \*******************************************/
/*! exports provided: AboutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPage", function() { return AboutPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_content_service_content_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/content-service/content.service */ "./src/app/services/content-service/content.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! marked */ "./node_modules/marked/lib/marked.js");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(marked__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_home_link_home_link_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/home-link/home-link.service */ "./src/app/services/home-link/home-link.service.ts");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-device-detector */ "./node_modules/ngx-device-detector/fesm5/ngx-device-detector.js");
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






var AboutPage = /** @class */ (function () {
    function AboutPage(homeLinkService, route, deviceService, contentService) {
        var _this = this;
        this.homeLinkService = homeLinkService;
        this.route = route;
        this.deviceService = deviceService;
        this.contentService = contentService;
        this.static = {};
        this.deviceInfo = null;
        this.isIOS10 = false;
        this.route.params.subscribe(function (params) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                contentService.staticPages.subscribe(function (results) {
                    var md = marked__WEBPACK_IMPORTED_MODULE_3___default.a.setOptions({
                        renderer: new marked__WEBPACK_IMPORTED_MODULE_3___default.a.Renderer(),
                        sanitize: true,
                        smartLists: true,
                        smartypants: true,
                    });
                    _this.static.title = results[0].fields.pageTitle;
                    _this.static.content = md.parse(results[0].fields.pageContent);
                });
                return [2 /*return*/];
            });
        }); });
        this.deviceInfo = this.deviceService.getDeviceInfo();
        if (this.deviceInfo.os == 'iOS') {
            if (this.deviceInfo.os_version < 11) {
                this.isIOS10 = true;
            }
        }
    }
    AboutPage.prototype.home = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.homeLinkService.home();
                return [2 /*return*/];
            });
        });
    };
    AboutPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.page.html */ "./src/app/pages/about/about.page.html"),
            styles: [__webpack_require__(/*! ./about.page.scss */ "./src/app/pages/about/about.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_home_link_home_link_service__WEBPACK_IMPORTED_MODULE_4__["HomeLinkService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            ngx_device_detector__WEBPACK_IMPORTED_MODULE_5__["DeviceDetectorService"],
            _services_content_service_content_service__WEBPACK_IMPORTED_MODULE_1__["ContentService"]])
    ], AboutPage);
    return AboutPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-about-about-module.js.map