import { jsx } from "react/jsx-runtime";
import { wA } from "../vendor/514228";
import { K } from "../905/443068";
import { f as _$$f } from "../905/335032";
import { sx } from "../905/449184";
import { R } from "../905/103090";
import { Pt } from "../figma_app/806412";
import { t as _$$t } from "../905/303541";
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
  let x = wA();
  let [y, _] = sL();
  let b = R(e => e.dropdownShown);
  let C = !f && qg(y, "PASS_THROUGH");
  return (b?.type === e || C) && b?.type !== J(t) ? null : jsx(DE, {
    label: _$$t("fullscreen.properties_panel.appearance_panel.blend_mode"),
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
      willShowDropdown: () => (sx("editor-blend-mode-dropdown-show"), Promise.resolve())
    }),
    icon: f && qg(y, "PASS_THROUGH") ? null : jsx(K, {
      htmlAttributes: {
        "data-tooltip": _$$t("general.remove"),
        "data-tooltip-type": Ib.TEXT
      },
      "aria-label": _$$t("general.remove"),
      onClick: () => _("PASS_THROUGH"),
      actionOnPointerDown: !0,
      children: jsx(_$$f, {})
    })
  });
}
export const r = $$f0;