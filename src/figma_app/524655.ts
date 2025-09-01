import { useMemo, useCallback } from "react";
import { wA } from "../vendor/514228";
import { Ez5, Egt, CNR } from "../figma_app/763686";
import { Y } from "../905/912236";
import { AD } from "../905/871411";
import { md } from "../figma_app/27355";
import { t } from "../905/303541";
import { F } from "../905/302958";
import { NX } from "../figma_app/456871";
import { ut } from "../figma_app/84367";
import { Fk, wA as _$$wA } from "../figma_app/167249";
import { y6 } from "../figma_app/803787";
import { Xm } from "../905/935570";
import { Sz } from "../figma_app/784857";
export function $$f9() {
  return Fk(e => e.getCurrentPage()?.focusedNodeId || AD);
}
export function $$E2(e) {
  Ez5 && (Ez5.singleSlideView().zoomToNode(e, 0), Ez5.singleSlideView().isFocusedNodeViewEnabled() || Ez5.singleSlideView().zoomToGrid(0));
}
export function $$y11(e) {
  return e.reduce((e, t) => e.concat(t), []);
}
export let $$b5 = {
  reorder: e => {},
  onMouseDown: e => {}
};
export function $$T8(e) {
  let t = [e, ...e.children].reduce(function (e, t) {
    t.number && e.push(t.number);
    return e;
  }, []) || [0];
  return [Math.min(...(t = 0 === t.length ? [0] : t)), Math.max(...t)];
}
export function $$I7(e, t, r, n, i) {
  let s = new Set(e);
  let o = i.filter(e => s.has(e));
  function l(e, t) {
    let r = n[e];
    let i = "number" == typeof t ? t : r.indent;
    let a = {
      ...r,
      children: []
    };
    if (0 !== i && d.length) {
      let e = r.isCollapsed ? [a, ...r.children] : [a];
      d[d.length - 1].children.push(...e);
    } else d.push(r.isCollapsed ? r : a);
  }
  let d = [];
  return (t.forEach(e => {
    n[e] && (s.has(e) ? o.forEach(e => {
      let t = n[e].indent + r;
      l(e, t <= 0 ? 0 : 1);
    }) : l(e));
  }), d.every(e => 0 === e.children.length)) ? (Ez5?.canvasGrid().setAreChildrenManuallyIndented(!1), [d.map(e => e.guid)]) : (1 === d.length && Ez5?.canvasGrid().setAreChildrenManuallyIndented(!0), d.map(e => [e.guid, ...e.children.map(e => e.guid)]));
}
export function $$S10(e, t) {
  if (!Ez5 || !Egt) return "";
  let r = Ez5.singleSlideView().focusedNodeId.getCopy();
  let {
    row,
    col
  } = Ez5.getInsertGridCoord({
    x: -1 / 0,
    y: -1 / 0
  });
  let s = Sz(row, col, t, !1);
  if (!s) return "";
  Ez5.singleSlideView()?.isFocusedNodeViewEnabled() && Ez5.singleSlideView().focusNodeInFocusedNodeView(s, !0);
  let o = e.get(s);
  let l = e.get(r);
  o && l?.sourceLibraryKey && (o.sourceLibraryKey = l.sourceLibraryKey);
  Egt.replaceSelection([s], !0);
  return s;
}
export function $$v4(e, t) {
  return useMemo(() => {
    let r = $$y11(e);
    let n = r.findIndex(e => e === t);
    return -1 === n || n === r.length - 1 ? null : r[n + 1];
  }, [e, t]);
}
export function $$A3() {
  let e = ut(Ez5?.canvasGrid().canvasGridArray, []);
  return _$$wA((e, t) => t.flat().reduce(({
    numSkippedSlides: t,
    numTotalSlides: r
  }, n) => {
    let i = e.get(n);
    Y(i) && (r += 1, i.isSkippedSlide && (t += 1));
    return {
      numSkippedSlides: t,
      numTotalSlides: r
    };
  }, {
    numSkippedSlides: 0,
    numTotalSlides: 0
  }), e);
}
export function $$x0() {
  let e = wA();
  let {
    numSkippedSlides,
    numTotalSlides
  } = $$A3();
  let a = Xm();
  let s = md(y6(a)).productComponents.modified.erroneous;
  return useCallback(n => {
    0 === numTotalSlides ? e(F.enqueue({
      message: t("file_permissions_modal.share_as.publish_template_slides_error_no_slides"),
      onDismiss: () => {}
    })) : numSkippedSlides > 0 ? e(F.enqueue({
      message: t("file_permissions_modal.share_as.publish_template_slides_error_skipped_slides"),
      onDismiss: () => {}
    })) : s.length > 0 ? e(F.enqueue({
      message: t("file_permissions_modal.share_as.publish_template_variant_error_slides"),
      onDismiss: () => {}
    })) : n();
  }, [e, s.length, numSkippedSlides, numTotalSlides]);
}
export function $$N1() {
  return Fk(() => NX().length > 0);
}
export function $$C6() {
  return {
    width: (CNR?.singleSlideThumbnailWidth() ?? 0) * 2,
    height: (CNR?.singleSlideThumbnailHeight() ?? 0) * 2
  };
}
export const $u = $$x0;
export const Cd = $$N1;
export const Lk = $$E2;
export const Nr = $$A3;
export const Rn = $$v4;
export const Wh = $$b5;
export const Z = $$C6;
export const _j = $$I7;
export const go = $$T8;
export const ie = $$f9;
export const oY = $$S10;
export const rY = $$y11;