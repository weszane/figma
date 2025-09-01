import { bf, nz, $l, id } from "../vendor/297989";
import { gw, tR } from "../vendor/857147";
import { p as _$$p } from "../vendor/378995";
import { KZ } from "../vendor/533885";
import { useCallback, useState, useMemo } from "react";
import { P as _$$P } from "../vendor/735151";
export function $$s0(e) {
  var t;
  var a;
  let s = function (e) {
    let [t, a] = _$$P(e.isOpen, e.defaultOpen || !1, e.onOpenChange);
    let u = useCallback(() => {
      a(!0);
    }, [a]);
    let n = useCallback(() => {
      a(!1);
    }, [a]);
    let r = useCallback(() => {
      a(!t);
    }, [a, t]);
    return {
      isOpen: t,
      setOpen: a,
      open: u,
      close: n,
      toggle: r
    };
  }(e);
  let [d, c] = _$$P(e.value, e.defaultValue || null, e.onChange);
  let [m] = useState(d);
  let h = d || e.placeholderValue || null;
  let [D, f] = bf(h, e.granularity);
  let p = null != d ? d.toDate(null != f ? f : "UTC") : null;
  let y = "hour" === D || "minute" === D || "second" === D;
  let g = e.shouldCloseOnSelect || t;
  let [v, b] = useState(null);
  let [E, C] = useState(null);
  if (d && (v = d, "hour" in d && (E = d)), h && !(D in h)) throw Error("Invalid granularity " + D + " for value " + h.toString());
  let x = d?.calendar.identifier === "gregory" && "BC" === d.era;
  let B = useMemo(() => ({
    granularity: D,
    timeZone: f,
    hideTimeZone: e.hideTimeZone,
    hourCycle: e.hourCycle,
    shouldForceLeadingZeros: e.shouldForceLeadingZeros,
    showEra: x
  }), [D, e.hourCycle, e.shouldForceLeadingZeros, f, e.hideTimeZone, x]);
  let {
    minValue,
    maxValue,
    isDateUnavailable
  } = e;
  let P = useMemo(() => nz(d, minValue, maxValue, isDateUnavailable, B), [d, minValue, maxValue, isDateUnavailable, B]);
  let $ = KZ({
    ...e,
    value: d,
    builtinValidation: P
  });
  let R = $.displayValidation.isInvalid;
  let A = e.validationState || (R ? "invalid" : null);
  let S = (e, t) => {
    c("timeZone" in t ? t.set(gw(e)) : tR(e, t));
    b(null);
    C(null);
    $.commitValidation();
  };
  return {
    ...$,
    value: d,
    defaultValue: null !== (a = e.defaultValue) && void 0 !== a ? a : m,
    setValue: c,
    dateValue: v,
    timeValue: E,
    setDateValue: t => {
      let a = "function" == typeof g ? g() : g;
      y ? E || a ? S(t, E || $l(e.defaultValue || e.placeholderValue)) : b(t) : (c(t), $.commitValidation());
      a && s.setOpen(!1);
    },
    setTimeValue: e => {
      v && e ? S(v, e) : C(e);
    },
    granularity: D,
    hasTime: y,
    ...s,
    setOpen(t) {
      !t && !d && v && y && S(v, E || $l(e.defaultValue || e.placeholderValue));
      s.setOpen(t);
    },
    validationState: A,
    isInvalid: R,
    formatValue(e, t) {
      if (!p) return "";
      let a = id(t, B);
      return new _$$p(e, a).format(p);
    },
    getDateFormatter(e, t) {
      let a = {
        ...B,
        ...t
      };
      let n = id({}, a);
      return new _$$p(e, n);
    }
  };
}
export const j = $$s0;