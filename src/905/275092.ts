import { jsxs, jsx } from "react/jsx-runtime";
import { useMemo } from "react";
import { sortByDateProperty } from "../figma_app/656233";
import { N } from "../905/438674";
import { Ak } from "../905/986103";
import { tx, t as _$$t } from "../905/303541";
export function $$d0({
  fileStats: e
}) {
  let t = useMemo(() => {
    let t = [...(e ?? [])];
    sortByDateProperty(t, "lastModified");
    return t;
  }, [e]);
  let i = Ak(t[0]?.lastModified);
  return e ? jsxs("div", {
    className: "library_item_footer--footer--CO3WJ file_view_styles--componentViewFooter--JQ0-4 file_view_styles--fileViewFooter--y5O8t",
    children: [jsxs("div", {
      className: "library_item_footer--footerText--eiMiU",
      children: [tx("design_systems.libraries_modal.x_files_shown_open_teams_and_teams_you_re_on", {
        fileCount: t.length
      }), " ", jsx("div", {
        className: "library_item_footer--footerInlineLink--uHgID",
        children: jsx(N, {
          newTab: !0,
          href: "https://help.figma.com/hc/articles/360039238353",
          trusted: !0,
          children: tx("design_systems.libraries_modal.learn_more")
        })
      })]
    }), jsx("div", {
      className: "library_item_footer--footerLastUpdated--NFCM8",
      children: t.length > 0 && _$$t("design_systems.libraries_modal.last_updated_time", {
        timeFromNow: i
      })
    })]
  }) : null;
}
export const a = $$d0;