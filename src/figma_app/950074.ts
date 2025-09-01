import { jsx } from "react/jsx-runtime";
import { createContext, useState, useMemo, useContext } from "react";
var $$a2 = (e => (e[e.Mount = 0] = "Mount", e[e.Back = 1] = "Back", e[e.Forward = 2] = "Forward", e[e.ToggleView = 3] = "ToggleView", e))($$a2 || {});
let s = createContext({
  lastNavAction: 0,
  lastNavDirection: 0,
  setLastNavAction: () => {},
  lastActionWasBackSwipe: !1
});
export function $$o0({
  children: e
}) {
  let [t, r] = useState(0);
  let [a, o] = useState(!1);
  let [l, d] = useState(!1);
  let c = useMemo(() => a ? 3 : t, [a, t]);
  return jsx(s.Provider, {
    value: {
      lastNavAction: c,
      lastNavDirection: t,
      setLastNavAction: (e, t) => {
        d(!!t);
        3 === e ? o(!0) : (o(!1), r(e));
      },
      lastActionWasBackSwipe: l
    },
    children: e
  });
}
export function $$l1() {
  return useContext(s);
}
export const P3 = $$o0;
export const ZX = $$l1;
export const r6 = $$a2;