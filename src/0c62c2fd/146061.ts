import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { useState, useCallback, Fragment as _$$Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import n from "classnames";
import { customHistory } from "../905/612521";
import { useSubscription } from "../figma_app/288654";
import { getResourceDataOrFallback } from "../905/723791";
import { ButtonSecondary, ButtonBasePrimaryTracked } from "../figma_app/637027";
import { _ as _$$_, S as _$$S } from "../figma_app/490799";
import { P as _$$P } from "../905/347284";
import { SvgComponent } from "../905/714743";
import { getI18nString, renderI18nText } from "../905/303541";
import { f as _$$f } from "../0c62c2fd/277163";
import { hideModal, showModalHandler } from "../905/156213";
import { TrackingProvider } from "../figma_app/831799";
import { h as _$$h } from "../905/864281";
import { Nr } from "../figma_app/199513";
import { selectPermissionsState } from "../figma_app/212807";
import { FolderMoveModalView } from "../figma_app/43951";
import { mapProjectProperties } from "../figma_app/349248";
import { UpsellModalType } from "../905/165519";
import { getTeamUrl } from "../figma_app/630077";
import { UNASSIGNED } from "../905/247093";
import { e0 } from "../905/696396";
import { HeaderModal } from "../905/519092";
import { Uc } from "../4452/915131";
import { isFigmakeSitesEnabled } from "../figma_app/552876";
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
  let n = useDispatch();
  let o = _$$s();
  let g = useSelector(e => e.currentUserOrgId);
  let A = useSelector(e => null != g ? e.orgById[g] : null);
  let P = useSubscription(FolderMoveModalView, {
    currentOrgId: g,
    currentTeamId: null,
    folderId: e.folderId
  });
  let D = useSelector(t => t.folders[e.folderId]);
  let [M, W] = useState(void 0);
  let [$, G] = useState(void 0);
  let V = "loaded" === P.status ? {
    ...P.data.currentUser
  } : null;
  let z = _$$h.useTrackingContext({
    trigger: UpsellModalType.FOLDER_MOVE_MODAL
  });
  let H = {};
  let K = [];
  let Y = selectPermissionsState();
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
    n(hideModal());
  };
  let q = (e, t) => {
    W(e);
    G(t);
  };
  let X = useCallback(() => {
    if (M && !$) {
      let e = getTeamUrl(M?.id, M.orgId);
      customHistory.redirect(e, "_blank");
    }
  }, [M, $]);
  let Q = useCallback(e => {
    if (!A) return;
    let t = {
      workspaceId: e ?? UNASSIGNED,
      onSubmitReturnToPrevView: !1
    };
    n(showModalHandler({
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
  return jsx(TrackingProvider, {
    name: e0.FILE_MOVE_MODAL,
    properties: z,
    children: jsx(HeaderModal, {
      title: getI18nString("file_browser.folder_move.modal_header", {
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
                    headerName: getI18nString("sidebar.workspaces.other_teams"),
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
                children: jsx(SvgComponent, {
                  svg: _$$A3
                })
              }), jsxs("div", {
                children: [renderI18nText("file_browser.folder_move.move_project_no_edit_access_warning"), jsxs("div", {
                  className: "folder_move--warningCTALink--f74xo",
                  onClick: X,
                  role: "link",
                  tabIndex: 0,
                  children: [renderI18nText("file_browser.folder_move.view_team"), jsx("div", {
                    className: "folder_move--arrowRightIcon--xIk7X",
                    children: jsx(SvgComponent, {
                      svg: _$$A
                    })
                  })]
                })]
              })]
            })
          }), (o || isFigmakeSitesEnabled()) && !A && M && $ && "loaded" === P.status && P.data?.project?.hasPublishedSite.status === "loaded" && getResourceDataOrFallback(P.data?.project?.hasPublishedSite) && jsx("div", {
            className: O,
            children: jsx(_$$_, {
              dataTestId: "project-move-site-unpublish-banner",
              color: _$$S.ERROR,
              text: getI18nString("file_browser.file_move.sites_unpublished_on_project_move_warning")
            })
          }), jsxs("div", {
            className: "folder_move--footer--jcEsZ file_move--footer--pBClJ",
            children: [jsx(ButtonSecondary, {
              onClick: J,
              children: renderI18nText("modal.cancel")
            }), jsx(ButtonBasePrimaryTracked, {
              onClick: () => {
                null != M && D ? n(Nr({
                  folder: mapProjectProperties(D),
                  team: M,
                  onSuccess: J
                })) : J();
              },
              disabled: void 0 === M || !$ || !!er,
              children: renderI18nText("file_browser.folder_move.move_project")
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
      data_tooltip: getI18nString("file_browser.inline_team_creation.button_text"),
      data_onboarding_key: "new-team-button",
      innerText: getI18nString("file_browser.inline_team_creation.button_text"),
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
      children: jsx(SvgComponent, {
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
      children: jsx(SvgComponent, {
        svg: _$$A3
      })
    })]
  });
}
export const FolderMoveModal = $$M0;