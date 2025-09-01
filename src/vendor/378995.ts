let u = new Map();
export class $$n0 {
  format(e) {
    return this.formatter.format(e);
  }
  formatToParts(e) {
    return this.formatter.formatToParts(e);
  }
  formatRange(e, t) {
    if ("function" == typeof this.formatter.formatRange) return this.formatter.formatRange(e, t);
    if (t < e) throw RangeError("End date must be >= start date");
    return `${this.formatter.format(e)} \u{2013} ${this.formatter.format(t)}`;
  }
  formatRangeToParts(e, t) {
    if ("function" == typeof this.formatter.formatRangeToParts) return this.formatter.formatRangeToParts(e, t);
    if (t < e) throw RangeError("End date must be >= start date");
    let a = this.formatter.formatToParts(e);
    let u = this.formatter.formatToParts(t);
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
    let e = this.formatter.resolvedOptions();
    null == l && (l = "h12" === new Intl.DateTimeFormat("fr", {
      hour: "numeric",
      hour12: !1
    }).resolvedOptions().hourCycle);
    l && (this.resolvedHourCycle || (this.resolvedHourCycle = function (e, t) {
      if (!t.timeStyle && !t.hour) return;
      e = e.replace(/(-u-)?-nu-[a-zA-Z0-9]+/, "");
      let a = i(e += (e.includes("-u-") ? "" : "-u") + "-nu-latn", {
        ...t,
        timeZone: void 0
      });
      let u = parseInt(a.formatToParts(new Date(2020, 2, 3, 0)).find(e => "hour" === e.type).value, 10);
      let n = parseInt(a.formatToParts(new Date(2020, 2, 3, 23)).find(e => "hour" === e.type).value, 10);
      if (0 === u && 23 === n) return "h23";
      if (24 === u && 23 === n) return "h24";
      if (0 === u && 11 === n) return "h11";
      if (12 === u && 11 === n) return "h12";
      throw Error("Unexpected hour cycle result");
    }(e.locale, this.options)), e.hourCycle = this.resolvedHourCycle, e.hour12 = "h11" === this.resolvedHourCycle || "h12" === this.resolvedHourCycle);
    "ethiopic-amete-alem" === e.calendar && (e.calendar = "ethioaa");
    return e;
  }
  constructor(e, t = {}) {
    this.formatter = i(e, t);
    this.options = t;
  }
}
let r = {
  true: {
    ja: "h11"
  },
  false: {}
};
function i(e, t = {}) {
  if ("boolean" == typeof t.hour12 && (null == o && (o = "24" === new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    hour12: !1
  }).format(new Date(2020, 2, 3, 0))), o)) {
    let a = r[String((t = {
      ...t
    }).hour12)][e.split("-")[0]];
    let u = t.hour12 ? "h12" : "h23";
    t.hourCycle = null != a ? a : u;
    delete t.hour12;
  }
  let a = e + (t ? Object.entries(t).sort((e, t) => e[0] < t[0] ? -1 : 1).join() : "");
  if (u.has(a)) return u.get(a);
  let n = new Intl.DateTimeFormat(e, t);
  u.set(a, n);
  return n;
}
let o = null;
let l = null;
export const p = $$n0;