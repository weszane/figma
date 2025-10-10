import { memo, useCallback, useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"
import { jsx, jsxs } from "react/jsx-runtime"
import { useUniqueId } from "../905/27228"
import { Tabs } from "../905/150656"
import { getI18nString, renderI18nText } from "../905/303541"
import { selectCurrentUser } from "../905/372672"
import { LibraryTypeString } from "../905/402643"
import { analyticsEventManager } from "../905/449184"
import { r as _$$r } from "../905/571562"
import { DSASelect } from "../905/589458"
import { getFeatureFlags } from "../905/601108"
import { ButtonPrimitive } from "../905/632989"
import { OverviewCategory } from "../905/697254"
import { hideDropdownAction, showDropdownThunk } from "../905/929976"
import { DropdownContainer, OptionComponent } from "../figma_app/236327"
import { LibraryAgeEnum } from "../figma_app/633080"


// Refactored to improve readability, add type safety, and simplify logic
// Renamed variables to be more descriptive and added TypeScript interfaces

interface LibraryViewTabsProps {
  onSelectDuration: (duration: LibraryAgeEnum) => void
  onSelectShownView: (view: OverviewCategory) => void
  onSelectAssetType: (assetType: LibraryTypeString) => void
  selectedDuration: LibraryAgeEnum
  shownView: OverviewCategory
  selectedAssetType: LibraryTypeString
  tabProps: {
    overview: any
    analytics: any
  }
  tabManager: any
  libraryFile?: {
    key: string
    parent_org_id?: string
  }
}

// Duration labels mapping
const DURATION_LABELS = {
  [LibraryAgeEnum.THIRTY_DAYS]: renderI18nText("design_systems.libraries_modal.30_days"),
  [LibraryAgeEnum.SIXTY_DAYS]: renderI18nText("design_systems.libraries_modal.60_days"),
  [LibraryAgeEnum.NINETY_DAYS]: renderI18nText("design_systems.libraries_modal.90_days"),
  [LibraryAgeEnum.YEAR]: renderI18nText("design_systems.libraries_modal.year"),
}

// Asset type labels mapping
const ASSET_TYPE_LABELS = {
  [LibraryTypeString.PRODUCT_COMPONENTS]: renderI18nText("design_systems.libraries_modal.components"),
  [LibraryTypeString.STYLES]: renderI18nText("design_systems.libraries_modal.styles"),
  [LibraryTypeString.VARIABLES]: renderI18nText("design_systems.libraries_modal.variables"),
}

// View category labels mapping
const VIEW_CATEGORY_LABELS = {
  [OverviewCategory.OVERVIEW]: renderI18nText("design_systems.libraries_modal.overview"),
  [OverviewCategory.ANALYTICS]: renderI18nText("design_systems.libraries_modal.analytics"),
}

// Available view categories
const VIEW_CATEGORIES: OverviewCategory[] = [OverviewCategory.OVERVIEW, OverviewCategory.ANALYTICS]

// Available durations
const DURATION_OPTIONS: LibraryAgeEnum[] = [
  LibraryAgeEnum.THIRTY_DAYS,
  LibraryAgeEnum.SIXTY_DAYS,
  LibraryAgeEnum.NINETY_DAYS,
  LibraryAgeEnum.YEAR,
]

// Available asset types
const ASSET_TYPE_OPTIONS: LibraryTypeString[] = [
  LibraryTypeString.PRODUCT_COMPONENTS,
  LibraryTypeString.STYLES,
  LibraryTypeString.VARIABLES,
]

export const LibraryViewTabs = memo(({
  onSelectDuration,
  onSelectShownView,
  onSelectAssetType,
  selectedDuration,
  shownView,
  selectedAssetType,
  tabProps,
  tabManager,
  libraryFile,
}: LibraryViewTabsProps) => {
  const dispatch = useDispatch<AppDispatch>()
  const dropdownState = useSelector((state: any) => state.dropdownShown)
  const currentUser = selectCurrentUser()
  const sessionId = useUniqueId()

  const isDurationDropdownOpen = dropdownState?.type === "duration-dropdown"
  const isAssetTypeDropdownOpen = dropdownState?.type === "dsa-asset-type-dropdown"

  const toggleDurationDropdown = useCallback((event: React.MouseEvent) => {
    event.stopPropagation()
    event.preventDefault()

    if (isDurationDropdownOpen) {
      dispatch(hideDropdownAction())
    }
    else {
      dispatch(showDropdownThunk({
        type: "duration-dropdown",
      }))
    }
  }, [dispatch, isDurationDropdownOpen])

  const toggleAssetTypeDropdown = useCallback((event: React.MouseEvent) => {
    event.stopPropagation()
    event.preventDefault()

    if (isAssetTypeDropdownOpen) {
      dispatch(hideDropdownAction())
    }
    else {
      dispatch(showDropdownThunk({
        type: "dsa-asset-type-dropdown",
      }))
    }

    analyticsEventManager.trackDefinedEvent("design_systems_analytics.dsa_asset_filter_clicked", {
      assetType: selectedAssetType,
      fileKey: libraryFile?.key,
      orgId: libraryFile?.parent_org_id ?? undefined,
      userId: currentUser?.id,
      dsaSessionId: sessionId,
    })
  }, [dispatch, isAssetTypeDropdownOpen, selectedAssetType, libraryFile, currentUser, sessionId])

  const handleAssetTypeChange = useCallback((assetType: LibraryTypeString) => {
    onSelectAssetType(assetType)

    analyticsEventManager.trackDefinedEvent("design_systems_analytics.dsa_asset_type_selected", {
      assetType,
      previousAssetType: selectedAssetType,
      fileKey: libraryFile?.key,
      orgId: libraryFile?.parent_org_id ?? undefined,
      userId: currentUser?.id,
      dsaSessionId: sessionId,
    })
  }, [onSelectAssetType, selectedAssetType, libraryFile, currentUser, sessionId])

  const assetTypeOptions = useMemo(() =>
    ASSET_TYPE_OPTIONS.map(type => ({
      value: type,
      label: ASSET_TYPE_LABELS[type],
    })), [])

  const durationOptions = useMemo(() =>
    DURATION_OPTIONS.map(duration => ({
      value: duration,
      label: DURATION_LABELS[duration],
    })), [])

  const assetTypeDropdownOptions = useMemo(() =>
    ASSET_TYPE_OPTIONS.map(type =>
      jsx(OptionComponent, {
        onClick: () => handleAssetTypeChange(type),
        children: ASSET_TYPE_LABELS[type],
      }, type),
    ), [handleAssetTypeChange])

  const durationDropdownOptions = useMemo(() =>
    DURATION_OPTIONS.map(duration =>
      jsx(OptionComponent, {
        onClick: () => onSelectDuration(duration),
        children: DURATION_LABELS[duration],
      }, duration),
    ), [onSelectDuration])

  return getFeatureFlags().dse_fpl_wave_1
    ? jsx("div", {
        children: jsxs("div", {
          className: "dsa_file_view_tabs--tabStrip--fxcSP dsa_file_view_tabs--tabsHeaderBordered--Ogkvc",
          children: [
            jsxs(Tabs.TabStrip, {
              manager: tabManager,
              children: [
                jsx(Tabs.Tab, {
                  ...tabProps.overview,
                  children: VIEW_CATEGORY_LABELS[OverviewCategory.OVERVIEW],
                }),
                jsx(Tabs.Tab, {
                  ...tabProps.analytics,
                  children: VIEW_CATEGORY_LABELS[OverviewCategory.ANALYTICS],
                }),
              ],
            }),
            tabManager.activeTab === "analytics" && jsxs("div", {
              className: "dsa_file_view_tabs--dsaDropdowns--NtcWF",
              children: [
                getFeatureFlags().dsa_styles_variables_ui && jsx(DSASelect, {
                  labelContent: getI18nString("design_systems.libraries_modal.type"),
                  onChange: handleAssetTypeChange,
                  value: selectedAssetType,
                  options: assetTypeOptions,
                }),
                jsx(DSASelect, {
                  labelContent: getI18nString("design_systems.libraries_modal.duration"),
                  onChange: onSelectDuration,
                  value: selectedDuration,
                  options: durationOptions,
                }),
              ],
            }),
          ],
        }),
      })
    : jsxs("div", {
        children: [
          jsxs("div", {
            className: "dsa_file_view_tabs--fileViewTabsHeaderBordered--dsWKz dsa_file_view_tabs--tabsHeaderBordered--Ogkvc",
            children: [
              jsx("div", {
                children: VIEW_CATEGORIES.map(category =>
                  jsx("span", {
                    "className": shownView === category
                      ? "dsa_file_view_tabs--fileViewTabActive--l63XH dsa_file_view_tabs--fileViewTab--NlEoB text--fontPos11--2LvXf text--_fontBase--QdLsd"
                      : "dsa_file_view_tabs--fileViewTab--NlEoB text--fontPos11--2LvXf text--_fontBase--QdLsd",
                    "onClick": () => onSelectShownView(category),
                    "data-new-view-shown": OverviewCategory.OVERVIEW,
                    "role": "tab",
                    "children": VIEW_CATEGORY_LABELS[category],
                  }, category),
                ),
              }),
              shownView === OverviewCategory.ANALYTICS && jsxs("div", {
                className: "dsa_file_view_tabs--dropdownContainer--arqSQ",
                children: [
                  getFeatureFlags().dsa_styles_variables_ui && jsxs("div", {
                    className: "dsa_file_view_tabs--assetTypeContainer--RUGf8 dsa_file_view_tabs--durationContainer--OyAkr",
                    children: [
                      jsx("span", {
                        className: "dsa_file_view_tabs--assetTypeText--7-2SQ dsa_file_view_tabs--durationText--oKwcG text--fontPos11--2LvXf text--_fontBase--QdLsd",
                        children: renderI18nText("design_systems.libraries_modal.type"),
                      }),
                      jsxs(ButtonPrimitive, {
                        onClick: toggleAssetTypeDropdown,
                        className: "dsa_file_view_tabs--assetType--XSwaT dsa_file_view_tabs--duration--wcSV6 text--fontPos11--2LvXf text--_fontBase--QdLsd",
                        children: [
                          ASSET_TYPE_LABELS[selectedAssetType],
                          jsx("div", {
                            className: "dsa_file_view_tabs--dropdownIcon--NdB8e",
                            children: jsx(_$$r, {}),
                          }),
                        ],
                      }),
                      isAssetTypeDropdownOpen && jsx(DropdownContainer, {
                        className: "dsa_file_view_tabs--assetTypeDropdown--Ytz50 dsa_file_view_tabs--dropdown--A2L7x",
                        children: assetTypeDropdownOptions,
                      }),
                    ],
                  }),
                  jsxs("div", {
                    className: "dsa_file_view_tabs--durationContainer--OyAkr",
                    children: [
                      jsx("span", {
                        className: "dsa_file_view_tabs--durationText--oKwcG text--fontPos11--2LvXf text--_fontBase--QdLsd",
                        children: renderI18nText("design_systems.libraries_modal.duration"),
                      }),
                      jsxs("span", {
                        onClick: toggleDurationDropdown,
                        className: "dsa_file_view_tabs--duration--wcSV6 text--fontPos11--2LvXf text--_fontBase--QdLsd",
                        children: [
                          DURATION_LABELS[selectedDuration],
                          jsx("div", {
                            className: "dsa_file_view_tabs--dropdownIcon--NdB8e",
                            children: jsx(_$$r, {}),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          jsx("div", {
            children: isDurationDropdownOpen && jsx(DropdownContainer, {
              className: "dsa_file_view_tabs--dropdown--A2L7x",
              children: durationDropdownOptions,
            }),
          }),
        ],
      })
})

export const S = LibraryViewTabs
