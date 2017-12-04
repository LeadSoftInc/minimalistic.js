"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.required = required;
exports.isEmail = isEmail;
exports.isNumber = isNumber;
exports.isTextAndSpace = isTextAndSpace;
exports.length = length;
exports.maxFileSize = maxFileSize;
exports.isTrue = isTrue;
exports.isFalse = isFalse;
/**
 * @param value
 * @returns {boolean}
 */
function required(value) {
  return value.length === 0;
}

/**
 * @param value
 * @returns {boolean}
 */
function isEmail(value) {
  // eslint-disable-next-line no-useless-escape
  var Reg = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  return !Reg.test(value);
}

/**
 * @param value
 * @returns {boolean}
 */
function isNumber(value) {
  var Reg = new RegExp(/^\d+$/);
  return !Reg.test(value);
}

/**
 * @param value
 * @returns {boolean}
 */
function isTextAndSpace(value) {
  var Reg = new RegExp(/^[a-zA-Z\s]*$/);
  return !Reg.test(value);
}

/**
 * @param count
 * @return {function(*): boolean}
 */
function length(count) {
  return function (value) {
    return value.length >= count;
  };
}

/**
 * @param maxSize
 * @return {function(*): boolean}
 */
function maxFileSize(maxSize) {
  return function (file) {
    return file.size >= maxSize;
  };
}

/**
 * @param value
 * @return {boolean}
 */
function isTrue(value) {
  return Boolean(value) !== true;
}

/**
 * @param value
 * @return {boolean}
 */
function isFalse(value) {
  return Boolean(value) !== false;
}
//# sourceMappingURL=methods.js.map