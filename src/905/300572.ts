import { jsxs, jsx } from "react/jsx-runtime";
import { generateRecordingKey } from "../figma_app/878298";
import { renderI18nText } from "../905/303541";
import { LibraryTabEnum } from "../figma_app/633080";
import { TabWithRecording } from "../905/451156";
import { fA } from "../905/542608";
import { vR } from "../905/522530";
class $$c extends TabWithRecording {}
export function $$u0({
  availableTabs: e,
  selectedTab: t,
  setSelectedTab: i,
  disabled: o
}) {
  return jsxs("div", {
    className: vR,
    children: [e.includes(LibraryTabEnum.LIBRARIES) && jsx($$c, {
      recordingKey: generateRecordingKey(fA, "libraryTab"),
      onClick: i,
      tab: LibraryTabEnum.LIBRARIES,
      selectedTab: t,
      disabled: o,
      children: renderI18nText("design_systems.libraries_modal.libraries")
    }), e.includes(LibraryTabEnum.FONTS) && jsx($$c, {
      recordingKey: generateRecordingKey(fA, "fontsTab"),
      onClick: i,
      tab: LibraryTabEnum.FONTS,
      selectedTab: t,
      disabled: o,
      children: renderI18nText("design_systems.libraries_modal.shared_fonts")
    }), e.includes(LibraryTabEnum.UPDATES) && jsx($$c, {
      recordingKey: generateRecordingKey(fA, "updatesTab"),
      onClick: i,
      tab: LibraryTabEnum.UPDATES,
      selectedTab: t,
      disabled: o,
      children: renderI18nText("design_systems.libraries_modal.updates")
    })]
  });
}
export const c = $$u0;