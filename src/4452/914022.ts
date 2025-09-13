import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useModalManager } from "../905/437088";
import { ModalRootComponent } from "../905/38914";
import { vo, Y9, hE, nB } from "../figma_app/272243";
import { getFeatureFlags } from "../905/601108";
import { _ as _$$_, S } from "../figma_app/490799";
import { P } from "../905/347284";
import { s as _$$s } from "../cssbuilder/589278";
import { getI18nString, renderI18nText } from "../905/303541";
import { fu } from "../figma_app/831799";
import { FOrganizationLevelType } from "../figma_app/191312";
import { Eh } from "../figma_app/617654";
import { V } from "../905/223084";
import { $ } from "../905/834575";
import { registerModal } from "../905/102752";
import { az } from "../figma_app/805373";
import { lM } from "../figma_app/392626";
let s;
function I(e) {
  let t = useDispatch();
  let a = useModalManager(e);
  let s = lM(e.entryPoint);
  let [b, I] = useState();
  useEffect(() => {
    if (getFeatureFlags().can_transfer_admin_list) V.getTransferAdmins(e.planType, e.planId, e.resourceType, e.resourceIdOrKey).then(({
      data: e
    }) => {
      I(e.meta.map(e => ({
        id: e.id,
        name: e.name,
        email: e.email,
        imgUrl: e.img_url
      })));
    });else if (e.planType === FOrganizationLevelType.ORG) {
      Eh.getOrgAdmins({
        orgId: e.planId
      }).then(({
        data: e
      }) => {
        I(e.meta);
      });
      return;
    } else e.planType === FOrganizationLevelType.TEAM && $.getTeamAdmins({
      teamId: e.planId
    }).then(({
      data: e
    }) => {
      I(e.meta);
    });
  }, [e.planType, e.planId, e.resourceType, e.resourceIdOrKey, t]);
  let E = e.planName ?? getI18nString("general.fallback_team_name");
  return jsx(fu, {
    name: "Asset Transfer Admin List Modal",
    children: jsx(ModalRootComponent, {
      manager: a,
      width: "lg",
      children: jsxs(vo, {
        children: [jsx(Y9, {
          children: jsx(hE, {
            children: renderI18nText("asset_transfers.editor_admin_list_modal.admins_at_entity", {
              entity: E
            })
          })
        }), jsxs(nB, {
          scrolling: "none",
          children: [jsx(_$$_, {
            color: S.INFORMATION,
            text: s ? renderI18nText("asset_transfers.editor_admin_list_modal.any_of_these_admins_can_transfer_this_project_to_an_external_organization") : renderI18nText("asset_transfers.editor_admin_list_modal.any_of_these_admins_can_transfer_this_team_to_an_external_organization")
          }), jsx(P, {
            className: "asset_transfer_admin_list_modal--scrollContainer--IG5YS",
            children: jsx("div", {
              className: "asset_transfer_admin_list_modal--contentContainer--u5vXu",
              children: (() => {
                if (b) {
                  let e = b.map(e => jsx("div", {
                    className: _$$s.py8.$,
                    children: jsx(az, {
                      entity: e,
                      includeUserEmailAddress: !0,
                      showIsMe: !1,
                      hideFallbackInitial: !1
                    }, e.id)
                  }, e.id));
                  return jsx("ul", {
                    children: e
                  });
                }
              })()
            })
          })]
        })]
      })
    })
  });
}
export function $$E0() {
  return s ??= registerModal(I, "AssetTransferAdminListModal");
}
export const Y = $$E0;