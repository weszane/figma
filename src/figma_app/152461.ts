import { jsxs, jsx } from "react/jsx-runtime";
import { useMemo, useCallback } from "react";
import { he } from "../905/382883";
import { b, bL, mc } from "../figma_app/860955";
import { d as _$$d } from "../905/976845";
import { H_ } from "../905/963340";
import { J } from "../905/125993";
import { getI18nString, renderI18nText } from "../905/303541";
import { v4 } from "../figma_app/655139";
import { gc } from "../figma_app/120227";
import { FOverrideType } from "../figma_app/191312";
import { Ib } from "../905/129884";
import { VR } from "../figma_app/545541";
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
        "data-tooltip-type": Ib.TEXT,
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
  } = VR();
  let r = v4();
  let n = gc();
  let s = useMemo(() => localCodegenSettings?.behavior === FOverrideType.OVERRIDE && he(localCodegenSettings?.language, r) && he(localCodegenSettings?.preferences, n), [r, n, localCodegenSettings]);
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