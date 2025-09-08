import { sessionLocalIDToString } from "../905/871411";
export function $$i0(e, t, r) {
  if (!t) return null;
  let i = (() => {
    let i;
    let a = e.library.used__LIVEGRAPH.sourceAssetKeyToDestinationKey[t];
    if (a) return a;
    if (!r) return null;
    if ("type" in r) {
      let t = e.library.local.styles[r.node_id];
      if (t?.key !== r.key) return null;
      i = t.node_id;
    } else i = sessionLocalIDToString(r.guid);
    return i ? e.library.used__LIVEGRAPH.localNodeIdToDestinationKey[i] : null;
  })();
  return e.library.used__LIVEGRAPH.styles[i ?? t] ?? null;
}
export function $$a1(e, t) {
  let {
    stylePreviewShown
  } = e;
  return stylePreviewShown.isShown && !stylePreviewShown.isCreating && stylePreviewShown.style === t;
}
export const b = $$i0;
export const e = $$a1;