import { AD } from "../905/871411";
import { getSingletonSceneGraph } from "../905/700578";
import { atomStoreManager } from "../figma_app/27355";
import { ed } from "../figma_app/164260";
export function $$o2(e) {
  let t = $$l4(e);
  return t ? c(t) : void 0;
}
export function $$l4(e) {
  var t;
  t = e;
  let r = $$u0(getSingletonSceneGraph().getCurrentPage()?.directlySelectedNodes, t);
  return 1 === r.length ? r[0] : void 0;
}
export function $$d5(e, t) {
  return $$u0(e, t).map(c);
}
function c(e) {
  let t = getSingletonSceneGraph().getCurrentPage();
  let r = t?.getSelectedTextRange();
  let n = {
    node: e,
    nodeText: e.characters,
    effectiveText: e.characters
  };
  r?.textNodeId === e.guid && r.start !== r.end && (n.selectionRange = r, n.effectiveText = e.characters.slice(r.start, r.end));
  return n;
}
export function $$u0(e, t) {
  if (!e) return [];
  let r = Array.isArray(e) ? e : [e];
  let n = t?.excludeStickyAuthor ?? !1;
  let i = [];
  let a = [];
  let s = e => {
    if (!t?.excludeLockedNodes || !e.locked) for (let r of (n && "STICKY" === e.type && e.authorNodeId && i.push(e.authorNodeId), function (e, t) {
      if ("TEXT" !== e.type) return !1;
      if (t?.excludeDigitsAndSpecialChar) {
        let t = e.characters.trim();
        let r = RegExp("^[\\d!@#$%^&*().]+$");
        if (t.match(r)) return !1;
      }
      return t?.allowEmpty || e.characters.trim().length > 0;
    }(e, t) && a.push(e), e.childrenNodes ?? [])) i.includes(r.id) || s(r);
  };
  for (let e of r) s(e);
  return a;
}
export function $$p1(e) {
  let t = atomStoreManager.get(ed);
  if (!t || t === AD) return [];
  let r = getSingletonSceneGraph().get(t);
  return r ? $$u0(r, e) : [];
}
export function $$_3() {
  let e = $$p1({
    allowEmpty: !1
  });
  e.sort((e, t) => {
    let r = e.absoluteTransform.m02 - t.absoluteTransform.m02;
    let n = e.absoluteTransform.m12 - t.absoluteTransform.m12;
    return 0 === r ? 0 === n ? e.guid.localeCompare(t.guid) : n : r;
  });
  return e;
}
export const Gc = $$u0;
export const NX = $$p1;
export const fN = $$o2;
export const mz = $$_3;
export const nl = $$l4;
export const on = $$d5;