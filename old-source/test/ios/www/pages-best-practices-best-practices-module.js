(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-best-practices-best-practices-module"],{

/***/ "./src/app/pages/best-practices/best-practices.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/best-practices/best-practices.module.ts ***!
  \***************************************************************/
/*! exports provided: BestPracticesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BestPracticesPageModule", function() { return BestPracticesPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _best_practices_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./best-practices.page */ "./src/app/pages/best-practices/best-practices.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _best_practices_page__WEBPACK_IMPORTED_MODULE_5__["BestPracticesPage"],
    },
];
var BestPracticesPageModule = /** @class */ (function () {
    function BestPracticesPageModule() {
    }
    BestPracticesPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            ],
            declarations: [_best_practices_page__WEBPACK_IMPORTED_MODULE_5__["BestPracticesPage"]],
        })
    ], BestPracticesPageModule);
    return BestPracticesPageModule;
}());



/***/ }),

/***/ "./src/app/pages/best-practices/best-practices.page.html":
/*!***************************************************************!*\
  !*** ./src/app/pages/best-practices/best-practices.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"navBar\">\n    <ion-toolbar>\n        <ion-buttons class=\"menuIcon\" slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <div class=\"companyLogo\">\n            <ion-img (click)=\"home()\" src=\"/assets/gallifortLogo.svg\"></ion-img>\n        </div>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"appContent\">\n    <div class=\"heading\">\n        <h1>Sharing Best Practice</h1>\n    </div>\n    <div class=\"filter\">\n        <ion-item class=\"filter-sortBy\" lines=\"none\">\n            <ion-label style=\"display: none;\">Sort By</ion-label>\n            <ion-select [(ngModel)]=\"sortOrder\" (ionChange)=\"sortArticles()\" placeholder=\"Sort By\"\n                        [disabled]=\"filtersOpened\">\n                <ion-select-option value=\"title\">Title</ion-select-option>\n                <ion-select-option value=\"date-asc\">Date Ascending</ion-select-option>\n                <ion-select-option value=\"date-desc\">Date Descending</ion-select-option>\n            </ion-select>\n        </ion-item>\n        <button class=\"filter-button\" [ngClass]=\"{ 'opened': filtersOpened }\" (click)=\"switchFilters()\">\n            Filter\n            <ion-img src=\"/assets/options.png\"></ion-img>\n        </button>\n    </div>\n\n    <div class=\"filters-content\" *ngIf=\"filtersOpened\">\n        <h3>Filter by:</h3>\n\n        <ion-item>\n            <ion-label position=\"floating\">Business Unit</ion-label>\n            <ion-select multiple [(ngModel)]=\"filters.buTypes\" placeholder=\"Select a business unit\">\n                <ion-select-option *ngFor=\"let buType of buTypes\"\n                                   [value]=\"buType.sys.id\">{{buType.fields.title}}</ion-select-option>\n            </ion-select>\n        </ion-item>\n        <ion-item>\n            <ion-label position=\"floating\">Tools</ion-label>\n            <ion-select multiple [(ngModel)]=\"filters.toolsTypes\" placeholder=\"Select a tool\">\n                <ion-select-option *ngFor=\"let toolsType of toolsTypes\"\n                                   [value]=\"toolsType.sys.id\">{{toolsType.fields.title}}</ion-select-option>\n            </ion-select>\n        </ion-item>\n        <ion-item class=\"last\">\n            <ion-label position=\"floating\">Detail</ion-label>\n            <ion-select multiple [(ngModel)]=\"filters.detailsTypes\" placeholder=\"Select a detail type\">\n                <ion-select-option *ngFor=\"let detailsType of detailsTypes\"\n                                   [value]=\"detailsType.sys.id\">{{detailsType.fields.title}}</ion-select-option>\n            </ion-select>\n        </ion-item>\n        <div>\n            <ion-button expand=\"full\" fill='clear' class=\"filters-reset-button\" (click)=\"resetFilters()\">\n                <span class=\"text\">Reset</span>\n            </ion-button>\n\n            <ion-button expand=\"full\" fill='clear' class=\"filters-cancel-button\" (click)=\"switchFilters()\">\n                <span class=\"text\">Cancel</span>\n            </ion-button>\n\n            <ion-button expand=\"full\" fill='clear' class=\"filters-apply-button\" (click)=\"setFilters()\">\n                <span class=\"text\">Filter</span>\n                <ion-img class=\"img\" src=\"/assets/arrow-right.png\"></ion-img>\n            </ion-button>\n        </div>\n    </div>\n\n    <div class=\"linkListing\" *ngIf=\"!filtersOpened\">\n        <ion-grid class=\"grid\" size=\"2\">\n            <ion-row class=\"row\" justify-content-around align-items-start>\n\n                <ion-col class=\"column\" size=\"6\" *ngFor=\"let practice of bestPractices\">\n                    <ion-img [src]=\"practice.fields?.photo?.fields?.file?.url\"\n                             (click)=\"open(practice)\"></ion-img>\n                    <p>{{practice.fields.title}}</p>\n                    <!--<div *ngIf=\"hideMe\" class=\"{{practice.fields.id}}\"> {{practice.fields}}here your content</div>-->\n                </ion-col>\n\n            </ion-row>\n        </ion-grid>\n    </div>\n</ion-content>\n\n<ion-footer [ngClass]=\"{ios: isIOS10}\">\n    <ion-toolbar routerLink=\"/upload-best-practice\" class=\"uploadBar\">\n        <ion-text color=\"light\">\n            <h3 class=\"white\">\n                Upload your best practice\n                <ion-img src=\"/assets/camera.png\"></ion-img>\n            </h3>\n        </ion-text>\n    </ion-toolbar>\n</ion-footer>\n\n"

/***/ }),

/***/ "./src/app/pages/best-practices/best-practices.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/best-practices/best-practices.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".companyLogo {\n  width: 100%;\n  max-width: 115px;\n  margin: 0 auto;\n  cursor: pointer; }\n\n.menuIcon {\n  position: absolute;\n  right: 20px;\n  top: 10px;\n  width: 30px;\n  height: 30px; }\n\n.menuIcon .button {\n  --color: #548c99; }\n\nion-content {\n  --background: #fff; }\n\nion-icon {\n  font-size: 50px; }\n\n.articleHeading {\n  margin: 0 0 20px 15px; }\n\n.articleHeading h1 {\n  padding: 20px 0 15px 20px;\n  border-bottom: 1px solid rgba(154, 156, 158, 0.75);\n  margin: 0;\n  color: #202230;\n  font-size: 20px;\n  line-height: 22px;\n  font-weight: bold; }\n\n.back {\n  padding: 10px;\n  background: url('headingBG.jpg') no-repeat top center;\n  background-size: cover;\n  color: #fff; }\n\n.back .button {\n  color: #fff;\n  font-size: 16px;\n  line-height: 22px;\n  font-weight: bold; }\n\n.appContent {\n  -webkit-transform-style: preserve-3d;\n  -webkit-backface-visibility: hidden; }\n\n.appContent p {\n  color: #575967;\n  font-size: 16px;\n  line-height: 22px;\n  margin: 0 0 20px 0; }\n\n.rowBlockQuote {\n  margin: 0 0 20px 0;\n  padding: 30px 65px 45px 50px;\n  background: url('blockquoteOneBG.png') no-repeat bottom center;\n  background-size: cover;\n  position: relative; }\n\n.rowBlockQuote.blue {\n  background: url('blockquoteTwoBG.png') no-repeat bottom center;\n  background-size: cover; }\n\n.rowBlockQuote .icon {\n  position: absolute;\n  width: 30px;\n  height: 20px; }\n\n.rowBlockQuote .speechLeft {\n  left: 3%;\n  top: 15%; }\n\n.rowBlockQuote .speechRight {\n  right: 10%;\n  bottom: 25%; }\n\n.rowBlockQuote p {\n  font-style: italic;\n  font-size: 18px;\n  line-height: 22px;\n  color: #202230;\n  margin: 0; }\n\n.rowAuthor {\n  margin: 60px 0 40px 20px;\n  padding: 0 20px; }\n\n.rowAuthor p {\n  margin: 0; }\n\n.listing {\n  padding: 25px 20px 60px 20px;\n  background: url('gradBG.jpg') no-repeat top center;\n  background-size: cover; }\n\n.listing .listingContent {\n  background: #fff;\n  padding: 25px 15px;\n  position: relative; }\n\n.listing .listingContent:after {\n  content: '';\n  display: block;\n  width: 100%;\n  height: 40px;\n  position: absolute;\n  left: 0;\n  bottom: -39px;\n  background: url('listBoxBottom.png') no-repeat bottom center;\n  background-size: cover; }\n\n.listing .listingContent h2 {\n  color: #202230;\n  font-size: 20px;\n  line-height: 22px;\n  font-weight: bold;\n  margin: 0 0 20px 0; }\n\n.listing .listingContent ol {\n  list-style: none;\n  counter-reset: my-awesome-counter;\n  margin: 0;\n  padding: 0; }\n\n.listing .listingContent ol li {\n  counter-increment: my-awesome-counter;\n  padding-left: 22px;\n  position: relative;\n  color: #575967;\n  font-size: 20px;\n  line-height: 22px;\n  font-weight: bold;\n  margin: 0 0 10px 0; }\n\n.listing .listingContent ol li::before {\n  content: counter(my-awesome-counter) \". \";\n  color: #548c99;\n  font-weight: bold;\n  position: absolute;\n  left: 0;\n  top: 0; }\n\n.heading {\n  background: url('headingBestBG.png') no-repeat top center;\n  background-size: cover;\n  text-align: center;\n  height: 70px;\n  padding: 25px 26px 30px 35px;\n  --padding-bottom: 0; }\n\n.uploadBar {\n  --padding-top: 0;\n  --padding-bottom: 0;\n  --padding-start: 0;\n  --padding-end: 0;\n  --background: #000000;\n  cursor: pointer; }\n\n.uploadBar h3 {\n    padding: 10px;\n    display: flex;\n    justify-content: space-around;\n    align-items: center; }\n\n.uploadBar h3 ion-img {\n      padding: 0 0 5px 10px;\n      height: 30px; }\n\n.white {\n  color: #ffffff; }\n\n.filter {\n  height: 50px;\n  background: #575967;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  padding: 0 15px; }\n\n.filter-button, .filter-sortBy {\n    width: 43%; }\n\n.filter-sortBy {\n    --background: #ffffff;\n    --border: 1px solid #575967;\n    --min-height: auto;\n    display: flex;\n    font: bold 17px/17px Arial; }\n\n.filter-sortBy ion-select {\n      --padding-top: 5px;\n      --padding-bottom: 5px;\n      --padding-start: 0;\n      min-width: 100%;\n      display: flex; }\n\n.filter-button {\n    color: #575967;\n    text-transform: initial;\n    background: #ffffff !important;\n    border: 1px solid #575967 !important;\n    font: bold 17px/17px Arial;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 6px 12px;\n    position: relative; }\n\n.filter-button.opened {\n      padding: 6px 12px 16px;\n      border-bottom: 0 !important;\n      top: 5px; }\n\n.filter-button ion-img {\n      padding: 0 0 0 45px;\n      height: 16px; }\n\n.filters-content {\n  padding: 20px 30px;\n  color: #575967; }\n\n.filters-content h3 {\n    margin: 0;\n    border-bottom: 1px solid #B3B4B6;\n    font: bold 21px/22px Arial;\n    padding: 0 0 20px; }\n\n.filters-content ion-item {\n    padding-top: 5px;\n    --padding-start: 0;\n    --padding-end: 0;\n    --ion-safe-area-right: 0;\n    --border-style: none none solid none;\n    --border-width: 1px;\n    --border-color: #B3B4B6; }\n\n.filters-content ion-item.last {\n      --border-style: none; }\n\n.filters-content ion-item.last ion-select {\n        margin: 10px 0 0; }\n\n.filters-content ion-item ion-label {\n      font: bold 19px/20px Arial; }\n\n.filters-content ion-item ion-select {\n      font: 17px/20px Arial;\n      border: 1px solid #575967;\n      margin: 10px 0 20px;\n      padding: 8px 12px; }\n\n.filters-content .filters-cancel-button, .filters-content .filters-reset-button {\n    margin: 40px 0;\n    background: url('headingBestBG.png') no-repeat top center;\n    background-size: cover;\n    color: white !important;\n    font: bold 18px/20px Arial;\n    height: 50px;\n    text-align: left;\n    --padding-start: 15px;\n    --padding-end: 15px;\n    float: left;\n    width: 33.33%; }\n\n.filters-content .filters-cancel-button .text, .filters-content .filters-reset-button .text {\n      display: inline-block;\n      width: 100%;\n      text-align: left;\n      text-transform: none; }\n\n.filters-content .filters-apply-button {\n    margin: 40px 0;\n    background: url('headingBestBG.png') no-repeat top center;\n    background-size: cover;\n    color: white !important;\n    font: bold 18px/20px Arial;\n    height: 50px;\n    text-align: left;\n    --padding-start: 15px;\n    --padding-end: 15px;\n    float: right;\n    width: 33.33%; }\n\n.filters-content .filters-apply-button .text {\n      display: inline-block;\n      width: 100%;\n      text-align: left;\n      text-transform: none; }\n\n.linkListing {\n  padding: 15px 10px; }\n\n.linkListing p {\n    font: 15px/18px Arial;\n    color: #575967; }\n\n.linkListing .column {\n    padding: 0 10px; }\n\nion-item.item-has-focus {\n  --highlight-background: transparent !important;\n  --full-highlight-height: 0 !important;\n  --inset-highlight-height: 0 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYXVsLmNhcm5lbGwvZ2FsbGlmb3JkdHJ5LWFwcC9zcmMvYXBwL3BhZ2VzL2Jlc3QtcHJhY3RpY2VzL2Jlc3QtcHJhY3RpY2VzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFNBQVM7RUFDVCxXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUdkO0VBQ0UsZ0JBQVEsRUFBQTs7QUFHVjtFQUNFLGtCQUFhLEVBQUE7O0FBR2Y7RUFDRSxlQUFlLEVBQUE7O0FBR2pCO0VBQ0UscUJBQXFCLEVBQUE7O0FBR3ZCO0VBQ0UseUJBQXlCO0VBQ3pCLGtEQUFrRDtFQUNsRCxTQUFTO0VBQ1QsY0FBYztFQUNkLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsaUJBQWlCLEVBQUE7O0FBT25CO0VBQ0UsYUFBYTtFQUNiLHFEQUFtRTtFQUNuRSxzQkFBc0I7RUFDdEIsV0FBVyxFQUFBOztBQUdiO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0Usb0NBQW9DO0VBQ3BDLG1DQUFtQyxFQUFBOztBQUdyQztFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGtCQUFrQjtFQUNsQiw0QkFBNEI7RUFDNUIsOERBQTRFO0VBQzVFLHNCQUFzQjtFQUN0QixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSw4REFBNEU7RUFDNUUsc0JBQXNCLEVBQUE7O0FBR3hCO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxRQUFRO0VBQ1IsUUFBUSxFQUFBOztBQUdWO0VBQ0UsVUFBVTtFQUNWLFdBQVcsRUFBQTs7QUFHYjtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VB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QWM7SUFDZCxXQUFXO0lBQ1gsYUFBYSxFQUFBOztBQW5EakI7TUFzRE0scUJBQXFCO01BQ3JCLFdBQVc7TUFDWCxnQkFBZ0I7TUFDaEIsb0JBQW9CLEVBQUE7O0FBekQxQjtJQThESSxjQUFjO0lBQ2QseURBQXVFO0lBQ3ZFLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsMEJBQTBCO0lBQzFCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIscUJBQWdCO0lBQ2hCLG1CQUFjO0lBQ2QsWUFBWTtJQUNaLGFBQWEsRUFBQTs7QUF4RWpCO01BMkVNLHFCQUFxQjtNQUNyQixXQUFXO01BQ1gsZ0JBQWdCO01BQ2hCLG9CQUFvQixFQUFBOztBQUsxQjtFQUNFLGtCQUFrQixFQUFBOztBQURwQjtJQUlJLHFCQUFxQjtJQUNyQixjQUFjLEVBQUE7O0FBTGxCO0lBU0ksZUFBZSxFQUFBOztBQUluQjtFQUNFLDhDQUF1QjtFQUN2QixxQ0FBd0I7RUFDeEIsc0NBQXlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9iZXN0LXByYWN0aWNlcy9iZXN0LXByYWN0aWNlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29tcGFueUxvZ28ge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMTVweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm1lbnVJY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMjBweDtcbiAgdG9wOiAxMHB4O1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuXG4ubWVudUljb24gLmJ1dHRvbiB7XG4gIC0tY29sb3I6ICM1NDhjOTk7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG5pb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogNTBweDtcbn1cblxuLmFydGljbGVIZWFkaW5nIHtcbiAgbWFyZ2luOiAwIDAgMjBweCAxNXB4O1xufVxuXG4uYXJ0aWNsZUhlYWRpbmcgaDEge1xuICBwYWRkaW5nOiAyMHB4IDAgMTVweCAyMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgxNTQsIDE1NiwgMTU4LCAwLjc1KTtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogIzIwMjIzMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5yb3cge1xuICAvL21hcmdpbjogMCAwIDAgMTVweDtcbn1cblxuLmJhY2sge1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2hlYWRpbmdCRy5qcGcpIG5vLXJlcGVhdCB0b3AgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmJhY2sgLmJ1dHRvbiB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmFwcENvbnRlbnQge1xuICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4uYXBwQ29udGVudCBwIHtcbiAgY29sb3I6ICM1NzU5Njc7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIG1hcmdpbjogMCAwIDIwcHggMDtcbn1cblxuLnJvd0Jsb2NrUXVvdGUge1xuICBtYXJnaW46IDAgMCAyMHB4IDA7XG4gIHBhZGRpbmc6IDMwcHggNjVweCA0NXB4IDUwcHg7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvYmxvY2txdW90ZU9uZUJHLnBuZykgbm8tcmVwZWF0IGJvdHRvbSBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnJvd0Jsb2NrUXVvdGUuYmx1ZSB7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvYmxvY2txdW90ZVR3b0JHLnBuZykgbm8tcmVwZWF0IGJvdHRvbSBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5yb3dCbG9ja1F1b3RlIC5pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuXG4ucm93QmxvY2tRdW90ZSAuc3BlZWNoTGVmdCB7XG4gIGxlZnQ6IDMlO1xuICB0b3A6IDE1JTtcbn1cblxuLnJvd0Jsb2NrUXVvdGUgLnNwZWVjaFJpZ2h0IHtcbiAgcmlnaHQ6IDEwJTtcbiAgYm90dG9tOiAyNSU7XG59XG5cbi5yb3dCbG9ja1F1b3RlIHAge1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIGNvbG9yOiAjMjAyMjMwO1xuICBtYXJnaW46IDA7XG59XG5cbi5yb3dBdXRob3Ige1xuICBtYXJnaW46IDYwcHggMCA0MHB4IDIwcHg7XG4gIHBhZGRpbmc6IDAgMjBweDtcbn1cblxuLnJvd0F1dGhvciBwIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4ubGlzdGluZyB7XG4gIHBhZGRpbmc6IDI1cHggMjBweCA2MHB4IDIwcHg7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvZ3JhZEJHLmpwZykgbm8tcmVwZWF0IHRvcCBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5saXN0aW5nIC5saXN0aW5nQ29udGVudCB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBhZGRpbmc6IDI1cHggMTVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubGlzdGluZyAubGlzdGluZ0NvbnRlbnQ6YWZ0ZXIge1xuICBjb250ZW50OiAnJztcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAtMzlweDtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9saXN0Qm94Qm90dG9tLnBuZykgbm8tcmVwZWF0IGJvdHRvbSBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5saXN0aW5nIC5saXN0aW5nQ29udGVudCBoMiB7XG4gIGNvbG9yOiAjMjAyMjMwO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luOiAwIDAgMjBweCAwO1xufVxuXG4ubGlzdGluZyAubGlzdGluZ0NvbnRlbnQgb2wge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBjb3VudGVyLXJlc2V0OiBteS1hd2Vzb21lLWNvdW50ZXI7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLmxpc3RpbmcgLmxpc3RpbmdDb250ZW50IG9sIGxpIHtcbiAgY291bnRlci1pbmNyZW1lbnQ6IG15LWF3ZXNvbWUtY291bnRlcjtcbiAgcGFkZGluZy1sZWZ0OiAyMnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGNvbG9yOiAjNTc1OTY3O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luOiAwIDAgMTBweCAwO1xufVxuXG4ubGlzdGluZyAubGlzdGluZ0NvbnRlbnQgb2wgbGk6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IGNvdW50ZXIobXktYXdlc29tZS1jb3VudGVyKSBcIi4gXCI7XG4gIGNvbG9yOiAjNTQ4Yzk5O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG59XG5cbi5oZWFkaW5nIHtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9oZWFkaW5nQmVzdEJHLnBuZykgbm8tcmVwZWF0IHRvcCBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiA3MHB4O1xuICBwYWRkaW5nOiAyNXB4IDI2cHggMzBweCAzNXB4O1xuICAtLXBhZGRpbmctYm90dG9tOiAwO1xufVxuXG4udXBsb2FkQmFyIHtcbiAgLS1wYWRkaW5nLXRvcDogMDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAtLXBhZGRpbmctZW5kOiAwO1xuICAtLWJhY2tncm91bmQ6ICMwMDAwMDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcblxuICBoMyB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBpb24taW1nIHtcbiAgICAgIHBhZGRpbmc6IDAgMCA1cHggMTBweDtcbiAgICAgIGhlaWdodDogMzBweDtcbiAgICB9XG4gIH1cbn1cblxuLndoaXRlIHtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5maWx0ZXIge1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJhY2tncm91bmQ6ICM1NzU5Njc7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAwIDE1cHg7XG5cbiAgJi1idXR0b24sXG4gICYtc29ydEJ5IHtcbiAgICB3aWR0aDogNDMlO1xuICB9XG5cbiAgJi1zb3J0Qnkge1xuICAgIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkICM1NzU5Njc7XG4gICAgLS1taW4taGVpZ2h0OiBhdXRvO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZm9udDogYm9sZCAxN3B4LzE3cHggQXJpYWw7XG5cbiAgICBpb24tc2VsZWN0IHtcbiAgICAgIC0tcGFkZGluZy10b3A6IDVweDtcbiAgICAgIC0tcGFkZGluZy1ib3R0b206IDVweDtcbiAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcbiAgICAgIG1pbi13aWR0aDogMTAwJTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxuICB9XG5cbiAgJi1idXR0b24ge1xuICAgIGNvbG9yOiAjNTc1OTY3O1xuICAgIHRleHQtdHJhbnNmb3JtOiBpbml0aWFsO1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNTc1OTY3ICFpbXBvcnRhbnQ7XG4gICAgZm9udDogYm9sZCAxN3B4LzE3cHggQXJpYWw7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmc6IDZweCAxMnB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICYub3BlbmVkIHtcbiAgICAgIHBhZGRpbmc6IDZweCAxMnB4IDE2cHg7XG4gICAgICBib3JkZXItYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gICAgICB0b3A6IDVweDtcbiAgICB9XG5cbiAgICBpb24taW1nIHtcbiAgICAgIHBhZGRpbmc6IDAgMCAwIDQ1cHg7XG4gICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgfVxuICB9XG59XG5cbi5maWx0ZXJzLWNvbnRlbnQge1xuICBwYWRkaW5nOiAyMHB4IDMwcHg7XG4gIGNvbG9yOiAjNTc1OTY3O1xuXG4gIGgzIHtcbiAgICBtYXJnaW46IDA7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNCM0I0QjY7XG4gICAgZm9udDogYm9sZCAyMXB4LzIycHggQXJpYWw7XG4gICAgcGFkZGluZzogMCAwIDIwcHg7XG4gIH1cblxuICBpb24taXRlbSB7XG4gICAgcGFkZGluZy10b3A6IDVweDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gICAgLS1wYWRkaW5nLWVuZDogMDtcbiAgICAtLWlvbi1zYWZlLWFyZWEtcmlnaHQ6IDA7XG4gICAgLS1ib3JkZXItc3R5bGU6IG5vbmUgbm9uZSBzb2xpZCBub25lO1xuICAgIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgLS1ib3JkZXItY29sb3I6ICNCM0I0QjY7XG5cbiAgICAmLmxhc3Qge1xuICAgICAgLS1ib3JkZXItc3R5bGU6IG5vbmU7XG5cbiAgICAgIGlvbi1zZWxlY3Qge1xuICAgICAgICBtYXJnaW46IDEwcHggMCAwO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlvbi1sYWJlbCB7XG4gICAgICBmb250OiBib2xkIDE5cHgvMjBweCBBcmlhbDtcbiAgICB9XG5cbiAgICBpb24tc2VsZWN0IHtcbiAgICAgIGZvbnQ6IDE3cHgvMjBweCBBcmlhbDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM1NzU5Njc7XG4gICAgICBtYXJnaW46IDEwcHggMCAyMHB4O1xuICAgICAgcGFkZGluZzogOHB4IDEycHg7XG4gICAgfVxuICB9XG5cbiAgLmZpbHRlcnMtY2FuY2VsLWJ1dHRvbiwgLmZpbHRlcnMtcmVzZXQtYnV0dG9uIHtcbiAgICBtYXJnaW46IDQwcHggMDtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2hlYWRpbmdCZXN0QkcucG5nKSBuby1yZXBlYXQgdG9wIGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgIGZvbnQ6IGJvbGQgMThweC8yMHB4IEFyaWFsO1xuICAgIGhlaWdodDogNTBweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIC0tcGFkZGluZy1zdGFydDogMTVweDtcbiAgICAtLXBhZGRpbmctZW5kOiAxNXB4O1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiAzMy4zMyU7XG5cbiAgICAudGV4dCB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICB9XG4gIH1cblxuICAuZmlsdGVycy1hcHBseS1idXR0b24ge1xuICAgIG1hcmdpbjogNDBweCAwO1xuICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvaGVhZGluZ0Jlc3RCRy5wbmcpIG5vLXJlcGVhdCB0b3AgY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgZm9udDogYm9sZCAxOHB4LzIwcHggQXJpYWw7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xuICAgIC0tcGFkZGluZy1lbmQ6IDE1cHg7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIHdpZHRoOiAzMy4zMyU7XG5cbiAgICAudGV4dCB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICB9XG4gIH1cbn1cblxuLmxpbmtMaXN0aW5nIHtcbiAgcGFkZGluZzogMTVweCAxMHB4O1xuXG4gIHAge1xuICAgIGZvbnQ6IDE1cHgvMThweCBBcmlhbDtcbiAgICBjb2xvcjogIzU3NTk2NztcbiAgfVxuXG4gIC5jb2x1bW4ge1xuICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgfVxufVxuXG5pb24taXRlbS5pdGVtLWhhcy1mb2N1cyB7XG4gIC0taGlnaGxpZ2h0LWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIC0tZnVsbC1oaWdobGlnaHQtaGVpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIC0taW5zZXQtaGlnaGxpZ2h0LWhlaWdodDogMCAhaW1wb3J0YW50O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/pages/best-practices/best-practices.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/best-practices/best-practices.page.ts ***!
  \*************************************************************/
/*! exports provided: BestPracticesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BestPracticesPage", function() { return BestPracticesPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_home_link_home_link_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/home-link/home-link.service */ "./src/app/services/home-link/home-link.service.ts");
/* harmony import */ var _services_content_service_content_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/content-service/content.service */ "./src/app/services/content-service/content.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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





var BestPracticesPage = /** @class */ (function () {
    function BestPracticesPage(homeLinkService, deviceService, contentService, router) {
        var _this = this;
        this.homeLinkService = homeLinkService;
        this.deviceService = deviceService;
        this.contentService = contentService;
        this.router = router;
        this.bestPractices = [];
        this.buTypes = [];
        this.toolsTypes = [];
        this.detailsTypes = [];
        this.filtersOpened = false;
        this.hideMe = false;
        this.sortOrder = null;
        this.deviceInfo = null;
        this.isIOS10 = false;
        this.filters = {
            buTypes: [],
            toolsTypes: [],
            detailsTypes: [],
        };
        contentService.buTypes.subscribe(function (buTypes) { return _this.buTypes = buTypes; });
        contentService.toolsTypes.subscribe(function (toolsTypes) { return _this.toolsTypes = toolsTypes; });
        contentService.detailsTypes.subscribe(function (detailsTypes) { return _this.detailsTypes = detailsTypes; });
        contentService.bestPractices.subscribe(function (bestPractices) { return _this.bestPractices = bestPractices; });
        this.bestPractices.sort(function (a, b) {
            return ('' + b.sys.createdAt).localeCompare(a.sys.createdAt);
        });
        this.deviceInfo = this.deviceService.getDeviceInfo();
        if (this.deviceInfo.os == 'iOS') {
            if (this.deviceInfo.os_version < 11) {
                this.isIOS10 = true;
            }
        }
    }
    BestPracticesPage.prototype.home = function () {
        this.homeLinkService.home();
    };
    BestPracticesPage.prototype.resetFilters = function () {
        this.filters.buTypes = null;
        this.filters.toolsTypes = null;
        this.filters.detailsTypes = null;
    };
    BestPracticesPage.prototype.switchFilters = function () {
        this.filtersOpened = !this.filtersOpened;
    };
    BestPracticesPage.prototype.sortArticles = function () {
        if (this.sortOrder === 'date-asc') {
            this.bestPractices.sort(function (a, b) {
                return ('' + a.sys.createdAt).localeCompare(b.sys.createdAt);
            });
        }
        else if (this.sortOrder === 'date-desc') {
            this.bestPractices.sort(function (a, b) {
                return ('' + b.sys.createdAt).localeCompare(a.sys.createdAt);
            });
        }
        else {
            this.bestPractices.sort(function (a, b) {
                return ('' + a.fields.title).localeCompare(b.fields.title);
            });
        }
    };
    BestPracticesPage.prototype.setFilters = function () {
        var _this = this;
        this.bestPractices = this.contentService.bestPractices.value.filter(function (article) {
            return !((_this.filters.buTypes && _this.filters.buTypes.length && _this.filters.buTypes.indexOf(article.fields.businessUnit && article.fields.businessUnit.sys.id) < 0) ||
                (_this.filters.toolsTypes && _this.filters.toolsTypes.length && _this.filters.toolsTypes.indexOf(article.fields.toolsType && article.fields.toolsType.sys.id) < 0) ||
                (_this.filters.detailsTypes && _this.filters.detailsTypes.length && _this.filters.detailsTypes.indexOf(article.fields.detailType && article.fields.detailType.sys.id) < 0));
        });
        this.filtersOpened = !this.filtersOpened;
    };
    BestPracticesPage.prototype.open = function (link) {
        this.router.navigate(['best-practice', link.sys.id]);
    };
    BestPracticesPage.prototype.hide = function (id) {
        this.hideMe = true;
    };
    BestPracticesPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-best-practices',
            template: __webpack_require__(/*! ./best-practices.page.html */ "./src/app/pages/best-practices/best-practices.page.html"),
            styles: [__webpack_require__(/*! ./best-practices.page.scss */ "./src/app/pages/best-practices/best-practices.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_home_link_home_link_service__WEBPACK_IMPORTED_MODULE_1__["HomeLinkService"],
            ngx_device_detector__WEBPACK_IMPORTED_MODULE_4__["DeviceDetectorService"],
            _services_content_service_content_service__WEBPACK_IMPORTED_MODULE_2__["ContentService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], BestPracticesPage);
    return BestPracticesPage;
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
//# sourceMappingURL=pages-best-practices-best-practices-module.js.map