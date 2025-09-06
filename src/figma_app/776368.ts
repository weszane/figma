import { jsx } from "react/jsx-runtime";
import { useState, useEffect, useLayoutEffect } from "react";
import { atom, useAtomWithSubscription, Xr } from "../figma_app/27355";
import { EA } from "../905/18800";
import { SprigContext } from "../905/99656";
import { An, Ay } from "../905/931912";
import { m } from "../figma_app/714966";
import { $z } from "../905/62762";
let u = atom([]);
let p = atom(null, (e, t, r) => {
  let n = e(u);
  t(u, [...n, r]);
});
let _ = atom(null, (e, t, r) => {
  let n = e(u);
  let i = n.indexOf(r);
  -1 !== i && t(u, n.slice(0, i).concat(n.slice(i + 1)));
});
export function $$h0({
  children: e,
  onAttemptToShowSurvey: t,
  onSurveyClose: r,
  geofence: d = {}
}) {
  let p = useAtomWithSubscription(EA);
  let _ = $z({
    canUseCookieForAnalytics: p,
    geofence: d
  });
  let [h, m] = useState(An);
  let g = useAtomWithSubscription(u);
  useEffect(() => {
    m(e => (e.tearDown(), _ ? new Ay() : An));
  }, [_]);
  useEffect(() => {
    h.setCallbacks({
      onAttemptToShowSurvey: t,
      onSurveyClose: r
    });
  }, [t, r, h]);
  useLayoutEffect(() => {
    Ay.setScreenAreasToAvoid(g);
  }, [g]);
  return jsx(SprigContext.Provider, {
    value: h,
    children: e
  });
}
export function $$m1(e) {
  let [t, r] = useState();
  let n = Xr(p);
  let s = Xr(_);
  useEffect(() => {
    m(e, t) || r(e);
  }, [e, t]);
  useEffect(() => {
    if (void 0 !== t) {
      n(t);
      return () => s(t);
    }
  }, [s, n, t]);
}
export const A = $$h0;
export const X = $$m1;