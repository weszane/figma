let n = {
  wdth: "WIDTH",
  wght: "WEIGHT",
  slnt: "SLANT"
};
let $$r4 = "wght";
let a = "opsz";
let $$s3 = {
  ...n,
  ital: "ITALIC",
  opsz: "OPTICAL SIZE",
  mono: "MONOSPACE",
  grad: "GRADE",
  xhgt: "XHEIGHT"
};
export function $$o2(e) {
  let t = 0;
  for (let i = 0; i < 4; i++) {
    t <<= 8;
    t += e.codePointAt(i) ?? 0;
  }
  return t;
}
export function $$l0(e) {
  let t = "";
  for (let i = 3; i >= 0; i--) t += String.fromCharCode(e >> 8 * i & 255);
  return t;
}
export function $$d1(e) {
  return e.sort((e, t) => e.tag === a ? 1 : t.tag === a || e.tag in n && !(t.tag in n) ? -1 : !(e.tag in n) && t.tag in n ? 1 : e.tag.localeCompare(t.tag));
}
export const El = $$l0;
export const H0 = $$d1;
export const cx = $$o2;
export const mI = $$s3;
export const o = $$r4;