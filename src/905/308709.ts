import { jsx, jsxs } from "react/jsx-runtime";
import { N_ } from "../figma_app/637027";
import { B } from "../905/714743";
import { renderI18nText } from "../905/303541";
import { e1, $F, et } from "../905/305240";
import { A } from "../svg/619883";
export let $$d1 = e => e.sharing_restricted;
export function $$c0({
  resourceType: e
}) {
  let t;
  let i = "support+restricted@figma.com";
  let d = jsx(N_, {
    target: "_blank",
    href: `mailto:${i}`,
    className: e1,
    trusted: !0,
    children: i
  });
  switch (e) {
    case "file":
      t = renderI18nText("file_permissions_modal.invite_user_sharing_restricted", {
        supportSharingRestrictedEmail: d
      });
      break;
    case "folder":
      t = renderI18nText("folder_permissions_modal.invite_user_sharing_restricted", {
        supportSharingRestrictedEmail: d
      });
      break;
    case "team":
      t = renderI18nText("team_view.team_permissions_modal.invite_user_sharing_restricted", {
        supportSharingRestrictedEmail: d
      });
  }
  return jsxs("div", {
    className: $F,
    children: [jsx(B, {
      className: et,
      svg: A
    }), jsx("p", {
      children: t
    })]
  });
}
export const X = $$c0;
export const r = $$d1;