import { A } from "../vendor/144305";
import { ro, wH, p9 } from "../vendor/969425";
import { o as _$$o } from "../vendor/218120";
import { i as _$$i } from "../vendor/471124";
import { useMemo } from "react";
function l(e) {
  return e && e.__esModule ? e.$$default : e;
}
export let $$s0 = new WeakMap();
export function $$d3(e) {
  return e?.calendar.identifier === "gregory" && "BC" === e.era ? "short" : void 0;
}
export function $$c1(e) {
  var t;
  let a;
  let s;
  let c = _$$o(l(A), "@react-aria/calendar");
  "highlightedRange" in e ? {
    start: a,
    end: s
  } = e.highlightedRange || {} : a = s = null !== (t = e.value) && void 0 !== t ? t : void 0;
  let m = _$$i({
    weekday: "long",
    month: "long",
    year: "numeric",
    day: "numeric",
    era: $$d3(a) || $$d3(s),
    timeZone: e.timeZone
  });
  let D = "anchorDate" in e ? e.anchorDate : null;
  return useMemo(() => {
    if (!D && a && s) {
      if (ro(a, s)) {
        let t = m.format(a.toDate(e.timeZone));
        return c.format("selectedDateDescription", {
          date: t
        });
      }
      {
        let t = h(m, c, a, s, e.timeZone);
        return c.format("selectedRangeDescription", {
          dateRange: t
        });
      }
    }
    return "";
  }, [a, s, D, e.timeZone, c, m]);
}
export function $$m2(e, t, a, s) {
  let c = _$$o(l(A), "@react-aria/calendar");
  let m = $$d3(e) || $$d3(t);
  let D = _$$i({
    month: "long",
    year: "numeric",
    era: m,
    calendar: e.calendar.identifier,
    timeZone: a
  });
  let f = _$$i({
    month: "long",
    year: "numeric",
    day: "numeric",
    era: m,
    calendar: e.calendar.identifier,
    timeZone: a
  });
  return useMemo(() => {
    if (ro(e, wH(e))) {
      let u = e;
      let r = t;
      if (e.calendar.getFormattableMonth && (u = e.calendar.getFormattableMonth(e)), t.calendar.getFormattableMonth && (r = t.calendar.getFormattableMonth(t)), ro(t, p9(e))) return D.format(u.toDate(a));
      if (ro(t, p9(t))) return s ? h(D, c, u, r, a) : D.formatRange(u.toDate(a), r.toDate(a));
    }
    return s ? h(f, c, e, t, a) : f.formatRange(e.toDate(a), t.toDate(a));
  }, [e, t, D, f, c, a, s]);
}
function h(e, t, a, u, n) {
  let r = e.formatRangeToParts(a.toDate(n), u.toDate(n));
  let i = -1;
  for (let e = 0; e < r.length; e++) {
    let t = r[e];
    if ("shared" === t.source && "literal" === t.type) i = e;else if ("endRange" === t.source) break;
  }
  let o = "";
  let l = "";
  for (let e = 0; e < r.length; e++) e < i ? o += r[e].value : e > i && (l += r[e].value);
  return t.format("dateRange", {
    startDate: o,
    endDate: l
  });
}
export const OX = $$s0;
export const ZI = $$c1;
export const ZR = $$m2;
export const cf = $$d3;