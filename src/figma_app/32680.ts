import { jsxs, jsx } from "react/jsx-runtime";
import { useDispatch } from "react-redux";
import { s as _$$s } from "../905/403855";
import { U } from "../905/275247";
import { Rs } from "../figma_app/288654";
import { oA } from "../905/723791";
import { Jn } from "../905/17223";
import { s as _$$s2 } from "../cssbuilder/589278";
import { Ih } from "../figma_app/617427";
import { renderI18nText } from "../905/303541";
import { sx } from "../905/941192";
import { Y } from "../905/830372";
import { popModalStack } from "../905/156213";
import { WX } from "../figma_app/482142";
import { E9 } from "../figma_app/297957";
import { c as _$$c } from "../905/370443";
import { fu } from "../figma_app/831799";
import { TeamFileLimitsInfo } from "../figma_app/43951";
import { WW, Wf, h as _$$h, PX } from "../figma_app/345997";
import { registerModal } from "../905/102752";
import { d_ } from "../figma_app/918700";
import { $Y } from "../905/918620";
import { K } from "../905/376298";
function x(e) {
  let t = useDispatch();
  let r = $Y(e.teamId);
  let m = void 0 === e.canEditTeam ? r : e.canEditTeam;
  let y = Rs(TeamFileLimitsInfo({
    teamId: e.teamId
  }), {
    enabled: !!e.teamId
  });
  let I = E9();
  if ("loaded" !== y.status || y.data.team?.stripeCustomerId.status !== "loaded") return null;
  let S = !!oA(y.data.team?.stripeCustomerId);
  let x = [];
  let N = oA(y.data.team?.allProjects)?.filter(({
    trashedAt: e
  }) => !e);
  let C = N?.length ?? 0;
  let w = N?.filter(e => e.isViewOnly).length ?? 0;
  let O = N?.filter(e => e.isInviteOnly).length ?? 0;
  let R = y.data.team?.teamFileCounts?.designFileCount ?? 0;
  let L = y.data.team?.teamFileCounts?.whiteboardFileCount ?? 0;
  let P = parseInt(y.data.team?.teamFileCounts?.slideFileCount ?? "0", 10);
  let D = (e, t, r) => {
    e > t && x.push({
      limitExceededType: r,
      limitExceededCount: e - t
    });
  };
  if (I ? D(oA(y.data.team?.teamFileCounts?.totalFileCount) ?? 0, WW, "global_file_count") : (D(R, WW, "design_file_count"), D(L, WW, "whiteboard_file_count"), D(P, WW, "slides_file_count")), D(C, Wf, "total_project_count"), C <= Wf && (D(w, _$$h, "view_only_project_count"), D(O, PX, "invite_only_project_count")), 0 === x.length) return null;
  let k = m ? renderI18nText("locked_team.card.title") : renderI18nText("locked_team.card.title_viewer");
  let M = m ? S ? renderI18nText("locked_team.card.editor_previously_paid_description") : renderI18nText("locked_team.card.editor_previously_on_trial_description") : renderI18nText("locked_team.card.view_only_description");
  let F = m ? S ? renderI18nText("locked_team.card.editor_previously_paid_cta") : renderI18nText("locked_team.card.editor_previously_on_trial_cta") : null;
  let j = e => {
    switch (e.limitExceededType) {
      case "design_file_count":
        return renderI18nText("locked_team.card.move_figma_design_files", {
          numDesignFiles: e.limitExceededCount
        });
      case "whiteboard_file_count":
        return renderI18nText("locked_team.card.move_figjam_boards", {
          numFigjamFiles: e.limitExceededCount
        });
      case "slides_file_count":
        return renderI18nText("locked_team.card.move_figma_slides_files", {
          numSlidesFiles: e.limitExceededCount
        });
      case "global_file_count":
        return renderI18nText("locked_team.card.move_files", {
          numFiles: e.limitExceededCount
        });
      case "total_project_count":
        return renderI18nText("locked_team.card.move_projects", {
          numProjects: e.limitExceededCount
        });
      case "view_only_project_count":
        return renderI18nText("locked_team.card.change_permissions_from_view_only", {
          numViewOnlyProjects: e.limitExceededCount
        });
      case "invite_only_project_count":
        return renderI18nText("locked_team.card.change_permissions_from_invite_only", {
          numInviteOnlyProjects: e.limitExceededCount
        });
      default:
        throw Error("Not a valid starter plan limit");
    }
  };
  return jsxs(Y, {
    direction: "vertical",
    padding: e.noPaddingOrBorder ? 0 : 20,
    spacing: 24,
    width: e.width,
    cornerRadius: e.noPaddingOrBorder ? void 0 : 8,
    strokeWidth: e.noPaddingOrBorder ? void 0 : 1,
    strokeColor: "default",
    height: "hug-contents",
    children: [jsxs("div", {
      className: _$$s2.flex.justifyBetween.wFull.$,
      children: [jsx("div", {
        className: _$$s2.flex.itemsCenter.justifyCenter.w32.h32.bRadius5.colorBgWarning.$,
        children: jsx(_$$s, {
          className: K
        })
      }), !!e.onClose && jsx(Jn, {
        onClick: e.onClose
      })]
    }), jsx("div", {
      className: _$$s2.font14.fontSemiBold.lh24.$,
      children: k
    }), jsx("div", {
      className: _$$s2.font13.lh24.$,
      children: M
    }), m && jsx("div", {
      className: _$$s2.wFull.bb1.bSolid.$,
      style: sx.add({
        borderColor: "var(--color-bg-secondary)"
      }).$,
      role: "list",
      children: x.map(e => jsxs("div", {
        className: _$$s2.flex.itemsCenter.gap10.wFull.bt1.bSolid.pb12.pt12.fontMedium.$,
        style: sx.add({
          borderColor: "var(--color-bg-secondary)"
        }).$,
        role: "listitem",
        children: [jsx(U, {
          className: _$$s2.minW24.$
        }), jsx("div", {
          className: _$$s2.font11.lh16.$,
          children: j(e)
        })]
      }, e.limitExceededType))
    }), !!F && jsx(Ih, {
      onClick: () => t(WX({
        teamId: e.teamId
      })),
      variant: "primary",
      trackingProperties: {
        teamId: e.teamId,
        trackingDescriptor: S ? _$$c.UPGRADE_TO_PROFESSIONAL : _$$c.REACTIVATE_YOUR_PROFESSIONAL_PLAN
      },
      children: F
    })]
  });
}
export function $$N0(e) {
  return jsx(fu, {
    name: "Locked State Team Overview Card",
    properties: {
      teamId: e.teamId
    },
    children: jsx(x, {
      ...e,
      width: 290,
      fullWidthButton: !0
    })
  });
}
export let $$C1 = registerModal(function (e) {
  let t = useDispatch();
  return jsx(d_, {
    size: 500,
    children: jsx(fu, {
      name: "Locked State Team Overview Modal",
      properties: {
        teamId: e.teamId
      },
      children: jsx(x, {
        ...e,
        width: 452,
        onClose: () => t(popModalStack()),
        noPaddingOrBorder: !0
      })
    })
  });
}, "LockedStateOverviewModal");
export const R = $$N0;
export const t = $$C1;