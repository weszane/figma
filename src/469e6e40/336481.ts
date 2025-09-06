import _require from "../vendor/514228";
import { jsx, jsxs } from "react/jsx-runtime";
import { useMemo } from "react";
import { s as _$$s } from "../905/403855";
import { zN } from "../figma_app/416935";
import { Ay } from "../figma_app/930338";
import { B } from "../905/714743";
import { getI18nString } from "../905/303541";
import { Y } from "../905/830372";
import { B as _$$B } from "../905/261906";
import { JT } from "../figma_app/847597";
import { Ib } from "../905/129884";
import { hz, cG } from "../469e6e40/123707";
if (_require, 443 == require.j) {}
export function $$g0(e) {
  return Ay(zN(e.user?.email ?? "") ?? "");
}
export function $$h2(e) {
  let {
    icon,
    variant
  } = e;
  let r = useMemo(() => {
    let s = {
      "data-tooltip-type": Ib.TEXT,
      "data-tooltip": e.tooltipText,
      "data-tooltip-show-below": !0,
      "data-tooltip-timeout-delay": 50,
      "data-tooltip-max-width": 210
    };
    return icon ? jsx(B, {
      className: hz,
      svg: icon,
      ...s
    }) : "lock-grey" === variant ? jsx(_$$s, {
      ...s
    }) : void 0;
  }, [icon, variant, e.tooltipText]);
  return jsxs("div", {
    className: cG,
    "data-testid": "locked-cell",
    children: [e.label, r]
  });
}
export function $$x1({
  seatType: e,
  isScimSeat: t
}) {
  let a = useMemo(() => jsxs(Y, {
    direction: "horizontal",
    children: [jsx(_$$B, {
      type: e,
      size: "24",
      disabled: !0
    }), jsx("div", {
      className: "xv1l7n4",
      "data-testid": `pending-seat-cell-${e}`,
      children: JT(e)
    })]
  }), [e]);
  return t ? jsx($$h2, {
    label: a,
    variant: "lock-grey",
    tooltipText: getI18nString("members_table.role_idp_tooltip.seat_rename")
  }) : jsx("span", {
    "data-tooltip-type": Ib.TEXT,
    "data-tooltip": getI18nString("admin_settings.people_tab.seat_invite_pending_tooltip"),
    children: a
  });
}
export const W4 = $$g0;
export const fB = $$x1;
export const lJ = $$h2;