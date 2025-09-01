import { Y } from "../vendor/259657";
import { p } from "../vendor/378995";
import { k } from "../vendor/155810";
import { useMemo } from "react";
export function $$o0(e) {
  e = k(null != e ? e : {}, l);
  let {
    locale
  } = Y();
  return useMemo(() => new p(locale, e), [locale, e]);
}
function l(e, t) {
  if (e === t) return !0;
  let a = Object.keys(e);
  let u = Object.keys(t);
  if (a.length !== u.length) return !1;
  for (let u of a) if (t[u] !== e[u]) return !1;
  return !0;
}
export const i = $$o0;