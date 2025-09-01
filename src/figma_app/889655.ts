import { Mz } from "../vendor/925040";
import { Zm, P8 } from "../905/270781";
import { bt } from "../905/270322";
let $$s9 = e => e.mirror.sceneGraphSelection;
let $$o11 = e => e.mirror.sceneGraph;
let $$l14 = e => e.mirror.appModel;
let $$d7 = Zm(e => Object.keys($$s9(e)));
export function $$c19(e) {
  let t = $$d7(e);
  let r = t[0];
  return 1 === t.length && r ? r : null;
}
export function $$u10(e) {
  let t = $$d7(e);
  return t.length > 1 ? t : null;
}
let $$p2 = Mz([$$o11, $$c19], (e, t) => t ? e.get(t) : null);
let _ = () => (e, t) => $$o11(e).get(t);
export function $$h16() {
  let e = _();
  return Zm((t, r) => {
    let n = e(t, r);
    return null == n ? null : {
      key: n.styleKeyForPublish,
      version: n.styleVersionHash
    };
  });
}
export function $$m0() {
  let e = $$h16();
  return Zm((t, r) => new Map(r.map(r => [r, e(t, r)])));
}
export function $$g1(e) {
  return e.mirror.selectionProperties.numSelected || 0;
}
export let $$f12 = P8([$$d7, $$o11], $$E15);
export function $$E15(e, t) {
  let r = [];
  e.forEach(e => {
    let n = t.get(e);
    (n?.type === "INSTANCE" || n?.isInstanceSublayer) && r.push(e);
  });
  return r;
}
let $$y4 = Mz([$$o11, $$d7], (e, t) => {
  let r = [];
  t.forEach(t => {
    let n = e.get(t);
    n && r.push(n);
  });
  return r;
});
let $$b6 = Zm(e => e.library.publishableStyles.map(e => e.nodeId));
let $$T5 = Zm(e => e.library.localStylesThatHaveUsagesOnLoadedPages);
let $$I17 = Zm(e => new Set(e.library.localStylesThatHaveUsagesOnCurrentPage));
let $$S18 = bt($$T5);
let $$v8 = Zm(e => e.library.localSymbolsThatHaveUsagesOnLoadedPages);
let $$A3 = Zm(e => new Set(e.library.localSymbolsThatHaveUsagesOnCurrentPage));
export function $$x13(e, t) {
  let r = $$o11(e);
  return !r.get(t)?.visible;
}
export const $4 = $$m0;
export const $u = $$g1;
export const AF = $$p2;
export const BA = $$A3;
export const F4 = $$y4;
export const O1 = $$T5;
export const RW = $$b6;
export const Sh = $$d7;
export const T_ = $$v8;
export const Xt = $$s9;
export const a$ = $$u10;
export const dK = $$o11;
export const dT = $$f12;
export const f5 = $$x13;
export const nj = $$l14;
export const rT = $$E15;
export const t = $$h16;
export const tX = $$I17;
export const tn = $$S18;
export const vD = $$c19;