import { jsx, jsxs } from "react/jsx-runtime";
import { wA, d4 } from "../vendor/514228";
import { Rs } from "../figma_app/288654";
import { oA } from "../905/723791";
import { Us, M7 } from "../figma_app/637027";
import { B } from "../905/714743";
import { tx } from "../905/303541";
import { Lo } from "../905/156213";
import { WX } from "../figma_app/482142";
import { E9 } from "../figma_app/297957";
import { c as _$$c } from "../905/370443";
import { fu } from "../figma_app/831799";
import { _6 } from "../figma_app/386952";
import { bel } from "../figma_app/43951";
import { WW, Wf } from "../figma_app/345997";
import { Ju } from "../905/102752";
import { d_ } from "../figma_app/918700";
import { v0 } from "../figma_app/639088";
import { A as _$$A } from "../svg/821527";
export let $$w0 = Ju(function (e) {
  let {
    teamId
  } = e;
  let n = wA();
  let b = _6();
  let w = d4(e => e.folders);
  let T = Rs(bel, {
    teamId
  });
  let j = E9();
  let k = oA(T.data?.team?.teamFileCounts?.totalFileCount) ?? 0;
  let E = T.data?.team?.teamFileCounts?.designFileCount ?? 0;
  let C = T.data?.team?.teamFileCounts?.whiteboardFileCount ?? 0;
  let I = d4(e => e.teams[teamId]);
  let A = e => {
    e.preventDefault();
    n(Lo());
  };
  let S = E > WW && !j;
  let N = C > WW && !j;
  let O = k > WW && j;
  let R = Object.keys(w).filter(e => w[e]?.is_view_only).map(e => w[e]);
  let M = Object.keys(w).filter(e => w[e]?.is_invite_only).map(e => w[e]);
  return jsx(fu, {
    name: "LockedTeamUsageModal",
    properties: {
      teamId
    },
    children: jsxs(d_, {
      className: "locked_team_usage_modal--modal--hgYFc",
      size: "medium",
      children: [jsx("div", {
        className: "locked_team_usage_modal--modalBar--wjRk6",
        children: jsx(B, {
          className: "locked_team_usage_modal--modalCloseX--aPcCQ",
          svg: _$$A,
          onClick: A
        })
      }), jsx("h3", {
        className: "locked_team_usage_modal--headerText--5KMOz",
        children: tx("payments_modal.to_meet_the_limits_for_your_starter_plan")
      }), jsxs("ul", {
        children: [O && jsx("li", {
          children: tx("payments_modal.move_figma_files_to_drafts", {
            numFigmaFiles: k - WW
          })
        }), S && jsx("li", {
          children: tx("payments_modal.move_figma_files_to_drafts", {
            numFigmaFiles: E - WW
          })
        }), N && jsx("li", {
          children: tx("payments_modal.move_figjam_files_to_drafts", {
            numFigJamFiles: C - WW
          })
        }), jsx(function () {
          return !I?.projects || I.projects <= Wf ? null : jsx("li", {
            children: tx("payments_modal.remove_projects", {
              numProjects: I.projects - Wf
            })
          });
        }, {}), R.length > 0 && jsx("li", {
          children: tx("payments_modal.remove_view_only_permissions_from_all_projects")
        }), M.length > 0 && jsx("li", {
          children: tx("payments_modal.remove_invite_only_permissions_from_all_projects")
        })]
      }), jsx("p", {
        children: tx("payments_modal.if_you_would_rather_keep_the_current_limits", {
          upgradeToProfessional: jsx(Us, {
            onClick: e => {
              e.preventDefault();
              n(Lo());
              n(WX({
                teamId,
                selectedView: b
              }));
            },
            trackingProperties: {
              trackingDescriptor: _$$c.UPGRADE_TO_PROFESSIONAL
            },
            trusted: !0,
            children: tx("payments_modal.upgrade_to_professional")
          })
        })
      }), jsx("div", {
        className: `${v0} locked_team_usage_modal--buttonRow--y7F3c`,
        children: jsx(M7, {
          onClick: A,
          trackingProperties: {
            teamId
          },
          children: tx("payments_modal.okay")
        })
      })]
    })
  });
}, "LockedTeamUsageModal");
export const v = $$w0;