"use strict";
(self["webpackChunkcost_calculator"] = self["webpackChunkcost_calculator"] || []).push([[712],{

/***/ 8118:
/*!***********************************************************!*\
  !*** ./src/app/pages/category/category-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryRoutingModule": () => (/* binding */ CategoryRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _shared_layout_layout_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/layout/layout/layout.component */ 8369);
/* harmony import */ var _category_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category.component */ 6342);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);





const routes = [{
  path: '',
  component: _shared_layout_layout_layout_component__WEBPACK_IMPORTED_MODULE_0__.LayoutComponent,
  children: [{
    path: '',
    component: _category_component__WEBPACK_IMPORTED_MODULE_1__.CategoryComponent
  }]
}];
let CategoryRoutingModule = /*#__PURE__*/(() => {
  class CategoryRoutingModule {}

  CategoryRoutingModule.ɵfac = function CategoryRoutingModule_Factory(t) {
    return new (t || CategoryRoutingModule)();
  };

  CategoryRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: CategoryRoutingModule
  });
  CategoryRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
  return CategoryRoutingModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CategoryRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 6342:
/*!******************************************************!*\
  !*** ./src/app/pages/category/category.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryComponent": () => (/* binding */ CategoryComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

let CategoryComponent = /*#__PURE__*/(() => {
  class CategoryComponent {
    constructor() {}

    ngOnInit() {}

  }

  CategoryComponent.ɵfac = function CategoryComponent_Factory(t) {
    return new (t || CategoryComponent)();
  };

  CategoryComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: CategoryComponent,
    selectors: [["app-category"]],
    decls: 2,
    vars: 0,
    template: function CategoryComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "category works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXRlZ29yeS5jb21wb25lbnQuY3NzIn0= */"]
  });
  return CategoryComponent;
})();

/***/ }),

/***/ 8712:
/*!***************************************************!*\
  !*** ./src/app/pages/category/category.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryModule": () => (/* binding */ CategoryModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ 4466);
/* harmony import */ var _category_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category.component */ 6342);
/* harmony import */ var _category_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./category-routing.module */ 8118);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);





let CategoryModule = /*#__PURE__*/(() => {
  class CategoryModule {}

  CategoryModule.ɵfac = function CategoryModule_Factory(t) {
    return new (t || CategoryModule)();
  };

  CategoryModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: CategoryModule
  });
  CategoryModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _category_routing_module__WEBPACK_IMPORTED_MODULE_2__.CategoryRoutingModule]]
  });
  return CategoryModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](CategoryModule, {
    declarations: [_category_component__WEBPACK_IMPORTED_MODULE_1__.CategoryComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _category_routing_module__WEBPACK_IMPORTED_MODULE_2__.CategoryRoutingModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=712.js.map