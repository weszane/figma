export function $$n4(e) {
  e.setSelectionRange(0, 0);
}
export function $$r1(e) {
  let t = e.value.length;
  e.setSelectionRange(t, t);
}
export function $$a2(e) {
  let t = window.getSelection();
  return !!(t && !t.isCollapsed && t.toString().length > 0 && (e.contains(t.anchorNode) || e.contains(t.focusNode)));
}
export function $$s0(e) {
  var t;
  "LABEL" === e.nodeName && (e = e.control ?? e);
  return !!("TEXTAREA" === (t = e).nodeName || "INPUT" === t.nodeName && /^(text|search|url|tel|password)$/i.test(t.type)) && $$o3(e);
}
export function $$o3(e) {
  return e.selectionStart !== e.selectionEnd;
}
export const GC = $$s0;
export const c7 = $$r1;
export const eB = $$a2;
export const f5 = $$o3;
export const fh = $$n4;