function r(e) {
  var r = typeof e;
  return "string" == r || "number" == r || "symbol" == r || "boolean" == r ? "__proto__" !== e : null === e;
}
module.exports = r;