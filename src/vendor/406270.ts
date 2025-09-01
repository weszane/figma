var n = this && this.__assign || function () {
  return (n = Object.assign || function (e) {
    for (n = 1, i = $$arguments.length, void 0; n < i; n++) {
      var r;
      var n;
      var i;
      for (var s in r = $$arguments[n]) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s]);
    }
    return e;
  }).apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", {
  value: !0
});
var i = function () {
  function e() {}
  e.isValid = function (r, n) {
    try {
      var i = n.evaluated_keys;
      if (!i || "object" != typeof i) return !0;
      var s = this.copyObject(i);
      var o = null == r ? null : this.copyObject(r);
      return e.validate(s, o) && e.validate(o, s);
    } catch (e) {}
    return !0;
  };
  e.validate = function (e, r) {
    if (null == e) return null == r;
    if (null == r) return !1;
    for (n = 0, i = Object.entries(e), void 0; n < i.length; n++) {
      var n;
      var i;
      var s = i[n];
      var o = s[0];
      var a = s[1];
      if ("stableID" !== o) {
        if (typeof a != typeof r[o]) return !1;
        if ("string" == typeof a) {
          if (a !== r[o]) return !1;
        } else if ("object" == typeof a) return this.validate(a, r[o]);else return !1;
      }
    }
    return !0;
  };
  e.copyObject = function (e) {
    if (null == e) return null;
    var r = {};
    if (e?.userID && (r.userID = e?.userID), e?.customIDs) {
      var i = n({}, e.customIDs);
      delete i.stableID;
      0 !== Object.keys(i).length && (r.customIDs = i);
    }
    return r;
  };
  return e;
}();
exports.$$default = i;