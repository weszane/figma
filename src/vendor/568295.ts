import { A } from "../vendor/10264";
import { pK } from "../vendor/210601";
import { P } from "../vendor/737320";
import { C7 } from "../vendor/57788";
import { Bi } from "../vendor/832351";
import { I as _$$I } from "../vendor/449592";
import { $ as _$$$ } from "../vendor/334217";
import { v as _$$v } from "../vendor/272995";
import { Lf } from "../vendor/533885";
import { M as _$$M } from "../vendor/973601";
import { R as _$$R } from "../vendor/955789";
import { o as _$$o } from "../vendor/218120";
import { Y } from "../vendor/259657";
import { useMemo, useRef } from "react";
export function $$y0(e, t, a) {
  var y;
  let g = Bi();
  let v = Bi();
  let b = Bi();
  let E = _$$o((y = A) && y.__esModule ? y.$$default : y, "@react-aria/datepicker");
  let {
    isInvalid,
    validationErrors,
    validationDetails
  } = t.displayValidation;
  let {
    labelProps,
    fieldProps,
    descriptionProps,
    errorMessageProps
  } = _$$M({
    ...e,
    labelElementType: "span",
    isInvalid,
    errorMessage: e.errorMessage || validationErrors
  });
  let $ = P(t, a);
  let R = fieldProps["aria-labelledby"] || fieldProps.id;
  let {
    locale
  } = Y();
  let S = t.formatValue(locale, {
    month: "long"
  });
  let T = S ? E.format("selectedDateDescription", {
    date: S
  }) : "";
  let M = _$$I(T);
  let V = [M["aria-describedby"], fieldProps["aria-describedby"]].filter(Boolean).join(" ") || void 0;
  let I = _$$$(e);
  let N = useMemo(() => C7(a), [a]);
  let L = useRef(!1);
  let {
    focusWithinProps
  } = _$$R({
    ...e,
    isDisabled: t.isOpen,
    onBlurWithin: t => {
      let a = document.getElementById(v);
      if (!a?.contains(t.relatedTarget)) {
        var u;
        var n;
        L.current = !1;
        e.onBlur?.call(e, t);
        e.onFocusChange?.call(e, !1);
      }
    },
    onFocusWithin: t => {
      if (!L.current) {
        var a;
        var u;
        L.current = !0;
        e.onFocus?.call(e, t);
        e.onFocusChange?.call(e, !0);
      }
    }
  });
  return {
    groupProps: _$$v(I, $, fieldProps, M, focusWithinProps, {
      role: "group",
      "aria-disabled": e.isDisabled || null,
      "aria-labelledby": R,
      "aria-describedby": V,
      onKeyDown(a) {
        !t.isOpen && e.onKeyDown && e.onKeyDown(a);
      },
      onKeyUp(a) {
        !t.isOpen && e.onKeyUp && e.onKeyUp(a);
      }
    }),
    labelProps: {
      ...labelProps,
      onClick: () => {
        N.focusFirst();
      }
    },
    fieldProps: {
      ...fieldProps,
      id: b,
      [pK]: "presentation",
      "aria-describedby": V,
      value: t.value,
      defaultValue: t.defaultValue,
      onChange: t.setValue,
      placeholderValue: e.placeholderValue,
      hideTimeZone: e.hideTimeZone,
      hourCycle: e.hourCycle,
      shouldForceLeadingZeros: e.shouldForceLeadingZeros,
      granularity: e.granularity,
      isDisabled: e.isDisabled,
      isReadOnly: e.isReadOnly,
      isRequired: e.isRequired,
      validationBehavior: e.validationBehavior,
      [Lf]: t,
      autoFocus: e.autoFocus,
      name: e.name,
      form: e.form
    },
    descriptionProps,
    errorMessageProps,
    buttonProps: {
      ...M,
      id: g,
      "aria-haspopup": "dialog",
      "aria-label": E.format("calendar"),
      "aria-labelledby": `${g} ${R}`,
      "aria-describedby": V,
      "aria-expanded": t.isOpen,
      isDisabled: e.isDisabled || e.isReadOnly,
      onPress: () => t.setOpen(!0)
    },
    dialogProps: {
      id: v,
      "aria-labelledby": `${g} ${R}`
    },
    calendarProps: {
      autoFocus: !0,
      value: t.dateValue,
      onChange: t.setDateValue,
      minValue: e.minValue,
      maxValue: e.maxValue,
      isDisabled: e.isDisabled,
      isReadOnly: e.isReadOnly,
      isDateUnavailable: e.isDateUnavailable,
      defaultFocusedValue: t.dateValue ? void 0 : e.placeholderValue,
      isInvalid: t.isInvalid,
      errorMessage: "function" == typeof e.errorMessage ? e.errorMessage(t.displayValidation) : e.errorMessage || t.displayValidation.validationErrors.join(" ")
    },
    isInvalid,
    validationErrors,
    validationDetails
  };
}
export const Q = $$y0;