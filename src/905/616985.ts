import { jsx } from "react/jsx-runtime";
import { useMemo, useState, useLayoutEffect } from "react";
import { decimalToPercent } from "../905/436288";
import { $, h } from "../905/455748";
import { useLatestRef } from "../figma_app/922077";
import { VisibilityProvider } from "../905/773253";
let d = "push_container--panel--WJ-MY";
export function $$c0({
  width: e,
  children: t,
  dataTestId: i,
  derenderTimeout: l = 300
}) {
  let d = useMemo(() => t.flat().filter(e => !!e), [t]);
  let c = d.length - 1;
  let p = useLatestRef(c);
  let m = useLatestRef(d);
  let [h, g] = useState([]);
  let f = $(c);
  useLayoutEffect(function () {
    f && (void 0 !== p && m && p > c ? (g(m.slice(c + 1)), null !== l && setTimeout(() => g([]), l)) : p !== c && g([]));
  }, [t, l, c, f, m, p]);
  let _ = useMemo(() => d.concat(h), [d, h]);
  let A = useMemo(() => {
    let t = decimalToPercent(-c);
    let i = `translateX(${t})`;
    return {
      transform: i,
      WebkitTransform: i,
      width: `${e}px`
    };
  }, [c, e]);
  return jsx("div", {
    style: A,
    className: "push_container--container--X9h2K",
    children: _.map((t, r) => jsx(u, {
      width: e,
      current: r === c,
      dataTestId: i,
      timeout: l,
      children: t
    }, r))
  });
}
function u({
  children: e,
  width: t,
  current: i,
  dataTestId: a,
  timeout: o
}) {
  let c = h(i);
  let [u, p] = useState(!1);
  useLayoutEffect(() => {
    c && (i || null === o ? p(!1) : setTimeout(() => {
      p(!0);
    }, o));
  }, [i, c, o]);
  return jsx(VisibilityProvider, {
    isHidden: !i,
    children: jsx("div", {
      "aria-hidden": !i,
      style: {
        width: `${t}px`
      },
      className: d,
      "data-testid": i ? a ?? "push-container-current-panel" : void 0,
      children: jsx("div", {
        style: {
          width: `${t}px`,
          display: u ? "none" : void 0
        },
        className: d,
        children: e
      })
    })
  });
}
export const Q = $$c0;