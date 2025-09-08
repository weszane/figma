import { jsx, jsxs } from "react/jsx-runtime";
import { forwardRef } from "react";
import { Description } from "../905/21985";
import { generateInputId, generateDescId } from "../905/786321";
import { useSelectionProvider } from "../905/751750";
import { v } from "../905/442517";
export let $$$$d0 = forwardRef(({
  label: e,
  children: t,
  htmlAttributes: i,
  ...r
}, d) => {
  let c = !!t;
  let [u, p] = useSelectionProvider();
  let m = generateInputId(u);
  let h = c ? generateDescId(u) : void 0;
  return jsx(p, {
    value: u,
    children: jsxs("div", {
      className: "switch__root__K7xJr",
      children: [jsx(v, {
        ...r,
        id: m,
        htmlAttributes: i,
        ref: d,
        "aria-describedby": h
      }), e, c && jsx(Description, {
        className: "switch__description__I3Yn2",
        children: t
      })]
    })
  });
});
$$$$d0.displayName = "Switch";
export const d = $$$$d0;