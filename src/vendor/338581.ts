import { C6 } from "../vendor/633063";
var $$t3;
!function (e) {
  e.MISSING_VALUE = "MISSING_VALUE";
  e.INVALID_VALUE = "INVALID_VALUE";
  e.MISSING_INTL_API = "MISSING_INTL_API";
}($$t3 || ($$t3 = {}));
var $$r2 = function (e) {
  function n(n, i, t) {
    var f = e.call(this, n) || this;
    f.code = i;
    f.originalMessage = t;
    return f;
  }
  C6(n, e);
  n.prototype.toString = function () {
    return "[formatjs Error: ".concat(this.code, "] ").concat(this.message);
  };
  return n;
}(Error);
var $$a0 = function (e) {
  function n(n, i, f, r) {
    return e.call(this, 'Invalid values for "'.concat(n, '": "').concat(i, '". Options are "').concat(Object.keys(f).join('", "'), '"'), $$t3.INVALID_VALUE, r) || this;
  }
  C6(n, e);
  return n;
}($$r2);
var $$o4 = function (e) {
  function n(n, i, f) {
    return e.call(this, 'Value for "'.concat(n, '" must be of type ').concat(i), $$t3.INVALID_VALUE, f) || this;
  }
  C6(n, e);
  return n;
}($$r2);
var $$u1 = function (e) {
  function n(n, i) {
    return e.call(this, 'The intl string context variable "'.concat(n, '" was not provided to the string "').concat(i, '"'), $$t3.MISSING_VALUE, i) || this;
  }
  C6(n, e);
  return n;
}($$r2);
export const $x = $$a0;
export const Ei = $$u1;
export const IF = $$r2;
export const O4 = $$t3;
export const Zo = $$o4;