function n(e) {
  return "object" == typeof e && !!e && "number" == typeof e.line && "number" == typeof e.column;
}
function r(e) {
  return "object" == typeof e && !!e && n(e.start) && n(e.end);
}
export function $$a2(e) {
  var t;
  return "object" == typeof e && null !== e && void 0 !== e.type && void 0 !== e.props && void 0 !== e.children && (!e.parsedLocations || "object" == typeof (t = e.parsedLocations) && !!t && r(t.full) && r(t.opening) && "object" == typeof t.attributes && !!t.attributes && Object.values(t.attributes).every(r) && Array.isArray(t.spreads) && t.spreads.every(r) && (!t.children || r(t.children)));
}
export function $$s0(e) {
  return "object" == typeof e && null !== e && "JSXExpressionContainer" === e.type && void 0 !== e.expression && "string" == typeof e.expression && (void 0 === e.location || r(e.location));
}
export function $$o1(e) {
  return "object" == typeof e && null !== e && "JSXSpreadAttribute" === e.type && void 0 !== e.argument && "string" == typeof e.argument && (void 0 === e.location || r(e.location));
}
export const Bj = $$s0;
export const fW = $$o1;
export const id = $$a2;