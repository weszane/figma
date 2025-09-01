import { jsx, jsxs } from "react/jsx-runtime";
import { forwardRef } from "react";
import r from "classnames";
var i = r;
export let $$s0 = forwardRef(function ({
  label: e,
  labelId: t,
  input: n,
  ...l
}, r) {
  return jsx(d, {
    label: e,
    labelId: t,
    input: n,
    inputSize: "normal",
    ...l,
    ref: r
  });
});
forwardRef(function ({
  label: e,
  input: t,
  ...n
}, l) {
  return jsx(d, {
    label: e,
    input: t,
    inputSize: "small",
    ...n,
    ref: l
  });
});
let $$o1 = forwardRef(function ({
  label: e,
  input: t,
  ...n
}, l) {
  return jsx(d, {
    label: e,
    input: t,
    inputSize: "large",
    ...n,
    ref: l
  });
});
let d = forwardRef(function ({
  label: e,
  labelId: t,
  input: n,
  inputSize: l,
  ...r
}, s) {
  let o = i()({
    "ui3_inline_label_input_rows--ui3LabelInputRow--5r770 ui3_rows--_row--DnZFk ui3_rows--_grid--cP2Wu": !0,
    "ui3_inline_label_input_rows--ui3LabelInputSmall--s82mn": "small" === l,
    "ui3_inline_label_input_rows--ui3LabelInputNormal--dBjze": "normal" === l,
    "ui3_inline_label_input_rows--ui3LabelInputLarge--GYw7P": "large" === l
  });
  return jsxs("div", {
    className: o,
    ref: s,
    ...r,
    "data-non-interactive": !0,
    children: [jsx("div", {
      id: t,
      className: "ui3_inline_label_input_rows--ui3RowInlineLabel--UavwX",
      "data-non-interactive": !0,
      children: e
    }), jsx("div", {
      className: "ui3_inline_label_input_rows--ui3RowInput--E7ksx",
      "data-non-interactive": !0,
      children: n
    })]
  });
});
export const No = $$s0;
export const iz = $$o1;