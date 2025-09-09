import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useContext, useRef, useEffect, useCallback, useMemo } from "react";
import a from "classnames";
import { getI18nString, renderI18nText } from "../905/303541";
import { bA, _q } from "../905/668764";
import { Lk, X9, ag, i5, NB, PZ, f0, LN, cu, h7 } from "../figma_app/975811";
import { dG } from "../figma_app/753501";
import { MIXED_MARKER, isInvalidValue } from "../905/216495";
import { yesNoTrackingEnum } from "../figma_app/198712";
import { Ib } from "../905/129884";
import { e as _$$e } from "../905/579635";
import { a3 } from "../905/188421";
import { p_ } from "../905/203369";
import { $ } from "../905/45781";
import { Qu } from "../figma_app/941824";
import { P } from "../905/460261";
import { s as _$$s, b as _$$b } from "../905/181535";
import { V, sC, WC, IB, Ww, QK } from "../figma_app/779179";
var s = a;
let I = {
  scrubMultiplier: 1,
  wheelMultiplier: 1,
  smallNudgeAmount: bA,
  bigNudgeAmount: _q
};
function S({
  children: e,
  onNormalClick: t
}) {
  let {
    setScrubbableElement
  } = useContext(_$$s);
  let a = useRef(null);
  let s = useRef(null);
  let o = useRef(!1);
  let l = useRef(null);
  let d = useRef(null);
  useEffect(() => (setScrubbableElement(a.current), () => setScrubbableElement(null)), [setScrubbableElement]);
  let c = useCallback(e => {
    o.current = !1;
    l.current = {
      x: 0,
      y: 0
    };
    d.current = {
      x: e.clientX,
      y: e.clientY
    };
    let t = window.setTimeout(() => {
      s.current = null;
    }, 500);
    s.current = t;
  }, []);
  let u = useCallback(() => {
    null === s.current || o.current || (clearTimeout(s.current), t?.());
    s.current = null;
    l.current = null;
    d.current = null;
  }, [t]);
  let p = useCallback(e => {
    if (!l.current) return;
    let t = e.movementX;
    let r = e.movementY;
    null == t && null == r && d.current && (t = e.clientX - d.current.x, r = e.clientY - d.current.y, d.current = {
      x: e.clientX,
      y: e.clientY
    });
    l.current.x += t;
    l.current.y += r;
    let {
      x,
      y
    } = l.current;
    Math.sqrt(x * x + y * y) > 5 && (o.current = !0);
  }, []);
  useEffect(() => () => {
    null !== s.current && clearTimeout(s.current);
  }, []);
  return jsx("div", {
    ref: a,
    onPointerDown: c,
    onPointerUp: u,
    onPointerMove: p,
    children: e
  });
}
export function $$v15(e) {
  let {
    onValueChange,
    forwardedRef,
    onKeyDown
  } = e;
  let o = useRef(null);
  let l = forwardedRef ?? o;
  let d = Qu();
  let _ = useCallback(e => {
    d(e);
    onKeyDown?.(e);
  }, [d, onKeyDown]);
  let m = useCallback(e => onValueChange?.(e, yesNoTrackingEnum.YES), [onValueChange]);
  let y = useCallback(() => {
    l.current?.focus();
    l.current?.select();
  }, [l]);
  let v = e.isTokenizable ? $ : p_;
  let A = useCallback(e => jsx(S, {
    onNormalClick: y,
    children: e
  }), [y]);
  let x = !e.minimizeScrubTargetWidth;
  return jsxs(_$$b, {
    ...I,
    ...e,
    scrubbingDisabled: e.scrubbingDisabled || e.disabled || null == e.value || e.value === MIXED_MARKER && !e.mixedMathHandler,
    children: [e.childrenAtEnd ? null : jsx(_$$e, {
      condition: !!e.children || !!x,
      wrapper: A,
      children: jsx(Fragment, {
        children: e.children ? e.children : x ? jsx("div", {
          className: V
        }) : null
      })
    }), jsx(v, {
      allowEmpty: e.allowEmpty,
      autoFocus: e.autoFocus,
      className: s()(e.inputClassName, {
        [sC]: !0,
        [WC]: !e.childrenAtEnd && !e.children && x
      }),
      dataTestId: e.dataTestId,
      disabled: e.disabled ?? null === e.value,
      ellipsis: !0,
      formatter: e.formatter,
      forwardedRef: l,
      mixedMathCallback: e.mixedMathCallback,
      mixedMathHandler: e.mixedMathHandler,
      noBorderOnFocus: !0,
      noLeftBorder: e.noLeftBorder,
      onBlur: e.onBlur,
      onChange: m,
      onClick: e.onClick,
      onFocus: e.onFocus,
      onKeyDown: _,
      onKeyUp: e.onKeyUp,
      onMixedMathNudge: e.onMixedMathNudge,
      onMouseDown: dG,
      placeholder: e.placeholder,
      property: e.value ?? null,
      recordingKey: e.recordingKey,
      softDisabled: e.softDisabled,
      squareRightBorder: e.squareRightBorder
    }), e.childrenAtEnd ? jsx(_$$e, {
      condition: !!e.children,
      wrapper: A,
      children: jsx(Fragment, {
        children: e.children
      })
    }) : null, e.endNode]
  });
}
export function $$A12({
  onMouseEnter: e,
  onMouseLeave: t,
  onMouseEnterNonPropagating: r,
  ...i
}) {
  let a = {
    ...I,
    ...i,
    noBorderOnFocus: i.noBorderOnFocus || i.disableSelectFocus
  };
  return jsx("div", {
    className: i.className,
    children: jsx(a3, {
      allowEmpty: i.allowEmpty,
      ariaLabel: i.ariaLabel,
      autoFocus: i.autoFocus,
      chevronClassName: i.chevronClassName,
      dataTestId: i.dataTestId,
      disableSelectFocus: i.disableSelectFocus,
      disabled: i.disabled,
      dispatch: i.dispatch,
      dropdownAlignment: i.dropdownAlignment,
      dropdownClassName: i.dropdownClassName,
      dropdownShown: i.dropdownShown,
      dropdownWidth: i.dropdownWidth,
      enablePreview: i.enablePreview,
      formatter: i.formatter,
      forwardedRef: i.forwardedRef,
      hasIconStyle: i.hasIconStyle,
      icon: i.icon,
      id: i.id,
      inputClassName: i.inputClassName,
      isTokenizable: i.isTokenizable,
      mixedMathHandler: i.mixedMathHandler,
      noPlaceholderLine: i.noPlaceholderLine,
      omitValueFromDropdown: i.omitValueFromDropdown,
      onChange: (e, t = yesNoTrackingEnum.YES) => {
        i.onValueChange?.(e, t);
      },
      onInputBlur: i.onBlur,
      onInputFocus: i.onFocus,
      onKeyDown: i.onKeyDown,
      onKeyUp: i.onKeyUp,
      onMouseEnter: e,
      onMouseEnterNonPropagating: r,
      onMouseLeave: t,
      onboardingKey: i.onboardingKey,
      openBelowTarget: i.openBelowTarget,
      optionsWithDisabledPreviews: i.optionsWithDisabledPreviews,
      placeholder: i.placeholder,
      property: i.value,
      recordingKey: i.recordingKey,
      scrubbableControlProps: a,
      targetDomNode: i.targetDomNode,
      unNamespacedInputRecordingKey: i.unNamespacedInputRecordingKey,
      willShowDropdown: i.willShowDropdown,
      children: i.children
    })
  });
}
export function $$x17(e) {
  let {
    min,
    max,
    smallNudgeAmount,
    bigNudgeAmount,
    formatter
  } = e;
  let l = useMemo(() => new Lk({
    min,
    max,
    smallNudgeAmount,
    bigNudgeAmount
  }), [min, max, smallNudgeAmount, bigNudgeAmount]);
  return jsx($$A12, {
    ...e,
    formatter: formatter ?? l
  });
}
export function $$N2(e) {
  let {
    min,
    max,
    smallNudgeAmount,
    bigNudgeAmount
  } = e;
  let o = useMemo(() => new X9({
    min,
    max,
    smallNudgeAmount,
    bigNudgeAmount
  }), [min, max, smallNudgeAmount, bigNudgeAmount]);
  return jsx($$v15, {
    ...e,
    formatter: o
  });
}
export function $$C9(e) {
  let {
    min,
    max,
    smallNudgeAmount,
    bigNudgeAmount,
    formatter,
    icon
  } = e;
  let u = useMemo(() => new X9({
    min,
    max,
    smallNudgeAmount,
    bigNudgeAmount
  }), [min, max, smallNudgeAmount, bigNudgeAmount]);
  return jsx($$A12, {
    ...e,
    formatter: formatter ?? u,
    className: s()(e.className, {
      [IB]: !!icon
    })
  });
}
export function $$w19(e) {
  let {
    formatter,
    icon
  } = e;
  return jsx($$A12, {
    ...e,
    formatter,
    className: s()(e.className, {
      [IB]: !!icon
    }),
    postScrubMultiplier: .001,
    postBigNudgeAmount: .1
  });
}
export function $$O7(e) {
  let {
    min,
    max,
    icon
  } = e;
  let o = useMemo(() => new ag(i5.MILLISECONDS, max, min), [max, min]);
  return jsx($$A12, {
    ...e,
    formatter: o,
    className: s()(e.className, {
      [IB]: !!icon
    })
  });
}
export function $$R13(e) {
  let {
    min,
    max,
    smallNudgeAmount,
    bigNudgeAmount,
    onEvaluateExpressionError
  } = e;
  let l = useMemo(() => new Lk({
    min,
    max,
    smallNudgeAmount,
    bigNudgeAmount,
    onEvaluateExpressionError
  }), [min, max, smallNudgeAmount, bigNudgeAmount, onEvaluateExpressionError]);
  return jsx($$v15, {
    ...e,
    formatter: l
  });
}
export function $$L1({
  min: e = 0,
  max: t,
  floatingPointFormat: r,
  onEvaluateExpressionError: a,
  ...s
}) {
  let {
    smallNudgeAmount,
    bigNudgeAmount
  } = s;
  let c = useMemo(() => new Lk({
    min: Math.max(e, 0),
    max: t,
    smallNudgeAmount,
    bigNudgeAmount,
    floatingPointFormat: r,
    onEvaluateExpressionError: a
  }), [e, t, smallNudgeAmount, bigNudgeAmount, r, a]);
  return jsx($$v15, {
    ...s,
    formatter: c
  });
}
export function $$P14({
  min: e = 0,
  max: t,
  ...r
}) {
  let {
    smallNudgeAmount,
    bigNudgeAmount
  } = r;
  let o = useRef(!1);
  let l = useMemo(() => new NB({
    min: Math.max(e, 0),
    max: t,
    smallNudgeAmount,
    bigNudgeAmount
  }), [e, t, smallNudgeAmount, bigNudgeAmount]);
  let c = isInvalidValue(r.value) && r.mixedMathHandler;
  let _ = r.disabled || r.scrubbingDisabled || "number" != typeof r.value && !Array.isArray(r.value) && !c;
  let h = r.isTokenizable ? $ : p_;
  return jsxs(_$$b, {
    ...I,
    ...r,
    formatter: l,
    scrubbingDisabled: _,
    onScrubBegin: e => {
      o.current = !0;
      r.onScrubBegin?.(e);
    },
    onScrubEnd: e => {
      o.current = !1;
      r.onScrubEnd?.(e);
    },
    className: r.className,
    children: [r.children, jsx(h, {
      className: r.inputClassName,
      dataTestId: r.dataTestId,
      disabled: r.disabled,
      formatter: l,
      forwardedRef: r.forwardedRef,
      mixedMathHandler: r.mixedMathHandler,
      noBorderOnFocus: !0,
      onBlur: r.onBlur,
      onChange: e => r.onValueChange(e, yesNoTrackingEnum.YES),
      onClick: r.onClick,
      onFocus: r.onFocus,
      onKeyDown: r.onKeyDown,
      onMixedMathNudge: r.onMixedMathNudge,
      onNudge: r.onNudge,
      onPaste: r.onPaste,
      placeholder: r.placeholder,
      property: r.value ?? null,
      recordingKey: r.recordingKey,
      shouldClearOnFocus: r.shouldClearOnFocus,
      source: o.current ? "scrub" : "document"
    })]
  });
}
export function $$D0({
  min: e,
  max: t,
  ...r
}) {
  let {
    smallNudgeAmount,
    bigNudgeAmount
  } = r;
  let o = useRef(!1);
  let l = useMemo(() => new NB({
    min: e,
    max: t,
    smallNudgeAmount,
    bigNudgeAmount
  }), [e, t, smallNudgeAmount, bigNudgeAmount]);
  let c = isInvalidValue(r.value) && r.mixedMathHandler;
  let _ = r.disabled || r.scrubbingDisabled || "number" != typeof r.value && !Array.isArray(r.value) && !c;
  let h = r.isTokenizable ? $ : p_;
  return jsxs(_$$b, {
    ...I,
    ...r,
    formatter: l,
    scrubbingDisabled: _,
    onScrubBegin: e => {
      o.current = !0;
      r.onScrubBegin?.(e);
    },
    onScrubEnd: e => {
      o.current = !1;
      r.onScrubEnd?.(e);
    },
    className: r.className,
    children: [r.children, jsx(h, {
      className: r.inputClassName,
      dataTestId: r.dataTestId,
      disabled: r.disabled,
      formatter: l,
      forwardedRef: r.forwardedRef,
      mixedMathHandler: r.mixedMathHandler,
      noBorderOnFocus: !0,
      onBlur: r.onBlur,
      onChange: e => r.onValueChange(e, yesNoTrackingEnum.YES),
      onClick: r.onClick,
      onFocus: r.onFocus,
      onKeyDown: r.onKeyDown,
      onMixedMathNudge: r.onMixedMathNudge,
      onNudge: r.onNudge,
      onPaste: r.onPaste,
      placeholder: r.placeholder,
      property: r.value ?? null,
      recordingKey: r.recordingKey,
      shouldClearOnFocus: r.shouldClearOnFocus,
      source: o.current ? "scrub" : "document"
    })]
  });
}
export function $$k6({
  min: e,
  max: t,
  allowEmpty: r,
  ...a
}) {
  let {
    smallNudgeAmount,
    bigNudgeAmount
  } = a;
  let l = useRef(!1);
  let c = useMemo(() => new PZ({
    min: e,
    max: t,
    smallNudgeAmount,
    bigNudgeAmount,
    allowEmpty: r
  }), [e, t, smallNudgeAmount, bigNudgeAmount, r]);
  let _ = isInvalidValue(a.value) && a.mixedMathHandler;
  let h = a.disabled || a.scrubbingDisabled || "number" != typeof a.value && !_;
  let m = a.isTokenizable ? $ : p_;
  return jsxs(_$$b, {
    ...I,
    ...a,
    formatter: c,
    scrubbingDisabled: h,
    onScrubBegin: e => {
      l.current = !0;
      a.onScrubBegin?.(e);
    },
    onScrubEnd: e => {
      l.current = !1;
      a.onScrubEnd?.(e);
    },
    className: a.className,
    children: [a.children, jsx(m, {
      allowEmpty: r,
      className: a.inputClassName,
      dataTestId: a.dataTestId,
      disabled: a.disabled,
      formatter: c,
      forwardedRef: a.forwardedRef,
      mixedMathHandler: a.mixedMathHandler,
      noBorderOnFocus: !0,
      onBlur: a.onBlur,
      onChange: e => a.onValueChange(e, yesNoTrackingEnum.YES),
      onFocus: a.onFocus,
      onKeyDown: a.onKeyDown,
      onMixedMathNudge: a.onMixedMathNudge,
      onNudge: a.onNudge,
      onPaste: a.onPaste,
      placeholder: a.placeholder,
      property: a.value ?? null,
      recordingKey: a.recordingKey,
      shouldClearOnFocus: a.shouldClearOnFocus,
      source: l.current ? "scrub" : "document"
    })]
  });
}
export function $$M8({
  min: e = .001,
  max: t = 10,
  resolution: r = .001,
  ...a
}) {
  let s = useMemo(() => new ag(i5.MILLISECONDS, t, e), [t, e]);
  return jsx($$v15, {
    ...a,
    resolution: r,
    formatter: s
  });
}
export function $$F11({
  min: e = .001,
  max: t = 10,
  resolution: r = .001,
  ...a
}) {
  let s = useMemo(() => new ag(i5.SECONDS, t, e), [t, e]);
  return jsx($$v15, {
    ...a,
    resolution: r,
    formatter: s
  });
}
export function $$j16({
  max: e = 3600,
  displayFractions: t = !1,
  ...r
}) {
  let a = useMemo(() => new f0(e, t), [e, t]);
  return jsx($$v15, {
    ...r,
    formatter: a
  });
}
let U = {
  ...I,
  scrubMultiplier: 4,
  wheelMultiplier: 2
};
export function $$B18({
  min: e = 0,
  max: t = 1,
  decimals: r,
  hidePercentSign: a,
  ...s
}) {
  let {
    smallNudgeAmount,
    bigNudgeAmount
  } = s;
  let c = useMemo(() => new LN({
    min: e,
    max: t,
    smallNudgeAmount,
    bigNudgeAmount,
    decimals: r,
    hidePercentSign: a
  }), [e, t, smallNudgeAmount, bigNudgeAmount, r, a]);
  return jsx($$v15, {
    ...U,
    ...s,
    formatter: c,
    postScrubMultiplier: .001,
    postBigNudgeAmount: .1
  });
}
export function $$G5(e) {
  let {
    inputClassName,
    ...r
  } = e;
  let i = e.ui3RightJustifyPercentSign ?? !0;
  let a = P(getI18nString("fullscreen.scrubbable.opacity"));
  return jsx($$B18, {
    ...r,
    inputClassName: s()(inputClassName, {
      [Ww]: i
    }),
    "data-tooltip-type": Ib.TEXT,
    "data-tooltip": a,
    hidePercentSign: i,
    childrenAtEnd: i,
    children: i ? jsx("span", {
      className: QK,
      children: renderI18nText("fullscreen.scrubbable.percent")
    }) : e.children
  });
}
export function $$V10(e) {
  let {
    smallNudgeAmount,
    bigNudgeAmount
  } = e;
  let a = useMemo(() => new cu({
    smallNudgeAmount,
    bigNudgeAmount
  }), [smallNudgeAmount, bigNudgeAmount]);
  return jsx($$v15, {
    ...e,
    formatter: a,
    postScrubMultiplier: e.reverseScrub ? .5 : -.5,
    postWheelMultiplier: e.reverseScrub ? .2 : -.2,
    postBigNudgeAmount: .1
  });
}
export function $$H4(e) {
  let t = useMemo(() => new cu({
    min: 7.16,
    max: 180
  }), []);
  return jsx($$v15, {
    ...e,
    formatter: t,
    postScrubMultiplier: .5,
    postBigNudgeAmount: .1,
    postWheelMultiplier: .2
  });
}
export function $$z3(e) {
  let {
    min,
    smallNudgeAmount = bA,
    bigNudgeAmount = _q,
    formatter
  } = e;
  let o = useRef(!1);
  let c = useMemo(() => formatter ?? new h7({
    min,
    smallPixelNudgeAmount: smallNudgeAmount,
    bigPixelNudgeAmount: bigNudgeAmount
  }), [min, smallNudgeAmount, bigNudgeAmount, formatter]);
  let u = e.isTokenizable ? $ : p_;
  return jsxs(_$$b, {
    ...I,
    bigNudgeAmount,
    className: e.className,
    "data-tooltip": e["data-tooltip"],
    "data-tooltip-type": e["data-tooltip-type"],
    disabled: e.disabled,
    dispatch: e.dispatch,
    formatter: c,
    noBorderOnHover: e.noBorderOnHover,
    onScrubBegin: () => {
      o.current = !0;
    },
    onScrubEnd: () => {
      o.current = !1;
    },
    onValueChange: e.onValueChange,
    scrubMultiplier: e.scrubMultiplier,
    scrubbingDisabled: e.disabled,
    smallNudgeAmount,
    tooltipForScreenReadersOnly: e.tooltipForScreenReadersOnly,
    value: e.value,
    children: [e.children, jsx(u, {
      className: e.inputClassName,
      disabled: e.disabled,
      formatter: c,
      noBorderOnFocus: !0,
      onChange: t => e.onValueChange(t, yesNoTrackingEnum.YES),
      placeholder: e.placeholder,
      property: e.value,
      recordingKey: e.recordingKey,
      shouldClearOnFocus: e.shouldClearOnFocus,
      source: o.current ? "scrub" : "document"
    })]
  });
}
export const $$ = $$D0;
export const $j = $$L1;
export const Ht = $$N2;
export const Jl = $$z3;
export const M4 = $$H4;
export const Pd = $$G5;
export const Se = $$k6;
export const W0 = $$O7;
export const W4 = $$M8;
export const YZ = $$C9;
export const Zp = $$V10;
export const dE = $$F11;
export const fl = $$A12;
export const gq = $$R13;
export const ig = $$P14;
export const j5 = $$v15;
export const qd = $$j16;
export const vD = $$x17;
export const w2 = $$B18;
export const xW = $$w19;