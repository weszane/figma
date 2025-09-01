import { jsxs, jsx } from "react/jsx-runtime";
import { Pt } from "../figma_app/806412";
import { tx } from "../905/303541";
import { Wv } from "../figma_app/633080";
import { o as _$$o } from "../905/451156";
import { fA } from "../905/542608";
import { vR } from "../905/522530";
class $$c extends _$$o {}
export function $$u0({
  availableTabs: e,
  selectedTab: t,
  setSelectedTab: i,
  disabled: o
}) {
  return jsxs("div", {
    className: vR,
    children: [e.includes(Wv.LIBRARIES) && jsx($$c, {
      recordingKey: Pt(fA, "libraryTab"),
      onClick: i,
      tab: Wv.LIBRARIES,
      selectedTab: t,
      disabled: o,
      children: tx("design_systems.libraries_modal.libraries")
    }), e.includes(Wv.FONTS) && jsx($$c, {
      recordingKey: Pt(fA, "fontsTab"),
      onClick: i,
      tab: Wv.FONTS,
      selectedTab: t,
      disabled: o,
      children: tx("design_systems.libraries_modal.shared_fonts")
    }), e.includes(Wv.UPDATES) && jsx($$c, {
      recordingKey: Pt(fA, "updatesTab"),
      onClick: i,
      tab: Wv.UPDATES,
      selectedTab: t,
      disabled: o,
      children: tx("design_systems.libraries_modal.updates")
    })]
  });
}
export const c = $$u0;