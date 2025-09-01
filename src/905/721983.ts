import { eU } from "../figma_app/27355";
import { lY } from "../905/104795";
export function $$a6(e, t, i) {
  let n = {
    ...e
  };
  let r = !1;
  for (let e of t) {
    r = r || n[e] !== i;
    n[e] = i;
  }
  return r ? n : e;
}
export function $$s1(e, t) {
  let i = {
    ...e
  };
  let n = !1;
  for (let e of t) {
    n = n || e in i;
    delete i[e];
  }
  return n ? i : e;
}
var o = (e => (e[e.No = 0] = "No", e[e.Yes = 1] = "Yes", e))(o || {});
export function $$l2(e, t, i, n = 1) {
  let r = [t, ...i];
  return e[t] ? n ? $$s1(e, r) : $$a6(e, r, !1) : $$a6(e, r, !0);
}
function d(e) {
  return function (e = 1, t = eU({})) {
    return eU(e => e(t), (i, n, r, a) => {
      n(t, $$l2(i(t), r, a ?? [], e));
    });
  }(0, eU(t => t(lY)[e] ?? {}, (t, i, n) => i(lY, t => ({
    ...t,
    [e]: n
  }))));
}
let $$c5 = d("middlePanelExpandedProperties");
let $$u0 = d("middlePanelPinnedProperties");
let $$p3 = d("rightPanelExpandedProperties");
let $$m4 = d("rightPanelPinnedProperties");
export const A9 = $$u0;
export const IO = $$s1;
export const X9 = $$l2;
export const _Y = $$p3;
export const fQ = $$m4;
export const l3 = $$c5;
export const nE = $$a6;