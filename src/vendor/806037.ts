export function $$i0(e, r, ...n) {
  if (s() && void 0 === r) throw Error("invariant requires an error message argument");
  if (!e) {
    let e;
    if (void 0 === r) e = Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else {
      let i = 0;
      (e = Error(r.replace(/%s/g, function () {
        return n[i++];
      }))).name = "Invariant Violation";
    }
    e.framesToPop = 1;
    return e;
  }
}
function s() {
  return "undefined" != typeof process;
}
export const V = $$i0;