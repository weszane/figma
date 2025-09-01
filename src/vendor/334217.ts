let u = new Set(["id"]);
let n = new Set(["aria-label", "aria-labelledby", "aria-describedby", "aria-details"]);
let r = new Set(["href", "hrefLang", "target", "rel", "download", "ping", "referrerPolicy"]);
let i = new Set(["dir", "lang", "hidden", "inert", "translate"]);
let o = new Set(["onClick", "onAuxClick", "onContextMenu", "onDoubleClick", "onMouseDown", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseOut", "onMouseOver", "onMouseUp", "onTouchCancel", "onTouchEnd", "onTouchMove", "onTouchStart", "onPointerDown", "onPointerMove", "onPointerUp", "onPointerCancel", "onPointerEnter", "onPointerLeave", "onPointerOver", "onPointerOut", "onGotPointerCapture", "onLostPointerCapture", "onScroll", "onWheel", "onAnimationStart", "onAnimationEnd", "onAnimationIteration", "onTransitionCancel", "onTransitionEnd", "onTransitionRun", "onTransitionStart"]);
let l = /^(data-.*)$/;
export function $$s0(e, t = {}) {
  let {
    labelable,
    isLink,
    global,
    events = c,
    propNames
  } = t;
  let D = {};
  for (let t in e) Object.prototype.hasOwnProperty.call(e, t) && (u.has(t) || labelable && n.has(t) || isLink && r.has(t) || global && i.has(t) || events && o.has(t) || t.endsWith("Capture") && o.has(t.slice(0, -7)) || propNames?.has(t) || l.test(t)) && (D[t] = e[t]);
  return D;
}
export const $ = $$s0;