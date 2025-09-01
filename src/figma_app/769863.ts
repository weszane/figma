export function $$n1(e, t) {
  return e.find(e => t === e.toolId);
}
export function $$i3(e, t) {
  return e.find(e => t === e.text);
}
export function $$a4(e, t) {
  return !!$$n1(e, t);
}
export function $$s0(e) {
  let t = e.find(e => !e.disabled);
  if (!t) throw Error("Expected to have an enabled tool");
  return t;
}
export function $$o2(e) {
  "keydown" === e.type && "code" in e && ["Space", "Enter"].includes(e.code) && e.currentTarget.blur();
}
export const OT = $$s0;
export const Tp = $$n1;
export const Yq = $$o2;
export const fW = $$i3;
export const wK = $$a4;