import { jsx, jsxs } from "react/jsx-runtime";
import { useSelector } from "react-redux";
import { t as _$$t } from "../905/331623";
import { getCurrentFileType } from "../figma_app/976749";
import { Ro } from "../figma_app/805373";
import { oi, YV, D8, zc, VT, t7, kL } from "../905/498633";
import { A } from "../6041/915738";
import { A as _$$A } from "../6041/980297";
import { A as _$$A2 } from "../5724/83071";
export function $$p0(e) {
  let t;
  let r = useSelector(t => t.authedUsers.byId[e.userId]);
  let p = useSelector(t => e.profileId ? t.authedProfilesById[e.profileId] : null);
  let _ = useSelector(t => e.orgId ? t.orgById[e.orgId] : null);
  let h = useSelector(t => e.teamId ? t.teams[e.teamId] : null);
  let m = "whiteboard" === getCurrentFileType();
  let g = !e.forceAvatar;
  let f = 16 === e.size ? oi : 32 === e.size ? YV : D8;
  e.skipExternalTeamsIcon || (t = 16 === e.size ? jsx(_$$t, {
    svg: _$$A2
  }) : jsx(_$$t, {
    svg: A,
    fallbackSvg: _$$A
  }));
  g || e.skipUserIcon || (e.personalSpaceIcon && e.personalSpaceIcon1x ? t = jsx(_$$t, {
    svg: e.personalSpaceIcon,
    fallbackSvg: e.personalSpaceIcon1x
  }) : r && (t = jsxs("div", {
    className: zc,
    children: [jsx(Ro, {
      size: e.size ?? 24,
      entity: p || r
    }), jsx("div", {
      className: f
    })]
  })));
  let E = _ || h;
  return (E && (t = jsxs("div", {
    className: zc,
    children: [jsx(Ro, {
      size: e.size ?? 24,
      entity: E,
      className: m && !e.forceNoWhiteboardBorder ? VT : void 0
    }), !m && jsx("div", {
      className: f
    })]
  })), t) ? jsx("div", {
    className: `${16 === e.size ? t7 : kL} ${e.className || ""}`,
    "data-tooltip-type": e["data-tooltip-type"],
    "data-tooltip": e["data-tooltip"],
    "data-tooltip-show-immediately": e["data-tooltip-show-immediately"],
    "data-tooltip-max-width": e["data-tooltip-max-width"],
    "data-tooltip-offset-y": e["data-tooltip-offset-y"],
    children: t
  }) : null;
}
export const n = $$p0;