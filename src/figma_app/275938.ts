import { useMemo } from "react";
import { isNotNullish } from "../figma_app/95419";
import { l as _$$l } from "../905/716947";
import { eU, md } from "../figma_app/27355";
import { M4, IT } from "../905/713695";
import { Z } from "../905/939602";
let $$d4 = M4.Query({
  fetch: async () => (await Z.getDefaultLibraries({
    editorType: "whiteboard_shapes"
  })).data.meta
});
let $$c3 = eU(e => {
  let t = e($$d4({}));
  return t.data ? new Set(t.data.files.map(e => e.library_key).filter(isNotNullish).map(_$$l)) : new Set();
});
let $$u0 = eU(e => {
  let t = e($$d4({}));
  if (!t.data) return {};
  let r = {};
  for (let e of t.data.files) {
    let t = e.library_key;
    t && (r[_$$l(t)] = e.name);
  }
  return r;
});
export function $$p6() {
  let [e] = IT($$d4({}));
  let t = useMemo(() => e.data ? e.data.files : [], [e]);
  let r = useMemo(() => {
    if (!e.data) return {};
    let t = {};
    let r = e.data.components;
    let n = e.data.state_groups;
    for (let e of r) {
      let r = e.library_key;
      !r || e.containing_frame?.containingStateGroup || (t[r] ??= []).push(e);
    }
    for (let e of n) {
      let r = e.library_key;
      r && (t[r] ??= []).push(e);
    }
    Object.values(t).forEach(e => {
      e.sort((e, t) => e.name.localeCompare(t.name));
    });
    return t;
  }, [e]);
  return {
    libraryItems: useMemo(() => ({
      subscribedFiles: t,
      libraryKeyToSubscribedItems: r
    }), [t, r]),
    metadata: e.data?.library_metadata_by_library_key
  };
}
export function $$_5(e, t) {
  return e[t] ?? "";
}
export function $$h2(e) {
  return $$_5(md($$u0), e);
}
export function $$m1() {
  return md($$c3);
}
export const Ai = $$u0;
export const Kl = $$m1;
export const dF = $$h2;
export const e3 = $$c3;
export const oH = $$d4;
export const ot = $$_5;
export const uE = $$p6;