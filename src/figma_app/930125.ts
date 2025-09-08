import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState, useRef, useEffect } from "react";
import { R as _$$R } from "../905/57445";
import { permissionScopeHandler } from "../905/189185";
import o from "classnames";
import { X } from "../905/606795";
import { Uz } from "../905/63728";
import { L } from "../905/408237";
import { fullscreenValue } from "../figma_app/455680";
import { hF, $k, gw, EH, kL } from "../figma_app/956479";
var l = o;
export function $$h0({
  value: e,
  canEdit: t,
  icon: r,
  shouldHideIcon: o = !1,
  editAction: h,
  focusedInputOverridesClassName: g,
  unfocusedInputOverridesClassName: f,
  onSubmit: E
}) {
  let [y, b] = useState(e);
  let {
    inputRef,
    inputProps: {
      onChange,
      onFocus,
      onMouseUp,
      onMouseLeave,
      onKeyUp
    }
  } = X({
    onChange: function (e) {
      b(e.target.value);
    }
  });
  let N = useRef(!1);
  useEffect(() => {
    b(e);
  }, [e]);
  let C = useRef(null);
  let w = _$$R(C);
  return jsxs(m, {
    isTruncated: w,
    value: e,
    children: [t && jsxs(Fragment, {
      children: [!o && r, jsx(L, {
        ref: inputRef,
        className: l()(hF, g),
        dir: "auto",
        onBlur: function () {
          N.current ? N.current = !1 : y !== e && (permissionScopeHandler.user(h, () => {
            E(y);
          }), fullscreenValue.commit());
        },
        onChange,
        onFocus,
        onKeyDown: function (t) {
          switch (t.keyCode) {
            case Uz.ESCAPE:
              b(e);
              N.current = !0;
              inputRef.current?.blur();
              break;
            case Uz.ENTER:
              inputRef.current?.blur();
              t.preventDefault();
          }
        },
        onKeyUp,
        onMouseLeave,
        onMouseUp,
        value: y
      })]
    }), jsx("div", {
      "aria-hidden": "true",
      className: l()(t ? $k : gw, f),
      ref: C,
      children: jsx("span", {
        className: EH,
        dir: "auto",
        children: e
      })
    })]
  });
}
function m({
  children: e,
  isTruncated: t,
  value: r
}) {
  return jsx("div", {
    className: kL,
    ...(t && {
      "data-tooltip": r,
      "data-tooltip-type": "text"
    }),
    children: e
  });
}
export const R = $$h0;