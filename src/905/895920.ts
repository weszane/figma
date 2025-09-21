import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { renderI18nText } from "../905/303541";
import { useFigmaLibrariesEnabled } from "../figma_app/657017";
export function $$o0({
  filtersActive: e,
  onViewPresetsClicked: t
}) {
  let i = useFigmaLibrariesEnabled() && !!t;
  return jsxs("div", {
    className: cssBuilderInstance.flex.flexColumn.alignCenter.justifyCenter.mt36.wFull.$,
    children: [jsx("h2", {
      className: cssBuilderInstance.font14.mb20.$,
      children: renderI18nText("design_systems.libraries_modal.no_libraries")
    }), jsxs("p", {
      className: cssBuilderInstance.colorTextSecondary.$,
      children: [e && renderI18nText("design_systems.libraries_modal.no_libraries_match_selected_filters"), !e && !i && renderI18nText("design_systems.libraries_modal.libraries_will_show_up_here_as_they_become_published"), !e && i && jsxs(Fragment, {
        children: [renderI18nText("design_systems.libraries_modal.presets.explore_presets"), jsx("p", {
          children: jsx("button", {
            className: "subscription_list_file_rows_empty_state--btnLink--cKVYH",
            onClick: t,
            children: renderI18nText("design_systems.libraries_modal.presets.start_browsing")
          })
        })]
      })]
    })]
  });
}
export const p = $$o0;