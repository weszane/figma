import { jsx } from "react/jsx-runtime";
import { useDispatch } from "../vendor/514228";
import { K } from "../905/443068";
import { f as _$$f } from "../905/335032";
import { trackEventAnalytics } from "../905/449184";
import { selectWithShallowEqual } from "../905/103090";
import { Pt } from "../figma_app/806412";
import { getI18nString } from "../905/303541";
import { Ib } from "../905/129884";
import { J, N } from "../642/436925";
import { sL, qg } from "../figma_app/436286";
import { DE } from "../figma_app/811257";
import { ai, jK, Df } from "../1528/277451";
export function $$f0({
  blendModeSelectId: e,
  id: t,
  recordingKey: s,
  showDefault: f
}) {
  let x = useDispatch();
  let [y, _] = sL();
  let b = selectWithShallowEqual(e => e.dropdownShown);
  let C = !f && qg(y, "PASS_THROUGH");
  return (b?.type === e || C) && b?.type !== J(t) ? null : jsx(DE, {
    label: getI18nString("fullscreen.properties_panel.appearance_panel.blend_mode"),
    input: jsx(N, {
      chevronClassName: ai,
      className: jK,
      dispatch: x,
      dropdownShown: b,
      id: t,
      includePassThrough: !0,
      inputClassName: Df,
      isUI3: !0,
      onChange: _,
      property: y,
      recordingKey: Pt(s, "blendMode"),
      willShowDropdown: () => (trackEventAnalytics("editor-blend-mode-dropdown-show"), Promise.resolve())
    }),
    icon: f && qg(y, "PASS_THROUGH") ? null : jsx(K, {
      htmlAttributes: {
        "data-tooltip": getI18nString("general.remove"),
        "data-tooltip-type": Ib.TEXT
      },
      "aria-label": getI18nString("general.remove"),
      onClick: () => _("PASS_THROUGH"),
      actionOnPointerDown: !0,
      children: jsx(_$$f, {})
    })
  });
}
export const r = $$f0;