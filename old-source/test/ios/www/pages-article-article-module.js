(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-article-article-module"],{

/***/ "./src/app/pages/article/article.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/article/article.module.ts ***!
  \*************************************************/
/*! exports provided: ArticlePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticlePageModule", function() { return ArticlePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _article_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./article.page */ "./src/app/pages/article/article.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _article_page__WEBPACK_IMPORTED_MODULE_5__["ArticlePage"],
    },
];
var ArticlePageModule = /** @class */ (function () {
    function ArticlePageModule() {
    }
    ArticlePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            ],
            declarations: [_article_page__WEBPACK_IMPORTED_MODULE_5__["ArticlePage"]],
        })
    ], ArticlePageModule);
    return ArticlePageModule;
}());



/***/ }),

/***/ "./src/app/pages/article/article.page.html":
/*!*************************************************!*\
  !*** ./src/app/pages/article/article.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"navBar\">\n<!--    <ion-toolbar>\n        <ion-buttons class=\"articleBack\">\n            <ion-back-button defaultHref=\"\">\n            </ion-back-button>\n        </ion-buttons>\n    </ion-toolbar>         -->\n    <ion-toolbar>\n        <ion-buttons class=\"menuIcon\" slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <div class=\"companyLogo\">\n            <ion-img (click)=\"home()\" src=\"/assets/gallifortLogo.svg\"></ion-img>\n        </div>\n    </ion-toolbar>   \n</ion-header>\n\n<ion-content class=\"appContent\">\n    \n    <div class=\"articleContent\">\n        <div class=\"hero\" *ngIf=\"article?.fields?.headerImage\">\n            <ion-img [src]=\"article?.fields?.headerImage?.fields?.file?.url\"></ion-img>\n        </div>\n        <div class=\"articleHeading\">\n            <h1>{{article?.fields?.title}}</h1>\n        </div>\n        <div class=\"row rowPadding\" [innerHTML]=\"article.content\"></div>\n    </div>\n</ion-content>\n\n<ion-footer [ngClass]=\"{ios: isIOS10}\">\n    <ion-toolbar class=\"footerBar\">\n        <div class=\"footer footerLinks\">\n            <ul>\n                <li>\n                    <ion-buttons>\n                        <ion-back-button defaultHref=\"\">\n                        </ion-back-button>\n                    </ion-buttons>\n                </li>\n                <li *ngIf=\"article.nextArticleLink\" class=\"next\" [routerLink]=\"article.nextArticleLink\"\n                    routeDirection=\"forward\">\n                    Next topic\n                    <div class=\"icon\">\n                        <ion-img src=\"/assets/arrowRightWhite.svg\"></ion-img>\n                    </div>\n                </li>\n                <li *ngIf=\"article.nextCategoryLink\" class=\"next\" [routerLink]=\"article.nextCategoryLink\"\n                    routeDirection=\"forward\">\n                    Next category\n                    <div class=\"icon\">\n                        <ion-img src=\"/assets/arrowRightWhite.svg\"></ion-img>\n                    </div>\n                </li>\n            </ul>\n        </div>\n    </ion-toolbar>\n</ion-footer>  \n"

/***/ }),

/***/ "./src/app/pages/article/article.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/article/article.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".companyLogo {\n  width: 100%;\n  max-width: 115px;\n  margin: 0 auto;\n  cursor: pointer; }\n\n.menuIcon {\n  position: absolute;\n  right: 20px;\n  top: 10px;\n  width: 30px;\n  height: 30px; }\n\n.menuIcon .button {\n  --color: #548c99; }\n\n.articleBack {\n  position: absolute;\n  left: 20px;\n  top: 10px;\n  width: 30px;\n  height: 30px; }\n\n.articleBack .button {\n  --color: #fff; }\n\n.articleBackBar .toolbar-background {\n  --background: none !important; }\n\n.articleBackBar {\n  background-color: #202230; }\n\nion-content {\n  --background: #fff; }\n\nion-icon {\n  font-size: 50px; }\n\n.articleHeading {\n  margin: 0 0 20px 15px; }\n\n.articleHeading h1 {\n  padding: 20px 0 15px 20px;\n  border-bottom: 1px solid rgba(154, 156, 158, 0.75);\n  margin: 0;\n  color: #202230;\n  font-size: 20px;\n  line-height: 22px;\n  font-weight: bold; }\n\n.row {\n  margin: 0 0 0 15px; }\n\n.rowPadding {\n  padding: 0 20px; }\n\n.back {\n  padding: 10px;\n  background: url('headingBG.jpg') no-repeat top center;\n  background-size: cover;\n  color: #fff; }\n\n.back .button {\n  color: #fff;\n  font-size: 16px;\n  line-height: 22px;\n  font-weight: bold; }\n\n.appContent {\n  -webkit-transform-style: preserve-3d;\n  -webkit-backface-visibility: hidden; }\n\n.appContent /deep/ p {\n    color: #575967;\n    font-size: 16px;\n    line-height: 22px;\n    margin: 0 0 20px 0; }\n\n.appContent /deep/ li {\n    color: #575967;\n    font-size: 16px;\n    line-height: 22px; }\n\n/deep/ h5 {\n  background: url(/assets/gradBG.jpg) no-repeat top center;\n  background-size: cover;\n  padding: 10px;\n  font-size: 22px;\n  color: white;\n  margin-bottom: 0px;\n  padding-left: 20px; }\n\n/deep/ ol {\n  padding: 25px 20px 60px 20px;\n  background: url(/assets/gradBG.jpg) no-repeat top center;\n  background-size: cover;\n  list-style: none;\n  counter-reset: my-awesome-counter;\n  margin-top: 0px; }\n\n/deep/ ol:after {\n  content: '';\n  display: block;\n  width: 100%;\n  height: 40px;\n  background: url(/assets/listBoxBottom.png) no-repeat bottom center;\n  background-size: cover; }\n\n/deep/ ol li {\n  counter-increment: my-awesome-counter;\n  padding-left: 22px;\n  position: relative;\n  color: #575967;\n  font-size: 20px;\n  line-height: 22px;\n  font-weight: bold;\n  margin: 0 0 0 0;\n  background-color: #fff;\n  padding-bottom: 10px;\n  padding-top: 10px; }\n\n/deep/ ol li::before {\n  content: counter(my-awesome-counter) \". \";\n  color: #548c99;\n  font-weight: bold; }\n\n.rowBlockQuote {\n  margin: 0 0 20px 0;\n  padding: 30px 65px 45px 50px;\n  background: url('blockquoteOneBG.png') no-repeat bottom center;\n  background-size: cover;\n  position: relative; }\n\n.rowBlockQuote.blue {\n  background: url('blockquoteTwoBG.png') no-repeat bottom center;\n  background-size: cover; }\n\n.rowBlockQuote .icon {\n  position: absolute;\n  width: 30px;\n  height: 20px; }\n\n.rowBlockQuote .speechLeft {\n  left: 3%;\n  top: 15%; }\n\n.rowBlockQuote .speechRight {\n  right: 10%;\n  bottom: 25%; }\n\n.rowBlockQuote p {\n  font-style: italic;\n  font-size: 18px;\n  line-height: 22px;\n  color: #202230;\n  margin: 0; }\n\n.rowAuthor {\n  margin: 60px 0 40px 20px;\n  padding: 0 20px; }\n\n.rowAuthor p {\n  margin: 0; }\n\n.footerLinks ul {\n  margin: 0;\n  padding: 0;\n  background: url('headingBG.jpg') no-repeat top center;\n  background-size: cover; }\n\n.footerLinks ul li {\n  display: inline-block;\n  margin: 0;\n  width: 68%;\n  position: relative;\n  padding: 24px 60px 24px 10px;\n  line-height: 20px;\n  font-size: 20px;\n  font-weight: bold;\n  color: #fff;\n  text-align: right;\n  vertical-align: middle;\n  cursor: pointer; }\n\n@media only screen and (max-width: 767px) {\n  .footerLinks ul li {\n    padding: 14px 60px 14px 10px;\n    font-size: 16px; } }\n\n.footerLinks ul li .button {\n  color: #fff;\n  margin: 0 auto;\n  font-size: 16px; }\n\n.footerLinks ul li .button .button-inner .sc-ion-back-button-ios {\n  display: none; }\n\n.footerLinks ul li .icon {\n  width: 14px;\n  height: 15px;\n  position: absolute;\n  right: 30px;\n  top: 25px; }\n\n@media only screen and (max-width: 767px) {\n  .footerLinks ul li .icon {\n    top: 15px; } }\n\n.footerLinks ul li:first-of-type {\n  width: 32%;\n  background: #9a9c9e;\n  font-size: 16px;\n  line-height: 24px;\n  font-weight: normal;\n  padding-right: 0;\n  text-align: center; }\n\n.backbar {\n  background-color: grey;\n  margin: 0;\n  padding: 0;\n  background: url('headingBG.jpg') no-repeat top center;\n  background-size: cover; }\n\n.backbar2 {\n  background-color: grey;\n  margin: 0;\n  padding: 0;\n  background: url('headingBestBG.png') no-repeat top center;\n  background-size: cover; }\n\n.backbar ion-back-button, .backbar2 ion-back-button {\n  color: white;\n  padding: 5px; }\n\n.redtitle {\n  background: #B70E0C;\n  min-height: 80px;\n  margin: 0px; }\n\n.redtitle ion-img {\n    float: left;\n    width: 80px;\n    padding: 5px; }\n\n.redtitle h2 {\n    color: #fff;\n    margin-top: 25px;\n    float: left; }\n\n.footerBarMarg {\n  margin-bottom: 100px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYXVsLmNhcm5lbGwvZ2FsbGlmb3JkdHJ5LWFwcC9zcmMvYXBwL3BhZ2VzL2FydGljbGUvYXJ0aWNsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxlQUFlLEVBQUE7O0FBR2pCO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxTQUFTO0VBQ1QsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFHZDtFQUNFLGdCQUFRLEVBQUE7O0FBR1Y7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFNBQVM7RUFDVCxXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUdkO0VBQ0UsYUFBUSxFQUFBOztBQUdWO0VBQ0UsNkJBQWEsRUFBQTs7QUFHZjtFQUNJLHlCQUF5QixFQUFBOztBQUc3QjtFQUNFLGtCQUFhLEVBQUE7O0FBR2Y7RUFDRSxlQUFlLEVBQUE7O0FBR2pCO0VBQ0UscUJBQXFCLEVBQUE7O0FBR3ZCO0VBQ0UseUJBQXlCO0VBQ3pCLGtEQUFrRDtFQUNsRCxTQUFTO0VBQ1QsY0FBYztFQUNkLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0Usa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsZUFBZSxFQUFBOztBQUdqQjtFQUNFLGFBQWE7RUFDYixxREFBbUU7RUFDbkUsc0JBQXNCO0VBQ3RCLFdBQVcsRUFBQTs7QUFHYjtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLG9DQUFvQztFQUNwQyxtQ0FBbUMsRUFBQTs7QUFGckM7SUFLSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixrQkFBa0IsRUFBQTs7QUFSdEI7SUFZSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGlCQUFpQixFQUFBOztBQUlqQjtFQUVFLHdEQUF3RDtFQUN4RCxzQkFBc0I7RUFDeEIsYUFBYTtFQUNiLGVBQWU7RUFDZixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQixFQUFBOztBQUdsQjtFQUNFLDRCQUE0QjtFQUM1Qix3REFBd0Q7RUFDeEQsc0JBQXNCO0VBQzNCLGdCQUFnQjtFQUNoQixpQ0FBaUM7RUFDakMsZUFBZSxFQUFBOztBQUdaO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtFQUFrRTtFQUNsRSxzQkFBc0IsRUFBQTs7QUFHNUI7RUFDRSxxQ0FBcUM7RUFDckMsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UseUNBQXlDO0VBQ3pDLGNBQWM7RUFDZCxpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxrQkFBa0I7RUFDbEIsNEJBQTRCO0VBQzVCLDhEQUE0RTtFQUM1RSxzQkFBc0I7RUFDdEIsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsOERBQTRFO0VBQzVFLHNCQUFzQixFQUFBOztBQUd4QjtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUdkO0VBQ0UsUUFBUTtFQUNSLFFBQVEsRUFBQTs7QUFHVjtFQUNFLFVBQVU7RUFDVixXQUFXLEVBQUE7O0FBR2I7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsU0FBUyxFQUFBOztBQUdYO0VBQ0Usd0JBQXdCO0VBQ3hCLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxTQUFTLEVBQUE7O0FBR1g7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHFEQUFtRTtFQUNuRSxzQkFBc0IsRUFBQTs7QUFHeEI7RUFDRSxxQkFBcUI7RUFDckIsU0FBUztFQUNULFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsNEJBQTRCO0VBQzVCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLGVBQWUsRUFBQTs7QUFHakI7RUFDRTtJQUNFLDRCQUE0QjtJQUM1QixlQUFlLEVBQUEsRUFDaEI7O0FBR0g7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxhQUFhLEVBQUE7O0FBR2Y7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsU0FBUyxFQUFBOztBQUdYO0VBQ0U7SUFDRSxTQUFTLEVBQUEsRUFDVjs7QUFHSDtFQUNFLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsVUFBVTtFQUNWLHFEQUFtRTtFQUNuRSxzQkFBc0IsRUFBQTs7QUFHeEI7RUFDRSxzQkFBc0I7RUFDdEIsU0FBUztFQUNULFVBQVU7RUFDVix5REFBdUU7RUFDdkUsc0JBQXNCLEVBQUE7O0FBR3hCO0VBQ0UsWUFBWTtFQUNaLFlBQVksRUFBQTs7QUFHZDtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFFaEIsV0FBVyxFQUFBOztBQUpiO0lBT0ksV0FBVztJQUNYLFdBQVc7SUFDWCxZQUFZLEVBQUE7O0FBVGhCO0lBYUksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixXQUFXLEVBQUE7O0FBS2Y7RUFDRSxvQkFBb0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FydGljbGUvYXJ0aWNsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29tcGFueUxvZ28ge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMTVweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm1lbnVJY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMjBweDtcbiAgdG9wOiAxMHB4O1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuXG4ubWVudUljb24gLmJ1dHRvbiB7XG4gIC0tY29sb3I6ICM1NDhjOTk7XG59XG5cbi5hcnRpY2xlQmFjayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMjBweDtcbiAgdG9wOiAxMHB4O1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuXG4uYXJ0aWNsZUJhY2sgLmJ1dHRvbiB7XG4gIC0tY29sb3I6ICNmZmY7XG59XG5cbi5hcnRpY2xlQmFja0JhciAudG9vbGJhci1iYWNrZ3JvdW5kIHtcbiAgLS1iYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5hcnRpY2xlQmFja0JhciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjIzMDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6ICNmZmY7XG59XG5cbmlvbi1pY29uIHtcbiAgZm9udC1zaXplOiA1MHB4O1xufVxuXG4uYXJ0aWNsZUhlYWRpbmcge1xuICBtYXJnaW46IDAgMCAyMHB4IDE1cHg7XG59XG5cbi5hcnRpY2xlSGVhZGluZyBoMSB7XG4gIHBhZGRpbmc6IDIwcHggMCAxNXB4IDIwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDE1NCwgMTU2LCAxNTgsIDAuNzUpO1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiAjMjAyMjMwO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnJvdyB7XG4gIG1hcmdpbjogMCAwIDAgMTVweDtcbn1cblxuLnJvd1BhZGRpbmcge1xuICBwYWRkaW5nOiAwIDIwcHg7XG59XG5cbi5iYWNrIHtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9oZWFkaW5nQkcuanBnKSBuby1yZXBlYXQgdG9wIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5iYWNrIC5idXR0b24ge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5hcHBDb250ZW50IHtcbiAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcblxuICAvZGVlcC8gcCB7XG4gICAgY29sb3I6ICM1NzU5Njc7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgIG1hcmdpbjogMCAwIDIwcHggMDtcbiAgfVxuXG4gIC9kZWVwLyBsaSB7XG4gICAgY29sb3I6ICM1NzU5Njc7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICB9XG59XG5cbiAgICAvZGVlcC8gaDUge1xuICAgICAgXG4gICAgICBiYWNrZ3JvdW5kOiB1cmwoL2Fzc2V0cy9ncmFkQkcuanBnKSBuby1yZXBlYXQgdG9wIGNlbnRlcjtcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7ICAgIFxuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7ICAgXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIH1cblxuICAgIC9kZWVwLyBvbCB7XG4gICAgICBwYWRkaW5nOiAyNXB4IDIwcHggNjBweCAyMHB4O1xuICAgICAgYmFja2dyb3VuZDogdXJsKC9hc3NldHMvZ3JhZEJHLmpwZykgbm8tcmVwZWF0IHRvcCBjZW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAgICBcblx0bGlzdC1zdHlsZTogbm9uZTtcblx0Y291bnRlci1yZXNldDogbXktYXdlc29tZS1jb3VudGVyOyAgICBcblx0bWFyZ2luLXRvcDogMHB4O1xuICAgIH1cbiAgICBcbiAgICAvZGVlcC8gb2w6YWZ0ZXIge1xuICAgICAgY29udGVudDogJyc7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgYmFja2dyb3VuZDogdXJsKC9hc3NldHMvbGlzdEJveEJvdHRvbS5wbmcpIG5vLXJlcGVhdCBib3R0b20gY2VudGVyO1xuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICB9ICAgIFxuICAgIFxuL2RlZXAvICBvbCBsaSB7XG4gIGNvdW50ZXItaW5jcmVtZW50OiBteS1hd2Vzb21lLWNvdW50ZXI7XG4gIHBhZGRpbmctbGVmdDogMjJweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjb2xvcjogIzU3NTk2NztcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbjogMCAwIDAgMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4OyAgXG59XG5cbi9kZWVwLyAgb2wgbGk6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IGNvdW50ZXIobXktYXdlc29tZS1jb3VudGVyKSBcIi4gXCI7XG4gIGNvbG9yOiAjNTQ4Yzk5O1xuICBmb250LXdlaWdodDogYm9sZDtcbn0gICAgXG5cbi5yb3dCbG9ja1F1b3RlIHtcbiAgbWFyZ2luOiAwIDAgMjBweCAwO1xuICBwYWRkaW5nOiAzMHB4IDY1cHggNDVweCA1MHB4O1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2Jsb2NrcXVvdGVPbmVCRy5wbmcpIG5vLXJlcGVhdCBib3R0b20gY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5yb3dCbG9ja1F1b3RlLmJsdWUge1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2Jsb2NrcXVvdGVUd29CRy5wbmcpIG5vLXJlcGVhdCBib3R0b20gY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4ucm93QmxvY2tRdW90ZSAuaWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMjBweDtcbn1cblxuLnJvd0Jsb2NrUXVvdGUgLnNwZWVjaExlZnQge1xuICBsZWZ0OiAzJTtcbiAgdG9wOiAxNSU7XG59XG5cbi5yb3dCbG9ja1F1b3RlIC5zcGVlY2hSaWdodCB7XG4gIHJpZ2h0OiAxMCU7XG4gIGJvdHRvbTogMjUlO1xufVxuXG4ucm93QmxvY2tRdW90ZSBwIHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBjb2xvcjogIzIwMjIzMDtcbiAgbWFyZ2luOiAwO1xufVxuXG4ucm93QXV0aG9yIHtcbiAgbWFyZ2luOiA2MHB4IDAgNDBweCAyMHB4O1xuICBwYWRkaW5nOiAwIDIwcHg7XG59XG5cbi5yb3dBdXRob3IgcCB7XG4gIG1hcmdpbjogMDtcbn1cblxuLmZvb3RlckxpbmtzIHVsIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2hlYWRpbmdCRy5qcGcpIG5vLXJlcGVhdCB0b3AgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4uZm9vdGVyTGlua3MgdWwgbGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMDtcbiAgd2lkdGg6IDY4JTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAyNHB4IDYwcHggMjRweCAxMHB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmZvb3RlckxpbmtzIHVsIGxpIHtcbiAgICBwYWRkaW5nOiAxNHB4IDYwcHggMTRweCAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxufVxuXG4uZm9vdGVyTGlua3MgdWwgbGkgLmJ1dHRvbiB7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW46IDAgYXV0bztcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uZm9vdGVyTGlua3MgdWwgbGkgLmJ1dHRvbiAuYnV0dG9uLWlubmVyIC5zYy1pb24tYmFjay1idXR0b24taW9zIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmZvb3RlckxpbmtzIHVsIGxpIC5pY29uIHtcbiAgd2lkdGg6IDE0cHg7XG4gIGhlaWdodDogMTVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMzBweDtcbiAgdG9wOiAyNXB4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5mb290ZXJMaW5rcyB1bCBsaSAuaWNvbiB7XG4gICAgdG9wOiAxNXB4O1xuICB9XG59XG5cbi5mb290ZXJMaW5rcyB1bCBsaTpmaXJzdC1vZi10eXBlIHtcbiAgd2lkdGg6IDMyJTtcbiAgYmFja2dyb3VuZDogIzlhOWM5ZTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgcGFkZGluZy1yaWdodDogMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYmFja2JhciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9oZWFkaW5nQkcuanBnKSBuby1yZXBlYXQgdG9wIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLmJhY2tiYXIyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2hlYWRpbmdCZXN0QkcucG5nKSBuby1yZXBlYXQgdG9wIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLmJhY2tiYXIgaW9uLWJhY2stYnV0dG9uLCAuYmFja2JhcjIgaW9uLWJhY2stYnV0dG9uIHtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5yZWR0aXRsZSB7XG4gIGJhY2tncm91bmQ6ICNCNzBFMEM7XG4gIG1pbi1oZWlnaHQ6IDgwcHg7XG5cbiAgbWFyZ2luOiAwcHg7XG5cbiAgaW9uLWltZyB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgcGFkZGluZzogNXB4O1xuICB9XG5cbiAgaDIge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gIH1cbn1cblxuXG4uZm9vdGVyQmFyTWFyZyB7XG4gIG1hcmdpbi1ib3R0b206IDEwMHB4O1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/article/article.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/article/article.page.ts ***!
  \***********************************************/
/*! exports provided: ArticlePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticlePage", function() { return ArticlePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_home_link_home_link_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/home-link/home-link.service */ "./src/app/services/home-link/home-link.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_content_service_content_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/content-service/content.service */ "./src/app/services/content-service/content.service.ts");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! marked */ "./node_modules/marked/lib/marked.js");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(marked__WEBPACK_IMPORTED_MODULE_4__);
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






//import { GoogleAnalytics } from '@ionic-native/google-analytics/ngx';
var ArticlePage = /** @class */ (function () {
    function ArticlePage(
    //  private ga: GoogleAnalytics,
    homeLinkService, route, router, deviceService, contentService) {
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
                contentService.articles.subscribe(function (results) {
                    _this.article = results.filter(function (article) {
                        return article.sys.id === params.articleId;
                    })[0] || {};
                    if (!_this.article.fields) {
                        return;
                    }
                    var md = marked__WEBPACK_IMPORTED_MODULE_4___default.a.setOptions({
                        renderer: new marked__WEBPACK_IMPORTED_MODULE_4___default.a.Renderer(),
                        sanitize: true,
                        smartLists: true,
                        smartypants: true,
                    });
                    _this.article.content = md.parse(_this.article.fields.articleMarkup);
                    //    this.article.content = documentToHtmlString(this.article.content);
                    //this.ga.trackView(this.article.content.title);
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
    ArticlePage.prototype.home = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.homeLinkService.home();
                return [2 /*return*/];
            });
        });
    };
    ArticlePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-article',
            template: __webpack_require__(/*! ./article.page.html */ "./src/app/pages/article/article.page.html"),
            styles: [__webpack_require__(/*! ./article.page.scss */ "./src/app/pages/article/article.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_home_link_home_link_service__WEBPACK_IMPORTED_MODULE_1__["HomeLinkService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ngx_device_detector__WEBPACK_IMPORTED_MODULE_5__["DeviceDetectorService"],
            _services_content_service_content_service__WEBPACK_IMPORTED_MODULE_3__["ContentService"]])
    ], ArticlePage);
    return ArticlePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-article-article-module.js.map