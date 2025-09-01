export function $$t0(e, n = Date.now()) {
  let i = parseInt(`${e}`, 10);
  if (!isNaN(i)) return 1e3 * i;
  let f = Date.parse(`${e}`);
  return isNaN(f) ? 6e4 : f - n;
}
export function $$f1(e, n, i = Date.now()) {
  return (e[n] || e.all || 0) > i;
}
export function $$r2(e, {
  statusCode: n,
  headers: i
}, f = Date.now()) {
  let a = {
    ...e
  };
  let o = i && i["x-sentry-rate-limits"];
  let u = i && i["retry-after"];
  if (o) for (let e of o.trim().split(",")) {
    let [n, i,,, t] = e.split(":", 5);
    let r = parseInt(n, 10);
    let o = (isNaN(r) ? 60 : r) * 1e3;
    if (i) for (let e of i.split(";")) "metric_bucket" === e ? (!t || t.split(";").includes("custom")) && (a[e] = f + o) : a[e] = f + o;else a.all = f + o;
  } else u ? a.all = f + $$t0(u, f) : 429 === n && (a.all = f + 6e4);
  return a;
}
export const FA = $$t0;
export const Jz = $$f1;
export const wq = $$r2;