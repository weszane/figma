import { jsx } from "react/jsx-runtime";
import { forwardRef, useRef, useEffect } from "react";
import { useSelectionProvider, useSelectionContext } from "src/905/751750";
import { setupAutofocusHandler } from "src/905/128376";
import { useExposedRef } from "src/905/581092";
import { defaultComponentAttribute } from "src/905/577641";
import { bq, ae } from "src/905/117474";
import { F } from "src/905/768014";
export let $$u1 = forwardRef(({
  children: e,
  htmlAttributes: t,
  ...i
}, s) => {
  let u = useExposedRef(s);
  let [p, m] = useSelectionProvider();
  let h = function (e, t = {}) {
    let i = useRef(void 0);
    useEffect(() => {
      let t = e.current;
      if (void 0 === i.current) {
        let e = bq(F.element);
        i.current = e;
      }
      ae(t) || (t.querySelector("[autofocus]") || t).focus();
      return () => {
        let e = i.current;
        e && "keyboard" === F.type && e.focus();
      };
    }, []);
    return {
      onBlur(i) {
        i.relatedTarget || "Tab" === F.key || e.current?.focus();
        t.onBlur?.(i);
      }
    };
  }(u, {
    onBlur: t?.onBlur
  });
  return jsx(m, {
    value: p,
    children: jsx("div", {
      ...defaultComponentAttribute,
      ...t,
      ...i,
      ...h,
      ref: u,
      role: "dialog",
      "aria-labelledby": p,
      tabIndex: -1,
      children: e
    })
  });
});
$$u1.displayName = "DialogPrimitive.Root";
export let $$p0 = forwardRef(({
  children: e,
  autofocus: t = !1,
  htmlAttributes: i,
  ...r
}, o) => {
  let l = useSelectionContext();
  let d = setupAutofocusHandler(o, t);
  return jsx("h2", {
    ...i,
    ...r,
    ref: d,
    id: l,
    tabIndex: t ? -1 : void 0,
    children: e
  });
});
$$p0.displayName = "DialogPrimitive.Label";
export const J = $$p0;
export const b = $$u1;
