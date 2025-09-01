import { createPortal } from "../vendor/944059";
import { eU, md } from "../figma_app/27355";
import { yA } from "../figma_app/581520";
let s = "curator-portal-target";
let o = "portal-target-no-fullscreen-intercept";
let l = eU(() => {
  let e = document.getElementById(s);
  if (null != e) return e;
  let t = document.createElement("div");
  t.id = s;
  t.classList.add(...yA.split(" "));
  document.body.appendChild(t);
  return t;
});
let d = eU(() => {
  let e = document.getElementById(o);
  if (null != e) return e;
  let t = document.createElement("div");
  t.id = o;
  t.classList.add(...yA.split(" "));
  document.body.appendChild(t);
  return t;
});
export function $$c0({
  children: e,
  dataFullscreenIntercept: t = !0
}) {
  let i = md(t ? l : d);
  return createPortal(e, i);
}
export const Q = $$c0;