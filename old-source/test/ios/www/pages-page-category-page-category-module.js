(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-page-category-page-category-module"],{

/***/ "./src/app/pages/page-category/page-category.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/page-category/page-category.module.ts ***!
  \*************************************************************/
/*! exports provided: CategoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryPageModule", function() { return CategoryPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _page_category_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page-category.page */ "./src/app/pages/page-category/page-category.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _page_category_page__WEBPACK_IMPORTED_MODULE_5__["CategoryPage"],
    },
];
var CategoryPageModule = /** @class */ (function () {
    function CategoryPageModule() {
    }
    CategoryPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            ],
            declarations: [_page_category_page__WEBPACK_IMPORTED_MODULE_5__["CategoryPage"]],
        })
    ], CategoryPageModule);
    return CategoryPageModule;
}());



/***/ }),

/***/ "./src/app/pages/page-category/page-category.page.html":
/*!*************************************************************!*\
  !*** ./src/app/pages/page-category/page-category.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"navBar\">\n    <ion-toolbar>\n        <ion-buttons class=\"menuIcon\" slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <div class=\"companyLogo\">\n            <ion-img (click)=\"home()\" src=\"/assets/gallifortLogo.svg\"></ion-img>\n        </div>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"appContent\">\n    <div class=\"heading\" *ngIf=\"links[0]?.category.fields.slug!='tools-and-resources'\">\n        <h1>{{links[0]?.fields.articleCategory.fields.title}}</h1>\n    </div>\n    <div class=\"heading2\" *ngIf=\"links[0]?.category.fields.slug==='tools-and-resources'\">\n        <h1>{{links[0]?.fields.articleCategory.fields.title}}</h1>\n    </div>\n\n    <div class=\"pageListing\">\n        <ul>\n            <li (click)=\"open(link)\" *ngFor=\"let link of links\">\n                {{link.fields.title}}\n                <div class=\"icon\">\n                    <ion-img src=\"/assets/arrowRightWhite.svg\"></ion-img>\n                </div>\n            </li>\n        </ul>\n    </div>\n</ion-content>\n<ion-footer>\n    <ion-toolbar>\n        <ion-img src=\"/assets/challengingBeliefs.png\"></ion-img>\n    </ion-toolbar>\n</ion-footer>\n\n"

/***/ }),

/***/ "./src/app/pages/page-category/page-category.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/page-category/page-category.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".companyLogo {\n  width: 100%;\n  max-width: 115px;\n  margin: 0 auto;\n  cursor: pointer; }\n\n.menuIcon {\n  position: absolute;\n  right: 20px;\n  top: 10px;\n  width: 30px;\n  height: 30px; }\n\n.menuIcon .button {\n  --color: #548c99; }\n\nion-menu {\n  display: none; }\n\nion-icon {\n  font-size: 50px; }\n\n.navBar .hydrated {\n  --background: none !important; }\n\n.heading {\n  background: url('headingBG.jpg') no-repeat top center;\n  background-size: cover;\n  text-align: center;\n  padding: 30px 26px 30px 35px; }\n\n.heading2 {\n  background: url('headingBestBG.png') no-repeat top center;\n  background-size: cover;\n  text-align: center;\n  padding: 30px 26px 30px 35px; }\n\n.pageListing {\n  background: none;\n  padding: 0 0 0 15px; }\n\n.pageListing ul {\n  margin: 0 0 30px 0;\n  padding: 0; }\n\n.pageListing ul li {\n  list-style: none;\n  position: relative;\n  text-align: left;\n  line-height: 24px;\n  font-weight: bold;\n  color: #fff;\n  border-bottom: 1px solid rgba(154, 156, 158, 0.75);\n  display: flex;\n  align-items: center;\n  cursor: pointer; }\n\n.pageListing ul li .icon {\n  width: 14px;\n  height: 15px;\n  position: absolute;\n  right: 15px;\n  top: 30px; }\n\n.footerLogo {\n  margin: 0 0 30px -15px;\n  left: 0;\n  bottom: 0;\n  text-align: center;\n  width: 100%; }\n\nion-footer > ion-toolbar {\n  --background: #000;\n  background: #000; }\n\nion-toolbar > ion-img {\n  width: 40vw;\n  margin: 0 auto;\n  padding-top: 10px; }\n\n@media only screen and (min-width: 769px) {\n  ion-toolbar > ion-img {\n    max-width: 250px; } }\n\n.footerLogo .hydrated {\n  width: 100%;\n  max-width: 170px;\n  margin: 0 auto; }\n\n.articleBack {\n  position: absolute;\n  left: 20px;\n  top: 10px;\n  width: 30px;\n  height: 30px; }\n\n.articleBack .button {\n  --color: #fff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYXVsLmNhcm5lbGwvZ2FsbGlmb3JkdHJ5LWFwcC9zcmMvYXBwL3BhZ2VzL3BhZ2UtY2F0ZWdvcnkvcGFnZS1jYXRlZ29yeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxlQUFlLEVBQUE7O0FBR2pCO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxTQUFTO0VBQ1QsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFHZDtFQUNFLGdCQUFRLEVBQUE7O0FBR1Y7RUFDRSxhQUFhLEVBQUE7O0FBR2Y7RUFDRSxlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsNkJBQWEsRUFBQTs7QUFHZjtFQUNFLHFEQUFtRTtFQUNuRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLDRCQUE0QixFQUFBOztBQUc5QjtFQUNFLHlEQUF1RTtFQUN2RSxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLDRCQUE0QixFQUFBOztBQUk5QjtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVSxFQUFBOztBQUdaO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsa0RBQWtEO0VBQ2xELGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZUFBZSxFQUFBOztBQUdqQjtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxTQUFTLEVBQUE7O0FBR1g7RUFDRSxzQkFBc0I7RUFDdEIsT0FBTztFQUNQLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsV0FBVyxFQUFBOztBQUdiO0VBQ0Usa0JBQWE7RUFDYixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLGlCQUFpQixFQUFBOztBQUduQjtFQUNFO0lBQ0UsZ0JBQWdCLEVBQUEsRUFDakI7O0FBR0g7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFNBQVM7RUFDVCxXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUdkO0VBQ0UsYUFBUSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcGFnZS1jYXRlZ29yeS9wYWdlLWNhdGVnb3J5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb21wYW55TG9nbyB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDExNXB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubWVudUljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAyMHB4O1xuICB0b3A6IDEwcHg7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG59XG5cbi5tZW51SWNvbiAuYnV0dG9uIHtcbiAgLS1jb2xvcjogIzU0OGM5OTtcbn1cblxuaW9uLW1lbnUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5pb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogNTBweDtcbn1cblxuLm5hdkJhciAuaHlkcmF0ZWQge1xuICAtLWJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmhlYWRpbmcge1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2hlYWRpbmdCRy5qcGcpIG5vLXJlcGVhdCB0b3AgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDMwcHggMjZweCAzMHB4IDM1cHg7XG59XG5cbi5oZWFkaW5nMiB7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvaGVhZGluZ0Jlc3RCRy5wbmcpIG5vLXJlcGVhdCB0b3AgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDMwcHggMjZweCAzMHB4IDM1cHg7XG59XG5cblxuLnBhZ2VMaXN0aW5nIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgcGFkZGluZzogMCAwIDAgMTVweDtcbn1cblxuLnBhZ2VMaXN0aW5nIHVsIHtcbiAgbWFyZ2luOiAwIDAgMzBweCAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4ucGFnZUxpc3RpbmcgdWwgbGkge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDE1NCwgMTU2LCAxNTgsIDAuNzUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wYWdlTGlzdGluZyB1bCBsaSAuaWNvbiB7XG4gIHdpZHRoOiAxNHB4O1xuICBoZWlnaHQ6IDE1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDE1cHg7XG4gIHRvcDogMzBweDtcbn1cblxuLmZvb3RlckxvZ28ge1xuICBtYXJnaW46IDAgMCAzMHB4IC0xNXB4O1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmlvbi1mb290ZXIgPiBpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogIzAwMDtcbiAgYmFja2dyb3VuZDogIzAwMDtcbn1cblxuaW9uLXRvb2xiYXIgPiBpb24taW1nIHtcbiAgd2lkdGg6IDQwdnc7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjlweCkge1xuICBpb24tdG9vbGJhciA+IGlvbi1pbWcge1xuICAgIG1heC13aWR0aDogMjUwcHg7XG4gIH1cbn1cblxuLmZvb3RlckxvZ28gLmh5ZHJhdGVkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTcwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uYXJ0aWNsZUJhY2sge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDIwcHg7XG4gIHRvcDogMTBweDtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbn1cblxuLmFydGljbGVCYWNrIC5idXR0b24ge1xuICAtLWNvbG9yOiAjZmZmO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/pages/page-category/page-category.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/page-category/page-category.page.ts ***!
  \***********************************************************/
/*! exports provided: CategoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryPage", function() { return CategoryPage; });
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




var CategoryPage = /** @class */ (function () {
    function CategoryPage(homeLinkService, route, router, contentService) {
        var _this = this;
        this.homeLinkService = homeLinkService;
        this.route = route;
        this.router = router;
        this.contentService = contentService;
        this.links = [];
        this.route.params.subscribe(function (params) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                contentService.articles.subscribe(function (links) {
                    _this.links = links;
                    _this.links.sort(function (a, b) {
                        return a.fields.weight - b.fields.weight;
                    });
                    _this.links = _this.links.filter(function (article) {
                        return article.fields.articleCategory.sys.id === params.categoryId;
                    });
                });
                return [2 /*return*/];
            });
        }); });
    }
    CategoryPage.prototype.open = function (link) {
        this.router.navigate(['article', link.sys.id]);
    };
    CategoryPage.prototype.home = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.homeLinkService.home();
                return [2 /*return*/];
            });
        });
    };
    CategoryPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-category',
            template: __webpack_require__(/*! ./page-category.page.html */ "./src/app/pages/page-category/page-category.page.html"),
            styles: [__webpack_require__(/*! ./page-category.page.scss */ "./src/app/pages/page-category/page-category.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_home_link_home_link_service__WEBPACK_IMPORTED_MODULE_3__["HomeLinkService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_content_service_content_service__WEBPACK_IMPORTED_MODULE_1__["ContentService"]])
    ], CategoryPage);
    return CategoryPage;
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
//# sourceMappingURL=pages-page-category-page-category-module.js.map