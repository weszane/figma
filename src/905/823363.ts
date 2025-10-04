import { jsx } from "react/jsx-runtime";
import { useMemo, useRef, useCallback } from "react";
import { c$, bL } from "../905/575478";
import { Legend } from "../905/932270";
import { AnchorPosition } from "../figma_app/763686";
import l from "classnames";
import { renderI18nText } from "../905/303541";
import { _r } from "../figma_app/451499";
var d = l;
let p = [AnchorPosition.TOP_LEFT, AnchorPosition.TOP_CENTER, AnchorPosition.TOP_RIGHT, AnchorPosition.MIDDLE_LEFT, AnchorPosition.MIDDLE_CENTER, AnchorPosition.MIDDLE_RIGHT, AnchorPosition.BOTTOM_LEFT, AnchorPosition.BOTTOM_CENTER, AnchorPosition.BOTTOM_RIGHT];
let m = {
  [AnchorPosition.TOP_LEFT]: "anchor_point_selector--apTopLeft--jsueH",
  [AnchorPosition.TOP_CENTER]: "anchor_point_selector--apTopMiddle--Wp-kD",
  [AnchorPosition.TOP_RIGHT]: "anchor_point_selector--apTopRight--mbC5X",
  [AnchorPosition.MIDDLE_LEFT]: "anchor_point_selector--apMiddleLeft--G-YlO",
  [AnchorPosition.MIDDLE_CENTER]: "anchor_point_selector--apMiddleMiddle--gut-r",
  [AnchorPosition.MIDDLE_RIGHT]: "anchor_point_selector--apMiddleRight--VZnhH",
  [AnchorPosition.BOTTOM_LEFT]: "anchor_point_selector--apBottomLeft--30X3n",
  [AnchorPosition.BOTTOM_CENTER]: "anchor_point_selector--apBottomMiddle--ySpzF",
  [AnchorPosition.BOTTOM_RIGHT]: "anchor_point_selector--apBottomRight--rXs-P"
};
let h = {
  [AnchorPosition.TOP_LEFT]: "top_left",
  [AnchorPosition.TOP_CENTER]: "top_center",
  [AnchorPosition.TOP_RIGHT]: "top_right",
  [AnchorPosition.MIDDLE_LEFT]: "middle_left",
  [AnchorPosition.MIDDLE_CENTER]: "middle_center",
  [AnchorPosition.MIDDLE_RIGHT]: "middle_right",
  [AnchorPosition.BOTTOM_LEFT]: "bottom_left",
  [AnchorPosition.BOTTOM_CENTER]: "bottom_center",
  [AnchorPosition.BOTTOM_RIGHT]: "bottom_right"
};
function g(e) {
  let {
    value,
    onMouseDown,
    disabled,
    selected,
    onChange
  } = e;
  let c = useMemo(() => `scale_panel.anchor.${h[value]}`, [value]);
  let p = useMemo(() => new _r(), []);
  return jsx(c$, {
    className: `anchor_point_selector--anchorPointButton--JCPGp ${m[value]}`,
    "data-testid": c,
    "aria-label": p.format(h[value]),
    value: value.toString(),
    readonly: disabled || void 0,
    htmlAttributes: {
      onMouseDown,
      onKeyPress: e => {
        ("Enter" === e.key || " " === e.key) && onChange(value);
      }
    },
    children: jsx("div", {
      className: "anchor_point_selector--pointWrapper--wHQuA",
      children: jsx("div", {
        className: d()("anchor_point_selector--anchorPointButtonInner--LSo9Y", {
          "anchor_point_selector--apButtonActive--eNX6V": selected,
          "anchor_point_selector--disabled--YCcFc": disabled
        }),
        "data-testid": selected ? `${c}.active` : void 0
      })
    })
  });
}
let f = e => "INPUT" === e.tagName;
export function $$_0(e) {
  let t = useRef(null);
  let {
    anchorPoint,
    onAnchorPointChange,
    disabled,
    restoreFocusElements
  } = e;
  let m = useCallback(() => {
    let e = document.activeElement;
    e && f(e) && restoreFocusElements?.includes(e) ? t.current = e : t.current = null;
  }, [restoreFocusElements]);
  return jsx(bL, {
    legend: jsx(Legend, {
      children: renderI18nText("fullscreen.scale_panel.anchor_point")
    }),
    value: anchorPoint.toString(),
    onChange: (e, {
      event: i
    }) => {
      "mouse" === i.nativeEvent.pointerType ? (onAnchorPointChange(parseInt(e)), t.current && t.current.focus()) : i.currentTarget.focus();
    },
    className: d()("anchor_point_selector--anchorPointSelector--ZC9rv", {
      "anchor_point_selector--anchorPointSelectorDisabled--JScxh": disabled,
      "anchor_point_selector--fullWidth--3x5Xd": e.fullWidth
    }),
    children: jsx("div", {
      className: "anchor_point_selector--anchorPointRow--ihLU6",
      children: p.map(e => jsx(g, {
        value: e,
        selected: anchorPoint === e,
        disabled,
        onChange: onAnchorPointChange,
        onMouseDown: m
      }, `anchor_point_${e}`))
    })
  });
}
export const V = $$_0;