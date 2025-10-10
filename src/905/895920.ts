import { Fragment, jsx, jsxs } from "react/jsx-runtime"
import { renderI18nText } from "../905/303541"
import { cssBuilderInstance } from "../cssbuilder/589278"
import { useFigmaLibrariesEnabled } from "../figma_app/657017"

// Refactored from original $$o0 function in /Users/allen/github/fig/src/905/895920.ts
// Changes: Renamed function to LibrariesEmptyState, added Props interface for type safety, renamed variables for clarity, added comments explaining conditional rendering logic, preserved all functionality including JSX structure and conditional children.

interface LibrariesEmptyStateProps {
  filtersActive: boolean
  onViewPresetsClicked?: () => void // Optional, as it's checked for existence
}

export function LibrariesEmptyState({
  filtersActive,
  onViewPresetsClicked,
}: LibrariesEmptyStateProps) {
  // Determine if presets button should be shown: requires Figma libraries enabled and a click handler provided
  const showPresetsButton = useFigmaLibrariesEnabled() && !!onViewPresetsClicked

  return jsxs("div", {
    className: cssBuilderInstance.flex.flexColumn.alignCenter.justifyCenter.mt36.wFull.$,
    children: [
      jsx("h2", {
        className: cssBuilderInstance.font14.mb20.$,
        children: renderI18nText("design_systems.libraries_modal.no_libraries"),
      }),
      jsxs("p", {
        className: cssBuilderInstance.colorTextSecondary.$,
        children: [
          // If filters are active, show message about no matches
          filtersActive && renderI18nText("design_systems.libraries_modal.no_libraries_match_selected_filters"),
          // If no filters and no presets button, show default message
          !filtersActive && !showPresetsButton && renderI18nText("design_systems.libraries_modal.libraries_will_show_up_here_as_they_become_published"),
          // If no filters but presets button available, show presets exploration text with button
          !filtersActive && showPresetsButton && jsxs(Fragment, {
            children: [
              renderI18nText("design_systems.libraries_modal.presets.explore_presets"),
              jsx("p", {
                children: jsx("button", {
                  className: "subscription_list_file_rows_empty_state--btnLink--cKVYH",
                  onClick: onViewPresetsClicked,
                  children: renderI18nText("design_systems.libraries_modal.presets.start_browsing"),
                }),
              }),
            ],
          }),
        ],
      }),
    ],
  })
}

export const p = LibrariesEmptyState
