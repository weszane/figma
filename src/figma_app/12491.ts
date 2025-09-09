import { jsx } from "react/jsx-runtime";
import { U } from "../905/275247";
import { x } from "../905/811596";
import { useAtomWithSubscription } from "../figma_app/27355";
import o from "classnames";
import { s as _$$s } from "../cssbuilder/589278";
import { useCurrentPrivilegedPlan } from "../figma_app/465071";
import { Ho } from "../figma_app/236178";
import { wZ } from "../figma_app/777207";
import { d$, G7 } from "../905/863795";
import { Wo, Kk, cH } from "../905/260649";
var l = o;
export function $$m3({
  isForSelect: e,
  orgNameForTooltip: t,
  workspaceNameForTooltip: r,
  tooltipDelay: s = 250,
  tooltipLocation: o = "above",
  size: d = "small",
  variant: c
}) {
  let u = t || r ? wZ({
    orgName: t,
    workspaceName: r,
    tooltipLocation: o,
    tooltipDelay: s
  }) : {};
  return jsx("div", {
    className: l()("secondary" === c ? Wo : Kk, e ? cH : void 0),
    ...u,
    children: "large" === d ? jsx(U, {}) : jsx(x, {})
  });
}
export function $$g1({
  libraryKey: e,
  ...t
}) {
  let r = useAtomWithSubscription(d$);
  let i = useCurrentPrivilegedPlan("ApprovedLibraryIconForFullScreen").unwrapOr(null);
  let a = i?.name;
  let o = Ho(e);
  return jsx($$m3, {
    ...t,
    orgNameForTooltip: o ? a : void 0,
    workspaceNameForTooltip: r?.name
  });
}
export function $$f2(e) {
  let t = useAtomWithSubscription(G7);
  let r = useCurrentPrivilegedPlan("ApprovedLibraryIconForUserDefaultSubscriptions").unwrapOr(null);
  let i = r?.name;
  let a = Ho(e.libraryKey);
  return jsx($$m3, {
    ...e,
    orgNameForTooltip: a ? i : void 0,
    workspaceNameForTooltip: t?.name
  });
}
export function $$E0() {
  return jsx("div", {
    className: _$$s.flex.alignCenter.justifyCenter.flexShrink0.ml4.mr4.$,
    children: jsx($$m3, {
      isForSelect: !0
    })
  });
}
export const FX = $$E0;
export const KP = $$g1;
export const L1 = $$f2;
export const cX = $$m3;