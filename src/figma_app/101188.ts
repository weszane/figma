import { jsx } from "react/jsx-runtime";
import { useSelector, useDispatch } from "react-redux";
import { parsePxInt } from "../figma_app/783094";
import { FlashActions } from "../905/573154";
import { getI18nString } from "../905/303541";
import { o as _$$o } from "../figma_app/29593";
import { s as _$$s2 } from "../905/411990";
import { RI, _S } from "../905/315794";
import { S as _$$S } from "../figma_app/11182";
import { oB } from "../905/929976";
import { showModalHandler } from "../905/156213";
import { GR } from "../figma_app/330108";
import { DQ, Pw } from "../figma_app/121751";
import { adminPermissionConfig } from "../905/654645";
import { setupShadowRead } from "../figma_app/391338";
import { FAccessLevelType } from "../figma_app/191312";
import { YP, gO } from "../figma_app/88768";
import { getPermissionsState, canAdminOrg } from "../figma_app/642025";
import { AccessLevelEnum } from "../905/557142";
import { getTeamUrl } from "../figma_app/630077";
import { $ } from "../905/834575";
import { j } from "../905/834956";
import { H } from "../905/154301";
import { p as _$$p } from "../905/195198";
import { tgj } from "../figma_app/27776";
export function $$C0() {
  let e = useSelector(e => getPermissionsState(e));
  let t = useSelector(e => e.selectedView);
  let r = useSelector(e => e.teamRoleRequests);
  let n = useDispatch();
  let l = _$$s2();
  return ({
    onRenameClick: i,
    onChangeTeamIconClick: d,
    selectedTeamPermissions: v,
    team: C
  }) => {
    let w = () => {
      n(oB());
      n(showModalHandler({
        type: _$$p,
        data: {
          teamId: C.id
        }
      }));
    };
    let O = GR(n, C.id);
    let R = GR(n, C.id, AccessLevelEnum.ADMIN);
    let L = e => {
      n(showModalHandler({
        type: _$$p,
        data: {
          teamId: e.id
        }
      }));
    };
    let P = () => {
      n(oB());
      let e = !!C.org_id;
      let t = e => {
        n(showModalHandler({
          type: H,
          data: {
            team: C,
            subscriptionStatus: e
          }
        }));
      };
      e ? t(!0) : $.getSubscriptionStatus({
        teamId: C.id
      }).then(({
        data: e
      }) => {
        t(e.meta && e.meta.subscription_will_renew);
      }).catch(e => {
        e.data?.message && n(FlashActions.error(e.data.message));
      });
    };
    let D = e.roles.byTeamId[C.id] || {};
    let k = Object.keys(D).filter(e => !D[e].pending).length;
    let M = setupShadowRead({
      oldValue: canAdminOrg(C.org_id, e),
      newValue: v.canAdminOrg,
      label: adminPermissionConfig.TeamContextMenuInTeamTiles.canAdminOrg,
      enableFullRead: DQ(Pw.GROUP_7),
      contextArgs: {
        currentTeamId: e.currentTeamId,
        currentUserOrgId: e.currentUserOrgId,
        selectedView: t?.view ?? null,
        teamOrgId: C.org_id
      },
      maxReports: 5
    });
    let F = C?.org_access === FAccessLevelType.PUBLIC || k > 1;
    let j = window.innerWidth <= parsePxInt(tgj);
    let U = [];
    if (U.push({
      displayText: getI18nString("file_browser.copy_link"),
      onClick: () => {
        let e = getTeamUrl(C.id, C.org_id);
        n(_$$S({
          url: e,
          linkType: "team"
        }));
      }
    }), "search" === t.view && C.org_id !== e.currentUserOrgId) return [{
      key: "search",
      items: U
    }];
    j && U.push({
      displayText: getI18nString("file_browser.team.invite"),
      onClick: () => {
        l({
          teamId: C.id,
          canAdmin: v.canAdmin
        });
      }
    });
    v.canAdmin && U.push({
      displayText: getI18nString("team_view.toolbar.rename"),
      onClick: () => {
        n(oB());
        i && i(C);
      }
    });
    v.canAdmin && d && U.push({
      displayText: getI18nString("team_view.toolbar.change_icon"),
      onClick: () => {
        n(oB());
        d && d(C);
      }
    });
    let B = [{
      key: "default",
      items: U
    }];
    let G = (() => {
      let t = [];
      if (v.isInTeam) F && t.push({
        displayText: getI18nString("team_view.toolbar.leave_team"),
        onClick: w
      });else if (C.org_id) {
        let i = YP(C, r[C.id], e, M);
        null != i && i !== gO.CLICK_JOIN && t.push({
          displayText: RI({
            type: i,
            overrideLeaveText: getI18nString("teams_table.leave_team")
          }),
          onClick: () => {
            _S({
              type: i,
              team: C,
              teamRoleRequest: r[C.id],
              onLeave: L,
              onJoin: O,
              onJoinAsAdmin: R,
              dispatch: n
            });
          }
        });
      }
      v.canDelete && t.push({
        displayText: getI18nString("team_view.toolbar.delete_team"),
        onClick: P
      });
      return t;
    })();
    G.length > 0 && B.push({
      key: "admin",
      items: G
    });
    return B;
  };
}
export function $$w1({
  className: e,
  team: t,
  onRenameClick: r,
  onChangeTeamIconClick: a,
  selectedTeamPermissions: s
}) {
  let o = useSelector(e => e.dropdownShown);
  let d = useDispatch();
  let c = $$C0();
  if (!s) return null;
  let u = c({
    team: t,
    onRenameClick: r,
    onChangeTeamIconClick: a,
    selectedTeamPermissions: s
  });
  return jsx(j, {
    className: e,
    items: _$$o(u),
    parentRect: o?.data?.targetRect,
    showPoint: !1,
    lean: "right",
    dispatch: d,
    onSelectItem: (e, t) => {
      e.callback && e.callback("", {}, d, t);
    },
    autofocusPrevOnDismount: !0
  });
}
export const F = $$C0;
export const W = $$w1;