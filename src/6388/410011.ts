import { jsx } from "react/jsx-runtime";
import n from "classnames";
import { s9, r as _$$r } from "../figma_app/711157";
var s = n;
export function $$i0({
  panelClassName: e,
  children: t,
  withTopPadding: l,
  hideBorderBottom: n,
  onMouseEnter: r,
  onMouseLeave: i
}) {
  return jsx("div", {
    className: s()("slides_panel--panel--lPYTn", {
      "slides_panel--withTopPadding--4WBnl": l,
      "slides_panel--withBorderBottom--CymRv": !n
    }, e),
    onMouseEnter: r,
    onMouseLeave: i,
    "data-non-interactive": !0,
    children: t
  });
}
export function $$a1({
  titleTx: e,
  input: t
}) {
  return jsx($$i0, {
    panelClassName: "slides_panel--panelTitleInput--Paowl",
    children: jsx(s9, {
      titleTx: e,
      input: t
    })
  });
}
export function $$d2({
  titleTx: e,
  icon: t,
  faded: l
}) {
  return jsx(_$$r, {
    titleTx: e,
    icon: t,
    faded: l,
    appendedClassName: "slides_panel--panelTitleIconRow--9L9T1"
  });
}
export const tR = $$i0;
export const bz = $$a1;
export const Uz = $$d2;