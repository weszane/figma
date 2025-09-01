import { mD } from "../vendor/601638";
let n = "undefined" != typeof Element && "checkVisibility" in Element.prototype;
function r(e, t) {
  return n ? e.checkVisibility() : "#comment" !== e.nodeName && function (e) {
    let t = mD(e);
    if (!(e instanceof t.HTMLElement) && !(e instanceof t.SVGElement)) return !1;
    let {
      display,
      visibility
    } = e.style;
    let r = "none" !== display && "hidden" !== visibility && "collapse" !== visibility;
    if (r) {
      let {
        getComputedStyle
      } = e.ownerDocument.defaultView;
      let {
        display,
        visibility
      } = getComputedStyle(e);
      r = "none" !== display && "hidden" !== visibility && "collapse" !== visibility;
    }
    return r;
  }(e) && !e.hasAttribute("hidden") && !e.hasAttribute("data-react-aria-prevent-focus") && ("DETAILS" !== e.nodeName || !t || "SUMMARY" === t.nodeName || e.hasAttribute("open")) && (!e.parentElement || r(e.parentElement, e));
}
let i = ["input:not([disabled]):not([type=hidden])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "a[href]", "area[href]", "summary", "iframe", "object", "embed", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable^="false"])', "permission"];
let o = i.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
i.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
let l = i.join(':not([hidden]):not([tabindex="-1"]),');
export function $$s0(e) {
  return e.matches(o) && r(e) && !c(e);
}
export function $$d1(e) {
  return e.matches(l) && r(e) && !c(e);
}
function c(e) {
  let t = e;
  for (; null != t;) {
    if (t instanceof t.ownerDocument.defaultView.HTMLElement && t.inert) return !0;
    t = t.parentElement;
  }
  return !1;
}
export const t = $$s0;
export const A = $$d1;