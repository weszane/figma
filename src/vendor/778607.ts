import { $$default } from "@emotion/is-prop-valid";
let i = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "transformValues", "custom", "inherit", "onLayoutAnimationStart", "onLayoutAnimationComplete", "onLayoutMeasure", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "viewport"]);
function s(e) {
  return e.startsWith("while") || e.startsWith("drag") && "draggable" !== e || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || i.has(e);
}
let o = e => !s(e);
export function $$a1(e) {
  e && (o = r => r.startsWith("on") ? !s(r) : e(r));
}
try {
  $$a1($$default);
} catch (e) {}
export function $$h0(e, r, n) {
  let i = {};
  for (let a in e) ("values" !== a || "object" != typeof e.values) && (o(a) || !0 === n && s(a) || !r && !s(a) || e.draggable && a.startsWith("onDrag")) && (i[a] = e[a]);
  return i;
}
export const J = $$h0;
export const D = $$a1;