import { um } from "../vendor/186187";
import { T } from "../vendor/324039";
export function $$o2(e) {
  let r;
  let n = 2;
  let o = Error(e);
  o.name = "HandlingStack";
  um(() => {
    let e = T(o);
    e.stack = e.stack.slice(n);
    r = $$a1(e);
  });
  return r;
}
export function $$a1(e) {
  let r = $$h0(e);
  e.stack.forEach(e => {
    let n = "?" === e.func ? "<anonymous>" : e.func;
    let i = e.args && e.args.length > 0 ? `(${e.args.join(", ")})` : "";
    let s = e.line ? `:${e.line}` : "";
    let o = e.line && e.column ? `:${e.column}` : "";
    r += `
  at ${n}${i} @ ${e.url}${s}${o}`;
  });
  return r;
}
export function $$h0(e) {
  return `${e.name || "Error"}: ${e.message}`;
}
export const NR = $$h0;
export const Yn = $$a1;
export const uC = $$o2;