export function $$n0(e) {
  e.stopPropagation();
  e.preventDefault();
  let t = document.createEvent("MouseEvents");
  t.initMouseEvent("contextmenu", !0, !0, window, e.button, e.screenX, e.screenY, e.clientX, e.clientY, e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, e.button, e.target);
  e.target.dispatchEvent(t);
}
export const j = $$n0;