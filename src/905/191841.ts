import { jsx, jsxs } from "react/jsx-runtime";
import { useCallback, useState } from "react";
import { useSelector, useDispatch } from "../vendor/514228";
import { dr } from "../figma_app/643789";
import { Ay } from "../905/612521";
import { oJ } from "../905/63728";
import { s as _$$s } from "../cssbuilder/589278";
import { s as _$$s2 } from "../905/573154";
import { kg } from "../figma_app/976345";
import { RQ } from "../figma_app/544879";
import { h as _$$h } from "../905/857431";
import { A as _$$A } from "../905/351112";
import { W as _$$W } from "../figma_app/101188";
import { C as _$$C } from "../905/314082";
import { mc } from "../905/820960";
import { sf, oB } from "../905/929976";
import { showModalHandler } from "../905/156213";
import { GR } from "../figma_app/330108";
import { _J } from "../figma_app/314264";
import { BK } from "../905/848862";
import { dq } from "../905/845253";
import { _6 } from "../figma_app/386952";
import { G as _$$G } from "../figma_app/471068";
import { bL } from "../figma_app/630077";
import { XU } from "../figma_app/756995";
import { $ } from "../905/834575";
import { $ as _$$$ } from "../905/442144";
import { H as _$$H } from "../905/154301";
import { p as _$$p } from "../905/195198";
export function $$P0(e) {
  let t = dq();
  let i = useSelector(e => e.teams);
  let P = _6();
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
    if (_J("file_browser_team_click", n.id, {
      teams: i,
      orgTeams: e.orgTeamStatus ? {
        status: e.orgTeamStatus,
        teams: O
      } : void 0
    }, {
      selectedView: "recentsAndSharing" === P.view ? P.tab || _$$G.RECENTLY_VIEWED : P.view,
      viewMode: "grid"
    }), oJ(r)) {
      let e = bL(n.id, t);
      Ay.redirect(e, "_blank");
      r.stopPropagation();
      return;
    }
    D(kg({
      clickedResourceType: "team",
      resourceIdOrKey: n.id
    }));
    D(sf({
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
    D(oB());
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
    i ? n(!0) : $.getSubscriptionStatus({
      teamId: t.id
    }).then(({
      data: e
    }) => {
      n(e.meta && e.meta.subscription_will_renew);
    }).catch(e => {
      e.data?.message && D(_$$s2.error(e.data.message));
    });
  }, [D, H]);
  return !e.orgTeams || Array.isArray(e.orgTeams) && !e.orgTeams.length ? jsx("div", {
    className: "teams_items_view--emptyContainer--Yuw-U text--fontPos11--2LvXf text--_fontBase--QdLsd",
    children: e.emptyView ?? jsx(_$$C, {
      onCreateTeam: e.onCreateTeam
    })
  }) : jsxs("div", {
    className: _$$s.mb32.mx32.$,
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
      viewType: XU.GRID
    }), showing && K && jsx(_$$W, {
      team: data.team,
      onRenameClick: V,
      selectedTeamPermissions: K
    })]
  });
}
export const w = $$P0;