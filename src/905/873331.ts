import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useRef, useEffect, useCallback, useState, useMemo } from "react";
import { useDispatch } from "../vendor/514228";
import { o as _$$o } from "../905/821217";
import { d as _$$d } from "../905/976845";
import { rXF } from "../figma_app/763686";
import { U } from "../figma_app/901889";
import { Pt } from "../figma_app/806412";
import { MM, wv } from "../figma_app/236327";
import { getI18nString } from "../905/303541";
import { oB, j7 } from "../905/929976";
import { sT } from "../figma_app/740163";
import { gl, hS } from "../905/216495";
import { kl } from "../905/275640";
import { Um } from "../905/848862";
import { f4 } from "../figma_app/722362";
import { Ib } from "../905/129884";
import { e as _$$e } from "../905/579635";
import { $j } from "../figma_app/178475";
import { sA } from "../figma_app/841644";
import { Jz } from "../905/504727";
import { fn } from "../figma_app/811257";
import { lF, TV, Yp, XG } from "../905/62223";
import { om, Fz, kF, Ww, Uj } from "../figma_app/395097";
let C = "borders--optionRow--JGNTc";
let T = "borders--optionIcon--6qQwa";
let k = "borders--optionLabel--ddjyn";
let R = "individual-borders-selection";
export function $$N0({
  borderOption: e,
  onChange: t,
  setBorderOption: i,
  recordingKey: o
}) {
  let l = useDispatch();
  let c = U();
  let u = Um();
  let p = useRef(null);
  let h = lF();
  useEffect(() => {
    e !== om.CUSTOM && h !== e && i(h);
  }, [h, i]);
  f4(() => {
    i(h);
  });
  let g = u?.type === R;
  let f = useCallback(() => {
    g ? l(oB()) : l(j7({
      type: R
    }));
  }, [g, l]);
  let {
    updateVariableConsumption
  } = TV();
  let b = useCallback(e => {
    t(e);
    updateVariableConsumption(e);
    f();
    c("Individual Border Side Changed", {
      side: e
    });
  }, [t, f, c, updateVariableConsumption]);
  return jsxs(_$$o, {
    eventListeners: ["onClick", "onMouseUp"],
    children: [jsx("div", {
      ref: p,
      children: jsx(P, {
        fallback: e,
        toggled: g,
        onMouseDown: f,
        recordingKey: o
      })
    }), g && jsx(D, {
      borderOption: e,
      onChange: b,
      targetRect: p.current.getBoundingClientRect(),
      recordingKey: o,
      toggleDropdown: f
    })]
  });
}
function P({
  toggled: e,
  fallback: t,
  onMouseDown: i,
  recordingKey: r
}) {
  let a = Yp();
  let s = {
    onMouseDown: i,
    onClick: e => {
      e.stopPropagation();
      e.preventDefault();
    },
    "data-tooltip-type": Ib.TEXT,
    "aria-label": getI18nString("fullscreen.properties_panel.borders.border_per_side"),
    "data-tooltip": getI18nString("fullscreen.properties_panel.borders.border_per_side"),
    dataTestId: `stroke-button-${gl(a) ? "mixed" : a.join(",")}`,
    recordingKey: Pt(r, "borderSide")
  };
  let l = Fz(a, t);
  return jsx(_$$d, {
    "aria-expanded": e,
    onClick: e => {
      i?.(e);
    },
    "aria-label": s["aria-label"],
    recordingKey: s.recordingKey,
    actionOnPointerDown: !0,
    htmlAttributes: {
      "data-testid": `stroke-button-${gl(a) ? "mixed" : a.join(",")}`,
      "data-tooltip": s["data-tooltip"],
      "data-tooltip-type": s["data-tooltip-type"]
    },
    children: l
  });
}
let O = [kF.TOP, kF.BOTTOM, kF.LEFT, kF.RIGHT];
function D(e) {
  let t = XG();
  let [i, a] = useState(!0);
  useEffect(() => {
    let e = setTimeout(() => a(!1), 200);
    return () => clearTimeout(e);
  }, []);
  let s = useCallback(t => {
    i || e.onChange(t);
  }, [i, e]);
  let o = [];
  if (e.borderOption === om.MIXED) {
    let t = Ww(om.MIXED);
    o.push(jsx(MM, {
      checked: om.MIXED === e.borderOption,
      disabled: !0,
      children: jsxs("div", {
        className: C,
        children: [jsx("div", {
          className: T,
          children: t
        }), jsx("span", {
          className: k,
          children: Uj(om.MIXED)
        })]
      })
    }));
    o.push(jsx(wv, {}));
  }
  let l = Ww(om.ALL);
  o.push(jsx(MM, {
    checked: om.ALL === e.borderOption,
    onClick: () => s(om.ALL),
    recordingKey: Pt(e, om.ALL),
    children: jsxs("div", {
      className: C,
      children: [jsx("div", {
        className: T,
        children: l
      }), jsx("span", {
        className: k,
        children: Uj(om.ALL)
      })]
    })
  }));
  O.forEach(i => {
    let r = t(i).side;
    let a = Ww(i);
    o.push(jsx(MM, {
      checked: r === e.borderOption,
      onClick: () => s(r),
      recordingKey: Pt(e, i),
      children: jsxs("div", {
        className: C,
        children: [jsx("div", {
          className: T,
          children: a
        }), jsx("span", {
          className: k,
          children: Uj(i)
        })]
      })
    }, i));
  });
  let d = Ww(om.CUSTOM);
  o.push(jsx(wv, {}));
  o.push(jsx(MM, {
    checked: om.CUSTOM === e.borderOption,
    onClick: () => s(om.CUSTOM),
    recordingKey: Pt(e, om.CUSTOM),
    children: jsxs("div", {
      className: C,
      children: [jsx("div", {
        className: T,
        children: d
      }), jsx("span", {
        className: k,
        children: Uj(om.CUSTOM)
      })]
    })
  }));
  return jsx(Jz, {
    showPoint: !0,
    hidePointWhenContentOffScreen: !0,
    targetRect: e.targetRect,
    maxWidth: 180,
    minWidth: 132,
    options: o,
    hideDropdown: e.toggleDropdown,
    recordingKey: "individual-borders-dropdown",
    propagateCloseClick: !0
  });
}
function L({
  overrideClassName: e,
  side: t,
  strokeWeight: i,
  onChange: s,
  recordingKey: o,
  dataTestId: d,
  mixedMathHandler: u
}) {
  let {
    smallNudgeAmount,
    bigNudgeAmount
  } = sT();
  let _ = useDispatch();
  let A = Ww(t);
  let E = useMemo(() => [function (e) {
    switch (e) {
      case kF.TOP:
        return "BORDER_TOP_WEIGHT";
      case kF.BOTTOM:
        return "BORDER_BOTTOM_WEIGHT";
      case kF.LEFT:
        return "BORDER_LEFT_WEIGHT";
      case kF.RIGHT:
        return "BORDER_RIGHT_WEIGHT";
    }
  }(t)], [t]);
  return jsx(_$$e, {
    condition: !0,
    wrapper: t => jsx(sA, {
      recordingKey: Pt(o, "independentStrokeWeightInputWrapper"),
      fields: E,
      resolvedType: rXF.FLOAT,
      currentFieldValue: hS(i) ? i : void 0,
      noBorder: !0,
      inputClassName: e,
      children: t
    }),
    children: jsx($j, {
      bigNudgeAmount,
      className: e,
      "data-tooltip": getI18nString("fullscreen.properties_panel.borders.stroke_width"),
      "data-tooltip-type": Ib.TEXT,
      dataTestId: d,
      dispatch: _,
      inputClassName: "borders--strokeInput--AhOA8 raw_components--flushLeft--YH-5P",
      isTokenizable: !0,
      max: 1e3,
      min: 0,
      mixedMathHandler: u,
      onValueChange: s,
      recordingKey: o,
      smallNudgeAmount,
      tooltipForScreenReadersOnly: !0,
      value: i,
      children: jsx("div", {
        className: "borders--inactiveLabel--gxuJc transform_panel--inactiveLabel--fPCxr raw_components--iconInsideBorderFocusWithin--2g7fO",
        children: A
      })
    })
  });
}
export function $$F1(e) {
  let t = XG();
  let i = kl("borderStrokeWeightsIndependent");
  let a = kl("strokeWeight");
  let s = useMemo(() => [kF.LEFT, kF.RIGHT, kF.TOP, kF.BOTTOM].reduce((e, i) => (e[i] = t(i), e), {}), [t]);
  let o = useMemo(() => i ? {} : {
    [s.Top.property]: a,
    [s.Bottom.property]: a,
    [s.Left.property]: a,
    [s.Right.property]: a
  }, [i, s, a]);
  return jsxs(Fragment, {
    children: [jsx(fn, {
      leftInput: jsx(L, {
        side: kF.LEFT,
        recordingKey: `border-side-${kF.LEFT}`,
        dataTestId: `border-side-${kF.LEFT}`,
        strokeWeight: s.Left.value ?? 0,
        mixedMathHandler: s.Left.mixedMathHandler,
        onChange: t => {
          e.onChange({
            ...o,
            [s.Left.property]: t,
            borderStrokeWeightsIndependent: !0
          });
        }
      }, kF.LEFT),
      rightInput: jsx(L, {
        side: kF.TOP,
        recordingKey: `border-side-${kF.TOP}`,
        dataTestId: `border-side-${kF.TOP}`,
        strokeWeight: s.Top.value ?? 0,
        mixedMathHandler: s.Top.mixedMathHandler,
        onChange: t => {
          e.onChange({
            ...o,
            [s.Top.property]: t,
            borderStrokeWeightsIndependent: !0
          });
        }
      }, kF.TOP),
      leftLabel: null,
      rightLabel: null,
      icon: null
    }), jsx(fn, {
      leftInput: jsx(L, {
        mixedMathHandler: s.Right.mixedMathHandler,
        side: kF.RIGHT,
        recordingKey: `border-side-${kF.RIGHT}`,
        dataTestId: `border-side-${kF.RIGHT}`,
        strokeWeight: s.Right.value ?? 0,
        onChange: t => {
          e.onChange({
            ...o,
            [s.Right.property]: t,
            borderStrokeWeightsIndependent: !0
          });
        }
      }, kF.RIGHT),
      rightInput: jsx(L, {
        mixedMathHandler: s.Bottom.mixedMathHandler,
        side: kF.BOTTOM,
        recordingKey: `border-side-${kF.BOTTOM}`,
        dataTestId: `border-side-${kF.BOTTOM}`,
        strokeWeight: s.Bottom.value ?? 0,
        onChange: t => {
          e.onChange({
            ...o,
            [s.Bottom.property]: t,
            borderStrokeWeightsIndependent: !0
          });
        }
      }, kF.BOTTOM),
      leftLabel: null,
      rightLabel: null,
      icon: null
    })]
  });
}
export const Ms = $$N0;
export const Er = $$F1;