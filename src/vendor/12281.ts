import n from "../vendor/880899";
module.exports = function t(e, r) {
  return !!e && !!r && (e === r || !n(e) && (n(r) ? t(e, r.parentNode) : "contains" in e ? e.contains(r) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(r))));
};