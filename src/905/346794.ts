import { SchemaJoinStatus, Multiplayer, DetachStatus, DetachError, DiffImpl } from "src/figma_app/763686";
import { awaitSync } from "src/905/412815";
import { n as _$$n } from "src/905/347702";
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
let $$c5 = _$$n(() => s === SchemaJoinStatus.JOINED);
export async function $$u2() {
  let e = Multiplayer.detach();
  switch (e) {
    case DetachStatus.SUCCESS:
      break;
    case DetachStatus.TRIGGERED_DETACH:
      await $$d8(SchemaJoinStatus.DETACHED);
      break;
    default:
      throw Error(`Failed to detach multiplayer: ${DetachStatus[e]}`);
  }
}
export async function $$p4() {
  let e = Multiplayer.reattachAndSync();
  if (e === DetachError.INTERNAL_ERROR) throw Error(`Failed to reattach and sync multiplayer: ${DetachError[e]}`);
  await $$d8(SchemaJoinStatus.JOINED);
  await awaitSync();
}
export async function $$m1() {
  let e = Multiplayer.abandonAndReattach();
  if (e === DetachError.INTERNAL_ERROR) throw Error(`Failed to abandon changes and reattach multiplayer: ${DetachError[e]}`);
  await $$d8(SchemaJoinStatus.JOINED);
}
export async function $$h9(e, t) {
  let i = DiffImpl.enterPreviewDetachedState(e, t);
  switch (i) {
    case DetachStatus.SUCCESS:
      break;
    case DetachStatus.TRIGGERED_DETACH:
      await $$d8(SchemaJoinStatus.DETACHED);
      DiffImpl.enterPreviewDetachedState(e, t);
      break;
    default:
      throw Error(`Failed to detach multiplayer: ${DetachStatus[i]}`);
  }
}
export async function $$g7() {
  let e = DiffImpl.enterMergeDetachedState();
  switch (e) {
    case DetachStatus.SUCCESS:
      break;
    case DetachStatus.TRIGGERED_DETACH:
      await $$d8(SchemaJoinStatus.DETACHED);
      DiffImpl.enterMergeDetachedState();
      break;
    default:
      throw Error(`Failed to detach multiplayer: ${DetachStatus[e]}`);
  }
}
export async function $$f6({
  fileMergeId: e,
  userId: t,
  allowEmptyMerge: i
}) {
  let a = DiffImpl.commitBranchingStagedChanges(e, t, i);
  if (a === DetachError.INTERNAL_ERROR) throw Error(`Failed to reattach and sync multiplayer: ${DetachError[a]}`);
  await $$d8(SchemaJoinStatus.JOINED);
  await awaitSync();
}
export async function $$_0(e = !0) {
  let t = DiffImpl.abandonBranchingChanges(e);
  if (t === DetachError.INTERNAL_ERROR) throw Error(`Failed to abandon changes and reattach multiplayer: ${DetachError[t]}`);
  await $$d8(SchemaJoinStatus.JOINED);
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
