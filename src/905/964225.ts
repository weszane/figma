import { jsx } from "react/jsx-runtime";
import { forwardRef, useRef, useId, useImperativeHandle } from "react";
import { Checkbox } from "../905/274480";
import { Label } from "../905/270045";
import { getI18nString, renderI18nText } from "../905/303541";
import { FieldContainer } from "../905/567946";
export let $$d0 = forwardRef(function ({}, e) {
  let t = useRef(null);
  let i = useId();
  let d = `${i}-description`;
  useImperativeHandle(e, () => ({
    focus: e => {
      t.current?.focus(e);
    }
  }), []);
  return jsx(FieldContainer, {
    label: getI18nString("community.publishing.prompt_visibility_checkbox.row_label"),
    subLabel: getI18nString("community.publishing.prompt_visibility_checkbox.description"),
    subLabelId: d,
    children: jsx(Checkbox, {
      ref: t,
      label: jsx(Label, {
        children: renderI18nText("community.publishing.prompt_visibility_checkbox.label")
      }),
      "aria-describedby": d,
      checked: !0,
      disabled: !0
    })
  });
});
export const m = $$d0;