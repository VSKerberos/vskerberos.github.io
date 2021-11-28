"use strict";
(self["webpackChunkcost_calculator"] = self["webpackChunkcost_calculator"] || []).push([[517],{

/***/ 44617:
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard/dashboard-home/dashboard-home/dashboard-home.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardHomeComponent": () => (/* binding */ DashboardHomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_core_services_fire_base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services/fire-base.service */ 13131);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ 30582);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 52529);




let DashboardHomeComponent = /*#__PURE__*/(() => {
  class DashboardHomeComponent {
    constructor(firebaseService) {
      this.firebaseService = firebaseService;
    }

    ngOnInit() {}

  }

  DashboardHomeComponent.ɵfac = function DashboardHomeComponent_Factory(t) {
    return new (t || DashboardHomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_services_fire_base_service__WEBPACK_IMPORTED_MODULE_0__.FireBaseService));
  };

  DashboardHomeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: DashboardHomeComponent,
    selectors: [["app-dashboard-home"]],
    decls: 8,
    vars: 0,
    consts: [["fxLayout", "row", "fxLayoutAlign", "center none", 1, "container"], ["fxFlex", "95%"], ["fxFlex", "50%", 1, "text-center", "no-records", "animate"]],
    template: function DashboardHomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " CTT Stand Ho\u015Fgeldiniz");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    },
    directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultFlexDirective, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon],
    styles: [".single-cards[_ngcontent-%COMP%] {\r\n    margin: 20px 0;\r\n}\r\n\r\n.single-card[_ngcontent-%COMP%]   .mat-card-avatar[_ngcontent-%COMP%] {\r\n    width: 50px;\r\n    height: 50px;\r\n}\r\n\r\n.single-card[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\r\n    font-size: 55px;\r\n}\r\n\r\n.projects-card[_ngcontent-%COMP%] > mat-card-content[_ngcontent-%COMP%] {\r\n    max-height: 400px;\r\n    overflow: auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC1ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEIiLCJmaWxlIjoiZGFzaGJvYXJkLWhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaW5nbGUtY2FyZHMge1xyXG4gICAgbWFyZ2luOiAyMHB4IDA7XHJcbn1cclxuXHJcbi5zaW5nbGUtY2FyZCAubWF0LWNhcmQtYXZhdGFyIHtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG4uc2luZ2xlLWNhcmQgLm1hdC1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogNTVweDtcclxufVxyXG5cclxuLnByb2plY3RzLWNhcmQ+bWF0LWNhcmQtY29udGVudCB7XHJcbiAgICBtYXgtaGVpZ2h0OiA0MDBweDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG59Il19 */"]
  });
  return DashboardHomeComponent;
})();

/***/ }),

/***/ 57105:
/*!***********************************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard/dashboard-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardRoutingModule": () => (/* binding */ DashboardRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _shared_layout_layout_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/layout/layout/layout.component */ 88369);
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../auth/auth.guard */ 12849);
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth/login/login.component */ 96361);
/* harmony import */ var _dashboard_home_dashboard_home_dashboard_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard-home/dashboard-home/dashboard-home.component */ 44617);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);







const routes = [{
  path: '',
  component: _shared_layout_layout_layout_component__WEBPACK_IMPORTED_MODULE_0__.LayoutComponent,
  canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard],
  children: [{
    path: '',
    component: _dashboard_home_dashboard_home_dashboard_home_component__WEBPACK_IMPORTED_MODULE_3__.DashboardHomeComponent
  }]
}, {
  path: 'auth',
  component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent
}];
let DashboardRoutingModule = /*#__PURE__*/(() => {
  class DashboardRoutingModule {}

  DashboardRoutingModule.ɵfac = function DashboardRoutingModule_Factory(t) {
    return new (t || DashboardRoutingModule)();
  };

  DashboardRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: DashboardRoutingModule
  });
  DashboardRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
  return DashboardRoutingModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](DashboardRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
})();

/***/ }),

/***/ 41517:
/*!***************************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard/dashboard.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardModule": () => (/* binding */ DashboardModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard-routing.module */ 57105);
/* harmony import */ var _dashboard_home_dashboard_home_dashboard_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard-home/dashboard-home/dashboard-home.component */ 44617);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/shared.module */ 44466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);





let DashboardModule = /*#__PURE__*/(() => {
  class DashboardModule {}

  DashboardModule.ɵfac = function DashboardModule_Factory(t) {
    return new (t || DashboardModule)();
  };

  DashboardModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: DashboardModule
  });
  DashboardModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule]]
  });
  return DashboardModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](DashboardModule, {
    declarations: [_dashboard_home_dashboard_home_dashboard_home_component__WEBPACK_IMPORTED_MODULE_1__.DashboardHomeComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=517.js.map