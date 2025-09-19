import { jsx } from "react/jsx-runtime";
import { Link } from "../905/438674";
import { getFeatureFlags } from "../905/601108";
import { renderI18nText } from "../905/303541";
import { sx } from "../905/941192";
export function $$l1(e) {
  if ("team" !== e.selectedView.view) return !1;
  let t = e.teams[e.selectedView.teamId];
  return !!t && null != t.org_id;
}
export function $$d0(e) {
  switch (e) {
    case 400:
      return renderI18nText("shared_fonts.error_message_for_upload_failure_400");
    case 403:
      return renderI18nText("shared_fonts.error_message_for_upload_failure_403");
    case 409:
      return renderI18nText("shared_fonts.error_message_for_upload_failure_409");
    case 422:
      return renderI18nText("shared_fonts.error_message_for_upload_failure_422");
    case 429:
      return getFeatureFlags().ce_accept_large_font_files ? jsx("div", {
        children: "This file is too big. Files must be less than 50 MB."
      }) : renderI18nText("shared_fonts.error_message_for_upload_failure_429");
    default:
      return jsx("div", {
        style: sx.lhNormal.$,
        children: renderI18nText("shared_fonts.error_message_for_upload_failure_default_with_help_center", {
          helpCenterLink: jsx(Link, {
            href: "https://help.figma.com/hc/articles/360039956774",
            newTab: !0,
            trusted: !0,
            children: renderI18nText("help_widget.menu.help_center")
          })
        })
      });
  }
}
export const g = $$d0;
export const p = $$l1;