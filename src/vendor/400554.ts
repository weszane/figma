import { Ng } from "../vendor/601638";
import { Nf } from "../vendor/790637";
export function $$r1(e, t) {
  if (!Nf()) return !!t && !!e && e.contains(t);
  if (!e || !t) return !1;
  let a = t;
  for (; null !== a;) {
    if (a === e) return !0;
    a = "SLOT" === a.tagName && a.assignedSlot ? a.assignedSlot.parentNode : Ng(a) ? a.host : a.parentNode;
  }
  return !1;
}
export let $$i0 = (e = document) => {
  var t;
  if (!Nf()) return e.activeElement;
  let a = e.activeElement;
  for (; a && "shadowRoot" in a && a.shadowRoot?.activeElement;) a = a.shadowRoot.activeElement;
  return a;
};
export function $$o2(e) {
  return Nf() && e.target.shadowRoot && e.composedPath ? e.composedPath()[0] : e.target;
}
export const bq = $$i0;
export const sD = $$r1;
export const wt = $$o2;