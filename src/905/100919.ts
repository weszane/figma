import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { textDisplayConfig } from "../905/687265";
import { Ay } from "@stylexjs/stylex";
import { Xr } from "../figma_app/27355";
import { useSubscription } from "../figma_app/288654";
import { getAtomMutate } from "../figma_app/566371";
import { Badge, BadgeColor } from "../figma_app/919079";
import { p as _$$p } from "../905/991924";
import { SvgComponent } from "../905/714743";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { getI18nString } from "../905/303541";
import { TextWithTruncation } from "../905/984674";
import { renameFileOptimistic } from "../figma_app/78808";
import { NN } from "../905/466026";
import { renameAutosaveFileMutation, OfflineFileType } from "../figma_app/840917";
import { Y6, nb, Tf } from "../figma_app/543100";
import { FileCanEdit } from "../figma_app/43951";
import { KindEnum } from "../905/129884";
import { Cu, ol } from "../figma_app/603826";
import { A as _$$A } from "../5724/663128";
export function $$S0(e) {
  let [t, i] = useState(null);
  let m = useDispatch();
  let x = getAtomMutate(renameAutosaveFileMutation);
  let S = Xr(Y6);
  let C = useSubscription(FileCanEdit, {
    key: e.tile.type === nb.FILE ? e.tile.file.key : ""
  }, {
    enabled: e.tile.type === nb.FILE
  });
  let T = Tf.useIsRenaming(e.tile);
  let k = Tf.getName(e.tile);
  if (T) return jsx(_$$p, {
    style: {
      width: "100%",
      border: "unset",
      boxShadow: "inset 0 -1px 0 0 var(--color-border)"
    },
    placeholderValue: Tf.getName(e.tile),
    submit: t => {
      S(null);
      e.tile.type === nb.FILE ? m(renameFileOptimistic({
        file: e.tile.file,
        name: t
      })) : e.tile.type === nb.REPO ? m(NN({
        repo: e.tile.repo,
        name: t
      })) : e.tile.type === nb.OFFLINE_FILE && x({
        fileKey: e.tile.file.fileKey,
        name: t,
        source: OfflineFileType.OFFLINE_FILE_TILE
      });
    },
    cancel: () => {
      S(null);
      e.tile.type === nb.OFFLINE_FILE && x({
        fileKey: e.tile.file.fileKey,
        source: OfflineFileType.OFFLINE_FILE_TILE
      });
    },
    dontPropagateKeyDown: !0
  });
  {
    let r = k && k.length > 12 ? t => {
      let n = t.target;
      n.offsetWidth < n.scrollWidth && e.tile ? i(n.innerText) : i(null);
    } : void 0;
    let a = !!e.checksForViewOnlyLabels && e.tile.type === nb.FILE && e.tile.file.teamId === e.checksForViewOnlyLabels.teamId && e.checksForViewOnlyLabels.isLockedTeam;
    return jsxs("div", {
      className: e.isListView ? Cu : cssBuilderInstance.flex.flexRow.itemsCenter.gap4.$,
      onMouseEnter: r,
      "data-tooltip-type": KindEnum.TEXT,
      "data-tooltip": t,
      "aria-disabled": e.disabled,
      dir: "auto",
      children: [jsx(TextWithTruncation, {
        truncate: !0,
        children: jsx("span", {
          ...Ay.props(textDisplayConfig.textBodyMediumStrong),
          children: k
        })
      }), jsx(w, {
        tile: e.tile
      }), a && "loaded" === C.status && !C.data.file?.hasPermission && jsx(Badge, {
        color: BadgeColor.WARNING_TERTIARY,
        text: getI18nString("locked_team.label.view_only"),
        dataTooltip: getI18nString("locked_team.label.tooltip"),
        dataTooltipType: KindEnum.TEXT,
        className: ol
      })]
    });
  }
}
function w({
  tile: e
}) {
  return C(e, useSelector(e => e.currentTeamId), useSelector(e => e.currentUserOrgId)) ? jsx(SvgComponent, {
    className: cssBuilderInstance.colorIconBrand.$,
    svg: _$$A,
    "data-tooltip-type": KindEnum.TEXT,
    "data-tooltip": getI18nString("tile.tooltip.external_file"),
    "data-tooltip-show-immediately": !0,
    "data-tooltip-show-above": !0
  }) : null;
}
let C = (e, t, i) => {
  if (i) return !1;
  let n = e.type === nb.FILE && e.file.trashedAt && e.file.teamId !== t;
  let r = e.type === nb.REPO && e.repo.trashed_at && e.repo.team_id !== t;
  return n || r;
};
export const A = $$S0;