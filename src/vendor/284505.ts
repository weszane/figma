import { A } from "../vendor/947527";
let $$s3 = {};
let o = {};
let $$a0 = [];
let $$h4 = {};
let d = e => e;
let $$p2 = e => ($$s3[e.mode] = {
  ...$$s3[e.mode],
  ...e.toMode
}, Object.keys(e.fromMode || {}).forEach(r => {
  $$s3[r] || ($$s3[r] = {});
  $$s3[r][e.mode] = e.fromMode[r];
}), e.ranges || (e.ranges = {}), e.difference || (e.difference = {}), e.channels.forEach(r => {
  if (void 0 === e.ranges[r] && (e.ranges[r] = [0, 1]), !e.interpolate[r]) throw Error(`Missing interpolator for: ${r}`);
  "function" == typeof e.interpolate[r] && (e.interpolate[r] = {
    use: e.interpolate[r]
  });
  e.interpolate[r].fixup || (e.interpolate[r].fixup = d);
}), o[e.mode] = e, (e.parse || []).forEach(r => {
  $$m(r, e.mode);
}), A(e.mode));
let $$g1 = e => o[e];
let $$m = (e, r) => {
  if ("string" == typeof e) {
    if (!r) throw Error("'mode' required when 'parser' is a string");
    $$h4[e] = r;
  } else "function" == typeof e && 0 > $$a0.indexOf(e) && $$a0.push(e);
};
export const T_ = $$a0;
export const Wi = $$g1;
export const b2 = $$p2;
export const m = $$s3;
export const yX = $$h4;