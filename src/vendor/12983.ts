import { LOCAL_STORAGE_KEYS, STORAGE_PREFIX } from "../vendor/339781";
Object.defineProperty(exports, "__esModule", {
  value: !0
});
var s = function () {
  function e() {}
  e.getItem = function (e) {
    var r;
    try {
      if (this.isStorageAccessible()) return window.localStorage.getItem(e);
    } catch (e) {}
    return null !== (r = this.fallbackSessionCache[e]) && void 0 !== r ? r : null;
  };
  e.setItem = function (e, r) {
    try {
      if (this.isStorageAccessible()) {
        window.localStorage.setItem(e, r);
        return;
      }
    } catch (e) {}
    this.fallbackSessionCache[e] = r;
  };
  e.removeItem = function (e) {
    try {
      if (this.isStorageAccessible()) {
        window.localStorage.removeItem(e);
        return;
      }
    } catch (e) {}
    delete this.fallbackSessionCache[e];
  };
  e.cleanup = function () {
    try {
      if (this.isStorageAccessible(!0)) for (var e in window.localStorage) "string" != typeof window.localStorage[e] || null == e || !this.disabled && e in LOCAL_STORAGE_KEYS || !this.disabled && e.substring(0, STORAGE_PREFIX.length) !== STORAGE_PREFIX || window.localStorage.removeItem(e);
    } catch (e) {}
  };
  e.isStorageAccessible = function (e) {
    void 0 === e && (e = !1);
    null == this.canAccessStorageAccessible && (this.canAccessStorageAccessible = "undefined" != typeof Storage && "undefined" != typeof window && null != window && null != window.localStorage);
    var r = this.canAccessStorageAccessible;
    return e ? r : !this.disabled && r;
  };
  e.disabled = !1;
  e.fallbackSessionCache = {};
  e.canAccessStorageAccessible = null;
  return e;
}();
exports.$$default = s;