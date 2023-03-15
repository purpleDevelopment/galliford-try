(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-best-practice-best-practice-module"],{

/***/ "./src/app/pages/best-practice/best-practice.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/best-practice/best-practice.module.ts ***!
  \*************************************************************/
/*! exports provided: BestPracticePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BestPracticePageModule", function() { return BestPracticePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _best_practice_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./best-practice.page */ "./src/app/pages/best-practice/best-practice.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _best_practice_page__WEBPACK_IMPORTED_MODULE_5__["BestPracticePage"],
    },
];
var BestPracticePageModule = /** @class */ (function () {
    function BestPracticePageModule() {
    }
    BestPracticePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            ],
            declarations: [_best_practice_page__WEBPACK_IMPORTED_MODULE_5__["BestPracticePage"]],
        })
    ], BestPracticePageModule);
    return BestPracticePageModule;
}());



/***/ }),

/***/ "./src/app/pages/best-practice/best-practice.page.html":
/*!*************************************************************!*\
  !*** ./src/app/pages/best-practice/best-practice.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"navBar\">\n    <ion-toolbar>\n        <ion-buttons class=\"articleBack\">\n            <ion-back-button defaultHref=\"\">\n            </ion-back-button>\n        </ion-buttons>\n        <ion-buttons class=\"menuIcon\" slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <div class=\"companyLogo\">\n            <ion-img (click)=\"home()\" src=\"/assets/gallifortLogo.svg\"></ion-img>\n        </div>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"appContent\">\n    <div class=\"articleContent\">\n        <div class=\"hero\" *ngIf=\"article?.fields?.photo\">\n            <ion-img [src]=\"article?.fields?.photo?.fields?.file?.url\"></ion-img>\n        </div>\n        <div class=\"articleHeading\">\n            <h1>{{article?.fields?.title}} by {{article?.fields?.author}}</h1>\n            \n        </div>\n        <div class=\"row rowPadding desc\" style=\"padding-bottom:20px;\" [innerHTML]=\"article.content\"></div>\n\n        <div class=\"row rowPadding\" *ngIf=\"article?.fields?.businessUnit?.fields?.title\">\n            <strong>Business Unit</strong>: {{article?.fields?.businessUnit?.fields?.title}}\n        </div>\n        <div class=\"row rowPadding\" *ngIf=\"article?.fields?.toolsType?.fields?.title\">\n            <strong>Tools</strong>: {{article?.fields?.toolsType?.fields?.title}}\n        </div>\n        <div class=\"row rowPadding\"style=\"padding-bottom:20px;\" *ngIf=\"article?.fields?.detailType?.fields?.title\">\n            <strong>Detail</strong>: {{article?.fields?.detailType?.fields?.title}}\n        </div>\n        <div class=\"row rowPadding\">\n            <p>Contact uploader: <a href=\"mailto:{{article?.fields?.authorEmail}}\">{{article?.fields?.authorEmail}}</a></p>\n        </div>\n    </div>\n</ion-content>\n\n<ion-footer [ngClass]=\"{ios: isIOS10}\">\n    <ion-toolbar class=\"footerBar\">\n        <div class=\"footer footerLinks\">\n            <ul>\n                <li>\n                    <ion-buttons>\n                        <ion-back-button defaultHref=\"\">\n                        </ion-back-button>\n                    </ion-buttons>\n                </li>\n            </ul>\n        </div>\n    </ion-toolbar>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/pages/best-practice/best-practice.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/best-practice/best-practice.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".companyLogo {\n  width: 100%;\n  max-width: 115px;\n  margin: 0 auto;\n  cursor: pointer; }\n\n.menuIcon {\n  position: absolute;\n  right: 20px;\n  top: 10px;\n  width: 30px;\n  height: 30px; }\n\n.menuIcon .button {\n  --color: #548c99; }\n\nion-content {\n  --background: #fff; }\n\nion-icon {\n  font-size: 50px; }\n\n.articleHeading {\n  margin: 0 0 20px 15px; }\n\n.articleHeading h1 {\n  padding: 20px 0 15px 20px;\n  border-bottom: 1px solid rgba(154, 156, 158, 0.75);\n  margin: 0;\n  color: #202230;\n  font-size: 20px;\n  line-height: 22px;\n  font-weight: bold; }\n\n.row {\n  margin: 0 0 0 15px; }\n\n.rowPadding {\n  padding: 0 20px; }\n\n.back {\n  padding: 10px;\n  background: url('headingBG.jpg') no-repeat top center;\n  background-size: cover;\n  color: #fff; }\n\n.back .button {\n  color: #fff;\n  font-size: 16px;\n  line-height: 22px;\n  font-weight: bold; }\n\n.appContent {\n  -webkit-transform-style: preserve-3d;\n  -webkit-backface-visibility: hidden; }\n\n.appContent /deep/ p {\n    color: #575967;\n    font-size: 16px;\n    line-height: 22px;\n    margin: 0 0 20px 0; }\n\n.rowBlockQuote {\n  margin: 0 0 20px 0;\n  padding: 30px 65px 45px 50px;\n  background: url('blockquoteOneBG.png') no-repeat bottom center;\n  background-size: cover;\n  position: relative; }\n\n.rowBlockQuote.blue {\n  background: url('blockquoteTwoBG.png') no-repeat bottom center;\n  background-size: cover; }\n\n.rowBlockQuote .icon {\n  position: absolute;\n  width: 30px;\n  height: 20px; }\n\n.rowBlockQuote .speechLeft {\n  left: 3%;\n  top: 15%; }\n\n.rowBlockQuote .speechRight {\n  right: 10%;\n  bottom: 25%; }\n\n.rowBlockQuote p {\n  font-style: italic;\n  font-size: 18px;\n  line-height: 22px;\n  color: #202230;\n  margin: 0; }\n\n.rowAuthor {\n  margin: 60px 0 40px 20px;\n  padding: 0 20px; }\n\n.rowAuthor p {\n  margin: 0; }\n\n.footerLinks ul {\n  margin: 0;\n  padding: 0;\n  background: url('headingBG.jpg') no-repeat top center;\n  background-size: cover; }\n\n.footerLinks ul li {\n  display: inline-block;\n  margin: 0;\n  width: 68%;\n  position: relative;\n  padding: 24px 60px 24px 10px;\n  line-height: 20px;\n  font-size: 20px;\n  font-weight: bold;\n  color: #fff;\n  text-align: right;\n  vertical-align: middle;\n  cursor: pointer; }\n\n@media only screen and (max-width: 767px) {\n  .footerLinks ul li {\n    padding: 14px 60px 14px 10px;\n    font-size: 16px; } }\n\n.footerLinks ul li .button {\n  color: #fff;\n  margin: 0 auto;\n  font-size: 16px; }\n\n.footerLinks ul li .button .button-inner .sc-ion-back-button-ios {\n  display: none; }\n\n.footerLinks ul li .icon {\n  width: 14px;\n  height: 15px;\n  position: absolute;\n  right: 30px;\n  top: 25px; }\n\n@media only screen and (max-width: 767px) {\n  .footerLinks ul li .icon {\n    top: 15px; } }\n\n.footerLinks ul li:first-of-type {\n  width: 32%;\n  background: #9a9c9e;\n  font-size: 16px;\n  line-height: 24px;\n  font-weight: normal;\n  padding-right: 0;\n  text-align: center; }\n\n.backbar {\n  background-color: grey;\n  margin: 0;\n  padding: 0;\n  background: url('headingBG.jpg') no-repeat top center;\n  background-size: cover; }\n\n.backbar ion-back-button {\n  color: white;\n  padding: 5px; }\n\n.articleBack {\n  position: absolute;\n  left: 20px;\n  top: 10px;\n  width: 30px;\n  height: 30px; }\n\n.articleBack .button {\n  --color: #fff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYXVsLmNhcm5lbGwvZ2FsbGlmb3JkdHJ5LWFwcC9zcmMvYXBwL3BhZ2VzL2Jlc3QtcHJhY3RpY2UvYmVzdC1wcmFjdGljZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxlQUFlLEVBQUE7O0FBR2pCO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxTQUFTO0VBQ1QsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFHZDtFQUNFLGdCQUFRLEVBQUE7O0FBR1Y7RUFDRSxrQkFBYSxFQUFBOztBQUdmO0VBQ0UsZUFBZSxFQUFBOztBQUdqQjtFQUNFLHFCQUFxQixFQUFBOztBQUd2QjtFQUNFLHlCQUF5QjtFQUN6QixrREFBa0Q7RUFDbEQsU0FBUztFQUNULGNBQWM7RUFDZCxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxhQUFhO0VBQ2IscURBQW1FO0VBQ25FLHNCQUFzQjtFQUN0QixXQUFXLEVBQUE7O0FBR2I7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxvQ0FBb0M7RUFDcEMsbUNBQW1DLEVBQUE7O0FBRnJDO0lBS0ksY0FBYztJQUNkLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsa0JBQWtCLEVBQUE7O0FBSXRCO0VBQ0Usa0JBQWtCO0VBQ2xCLDRCQUE0QjtFQUM1Qiw4REFBNEU7RUFDNUUsc0JBQXNCO0VBQ3RCLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLDhEQUE0RTtFQUM1RSxzQkFBc0IsRUFBQTs7QUFHeEI7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFHZDtFQUNFLFFBQVE7RUFDUixRQUFRLEVBQUE7O0FBR1Y7RUFDRSxVQUFVO0VBQ1YsV0FBVyxFQUFBOztBQUdiO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsY0FBYztFQUNkLFNBQVMsRUFBQTs7QUFHWDtFQUNFLHdCQUF3QjtFQUN4QixlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsU0FBUyxFQUFBOztBQUdYO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixxREFBbUU7RUFDbkUsc0JBQXNCLEVBQUE7O0FBR3hCO0VBQ0UscUJBQXFCO0VBQ3JCLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLDRCQUE0QjtFQUM1QixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixlQUFlLEVBQUE7O0FBR2pCO0VBQ0U7SUFDRSw0QkFBNEI7SUFDNUIsZUFBZSxFQUFBLEVBQ2hCOztBQUdIO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsYUFBYSxFQUFBOztBQUdmO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFNBQVMsRUFBQTs7QUFHWDtFQUNFO0lBQ0UsU0FBUyxFQUFBLEVBQ1Y7O0FBR0g7RUFDRSxVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxzQkFBc0I7RUFDdEIsU0FBUztFQUNULFVBQVU7RUFDVixxREFBbUU7RUFDbkUsc0JBQXNCLEVBQUE7O0FBR3hCO0VBQ0UsWUFBWTtFQUNaLFlBQVksRUFBQTs7QUFHZDtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsU0FBUztFQUNULFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxhQUFRLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9iZXN0LXByYWN0aWNlL2Jlc3QtcHJhY3RpY2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbXBhbnlMb2dvIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTE1cHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5tZW51SWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDIwcHg7XG4gIHRvcDogMTBweDtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbn1cblxuLm1lbnVJY29uIC5idXR0b24ge1xuICAtLWNvbG9yOiAjNTQ4Yzk5O1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuaW9uLWljb24ge1xuICBmb250LXNpemU6IDUwcHg7XG59XG5cbi5hcnRpY2xlSGVhZGluZyB7XG4gIG1hcmdpbjogMCAwIDIwcHggMTVweDtcbn1cblxuLmFydGljbGVIZWFkaW5nIGgxIHtcbiAgcGFkZGluZzogMjBweCAwIDE1cHggMjBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMTU0LCAxNTYsIDE1OCwgMC43NSk7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6ICMyMDIyMzA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ucm93IHtcbiAgbWFyZ2luOiAwIDAgMCAxNXB4O1xufVxuXG4ucm93UGFkZGluZyB7XG4gIHBhZGRpbmc6IDAgMjBweDtcbn1cblxuLmJhY2sge1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2hlYWRpbmdCRy5qcGcpIG5vLXJlcGVhdCB0b3AgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmJhY2sgLmJ1dHRvbiB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmFwcENvbnRlbnQge1xuICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuXG4gIC9kZWVwLyBwIHtcbiAgICBjb2xvcjogIzU3NTk2NztcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgbWFyZ2luOiAwIDAgMjBweCAwO1xuICB9XG59XG5cbi5yb3dCbG9ja1F1b3RlIHtcbiAgbWFyZ2luOiAwIDAgMjBweCAwO1xuICBwYWRkaW5nOiAzMHB4IDY1cHggNDVweCA1MHB4O1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2Jsb2NrcXVvdGVPbmVCRy5wbmcpIG5vLXJlcGVhdCBib3R0b20gY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5yb3dCbG9ja1F1b3RlLmJsdWUge1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2Jsb2NrcXVvdGVUd29CRy5wbmcpIG5vLXJlcGVhdCBib3R0b20gY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4ucm93QmxvY2tRdW90ZSAuaWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMjBweDtcbn1cblxuLnJvd0Jsb2NrUXVvdGUgLnNwZWVjaExlZnQge1xuICBsZWZ0OiAzJTtcbiAgdG9wOiAxNSU7XG59XG5cbi5yb3dCbG9ja1F1b3RlIC5zcGVlY2hSaWdodCB7XG4gIHJpZ2h0OiAxMCU7XG4gIGJvdHRvbTogMjUlO1xufVxuXG4ucm93QmxvY2tRdW90ZSBwIHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBjb2xvcjogIzIwMjIzMDtcbiAgbWFyZ2luOiAwO1xufVxuXG4ucm93QXV0aG9yIHtcbiAgbWFyZ2luOiA2MHB4IDAgNDBweCAyMHB4O1xuICBwYWRkaW5nOiAwIDIwcHg7XG59XG5cbi5yb3dBdXRob3IgcCB7XG4gIG1hcmdpbjogMDtcbn1cblxuLmZvb3RlckxpbmtzIHVsIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2hlYWRpbmdCRy5qcGcpIG5vLXJlcGVhdCB0b3AgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4uZm9vdGVyTGlua3MgdWwgbGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMDtcbiAgd2lkdGg6IDY4JTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAyNHB4IDYwcHggMjRweCAxMHB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmZvb3RlckxpbmtzIHVsIGxpIHtcbiAgICBwYWRkaW5nOiAxNHB4IDYwcHggMTRweCAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxufVxuXG4uZm9vdGVyTGlua3MgdWwgbGkgLmJ1dHRvbiB7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW46IDAgYXV0bztcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uZm9vdGVyTGlua3MgdWwgbGkgLmJ1dHRvbiAuYnV0dG9uLWlubmVyIC5zYy1pb24tYmFjay1idXR0b24taW9zIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmZvb3RlckxpbmtzIHVsIGxpIC5pY29uIHtcbiAgd2lkdGg6IDE0cHg7XG4gIGhlaWdodDogMTVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMzBweDtcbiAgdG9wOiAyNXB4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5mb290ZXJMaW5rcyB1bCBsaSAuaWNvbiB7XG4gICAgdG9wOiAxNXB4O1xuICB9XG59XG5cbi5mb290ZXJMaW5rcyB1bCBsaTpmaXJzdC1vZi10eXBlIHtcbiAgd2lkdGg6IDMyJTtcbiAgYmFja2dyb3VuZDogIzlhOWM5ZTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgcGFkZGluZy1yaWdodDogMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYmFja2JhciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9oZWFkaW5nQkcuanBnKSBuby1yZXBlYXQgdG9wIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLmJhY2tiYXIgaW9uLWJhY2stYnV0dG9uIHtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5hcnRpY2xlQmFjayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMjBweDtcbiAgdG9wOiAxMHB4O1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuXG4uYXJ0aWNsZUJhY2sgLmJ1dHRvbiB7XG4gIC0tY29sb3I6ICNmZmY7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/best-practice/best-practice.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/best-practice/best-practice.page.ts ***!
  \***********************************************************/
/*! exports provided: BestPracticePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BestPracticePage", function() { return BestPracticePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_home_link_home_link_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/home-link/home-link.service */ "./src/app/services/home-link/home-link.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_content_service_content_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/content-service/content.service */ "./src/app/services/content-service/content.service.ts");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-device-detector */ "./node_modules/ngx-device-detector/fesm5/ngx-device-detector.js");
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





var BestPracticePage = /** @class */ (function () {
    function BestPracticePage(homeLinkService, route, router, deviceService, contentService) {
        var _this = this;
        this.homeLinkService = homeLinkService;
        this.route = route;
        this.router = router;
        this.deviceService = deviceService;
        this.contentService = contentService;
        this.article = {};
        this.deviceInfo = null;
        this.isIOS10 = false;
        this.route.params.subscribe(function (params) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                contentService.bestPractices.subscribe(function (results) {
                    _this.article = results.filter(function (article) {
                        return article.sys.id === params.articleId;
                    })[0] || {};
                    if (!_this.article || !_this.article.fields) {
                        return;
                    }
                    //console.log(results);
                    _this.article.content = _this.article.fields.comments;
                    _this.deviceInfo = _this.deviceService.getDeviceInfo();
                    if (_this.deviceInfo.os == 'iOS') {
                        if (_this.deviceInfo.os_version < 11) {
                            _this.isIOS10 = true;
                        }
                    }
                });
                return [2 /*return*/];
            });
        }); });
    }
    BestPracticePage.prototype.home = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.homeLinkService.home();
                return [2 /*return*/];
            });
        });
    };
    BestPracticePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-best-practice',
            template: __webpack_require__(/*! ./best-practice.page.html */ "./src/app/pages/best-practice/best-practice.page.html"),
            styles: [__webpack_require__(/*! ./best-practice.page.scss */ "./src/app/pages/best-practice/best-practice.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_home_link_home_link_service__WEBPACK_IMPORTED_MODULE_1__["HomeLinkService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ngx_device_detector__WEBPACK_IMPORTED_MODULE_4__["DeviceDetectorService"],
            _services_content_service_content_service__WEBPACK_IMPORTED_MODULE_3__["ContentService"]])
    ], BestPracticePage);
    return BestPracticePage;
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
//# sourceMappingURL=pages-best-practice-best-practice-module.js.map