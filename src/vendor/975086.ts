import { Ni, Cy, ff, bS, kF } from "../vendor/408361";
function s() {
  return Ni().getTextContent();
}
function o(e, r = !0) {
  if (e) return !1;
  let n = s();
  r && (n = n.trim());
  return "" === n;
}
function a(e) {
  if (!o(e, !1)) return !1;
  let r = Ni().getChildren();
  let n = r.length;
  if (n > 1) return !1;
  for (let e = 0; e < n; e++) {
    let n = r[e];
    if (Cy(n)) return !1;
    if (ff(n)) {
      if (!bS(n) || 0 !== n.__indent) return !1;
      let r = n.getChildren();
      let s = r.length;
      for (let n = 0; n < s; n++) {
        let n = r[e];
        if (!kF(n)) return !1;
      }
    }
  }
  return !0;
}
export function $$h0(e) {
  return () => a(e);
}
!function (e) {
  e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") && e.$$default;
}(function (e) {
  let r = new URLSearchParams();
  r.append("code", e);
  for (let e = 1; e < $$arguments.length; e++) r.append("v", $$arguments[e]);
  throw Error(`Minified Lexical error #${e}; visit https://lexical.dev/docs/error?${r} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
});
export const yl = $$h0;