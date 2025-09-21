import { jsx, jsxs } from "react/jsx-runtime";
import { useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { dr } from "../figma_app/643789";
import { customHistory } from "../905/612521";
import { isCommandOrShift } from "../905/63728";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { FlashActions } from "../905/573154";
import { trackNavTreeClicked } from "../figma_app/976345";
import { RQ } from "../figma_app/544879";
import { h as _$$h } from "../905/857431";
import { A as _$$A } from "../905/351112";
import { W as _$$W } from "../figma_app/101188";
import { C as _$$C } from "../905/314082";
import { mc } from "../905/820960";
import { selectViewAction, hideDropdownAction } from "../905/929976";
import { showModalHandler } from "../905/156213";
import { GR } from "../figma_app/330108";
import { trackTeamEvent } from "../figma_app/314264";
import { BK } from "../905/848862";
import { useCurrentUserOrgId } from "../905/845253";
import { getSelectedView } from "../figma_app/386952";
import { ViewTypeEnum } from "../figma_app/471068";
import { getTeamUrl } from "../figma_app/630077";
import { ViewMode } from "../figma_app/756995";
import { teamAPIClient } from "../905/834575";
import { $ as _$$$ } from "../905/442144";
import { H as _$$H } from "../905/154301";
import { p as _$$p } from "../905/195198";
export function $$P0(e) {
  let t = useCurrentUserOrgId();
  let i = useSelector(e => e.teams);
  let P = getSelectedView();
  let O = e.orgTeams;
  let D = useDispatch();
  let {
    showing,
    show,
    data
  } = BK(RQ);
  let j = useCallback((e, t) => {
    show({
      data: {
        team: e[0],
        targetRect: {
          top: t.clientY,
          right: t.clientX,
          bottom: t.clientY,
          left: t.clientX,
          width: 1,
          height: 1
        }
      }
    });
  }, [show]);
  let U = e => GR(D, e)();
  let B = e => {
    D(showModalHandler({
      type: _$$p,
      data: {
        teamId: e.id
      }
    }));
  };
  let V = useCallback(e => {
    D(showModalHandler({
      type: _$$h(),
      data: {
        team: e
      }
    }));
  }, [D]);
  let [G, z] = useState([]);
  let H = dr(G);
  let W = data?.team?.id;
  let K = W ? H.teams.unwrapOr({})[W] : void 0;
  let Y = useCallback((n, r) => {
    if (!H.teams.transform(e => {
      let t = e[n.id];
      return !t || t.canView;
    }).unwrapOr(!0)) {
      D(showModalHandler({
        type: _$$$,
        data: {
          team: n
        }
      }));
      return;
    }
    if (trackTeamEvent("file_browser_team_click", n.id, {
      teams: i,
      orgTeams: e.orgTeamStatus ? {
        status: e.orgTeamStatus,
        teams: O
      } : void 0
    }, {
      selectedView: "recentsAndSharing" === P.view ? P.tab || ViewTypeEnum.RECENTLY_VIEWED : P.view,
      viewMode: "grid"
    }), isCommandOrShift(r)) {
      let e = getTeamUrl(n.id, t);
      customHistory.redirect(e, "_blank");
      r.stopPropagation();
      return;
    }
    D(trackNavTreeClicked({
      clickedResourceType: "team",
      resourceIdOrKey: n.id
    }));
    D(selectViewAction({
      view: "team",
      teamId: n.id
    }));
    r.stopPropagation();
    r.preventDefault();
  }, [t, D, P, H, e.orgTeamStatus, O, i]);
  let q = useCallback(e => {
    if (1 !== e.length) return;
    let t = e[0];
    if (!H.teams.data?.[t.id]?.canAdmin) return;
    D(hideDropdownAction());
    let i = !!t.org_id;
    let n = e => {
      D(showModalHandler({
        type: _$$H,
        data: {
          team: t,
          subscriptionStatus: e
        }
      }));
    };
    i ? n(!0) : teamAPIClient.getSubscriptionStatus({
      teamId: t.id
    }).then(({
      data: e
    }) => {
      n(e.meta && e.meta.subscription_will_renew);
    }).catch(e => {
      e.data?.message && D(FlashActions.error(e.data.message));
    });
  }, [D, H]);
  return !e.orgTeams || Array.isArray(e.orgTeams) && !e.orgTeams.length ? jsx("div", {
    className: "teams_items_view--emptyContainer--Yuw-U text--fontPos11--2LvXf text--_fontBase--QdLsd",
    children: e.emptyView ?? jsx(_$$C, {
      onCreateTeam: e.onCreateTeam
    })
  }) : jsxs("div", {
    className: cssBuilderInstance.mb32.mx32.$,
    children: [jsx(_$$A, {
      getAriaLabel: e => e.name,
      gridViewProps: {
        tileBorderRadius: 16,
        nestedFocus: !1,
        renderTile: (e, t, {
          isSelected: i,
          isHovered: r
        }) => jsx(mc, {
          team: e,
          teamPermissions: H.teams.data?.[e.id],
          onJoin: U,
          onLeave: B,
          inItemsView: !0,
          isHovered: r,
          isSelected: i,
          onChildFocusChange: t
        }, e.id)
      },
      handleContextMenu: j,
      handleDeleteKey: q,
      handleOpenItem: Y,
      isDraggable: !1,
      items: O,
      multiselectDisabled: !0,
      updateRenderedItems: z,
      viewType: ViewMode.GRID
    }), showing && K && jsx(_$$W, {
      team: data.team,
      onRenameClick: V,
      selectedTeamPermissions: K
    })]
  });
}
export const w = $$P0;