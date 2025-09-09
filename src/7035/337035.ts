import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { J as _$$J } from "../905/614223";
import { trackEventAnalytics } from "../905/449184";
import { BrowserInfo } from "../figma_app/778880";
import { renderI18nText, getI18nString } from "../905/303541";
import { getFeatureFlags } from "../905/601108";
import { xQ, aL, m3, zF, PM } from "../figma_app/45218";
import { mapFileTypeToEditorType, FEditorType } from "../figma_app/53721";
import { gz, GJ, X7, dC, l0, vf, Wc, d6 } from "../5430/455879";
import { I as _$$I } from "../5132/515990";
import { Jm } from "../figma_app/387599";
import { X_ } from "../figma_app/777551";
import { hJ, XY } from "../905/506641";
import { vt } from "../figma_app/306946";
import { cx } from "../figma_app/558929";
import { showModalHandler } from "../905/156213";
import { Yo } from "../figma_app/543529";
import { ll, U6 } from "../figma_app/844435";
import { kc } from "../figma_app/740025";
import { k as _$$k2 } from "../905/882646";
import { getUserId } from "../905/372672";
import { U3 } from "../figma_app/412189";
import { FOrganizationLevelType } from "../figma_app/191312";
import { useCurrentPrivilegedPlan, useCurrentPlanUser, useIsOrgAdminUser } from "../figma_app/465071";
import { getCurrentPluginVersion, pluginMetadata, hasOrgRole } from "../figma_app/300692";
import { Ib } from "../905/129884";
import { X } from "../5430/785696";
import { o as _$$o } from "../5430/992445";
import { WW } from "../figma_app/764679";
import { x as _$$x } from "../905/423181";
export function $$S0({
  resource: e,
  universalEditorTypeFallback: t,
  context: n
}) {
  let E;
  let F = useDispatch();
  let P = getUserId();
  let S = useCurrentPrivilegedPlan("PluginTryButton").unwrapOr(null);
  let O = S?.widgetsWhitelistEnforced || null;
  let B = S?.pluginsWhitelistEnforced || null;
  let j = S?.key.type === FOrganizationLevelType.ORG;
  let k = Yo();
  let H = useCurrentPlanUser("PluginTryButton");
  let U = useIsOrgAdminUser(H).unwrapOr(!1);
  let M = kc();
  let J = xQ(e);
  let Q = getCurrentPluginVersion(e) || pluginMetadata;
  let X = _$$o(H.unwrapOr(null), S, Q, t ? mapFileTypeToEditorType(t) : void 0);
  let $ = hasOrgRole(e);
  let Y = !!M?.org_id;
  let Z = j && (J ? O : B);
  E = _$$I() ? "right" : n === aL.DETAIL ? "center" : "left";
  let z = n === aL.REDESIGNED_PLUGIN_ROW;
  let {
    dropdownIsShown,
    toggleSwitchEditorDropdown,
    PluginTrySwitchEditorDropdown
  } = WW(e, E, n);
  let ee = useRef(null);
  let et = Jm();
  if (U3("scroll", () => {
    (n === aL.PLUGIN_ROW || n === aL.REDESIGNED_PLUGIN_ROW) && toggleSwitchEditorDropdown(ee, !1);
  }), Q === pluginMetadata) return null;
  let en = m3(e);
  return U && Y && !en && k && Z && !$ ? jsx(v, {
    resource: e,
    orgEntity: k,
    useShortenedLabel: BrowserInfo.mobile
  }) : jsx(Fragment, {
    children: jsxs(_$$J, {
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
      }(X),
      children: [jsx("button", {
        type: "button",
        className: n === aL.REDESIGNED_PLUGIN_ROW ? gz : n === aL.PLUGIN_ROW ? GJ : X7,
        onClick: () => {
          if (!P) {
            let t = _$$k2(e);
            F(cx({
              isWidget: J,
              redirectPath: t
            }));
            return;
          }
          if (BrowserInfo.mobile) {
            F(showModalHandler({
              type: _$$x,
              data: {
                dispatch: F
              }
            }));
            return;
          }
          trackEventAnalytics("try_it_out_editor_picker_menu_opened", {
            pluginId: e.id,
            isWidget: xQ(e),
            searchSessionId: et
          });
          toggleSwitchEditorDropdown(ee);
        },
        "data-testid": "plugin-try-button",
        children: jsx("div", {
          className: z ? dC : l0,
          ref: ee,
          children: jsxs(Fragment, {
            children: [jsx(hJ, {
              children: X_(J ? vt.WIDGET : vt.PLUGIN, zF(e) || PM(e))
            }), jsx(XY, {
              children: renderI18nText("community.using.open_in_no_ellipses")
            })]
          })
        })
      }), dropdownIsShown && jsx(PluginTrySwitchEditorDropdown, {
        primaryFullscreenEditorType: X
      })]
    })
  });
}
function v(e) {
  let t;
  let n;
  let l = ll();
  let o = U6();
  let r = xQ(e.resource);
  let u = r ? !!o[e.resource.id] : !!l[e.resource.id];
  u ? (t = renderI18nText("community.plugins.remove"), n = getI18nString("community.plugins.remove_for_org_tooltip", {
    orgName: e.orgEntity.name
  })) : (t = renderI18nText("community.plugins.approve"), n = getI18nString("community.plugins.approve_for_org_tooltip", {
    orgName: e.orgEntity.name
  }));
  return jsx("button", {
    type: "button",
    className: u ? vf : Wc,
    onClick: () => {
      let t = {
        orgId: e.orgEntity.id,
        extensionId: e.resource.id,
        extensionType: r ? "widget" : "plugin"
      };
      u ? X.disableExtensionForOrg(t) : X.enableExtensionForOrg(t);
    },
    "data-tooltip-type": Ib.TEXT,
    "data-tooltip": n,
    children: jsx("div", {
      className: e.useShortenedLabel ? d6 : l0,
      children: t
    })
  });
}
export const PluginTryButton = $$S0;