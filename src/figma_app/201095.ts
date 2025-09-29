import { jsx } from "react/jsx-runtime";
import { useCallback, useMemo } from "react";
import { roundTo2Decimals } from "../figma_app/492908";
import { noop } from 'lodash-es';
import { isNullish } from "../figma_app/95419";
import { Fullscreen } from "../figma_app/763686";
import { scopeAwareFunction } from "../905/189185";
import { getI18nString } from "../905/303541";
import { useStrictDeepEqualSceneValue } from "../figma_app/167249";
import { ZU, Wg } from "../figma_app/986347";
import { Xo } from "../figma_app/687767";
import { useEffectiveThemeId } from "../figma_app/226737";
import { vK } from "../figma_app/587612";
export function $$g1() {
  let e = useEffectiveThemeId();
  let t = Xo(e);
  let r = E(t);
  let n = useCallback(e => ({
    displayText: e.name,
    sideText: r[e.node_id] ? getI18nString("slides.properties_panel.text.style_description_font_size", {
      fontSize: roundTo2Decimals(r[e.node_id])
    }) : void 0,
    callback: scopeAwareFunction.user("replace-text-style", () => {
      Fullscreen?.updateExistingStyleFromSelection("inheritTextStyleKey", e.node_id);
    }),
    recordingKey: e.name
  }), [r]);
  return useMemo(() => ({
    displayText: getI18nString("slides.properties_panel.text_style.replace_style"),
    children: [{
      displayText: getI18nString("slides.properties_panel.text_styles.styles"),
      header: !0
    }, ...t.map(n)],
    recordingKey: "replaceStyle"
  }), [t, n]);
}
export function $$f0() {
  let e = useEffectiveThemeId();
  let t = Xo(e);
  let r = E(t);
  let u = useMemo(() => {
    let e = t.map(e => {
      let t = r[e.node_id];
      return {
        type: ZU.CUSTOM_ACTION,
        customActionType: Wg.STANDARD_BUTTON,
        onClick: scopeAwareFunction.user("replace-text-style", () => {
          Fullscreen?.updateExistingStyleFromSelection("inheritTextStyleKey", e.node_id);
        }),
        rightIcon: isNullish(t) ? void 0 : jsx("span", {
          className: "x7ey041",
          children: roundTo2Decimals(t)
        }),
        preventHoisting: !0,
        getTitle: () => e.name,
        recordingKey: `replaceStyle.${e.name}`
      };
    });
    e.unshift({
      type: ZU.CUSTOM_ACTION,
      customActionType: Wg.DROPDOWN_GROUP_HEADER,
      onClick: noop,
      getTitle: () => getI18nString("slides.properties_panel.text_styles.styles"),
      preventHoisting: !0,
      recordingKey: "stylesHeader"
    });
    return e;
  }, [t, r]);
  let g = vK();
  return useMemo(() => {
    if (g) return {
      type: ZU.ACTION_SUBMENU,
      recordingKey: "replaceStyle",
      getTitle: () => getI18nString("slides.properties_panel.text_style.replace_style"),
      items: u,
      preventHoisting: !0
    };
  }, [u, g]);
}
function E(e) {
  return useStrictDeepEqualSceneValue((e, t) => t.reduce((t, r) => {
    let n = e.get(r);
    n && (t[r] = n.fontSize);
    return t;
  }, {}), e.map(e => e.node_id));
}
export const h = $$f0;
export const r = $$g1;