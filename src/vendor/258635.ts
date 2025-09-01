var i = !0;
var s = "Invariant failed";
export function $$o0(e, r) {
  if (!e) {
    if (i) throw Error(s);
    var n = "function" == typeof r ? r() : r;
    throw Error(n ? "".concat(s, ": ").concat(n) : s);
  }
}
export const A = $$o0;