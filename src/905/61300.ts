import { sessionLocalIDToString } from "../905/871411";
import { BranchType } from "../905/535806";
export function $$a2(e, t, i) {
  let a = new Set();
  for (let e of t) {
    for (let t of $$s3(e, BranchType.MAIN)) a.add(t);
    for (let t of $$s3(e, BranchType.BRANCH)) a.add(t);
  }
  return e.filter(e => !a.has(sessionLocalIDToString(e.mainChunk.displayNode.guid)) && !i.includes(sessionLocalIDToString(e.mainChunk.displayNode.guid)));
}
export function $$s3(e, t) {
  return t === BranchType.BRANCH ? e.branchChunks.map(e => sessionLocalIDToString(e.displayNode.guid)).concat(e.secondaryBranchChunkGUIDs) : e.sourceChunks.map(e => sessionLocalIDToString(e.displayNode.guid)).concat(e.secondarySourceChunkGUIDs);
}
export function $$o0(e) {
  return e.displayNode.componentKey ? e.displayNode.componentKey : sessionLocalIDToString(e.displayNode.guid);
}
export function $$l1(e, t, i) {
  if (e.length < 2 && t.length < 2) return [[e.length ? e[0] : void 0, t.length ? t[0] : void 0]];
  let n = 0;
  let r = 0;
  let a = e.map(i);
  let s = t.map(i);
  let o = new Set(s);
  let l = [];
  for (;;) {
    let i = a[n];
    let d = s[r];
    if (!i && !d) break;
    i ? d ? i === d ? (o.$$delete(d), l.push([e[n], t[r]]), ++n, ++r) : o.has(i) ? (o.$$delete(d), l.push([void 0, t[r]]), ++r) : (l.push([e[n], void 0]), ++n) : (l.push([e[n], void 0]), ++n) : (l.push([void 0, t[r]]), ++r);
  }
  return l;
}
export const Hm = $$o0;
export const lp = $$l1;
export const tF = $$a2;
export const ue = $$s3;