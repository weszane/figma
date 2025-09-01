import n from "../vendor/241899";
import { XHRError } from "../905/910117";
var r = n;
let s = Symbol("UNDEFINED");
export const L = function e(t) {
  if (null === t || "number" == typeof t || "boolean" == typeof t || "string" == typeof t) return t;
  if ("symbol" == typeof t) return `$${String(t)}`;
  if (void 0 === t) return e(s);
  if (Array.isArray(t)) return t.map(t => e(t));
  if ("object" == typeof t) {
    if (t instanceof Error) return e({
      ...r()(t, "name", "message", "stack"),
      ...(t instanceof XHRError ? r()(t, "status", "response", "data", "contentType", "wafChallenge") : {})
    });
    let i = {};
    for (let n in t) Object.prototype.hasOwnProperty.call(t, n) && (i[n] = e(t[n]));
    return i;
  }
  return String(t);
};