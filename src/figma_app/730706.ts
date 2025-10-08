import { jsx } from "react/jsx-runtime";
import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { s as _$$s } from "../figma_app/478542";
import { getFeatureFlags } from "../905/601108";
import { useAtomWithSubscription } from "../figma_app/27355";
import { useLatestRef } from "../figma_app/922077";
import { getI18nString } from "../905/303541";
import { isDesignFileType, isWhiteboardFileType } from "../figma_app/976749";
import { YH } from "../figma_app/604494";
import { DMenuItemType, DButtonType } from "../figma_app/986347";
import { useIsFullscreenSlidesView } from "../figma_app/21029";
import { _B } from "../figma_app/602467";
import { Ne, o$, mD, Tm } from "../figma_app/955528";
export function $$f3() {
  let e = useIsFullscreenSlidesView();
  let t = b();
  if (e) return t;
}
export function $$E1() {
  let e = isDesignFileType();
  let t = b();
  if (getFeatureFlags().aip_tone_dial_fd && e) return t;
}
export function $$y0() {
  let e = isWhiteboardFileType();
  let t = b();
  if (e) return t;
}
function b() {
  let e = I();
  let t = Ne();
  let r = useDispatch();
  if (function () {
    let e = useDispatch();
    let t = I();
    let r = Ne();
    let n = useCallback(() => o$(e), [e]);
    let s = useAtomWithSubscription(YH).length > 0;
    let o = useLatestRef(s);
    let c = s && !o;
    useEffect(() => {
      t && (c || !r) && n();
    }, [c, r, t, n]);
    useEffect(() => () => {
      t && n();
    }, [t, n]);
  }(), t) return {
    type: DMenuItemType.CUSTOM_ACTION,
    customActionType: DButtonType.DIALOG_TRIGGER_BUTTON,
    onClick: () => mD(r, {
      source: "panel_entrypoint",
      toggle: !0
    }),
    icon: jsx(_$$s, {}),
    isSelected: e,
    getTitle: () => getI18nString("slides.properties_panel.rewrite_text.adjust_tone"),
    recordingKey: "slidesRewriteText"
  };
}
export function $$T2() {
  let e = useDispatch();
  let t = I();
  let r = useCallback(() => {
    o$(e);
  }, [e]);
  return t ? jsx(_B, {
    onClose: r
  }) : null;
}
function I() {
  return useAtomWithSubscription(Tm);
}
export const VE = $$y0;
export const X9 = $$E1;
export const bh = $$T2;
export const rB = $$f3;