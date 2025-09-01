import { OX } from "../vendor/210601";
import { A as _$$A } from "../vendor/10264";
import { Y as _$$Y } from "../vendor/259657";
import { e as _$$e, o as _$$o } from "../vendor/218120";
import { useEffect, useRef, useMemo, useCallback, version } from "react";
import { yP } from "../vendor/857147";
import { ng } from "../vendor/630853";
import { un, cX } from "../vendor/707924";
import { o as _$$o2 } from "../vendor/92922";
import { m as _$$m } from "../vendor/777912";
import { J as _$$J } from "../vendor/578159";
import { N as _$$N } from "../vendor/791199";
import { Bi } from "../vendor/832351";
import { b as _$$b } from "../vendor/761747";
import { v as _$$v } from "../vendor/272995";
import { i as _$$i } from "../vendor/471124";
import { pA, iP } from "../vendor/217512";
import { A as _$$A2 } from "../vendor/412162";
class l {
  of(e) {
    return this.dictionary.getStringForLocale(e, this.locale);
  }
  constructor(e, t) {
    this.locale = e;
    this.dictionary = t;
  }
}
function f(e, t, a, u) {
  let n = _$$J(a);
  let r = null == a;
  useEffect(() => {
    if (r || !e.current) return;
    let a = e.current;
    a.addEventListener(t, n, u);
    return () => {
      a.removeEventListener(t, n, u);
    };
  }, [e, t, u, r, n]);
}
let b = new Map();
let E = !1;
try {
  E = "exceptZero" === new Intl.NumberFormat("de-DE", {
    signDisplay: "exceptZero"
  }).resolvedOptions().signDisplay;
} catch {}
let C = !1;
try {
  C = "unit" === new Intl.NumberFormat("de-DE", {
    style: "unit",
    unit: "degree"
  }).resolvedOptions().style;
} catch {}
let x = {
  degree: {
    narrow: {
      default: "\xb0",
      "ja-JP": " \u5EA6",
      "zh-TW": "\u5EA6",
      "sl-SI": " \xb0"
    }
  }
};
class B {
  format(e) {
    let t = "";
    if (t = E || null == this.options.signDisplay ? this.numberFormatter.format(e) : function (e, t, a) {
      if ("auto" === t) return e.format(a);
      {
        if ("never" === t) return e.format(Math.abs(a));
        let u = !1;
        if ("always" === t ? u = a > 0 || Object.is(a, 0) : "exceptZero" === t && (Object.is(a, -0) || Object.is(a, 0) ? a = Math.abs(a) : u = a > 0), !u) return e.format(a);
        {
          let t = e.format(-a);
          let u = e.format(a);
          let n = t.replace(u, "").replace(/\u200e|\u061C/, "");
          1 != [...n].length && console.warn("@react-aria/i18n polyfill for NumberFormat signDisplay: Unsupported case");
          return t.replace(u, "!!!").replace(n, "+").replace("!!!", u);
        }
      }
    }(this.numberFormatter, this.options.signDisplay, e), "unit" === this.options.style && !C) {
      var a;
      let {
        unit,
        unitDisplay = "short",
        locale
      } = this.resolvedOptions();
      if (!unit) return t;
      let r = x[unit]?.[unitDisplay];
      t += r[locale] || r.$$default;
    }
    return t;
  }
  formatToParts(e) {
    return this.numberFormatter.formatToParts(e);
  }
  formatRange(e, t) {
    if ("function" == typeof this.numberFormatter.formatRange) return this.numberFormatter.formatRange(e, t);
    if (t < e) throw RangeError("End date must be >= start date");
    return `${this.format(e)} \u{2013} ${this.format(t)}`;
  }
  formatRangeToParts(e, t) {
    if ("function" == typeof this.numberFormatter.formatRangeToParts) return this.numberFormatter.formatRangeToParts(e, t);
    if (t < e) throw RangeError("End date must be >= start date");
    let a = this.numberFormatter.formatToParts(e);
    let u = this.numberFormatter.formatToParts(t);
    return [...a.map(e => ({
      ...e,
      source: "startRange"
    })), {
      type: "literal",
      value: " \u2013 ",
      source: "shared"
    }, ...u.map(e => ({
      ...e,
      source: "endRange"
    }))];
  }
  resolvedOptions() {
    let e = this.numberFormatter.resolvedOptions();
    E || null == this.options.signDisplay || (e = {
      ...e,
      signDisplay: this.options.signDisplay
    });
    C || "unit" !== this.options.style || (e = {
      ...e,
      style: "unit",
      unit: this.options.unit,
      unitDisplay: this.options.unitDisplay
    });
    return e;
  }
  constructor(e, t = {}) {
    this.numberFormatter = function (e, t = {}) {
      let {
        numberingSystem
      } = t;
      if (numberingSystem && e.includes("-nu-") && (e.includes("-u-") || (e += "-u-"), e += `-nu-${numberingSystem}`), "unit" === t.style && !C) {
        var u;
        let {
          unit,
          unitDisplay = "short"
        } = t;
        if (!unit) throw Error('unit option must be provided with style: "unit"');
        if (!x[unit]?.[unitDisplay]) throw Error(`Unsupported unit ${unit} with unitDisplay = ${unitDisplay}`);
        t = {
          ...t,
          style: "decimal"
        };
      }
      let n = e + (t ? Object.entries(t).sort((e, t) => e[0] < t[0] ? -1 : 1).join() : "");
      if (b.has(n)) return b.get(n);
      let r = new Intl.NumberFormat(e, t);
      b.set(n, r);
      return r;
    }(e, t);
    this.options = t;
  }
}
let w = RegExp("^.*\\(.*\\).*$");
let F = ["latn", "arab", "hanidec", "deva", "beng", "fullwide"];
class k {
  parse(e) {
    return $(this.locale, this.options, e).parse(e);
  }
  isValidPartialNumber(e, t, a) {
    return $(this.locale, this.options, e).isValidPartialNumber(e, t, a);
  }
  getNumberingSystem(e) {
    return $(this.locale, this.options, e).options.numberingSystem;
  }
  constructor(e, t = {}) {
    this.locale = e;
    this.options = t;
  }
}
let P = new Map();
function $(e, t, a) {
  let u = R(e, t);
  if (!e.includes("-nu-") && !u.isValidPartialNumber(a)) {
    for (let n of F) if (n !== u.options.numberingSystem) {
      let u = R(e + (e.includes("-u-") ? "-nu-" : "-u-nu-") + n, t);
      if (u.isValidPartialNumber(a)) return u;
    }
  }
  return u;
}
function R(e, t) {
  let a = e + (t ? Object.entries(t).sort((e, t) => e[0] < t[0] ? -1 : 1).join() : "");
  let u = P.get(a);
  u || (u = new A(e, t), P.set(a, u));
  return u;
}
class A {
  parse(e) {
    let t = this.sanitize(e);
    if (this.symbols.group && (t = M(t, this.symbols.group, "")), this.symbols.decimal && (t = t.replace(this.symbols.decimal, ".")), this.symbols.minusSign && (t = t.replace(this.symbols.minusSign, "-")), t = t.replace(this.symbols.numeral, this.symbols.index), "percent" === this.options.style) {
      let e = t.indexOf("-");
      let a = (t = (t = t.replace("-", "")).replace("+", "")).indexOf(".");
      -1 === a && (a = t.length);
      t = t.replace(".", "");
      t = a - 2 == 0 ? `0.${t}` : a - 2 == -1 ? `0.0${t}` : a - 2 == -2 ? "0.00" : `${t.slice(0, a - 2)}.${t.slice(a - 2)}`;
      e > -1 && (t = `-${t}`);
    }
    let a = t ? +t : NaN;
    if (isNaN(a)) return NaN;
    if ("percent" === this.options.style) {
      var u;
      var n;
      let e = {
        ...this.options,
        style: "decimal",
        minimumFractionDigits: Math.min((null !== (u = this.options.minimumFractionDigits) && void 0 !== u ? u : 0) + 2, 20),
        maximumFractionDigits: Math.min((null !== (n = this.options.maximumFractionDigits) && void 0 !== n ? n : 0) + 2, 20)
      };
      return new k(this.locale, e).parse(new B(this.locale, e).format(a));
    }
    "accounting" === this.options.currencySign && w.test(e) && (a *= -1);
    return a;
  }
  sanitize(e) {
    e = e.replace(this.symbols.literals, "");
    this.symbols.minusSign && (e = e.replace("-", this.symbols.minusSign));
    "arab" === this.options.numberingSystem && (this.symbols.decimal && (e = (e = e.replace(",", this.symbols.decimal)).replace(String.fromCharCode(1548), this.symbols.decimal)), this.symbols.group && (e = M(e, ".", this.symbols.group)));
    "fr-FR" === this.options.locale && this.symbols.group && (e = M(e, " ", this.symbols.group), e = M(e, /\u00A0/g, this.symbols.group));
    return e;
  }
  isValidPartialNumber(e, t = -1 / 0, a = 1 / 0) {
    e = this.sanitize(e);
    this.symbols.minusSign && e.startsWith(this.symbols.minusSign) && t < 0 ? e = e.slice(this.symbols.minusSign.length) : this.symbols.plusSign && e.startsWith(this.symbols.plusSign) && a > 0 && (e = e.slice(this.symbols.plusSign.length));
    return !(this.symbols.group && e.startsWith(this.symbols.group) || this.symbols.decimal && e.indexOf(this.symbols.decimal) > -1 && 0 === this.options.maximumFractionDigits) && (this.symbols.group && (e = M(e, this.symbols.group, "")), e = e.replace(this.symbols.numeral, ""), this.symbols.decimal && (e = e.replace(this.symbols.decimal, "")), 0 === e.length);
  }
  constructor(e, t = {}) {
    var a;
    var u;
    this.locale = e;
    1 !== t.roundingIncrement && null != t.roundingIncrement && (null == t.maximumFractionDigits && null == t.minimumFractionDigits ? (t.maximumFractionDigits = 0, t.minimumFractionDigits = 0) : null == t.maximumFractionDigits ? t.maximumFractionDigits = t.minimumFractionDigits : null == t.minimumFractionDigits && (t.minimumFractionDigits = t.maximumFractionDigits));
    this.formatter = new Intl.NumberFormat(e, t);
    this.options = this.formatter.resolvedOptions();
    this.symbols = function (e, t, a, u) {
      var n;
      var r;
      var i;
      var o;
      var l;
      let s = new Intl.NumberFormat(e, {
        ...a,
        minimumSignificantDigits: 1,
        maximumSignificantDigits: 21,
        roundingIncrement: 1,
        roundingPriority: "auto",
        roundingMode: "halfExpand"
      });
      let d = s.formatToParts(-10000.111);
      let c = s.formatToParts(10000.111);
      let m = T.map(e => s.formatToParts(e));
      let h = null !== (l = d.find(e => "minusSign" === e.type)?.value) && void 0 !== l ? l : "-";
      let D = c.find(e => "plusSign" === e.type)?.value;
      D || u?.signDisplay !== "exceptZero" && u?.signDisplay !== "always" || (D = "+");
      let f = new Intl.NumberFormat(e, {
        ...a,
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }).formatToParts(.001).find(e => "decimal" === e.type)?.value;
      let p = d.find(e => "group" === e.type)?.value;
      let y = [...new Set([...d.filter(e => !S.has(e.type)).map(e => $$V(e.value)), ...m.flatMap(e => e.filter(e => !S.has(e.type)).map(e => $$V(e.value)))])].sort((e, t) => t.length - e.length);
      let g = 0 === y.length ? RegExp("[\\p{White_Space}]", "gu") : RegExp(`${y.join("|")}|[\\p{White_Space}]`, "gu");
      let v = [...new Intl.NumberFormat(a.locale, {
        useGrouping: !1
      }).format(0x24cb016ea)].reverse();
      let b = new Map(v.map((e, t) => [e, t]));
      return {
        minusSign: h,
        plusSign: D,
        decimal: f,
        group: p,
        literals: g,
        numeral: RegExp(`[${v.join("")}]`, "g"),
        index: e => String(b.get(e))
      };
    }(e, this.formatter, this.options, t);
    "percent" === this.options.style && ((null !== (a = this.options.minimumFractionDigits) && void 0 !== a ? a : 0) > 18 || (null !== (u = this.options.maximumFractionDigits) && void 0 !== u ? u : 0) > 18) && console.warn("NumberParser cannot handle percentages with greater than 18 decimal places, please reduce the number in your options.");
  }
}
let S = new Set(["decimal", "fraction", "integer", "minusSign", "plusSign", "group"]);
let T = [0, 4, 2, 1, 11, 20, 3, 7, 100, 21, .1, 1.1];
function M(e, t, a) {
  return e.replaceAll ? e.replaceAll(t, a) : e.split(t).join(a);
}
function $$V(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
let N = new Map();
var L = {};
L = {
  "ar-AE": {
    Empty: `\u{641}\u{627}\u{631}\u{63A}`
  },
  "bg-BG": {
    Empty: `\u{418}\u{437}\u{43F}\u{440}\u{430}\u{437}\u{43D}\u{438}`
  },
  "cs-CZ": {
    Empty: `Pr\xe1zdn\xe9`
  },
  "da-DK": {
    Empty: "Tom"
  },
  "de-DE": {
    Empty: "Leer"
  },
  "el-GR": {
    Empty: `\u{386}\u{3B4}\u{3B5}\u{3B9}\u{3BF}`
  },
  "en-US": {
    Empty: "Empty"
  },
  "es-ES": {
    Empty: `Vac\xedo`
  },
  "et-EE": {
    Empty: `T\xfchjenda`
  },
  "fi-FI": {
    Empty: `Tyhj\xe4`
  },
  "fr-FR": {
    Empty: "Vide"
  },
  "he-IL": {
    Empty: `\u{5E8}\u{5D9}\u{5E7}`
  },
  "hr-HR": {
    Empty: "Prazno"
  },
  "hu-HU": {
    Empty: `\xdcres`
  },
  "it-IT": {
    Empty: "Vuoto"
  },
  "ja-JP": {
    Empty: `\u{7A7A}`
  },
  "ko-KR": {
    Empty: `\u{BE44}\u{C5B4} \u{C788}\u{C74C}`
  },
  "lt-LT": {
    Empty: `Tu\u{161}\u{10D}ias`
  },
  "lv-LV": {
    Empty: `Tuk\u{161}s`
  },
  "nb-NO": {
    Empty: "Tom"
  },
  "nl-NL": {
    Empty: "Leeg"
  },
  "pl-PL": {
    Empty: "Pusty"
  },
  "pt-BR": {
    Empty: "Vazio"
  },
  "pt-PT": {
    Empty: "Vazio"
  },
  "ro-RO": {
    Empty: "Gol"
  },
  "ru-RU": {
    Empty: `\u{41D}\u{435} \u{437}\u{430}\u{43F}\u{43E}\u{43B}\u{43D}\u{435}\u{43D}\u{43E}`
  },
  "sk-SK": {
    Empty: `Pr\xe1zdne`
  },
  "sl-SI": {
    Empty: "Prazen"
  },
  "sr-SP": {
    Empty: "Prazno"
  },
  "sv-SE": {
    Empty: "Tomt"
  },
  "tr-TR": {
    Empty: `Bo\u{15F}`
  },
  "uk-UA": {
    Empty: `\u{41F}\u{443}\u{441}\u{442}\u{43E}`
  },
  "zh-CN": {
    Empty: `\u{7A7A}`
  },
  "zh-TW": {
    Empty: `\u{7A7A}\u{767D}`
  }
};
export function $$z0(e, t, a) {
  let b;
  let E;
  let C;
  let x;
  let B = useRef("");
  let {
    locale,
    direction
  } = _$$Y();
  let P = function () {
    var e;
    let {
      locale: _locale
    } = _$$Y();
    let a = _$$e((e = _$$A) && e.__esModule ? e.$$default : e, "@react-aria/datepicker");
    return useMemo(() => {
      try {
        return new Intl.DisplayNames(_locale, {
          type: "dateTimeField"
        });
      } catch {
        return new l(_locale, a);
      }
    }, [_locale, a]);
  }();
  let {
    ariaLabel,
    ariaLabelledBy,
    ariaDescribedBy,
    focusManager
  } = (0, OX).get(t);
  let T = e.isPlaceholder ? "" : e.text;
  let M = useMemo(() => t.dateFormatter.resolvedOptions(), [t.dateFormatter]);
  let V = _$$i({
    month: "long",
    timeZone: M.timeZone
  });
  let z = _$$i({
    hour: "numeric",
    hour12: M.hour12,
    timeZone: M.timeZone
  });
  if ("month" !== e.type || e.isPlaceholder) "hour" !== e.type || e.isPlaceholder || (T = z.format(t.dateValue));else {
    let e = V.format(t.dateValue);
    T = e !== T ? `${T} \u{2013} ${e}` : e;
  }
  let {
    spinButtonProps
  } = function (e) {
    var t;
    let a = useRef(void 0);
    let {
      value,
      textValue,
      minValue,
      maxValue,
      isDisabled,
      isReadOnly,
      isRequired,
      onIncrement,
      onIncrementPage,
      onDecrement,
      onDecrementPage,
      onDecrementToMin,
      onIncrementToMax
    } = e;
    let v = _$$o((t = L) && t.__esModule ? t.$$default : t, "@react-aria/spinbutton");
    let b = () => clearTimeout(a.current);
    useEffect(() => () => b(), []);
    let E = useRef(!1);
    let C = () => {
      E.current = !0;
    };
    let x = () => {
      E.current = !1;
    };
    let B = "" === textValue ? v.format("Empty") : (textValue || `${value}`).replace("-", "\u2212");
    useEffect(() => {
      E.current && (pA("assertive"), iP(B, "assertive"));
    }, [B]);
    let w = _$$J(e => {
      b();
      onIncrement?.();
      a.current = window.setTimeout(() => {
        (void 0 === maxValue || isNaN(maxValue) || void 0 === value || isNaN(value) || value < maxValue) && w(60);
      }, e);
    });
    let F = _$$J(e => {
      b();
      onDecrement?.();
      a.current = window.setTimeout(() => {
        (void 0 === minValue || isNaN(minValue) || void 0 === value || isNaN(value) || value > minValue) && F(60);
      }, e);
    });
    let k = e => {
      e.preventDefault();
    };
    let {
      addGlobalListener,
      removeAllGlobalListeners
    } = _$$A2();
    return {
      spinButtonProps: {
        role: "spinbutton",
        "aria-valuenow": void 0 === value || isNaN(value) ? void 0 : value,
        "aria-valuetext": B,
        "aria-valuemin": minValue,
        "aria-valuemax": maxValue,
        "aria-disabled": isDisabled || void 0,
        "aria-readonly": isReadOnly || void 0,
        "aria-required": isRequired || void 0,
        onKeyDown: e => {
          if (!e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey && !isReadOnly && !e.nativeEvent.isComposing) switch (e.key) {
            case "PageUp":
              if (onIncrementPage) {
                e.preventDefault();
                onIncrementPage?.();
                break;
              }
            case "ArrowUp":
            case "Up":
              onIncrement && (e.preventDefault(), onIncrement?.());
              break;
            case "PageDown":
              if (onDecrementPage) {
                e.preventDefault();
                onDecrementPage?.();
                break;
              }
            case "ArrowDown":
            case "Down":
              onDecrement && (e.preventDefault(), onDecrement?.());
              break;
            case "Home":
              onDecrementToMin && (e.preventDefault(), onDecrementToMin?.());
              break;
            case "End":
              onIncrementToMax && (e.preventDefault(), onIncrementToMax?.());
          }
        },
        onFocus: C,
        onBlur: x
      },
      incrementButtonProps: {
        onPressStart: () => {
          w(400);
          addGlobalListener(window, "contextmenu", k);
        },
        onPressEnd: () => {
          b();
          removeAllGlobalListeners();
        },
        onFocus: C,
        onBlur: x
      },
      decrementButtonProps: {
        onPressStart: () => {
          F(400);
          addGlobalListener(window, "contextmenu", k);
        },
        onPressEnd: () => {
          b();
          removeAllGlobalListeners();
        },
        onFocus: C,
        onBlur: x
      }
    };
  }({
    value: e.value,
    textValue: T,
    minValue: e.minValue,
    maxValue: e.maxValue,
    isDisabled: t.isDisabled,
    isReadOnly: t.isReadOnly || !e.isEditable,
    isRequired: t.isRequired,
    onIncrement: () => {
      B.current = "";
      t.increment(e.type);
    },
    onDecrement: () => {
      B.current = "";
      t.decrement(e.type);
    },
    onIncrementPage: () => {
      B.current = "";
      t.incrementPage(e.type);
    },
    onDecrementPage: () => {
      B.current = "";
      t.decrementPage(e.type);
    },
    onIncrementToMax: () => {
      B.current = "";
      void 0 !== e.maxValue && t.setSegment(e.type, e.maxValue);
    },
    onDecrementToMin: () => {
      B.current = "";
      void 0 !== e.minValue && t.setSegment(e.type, e.minValue);
    }
  });
  let K = useMemo(() => new k(locale, {
    maximumFractionDigits: 0
  }), [locale]);
  let Z = () => {
    if (e.text === e.placeholder && focusManager.focusPrevious(), !K.isValidPartialNumber(e.text) || t.isReadOnly || e.isPlaceholder) "dayPeriod" === e.type && t.clearSegment(e.type);else {
      let a = e.text.slice(0, -1);
      let u = K.parse(a);
      0 === (a = 0 === u ? "" : a).length || 0 === u ? t.clearSegment(e.type) : t.setSegment(e.type, u);
      B.current = a;
    }
  };
  b = function (e) {
    let {
      locale: _locale2
    } = _$$Y();
    let a = _locale2 + (e ? Object.entries(e).sort((e, t) => e[0] < t[0] ? -1 : 1).join() : "");
    if (N.has(a)) return N.get(a);
    let u = new Intl.Collator(_locale2, e);
    N.set(a, u);
    return u;
  }({
    usage: "search",
    sensitivity: "base"
  });
  E = useCallback((e, t) => 0 === t.length || (e = e.normalize("NFC"), t = t.normalize("NFC"), 0 === b.compare(e.slice(0, t.length), t)), [b]);
  C = useCallback((e, t) => 0 === t.length || (e = e.normalize("NFC"), t = t.normalize("NFC"), 0 === b.compare(e.slice(-t.length), t)), [b]);
  x = useCallback((e, t) => {
    if (0 === t.length) return !0;
    e = e.normalize("NFC");
    let a = 0;
    let u = (t = t.normalize("NFC")).length;
    for (; a + u <= e.length; a++) {
      let n = e.slice(a, a + u);
      if (0 === b.compare(t, n)) return !0;
    }
    return !1;
  }, [b]);
  let {
    startsWith
  } = useMemo(() => ({
    startsWith: E,
    endsWith: C,
    contains: x
  }), [E, C, x]);
  let W = _$$i({
    hour: "numeric",
    hour12: !0
  });
  let J = useMemo(() => {
    let e = new Date();
    e.setHours(0);
    return W.formatToParts(e).find(e => "dayPeriod" === e.type).value;
  }, [W]);
  let Y = useMemo(() => {
    let e = new Date();
    e.setHours(12);
    return W.formatToParts(e).find(e => "dayPeriod" === e.type).value;
  }, [W]);
  let G = _$$i({
    year: "numeric",
    era: "narrow",
    timeZone: "UTC"
  });
  let H = useMemo(() => {
    if ("era" !== e.type) return [];
    let a = yP(new ng(1, 1, 1), t.calendar);
    let u = t.calendar.getEras().map(e => {
      let t = a.set({
        year: 1,
        month: 1,
        day: 1,
        era: e
      }).toDate("UTC");
      return {
        era: e,
        formatted: G.formatToParts(t).find(e => "era" === e.type).value
      };
    });
    let n = function (e) {
      e.sort();
      let t = e[0];
      let a = e[e.length - 1];
      for (let e = 0; e < t.length; e++) if (t[e] !== a[e]) return e;
      return 0;
    }(u.map(e => e.formatted));
    if (n) for (let e of u) e.formatted = e.formatted.slice(n);
    return u;
  }, [G, t.calendar, e.type]);
  let q = a => {
    if (t.isDisabled || t.isReadOnly) return;
    let u = B.current + a;
    switch (e.type) {
      case "dayPeriod":
        if (startsWith(J, a)) t.setSegment("dayPeriod", 0);else if (startsWith(Y, a)) t.setSegment("dayPeriod", 12);else break;
        focusManager.focusNext();
        break;
      case "era":
        {
          let e = H.find(e => startsWith(e.formatted, a));
          e && (t.setSegment("era", e.era), focusManager.focusNext());
          break;
        }
      case "day":
      case "hour":
      case "minute":
      case "second":
      case "month":
      case "year":
        {
          if (!K.isValidPartialNumber(u)) return;
          let n = K.parse(u);
          let r = n;
          let i = 0 === e.minValue;
          if ("hour" === e.type && t.dateFormatter.resolvedOptions().hour12) {
            switch (t.dateFormatter.resolvedOptions().hourCycle) {
              case "h11":
                n > 11 && (r = K.parse(a));
                break;
              case "h12":
                i = !1;
                n > 12 && (r = K.parse(a));
            }
            void 0 !== e.value && e.value >= 12 && n > 1 && (n += 12);
          } else void 0 !== e.maxValue && n > e.maxValue && (r = K.parse(a));
          if (isNaN(n)) return;
          let o = 0 !== r || i;
          o && t.setSegment(e.type, r);
          void 0 !== e.maxValue && (Number(n + "0") > e.maxValue || u.length >= String(e.maxValue).length) ? (B.current = "", o && focusManager.focusNext()) : o && (B.current = u);
        }
    }
  };
  f(useRef("undefined" != typeof document ? document : null), "selectionchange", () => {
    var e;
    let t = window.getSelection();
    t?.anchorNode && a.current?.contains(t?.anchorNode) && t.collapse(a.current);
  });
  let Q = useRef("");
  f(a, "beforeinput", u => {
    if (a.current) switch (u.preventDefault(), u.inputType) {
      case "deleteContentBackward":
      case "deleteContentForward":
        K.isValidPartialNumber(e.text) && !t.isReadOnly && Z();
        break;
      case "insertCompositionText":
        Q.current = a.current.textContent;
        a.current.textContent = a.current.textContent;
        break;
      default:
        null != u.data && q(u.data);
    }
  });
  f(a, "input", e => {
    let {
      inputType,
      data
    } = e;
    "insertCompositionText" === inputType && (a.current && (a.current.textContent = Q.current), null != data && (startsWith(J, data) || startsWith(Y, data)) && q(data));
  });
  _$$N(() => {
    let e = a.current;
    return () => {
      document.activeElement !== e || focusManager.focusPrevious() || focusManager.focusNext();
    };
  }, [a, focusManager]);
  let X = un() || "timeZoneName" === e.type ? {
    role: "textbox",
    "aria-valuemax": null,
    "aria-valuemin": null,
    "aria-valuetext": null,
    "aria-valuenow": null
  } : {};
  e === useMemo(() => t.segments.find(e => e.isEditable), [t.segments]) || t.isInvalid || (A = void 0);
  let ee = Bi();
  let et = !t.isDisabled && !t.isReadOnly && e.isEditable;
  let ea = "literal" === e.type ? "" : P.of(e.type);
  let eu = _$$b({
    "aria-label": `${ea}${ariaLabel ? `, ${ariaLabel}` : ""}${ariaLabelledBy ? ", " : ""}`,
    "aria-labelledby": ariaLabelledBy
  });
  if ("literal" === e.type) return {
    segmentProps: {
      "aria-hidden": !0
    }
  };
  let en = {
    caretColor: "transparent"
  };
  if ("rtl" === direction) {
    en.unicodeBidi = "embed";
    let t = M[e.type];
    ("numeric" === t || "2-digit" === t) && (en.direction = "ltr");
  }
  return {
    segmentProps: _$$v(spinButtonProps, eu, {
      id: ee,
      ...X,
      "aria-invalid": t.isInvalid ? "true" : void 0,
      "aria-describedby": ariaDescribedBy,
      "aria-readonly": t.isReadOnly || !e.isEditable ? "true" : void 0,
      "data-placeholder": e.isPlaceholder || void 0,
      contentEditable: et,
      suppressContentEditableWarning: et,
      spellCheck: et ? "false" : void 0,
      autoCorrect: et ? "off" : void 0,
      [parseInt(version, 10) >= 17 ? "enterKeyHint" : "enterkeyhint"]: et ? "next" : void 0,
      inputMode: t.isDisabled || "dayPeriod" === e.type || "era" === e.type || !et ? void 0 : "numeric",
      tabIndex: t.isDisabled ? void 0 : 0,
      onKeyDown: e => {
        if ("a" === e.key && (cX() ? e.metaKey : e.ctrlKey) && e.preventDefault(), !e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey) switch (e.key) {
          case "Backspace":
          case "Delete":
            e.preventDefault();
            e.stopPropagation();
            Z();
        }
      },
      onFocus: () => {
        B.current = "";
        a.current && _$$o2(a.current, {
          containingElement: _$$m(a.current)
        });
        let e = window.getSelection();
        e?.collapse(a.current);
      },
      style: en,
      onPointerDown(e) {
        e.stopPropagation();
      },
      onMouseDown(e) {
        e.stopPropagation();
      }
    })
  };
}
export const V = $$z0;