import { mSn, Ez5, Nfd } from "../figma_app/763686";
import { Tq } from "../figma_app/243058";
import { getSingletonSceneGraph } from "../905/700578";
import { zl } from "../figma_app/27355";
import { tJ } from "../figma_app/741237";
import { xB, Jl, b5, wh, ZY, UM, qQ, Zr } from "../figma_app/114522";
export function $$d2(e, t) {
  if (t && !e.isLayerLikeCodeNode) return null;
  let r = e.isCodeFile ? e.guid : e.exportedFromCodeFile?.guid;
  let s = getSingletonSceneGraph();
  if (!r || !Tq.fromLocalNodeIdStr(r)) return null;
  let o = Tq.fromLocalNodeIdStr(r);
  if (!o) return null;
  let l = t ? mSn?.getPrimaryCodeInstanceFromLayerLikeCodeFile(s.scene, o) : mSn?.getPrimaryCodeInstanceFromCodeFile(s.scene, o);
  return l ? s.get(l) : null;
}
export function $$c0(e, t, r, i) {
  r(t);
  let a = $$d2(e, !0);
  xB(a ?? e);
  let o = zl.get(Jl);
  o && Ez5?.codeSelection().fullscreenCodeFileNodeId.set(o);
  i(Nfd.CODE);
  let c = e.isCodeFile ? e.guid : e.exportedFromCodeFile?.guid;
  c && zl.set(b5, c);
}
export function $$u1({
  node: e
}) {
  let t = zl.get(wh).includes(e.guid);
  let r = zl.get(ZY);
  if (t && r) {
    UM();
    return;
  }
  let i = getSingletonSceneGraph();
  let d = i.get(e.overrideKey);
  let c = mSn?.findMainComponentLikeCodeInstance(i.scene, e.guid);
  let u = c ? i.get(c) : null;
  e.isInstanceSublayer && d ? (zl.set(qQ, e.guid), tJ([d.id]), Zr(d)) : u ? (zl.set(qQ, e.guid), tJ([u.id]), Zr(u)) : t || Zr(e);
  Ez5?.codeSelection().showMainComponent.set(!0);
}
export const Pu = $$c0;
export const Py = $$u1;
export const VF = $$d2;