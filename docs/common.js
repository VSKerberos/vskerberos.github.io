"use strict";
(self["webpackChunkcost_calculator"] = self["webpackChunkcost_calculator"] || []).push([[592],{

/***/ 94833:
/*!****************************************************!*\
  !*** ./src/app/pages/category/category.actions.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadAllCategories": () => (/* binding */ loadAllCategories),
/* harmony export */   "allCategoriesLoaded": () => (/* binding */ allCategoriesLoaded)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 89407);

const loadAllCategories = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)("[Categories Resolver] Load All Categories");
const allCategoriesLoaded = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)("[Load Categories Effect] All Categories Loaded", (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());

/***/ }),

/***/ 55568:
/*!*****************************************************!*\
  !*** ./src/app/pages/category/category.resolver.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoriesResolver": () => (/* binding */ CategoriesResolver)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 85029);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 84452);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 98904);
/* harmony import */ var _category_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category.actions */ 94833);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ 89407);




let CategoriesResolver = /*#__PURE__*/(() => {
  class CategoriesResolver {
    constructor(store) {
      this.store = store;
      this.loading = false;
    }

    resolve(route, state) {
      return this.store.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(() => {
        if (!this.loading) {
          this.loading = true;
          this.store.dispatch((0,_category_actions__WEBPACK_IMPORTED_MODULE_0__.loadAllCategories)());
        }
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.first)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.finalize)(() => this.loading = false));
    }

  }

  CategoriesResolver.ɵfac = function CategoriesResolver_Factory(t) {
    return new (t || CategoriesResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.Store));
  };

  CategoriesResolver.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: CategoriesResolver,
    factory: CategoriesResolver.ɵfac
  });
  return CategoriesResolver;
})();

/***/ }),

/***/ 53176:
/*!*********************************************************!*\
  !*** ./src/app/pages/material/default-dialog-config.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultDialogConfig": () => (/* binding */ defaultDialogConfig)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ 44958);

function defaultDialogConfig() {
  const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__.MatDialogConfig();
  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;
  dialogConfig.width = '85%';
  dialogConfig.height = '800px';
  return dialogConfig;
}

/***/ })

}]);
//# sourceMappingURL=common.js.map