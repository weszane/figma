import { jsx, Fragment } from "react/jsx-runtime";
import { createContext, useState, useCallback, useMemo, useEffect, useContext } from "react";
import { debounce } from "../905/915765";
import { noop } from 'lodash-es';
import { getFeatureFlags } from "../905/601108";
import { h as _$$h } from "../905/791079";
import { M } from "../figma_app/749682";
import { loadStyleCanvases } from "../figma_app/646357";
let u = createContext({
  registerStyle: noop,
  unregisterStyle: noop
});
export function $$p1({
  children: e
}) {
  let [t, r] = useState(new Set());
  let s = useCallback(e => {
    r(t => {
      let r = new Set(t);
      r.add(e);
      return r;
    });
  }, []);
  let o = useCallback(e => {
    r(t => {
      let r = new Set(t);
      r.$$delete(e);
      return r;
    });
  }, []);
  let l = useMemo(() => debounce(e => {
    loadStyleCanvases(e);
  }, 300), []);
  useEffect(() => {
    t.size > 0 && l(Array.from(t));
  }, [l, t]);
  let d = useMemo(() => ({
    registerStyle: s,
    unregisterStyle: o
  }), [s, o]);
  return jsx(u.Provider, {
    value: d,
    children: e
  });
}
export function $$_0({
  dsStyle: e,
  children: t,
  additionalClassName: r
}) {
  return getFeatureFlags().ds_style_prefetch_on_hover ? jsx(m, {
    dsStyle: e,
    children: t,
    additionalClassName: r
  }) : jsx(h, {
    dsStyle: e,
    children: t
  });
}
function h({
  dsStyle: e,
  children: t
}) {
  !function ({
    dsStyle: e
  }) {
    let {
      registerStyle,
      unregisterStyle
    } = useContext(u);
    _$$h(() => (registerStyle(e), () => {
      unregisterStyle(e);
    }));
  }({
    dsStyle: e
  });
  return jsx(Fragment, {
    children: t
  });
}
function m({
  dsStyle: e,
  children: t,
  additionalClassName: r
}) {
  let {
    registerStyle,
    unregisterStyle
  } = useContext(u);
  let [o, l] = M();
  let [c, p] = useState(!1);
  let _ = l || c;
  useEffect(() => {
    _ ? registerStyle(e) : unregisterStyle(e);
  }, [_, registerStyle, unregisterStyle, e]);
  return jsx("div", {
    className: r,
    ref: o,
    onFocus: () => p(!0),
    onBlur: () => p(!1),
    children: t
  });
}
export const m3 = $$_0;
export const mY = $$p1;
