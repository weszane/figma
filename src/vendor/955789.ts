import { yB, o1, eg } from "../vendor/13174";
import { useRef, useCallback } from "react";
import { A } from "../vendor/412162";
import { TW } from "../vendor/601638";
import { bq, wt, sD } from "../vendor/400554";
export function $$l0(e) {
  let {
    isDisabled,
    onBlurWithin,
    onFocusWithin,
    onFocusWithinChange
  } = e;
  let d = useRef({
    isFocusWithin: !1
  });
  let {
    addGlobalListener,
    removeAllGlobalListeners
  } = A();
  let h = useCallback(e => {
    e.currentTarget.contains(e.target) && d.current.isFocusWithin && !e.currentTarget.contains(e.relatedTarget) && (d.current.isFocusWithin = !1, removeAllGlobalListeners(), onBlurWithin && onBlurWithin(e), onFocusWithinChange && onFocusWithinChange(!1));
  }, [onBlurWithin, onFocusWithinChange, d, removeAllGlobalListeners]);
  let D = yB(h);
  let f = useCallback(e => {
    if (!e.currentTarget.contains(e.target)) return;
    let t = TW(e.target);
    let a = bq(t);
    if (!d.current.isFocusWithin && a === wt(e.nativeEvent)) {
      onFocusWithin && onFocusWithin(e);
      onFocusWithinChange && onFocusWithinChange(!0);
      d.current.isFocusWithin = !0;
      D(e);
      let a = e.currentTarget;
      addGlobalListener(t, "focus", e => {
        if (d.current.isFocusWithin && !sD(a, e.target)) {
          let n = new t.defaultView.FocusEvent("blur", {
            relatedTarget: e.target
          });
          o1(n, a);
          h(eg(n));
        }
      }, {
        capture: !0
      });
    }
  }, [onFocusWithin, onFocusWithinChange, D, addGlobalListener, h]);
  return isDisabled ? {
    focusWithinProps: {
      onFocus: void 0,
      onBlur: void 0
    }
  } : {
    focusWithinProps: {
      onFocus: f,
      onBlur: h
    }
  };
}
export const R = $$l0;