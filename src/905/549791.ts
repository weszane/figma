import { jsx } from "react/jsx-runtime";
import { forwardRef, useRef, useLayoutEffect, useCallback } from "react";
import { n4, SK } from "../905/955878";
import { Qv } from "../905/959312";
import { M } from "../905/581092";
import { r as _$$r } from "../905/577641";
export let $$d0 = forwardRef(({
  htmlAttributes: e,
  ...t
}, i) => {
  let d = M(i);
  let c = function ({
    mixed: e,
    inputRef: t,
    onChange: i,
    recordingKey: n,
    actionOnPointerDown: o,
    ...l
  }) {
    let d = useRef(!1);
    let c = useRef("mouse");
    useLayoutEffect(() => {
      t.current.indeterminate = e ?? !1;
    }, [t, e]);
    let u = Qv(i, {
      eventName: "change",
      recordingKey: n
    }, [i]);
    let p = useCallback(e => {
      n4(e.nativeEvent) || (e.currentTarget?.click(), d.current = !0);
    }, []);
    let m = useCallback(() => {
      d.current = !1;
    }, []);
    let h = useCallback(e => {
      c.current = SK(e) ? "keyboard" : "mouse";
    }, []);
    let g = useCallback(t => {
      if (d.current) {
        t.preventDefault();
        d.current = !1;
        return;
      }
      let i = !!e || t.currentTarget.checked;
      u?.(i, {
        event: t,
        source: c.current
      });
    }, [e, u]);
    let {
      onBlur,
      onKeyDown,
      onKeyUp
    } = function () {
      let e = useRef(!1);
      return {
        onBlur: useCallback(() => {
          e.current = !1;
        }, []),
        onKeyDown: useCallback(t => {
          "Enter" === t.key && (t.preventDefault(), e.current = !0);
        }, []),
        onKeyUp: useCallback(t => {
          "Enter" === t.key && e.current && (t.preventDefault(), t.currentTarget.click());
        }, [])
      };
    }();
    let y = {
      ...l,
      onClick: h,
      onChange: g,
      onKeyDown,
      onKeyUp,
      onBlur,
      tabIndex: 0
    };
    return o ? {
      ...y,
      onPointerDown: p,
      onPointerLeave: m
    } : y;
  }({
    ...t,
    inputRef: d
  });
  return jsx("input", {
    ..._$$r,
    ...e,
    ...c,
    type: "checkbox",
    ref: d,
    "aria-disabled": t["aria-disabled"] || t.disabled || void 0
  });
});
$$d0.displayName = "CheckboxPrimitive";
export const F = $$d0;