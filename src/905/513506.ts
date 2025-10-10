import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { getThemeContextOrDefault } from "../905/158740";
import { toggleEnhancedContrast } from "../905/266289";
import { Fullscreen } from "../figma_app/763686";
import { isChromebookTabbed, applyDarkBackground } from "../figma_app/347146";
import { desktopAPIInstance } from "../figma_app/876459";
import { getEmbedTheme } from "../figma_app/504640";
import { fullscreenValue } from "../figma_app/455680";
import { getSelectedView } from "../figma_app/386952";
import { getMPVisibleTheme } from "../905/187165";
import { J } from "../figma_app/391827";
import { Z } from "../905/224161";
import { getVisibleTheme } from "../905/640017";
export function $$_0() {
  let e = "ui3" === getThemeContextOrDefault().version;
  let t = J();
  let i = getMPVisibleTheme();
  let _ = useSelector(e => e.theme?.enhancedContrast);
  useEffect(() => {
    toggleEnhancedContrast(_);
  }, [_]);
  let A = getSelectedView();
  let y = getEmbedTheme();
  useEffect(() => {
    desktopAPIInstance && e && desktopAPIInstance.setTabColor(t);
  }, [t, e]);
  let b = y ?? i;
  useEffect(() => {
    "fullscreen" === A.view && fullscreenValue.isReady() && Fullscreen.setEditorTheme(getMPVisibleTheme(b) || "");
  }, [A.view, b]);
  let v = isChromebookTabbed();
  useEffect(() => {
    v && applyDarkBackground(b);
  }, [v, b]);
  let I = useRef(document.body);
  return Z(b, I, A);
}
export const s = $$_0;