function i() {
  return "undefined" != typeof window;
}
export function $$s12(e) {
  return h(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
export function $$o17(e) {
  var r;
  return e?.ownerDocument || e.ownerDocument || r.defaultView || window;
}
export function $$a9(e) {
  var r;
  return null == (r = (h(e) ? e.ownerDocument : e.document) || window.document) ? void 0 : r.documentElement;
}
function h(e) {
  return !!i() && (e instanceof Node || e instanceof $$o17(e).Node);
}
export function $$d16(e) {
  return !!i() && (e instanceof Element || e instanceof $$o17(e).Element);
}
export function $$p14(e) {
  return !!i() && (e instanceof HTMLElement || e instanceof $$o17(e).HTMLElement);
}
export function $$g4(e) {
  return !!i() && "undefined" != typeof ShadowRoot && (e instanceof ShadowRoot || e instanceof $$o17(e).ShadowRoot);
}
export function $$m7(e) {
  let {
    overflow,
    overflowX,
    overflowY,
    display
  } = $$k2(e);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !["inline", "contents"].includes(display);
}
export function $$v3(e) {
  return ["table", "td", "th"].includes($$s12(e));
}
export function $$y6(e) {
  return [":popover-open", ":modal"].some(r => {
    try {
      return e.matches(r);
    } catch (e) {
      return !1;
    }
  });
}
export function $$b13(e) {
  let r = $$x5();
  let n = $$d16(e) ? $$k2(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some(e => !!n[e] && "none" !== n[e]) || !!n.containerType && "normal" !== n.containerType || !r && !!n.backdropFilter && "none" !== n.backdropFilter || !r && !!n.filter && "none" !== n.filter || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some(e => (n.willChange || "").includes(e)) || ["paint", "layout", "strict", "content"].some(e => (n.contain || "").includes(e));
}
export function $$O11(e) {
  let r = $$S0(e);
  for (; $$p14(r) && !$$w10(r);) {
    if ($$b13(r)) return r;
    if ($$y6(r)) break;
    r = $$S0(r);
  }
  return null;
}
export function $$x5() {
  return "undefined" != typeof CSS && !!CSS.supports && CSS.supports("-webkit-backdrop-filter", "none");
}
export function $$w10(e) {
  return ["html", "body", "#document"].includes($$s12(e));
}
export function $$k2(e) {
  return $$o17(e).getComputedStyle(e);
}
export function $$_1(e) {
  return $$d16(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
export function $$S0(e) {
  if ("html" === $$s12(e)) return e;
  let r = e.assignedSlot || e.parentNode || $$g4(e) && e.host || $$a9(e);
  return $$g4(r) ? r.host : r;
}
function E(e) {
  let r = $$S0(e);
  return $$w10(r) ? e.ownerDocument ? e.ownerDocument.body : e.body : $$p14(r) && $$m7(r) ? r : E(r);
}
export function $$A15(e, r, n) {
  var i;
  void 0 === r && (r = []);
  void 0 === n && (n = !0);
  let s = E(e);
  let a = s === (null == (i = e.ownerDocument) ? void 0 : i.body);
  let h = $$o17(s);
  if (a) {
    let e = $$C8(h);
    return r.concat(h, h.visualViewport || [], $$m7(s) ? s : [], e && n ? $$A15(e) : []);
  }
  return r.concat(s, $$A15(s, [], n));
}
export function $$C8(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
export const $4 = $$S0;
export const CP = $$_1;
export const L9 = $$k2;
export const Lv = $$v3;
export const Ng = $$g4;
export const Tc = $$x5;
export const Tf = $$y6;
export const ZU = $$m7;
export const _m = $$C8;
export const ep = $$a9;
export const eu = $$w10;
export const gJ = $$O11;
export const mq = $$s12;
export const sQ = $$b13;
export const sb = $$p14;
export const v9 = $$A15;
export const vq = $$d16;
export const zk = $$o17;