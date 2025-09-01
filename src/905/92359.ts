import { oV } from "../905/216495";
export function $$r2(e) {
  return `RETRIEVING_SUBSCRIBED_COMPONENTS_AND_STATE_GROUPS_${e}`;
}
export function $$a0(e, t) {
  return `SWAPPING_INSTANCE_${e.library_key}_${e.node_id}_${t.join(",")}`;
}
export function $$s1(e, t) {
  let i = null;
  let r = null;
  let a = !0;
  switch (e.size) {
    case 0:
      i = null;
      break;
    case 1:
      let [s] = e;
      i = s;
      break;
    default:
      i = oV;
  }
  let o = new Set([...e].map(e => {
    let i = t.get(e);
    return i?.isState ? i.parentGuid : (a = !1, null);
  }).filter(Boolean));
  switch (o.size) {
    case 0:
      r = null;
      break;
    case 1:
      r = a ? o.values().next().value : oV;
      break;
    default:
      r = oV;
  }
  return {
    backingSymbolGUID: i,
    backingStateGroupGUID: r
  };
}
export const Ml = $$a0;
export const nD = $$s1;
export const yD = $$r2;