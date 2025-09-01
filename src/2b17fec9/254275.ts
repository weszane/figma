import { jsx } from "react/jsx-runtime";
import { useMemo } from "react";
import { K } from "../905/443068";
import { k } from "../7492/749199";
import { y } from "../7492/736516";
import { T } from "../7492/468457";
import { H } from "../7492/428990";
import c from "classnames";
import { t as _$$t } from "../905/303541";
import { Ib } from "../905/129884";
import { QK } from "../figma_app/882116";
import { Xb, ez, _P } from "../figma_app/968638";
var u = c;
var $$_1 = (e => (e.DETAIL = "detail", e.TILE = "title", e.FIGJAM_PLUGIN_ROW = "figjam_plugin_row", e))($$_1 || {});
export function $$x0(e) {
  let {
    isSavedForUser,
    save,
    unsave
  } = QK(e.resourceId, e.resourceType);
  return jsx(g, {
    onClick: e => {
      isSavedForUser ? unsave() : save();
      e.stopPropagation();
    },
    isSaved: isSavedForUser,
    parentView: e.parentView,
    isFauxFocused: e.isFauxFocused
  });
}
function g(e) {
  let t = "title" === e.parentView ? u()({
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
    className: t,
    children: jsx(K, {
      onClick: e.onClick,
      "aria-label": e.isSaved ? _$$t("community.saves.remove_from_saves") : _$$t("community.saves.save"),
      "aria-pressed": e.isSaved,
      htmlAttributes: {
        "data-tooltip-type": Ib.TEXT,
        "data-tooltip": e.isSaved ? _$$t("community.saves.remove_from_saves") : _$$t("community.saves.save")
      },
      children: e.isSaved ? jsx(SaveIconFilled, {}) : jsx(SaveIcon, {})
    })
  });
}
export const _W = $$x0;
export const nN = $$_1;