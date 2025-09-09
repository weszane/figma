import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { isNotNullish } from "../figma_app/95419";
import { LayoutTabType } from "../figma_app/763686";
import { selectWithShallowEqual } from "../905/103090";
import { formatList } from "../figma_app/930338";
import { getI18nString } from "../905/303541";
import { VisualBellActions } from "../905/302958";
import { e as _$$e } from "../905/810168";
import { xM, lU } from "../figma_app/539925";
import { fullscreenValue } from "../figma_app/455680";
import { FEditorType } from "../figma_app/53721";
import { TI } from "../figma_app/407856";
import { sG } from "../figma_app/440994";
function f(e) {
  e.target instanceof HTMLInputElement && e.target.setAttribute("aria-hidden", "false");
}
function E(e) {
  e.target instanceof HTMLInputElement && e.target.setAttribute("aria-hidden", "true");
}
export let $$y1 = "hidden-input-activedescendant";
export function $$b3(e) {
  useEffect(() => {
    let t = $$T2();
    null == t ? fullscreenValue.onReady().then(() => {
      let t = $$T2();
      let r = document.getElementById($$y1);
      setTimeout(() => {
        null != t && (t.ariaLabel = S(e), r && t.setAttribute("aria-activedescendant", $$y1), t.addEventListener("focus", f), t.addEventListener("blur", E));
      }, 500);
    }) : (t.ariaLabel = S(e), document.getElementById($$y1) && t.setAttribute("aria-activedescendant", $$y1), t.addEventListener("focus", f), t.addEventListener("blur", E));
    return () => {
      t?.removeEventListener("focus", f);
      t?.removeEventListener("blur", E);
    };
  }, [e]);
  let t = selectWithShallowEqual(e => Object.keys(e.mirror.sceneGraphSelection).length);
  let r = useSelector(e => e.mirror.appModel.activeCanvasEditModeType === LayoutTabType.DESIGN_LAYOUT || e.mirror.appModel.activeCanvasEditModeType === LayoutTabType.WHITEBOARD_LAYOUT || e.mirror.appModel.activeCanvasEditModeType === LayoutTabType.SITES_LAYOUT || e.mirror.appModel.activeCanvasEditModeType === LayoutTabType.COMMENTS || e.mirror.appModel.activeCanvasEditModeType === LayoutTabType.SLIDE_LAYOUT);
  let h = _$$e();
  let [b, I] = selectWithShallowEqual(e => {
    let t;
    null != e.mirror.appModel.currentStampToolName && "" !== e.mirror.appModel.currentStampToolName && (t = TI(e.mirror.appModel.currentStampToolName)());
    return [e.mirror.appModel.currentTool, t];
  });
  let v = useDispatch();
  let A = useRef(!1);
  useEffect(() => {
    if (!r) return;
    let e = null;
    0 === t && !0 === A.current ? e = getI18nString("fullscreen.accessibility.selection_cleared") : t > 1 && (e = getI18nString("fullscreen.accessibility.multi_select", {
      n: t
    }));
    h && e && v(VisualBellActions.enqueue({
      type: `${xM}-${lU}`,
      message: e,
      role: "status",
      timeoutOverride: 100
    }));
    A.current = t > 0;
  }, [e, v, t, r, h]);
  useEffect(() => {
    let r = $$T2();
    if (null == r) return;
    let n = [S(e), sG(b, I), t > 0 ? getI18nString("fullscreen.accessibility.num_items_selected", {
      num_selected: t
    }) : null].filter(isNotNullish);
    r.ariaLabel = formatList(n, "unit");
    let i = document.getElementById($$y1);
    if (i) {
      i.ariaLabel = formatList(n, "unit");
      return () => {
        i.ariaLabel = null;
      };
    }
  }, [e, t, b, I]);
}
export function $$T2() {
  let e = document.getElementById("fullscreen-root")?.getElementsByClassName("focus-target");
  if (null == e) return null;
  for (let t of e) {
    let e = "application" === t.getAttribute("role") || "application" === t.role;
    if (t.hasAttribute("readonly") && e) return t;
  }
  return null;
}
export function $$I0() {
  $$T2()?.focus();
}
function S(e) {
  switch (e) {
    case FEditorType.Whiteboard:
      return getI18nString("general.figjam");
    case FEditorType.Slides:
      return getI18nString("general.figma_slides");
    default:
      return getI18nString("general.figma_design");
  }
}
export const $z = $$I0;
export const Gl = $$y1;
export const lo = $$T2;
export const of = $$b3;