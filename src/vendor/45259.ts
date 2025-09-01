var n = this && this.__extends || function () {
  var e = function (r, n) {
    return (e = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (e, r) {
      e.__proto__ = r;
    } || function (e, r) {
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    })(r, n);
  };
  return function (r, n) {
    if ("function" != typeof n && null !== n) throw TypeError("Class extends value " + String(n) + " is not a constructor or null");
    function i() {
      this.constructor = r;
    }
    e(r, n);
    r.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i());
  };
}();
exports.StatsigInvalidArgumentError = exports.StatsigUninitializedError = void 0;
var i = function (e) {
  function r(n) {
    var i = e.call(this, null != n ? n : "Call and wait for initialize() to finish first.") || this;
    Object.setPrototypeOf(i, r.prototype);
    return i;
  }
  n(r, e);
  return r;
}(Error);
exports.StatsigUninitializedError = i;
var s = function (e) {
  function r(n) {
    var i = e.call(this, n) || this;
    Object.setPrototypeOf(i, r.prototype);
    return i;
  }
  n(r, e);
  return r;
}(Error);
exports.StatsigInvalidArgumentError = s;