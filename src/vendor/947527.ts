import { m } from "../vendor/284505";
import { Ay } from "../vendor/776654";
let o = (e, r) => void 0 === e ? void 0 : "object" != typeof e ? Ay(e) : void 0 !== e.mode ? e : r ? {
  ...e,
  mode: r
} : void 0;
let $$a0 = (e = "rgb") => r => void 0 !== (r = o(r, e)) ? r.mode === e ? r : m[r.mode][e] ? m[r.mode][e](r) : "rgb" === e ? m[r.mode].rgb(r) : m.rgb[e](m[r.mode].rgb(r)) : void 0;
export const A = $$a0;