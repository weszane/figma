import { useMemo } from "react";
import { d4 } from "../vendor/514228";
import { oA } from "../905/663269";
export function $$s0() {
  let e = $$o2();
  return e?.find(e => e.inProgress);
}
export function $$o2() {
  let e = d4(e => e.mirror.appModel.pagesList);
  let t = useMemo(() => new Set(e.map(e => e.nodeId)), [e]);
  let r = d4(e => e?.openFile?.votingSessions || null);
  return useMemo(() => r ? r.filter(e => t.has(oA(e.pageNodeId) || "")) : null, [t, r]);
}
export function $$l1() {
  let e = d4(e => e.mirror.appModel.pagesList);
  let t = useMemo(() => new Set(e.map(e => e.nodeId)), [e]);
  let r = d4(e => e?.openFile?.votingSessions || null);
  return r?.find(e => e.inProgress && !t.has(oA(e.pageNodeId) || "")) || null;
}
export const C3 = $$s0;
export const NE = $$l1;
export const jz = $$o2;