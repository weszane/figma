import { jsx, jsxs } from "react/jsx-runtime";
import { memo, useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Tabs } from "../905/150656";
import { ButtonPrimitive } from "../905/632989";
import { r as _$$r } from "../905/571562";
import { getFeatureFlags } from "../905/601108";
import { analyticsEventManager } from "../905/449184";
import { c$, ms } from "../figma_app/236327";
import { renderI18nText, getI18nString } from "../905/303541";
import { hideDropdownAction, showDropdownThunk } from "../905/929976";
import { selectCurrentUser } from "../905/372672";
import { LibraryAgeEnum } from "../figma_app/633080";
import { n as _$$n } from "../905/402643";
import { OverviewCategory } from "../905/697254";
import { h as _$$h } from "../905/589458";
import { useUniqueId } from "../905/27228";
let b = "dsa_file_view_tabs--dropdownIcon--NdB8e";
let v = "duration-dropdown";
let I = "dsa-asset-type-dropdown";
let E = {
  [LibraryAgeEnum.THIRTY_DAYS]: renderI18nText("design_systems.libraries_modal.30_days"),
  [LibraryAgeEnum.SIXTY_DAYS]: renderI18nText("design_systems.libraries_modal.60_days"),
  [LibraryAgeEnum.NINETY_DAYS]: renderI18nText("design_systems.libraries_modal.90_days"),
  [LibraryAgeEnum.YEAR]: renderI18nText("design_systems.libraries_modal.year")
};
let x = {
  [_$$n.PRODUCT_COMPONENTS]: renderI18nText("design_systems.libraries_modal.components"),
  [_$$n.STYLES]: renderI18nText("design_systems.libraries_modal.styles"),
  [_$$n.VARIABLES]: renderI18nText("design_systems.libraries_modal.variables")
};
let $$S = {
  [OverviewCategory.OVERVIEW]: renderI18nText("design_systems.libraries_modal.overview"),
  [OverviewCategory.ANALYTICS]: renderI18nText("design_systems.libraries_modal.analytics")
};
let w = [OverviewCategory.OVERVIEW, OverviewCategory.ANALYTICS];
let C = [LibraryAgeEnum.THIRTY_DAYS, LibraryAgeEnum.SIXTY_DAYS, LibraryAgeEnum.NINETY_DAYS, LibraryAgeEnum.YEAR];
let T = [_$$n.PRODUCT_COMPONENTS, _$$n.STYLES, _$$n.VARIABLES];
let $$k0 = memo(({
  onSelectDuration: e,
  onSelectShownView: t,
  onSelectAssetType: i,
  selectedDuration: g,
  shownView: f,
  selectedAssetType: k,
  tabProps: R,
  tabManager: N,
  libraryFile: P
}) => {
  let O = useDispatch();
  let D = useSelector(e => e.dropdownShown);
  let L = selectCurrentUser();
  let F = useUniqueId();
  let M = D?.type === v;
  let j = D?.type === I;
  let U = useCallback(e => {
    e.stopPropagation();
    e.preventDefault();
    M ? O(hideDropdownAction()) : O(showDropdownThunk({
      type: v
    }));
  }, [O, M]);
  let B = useCallback(e => {
    e.stopPropagation();
    e.preventDefault();
    j ? O(hideDropdownAction()) : O(showDropdownThunk({
      type: I
    }));
    analyticsEventManager.trackDefinedEvent("design_systems_analytics.dsa_asset_filter_clicked", {
      assetType: k,
      fileKey: P?.key,
      orgId: P?.parent_org_id ?? void 0,
      userId: L?.id,
      dsaSessionId: F
    });
  }, [O, j, L, P, k, F]);
  let V = useCallback(e => {
    i(e);
    analyticsEventManager.trackDefinedEvent("design_systems_analytics.dsa_asset_type_selected", {
      assetType: e,
      previousAssetType: k,
      fileKey: P?.key,
      orgId: P?.parent_org_id ?? void 0,
      userId: L?.id,
      dsaSessionId: F
    });
  }, [i, P, L, k, F]);
  let G = useMemo(() => T.map(e => ({
    value: e,
    label: x[e]
  })), []);
  let z = useMemo(() => C.map(e => ({
    value: e,
    label: E[e]
  })), []);
  let H = useMemo(() => T.map(e => jsx(c$, {
    onClick: () => V(e),
    children: x[e]
  }, e)), [V]);
  let W = useMemo(() => C.map(t => jsx(c$, {
    onClick: () => e(t),
    children: E[t]
  }, t)), [e]);
  return getFeatureFlags().dse_fpl_wave_1 ? jsx("div", {
    children: jsxs("div", {
      className: "dsa_file_view_tabs--tabStrip--fxcSP dsa_file_view_tabs--tabsHeaderBordered--Ogkvc",
      children: [jsxs(Tabs.TabStrip, {
        manager: N,
        children: [jsx(Tabs.Tab, {
          ...R.overview,
          children: $$S[OverviewCategory.OVERVIEW]
        }), jsx(Tabs.Tab, {
          ...R.analytics,
          children: $$S[OverviewCategory.ANALYTICS]
        })]
      }), "analytics" === N.activeTab && jsxs("div", {
        className: "dsa_file_view_tabs--dsaDropdowns--NtcWF",
        children: [getFeatureFlags().dsa_styles_variables_ui && jsx(_$$h, {
          labelContent: getI18nString("design_systems.libraries_modal.type"),
          onChange: V,
          value: k,
          options: G
        }), jsx(_$$h, {
          labelContent: getI18nString("design_systems.libraries_modal.duration"),
          onChange: e,
          value: g,
          options: z
        })]
      })]
    })
  }) : jsxs("div", {
    children: [jsxs("div", {
      className: "dsa_file_view_tabs--fileViewTabsHeaderBordered--dsWKz dsa_file_view_tabs--tabsHeaderBordered--Ogkvc",
      children: [jsx("div", {
        children: w.map(e => jsx("span", {
          className: f === e ? "dsa_file_view_tabs--fileViewTabActive--l63XH dsa_file_view_tabs--fileViewTab--NlEoB text--fontPos11--2LvXf text--_fontBase--QdLsd" : "dsa_file_view_tabs--fileViewTab--NlEoB text--fontPos11--2LvXf text--_fontBase--QdLsd",
          onClick: () => t(e),
          "data-new-view-shown": OverviewCategory.OVERVIEW,
          role: "tab",
          children: $$S[e]
        }, e))
      }), f === OverviewCategory.ANALYTICS && jsxs("div", {
        className: "dsa_file_view_tabs--dropdownContainer--arqSQ",
        children: [getFeatureFlags().dsa_styles_variables_ui && jsxs("div", {
          className: "dsa_file_view_tabs--assetTypeContainer--RUGf8 dsa_file_view_tabs--durationContainer--OyAkr",
          children: [jsx("span", {
            className: "dsa_file_view_tabs--assetTypeText--7-2SQ dsa_file_view_tabs--durationText--oKwcG text--fontPos11--2LvXf text--_fontBase--QdLsd",
            children: renderI18nText("design_systems.libraries_modal.type")
          }), jsxs(ButtonPrimitive, {
            onClick: B,
            className: "dsa_file_view_tabs--assetType--XSwaT dsa_file_view_tabs--duration--wcSV6 text--fontPos11--2LvXf text--_fontBase--QdLsd",
            children: [x[k], jsx("div", {
              className: b,
              children: jsx(_$$r, {})
            })]
          }), j && jsx(ms, {
            className: "dsa_file_view_tabs--assetTypeDropdown--Ytz50 dsa_file_view_tabs--dropdown--A2L7x",
            children: H
          })]
        }), jsxs("div", {
          className: "dsa_file_view_tabs--durationContainer--OyAkr",
          children: [jsx("span", {
            className: "dsa_file_view_tabs--durationText--oKwcG text--fontPos11--2LvXf text--_fontBase--QdLsd",
            children: renderI18nText("design_systems.libraries_modal.duration")
          }), jsxs("span", {
            onClick: U,
            className: "dsa_file_view_tabs--duration--wcSV6 text--fontPos11--2LvXf text--_fontBase--QdLsd",
            children: [E[g], jsx("div", {
              className: b,
              children: jsx(_$$r, {})
            })]
          })]
        })]
      })]
    }), jsx("div", {
      children: M && jsx(ms, {
        className: "dsa_file_view_tabs--dropdown--A2L7x",
        children: W
      })
    })]
  });
});
export const S = $$k0;