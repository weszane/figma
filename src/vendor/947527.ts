import { converters } from "../vendor/284505";
import { parse } from "../vendor/776654";
let o = (e, r) => void 0 === e ? void 0 : "object" != typeof e ? parse(e) : void 0 !== e.mode ? e : r ? {
  ...e,
  mode: r
} : void 0;
let $$a0 = (e = "rgb") => r => void 0 !== (r = o(r, e)) ? r.mode === e ? r : converters[r.mode][e] ? converters[r.mode][e](r) : "rgb" === e ? converters[r.mode].rgb(r) : converters.rgb[e](converters[r.mode].rgb(r)) : void 0;
export const A = $$a0;