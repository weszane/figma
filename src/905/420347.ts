import { useMemo, useRef } from "react";
import { shallowEqual } from "../vendor/514228";
import { isNotNullish } from "../figma_app/95419";
import { createRemovableAtomFamily, atom, useAtomWithSubscription, atomStoreManager } from "../figma_app/27355";
import { Bq } from "../905/760682";
import { Z } from "../905/939602";
import { tS } from "../figma_app/516028";
import { LH } from "../905/872904";
import { IT, M4 } from "../905/713695";
var $$n0;
let m = createRemovableAtomFamily(() => atom(null));
let h = createRemovableAtomFamily(e => atom(t => e.map(e => t(m(e)))), shallowEqual);
let $$g3 = atom(null, (e, t, i) => {
  i.filter(isNotNullish).forEach(e => {
    t(m(e.library_key), e);
  });
});
export function $$f1(e, t) {
  let i = useAtomWithSubscription(h(e)).filter(isNotNullish);
  let a = useMemo(() => new Set(i.map(e => e.library_key)), [i]);
  let d = useMemo(() => e.filter(e => !a.has(e)), [e, a]);
  let m = function (e) {
    let t = useMemo(() => new Set(e), [e]);
    let i = useRef(t);
    let n = i.current;
    useMemo(() => Bq(t, n), [t, n]) || (i.current = t);
    return useMemo(() => Array.from(n), [n]);
  }(d);
  let g = LH();
  let f = tS();
  let [_] = IT($$n0.LibrariesByLibraryKeysQuery({
    libraryKeys: t?.revalidateOnMount ? e : m,
    subscriptionFileKey: f,
    orgId: g
  }), {
    enabled: t?.revalidateOnMount || d.length > 0,
    revalidateOnMount: t?.revalidateOnMount
  });
  return "loading" === _.status ? {
    status: "loading",
    data: i
  } : {
    status: "loaded",
    data: i
  };
}
export function $$_2(e, t) {
  let i = $$f1(useMemo(() => e ? [e] : [], [e]), t);
  return useMemo(() => ({
    status: i.status,
    data: i.data[0] ?? null
  }), [i]);
}
($$n0 || ($$n0 = {})).LibrariesByLibraryKeysQuery = M4.Query({
  fetch: async ({
    libraryKeys: e,
    subscriptionFileKey: t,
    orgId: i
  }) => {
    if (0 === e.length) return [];
    let n = await Z.getLibrariesByLibraryKeys({
      libraryKeys: e,
      subscriptionFileKey: t,
      orgId: i
    });
    n.data.meta.forEach(e => {
      atomStoreManager.set(m(e.library_key), e);
    });
    return n.data.meta;
  },
  stalenessPolicy: "never"
});
export const Cs = $$n0;
export const bj = $$f1;
export const on = $$_2;
export const qU = $$g3;