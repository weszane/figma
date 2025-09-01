export function $$n0(e) {
  let t = document.visibilityState;
  e ? (delete document.visibilityState, delete document.hidden) : Object.defineProperties(document, {
    visibilityState: {
      value: "hidden",
      configurable: !0
    },
    hidden: {
      value: !0,
      configurable: !0
    }
  });
  t !== document.visibilityState && (i = !1, document.dispatchEvent(new Event("visibilitychange", {
    bubbles: !0
  })));
  i = !e;
}
let i = !1;
window.addEventListener("visibilitychange", function (e) {
  i && (e.stopPropagation(), e.stopImmediatePropagation());
}, {
  capture: !0,
  passive: !0
});
export const R = $$n0;