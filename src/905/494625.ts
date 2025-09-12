import { createContext, useContext, useRef, useState, useCallback } from "react";
import { loadFeatureFlags } from "../905/586361";
import { F } from "../905/768014";
import { useRecording } from "../905/959312";
export let $$o1 = createContext(!1);
export function $$l0({
  onClick: e,
  recordingKey: t,
  actionOnPointerDown: i,
  onKeyDown: l,
  onFocus: d,
  onPointerDown: c,
  onPointerLeave: u,
  onMouseDown: p,
  disabled: m,
  "aria-disabled": h,
  ...g
}) {
  let f = useContext($$o1);
  let {
    suppressClicks,
    outProps
  } = loadFeatureFlags().fpl_equate_disabled_and_aria_disabled ? {
    suppressClicks: m || h,
    outProps: {
      "aria-disabled": m || h
    }
  } : {
    suppressClicks: m,
    outProps: {
      disabled: m,
      "aria-disabled": h
    }
  };
  let y = useRef(!1);
  let [b, v] = useState(!1);
  let I = useRecording(t => {
    suppressClicks || e?.(t);
  }, {
    eventName: "click",
    recordingKey: suppressClicks ? void 0 : t
  }, [e, suppressClicks, t]);
  let E = useRecording(e => {
    suppressClicks || p?.(e);
  }, {
    eventName: "pointerdown",
    recordingKey: suppressClicks ? void 0 : t
  }, [p, suppressClicks, t]);
  let x = useCallback(e => {
    suppressClicks || y.current || I(e);
    y.current = !1;
  }, [I, suppressClicks]);
  let S = useCallback(e => {
    if (c?.(e), v(!1), 0 !== e.button || "mouse" !== e.pointerType) return;
    let t = e.currentTarget;
    let i = loadFeatureFlags().fpl_tabs_focus;
    i && e.preventDefault();
    t.tabIndex > -1 && (i || e.preventDefault(), t.focus());
    x(e);
    y.current = !0;
  }, [x, c]);
  let w = useCallback(e => {
    !suppressClicks && p && E(e);
  }, [E, p, suppressClicks]);
  let C = useCallback(e => {
    y.current = !1;
    u?.(e);
  }, [u]);
  let T = useCallback(e => {
    v(!0);
    l?.(e);
  }, [l]);
  let k = useCallback(e => {
    v("keyboard" === F.type);
    d?.(e);
  }, [d]);
  return f || !i ? {
    ...g,
    ...outProps,
    onClick: x,
    onKeyDown: l,
    onFocus: d,
    onPointerDown: c,
    onPointerLeave: u,
    onMouseDown: w,
    "data-show-focus": !0
  } : {
    ...g,
    ...outProps,
    onPointerDown: S,
    onPointerLeave: C,
    onClick: x,
    onKeyDown: T,
    onFocus: k,
    onMouseDown: w,
    "data-show-focus": b || void 0
  };
}
export const I = $$l0;
export const m = $$o1;