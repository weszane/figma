import { SlotSymbolType } from "../figma_app/338442";
import { useDeepEqualSceneValue } from "../figma_app/167249";
export function $$a1() {
  return useDeepEqualSceneValue(e => function (e) {
    let t = {
      numSlots: 0,
      includesInstanceSublayer: !1,
      includesAssignedSlot: !1
    };
    let r = e.find(e => e.isSlotReactive);
    if (!r) return t;
    let n = o(r);
    if (!n) return t;
    let i = !0;
    let a = 0;
    let s = !1;
    let l = !1;
    for (let t of e) {
      if (!t.isSlotReactive) {
        i = !1;
        continue;
      }
      o(t)?.explicitDefID !== n.explicitDefID && (i = !1);
      t.isInstanceSublayer && (s = !0);
      t.isAssignedSlot && (l = !0);
      a++;
    }
    return {
      slotPropertyDefinition: i ? n : void 0,
      numSlots: a,
      includesInstanceSublayer: s,
      includesAssignedSlot: l
    };
  }(e.getDirectlySelectedNodes()));
}
export function $$s0(e) {
  return useDeepEqualSceneValue((e, t) => {
    let r = e.get(t);
    return r ? o(r) : null;
  }, e);
}
function o(e) {
  if (!e.isSlotReactive) return null;
  let t = e.componentPropsJsonForNode;
  let r = t[e.guid];
  if (!r) return null;
  let i = r.correspondingSymbolSublayer ?? e.guid;
  let a = r.containingInstanceBackingSymbol ?? r.containingComponent;
  if (!i || !a) return null;
  let s = t[i]?.refs?.[SlotSymbolType.SLOT_CONTENT_ID];
  return s && s.isLinked ? t[a]?.defs?.[s.explicitDefID] ?? null : null;
}
export const pN = $$s0;
export const yt = $$a1;