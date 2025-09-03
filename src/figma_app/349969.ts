import { assertNotNullish } from "../figma_app/465776";
import { E } from "../905/484990";
import { eo } from "../905/505138";
import { o as _$$o } from "../905/873528";
import { t as _$$t } from "../905/432457";
let l = [{
  deviceName: "Slide 16:9",
  framePresetSize: {
    x: 1920,
    y: 1080
  }
}, {
  deviceName: "Slide 4:3",
  framePresetSize: {
    x: 1024,
    y: 768
  }
}];
let $$d10 = Object.create(null);
for (let e of [eo, _$$o, _$$t, E]) for (let t of e) $$d10[t.presetIdentifier] = t;
function c(e, t) {
  let r = new Set();
  let n = [];
  for (let i of e) r.has(i.deviceName) || (r.add(i.deviceName), i.archived ? t?.push(i.deviceName) : n.push(i.deviceName));
  return n;
}
let $$u9 = [];
let $$p13 = c(eo, $$u9);
let $$_6 = c(_$$o, $$u9);
let $$h2 = c(_$$t, $$u9);
let $$m1 = c(E, $$u9);
let $$g14 = Object.create(null);
for (let e in $$d10) {
  let t = $$d10[e];
  let r = t.deviceName;
  r in $$g14 || ($$g14[r] = []);
  $$g14[r].push(t);
}
let f = (e, t) => {
  for (let r of [eo, _$$o, _$$t, E]) for (let n of r) if (n.framePresetSize.x === e && n.framePresetSize.y === t) return n;
  return null;
};
export function $$E0(e, t) {
  if ("NONE" === e || "PRESENTATION" === e) return !1;
  if ("CUSTOM" === e) return !0;
  if ("PRESET" === e && null != t) {
    let e = $$d10[t];
    if (null != e) {
      let t = -1 !== $$h2.indexOf(e.deviceName);
      let r = -1 !== $$m1.indexOf(e.deviceName);
      return !t && !r;
    }
  }
  return !1;
}
export var $$y8 = (e => (e[e.UNKNOWN = 0] = "UNKNOWN", e[e.PHONE = 1] = "PHONE", e[e.TABLET = 2] = "TABLET", e[e.WATCH = 3] = "WATCH", e[e.DESKTOP = 4] = "DESKTOP", e))($$y8 || {});
export function $$b12(e) {
  let t = $$d10[e];
  if (null == t) return 0;
  let r = t.deviceName;
  return -1 !== $$p13.indexOf(r) ? 1 : -1 !== $$_6.indexOf(r) ? 2 : -1 !== $$h2.indexOf(r) ? 3 : -1 !== $$m1.indexOf(r) ? 4 : 0;
}
export function $$T3(e, t) {
  for (let r of l) if (r.framePresetSize.x === e && r.framePresetSize.y === t) return {
    type: "PRESENTATION",
    presetIdentifier: "",
    portraitDeviceSize: {
      x: 0,
      y: 0
    },
    rotation: "NONE"
  };
  let r = f(e, t);
  return null != r ? {
    type: "PRESET",
    presetIdentifier: r.presetIdentifier,
    portraitDeviceSize: r.framePresetSize,
    rotation: "NONE"
  } : null != (r = f(t, e)) && $$E0("PRESET", r.presetIdentifier) ? {
    type: "PRESET",
    presetIdentifier: r.presetIdentifier,
    portraitDeviceSize: r.framePresetSize,
    rotation: "CCW_90"
  } : null;
}
export function $$I11(e) {
  let t = $$b12(e || "");
  return 4 !== t && 0 !== t;
}
c(eo.filter(function (e) {
  return !0 === e.isSuggested;
})).slice(0, 5);
c(_$$o).slice(0, 5);
c(_$$t).slice(0, 5);
c(E).slice(0, 5);
let $$S7 = e => !!function (e) {
  let t = $$d10[e];
  return t?.inlinePreviewInfo || null;
}(e);
let v = e => {
  new Image().src = e;
};
export function $$A5(e) {
  if (!e) return;
  let t = $$d10[e];
  assertNotNullish(t?.inlinePreviewInfo, "inline preview device info should not be null if we're preloading the device image. (presetDeviceSupportsInlinePreview == true)");
  v(t.url);
  v(t.inlinePreviewInfo.hitTargetSvgUrl);
}
export function $$x4(e, t) {
  let r = $$d10[e] || $$g14[e][0];
  if (t && "PRESET" === t.type) {
    let n = $$d10[t.presetIdentifier];
    let i = n.hideUnlessActive && !n.archived && r.framePresetSize.x === n.framePresetSize.x && r.framePresetSize.y === n.framePresetSize.y;
    if (n && n.deviceName === e) r = n;else if (!i && r.hideUnlessActive && !r.archived) return null;
  } else if (r.hideUnlessActive && !r.archived) return null;
  return r;
}
export const $X = $$E0;
export const $w = $$m1;
export const AG = $$h2;
export const BG = $$T3;
export const Fh = $$x4;
export const Gn = $$A5;
export const J_ = $$_6;
export const L_ = $$S7;
export const bq = $$y8;
export const dr = $$u9;
export const hY = $$d10;
export const ln = $$I11;
export const qt = $$b12;
export const r6 = $$p13;
export const yr = $$g14;