import { jsxs, jsx } from "react/jsx-runtime";
import { memo, forwardRef, useState, useCallback } from "react";
import a from "classnames";
import { useClickHandler } from "../905/911623";
import { RecordableButton } from "../905/511649";
import { getBasename } from "../905/309735";
import { KindEnum } from "../905/129884";
import { Z } from "../905/248978";
import { jl, zi, iL } from "../905/824449";
import { eg } from "../figma_app/728075";
var s = a;
let $$$$h0 = memo(forwardRef(function ({
  dsStyle: e,
  recordingKey: t,
  isSelected: i = !1,
  isFauxFocused: a = !1,
  size: s,
  onClick: d,
  onDoubleClick: c,
  onContextMenu: u,
  onMouseEnter: h,
  onMouseMove: g,
  onMouseLeave: f,
  onFocus: _
}, A) {
  let [y, b] = useState(!1);
  let [v, I] = useState(!1);
  let E = useCallback(e => {
    b(!0);
    h?.(e);
  }, [h]);
  let {
    onMouseDown,
    onClick,
    onMouseUp,
    onMouseLeave
  } = useClickHandler({
    onClick: d,
    onMouseLeave: useCallback(e => {
      b(!1);
      f?.(e);
    }, [f])
  });
  let T = useCallback(e => {
    I(!0);
    _?.(e);
  }, [_]);
  return jsxs(RecordableButton, {
    className: "style_icon_button--button--Cf7v2",
    forwardedRef: A,
    onBlur: () => I(!1),
    onClick,
    onContextMenu: u,
    onDoubleClick: c,
    onFocus: T,
    onMouseDown,
    onMouseEnter: E,
    onMouseLeave,
    onMouseMove: g,
    onMouseUp,
    recordingKey: t,
    children: [i && jsx(jl, {
      color: "#0d99ff"
    }), !i && !!onClick && jsx("div", {
      className: a ? void 0 : "style_icon_button--focusCircle--pHmuX",
      children: jsx(jl, {
        color: eg
      })
    }), jsx(zi, {
      dsStyle: e,
      size: s,
      disableOutline: i || y || v || a
    })]
  });
}));
let $$g1 = forwardRef(function ({
  children: e,
  dsStyle: t,
  recordingKey: i,
  isSelected: r = !1,
  isFauxFocused: a = !1,
  shouldShowTooltip: m = !1,
  onClick: h,
  onDoubleClick: g,
  onContextMenu: f,
  onMouseEnter: _,
  onMouseMove: A,
  onMouseLeave: y,
  onFocus: b
}, v) {
  let {
    onMouseDown,
    onClick,
    onMouseUp,
    onMouseLeave
  } = useClickHandler({
    onClick: h,
    onMouseLeave: y
  });
  return jsxs(RecordableButton, {
    className: s()("style_icon_button--rowButton--dTT9X", {
      "style_icon_button--selected--6KJiJ": r,
      "style_icon_button--fauxFocused--LWkh-": a
    }),
    "data-tooltip": m ? Z : void 0,
    "data-tooltip-style-description": t.description,
    "data-tooltip-style-name": getBasename(t.name || ""),
    "data-tooltip-type": KindEnum.SPECIAL,
    forwardedRef: v,
    onClick,
    onContextMenu: f,
    onDoubleClick: g,
    onFocus: b,
    onMouseDown,
    onMouseEnter: _,
    onMouseLeave,
    onMouseMove: A,
    onMouseUp,
    recordingKey: i,
    children: [jsx("div", {
      className: "style_icon_button--rowButtonIcon--xZQ-g",
      children: jsx(zi, {
        dsStyle: t,
        size: iL.Standard,
        disableTooltip: !0
      })
    }), e]
  });
});
export const h = $$$$h0;
export const A = $$g1;