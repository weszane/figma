import { N } from "../vendor/791199";
import { J } from "../vendor/578159";
import { t as _$$t } from "../vendor/254850";
import { mD } from "../vendor/601638";
import { e as _$$e } from "../vendor/344038";
import { useRef, useCallback } from "react";
export function $$s1(e) {
  e.nativeEvent = e;
  e.isDefaultPrevented = () => e.defaultPrevented;
  e.isPropagationStopped = () => e.cancelBubble;
  e.persist = () => {};
  return e;
}
export function $$d3(e, t) {
  Object.defineProperty(e, "target", {
    value: t
  });
  Object.defineProperty(e, "currentTarget", {
    value: t
  });
}
export function $$c4(e) {
  let t = useRef({
    isFocused: !1,
    observer: null
  });
  N(() => {
    let e = t.current;
    return () => {
      e.observer && (e.observer.disconnect(), e.observer = null);
    };
  }, []);
  let a = J(t => {
    e?.(t);
  });
  return useCallback(e => {
    if (e.target instanceof HTMLButtonElement || e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLSelectElement) {
      t.current.isFocused = !0;
      let u = e.target;
      u.addEventListener("focusout", e => {
        t.current.isFocused = !1;
        u.disabled && a($$s1(e));
        t.current.observer && (t.current.observer.disconnect(), t.current.observer = null);
      }, {
        once: !0
      });
      t.current.observer = new MutationObserver(() => {
        if (t.current.isFocused && u.disabled) {
          var e;
          t.current.observer?.disconnect();
          let a = u === document.activeElement ? null : document.activeElement;
          u.dispatchEvent(new FocusEvent("blur", {
            relatedTarget: a
          }));
          u.dispatchEvent(new FocusEvent("focusout", {
            bubbles: !0,
            relatedTarget: a
          }));
        }
      });
      t.current.observer.observe(u, {
        attributes: !0,
        attributeFilter: ["disabled"]
      });
    }
  }, [a]);
}
export let $$m2 = !1;
export function $$h0(e) {
  for (; e && !_$$t(e);) e = e.parentElement;
  let t = mD(e);
  let a = t.document.activeElement;
  if (!a || a === e) return;
  $$m2 = !0;
  let u = !1;
  let n = e => {
    (e.target === a || u) && e.stopImmediatePropagation();
  };
  let l = t => {
    t.target !== a && !u || (t.stopImmediatePropagation(), e || u || (u = !0, _$$e(a), c()));
  };
  let s = t => {
    (t.target === e || u) && t.stopImmediatePropagation();
  };
  let d = t => {
    (t.target === e || u) && (t.stopImmediatePropagation(), u || (u = !0, _$$e(a), c()));
  };
  t.addEventListener("blur", n, !0);
  t.addEventListener("focusout", l, !0);
  t.addEventListener("focusin", d, !0);
  t.addEventListener("focus", s, !0);
  let c = () => {
    cancelAnimationFrame(h);
    t.removeEventListener("blur", n, !0);
    t.removeEventListener("focusout", l, !0);
    t.removeEventListener("focusin", d, !0);
    t.removeEventListener("focus", s, !0);
    $$m2 = !1;
    u = !1;
  };
  let h = requestAnimationFrame(c);
  return c;
}
export const LE = $$h0;
export const eg = $$s1;
export const lR = $$m2;
export const o1 = $$d3;
export const yB = $$c4;