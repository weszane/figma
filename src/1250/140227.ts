import { jsx, jsxs } from "react/jsx-runtime";
import { useDispatch, useSelector } from "react-redux";
import { useSubscription } from "../figma_app/288654";
import { getResourceDataOrFallback } from "../905/723791";
import { linkWithTracking, ButtonWhiteTracked } from "../figma_app/637027";
import { SvgComponent } from "../905/714743";
import { renderI18nText } from "../905/303541";
import { popModalStack } from "../905/156213";
import { startProUpgradeFlowThunk } from "../figma_app/482142";
import { useStarterGlobalFileLimitsExperiment } from "../figma_app/297957";
import { UpgradeAction } from "../905/370443";
import { TrackingProvider } from "../figma_app/831799";
import { getSelectedView } from "../figma_app/386952";
import { TeamFileCountsByTeamId } from "../figma_app/43951";
import { STANDARD_LIMIT, PRIMARY_LIMIT } from "../figma_app/345997";
import { registerModal } from "../905/102752";
import { ModalContainer } from "../figma_app/918700";
import { v0 } from "../figma_app/639088";
import { A as _$$A } from "../svg/821527";
export let $$w0 = registerModal(function (e) {
  let {
    teamId
  } = e;
  let n = useDispatch();
  let b = getSelectedView();
  let w = useSelector(e => e.folders);
  let T = useSubscription(TeamFileCountsByTeamId, {
    teamId
  });
  let j = useStarterGlobalFileLimitsExperiment();
  let k = getResourceDataOrFallback(T.data?.team?.teamFileCounts?.totalFileCount) ?? 0;
  let E = T.data?.team?.teamFileCounts?.designFileCount ?? 0;
  let C = T.data?.team?.teamFileCounts?.whiteboardFileCount ?? 0;
  let I = useSelector(e => e.teams[teamId]);
  let A = e => {
    e.preventDefault();
    n(popModalStack());
  };
  let S = E > STANDARD_LIMIT && !j;
  let N = C > STANDARD_LIMIT && !j;
  let O = k > STANDARD_LIMIT && j;
  let R = Object.keys(w).filter(e => w[e]?.is_view_only).map(e => w[e]);
  let M = Object.keys(w).filter(e => w[e]?.is_invite_only).map(e => w[e]);
  return jsx(TrackingProvider, {
    name: "LockedTeamUsageModal",
    properties: {
      teamId
    },
    children: jsxs(ModalContainer, {
      className: "locked_team_usage_modal--modal--hgYFc",
      size: "medium",
      children: [jsx("div", {
        className: "locked_team_usage_modal--modalBar--wjRk6",
        children: jsx(SvgComponent, {
          className: "locked_team_usage_modal--modalCloseX--aPcCQ",
          svg: _$$A,
          onClick: A
        })
      }), jsx("h3", {
        className: "locked_team_usage_modal--headerText--5KMOz",
        children: renderI18nText("payments_modal.to_meet_the_limits_for_your_starter_plan")
      }), jsxs("ul", {
        children: [O && jsx("li", {
          children: renderI18nText("payments_modal.move_figma_files_to_drafts", {
            numFigmaFiles: k - STANDARD_LIMIT
          })
        }), S && jsx("li", {
          children: renderI18nText("payments_modal.move_figma_files_to_drafts", {
            numFigmaFiles: E - STANDARD_LIMIT
          })
        }), N && jsx("li", {
          children: renderI18nText("payments_modal.move_figjam_files_to_drafts", {
            numFigJamFiles: C - STANDARD_LIMIT
          })
        }), jsx(function () {
          return !I?.projects || I.projects <= PRIMARY_LIMIT ? null : jsx("li", {
            children: renderI18nText("payments_modal.remove_projects", {
              numProjects: I.projects - PRIMARY_LIMIT
            })
          });
        }, {}), R.length > 0 && jsx("li", {
          children: renderI18nText("payments_modal.remove_view_only_permissions_from_all_projects")
        }), M.length > 0 && jsx("li", {
          children: renderI18nText("payments_modal.remove_invite_only_permissions_from_all_projects")
        })]
      }), jsx("p", {
        children: renderI18nText("payments_modal.if_you_would_rather_keep_the_current_limits", {
          upgradeToProfessional: jsx(linkWithTracking, {
            onClick: e => {
              e.preventDefault();
              n(popModalStack());
              n(startProUpgradeFlowThunk({
                teamId,
                selectedView: b
              }));
            },
            trackingProperties: {
              trackingDescriptor: UpgradeAction.UPGRADE_TO_PROFESSIONAL
            },
            trusted: !0,
            children: renderI18nText("payments_modal.upgrade_to_professional")
          })
        })
      }), jsx("div", {
        className: `${v0} locked_team_usage_modal--buttonRow--y7F3c`,
        children: jsx(ButtonWhiteTracked, {
          onClick: A,
          trackingProperties: {
            teamId
          },
          children: renderI18nText("payments_modal.okay")
        })
      })]
    })
  });
}, "LockedTeamUsageModal");
export const v = $$w0;