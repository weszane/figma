import { useMemo, useLayoutEffect } from "react";
import { useSelector } from "react-redux";
import { getThemeContextOrDefault } from "../905/158740";
import { normalizedToRgb, unpackToNormalizedRgb } from "../figma_app/273493";
import { WhiteboardTsApi, AppStateTsApi } from "../figma_app/763686";
import { getThemeBackgroundColor } from "../figma_app/191804";
import { selectWithShallowEqual } from "../905/103090";
import { colorCSSManipulatorInstance } from "../905/989956";
import { isWhiteboardFileType } from "../figma_app/976749";
import { sO } from "../figma_app/21029";
import { getVisibleTheme } from "../905/640017";
export function $$h0() {
  let e = isWhiteboardFileType();
  let t = sO();
  let r = useSelector(e => e.mirror.appModel.currentPage);
  let a = selectWithShallowEqual(e => e.mirror.sceneGraph?.get(r)?.backgroundColor);
  let h = getVisibleTheme();
  let m = useMemo(() => colorCSSManipulatorInstance.format(a), [a]);
  if (e) {
    let e = WhiteboardTsApi?.getWhiteboardCanvasColor();
    return e ? colorCSSManipulatorInstance.format(normalizedToRgb(e)) : "#ffffff";
  }
  return t && AppStateTsApi ? colorCSSManipulatorInstance.format(normalizedToRgb(unpackToNormalizedRgb(AppStateTsApi.getFSCanvasDefaultFill()))) : a ? m : getThemeBackgroundColor(h);
}
export function $$m1() {
  let e = "ui3" === getThemeContextOrDefault().version;
  let t = $$h0();
  useLayoutEffect(() => {
    e && document.documentElement.style.setProperty("--canvas-color", t);
  }, [t, e]);
}
export const J = $$h0;
export const c = $$m1;