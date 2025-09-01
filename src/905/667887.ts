import { x4 } from "../figma_app/211694";
export function $$r1() {
  let e = x4?.getItem("ddr_user_debug_flow");
  return !!e && new Date(e) > new Date();
}
export function $$a0(e, t) {
  let i;
  let n;
  let r = 3 & e.length;
  let a = e.length - r;
  let s = t;
  let o = 0;
  for (; o < a;) {
    n = 255 & e.charCodeAt(o) | (255 & e.charCodeAt(++o)) << 8 | (255 & e.charCodeAt(++o)) << 16 | (255 & e.charCodeAt(++o)) << 24;
    ++o;
    s ^= n = (65535 & (n = (n = (65535 & n) * 0xcc9e2d51 + (((n >>> 16) * 0xcc9e2d51 & 65535) << 16) & 0xffffffff) << 15 | n >>> 17)) * 0x1b873593 + (((n >>> 16) * 0x1b873593 & 65535) << 16) & 0xffffffff;
    s = (65535 & (i = (65535 & (s = s << 13 | s >>> 19)) * 5 + (((s >>> 16) * 5 & 65535) << 16) & 0xffffffff)) + 27492 + (((i >>> 16) + 58964 & 65535) << 16);
  }
  switch (n = 0, r) {
    case 3:
      n ^= (255 & e.charCodeAt(o + 2)) << 16;
    case 2:
      n ^= (255 & e.charCodeAt(o + 1)) << 8;
    case 1:
      n ^= 255 & e.charCodeAt(o);
      s ^= n = (65535 & (n = (n = (65535 & n) * 0xcc9e2d51 + (((n >>> 16) * 0xcc9e2d51 & 65535) << 16) & 0xffffffff) << 15 | n >>> 17)) * 0x1b873593 + (((n >>> 16) * 0x1b873593 & 65535) << 16) & 0xffffffff;
  }
  s ^= e.length;
  s ^= s >>> 16;
  s = (65535 & s) * 0x85ebca6b + (((s >>> 16) * 0x85ebca6b & 65535) << 16) & 0xffffffff;
  s ^= s >>> 13;
  s = (65535 & s) * 0xc2b2ae35 + (((s >>> 16) * 0xc2b2ae35 & 65535) << 16) & 0xffffffff;
  return (s ^= s >>> 16) >>> 0;
}
export const u = $$a0;
export const z = $$r1;