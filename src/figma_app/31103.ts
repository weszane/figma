import { jsx, Fragment } from "react/jsx-runtime";
import { createContext, useCallback, useContext, useMemo, useEffect } from "react";
import { trackDefinedFileEventWithStore } from "../figma_app/901889";
import { v4 } from "../figma_app/655139";
import { $h } from "../905/191741";
import { fu } from "../figma_app/831799";
let d = createContext({});
let c = "dev_mode.variables.";
let u = {};
export function $$p3() {
  let e = trackDefinedFileEventWithStore();
  return useCallback((t, r, n = {}) => {
    e(c + "performance", {
      name: t,
      duration: r,
      ...n
    });
  }, [e]);
}
export function $$_1() {
  let e = trackDefinedFileEventWithStore();
  let {
    name,
    enabled = !0,
    trackingProps
  } = useContext(d);
  return useCallback((i, a = u) => {
    name && enabled && e(c + name, {
      action: i,
      ...trackingProps,
      ...a
    });
  }, [trackingProps, enabled, name, e]);
}
export function $$h0(e, t) {
  let r = trackDefinedFileEventWithStore();
  return useCallback((n = u) => {
    r(c + e, {
      action: "click_on_entry_point",
      entrypoint: t,
      ...n
    });
  }, [t, e, r]);
}
export function $$m2({
  children: e,
  enabled: t = !0,
  skipOpenAndClose: r = !1,
  name: p,
  trackingProps: _ = u
}) {
  let h = trackDefinedFileEventWithStore();
  let m = v4().id;
  let [g] = $h();
  let f = useMemo(() => ({
    codeLanguage: m,
    inspectView: g,
    ..._
  }), [_, m, g]);
  let E = useMemo(() => ({
    name: p,
    enabled: t,
    trackingProps: f
  }), [p, t, f]);
  return (useEffect(() => {
    if (p && t && !r) {
      h(c + p, {
        action: "view_opened",
        ...f
      });
      return () => {
        h(c + p, {
          action: "view_closed",
          ...f
        });
      };
    }
  }, []), p) ? jsx(fu, {
    name: p,
    enabled: t,
    properties: f,
    children: jsx(d.Provider, {
      value: E,
      children: e
    })
  }) : jsx(Fragment, {
    children: e
  });
}
export const KP = $$h0;
export const ON = $$_1;
export const gs = $$m2;
export const oy = $$p3;