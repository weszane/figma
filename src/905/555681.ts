import { jsxs, jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { A as _$$A } from "../vendor/723372";
import { E } from "../905/632989";
import { M } from "../905/850310";
import { M as _$$M } from "../905/581092";
import { w } from "../905/955293";
import { h as _$$h } from "../905/994594";
import { p as _$$p } from "../905/185998";
import { Ju, wo } from "../905/955878";
let m = {
  md: void 0,
  lg: "search-input__lg__IYUK0"
};
let h = {
  default: void 0,
  borderless: "search-input__borderless__shUUA"
};
let g = forwardRef(({
  onKeyDown: e,
  placeholder: t = "\u2065",
  size: i = "md",
  variant: r = "default",
  ...s
}, o) => {
  let d = _$$M(o);
  let g = e => {
    s.onChange?.("", {
      event: e,
      clear: !0
    });
    d.current.value = "";
  };
  return jsxs(_$$p.Root, {
    size: i,
    className: _$$A("search-input__root__BJAlh", h[r]),
    children: [jsx("div", {
      "aria-hidden": !0,
      className: _$$A("search-input__icon__pkEK-", m[i]),
      children: jsx(_$$h, {})
    }), jsx(_$$p, {
      ...s,
      ref: d,
      type: "text",
      role: "searchbox",
      placeholder: t,
      enterKeyHint: "search",
      onKeyDown: t => {
        e?.(t);
        "Escape" === t.key && t.currentTarget.value && (Ju(t), g(t));
      },
      className: "search-input__search__rJMFk"
    }), !s.disabled && jsx(A, {
      size: i,
      onClick: g
    })]
  });
});
g.displayName = "SearchInput";
let f = forwardRef((e, t) => {
  let i = M(e);
  return jsx(g, {
    ...i,
    ref: t
  });
});
f.displayName = "SearchInput.Lazy";
export let $$_0 = Object.assign(g, {
  Lazy: f
});
function A({
  size: e,
  onClick: t
}) {
  return jsx(E, {
    onClick: t,
    className: _$$A("search-input__clear__zR1gK", m[e]),
    "aria-hidden": !0,
    htmlAttributes: {
      tabIndex: -1,
      onPointerDown: wo
    },
    children: jsx(w, {})
  });
}
export const D = $$_0;