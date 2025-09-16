import { registerModal } from "../905/102752";
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useDispatch } from "react-redux";
import { useModalManager } from "../905/437088";
import { N } from "../905/438674";
import { ModalRootComponent } from "../905/38914";
import { vo, Y9, hE, nB } from "../figma_app/272243";
import { s as _$$s } from "../cssbuilder/589278";
import { getI18nString, renderI18nText } from "../905/303541";
import { lk, u3 } from "../figma_app/109538";
import { B } from "../905/380801";
import { b as _$$b, A as _$$A } from "../905/723768";
import { selectViewAction } from "../905/929976";
import { hideModal, showModalHandler } from "../905/156213";
import { TrackingProvider } from "../figma_app/831799";
import { FPlanNameType } from "../figma_app/191312";
import { UpsellModalType } from "../905/165519";
import { DashboardSection, WorkspaceTab } from "../figma_app/650409";
import { DashboardSections, MemberSections } from "../905/548208";
export let $$v0 = registerModal(function (e) {
  let {
    plan
  } = e;
  let i = useDispatch();
  let v = () => {
    i(hideModal());
  };
  let I = useModalManager({
    ...e,
    onClose: v
  });
  let E = jsx(N, {
    href: "#",
    onClick: () => {
      v();
      plan.tier === FPlanNameType.PRO ? i(selectViewAction({
        view: "teamAdminConsole",
        teamId: plan.key?.parentId || "",
        teamAdminConsoleViewTab: DashboardSections.CONTENT,
        teamAdminConsoleViewSecondaryTab: MemberSections.CONNECTED_PROJECTS
      })) : i(selectViewAction({
        view: "orgAdminSettings",
        orgAdminSettingsViewTab: DashboardSection.CONTENT,
        orgAdminSettingsViewSecondaryTab: WorkspaceTab.CONNECTED_PROJECTS
      }));
    },
    children: getI18nString("resource_connection.maximum_connections_modal.disconnect_link_text")
  });
  let x = () => {
    plan.tier === FPlanNameType.ORG ? i(showModalHandler({
      type: lk,
      data: {
        source: B.CONNECTED_PROJECTS_MAXIMUM_CONNECTIONS_UPSELL
      }
    })) : plan.tier === FPlanNameType.PRO && i(showModalHandler({
      type: u3,
      data: {
        upsellSource: UpsellModalType.CONNECTED_PROJECTS_MAXIMUM_CONNECTIONS
      }
    }));
  };
  let S = plan.tier === FPlanNameType.ORG ? jsxs(Fragment, {
    children: [jsx(N, {
      onClick: x,
      href: "#",
      children: getI18nString("resource_connection.maximum_connections_modal.upgrade_link_text_ent_upgrade")
    }), " ", getI18nString("resource_connection.maximum_connections_modal.upgrade_text_ent_upgrade")]
  }) : jsx(N, {
    onClick: x,
    href: "#",
    children: getI18nString("resource_connection.maximum_connections_modal.upgrade_link_text_org_upgrade")
  });
  return jsx(TrackingProvider, {
    name: "Maximum Connections Reached Paywall Modal",
    properties: {
      planId: plan.key.parentId,
      planType: plan.type
    },
    children: jsx(ModalRootComponent, {
      manager: I,
      width: "lg",
      children: jsx("div", {
        className: "maximum_connections_reached_modal--modalContents--fGCvS",
        children: jsxs(vo, {
          children: [jsx(Y9, {
            children: jsx(hE, {
              children: renderI18nText("resource_connection.maximum_connections_modal.no_more_connected_projects_available")
            })
          }), jsx(nB, {
            children: jsxs("p", {
              className: _$$s.pt8.pb8.$,
              children: [renderI18nText("resource_connection.maximum_connections_modal.tier_maximum_connections_info", {
                maxConnections: _$$b[plan.tier],
                planTier: _$$A(plan.tier)
              }), " ", plan.tier === FPlanNameType.ENTERPRISE ? renderI18nText("resource_connection.maximum_connections_modal.max_connections_next_steps_upsell_ineligible", {
                disconnectLink: E
              }) : renderI18nText("resource_connection.maximum_connections_modal.max_connections_next_steps_upsell_eligible", {
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