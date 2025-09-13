import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { useModalManager } from "../905/437088";
import { ModalRootComponent } from "../905/38914";
import { vo, Y9, hE, nB } from "../figma_app/272243";
import { getFeatureFlags } from "../905/601108";
import { ButtonSecondaryTracked, ButtonBasePrimaryTracked } from "../figma_app/637027";
import { LoadingOverlay } from "../figma_app/858013";
import { getI18nString, renderI18nText } from "../905/303541";
import { cL } from "../905/748726";
import { hideModal } from "../905/156213";
import { TrackingProvider } from "../figma_app/831799";
import { zK } from "../figma_app/475472";
import { dr } from "../4452/405965";
import { FResourceCategoryType, FPermissionLevelType } from "../figma_app/191312";
import { teamVisibilityEnum } from "../figma_app/630077";
import { registerModal } from "../905/102752";
import { MF } from "../4452/915131";
import { _9, J4, Kd, Iz, YU } from "../figma_app/907616";
import { w } from "../905/733703";
import { DA, Lq, $2, VA, bV, E_ } from "../figma_app/538002";
export let $$S0 = registerModal(function (e) {
  let t = useDispatch();
  let a = dr(e.team.id).data;
  let n = a && a.workspace ? {
    id: a.workspace.id,
    name: a.workspace.name,
    imgUrl: a.workspace.imgUrl
  } : void 0;
  let d = () => {
    t(hideModal());
    t(cL());
  };
  let c = useModalManager({
    ...e,
    onClose: d
  });
  return jsx(TrackingProvider, {
    name: "Team Access Modal",
    properties: {
      resourceType: FResourceCategoryType.TEAM,
      resourceId: e.team.id
    },
    children: jsx(ModalRootComponent, {
      manager: c,
      width: "lg",
      children: jsxs(vo, {
        children: [jsx(Y9, {
          children: jsx(hE, {
            children: e.goBack ? jsx(w, {
              title: getI18nString("team_view.team_permissions_modal.access_settings"),
              onClick: e.goBack
            }) : jsx("div", {
              className: DA,
              children: jsx("p", {
                children: renderI18nText("team_view.team_permissions_modal.access_settings")
              })
            })
          })
        }), jsx(nB, {
          children: a ? a.org && jsx($$T1, {
            team: e.team,
            org: a.org,
            teamSharingSettings: a.teamSharingSettings,
            hideModal: d,
            workspace: n
          }) : jsx(LoadingOverlay, {
            className: Lq
          })
        })]
      })
    })
  });
}, "TeamAccessModal");
export function $$T1(e) {
  let t = getFeatureFlags().sc_workspace_audience;
  let a = useDispatch();
  let i = useCallback(() => {
    let t = e.teamSharingSettings && e.teamSharingSettings.sharingAudienceControl;
    return t === FPermissionLevelType.ORG_EDIT || t === FPermissionLevelType.ORG_VIEW ? _9.ORG : t === FPermissionLevelType.WORKSPACE_EDIT || t === FPermissionLevelType.WORKSPACE_VIEW ? _9.WORKSPACE : _9.INVITE_ONLY;
  }, [e.teamSharingSettings]);
  let l = useCallback(() => {
    let t = e.teamSharingSettings && e.teamSharingSettings.orgBrowsable;
    let a = e.teamSharingSettings && e.teamSharingSettings.hidden;
    if (t) ;else if (a) return teamVisibilityEnum.HIDDEN;
    return teamVisibilityEnum.ORG_BROWSABLE;
  }, [e.teamSharingSettings]);
  let o = useCallback(() => {
    let t = e.teamSharingSettings && e.teamSharingSettings.sharingAudienceControl;
    return t === FPermissionLevelType.ORG_EDIT || t === FPermissionLevelType.WORKSPACE_EDIT ? J4.EDIT : (t === FPermissionLevelType.ORG_VIEW || FPermissionLevelType.WORKSPACE_VIEW, J4.VIEW);
  }, [e.teamSharingSettings]);
  let [u, _] = useState(i());
  let [p, g] = useState(l());
  let [x, b] = useState(o());
  let I = u === _9.INVITE_ONLY ? p && jsx("div", {
    className: $2,
    children: jsx(Kd, {
      selectedDiscoverability: p,
      setSelectedDiscoverability: g
    })
  }) : jsxs(Fragment, {
    children: [jsx(Iz, {
      selectedPermissionsLevel: x,
      setSelectedPermissionsLevel: b
    }), jsx("div", {
      className: VA,
      children: x === J4.VIEW ? getI18nString("team_creation.can_view_and_comment") : getI18nString("team_creation.can_create_and_edit_files")
    })]
  });
  return jsxs(Fragment, {
    children: [jsx("div", {
      className: bV,
      children: getI18nString("team_creation.who_has_access")
    }), jsx(YU, {
      resourceType: FResourceCategoryType.TEAM,
      value: u,
      onChange: _,
      org: e.org,
      audienceAccessLevel: x,
      workspace: t ? e.workspace : void 0
    }), jsx("div", {
      className: bV,
      children: u === _9.INVITE_ONLY ? getI18nString("team_creation.visibility") : getI18nString("team_creation.what_they_can_do")
    }), I, jsxs("div", {
      className: E_,
      children: [jsx(ButtonSecondaryTracked, {
        onClick: e.goBack || e.hideModal,
        children: renderI18nText("project_creation.cancel")
      }), jsx(ButtonBasePrimaryTracked, {
        onClick: () => {
          let t = u === _9.INVITE_ONLY && p === teamVisibilityEnum.ORG_BROWSABLE;
          let s = u === _9.INVITE_ONLY && p === teamVisibilityEnum.HIDDEN;
          let n = MF(u, x);
          if (a(zK({
            team: e.team,
            sharingAudienceControl: n,
            orgBrowsable: t,
            hidden: s
          })), e.goBack) {
            e.goBack();
            return;
          }
          e.hideModal();
        },
        children: renderI18nText("team_view.team_permissions_modal.save")
      })]
    })]
  });
}
export const dW = $$S0;
export const nH = $$T1;