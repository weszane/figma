import { jsxs, jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { Description } from "../905/21985";
import { generateInputId, generateDescId } from "../905/786321";
import { useSelectionProvider } from "../905/751750";
import { ManuallyLabeledRadioRoot, ManuallyLabeledRadioOption } from "../905/618904";
import { UX, zr, h_ } from "../905/434007";
export let $$c0 = forwardRef(function ({
  legend: e,
  children: t,
  ...i
}, r) {
  return jsxs(ManuallyLabeledRadioRoot, {
    ref: r,
    ...i,
    children: [e, jsx("div", {
      className: UX,
      children: t
    })]
  });
});
$$c0.displayName = "RadioInput.Root";
export let $$u1 = forwardRef(function ({
  label: e,
  children: t,
  htmlAttributes: i,
  ...r
}, c) {
  let u = !!t;
  let [p, m] = useSelectionProvider();
  let h = generateInputId(p);
  let g = u ? generateDescId(p) : void 0;
  return jsx(m, {
    value: p,
    children: jsxs("div", {
      className: zr,
      children: [jsx(ManuallyLabeledRadioOption, {
        id: h,
        ...r,
        htmlAttributes: i,
        "aria-describedby": g,
        ref: c
      }), e, u && jsx(Description, {
        className: h_,
        children: t
      })]
    })
  });
});
$$u1.displayName = "RadioInput.Option";
export const b = $$c0;
export const c = $$u1;