import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { ButtonSecondary } from "../figma_app/637027";
import { P } from "../905/347284";
import { renderI18nText } from "../905/303541";
import { UpgradeAction } from "../905/370443";
import { TrackedDiv } from "../figma_app/831799";
import { STANDARD_LIMIT } from "../figma_app/345997";
import { Ro } from "../figma_app/805373";
import { jG, o8, kz, nW, wv, cr, J1 } from "../c5e2cae0/62130";
export function $$m0({
  customUpgradeText: e,
  eligibleTeams: t,
  selectTeam: n,
  numDesignFilesPerTeam: m,
  showEditorCount: p = !0
}) {
  let [g, f] = useState(!1);
  let [h, b] = useState(!1);
  useEffect(() => {
    f(t.length >= 5);
  }, [t]);
  let x = `${jG}`;
  g && (x += ` ${o8}`);
  h && (x += ` ${kz}`);
  let y = t[t.length - 1];
  let v = m && m.length === t.length;
  return jsx(P, {
    onScroll: (e, n) => {
      let a = t.length >= 5;
      let r = a && 0 !== e;
      let i = a && e + n.trackHeight !== n.scrollHeight;
      i !== g && f(i);
      r !== h && b(r);
    },
    className: x,
    scrollingDisabled: !1,
    children: jsx("div", {
      className: nW,
      children: t.map((t, r) => jsxs(TrackedDiv, {
        className: t === y ? wv : cr,
        onClick: () => n(t),
        trackingProperties: {
          teamId: t.id,
          trackingDescriptor: UpgradeAction.UPGRADE
        },
        innerText: "Upgrade",
        children: [jsxs("div", {
          className: "org_self_serve--teamInfo--7YTKY",
          children: [jsx(Ro, {
            className: "org_self_serve--teamIcon--DqZPm",
            entity: t,
            size: 40,
            shape: "SQUARE"
          }), jsxs("div", {
            className: "org_self_serve--teamText--Uh2zO",
            children: [jsx("p", {
              className: "org_self_serve--teamName--a1LGY text--fontPos11--2LvXf text--_fontBase--QdLsd ellipsis--ellipsis--Tjyfa",
              children: t.name
            }), jsxs("p", {
              className: "org_self_serve--teamEditors--2hBWh text--fontPos11--2LvXf text--_fontBase--QdLsd",
              children: [!v && p && renderI18nText("universal_upgrade.select_team.editor_count.seat_rename", {
                editors: t.editors
              }), v && m && renderI18nText("universal_upgrade.select_team.files_per_team_figma_files_used", {
                numFilesUsed: m[r],
                numFreeFilesAllowed: STANDARD_LIMIT
              })]
            })]
          })]
        }), jsx(ButtonSecondary, {
          className: J1,
          dataTestId: "select_team.upgrade",
          children: e ?? renderI18nText("universal_upgrade.select_team.upgrade")
        })]
      }, t.id))
    })
  });
}
export const I = $$m0;