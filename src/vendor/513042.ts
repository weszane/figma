import { D as _$$D, wH, kq, ZI, Py, Ec, Jg, $I, p9, ro, SJ } from "../vendor/969425";
import { gw, yP } from "../vendor/857147";
import { p as _$$p } from "../vendor/378995";
import { FG } from "../vendor/857755";
import { P as _$$P } from "../vendor/735151";
import { useMemo, useState } from "react";
function r(e, t, a) {
  return null != t && 0 > e.compare(t) || null != a && e.compare(a) > 0;
}
function i(e, t, a, u, n) {
  let r = {};
  for (let e in t) {
    r[e] = Math.floor(t[e] / 2);
    r[e] > 0 && t[e] % 2 == 0 && r[e]--;
  }
  let i = o(e, t, a).subtract(r);
  return s(e, i, t, a, u, n);
}
function o(e, t, a, n, r) {
  let i = e;
  t.years ? i = _$$D(e) : t.months ? i = wH(e) : t.weeks && (i = kq(e, a));
  return s(e, i, t, a, n, r);
}
function l(e, t, a, u, n) {
  let r = {
    ...t
  };
  r.days ? r.days-- : r.weeks ? r.weeks-- : r.months ? r.months-- : r.years && r.years--;
  let i = o(e, t, a).subtract(r);
  return s(e, i, t, a, u, n);
}
function s(e, t, a, r, i, s) {
  if (i && e.compare(i) >= 0) {
    let e = ZI(t, o(gw(i), a, r));
    e && (t = e);
  }
  if (s && 0 >= e.compare(s)) {
    let e = Py(t, l(gw(s), a, r));
    e && (t = e);
  }
  return t;
}
function d(e, t, a) {
  if (t) {
    let a = ZI(e, gw(t));
    a && (e = a);
  }
  if (a) {
    let t = Py(e, gw(a));
    t && (e = t);
  }
  return e;
}
export function $$f0(e) {
  var t;
  var a;
  var f;
  let y = useMemo(() => new _$$p(e.locale), [e.locale]);
  let g = useMemo(() => y.resolvedOptions(), [y]);
  let {
    locale,
    createCalendar,
    visibleDuration = {
      months: 1
    },
    minValue,
    maxValue,
    selectionAlignment,
    isDateUnavailable,
    pageBehavior = "visible",
    firstDayOfWeek
  } = e;
  let P = useMemo(() => createCalendar(g.calendar), [createCalendar, g.calendar]);
  let [$, R] = _$$P(e.value, null !== (t = e.defaultValue) && void 0 !== t ? t : null, e.onChange);
  let A = useMemo(() => $ ? yP(gw($), P) : null, [$, P]);
  let S = useMemo(() => $ && "timeZone" in $ ? $.timeZone : g.timeZone, [$, g.timeZone]);
  let T = useMemo(() => e.focusedValue ? d(yP(gw(e.focusedValue), P), minValue, maxValue) : void 0, [e.focusedValue, P, minValue, maxValue]);
  let M = useMemo(() => d(e.defaultFocusedValue ? yP(gw(e.defaultFocusedValue), P) : A || yP(Ec(S), P), minValue, maxValue), [e.defaultFocusedValue, A, S, P, minValue, maxValue]);
  let [V, I] = _$$P(T, M, e.onFocusChange);
  let [N, L] = useState(() => {
    switch (selectionAlignment) {
      case "start":
        return o(V, visibleDuration, locale, minValue, maxValue);
      case "end":
        return l(V, visibleDuration, locale, minValue, maxValue);
      default:
        return i(V, visibleDuration, locale, minValue, maxValue);
    }
  });
  let [O, j] = useState(e.autoFocus || !1);
  let z = useMemo(() => {
    let e = {
      ...visibleDuration
    };
    e.days ? e.days-- : e.days = -1;
    return N.add(e);
  }, [N, visibleDuration]);
  let [U, K] = useState(P);
  if (!Jg(P, U)) {
    let e = yP(V, P);
    L(i(e, visibleDuration, locale, minValue, maxValue));
    I(e);
    K(P);
  }
  function Z(e) {
    I(e = d(e, minValue, maxValue));
  }
  function _(t) {
    if (!e.isDisabled && !e.isReadOnly) {
      let e = t;
      if (null === e) {
        R(null);
        return;
      }
      (e = function (e, t, a) {
        if (!a) return e;
        for (; e.compare(t) >= 0 && a(e);) e = e.subtract({
          days: 1
        });
        return e.compare(t) >= 0 ? e : null;
      }(e = d(e, minValue, maxValue), N, isDateUnavailable)) && (e = yP(e, $?.calendar || new FG()), $ && "hour" in $ ? R($.set(e)) : R(e));
    }
  }
  r(V, minValue, maxValue) ? I(d(V, minValue, maxValue)) : 0 > V.compare(N) ? L(l(V, visibleDuration, locale, minValue, maxValue)) : V.compare(z) > 0 && L(o(V, visibleDuration, locale, minValue, maxValue));
  let W = useMemo(() => !!A && (!!(isDateUnavailable && isDateUnavailable(A)) || r(A, minValue, maxValue)), [A, isDateUnavailable, minValue, maxValue]);
  let J = e.isInvalid || "invalid" === e.validationState || W;
  let Y = useMemo(() => "visible" === pageBehavior ? visibleDuration : p(visibleDuration), [pageBehavior, visibleDuration]);
  return {
    isDisabled: null !== (a = e.isDisabled) && void 0 !== a && a,
    isReadOnly: null !== (f = e.isReadOnly) && void 0 !== f && f,
    value: A,
    setValue: _,
    visibleRange: {
      start: N,
      end: z
    },
    minValue,
    maxValue,
    focusedDate: V,
    timeZone: S,
    validationState: J ? "invalid" : null,
    isValueInvalid: J,
    setFocusedDate(e) {
      Z(e);
      j(!0);
    },
    focusNextDay() {
      Z(V.add({
        days: 1
      }));
    },
    focusPreviousDay() {
      Z(V.subtract({
        days: 1
      }));
    },
    focusNextRow() {
      visibleDuration.days ? this.focusNextPage() : (visibleDuration.weeks || visibleDuration.months || visibleDuration.years) && Z(V.add({
        weeks: 1
      }));
    },
    focusPreviousRow() {
      visibleDuration.days ? this.focusPreviousPage() : (visibleDuration.weeks || visibleDuration.months || visibleDuration.years) && Z(V.subtract({
        weeks: 1
      }));
    },
    focusNextPage() {
      let e = N.add(Y);
      I(d(V.add(Y), minValue, maxValue));
      L(o(s(V, e, Y, locale, minValue, maxValue), Y, locale));
    },
    focusPreviousPage() {
      let e = N.subtract(Y);
      I(d(V.subtract(Y), minValue, maxValue));
      L(o(s(V, e, Y, locale, minValue, maxValue), Y, locale));
    },
    focusSectionStart() {
      visibleDuration.days ? Z(N) : visibleDuration.weeks ? Z(kq(V, locale)) : (visibleDuration.months || visibleDuration.years) && Z(wH(V));
    },
    focusSectionEnd() {
      visibleDuration.days ? Z(z) : visibleDuration.weeks ? Z($I(V, locale)) : (visibleDuration.months || visibleDuration.years) && Z(p9(V));
    },
    focusNextSection(e) {
      if (!e && !visibleDuration.days) {
        Z(V.add(p(visibleDuration)));
        return;
      }
      visibleDuration.days ? this.focusNextPage() : visibleDuration.weeks ? Z(V.add({
        months: 1
      })) : (visibleDuration.months || visibleDuration.years) && Z(V.add({
        years: 1
      }));
    },
    focusPreviousSection(e) {
      if (!e && !visibleDuration.days) {
        Z(V.subtract(p(visibleDuration)));
        return;
      }
      visibleDuration.days ? this.focusPreviousPage() : visibleDuration.weeks ? Z(V.subtract({
        months: 1
      })) : (visibleDuration.months || visibleDuration.years) && Z(V.subtract({
        years: 1
      }));
    },
    selectFocusedDate() {
      isDateUnavailable && isDateUnavailable(V) || _(V);
    },
    selectDate(e) {
      _(e);
    },
    isFocused: O,
    setFocused: j,
    isInvalid: e => r(e, minValue, maxValue),
    isSelected(e) {
      return null != A && ro(e, A) && !this.isCellDisabled(e) && !this.isCellUnavailable(e);
    },
    isCellFocused: e => O && V && ro(e, V),
    isCellDisabled(t) {
      return e.isDisabled || 0 > t.compare(N) || t.compare(z) > 0 || this.isInvalid(t);
    },
    isCellUnavailable: t => !!e.isDateUnavailable && e.isDateUnavailable(t),
    isPreviousVisibleRangeInvalid() {
      let e = N.subtract({
        days: 1
      });
      return ro(e, N) || this.isInvalid(e);
    },
    isNextVisibleRangeInvalid() {
      let e = z.add({
        days: 1
      });
      return ro(e, z) || this.isInvalid(e);
    },
    getDatesInWeek(e, t = N) {
      let a = t.add({
        weeks: e
      });
      let n = [];
      a = kq(a, locale, firstDayOfWeek);
      let r = SJ(a, locale, firstDayOfWeek);
      for (let e = 0; e < r; e++) n.push(null);
      for (; n.length < 7;) {
        n.push(a);
        let e = a.add({
          days: 1
        });
        if (ro(a, e)) break;
        a = e;
      }
      for (; n.length < 7;) n.push(null);
      return n;
    }
  };
}
function p(e) {
  let t = {
    ...e
  };
  for (let a in e) t[a] = 1;
  return t;
}
export const T = $$f0;