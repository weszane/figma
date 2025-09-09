import { jsx } from "react/jsx-runtime";
import { useMemo, useState, useEffect, useRef } from "react";
import { throwError } from "../figma_app/465776";
import { A as _$$A } from "../905/920142";
import { capitalize } from "../figma_app/930338";
import { getI18nString } from "../905/303541";
import { getI18nState } from "../figma_app/363242";
function c(e, t) {
  return "ja" === e ? "narrow" : t;
}
export function $$u1(e, t = "long", i = getI18nState().getPrimaryLocale(!1)) {
  t = c(i, t);
  let n = useMemo(() => new Intl.RelativeTimeFormat(i, {
    style: t
  }), [i, t]);
  let [a, s] = useState(() => A(e));
  let [o, l] = useState(() => f(n, e));
  useEffect(() => {
    l(f(n, e));
  }, [e, n]);
  useEffect(() => {
    s(A(e));
  }, [e]);
  $$_0(() => {
    a > 0 && null !== e && (l(f(n, e)), s(A(e)));
  }, a);
  return o || "";
}
export function $$p2(e, t = "long", i = getI18nState().getPrimaryLocale(!1)) {
  t = c(i, t);
  return f(new Intl.RelativeTimeFormat(i, {
    style: t
  }), e) || "";
}
export function $$m3(e) {
  let t = $$u1(e.date, e.style, e.locale);
  let {
    onChange
  } = e;
  useEffect(() => {
    onChange?.(t);
  }, [onChange, t]);
  return jsx("span", {
    className: e.className || "",
    title: e.title,
    children: e.capitalize ? capitalize(t) : t
  });
}
function h(e, t) {
  switch (t) {
    case "second":
      return 1e3 * e;
    case "minute":
      return 6e4 * e;
    case "hour":
      return 36e5 * e;
    case "day":
      return 864e5 * e;
    case "month":
      return 2592e6 * e;
    case "year":
      return 31536e6 * e;
    default:
      throwError(`Unsupported relative time unit (${t})`);
  }
}
let g = Object.values({
  s: {
    min: 0,
    max: h(45, "second"),
    factor: h(1, "second"),
    unit: "second"
  },
  m: {
    min: h(45, "second"),
    max: h(90, "second"),
    unit: "minute"
  },
  mm: {
    min: h(90, "second"),
    max: h(45, "minute"),
    factor: h(1, "minute"),
    unit: "minute"
  },
  h: {
    min: h(45, "minute"),
    max: h(90, "minute"),
    unit: "hour"
  },
  hh: {
    min: h(90, "minute"),
    max: h(22, "hour"),
    factor: h(1, "hour"),
    unit: "hour"
  },
  d: {
    min: h(22, "hour"),
    max: h(36, "hour"),
    factor: h(1, "day"),
    unit: "day"
  },
  dd: {
    min: h(36, "hour"),
    max: h(26, "day"),
    factor: h(1, "day"),
    unit: "day"
  },
  M: {
    min: h(26, "day"),
    max: h(45, "day"),
    unit: "month"
  },
  MM: {
    min: h(45, "day"),
    max: h(320, "day"),
    factor: h(1, "month"),
    unit: "month"
  },
  yy: {
    min: h(320, "day"),
    max: void 0,
    factor: h(1, "year"),
    unit: "year"
  }
});
function f(e, t = new Date()) {
  let i;
  if (null === t) return "Invalid Date";
  i = "string" == typeof t || "number" == typeof t ? _$$A.utc(t).toDate() : t;
  let n = new Date();
  if (isNaN(i.getTime())) return i.toString();
  let r = i.getTime() - n.getTime();
  let a = Math.abs(r);
  let o = r < 0;
  for (let t of g) if (a >= t.min) {
    if (t.max && a >= t.max) continue;
    if (a < h(45, "second")) return getI18nString("general.time.just_now_past");
    let i = e.format((o ? -1 : 1) * (t.factor ? Math.round(a / t.factor) : 1), t.unit);
    getI18nState()?.pseudoLocale && (i = getI18nState().getPseudoLocalizedDynamicString(i));
    return i;
  }
  return "Invalid Date";
}
export function $$_0(e, t) {
  let i = useRef();
  let n = useRef(e);
  useEffect(() => {
    n.current = e;
  }, [e]);
  useEffect(() => (t > 0 && (i.current = setInterval(() => n.current(), t)), () => {
    window.clearInterval(i.current);
  }), [t]);
  return i;
}
function A(e) {
  if (!e) return 0;
  let t = Math.abs(_$$A.utc(e).diff(new Date()));
  return t < h(1, "hour") ? h(30, "second") : t < h(1, "day") ? h(30, "minute") : h(6, "hour");
}
export const $$ = $$_0;
export const Ak = $$u1;
export const JD = $$p2;
export const h1 = $$m3;