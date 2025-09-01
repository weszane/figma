import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { useRef } from "react";
import { wA } from "../vendor/514228";
import { J } from "../905/614223";
import { sx } from "../905/449184";
import { Ay } from "../figma_app/778880";
import { tx, t as _$$t } from "../905/303541";
import { getFeatureFlags } from "../905/601108";
import { xQ, aL, m3, zF, PM } from "../figma_app/45218";
import { wN, nT } from "../figma_app/53721";
import { gz, GJ, X7, dC, l0, vf, Wc, d6 } from "../5430/455879";
import { I as _$$I } from "../5132/515990";
import { Jm } from "../figma_app/387599";
import { X_ } from "../figma_app/777551";
import { hJ, XY } from "../905/506641";
import { vt } from "../figma_app/306946";
import { cx } from "../figma_app/558929";
import { to } from "../905/156213";
import { Yo } from "../figma_app/543529";
import { ll, U6 } from "../figma_app/844435";
import { kc } from "../figma_app/740025";
import { k as _$$k2 } from "../905/882646";
import { TA } from "../905/372672";
import { U3 } from "../figma_app/412189";
import { FOrganizationLevelType } from "../figma_app/191312";
import { T5, D6, j_ } from "../figma_app/465071";
import { Ar, lT, Rt } from "../figma_app/300692";
import { Ib } from "../905/129884";
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
  let S = wA();
  let R = TA();
  let M = T5("PluginTryButton").unwrapOr(null);
  let B = M?.widgetsWhitelistEnforced || null;
  let D = M?.pluginsWhitelistEnforced || null;
  let F = M?.key.type === FOrganizationLevelType.ORG;
  let H = Yo();
  let U = D6("PluginTryButton");
  let V = j_(U).unwrapOr(!1);
  let W = kc();
  let G = xQ(e);
  let $ = Ar(e) || lT;
  let z = _$$o(U.unwrapOr(null), M, $, t ? wN(t) : void 0);
  let Q = Rt(e);
  let Z = !!W?.org_id;
  let q = F && (G ? B : D);
  j = _$$I() ? "right" : r === aL.DETAIL ? "center" : "left";
  let Y = r === aL.REDESIGNED_PLUGIN_ROW;
  let {
    dropdownIsShown,
    toggleSwitchEditorDropdown,
    PluginTrySwitchEditorDropdown
  } = WW(e, j, r);
  let ee = useRef(null);
  let et = Jm();
  if (U3("scroll", () => {
    (r === aL.PLUGIN_ROW || r === aL.REDESIGNED_PLUGIN_ROW) && toggleSwitchEditorDropdown(ee, !1);
  }), $ === lT) return null;
  let er = m3(e);
  return V && Z && !er && H && q && !Q ? jsx(O, {
    resource: e,
    orgEntity: H,
    useShortenedLabel: Ay.mobile
  }) : jsx(Fragment, {
    children: jsxs(J, {
      brand: function (e) {
        switch (e) {
          case nT.Whiteboard:
            return "whiteboard";
          case nT.DevHandoff:
            return "dev-handoff";
          case nT.Slides:
            return "piper";
          case nT.Cooper:
            return getFeatureFlags().buzz_plugins_publishing ? "cooper" : "design";
          case nT.Design:
          default:
            return "design";
        }
      }(z),
      children: [jsx("button", {
        type: "button",
        className: r === aL.REDESIGNED_PLUGIN_ROW ? gz : r === aL.PLUGIN_ROW ? GJ : X7,
        onClick: () => {
          if (!R) {
            let t = _$$k2(e);
            S(cx({
              isWidget: G,
              redirectPath: t
            }));
            return;
          }
          if (Ay.mobile) {
            S(to({
              type: _$$x,
              data: {
                dispatch: S
              }
            }));
            return;
          }
          sx("try_it_out_editor_picker_menu_opened", {
            pluginId: e.id,
            isWidget: xQ(e),
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
              children: X_(G ? vt.WIDGET : vt.PLUGIN, zF(e) || PM(e))
            }), jsx(XY, {
              children: tx("community.using.open_in_no_ellipses")
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
  let i = ll();
  let n = U6();
  let o = xQ(e.resource);
  let a = o ? !!n[e.resource.id] : !!i[e.resource.id];
  a ? (t = tx("community.plugins.remove"), r = _$$t("community.plugins.remove_for_org_tooltip", {
    orgName: e.orgEntity.name
  })) : (t = tx("community.plugins.approve"), r = _$$t("community.plugins.approve_for_org_tooltip", {
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
    "data-tooltip-type": Ib.TEXT,
    "data-tooltip": r,
    children: jsx("div", {
      className: e.useShortenedLabel ? d6 : l0,
      children: t
    })
  });
}
export const PluginTryButton = $$M0;