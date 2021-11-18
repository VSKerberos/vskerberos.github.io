"use strict";
(self["webpackChunkcost_calculator"] = self["webpackChunkcost_calculator"] || []).push([[627],{

/***/ 49816:
/*!*************************************************************************!*\
  !*** ./node_modules/ngx-currency/__ivy_ngcc__/fesm2015/ngx-currency.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CURRENCYMASKDIRECTIVE_VALUE_ACCESSOR": () => (/* binding */ CURRENCYMASKDIRECTIVE_VALUE_ACCESSOR),
/* harmony export */   "CURRENCY_MASK_CONFIG": () => (/* binding */ CURRENCY_MASK_CONFIG),
/* harmony export */   "CurrencyMaskDirective": () => (/* binding */ CurrencyMaskDirective),
/* harmony export */   "CurrencyMaskInputMode": () => (/* binding */ CurrencyMaskInputMode),
/* harmony export */   "NgxCurrencyModule": () => (/* binding */ NgxCurrencyModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 54364);




var CurrencyMaskInputMode = /*#__PURE__*/(() => {
  (function (CurrencyMaskInputMode) {
    CurrencyMaskInputMode[CurrencyMaskInputMode["FINANCIAL"] = 0] = "FINANCIAL";
    CurrencyMaskInputMode[CurrencyMaskInputMode["NATURAL"] = 1] = "NATURAL";
  })(CurrencyMaskInputMode || (CurrencyMaskInputMode = {}));

  return CurrencyMaskInputMode;
})();
let CURRENCY_MASK_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken("currency.mask.config");

class InputManager {
  constructor(htmlInputElement) {
    this.htmlInputElement = htmlInputElement;
  }

  setCursorAt(position) {
    if (this.htmlInputElement.setSelectionRange) {
      this.htmlInputElement.focus();
      this.htmlInputElement.setSelectionRange(position, position);
    } else if (this.htmlInputElement.createTextRange) {
      let textRange = this.htmlInputElement.createTextRange();
      textRange.collapse(true);
      textRange.moveEnd("character", position);
      textRange.moveStart("character", position);
      textRange.select();
    }
  }

  updateValueAndCursor(newRawValue, oldLength, selectionStart) {
    this.rawValue = newRawValue;
    let newLength = newRawValue.length;
    selectionStart = selectionStart - (oldLength - newLength);
    this.setCursorAt(selectionStart);
  }

  get canInputMoreNumbers() {
    let onlyNumbers = this.rawValue.replace(/[^0-9\u0660-\u0669\u06F0-\u06F9]/g, "");
    let haventReachedMaxLength = !(onlyNumbers.length >= this.htmlInputElement.maxLength && this.htmlInputElement.maxLength >= 0);
    let selectionStart = this.inputSelection.selectionStart;
    let selectionEnd = this.inputSelection.selectionEnd;
    let haveNumberSelected = !!(selectionStart != selectionEnd && this.htmlInputElement.value.substring(selectionStart, selectionEnd).match(/[^0-9\u0660-\u0669\u06F0-\u06F9]/));
    let startWithZero = this.htmlInputElement.value.substring(0, 1) == "0";
    return haventReachedMaxLength || haveNumberSelected || startWithZero;
  }

  get inputSelection() {
    let selectionStart = 0;
    let selectionEnd = 0;

    if (typeof this.htmlInputElement.selectionStart == "number" && typeof this.htmlInputElement.selectionEnd == "number") {
      selectionStart = this.htmlInputElement.selectionStart;
      selectionEnd = this.htmlInputElement.selectionEnd;
    } else {
      let range = document.selection.createRange();

      if (range && range.parentElement() == this.htmlInputElement) {
        let lenght = this.htmlInputElement.value.length;
        let normalizedValue = this.htmlInputElement.value.replace(/\r\n/g, "\n");
        let startRange = this.htmlInputElement.createTextRange();
        startRange.moveToBookmark(range.getBookmark());
        let endRange = this.htmlInputElement.createTextRange();
        endRange.collapse(false);

        if (startRange.compareEndPoints("StartToEnd", endRange) > -1) {
          selectionStart = selectionEnd = lenght;
        } else {
          selectionStart = -startRange.moveStart("character", -lenght);
          selectionStart += normalizedValue.slice(0, selectionStart).split("\n").length - 1;

          if (startRange.compareEndPoints("EndToEnd", endRange) > -1) {
            selectionEnd = lenght;
          } else {
            selectionEnd = -startRange.moveEnd("character", -lenght);
            selectionEnd += normalizedValue.slice(0, selectionEnd).split("\n").length - 1;
          }
        }
      }
    }

    return {
      selectionStart: selectionStart,
      selectionEnd: selectionEnd
    };
  }

  get rawValue() {
    return this.htmlInputElement && this.htmlInputElement.value;
  }

  set rawValue(value) {
    this._storedRawValue = value;

    if (this.htmlInputElement) {
      this.htmlInputElement.value = value;
    }
  }

  get storedRawValue() {
    return this._storedRawValue || '';
  }

}

class InputService {
  constructor(htmlInputElement, options) {
    this.htmlInputElement = htmlInputElement;
    this.options = options;
    this.SINGLE_DIGIT_REGEX = new RegExp(/^[0-9\u0660-\u0669\u06F0-\u06F9]$/);
    this.ONLY_NUMBERS_REGEX = new RegExp(/[^0-9\u0660-\u0669\u06F0-\u06F9]/g);
    this.PER_AR_NUMBER = new Map();
    this.inputManager = new InputManager(htmlInputElement);
    this.initialize();
  }

  initialize() {
    this.PER_AR_NUMBER.set("\u06F0", "0");
    this.PER_AR_NUMBER.set("\u06F1", "1");
    this.PER_AR_NUMBER.set("\u06F2", "2");
    this.PER_AR_NUMBER.set("\u06F3", "3");
    this.PER_AR_NUMBER.set("\u06F4", "4");
    this.PER_AR_NUMBER.set("\u06F5", "5");
    this.PER_AR_NUMBER.set("\u06F6", "6");
    this.PER_AR_NUMBER.set("\u06F7", "7");
    this.PER_AR_NUMBER.set("\u06F8", "8");
    this.PER_AR_NUMBER.set("\u06F9", "9");
    this.PER_AR_NUMBER.set("\u0660", "0");
    this.PER_AR_NUMBER.set("\u0661", "1");
    this.PER_AR_NUMBER.set("\u0662", "2");
    this.PER_AR_NUMBER.set("\u0663", "3");
    this.PER_AR_NUMBER.set("\u0664", "4");
    this.PER_AR_NUMBER.set("\u0665", "5");
    this.PER_AR_NUMBER.set("\u0666", "6");
    this.PER_AR_NUMBER.set("\u0667", "7");
    this.PER_AR_NUMBER.set("\u0668", "8");
    this.PER_AR_NUMBER.set("\u0669", "9");
  }

  addNumber(keyCode) {
    const {
      decimal,
      precision,
      inputMode
    } = this.options;
    let keyChar = String.fromCharCode(keyCode);
    const isDecimalChar = keyChar === this.options.decimal;

    if (!this.rawValue) {
      this.rawValue = this.applyMask(false, keyChar);
      let selectionStart = undefined;

      if (inputMode === CurrencyMaskInputMode.NATURAL && precision > 0) {
        selectionStart = this.rawValue.indexOf(decimal);

        if (isDecimalChar) {
          selectionStart++;
        }
      }

      this.updateFieldValue(selectionStart);
    } else {
      let selectionStart = this.inputSelection.selectionStart;
      let selectionEnd = this.inputSelection.selectionEnd;
      const rawValueStart = this.rawValue.substring(0, selectionStart);
      let rawValueEnd = this.rawValue.substring(selectionEnd, this.rawValue.length); // In natural mode, replace decimals instead of shifting them.

      const inDecimalPortion = rawValueStart.indexOf(decimal) !== -1;

      if (inputMode === CurrencyMaskInputMode.NATURAL && inDecimalPortion && selectionStart === selectionEnd) {
        rawValueEnd = rawValueEnd.substring(1);
      }

      const newValue = rawValueStart + keyChar + rawValueEnd;
      let nextSelectionStart = selectionStart + 1;
      const isDecimalOrThousands = isDecimalChar || keyChar === this.options.thousands;

      if (isDecimalOrThousands && keyChar === rawValueEnd[0]) {
        // If the cursor is just before the decimal or thousands separator and the user types the
        // decimal or thousands separator, move the cursor past it.
        nextSelectionStart++;
      } else if (!this.SINGLE_DIGIT_REGEX.test(keyChar)) {
        // Ignore other non-numbers.
        return;
      }

      this.rawValue = newValue;
      this.updateFieldValue(nextSelectionStart);
    }
  }

  applyMask(isNumber, rawValue, disablePadAndTrim = false) {
    let {
      allowNegative,
      decimal,
      precision,
      prefix,
      suffix,
      thousands,
      min,
      max,
      inputMode
    } = this.options;
    rawValue = isNumber ? new Number(rawValue).toFixed(precision) : rawValue;
    let onlyNumbers = rawValue.replace(this.ONLY_NUMBERS_REGEX, "");

    if (!onlyNumbers && rawValue !== decimal) {
      return "";
    }

    if (inputMode === CurrencyMaskInputMode.NATURAL && !isNumber && !disablePadAndTrim) {
      rawValue = this.padOrTrimPrecision(rawValue);
      onlyNumbers = rawValue.replace(this.ONLY_NUMBERS_REGEX, "");
    }

    let integerPart = onlyNumbers.slice(0, onlyNumbers.length - precision).replace(/^\u0660*/g, "").replace(/^\u06F0*/g, "").replace(/^0*/g, "");

    if (integerPart == "") {
      integerPart = "0";
    }

    let integerValue = parseInt(integerPart);
    integerPart = integerPart.replace(/\B(?=([0-9\u0660-\u0669\u06F0-\u06F9]{3})+(?![0-9\u0660-\u0669\u06F0-\u06F9]))/g, thousands);

    if (thousands && integerPart.startsWith(thousands)) {
      integerPart = integerPart.substring(1);
    }

    let newRawValue = integerPart;
    let decimalPart = onlyNumbers.slice(onlyNumbers.length - precision);
    let decimalValue = parseInt(decimalPart) || 0;
    let isNegative = rawValue.indexOf("-") > -1; // Ensure max is at least as large as min.

    max = this.isNullOrUndefined(max) || this.isNullOrUndefined(min) ? max : Math.max(max, min); // Ensure precision number works well with more than 2 digits
    // 23 / 100... 233 / 1000 and so on

    const divideBy = Number('1'.padEnd(precision + 1, '0')); // Restrict to the min and max values.

    let newValue = integerValue + decimalValue / divideBy;
    newValue = isNegative ? -newValue : newValue;

    if (!this.isNullOrUndefined(max) && newValue > max) {
      return this.applyMask(true, max + '');
    } else if (!this.isNullOrUndefined(min) && newValue < min) {
      return this.applyMask(true, min + '');
    }

    if (precision > 0) {
      if (newRawValue == "0" && decimalPart.length < precision) {
        newRawValue += decimal + "0".repeat(precision - 1) + decimalPart;
      } else {
        newRawValue += decimal + decimalPart;
      }
    }

    let isZero = newValue == 0;
    let operator = isNegative && allowNegative && !isZero ? "-" : "";
    return operator + prefix + newRawValue + suffix;
  }

  padOrTrimPrecision(rawValue) {
    let {
      decimal,
      precision
    } = this.options;
    let decimalIndex = rawValue.lastIndexOf(decimal);

    if (decimalIndex === -1) {
      decimalIndex = rawValue.length;
      rawValue += decimal;
    }

    let decimalPortion = rawValue.substring(decimalIndex).replace(this.ONLY_NUMBERS_REGEX, "");
    const actualPrecision = decimalPortion.length;

    if (actualPrecision < precision) {
      for (let i = actualPrecision; i < precision; i++) {
        decimalPortion += '0';
      }
    } else if (actualPrecision > precision) {
      decimalPortion = decimalPortion.substring(0, decimalPortion.length + precision - actualPrecision);
    }

    return rawValue.substring(0, decimalIndex) + decimal + decimalPortion;
  }

  clearMask(rawValue) {
    if (this.isNullable() && rawValue === "") return null;
    let value = (rawValue || "0").replace(this.options.prefix, "").replace(this.options.suffix, "");

    if (this.options.thousands) {
      value = value.replace(new RegExp("\\" + this.options.thousands, "g"), "");
    }

    if (this.options.decimal) {
      value = value.replace(this.options.decimal, ".");
    }

    this.PER_AR_NUMBER.forEach((val, key) => {
      const re = new RegExp(key, "g");
      value = value.replace(re, val);
    });
    return parseFloat(value);
  }

  changeToNegative() {
    if (this.options.allowNegative && this.rawValue != "" && this.rawValue.charAt(0) != "-" && this.value != 0) {
      // Apply the mask to ensure the min and max values are enforced.
      this.rawValue = this.applyMask(false, "-" + this.rawValue);
    }
  }

  changeToPositive() {
    // Apply the mask to ensure the min and max values are enforced.
    this.rawValue = this.applyMask(false, this.rawValue.replace("-", ""));
  }

  removeNumber(keyCode) {
    let {
      decimal,
      thousands,
      prefix,
      suffix,
      inputMode
    } = this.options;

    if (this.isNullable() && this.value == 0) {
      this.rawValue = null;
      return;
    }

    let selectionEnd = this.inputSelection.selectionEnd;
    let selectionStart = this.inputSelection.selectionStart;
    const suffixStart = this.rawValue.length - suffix.length;
    selectionEnd = Math.min(suffixStart, Math.max(selectionEnd, prefix.length));
    selectionStart = Math.min(suffixStart, Math.max(selectionStart, prefix.length)); // Check if selection was entirely in the prefix or suffix. 

    if (selectionStart === selectionEnd && this.inputSelection.selectionStart !== this.inputSelection.selectionEnd) {
      this.updateFieldValue(selectionStart);
      return;
    }

    let decimalIndex = this.rawValue.indexOf(decimal);

    if (decimalIndex === -1) {
      decimalIndex = this.rawValue.length;
    }

    let shiftSelection = 0;
    let insertChars = '';
    const isCursorInDecimals = decimalIndex < selectionEnd;
    const isCursorImmediatelyAfterDecimalPoint = decimalIndex + 1 === selectionEnd;

    if (selectionEnd === selectionStart) {
      if (keyCode == 8) {
        if (selectionStart <= prefix.length) {
          return;
        }

        selectionStart--; // If previous char isn't a number, go back one more.

        if (!this.rawValue.substr(selectionStart, 1).match(/\d/)) {
          selectionStart--;
        } // In natural mode, jump backwards when in decimal portion of number.


        if (inputMode === CurrencyMaskInputMode.NATURAL && isCursorInDecimals) {
          shiftSelection = -1; // when removing a single whole number, replace it with 0

          if (isCursorImmediatelyAfterDecimalPoint && this.value < 10 && this.value > -10) {
            insertChars += '0';
          }
        }
      } else if (keyCode == 46 || keyCode == 63272) {
        if (selectionStart === suffixStart) {
          return;
        }

        selectionEnd++; // If next char isn't a number, go one more.

        if (!this.rawValue.substr(selectionStart, 1).match(/\d/)) {
          selectionStart++;
          selectionEnd++;
        }
      }
    } // In natural mode, replace decimals with 0s.


    if (inputMode === CurrencyMaskInputMode.NATURAL && selectionStart > decimalIndex) {
      const replacedDecimalCount = selectionEnd - selectionStart;

      for (let i = 0; i < replacedDecimalCount; i++) {
        insertChars += '0';
      }
    }

    let selectionFromEnd = this.rawValue.length - selectionEnd;
    this.rawValue = this.rawValue.substring(0, selectionStart) + insertChars + this.rawValue.substring(selectionEnd); // Remove leading thousand separator from raw value.

    const startChar = this.rawValue.substr(prefix.length, 1);

    if (startChar === thousands) {
      this.rawValue = this.rawValue.substring(0, prefix.length) + this.rawValue.substring(prefix.length + 1);
      selectionFromEnd = Math.min(selectionFromEnd, this.rawValue.length - prefix.length);
    }

    this.updateFieldValue(this.rawValue.length - selectionFromEnd + shiftSelection, true);
  }

  updateFieldValue(selectionStart, disablePadAndTrim = false) {
    let newRawValue = this.applyMask(false, this.rawValue || "", disablePadAndTrim);
    selectionStart = selectionStart == undefined ? this.rawValue.length : selectionStart;
    selectionStart = Math.max(this.options.prefix.length, Math.min(selectionStart, this.rawValue.length - this.options.suffix.length));
    this.inputManager.updateValueAndCursor(newRawValue, this.rawValue.length, selectionStart);
  }

  updateOptions(options) {
    let value = this.value;
    this.options = options;
    this.value = value;
  }

  prefixLength() {
    return this.options.prefix.length;
  }

  suffixLength() {
    return this.options.suffix.length;
  }

  isNullable() {
    return this.options.nullable;
  }

  get canInputMoreNumbers() {
    return this.inputManager.canInputMoreNumbers;
  }

  get inputSelection() {
    return this.inputManager.inputSelection;
  }

  get rawValue() {
    return this.inputManager.rawValue;
  }

  set rawValue(value) {
    this.inputManager.rawValue = value;
  }

  get storedRawValue() {
    return this.inputManager.storedRawValue;
  }

  get value() {
    return this.clearMask(this.rawValue);
  }

  set value(value) {
    this.rawValue = this.applyMask(true, "" + value);
  }

  isNullOrUndefined(value) {
    return value === null || value === undefined;
  }

}

class InputHandler {
  constructor(htmlInputElement, options) {
    this.inputService = new InputService(htmlInputElement, options);
  }

  handleCut(event) {
    setTimeout(() => {
      this.inputService.updateFieldValue();
      this.setValue(this.inputService.value);
      this.onModelChange(this.inputService.value);
    }, 0);
  }

  handleInput(event) {
    let selectionStart = this.inputService.inputSelection.selectionStart;
    let keyCode = this.inputService.rawValue.charCodeAt(selectionStart - 1);
    let rawValueLength = this.inputService.rawValue.length;
    let storedRawValueLength = this.inputService.storedRawValue.length;

    if (Math.abs(rawValueLength - storedRawValueLength) != 1) {
      this.inputService.updateFieldValue(selectionStart);
      this.onModelChange(this.inputService.value);
      return;
    } // Restore the old value.


    this.inputService.rawValue = this.inputService.storedRawValue;

    if (rawValueLength < storedRawValueLength) {
      // Chrome Android seems to move the cursor in response to a backspace AFTER processing the
      // input event, so we need to wrap this in a timeout.
      this.timer(() => {
        // Move the cursor to just after the deleted value.
        this.inputService.updateFieldValue(selectionStart + 1); // Then backspace it.

        this.inputService.removeNumber(8);
        this.onModelChange(this.inputService.value);
      }, 0);
    }

    if (rawValueLength > storedRawValueLength) {
      // Move the cursor to just before the new value.
      this.inputService.updateFieldValue(selectionStart - 1); // Process the character like a keypress.

      this.handleKeypressImpl(keyCode);
    }
  }

  handleKeydown(event) {
    let keyCode = event.which || event.charCode || event.keyCode;

    if (keyCode == 8 || keyCode == 46 || keyCode == 63272) {
      event.preventDefault();

      if (this.inputService.inputSelection.selectionStart <= this.inputService.prefixLength() && this.inputService.inputSelection.selectionEnd >= this.inputService.rawValue.length - this.inputService.suffixLength()) {
        this.clearValue();
      } else {
        this.inputService.removeNumber(keyCode);
        this.onModelChange(this.inputService.value);
      }
    }
  }

  clearValue() {
    this.setValue(this.inputService.isNullable() ? null : 0);
    this.onModelChange(this.inputService.value);
  }

  handleKeypress(event) {
    let keyCode = event.which || event.charCode || event.keyCode;
    event.preventDefault();

    if (keyCode === 97 && event.ctrlKey) {
      return;
    }

    this.handleKeypressImpl(keyCode);
  }

  handleKeypressImpl(keyCode) {
    switch (keyCode) {
      case undefined:
      case 9:
      case 13:
        return;

      case 43:
        this.inputService.changeToPositive();
        break;

      case 45:
        this.inputService.changeToNegative();
        break;

      default:
        if (this.inputService.canInputMoreNumbers) {
          let selectionRangeLength = Math.abs(this.inputService.inputSelection.selectionEnd - this.inputService.inputSelection.selectionStart);

          if (selectionRangeLength == this.inputService.rawValue.length) {
            this.setValue(null);
          }

          this.inputService.addNumber(keyCode);
        }

        break;
    }

    this.onModelChange(this.inputService.value);
  }

  handlePaste(event) {
    setTimeout(() => {
      this.inputService.updateFieldValue();
      this.setValue(this.inputService.value);
      this.onModelChange(this.inputService.value);
    }, 1);
  }

  updateOptions(options) {
    this.inputService.updateOptions(options);
  }

  getOnModelChange() {
    return this.onModelChange;
  }

  setOnModelChange(callbackFunction) {
    this.onModelChange = callbackFunction;
  }

  getOnModelTouched() {
    return this.onModelTouched;
  }

  setOnModelTouched(callbackFunction) {
    this.onModelTouched = callbackFunction;
  }

  setValue(value) {
    this.inputService.value = value;
  }
  /**
   * Passthrough to setTimeout that can be stubbed out in tests.
   */


  timer(callback, delayMillis) {
    setTimeout(callback, delayMillis);
  }

}

const CURRENCYMASKDIRECTIVE_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
  useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => CurrencyMaskDirective),
  multi: true
};
let CurrencyMaskDirective = /*#__PURE__*/(() => {
  class CurrencyMaskDirective {
    constructor(currencyMaskConfig, elementRef, keyValueDiffers) {
      this.currencyMaskConfig = currencyMaskConfig;
      this.elementRef = elementRef;
      this.keyValueDiffers = keyValueDiffers;
      this.options = {};
      this.optionsTemplate = {
        align: "right",
        allowNegative: true,
        allowZero: true,
        decimal: ".",
        precision: 2,
        prefix: "$ ",
        suffix: "",
        thousands: ",",
        nullable: false,
        inputMode: CurrencyMaskInputMode.FINANCIAL
      };

      if (currencyMaskConfig) {
        this.optionsTemplate = currencyMaskConfig;
      }

      this.keyValueDiffer = keyValueDiffers.find({}).create();
    }

    ngAfterViewInit() {
      this.elementRef.nativeElement.style.textAlign = this.options && this.options.align ? this.options.align : this.optionsTemplate.align;
    }

    ngDoCheck() {
      if (this.keyValueDiffer.diff(this.options)) {
        this.elementRef.nativeElement.style.textAlign = this.options.align ? this.options.align : this.optionsTemplate.align;
        this.inputHandler.updateOptions(Object.assign({}, this.optionsTemplate, this.options));
      }
    }

    ngOnInit() {
      this.inputHandler = new InputHandler(this.elementRef.nativeElement, Object.assign({}, this.optionsTemplate, this.options));
    }

    handleBlur(event) {
      this.inputHandler.getOnModelTouched().apply(event);
    }

    handleCut(event) {
      if (!this.isChromeAndroid()) {
        !this.isReadOnly() && this.inputHandler.handleCut(event);
      }
    }

    handleInput(event) {
      if (this.isChromeAndroid()) {
        !this.isReadOnly() && this.inputHandler.handleInput(event);
      }
    }

    handleKeydown(event) {
      if (!this.isChromeAndroid()) {
        !this.isReadOnly() && this.inputHandler.handleKeydown(event);
      }
    }

    handleKeypress(event) {
      if (!this.isChromeAndroid()) {
        !this.isReadOnly() && this.inputHandler.handleKeypress(event);
      }
    }

    handlePaste(event) {
      if (!this.isChromeAndroid()) {
        !this.isReadOnly() && this.inputHandler.handlePaste(event);
      }
    }

    handleDrop(event) {
      if (!this.isChromeAndroid()) {
        event.preventDefault();
      }
    }

    isChromeAndroid() {
      return /chrome/i.test(navigator.userAgent) && /android/i.test(navigator.userAgent);
    }

    isReadOnly() {
      return this.elementRef.nativeElement.hasAttribute('readonly');
    }

    registerOnChange(callbackFunction) {
      this.inputHandler.setOnModelChange(callbackFunction);
    }

    registerOnTouched(callbackFunction) {
      this.inputHandler.setOnModelTouched(callbackFunction);
    }

    setDisabledState(value) {
      this.elementRef.nativeElement.disabled = value;
    }

    writeValue(value) {
      this.inputHandler.setValue(value);
    }

  }

  CurrencyMaskDirective.ɵfac = function CurrencyMaskDirective_Factory(t) {
    return new (t || CurrencyMaskDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CURRENCY_MASK_CONFIG, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.KeyValueDiffers));
  };

  CurrencyMaskDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: CurrencyMaskDirective,
    selectors: [["", "currencyMask", ""]],
    hostBindings: function CurrencyMaskDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function CurrencyMaskDirective_blur_HostBindingHandler($event) {
          return ctx.handleBlur($event);
        })("cut", function CurrencyMaskDirective_cut_HostBindingHandler($event) {
          return ctx.handleCut($event);
        })("input", function CurrencyMaskDirective_input_HostBindingHandler($event) {
          return ctx.handleInput($event);
        })("keydown", function CurrencyMaskDirective_keydown_HostBindingHandler($event) {
          return ctx.handleKeydown($event);
        })("keypress", function CurrencyMaskDirective_keypress_HostBindingHandler($event) {
          return ctx.handleKeypress($event);
        })("paste", function CurrencyMaskDirective_paste_HostBindingHandler($event) {
          return ctx.handlePaste($event);
        })("drop", function CurrencyMaskDirective_drop_HostBindingHandler($event) {
          return ctx.handleDrop($event);
        });
      }
    },
    inputs: {
      options: "options"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([CURRENCYMASKDIRECTIVE_VALUE_ACCESSOR])]
  });
  return CurrencyMaskDirective;
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

let NgxCurrencyModule = /*#__PURE__*/(() => {
  class NgxCurrencyModule {
    static forRoot(config) {
      return {
        ngModule: NgxCurrencyModule,
        providers: [{
          provide: CURRENCY_MASK_CONFIG,
          useValue: config
        }]
      };
    }

  }

  NgxCurrencyModule.ɵfac = function NgxCurrencyModule_Factory(t) {
    return new (t || NgxCurrencyModule)();
  };

  NgxCurrencyModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: NgxCurrencyModule
  });
  NgxCurrencyModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule]]
  });
  return NgxCurrencyModule;
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgxCurrencyModule, {
    declarations: function () {
      return [CurrencyMaskDirective];
    },
    imports: function () {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule];
    },
    exports: function () {
      return [CurrencyMaskDirective];
    }
  });
})();
/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 79258:
/*!***************************************************************************!*\
  !*** ./src/app/pages/material/material-entry/material-entry.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialEntryComponent": () => (/* binding */ MaterialEntryComponent),
/* harmony export */   "MyErrorStateMatcher": () => (/* binding */ MyErrorStateMatcher)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 22213);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_core_services_fire_base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services/fire-base.service */ 13131);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ 30582);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ 42118);
/* harmony import */ var _shared_components_text_input_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/text-input.component */ 43494);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 65788);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ 37007);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 64742);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/datepicker */ 42937);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 70781);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ 32220);

















function MaterialEntryComponent_mat_option_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const cat_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", cat_r2.categoryid);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", cat_r2.title, " ");
  }
}

let MaterialEntryComponent = /*#__PURE__*/(() => {
  class MaterialEntryComponent {
    constructor(firebaseService, fb, data, dialogRef) {
      this.firebaseService = firebaseService;
      this.fb = fb;
      this.dialogRef = dialogRef;
      this.matcher = new MyErrorStateMatcher();
      this.dialogTitle = data.dialogTitle;
      this.material = data.material;
      this.mode = data.mode;
      this.recordId = data.recordId;

      if (this.mode == 'update') {
        this.reactiveForm();
        console.log('@@@@@@:' + this.material.operationdate);
        /*
        this.materialForm.get("name").patchValue(data.material.payload.doc.data().name);
        this.materialForm.get("name").setValue("1");
        console.log(     this.materialForm.get("name"));
        this.materialForm.controls.name.setValue(data.material.payload.doc.data().name);
        this.materialForm.controls['name'].patchValue(data.material.payload.doc.data().name);
        console.log("dasdasd:"+data.material.payload.doc.data().name);
        
        */

        this.materialForm.patchValue({
          name: this.material.name
        });
        this.materialForm.patchValue({
          unit: this.material.unit
        });
        this.materialForm.patchValue({
          price: data.material.price
        });
        this.materialForm.patchValue({
          remarks: data.material.remarks
        });

        if (this.material.operationdate) {
          let s = this.material.operationdate.split('/');
          this.yourDate = new Date(Number(s[2]), Number(s[1]) - 1, Number(s[0]));
        }

        this.materialForm.get('operationdate').patchValue(this.yourDate);
        this.materialForm.get('groups').patchValue(this.material.groupcode);
      } else if (this.mode = 'create') {
        this.reactiveForm();
        this.mystartDate = new Date();
        const stringDate = `${this.mystartDate.getDate()}/${this.mystartDate.getMonth() + 1}/${this.mystartDate.getFullYear()}`;
      } //data.material.payload.doc.data().name

    }

    ngOnInit() {
      //  this.reactiveForm();
      this.getCategories();
    }

    reactiveForm() {
      this.materialForm = this.fb.group({
        name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(50)]],
        unit: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
        price: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
        remarks: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
        groups: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
        operationdate: [Date, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
      });
    }

    submitForm() {
      let t = this.materialForm.get('groups').value;
      let currentdate = this.materialForm.get('operationdate').value;
      let nn = new Date(currentdate.getFullYear(), currentdate.getMonth() + 1, currentdate.getDate());
      const stringDate = `${currentdate.getDate()}/${currentdate.getMonth() + 1}/${currentdate.getFullYear()}`;
      this.localMaterial = {
        name: this.materialForm.get('name').value,
        unit: this.materialForm.get('unit').value,
        price: this.materialForm.get('price').value,
        operationdate: stringDate,
        groupcode: t,
        remarks: this.materialForm.get('remarks').value,
        orderno: 1
      };
      let s = this.materialForm.get('operationdate').value;
      console.log('operationdate: ' + stringDate);

      if (this.mode == 'create') {
        this.firebaseService.addMaterial(this.localMaterial).catch(error => {
          console.log(error);
        });
      } else if (this.mode == 'update') {
        var number = this.materialForm.value;
        console.log(new Intl.NumberFormat('de-DE', {
          style: 'currency',
          currency: 'TRY'
        }).format(number));
        this.firebaseService.updateMaterial(this.localMaterial, this.recordId).catch(error => {
          console.log(error);
        });
      }

      this.materialForm.reset();
      this.materialForm.markAsPristine();
      this.materialForm.markAsUntouched();
      this.dialogRef.close([]);
    }

    cancel() {
      this.materialForm.reset();
      this.materialForm.markAsPristine();
      this.materialForm.markAsUntouched();
    }

    onClose() {
      this.materialForm.reset();
      this.dialogRef.close([]);
    }

    getCategories() {
      this.firebaseService.getCategories();
      this.firebaseService.categories$.subscribe(categories => {
        this.categoryArr = categories;
      });
    }

  }

  MaterialEntryComponent.ɵfac = function MaterialEntryComponent_Factory(t) {
    return new (t || MaterialEntryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_services_fire_base_service__WEBPACK_IMPORTED_MODULE_0__.FireBaseService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef));
  };

  MaterialEntryComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: MaterialEntryComponent,
    selectors: [["app-material-entry"]],
    decls: 43,
    vars: 24,
    consts: [["fxLayout", "row", "fxLayoutAlign", "center none", 1, "container"], ["fxFlex", "95%"], ["autocomplete", "off", 3, "formGroup", "ngSubmit"], ["mat-dialog-title", ""], [1, "row"], [3, "formControl", "label", "error", "minlength", "maxlength"], [3, "formControl", "label", "error", "maxlength"], [3, "formControl", "label", "error", "maxlength", "type"], [3, "formControl", "label", "error"], ["formControlName", "groups", 3, "errorStateMatcher"], [3, "value", 4, "ngFor", "ngForOf"], ["appearance", "outline"], ["formControlName", "operationdate", "matInput", "", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker", ""], ["color", "primary", "mat-raised-button", "", 3, "disabled"], ["color", "secondary", "mat-raised-button", "", 3, "click"], [3, "value"]],
    template: function MaterialEntryComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function MaterialEntryComponent_Template_form_ngSubmit_3_listener() {
          return ctx.materialForm.valid && ctx.submitForm();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "app-text-input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "app-text-input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "app-text-input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "app-text-input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Kategori ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "mat-select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, MaterialEntryComponent_mat_option_27_Template, 2, 2, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Kay\u0131t Tarihi");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "mat-datepicker-toggle", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "mat-datepicker", null, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, " Kaydet ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MaterialEntryComponent_Template_button_click_39_listener() {
          return ctx.cancel();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, " Temizle ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MaterialEntryComponent_Template_button_click_41_listener() {
          return ctx.onClose();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, " Kapat ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](35);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.materialForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.dialogTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.materialForm.controls["name"])("label", "malzeme ad\u0131")("error", "L\u00FCtfen malzeme ad\u0131 giriniz")("minlength", "3")("maxlength", "40");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.materialForm.controls["unit"])("label", "birimi")("error", "L\u00FCtfen birimi giriniz")("maxlength", "40");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.materialForm.controls["price"])("label", "fiyat")("error", "L\u00FCtfen fiyat giriniz")("maxlength", "40")("type", "tel");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.materialForm.controls["remarks"])("label", "a\u00E7\u0131klama")("error", "L\u00FCtfen a\u00E7\u0131klama giriniz");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("errorStateMatcher", ctx.matcher);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.categoryArr);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matDatepicker", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("for", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.materialForm.valid);
      }
    },
    directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogContent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__.DefaultFlexDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardContent, _shared_components_text_input_component__WEBPACK_IMPORTED_MODULE_1__.TextInputComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MaxLengthValidator, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_8__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__.MatDatepickerToggle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatSuffix, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__.MatDatepicker, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatOption],
    encapsulation: 2
  });
  return MaterialEntryComponent;
})();
class MyErrorStateMatcher {
  isErrorState(control, form) {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }

}

/***/ }),

/***/ 27601:
/*!***********************************************************!*\
  !*** ./src/app/pages/material/material-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialRoutingModule": () => (/* binding */ MaterialRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _shared_layout_layout_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/layout/layout/layout.component */ 88369);
/* harmony import */ var _material_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./material.component */ 40933);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);





const routes = [{
  path: '',
  component: _shared_layout_layout_layout_component__WEBPACK_IMPORTED_MODULE_0__.LayoutComponent,
  children: [{
    path: '',
    component: _material_component__WEBPACK_IMPORTED_MODULE_1__.MaterialComponent
  }]
}];
let MaterialRoutingModule = /*#__PURE__*/(() => {
  class MaterialRoutingModule {}

  MaterialRoutingModule.ɵfac = function MaterialRoutingModule_Factory(t) {
    return new (t || MaterialRoutingModule)();
  };

  MaterialRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: MaterialRoutingModule
  });
  MaterialRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
  return MaterialRoutingModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MaterialRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 40933:
/*!******************************************************!*\
  !*** ./src/app/pages/material/material.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialComponent": () => (/* binding */ MaterialComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 25160);
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/internal/operators */ 68470);
/* harmony import */ var _default_dialog_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default-dialog-config */ 39191);
/* harmony import */ var _material_entry_material_entry_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./material-entry/material-entry.component */ 79258);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_core_services_fire_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/fire-base.service */ 13131);
/* harmony import */ var src_app_core_spinner_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/spinner.service */ 53066);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 22213);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/flex */ 30582);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 70781);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 52529);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/table */ 54302);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tooltip */ 50298);
/* harmony import */ var _shared_pipes_categorytext_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/pipes/categorytext.pipe */ 48205);















function MaterialComponent_th_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Grup ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function MaterialComponent_td_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "categoryName");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, element_r16), " ");
  }
}

function MaterialComponent_th_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Ad\u0131 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function MaterialComponent_td_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", element_r17.name, " ");
  }
}

function MaterialComponent_th_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Birimi ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function MaterialComponent_td_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", element_r18.unit, " ");
  }
}

function MaterialComponent_th_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Tarih ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function MaterialComponent_td_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", element_r19.operationdate, " ");
  }
}

function MaterialComponent_th_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Fiyat ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function MaterialComponent_td_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", element_r20.price, " ");
  }
}

function MaterialComponent_th_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " A\u00E7\u0131klama ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function MaterialComponent_td_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", element_r21.remarks, " ");
  }
}

function MaterialComponent_th_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " \u0130\u015Flem B\u00F6l\u00FCm\u00FC");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function MaterialComponent_md_cell_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "md-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function MaterialComponent_md_cell_30_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r24);
      const element_r22 = restoredCtx.$implicit;
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r23.editMaterial(element_r22);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function MaterialComponent_md_cell_30_Template_button_click_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r24);
      const element_r22 = restoredCtx.$implicit;
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r25.deleteRecord(element_r22.id);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "delete_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function MaterialComponent_tr_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tr", 23);
  }
}

function MaterialComponent_tr_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tr", 24);
  }
}

let MaterialComponent = /*#__PURE__*/(() => {
  class MaterialComponent {
    constructor(firebaseService, spinnerService, dialog) {
      this.firebaseService = firebaseService;
      this.spinnerService = spinnerService;
      this.dialog = dialog;
      this.displayedColumns = ['demo-weight', 'demo-name', 'demo-unit', 'demo-symbol', 'demo-dimension', 'demo-remarks', 'demo-actions'];
      this.lessonListSubject = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Observable();

      this.getMaterials = () => {
        this.spinnerService.display(true);
        this.firebaseService.getMaterials().subscribe(res => (this.dataSource = res, this.spinnerService.display(false), (0,rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_7__.shareReplay)()));
      };
    }

    ngOnInit() {
      //this.getMaterials(); 
      this.getItems(); //this.getMaterialsByObject();
    }

    getItems() {
      this.firebaseService.getMaterialsObservable();
      this.materials$ = this.firebaseService.materials$; //   this.dataSource = this.materials$;

      this.getArrayFromObservable(); //this.dataSource = this.materialArr;
    }

    getArrayFromObservable() {
      let sorted$ = this.materials$.pipe((0,rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_7__.map)(items => items.sort(this.sortByGroupCode)));
      sorted$.subscribe(categories => {
        categories = categories.sort(x => x.groupcode), this.materialArr = categories;
      });
    }

    sortByGroupCode(a, b) {
      if (a.groupcode < b.groupcode) return -1;
      if (a.groupcode > b.groupcode) return 1;
      return 0;
    }

    deleteRecord(id) {
      console.log('Deleted recor is: ' + id);
      this.firebaseService.deleteMaterial(id);
      this.getItems();
    }

    editMaterial(material) {
      const dialogConfig = (0,_default_dialog_config__WEBPACK_IMPORTED_MODULE_0__.defaultDialogConfig)();
      dialogConfig.data = {
        dialogTitle: "Malzeme Güncelleme",
        material,
        mode: 'update',
        recordId: material.id
      };
      this.dialog.open(_material_entry_material_entry_component__WEBPACK_IMPORTED_MODULE_1__.MaterialEntryComponent, dialogConfig).afterClosed().subscribe();
      var number = 1434.02;
      console.log(new Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: 'TRY'
      }).format(number)); // → 123.456,79 €

      this.dialog.afterAllClosed.subscribe(result => {
        this.getItems();
      });
    }

    addMaterial() {
      const dialogConfig = (0,_default_dialog_config__WEBPACK_IMPORTED_MODULE_0__.defaultDialogConfig)();
      dialogConfig.data = {
        dialogTitle: "Malzeme Ekleme",
        mode: 'create'
      };
      this.dialog.open(_material_entry_material_entry_component__WEBPACK_IMPORTED_MODULE_1__.MaterialEntryComponent, dialogConfig).afterClosed().subscribe();
      this.dialog.afterAllClosed.subscribe(result => {
        this.getItems();
      });
    }

    getMaterialsByObject() {
      this.firebaseService.getMaterialsByObject();
      console.log("yunus  " + this.firebaseService._mechanics);
    }

  }

  MaterialComponent.ɵfac = function MaterialComponent_Factory(t) {
    return new (t || MaterialComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_fire_base_service__WEBPACK_IMPORTED_MODULE_2__.FireBaseService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_spinner_service__WEBPACK_IMPORTED_MODULE_3__.SpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog));
  };

  MaterialComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: MaterialComponent,
    selectors: [["app-material"]],
    decls: 33,
    vars: 3,
    consts: [[1, "container"], ["fxLayoutAlign", "center center", 1, "mat-display-3", "special-header"], [1, "demo-button-container", "space-left"], ["mat-fab", "", "color", "primary", "aria-label", "Example icon button with a delete icon", 3, "click"], [1, "space"], ["fxLayout", "row", "fxLayoutAlign", "center none", 1, "container", "space"], ["mat-table", "", 1, "mat-elevation-z8", "demo-table", 3, "dataSource"], ["matColumnDef", "demo-weight"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "demo-name"], ["matColumnDef", "demo-unit"], ["matColumnDef", "demo-dimension"], ["matColumnDef", "demo-symbol"], ["matColumnDef", "demo-remarks"], ["matColumnDef", "demo-actions"], [4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-icon-button", "", "color", "primary", "matTooltip", "G\u00FCncelle", "matTooltipPosition", "right", "aria-label", "Example icon button with a home icon", 3, "click"], ["mat-icon-button", "", "color", "warn", "matTooltip", "Sil", "matTooltipPosition", "right", "aria-label", "Example icon button with a home icon", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]],
    template: function MaterialComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Malzeme Listesi ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function MaterialComponent_Template_button_click_4_listener() {
          return ctx.addMaterial();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](10, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, MaterialComponent_th_11_Template, 2, 0, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, MaterialComponent_td_12_Template, 3, 3, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](13, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, MaterialComponent_th_14_Template, 2, 0, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, MaterialComponent_td_15_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](16, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, MaterialComponent_th_17_Template, 2, 0, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, MaterialComponent_td_18_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](19, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, MaterialComponent_th_20_Template, 2, 0, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, MaterialComponent_td_21_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](22, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](23, MaterialComponent_th_23_Template, 2, 0, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, MaterialComponent_td_24_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](25, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](26, MaterialComponent_th_26_Template, 2, 0, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](27, MaterialComponent_td_27_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](28, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](29, MaterialComponent_th_29_Template, 2, 0, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](30, MaterialComponent_md_cell_30_Template, 7, 0, "md-cell", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](31, MaterialComponent_tr_31_Template, 1, 0, "tr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](32, MaterialComponent_tr_32_Template, 1, 0, "tr", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("dataSource", ctx.materialArr);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
      }
    },
    directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultLayoutAlignDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultLayoutDirective, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatCell, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__.MatTooltip, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatRow],
    pipes: [_shared_pipes_categorytext_pipe__WEBPACK_IMPORTED_MODULE_4__.CategoryNamePipe],
    styles: [".demo-table[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n\r\n.mat-column-demo-position[_ngcontent-%COMP%] {\r\n    border-right: 1px solid currentColor;\r\n    padding-right: 24px;\r\n    text-align: center;\r\n}\r\n\r\n.mat-column-demo-name[_ngcontent-%COMP%] {\r\n    padding-left: 16px;\r\n    font-size: large;\r\n}\r\n\r\n.mat-column-demo-weight[_ngcontent-%COMP%] {\r\n    padding-left: 15px;\r\n}\r\n\r\n.mat-column-demo-symbol[_ngcontent-%COMP%] {\r\n    padding-left: 25px;\r\n}\r\n\r\n.mat-column-demo-remarks[_ngcontent-%COMP%] {\r\n    padding-left: 25px;\r\n}\r\n\r\n.mat-column-demo-unit[_ngcontent-%COMP%] {\r\n    font-size: large;\r\n    padding-left: 15px;\r\n    ;\r\n}\r\n\r\n.mat-column-demo-dimension[_ngcontent-%COMP%] {\r\n    padding-left: 35px;\r\n}\r\n\r\nth.mat-column-demo-dimension[_ngcontent-%COMP%] {\r\n    font-size: 18px;\r\n}\r\n\r\ntd.mat-column-demo-dimension[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n}\r\n\r\nth.mat-column-demo-weight[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n}\r\n\r\ntd.mat-column-demo-weight[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n}\r\n\r\nth.mat-column-demo-symbol[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n}\r\n\r\ntd.mat-column-demo-symbol[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n}\r\n\r\nth.mat-column-demo-remarks[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n}\r\n\r\ntd.mat-column-demo-remarks[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n}\r\n\r\n.mat-column-demo-symbol[_ngcontent-%COMP%] > thead[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    font-weight: bold;\r\n    font-size: 24px;\r\n}\r\n\r\n.special-header[_ngcontent-%COMP%] {\r\n    margin: 1em 0 0.5em 0;\r\n    color: #343434;\r\n    font-weight: normal;\r\n    font-family: 'Ultra', sans-serif;\r\n    font-size: 36px;\r\n    line-height: 42px;\r\n    text-transform: uppercase;\r\n    text-shadow: 0 2px white, 0 3px #777;\r\n}\r\n\r\n.space[_ngcontent-%COMP%] {\r\n    margin: 20px;\r\n}\r\n\r\n.space-left[_ngcontent-%COMP%] {\r\n    margin-left: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hdGVyaWFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCOztBQUV0Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsMEJBQWtCO0lBQWxCLHVCQUFrQjtJQUFsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixnQ0FBZ0M7SUFDaEMsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJtYXRlcmlhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRlbW8tdGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tYXQtY29sdW1uLWRlbW8tcG9zaXRpb24ge1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgY3VycmVudENvbG9yO1xyXG4gICAgcGFkZGluZy1yaWdodDogMjRweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm1hdC1jb2x1bW4tZGVtby1uYW1lIHtcclxuICAgIHBhZGRpbmctbGVmdDogMTZweDtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbn1cclxuXHJcbi5tYXQtY29sdW1uLWRlbW8td2VpZ2h0IHtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxufVxyXG5cclxuLm1hdC1jb2x1bW4tZGVtby1zeW1ib2wge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xyXG59XHJcblxyXG4ubWF0LWNvbHVtbi1kZW1vLXJlbWFya3Mge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xyXG59XHJcblxyXG4ubWF0LWNvbHVtbi1kZW1vLXVuaXQge1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgIDtcclxufVxyXG5cclxuLm1hdC1jb2x1bW4tZGVtby1kaW1lbnNpb24ge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzNXB4O1xyXG59XHJcblxyXG50aC5tYXQtY29sdW1uLWRlbW8tZGltZW5zaW9uIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxudGQubWF0LWNvbHVtbi1kZW1vLWRpbWVuc2lvbiB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbnRoLm1hdC1jb2x1bW4tZGVtby13ZWlnaHQge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG50ZC5tYXQtY29sdW1uLWRlbW8td2VpZ2h0IHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxudGgubWF0LWNvbHVtbi1kZW1vLXN5bWJvbCB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbnRkLm1hdC1jb2x1bW4tZGVtby1zeW1ib2wge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG50aC5tYXQtY29sdW1uLWRlbW8tcmVtYXJrcyB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbnRkLm1hdC1jb2x1bW4tZGVtby1yZW1hcmtzIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxufVxyXG5cclxuLm1hdC1jb2x1bW4tZGVtby1zeW1ib2w+dGhlYWQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbn1cclxuXHJcbi5zcGVjaWFsLWhlYWRlciB7XHJcbiAgICBtYXJnaW46IDFlbSAwIDAuNWVtIDA7XHJcbiAgICBjb2xvcjogIzM0MzQzNDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LWZhbWlseTogJ1VsdHJhJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA0MnB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHRleHQtc2hhZG93OiAwIDJweCB3aGl0ZSwgMCAzcHggIzc3NztcclxufVxyXG5cclxuLnNwYWNlIHtcclxuICAgIG1hcmdpbjogMjBweDtcclxufVxyXG5cclxuLnNwYWNlLWxlZnQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn0iXX0= */"]
  });
  return MaterialComponent;
})();

/***/ }),

/***/ 25627:
/*!***************************************************!*\
  !*** ./src/app/pages/material/material.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "customCurrencyMaskConfig": () => (/* binding */ customCurrencyMaskConfig),
/* harmony export */   "MaterialModule": () => (/* binding */ MaterialModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _material_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./material.component */ 40933);
/* harmony import */ var _material_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./material-routing.module */ 27601);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/shared.module */ 44466);
/* harmony import */ var _material_entry_material_entry_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./material-entry/material-entry.component */ 79258);
/* harmony import */ var ngx_currency__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-currency */ 49816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);








const customCurrencyMaskConfig = {
  align: "right",
  allowNegative: true,
  allowZero: true,
  decimal: ",",
  precision: 2,
  prefix: " ",
  suffix: " TRY",
  thousands: ".",
  nullable: true,
  min: null,
  max: null,
  inputMode: ngx_currency__WEBPACK_IMPORTED_MODULE_4__.CurrencyMaskInputMode.FINANCIAL
};
let MaterialModule = /*#__PURE__*/(() => {
  class MaterialModule {}

  MaterialModule.ɵfac = function MaterialModule_Factory(t) {
    return new (t || MaterialModule)();
  };

  MaterialModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: MaterialModule
  });
  MaterialModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
    imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _material_routing_module__WEBPACK_IMPORTED_MODULE_1__.MaterialRoutingModule, ngx_currency__WEBPACK_IMPORTED_MODULE_4__.NgxCurrencyModule.forRoot(customCurrencyMaskConfig)]]
  });
  return MaterialModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](MaterialModule, {
    declarations: [_material_component__WEBPACK_IMPORTED_MODULE_0__.MaterialComponent, _material_entry_material_entry_component__WEBPACK_IMPORTED_MODULE_3__.MaterialEntryComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _material_routing_module__WEBPACK_IMPORTED_MODULE_1__.MaterialRoutingModule, ngx_currency__WEBPACK_IMPORTED_MODULE_4__.NgxCurrencyModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=627.js.map