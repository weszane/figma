import { allEqual, arraysEqual } from "../figma_app/656233";
import { clampOptional, roundToMultiple } from "../figma_app/492908";
import { mergeNonNull } from "../figma_app/493477";
import s, { trackEventAnalytics } from "../905/449184";
import o, { O4 } from "../905/777187";
import { logInfo } from "../905/714362";
import { getI18nString } from "../905/303541";
import { AUTO_MARKER, isAutoMarker } from "../905/216495";
import { bA, _q } from "../905/668764";
export class $$p5 extends Error {
  constructor(e, t) {
    super(`${e}: ${t}`);
    this.errorType = t;
  }
}
export class $$_3 {
  constructor(e = {}) {
    this.options = e;
    this.allowedUnits = "";
  }
  format(e) {
    return `${e}`;
  }
  parse(e, t) {
    e = this.preProcessForExpressionEvaluation(e);
    let r = O4(e, t);
    if (r.error) {
      logInfo("NumberFormatter::parse", "Could not parse input", {
        str: e,
        currentValue: t
      });
      return new $$p5("Could not parse input", r.error.type);
    }
    return r.value;
  }
  onParseThrow(e, t) {
    if (e instanceof $$p5 && e.errorType) return this.options.onEvaluateExpressionError?.(e.errorType, t);
  }
  getNudgeAmount(e) {
    return e ? this.bigNudgeAmount() : this.smallNudgeAmount();
  }
  incrementBy(e, t) {
    return e + t;
  }
  clamp(e) {
    return clampOptional(e, this.min(), this.max());
  }
  min() {
    return this.options.min ?? this.defaultMin;
  }
  max() {
    return this.options.max ?? this.defaultMax;
  }
  smallNudgeAmount() {
    return this.options.smallNudgeAmount ?? bA;
  }
  bigNudgeAmount() {
    return this.options.bigNudgeAmount ?? _q;
  }
  preProcessForExpressionEvaluation(e) {
    return e.replace(RegExp(this.allowedUnits, "g"), "").replace(/[\u0660-\u0669]/g, e => "\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669".indexOf(e).toString()).replace(/[\u06F0-\u06F9]/g, e => "\u06F0\u06F1\u06F2\u06F3\u06F4\u06F5\u06F6\u06F7\u06F8\u06F9".indexOf(e).toString()).replace(/\u066B/g, ",").replace(/\u066C/g, ",").replace(/\u060C/g, ",");
  }
}
export class $$h6 extends $$_3 {
  constructor(e) {
    super(e);
    this.floatingPointFormat = e.floatingPointFormat;
  }
  format(e) {
    if (null == e) return "";
    let t = String(parseFloat(e.toFixed(2)));
    let r = t.includes(".");
    return this.floatingPointFormat && r && t.length - 1 > this.floatingPointFormat.maxNumDigits ? String(parseFloat(e.toFixed(1))) : t;
  }
  parse(e, t) {
    /[0-9]+\,[0-9]+/g.test(e) && trackEventAnalytics("editor-parsing-float-input-with-comma", {
      input: e
    });
    return super.parse(e, t);
  }
}
export class $$m15 extends $$_3 {
  format(e) {
    return null == e ? "" : String(new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
      currencyDisplay: "code"
    }).format(e).replace("USD", "").trim());
  }
  parse(e, t) {
    return parseFloat(super.parse(e, t).toFixed(0));
  }
}
export class $$g8 {
  constructor(e) {
    this.pixelFormatter = new $$h6(e);
    this.allowEmpty = !!e.allowEmpty;
    this.allowUnformatted = !!e.allowUnformatted;
  }
  parse(e, t) {
    e = e.trim().toLocaleLowerCase();
    let r = getI18nString("fullscreen.auto").toLocaleLowerCase();
    return (!this.allowEmpty || e.length) && r.startsWith(e) ? AUTO_MARKER : this.pixelFormatter.parse(e, t);
  }
  format(e) {
    if (isAutoMarker(e)) return getI18nString("fullscreen.properties_panel.stack_panel.auto");
    if (this.allowUnformatted) try {
      return this.pixelFormatter.format(e);
    } catch {
      return e;
    }
    return this.pixelFormatter.format(e);
  }
  getNudgeAmount(e) {
    return this.pixelFormatter.getNudgeAmount(e);
  }
  incrementBy(e, t) {
    return isAutoMarker(e) ? AUTO_MARKER : this.pixelFormatter.incrementBy(e, t);
  }
  clamp(e) {
    return isAutoMarker(e) ? AUTO_MARKER : this.pixelFormatter.clamp(e);
  }
}
export class $$f7 {
  constructor(e) {
    this.pixelFormatter = new $$h6(e);
  }
  parse(e, t) {
    let r = new RegExp(/[^\,\s]*(\s*[+\-*\/\^]\s*[^\,\s]*)*/g);
    let n = e.match(r);
    return n ? n.filter(e => e.length).map((e, r) => {
      let n = this.pixelFormatter.parse(e, t && t[r]);
      if (!isFinite(n)) throw Error("could not parse array input");
      return n;
    }) : [];
  }
  format(e) {
    return null == e ? "" : allEqual(e) ? this.pixelFormatter.format(e[0]) : e.map(e => this.pixelFormatter.format(e)).join(", ");
  }
  getNudgeAmount(e) {
    return this.pixelFormatter.getNudgeAmount(e);
  }
  incrementBy(e, t, r) {
    return e.map((e, n) => !r || r[n] ? this.pixelFormatter.incrementBy(e, t) : e);
  }
  clamp(e) {
    return e.map(e => this.pixelFormatter.clamp(e));
  }
  snap(e, t) {
    return e.map(e => roundToMultiple(e, t));
  }
  isEqual(e, t) {
    return arraysEqual(e, t);
  }
  getIncrementTargets(e, {
    start: t,
    end: r
  }) {
    let n = {};
    if (0 === t && r >= e.length) return null;
    let i = t === r;
    if (i && t >= e.length) return {
      [e.split(",").length - 1]: !0
    };
    let a = 0;
    for (function () {
      let s = 0;
      let o = e.length;
    }(); s < o; ++s) {
      let o = "," === e[s];
      if (i) {
        if (s === t) return {
          [a]: !0
        };
        o && ++a;
      } else if (o && ++a, t <= s && s < r && (n[a] = !0), s >= r) break;
    }
    return n;
  }
  getSelection(e, t) {
    let r;
    let n = Object.keys(t).map(Number);
    let i = e.length;
    let a = 0;
    for (function () {
      let t = 0;
      let s = e.length;
    }(); t < s; ++t) {
      if ("," === e[t]) {
        ++a;
        continue;
      }
      if (n.includes(a)) {
        if (null == r) {
          if (/[\s,]/.test(e[t])) continue;
          r = t;
        }
        for (; t < s && /[^,]/.test(e[t]);) ++t;
        i = t;
        --t;
      }
    }
    return {
      start: r ?? 0,
      end: i
    };
  }
}
export class $$E21 extends $$_3 {
  constructor() {
    super(...arguments);
    this.allowedUnits = "x";
  }
  format(e) {
    if (null == e) return "";
    let t = parseFloat(e.toFixed(2));
    return `${t}x`;
  }
}
export var $$y14 = (e => (e[e.SECONDS = 0] = "SECONDS", e[e.MILLISECONDS = 1] = "MILLISECONDS", e))($$y14 || {});
export class $$b10 extends $$_3 {
  constructor(e, t, r) {
    super({
      min: r ?? .001,
      max: t,
      smallNudgeAmount: .01,
      bigNudgeAmount: .1
    });
    this.outputUnit = e;
    this.allowedUnits = "ms|s";
  }
  parse(e, t) {
    let r = (e = e.trim()).endsWith("ms") ? 1 : e.endsWith("s") ? 0 : this.outputUnit;
    return super.parse(e, t) * (0 === r ? 1 : .001);
  }
  format(e) {
    if (null == e) return "";
    switch (this.outputUnit) {
      case 0:
        return getI18nString("number_formatters.time_duration_seconds_abbreviated", {
          numberOfSeconds: parseFloat(e.toFixed(2))
        });
      case 1:
        return getI18nString("number_formatters.time_duration_milliseconds_abbreviated", {
          numberOfMilliseconds: Math.round(1e3 * e)
        });
    }
  }
}
export class $$T12 extends $$_3 {
  constructor(e, t = !1, r = !0) {
    super({
      min: 0,
      max: e,
      smallNudgeAmount: 1,
      bigNudgeAmount: 10
    });
    this.allowedUnits = "s";
    this.displayFractions = !1;
    this.padMinutes = !0;
    this.displayFractions = t;
    this.padMinutes = r;
  }
  parse(e, t) {
    if (e.includes(":")) {
      let r = e.split(":");
      if (r.length > 3) throw Error("Format must match HH:MM:SS");
      let [n, i, a] = r.reverse().map(e => e.trim());
      let s = n ? super.parse(n, t) : 0;
      let o = i ? super.parse(i, t) : 0;
      let l = a ? super.parse(a, t) : 0;
      let d = ![o, l].every(Number.isInteger);
      let c = !this.displayFractions && !Number.isInteger(s);
      if (d || c) throw Error("Cannot have fractional parts in timestamp");
      return 3600 * l + 60 * o + s;
    }
    let [r, n] = e.split(".", 2);
    let i = `${r.slice(-6, -4)}:${r.slice(-4, -2)}:${r.slice(-2)}`;
    let a = n ? `${i}.${n}` : i;
    return this.parse(a);
  }
  format(e) {
    if (null == e) return "";
    let t = Math.floor(e / 3600);
    e %= 3600;
    let r = `${Math.floor(e / 60)}`;
    this.padMinutes && (r = r.padStart(2, "0"));
    e %= 60;
    let n = this.displayFractions ? e : Math.floor(e);
    let i = Number.isInteger(n) ? n : n.toFixed(2);
    let a = Number.isInteger(n) ? `${n}`.padStart(2, "0") : `${i}`.padStart(5, "0");
    return t ? `${t}:${r}:${a}` : `${r}:${a}`;
  }
}
export class $$I4 extends $$_3 {
  constructor({
    decimals: e,
    hidePercentSign: t,
    ...r
  } = {}) {
    super(r);
    this.allowedUnits = "%|px";
    this.defaultMin = 0;
    this.defaultMax = 1;
    this.decimals = 2;
    this.hidePercentSign = !1;
    null != e && (this.decimals = e);
    null != t && (this.hidePercentSign = t);
  }
  format(e) {
    if (null == e) return "";
    let t = `${parseFloat((100 * e).toFixed(this.decimals))}`;
    this.hidePercentSign || (t += "%");
    return t;
  }
  parse(e, t) {
    return super.parse(e, null != t ? 100 * t : void 0) / 100;
  }
  getNudgeAmount(e) {
    return e ? .1 : .01;
  }
}
export let $$S0 = new $$I4();
export class $$v19 extends $$_3 {
  constructor() {
    super(...arguments);
    this.defaultMin = 0;
    this.defaultMax = 1;
  }
  format(e) {
    return null == e ? "" : `${parseFloat(e.toFixed(2))}`;
  }
}
export class $$A2 extends $$_3 {
  constructor() {
    super(...arguments);
    this.allowedUnits = "%";
    this.defaultMin = 1;
    this.defaultMax = 95;
  }
  format(e) {
    return null == e ? "" : `${e}%`;
  }
}
export class $$x16 extends $$_3 {
  constructor() {
    super(...arguments);
    this.allowedUnits = "%";
  }
  format(e) {
    return null == e ? "" : `${e}%`;
  }
}
export class $$N11 extends $$_3 {
  constructor(e = {}) {
    super(mergeNonNull({
      smallNudgeAmount: -1,
      bigNudgeAmount: -15
    }, e));
    this.allowedUnits = "\xb0|px";
  }
  format(e) {
    return null == e ? "" : (-180 == (e = (e + 180 + 360) % 360 - 180) && (e = 180), `${parseFloat(e.toFixed(2))}\xb0`);
  }
}
export class $$C9 extends $$_3 {
  constructor() {
    super(...arguments);
    this.allowedUnits = "px";
  }
  parse(e, t) {
    return Math.round(super.parse(e, t));
  }
}
export class $$w18 extends $$_3 {
  constructor(e = {}) {
    super(e);
    this.normalizeFactor = e.normalizeFactor || 1;
  }
  parse(e, t) {
    return super.parse(e, t) / this.normalizeFactor;
  }
  format(e) {
    let t = e * this.normalizeFactor;
    return `${Math.round(t)}`;
  }
  getNudgeAmount(e) {
    return e ? 10 / this.normalizeFactor : 1 / this.normalizeFactor;
  }
}
export class $$O13 {
  constructor(e) {
    this.min = e.min;
    this.max = e.max;
    this.bigPixelNudgeAmount = e.bigPixelNudgeAmount || _q;
    this.smallPixelNudgeAmount = e.smallPixelNudgeAmount || bA;
    this.bigPercentageNudgeAmount = e.bigPercentageNudgeAmount || 10;
    this.smallPercentageNudgeAmount = e.smallPercentageNudgeAmount || 1;
  }
  static parse(e) {
    let t = -1 !== e.indexOf("%") ? "PERCENT" : -1 !== e.indexOf("px") ? "PIXELS" : void 0;
    e = (e = e.toLowerCase()).replace(RegExp("%|px", "g"), "");
    let r = O4(e, NaN);
    if (!r.error) return [r.value, t];
  }
  parse(e, t) {
    let r = $$O13.parse(e);
    if (void 0 === r) throw Error("Could not parse input");
    let [n, i] = r;
    void 0 === i && (i = t?.units);
    return {
      value: n,
      units: i
    };
  }
  format(e) {
    if (!e) return "";
    let t = parseFloat((e.value ?? 0).toFixed(2));
    return "PERCENT" === e.units ? `${t}%` : "RAW" === e.units ? `${100 * t}%` : `${t}px`;
  }
  getNudgeAmount(e, t) {
    return e ? "PIXELS" === t.units ? this.bigPixelNudgeAmount : this.bigPercentageNudgeAmount : "PIXELS" === t.units ? this.smallPixelNudgeAmount : this.smallPercentageNudgeAmount;
  }
  incrementBy(e, t) {
    return {
      value: e.value + t,
      units: e.units
    };
  }
  clamp(e) {
    return {
      value: clampOptional(e.value, this.min, this.max),
      units: e.units
    };
  }
  snap(e, t) {
    return {
      value: roundToMultiple(e.value, t),
      units: e.units
    };
  }
  isEqual(e, t) {
    return e.units === t.units && e.value === t.value;
  }
}
export let $$R20 = new $$O13({
  bigPixelNudgeAmount: _q,
  smallPixelNudgeAmount: bA
});
export class $$L1 extends $$O13 {
  constructor(e = {}) {
    super({
      min: e.min,
      max: e.max,
      smallPixelNudgeAmount: e.smallPixelNudgeAmount || bA,
      bigPixelNudgeAmount: e.bigPixelNudgeAmount || _q,
      smallPercentageNudgeAmount: e.smallPercentageNudgeAmount || 1,
      bigPercentageNudgeAmount: e.bigPercentageNudgeAmount || 10
    });
    this.allowEmpty = e.allowEmpty || !1;
    this.autoValue = e.autoValue || {
      value: 0,
      units: "RAW"
    };
  }
  parse(e, t) {
    return this.allowEmpty && "" === e || "auto" === e.toLowerCase() ? this.autoValue : super.parse(e, t);
  }
  format(e) {
    return null == e || isNaN(e.value) ? "" : this.isAuto(e) ? getI18nString("fullscreen.auto") : super.format(e);
  }
  getNudgeAmount(e, t) {
    return this.isAuto(t) ? 0 : super.getNudgeAmount(e, t);
  }
  isAuto(e) {
    return e.units === this.autoValue.units && e.value === this.autoValue.value;
  }
}
new $$L1();
export class $$P17 {
  constructor() {
    this.MAX_SCALE = 1024;
    this.MAX_SIZE = 32768;
  }
  parse(e) {
    let t = (e = e.toLowerCase()).includes("w") ? "CONTENT_WIDTH" : e.includes("h") ? "CONTENT_HEIGHT" : "CONTENT_SCALE";
    e = e.replace(/x|w|h/g, "");
    let r = O4(e);
    if (r.error) throw new $$p5("Could not parse input", r.error.type);
    return {
      value: r.value,
      type: t
    };
  }
  format(e) {
    if (null == e) return "";
    let t = parseFloat(e.value.toFixed(2));
    switch (e.type) {
      case "CONTENT_SCALE":
        return `${t}x`;
      case "CONTENT_WIDTH":
        return `${t}w`;
      case "CONTENT_HEIGHT":
        return `${t}h`;
    }
  }
  getNudgeAmount(e) {
    return e ? 1 : .5;
  }
  incrementBy(e, t) {
    return {
      value: roundToMultiple(e.value + t, t),
      type: e.type
    };
  }
  clamp(e) {
    let t = e.value;
    (t = Math.min(t, "CONTENT_SCALE" === e.type ? this.MAX_SCALE : this.MAX_SIZE)) <= 0 && (t = 1);
    return {
      value: t,
      type: e.type
    };
  }
  snap(e, t) {
    return {
      value: roundToMultiple(e.value, t),
      type: e.type
    };
  }
  isEqual(e, t) {
    return e.type === t.type && e.value === t.value;
  }
}
export const EV = $$S0;
export const G9 = $$L1;
export const GW = $$A2;
export const KD = $$_3;
export const LN = $$I4;
export const LS = $$p5;
export const Lk = $$h6;
export const NB = $$f7;
export const PZ = $$g8;
export const X9 = $$C9;
export const ag = $$b10;
export const cu = $$N11;
export const f0 = $$T12;
export const h7 = $$O13;
export const i5 = $$y14;
export const k$ = $$m15;
export const l4 = $$x16;
export const mz = $$P17;
export const o1 = $$w18;
export const t6 = $$v19;
export const wf = $$R20;
export const z7 = $$E21;