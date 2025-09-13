import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect, useCallback } from "react";
import { EventShield } from "../905/821217";
import { K } from "../905/443068";
import { Checkbox } from "../905/274480";
import { HiddenLabel } from "../905/270045";
import { f as _$$f } from "../905/54715";
import { M3 } from "../figma_app/119475";
import { LazyInputForwardRef } from "../905/408237";
import { SvgComponent } from "../905/714743";
import { getI18nString } from "../905/303541";
import { I } from "../905/343721";
import { cr, CO, yY } from "../905/703676";
import { KindEnum } from "../905/129884";
import { ON, hF, hj, xQ, Dq } from "../905/954985";
import { A as _$$A } from "../svg/927263";
export function $$y0({
  baseId: e,
  basePath: t,
  placeholder: i,
  query: o,
  setQuery: l
}) {
  let {
    setKeyboardNavigationElement,
    keyboardNavigationItem,
    isFocused
  } = M3({
    id: `${e}-facet-panel-search-bar`,
    path: [...t, 0]
  });
  useEffect(() => {
    isFocused && keyboardNavigationItem?.focus();
  }, [isFocused, keyboardNavigationItem]);
  let y = useCallback(e => {
    l(e.target.value);
  }, [l]);
  let b = useCallback(() => {
    l("");
  }, [l]);
  return jsx(EventShield, {
    eventListeners: ["onMouseDown"],
    children: jsxs("div", {
      className: ON,
      children: [jsx(I, {
        icon: "search-32",
        fill: "secondary"
      }), jsx(LazyInputForwardRef, {
        autoFocus: !0,
        className: hF,
        onChange: y,
        placeholder: i,
        ref: setKeyboardNavigationElement,
        spellCheck: "false",
        value: o
      }), !!o && jsx("span", {
        className: hj,
        children: jsx(K, {
          "aria-label": getI18nString("search.search_bar.clear"),
          onClick: b,
          htmlAttributes: {
            "data-tooltip-type": KindEnum.TEXT,
            "data-tooltip": getI18nString("search.search_bar.clear")
          },
          children: jsx(_$$f, {})
        })
      })]
    })
  });
}
export function $$b2({
  baseId: e,
  basePath: t,
  onClick: i
}) {
  return jsx("div", {
    className: xQ,
    children: jsx(cr, {
      disableRecentSearchOnClick: !0,
      href: "",
      icon: jsx(SvgComponent, {
        className: Dq,
        svg: _$$A
      }),
      id: `${e}-created-by-clear`,
      onClickCallback: e => {
        i(e, null);
      },
      path: [...t, 2],
      rowHeight: CO.SHORT,
      rowStyle: yY.BRAND_HOVER,
      sideElementAlwaysVisible: !0,
      text: getI18nString("search.facets.clear_all")
    })
  });
}
export function $$v1({
  icon: e,
  id: t,
  isChecked: i,
  onClickCallback: a,
  path: s,
  query: d,
  text: c
}) {
  let u = useCallback((e, {
    event: t
  }) => {
    a(t);
  }, [a]);
  return jsx(cr, {
    disableRecentSearchOnClick: !0,
    href: "",
    icon: e,
    id: t,
    onClickCallback: a,
    path: s,
    rowHeight: CO.SHORT,
    rowStyle: yY.CHECKBOX,
    sideElement: jsx(Checkbox, {
      onChange: u,
      checked: i,
      label: jsx(HiddenLabel, {
        children: c
      })
    }),
    sideElementAlwaysVisible: !0,
    text: c,
    textToHighlight: d
  });
}
export const HY = $$y0;
export const b3 = $$v1;
export const kI = $$b2;