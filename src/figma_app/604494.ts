import { useCallback } from "react";
import { tx, eU, Iz, AY } from "../figma_app/27355";
import { g } from "../905/880308";
import { Jc } from "../905/946805";
let $$o1 = tx({});
let $$l10 = tx(null);
let $$d8 = tx("");
let $$c9 = eU(g());
let $$u7 = eU({
  loaded: !1,
  extensions: []
});
let $$p6 = tx(Jc.ALL);
let $$_13 = tx(null);
let $$h4 = eU(null);
let $$m11 = tx([]);
let $$g16 = Iz(e => eU(t => {
  let [r] = t($$m11);
  return r?.name === e;
}));
let $$f0 = eU(!1);
let $$E18 = eU(null);
let $$y14 = eU(0);
let $$b12 = eU(!1);
export function $$T5() {
  let e = AY($$l10);
  return useCallback(() => {
    e();
  }, [e]);
}
export function $$I17() {
  let e = AY($$l10);
  let t = AY($$d8);
  let r = AY($$m11);
  let a = AY($$p6);
  return useCallback(() => {
    e();
    t();
    r();
    a();
  }, [r, t, e, a]);
}
export function $$S15() {
  let e = AY($$d8);
  return useCallback(() => {
    e();
  }, [e]);
}
let $$v3 = eU(null);
let $$A2 = eU(null);
export const Bu = $$f0;
export const Bw = $$o1;
export const DZ = $$A2;
export const F3 = $$v3;
export const IH = $$h4;
export const JB = $$T5;
export const Lk = $$p6;
export const P_ = $$u7;
export const Q8 = $$d8;
export const Rt = $$c9;
export const TT = $$l10;
export const YH = $$m11;
export const ZG = $$b12;
export const dd = $$_13;
export const fq = $$y14;
export const hw = $$S15;
export const iV = $$g16;
export const jh = $$I17;
export const rE = $$E18;