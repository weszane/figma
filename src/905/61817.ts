import { jsxs, jsx } from "react/jsx-runtime";
import { K } from "../905/443068";
import { L } from "../905/704296";
import { s as _$$s } from "../cssbuilder/589278";
import { getI18nString } from "../905/303541";
import { AutoLayout } from "../905/470281";
import { H8 } from "../905/590952";
import { TextWithTruncation } from "../905/984674";
import { o1 } from "../figma_app/10554";
export function $$p0({
  profile: e,
  profileHandle: t,
  onClick: i,
  dataTestId: p
}) {
  let {
    isPending,
    img_url,
    name,
    entity_type
  } = e;
  return jsxs(AutoLayout, {
    direction: "horizontal",
    spacing: 8,
    horizontalAlignItems: "space-between",
    dataTestId: p,
    children: [jsxs(AutoLayout, {
      children: [jsx("div", {
        className: _$$s.$$with({
          opacity0_5: isPending
        }).$,
        children: jsx(H8, {
          user: {
            imageUrl: img_url,
            name
          }
        })
      }), jsxs(AutoLayout, {
        direction: "vertical",
        spacing: 0,
        verticalAlignItems: "center",
        children: [jsxs(TextWithTruncation, {
          color: isPending ? "tertiary" : void 0,
          children: [(e => {
            switch (entity_type) {
              case o1.TEAM:
                return getI18nString("community.publishing.team_name", {
                  team: e
                });
              case o1.ORG:
                return getI18nString("community.publishing.org_name", {
                  org: e
                });
              case o1.USER:
                return e;
            }
          })(name), " ", isPending && getI18nString("community.publish.pending")]
        }), t && jsxs(TextWithTruncation, {
          color: "tertiary",
          children: ["@", t]
        })]
      })]
    }), i && jsx(K, {
      "aria-label": getI18nString("general.close"),
      onClick: i,
      children: jsx(L, {})
    })]
  });
}
export const A = $$p0;