import { jsx } from "react/jsx-runtime";
import { S } from "../905/274480";
import { J } from "../905/270045";
import { getI18nString } from "../905/303541";
import { A as _$$A } from "../905/794518";
import { ge } from "../905/599844";
export function $$d0({
  isCommentsEnabled: e,
  onChange: t
}) {
  return jsx(_$$A, {
    label: getI18nString("community.publishing.comments"),
    children: jsx("div", {
      className: ge,
      children: jsx(S, {
        checked: e,
        label: jsx(J, {
          children: getI18nString("community.publishing.allow_comments_from_community_members")
        }),
        onChange: t
      })
    })
  });
}
export const A = $$d0;