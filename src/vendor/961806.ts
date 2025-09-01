import { B } from "../vendor/731692";
import { bf, nf, o_, id, nz } from "../vendor/297989";
import { p as _$$p } from "../vendor/378995";
import { Jg, xz, oT } from "../vendor/969425";
import { yP } from "../vendor/857147";
import { FG } from "../vendor/857755";
import { KZ } from "../vendor/533885";
import { P as _$$P } from "../vendor/735151";
import { useMemo, useState, useRef, useEffect } from "react";
let n = new B({
  ach: {
    year: "mwaka",
    month: "dwe",
    day: "nino"
  },
  af: {
    year: "jjjj",
    month: "mm",
    day: "dd"
  },
  am: {
    year: "\u12D3\u12D3\u12D3\u12D3",
    month: "\u121A\u121C",
    day: "\u1240\u1240"
  },
  an: {
    year: "aaaa",
    month: "mm",
    day: "dd"
  },
  ar: {
    year: "\u0633\u0646\u0629",
    month: "\u0634\u0647\u0631",
    day: "\u064A\u0648\u0645"
  },
  ast: {
    year: "aaaa",
    month: "mm",
    day: "dd"
  },
  az: {
    year: "iiii",
    month: "aa",
    day: "gg"
  },
  be: {
    year: "\u0433\u0433\u0433\u0433",
    month: "\u043C\u043C",
    day: "\u0434\u0434"
  },
  bg: {
    year: "\u0433\u0433\u0433\u0433",
    month: "\u043C\u043C",
    day: "\u0434\u0434"
  },
  bn: {
    year: "yyyy",
    month: "\u09AE\u09BF\u09AE\u09BF",
    day: "dd"
  },
  br: {
    year: "bbbb",
    month: "mm",
    day: "dd"
  },
  bs: {
    year: "gggg",
    month: "mm",
    day: "dd"
  },
  ca: {
    year: "aaaa",
    month: "mm",
    day: "dd"
  },
  cak: {
    year: "jjjj",
    month: "ii",
    day: "q'q'"
  },
  ckb: {
    year: "\u0633\u0627\u06B5",
    month: "\u0645\u0627\u0646\u06AF",
    day: "\u0695\u06C6\u0698"
  },
  cs: {
    year: "rrrr",
    month: "mm",
    day: "dd"
  },
  cy: {
    year: "bbbb",
    month: "mm",
    day: "dd"
  },
  da: {
    year: "\xe5\xe5\xe5\xe5",
    month: "mm",
    day: "dd"
  },
  de: {
    year: "jjjj",
    month: "mm",
    day: "tt"
  },
  dsb: {
    year: "llll",
    month: "mm",
    day: "\u017A\u017A"
  },
  el: {
    year: "\u03B5\u03B5\u03B5\u03B5",
    month: "\u03BC\u03BC",
    day: "\u03B7\u03B7"
  },
  en: {
    year: "yyyy",
    month: "mm",
    day: "dd"
  },
  eo: {
    year: "jjjj",
    month: "mm",
    day: "tt"
  },
  es: {
    year: "aaaa",
    month: "mm",
    day: "dd"
  },
  et: {
    year: "aaaa",
    month: "kk",
    day: "pp"
  },
  eu: {
    year: "uuuu",
    month: "hh",
    day: "ee"
  },
  fa: {
    year: "\u0633\u0627\u0644",
    month: "\u0645\u0627\u0647",
    day: "\u0631\u0648\u0632"
  },
  ff: {
    year: "hhhh",
    month: "ll",
    day: "\xf1\xf1"
  },
  fi: {
    year: "vvvv",
    month: "kk",
    day: "pp"
  },
  fr: {
    year: "aaaa",
    month: "mm",
    day: "jj"
  },
  fy: {
    year: "jjjj",
    month: "mm",
    day: "dd"
  },
  ga: {
    year: "bbbb",
    month: "mm",
    day: "ll"
  },
  gd: {
    year: "bbbb",
    month: "mm",
    day: "ll"
  },
  gl: {
    year: "aaaa",
    month: "mm",
    day: "dd"
  },
  he: {
    year: "\u05E9\u05E0\u05D4",
    month: "\u05D7\u05D5\u05D3\u05E9",
    day: "\u05D9\u05D5\u05DD"
  },
  hr: {
    year: "gggg",
    month: "mm",
    day: "dd"
  },
  hsb: {
    year: "llll",
    month: "mm",
    day: "dd"
  },
  hu: {
    year: "\xe9\xe9\xe9\xe9",
    month: "hh",
    day: "nn"
  },
  ia: {
    year: "aaaa",
    month: "mm",
    day: "dd"
  },
  id: {
    year: "tttt",
    month: "bb",
    day: "hh"
  },
  it: {
    year: "aaaa",
    month: "mm",
    day: "gg"
  },
  ja: {
    year: "\u5E74",
    month: "\u6708",
    day: "\u65E5"
  },
  ka: {
    year: "\u10EC\u10EC\u10EC\u10EC",
    month: "\u10D7\u10D7",
    day: "\u10E0\u10E0"
  },
  kk: {
    year: "\u0436\u0436\u0436\u0436",
    month: "\u0430\u0430",
    day: "\u043A\u043A"
  },
  kn: {
    year: "\u0CB5\u0CB5\u0CB5\u0CB5",
    month: "\u0CAE\u0CBF\u0CAE\u0CC0",
    day: "\u0CA6\u0CBF\u0CA6\u0CBF"
  },
  ko: {
    year: "\uC5F0\uB3C4",
    month: "\uC6D4",
    day: "\uC77C"
  },
  lb: {
    year: "jjjj",
    month: "mm",
    day: "dd"
  },
  lo: {
    year: "\u0E9B\u0E9B\u0E9B\u0E9B",
    month: "\u0E94\u0E94",
    day: "\u0EA7\u0EA7"
  },
  lt: {
    year: "mmmm",
    month: "mm",
    day: "dd"
  },
  lv: {
    year: "gggg",
    month: "mm",
    day: "dd"
  },
  meh: {
    year: "aaaa",
    month: "mm",
    day: "dd"
  },
  ml: {
    year: "\u0D35\u0D7C\u0D37\u0D02",
    month: "\u0D2E\u0D3E\u0D38\u0D02",
    day: "\u0D24\u0D40\u0D2F\u0D24\u0D3F"
  },
  ms: {
    year: "tttt",
    month: "mm",
    day: "hh"
  },
  nl: {
    year: "jjjj",
    month: "mm",
    day: "dd"
  },
  nn: {
    year: "\xe5\xe5\xe5\xe5",
    month: "mm",
    day: "dd"
  },
  no: {
    year: "\xe5\xe5\xe5\xe5",
    month: "mm",
    day: "dd"
  },
  oc: {
    year: "aaaa",
    month: "mm",
    day: "jj"
  },
  pl: {
    year: "rrrr",
    month: "mm",
    day: "dd"
  },
  pt: {
    year: "aaaa",
    month: "mm",
    day: "dd"
  },
  rm: {
    year: "oooo",
    month: "mm",
    day: "dd"
  },
  ro: {
    year: "aaaa",
    month: "ll",
    day: "zz"
  },
  ru: {
    year: "\u0433\u0433\u0433\u0433",
    month: "\u043C\u043C",
    day: "\u0434\u0434"
  },
  sc: {
    year: "aaaa",
    month: "mm",
    day: "dd"
  },
  scn: {
    year: "aaaa",
    month: "mm",
    day: "jj"
  },
  sk: {
    year: "rrrr",
    month: "mm",
    day: "dd"
  },
  sl: {
    year: "llll",
    month: "mm",
    day: "dd"
  },
  sr: {
    year: "\u0433\u0433\u0433\u0433",
    month: "\u043C\u043C",
    day: "\u0434\u0434"
  },
  sv: {
    year: "\xe5\xe5\xe5\xe5",
    month: "mm",
    day: "dd"
  },
  szl: {
    year: "rrrr",
    month: "mm",
    day: "dd"
  },
  tg: {
    year: "\u0441\u0441\u0441\u0441",
    month: "\u043C\u043C",
    day: "\u0440\u0440"
  },
  th: {
    year: "\u0E1B\u0E1B\u0E1B\u0E1B",
    month: "\u0E14\u0E14",
    day: "\u0E27\u0E27"
  },
  tr: {
    year: "yyyy",
    month: "aa",
    day: "gg"
  },
  uk: {
    year: "\u0440\u0440\u0440\u0440",
    month: "\u043C\u043C",
    day: "\u0434\u0434"
  },
  "zh-CN": {
    year: "\u5E74",
    month: "\u6708",
    day: "\u65E5"
  },
  "zh-TW": {
    year: "\u5E74",
    month: "\u6708",
    day: "\u65E5"
  }
}, "en");
let m = {
  year: !0,
  month: !0,
  day: !0,
  hour: !0,
  minute: !0,
  second: !0,
  dayPeriod: !0,
  era: !0
};
let h = {
  year: 5,
  month: 2,
  day: 7,
  hour: 2,
  minute: 15,
  second: 15
};
let D = {
  dayperiod: "dayPeriod",
  relatedYear: "year",
  yearName: "literal",
  unknown: "literal"
};
export function $$f0(e) {
  var t;
  var a;
  var f;
  let {
    locale,
    createCalendar,
    hideTimeZone,
    isDisabled = !1,
    isReadOnly = !1,
    isRequired = !1,
    minValue,
    maxValue,
    isDateUnavailable
  } = e;
  let F = e.value || e.defaultValue || e.placeholderValue || null;
  let [k, P] = bf(F, e.granularity);
  let $ = P || "UTC";
  if (F && !(k in F)) throw Error("Invalid granularity " + k + " for value " + F.toString());
  let R = useMemo(() => new _$$p(locale), [locale]);
  let A = useMemo(() => createCalendar(R.resolvedOptions().calendar), [createCalendar, R]);
  let [S, T] = _$$P(e.value, null !== (t = e.defaultValue) && void 0 !== t ? t : null, e.onChange);
  let [M] = useState(S);
  let V = useMemo(() => {
    var e;
    return null !== (e = nf(S, A)) && void 0 !== e ? e : null;
  }, [S, A]);
  let [I, N] = useState(() => o_(e.placeholderValue, k, A, P));
  let L = "gregory" === A.identifier && "BC" === (V || I).era;
  let O = useMemo(() => {
    var t;
    return {
      granularity: k,
      maxGranularity: null !== (t = e.maxGranularity) && void 0 !== t ? t : "year",
      timeZone: P,
      hideTimeZone,
      hourCycle: e.hourCycle,
      showEra: L,
      shouldForceLeadingZeros: e.shouldForceLeadingZeros
    };
  }, [e.maxGranularity, k, e.hourCycle, e.shouldForceLeadingZeros, P, hideTimeZone, L]);
  let j = useMemo(() => id({}, O), [O]);
  let z = useMemo(() => new _$$p(locale, j), [locale, j]);
  let U = useMemo(() => z.resolvedOptions(), [z]);
  let K = useMemo(() => z.formatToParts(new Date()).filter(e => m[e.type]).reduce((e, t) => (e[D[t.type] || t.type] = !0, e), {}), [z]);
  let [Z, _] = useState(() => e.value || e.defaultValue ? {
    ...K
  } : {});
  let W = useRef(null);
  let J = useRef(A);
  useEffect(() => {
    Jg(A, J.current) || (J.current = A, N(t => Object.keys(Z).length > 0 ? yP(t, A) : o_(e.placeholderValue, k, A, P)));
  }, [A, k, Z, P, e.placeholderValue]);
  S && Object.keys(Z).length < Object.keys(K).length && _(Z = {
    ...K
  });
  null == S && Object.keys(Z).length === Object.keys(K).length && (_(Z = {}), N(o_(e.placeholderValue, k, A, P)));
  let Y = V && Object.keys(Z).length >= Object.keys(K).length ? V : I;
  let G = t => {
    if (e.isDisabled || e.isReadOnly) return;
    let a = Object.keys(Z);
    let n = Object.keys(K);
    null == t ? (T(null), N(o_(e.placeholderValue, k, A, P)), _({})) : 0 === a.length && null == W.current || a.length >= n.length || a.length === n.length - 1 && K.dayPeriod && !Z.dayPeriod && "dayPeriod" !== W.current ? (0 === a.length && _(Z = {
      ...K
    }), T(t = yP(t, F?.calendar || new FG()))) : N(t);
    W.current = null;
  };
  let H = useMemo(() => Y.toDate($), [Y, $]);
  let q = useMemo(() => function (e, t, a, u, r, i, o, l) {
    let s = ["hour", "minute", "second"];
    let d = a.formatToParts(e);
    let c = [];
    for (let e of d) {
      var h;
      let a = D[e.type] || e.type;
      let d = m[a];
      "era" === a && 1 === i.getEras().length && (d = !1);
      let f = m[a] && !t[a];
      let y = m[a] ? (h = e.value, "era" === a || "dayPeriod" === a ? h : "year" === a || "month" === a || "day" === a ? n.getStringForLocale(a, o) : "\u2013\u2013") : null;
      let g = {
        type: a,
        text: f ? y : e.value,
        ...p(r, a, u),
        isPlaceholder: f,
        placeholder: y,
        isEditable: d
      };
      "hour" === a ? (c.push({
        type: "literal",
        text: "\u2066",
        ...p(r, "literal", u),
        isPlaceholder: !1,
        placeholder: "",
        isEditable: !1
      }), c.push(g), a === l && c.push({
        type: "literal",
        text: "\u2069",
        ...p(r, "literal", u),
        isPlaceholder: !1,
        placeholder: "",
        isEditable: !1
      })) : s.includes(a) && a === l ? (c.push(g), c.push({
        type: "literal",
        text: "\u2069",
        ...p(r, "literal", u),
        isPlaceholder: !1,
        placeholder: "",
        isEditable: !1
      })) : c.push(g);
    }
    return c;
  }(H, Z, z, U, Y, A, locale, k), [H, Z, z, U, Y, A, locale, k]);
  K.era && Z.year && !Z.era ? (Z.era = !0, _({
    ...Z
  })) : !K.era && Z.era && (delete Z.era, _({
    ...Z
  }));
  let Q = e => {
    Z[e] = !0;
    "year" === e && K.era && (Z.era = !0);
    _({
      ...Z
    });
  };
  let X = (e, t) => {
    if (Z[e]) G(function (e, t, a, u) {
      switch (t) {
        case "era":
        case "year":
        case "month":
        case "day":
          return e.cycle(t, a, {
            round: "year" === t
          });
      }
      if ("hour" in e) switch (t) {
        case "dayPeriod":
          {
            let t = e.hour;
            return e.set({
              hour: t >= 12 ? t - 12 : t + 12
            });
          }
        case "hour":
        case "minute":
        case "second":
          return e.cycle(t, a, {
            round: "hour" !== t,
            hourCycle: u.hour12 ? 12 : 24
          });
      }
      throw Error("Unknown segment: " + t);
    }(Y, e, t, U));else {
      Q(e);
      let t = Object.keys(Z);
      let a = Object.keys(K);
      (t.length >= a.length || t.length === a.length - 1 && K.dayPeriod && !Z.dayPeriod) && G(Y);
    }
  };
  let ee = useMemo(() => nz(S, minValue, maxValue, isDateUnavailable, O), [S, minValue, maxValue, isDateUnavailable, O]);
  let et = KZ({
    ...e,
    value: S,
    builtinValidation: ee
  });
  let ea = et.displayValidation.isInvalid;
  let eu = e.validationState || (ea ? "invalid" : null);
  return {
    ...et,
    value: V,
    defaultValue: null !== (a = e.defaultValue) && void 0 !== a ? a : M,
    dateValue: H,
    calendar: A,
    setValue: G,
    segments: q,
    dateFormatter: z,
    validationState: eu,
    isInvalid: ea,
    granularity: k,
    maxGranularity: null !== (f = e.maxGranularity) && void 0 !== f ? f : "year",
    isDisabled,
    isReadOnly,
    isRequired,
    increment(e) {
      X(e, 1);
    },
    decrement(e) {
      X(e, -1);
    },
    incrementPage(e) {
      X(e, h[e] || 1);
    },
    decrementPage(e) {
      X(e, -(h[e] || 1));
    },
    setSegment(e, t) {
      Q(e);
      G(function (e, t, a, u) {
        switch (t) {
          case "day":
          case "month":
          case "year":
          case "era":
            return e.set({
              [t]: a
            });
        }
        if ("hour" in e && "number" == typeof a) switch (t) {
          case "dayPeriod":
            {
              let t = e.hour;
              let u = t >= 12;
              if (a >= 12 === u) return e;
              return e.set({
                hour: u ? t - 12 : t + 12
              });
            }
          case "hour":
            if (u.hour12) {
              let t = e.hour >= 12;
              t || 12 !== a || (a = 0);
              t && a < 12 && (a += 12);
            }
          case "minute":
          case "second":
            return e.set({
              [t]: a
            });
        }
        throw Error("Unknown segment: " + t);
      }(Y, e, t, U));
    },
    confirmPlaceholder() {
      if (e.isDisabled || e.isReadOnly) return;
      let t = Object.keys(Z);
      let a = Object.keys(K);
      t.length === a.length - 1 && K.dayPeriod && !Z.dayPeriod && (_(Z = {
        ...K
      }), G(Y.copy()));
    },
    clearSegment(t) {
      delete Z[t];
      W.current = t;
      _({
        ...Z
      });
      let a = o_(e.placeholderValue, k, A, P);
      let n = Y;
      if ("dayPeriod" === t && "hour" in Y && "hour" in a) {
        let e = Y.hour >= 12;
        let t = a.hour >= 12;
        e && !t ? n = Y.set({
          hour: Y.hour - 12
        }) : !e && t && (n = Y.set({
          hour: Y.hour + 12
        }));
      } else "hour" === t && "hour" in Y && Y.hour >= 12 && Z.dayPeriod ? n = Y.set({
        hour: a.hour + 12
      }) : t in Y && (n = Y.set({
        [t]: a[t]
      }));
      T(null);
      G(n);
    },
    formatValue(e) {
      if (!V) return "";
      let t = id(e, O);
      return new _$$p(locale, t).format(H);
    },
    getDateFormatter(e, t) {
      let a = {
        ...O,
        ...t
      };
      let n = id({}, a);
      return new _$$p(e, n);
    }
  };
}
function p(e, t, a) {
  switch (t) {
    case "era":
      {
        let t = e.calendar.getEras();
        return {
          value: t.indexOf(e.era),
          minValue: 0,
          maxValue: t.length - 1
        };
      }
    case "year":
      return {
        value: e.year,
        minValue: 1,
        maxValue: e.calendar.getYearsInEra(e)
      };
    case "month":
      return {
        value: e.month,
        minValue: xz(e),
        maxValue: e.calendar.getMonthsInYear(e)
      };
    case "day":
      return {
        value: e.day,
        minValue: oT(e),
        maxValue: e.calendar.getDaysInMonth(e)
      };
  }
  if ("hour" in e) switch (t) {
    case "dayPeriod":
      return {
        value: e.hour >= 12 ? 12 : 0,
        minValue: 0,
        maxValue: 12
      };
    case "hour":
      if (a.hour12) {
        let t = e.hour >= 12;
        return {
          value: e.hour,
          minValue: t ? 12 : 0,
          maxValue: t ? 23 : 11
        };
      }
      return {
        value: e.hour,
        minValue: 0,
        maxValue: 23
      };
    case "minute":
      return {
        value: e.minute,
        minValue: 0,
        maxValue: 59
      };
    case "second":
      return {
        value: e.second,
        minValue: 0,
        maxValue: 59
      };
  }
  return {};
}
export const F = $$f0;