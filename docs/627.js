"use strict";
(self["webpackChunkcost_calculator"] = self["webpackChunkcost_calculator"] || []).push([[627],{

/***/ 9816:
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4364);




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

/***/ 9191:
/*!*********************************************************!*\
  !*** ./src/app/pages/material/default-dialog-config.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultDialogConfig": () => (/* binding */ defaultDialogConfig)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ 2213);

function defaultDialogConfig() {
  const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__.MatDialogConfig();
  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;
  dialogConfig.width = '1000px';
  return dialogConfig;
}

/***/ }),

/***/ 9258:
/*!***************************************************************************!*\
  !*** ./src/app/pages/material/material-entry/material-entry.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialEntryComponent": () => (/* binding */ MaterialEntryComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 2213);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_core_services_fire_base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services/fire-base.service */ 3131);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ 582);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ 2118);
/* harmony import */ var _shared_components_text_input_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/text-input.component */ 3494);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 781);










let MaterialEntryComponent = /*#__PURE__*/(() => {
  class MaterialEntryComponent {
    constructor(firebaseService, fb, data, dialogRef) {
      this.firebaseService = firebaseService;
      this.fb = fb;
      this.dialogRef = dialogRef;
      this.dialogTitle = data.dialogTitle;
      this.material = data.material;
      this.mode = data.mode;
      this.recordId = data.recordId;

      if (this.mode == 'update') {
        this.reactiveForm();
        /*
        this.materialForm.get("name").patchValue(data.material.payload.doc.data().name);
        this.materialForm.get("name").setValue("1");
        console.log(     this.materialForm.get("name"));
        this.materialForm.controls.name.setValue(data.material.payload.doc.data().name);
        this.materialForm.controls['name'].patchValue(data.material.payload.doc.data().name);
        console.log("dasdasd:"+data.material.payload.doc.data().name);
        
        */

        this.materialForm.patchValue({
          name: data.material.payload.doc.data().name
        });
        this.materialForm.patchValue({
          unit: data.material.payload.doc.data().unit
        });
        this.materialForm.patchValue({
          weight: data.material.payload.doc.data().weight
        });
        this.materialForm.patchValue({
          price: data.material.payload.doc.data().price
        });
        this.materialForm.patchValue({
          remarks: data.material.payload.doc.data().remarks
        });
        this.materialForm.patchValue({
          dimension: data.material.payload.doc.data().dimension
        });
      } else if (this.mode = 'create') {
        this.reactiveForm();
      } //data.material.payload.doc.data().name

    }

    ngOnInit() {//  this.reactiveForm();
    }

    reactiveForm() {
      this.materialForm = this.fb.group({
        name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.maxLength(50)]],
        unit: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
        weight: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
        price: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
        remarks: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
        dimension: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]
      });
    }

    submitForm() {
      console.log(this.materialForm.value);

      if (this.mode == 'create') {
        this.firebaseService.addMaterial(this.materialForm.value).catch(error => {
          console.log(error);
        });
      } else if (this.mode == 'update') {
        var number = this.materialForm.value;
        console.log(new Intl.NumberFormat('de-DE', {
          style: 'currency',
          currency: 'TRY'
        }).format(number));
        this.firebaseService.updateMaterial(this.materialForm.value, this.recordId).catch(error => {
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

  }

  MaterialEntryComponent.ɵfac = function MaterialEntryComponent_Factory(t) {
    return new (t || MaterialEntryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_fire_base_service__WEBPACK_IMPORTED_MODULE_0__.FireBaseService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef));
  };

  MaterialEntryComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: MaterialEntryComponent,
    selectors: [["app-material-entry"]],
    decls: 35,
    vars: 28,
    consts: [["fxLayout", "row", "fxLayoutAlign", "center none", 1, "container"], ["fxFlex", "95%"], ["autocomplete", "off", 3, "formGroup", "ngSubmit"], ["mat-dialog-title", ""], [1, "row"], [3, "formControl", "label", "error", "minlength", "maxlength"], [3, "formControl", "label", "error", "maxlength"], [3, "formControl", "label", "error", "maxlength", "type"], [3, "formControl", "label", "error"], ["color", "primary", "mat-raised-button", "", 3, "disabled"], ["color", "secondary", "mat-raised-button", "", 3, "click"]],
    template: function MaterialEntryComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function MaterialEntryComponent_Template_form_ngSubmit_3_listener() {
          return ctx.materialForm.valid && ctx.submitForm();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "app-text-input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "app-text-input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "app-text-input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "app-text-input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "app-text-input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "app-text-input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, " Kaydet ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MaterialEntryComponent_Template_button_click_31_listener() {
          return ctx.cancel();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, " Temizle ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MaterialEntryComponent_Template_button_click_33_listener() {
          return ctx.onClose();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, " Kapat ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.materialForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.dialogTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.materialForm.controls["name"])("label", "malzeme ad\u0131")("error", "L\u00FCtfen malzeme ad\u0131 giriniz")("minlength", "3")("maxlength", "40");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.materialForm.controls["unit"])("label", "birimi")("error", "L\u00FCtfen birimi giriniz")("maxlength", "40");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.materialForm.controls["dimension"])("label", "\u00F6l\u00E7\u00FC")("error", "L\u00FCtfen \u00F6l\u00E7\u00FCs\u00FCn\u00FC giriniz")("maxlength", "40");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.materialForm.controls["weight"])("label", "a\u011F\u0131rl\u0131k")("error", "L\u00FCtfen a\u011F\u0131rl\u0131k giriniz")("maxlength", "40");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.materialForm.controls["price"])("label", "fiyat")("error", "L\u00FCtfen fiyat giriniz")("maxlength", "40")("type", "tel");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.materialForm.controls["remarks"])("label", "a\u00E7\u0131klama")("error", "L\u00FCtfen a\u00E7\u0131klama giriniz");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.materialForm.valid);
      }
    },
    directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogContent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__.DefaultFlexDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardContent, _shared_components_text_input_component__WEBPACK_IMPORTED_MODULE_1__.TextInputComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.MaxLengthValidator, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton],
    encapsulation: 2
  });
  return MaterialEntryComponent;
})();

/***/ }),

/***/ 7601:
/*!***********************************************************!*\
  !*** ./src/app/pages/material/material-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialRoutingModule": () => (/* binding */ MaterialRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _shared_layout_layout_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/layout/layout/layout.component */ 8369);
/* harmony import */ var _material_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./material.component */ 933);
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

/***/ 933:
/*!******************************************************!*\
  !*** ./src/app/pages/material/material.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialComponent": () => (/* binding */ MaterialComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 5160);
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/internal/operators */ 8470);
/* harmony import */ var _default_dialog_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default-dialog-config */ 9191);
/* harmony import */ var _material_entry_material_entry_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./material-entry/material-entry.component */ 9258);
/* harmony import */ var src_app_core_services_fire_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/fire-base.service */ 3131);
/* harmony import */ var src_app_core_spinner_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/spinner.service */ 3066);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 2213);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/flex */ 582);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 2529);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/table */ 4302);














function MaterialComponent_th_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Ad\u0131 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function MaterialComponent_td_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r16.payload.doc.data().name, " ");
  }
}

function MaterialComponent_th_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Birimi ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function MaterialComponent_td_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r17.payload.doc.data().unit, " ");
  }
}

function MaterialComponent_th_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " A\u011F\u0131rl\u0131k ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function MaterialComponent_td_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r18.payload.doc.data().weight, " ");
  }
}

function MaterialComponent_th_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " \u00D6l\u00E7\u00FCs\u00FC ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function MaterialComponent_td_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r19.payload.doc.data().dimension, " ");
  }
}

function MaterialComponent_th_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Fiyat ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function MaterialComponent_td_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", element_r20.payload.doc.data().price, " ", "\u20BA", " ");
  }
}

function MaterialComponent_th_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " A\u00E7\u0131klama ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function MaterialComponent_td_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r21.payload.doc.data().remarks, " ");
  }
}

function MaterialComponent_th_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " \u0130\u015Flem B\u00F6l\u00FCm\u00FC");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function MaterialComponent_md_cell_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "md-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MaterialComponent_md_cell_30_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r24);
      const element_r22 = restoredCtx.$implicit;
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r23.editMaterial(element_r22);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "build");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, " G\u00FCncelle");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MaterialComponent_md_cell_30_Template_button_click_6_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r24);
      const element_r22 = restoredCtx.$implicit;
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r25.deleteRecord(element_r22.payload.doc.id);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "delete_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, " Sil");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function MaterialComponent_tr_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 23);
  }
}

function MaterialComponent_tr_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 24);
  }
}

let MaterialComponent = /*#__PURE__*/(() => {
  class MaterialComponent {
    constructor(firebaseService, spinnerService, dialog) {
      this.firebaseService = firebaseService;
      this.spinnerService = spinnerService;
      this.dialog = dialog;
      this.displayedColumns = ['demo-name', 'demo-unit', 'demo-weight', 'demo-dimension', 'demo-symbol', 'demo-remarks', 'demo-actions'];
      this.lessonListSubject = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Observable();
      this.courseChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();

      this.getMaterials = () => {
        this.spinnerService.display(true);
        this.firebaseService.getMaterials().subscribe(res => (this.dataSource = res, console.log(res), this.spinnerService.display(false), (0,rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__.shareReplay)()));
        console.log("materialList: " + this.materialList);
      };
    }

    ngOnInit() {
      this.getMaterials();
      this.getMaterialsByObject();
    }

    deleteRecord(id) {
      console.log('Deleted recor is: ' + id);
      this.firebaseService.deleteMaterial(id);
    }

    editMaterial(material) {
      const dialogConfig = (0,_default_dialog_config__WEBPACK_IMPORTED_MODULE_0__.defaultDialogConfig)();
      dialogConfig.data = {
        dialogTitle: "Malzeme Güncelleme",
        material,
        mode: 'update',
        recordId: material.payload.doc.id
      };
      this.dialog.open(_material_entry_material_entry_component__WEBPACK_IMPORTED_MODULE_1__.MaterialEntryComponent, dialogConfig).afterClosed().subscribe(() => this.courseChanged.emit());
      var number = 1434.02;
      console.log(new Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: 'TRY'
      }).format(number)); // → 123.456,79 €
    }

    addMaterial() {
      const dialogConfig = (0,_default_dialog_config__WEBPACK_IMPORTED_MODULE_0__.defaultDialogConfig)();
      dialogConfig.data = {
        dialogTitle: "Malzeme Ekleme",
        mode: 'create'
      };
      this.dialog.open(_material_entry_material_entry_component__WEBPACK_IMPORTED_MODULE_1__.MaterialEntryComponent, dialogConfig).afterClosed().subscribe(() => this.courseChanged.emit());
    }

    getMaterialsByObject() {
      this.firebaseService.getMaterialsByObject();
      console.log("yunus  " + this.firebaseService._mechanics);
    }

  }

  MaterialComponent.ɵfac = function MaterialComponent_Factory(t) {
    return new (t || MaterialComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_fire_base_service__WEBPACK_IMPORTED_MODULE_2__.FireBaseService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_spinner_service__WEBPACK_IMPORTED_MODULE_3__.SpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialog));
  };

  MaterialComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: MaterialComponent,
    selectors: [["app-material"]],
    outputs: {
      courseChanged: "courseChanged"
    },
    decls: 33,
    vars: 3,
    consts: [[1, "container"], ["fxLayoutAlign", "center center", 1, "mat-display-3", "special-header"], [1, "demo-button-container", "space-left"], ["mat-fab", "", "color", "primary", "aria-label", "Example icon button with a delete icon", 3, "click"], [1, "space"], ["fxLayout", "row", "fxLayoutAlign", "center none", 1, "container", "space"], ["mat-table", "", 1, "mat-elevation-z8", "demo-table", 3, "dataSource"], ["matColumnDef", "demo-name"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "demo-unit"], ["matColumnDef", "demo-weight"], ["matColumnDef", "demo-dimension"], ["matColumnDef", "demo-symbol"], ["matColumnDef", "demo-remarks"], ["matColumnDef", "demo-actions"], [4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-raised-button", "", "color", "warn", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]],
    template: function MaterialComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Malzeme Listesi ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MaterialComponent_Template_button_click_4_listener() {
          return ctx.addMaterial();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](10, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, MaterialComponent_th_11_Template, 2, 0, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, MaterialComponent_td_12_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](13, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, MaterialComponent_th_14_Template, 2, 0, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, MaterialComponent_td_15_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](16, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, MaterialComponent_th_17_Template, 2, 0, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, MaterialComponent_td_18_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](19, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, MaterialComponent_th_20_Template, 2, 0, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, MaterialComponent_td_21_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](22, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, MaterialComponent_th_23_Template, 2, 0, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](24, MaterialComponent_td_24_Template, 2, 2, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](25, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, MaterialComponent_th_26_Template, 2, 0, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, MaterialComponent_td_27_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](28, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](29, MaterialComponent_th_29_Template, 2, 0, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, MaterialComponent_md_cell_30_Template, 10, 0, "md-cell", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](31, MaterialComponent_tr_31_Template, 1, 0, "tr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](32, MaterialComponent_tr_32_Template, 1, 0, "tr", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
      }
    },
    directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__.DefaultLayoutAlignDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__.DefaultLayoutDirective, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatRow],
    styles: [".demo-table[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n\r\n.mat-column-demo-position[_ngcontent-%COMP%] {\r\n    border-right: 1px solid currentColor;\r\n    padding-right: 24px;\r\n    text-align: center;\r\n}\r\n\r\n.mat-column-demo-name[_ngcontent-%COMP%] {\r\n    padding-left: 16px;\r\n    font-size: large;\r\n}\r\n\r\n.mat-column-demo-weight[_ngcontent-%COMP%] {}\r\n\r\n.mat-column-demo-unit[_ngcontent-%COMP%] {\r\n    font-size: large;\r\n}\r\n\r\nth.mat-column-demo-dimension[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n}\r\n\r\ntd.mat-column-demo-dimension[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n}\r\n\r\nth.mat-column-demo-weight[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n}\r\n\r\ntd.mat-column-demo-weight[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n}\r\n\r\nth.mat-column-demo-symbol[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n}\r\n\r\ntd.mat-column-demo-symbol[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n}\r\n\r\nth.mat-column-demo-remarks[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n}\r\n\r\ntd.mat-column-demo-remarks[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n}\r\n\r\n.mat-column-demo-symbol[_ngcontent-%COMP%] > thead[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    font-weight: bold;\r\n    font-size: 24px;\r\n}\r\n\r\n.special-header[_ngcontent-%COMP%] {\r\n    margin: 1em 0 0.5em 0;\r\n    color: #343434;\r\n    font-weight: normal;\r\n    font-family: 'Ultra', sans-serif;\r\n    font-size: 36px;\r\n    line-height: 42px;\r\n    text-transform: uppercase;\r\n    text-shadow: 0 2px white, 0 3px #777;\r\n}\r\n\r\n.space[_ngcontent-%COMP%] {\r\n    margin: 20px;\r\n}\r\n\r\n.space-left[_ngcontent-%COMP%] {\r\n    margin-left: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hdGVyaWFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUEseUJBQXlCOztBQUV6QjtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsZ0NBQWdDO0lBQ2hDLGVBQWU7SUFDZixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckIiLCJmaWxlIjoibWF0ZXJpYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZW1vLXRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubWF0LWNvbHVtbi1kZW1vLXBvc2l0aW9uIHtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGN1cnJlbnRDb2xvcjtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDI0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tYXQtY29sdW1uLWRlbW8tbmFtZSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG59XHJcblxyXG4ubWF0LWNvbHVtbi1kZW1vLXdlaWdodCB7fVxyXG5cclxuLm1hdC1jb2x1bW4tZGVtby11bml0IHtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbn1cclxuXHJcbnRoLm1hdC1jb2x1bW4tZGVtby1kaW1lbnNpb24ge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG50ZC5tYXQtY29sdW1uLWRlbW8tZGltZW5zaW9uIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxudGgubWF0LWNvbHVtbi1kZW1vLXdlaWdodCB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbnRkLm1hdC1jb2x1bW4tZGVtby13ZWlnaHQge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG50aC5tYXQtY29sdW1uLWRlbW8tc3ltYm9sIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxudGQubWF0LWNvbHVtbi1kZW1vLXN5bWJvbCB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbnRoLm1hdC1jb2x1bW4tZGVtby1yZW1hcmtzIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxudGQubWF0LWNvbHVtbi1kZW1vLXJlbWFya3Mge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG4ubWF0LWNvbHVtbi1kZW1vLXN5bWJvbD50aGVhZCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxufVxyXG5cclxuLnNwZWNpYWwtaGVhZGVyIHtcclxuICAgIG1hcmdpbjogMWVtIDAgMC41ZW0gMDtcclxuICAgIGNvbG9yOiAjMzQzNDM0O1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtZmFtaWx5OiAnVWx0cmEnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDQycHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgdGV4dC1zaGFkb3c6IDAgMnB4IHdoaXRlLCAwIDNweCAjNzc3O1xyXG59XHJcblxyXG4uc3BhY2Uge1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG59XHJcblxyXG4uc3BhY2UtbGVmdCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxufSJdfQ== */"]
  });
  return MaterialComponent;
})();

/***/ }),

/***/ 5627:
/*!***************************************************!*\
  !*** ./src/app/pages/material/material.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "customCurrencyMaskConfig": () => (/* binding */ customCurrencyMaskConfig),
/* harmony export */   "MaterialModule": () => (/* binding */ MaterialModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _material_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./material.component */ 933);
/* harmony import */ var _material_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./material-routing.module */ 7601);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/shared.module */ 4466);
/* harmony import */ var _material_entry_material_entry_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./material-entry/material-entry.component */ 9258);
/* harmony import */ var ngx_currency__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-currency */ 9816);
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