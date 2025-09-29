import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { IconButton } from "../905/443068";
import { C } from "../905/504203";
import { L } from "../905/704296";
import { props } from "@stylexjs/stylex";
import d from "classnames";
import { IW } from "../figma_app/563413";
import { getI18nString } from "../905/303541";
import { qz, t7, un, SO, DP, nU, nR } from "../3271/440214";
var c = d;
export function $$x1({
  location: e,
  searchQuery: t,
  placeholder: s,
  onChange: a,
  clearSearch: n,
  onClose: i,
  onFocus: l
}) {
  return "modal" === e ? jsx(p, {
    searchQuery: t,
    clearSearch: n,
    placeholder: s,
    onChange: a,
    onClose: i,
    onFocus: l
  }) : jsx($$g0, {
    searchQuery: t,
    clearSearch: n,
    placeholder: s,
    onChange: a,
    onFocus: l
  });
}
function p({
  searchQuery: e,
  placeholder: t,
  onChange: s,
  clearSearch: a,
  onClose: o,
  onFocus: d
}) {
  return jsxs("div", {
    className: qz,
    children: [jsx(IW, {
      className: t7,
      clearSearch: a,
      customClearSearchIcon: jsx(C, {
        style: {
          "--color-icon": "var(--color-icon-tertiary)"
        }
      }),
      focusOnMount: !0,
      iconClassName: un,
      onChange: s,
      onFocus: d,
      placeholder: t,
      query: e,
      withUI3Icon: !0
    }), null != o && jsx(IconButton, {
      "aria-label": getI18nString("common.close"),
      onClick: o,
      children: jsx(L, {})
    })]
  });
}
export function $$g0({
  searchQuery: e,
  placeholder: t,
  onChange: s,
  clearSearch: n,
  onFocus: l
}) {
  let [d, _] = useState(!1);
  return jsx("div", {
    className: SO,
    children: jsx(IW, {
      className: c()(DP, d && nU),
      clearSearch: n,
      customClearSearchContainerClassName: nR,
      customClearSearchIcon: jsx(C, {
        style: {
          "--color-icon": "var(--color-icon-tertiary)"
        }
      }),
      focusOnMount: !0,
      iconClassName: props(!d && h.searchIconUnFocused).className,
      onBlur: () => _(!1),
      onChange: s,
      onFocus: () => {
        _(!0);
        l?.();
      },
      placeholder: t,
      query: e,
      smallFont: !0,
      withUI3Icon: !0
    })
  });
}
let h = {
  searchIconUnFocused: {
    "--color-icon": "x180r7m8",
    $$css: !0
  }
};
export const N = $$g0;
export const e = $$x1;
