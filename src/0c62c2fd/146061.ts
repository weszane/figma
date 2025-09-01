import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { useState, useCallback, Fragment as _$$Fragment } from "react";
import { wA, d4 } from "../vendor/514228";
import n from "classnames";
import { Ay } from "../905/612521";
import { Rs } from "../figma_app/288654";
import { oA } from "../905/723791";
import { nR, vd } from "../figma_app/637027";
import { _ as _$$_, S as _$$S } from "../figma_app/490799";
import { P as _$$P } from "../905/347284";
import { B as _$$B } from "../905/714743";
import { t as _$$t, tx } from "../905/303541";
import { f as _$$f } from "../0c62c2fd/277163";
import { Ce, to } from "../905/156213";
import { fu } from "../figma_app/831799";
import { h as _$$h } from "../905/864281";
import { Nr } from "../figma_app/199513";
import { FC } from "../figma_app/212807";
import { AbW } from "../figma_app/43951";
import { Bp } from "../figma_app/349248";
import { b as _$$b } from "../905/165519";
import { bL } from "../figma_app/630077";
import { O as _$$O } from "../905/247093";
import { e0 } from "../905/696396";
import { OJ } from "../905/519092";
import { Uc } from "../4452/915131";
import { aI } from "../figma_app/552876";
import { s as _$$s } from "../905/761565";
import { A as _$$A } from "../6828/555288";
import { A as _$$A2 } from "../6828/7452";
import { A as _$$A3 } from "../5724/663128";
import { A as _$$A4 } from "../svg/254490";
var o = n;
let A = "folder_move--iconContainer--nXjIY file_move--iconContainer--2ExyP";
let O = "folder_move--warningContainer--MXpOB";
export function $$M0(e) {
  let t;
  let r;
  let n = wA();
  let o = _$$s();
  let g = d4(e => e.currentUserOrgId);
  let A = d4(e => null != g ? e.orgById[g] : null);
  let P = Rs(AbW, {
    currentOrgId: g,
    currentTeamId: null,
    folderId: e.folderId
  });
  let D = d4(t => t.folders[e.folderId]);
  let [M, W] = useState(void 0);
  let [$, G] = useState(void 0);
  let V = "loaded" === P.status ? {
    ...P.data.currentUser
  } : null;
  let z = _$$h.useTrackingContext({
    trigger: _$$b.FOLDER_MOVE_MODAL
  });
  let H = {};
  let K = [];
  let Y = FC();
  if (V) {
    let e = [];
    (V.teamRoles ?? []).forEach(t => {
      if (t.team?.orgId === g && !t.team?.deletedAt && !t.pending) {
        if (t.team?.id === D?.team_id) {
          r = t;
          return;
        }
        e.push(t);
        t.team?.workspace?.id ? (H[t.team.workspace?.id] = H[t.team.workspace?.id] ?? [], H[t.team.workspace?.id].push(t)) : t.team && K.push(t);
      }
    });
    let a = V.baseOrgUser?.workspaceUsers;
    t = a?.find(e => e?.isMainWorkspace)?.workspaceId;
  }
  let J = () => {
    n(Ce());
  };
  let q = (e, t) => {
    W(e);
    G(t);
  };
  let X = useCallback(() => {
    if (M && !$) {
      let e = bL(M?.id, M.orgId);
      Ay.redirect(e, "_blank");
    }
  }, [M, $]);
  let Q = useCallback(e => {
    if (!A) return;
    let t = {
      workspaceId: e ?? _$$O,
      onSubmitReturnToPrevView: !1
    };
    n(to({
      type: Uc,
      data: t
    }));
  }, [A, n]);
  let Z = e => jsx(Fragment, {
    children: e.map(e => jsx(U, {
      team: e.team,
      selectedTeamId: M?.id,
      onSelectTeam: q,
      permissionsState: Y
    }, e.id))
  });
  let ee = e => jsx(U, {
    team: e.team,
    selectedTeamId: M?.id,
    isCurrentTeam: !0,
    permissionsState: Y,
    onSelectTeam: q
  }, e.id);
  if (!D) return null;
  let et = Object.keys(H).length > 0;
  let er = M && r && r.team.id === M.id;
  return jsx(fu, {
    name: e0.FILE_MOVE_MODAL,
    properties: z,
    children: jsx(OJ, {
      title: _$$t("file_browser.folder_move.modal_header", {
        folderName: D.name
      }),
      fixedTop: !0,
      minWidth: 288,
      maxWidth: 288,
      onClose: J,
      truncateTitleText: !0,
      children: jsxs("div", {
        className: "folder_move--main--TkW9w file_move--main--fz-As",
        children: [jsx(_$$P, {
          className: "folder_move--teamSectionBody--LACBL file_move--teamSectionBody--jIFZO",
          children: jsx("div", {
            className: "folder_move--teamSection---S02k file_move--teamSection--mI5yE",
            children: et ? function (e, t, r) {
              let a = t?.team?.workspace?.id ?? null;
              let s = [a];
              r && r !== a && e[r] && s.push(r);
              Object.keys(e).filter(e => e !== a && e !== r).sort((t, r) => {
                let a = e[t][0]?.team?.workspace?.name?.toLocaleUpperCase() ?? "";
                let s = e[r][0]?.team?.workspace?.name?.toLocaleUpperCase() ?? "";
                return a < s ? -1 : a > s ? 1 : 0;
              }).forEach(e => {
                s.push(e);
              });
              null !== a && s.push(null);
              return s;
            }(H, r, t).map(e => {
              if (null === e) {
                if (K.length > 0) return jsxs(_$$Fragment, {
                  children: [jsx(B, {
                    headerName: _$$t("sidebar.workspaces.other_teams"),
                    onCreateNewTeamClick: Q,
                    workspaceId: null
                  }), null != r && r.team?.workspace?.id == null && ee(r), Z(K)]
                }, "other_teams_key");
              } else if (H[e]) {
                let t = H[e];
                let i = t ? t[0].team?.workspace ?? null : null;
                return jsxs(_$$Fragment, {
                  children: [jsx(B, {
                    headerName: i?.name ?? "",
                    onCreateNewTeamClick: Q,
                    workspaceId: i?.id ?? null
                  }), null != r && r.team?.workspace?.id === e && ee(r), Z(t)]
                }, e);
              }
            }) : jsxs(Fragment, {
              children: [A && jsx(B, {
                headerName: A.name,
                onCreateNewTeamClick: Q,
                workspaceId: null
              }, "org_teams_header"), null != r && ee(r), Z(K)]
            })
          })
        }), jsxs("div", {
          className: "x78zum5 xdt5ytf xv42yna",
          children: [M && !$ && jsx("div", {
            className: O,
            children: jsxs("div", {
              className: "folder_move--warningBanner--Tnfff",
              children: [jsx("div", {
                className: "folder_move--warningSectionIcon--gOcDL",
                children: jsx(_$$B, {
                  svg: _$$A3
                })
              }), jsxs("div", {
                children: [tx("file_browser.folder_move.move_project_no_edit_access_warning"), jsxs("div", {
                  className: "folder_move--warningCTALink--f74xo",
                  onClick: X,
                  role: "link",
                  tabIndex: 0,
                  children: [tx("file_browser.folder_move.view_team"), jsx("div", {
                    className: "folder_move--arrowRightIcon--xIk7X",
                    children: jsx(_$$B, {
                      svg: _$$A
                    })
                  })]
                })]
              })]
            })
          }), (o || aI()) && !A && M && $ && "loaded" === P.status && P.data?.project?.hasPublishedSite.status === "loaded" && oA(P.data?.project?.hasPublishedSite) && jsx("div", {
            className: O,
            children: jsx(_$$_, {
              dataTestId: "project-move-site-unpublish-banner",
              color: _$$S.ERROR,
              text: _$$t("file_browser.file_move.sites_unpublished_on_project_move_warning")
            })
          }), jsxs("div", {
            className: "folder_move--footer--jcEsZ file_move--footer--pBClJ",
            children: [jsx(nR, {
              onClick: J,
              children: tx("modal.cancel")
            }), jsx(vd, {
              onClick: () => {
                null != M && D ? n(Nr({
                  folder: Bp(D),
                  team: M,
                  onSuccess: J
                })) : J();
              },
              disabled: void 0 === M || !$ || !!er,
              children: tx("file_browser.folder_move.move_project")
            })]
          })]
        })]
      })
    })
  });
}
function B(e) {
  let [t, r] = useState(!1);
  return jsxs("div", {
    className: "folder_move--teamsHeaderRow--qZfbl text--fontPos12--YsUAh text--_fontBase--QdLsd",
    onMouseMove: () => r(!0),
    onMouseLeave: () => r(!1),
    children: [jsx("div", {
      children: e.headerName
    }), t && jsx(_$$f, {
      data_tooltip: _$$t("file_browser.inline_team_creation.button_text"),
      data_onboarding_key: "new-team-button",
      innerText: _$$t("file_browser.inline_team_creation.button_text"),
      onClick: () => {
        e.onCreateNewTeamClick(e.workspaceId);
      }
    })]
  });
}
function U(e) {
  let {
    team
  } = e;
  let r = team?.canEdit ?? !1;
  if (null == team) return jsx(Fragment, {});
  let s = o()("folder_move--teamTitle--PwZow file_move--teamTitle--1IL8S text--fontPos12--YsUAh text--_fontBase--QdLsd", e.isCurrentTeam && !e.selectedTeamId || e.selectedTeamId === e.team?.id ? "folder_move--selectedTeamTitle---C1u4" : "");
  return jsxs("div", {
    className: s,
    onClick: () => {
      e.onSelectTeam && e.onSelectTeam(team, r);
    },
    role: "button",
    tabIndex: 0,
    children: [jsx("div", {
      className: A,
      children: jsx(_$$B, {
        svg: e.isCurrentTeam ? _$$A2 : _$$A4
      })
    }), jsx("div", {
      className: "folder_move--teamTitleRow--6MpKM file_move--teamTitleRow--hMU87",
      children: jsx("div", {
        className: "folder_move--teamName--fvmi0 file_move--teamName--Jmsoa",
        children: team.name
      })
    }), e.selectedTeamId === team.id && !r && jsx("div", {
      className: A,
      children: jsx(_$$B, {
        svg: _$$A3
      })
    })]
  });
}
export const FolderMoveModal = $$M0;