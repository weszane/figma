import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useMemo, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { renderI18nText, getI18nString } from "../905/303541";
import { TeamAvatar } from "../905/590952";
import { In } from "../905/672640";
import { trackNavTreeClicked } from "../figma_app/976345";
import { W as _$$W } from "../905/307631";
import { a as _$$a } from "../905/332662";
import { useFavoriteResource } from "../905/347011";
import { H as _$$H } from "../905/474029";
import { DN, ox } from "../figma_app/909778";
import { selectViewAction } from "../905/929976";
import { showModalHandler } from "../905/156213";
import { trackTeamEvent } from "../figma_app/314264";
import { isReduxDeprecationCutover, ConfigGroups } from "../figma_app/121751";
import { useShadowRead, adminPermissionConfig } from "../figma_app/391338";
import { selectPermissionsState } from "../figma_app/212807";
import { FEntityType, FAccessLevelType } from "../figma_app/191312";
import { isLoading } from "../905/18797";
import { x as _$$x } from "../905/695363";
import { p9 } from "../figma_app/88768";
import { hasViewerRoleAccessOnTeam, canMemberOrg, canManageNonSecretOrgTeam } from "../figma_app/642025";
import { ViewTypeEnum } from "../figma_app/471068";
import { KindEnum } from "../905/129884";
import { $ as _$$$ } from "../905/442144";
import { H as _$$H2 } from "../905/209153";
import { Ys } from "../figma_app/697906";
import { A as _$$A } from "../5724/240681";
export function $$O2(e) {
  let t;
  let i = useDispatch();
  let O = useSelector(e => e.currentUserOrgId);
  let D = selectPermissionsState();
  let L = _$$x();
  let F = useSelector(e => e.orgById);
  let M = useSelector(({
    selectedView: e
  }) => e);
  let j = useSelector(e => e.loadingState);
  let U = e.team.member_count ?? 0;
  let B = useFavoriteResource(e.team.id, FEntityType.TEAM, O);
  let V = useMemo(() => "loaded" === B.status && void 0 !== B.favorite, [B]);
  let G = useShadowRead({
    label: adminPermissionConfig.TeamTile.isCurrentUserInTeam,
    oldValue: hasViewerRoleAccessOnTeam(e.team.id, D),
    newValue: e.teamPermissions?.isInTeam ?? !1,
    newValueReady: void 0 !== e.teamPermissions,
    enableFullRead: isReduxDeprecationCutover(ConfigGroups.GROUP_7),
    contextArgs: {
      teamId: e.team.id
    }
  });
  let z = canMemberOrg(e.team.org_id, D) && e.team.org_access === FAccessLevelType.PUBLIC;
  let H = canManageNonSecretOrgTeam(e.team, D, D.user?.id);
  let W = e.canUserViewTeam ?? (G || z || H);
  let K = useShadowRead({
    oldValue: W,
    newValue: e.teamPermissions?.canView ?? !1,
    newValueReady: void 0 !== e.teamPermissions,
    enableFullRead: isReduxDeprecationCutover(ConfigGroups.GROUP_7),
    label: adminPermissionConfig.TeamTile.canUserViewTeam,
    contextArgs: {
      teamId: e.team.id,
      canUserViewTeam: e.canUserViewTeam,
      teamOrgId: e.team.org_id,
      teamOrgAccess: e.team.org_access,
      isCurrentUserInTeam: G,
      userCanViewOpenTeam: z,
      userCanManageOrgTeam: H
    }
  });
  let [Y, q] = useState(!1);
  let $ = e => {
    i(showModalHandler({
      type: _$$$,
      data: {
        team: e
      }
    }));
  };
  let Z = useCallback((t, n, r) => {
    if (e.team) {
      let a = {
        team: e.team,
        entrypoint: "org_browse_teams_view",
        sectionId: r,
        favoriteId: n
      };
      t ? i(DN(a)) : i(ox(a));
    }
  }, [i, e.team]);
  let X = "search" === M.view;
  let Q = e.team.org_id && F[e.team.org_id] || e.team.id && L[e.team.id];
  let J = renderI18nText("team_tile.members_count", {
    numMembers: U
  });
  let ee = jsxs("div", {
    className: cssBuilderInstance.flex.flexRow.itemsCenter.$,
    children: [X && Q && jsx(_$$H2, {
      entityId: Q.id,
      entityName: Q.name,
      imgUrl: Q.img_url
    }), G && jsxs(Fragment, {
      children: [renderI18nText("team_list.org_join_status_joined"), jsx("span", {
        children: "\xa0\xb7\xa0"
      })]
    }), jsx("span", {
      children: J
    })]
  });
  let et = e.selectedTeamId === e.team.id;
  let ei = jsx(_$$W, {
    team: e.team,
    isCurrentUserInTeam: G,
    isLoading: isLoading(j, p9(e.team.id)),
    onOpenTeam: () => {
      if (!K) {
        $(e.team);
        return;
      }
      trackTeamEvent("file_browser_team_click", e.team.id, D, {
        selectedView: "recentsAndSharing" === M.view ? M.tab || ViewTypeEnum.RECENTLY_VIEWED : M.view,
        viewMode: "grid"
      });
      i(trackNavTreeClicked({
        clickedResourceType: "team",
        resourceIdOrKey: e.team.id
      }));
      i(selectViewAction({
        view: "team",
        teamId: e.team.id
      }));
    },
    onJoin: e.onJoin,
    onLeave: e.onLeave,
    spinnerClassName: Ys,
    isCardActive: e.isHovered || e.isSelected || Y
  });
  let en = jsxs("div", {
    className: cssBuilderInstance.flex.$,
    children: [jsx("div", {
      className: e.isHovered || e.isSelected || Y ? cssBuilderInstance.opacity1.$ : cssBuilderInstance.opacity0.$,
      children: ei
    }), O && K && jsx("div", {
      className: "x1iog12x",
      children: jsx(_$$H, {
        setFavorite: Z,
        favoriteType: FEntityType.TEAM,
        resourceId: e.team.id,
        orgId: e.team.org_id
      })
    })]
  });
  e.team.org_access === FAccessLevelType.PRIVATE ? t = getI18nString("file_browser.team_header.closed_team_header") : e.team.org_access === FAccessLevelType.SECRET && (t = getI18nString("file_browser.team_header.secret_team_header"));
  let er = e.team.org_access === FAccessLevelType.PRIVATE ? getI18nString("file_browser.team_header.closed_team_subtitle") : e.team.org_access === FAccessLevelType.SECRET ? getI18nString("file_browser.team_header.secret_team_subtitle") : void 0;
  let ea = e.team.org_access === FAccessLevelType.PRIVATE || e.team.org_access === FAccessLevelType.SECRET ? jsx("div", {
    className: cssBuilderInstance.mr4.$,
    style: {
      marginLeft: "4px"
    },
    "data-tooltip-type": KindEnum.TEXT,
    "data-tooltip": t,
    "data-tooltip-offset-y": -4,
    "data-tooltip-timeout-delay": 50,
    "data-tooltip-max-width": 200,
    "data-tooltip-subtext": er,
    children: jsx(In, {
      icon: "lock-16"
    })
  }) : void 0;
  return jsx(_$$a, {
    canView: K,
    footerLeft: ee,
    handleBlur: () => {
      q(!1);
      e.onChildFocusChange && e.onChildFocusChange();
    },
    handleFocus: () => {
      q(!0);
      e.onChildFocusChange && e.onChildFocusChange();
    },
    headerLeft: jsx(TeamAvatar, {
      team: e.team,
      size: 40,
      avatarSvg: _$$A
    }),
    headerRight: en,
    isCardActive: e.isHovered || e.isSelected || Y || V,
    isInItemsView: !0,
    isSelected: et,
    name: e.team.name,
    titleSubtitleRight: ea
  });
}
function D(e) {
  return null;
}
let $$L0 = D;
let $$F1 = D;
export const $b = $$L0;
export const h2 = $$F1;
export const mc = $$O2;