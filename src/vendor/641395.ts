import { O } from "../vendor/240444";
import { Kg } from "../vendor/314131";
let f = O;
export function $$r1(e, n = {}) {
  if (!e) return "<unknown>";
  try {
    let i;
    let r = e;
    let a = [];
    let o = 0;
    let u = 0;
    let l = Array.isArray(n) ? n : n.keyAttrs;
    let d = !Array.isArray(n) && n.maxStringLength || 80;
    for (; r && o++ < 5 && (i = function (e, n) {
      let i = [];
      if (!e || !e.tagName) return "";
      if (f.HTMLElement && e instanceof HTMLElement && e.dataset) {
        if (e.dataset.sentryComponent) return e.dataset.sentryComponent;
        if (e.dataset.sentryElement) return e.dataset.sentryElement;
      }
      i.push(e.tagName.toLowerCase());
      let r = n && n.length ? n.filter(n => e.getAttribute(n)).map(n => [n, e.getAttribute(n)]) : null;
      if (r && r.length) r.forEach(e => {
        i.push(`[${e[0]}="${e[1]}"]`);
      });else {
        e.id && i.push(`#${e.id}`);
        let n = e.className;
        if (n && Kg(n)) for (let e of n.split(/\s+/)) i.push(`.${e}`);
      }
      for (let n of ["aria-label", "type", "name", "title", "alt"]) {
        let t = e.getAttribute(n);
        t && i.push(`[${n}="${t}"]`);
      }
      return i.join("");
    }(r, l), "html" !== i && (!(o > 1) || !(u + 3 * a.length + i.length >= d)));) {
      a.push(i);
      u += i.length;
      r = r.parentNode;
    }
    return a.reverse().join(" > ");
  } catch (e) {
    return "<unknown>";
  }
}
export function $$a0() {
  try {
    return f.document.location.href;
  } catch (e) {
    return "";
  }
}
export function $$o2(e) {
  if (!f.HTMLElement) return null;
  let n = e;
  for (let e = 0; e < 5 && n; e++) {
    if (n instanceof HTMLElement) {
      if (n.dataset.sentryComponent) return n.dataset.sentryComponent;
      if (n.dataset.sentryElement) return n.dataset.sentryElement;
    }
    n = n.parentNode;
  }
  return null;
}
export const $N = $$a0;
export const Hd = $$r1;
export const xE = $$o2;