exports.wrap = function (e, n) {
  var r = function () {
    exports.printWarning(n);
    return e.apply(this, arguments);
  };
  e.prototype && (r.prototype = e.prototype);
  return r;
};
exports.defaultMsg = function (e, t) {
  return `${e}.${t} is deprecated and will be removed from the public API in a future version of ${e}.`;
};
exports.printWarning = function (e) {
  "object" == typeof process && process.emitWarning ? process.emitWarning(e) : console.info ? console.info(e) : console.log(e);
};