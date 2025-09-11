import { $isElementNode, $getRoot } from "../vendor/408361";
var i = function (e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.$$default : e;
}(function (e) {
  let t = new URLSearchParams();
  t.append("code", e);
  for (let e = 1; e < $$arguments.length; e++) t.append("v", $$arguments[e]);
  throw Error(`Minified Lexical error #${e}; visit https://lexical.dev/docs/error?${t} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
});
let A = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement;
let o = A && "documentMode" in document ? document.documentMode : null;
function s(...e) {
  let t = [];
  for (let n of e) if (n && "string" == typeof n) for (let [e] of n.matchAll(/\S+/g)) t.push(e);
  return t;
}
export function mergeRegister(...e) {
  return () => {
    for (let t = e.length - 1; t >= 0; t--) e[t]();
    e.length = 0;
  };
}
export function addClassNamesToElement(e, ...t) {
  let n = s(...t);
  n.length > 0 && e.classList.add(...n);
}
export function removeClassNamesFromElement(e, ...t) {
  let n = s(...t);
  n.length > 0 && e.classList.remove(...n);
}
export function $getNearestNodeOfType(e, t) {
  let n = e;
  for (; null != n;) {
    if (n instanceof t) return n;
    n = n.getParent();
  }
  return null;
}
export function $getNearestBlockElementAncestorOrThrow(e) {
  let t = $findMatchingParent(e, e => $isElementNode(e) && !e.isInline());
  $isElementNode(t) || i(4, e.__key);
  return t;
}
A && /Mac|iPod|iPhone|iPad/.test(navigator.platform);
A && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent);
A && "InputEvent" in window && !o && new window.InputEvent("input");
A && /Version\/[\d.]+.*Safari/.test(navigator.userAgent);
A && /iPad|iPhone|iPod/.test(navigator.userAgent) && window.MSStream;
A && /Android/.test(navigator.userAgent);
A && /^(?=.*Chrome).*/i.test(navigator.userAgent);
A && /AppleWebKit\/[\d.]+/.test(navigator.userAgent);
export let $findMatchingParent = (e, t) => {
  let n = e;
  for (; n !== $getRoot() && null != n;) {
    if (t(n)) return n;
    n = n.getParent();
  }
  return null;
};
export function $wrapNodeInElement(e, t) {
  let n = t();
  e.replace(n);
  n.append(e);
  return n;
}
export function objectKlassEquals(e, t) {
  return null !== e && Object.getPrototypeOf(e).constructor.name === t.name;
}
export function $filter(e, t) {
  let n = [];
  for (let r = 0; r < e.length; r++) {
    let i = t(e[r]);
    null !== i && n.push(i);
  }
  return n;
}
export const Bt = $findMatchingParent;
export const HE = removeClassNamesFromElement;
export const Sd = mergeRegister;
export const ZB = addClassNamesToElement;
export const cj = $wrapNodeInElement;
export const eu = $getNearestNodeOfType;
export const mB = $getNearestBlockElementAncestorOrThrow;
export const xj = objectKlassEquals;
export const zD = $filter;
