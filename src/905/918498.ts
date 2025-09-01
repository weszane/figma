import { Ju } from "../905/102752";
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { wA } from "../vendor/514228";
import { hS } from "../905/437088";
import { N } from "../905/438674";
import { bL } from "../905/38914";
import { vo, Y9, hE, nB } from "../figma_app/272243";
import { s as _$$s } from "../cssbuilder/589278";
import { t, tx } from "../905/303541";
import { lk, u3 } from "../figma_app/109538";
import { B } from "../905/380801";
import { b as _$$b, A as _$$A } from "../905/723768";
import { sf } from "../905/929976";
import { Ce, to } from "../905/156213";
import { fu } from "../figma_app/831799";
import { FPlanNameType } from "../figma_app/191312";
import { b as _$$b2 } from "../905/165519";
import { J7, SN } from "../figma_app/650409";
import { Iv, F9 } from "../905/548208";
export let $$v0 = Ju(function (e) {
  let {
    plan
  } = e;
  let i = wA();
  let v = () => {
    i(Ce());
  };
  let I = hS({
    ...e,
    onClose: v
  });
  let E = jsx(N, {
    href: "#",
    onClick: () => {
      v();
      plan.tier === FPlanNameType.PRO ? i(sf({
        view: "teamAdminConsole",
        teamId: plan.key?.parentId || "",
        teamAdminConsoleViewTab: Iv.CONTENT,
        teamAdminConsoleViewSecondaryTab: F9.CONNECTED_PROJECTS
      })) : i(sf({
        view: "orgAdminSettings",
        orgAdminSettingsViewTab: J7.CONTENT,
        orgAdminSettingsViewSecondaryTab: SN.CONNECTED_PROJECTS
      }));
    },
    children: t("resource_connection.maximum_connections_modal.disconnect_link_text")
  });
  let x = () => {
    plan.tier === FPlanNameType.ORG ? i(to({
      type: lk,
      data: {
        source: B.CONNECTED_PROJECTS_MAXIMUM_CONNECTIONS_UPSELL
      }
    })) : plan.tier === FPlanNameType.PRO && i(to({
      type: u3,
      data: {
        upsellSource: _$$b2.CONNECTED_PROJECTS_MAXIMUM_CONNECTIONS
      }
    }));
  };
  let S = plan.tier === FPlanNameType.ORG ? jsxs(Fragment, {
    children: [jsx(N, {
      onClick: x,
      href: "#",
      children: t("resource_connection.maximum_connections_modal.upgrade_link_text_ent_upgrade")
    }), " ", t("resource_connection.maximum_connections_modal.upgrade_text_ent_upgrade")]
  }) : jsx(N, {
    onClick: x,
    href: "#",
    children: t("resource_connection.maximum_connections_modal.upgrade_link_text_org_upgrade")
  });
  return jsx(fu, {
    name: "Maximum Connections Reached Paywall Modal",
    properties: {
      planId: plan.key.parentId,
      planType: plan.type
    },
    children: jsx(bL, {
      manager: I,
      width: "lg",
      children: jsx("div", {
        className: "maximum_connections_reached_modal--modalContents--fGCvS",
        children: jsxs(vo, {
          children: [jsx(Y9, {
            children: jsx(hE, {
              children: tx("resource_connection.maximum_connections_modal.no_more_connected_projects_available")
            })
          }), jsx(nB, {
            children: jsxs("p", {
              className: _$$s.pt8.pb8.$,
              children: [tx("resource_connection.maximum_connections_modal.tier_maximum_connections_info", {
                maxConnections: _$$b[plan.tier],
                planTier: _$$A(plan.tier)
              }), " ", plan.tier === FPlanNameType.ENTERPRISE ? tx("resource_connection.maximum_connections_modal.max_connections_next_steps_upsell_ineligible", {
                disconnectLink: E
              }) : tx("resource_connection.maximum_connections_modal.max_connections_next_steps_upsell_eligible", {
                disconnectLink: E,
                upgradeLink: S
              })]
            })
          })]
        })
      })
    })
  });
}, "MaximumConnectionsReachedModal");
export const u = $$v0;