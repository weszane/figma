import { useMemo, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { atomStoreManager } from "../figma_app/27355";
import { qp } from "../905/977779";
import { withParsedMeta } from "../905/405710";
import { liveStoreInstance } from "../905/713695";
import { vx } from "../905/91038";
import { e_ } from "../figma_app/803787";
import { dK } from "../figma_app/889655";
import { C9, jf } from "../figma_app/141508";
import { PrimaryWorkflowEnum } from "../figma_app/633080";
import { Z } from "../905/939602";
import { r as _$$r } from "../905/336143";
import { TE } from "../905/131786";
export function $$_1(e, t) {
  return [...t, ...e.filter(e => e.containing_frame?.containingStateGroup == null)];
}
export function $$A2({
  productComponentStats: e,
  libraryKey: t
}) {
  let i = atomStoreManager.get(qp);
  let o = t ? i[t] : void 0;
  let l = useMemo(() => $$_1(e?.components ?? [], e?.stateGroups ?? []), [e]);
  let h = function ({
    libraryKey: e
  }) {
    let t = useDispatch();
    let i = useSelector(dK);
    let a = useSelector(e_);
    let s = useSelector(vx);
    let o = useSelector(C9);
    let l = useSelector(jf);
    return useMemo(() => e ? (TE(i, o, l, a.publishedByLibraryKey, s, t)[e] ?? []).map(e => e.type === PrimaryWorkflowEnum.COMPONENT ? {
      ...e,
      num_existing_instances: 0,
      num_insertions: 0,
      num_detachments: 0
    } : {
      ...e,
      num_existing_instances: 0,
      num_insertions: 0,
      num_detachments: 0,
      num_states: 0
    }) : [], [t, e, s, a, i, o, l]);
  }({
    libraryKey: t
  });
  return o ? l : h;
}
export function $$y0(e) {
  let t = useSelector(dK);
  let i = useSelector(C9);
  let a = useSelector(jf);
  return useMemo(() => i.filter(i => {
    let n = t.get(i);
    return n?.isLooseComponent && n.sourceLibraryKey === e;
  }).length, [t, e, i]) + useMemo(() => a.filter(i => {
    let n = t.get(i);
    return n?.sourceLibraryKey === e;
  }).length, [t, a, e]);
}
export function $$b3(e) {
  let t = useContext(_$$r);
  return t?.allUsedStylesByLibraryKey[e]?.length ?? 0;
}
let $$v4 = liveStoreInstance.Query({
  fetch: async e => null == e ? [] : ((await Z.getLibraryStyles({
    libraryFileKey: e
  })).data.meta.styles ?? []).map(withParsedMeta)
});
let $$I5 = liveStoreInstance.Query({
  fetch: async e => null == e ? [] : ((await Z.getLibraryStylesByLibraryKey({
    libraryKey: e
  })).data.meta.styles ?? []).map(withParsedMeta)
});
export const Go = $$y0;
export const Tf = $$_1;
export const Ze = $$A2;
export const jN = $$b3;
export const lH = $$v4;
export const sU = $$I5;