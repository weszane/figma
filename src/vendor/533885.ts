import { createContext, useMemo, useContext, useState, useRef, useEffect } from "react";
let n = {
  badInput: !1,
  customError: !1,
  patternMismatch: !1,
  rangeOverflow: !1,
  rangeUnderflow: !1,
  stepMismatch: !1,
  tooLong: !1,
  tooShort: !1,
  typeMismatch: !1,
  valueMissing: !1,
  valid: !0
};
let r = {
  ...n,
  customError: !0,
  valid: !1
};
let i = {
  isInvalid: !1,
  validationDetails: n,
  validationErrors: []
};
let o = createContext({});
let $$l1 = "__formValidationState" + Date.now();
export function $$s0(e) {
  if (e[$$l1]) {
    let {
      realtimeValidation,
      displayValidation,
      updateValidation,
      resetValidation,
      commitValidation
    } = e[$$l1];
    return {
      realtimeValidation,
      displayValidation,
      updateValidation,
      resetValidation,
      commitValidation
    };
  }
  return function (e) {
    let {
      isInvalid,
      validationState,
      name,
      value,
      builtinValidation,
      validate,
      validationBehavior = "aria"
    } = e;
    validationState && (isInvalid || (t = "invalid" === validationState));
    let f = void 0 !== isInvalid ? {
      isInvalid,
      validationErrors: [],
      validationDetails: r
    } : null;
    let p = useMemo(() => validate && null != value ? c(function (e, t) {
      if ("function" == typeof e) {
        let a = e(t);
        if (a && "boolean" != typeof a) return d(a);
      }
      return [];
    }(validate, value)) : null, [validate, value]);
    builtinValidation?.validationDetails.valid && (s = void 0);
    let y = useContext(o);
    let g = useMemo(() => name ? Array.isArray(name) ? name.flatMap(e => d(y[e])) : d(y[name]) : [], [y, name]);
    let [v, b] = useState(y);
    let [E, C] = useState(!1);
    y !== v && (b(y), C(!1));
    let x = useMemo(() => c(E ? [] : g), [E, g]);
    let B = useRef(i);
    let [w, F] = useState(i);
    let k = useRef(i);
    let [P, $] = useState(!1);
    useEffect(() => {
      if (!P) return;
      $(!1);
      let e = p || builtinValidation || B.current;
      m(e, k.current) || (k.current = e, F(e));
    });
    return {
      realtimeValidation: f || x || p || builtinValidation || i,
      displayValidation: "native" === validationBehavior ? f || x || w : f || x || p || builtinValidation || w,
      updateValidation(e) {
        "aria" !== validationBehavior || m(w, e) ? B.current = e : F(e);
      },
      resetValidation() {
        m(i, k.current) || (k.current = i, F(i));
        "native" === validationBehavior && $(!1);
        C(!0);
      },
      commitValidation() {
        "native" === validationBehavior && $(!0);
        C(!0);
      }
    };
  }(e);
}
function d(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
function c(e) {
  return e.length ? {
    isInvalid: !0,
    validationErrors: e,
    validationDetails: r
  } : null;
}
function m(e, t) {
  return e === t || !!e && !!t && e.isInvalid === t.isInvalid && e.validationErrors.length === t.validationErrors.length && e.validationErrors.every((e, a) => e === t.validationErrors[a]) && Object.entries(e.validationDetails).every(([e, a]) => t.validationDetails[e] === a);
}
export const KZ = $$s0;
export const Lf = $$l1;