import { jsx, jsxs } from "react/jsx-runtime";
import { createContext, forwardRef, useRef, useState, useMemo } from "react";
import { A } from "../vendor/723372";
import { setupDragHandler } from "../905/97346";
import { ensureContext } from "../905/61417";
import { toPercent } from "../905/893109";
import { defaultComponentAttribute } from "../905/577641";
import { preventAndStopEvent } from "../905/955878";
import { clamp, roundToNearestMultiple, findMinBy, roundWithDirection, stepTowardsRange } from "../905/875826";
import { isAppleDevice } from "../905/881471";
import { useRecording } from "../905/959312";
function h(e, t, i) {
  return ((e = clamp(e, t, i)) - t) / (i - t);
}
function g(e, t, i, n) {
  return clamp(roundToNearestMultiple(e, t), i, n);
}
let f = createContext(null);
let _ = createContext(null);
let $$A2 = forwardRef(function (e, t) {
  let {
    className,
    style,
    children,
    min,
    max,
    step,
    bigStep,
    value,
    valueText,
    defaultValue,
    onChange,
    disabled = !1,
    hints = null,
    loop = !1,
    "aria-label": k,
    "aria-labelledby": R,
    "aria-orientation": N = "horizontal",
    htmlAttributes,
    ...O
  } = function ({
    onChange: e,
    recordingKey: t,
    ...i
  }) {
    let n = useRecording(e, {
      eventName: "change",
      recordingKey: t
    }, [e]);
    return {
      ...i,
      onChange: n
    };
  }(e);
  let D = useRef(null);
  let L = useRef(null);
  let F = useRef(!1);
  let [M, j] = useState(!1);
  let U = useRef(!1);
  let B = g(value, step, min, max);
  let V = useMemo(() => function (e) {
    let t = String(e);
    let i = t.indexOf(".");
    let n = -1 === i ? 0 : t.length - i - 1;
    let r = {
      minimumFractionDigits: n,
      maximumFractionDigits: n
    };
    try {
      return new Intl.NumberFormat(void 0, {
        ...r,
        trailingZeroDisplay: "stripIfInteger",
        signDisplay: "negative"
      });
    } catch {
      return new Intl.NumberFormat(void 0, r);
    }
  }(step), [step]);
  let G = valueText ?? V.format(B);
  let z = useMemo(() => ({
    min,
    max
  }), [min, max]);
  let H = useMemo(() => ({
    value: B,
    thumbRef: L
  }), [B, L]);
  function W(e, t, i = !1) {
    disabled || e === B || (i && (U.current = !0), onChange?.(e, {
      event: t,
      commit: !1
    }));
  }
  function K(e) {
    (!disabled || U.current) && (onChange?.(B, {
      event: e,
      commit: !0
    }), U.current = !1);
  }
  let [Y, q] = setupDragHandler({
    disabled,
    onDragStart() {
      j(!0);
      F.current = !1;
    },
    onDrag(e) {
      let t = isAppleDevice && e.ctrlKey || F.current;
      W(g(function (e, t, i, n) {
        if (!t || 0 === t.length) return e;
        let r = t.map(e => h(e, i, n));
        let [a, s] = findMinBy(r, t => Math.abs(t - e));
        return s <= .02 ? a : e;
      }(function (e, t, i) {
        let n = t.getBoundingClientRect();
        let r = i.getBoundingClientRect();
        return (e.clientX - n.left - r.width / 2) / (n.width - r.width);
      }(e, D.current, L.current), t ? null : hints, min, max) * (max - min) + min, step, min, max), e);
    },
    onDragEnd: K
  });
  let {
    tabIndex,
    ...Z
  } = htmlAttributes ?? {};
  return jsx(f.Provider, {
    value: z,
    children: jsx(_.Provider, {
      value: H,
      children: jsxs("div", {
        ...defaultComponentAttribute,
        ...O,
        ...Z,
        ref: D,
        style,
        className: A(className, "slider-primitive__root__j6miT"),
        "data-dragging": Y || void 0,
        "data-focus-visible": !M || void 0,
        children: [jsx("div", {
          ref: t,
          ...q({
            className: "slider-primitive__hitbox__MAYcD"
          }),
          onKeyDown: function (e) {
            Y || j(!1);
            let t = B;
            switch (e.code) {
              case "ArrowRight":
              case "ArrowUp":
                t = roundWithDirection(t, e.shiftKey ? bigStep : step, step);
                break;
              case "ArrowLeft":
              case "ArrowDown":
                t = roundWithDirection(t, -1 * (e.shiftKey ? bigStep : step), step);
                break;
              case "PageUp":
                t = roundWithDirection(t, bigStep, step);
                break;
              case "PageDown":
                t = roundWithDirection(t, -1 * bigStep, step);
                break;
              case "Home":
                t = min;
                break;
              case "F4":
              case "End":
                t = max;
                break;
              case "Backspace":
              case "Delete":
                preventAndStopEvent(e);
                null != defaultValue && (t = defaultValue);
                break;
              case "KeyS":
                preventAndStopEvent(e);
                F.current = !0;
                return;
              case "Escape":
                preventAndStopEvent(e);
                e.currentTarget.blur();
                return;
              default:
                return;
            }
            preventAndStopEvent(e);
            loop && (t = stepTowardsRange(t, min, max, step));
            W(t = clamp(t, min, max), e, !0);
          },
          onKeyUp: function (e) {
            "KeyS" === e.code && (F.current = !1);
          },
          onBlur: e => {
            j(!1);
            U.current && K(e);
          },
          role: "slider",
          tabIndex: tabIndex ?? 0,
          "aria-valuemin": min,
          "aria-valuemax": max,
          "aria-valuenow": B,
          "aria-valuetext": G,
          "aria-disabled": disabled || void 0,
          "aria-label": k,
          "aria-labelledby": R,
          "aria-orientation": N
        }), children]
      })
    })
  });
});
export function $$y3({
  htmlAttributes: e,
  style: t,
  ...i
}) {
  let {
    min,
    max
  } = ensureContext(f, "Thumb", "SliderPrimitive.Thumb");
  let {
    value,
    thumbRef
  } = ensureContext(_, "Thumb", "SliderPrimitive.Thumb");
  let c = toPercent(h(value, min, max));
  return jsx("div", {
    ...e,
    ...i,
    ref: thumbRef,
    style: {
      ...t,
      left: c,
      transform: "translateX(-50%)"
    }
  });
}
export function $$b1({
  start: e,
  end: t,
  htmlAttributes: i,
  style: r,
  ...a
}) {
  let {
    min,
    max
  } = ensureContext(f, "Range", "SliderPrimitive.Range");
  if (e > t) {
    let i = t;
    t = e;
    e = i;
  }
  let c = toPercent(h(e, min, max));
  let u = toPercent(1 - h(t, min, max));
  return jsx("div", {
    ...i,
    ...a,
    style: {
      ...r,
      left: c,
      right: u
    }
  });
}
export function $$v0({
  value: e,
  htmlAttributes: t,
  style: i,
  ...r
}) {
  let {
    min,
    max
  } = ensureContext(f, "Point", "SliderPrimitive.Point");
  let d = toPercent(h(e, min, max));
  return jsx("div", {
    ...t,
    ...r,
    style: {
      ...i,
      left: d
    }
  });
}
$$A2.displayName = "SliderPrimitive.Root";
$$y3.displayName = "SliderPrimitive.Thumb";
$$b1.displayName = "SliderPrimitive.Range";
$$v0.displayName = "SliderPrimitive.Point";
export const bR = $$v0;
export const Q6 = $$b1;
export const bL = $$A2;
export const zi = $$y3;