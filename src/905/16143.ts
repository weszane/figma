import { jsxs, jsx } from "react/jsx-runtime";
import { useMemo } from "react";
import a from "classnames";
import { Badge, BadgeColor } from "../figma_app/919079";
import { NU } from "../figma_app/204891";
import { y } from "../905/171275";
import { s as _$$s } from "../cssbuilder/589278";
import { getI18nString } from "../905/303541";
import { TextWithTruncation } from "../905/984674";
import { R } from "../905/731725";
import { getSidebarPath } from "../figma_app/528509";
import { _6 } from "../figma_app/386952";
import { KindEnum } from "../905/129884";
var s = a;
export function $$_0(e) {
  let t = _6();
  let i = R({
    folderId: e.folder.id,
    shouldShowOnlyTrashedFiles: "trashedFolders" === t.view
  });
  let a = useMemo(() => (i.data ?? []).sort((e, t) => e.touched_at < t.touched_at ? 1 : -1).slice(0, 4), [i.data]);
  return jsxs("div", {
    className: s()(_$$s.flex.flexRow.gap12.itemsCenter.wFull.$, e.containerClassName),
    "data-onboarding-key": e.dataOnboardingKey,
    children: [jsx("div", {
      className: "folder_name_and_preview--folderFiles--8g7Iy",
      children: a.map(e => jsx(NU, {
        file: e,
        borderRadius: 2,
        size: y.SMALL
      }, `Thumbnail${e.key}`))
    }), jsxs("div", {
      className: "folder_name_and_preview--fileNameContainer--8lvc-",
      children: [jsx(TextWithTruncation, {
        fontSize: e.fontSize ?? 13,
        fontWeight: "medium",
        truncate: !0,
        children: getSidebarPath(e.folder)
      }), e.showViewOnlyLabel && jsx(Badge, {
        color: BadgeColor.WARNING_TERTIARY,
        text: getI18nString("locked_team.label.view_only"),
        dataTooltip: getI18nString("locked_team.label.tooltip"),
        dataTooltipType: KindEnum.TEXT,
        className: "folder_name_and_preview--viewOnlyLabel--G3IV1"
      })]
    })]
  });
}
export const L = $$_0;