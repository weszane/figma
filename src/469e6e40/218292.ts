import { jsxs, jsx } from "react/jsx-runtime";
import { useEffect } from "react";
import { ServiceCategories } from "../905/165054";
import { SelectGroupLabel, SelectContainer, SelectRoot, SelectOptionReset } from "../905/493196";
import { reportError } from "../905/11";
import { X } from "../469e6e40/721568";
if (443 == require.j) {}
function d(e) {
  return "separator" === e;
}
export function $$c0({
  ariaLabel: e,
  disabled: t,
  options: a,
  getOptionValue: c,
  getOptionLabel: _,
  onChange: u,
  value: m
}) {
  let p = a.filter(e => !d(e)).find(e => c(e) === m);
  return (useEffect(() => {
    p || reportError(ServiceCategories.SCALE, Error("[Members table - SelectCell] currently selected value not found in options list"), {
      extra: {
        currentValue: m,
        options: a
      }
    });
  }, [p, m, a]), p) ? jsxs(SelectGroupLabel, {
    value: m,
    onChange: u,
    children: [jsx(X, {
      ariaLabel: e,
      disabled: t,
      children: _(p)
    }), jsx(SelectContainer, {
      DEPRECATED_optionsOnFocusOnly: !0,
      children: a.map((e, t) => {
        if (d(e)) return jsx(SelectRoot, {}, `separator-${t}`);
        let a = c(e);
        return jsx(SelectOptionReset, {
          value: a,
          children: _(e)
        }, a);
      })
    })]
  }) : null;
}
export const q = $$c0;