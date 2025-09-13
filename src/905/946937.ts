import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { lQ } from "../905/934246";
import { useModalManager } from "../905/437088";
import { ModalRootComponent } from "../905/38914";
import { vo, nB, Y9, hE, wi, jk } from "../figma_app/272243";
import { resourceUtils } from "../905/989992";
import { useSubscription } from "../figma_app/288654";
import { LoadingOverlay } from "../figma_app/858013";
import { $z } from "../figma_app/617427";
import { pW } from "../905/160095";
import { renderI18nText, getI18nString } from "../905/303541";
import { R as _$$R } from "../905/304671";
import { h as _$$h } from "../905/142086";
import { showModalHandler, hideModal } from "../905/156213";
import { c as _$$c } from "../905/370443";
import { TrackingProvider } from "../figma_app/831799";
import { getRepoByIdAlt } from "../905/760074";
import { F as _$$F } from "../905/224";
import { isReduxDeprecationCutover, ConfigGroups } from "../figma_app/121751";
import { useShadowReadLoaded, adminPermissionConfig } from "../figma_app/391338";
import { isTeamFolderV2 } from "../figma_app/528509";
import { selectCurrentFile } from "../figma_app/516028";
import { FC } from "../figma_app/212807";
import { _6 } from "../figma_app/386952";
import { selectCurrentUser } from "../905/372672";
import { FPlanNameType, FFileType, FProductAccessType, FPlanAccessType } from "../figma_app/191312";
import { PublishUpsellTeamPlan, PublishUpsellTeamRoles } from "../figma_app/43951";
import { hasTeamPaidAccess } from "../figma_app/345997";
import { canEditTeam } from "../figma_app/642025";
import { UpsellModalType } from "../905/165519";
import { Bi } from "../905/652992";
import { projectPermissionEnum } from "../figma_app/630077";
import { registerModal } from "../905/102752";
import { RR } from "../905/514666";
import { bP } from "../905/739964";
import { dD } from "../905/519113";
export let $$V0 = registerModal(function (e) {
  let t = selectCurrentFile();
  let {
    team,
    afterFileMove
  } = e;
  let s = useDispatch();
  let o = FC();
  let l = selectCurrentUser();
  let d = !!team && canEditTeam(team?.id, o);
  let p = hasTeamPaidAccess(team);
  let m = useSubscription(PublishUpsellTeamPlan(team ? {
    teamId: team.id
  } : null));
  let h = resourceUtils.useTransform(m, e => e?.team?.canEdit ?? !1);
  let g = resourceUtils.useTransform(m, e => {
    let t = e?.team?.plan.tier;
    return !!t && [FPlanNameType.STUDENT, FPlanNameType.PRO].includes(t);
  });
  let f = useShadowReadLoaded({
    oldValue: resourceUtils.useMemoizedLoaded(d),
    newValue: h,
    label: adminPermissionConfig.UpsellModal.canEditTeam,
    enableFullRead: isReduxDeprecationCutover(ConfigGroups.GROUP_7),
    contextArgs: {
      teamId: team?.id,
      userId: l?.id
    }
  });
  let _ = useShadowReadLoaded({
    oldValue: resourceUtils.useMemoizedLoaded(p),
    newValue: g,
    label: adminPermissionConfig.UpsellModal.isFileInTeamWithProFeatures,
    enableFullRead: isReduxDeprecationCutover(ConfigGroups.GROUP_7),
    contextArgs: {
      teamId: team?.id,
      userId: l?.id
    }
  });
  let y = _6();
  let b = () => {
    s(showModalHandler({
      type: dD,
      data: {
        entrypoint: RR.PUBLISH_UPSELL_MODAL
      }
    }));
  };
  return !t || team && "loaded" !== f.status && "loaded" !== _.status ? jsx(Fragment, {}) : team && f.data && !_.data ? jsx(bP, {
    team,
    resource: Bi.TEAM_LIBRARY,
    action: projectPermissionEnum.PUBLISH_COMPONENTS,
    editorType: FFileType.DESIGN,
    onStarterPlanCtaClick: b,
    currentPlan: _$$F.Plan.STARTER,
    upsellPlan: _$$F.Plan.PRO,
    onBillingCompleteRedirectInfo: {
      fileKey: t.key,
      nodeId: "fullscreen" === y.view && y.nodeId || ""
    },
    upsellSource: UpsellModalType.LIBRARY_UPSELL_BADGE
  }) : jsx(G, {
    team,
    afterFileMove,
    onStylesClick: b
  });
}, "publish-components-upsell");
function G(e) {
  let t = _$$R();
  let i = useModalManager({
    onClose: lQ,
    open: !0,
    preventUserClose: !0
  });
  let c = useSelector(e => e.currentUserOrgId);
  let {
    onStylesClick
  } = e;
  let h = useSubscription(PublishUpsellTeamRoles, {});
  let g = selectCurrentFile();
  let _ = hasTeamPaidAccess(e.team);
  let A = useMemo(() => h.transform(e => e.currentUser.teamEditRoles.some(e => {
    let i = e.team;
    let n = i?.currentPlanUser;
    let r = t ? n?.seatTypeLicenseTypes?.includes(FProductAccessType.DESIGN) : n?.designPaidStatus !== FPlanAccessType.RESTRICTED;
    return i && [FPlanNameType.PRO, FPlanNameType.STUDENT].includes(i.plan.tier) && !i.deletedAt && r;
  })).unwrapOr(!1), [h, t]);
  let y = !!c;
  let b = g && isTeamFolderV2(g.project);
  let v = _6();
  if (!g) return jsx(Fragment, {});
  if ("loaded" !== h.status) return jsx(ModalRootComponent, {
    manager: i,
    width: "sm",
    children: jsx(vo, {
      children: jsx(nB, {
        children: jsx(LoadingOverlay, {})
      })
    })
  });
  if (A || y || b) return jsx(z, {
    isFileInTeamWithProFeatures: _,
    isFileInOrg: y,
    team: e.team,
    afterFileMove: e.afterFileMove,
    onStylesClick
  });
  let E = "fullscreen" === v.view ? v.nodeId ?? "" : void 0;
  return void 0 !== E ? jsx(bP, {
    team: e.team,
    resource: Bi.TEAM_LIBRARY,
    action: projectPermissionEnum.PUBLISH_COMPONENTS,
    editorType: FFileType.DESIGN,
    onStarterPlanCtaClick: onStylesClick,
    currentPlan: _$$F.Plan.STARTER,
    upsellPlan: _$$F.Plan.PRO,
    onBillingCompleteRedirectInfo: {
      fileKey: g.key,
      nodeId: E
    },
    upsellSource: UpsellModalType.LIBRARY_UPSELL_BADGE
  }) : jsx(Fragment, {});
}
function z(e) {
  let t = useDispatch();
  let i = () => {
    t(hideModal());
  };
  let r = useModalManager({
    onClose: i,
    open: !0
  });
  let s = selectCurrentFile();
  let c = useSelector(e => s ? getRepoByIdAlt(s, e.repos) : null);
  if (!s) return jsx(Fragment, {});
  let u = renderI18nText("upsell.move_file_publish.move_file_to_team_to_publish");
  let p = renderI18nText("upsell.move_file_publish.move_file_to_pro_team_to_publish");
  let f = renderI18nText("upsell.move_file_publish.move_file_to_project_to_publish");
  let I = getI18nString("upsell.move_file_publish.move_to_team_to_publish_library_assets");
  let E = getI18nString("upsell.move_file_publish.move_to_project_to_publish_library_assets");
  let x = p;
  e.isFileInOrg ? x = u : e.isFileInTeamWithProFeatures && (x = f);
  let S = e.isFileInTeamWithProFeatures ? renderI18nText("upsell.move_file_publish.move_to_project") : renderI18nText("upsell.move_file_publish.move_to_team");
  return jsx(TrackingProvider, {
    name: "MoveFilePublishUpsell",
    children: jsx(ModalRootComponent, {
      manager: r,
      width: "md",
      children: jsxs(vo, {
        children: [jsx(Y9, {
          children: jsx(hE, {
            children: e.isFileInTeamWithProFeatures ? E : I
          })
        }), jsx(nB, {
          children: x
        }), jsx(wi, {
          children: jsxs(jk, {
            children: [jsx($z, {
              onClick: i,
              trackingProperties: {
                trackingDescriptor: _$$c.CANCEL
              },
              variant: "secondary",
              children: renderI18nText("upsell.shared.cancel")
            }), jsx(pW, {
              href: "#",
              onClick: () => {
                let {
                  afterFileMove
                } = e;
                _$$h({
                  key: s.key,
                  name: s.name,
                  folder_id: s.folderId,
                  team_id: s.teamId,
                  editor_type: s.editorType,
                  parent_org_id: s.parentOrgId
                }, c, t, {
                  handlesVisualBell: !1,
                  callback: afterFileMove
                });
              },
              children: S
            })]
          })
        })]
      })
    })
  });
}
export const $3 = $$V0;