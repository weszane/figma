import { List } from "../vendor/116740";
var n = List;
var i = function () {
  function t(t) {
    var e;
    var r;
    r = void 0;
    (e = "_decorators") in this ? Object.defineProperty(this, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : this[e] = r;
    this._decorators = t.slice();
  }
  var e = t.prototype;
  e.getDecorations = function (t, e) {
    var r = Array(t.getText().length).fill(null);
    this._decorators.forEach(function (n, i) {
      var o = 0;
      n.strategy(t, function (t, e) {
        (function (t, e, r) {
          for (var n = e; n < r; n++) if (null != t[n]) return !1;
          return !0;
        })(r, t, e) && (function (t, e, r, n) {
          for (var i = e; i < r; i++) t[i] = n;
        }(r, t, e, i + "." + o), o++);
      }, e);
    });
    return n(r);
  };
  e.getComponentForKey = function (t) {
    var e = parseInt(t.split(".")[0], 10);
    return this._decorators[e].component;
  };
  e.getPropsForKey = function (t) {
    var e = parseInt(t.split(".")[0], 10);
    return this._decorators[e].props;
  };
  return t;
}();
module.exports = i;