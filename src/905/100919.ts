import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useDispatch, useSelector } from "../vendor/514228";
import { g as _$$g } from "../905/687265";
import { Ay } from "@stylexjs/stylex";
import { Xr } from "../figma_app/27355";
import { Rs } from "../figma_app/288654";
import { gY } from "../figma_app/566371";
import { Ex, zE } from "../figma_app/919079";
import { p as _$$p } from "../905/991924";
import { B } from "../905/714743";
import { s as _$$s } from "../cssbuilder/589278";
import { getI18nString } from "../905/303541";
import { E as _$$E } from "../905/984674";
import { Nw } from "../figma_app/78808";
import { NN } from "../905/466026";
import { b_, oE } from "../figma_app/840917";
import { Y6, nb, Tf } from "../figma_app/543100";
import { dDF } from "../figma_app/43951";
import { Ib } from "../905/129884";
import { Cu, ol } from "../figma_app/603826";
import { A as _$$A } from "../5724/663128";
export function $$S0(e) {
  let [t, i] = useState(null);
  let m = useDispatch();
  let x = gY(b_);
  let S = Xr(Y6);
  let C = Rs(dDF, {
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
      e.tile.type === nb.FILE ? m(Nw({
        file: e.tile.file,
        name: t
      })) : e.tile.type === nb.REPO ? m(NN({
        repo: e.tile.repo,
        name: t
      })) : e.tile.type === nb.OFFLINE_FILE && x({
        fileKey: e.tile.file.fileKey,
        name: t,
        source: oE.OFFLINE_FILE_TILE
      });
    },
    cancel: () => {
      S(null);
      e.tile.type === nb.OFFLINE_FILE && x({
        fileKey: e.tile.file.fileKey,
        source: oE.OFFLINE_FILE_TILE
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
      className: e.isListView ? Cu : _$$s.flex.flexRow.itemsCenter.gap4.$,
      onMouseEnter: r,
      "data-tooltip-type": Ib.TEXT,
      "data-tooltip": t,
      "aria-disabled": e.disabled,
      dir: "auto",
      children: [jsx(_$$E, {
        truncate: !0,
        children: jsx("span", {
          ...Ay.props(_$$g.textBodyMediumStrong),
          children: k
        })
      }), jsx(w, {
        tile: e.tile
      }), a && "loaded" === C.status && !C.data.file?.hasPermission && jsx(Ex, {
        color: zE.WARNING_TERTIARY,
        text: getI18nString("locked_team.label.view_only"),
        dataTooltip: getI18nString("locked_team.label.tooltip"),
        dataTooltipType: Ib.TEXT,
        className: ol
      })]
    });
  }
}
function w({
  tile: e
}) {
  return C(e, useSelector(e => e.currentTeamId), useSelector(e => e.currentUserOrgId)) ? jsx(B, {
    className: _$$s.colorIconBrand.$,
    svg: _$$A,
    "data-tooltip-type": Ib.TEXT,
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