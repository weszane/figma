import { o } from "../vendor/554273";
export function $$n0(e, t) {
  let a = e;
  for (o(a, t) && (a = a.parentElement); a && !o(a, t);) a = a.parentElement;
  return a || document.scrollingElement || document.documentElement;
}
export const m = $$n0;