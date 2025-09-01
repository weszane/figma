import { kul, h3O, dTb, Ats, egF } from "../figma_app/763686";
import { l } from "../905/412815";
import { n as _$$n } from "../905/347702";
let s = null;
let o = new Map();
export function $$l3(e, t) {
  if (t === s) return;
  let i = o.get(t);
  if (i) {
    for (let e of i) e();
    o.$$delete(t);
  }
  s = t;
}
let $$d8 = _$$n(e => e === s ? Promise.resolve() : new Promise(t => {
  let i = o.get(e);
  i ? i.push(t) : o.set(e, [t]);
}));
let $$c5 = _$$n(() => s === kul.JOINED);
export async function $$u2() {
  let e = h3O.detach();
  switch (e) {
    case dTb.SUCCESS:
      break;
    case dTb.TRIGGERED_DETACH:
      await $$d8(kul.DETACHED);
      break;
    default:
      throw Error(`Failed to detach multiplayer: ${dTb[e]}`);
  }
}
export async function $$p4() {
  let e = h3O.reattachAndSync();
  if (e === Ats.INTERNAL_ERROR) throw Error(`Failed to reattach and sync multiplayer: ${Ats[e]}`);
  await $$d8(kul.JOINED);
  await l();
}
export async function $$m1() {
  let e = h3O.abandonAndReattach();
  if (e === Ats.INTERNAL_ERROR) throw Error(`Failed to abandon changes and reattach multiplayer: ${Ats[e]}`);
  await $$d8(kul.JOINED);
}
export async function $$h9(e, t) {
  let i = egF.enterPreviewDetachedState(e, t);
  switch (i) {
    case dTb.SUCCESS:
      break;
    case dTb.TRIGGERED_DETACH:
      await $$d8(kul.DETACHED);
      egF.enterPreviewDetachedState(e, t);
      break;
    default:
      throw Error(`Failed to detach multiplayer: ${dTb[i]}`);
  }
}
export async function $$g7() {
  let e = egF.enterMergeDetachedState();
  switch (e) {
    case dTb.SUCCESS:
      break;
    case dTb.TRIGGERED_DETACH:
      await $$d8(kul.DETACHED);
      egF.enterMergeDetachedState();
      break;
    default:
      throw Error(`Failed to detach multiplayer: ${dTb[e]}`);
  }
}
export async function $$f6({
  fileMergeId: e,
  userId: t,
  allowEmptyMerge: i
}) {
  let a = egF.commitBranchingStagedChanges(e, t, i);
  if (a === Ats.INTERNAL_ERROR) throw Error(`Failed to reattach and sync multiplayer: ${Ats[a]}`);
  await $$d8(kul.JOINED);
  await l();
}
export async function $$_0(e = !0) {
  let t = egF.abandonBranchingChanges(e);
  if (t === Ats.INTERNAL_ERROR) throw Error(`Failed to abandon changes and reattach multiplayer: ${Ats[t]}`);
  await $$d8(kul.JOINED);
}
export const De = $$_0;
export const IZ = $$m1;
export const K7 = $$u2;
export const QI = $$l3;
export const dh = $$p4;
export const eN = $$c5;
export const lt = $$f6;
export const mN = $$g7;
export const oJ = $$d8;
export const w = $$h9;