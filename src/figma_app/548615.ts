import { useMemo, useRef, useEffect } from "react";
import { useAtomWithSubscription } from "../figma_app/27355";
import { generateUUIDv4 } from "../905/871474";
import { l2 } from "../figma_app/584405";
import { OW, sc, A9, OX, A5 } from "../figma_app/407414";
import { NM, $C } from "../figma_app/99772";
import { QU } from "../figma_app/257614";
export function $$c3() {
  let e = useAtomWithSubscription(NM);
  let t = useAtomWithSubscription($C);
  let {
    isReady,
    numSuccessfulFixes
  } = useMemo(() => {
    let e = Array.from(t.values());
    let r = e.every(e => e?.status !== "loading");
    let n = e.filter(e => e?.status === "loaded").length;
    return {
      selectedFixes: e,
      isReady: r,
      numSuccessfulFixes: n
    };
  }, [t]);
  let s = useRef(null);
  useEffect(() => {
    e && (s.current = performance.now());
  }, [e]);
  useEffect(() => {
    if (isReady && e && s.current) {
      let t = performance.now() - s.current;
      OW(e, numSuccessfulFixes, t);
      s.current = null;
    }
  }, [e, isReady, numSuccessfulFixes]);
}
export function $$u4() {
  return 0 === useAtomWithSubscription(QU).violationCount;
}
export function $$p5() {
  let e = $$u4();
  let t = useAtomWithSubscription(NM);
  let r = useRef(null);
  useEffect(() => {
    if (!e && t) {
      r.current = performance.now();
      return;
    }
    if (t && r.current) {
      let e = performance.now() - r.current;
      sc(t, e);
      r.current = null;
    }
  }, [e, t, r]);
}
export function $$_2() {
  let e = l2();
  let t = useRef(null);
  useEffect(() => {
    if (!e) {
      t.current = performance.now();
      return;
    }
    if (t.current) {
      let e = performance.now() - t.current;
      A9(e);
      t.current = null;
    }
  }, [e, t]);
}
export function $$h1(e, t) {
  useEffect(() => {
    if (t) {
      let t = generateUUIDv4();
      OX({
        impressionId: t,
        source: e
      });
    }
  }, [t, e]);
}
export function $$m0({
  blockId: e,
  checkIsSelected: t,
  filteredItems: r,
  searchQuery: i
}) {
  let a = useMemo(() => ({
    selectedNodeIndex: r.findIndex(e => t(e)) ?? -1,
    numberOfItems: r.filter(e => "LIST" === e.type || "TEXT_STYLE_LIST" === e.type).length
  }), [t, r]);
  useEffect(() => {
    e && A5({
      blockId: e,
      searchQuery: i,
      hasOptionSelected: a.selectedNodeIndex > -1,
      numSuggestionsShown: a.numberOfItems
    });
  }, [i, e, a]);
}
export const Dm = $$m0;
export const KV = $$h1;
export const _9 = $$_2;
export const fR = $$c3;
export const gx = $$u4;
export const p6 = $$p5;