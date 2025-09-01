import { eVK } from "../figma_app/763686";
let r = ["t", "u", "b", "d"];
let a = ["r", "l"];
let s = /([rltubdc])([rltubdc]?)\s*$/i;
var o = (e => (e[e.Vertical = 0] = "Vertical", e[e.Horizontal = 1] = "Horizontal", e[e.Center = 2] = "Center", e))(o || {});
let l = e => r.includes(e);
let d = e => a.includes(e);
let c = e => "c" === e;
let u = e => l(e) ? 0 : d(e) ? 1 : c(e) ? 2 : null;
let p = (e, t, i) => {
  switch (e) {
    case "b":
    case "d":
      switch (t) {
        case "l":
          return eVK.BOTTOM_LEFT;
        case "r":
          return eVK.BOTTOM_RIGHT;
        case null:
          return eVK.BOTTOM_CENTER;
      }
    case "t":
    case "u":
      switch (t) {
        case "l":
          return eVK.TOP_LEFT;
        case "r":
          return eVK.TOP_RIGHT;
        case null:
          return eVK.TOP_CENTER;
      }
    case null:
      switch (t) {
        case "l":
          return eVK.MIDDLE_LEFT;
        case "r":
          return eVK.MIDDLE_RIGHT;
        case null:
          if (i) return eVK.MIDDLE_CENTER;
      }
  }
  return null;
};
export function $$m1(e) {
  let t = e.match(s);
  if (!t || 2 !== t.length && 3 !== t.length) return null;
  let i = null;
  let n = null;
  let r = null;
  Array.from(t).slice(1).forEach(e => {
    let t = e.toLowerCase();
    let a = u(t);
    0 === a ? i = t : 1 === a ? n = t : 2 === a && (r = t);
  });
  return p(i, n, r);
}
export let $$h0 = e => e.replace(s, "");
export const q = $$h0;
export const v = $$m1;