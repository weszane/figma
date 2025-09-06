import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { _, S } from "../figma_app/490799";
import { s as _$$s } from "../cssbuilder/589278";
import { renderI18nText } from "../905/303541";
import { fu } from "../figma_app/831799";
export function $$l0() {
  return jsx(fu, {
    name: "Starter Drafts View Only Banner",
    children: jsx(_, {
      dataTestId: "starter-drafts-view-only-banner",
      color: S.INFORMATION,
      text: jsxs(Fragment, {
        children: [jsx("p", {
          className: _$$s.fontSemiBold.$,
          children: renderI18nText("drafts_move_banner.you_re_working_in_drafts_on_a_free_starter_team")
        }), jsx("p", {
          children: renderI18nText("drafts_move_banner.on_free_teams_drafts_are_view_only")
        })]
      })
    })
  });
}
export const t = $$l0;