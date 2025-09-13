import { jsxs, jsx } from "react/jsx-runtime";
import { forwardRef, useRef, useImperativeHandle, useEffect, useId } from "react";
import { w } from "../905/442596";
import { l as _$$l } from "../905/479687";
import o from "classnames";
import { u2 } from "../905/511649";
import { TextWithTruncation } from "../905/838445";
import { A } from "../6828/954206";
import { A as _$$A } from "../6828/482039";
var l = o;
export let $$m0 = forwardRef((e, t) => {
  let {
    label,
    description,
    checked = !1,
    mixed = !1,
    disabled,
    onChange,
    onKeyDown,
    recordingKey
  } = e;
  let y = useRef(null);
  useImperativeHandle(t, () => y.current);
  useEffect(() => {
    y.current && (y.current.indeterminate = mixed);
  }, [mixed]);
  let b = useId();
  let v = `${b}-check`;
  let I = `${b}-desc`;
  let E = mixed ? _$$A : checked ? A : null;
  return jsxs("div", {
    className: "checkbox--checkLabelDescriptionContainer--NjaZ4",
    children: [jsxs("div", {
      className: "checkbox--checkAndLabelContainer--v09nP",
      children: [jsxs("div", {
        className: "checkbox--checkWrapper--nHmJ0",
        children: [jsx(u2, {
          "aria-describedby": description ? I : void 0,
          checked,
          className: l()("checkbox--input--dQMU-", {
            "checkbox--filled--WJH3o": checked || mixed
          }),
          disabled,
          forwardedRef: y,
          id: v,
          onChange,
          onKeyDown,
          recordingKey,
          type: "checkbox"
        }), E && jsx("div", {
          className: "checkbox--svg---GjIJ",
          "aria-hidden": !0,
          children: mixed ? jsx(w, {}) : jsx(_$$l, {})
        })]
      }), label && jsx("label", {
        className: "checkbox--label--ev6kh",
        htmlFor: v,
        children: jsx(TextWithTruncation, {
          ...(e.truncateLabel ?? {}),
          fontSize: 11,
          color: disabled ? "disabled" : "default",
          children: label
        })
      })]
    }), description && jsx("div", {
      className: "checkbox--description--AZF1u",
      id: I,
      children: jsx(TextWithTruncation, {
        fontSize: 11,
        color: disabled ? "disabled" : "secondary",
        children: description
      })
    })]
  });
});
export const S = $$m0;