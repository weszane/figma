import { useLayoutEffect, useEffect } from "react";
import { getThemeContextOrDefault } from "../905/158740";
import { AppStateTsApi } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import { updateEnvironmentInfo } from "../905/883621";
import { uiVariantName } from "../905/709735";
import { setTagGlobal } from "../905/11";
import { useIsFullscreenReady } from "../figma_app/115586";
export function $$u2() {
  let {
    updateMode
  } = getThemeContextOrDefault();
  useLayoutEffect(() => {
    updateMode({
      version: uiVariantName
    });
    updateEnvironmentInfo({
      uiVersion: uiVariantName
    });
    setTagGlobal("uiVersion", uiVariantName);
  }, [updateMode]);
}
export function $$p0() {
  let e = useIsFullscreenReady();
  useEffect(() => {
    queueMicrotask(() => AppStateTsApi?.uiState().isUI3.set(!0));
  }, [e]);
}
export function $$_1() {
  let e = !!getFeatureFlags().figjam_ui3_color_palette;
  let t = useIsFullscreenReady();
  useEffect(() => {
    queueMicrotask(() => AppStateTsApi?.uiState().showUI3Colors.set(e));
  }, [e, t]);
}
export const Ou = $$p0;
export const fq = $$_1;
export const yw = $$u2;