var n;
exports.errorUtil = void 0;
(function (e) {
  e.errToObj = e => "string" == typeof e ? {
    message: e
  } : e || {};
  e.toString = e => "string" == typeof e ? e : e?.message;
})(n || (exports.errorUtil = n = {}));