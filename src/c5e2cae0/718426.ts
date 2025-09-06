import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { nR } from "../figma_app/637027";
import { P } from "../905/347284";
import { renderI18nText } from "../905/303541";
import { c as _$$c } from "../905/370443";
import { jm } from "../figma_app/831799";
import { WW } from "../figma_app/345997";
import { Ro } from "../figma_app/805373";
import { jG, o8, kz, nW, wv, cr, J1 } from "../c5e2cae0/62130";
export function $$u0({
  customUpgradeText: e,
  eligibleTeams: t,
  selectTeam: a,
  numDesignFilesPerTeam: u,
  showEditorCount: p = !0
}) {
  let [h, g] = useState(!1);
  let [x, f] = useState(!1);
  useEffect(() => {
    g(t.length >= 5);
  }, [t]);
  let v = `${jG}`;
  h && (v += ` ${o8}`);
  x && (v += ` ${kz}`);
  let y = t[t.length - 1];
  let j = u && u.length === t.length;
  return jsx(P, {
    onScroll: (e, a) => {
      let s = t.length >= 5;
      let r = s && 0 !== e;
      let i = s && e + a.trackHeight !== a.scrollHeight;
      i !== h && g(i);
      r !== x && f(r);
    },
    className: v,
    scrollingDisabled: !1,
    children: jsx("div", {
      className: nW,
      children: t.map((t, r) => jsxs(jm, {
        className: t === y ? wv : cr,
        onClick: () => a(t),
        trackingProperties: {
          teamId: t.id,
          trackingDescriptor: _$$c.UPGRADE
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
              children: [!j && p && renderI18nText("universal_upgrade.select_team.editor_count.seat_rename", {
                editors: t.editors
              }), j && u && renderI18nText("universal_upgrade.select_team.files_per_team_figma_files_used", {
                numFilesUsed: u[r],
                numFreeFilesAllowed: WW
              })]
            })]
          })]
        }), jsx(nR, {
          className: J1,
          dataTestId: "select_team.upgrade",
          children: e ?? renderI18nText("universal_upgrade.select_team.upgrade")
        })]
      }, t.id))
    })
  });
}
export const I = $$u0;