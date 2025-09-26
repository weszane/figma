import { jsxs, jsx } from "react/jsx-runtime";
import { useCallback } from "react";
import { ButtonPrimitive } from "../905/632989";
import s from "classnames";
import { useClickHandler } from "../905/911623";
import { useHandleMouseEvent } from "../figma_app/878298";
import { w } from "../905/768636";
var o = s;
export function $$u0({
  libraryKey: e,
  children: t,
  disabled: i,
  className: s,
  disabledClassName: u,
  usedInThisFile: p = !1,
  hideCaret: m = !1,
  onClick: h,
  recordingKey: g,
  ariaLabel: f
}) {
  let _ = function (e, t) {
    let i = useCallback(t => {
      t.stopPropagation();
      t.preventDefault();
      0 === t.button && e();
    }, [e]);
    return useHandleMouseEvent(t, "mousedown", i);
  }(h, g);
  let {
    onMouseDown,
    onClick,
    onMouseUp,
    onMouseLeave
  } = useClickHandler({
    onClick: _,
    isDisabled: i
  });
  return jsxs("div", {
    className: o()(i ? u : s, "file_row_styles--fileRowContainer--5uxdH"),
    children: [jsx(ButtonPrimitive, {
      "aria-label": f,
      className: "file_row_styles--fileRowContainerButton---kQS9",
      children: null,
      onClick,
      htmlAttributes: {
        onMouseDown,
        onMouseUp,
        onMouseLeave,
        "data-testid": `file-row-${p ? "used-" : ""}${e}`
      }
    }), t, !m && !i && jsx(w, {})]
  });
}
export const m = $$u0;