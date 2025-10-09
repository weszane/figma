import _require from "../37/800037";
import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { createContext, useState, useCallback, useEffect, useContext, useMemo, useRef } from "react";
import { isNotNullish } from "../figma_app/95419";
import { VariableDataType, OperationType, VariableResolvedDataType } from "../figma_app/763686";
import { convertVariableIdToKiwi } from "../905/805904";
import { getFeatureFlags } from "../905/601108";
import d from "classnames";
import u from "../vendor/737647";
import { setupLazyComponentFactory } from "../905/992467";
import { generateRecordingKey } from "../figma_app/878298";
import { RecordableDiv } from "../905/511649";
import { Point } from "../905/736624";
import { KeyboardNavigationProvider } from "../figma_app/119475";
import { getI18nString } from "../905/303541";
import { q } from "../905/113809";
import { q as _$$q } from "../905/417424";
import { A as _$$A } from "../905/713173";
import { d as _$$d } from "../905/954754";
import { o as _$$o } from "../905/609215";
import { isInvalidValue, isValidValue } from "../905/216495";
import { getVariableById, getCombinedVariableSetById } from "../figma_app/852050";
import { c as _$$c } from "../905/534105";
import { J } from "../905/225412";
import { c as _$$c2, P as _$$P } from "../905/200950";
import { zt, YT, Oz } from "../figma_app/84580";
import { isLocallySoftDeleted } from "../figma_app/394327";
import { wG, J2 } from "../905/331989";
import { getPathLeaf } from "../905/782020";
import { DraggableModalManager } from "../905/748636";
import { X } from "../905/55424";
import { IQ, EQ, Y_, Q6, dX, yZ, er, Xx, aA } from "../figma_app/632975";
import { ZA } from "../905/794523";
import { Zh, D9, WR, NQ, pC, g6, _i, tY, a7 } from "../905/549307";
import { A as _$$A2 } from "../6041/969560";
import { A as _$$A3 } from "../6041/556822";
var c = d;
var p = u;
let $$B1 = createContext({
  autoCloseOnScroll: !0
});
let G = setupLazyComponentFactory("lazy_search_expression_builder", {
  isCodesplit: !0,
  ComponentFactory: async () => ({
    default: (await _require).ExpressionBuilderSearch
  })
});
export function $$V0({
  resolvedType: e,
  targetVariableData: t,
  autoOpenExpressionBuilder: r,
  setAutoOpenExpressionBuilder: o,
  updateSelectionProperties: l,
  recordingKey: d,
  updateConditionInConditionalAction: c,
  isNarrowPanel: u,
  showVariableThumbnails: p,
  setVariableValue: _,
  onClose: m,
  requestedTypes: f,
  initialPosition: E,
  variantProperty: b
}) {
  let I = !1;
  isInvalidValue(t) && (t = void 0, I = !0);
  t = IQ(t, b);
  t?.type === VariableDataType.EXPRESSION && t?.value.expressionFunction === OperationType.STRINGIFY && (t = t.value.expressionArguments[0]);
  let [A, x] = useState(null);
  let N = useCallback(e => {
    null !== e && x(e);
  }, []);
  let [C, O] = useState(E ?? null);
  let {
    shouldShowAdvancedPrototypingPaywall,
    showAdvancedPrototypingVariablesModal
  } = zt();
  let P = useCallback(() => {
    if (shouldShowAdvancedPrototypingPaywall) showAdvancedPrototypingVariablesModal();else if (!C && A) {
      let e = A.getBoundingClientRect();
      O(new Point(e.left - 34, e.top - 6));
    }
  }, [A, C, shouldShowAdvancedPrototypingPaywall, showAdvancedPrototypingVariablesModal]);
  useEffect(() => {
    !0 === r && o && A && (P(), o(!1));
  }, [r, A, P, o]);
  let D = useCallback(() => {
    C && (O(null), m && m());
  }, [C, m]);
  let M = useCallback(e => {
    if (void 0 !== c) c(e);else if (isNotNullish(_)) {
      if (!_(e)) return !1;
    } else void 0 !== l && l({
      targetVariableData: e
    });
    D();
    return !0;
  }, [D, c, l, _]);
  let F = jsx(Fragment, {
    children: C && jsx(H, {
      initialTokens: t ? q(_$$A(t, new _$$o(!0))) : [],
      initialPosition: C,
      resolvedType: e,
      onCloseExpressionBuilder: D,
      onInputSubmitted: M,
      icon: c ? _$$A2 : _$$A3,
      isInConditional: void 0 !== c,
      recordingKey: generateRecordingKey(d, "expressionBuilder"),
      requestedTypes: f
    })
  });
  let B = jsx($$z2, {
    targetVariableData: t,
    forwardRef: N,
    onClick: P,
    recordingKey: d,
    isNarrowPanel: u,
    isInCell: !!_,
    showVariableThumbnails: p,
    isInConditional: void 0 !== c,
    isMixed: I
  });
  return jsxs(Fragment, {
    children: [F, " ", B]
  });
}
function H({
  initialTokens: e,
  initialPosition: t,
  resolvedType: r,
  onCloseExpressionBuilder: a,
  onInputSubmitted: s,
  icon: o,
  isInConditional: l,
  recordingKey: d,
  requestedTypes: c
}) {
  let {
    autoCloseOnScroll
  } = useContext($$B1);
  let _ = useMemo(() => e.reduce((e, t) => e += t.stringValue, ""), [e]);
  let g = useRef(_);
  let y = useRef(!1);
  let [T, v] = useState(0);
  let A = useCallback((e, t) => {
    v(e);
    e > 0 && !y.current && (y.current = !0);
    t && EQ(g.current, t, r, l ? "conditional" : "set_variable");
  }, [l, r]);
  let [N, C] = useState(_$$d(g.current, r, c));
  let w = useCallback(() => {
    if (g.current.trim().length > 0) {
      EQ(g.current, "success", r, l ? "conditional" : "set_variable");
      let e = s(_$$q(g.current, new _$$o()));
      if (!e) {
        C(!e);
        return e;
      }
    } else {
      EQ(g.current, "submit_empty", r, l ? "conditional" : "set_variable");
      a();
    }
    return !0;
  }, [l, a, s, r]);
  let O = useMemo(() => p()(e => {
    EQ(g.current, e, r, l ? "conditional" : "set_variable");
    a();
  }), [l, a, r]);
  let R = useCallback(() => l ? getI18nString("proto.expression_builder_entry.placeholder") : getI18nString("proto.expression_builder.placeholder"), [l]);
  return jsxs("div", {
    className: Zh,
    children: [jsx(DraggableModalManager, {
      container: _$$c,
      containerProps: {
        wiggleCount: T
      },
      title: "",
      headerSize: "hidden",
      initialPosition: t,
      onClose: a,
      dragHeaderOnly: !1,
      initialWidth: 258,
      canRenderBelowViewport: !0,
      children: jsx(KeyboardNavigationProvider, {
        recordingKey: d,
        children: jsx("div", {
          children: jsx(G, {
            error: N,
            errorFallback: null,
            expressionText: g,
            fallback: jsx("div", {
              className: D9,
              children: " Loading... "
            }),
            hasWiggled: y.current,
            icon: o,
            initialTokens: e,
            isInConditional: l,
            onClose: O,
            onSubmit: w,
            placeholderText: R(),
            recordingKey: generateRecordingKey(d, "search"),
            requestedTypes: c,
            resolvedType: r,
            setError: C,
            setWiggleCount: A,
            wiggleCount: T
          })
        })
      })
    }), jsx(RecordableDiv, {
      className: ZA,
      onMouseDown: e => {
        !N && w() || (T >= 1 ? O("click_out_cancel") : 0 === T && A(1, "click_out_error"));
        e.stopPropagation();
      },
      onWheel: () => {
        autoCloseOnScroll && g.current.trim() === _.trim() && O("scroll_cancel");
      },
      recordingKey: generateRecordingKey(d, "closeBuilder")
    })]
  });
}
export function $$z2({
  targetVariableData: e,
  forwardRef: t,
  onClick: r,
  recordingKey: a,
  showVariableThumbnails: d,
  isNarrowPanel: u,
  isInCell: p,
  isInConditional: _,
  isMixed: g,
  variantProperty: f
}) {
  e = IQ(e, f);
  let y = YT();
  let b = useContext(_$$c2);
  let I = y === Oz.TWO_COL;
  let A = I && b === _$$P.LEFT;
  let x = I && b === _$$P.RIGHT;
  let O = useMemo(() => e ? _$$A(e, new _$$o(!0, !0)).replace(/\(/g, " ( ").replace(/\)/g, " ) ").split(/\s+(?=(?:(?:[^"]*"){2})*[^"]*$)(?![^{]*})(?![^[]*])/) : [], [e]);
  if (e && isValidValue(e) && e?.resolvedType === VariableResolvedDataType.COLOR) return jsx(J, {
    color: e.value
  });
  let R = 0 === O.length;
  let L = c()({
    [WR]: !p && u,
    [NQ]: p,
    [D9]: !p && !u,
    [pC]: I,
    [g6]: A,
    [_i]: !0
  });
  let P = A ? getI18nString("proto.expression_builder_entry.placeholder_ui3_lhs") : x ? getI18nString("proto.expression_builder_entry.placeholder_ui3_rhs") : getI18nString("proto.expression_builder_entry.placeholder");
  return jsx(RecordableDiv, {
    onClick: r,
    recordingKey: generateRecordingKey(a, "openExpressionBuilder"),
    className: tY,
    children: jsxs("div", {
      className: L,
      ref: t,
      children: [O.filter(e => e.length > 0).map((e, t) => {
        if (e.startsWith("{") && e.endsWith("}")) {
          let r = e.replace(/[{}]/g, "");
          let {
            variableId,
            modeId
          } = Y_(r);
          return jsx(W, {
            variableId,
            modeId,
            showVariableThumbnails: d,
            disableHover: A
          }, t);
        }
        if (convertVariableIdToKiwi(e)) return jsx(W, {
          variableId: e,
          showVariableThumbnails: d,
          disableHover: A
        }, t);
        if (getFeatureFlags().ds_variable_props_proto && e.startsWith("[") && e.endsWith("]")) {
          let r = e.replace(/[[]]/g, "");
          let [i, a, s] = Q6(r);
          return jsx(K, {
            stablePathToNode: i,
            componentPropId: s,
            showVariableThumbnails: d
          }, t);
        }
        if (getFeatureFlags().ds_variable_props_proto && Q6(e)[0].length && "" !== Q6(e)[1] && "" !== Q6(e)[2]) {
          let [r, i, a] = Q6(e);
          return jsx(K, {
            stablePathToNode: r,
            componentPropId: a,
            showVariableThumbnails: d,
            disableHover: A
          }, t);
        }
        return dX.test(e) ? jsx("span", {
          children: e
        }, t) : yZ.test(e) || er.test(e) ? jsx("span", {
          children: e
        }, t) : jsx(X, {
          isLeftColInteractionsPanel: A,
          text: e
        }, t);
      }), R && jsx("span", {
        className: a7,
        children: g ? getI18nString("fullscreen.mixed") : _ ? P : getI18nString("proto.expression_builder.placeholder")
      })]
    })
  });
}
function W({
  variableId: e,
  modeId: t,
  showVariableThumbnails: r,
  disableHover: i
}) {
  let a = getVariableById(e);
  let s = a ? getPathLeaf(a.name) : getI18nString("proto.expression_builder_entry.missing");
  let o = getCombinedVariableSetById(a?.variableSetId);
  let l = o && t ? o.modes.find(e => e.id === t) : null;
  let d = l?.name;
  let c = a && r ? Xx(a.resolvedType) : null;
  let u = d ? `${s}: ${d}` : `${s}`;
  return jsx(wG, {
    text: u,
    thumbnailValue: c,
    isDeleted: !!a && isLocallySoftDeleted(a),
    disableHover: i
  });
}
function K({
  stablePathToNode: e,
  componentPropId: t,
  showVariableThumbnails: r,
  disableHover: i
}) {
  let a = aA(e, t);
  let s = a && r ? Xx(a.varValue.resolvedType) : null;
  return jsx(wG, {
    text: a ? a.name : getI18nString("proto.expression_builder_entry.missing"),
    colorTheme: J2.COMPONENT,
    thumbnailValue: s,
    isDeleted: !1,
    disableHover: i
  });
}
export const KN = $$V0;
export const ht = $$B1;
export const y3 = $$z2;