Object.defineProperty(exports, "__esModule", {
  value: !0
});
var n = function () {
  function e() {}
  e.getItemAsync = function (r) {
    var n;
    return e.asyncStorage ? null !== (n = e.asyncStorage.getItem(r)) && void 0 !== n ? n : null : Promise.resolve(null);
  };
  e.setItemAsync = function (r, n) {
    return e.asyncStorage ? e.asyncStorage.setItem(r, n) : Promise.resolve();
  };
  e.removeItemAsync = function (r) {
    return e.asyncStorage ? e.asyncStorage.removeItem(r) : Promise.resolve();
  };
  return e;
}();
exports.$$default = n;