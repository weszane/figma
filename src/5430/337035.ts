import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { setupThemeContext } from "../905/614223";
import { trackEventAnalytics } from "../905/449184";
import { BrowserInfo } from "../figma_app/778880";
import { renderI18nText, getI18nString } from "../905/303541";
import { getFeatureFlags } from "../905/601108";
import { isWidget, ShelfViewType, hasMonetizedResourceMetadata, isThirdPartyMonetized, hasFreemiumCode } from "../figma_app/45218";
import { mapFileTypeToEditorType, FEditorType } from "../figma_app/53721";
import { gz, GJ, X7, dC, l0, vf, Wc, d6 } from "../5430/455879";
import { I as _$$I } from "../5132/515990";
import { getSearchSessionIdFromSelector } from "../figma_app/387599";
import { getResourceActionText } from "../figma_app/777551";
import { hJ, XY } from "../905/506641";
import { ResourceTypeEnum } from "../figma_app/306946";
import { cx } from "../figma_app/558929";
import { showModalHandler } from "../905/156213";
import { useCurrentOrgAdminInfo } from "../figma_app/543529";
import { useAllowlistedPlugins, useAllowlistedWidgets } from "../figma_app/844435";
import { useAuthedActiveCommunityProfile } from "../figma_app/740025";
import { generateCommunityUrl } from "../905/882646";
import { getUserId } from "../905/372672";
import { U3 } from "../figma_app/412189";
import { FOrganizationLevelType } from "../figma_app/191312";
import { useCurrentPrivilegedPlan, useCurrentPlanUser, useIsOrgAdminUser } from "../figma_app/465071";
import { getCurrentPluginVersion, pluginMetadata, hasOrgRole } from "../figma_app/300692";
import { KindEnum } from "../905/129884";
import { X } from "../5430/785696";
import { o as _$$o } from "../5430/992445";
import { WW } from "../figma_app/764679";
import { x as _$$x } from "../905/423181";
export function $$M0({
  resource: e,
  universalEditorTypeFallback: t,
  context: r
}) {
  let j;
  let S = useDispatch();
  let R = getUserId();
  let M = useCurrentPrivilegedPlan("PluginTryButton").unwrapOr(null);
  let B = M?.widgetsWhitelistEnforced || null;
  let D = M?.pluginsWhitelistEnforced || null;
  let F = M?.key.type === FOrganizationLevelType.ORG;
  let H = useCurrentOrgAdminInfo();
  let U = useCurrentPlanUser("PluginTryButton");
  let V = useIsOrgAdminUser(U).unwrapOr(!1);
  let W = useAuthedActiveCommunityProfile();
  let G = isWidget(e);
  let $ = getCurrentPluginVersion(e) || pluginMetadata;
  let z = _$$o(U.unwrapOr(null), M, $, t ? mapFileTypeToEditorType(t) : void 0);
  let Q = hasOrgRole(e);
  let Z = !!W?.org_id;
  let q = F && (G ? B : D);
  j = _$$I() ? "right" : r === ShelfViewType.DETAIL ? "center" : "left";
  let Y = r === ShelfViewType.REDESIGNED_PLUGIN_ROW;
  let {
    dropdownIsShown,
    toggleSwitchEditorDropdown,
    PluginTrySwitchEditorDropdown
  } = WW(e, j, r);
  let ee = useRef(null);
  let et = getSearchSessionIdFromSelector();
  if (U3("scroll", () => {
    (r === ShelfViewType.PLUGIN_ROW || r === ShelfViewType.REDESIGNED_PLUGIN_ROW) && toggleSwitchEditorDropdown(ee, !1);
  }), $ === pluginMetadata) return null;
  let er = hasMonetizedResourceMetadata(e);
  return V && Z && !er && H && q && !Q ? jsx(O, {
    resource: e,
    orgEntity: H,
    useShortenedLabel: BrowserInfo.mobile
  }) : jsx(Fragment, {
    children: jsxs(setupThemeContext, {
      brand: function (e) {
        switch (e) {
          case FEditorType.Whiteboard:
            return "whiteboard";
          case FEditorType.DevHandoff:
            return "dev-handoff";
          case FEditorType.Slides:
            return "piper";
          case FEditorType.Cooper:
            return getFeatureFlags().buzz_plugins_publishing ? "cooper" : "design";
          case FEditorType.Design:
          default:
            return "design";
        }
      }(z),
      children: [jsx("button", {
        type: "button",
        className: r === ShelfViewType.REDESIGNED_PLUGIN_ROW ? gz : r === ShelfViewType.PLUGIN_ROW ? GJ : X7,
        onClick: () => {
          if (!R) {
            let t = generateCommunityUrl(e);
            S(cx({
              isWidget: G,
              redirectPath: t
            }));
            return;
          }
          if (BrowserInfo.mobile) {
            S(showModalHandler({
              type: _$$x,
              data: {
                dispatch: S
              }
            }));
            return;
          }
          trackEventAnalytics("try_it_out_editor_picker_menu_opened", {
            pluginId: e.id,
            isWidget: isWidget(e),
            searchSessionId: et
          });
          toggleSwitchEditorDropdown(ee);
        },
        "data-testid": "plugin-try-button",
        children: jsx("div", {
          className: Y ? dC : l0,
          ref: ee,
          children: jsxs(Fragment, {
            children: [jsx(hJ, {
              children: getResourceActionText(G ? ResourceTypeEnum.WIDGET : ResourceTypeEnum.PLUGIN, isThirdPartyMonetized(e) || hasFreemiumCode(e))
            }), jsx(XY, {
              children: renderI18nText("community.using.open_in_no_ellipses")
            })]
          })
        })
      }), dropdownIsShown && jsx(PluginTrySwitchEditorDropdown, {
        primaryFullscreenEditorType: z
      })]
    })
  });
}
function O(e) {
  let t;
  let r;
  let i = useAllowlistedPlugins();
  let n = useAllowlistedWidgets();
  let o = isWidget(e.resource);
  let a = o ? !!n[e.resource.id] : !!i[e.resource.id];
  a ? (t = renderI18nText("community.plugins.remove"), r = getI18nString("community.plugins.remove_for_org_tooltip", {
    orgName: e.orgEntity.name
  })) : (t = renderI18nText("community.plugins.approve"), r = getI18nString("community.plugins.approve_for_org_tooltip", {
    orgName: e.orgEntity.name
  }));
  return jsx("button", {
    type: "button",
    className: a ? vf : Wc,
    onClick: () => {
      let t = {
        orgId: e.orgEntity.id,
        extensionId: e.resource.id,
        extensionType: o ? "widget" : "plugin"
      };
      a ? X.disableExtensionForOrg(t) : X.enableExtensionForOrg(t);
    },
    "data-tooltip-type": KindEnum.TEXT,
    "data-tooltip": r,
    children: jsx("div", {
      className: e.useShortenedLabel ? d6 : l0,
      children: t
    })
  });
}
export const PluginTryButton = $$M0;