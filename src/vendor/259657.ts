import { createContext, useState, useEffect, useContext } from "react";
import { wR } from "../vendor/556527";
let u = new Set(["Arab", "Syrc", "Samr", "Mand", "Thaa", "Mend", "Nkoo", "Adlm", "Rohg", "Hebr"]);
let n = new Set(["ae", "ar", "arc", "bcc", "bqi", "ckb", "dv", "fa", "glk", "he", "ku", "mzn", "nqo", "pnb", "ps", "sd", "ug", "ur", "yi"]);
let o = Symbol.$$for("react-aria.i18n.locale");
function l() {
  let e = "undefined" != typeof window && window[o] || "undefined" != typeof navigator && (navigator.language || navigator.userLanguage) || "en-US";
  try {
    Intl.DateTimeFormat.supportedLocalesOf([e]);
  } catch {
    e = "en-US";
  }
  return {
    locale: e,
    direction: !function (e) {
      if (Intl.Locale) {
        let t = new Intl.Locale(e).maximize();
        let a = "function" == typeof t.getTextInfo ? t.getTextInfo() : t.textInfo;
        if (a) return "rtl" === a.direction;
        if (t.script) return u.has(t.script);
      }
      let t = e.split("-")[0];
      return n.has(t);
    }(e) ? "ltr" : "rtl"
  };
}
let s = l();
let d = new Set();
function c() {
  for (let e of (s = l(), d)) e(s);
}
let m = createContext(null);
export function $$h0() {
  let e = function () {
    let e = wR();
    let [t, a] = useState(s);
    return (useEffect(() => (0 === d.size && window.addEventListener("languagechange", c), d.add(a), () => {
      d.$$delete(a);
      0 === d.size && window.removeEventListener("languagechange", c);
    }), []), e) ? {
      locale: "en-US",
      direction: "ltr"
    } : t;
  }();
  return useContext(m) || e;
}
export const Y = $$h0;