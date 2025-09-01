import { jsx } from "react/jsx-runtime";
import i from "classnames";
import { xR, E3, Mf } from "../905/70909";
var a = i;
var $$o0 = (e => (e.PUBLISH = "publish", e.PERMISSIONS = "permissions", e.DATA_SECURITY = "data_security", e))($$o0 || {});
export let $$l2 = ["publish", "data_security", "permissions"];
export function $$d1(e) {
  return jsx("div", {
    className: e.tab === e.selectedTab ? a()(xR, E3) : a()(Mf, E3),
    role: "tab",
    onClick: () => e.onClick(e.tab),
    onMouseDown: e => e.stopPropagation(),
    onPointerDown: e => e.stopPropagation(),
    tabIndex: 0,
    "data-onboarding-key": e.dataOnboardingKey,
    children: e.title()
  }, e.tab);
}
export const KM = $$o0;
export const fJ = $$d1;
export const x5 = $$l2;