import { A } from "../vendor/10264";
import { P } from "../vendor/737320";
import { C7 } from "../vendor/57788";
import { I as _$$I } from "../vendor/449592";
import { v as _$$v } from "../vendor/272995";
import { J } from "../vendor/578159";
import { useRef, useMemo, useEffect } from "react";
import { $ } from "../vendor/334217";
import { M } from "../vendor/973601";
import { R } from "../vendor/955789";
import { Cl } from "../vendor/49330";
import { N as _$$N } from "../vendor/791199";
import { o as _$$o } from "../vendor/218120";
let $$p0 = new WeakMap();
let $$y1 = "__role_" + Date.now();
let g = "__focusManager_" + Date.now();
export function $$v2(e, t, a) {
  var v;
  var b;
  var E;
  var C;
  var x;
  let B;
  let w;
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
  } = M({
    ...e,
    labelElementType: "span",
    isInvalid,
    errorMessage: e.errorMessage || validationErrors
  });
  let T = useRef(null);
  let {
    focusWithinProps
  } = R({
    ...e,
    onFocusWithin(a) {
      var u;
      T.current = t.value;
      e.onFocus?.call(e, a);
    },
    onBlurWithin: a => {
      var u;
      t.confirmPlaceholder();
      t.value !== T.current && t.commitValidation();
      e.onBlur?.call(e, a);
    },
    onFocusWithinChange: e.onFocusChange
  });
  let V = _$$o((b = A) && b.__esModule ? b.$$default : b, "@react-aria/datepicker");
  let I = "hour" === t.maxGranularity ? "selectedTimeDescription" : "selectedDateDescription";
  let N = "hour" === t.maxGranularity ? "time" : "date";
  let L = t.value ? V.format(I, {
    [N]: t.formatValue({
      month: "long"
    })
  }) : "";
  let O = _$$I(L);
  let j = "presentation" === e[$$y1] ? fieldProps["aria-describedby"] : [O["aria-describedby"], fieldProps["aria-describedby"]].filter(Boolean).join(" ") || void 0;
  let z = e[g];
  let U = useMemo(() => z || C7(a), [z, a]);
  let K = P(t, a, "presentation" === e[$$y1]);
  $$p0.set(t, {
    ariaLabel: e["aria-label"],
    ariaLabelledBy: [labelProps.id, e["aria-labelledby"]].filter(Boolean).join(" ") || void 0,
    ariaDescribedBy: j,
    focusManager: U
  });
  let Z = useRef(e.autoFocus);
  B = "presentation" === e[$$y1] ? {
    role: "presentation"
  } : _$$v(fieldProps, {
    role: "group",
    "aria-disabled": e.isDisabled || void 0,
    "aria-describedby": j
  });
  useEffect(() => {
    Z.current && U.focusFirst();
    Z.current = !1;
  }, [U]);
  E = e.inputRef;
  C = t.defaultValue;
  x = t.setValue;
  w = J(() => {
    x && x(C);
  });
  useEffect(() => {
    var e;
    let t = E?.current?.form;
    t?.addEventListener("reset", w);
    return () => {
      t?.removeEventListener("reset", w);
    };
  }, [E, w]);
  (function (e, t, a) {
    let {
      validationBehavior,
      focus
    } = e;
    _$$N(() => {
      if ("native" === validationBehavior && a?.current && !a.current.disabled) {
        var e;
        let u;
        let n = t.realtimeValidation.isInvalid ? t.realtimeValidation.validationErrors.join(" ") || "Invalid value." : "";
        a.current.setCustomValidity(n);
        a.current.hasAttribute("title") || (a.current.title = "");
        t.realtimeValidation.isInvalid || t.updateValidation({
          isInvalid: !(e = a.current).validity.valid,
          validationDetails: {
            badInput: (u = e.validity).badInput,
            customError: u.customError,
            patternMismatch: u.patternMismatch,
            rangeOverflow: u.rangeOverflow,
            rangeUnderflow: u.rangeUnderflow,
            stepMismatch: u.stepMismatch,
            tooLong: u.tooLong,
            tooShort: u.tooShort,
            typeMismatch: u.typeMismatch,
            valueMissing: u.valueMissing,
            valid: u.valid
          },
          validationErrors: e.validationMessage ? [e.validationMessage] : []
        });
      }
    });
    let r = useRef(!1);
    let i = J(() => {
      r.current || t.resetValidation();
    });
    let o = J(e => {
      var u;
      var r;
      t.displayValidation.isInvalid || t.commitValidation();
      let i = a?.current?.form;
      !e.defaultPrevented && a && i && function (e) {
        for (let t = 0; t < e.elements.length; t++) {
          let a = e.elements[t];
          if (!a.validity.valid) return a;
        }
        return null;
      }(i) === a.current && (focus ? focus() : a.current?.focus(), Cl("keyboard"));
      e.preventDefault();
    });
    let d = J(() => {
      t.commitValidation();
    });
    useEffect(() => {
      let e = a?.current;
      if (!e) return;
      let t = e.form;
      let u = t?.reset;
      t && (t.reset = () => {
        r.current = !window.event || "message" === window.event.type && window.event.target instanceof MessagePort;
        u?.call(t);
        r.current = !1;
      });
      e.addEventListener("invalid", o);
      e.addEventListener("change", d);
      t?.addEventListener("reset", i);
      return () => {
        e.removeEventListener("invalid", o);
        e.removeEventListener("change", d);
        t?.removeEventListener("reset", i);
        t && (t.reset = u);
      };
    }, [a, o, d, i, validationBehavior]);
  })({
    ...e,
    focus() {
      U.focusFirst();
    }
  }, t, e.inputRef);
  let _ = {
    type: "hidden",
    name: e.name,
    form: e.form,
    value: t.value?.toString() || "",
    disabled: e.isDisabled
  };
  "native" === e.validationBehavior && (_.type = "text", _.hidden = !0, _.required = e.isRequired, _.onChange = () => {});
  let W = $(e);
  return {
    labelProps: {
      ...labelProps,
      onClick: () => {
        U.focusFirst();
      }
    },
    fieldProps: _$$v(W, B, K, focusWithinProps, {
      onKeyDown(t) {
        e.onKeyDown && e.onKeyDown(t);
      },
      onKeyUp(t) {
        e.onKeyUp && e.onKeyUp(t);
      },
      style: {
        unicodeBidi: "isolate"
      }
    }),
    inputProps: _,
    descriptionProps,
    errorMessageProps,
    isInvalid,
    validationErrors,
    validationDetails
  };
}
export const OX = $$p0;
export const pK = $$y1;
export const cJ = $$v2;