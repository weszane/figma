import { useEffect, useRef } from "react";
import { d4, wA } from "../vendor/514228";
import { isNotNullish } from "../figma_app/95419";
import { m1T } from "../figma_app/763686";
import { R } from "../905/103090";
import { Yx } from "../figma_app/930338";
import { t as _$$t } from "../905/303541";
import { F } from "../905/302958";
import { e as _$$e } from "../905/810168";
import { xM, lU } from "../figma_app/539925";
import { Y5 } from "../figma_app/455680";
import { nT } from "../figma_app/53721";
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
    null == t ? Y5.onReady().then(() => {
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
  let t = R(e => Object.keys(e.mirror.sceneGraphSelection).length);
  let r = d4(e => e.mirror.appModel.activeCanvasEditModeType === m1T.DESIGN_LAYOUT || e.mirror.appModel.activeCanvasEditModeType === m1T.WHITEBOARD_LAYOUT || e.mirror.appModel.activeCanvasEditModeType === m1T.SITES_LAYOUT || e.mirror.appModel.activeCanvasEditModeType === m1T.COMMENTS || e.mirror.appModel.activeCanvasEditModeType === m1T.SLIDE_LAYOUT);
  let h = _$$e();
  let [b, I] = R(e => {
    let t;
    null != e.mirror.appModel.currentStampToolName && "" !== e.mirror.appModel.currentStampToolName && (t = TI(e.mirror.appModel.currentStampToolName)());
    return [e.mirror.appModel.currentTool, t];
  });
  let v = wA();
  let A = useRef(!1);
  useEffect(() => {
    if (!r) return;
    let e = null;
    0 === t && !0 === A.current ? e = _$$t("fullscreen.accessibility.selection_cleared") : t > 1 && (e = _$$t("fullscreen.accessibility.multi_select", {
      n: t
    }));
    h && e && v(F.enqueue({
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
    let n = [S(e), sG(b, I), t > 0 ? _$$t("fullscreen.accessibility.num_items_selected", {
      num_selected: t
    }) : null].filter(isNotNullish);
    r.ariaLabel = Yx(n, "unit");
    let i = document.getElementById($$y1);
    if (i) {
      i.ariaLabel = Yx(n, "unit");
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
    case nT.Whiteboard:
      return _$$t("general.figjam");
    case nT.Slides:
      return _$$t("general.figma_slides");
    default:
      return _$$t("general.figma_design");
  }
}
export const $z = $$I0;
export const Gl = $$y1;
export const lo = $$T2;
export const of = $$b3;