import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { useMemo } from "react";
import { wA, d4 } from "../vendor/514228";
import { lQ } from "../905/934246";
import { hS } from "../905/437088";
import { bL } from "../905/38914";
import { vo, nB, Y9, hE, wi, jk } from "../figma_app/272243";
import { resourceUtils } from "../905/989992";
import { Rs } from "../figma_app/288654";
import { qc } from "../figma_app/858013";
import { $z } from "../figma_app/617427";
import { pW } from "../905/160095";
import { tx, t as _$$t } from "../905/303541";
import { R as _$$R } from "../905/304671";
import { h as _$$h } from "../905/142086";
import { to, Ce } from "../905/156213";
import { c as _$$c } from "../905/370443";
import { fu } from "../figma_app/831799";
import { up } from "../905/760074";
import { F as _$$F } from "../905/224";
import { DQ, Pw } from "../figma_app/121751";
import { MF, A5 } from "../figma_app/391338";
import { jd } from "../figma_app/528509";
import { q5 } from "../figma_app/516028";
import { FC } from "../figma_app/212807";
import { _6 } from "../figma_app/386952";
import { iZ } from "../905/372672";
import { FPlanNameType, FFileType, FProductAccessType, FPlanAccessType } from "../figma_app/191312";
import { pTp, x8f } from "../figma_app/43951";
import { w5 } from "../figma_app/345997";
import { canEditTeam } from "../figma_app/642025";
import { b as _$$b } from "../905/165519";
import { Bi } from "../905/652992";
import { pE } from "../figma_app/630077";
import { Ju } from "../905/102752";
import { RR } from "../905/514666";
import { bP } from "../905/739964";
import { dD } from "../905/519113";
export let $$V0 = Ju(function (e) {
  let t = q5();
  let {
    team,
    afterFileMove
  } = e;
  let s = wA();
  let o = FC();
  let l = iZ();
  let d = !!team && canEditTeam(team?.id, o);
  let p = w5(team);
  let m = Rs(pTp(team ? {
    teamId: team.id
  } : null));
  let h = resourceUtils.useTransform(m, e => e?.team?.canEdit ?? !1);
  let g = resourceUtils.useTransform(m, e => {
    let t = e?.team?.plan.tier;
    return !!t && [FPlanNameType.STUDENT, FPlanNameType.PRO].includes(t);
  });
  let f = MF({
    oldValue: resourceUtils.useMemoizedLoaded(d),
    newValue: h,
    label: A5.UpsellModal.canEditTeam,
    enableFullRead: DQ(Pw.GROUP_7),
    contextArgs: {
      teamId: team?.id,
      userId: l?.id
    }
  });
  let _ = MF({
    oldValue: resourceUtils.useMemoizedLoaded(p),
    newValue: g,
    label: A5.UpsellModal.isFileInTeamWithProFeatures,
    enableFullRead: DQ(Pw.GROUP_7),
    contextArgs: {
      teamId: team?.id,
      userId: l?.id
    }
  });
  let y = _6();
  let b = () => {
    s(to({
      type: dD,
      data: {
        entrypoint: RR.PUBLISH_UPSELL_MODAL
      }
    }));
  };
  return !t || team && "loaded" !== f.status && "loaded" !== _.status ? jsx(Fragment, {}) : team && f.data && !_.data ? jsx(bP, {
    team,
    resource: Bi.TEAM_LIBRARY,
    action: pE.PUBLISH_COMPONENTS,
    editorType: FFileType.DESIGN,
    onStarterPlanCtaClick: b,
    currentPlan: _$$F.Plan.STARTER,
    upsellPlan: _$$F.Plan.PRO,
    onBillingCompleteRedirectInfo: {
      fileKey: t.key,
      nodeId: "fullscreen" === y.view && y.nodeId || ""
    },
    upsellSource: _$$b.LIBRARY_UPSELL_BADGE
  }) : jsx(G, {
    team,
    afterFileMove,
    onStylesClick: b
  });
}, "publish-components-upsell");
function G(e) {
  let t = _$$R();
  let i = hS({
    onClose: lQ,
    open: !0,
    preventUserClose: !0
  });
  let c = d4(e => e.currentUserOrgId);
  let {
    onStylesClick
  } = e;
  let h = Rs(x8f, {});
  let g = q5();
  let _ = w5(e.team);
  let A = useMemo(() => h.transform(e => e.currentUser.teamEditRoles.some(e => {
    let i = e.team;
    let n = i?.currentPlanUser;
    let r = t ? n?.seatTypeLicenseTypes?.includes(FProductAccessType.DESIGN) : n?.designPaidStatus !== FPlanAccessType.RESTRICTED;
    return i && [FPlanNameType.PRO, FPlanNameType.STUDENT].includes(i.plan.tier) && !i.deletedAt && r;
  })).unwrapOr(!1), [h, t]);
  let y = !!c;
  let b = g && jd(g.project);
  let v = _6();
  if (!g) return jsx(Fragment, {});
  if ("loaded" !== h.status) return jsx(bL, {
    manager: i,
    width: "sm",
    children: jsx(vo, {
      children: jsx(nB, {
        children: jsx(qc, {})
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
    action: pE.PUBLISH_COMPONENTS,
    editorType: FFileType.DESIGN,
    onStarterPlanCtaClick: onStylesClick,
    currentPlan: _$$F.Plan.STARTER,
    upsellPlan: _$$F.Plan.PRO,
    onBillingCompleteRedirectInfo: {
      fileKey: g.key,
      nodeId: E
    },
    upsellSource: _$$b.LIBRARY_UPSELL_BADGE
  }) : jsx(Fragment, {});
}
function z(e) {
  let t = wA();
  let i = () => {
    t(Ce());
  };
  let r = hS({
    onClose: i,
    open: !0
  });
  let s = q5();
  let c = d4(e => s ? up(s, e.repos) : null);
  if (!s) return jsx(Fragment, {});
  let u = tx("upsell.move_file_publish.move_file_to_team_to_publish");
  let p = tx("upsell.move_file_publish.move_file_to_pro_team_to_publish");
  let f = tx("upsell.move_file_publish.move_file_to_project_to_publish");
  let I = _$$t("upsell.move_file_publish.move_to_team_to_publish_library_assets");
  let E = _$$t("upsell.move_file_publish.move_to_project_to_publish_library_assets");
  let x = p;
  e.isFileInOrg ? x = u : e.isFileInTeamWithProFeatures && (x = f);
  let S = e.isFileInTeamWithProFeatures ? tx("upsell.move_file_publish.move_to_project") : tx("upsell.move_file_publish.move_to_team");
  return jsx(fu, {
    name: "MoveFilePublishUpsell",
    children: jsx(bL, {
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
              children: tx("upsell.shared.cancel")
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