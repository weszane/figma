import { jsx, jsxs } from "react/jsx-runtime";
import { useCallback, useMemo, useRef, useState, useId, useContext } from "react";
import { wA, d4 } from "../vendor/514228";
import { c2 } from "../905/382883";
import { Z_n, rXF, JTp, CWU } from "../figma_app/763686";
import { l7 } from "../905/189185";
import { Point } from "../905/736624";
import { Yi } from "../figma_app/933328";
import { C, B } from "../905/330741";
import { Y5 } from "../figma_app/455680";
import { mm, u as _$$u, bL, BQ } from "../figma_app/852050";
import { zk } from "../figma_app/198712";
import { VZ } from "../905/959568";
import { h as _$$h } from "../905/65944";
import { p as _$$p } from "../905/427409";
import { MH, eF } from "../figma_app/394327";
import { d9 } from "../905/579068";
import { y$, u3, Ek } from "../figma_app/152690";
import { Ti, ND } from "../figma_app/960196";
export function $$I5(e) {
  return {
    type: Z_n.EXPRESSION,
    resolvedType: rXF.BOOLEAN,
    value: {
      expressionFunction: JTp.IS_TRUTHY,
      expressionArguments: ["variable" in e && "variableId" in e ? y$(e.variable.resolvedType, e.variableId) : e]
    }
  };
}
export function $$S2(e, t, r, n, o, l, d, p) {
  let {
    mapVariableIdToTypedValue
  } = n ?? {};
  let h = wA();
  let g = d4(e => e.variablePickerShown);
  let {
    updateVariableConsumption,
    clearVariableConsumption
  } = u3(e);
  let T = useCallback((e, n) => {
    r ? r(e) : e ? h(Yi({
      item: e,
      callback: r => {
        mapVariableIdToTypedValue ? updateVariableConsumption(mapVariableIdToTypedValue({
          variable: e,
          variableId: r
        }), n) : updateVariableConsumption(y$(t, r), n);
      }
    })) : clearVariableConsumption();
  }, [r, h, updateVariableConsumption, t, clearVariableConsumption, mapVariableIdToTypedValue]);
  return [g.isShown && "variable-picker-fields" === g.type && c2(g.fields, e) && g.responsiveTextStyleVariantIndex === p && n?.metadata === g.metadata, useCallback((r, i) => {
    let a = i?.initialPosition ?? d?.() ?? VZ(r, d9, !1);
    h(C({
      type: "variable-picker-fields",
      isShown: !0,
      initialPosition: a,
      fields: e,
      resolvedType: t,
      requestedTypes: n?.requestedTypes,
      currentFieldValue: i?.currentFieldValue,
      onVariableSelected: T,
      metadata: n?.metadata,
      variableFilters: n?.variableFilters,
      onExpressionSubmitted: void 0,
      onComponentPropSelected: l,
      responsiveTextStyleVariantIndex: p
    }));
  }, [d, h, e, t, n?.requestedTypes, n?.metadata, n?.variableFilters, T, l, p]), T, void 0, l];
}
export function $$v1(e, t, r, n) {
  let {
    setVariableValueOrOverrideForMode
  } = mm();
  let m = wA();
  let g = d4(e => e.variablePickerShown);
  let f = useCallback(i => {
    i ? m(Yi({
      item: i,
      callback: i => {
        setVariableValueOrOverrideForMode(e, t, r, y$(n, i), zk.YES, "alias-variable");
      }
    })) : l7.user("unalias-variable", () => CWU.detachVariableValueForMode(t, r, null)) && Y5.triggerAction("commit");
  }, [m, n, setVariableValueOrOverrideForMode, e, t, r]);
  return [g.isShown && "variable-picker-alias" === g.type && g.variableID === t && g.modeID === r, useCallback((e, i) => {
    let a = e.getBoundingClientRect();
    m(C({
      type: "variable-picker-alias",
      isShown: !0,
      initialPosition: new Point(a.left, a.bottom),
      initialView: i?.initialView,
      variableID: t,
      modeID: r,
      resolvedType: n,
      onVariableSelected: f
    }));
  }, [t, r, n, m, f]), f];
}
export function $$A4({
  children: e,
  ...t
}) {
  return jsx(x, {
    ...t,
    children: e
  });
}
function x({
  fields: e,
  children: t,
  resolvedType: r,
  requestedTypes: a,
  editingStyleGuid: s,
  responsiveTextStyleVariantIndex: o,
  initialPickerPosition: l,
  onVariableSelected: d,
  onExpressionSubmitted: c,
  onComponentPropSelected: u
}) {
  let {
    consumedVariable
  } = u3(e, s, o);
  let h = MH(consumedVariable);
  let m = _$$u(h ?? void 0);
  let g = !!m && eF(m);
  let y = Ek(e);
  let [T, I, v, A, x] = $$S2(e, r, d, {
    requestedTypes: a
  }, c, u, l, o);
  let N = useMemo(() => ({
    showBindingUI: I,
    isShowingBindingUI: T,
    onVariableSelected: v,
    boundVariableId: h,
    isBoundVariableDeleted: g,
    onExpressionSubmitted: A,
    onComponentPropSelected: x,
    mismatchedValue: y
  }), [I, T, v, h, g, A, y, x]);
  return jsx(_$$p.Provider, {
    value: N,
    children: t
  });
}
export function $$N7({
  variableSetId: e,
  variableID: t,
  modeID: r,
  children: a,
  resolvedType: s
}) {
  let [o, l, d] = $$v1(e, t, r, s);
  let c = bL(t, r);
  let u = MH(c ?? null);
  let p = _$$u(u ?? void 0);
  let h = !!p && eF(p);
  let m = useMemo(() => ({
    showBindingUI: l,
    isShowingBindingUI: o,
    onVariableSelected: d,
    boundVariableId: u,
    isBoundVariableDeleted: h
  }), [l, o, d, u, h]);
  return jsx(_$$p.Provider, {
    value: m,
    children: a
  });
}
export function $$C0({
  children: e,
  pickerType: t = "create-modal",
  resolvedType: r,
  variableValue: a,
  onVariableValueChange: s,
  onVariableSelected: l
}) {
  let c = useRef();
  let [u, p] = useState(!1);
  let h = useCallback(() => {
    p(!1);
  }, []);
  let m = useCallback(e => {
    let t = e.getBoundingClientRect();
    c.current = new Point(t.left, t.bottom);
    p(!0);
  }, []);
  let y = a.type === Z_n.ALIAS ? a.value : void 0;
  let b = _$$u(y);
  let I = !!b && eF(b);
  let S = useMemo(() => ({
    showBindingUI: m,
    isShowingBindingUI: u,
    boundVariableId: y ?? null,
    isBoundVariableDeleted: I
  }), [m, u, y, I]);
  let v = BQ(y);
  return jsxs(_$$p.Provider, {
    value: S,
    children: [e, u ? a.resolvedType !== rXF.COLOR ? jsx(Ti, {
      resolvedType: r,
      onVariableSelected: l,
      onClose: h,
      initialPosition: c.current,
      pickerType: t
    }) : a.type === Z_n.COLOR ? jsx(_$$h, {
      disabledVariableIds: new Set(),
      color: a.value,
      boundVariable: null,
      initialPosition: c.current,
      recordingKey: "variableBindingsDropdown",
      onChange: e => s({
        type: Z_n.COLOR,
        resolvedType: rXF.COLOR,
        value: {
          ...e,
          a: 1
        }
      }),
      onVariableChange: l,
      onClose: h
    }) : a.type === Z_n.ALIAS ? jsx(_$$h, {
      disabledVariableIds: new Set(),
      color: v.value,
      boundVariable: b,
      initialPosition: c.current,
      recordingKey: "variableBindingsDropdown",
      onChange: e => s({
        type: Z_n.COLOR,
        resolvedType: rXF.COLOR,
        value: {
          ...e,
          a: 1
        }
      }),
      onVariableChange: l,
      onClose: h
    }) : void 0 : null]
  });
}
export function $$w6({
  boundVariableId: e,
  resolvedType: t,
  requestedTypes: r,
  initialPickerPosition: s,
  onVariableSelected: o,
  onComponentPropSelected: l,
  children: c
}) {
  let p = _$$u(e ?? void 0);
  let h = !!p && eF(p);
  let [m, g, y] = function ({
    resolvedType: e,
    requestedTypes: t,
    boundVariableId: r,
    initialPickerPosition: n,
    onVariableSelected: s,
    onComponentPropSelected: o
  }) {
    let l = useId();
    let c = wA();
    let p = d4(e => e.variablePickerShown);
    return [p.isShown && "variable-picker-controlled" === p.type && p.key === l, useCallback((i, a) => {
      let p = i.getBoundingClientRect();
      c(C({
        type: "variable-picker-controlled",
        isShown: !0,
        initialPosition: a?.initialPosition ?? n?.() ?? new Point(p.left, p.bottom),
        initialView: a?.initialView,
        variableID: r,
        key: l,
        resolvedType: e,
        requestedTypes: t,
        onVariableSelected: s,
        onComponentPropSelected: o
      }));
    }, [c, r, l, e, t, n, s, o]), l];
  }({
    resolvedType: t,
    requestedTypes: r,
    boundVariableId: e,
    initialPickerPosition: s,
    onVariableSelected: o,
    onComponentPropSelected: l
  });
  return jsx(_$$p.Provider, {
    value: {
      boundVariableId: e ?? null,
      isBoundVariableDeleted: h,
      isShowingBindingUI: m,
      showBindingUI: g,
      onVariableSelected: o,
      onComponentPropSelected: l,
      variableBindingContextKey: y
    },
    children: c
  });
}
export function $$O3({
  variableScope: e,
  onPickerClose: t
}) {
  let r = wA();
  let s = useCallback(() => {
    t?.();
    r(B());
  }, [r, t]);
  let o = useContext(_$$p)?.isShowingBindingUI;
  let l = useContext(_$$p)?.variableBindingContextKey;
  let d = d4(e => e.variablePickerShown);
  return o && d.isShown && "variable-picker-controlled" === d.type && d.key === l ? jsx(ND, {
    ...d,
    onClose: s,
    variableScopes: e ? new Set([e]) : void 0
  }) : null;
}
export const Cr = $$C0;
export const Gx = $$v1;
export const JV = $$S2;
export const V5 = $$O3;
export const _X = $$A4;
export const eT = $$I5;
export const hu = $$w6;
export const nE = $$N7;