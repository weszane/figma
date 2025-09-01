import { jsx } from "react/jsx-runtime";
import { memo, useMemo, Children } from "react";
import { Gq } from "../figma_app/363242";
export let $$s0 = memo(function (e) {
  let t = e.locale || Gq().getPrimaryLocale(!1);
  let r = useMemo(() => new Intl.ListFormat(t, {
    style: e.formatStyle || "long",
    type: e.formatType || "conjunction"
  }), [t, e.formatStyle, e.formatType]);
  let s = Children.toArray(e.children);
  let o = r.formatToParts(s.map((e, t) => `${t}`)).map((e, t) => "element" === e.type ? s[Number(e.value)] : "literal" === e.type ? jsx("span", {
    children: e.value
  }, `${t}_literal`) : null);
  return jsx("span", {
    className: e.className || "",
    children: o
  });
});
export const T = $$s0;