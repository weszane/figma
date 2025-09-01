let $$n2 = {
  sessionID: -1,
  localID: -1
};
let $$r0 = "-1:-1";
let $$a8 = "[-1:-1]";
let $$s1 = ["-1:-1"];
let $$o3 = "0:0";
export function $$l6(e) {
  return !!e && (0 | e.localID) >= 0 && (0 | e.sessionID) >= 0;
}
export function $$d4(e, t) {
  return e && t ? e.sessionID === t.sessionID && e.localID === t.localID : e === t;
}
export function $$c5(e) {
  return e ? `${0 | e.sessionID}:${0 | e.localID}` : null;
}
export function $$u7(e) {
  if (!e) return null;
  let t = e.split(":");
  if (!t || 2 !== t.length) return null;
  let i = -1;
  let n = -1;
  try {
    i = parseInt(t[0]);
    n = parseInt(t[1]);
  } catch (e) {
    return null;
  }
  return isFinite(i) && isFinite(n) ? {
    sessionID: i,
    localID: n
  } : null;
}
export const AD = $$r0;
export const EP = $$s1;
export const Hr = $$n2;
export const Xy = $$o3;
export const aI = $$d4;
export const dI = $$c5;
export const fn = $$l6;
export const sH = $$u7;
export const x7 = $$a8;