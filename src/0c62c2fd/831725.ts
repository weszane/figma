import { jsx } from "react/jsx-runtime";
import { useState } from "react";
import { sortByPropertyWithOptions } from "../figma_app/656233";
import { tx } from "../905/303541";
import { X } from "../0c62c2fd/409644";
import { useDispatch, useSelector } from "../vendor/514228";
import { kg } from "../figma_app/976345";
import { m3 } from "../905/315794";
import { a as _$$a } from "../905/332662";
import { sf } from "../905/929976";
import { _J } from "../figma_app/314264";
import { FC } from "../figma_app/212807";
import { G } from "../figma_app/471068";
import { Ro } from "../figma_app/805373";
import { rP } from "../figma_app/697906";
function x(e) {
  let [t, r] = useState(!1);
  let i = useDispatch();
  let n = useSelector(e => e.selectedView);
  let o = FC();
  let x = e.team;
  let b = () => {
    _J("file_browser_team_click", x.id, o, {
      selectedView: "recentsAndSharing" === n.view ? n.tab || G.RECENTLY_VIEWED : n.view,
      viewMode: "grid"
    });
    i(kg({
      clickedResourceType: "team",
      resourceIdOrKey: x.id
    }));
    i(sf({
      view: "team",
      teamId: x.id
    }));
  };
  let v = e.selectedTeamId === e.team.id;
  let y = t || v;
  return jsx(_$$a, {
    canView: !0,
    description: x.description,
    headerLeft: jsx(Ro, {
      className: rP,
      entity: x,
      size: 40
    }),
    headerRight: jsx(m3, {
      team: x,
      onLeave: e.onLeave,
      isCardActive: y
    }),
    isCardActive: y,
    isSelected: v,
    name: x.name,
    onClick: t => {
      1 === t.detail ? e.setSelectedTeamId(e.team.id) : 2 === t.detail && b();
    },
    onMouseOut: () => {
      r(!1);
    },
    onMouseOver: () => {
      r(!0);
    }
  });
}
export function $$b0(e) {
  let t = e.teams;
  sortByPropertyWithOptions(t, "name");
  let [r, l] = useState(void 0);
  return jsx(X, {
    emptyView: tx("team_tile.guest.no_teams.info", {
      orgName: e.orgName
    }),
    children: t.map(t => jsx(x, {
      team: t,
      onLeave: e.onLeave,
      selectedTeamId: r,
      setSelectedTeamId: l
    }, t.id))
  });
}
export const h = $$b0;