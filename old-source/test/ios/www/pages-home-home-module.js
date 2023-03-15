(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"],{

/***/ "./src/app/pages/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/home/home.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"],
                    },
                ]),
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]],
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/pages/home/home.page.html":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content *ngIf=\"showPage\">\n    <ion-slides #slider [options]=\"mySlideOptions\">\n        <ion-slide class=\"bgImage\">\n            <ion-grid>\n                <ion-row>\n                    <ion-col>\n                        <ion-text class=\"header\">\n                            <ion-img src=\"/assets/logoBlock.jpg\"></ion-img>\n                        </ion-text>\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col>\n                        <ion-img class=\"topImage\" src=\"/assets/homeText.svg\"></ion-img>\n                        <ion-img class=\"bottomImage\" src=\"/assets/challengingBeliefs.png\"></ion-img>\n                    </ion-col>\n                </ion-row>\n                <ion-row class=\"fixed--bottom\">\n                    <ion-col>\n                        <ion-text class=\"footer\">\n                            <ion-button (click)=\"next()\" color=\"light\">Next <ion-icon name=\"arrow-round-forward\"></ion-icon></ion-button>\n                        </ion-text>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </ion-slide>\n        <ion-slide class=\"bgBlack\">\n            <ion-grid>\n                <ion-row>\n                    <ion-col>\n                        <ion-text class=\"small-header\">\n                            <ion-img src=\"/assets/logoBlock.jpg\"></ion-img>\n                        </ion-text>\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col>\n                        <ion-img class=\"heroImage\" src=\"/assets/heroImageOne.jpg\"></ion-img>\n                        <ion-text color=\"dark\">\n                            <h1 class=\"slider--white\">Welcome to the Challenging Beliefs, Affecting Behaviour’ Safety\n                                Leadership Programme</h1>\n                        </ion-text>\n                    </ion-col>\n                </ion-row>\n                <ion-row class=\"fixed--bottom\">\n                    <ion-col>\n                        <ion-text class=\"footer\">\n                            <ion-button (click)=\"next()\" color=\"light\">Next <ion-icon name=\"arrow-round-forward\"></ion-icon></ion-button>\n                        </ion-text>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </ion-slide>\n        <ion-slide class=\"bgFade\">\n            <ion-grid>\n                <ion-row>\n                    <ion-col>\n                        <ion-text class=\"small-header\">\n                            <ion-img src=\"/assets/logoBlock.jpg\"></ion-img>\n                        </ion-text>\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col>\n                        <ion-text color=\"light\">\n                            <h1 class=\"white\">Challenge beliefs</h1>\n                        </ion-text>\n                        <p class=\"grey\">Lorem ipsum dolor sit amet, cons ectetuer adipiscing\n                            elit, sed diam orem ipsum dolor sit amet, conse ctetuer adipisci.</p>\n                        <ion-text color=\"light\">\n                            <h1 class=\"white\">Affecting behaviour</h1>\n                        </ion-text>\n                        <p class=\"grey\">Lorem ipsum dolor sit amet, cons ectetuer adipiscing\n                            elit, sed diam orem ipsum dolor sit amet, conse ctetuer adipisci.</p>\n\n                    </ion-col>\n                </ion-row>\n                <ion-row class=\"fixed--bottom\">\n                    <ion-col>\n                        <ion-text class=\"footer\">\n                            <ion-button (click)=\"next()\" color=\"light\">Next <ion-icon name=\"arrow-round-forward\"></ion-icon></ion-button>\n                        </ion-text>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </ion-slide>\n        <ion-slide class=\"bgFade\">\n            <ion-grid>\n                <ion-row>\n                    <ion-col>\n                        <ion-text class=\"small-header\">\n                            <ion-img src=\"/assets/logoBlock.jpg\"></ion-img>\n                        </ion-text>\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col>\n                        <ion-text color=\"light\">\n                            <h1 class=\"white\">Why use this App?</h1>\n                        </ion-text>\n                        <p class=\"grey\">Lorem ipsum dolor sit amet, cons ectetuer adipiscing\n                            elit, sed diam orem ipsum dolor sit amet, conse ctetuer adipisci.</p>\n                        <ion-text color=\"light\">\n                            <h1 class=\"white\">Simple, helpful resources</h1>\n                        </ion-text>\n                        <p class=\"grey\">Lorem ipsum dolor sit amet, cons ectetuer adipiscing\n                            elit, sed diam orem ipsum dolor sit amet, conse ctetuer adipisci.</p>\n\n                    </ion-col>\n                </ion-row>\n                <ion-row class=\"fixed--bottom\">\n                    <ion-col>\n                        <ion-text class=\"footer\">\n                            <ion-button (click)=\"finish()\">Start\n                                <ion-icon name=\"arrow-round-forward\"></ion-icon>\n                            </ion-button>\n                        </ion-text>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </ion-slide>\n    </ion-slides>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/home/home.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-slide {\n  height: 100vh;\n  /*flex-direction: column;*/\n  --background: url('footerBG.jpg') no-repeat top center;\n  background-size: cover; }\n\nion-img {\n  max-width: 90vw;\n  max-height: 50vh;\n  /*  overflow: hidden;*/\n  margin: 0 auto; }\n\n.header, .small-header {\n  background: #202230;\n  display: block;\n  width: 100vw;\n  left: 0;\n  top: 0;\n  position: relative;\n  padding: 5px; }\n\n.small-header ion-img {\n  max-width: 50vw;\n  max-height: 50vh;\n  /*  overflow: hidden;*/\n  margin: 0 auto; }\n\nion-button {\n  min-width: 130px; }\n\n.fixed--bottom {\n  bottom: 0;\n  position: fixed; }\n\n.bgImage {\n  /*  padding: 40px 40px 20px 40px;*/\n  text-align: center;\n  display: block;\n  background: url('homePageBG.jpg') no-repeat top center;\n  background-size: cover; }\n\n.bgFade {\n  --background: url('NavyBG.jpg') top center;\n  background: url('NavyBG.jpg') top center;\n  text-align: center;\n  display: block; }\n\n.bgFade h1 {\n  padding: 50px 30px 0 30px; }\n\n.bgFade p {\n  padding: 0 30px; }\n\n@media only screen and (max-width: 767px) {\n  .bgFade h1 {\n    padding: 30px 30px 0 20px;\n    font-size: 18px; }\n  .bgFade p {\n    padding: 0 20px;\n    font-size: 16px; } }\n\n.bgBlack {\n  text-align: center;\n  display: block;\n  background: #000000;\n  color: #ffffff; }\n\n.slider--white {\n  color: #ffffff;\n  padding: 50px 30px; }\n\n@media only screen and (max-width: 767px) {\n  .slider--white {\n    font-size: 16px; } }\n\n.white {\n  color: #ffffff;\n  font-weight: bold; }\n\n.grey {\n  color: #9a9c9e;\n  font-size: 20px; }\n\nion-grid, ion-row, ion-col {\n  padding: 0 !important; }\n\nion-img.topImage {\n  max-width: 80vw;\n  margin: 0 auto;\n  padding: 50px 0 50px 0; }\n\nion-img.bottomImage {\n  max-width: 70vw;\n  margin: 0 auto;\n  padding: 150px 0 50px 0; }\n\n@media only screen and (max-width: 767px) {\n  ion-img.bottomImage {\n    padding: 50px 0 50px 0; } }\n\nion-img.heroImage {\n  max-width: 100vw;\n  margin: 0 auto;\n  position: relative; }\n\n.footer {\n  display: block;\n  padding: 40px 0 65px 0;\n  text-align: center;\n  background: url('footerBG.jpg') no-repeat top center;\n  background-size: cover;\n  width: 100vw;\n  left: 0;\n  bottom: 0;\n  position: relative; }\n\n@media only screen and (max-width: 767px) {\n  .footer {\n    padding: 20px 0 30px 0; } }\n\nbutton {\n  display: block;\n  padding: 22px 64px;\n  border-radius: 8px;\n  color: #202230;\n  background: #fff;\n  font-size: 22px;\n  line-height: 22px;\n  font-weight: bold;\n  margin: 0 auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYXVsLmNhcm5lbGwvZ2FsbGlmb3JkdHJ5LWFwcC9zcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsMEJBQUE7RUFDQSxzREFBYTtFQUNiLHNCQUFzQixFQUFBOztBQUd4QjtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDbEIsc0JBQUE7RUFDRSxjQUFjLEVBQUE7O0FBSWhCO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxZQUFZO0VBQ1osT0FBTztFQUNQLE1BQU07RUFDTixrQkFBa0I7RUFDbEIsWUFBWSxFQUFBOztBQUlkO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNsQixzQkFBQTtFQUNFLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxTQUFTO0VBQ1QsZUFBZSxFQUFBOztBQUtqQjtFQUNFLGtDQUFBO0VBQ0Esa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxzREFBb0U7RUFDcEUsc0JBQXNCLEVBQUE7O0FBSXhCO0VBQ0UsMENBQWE7RUFDYix3Q0FBc0Q7RUFDdEQsa0JBQWtCO0VBQ2xCLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSx5QkFBeUIsRUFBQTs7QUFHM0I7RUFDRSxlQUFlLEVBQUE7O0FBR2pCO0VBQ0U7SUFDRSx5QkFBeUI7SUFDekIsZUFBZSxFQUFBO0VBR2pCO0lBQ0UsZUFBZTtJQUNmLGVBQWUsRUFBQSxFQUNoQjs7QUFHSDtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0U7SUFDRSxlQUFlLEVBQUEsRUFDaEI7O0FBR0g7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsY0FBYztFQUNkLGVBQWUsRUFBQTs7QUFJakI7RUFDRSxxQkFBcUIsRUFBQTs7QUFHdkI7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLHNCQUFzQixFQUFBOztBQUd4QjtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QsdUJBQXVCLEVBQUE7O0FBR3pCO0VBQ0U7SUFDRSxzQkFBc0IsRUFBQSxFQUN2Qjs7QUFHSDtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Qsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsY0FBYztFQUNkLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsb0RBQWtFO0VBQ2xFLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osT0FBTztFQUNQLFNBQVM7RUFDVCxrQkFBa0IsRUFBQTs7QUFJcEI7RUFDRTtJQUNFLHNCQUFzQixFQUFBLEVBQ3ZCOztBQUdIO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXNsaWRlIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgLypmbGV4LWRpcmVjdGlvbjogY29sdW1uOyovXG4gIC0tYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9mb290ZXJCRy5qcGcpIG5vLXJlcGVhdCB0b3AgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG5pb24taW1nIHtcbiAgbWF4LXdpZHRoOiA5MHZ3O1xuICBtYXgtaGVpZ2h0OiA1MHZoO1xuLyogIG92ZXJmbG93OiBoaWRkZW47Ki9cbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cblxuLmhlYWRlciwgLnNtYWxsLWhlYWRlciB7XG4gIGJhY2tncm91bmQ6ICMyMDIyMzA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwdnc7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiA1cHg7XG59XG5cblxuLnNtYWxsLWhlYWRlciBpb24taW1nIHtcbiAgbWF4LXdpZHRoOiA1MHZ3O1xuICBtYXgtaGVpZ2h0OiA1MHZoO1xuLyogIG92ZXJmbG93OiBoaWRkZW47Ki9cbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbmlvbi1idXR0b24ge1xuICBtaW4td2lkdGg6IDEzMHB4O1xufVxuXG4uZml4ZWQtLWJvdHRvbSB7XG4gIGJvdHRvbTogMDtcbiAgcG9zaXRpb246IGZpeGVkO1xuXG59XG5cblxuLmJnSW1hZ2Uge1xuICAvKiAgcGFkZGluZzogNDBweCA0MHB4IDIwcHggNDBweDsqL1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2hvbWVQYWdlQkcuanBnKSBuby1yZXBlYXQgdG9wIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuXG4uYmdGYWRlIHtcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL05hdnlCRy5qcGcpIHRvcCBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvTmF2eUJHLmpwZykgdG9wIGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmJnRmFkZSBoMSB7XG4gIHBhZGRpbmc6IDUwcHggMzBweCAwIDMwcHg7XG59XG5cbi5iZ0ZhZGUgcCB7XG4gIHBhZGRpbmc6IDAgMzBweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuYmdGYWRlIGgxIHtcbiAgICBwYWRkaW5nOiAzMHB4IDMwcHggMCAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxuXG4gIC5iZ0ZhZGUgcCB7XG4gICAgcGFkZGluZzogMCAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxufVxuXG4uYmdCbGFjayB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQ6ICMwMDAwMDA7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uc2xpZGVyLS13aGl0ZSB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBwYWRkaW5nOiA1MHB4IDMwcHg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLnNsaWRlci0td2hpdGUge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxufVxuXG4ud2hpdGUge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5ncmV5IHtcbiAgY29sb3I6ICM5YTljOWU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuXG5pb24tZ3JpZCwgaW9uLXJvdywgaW9uLWNvbCB7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cblxuaW9uLWltZy50b3BJbWFnZSB7XG4gIG1heC13aWR0aDogODB2dztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDUwcHggMCA1MHB4IDA7XG59XG5cbmlvbi1pbWcuYm90dG9tSW1hZ2Uge1xuICBtYXgtd2lkdGg6IDcwdnc7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAxNTBweCAwIDUwcHggMDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICBpb24taW1nLmJvdHRvbUltYWdlIHtcbiAgICBwYWRkaW5nOiA1MHB4IDAgNTBweCAwO1xuICB9XG59XG5cbmlvbi1pbWcuaGVyb0ltYWdlIHtcbiAgbWF4LXdpZHRoOiAxMDB2dztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmZvb3RlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiA0MHB4IDAgNjVweCAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvZm9vdGVyQkcuanBnKSBuby1yZXBlYXQgdG9wIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgd2lkdGg6IDEwMHZ3O1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5mb290ZXIge1xuICAgIHBhZGRpbmc6IDIwcHggMCAzMHB4IDA7XG4gIH1cbn1cblxuYnV0dG9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDIycHggNjRweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBjb2xvcjogIzIwMjIzMDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbjogMCBhdXRvO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/home/home.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(router, storage) {
        var _this = this;
        this.router = router;
        this.storage = storage;
        this.showPage = false;
        this.mySlideOptions = {
            pager: true,
        };
        storage.get('homePageStartClicked').then(function (value) {
            //  console.log('homePageStartClicked:', value);
            if (value) {
                _this.router.navigateByUrl('page-listing');
            }
            else {
                _this.showPage = true;
            }
        });
    }
    HomePage.prototype.finish = function () {
        this.storage.set('homePageStartClicked', true);
        this.router.navigateByUrl('page-listing');
    };
    HomePage.prototype.next = function () {
        this.slides.slideNext();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('slider'),
        __metadata("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])
    ], HomePage.prototype, "slides", void 0);
    HomePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/pages/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/pages/home/home.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-home-home-module.js.map