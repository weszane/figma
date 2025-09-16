import { jsxs, jsx } from "react/jsx-runtime";
import { useMemo, useCallback } from "react";
import { ignoreUndefinedEqual } from "../905/382883";
import { b, bL, mc } from "../figma_app/860955";
import { d as _$$d } from "../905/976845";
import { H_ } from "../905/963340";
import { J } from "../905/125993";
import { getI18nString, renderI18nText } from "../905/303541";
import { v4 } from "../figma_app/655139";
import { getCodeExtensionPreferences } from "../figma_app/120227";
import { FOverrideType } from "../figma_app/191312";
import { KindEnum } from "../905/129884";
import { setupUserPluginPreferences } from "../figma_app/545541";
export function $$g1() {
  let {
    getTriggerProps,
    manager
  } = b();
  let {
    updateDefaultCodegenSettings,
    isSetToDefault
  } = $$f0();
  return jsxs(bL, {
    manager,
    children: [jsx(_$$d, {
      "aria-label": getI18nString("dev_handoff.code.settings.options"),
      htmlAttributes: {
        "data-tooltip-type": KindEnum.TEXT,
        "data-tooltip": getI18nString("dev_handoff.code.settings.options")
      },
      ...getTriggerProps(),
      children: jsx(J, {})
    }), jsx(mc, {
      children: jsx(H_, {
        onChange: updateDefaultCodegenSettings,
        checked: isSetToDefault,
        children: renderI18nText("dev_handoff.code.settings.set_as_default")
      })
    })]
  });
}
export function $$f0() {
  let {
    setCodegenSettings,
    localCodegenSettings
  } = setupUserPluginPreferences();
  let r = v4();
  let n = getCodeExtensionPreferences();
  let s = useMemo(() => localCodegenSettings?.behavior === FOverrideType.OVERRIDE && ignoreUndefinedEqual(localCodegenSettings?.language, r) && ignoreUndefinedEqual(localCodegenSettings?.preferences, n), [r, n, localCodegenSettings]);
  return {
    updateDefaultCodegenSettings: useCallback(() => {
      setCodegenSettings({
        behavior: s ? FOverrideType.INHERIT : FOverrideType.OVERRIDE,
        language: r,
        preferences: n
      });
    }, [r, n, s, setCodegenSettings]),
    isSetToDefault: s
  };
}
export const Q = $$f0;
export const u = $$g1;