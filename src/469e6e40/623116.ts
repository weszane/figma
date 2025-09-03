import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useCallback, useMemo, useEffect, useRef } from "react";
import { wA, d4 } from "../vendor/514228";
import { h as _$$h } from "../905/207101";
import { r as _$$r } from "../905/520829";
import { xj, ok } from "../figma_app/851625";
import { J as _$$J } from "../905/931050";
import { oA, Xm, gB, e1 as _$$e } from "../905/723791";
import { Eh } from "../figma_app/617654";
import { Rw } from "../figma_app/475472";
import { Kq, ig, xZ } from "../figma_app/713624";
import { Ki, _q } from "../figma_app/328188";
import { lQ } from "../905/934246";
import { $n } from "../905/521428";
import { e as _$$e2 } from "../905/149844";
import { A as _$$A } from "../905/891805";
import { v as _$$v } from "../469e6e40/843735";
import { getFeatureFlags } from "../905/601108";
import { parsePxInt } from "../figma_app/783094";
import { rr } from "../figma_app/778880";
import { XHR } from "../905/910117";
import { HL, IU, uw, Vq, bv } from "../figma_app/421401";
import { nR, vd, tB } from "../figma_app/637027";
import { Wi, JR } from "../figma_app/162641";
import { y2 } from "../figma_app/563413";
import { B as _$$B } from "../905/714743";
import { s as _$$s } from "../cssbuilder/589278";
import { Me, $z } from "../figma_app/617427";
import { tx as _$$tx, t as _$$t } from "../905/303541";
import { sx } from "../905/941192";
import { F as _$$F } from "../905/302958";
import { zX } from "../905/576487";
import { Y as _$$Y, M as _$$M } from "../905/830372";
import { E as _$$E } from "../905/984674";
import { p as _$$p } from "../905/597320";
import { q as _$$q } from "../905/749058";
import { md } from "../figma_app/27355";
import { kd, Pc, Jb, E7 } from "../figma_app/425283";
import { c as _$$c } from "../905/370443";
import { E as _$$E2 } from "../905/453826";
import { e as _$$e3 } from "../905/621515";
import { r1 } from "../figma_app/545877";
import { zl } from "../figma_app/641749";
import { rn } from "../figma_app/903573";
import { N as _$$N } from "../figma_app/268271";
import { R as _$$R } from "../905/298004";
import { rq } from "../905/425180";
import { Ql8, YHe } from "../figma_app/6204";
import { throwTypeError } from "../figma_app/465776";
import { Rs } from "../figma_app/288654";
import { A as _$$A2 } from "../905/956262";
import { dq } from "../905/845253";
import { FOrganizationRoleType, FAccessLevelType, FPermissionLevelType } from "../figma_app/191312";
import { LPq, z$o, kC9 } from "../figma_app/43951";
import { U as _$$U } from "../905/455766";
import { b as _$$b } from "../905/168239";
import { R4, uU, gx, G5, b4 } from "../figma_app/481749";
import { y as _$$y } from "../469e6e40/261450";
import { J as _$$J2 } from "../469e6e40/855786";
import { km } from "../469e6e40/519291";
import { W as _$$W } from "../469e6e40/695836";
import { m as _$$m } from "../469e6e40/248185";
import { K as _$$K } from "../905/628118";
import { Lo, to as _$$to, Ce } from "../905/156213";
import { fu, jm } from "../figma_app/831799";
import { m as _$$m2 } from "../figma_app/369596";
import { O as _$$O } from "../figma_app/748328";
import { NJ } from "../figma_app/518077";
import { e$ as _$$e$ } from "../figma_app/12796";
import { O as _$$O2 } from "../figma_app/809387";
import { J7, SN } from "../figma_app/650409";
import { Fb } from "../figma_app/630077";
import { Ib } from "../905/129884";
import { V0, m2 } from "../figma_app/858344";
import { O as _$$O3 } from "../905/247093";
import { S as _$$S } from "../4452/747039";
import { CH, rE } from "../figma_app/805373";
import { r as _$$r2 } from "../469e6e40/505264";
import { p as _$$p2 } from "../figma_app/353099";
import { debounce } from "../905/915765";
import { S as _$$S2 } from "../905/274480";
import { J as _$$J3 } from "../905/270045";
import { $ as _$$$ } from "../905/355181";
import { xM, c5, ZT, lH } from "../figma_app/330108";
import { Ju } from "../905/102752";
import { OJ } from "../905/519092";
import { Cj } from "../905/270084";
import { Uc } from "../4452/915131";
import { gO, YP } from "../figma_app/88768";
import { getPermissionsState, canViewTeam } from "../figma_app/642025";
import { px, j_ } from "../figma_app/465071";
import { e6 as _$$e4 } from "../905/557142";
import { p as _$$p3 } from "../905/195198";
import { Lg, Lq } from "../figma_app/392626";
import { dm } from "../figma_app/976345";
import { h as _$$h2 } from "../905/857431";
import { sf } from "../905/929976";
import { lT } from "../figma_app/494261";
import { WC } from "../figma_app/240735";
import { A$ } from "../905/548208";
import { $ as _$$$2 } from "../905/442144";
import { H as _$$H } from "../905/154301";
import { dW } from "../4452/331328";
import { V as _$$V } from "../figma_app/312987";
import { n as _$$n } from "../4452/511872";
import { am } from "../4452/575555";
import { _6 } from "../figma_app/386952";
import { noop } from "../905/834956";
import { hP, cE, $u, ld } from "../figma_app/527041";
import { A as _$$A3 } from "../6828/493300";
import t_ from "../vendor/239910";
import { sx as _$$sx } from "../905/449184";
import { EK } from "../4452/90195";
import { td as _$$td } from "../figma_app/930338";
import { qc } from "../figma_app/858013";
import { nl, Pf } from "../905/590952";
import { U as _$$U2 } from "../905/566881";
import { F as _$$F2 } from "../7021/270993";
import { Ef } from "../905/81982";
import { d as _$$d } from "../905/44199";
import { Rs as _$$Rs } from "../figma_app/761870";
import { P as _$$P } from "../905/392438";
import { YEj } from "../figma_app/27776";
import { A as _$$A4 } from "../svg/619883";
import { R as _$$R2 } from "../905/192963";
let X = "seen_org_admin_teams_onboarding";
let Q = r1(X);
let Z = rn("org_admin_teams_onboarding", _$$R(Ql8));
function ee(e) {
  let t = md(Q);
  let {
    isShowing,
    complete,
    show,
    uniqueId
  } = _$$e3({
    overlay: Ql8,
    priority: _$$N.DEFAULT_MODAL
  }, [t]);
  let o = zl(Z);
  _$$h(() => {
    "reset" === o.currentState ? show() : show({
      canShow: e => !e
    });
  });
  _$$E2(uniqueId, "Reset Onboarding", () => show());
  return jsx(rq, {
    isShowing,
    trackingContextName: `${kd} Org Access`,
    targetKey: "teams_table_onboarding_key",
    userFlagOnShow: X,
    onClose: complete,
    primaryCta: {
      label: _$$tx("onboarding_pointers.got_it"),
      type: "button",
      onClick: complete,
      ctaTrackingDescriptor: _$$c.GOT_IT
    },
    description: _$$tx("onboarding_pointers.teams_access_onboarding")
  });
}
let eo = "seen_workspace_admin_onboarding";
let ed = r1(eo);
var ec = (e => (e.AddTeamsToWorkspace = "AddTeamsToWorkspace", e.CheckUnassignedTeams = "CheckUnassignedTeams", e))(ec || {});
function e_() {
  let e = dq();
  let t = Rs(LPq({
    orgId: e
  }));
  let a = md(ed);
  let {
    show,
    isShowing,
    complete
  } = _$$e3({
    overlay: YHe,
    priority: _$$N.DEFAULT_MODAL
  }, [a, t]);
  _$$h(() => {
    show({
      canShow: (e, t) => !rr && !e && !!t.currentUser?.baseOrgUser?.workspaceUsers?.some(e => e.permission === FOrganizationRoleType.ADMIN)
    });
  });
  let o = ["AddTeamsToWorkspace", "CheckUnassignedTeams"];
  let d = _$$A2({
    numSteps: o.length,
    onComplete: complete
  });
  return jsx(_$$U, {
    currentStep: d.currentStep,
    isShowing,
    children: o.map(e => jsx(eu, {
      step: e,
      isShowing,
      next: d.next,
      complete
    }, e))
  });
}
function eu(e) {
  let {
    step,
    isShowing,
    next,
    complete
  } = e;
  switch (step) {
    case "AddTeamsToWorkspace":
      return jsx(rq, {
        clickOutsideToHide: !0,
        description: _$$tx("workspace_admin.onboarding.step_one_description"),
        emphasized: !0,
        isShowing,
        onClose: complete,
        primaryCta: {
          label: _$$tx("general.next"),
          onClick: next,
          type: "button",
          ctaTrackingDescriptor: _$$c.NEXT
        },
        stepCounter: {
          stepNum: 1,
          totalNumSteps: 2
        },
        targetKey: Pc,
        title: _$$tx("workspace_admin.onboarding.step_one_heading"),
        trackingContextName: Jb,
        userFlagOnShow: eo
      });
    case "CheckUnassignedTeams":
      return jsx(rq, {
        clickOutsideToHide: !0,
        description: _$$tx("workspace_admin.onboarding.step_two_description"),
        emphasized: !0,
        isShowing,
        onClose: complete,
        primaryCta: {
          label: _$$tx("general.got_it"),
          onClick: complete,
          type: "button",
          ctaTrackingDescriptor: _$$c.GOT_IT
        },
        stepCounter: {
          stepNum: 2,
          totalNumSteps: 2
        },
        targetKey: E7,
        title: _$$tx("workspace_admin.onboarding.step_two_heading"),
        trackingContextName: Jb,
        userFlagOnShow: eo
      });
    default:
      throwTypeError(step);
  }
}
let eV = Ju(function ({
  workspaceId: e,
  onSubmit: t
}) {
  let a = wA();
  let r = dq();
  let [o, d] = useState({
    columnName: Kq.NAME,
    sortingKey: Kq.NAME,
    isReversed: !1
  });
  let _ = useCallback(e => {
    d(t => ({
      columnName: e,
      isReversed: t.sortingKey === e && !t.isReversed,
      sortingKey: e
    }));
  }, [d]);
  let [u, g] = useState("");
  let h = useCallback(e => {
    g(e);
  }, []);
  let x = useMemo(() => debounce(h, 300), [h]);
  let [b, v] = useState(!1);
  let f = useCallback(() => {
    v(e => !e);
  }, []);
  let j = useMemo(() => ({
    orgAccessFilter: null,
    discoverabilityFilter: null,
    teamMembershipFilter: null,
    workspaceFilter: _$$O3,
    orphanedTeamFilter: b
  }), [b]);
  let {
    teams,
    fetchMore,
    allTeamsFetched
  } = Ki({
    filters: j,
    sortConfig: o,
    searchQuery: u,
    membersMap: {},
    isEndUserSurface: !1,
    isUnassignedTeamsModal: !0
  });
  let [N, T] = useState(!1);
  let {
    status,
    teams: _teams
  } = _q({
    searchQuery: u,
    filters: j,
    selectedAll: N,
    isUnassignedTeamsModal: !0
  });
  let L = Rs(z$o, {
    workspaceId: e
  });
  let P = L.data ? oA(L.data.workspace) : null;
  let U = P?.name;
  if (!U) return null;
  let F = [{
    name: _$$t("teams_table.team_name"),
    className: "add_unassigned_teams_modal--nameColumn--H2d4L members_table--avatarColumn--SoUiA members_table--column--e-buT admin_settings_page--membersColumn--E3seT table--column--974RA",
    sorting_key: Kq.NAME,
    getSortValue: e => e.name,
    cellComponent: e => jsxs(_$$Y, {
      direction: "horizontal",
      spacing: 8,
      children: [jsx(CH, {
        entity: e,
        size: 22
      }), jsxs("div", {
        className: _$$s.flex.flexColumn.minW0.$,
        children: [jsxs(_$$Y, {
          spacing: "2px",
          children: [jsx(_$$E, {
            truncate: !0,
            children: e.name
          }), jsx(HL, {
            orgId: r,
            orgAccess: e.org_access
          })]
        }), jsx(_$$E, {
          color: "secondary",
          children: _$$tx("add_unassigned_teams_modal.team_metadata", {
            memberCountInfo: _$$t("add_unassigned_teams_modal.member_count", {
              memberCount: e.member_count || 0
            }),
            projectCountInfo: _$$t("add_unassigned_teams_modal.project_count", {
              projectCount: e.projects || 0
            })
          })
        })]
      })]
    }),
    loadingComponent: jsxs(_$$Y, {
      direction: "horizontal",
      height: "hug-contents",
      children: [jsx("div", {
        style: {
          width: 22,
          height: 22
        },
        children: jsx(Wi, {
          className: _$$s.wFull.hFull.$,
          animationType: JR.NO_SHIMMER
        })
      }), jsxs(_$$Y, {
        direction: "vertical",
        height: "hug-contents",
        spacing: 4,
        children: [jsx("div", {
          style: {
            width: 128
          },
          children: jsx(Wi, {
            className: _$$s.wFull.h14.$,
            animationType: JR.NO_SHIMMER
          })
        }), jsx("div", {
          style: {
            width: 80
          },
          children: jsx(Wi, {
            className: _$$s.wFull.h14.$,
            animationType: JR.NO_SHIMMER
          })
        })]
      })]
    })
  }, {
    name: _$$t("teams_table.owner"),
    className: "add_unassigned_teams_modal--ownerColumn--jLx2z",
    sorting_key: Kq.OWNER,
    getSortValue: e => e.owner?.handle ? `a${e.owner.handle}` : `z${e.name}`,
    cellComponent: e => jsx(_$$Y, {
      width: "fill-parent",
      children: jsx(_$$E, {
        truncate: !0,
        children: e.owner?.handle || _$$t("add_unassigned_teams_modal.no_owner")
      })
    }),
    loadingComponent: jsx("div", {
      style: {
        width: 80
      },
      children: jsx(Wi, {
        className: _$$s.wFull.h14.$,
        animationType: JR.NO_SHIMMER
      })
    })
  }];
  let q = () => {
    a(Lo());
  };
  function $({
    selectedTeams: s
  }) {
    if (0 === s.length) return jsx(_$$$, {
      variant: "primary",
      disabled: !0,
      children: _$$tx("add_unassigned_teams_modal.assign_teams")
    });
    let i = N && !allTeamsFetched;
    if (i && status === _$$r.LOADING) return jsx(_$$$, {
      variant: "primary",
      disabled: !0,
      children: jsx("div", {
        style: {
          width: 80
        },
        children: jsx(Wi, {
          className: _$$s.h12.wFull.$,
          animationType: JR.SHIMMER_ON_MENU,
          dataTestId: "add-unassigned-teams-modal-button-loading"
        })
      })
    });
    let r = s;
    if (i) {
      let e = new Set(s.map(e => e.id));
      let t = new Set(teams.filter(t => !e.has(t.id)).map(e => e.id));
      r = _teams.filter(e => !t.has(e.id));
    }
    return jsx(_$$$, {
      variant: "primary",
      onClick: function () {
        a(xM({
          teams: r,
          workspaceId: e,
          workspaceName: U
        }));
        t?.(r.map(e => e.id));
        q();
      },
      children: _$$tx("add_unassigned_teams_modal.assign_n_teams", {
        count: r.length
      })
    });
  }
  return jsx(fu, {
    name: "Add Unassigned Teams Modal",
    children: jsxs(OJ, {
      title: _$$t("add_unassigned_teams_modal.title", {
        workspaceName: U
      }),
      maxWidth: 480,
      onClose: q,
      containerClassName: "add_unassigned_teams_modal--unassignedTab--My2Tq",
      innerContainerClassName: _$$s.hFull.flex.flexColumn.$,
      fixedTop: !0,
      children: [jsx(_$$Y, {
        height: "hug-contents",
        padding: 16,
        children: jsx(_$$E, {
          children: _$$tx("add_unassigned_teams_modal.description", {
            workspaceName: U
          })
        })
      }), jsx(_$$Y, {
        height: "hug-contents",
        padding: {
          horizontal: 16,
          vertical: 0
        },
        children: jsx(y2, {
          styleOverrides: {
            boxSizing: "border-box",
            width: "100%",
            height: "32px"
          },
          onChange: x,
          query: u,
          clearSearch: () => h(""),
          placeholder: _$$t("add_unassigned_teams_modal.search_for_teams")
        })
      }), jsx(_$$Y, {
        height: "hug-contents",
        padding: 8,
        children: jsx(_$$S2, {
          checked: b,
          onChange: f,
          label: jsx(_$$J3, {
            children: _$$tx("add_unassigned_teams_modal.without_owners")
          })
        })
      }), jsx(Cj, {
        columns: F,
        emptyContent: jsx(_$$Y, {
          padding: 38,
          children: jsx(_$$E, {
            color: "secondary",
            children: _$$tx("add_unassigned_teams_modal.no_teams_found")
          })
        }),
        footer: function (e) {
          return jsxs(_$$Y, {
            height: "hug-contents",
            padding: 16,
            children: [jsx(_$$M, {}), jsx($, {
              selectedTeams: e
            })]
          });
        },
        getItemKey: e => e.id,
        isLoading: !allTeamsFetched,
        itemTypeContext: {
          itemType: "team",
          getSelectedCountString: e => _$$t("multi_select_list.selected_count_team", {
            numSelected: e
          })
        },
        items: teams,
        minContentWidth: 448,
        onFetchMore: fetchMore,
        onSetSortState: _,
        onToggleSelectAll: e => T(!e),
        paddingEnd: 8,
        scrollContainerInnerClassName: "add_unassigned_teams_modal--scrollContainerInner--fIiId",
        sortState: o,
        styleOverrideClassNames: {
          header: "add_unassigned_teams_modal--header--XwBY8 add_unassigned_teams_modal--extendedRow--UIQ1u",
          row: "add_unassigned_teams_modal--row--bWhBU add_unassigned_teams_modal--unassignedRowBackgroundStyles--ee10b add_unassigned_teams_modal--extendedRow--UIQ1u",
          checkboxColumn: "add_unassigned_teams_modal--checkboxColumn--IJS4v",
          selectedRow: "add_unassigned_teams_modal--selectedRow--vUiFc add_unassigned_teams_modal--unassignedRowBackgroundStyles--ee10b add_unassigned_teams_modal--extendedRow--UIQ1u",
          tableWrapper: "add_unassigned_teams_modal--tableWrapper--6aLMD"
        }
      })]
    })
  });
}, "ADD_UNASSIGNED_TEAMS_MODAL");
function e7(e, t, a, n) {
  let s = wA();
  let r = _$$q(R4, !0);
  let l = _$$q(uU, !0);
  let o = _$$q(gx, !0);
  let d = _$$q(G5, !0);
  return {
    onAddToWorkspace: (e, t, a) => {
      s(xM({
        teams: [e],
        workspaceId: t,
        workspaceName: a
      }));
      r();
    },
    onDeleteTeam: e => {
      s(_$$to({
        type: _$$H,
        data: {
          team: e,
          subscriptionStatus: !0,
          onDeleteTeam: d
        }
      }));
    },
    onJoinRequest: e => {
      s(_$$to({
        type: _$$$2,
        data: {
          team: e
        }
      }));
    },
    onOpenTeam: e => s(dm(e)),
    onRenameTeam: e => {
      s(WC());
      s(_$$to({
        type: _$$h2(),
        data: {
          team: e
        }
      }));
      r();
    },
    onTransferTeam: e => {
      s(_$$to({
        type: Lg(),
        data: {
          teamId: e.id,
          entryPoint: Lq.ORG_ADMIN_TEAMS_TABLE,
          onRequestClose: a
        }
      }));
    },
    onRevokeTeamTransferRequest: e => {
      t && t.get(e) && XHR.del(`/api/asset_transfer/${t.get(e)?.asset_transfer_request_id}`).then(() => n(e), () => {
        s(_$$F.enqueue({
          message: _$$t("asset_transfers.error_message.something_went_wrong_check_your_connection"),
          error: !0
        }));
      });
    },
    onViewTeamMembers: e => {
      s(sf({
        teamId: e,
        view: "team",
        teamViewTab: A$.MEMBERS
      }));
      o();
    },
    onWithdrawRequestForTeam: t => {
      let a = e[t.id].id;
      s(lT({
        requestId: a
      }));
    },
    onRemoveFromWorkspace: e => {
      s(c5({
        teams: [e]
      }));
      r();
    },
    onOpenAccessSettings: e => {
      s(_$$to({
        type: dW,
        data: {
          team: e
        }
      }));
      l();
    }
  };
}
var e9 = (e => (e.MIXED_JOIN = "MIXED_JOIN", e))(e9 || {});
let te = new Set([gO.CLICK_JOIN_AS_ADMIN, gO.BYPASS_REQUEST]);
function tt(e) {
  return 1 === e.length ? e[0] : null;
}
function ta({
  workspacesCanMoveTo: e,
  selectedTeams: t,
  teamRoleRequests: a,
  teamPendingTransfers: r,
  pendingTransferRequests: l,
  onRevokeTransferRequestSuccess: o,
  onViewerJoinTeam: d,
  onViewerLeaveTeam: c
}) {
  let _;
  let u = wA();
  let m = d4(e => getPermissionsState(e));
  let p = px();
  let g = j_(p).unwrapOr(!1);
  let {
    onDeleteTeam,
    onJoinRequest,
    onOpenTeam,
    onRenameTeam,
    onTransferTeam,
    onRevokeTeamTransferRequest,
    onViewTeamMembers,
    onWithdrawRequestForTeam,
    onOpenAccessSettings
  } = e7(a, r, l, o);
  let C = useMemo(() => ({
    canViewProjects: tt(t)?.canRead ?? !1,
    canViewMembers: tt(t)?.canRead ?? !1,
    canRename: tt(t)?.canAdmin ?? !1,
    canManageTeamAccess: tt(t)?.canAdmin ?? !1,
    canTransfer: (g && tt(t)?.canAdmin) ?? !1,
    canDelete: t.every(e => e.canDelete) ?? !1
  }), [g, t]);
  if (0 === t.length) return jsx(Fragment, {});
  let S = t.map(e => e.id);
  let N = new Map();
  t.forEach(e => {
    let t = YP(e, a[e.id], m, g);
    let n = N.get(t) || [];
    n.push(e);
    N.set(t, n);
  });
  let I = e => N.get(e) || [];
  let T = e => I(e).map(e => e.id);
  let R = null;
  if (t.every(e => function (e, t, a) {
    let n = e.org_access === FAccessLevelType.SECRET && e.orphaned && a;
    return e.org_access !== FAccessLevelType.SECRET || canViewTeam(e.id, t) || n;
  }(e, m, g))) {
    let e = [...N.keys()];
    1 === e.length ? R = e[0] : e.every(e => te.has(e)) && (R = "MIXED_JOIN");
  }
  switch (R) {
    case gO.CLICK_JOIN:
    case gO.CLICK_JOIN_AS_ADMIN:
      _ = _$$t("teams_table.join");
      break;
    case gO.CLICK_LEAVE:
      _ = _$$t("teams_table.leave");
      break;
    case gO.CLICK_WITHDRAW:
      _ = _$$t("teams_table.cancel_join_request");
      break;
    case gO.BYPASS_REQUEST:
      _ = _$$t("teams_table.join_team_as_owner");
      break;
    case gO.CLICK_REQUEST:
      _ = _$$t("teams_table.request_to_join");
      break;
    default:
      _ = _$$t("teams_table.join");
  }
  let O = null === R;
  let L = () => {
    u(ZT({
      teamIds: S
    }));
    d && S.forEach(e => {
      d(e);
    });
  };
  let D = e => {
    let t = e ?? S;
    u(ZT({
      teamIds: t,
      level: _$$e4.ADMIN
    }));
    d && t.forEach(e => {
      d(e);
    });
  };
  let M = () => {
    for (let e of S) u(_$$to({
      type: _$$p3,
      data: {
        teamId: e,
        onViewerLeaveTeam: c
      }
    }));
  };
  let P = () => {
    for (let e of t) onJoinRequest(e);
  };
  let U = e => {
    let t = e ?? S;
    u(ZT({
      teamIds: t,
      level: _$$e4.OWNER
    }));
    d && t.forEach(e => {
      d(e);
    });
  };
  let F = () => {
    for (let e of t) onWithdrawRequestForTeam(e);
  };
  let q = e => {
    e ? u(xM({
      teams: t,
      workspaceId: e.id,
      workspaceName: e.name
    })) : u(c5({
      teams: t
    }));
  };
  let $ = () => {
    if (!O) switch (R) {
      case gO.CLICK_LEAVE:
        M();
        return;
      case gO.CLICK_WITHDRAW:
        F();
        return;
      case gO.CLICK_JOIN:
        L();
        return;
      case gO.CLICK_JOIN_AS_ADMIN:
        D();
        return;
      case gO.BYPASS_REQUEST:
        U();
        return;
      case gO.CLICK_REQUEST:
        P();
        return;
      case "MIXED_JOIN":
        D(T(gO.CLICK_JOIN_AS_ADMIN));
        U(T(gO.BYPASS_REQUEST));
        return;
      default:
        return;
    }
  };
  let B = e => e ? _$$t("teams_table.this_action_cannot_be_applied_to_all_selected_teams") : void 0;
  let G = jsx(IU, {
    disabled: O,
    tooltip: B(O),
    onClick: () => {
      $();
    },
    label: _
  }, "join");
  let z = jsx(IU, {
    disabled: !C.canDelete,
    tooltip: B(!C.canDelete),
    onClick: () => {
      if (C.canDelete) for (let e of t) onDeleteTeam(e);
    },
    label: _$$t("teams_table.delete")
  }, "delete");
  let V = new Set(t.map(e => e.workspace_id));
  let W = {
    type: uw.NONE
  };
  if (1 === V.size) {
    let e = Array.from(V)[0];
    W = null == e ? {
      type: uw.UNASSIGNED
    } : {
      type: uw.WORKSPACE,
      workspaceId: e
    };
  }
  let H = jsx(Vq, {
    workspaces: e,
    selectedWorkspace: W,
    onChange: e => q(e)
  }, "workspace-update-group");
  let Y = [];
  let J = jsx(IU, {
    disabled: !C.canManageTeamAccess,
    tooltip: B(!C.canManageTeamAccess),
    onClick: C.canManageTeamAccess ? () => onOpenAccessSettings(t[0]) : void 0,
    label: _$$t("teams_table.manage_access_setting")
  }, "change-access-settings");
  Y.push(jsx(IU, {
    disabled: !C.canViewProjects,
    tooltip: B(!C.canViewProjects),
    onClick: C.canViewProjects ? () => onOpenTeam(t[0].id) : void 0,
    label: _$$t("teams_table.view_projects")
  }, "view-projects"), jsx(IU, {
    disabled: !C.canViewMembers,
    tooltip: B(!C.canViewMembers),
    onClick: C.canViewMembers ? () => onViewTeamMembers(t[0].id) : void 0,
    label: _$$t("teams_table.view_team_members")
  }, "view-members"), jsx(IU, {
    disabled: !C.canRename,
    tooltip: B(!C.canRename),
    onClick: C.canRename ? () => onRenameTeam(t[0]) : void 0,
    label: _$$t("teams_table.rename")
  }, "rename-team"), J, H, r && r.get(t[0].id) ? jsx(IU, {
    disabled: !C.canTransfer,
    tooltip: B(!C.canTransfer),
    onClick: () => onRevokeTeamTransferRequest(t[0].id),
    label: _$$t("teams_table.revoke_transfer_request")
  }, "revoke-team-transfer") : jsx(IU, {
    disabled: !C.canTransfer,
    tooltip: B(!C.canTransfer),
    onClick: () => onTransferTeam(t[0]),
    label: _$$t("teams_table.transfer")
  }, "transfer-team"), z, G);
  return jsx(Fragment, {
    children: Y
  });
}
function tc({
  areDropdownsDisabled: e,
  dropdownShown: t,
  workspacesCanMoveTo: a,
  team: r,
  teamPendingTransfers: l,
  teamRoleRequests: o,
  onRevokeTransferRequestSuccess: d,
  pendingTransferRequests: c,
  onViewerJoinTeam: _,
  onViewerLeaveTeam: u
}) {
  let m = wA();
  let p = _$$q(gx, !0);
  let g = _$$q(uU, !0);
  let h = d4(e => getPermissionsState(e));
  let x = d4(e => e.teamBilling);
  let b = d4(e => e.teams[r.id]);
  let v = _6();
  let f = px();
  let j = j_(f).unwrapOr(!1);
  let y = useMemo(() => ({
    canAdminTeam: r.canAdmin,
    canEditTeam: r.canEdit,
    canViewTeam: r.canRead,
    canManageOrgTeam: r.canAdmin,
    canViewTeamProjects: r.canRead,
    canDeleteTeam: r.canDelete
  }), [r]);
  let {
    onDeleteTeam,
    onJoinRequest,
    onOpenTeam,
    onRenameTeam,
    onTransferTeam,
    onRevokeTeamTransferRequest,
    onWithdrawRequestForTeam,
    onAddToWorkspace,
    onRemoveFromWorkspace,
    onOpenAccessSettings
  } = e7(o, l, c, d);
  let D = e => {
    m(_$$to({
      type: _$$p3,
      data: {
        teamId: e.id,
        onViewerLeaveTeam: u
      }
    }));
  };
  let M = lH(r.id, void 0, _);
  let P = lH(r.id, _$$e4.ADMIN, _);
  let F = lH(r.id, _$$e4.OWNER, _);
  let q = b ? {
    team: b,
    billing: x,
    teamId: r.id
  } : void 0;
  let $ = _$$n(am.MEMBERS, q, !!y?.canAdminTeam, !!y?.canEditTeam, !!y?.canViewTeam, v);
  let B = _$$n(am.SETTINGS, q, !!y?.canAdminTeam, !!y?.canEditTeam, !!y?.canViewTeam, v);
  if (e) return jsx(Fragment, {});
  let G = `MENU_DROPDOWN-${r.id}`;
  let z = t?.type === G;
  let V = [];
  y?.canViewTeam && (y?.canViewTeamProjects && V.push({
    displayText: _$$t("teams_table.view_projects"),
    callback: () => onOpenTeam(r.id)
  }), q && (V.push({
    displayText: _$$t("teams_table.view_team_members"),
    callback: () => {
      $();
      p();
    }
  }), V.push({
    displayText: _$$t("teams_table.view_settings"),
    callback: () => {
      B();
      g();
    }
  })));
  V.push({
    displayText: "",
    separator: !0
  });
  y?.canManageOrgTeam && (V.push({
    displayText: _$$t("teams_table.rename_team"),
    callback: () => onRenameTeam(r)
  }), V.push({
    displayText: _$$t("teams_table.manage_access_setting"),
    callback: () => onOpenAccessSettings(r)
  }));
  a.length > 0 && V.push({
    displayText: _$$t("teams_table.change_workspace"),
    children: ((e, t) => {
      let n = a.map(a => ({
        displayText: a.name,
        isChecked: t === a.id,
        callback: () => onAddToWorkspace(e, a.id, a.name)
      }));
      n.push({
        displayText: "",
        separator: !0
      });
      n.push({
        displayText: t ? _$$t("members_table.license_group_cell.unassign") : _$$t("license_group.unassigned"),
        isChecked: !t,
        callback: () => onRemoveFromWorkspace(e)
      });
      return n;
    })(r, r.workspace_id)
  });
  V.push({
    displayText: "",
    separator: !0
  });
  j && y?.canManageOrgTeam && (l && l.get(r.id) ? V.push({
    displayText: _$$t("teams_table.revoke_transfer_request"),
    callback: () => onRevokeTeamTransferRequest(r.id)
  }) : V.push({
    displayText: _$$t("teams_table.transfer_team"),
    callback: () => onTransferTeam(r)
  }));
  y.canDeleteTeam && V.push({
    displayText: _$$t("teams_table.delete_team"),
    callback: () => onDeleteTeam(r)
  });
  let W = (e => {
    let t = YP(e, o[e.id], h, j);
    return null === t ? null : {
      displayText: (() => {
        switch (t) {
          case gO.CLICK_LEAVE:
            return _$$t("teams_table.leave_team");
          case gO.CLICK_WITHDRAW:
            return _$$t("teams_table.cancel_join_request");
          case gO.CLICK_JOIN:
            return _$$t("teams_table.join_team");
          case gO.CLICK_JOIN_AS_ADMIN:
            return _$$t("teams_table.join_team_as_admin");
          case gO.BYPASS_REQUEST:
            return _$$t("teams_table.join_team_as_owner");
          case gO.CLICK_REQUEST:
            return _$$t("teams_table.request_to_join");
        }
      })(),
      callback: (() => {
        switch (t) {
          case gO.CLICK_LEAVE:
            return () => D(e);
          case gO.CLICK_WITHDRAW:
            return () => onWithdrawRequestForTeam(e);
          case gO.CLICK_JOIN:
            return M;
          case gO.CLICK_JOIN_AS_ADMIN:
            return P;
          case gO.BYPASS_REQUEST:
            return F;
          case gO.CLICK_REQUEST:
            return () => onJoinRequest(e);
        }
      })()
    };
  })(r);
  return (W && (V.push({
    displayText: "",
    separator: !0
  }), V.push(W)), V.every(e => e.separator)) ? jsx(Fragment, {}) : jsxs(_$$V, {
    className: hP,
    dispatch: m,
    hideChevron: !0,
    showingDropdown: z,
    type: G,
    isRightAligned: !0,
    isMultilevelDropdown: !0,
    children: [jsx(_$$B, {
      svg: _$$A3,
      className: "paginated_teams_table--menuIcon--tIIAY admin_settings_page--menuIcon--EE6RZ"
    }), z && t && t?.data?.targetRect && jsx(noop, {
      showPoint: !1,
      items: V,
      onSelectItem: e => {
        e.callback && e.callback("", null, m);
      },
      parentRect: t.data.targetRect,
      dispatch: m
    })]
  });
}
var tu = t_;
let tk = e => e.org_access === FAccessLevelType.SECRET ? "Secret teams can\u2019t be added as default teams." : null;
function tE(e) {
  let t;
  let a = e.token.content;
  switch (a.org_access) {
    case FAccessLevelType.PRIVATE:
      t = "closed";
      break;
    case FAccessLevelType.SECRET:
      t = "secret";
  }
  return jsxs("div", {
    className: "default_teams_edit_modal--teamToken--ssO-d default_teams_edit_modal--flexHorizontalGap8px--BmbPK",
    children: [jsx(nl, {
      team: a,
      size: Pf.SMALL,
      fallbackDisplay: _$$U2.HIDDEN
    }), jsxs("span", {
      children: [a.name, t && ` (${t})`]
    })]
  });
}
function tC(e) {
  let t = e.searchResult;
  return jsxs("div", {
    className: e.isSelected ? "default_teams_edit_modal--teamRowSelected--8U-Xz default_teams_edit_modal--teamRow--qzGjr default_teams_edit_modal--flexHorizontalGap8px--BmbPK" : "default_teams_edit_modal--teamRow--qzGjr default_teams_edit_modal--flexHorizontalGap8px--BmbPK",
    children: [jsx(nl, {
      team: t
    }), jsxs("div", {
      className: "default_teams_edit_modal--teamRowInfo--JlcCn",
      children: [jsx("span", {
        children: t.name
      }), jsxs("div", {
        className: e.isSelected ? "default_teams_edit_modal--teamRowDetailsSelected--8ER-5 default_teams_edit_modal--teamRowDetails--TM7BL" : "default_teams_edit_modal--teamRowDetails--TM7BL",
        children: [t.sharing_audience_control === FPermissionLevelType.INVITE_ONLY && t.org_browsable && jsxs(Fragment, {
          children: [jsx("span", {
            children: _$$t("teams_table.default_workspace_team.invite_only")
          }), jsx("span", {
            children: "\xa0\xb7\xa0"
          }), jsx("span", {
            children: _$$t("teams_table.default_workspace_team.visible")
          }), jsx("span", {
            children: "\xa0\xb7\xa0"
          })]
        }), t.workspaceName && jsxs(Fragment, {
          children: [jsx("span", {
            className: _$$s.maxW150.ellipsis.noWrap.overflowHidden.$,
            children: t.workspaceName
          }), jsx("span", {
            children: "\xa0\xb7\xa0"
          })]
        }), jsx("span", {
          children: _$$td(t.member_count, "member")
        }), jsx("span", {
          children: "\xa0\xb7\xa0"
        }), jsx("span", {
          children: _$$td(t.projects, "project")
        })]
      })]
    })]
  });
}
let tS = (e, t) => t ? {
  ...e,
  workspaceName: t
} : e;
let tN = Ju(function (e) {
  let {
    workspaceId
  } = e;
  let a = wA();
  let r = dq();
  let l = md(EK);
  let o = useMemo(() => "loaded" !== l.status ? l : {
    status: "loaded",
    data: tu()(l.data, e => e.id)
  }, [l]);
  let d = Rs(kC9, {
    workspaceId
  });
  let c = d?.data?.workspace;
  let _ = useMemo(() => c?.defaultTeams || [], [c]);
  let u = useMemo(() => {
    let e = new Map();
    _.forEach(t => {
      e.set(t.teamId, t.team?.workspace?.name);
    });
    return e;
  }, [_]);
  let [m, p] = useState(_$$Rs());
  let [h, x] = useState(!1);
  let b = "loaded" !== o.status || "loaded" !== d.status;
  useEffect(() => {
    b || h || p({
      ..._$$Rs(),
      tokens: _.filter(e => e.teamId in o.data).map(function (e) {
        return {
          state: _$$d.OK,
          content: tS(o.data[e.teamId], u.get(e.teamId))
        };
      })
    });
  }, [b, h, _, o, u]);
  let v = () => {
    _$$sx("CTA Clicked", {
      name: "Edit Default Teams Modal Cancel",
      workspaceId,
      orgId: r
    });
    a(Ce());
  };
  let f = jsx("span", {
    className: _$$s.fontSemiBold.$,
    children: c?.name
  });
  let j = c?.name ? _$$tx("workspace.when_people_join_workspace_name", {
    styledWorkspaceName: f
  }) : _$$tx("workspace.when_people_join_this_workspace");
  return jsx(OJ, {
    title: _$$t("workspace.edit_default_teams"),
    onClose: v,
    minWidth: 500,
    children: jsxs("div", {
      className: "default_teams_edit_modal--container--g5oWi default_teams_edit_modal--flexVerticalGap8px--bbgXh",
      children: [b && jsx(qc, {}), !b && jsxs(Fragment, {
        children: [jsx("span", {
          children: j
        }), jsx("div", {
          children: jsx(_$$P, {
            autocompleteResultsClassName: "default_teams_edit_modal--autocompleteResults--qCbnl",
            autocomplete: m,
            placeholder: "Search for a team",
            onChange: e => {
              let t = "";
              let a = [];
              e.tokens.forEach(e => {
                let n = tk(e.content);
                n && (t = n);
                a.push({
                  ...e,
                  state: n ? _$$d.ERROR : _$$d.OK
                });
              });
              p({
                ...e,
                tokens: a,
                errorMessage: t
              });
              x(!0);
            },
            validateToken: lQ,
            getSearchResults: e => {
              let t = new Ef([], {
                keys: ["name"],
                threshold: 0,
                tokenize: !0,
                matchAllTokens: !0
              });
              let a = m.tokens.map(e => e.content.id);
              t.set(Object.values(o.data || {}).filter(e => !a.includes(e.id)).filter(e => !e.hidden).map(function (e) {
                let t = _.find(t => t.teamId === e.id);
                let a = t?.team?.workspace;
                return tS(e, a ? a.name : void 0);
              }));
              return t.search(e.inputValue);
            },
            SearchResultComponent: tC,
            TokenComponent: tE
          })
        }), m.errorMessage && jsx("span", {
          className: _$$s.colorTextDanger.$,
          "data-testid": "error-label",
          children: m.errorMessage
        }), jsxs("span", {
          children: [jsx("span", {
            className: _$$s.fontSemiBold.$,
            children: _$$t("workspace.note")
          }), _$$t("workspace.new_users_will_join_updated")]
        })]
      }), jsxs("div", {
        className: "default_teams_edit_modal--buttonContainer--dyJDe default_teams_edit_modal--flexHorizontalGap8px--BmbPK",
        children: [jsx(nR, {
          onClick: v,
          children: _$$t("workspace.cancel")
        }), jsx(fu, {
          name: "Edit Default Teams Modal Submit",
          properties: {
            workspaceId,
            orgId: r
          },
          children: jsx(vd, {
            onClick: () => {
              if (c) {
                let e = {
                  id: c.id,
                  name: c.name,
                  defaultTeams: c.defaultTeams || []
                };
                a(_$$F2({
                  workspace: e,
                  teamIds: m.tokens.map(e => e.content.id)
                }));
              }
              a(Ce());
            },
            disabled: b || !!m.errorMessage,
            children: _$$t("workspace.save")
          })
        })]
      })]
    })
  });
}, "WorkspaceDefaultTeamsEditModal");
var tA = (e => (e[e.SEARCH = 0] = "SEARCH", e[e.FILTER = 1] = "FILTER", e))(tA || {});
var tR = (e => (e.MEMBERSHIP = "MEMBERSHIP", e.ACCESS = "ACCESS", e))(tR || {});
let tO = () => ({
  [ig.JOINED]: _$$t("teams_table.membership_filter.my_teams_option"),
  [ig.NOT_JOINED]: _$$t("teams_table.membership_filter.not_my_teams_option")
});
function tL(e) {
  var t;
  let {
    dropdownShown,
    lastFilterAction,
    onFilter,
    onSearch,
    onFetchMore,
    onSort,
    filters,
    sortState,
    org,
    searchQuery,
    teamRoleRequests,
    teams,
    optimisticTeams,
    isLoading,
    onViewerJoinTeam,
    onViewerLeaveTeam,
    addOptimisticIds,
    onRightActionsChange
  } = e;
  let [Q, Z] = useState(!1);
  let [et, ea] = useState(null);
  let en = wA();
  let es = _$$q(b4, !0);
  let er = d4(({
    selectedView: e
  }) => e.view);
  let [el, eo] = useState(new Map());
  let ed = useCallback(() => {
    _$$S.getOrgTeamTransfers({
      orgId: org.id
    }).then(({
      data: e
    }) => {
      let t = e.meta;
      if (t) for (let e of t) eo(t => new Map(t.set(e.source_team_id, e)));
    });
  }, [org.id]);
  let ec = e => {
    eo(t => new Map(t.set(e, null)));
    en(_$$F.enqueue({
      message: _$$t("asset_transfers.revoke.transfer_revoked")
    }));
  };
  let {
    status,
    teams: _teams2,
    totalSelectable
  } = _q({
    searchQuery,
    filters,
    optimisticIds: optimisticTeams.map(e => e.id),
    selectedAll: !!et
  });
  let {
    onAddToWorkspace,
    onRemoveFromWorkspace
  } = e7(teamRoleRequests, el, ed, ec);
  let e$ = useMemo(() => "loaded" === e.orgTeamCountsViewResult.status ? e.orgTeamCountsViewResult.data : xZ(), [e.orgTeamCountsViewResult]);
  let eB = d4(({
    selectedView: e
  }) => e);
  let eG = "orgAdminSettings" === eB.view;
  let eH = "workspace" === eB.view && eB.subView === V0.ADMIN;
  let eY = d4(({
    selectedView: e
  }) => "workspace" === e.view && e.subView === V0.ADMIN ? e.workspaceId : null);
  let eJ = !eH;
  let eK = !rr && eG;
  let eX = NJ(org.id);
  let eQ = eX.data || [];
  let eZ = {};
  eQ.forEach(e => eZ[e.id] = e);
  let e0 = JSON.stringify(el);
  useEffect(() => {
    ed();
  }, [e0, ed]);
  _$$h(() => {
    onRightActionsChange?.(jsx($n, {
      iconPrefix: jsx(_$$e2, {}),
      onClick: e1,
      children: _$$tx("resources_tab.approved_plugins.actions.add_plugin")
    }));
  });
  let e1 = () => {
    let e;
    e = eY || (filters.workspaceFilter ? filters.workspaceFilter : void 0);
    en(_$$to({
      type: Uc,
      data: {
        workspaceId: e,
        onSubmitReturnToPrevView: !1,
        afterSubmit: es
      }
    }));
  };
  let e2 = () => {
    en(_$$to({
      type: eV,
      data: {
        workspaceId: eY,
        onSubmit: e => {
          e.length <= _$$O && addOptimisticIds(e);
        }
      }
    }));
  };
  let e4 = () => {
    if (Q) return;
    Z(!0);
    en(_$$F.enqueue({
      message: _$$t("teams_table.csv_export.preparing_request"),
      type: "orgTeam.exportCSV",
      icon: zX.SPINNER
    }));
    let t = eY ? `/api/workspace/${eY}/export_teams` : `/api/orgs/${e.org.id}/export_teams`;
    XHR.post(t).then(() => {
      en(_$$F.enqueue({
        message: _$$t("teams_table.csv_export.generating"),
        type: "orgTeam.exportCSV",
        icon: zX.CHECK
      }));
      Z(!1);
    }, () => {
      en(_$$F.enqueue({
        message: _$$t("teams_table.csv_export.error"),
        type: "orgTeam.exportCSV",
        icon: zX.EXCLAMATION,
        error: !0
      }));
      Z(!1);
    });
  };
  let e5 = eY && filters.workspaceFilter !== _$$O3;
  function e3(e, t) {
    return jsx(tc, {
      areDropdownsDisabled: t,
      dropdownShown,
      onRevokeTransferRequestSuccess: ec,
      onViewerJoinTeam,
      onViewerLeaveTeam,
      pendingTransferRequests: ed,
      team: e,
      teamPendingTransfers: el,
      teamRoleRequests,
      workspacesCanMoveTo: eQ
    });
  }
  function e8(e) {
    if (el && el.get(e.id)) {
      let t = _$$t("file_browser.team_settings.source_user_sent_destination_user_a_request_to_transfer_this_team", {
        sourceUserEmail: el.get(e.id)?.source_user_email,
        destinationUserEmail: el.get(e.id)?.destination_user_email
      });
      return jsx("div", {
        className: "paginated_teams_table--warningIconContainer--b9qou",
        "data-tooltip-type": Ib.TEXT,
        "data-tooltip": t,
        "data-tooltip-offset-y": -4,
        "data-tooltip-timeout-delay": 2,
        "data-tooltip-max-width": 250,
        children: jsx(_$$B, {
          svg: _$$A4,
          className: "paginated_teams_table--bannerWarningIcon--CqHp-"
        })
      });
    }
    return jsx(Fragment, {});
  }
  function e6(e, t) {
    return "loaded" !== eX.status ? jsx("div", {
      style: sx.w64.$,
      children: jsx(Wi, {
        className: _$$s.h24.w64.$,
        animationType: JR.SHIMMER
      })
    }) : jsx(_$$J2, {
      currentWorkspaceId: e.workspace_id,
      disabled: t,
      workspacesCanMoveTo: eQ,
      onChangeWorkspace: t => {
        t === _$$O3 ? onRemoveFromWorkspace(e) : onAddToWorkspace(e, t, eZ[t]?.name);
      }
    });
  }
  let e9 = (() => {
    let e = [];
    function t() {
      return jsx(Fragment, {
        children: "\u2013"
      });
    }
    e.push({
      name: _$$t("teams_table.team_name"),
      className: "paginated_teams_table--teamNameColumn--TacEL paginated_teams_table--column--egVf3 table--column--974RA",
      sorting_key: Kq.NAME,
      getSortValue: e => e.name,
      cellComponent: e => jsxs(_$$Y, {
        children: [jsx(rE, {
          entity: e,
          size: 22,
          className: "paginated_teams_table--teamAvatarLabel--OW0qK"
        }), jsx(HL, {
          orgId: org.id,
          orgAccess: e.org_access
        })]
      })
    });
    e.push({
      name: _$$t("teams_table.owner"),
      className: "paginated_teams_table--ownerColumn--nbyvF paginated_teams_table--column--egVf3 table--column--974RA",
      sorting_key: Kq.OWNER,
      getSortValue: e => e.owner?.handle ? `a${e.owner.handle}` : `z${e.name}`,
      cellComponent: e => e.owner ? jsx(_$$r2, {
        entity: e.owner,
        size: 22,
        dispatch: en
      }) : jsx(t, {})
    });
    e.push({
      name: _$$t("teams_table.projects"),
      className: "paginated_teams_table--projectsColumn--yfCnG paginated_teams_table--column--egVf3 table--column--974RA",
      sorting_key: Kq.PROJECTS,
      getSortValue: e => e.projects ?? 0,
      sortNumerically: !0,
      cellComponent: e => _$$tx("teams_table.project_count", {
        numProjects: e.projects
      })
    });
    e.push({
      name: _$$t("teams_table.members"),
      className: "paginated_teams_table--membersColumn--cYGDk paginated_teams_table--column--egVf3 table--column--974RA",
      sorting_key: Kq.MEMBERS,
      getSortValue: e => "number" == typeof e.member_count ? e.member_count : -1,
      sortNumerically: !0,
      cellComponent: e => "number" == typeof e.member_count ? _$$tx("teams_table.member_count", {
        numMembers: e.member_count
      }) : jsx(t, {})
    });
    org.bigma_enabled && eQ.length > 0 && e.push({
      name: _$$t("teams_table.enterprise.workspace"),
      sorting_key: Kq.WORKSPACE,
      getSortValue: e => e.workspace_id && eZ[e.workspace_id]?.name || "",
      className: "paginated_teams_table--workspaceColumn--PnQOi paginated_teams_table--column--egVf3 table--column--974RA",
      cellComponent: e6
    });
    e.push({
      name: " ",
      className: "paginated_teams_table--pendingIconColumn--JjVz- admin_settings_page--iconColumn--eBwtn",
      loadingComponent: jsx(Fragment, {}),
      cellComponent: e8
    });
    e.push({
      name: "",
      className: "paginated_teams_table--iconColumn--ycpth admin_settings_page--iconColumn--eBwtn",
      cellComponent: e3
    });
    return e;
  })();
  let te = e9.find(e => e.name === sortState.columnName) || e9[0];
  let tt = useMemo(() => _$$m2(teams, optimisticTeams, te, sortState), [teams, optimisticTeams, sortState]);
  let tn = [{
    type: "orphanedTeamFilter",
    value: "on",
    display: _$$t("teams_table.teams_without_owners")
  }];
  let ts = [{
    type: "MEMBERSHIP",
    title: _$$t("admin_filters.section_headers.membership"),
    filters: [{
      type: "teamMembershipFilter",
      label: _$$t("admin_filters.filter_labels.teams"),
      filterComponent: km.SELECT,
      options: [{
        display: _$$t("admin_filters.generic_value.all"),
        value: null
      }, {
        display: _$$t("admin_filters.filter_values.my_teams"),
        value: ig.JOINED
      }, {
        display: _$$t("admin_filters.filter_values.not_my_teams"),
        value: ig.NOT_JOINED
      }]
    }, ...(eG ? [{
      type: "workspaceFilter",
      label: _$$t("admin_filters.filter_labels.workspace"),
      filterComponent: km.SELECT,
      options: [{
        display: _$$t("admin_filters.generic_value.all"),
        value: null
      }, {
        display: _$$t("license_group.unassigned"),
        value: _$$O3
      }, ...eQ.map(e => ({
        display: eZ[e.id]?.name ?? _$$t("license_group.unassigned"),
        value: e.id
      }))]
    }] : []), {
      type: "orphanedTeamFilter",
      label: _$$t("teams_table.teams_without_owners"),
      filterComponent: km.CHECKBOX
    }]
  }, {
    type: "ACCESS",
    title: _$$t("admin_filters.section_headers.access"),
    filters: [{
      type: "discoverabilityFilter",
      label: _$$t("admin_filters.filter_labels.discoverability"),
      filterComponent: km.SELECT,
      options: [{
        display: _$$t("admin_filters.generic_value.all"),
        value: null
      }, {
        display: _$$t("admin_filters.filter_values.visible"),
        value: Fb.ORG_BROWSABLE
      }, {
        display: _$$t("admin_filters.filter_values.hidden"),
        value: Fb.HIDDEN
      }]
    }]
  }];
  let ti = eJ || eH ? jsxs(_$$Y, {
    width: "hug-contents",
    children: [jsx($n, {
      iconPrefix: jsx(_$$e2, {}),
      variant: "primary",
      onClick: e1,
      "data-onboarding-key": Pc,
      children: jsx(_$$E, {
        children: _$$tx("teams_table.create_team")
      })
    }), eY && jsx($n, {
      onClick: e2,
      children: jsx(_$$E, {
        children: _$$tx("teams_table.assign_teams")
      })
    }), jsx(Me, {
      "aria-label": _$$t("members_table.csv_export.get_csv"),
      onClick: e4,
      variant: "secondary",
      trackingProperties: {
        action: "Export CSV"
      },
      htmlAttributes: {
        "data-testid": "teams-get-CSV-button"
      },
      children: jsx(_$$v, {})
    })]
  }) : jsxs(_$$Y, {
    width: "hug-contents",
    children: [jsx($n, {
      iconPrefix: jsx(_$$e2, {}),
      onClick: e1,
      "data-onboarding-key": Pc,
      children: _$$tx("teams_table.team")
    }), eY && jsx($n, {
      onClick: e2,
      children: jsx(_$$E, {
        children: _$$tx("teams_table.assign_teams")
      })
    }), jsx($z, {
      iconPrefix: jsx(_$$v, {}),
      onClick: e4,
      trackingProperties: {
        action: "Export CSV"
      },
      children: _$$tx("teams_table.csv_export.get_csv")
    })]
  });
  _$$h(() => {
    onRightActionsChange?.(ti);
  });
  return jsxs(Fragment, {
    children: [!eH && !getFeatureFlags().ff_a11y_page_tab_fix && jsx(_$$K, {
      title: eJ ? _$$O2(J7.CONTENT) : _$$O2(J7.TEAMS),
      rightActions: eJ ? void 0 : ti
    }), eJ && !getFeatureFlags().ff_a11y_page_tab_fix && jsx(_$$b, {
      tab: J7.CONTENT,
      selectedSecondaryTab: SN.TEAMS,
      rightActions: ti
    }), eH && jsx(_$$m, {
      selectedSecondaryTab: m2.TEAMS,
      rightActions: ti
    }), jsx(Cj, {
      actionBar: e => {
        let t = new Set(e.map(e => e.id));
        if (et && null === totalSelectable) return jsx("div", {
          style: sx.w150.$,
          children: jsx(Wi, {
            className: _$$s.h12.w150.$,
            animationType: JR.SHIMMER_ON_MENU
          })
        });
        let a = !1;
        if (et && null !== totalSelectable && (a = isLoading), a && status === _$$r.LOADING) return jsx("div", {
          style: sx.w150.$,
          children: jsx(Wi, {
            className: _$$s.h12.w150.$,
            animationType: JR.SHIMMER_ON_MENU
          })
        });
        let s = e;
        if (a) {
          let e = new Set(tt.map(e => e.id).filter(e => !t.has(e)));
          s = _teams2.filter(t => !e.has(t.id));
        }
        return jsx(ta, {
          workspacesCanMoveTo: eQ,
          selectedTeams: s,
          teamRoleRequests,
          teamPendingTransfers: el,
          pendingTransferRequests: ed,
          onRevokeTransferRequestSuccess: ec,
          onViewerJoinTeam,
          onViewerLeaveTeam
        });
      },
      actionBarClassName: "paginated_teams_table--actionBar--9krd2",
      columns: e9,
      emptyContent: jsx(_$$p, {
        children: (() => {
          let e = jsxs("span", {
            children: [_$$tx("teams_table.your_organization_does_not_have_any_teams_yet"), " ", jsx($n, {
              variant: "link",
              onClick: e1,
              children: _$$tx("teams_table.create_one")
            })]
          });
          let t = jsxs("span", {
            children: [_$$t("teams_table.no_teams_to_show"), " ", jsx($n, {
              variant: "link",
              onClick: () => {
                onFilter({
                  orgAccessFilter: null,
                  discoverabilityFilter: null,
                  orphanedTeamFilter: !1,
                  teamMembershipFilter: null,
                  workspaceFilter: "workspace" === er ? filters.workspaceFilter : null
                });
              },
              children: _$$tx("multi_select_list.reset_filters")
            })]
          });
          let a = _$$tx("teams_table.no_search_results");
          let s = filters.orgAccessFilter || filters.discoverabilityFilter || filters.teamMembershipFilter || filters.orphanedTeamFilter || filters.workspaceFilter && "workspace" !== er;
          return s && searchQuery ? 0 === lastFilterAction ? a : t : s ? t : searchQuery ? a : e;
        })()
      }),
      getItemKey: e => e.id,
      getTotalSelected: et && null !== totalSelectable ? (e, t) => totalSelectable - (t.length - e.length) : void 0,
      hasNewScrollContext: !0,
      isBannerHeightDynamic: !0,
      isLoading,
      itemTypeContext: {
        itemType: "team",
        getSelectedCountString: e => et && (!totalSelectable || status !== _$$r.SUCCESS) ? "" : _$$t("multi_select_list.selected_count_team", {
          numSelected: e
        })
      },
      items: tt,
      minContentWidth: parsePxInt(YEj),
      onFetchMore,
      onSetSortState: onSort,
      onToggleSelectAll: e => e ? ea(null) : ea(new Date().toISOString()),
      sortState,
      stickyContent: jsxs(Fragment, {
        children: [eH && jsx(_$$p2, {
          children: jsx(e_, {})
        }), jsxs("div", {
          className: "paginated_teams_table--menuBar--maI-E multi_select_list--menuBar--8xNGR",
          children: [jsxs("div", {
            className: cE,
            children: [jsx("div", {
              className: _$$s.pr8.$,
              children: jsx(y2, {
                onChange: onSearch,
                query: searchQuery,
                clearSearch: () => {
                  onSearch("");
                },
                placeholder: _$$t("teams_table.search_teams_with_ellipsis")
              })
            }), !getFeatureFlags().ff_new_filters_wsbg && jsxs(Fragment, {
              children: [jsx(_$$y, {
                selectedWorkspaceId: filters.workspaceFilter,
                onFilterUpdate: e => onFilter({
                  workspaceFilter: e
                }),
                getCount: e => e$.workspaces?.[e] ?? 0
              }), jsx(bv, {
                dropdownShown,
                dropdownType: "FILTER_DISCOVERABILITY_DROPDOWN",
                selectedValue: filters.discoverabilityFilter,
                getDisplayText: e => _$$e$()[e],
                getSelectedDisplayText: e => {
                  switch (e) {
                    case Fb.ORG_BROWSABLE:
                      return _$$t("teams_table.discoverability_filter.visible");
                    case Fb.HIDDEN:
                      return _$$t("teams_table.discoverability_filter.hidden");
                    default:
                      return _$$t("teams_table.discoverability_filter.all");
                  }
                },
                getCount: e => e$.org_access[e === Fb.ORG_BROWSABLE ? FAccessLevelType.PRIVATE : FAccessLevelType.SECRET],
                updateFilter: e => onFilter({
                  discoverabilityFilter: e
                }),
                values: Object.values(Fb),
                dispatch: en
              }), jsx(bv, {
                dropdownShown,
                dropdownType: "FILTER_TEAM_MEMBERSHIP_DROPDOWN",
                selectedValue: filters.teamMembershipFilter,
                getDisplayText: e => tO()[e],
                getSelectedDisplayText: e => {
                  switch (e) {
                    case ig.JOINED:
                      return _$$t("teams_table.membership_filter.my_teams_label");
                    case ig.NOT_JOINED:
                      return _$$t("teams_table.membership_filter.not_my_teams_label");
                    default:
                      return _$$t("teams_table.membership_filter.all");
                  }
                },
                getCount: e => e$.team_membership[e],
                updateFilter: e => onFilter({
                  teamMembershipFilter: e
                }),
                values: Object.values(ig),
                dispatch: en
              }), jsxs(jm, {
                className: $u,
                onClick: () => onFilter({
                  orphanedTeamFilter: !filters.orphanedTeamFilter
                }),
                trackingProperties: {
                  filterType: "OrphanedTeamFilter",
                  isFilterEnabled: !filters.orphanedTeamFilter
                },
                children: [jsx(tB, {
                  checked: filters.orphanedTeamFilter,
                  onChange: lQ
                }), _$$tx("teams_table.teams_without_owners")]
              })]
            })]
          }), jsxs("div", {
            className: ld,
            children: [!!getFeatureFlags().ff_new_filters_wsbg && jsx(_$$W, {
              analyticsPageName: "teams",
              ariaLabel: _$$t("admin_filters.trigger_button_aria_label.teams"),
              currentFilters: (t = e.filters, {
                workspaceFilter: eG ? t.workspaceFilter : null,
                orgAccessFilter: t.orgAccessFilter,
                orphanedTeamFilter: t.orphanedTeamFilter ? "on" : null,
                teamMembershipFilter: t.teamMembershipFilter,
                discoverabilityFilter: t.discoverabilityFilter
              }),
              filterCounts: {
                workspaceFilter: e$.workspaces,
                orgAccessFilter: e$.org_access,
                teamMembershipFilter: e$.team_membership,
                discoverabilityFilter: {
                  [Fb.ORG_BROWSABLE]: e$.org_access[FAccessLevelType.PRIVATE],
                  [Fb.HIDDEN]: e$.org_access[FAccessLevelType.SECRET]
                },
                orphanedTeamFilter: {}
              },
              filterSections: ts,
              onApply: e => {
                let {
                  workspaceFilter,
                  discoverabilityFilter,
                  teamMembershipFilter,
                  orphanedTeamFilter
                } = e;
                onFilter({
                  workspaceFilter: eG ? workspaceFilter.current : filters.workspaceFilter,
                  discoverabilityFilter: discoverabilityFilter.current,
                  teamMembershipFilter: teamMembershipFilter.current,
                  orphanedTeamFilter: "on" === orphanedTeamFilter.current
                });
              },
              suggestedFilters: tn,
              rowFilters: []
            }), e5 && jsx($z, {
              iconPrefix: jsx(_$$A, {}),
              variant: "ghost",
              onClick: () => {
                en(_$$to({
                  type: tN,
                  data: {
                    workspaceId: eY
                  }
                }));
              },
              children: _$$tx("teams_table.enterprise.edit_default_teams")
            })]
          })]
        })]
      })
    }), eK ? jsx(_$$p2, {
      children: jsx(ee, {})
    }) : null]
  });
}
var tM = (e => (e[e.SEARCH = 0] = "SEARCH", e[e.FILTER = 1] = "FILTER", e))(tM || {});
export function $$tP0(e) {
  let {
    dropdownShown,
    teamRoleRequests,
    user,
    selectedWorkspaceId,
    onRightActionsChange
  } = e;
  let b = wA();
  let [v, f] = useState({
    workspaceFilter: selectedWorkspaceId ?? null,
    orgAccessFilter: null,
    orphanedTeamFilter: !1,
    teamMembershipFilter: null,
    discoverabilityFilter: null
  });
  let [j, y] = useState(1);
  let [w, k] = useState("");
  let [E, C] = useState({});
  let [S, N] = useState({
    columnName: Kq.NAME,
    isReversed: !1
  });
  let {
    teams,
    optimisticTeams,
    fetchMore,
    status,
    addOptimisticIds
  } = Ki({
    searchQuery: w,
    filters: v,
    sortConfig: S,
    membersMap: E,
    isEndUserSurface: !1
  });
  let L = useCallback(e => {
    N(t => ({
      columnName: e,
      isReversed: t.columnName === e && !t.isReversed
    }));
  }, [N]);
  let D = useCallback(e => {
    f({
      ...v,
      ...e
    });
    y(1);
  }, [f, v, y]);
  let M = useCallback(e => {
    k(e);
    y(0);
  }, [k, y]);
  _$$h(() => {
    b(Rw());
  });
  useEffect(() => {
    selectedWorkspaceId && f(e => ({
      ...e,
      workspaceFilter: selectedWorkspaceId
    }));
  }, [selectedWorkspaceId]);
  let {
    orgTeamCountsViewResult
  } = function (e, t, a, n, i, r, l, u) {
    let [m, p] = useState(Xm());
    let g = useRef(null);
    let h = () => {
      g.current && (clearTimeout(g.current), g.current = null);
    };
    let x = useCallback(async () => await Eh.getOrgTeamsFilterCounts({
      orgId: e,
      searchQuery: t,
      orgAccess: a || void 0,
      teamsWithoutOwners: n || void 0,
      teamsMemberOf: i,
      workspaceId: r || void 0,
      sortBy: void 0,
      sortOrder: void 0
    }), [e, t, a, n, i, r, void 0, void 0]);
    let b = _$$J(() => (h(), x()), [x]);
    useEffect(() => {
      xj(b) ? p(gB(b.value.data.meta)) : ok(b) ? p(_$$e([])) : p(Xm());
    }, [b]);
    return {
      orgTeamCountsViewResult: m
    };
  }(e.org.id, w, _$$R2(v.orgAccessFilter, v.discoverabilityFilter), v.orphanedTeamFilter, null !== v.teamMembershipFilter ? v.teamMembershipFilter === ig.JOINED : void 0, v.workspaceFilter);
  let U = status !== _$$r.SUCCESS || !!fetchMore;
  return jsx(tL, {
    addOptimisticIds,
    dropdownShown,
    filters: v,
    isLoading: U,
    lastFilterAction: j,
    onFetchMore: fetchMore,
    onFilter: D,
    onRightActionsChange,
    onSearch: M,
    onSort: L,
    onViewerJoinTeam: e => {
      E[e] ? E[e] += 1 : E[e] = 1;
      C(E);
    },
    onViewerLeaveTeam: e => {
      E[e] ? E[e] -= 1 : E[e] = -1;
      C(E);
    },
    optimisticTeams,
    org: e.org,
    orgTeamCountsViewResult,
    searchQuery: w,
    sortState: S,
    teamRoleRequests,
    teams,
    user
  });
}
export const G = $$tP0;