import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { k as _$$k } from "../905/443820";
import { getFeatureFlags } from "../905/601108";
import { useSubscription } from "../figma_app/288654";
import { ModalCloseButton } from "../905/17223";
import { ButtonBasePrimary } from "../figma_app/637027";
import { renderI18nText, getI18nString } from "../905/303541";
import { P as _$$P } from "../905/192768";
import { showModalHandler, popModalStack, hideSpecificModal } from "../905/156213";
import { yH } from "../figma_app/240735";
import { TrackingProvider } from "../figma_app/831799";
import { FAccessLevelType, FPaymentHealthStatusType } from "../figma_app/191312";
import { TeamById } from "../figma_app/43951";
import { getPermissionsState } from "../figma_app/642025";
import { registerModal } from "../905/102752";
import { hK } from "../figma_app/211706";
import { Dd } from "../905/519092";
import { ModalContainer } from "../figma_app/918700";
import { Do, v0 } from "../figma_app/639088";
let x = (e, t, i) => e ? t === FAccessLevelType.PUBLIC ? renderI18nText("file_browser.team.you_will_lose_access_to_open_team_warning", {
  teamName: i
}) : renderI18nText("file_browser.team.you_will_lose_access_to_close_secret_team_warning", {
  teamName: i
}) : jsxs(Fragment, {
  children: [getFeatureFlags().ext_figma_apps ? renderI18nText("file_browser.team.permanently_lose_all_access_to_team_warning_v2") : renderI18nText("file_browser.team.permanently_lose_all_access_to_team_warning"), jsx(hK, {
    height: 16
  }), renderI18nText("file_browser.team.move_files_out_of_team")]
});
let $$S0 = registerModal(function (e) {
  let t = useSelector(e => getPermissionsState(e));
  let i = useDispatch();
  let o = t.teams[e.teamId];
  let y = t.user?.id || "";
  let b = useSubscription(TeamById, {
    teamId: e.teamId
  });
  let S = useMemo(() => b.transform(({
    team: e
  }) => e), [b]);
  if ("loaded" !== S.status) return jsx(ModalContainer, {
    size: "small",
    popStack: !0,
    children: jsx("div", {
      className: Do,
      children: jsx(_$$k, {})
    })
  });
  let w = S.data;
  let C = () => {
    i(yH({
      team: o,
      userInitiated: !0
    }));
    e.onViewerLeaveTeam && e.onViewerLeaveTeam(e.teamId);
  };
  let T = () => {
    i(showModalHandler({
      type: _$$P(),
      data: {
        teamId: e.teamId
      }
    }));
  };
  let k = () => {
    i(popModalStack());
  };
  let R = t.roles.byTeamId[e.teamId];
  let N = Object.keys(R).map(e => R[e]).filter(e => !e.pending);
  let P = N.length > 1;
  if (w?.isOwner && P) return jsx(TrackingProvider, {
    name: "Team Block Owner Leave Modal",
    properties: {
      userId: y,
      teamId: e.teamId
    },
    children: jsxs(ModalContainer, {
      size: "small",
      title: getI18nString("file_browser.team.team_leave_warning_title_hold_up"),
      popStack: !0,
      children: [jsx(ModalCloseButton, {
        dispatch: i
      }), renderI18nText("file_browser.team.you_are_current_team_owner_assign_new_owner_before_leaving", {
        teamName: w?.name
      }), jsx("div", {
        className: v0,
        children: jsx(ButtonBasePrimary, {
          onClick: k,
          children: renderI18nText("general.ok")
        })
      })]
    })
  });
  if (w?.orgId && w?.orgAccess === FAccessLevelType.SECRET && !(() => {
    for (let i in t.folders) {
      let n = t.folders[i];
      if (n?.team_id === e.teamId && n.path) return !1;
    }
    return !0;
  })() && !P) return jsx(TrackingProvider, {
    name: "Team Block Last Member Leave",
    properties: {
      userId: y,
      teamId: e.teamId
    },
    children: jsxs(ModalContainer, {
      size: "small",
      popStack: !0,
      children: [jsx(ModalCloseButton, {
        dispatch: i
      }), renderI18nText("file_browser.team.cannot_leave_secret_team_as_last_team_member"), jsx("br", {}), jsx("br", {}), renderI18nText("file_browser.team.change_access_level_or_move_or_delete_resources_to_leave_team"), jsx("div", {
        className: v0,
        children: jsx(ButtonBasePrimary, {
          onClick: k,
          children: renderI18nText("general.ok")
        })
      })]
    })
  });
  {
    let t = w?.orgId == null && 1 === N.length && (w?.subscription != null && w?.subscription !== FPaymentHealthStatusType.INCOMPLETE || w?.studentTeamAt != null);
    return jsx(TrackingProvider, {
      name: "Team Confirm Leave Modal",
      properties: {
        userId: y,
        teamId: e.teamId
      },
      children: jsx(Dd, {
        title: getI18nString("file_browser.team.team_leave_confirmation_title", {
          teamName: w?.name ?? ""
        }),
        destructive: !0,
        onConfirm: () => {
          i(hideSpecificModal({
            type: "TEAM_SETTINGS_MODAL"
          }));
          t ? T() : C();
        },
        confirmText: getI18nString("file_browser.team.leave_confirm"),
        children: x(w?.orgId ?? null, w?.orgAccess ?? null, w?.name ?? "")
      })
    });
  }
}, "TeamConfirmLeaveModal");
export const p = $$S0;