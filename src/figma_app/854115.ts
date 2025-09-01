import { eU } from "../figma_app/27355";
export let $$n0 = eU([]);
export function $$i1(e, t, r) {
  let n = t.get(e);
  let i = t.get(n?.symbolId ?? "");
  if (i?.componentKey) {
    let e = r.getInternalCanvas();
    for (let t of e?.childrenNodes ?? []) {
      if (t.componentKey === i?.componentKey) return t.guid;
      if (t.isStateGroup) {
        for (let e of t.childrenNodes) if (e.componentKey === i?.componentKey) return e.guid;
      }
    }
  }
  return i?.publishID;
}
export const J = $$n0;
export const n = $$i1;