import { jsx, jsxs } from "react/jsx-runtime";
import { forwardRef, useRef, useEffect } from "react";
import { k } from "../905/443820";
import { ButtonPrimitive } from "../905/632989";
import s from "classnames";
var l = s;
export let $$d0 = forwardRef(function ({
  shouldBeVisible: e,
  items: t,
  onItemSelect: n,
  selectedIndex: s,
  isLoading: d
}, c) {
  let _ = useRef(null);
  return (useEffect(() => {
    _.current && c.current && _.current.scrollIntoView({
      block: "nearest",
      behavior: "smooth"
    });
  }, [s, c]), e && (0 !== t.length || d)) ? jsx("div", {
    className: "component_browser_input_dropdown--container--2FBO7",
    children: d ? jsx("li", {
      className: "component_browser_input_dropdown--loading--dViPC",
      children: jsx(k, {})
    }) : jsx("ul", {
      ref: c,
      className: "component_browser_input_dropdown--list--m1Kui",
      children: t.map((e, t) => jsx("li", {
        ref: t === s ? _ : null,
        children: jsx(ButtonPrimitive, {
          className: l()("component_browser_input_dropdown--item--7nu7x", {
            "component_browser_input_dropdown--selected--CWEgq": t === s
          }),
          onClick: () => n(e, t),
          children: jsxs("div", {
            className: "component_browser_input_dropdown--content--eGCcQ",
            children: [jsx("div", {
              className: "component_browser_input_dropdown--title--LeadU",
              children: e.title
            }), e.subtitle && jsx("div", {
              className: "component_browser_input_dropdown--subtitle--8GQKQ",
              children: e.subtitle
            })]
          })
        })
      }, t))
    })
  }) : null;
});
export const O = $$d0;