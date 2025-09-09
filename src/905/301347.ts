import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { getI18nString } from "../905/303541";
import { VisualBellActions } from "../905/302958";
import { s as _$$s } from "../905/518538";
import { mW, qN } from "../905/123443";
export function $$d15() {
  return _$$s().linkGenerationParams;
}
let c = {
  xDelta: 0,
  yDelta: 0
};
export function $$u3() {
  return _$$s().dockPositionAdjustment ?? c;
}
export function $$p0() {
  return _$$s().sidebarBottomPaddingAdjustment ?? 50;
}
export function $$m4(e) {
  let t = _$$s().styleOverrideMap;
  return t?.get(e);
}
let h = {
  maxHeightDelta: 0,
  minBottomMarginDelta: 0,
  minLeftMarginDelta: 0,
  minRightMarginDelta: 0
};
export function $$g6() {
  return _$$s().draggableModalBoundsAdjustment ?? h;
}
let f = {
  paddingRight: 0
};
export function $$_8() {
  return _$$s().commentPositionPaddingAdjustment ?? f;
}
let A = [mW.RESOLVED, mW.YOURS, mW.CURRENT_PAGE];
export function $$y7() {
  return _$$s().sidebarFilters ?? A;
}
let b = [qN.CREATION_DATE, qN.UNREAD];
export function $$v2() {
  return _$$s().sidebarSorts ?? b;
}
export function $$I12() {
  return _$$s().sidebarModesDisabled ?? !1;
}
export function $$E14() {
  return _$$s().onDockSideEffect;
}
function x(e) {
  return !1;
}
export function $$S13() {
  return _$$s().isCommentingDisabledAtPosition ?? x;
}
export function $$w10() {
  let e = _$$s();
  let t = useDispatch();
  let i = getI18nString("comments.comments_cannot_be_placed_in_this_area");
  let l = e.commentDisabledPositionBellMessage ?? i;
  return useCallback(() => {
    t(VisualBellActions.enqueue({
      message: l
    }));
  }, [l, t]);
}
function C(e, t) {
  return null;
}
export function $$T9() {
  return _$$s().calculateSelectionCommentContainerBounds ?? C;
}
function k(e) {
  return e.pageName;
}
export function $$R11() {
  return _$$s().getParentName ?? k;
}
export function $$N5() {
  return _$$s().getOnCommentSelect;
}
export function $$P1() {
  return _$$s().sortComparatorOverrides;
}
export const Lc = $$p0;
export const Ld = $$P1;
export const Qj = $$v2;
export const Rf = $$u3;
export const UR = $$m4;
export const Ue = $$N5;
export const Y6 = $$g6;
export const Yo = $$y7;
export const eW = $$_8;
export const fG = $$T9;
export const gu = $$w10;
export const hB = $$R11;
export const lM = $$I12;
export const pC = $$S13;
export const sj = $$E14;
export const sn = $$d15;
