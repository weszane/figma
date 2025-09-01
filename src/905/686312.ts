export function $$n1(e, t = {}, i = null) {
  i || (i = document.createElement("canvas"));
  let r = null;
  try {
    r = e ? i.getContext("webgl2", t) : i.getContext("webgl", t);
  } catch {}
  return r;
}
export function $$r2(e, t = null) {
  let i = $$n1(e, {
    powerPreference: "high-performance"
  }, t);
  i || (i = $$n1(e, {
    powerPreference: "default"
  }, t));
  return i;
}
export function $$a0(e, t, i) {
  let n = i.registerContext(e, t);
  i.makeContextCurrent(n);
}
export const Rx = $$a0;
export const j9 = $$n1;
export const zD = $$r2;