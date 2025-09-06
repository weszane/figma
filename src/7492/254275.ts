import { jsx } from "react/jsx-runtime";
import { useMemo } from "react";
import { K } from "../905/443068";
import { k } from "../7492/749199";
import { y } from "../7492/736516";
import { T } from "../7492/468457";
import { H } from "../7492/428990";
import u from "classnames";
import { getI18nString } from "../905/303541";
import { Ib } from "../905/129884";
import { QK } from "../figma_app/882116";
import { Xb, ez, _P } from "../figma_app/968638";
if (443 == require.j) {}
if (443 == require.j) {}
if (443 == require.j) {}
if (443 == require.j) {}
if (443 == require.j) {}
var c = u;
var $$m1 = (e => (e.DETAIL = "detail", e.TILE = "title", e.FIGJAM_PLUGIN_ROW = "figjam_plugin_row", e))($$m1 || {});
export function $$x0(e) {
  let {
    isSavedForUser,
    save,
    unsave
  } = QK(e.resourceId, e.resourceType);
  return jsx(j, {
    onClick: e => {
      isSavedForUser ? unsave() : save();
      e.stopPropagation();
    },
    isSaved: isSavedForUser,
    parentView: e.parentView,
    isFauxFocused: e.isFauxFocused
  });
}
function j(e) {
  let i = "title" === e.parentView ? c()({
    [Xb]: !e.isSaved,
    [ez]: e.isSaved || !!e.isFauxFocused
  }) : "figjam_plugin_row" === e.parentView ? _P : "";
  let {
    SaveIcon,
    SaveIconFilled
  } = useMemo(() => "title" === e.parentView ? {
    SaveIcon: k,
    SaveIconFilled: y
  } : {
    SaveIcon: T,
    SaveIconFilled: H
  }, [e.parentView]);
  return jsx("div", {
    className: i,
    children: jsx(K, {
      onClick: e.onClick,
      "aria-label": e.isSaved ? getI18nString("community.saves.remove_from_saves") : getI18nString("community.saves.save"),
      "aria-pressed": e.isSaved,
      htmlAttributes: {
        "data-tooltip-type": Ib.TEXT,
        "data-tooltip": e.isSaved ? getI18nString("community.saves.remove_from_saves") : getI18nString("community.saves.save")
      },
      children: e.isSaved ? jsx(SaveIconFilled, {}) : jsx(SaveIcon, {})
    })
  });
}
export const _W = $$x0;
export const nN = $$m1;