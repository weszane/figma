var e = function () {
  function t(t) {
    var e;
    var r;
    r = void 0;
    (e = "_uri") in this ? Object.defineProperty(this, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : this[e] = r;
    this._uri = t;
  }
  t.prototype.toString = function () {
    return this._uri;
  };
  return t;
}();
module.exports = e;