import { assert, assertNotNullish } from "../figma_app/465776";
import { RotationType } from "../figma_app/763686";
import { hY } from "../figma_app/349969";
export function $$s0(e) {
  let t = e.getCurrentPage();
  assert(!!t, "expected currentPage to exist");
  let r = t.prototypeDevice;
  return r ? r.presetIdentifier : null;
}
export function $$o3(e, t, r) {
  let i = t.x / t.y;
  let a = e.x / e.y;
  assert(.01 > Math.abs(i - a), `Expected ${i} \u2248 ${a}`);
  let s = e.x / t.x;
  return {
    x: r.x * s,
    y: r.y * s
  };
}
export function $$l1(e, t, r) {
  let n = e.x / r.x;
  return {
    x: t.x * n,
    y: t.y * n
  };
}
let d = e => {
  let t = hY[e];
  assertNotNullish(t, "getDeviceImageIdealSize must take in a valid presetIdentifier");
  return {
    x: t.imageSize.x / t.scaleFactor,
    y: t.imageSize.y / t.scaleFactor
  };
};
export function $$c4(e, t) {
  let r = e => ({
    x: e.y,
    y: e.x
  });
  let {
    framePresetSize,
    offset
  } = hY[e];
  let o = d(e);
  let l = t === RotationType.CCW_90;
  let c = {
    x: o.x - framePresetSize.x - offset.x,
    y: offset.y
  };
  return l ? {
    idealDeviceSize: r(o),
    framePresetSize: r(framePresetSize),
    offset: r(c)
  } : {
    idealDeviceSize: o,
    framePresetSize,
    offset
  };
}
export function $$u2(e, t) {
  let r = hY[e];
  let i = hY[t];
  assertNotNullish(r, "expected device1 to exist");
  assertNotNullish(i, "expected device2 to exist");
  return r.deviceName === i.deviceName && r.imageSize.x === i.imageSize.x && r.imageSize.y === i.imageSize.y;
}
export const $W = $$s0;
export const BX = $$l1;
export const Ew = $$u2;
export const Ho = $$o3;
export const is = $$c4;