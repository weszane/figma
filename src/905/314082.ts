import { jsxs, jsx } from "react/jsx-runtime";
import { Button } from "../905/521428";
import { x } from "../905/587214";
import { renderI18nText } from "../905/303541";
import { p$, _U } from "../figma_app/697906";
export function $$l0(e) {
  return jsxs("div", {
    className: p$,
    children: [jsx("div", {
      className: _U,
      children: renderI18nText("team_tile.no_teams.title")
    }), e.onCreateTeam && jsxs("div", {
      className: "x78zum5 xdt5ytf x6s0dn4 xou54vl",
      children: [jsx("p", {
        children: renderI18nText("team_tile.no_teams.info")
      }), jsx(Button, {
        onClick: e.onCreateTeam,
        variant: "secondary",
        iconPrefix: jsx(x, {}),
        children: renderI18nText("team_tile.no_teams.create_team_button")
      })]
    })]
  });
}
export const C = $$l0;