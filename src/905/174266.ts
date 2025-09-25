import { jsx, jsxs } from "react/jsx-runtime";
import { getThemeContextOrDefault } from "../905/158740";
import { A as _$$A } from "../vendor/723372";
import { ButtonPrimitive } from "../905/632989";
import { Button } from "../905/521428";
import { IconButton } from "../905/443068";
import { L } from "../905/704296";
import { x } from "../905/404412";
import { memo, useRef, useCallback, useEffect, useMemo, createContext } from "react";
import { useFplStrings } from "../figma_app/415899";
import { ensureContext } from "../905/61417";
import { defaultComponentAttribute } from "../905/577641";
import { isModifierKey } from "../905/658036";
import { T } from "../905/745591";
let p = memo(function (e) {
  return jsx("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: jsx("path", {
      fill: "var(--color-icon)",
      fillRule: "evenodd",
      d: "M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12m0 1a7 7 0 1 0 0-14 7 7 0 0 0 0 14",
      clipRule: "evenodd"
    })
  });
});
function _({
  children: e,
  className: t,
  onClose: i,
  timeout: r,
  htmlAttributes: a,
  ...s
}) {
  let o = function (e, t) {
    let i = useRef(null);
    let n = useRef(!1);
    let r = useRef(t);
    r.current = t;
    let a = useCallback(() => {
      let e = n.current;
      let t = i.current?.matches(":focus-within");
      e && !t && r.current?.apply(void 0, ["timeout"]);
    }, []);
    useEffect(() => {
      n.current = !1;
    }, [e]);
    useEffect(() => {
      let t;
      void 0 !== e && e !== 1 / 0 && (t = window.setTimeout(() => {
        n.current = !0;
        a();
      }, e));
      return () => window.clearTimeout(t);
    }, [a, e]);
    return {
      ref: i,
      onBlur: a
    };
  }(r, i);
  let l = useMemo(() => ({
    subscriberCount: 0,
    signalClose: e => i?.(e)
  }), [i]);
  return jsx(A.Provider, {
    value: l,
    children: jsx("div", {
      ...defaultComponentAttribute,
      ...a,
      ...s,
      role: "presentation",
      onClick: () => {
        0 === l.subscriberCount && i?.("dismiss");
      },
      onKeyDown: e => {
        isModifierKey(e) || "Escape" !== e.key || i?.("dismiss");
      },
      ...o,
      children: jsx("div", {
        className: t,
        role: "group",
        children: e
      })
    })
  });
}
_.displayName = "ToastPrimitive.Root";
let A = createContext(void 0);
function y() {
  let e = ensureContext(A, "useDismissToast", "ToastPrimitive.Root");
  useEffect(() => (e.subscriberCount++, () => {
    e.subscriberCount--;
  }), [e]);
  return t => e.signalClose(t);
}
var b = "toast__buttonWrap__2TySl";
export function $$I5({
  variant: e,
  htmlAttributes: t,
  ...i
}) {
  return jsx(_, {
    ...i,
    htmlAttributes: t,
    className: _$$A("toast__root__nVszD", {
      toast__dangerRoot__CPXoI: "danger" === e
    })
  });
}
export function $$E3({
  htmlAttributes: e,
  ...t
}) {
  return jsx(T, {
    ...t,
    htmlAttributes: e,
    className: "toast__message__wf2fG"
  });
}
export function $$x1({
  htmlAttributes: e,
  ...t
}) {
  return jsx("span", {
    ...e,
    ...t,
    className: "toast__count__d7BNQ"
  });
}
export function $$S2({
  htmlAttributes: e,
  ...t
}) {
  let i = y();
  let o = useFplStrings("dismiss");
  let c = "ui2" === getThemeContextOrDefault().version;
  let u = () => i("dismiss");
  return c ? jsx(ButtonPrimitive, {
    htmlAttributes: e,
    ...t,
    className: "toast__ui2DismissButton__clf9D",
    onClick: u,
    "aria-label": o,
    children: jsx(L, {})
  }) : jsx("div", {
    ...e,
    ...t,
    className: _$$A(b, "toast__dismissButton__SYFiF"),
    children: jsx(IconButton, {
      "aria-label": o,
      onClick: u,
      children: jsx(L, {})
    })
  });
}
export function $$w0({
  children: e,
  action: t,
  htmlAttributes: i,
  ...a
}) {
  let l = y();
  let d = "ui2" === getThemeContextOrDefault().version;
  let c = (...e) => {
    !1 !== t?.(...e) && l("action");
  };
  return d ? jsx(ButtonPrimitive, {
    ...a,
    htmlAttributes: i,
    className: "toast__ui2Button__OgkDa",
    onClick: c,
    children: e
  }) : jsx("div", {
    className: b,
    children: jsx(Button, {
      ...a,
      htmlAttributes: i,
      onClick: c,
      variant: "secondary",
      children: e
    })
  });
}
export function $$C6({
  htmlAttributes: e,
  ...t
}) {
  return jsx(x, {
    ...e,
    ...t,
    className: "toast__animate__oNP0u"
  });
}
export function $$T4({
  progressFraction: e = 0,
  htmlAttributes: t,
  ...i
}) {
  let r;
  let a = Math.min(1, Math.max(0, e));
  if (0 === a) r = null;else if (1 === a) r = jsx("circle", {
    cx: "12",
    cy: "12",
    r: "5",
    fill: "var(--color-icon)"
  });else {
    let [e, t] = function (e, t, i = 0, n = 0) {
      return [i + 5 * Math.cos(e), n - 5 * Math.sin(e)];
    }((.25 - a) * 2 * Math.PI, 0, 12, 12);
    r = jsx("path", {
      d: `M12 7A5 5 0 ${+(a > .5)} 1 ${e} ${t} L12 12 12 7`,
      fill: "var(--color-icon)"
    });
  }
  return jsxs("svg", {
    ...t,
    ...i,
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    children: [r, jsx(p, {})]
  });
}
$$I5.displayName = "Toast.Root";
$$E3.displayName = "Toast.Message";
$$x1.displayName = "Toast.Count";
$$S2.displayName = "Toast.DismissButton";
$$w0.displayName = "Toast.ActionButton";
$$C6.displayName = "Toast.Spinner";
$$T4.displayName = "Toast.Progress";
export const rA = $$w0;
export const y_ = $$x1;
export const Rz = $$S2;
export const QB = $$E3;
export const ke = $$T4;
export const bL = $$I5;
export const y$ = $$C6;