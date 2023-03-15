(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-upload-best-practice-upload-best-practice-module"],{

/***/ "./src/app/pages/upload-best-practice/upload-best-practice.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/upload-best-practice/upload-best-practice.module.ts ***!
  \***************************************************************************/
/*! exports provided: UploadBestPracticePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadBestPracticePageModule", function() { return UploadBestPracticePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _upload_best_practice_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./upload-best-practice.page */ "./src/app/pages/upload-best-practice/upload-best-practice.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _upload_best_practice_page__WEBPACK_IMPORTED_MODULE_5__["UploadBestPracticePage"],
    },
];
var UploadBestPracticePageModule = /** @class */ (function () {
    function UploadBestPracticePageModule() {
    }
    UploadBestPracticePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            ],
            declarations: [_upload_best_practice_page__WEBPACK_IMPORTED_MODULE_5__["UploadBestPracticePage"]],
        })
    ], UploadBestPracticePageModule);
    return UploadBestPracticePageModule;
}());



/***/ }),

/***/ "./src/app/pages/upload-best-practice/upload-best-practice.page.html":
/*!***************************************************************************!*\
  !*** ./src/app/pages/upload-best-practice/upload-best-practice.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"navBar\">\n    <ion-toolbar>\n        <ion-buttons class=\"menuIcon\" slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <div class=\"companyLogo\">\n            <ion-img (click)=\"home()\" src=\"/assets/gallifortLogo.svg\"></ion-img>\n        </div>\n    </ion-toolbar>\n</ion-header>\n\n<div class=\"spinner-wrapper\" *ngIf=\"uploadIsInProgress\">\n    <ion-spinner name=\"bubbles\"></ion-spinner>\n</div>\n\n<ion-content class=\"appContent\">\n    <div class=\"heading\">\n        <h1> Upload your best practice</h1>\n    </div>\n\n    <div class='uploadForm'>\n        <ion-list class=\"first-list\">\n            <div (click)=\"takePicture()\" *ngIf=\"!picture?.content\" class='descim no-image'>\n                <ion-img src=\"/assets/camera.png\"></ion-img>\n            </div>\n            <div (click)=\"takePicture()\" *ngIf=\"!!picture?.content\" class='descim'>\n                <ion-img [src]=\"picture?.content\"></ion-img>\n            </div>\n            <div class='descinp'>\n                <ion-textarea [(ngModel)]=\"fields.description\" placeholder=\"Add Description...\"></ion-textarea>\n            </div>\n            <div class=\"clearer\"></div>\n        </ion-list>\n\n        <ion-item class=\"text-input\">\n            <ion-label position=\"floating\">Title</ion-label>\n            <ion-textarea [(ngModel)]=\"fields.title\" placeholder=\"Enter title\"></ion-textarea>\n        </ion-item>\n\n        <ion-item class=\"text-input\">\n            <ion-label position=\"floating\">Name</ion-label>\n            <ion-textarea [(ngModel)]=\"fields.name\" placeholder=\"Enter name\"></ion-textarea>\n        </ion-item>\n\n        <ion-item class=\"text-input\">\n            <ion-label position=\"floating\">Email</ion-label>\n            <ion-textarea [(ngModel)]=\"fields.email\" inputmode=\"email\" placeholder=\"Enter email\"></ion-textarea>\n        </ion-item>\n\n        <ion-item>\n            <ion-label position=\"floating\">Business Unit</ion-label>\n            <ion-select [(ngModel)]=\"fields.businessUnit\" placeholder=\"Select a business unit\" style='width:100%;'>\n                <ion-select-option *ngFor=\"let buType of buTypes\" [value]=\"buType.sys.id\">{{buType.fields.title}}</ion-select-option>\n            </ion-select>\n        </ion-item>\n\n        <ion-item>\n            <ion-label position=\"floating\">Tools</ion-label>\n            <ion-select [(ngModel)]=\"fields.toolsType\" placeholder=\"Select a tool\">\n                <ion-select-option *ngFor=\"let toolsType of toolsTypes\" [value]=\"toolsType.sys.id\">{{toolsType.fields.title}}</ion-select-option>\n            </ion-select>\n        </ion-item>\n\n        <ion-item>\n            <ion-label position=\"floating\">Detail</ion-label>\n            <ion-select [(ngModel)]=\"fields.detailType\" placeholder=\"Select detail type\">\n                <ion-select-option *ngFor=\"let detailsType of detailsTypes\" [value]=\"detailsType.sys.id\">{{detailsType.fields.title}}</ion-select-option>\n            </ion-select>\n        </ion-item>\n\n        <ion-item class=\"last\">\n            <ion-label text-wrap>Please tick to state that any individuals in this photo have been told of the intended use, and of their right to object.\n            </ion-label>\n            <ion-checkbox [(ngModel)]=\"fields.disclaimer\" slot=\"start\" value=\"disclaimer\"></ion-checkbox>\n        </ion-item>\n\n        <ion-button expand=\"full\" fill='clear' class=\"upload-button\" (click)=\"upload()\">\n            <span class=\"text\">Upload</span>\n            <ion-img src=\"/assets/upload.png\"></ion-img>\n        </ion-button>\n    </div>\n\n</ion-content>\n<ion-footer>\n\n</ion-footer>"

/***/ }),

/***/ "./src/app/pages/upload-best-practice/upload-best-practice.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/upload-best-practice/upload-best-practice.page.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".companyLogo {\n  width: 100%;\n  max-width: 115px;\n  margin: 0 auto;\n  cursor: pointer; }\n\n.menuIcon {\n  position: absolute;\n  right: 20px;\n  top: 10px;\n  width: 30px;\n  height: 30px; }\n\n.menuIcon .button {\n    --color: #548c99; }\n\n.upload-title {\n  padding: 10px 30px;\n  display: flex;\n  flex-wrap: nowrap;\n  align-content: center;\n  align-items: center;\n  justify-content: space-between; }\n\n.upload-title ion-icon {\n    padding-left: 5px; }\n\nion-content {\n  --background: #fff; }\n\nion-icon {\n  font-size: 50px; }\n\n.articleHeading {\n  margin: 0 0 20px 15px; }\n\n.articleHeading h1 {\n    padding: 20px 0 15px 20px;\n    border-bottom: 1px solid rgba(154, 156, 158, 0.75);\n    margin: 0;\n    color: #202230;\n    font-size: 20px;\n    line-height: 22px;\n    font-weight: bold; }\n\n.row {\n  margin: 0 0 0 15px; }\n\n.rowPadding {\n  padding: 0 20px; }\n\n.back {\n  padding: 10px;\n  background: url('headingBG.jpg') top center;\n  background-size: cover;\n  color: #fff; }\n\n.back .button {\n    color: #fff;\n    font-size: 16px;\n    line-height: 22px;\n    font-weight: bold; }\n\n.appContent {\n  -webkit-transform-style: preserve-3d;\n  -webkit-backface-visibility: hidden; }\n\n.appContent p {\n    color: #575967;\n    font-size: 16px;\n    line-height: 22px;\n    margin: 0 0 20px 0; }\n\n.rowBlockQuote {\n  margin: 0 0 20px 0;\n  padding: 30px 65px 45px 50px;\n  background: url('blockquoteOneBG.png') no-repeat bottom center;\n  background-size: cover;\n  position: relative; }\n\n.rowBlockQuote.blue {\n    background: url('blockquoteTwoBG.png') no-repeat bottom center;\n    background-size: cover; }\n\n.rowBlockQuote .icon {\n    position: absolute;\n    width: 30px;\n    height: 20px; }\n\n.rowBlockQuote .speechLeft {\n    left: 3%;\n    top: 15%; }\n\n.rowBlockQuote .speechRight {\n    right: 10%;\n    bottom: 25%; }\n\n.rowBlockQuote p {\n    font-style: italic;\n    font-size: 18px;\n    line-height: 22px;\n    color: #202230;\n    margin: 0; }\n\n.rowAuthor {\n  margin: 60px 0 40px 20px;\n  padding: 0 20px; }\n\n.rowAuthor p {\n    margin: 0; }\n\n.listing {\n  padding: 25px 20px 60px 20px;\n  background: url('gradBG.jpg') no-repeat top center;\n  background-size: cover; }\n\n.listing .listingContent {\n    background: #fff;\n    padding: 25px 15px;\n    position: relative; }\n\n.listing .listingContent:after {\n      content: '';\n      display: block;\n      width: 100%;\n      height: 40px;\n      position: absolute;\n      left: 0;\n      bottom: -39px;\n      background: url('listBoxBottom.png') no-repeat bottom center;\n      background-size: cover; }\n\n.listing .listingContent h2 {\n      color: #202230;\n      font-size: 20px;\n      line-height: 22px;\n      font-weight: bold;\n      margin: 0 0 20px 0; }\n\n.listing .listingContent ol {\n      list-style: none;\n      counter-reset: my-awesome-counter;\n      margin: 0;\n      padding: 0; }\n\n.listing .listingContent ol li {\n        counter-increment: my-awesome-counter;\n        padding-left: 22px;\n        position: relative;\n        color: #575967;\n        font-size: 20px;\n        line-height: 22px;\n        font-weight: bold;\n        margin: 0 0 10px 0; }\n\n.listing .listingContent ol li::before {\n          content: counter(my-awesome-counter) \". \";\n          color: #548c99;\n          font-weight: bold;\n          position: absolute;\n          left: 0;\n          top: 0; }\n\n.heading {\n  background: url('headingBestBG.png') no-repeat top center;\n  background-size: cover;\n  text-align: center;\n  height: 70px;\n  padding: 25px 26px 20px 35px;\n  --padding-bottom: 0; }\n\n.heading h1 {\n    color: #fff;\n    margin: 0;\n    font-size: 24px;\n    line-height: 24px;\n    font-weight: bold;\n    text-align: left; }\n\n.uploadBar {\n  --padding-top: 0;\n  --padding-bottom: 0;\n  --padding-start: 0;\n  --padding-end: 0;\n  --background: #000000; }\n\n.white {\n  color: #ffffff; }\n\nion-icon {\n  font-size: 30px;\n  float: right; }\n\n.uploadForm {\n  padding: 5% 10%; }\n\n.uploadForm .list {\n    margin-top: 0;\n    background: #ffffff; }\n\n.uploadForm .in-list {\n    background: #ffffff;\n    --background: #ffffff; }\n\n.uploadForm .item .sc-ion-label-md-h {\n    white-space: initial; }\n\n.uploadForm .first-list {\n    border-width: 1px;\n    border-style: none none solid none;\n    border-color: #575967; }\n\n.uploadForm .first-list .clearer {\n      clear: both; }\n\n.uploadForm .text-input {\n    padding-top: 5px;\n    clear: both;\n    --padding-start: 0;\n    --padding-end: 0;\n    --ion-safe-area-right: 0;\n    --border-style: none;\n    border-width: 1px;\n    border-style: none none solid none;\n    border-color: #575967; }\n\n.uploadForm .text-input ion-label {\n      font: bold 19px/20px Arial; }\n\n.uploadForm .text-input ion-input {\n      font: 17px/20px Arial;\n      border-width: 1px;\n      border-style: none none solid none;\n      border-color: #575967;\n      margin: 10px 0 20px;\n      padding: 8px 12px;\n      max-width: 100%;\n      width: 100%; }\n\n.uploadForm ion-item {\n    padding-top: 5px;\n    --padding-start: 0;\n    --padding-end: 0;\n    --ion-safe-area-right: 0;\n    --border-style: none none solid none;\n    --border-width: 1px;\n    --border-color: #B3B4B6; }\n\n.uploadForm ion-item.last {\n      --border-style: none; }\n\n.uploadForm ion-item.last ion-label {\n        font: 14px/18px Arial;\n        margin-left: 20px;\n        margin-top: 7px; }\n\n.uploadForm ion-item.last ion-checkbox {\n        margin: 10px 0 0;\n        align-self: start; }\n\n.uploadForm ion-item ion-label {\n      font: bold 19px/20px Arial; }\n\n.uploadForm ion-item ion-select {\n      font: 17px/20px Arial;\n      border: 1px solid #575967;\n      margin: 10px 0 20px;\n      padding: 8px 12px;\n      max-width: 100%;\n      width: 100%; }\n\n.uploadForm .descim {\n    float: left;\n    width: 22vw;\n    cursor: pointer; }\n\n.uploadForm .descim.no-image {\n      background: #1e2023;\n      border-radius: 5px;\n      border: 1px solid #989aa2; }\n\n.uploadForm .descim.no-image ion-img {\n        height: 40px;\n        margin: 8vw auto; }\n\n.uploadForm .descinp {\n    float: left;\n    width: 70%; }\n\n.uploadForm .upload-button {\n    margin: 40px 0;\n    background: url('headingBestBG.png') top center;\n    background-size: cover;\n    color: white !important;\n    font: bold 18px/20px Arial;\n    height: 50px;\n    text-align: left;\n    --padding-start: 15px;\n    --padding-end: 15px; }\n\n.uploadForm .upload-button .text {\n      display: inline-block;\n      width: 100%;\n      text-align: left;\n      text-transform: none; }\n\n.uploadForm ion-button:disabled,\n  .uploadForm ion-button[disabled] {\n    background: url('headingBestBGdisabled.png') top center; }\n\nion-item.item-has-focus {\n  --highlight-background: transparent !important;\n  --full-highlight-height: 0 !important;\n  --inset-highlight-height: 0 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYXVsLmNhcm5lbGwvZ2FsbGlmb3JkdHJ5LWFwcC9zcmMvYXBwL3BhZ2VzL3VwbG9hZC1iZXN0LXByYWN0aWNlL3VwbG9hZC1iZXN0LXByYWN0aWNlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFNBQVM7RUFDVCxXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUxkO0lBUUksZ0JBQVEsRUFBQTs7QUFJWjtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsOEJBQThCLEVBQUE7O0FBTmhDO0lBU0ksaUJBQWlCLEVBQUE7O0FBSXJCO0VBQ0Usa0JBQWEsRUFBQTs7QUFHZjtFQUNFLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxxQkFBcUIsRUFBQTs7QUFEdkI7SUFJSSx5QkFBeUI7SUFDekIsa0RBQWtEO0lBQ2xELFNBQVM7SUFDVCxjQUFjO0lBQ2QsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixpQkFBaUIsRUFBQTs7QUFJckI7RUFDRSxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsYUFBYTtFQUNiLDJDQUF5RDtFQUN6RCxzQkFBc0I7RUFDdEIsV0FBVyxFQUFBOztBQUpiO0lBT0ksV0FBVztJQUNYLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsaUJBQWlCLEVBQUE7O0FBSXJCO0VBQ0Usb0NBQW9DO0VBQ3BDLG1DQUFtQyxFQUFBOztBQUZyQztJQUtJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGtCQUFrQixFQUFBOztBQUl0QjtFQUNFLGtCQUFrQjtFQUNsQiw0QkFBNEI7RUFDNUIsOERBQTRFO0VBQzVFLHNCQUFzQjtFQUN0QixrQkFBa0IsRUFBQTs7QUFMcEI7SUFRSSw4REFBNEU7SUFDNUUsc0JBQXNCLEVBQUE7O0FBVDFCO0lBYUksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZLEVBQUE7O0FBZmhCO0lBbUJJLFFBQVE7SUFDUixRQUFRLEVBQUE7O0FBcEJaO0lBd0JJLFVBQVU7SUFDVixXQUFXLEVBQUE7O0FBekJmO0lBNkJJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxTQUFTLEVBQUE7O0FBSWI7RUFDRSx3QkFBd0I7RUFDeEIsZUFBZSxFQUFBOztBQUZqQjtJQUtJLFNBQVMsRUFBQTs7QUFJYjtFQUNFLDRCQUE0QjtFQUM1QixrREFBZ0U7RUFDaEUsc0JBQXNCLEVBQUE7O0FBSHhCO0lBTUksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixrQkFBa0IsRUFBQTs7QUFSdEI7TUFXTSxXQUFXO01BQ1gsY0FBYztNQUNkLFdBQVc7TUFDWCxZQUFZO01BQ1osa0JBQWtCO01BQ2xCLE9BQU87TUFDUCxhQUFhO01BQ2IsNERBQTBFO01BQzFFLHNCQUFzQixFQUFBOztBQW5CNUI7TUF1Qk0sY0FBYztNQUNkLGVBQWU7TUFDZixpQkFBaUI7TUFDakIsaUJBQWlCO01BQ2pCLGtCQUFrQixFQUFBOztBQTNCeEI7TUErQk0sZ0JBQWdCO01BQ2hCLGlDQUFpQztNQUNqQyxTQUFTO01BQ1QsVUFBVSxFQUFBOztBQWxDaEI7UUFxQ1EscUNBQXFDO1FBQ3JDLGtCQUFrQjtRQUNsQixrQkFBa0I7UUFDbEIsY0FBYztRQUNkLGVBQWU7UUFDZixpQkFBaUI7UUFDakIsaUJBQWlCO1FBQ2pCLGtCQUFrQixFQUFBOztBQTVDMUI7VUErQ1UseUNBQXlDO1VBQ3pDLGNBQWM7VUFDZCxpQkFBaUI7VUFDakIsa0JBQWtCO1VBQ2xCLE9BQU87VUFDUCxNQUFNLEVBQUE7O0FBT2hCO0VBQ0UseURBQXVFO0VBQ3ZFLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLDRCQUE0QjtFQUM1QixtQkFBaUIsRUFBQTs7QUFObkI7SUFTSSxXQUFXO0lBQ1gsU0FBUztJQUNULGVBQWU7SUFDZixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGdCQUFnQixFQUFBOztBQUlwQjtFQUNFLGdCQUFjO0VBQ2QsbUJBQWlCO0VBQ2pCLGtCQUFnQjtFQUNoQixnQkFBYztFQUNkLHFCQUFhLEVBQUE7O0FBR2Y7RUFDRSxjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsZUFBZTtFQUNmLFlBQVksRUFBQTs7QUFHZDtFQUNFLGVBQWUsRUFBQTs7QUFEakI7SUFJSSxhQUFhO0lBQ2IsbUJBQW1CLEVBQUE7O0FBTHZCO0lBU0ksbUJBQW1CO0lBQ25CLHFCQUFhLEVBQUE7O0FBVmpCO0lBY0ksb0JBQW9CLEVBQUE7O0FBZHhCO0lBa0JJLGlCQUFpQjtJQUNqQixrQ0FBa0M7SUFDbEMscUJBQXFCLEVBQUE7O0FBcEJ6QjtNQXVCTSxXQUFXLEVBQUE7O0FBdkJqQjtJQTRCSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGtCQUFnQjtJQUNoQixnQkFBYztJQUNkLHdCQUFzQjtJQUN0QixvQkFBZTtJQUVmLGlCQUFpQjtJQUNqQixrQ0FBa0M7SUFDbEMscUJBQXFCLEVBQUE7O0FBckN6QjtNQXdDTSwwQkFBMEIsRUFBQTs7QUF4Q2hDO01BNENNLHFCQUFxQjtNQUNyQixpQkFBaUI7TUFDakIsa0NBQWtDO01BQ2xDLHFCQUFxQjtNQUNyQixtQkFBbUI7TUFDbkIsaUJBQWlCO01BQ2pCLGVBQWU7TUFDZixXQUFXLEVBQUE7O0FBbkRqQjtJQXdESSxnQkFBZ0I7SUFDaEIsa0JBQWdCO0lBQ2hCLGdCQUFjO0lBQ2Qsd0JBQXNCO0lBQ3RCLG9DQUFlO0lBQ2YsbUJBQWU7SUFDZix1QkFBZSxFQUFBOztBQTlEbkI7TUFpRU0sb0JBQWUsRUFBQTs7QUFqRXJCO1FBb0VRLHFCQUFxQjtRQUNyQixpQkFBaUI7UUFDakIsZUFBZSxFQUFBOztBQXRFdkI7UUEwRVEsZ0JBQWdCO1FBQ2hCLGlCQUFpQixFQUFBOztBQTNFekI7TUFnRk0sMEJBQTBCLEVBQUE7O0FBaEZoQztNQW9GTSxxQkFBcUI7TUFDckIseUJBQXlCO01BQ3pCLG1CQUFtQjtNQUNuQixpQkFBaUI7TUFDakIsZUFBZTtNQUNmLFdBQVcsRUFBQTs7QUF6RmpCO0lBOEZJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsZUFBZSxFQUFBOztBQWhHbkI7TUFtR00sbUJBQW1CO01BQ25CLGtCQUFrQjtNQUNsQix5QkFBeUIsRUFBQTs7QUFyRy9CO1FBd0dRLFlBQVk7UUFDWixnQkFBZ0IsRUFBQTs7QUF6R3hCO0lBK0dJLFdBQVc7SUFDWCxVQUFVLEVBQUE7O0FBaEhkO0lBb0hJLGNBQWM7SUFDZCwrQ0FBNkQ7SUFDN0Qsc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QiwwQkFBMEI7SUFDMUIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixxQkFBZ0I7SUFDaEIsbUJBQWMsRUFBQTs7QUE1SGxCO01BK0hNLHFCQUFxQjtNQUNyQixXQUFXO01BQ1gsZ0JBQWdCO01BQ2hCLG9CQUFvQixFQUFBOztBQWxJMUI7O0lBd0lJLHVEQUFxRSxFQUFBOztBQUl6RTtFQUNFLDhDQUF1QjtFQUN2QixxQ0FBd0I7RUFDeEIsc0NBQXlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy91cGxvYWQtYmVzdC1wcmFjdGljZS91cGxvYWQtYmVzdC1wcmFjdGljZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29tcGFueUxvZ28ge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMTVweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm1lbnVJY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMjBweDtcbiAgdG9wOiAxMHB4O1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuXG4gIC5idXR0b24ge1xuICAgIC0tY29sb3I6ICM1NDhjOTk7XG4gIH1cbn1cblxuLnVwbG9hZC10aXRsZSB7XG4gIHBhZGRpbmc6IDEwcHggMzBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gIGlvbi1pY29uIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgfVxufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuaW9uLWljb24ge1xuICBmb250LXNpemU6IDUwcHg7XG59XG5cbi5hcnRpY2xlSGVhZGluZyB7XG4gIG1hcmdpbjogMCAwIDIwcHggMTVweDtcblxuICBoMSB7XG4gICAgcGFkZGluZzogMjBweCAwIDE1cHggMjBweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgxNTQsIDE1NiwgMTU4LCAwLjc1KTtcbiAgICBtYXJnaW46IDA7XG4gICAgY29sb3I6ICMyMDIyMzA7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG59XG5cbi5yb3cge1xuICBtYXJnaW46IDAgMCAwIDE1cHg7XG59XG5cbi5yb3dQYWRkaW5nIHtcbiAgcGFkZGluZzogMCAyMHB4O1xufVxuXG4uYmFjayB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvaGVhZGluZ0JHLmpwZykgdG9wIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgY29sb3I6ICNmZmY7XG5cbiAgLmJ1dHRvbiB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG59XG5cbi5hcHBDb250ZW50IHtcbiAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcblxuICBwIHtcbiAgICBjb2xvcjogIzU3NTk2NztcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgbWFyZ2luOiAwIDAgMjBweCAwO1xuICB9XG59XG5cbi5yb3dCbG9ja1F1b3RlIHtcbiAgbWFyZ2luOiAwIDAgMjBweCAwO1xuICBwYWRkaW5nOiAzMHB4IDY1cHggNDVweCA1MHB4O1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2Jsb2NrcXVvdGVPbmVCRy5wbmcpIG5vLXJlcGVhdCBib3R0b20gY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgJi5ibHVlIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2Jsb2NrcXVvdGVUd29CRy5wbmcpIG5vLXJlcGVhdCBib3R0b20gY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIH1cblxuICAuaWNvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgfVxuXG4gIC5zcGVlY2hMZWZ0IHtcbiAgICBsZWZ0OiAzJTtcbiAgICB0b3A6IDE1JTtcbiAgfVxuXG4gIC5zcGVlY2hSaWdodCB7XG4gICAgcmlnaHQ6IDEwJTtcbiAgICBib3R0b206IDI1JTtcbiAgfVxuXG4gIHAge1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgY29sb3I6ICMyMDIyMzA7XG4gICAgbWFyZ2luOiAwO1xuICB9XG59XG5cbi5yb3dBdXRob3Ige1xuICBtYXJnaW46IDYwcHggMCA0MHB4IDIwcHg7XG4gIHBhZGRpbmc6IDAgMjBweDtcblxuICBwIHtcbiAgICBtYXJnaW46IDA7XG4gIH1cbn1cblxuLmxpc3Rpbmcge1xuICBwYWRkaW5nOiAyNXB4IDIwcHggNjBweCAyMHB4O1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2dyYWRCRy5qcGcpIG5vLXJlcGVhdCB0b3AgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXG4gIC5saXN0aW5nQ29udGVudCB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBwYWRkaW5nOiAyNXB4IDE1cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgJjphZnRlciB7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgYm90dG9tOiAtMzlweDtcbiAgICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvbGlzdEJveEJvdHRvbS5wbmcpIG5vLXJlcGVhdCBib3R0b20gY2VudGVyO1xuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICB9XG5cbiAgICBoMiB7XG4gICAgICBjb2xvcjogIzIwMjIzMDtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBtYXJnaW46IDAgMCAyMHB4IDA7XG4gICAgfVxuXG4gICAgb2wge1xuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgIGNvdW50ZXItcmVzZXQ6IG15LWF3ZXNvbWUtY291bnRlcjtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIHBhZGRpbmc6IDA7XG5cbiAgICAgIGxpIHtcbiAgICAgICAgY291bnRlci1pbmNyZW1lbnQ6IG15LWF3ZXNvbWUtY291bnRlcjtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyMnB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGNvbG9yOiAjNTc1OTY3O1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgbWFyZ2luOiAwIDAgMTBweCAwO1xuXG4gICAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgICAgY29udGVudDogY291bnRlcihteS1hd2Vzb21lLWNvdW50ZXIpIFwiLiBcIjtcbiAgICAgICAgICBjb2xvcjogIzU0OGM5OTtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLmhlYWRpbmcge1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2hlYWRpbmdCZXN0QkcucG5nKSBuby1yZXBlYXQgdG9wIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDcwcHg7XG4gIHBhZGRpbmc6IDI1cHggMjZweCAyMHB4IDM1cHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDA7XG5cbiAgaDEge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxufVxuXG4udXBsb2FkQmFyIHtcbiAgLS1wYWRkaW5nLXRvcDogMDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAtLXBhZGRpbmctZW5kOiAwO1xuICAtLWJhY2tncm91bmQ6ICMwMDAwMDA7XG59XG5cbi53aGl0ZSB7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG5pb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4udXBsb2FkRm9ybSB7XG4gIHBhZGRpbmc6IDUlIDEwJTtcblxuICAubGlzdCB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICB9XG5cbiAgLmluLWxpc3Qge1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICB9XG5cbiAgLml0ZW0gLnNjLWlvbi1sYWJlbC1tZC1oIHtcbiAgICB3aGl0ZS1zcGFjZTogaW5pdGlhbDtcbiAgfVxuXG4gIC5maXJzdC1saXN0IHtcbiAgICBib3JkZXItd2lkdGg6IDFweDtcbiAgICBib3JkZXItc3R5bGU6IG5vbmUgbm9uZSBzb2xpZCBub25lO1xuICAgIGJvcmRlci1jb2xvcjogIzU3NTk2NztcblxuICAgIC5jbGVhcmVyIHtcbiAgICAgIGNsZWFyOiBib3RoO1xuICAgIH1cbiAgfVxuXG4gIC50ZXh0LWlucHV0IHtcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgIGNsZWFyOiBib3RoO1xuICAgIC0tcGFkZGluZy1zdGFydDogMDtcbiAgICAtLXBhZGRpbmctZW5kOiAwO1xuICAgIC0taW9uLXNhZmUtYXJlYS1yaWdodDogMDtcbiAgICAtLWJvcmRlci1zdHlsZTogbm9uZTtcblxuICAgIGJvcmRlci13aWR0aDogMXB4O1xuICAgIGJvcmRlci1zdHlsZTogbm9uZSBub25lIHNvbGlkIG5vbmU7XG4gICAgYm9yZGVyLWNvbG9yOiAjNTc1OTY3O1xuXG4gICAgaW9uLWxhYmVsIHtcbiAgICAgIGZvbnQ6IGJvbGQgMTlweC8yMHB4IEFyaWFsO1xuICAgIH1cblxuICAgIGlvbi1pbnB1dCB7XG4gICAgICBmb250OiAxN3B4LzIwcHggQXJpYWw7XG4gICAgICBib3JkZXItd2lkdGg6IDFweDtcbiAgICAgIGJvcmRlci1zdHlsZTogbm9uZSBub25lIHNvbGlkIG5vbmU7XG4gICAgICBib3JkZXItY29sb3I6ICM1NzU5Njc7XG4gICAgICBtYXJnaW46IDEwcHggMCAyMHB4O1xuICAgICAgcGFkZGluZzogOHB4IDEycHg7XG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gIH1cblxuICBpb24taXRlbSB7XG4gICAgcGFkZGluZy10b3A6IDVweDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gICAgLS1wYWRkaW5nLWVuZDogMDtcbiAgICAtLWlvbi1zYWZlLWFyZWEtcmlnaHQ6IDA7XG4gICAgLS1ib3JkZXItc3R5bGU6IG5vbmUgbm9uZSBzb2xpZCBub25lO1xuICAgIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgLS1ib3JkZXItY29sb3I6ICNCM0I0QjY7XG5cbiAgICAmLmxhc3Qge1xuICAgICAgLS1ib3JkZXItc3R5bGU6IG5vbmU7XG5cbiAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgIGZvbnQ6IDE0cHgvMThweCBBcmlhbDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDdweDtcbiAgICAgIH1cblxuICAgICAgaW9uLWNoZWNrYm94IHtcbiAgICAgICAgbWFyZ2luOiAxMHB4IDAgMDtcbiAgICAgICAgYWxpZ24tc2VsZjogc3RhcnQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaW9uLWxhYmVsIHtcbiAgICAgIGZvbnQ6IGJvbGQgMTlweC8yMHB4IEFyaWFsO1xuICAgIH1cblxuICAgIGlvbi1zZWxlY3Qge1xuICAgICAgZm9udDogMTdweC8yMHB4IEFyaWFsO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgIzU3NTk2NztcbiAgICAgIG1hcmdpbjogMTBweCAwIDIwcHg7XG4gICAgICBwYWRkaW5nOiA4cHggMTJweDtcbiAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgfVxuXG4gIC5kZXNjaW0ge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiAyMnZ3O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICYubm8taW1hZ2Uge1xuICAgICAgYmFja2dyb3VuZDogIzFlMjAyMztcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM5ODlhYTI7XG5cbiAgICAgIGlvbi1pbWcge1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIG1hcmdpbjogOHZ3IGF1dG87XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmRlc2NpbnAge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiA3MCU7XG4gIH1cblxuICAudXBsb2FkLWJ1dHRvbiB7XG4gICAgbWFyZ2luOiA0MHB4IDA7XG4gICAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9oZWFkaW5nQmVzdEJHLnBuZykgdG9wIGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgIGZvbnQ6IGJvbGQgMThweC8yMHB4IEFyaWFsO1xuICAgIGhlaWdodDogNTBweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIC0tcGFkZGluZy1zdGFydDogMTVweDtcbiAgICAtLXBhZGRpbmctZW5kOiAxNXB4O1xuXG4gICAgLnRleHQge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgaW9uLWJ1dHRvbjpkaXNhYmxlZCxcbiAgaW9uLWJ1dHRvbltkaXNhYmxlZF0ge1xuICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvaGVhZGluZ0Jlc3RCR2Rpc2FibGVkLnBuZykgdG9wIGNlbnRlcjtcbiAgfVxufVxuXG5pb24taXRlbS5pdGVtLWhhcy1mb2N1cyB7XG4gIC0taGlnaGxpZ2h0LWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIC0tZnVsbC1oaWdobGlnaHQtaGVpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIC0taW5zZXQtaGlnaGxpZ2h0LWhlaWdodDogMCAhaW1wb3J0YW50O1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/upload-best-practice/upload-best-practice.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/upload-best-practice/upload-best-practice.page.ts ***!
  \*************************************************************************/
/*! exports provided: UploadBestPracticePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadBestPracticePage", function() { return UploadBestPracticePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_photo_service_photo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/photo-service/photo.service */ "./src/app/services/photo-service/photo.service.ts");
/* harmony import */ var _services_home_link_home_link_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/home-link/home-link.service */ "./src/app/services/home-link/home-link.service.ts");
/* harmony import */ var _services_content_service_content_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/content-service/content.service */ "./src/app/services/content-service/content.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
var UploadBestPracticePage = /** @class */ (function () {
    function UploadBestPracticePage(
    //private ga: GoogleAnalytics,
    homeLinkService, router, photoService, contentService, alertController) {
        var _this = this;
        this.homeLinkService = homeLinkService;
        this.router = router;
        this.photoService = photoService;
        this.contentService = contentService;
        this.alertController = alertController;
        this.uploadIsInProgress = false;
        this.buTypes = [];
        this.toolsTypes = [];
        this.detailsTypes = [];
        this.fields = {
            name: '',
            title: '',
            email: '',
            description: '',
            disclaimer: false,
            businessUnit: null,
            toolsType: null,
            detailType: null,
        };
        this.picture = null;
        contentService.buTypes.subscribe(function (buTypes) { return _this.buTypes = buTypes; });
        contentService.toolsTypes.subscribe(function (toolsTypes) { return _this.toolsTypes = toolsTypes; });
        contentService.detailsTypes.subscribe(function (detailsTypes) { return _this.detailsTypes = detailsTypes; });
        //this.ga.trackView('Upload Best Practice');
    }
    UploadBestPracticePage.prototype.takePicture = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!window.cordova) return [3 /*break*/, 1];
                        this.takePictureFromLibrary();
                        return [3 /*break*/, 4];
                    case 1: return [4 /*yield*/, this.alertController.create({
                            header: 'Select source',
                            buttons: [{
                                    text: 'Camera',
                                    handler: this.takePictureFromCamera.bind(this),
                                }, {
                                    text: 'Library',
                                    handler: this.takePictureFromLibrary.bind(this),
                                }, {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                },
                            ],
                        })];
                    case 2:
                        alert_1 = _a.sent();
                        return [4 /*yield*/, alert_1.present()];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    UploadBestPracticePage.prototype.takePictureFromLibrary = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.photoService.takePicture()];
                    case 1:
                        _a.sent();
                        this.picture = this.photoService.loadSaved();
                        return [2 /*return*/];
                }
            });
        });
    };
    UploadBestPracticePage.prototype.takePictureFromCamera = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.photoService.takePhoto()];
                    case 1:
                        _a.sent();
                        this.picture = this.photoService.loadSaved();
                        return [2 /*return*/];
                }
            });
        });
    };
    UploadBestPracticePage.prototype.isFormInvalid = function () {
        return !(this.picture
            && this.picture.content
            && this.fields.name.length > 3
            && this.fields.email.length > 3
            && this.fields.description.length > 3
            && this.fields.disclaimer);
    };
    UploadBestPracticePage.prototype.getFormInvalidMessage = function () {
        return !this.picture ? 'You should attach an image' :
            !this.picture.content ? 'You should attach an image' :
                !(this.fields.description.length > 3) ? 'You should fill a description' :
                    !(this.fields.name.length > 3) ? 'You should enter your name' :
                        !(this.fields.email.length > 3) ? 'You should enter your email' :
                            !this.fields.disclaimer ? 'You should accept the disclaimer' : 'Internal error';
    };
    UploadBestPracticePage.prototype.upload = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert_2;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.isFormInvalid()) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.alertController.create({
                                header: 'Form is not valid!',
                                message: this.getFormInvalidMessage(),
                                buttons: [{ text: 'Ok' }],
                            })];
                    case 1:
                        alert_2 = _a.sent();
                        return [4 /*yield*/, alert_2.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                    case 3:
                        this.uploadIsInProgress = true;
                        return [4 /*yield*/, this.contentService.postContent({
                                title: this.fields.title,
                                comments: this.fields.description,
                                authorEmail: this.fields.email,
                                author: this.fields.name,
                                picture: this.picture,
                                businessUnit: this.fields.businessUnit,
                                toolsType: this.fields.toolsType,
                                detailType: this.fields.detailType,
                            }).catch(function (e) { return __awaiter(_this, void 0, void 0, function () {
                                var alert;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.alertController.create({
                                                header: 'Something went wrong',
                                                message: 'Please try again',
                                                buttons: [{ text: 'Ok' }],
                                            })];
                                        case 1:
                                            alert = _a.sent();
                                            return [4 /*yield*/, alert.present()];
                                        case 2:
                                            _a.sent();
                                            this.uploadIsInProgress = false;
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 4:
                        _a.sent();
                        //   console.log('upload done');
                        return [4 /*yield*/, this.contentService.updateBestPractices()];
                    case 5:
                        //   console.log('upload done');
                        _a.sent();
                        this.uploadIsInProgress = false;
                        this.picture = null;
                        this.fields = {
                            name: '',
                            title: '',
                            email: '',
                            description: '',
                            disclaimer: false,
                            businessUnit: null,
                            toolsType: null,
                            detailType: null,
                        };
                        this.router.navigateByUrl('best-practice');
                        return [2 /*return*/];
                }
            });
        });
    };
    UploadBestPracticePage.prototype.home = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.homeLinkService.home();
                return [2 /*return*/];
            });
        });
    };
    UploadBestPracticePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-upload-best-practice',
            template: __webpack_require__(/*! ./upload-best-practice.page.html */ "./src/app/pages/upload-best-practice/upload-best-practice.page.html"),
            styles: [__webpack_require__(/*! ./upload-best-practice.page.scss */ "./src/app/pages/upload-best-practice/upload-best-practice.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_home_link_home_link_service__WEBPACK_IMPORTED_MODULE_3__["HomeLinkService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _services_photo_service_photo_service__WEBPACK_IMPORTED_MODULE_2__["PhotoService"],
            _services_content_service_content_service__WEBPACK_IMPORTED_MODULE_4__["ContentService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"]])
    ], UploadBestPracticePage);
    return UploadBestPracticePage;
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



/***/ }),

/***/ "./src/app/services/photo-service/photo.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/photo-service/photo.service.ts ***!
  \*********************************************************/
/*! exports provided: PhotoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoService", function() { return PhotoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var ng2_img_max__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-img-max */ "./node_modules/ng2-img-max/dist/ng2-img-max.js");
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




var PhotoService = /** @class */ (function () {
    function PhotoService(camera, storage, ng2ImgMax) {
        this.camera = camera;
        this.storage = storage;
        this.ng2ImgMax = ng2ImgMax;
        this.picture = {};
    }
    PhotoService.prototype.takePicture = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.picture = {};
                        if (!!!window.cordova) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.cordovaTakePicture()];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.webTakePicture()];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    PhotoService.prototype.cordovaTakePicture = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var options = {
                quality: 100,
                destinationType: _this.camera.DestinationType.FILE_URI,
                sourceType: _this.camera.PictureSourceType.PHOTOLIBRARY,
                mediaType: _this.camera.MediaType.PICTURE,
                allowEdit: true,
                targetHeight: 600,
                targetWidth: 800,
            };
            return _this.camera.getPicture(options)
                .then(_this.readLocalFile)
                .then(function (imageData) { return __awaiter(_this, void 0, void 0, function () {
                var readBaseResult, readTextResult;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.picture = null;
                            return [4 /*yield*/, this.readBase(imageData)];
                        case 1:
                            readBaseResult = _a.sent();
                            return [4 /*yield*/, this.readText(imageData)];
                        case 2:
                            readTextResult = _a.sent();
                            this.picture = {
                                fileName: 'Best Practice',
                                contentType: imageData.type,
                                content: readBaseResult,
                                contentData: readTextResult,
                            };
                            resolve();
                            return [2 /*return*/];
                    }
                });
            }); }, function (err) {
                //    console.log('Camera issue: ' + err);
            });
        });
    };
    PhotoService.prototype.takePhoto = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var options = {
                quality: 100,
                destinationType: _this.camera.DestinationType.FILE_URI,
                sourceType: _this.camera.PictureSourceType.CAMERA,
                mediaType: _this.camera.MediaType.PICTURE,
                allowEdit: true,
                targetHeight: 600,
                targetWidth: 800,
            };
            return _this.camera.getPicture(options)
                .then(_this.readLocalFile)
                .then(function (imageData) { return __awaiter(_this, void 0, void 0, function () {
                var readBaseResult, readTextResult;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.picture = null;
                            return [4 /*yield*/, this.readBase(imageData)];
                        case 1:
                            readBaseResult = _a.sent();
                            return [4 /*yield*/, this.readText(imageData)];
                        case 2:
                            readTextResult = _a.sent();
                            this.picture = {
                                fileName: 'Best Practice',
                                contentType: imageData.type,
                                content: readBaseResult,
                                contentData: readTextResult,
                            };
                            resolve();
                            return [2 /*return*/];
                    }
                });
            }); }, function (err) {
                //      console.log('Camera issue: ' + err);
            });
        });
    };
    PhotoService.prototype.webTakePicture = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var input = document.createElement('input');
            input.type = 'file';
            input.accept = 'image/*';
            input.click();
            input.addEventListener('change', function (media) { return __awaiter(_this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    this.resize(media.target.files[0]).subscribe(function (file) { return __awaiter(_this, void 0, void 0, function () {
                        var readBaseResult, readTextResult;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    this.picture = null;
                                    return [4 /*yield*/, this.readBase(file)];
                                case 1:
                                    readBaseResult = _a.sent();
                                    return [4 /*yield*/, this.readText(file)];
                                case 2:
                                    readTextResult = _a.sent();
                                    this.picture = {
                                        fileName: file.name,
                                        contentType: file.type,
                                        content: readBaseResult,
                                        contentData: readTextResult,
                                    };
                                    resolve();
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    return [2 /*return*/];
                });
            }); });
        });
    };
    PhotoService.prototype.loadSaved = function () {
        return this.picture;
    };
    PhotoService.prototype.readLocalFile = function (fileSystemPath) {
        return new Promise(function (resolve, reject) {
            window.resolveLocalFileSystemURL(fileSystemPath, function (fileEntry) {
                fileEntry.file(resolve);
            }, function () {
                reject('Couldn\'t read selected file');
            });
        });
    };
    PhotoService.prototype.readBase = function (file) {
        return new Promise(function (resolve, reject) {
            var reader = new window.FileReader();
            reader.readAsDataURL(file);
            reader.onload = function () { return resolve(reader.result); };
            reader.onerror = function (error) { return reject(error); };
        });
    };
    PhotoService.prototype.readText = function (file) {
        return new Promise(function (resolve, reject) {
            var reader = new window.FileReader();
            reader.readAsArrayBuffer(file);
            reader.onload = function () { return resolve(reader.result); };
            reader.onerror = function (error) { return reject(error); };
        });
    };
    PhotoService.prototype.resize = function (file) {
        return this.ng2ImgMax.resizeImage(file, 60, 80);
    };
    ;
    PhotoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_1__["Camera"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"],
            ng2_img_max__WEBPACK_IMPORTED_MODULE_3__["Ng2ImgMaxService"]])
    ], PhotoService);
    return PhotoService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-upload-best-practice-upload-best-practice-module.js.map