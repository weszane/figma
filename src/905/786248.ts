import { jsx } from "react/jsx-runtime";
import { forwardRef, useState, useRef, useEffect, useCallback, useImperativeHandle } from "react";
import { stylex } from "@stylexjs/stylex";
import { s as _$$s } from "../905/139639";
import { tu } from "../figma_app/779249";
let l = {
  input: {
    width: "xh8yej3",
    borderRadius: "x12oqio5",
    padding: "x1i3ajwb",
    paddingLeft: "x6wrskw",
    paddingRight: "x1xpa7k",
    border: "xoqcfqf",
    backgroundColor: "xjbqb8w",
    $$css: !0
  },
  focused: {
    outline: "xyyrnnw",
    $$css: !0
  }
};
let $$d0 = forwardRef(function ({
  fileName: e,
  onChange: t,
  disabled: i,
  readOnly: d,
  onFocus: c,
  path: u
}, p) {
  let [m, h] = useState(!1);
  let [g, f] = useState(e);
  let _ = useRef(null);
  let A = _$$s();
  useEffect(() => {
    f(e);
  }, [e]);
  let y = useCallback(() => {
    _.current?.focus();
    _.current?.select();
    h(!0);
    c?.();
  }, [c]);
  return (useImperativeHandle(p, () => ({
    focus: y
  }), [y]), d) ? jsx("span", {
    children: e
  }) : jsx("input", {
    onBlur: () => {
      let i = tu(g);
      !i || A(u, e, i) ? f(e) : (f(i), t(i));
      h(!1);
    },
    onChange: e => {
      f(e.target.value);
    },
    onDoubleClick: y,
    onKeyDown: e => {
      ("Enter" === e.key || "Escape" === e.key) && (e.preventDefault(), _.current?.blur());
    },
    type: "text",
    value: g,
    ...stylex.props(l.input, m && l.focused),
    ref: _,
    disabled: i,
    readOnly: !m
  });
});
export const p = $$d0;
