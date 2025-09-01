import { jsxs, jsx } from "react/jsx-runtime";
import { useRef, useCallback, useEffect } from "react";
import { a as _$$a } from "../905/339331";
import { r as _$$r } from "../905/571562";
import o from "classnames";
import { Pt } from "../figma_app/806412";
import { GG } from "../905/511649";
import { gl, E7 } from "../905/216495";
import { Uq } from "../905/633462";
import { zk } from "../figma_app/198712";
var l = o;
var h = (e => (e[e.SPACEBAR = 0] = "SPACEBAR", e[e.ENTER = 1] = "ENTER", e[e.MOUSE = 2] = "MOUSE", e[e.NONE = 3] = "NONE", e[e.DOWN_ARROW = 4] = "DOWN_ARROW", e[e.UP_ARROW = 5] = "UP_ARROW", e))(h || {});
var g = (e => (e[e.UP = 0] = "UP", e[e.DOWN = 1] = "DOWN", e))(g || {});
function f(e) {
  return "key" in e ? "Enter" === e.key ? 1 : " " === e.key ? 0 : "ArrowDown" === e.key ? 4 : "ArrowUp" === e.key ? 5 : 3 : 2;
}
function _(e) {
  return 4 === e || 5 === e;
}
class A {
  constructor({
    value: e,
    onValueChange: t,
    step: i,
    bigStep: n,
    min: r,
    max: a
  }) {
    this.isBigStep = !1;
    this.value = e;
    this.onValueChange = t;
    this.step = i;
    this.bigStep = n;
    this.min = r ?? -1 / 0;
    this.max = a ?? 1 / 0;
    this.stepTrigger = 3;
  }
  incrementValue(e) {
    let t = this.isBigStep ? this.bigStep : this.step;
    let i = (Math.round((gl(this.value) || null == this.value ? 0 : this.value) / t) + (0 === e ? 1 : -1)) * t;
    i = Math.max(i = Math.min(i, this.max), this.min);
    this.onValueChange(i, zk.NO);
  }
  consumeProps(e) {
    let {
      value,
      onValueChange,
      min,
      max,
      bigStep,
      step
    } = e;
    this.value = value;
    this.onValueChange = onValueChange;
    this.step = step;
    this.bigStep = bigStep;
    this.min = min ?? -1 / 0;
    this.max = max ?? 1 / 0;
  }
  setValue(e) {
    this.value = e;
  }
  setIsBigStep(e) {
    this.isBigStep = e;
  }
  maybeStartIncrementing(e, t) {
    var i;
    var n;
    let r;
    let a;
    let s = f(e);
    if (_(s) && e.preventDefault(), 3 !== this.stepTrigger || 3 === s) return;
    _(s) && (t = 4 === s ? 1 : 0);
    this.stepTrigger = s;
    i = this.incrementValue.bind(this, t);
    n = e => 0 === e ? 500 : 100;
    r = null;
    a = 0;
    let {
      startEffect,
      endEffect
    } = {
      startEffect: function (e) {
        !function e(t) {
          i(t);
          r = setTimeout(() => {
            e(t);
          }, n(a));
          a++;
        }(e);
      },
      endEffect: function () {
        r && (clearTimeout(r), r = null);
      }
    };
    startEffect(e);
    this.registerEndEffectCallback(endEffect);
  }
  registerEndEffectCallback(e) {
    let {
      stepTrigger
    } = this;
    let i = () => {
      this.stepTrigger = 3;
    };
    function n(r) {
      f(r) === stepTrigger && (e(), i(), document.removeEventListener("mouseup", n), document.removeEventListener("keyup", n));
    }
    document.addEventListener("mouseup", n);
    document.addEventListener("keyup", n);
  }
}
let y = "stepper_input--stepperButton--yDqne";
let b = "stepper_input--pseudoDisabled--cStbp";
function v(e) {
  let {
    value,
    onValueChange,
    step,
    bigStep,
    Input,
    disabled,
    min,
    max,
    icon,
    fullWidth,
    recordingKey
  } = e;
  let x = useRef(null);
  let S = useRef(new A({
    value,
    step,
    onValueChange,
    min,
    max,
    bigStep
  }));
  S.current.consumeProps({
    value,
    onValueChange,
    bigStep,
    step,
    min,
    max
  });
  let w = useCallback(({
    shiftKey: e
  }) => {
    S.current.setIsBigStep(e);
  }, []);
  useEffect(() => (document.addEventListener("keydown", w), document.addEventListener("keyup", w), () => {
    document.removeEventListener("keydown", w);
    document.removeEventListener("keyup", w);
  }), [w]);
  let C = useCallback(e => {
    ("nativeEvent" in e ? e.nativeEvent instanceof MouseEvent : e instanceof MouseEvent) && (e.preventDefault(), x.current?.focus(), x.current?.select?.());
    S.current.maybeStartIncrementing(e, g.DOWN);
  }, []);
  let T = useCallback(e => {
    ("nativeEvent" in e ? e.nativeEvent instanceof MouseEvent : e instanceof MouseEvent) && (e.preventDefault(), x.current?.focus(), x.current?.select?.());
    S.current.maybeStartIncrementing(e, g.UP);
  }, []);
  let k = e.onKeyUp;
  let R = useCallback(e => {
    w(e);
    k?.(e);
  }, [k, w]);
  let N = E7(value) ?? 0;
  let P = min ?? -1 / 0;
  let O = max ?? 1 / 0;
  return jsxs("div", {
    className: l()("stepper_input--stepperContainer--LVcZ4", {
      "stepper_input--fullWidth--dSBMX": fullWidth
    }),
    children: [jsx(Input, {
      ...e,
      forwardedRef: x,
      onKeyUp: R,
      endNode: jsx("div", {
        className: "stepper_input--endNode--Dqnj5"
      }),
      recordingKey: Pt(recordingKey, "input"),
      children: icon
    }), !disabled && jsxs("div", {
      className: "stepper_input--endNodeOverlay---iG4y",
      children: [jsx(GG, {
        className: l()(y, {
          [b]: N >= O
        }),
        disabled,
        onMouseDown: T,
        onKeyDown: T,
        tabIndex: -1,
        "aria-hidden": "true",
        children: jsx(_$$a, {
          style: {
            flexShrink: 0
          }
        })
      }), jsx(GG, {
        className: l()(y, {
          [b]: N <= P
        }),
        disabled,
        onMouseDown: C,
        onKeyDown: C,
        tabIndex: -1,
        "aria-hidden": "true",
        children: jsx(_$$r, {
          style: {
            flexShrink: 0
          }
        })
      })]
    })]
  });
}
export function $$I0(e) {
  return jsx(v, {
    ...e,
    Input: Uq
  });
}
export const q = $$I0;