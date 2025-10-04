import { A as converter } from "../vendor/947527";
let converters = {};
let o = {};
let parsers = [];
let colorProfiles = {};
let d = e => e;
let useMode = e => (converters[e.mode] = {
  ...converters[e.mode],
  ...e.toMode
}, Object.keys(e.fromMode || {}).forEach(r => {
  converters[r] || (converters[r] = {});
  converters[r][e.mode] = e.fromMode[r];
}), e.ranges || (e.ranges = {}), e.difference || (e.difference = {}), e.channels.forEach(r => {
  if (void 0 === e.ranges[r] && (e.ranges[r] = [0, 1]), !e.interpolate[r]) throw Error(`Missing interpolator for: ${r}`);
  "function" == typeof e.interpolate[r] && (e.interpolate[r] = {
    use: e.interpolate[r]
  });
  e.interpolate[r].fixup || (e.interpolate[r].fixup = d);
}), o[e.mode] = e, (e.parse || []).forEach(r => {
  useParser(r, e.mode);
}), converter(e.mode));
let getMode = e => o[e];
let useParser = (e, r) => {
  if ("string" == typeof e) {
    if (!r) throw Error("'mode' required when 'parser' is a string");
    colorProfiles[e] = r;
  } else "function" == typeof e && 0 > parsers.indexOf(e) && parsers.push(e);
};
export const T_ = parsers;
export const Wi = getMode;
export const b2 = useMode;
export const m = converters;
export const yX = colorProfiles;
