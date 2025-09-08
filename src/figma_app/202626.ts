import { hV, PA } from "../figma_app/387100";
import { fullscreenValue } from "../figma_app/455680";
import { wr, Dh } from "../figma_app/741237";
import { e as _$$e } from "../905/986107";
import { QZ } from "../figma_app/62612";
var $$l4 = (e => (e[e.FORWARD = 0] = "FORWARD", e[e.BACKWARD = 1] = "BACKWARD", e))($$l4 || {});
let $$d2 = "exp_tooltips_plus_onboarding";
let c = "product page";
function u(e, t) {
  return t.some(t => e.toLowerCase().startsWith(t.toLowerCase()));
}
export function $$p3(e, t, r) {
  let i;
  if (r?.type === t) return r;
  let a = $$h0(e);
  a && hV(a, e => {
    if (e.type === t) {
      i = e;
      return "stop";
    }
  });
  return i;
}
export function $$_5({
  nodeType: e,
  sceneGraph: t,
  preferredName: r,
  backupNames: i,
  ancestorName: a
}) {
  let s;
  let o = $$h0(t);
  if (!o) return s;
  let l = [];
  return (hV(o, t => {
    if (t.type === e && u(t.name, [r]) && (!a || a && function (e, t) {
      let r = e.parentNode;
      for (; r && !r.name.toLowerCase().startsWith(t.toLowerCase());) r = r.parentNode;
      return !!r?.name.toLowerCase().startsWith(t.toLowerCase());
    }(t, a))) {
      s = t;
      return "stop";
    }
    i && t.type === e && u(t.name, i) && l.push(t);
  }), s) ? s : l.length > 0 ? l[0] : void 0;
}
export function $$h0(e) {
  let t = null;
  try {
    t = e.getCurrentPage();
  } catch (e) {
    if (e.message !== _$$e) throw e;
  }
  return t;
}
export function $$m8(e) {
  return $$_5({
    nodeType: "TEXT",
    sceneGraph: e,
    preferredName: "heirloom tomato",
    backupNames: ["organic ginger", "sweet onion", "order summary", "we\u2019re farmers", "grown in"],
    ancestorName: c
  }) || $$p3(e, "TEXT");
}
export function $$g1(e) {
  let t = $$_5({
    nodeType: "TEXT",
    sceneGraph: e,
    preferredName: "heirloom tomato",
    backupNames: ["organic ginger", "sweet onion", "order summary", "we\u2019re farmers", "grown in"],
    ancestorName: c
  });
  if (t && "TEXT" === t.type) {
    let r = PA(e, t.guid);
    if (r?.type === "FRAME") return r;
  }
  return $$p3(e, "FRAME");
}
export function $$f6(e) {
  return $$_5({
    nodeType: "TEXT",
    sceneGraph: e,
    preferredName: "landing page title",
    backupNames: ["banner title", "playlist section title"]
  }) || $$p3(e, "TEXT");
}
export function $$E7(e) {
  return $$_5({
    nodeType: "FRAME",
    sceneGraph: e,
    preferredName: "hero image",
    backupNames: ["banner", "playlist cover image"]
  }) || $$p3(e, "FRAME");
}
export async function $$y9({
  navigate: e,
  guidToFocus: t,
  guidToSelect: r
}) {
  wr();
  await e(QZ({
    nodeId: t || r,
    alwaysPan: !1,
    minSizePx: t ? 200 : 32
  }));
  Dh([r]);
  fullscreenValue.commit();
}
export const Qf = $$h0;
export const aD = $$g1;
export const d4 = $$d2;
export const eN = $$p3;
export const en = $$l4;
export const gn = $$_5;
export const l7 = $$f6;
export const nt = $$E7;
export const wy = $$m8;
export const zU = $$y9;