import { jsxs, jsx } from "react/jsx-runtime";
import { useCallback, useMemo } from "react";
import { useDispatch } from "../vendor/514228";
import { assertNotNullish } from "../figma_app/465776";
import { VariableResolvedDataType, Fullscreen, VariableDataType, OperationType, PropertyScope } from "../figma_app/763686";
import { sH } from "../905/805904";
import { Yi, Oe } from "../figma_app/933328";
import { fullscreenValue } from "../figma_app/455680";
import { isInvalidValue } from "../905/216495";
import { zk } from "../figma_app/198712";
import { _X, V5, hu } from "../figma_app/260445";
import { u3, y$ } from "../figma_app/152690";
import { Io, MH } from "../figma_app/394327";
import { RR } from "../figma_app/338442";
import { permissionScopeHandler } from "../905/189185";
import { selectWithShallowEqual } from "../905/103090";
import { Sh } from "../figma_app/889655";
import { Yc } from "../figma_app/930914";
import { On } from "../figma_app/323320";
export function $$I3({
  children: e
}) {
  let {
    updateConsumption,
    onExpressionSubmitted,
    onComponentPropSelected
  } = function () {
    let e = useDispatch();
    let {
      consumedVariable,
      updateVariableConsumption,
      clearVariableConsumption
    } = u3(["TEXT_DATA"]);
    let s = useCallback(t => {
      if (!t) {
        clearVariableConsumption();
        return;
      }
      e(Yi({
        item: t,
        callback: e => {
          t.resolvedType === VariableResolvedDataType.STRING ? (permissionScopeHandler.user("delete-prop-ref", () => Fullscreen.deleteComponentPropRef(RR.TEXT)), updateVariableConsumption(y$(VariableResolvedDataType.STRING, e))) : t.resolvedType === VariableResolvedDataType.FLOAT && (permissionScopeHandler.user("delete-prop-ref", () => Fullscreen.deleteComponentPropRef(RR.TEXT)), updateVariableConsumption({
            resolvedType: VariableResolvedDataType.STRING,
            type: VariableDataType.EXPRESSION,
            value: {
              expressionFunction: OperationType.STRINGIFY,
              expressionArguments: [y$(VariableResolvedDataType.FLOAT, e)]
            }
          }));
        }
      }));
    }, [updateVariableConsumption, clearVariableConsumption, e]);
    let l = selectWithShallowEqual(e => Sh(e));
    let c = useMemo(On, []);
    let {
      textPropReferencedBySelection
    } = selectWithShallowEqual(e => ({
      textPropReferencedBySelection: !!c(e, RR.TEXT)
    }));
    let p = Yc(RR.TEXT, l);
    let m = useCallback(e => {
      permissionScopeHandler.user("add-prop-ref", () => {
        clearVariableConsumption();
        Fullscreen.addComponentPropRef(RR.TEXT, e.value.explicitDefId);
      });
    }, [clearVariableConsumption]);
    return {
      isVariableBound: !!consumedVariable,
      updateConsumption: s,
      clearVariableConsumption,
      onExpressionSubmitted: void 0,
      onComponentPropSelected: !p || textPropReferencedBySelection ? m : void 0
    };
  }();
  let l = useMemo(() => ["TEXT_DATA"], []);
  return jsxs(_X, {
    fields: l,
    resolvedType: VariableResolvedDataType.STRING,
    requestedTypes: Io.TEXT_DATA,
    onVariableSelected: updateConsumption,
    onExpressionSubmitted,
    onComponentPropSelected,
    children: [jsx(V5, {
      variableScope: PropertyScope.TEXT_CONTENT
    }), e]
  });
}
export function $$E0({
  editingStyleGuid: e,
  onChange: t,
  children: i
}) {
  let u = useDispatch();
  let g = useMemo(() => ["FONT_FAMILY"], []);
  let {
    updateVariableConsumption,
    clearVariableConsumption
  } = u3(g, e);
  async function A(e) {
    if (e) {
      let i = await u(Oe(e));
      assertNotNullish(sH(i));
      updateVariableConsumption(y$(VariableResolvedDataType.STRING, i));
      t?.();
    } else clearVariableConsumption(zk.YES);
    fullscreenValue.triggerAction("leave-edit-mode");
  }
  return jsxs(_X, {
    fields: g,
    resolvedType: VariableResolvedDataType.STRING,
    onVariableSelected: A,
    children: [jsx(V5, {
      variableScope: PropertyScope.FONT_FAMILY
    }), i]
  });
}
function x() {
  let e = useDispatch();
  let t = useMemo(() => ["FONT_STYLE"], []);
  let {
    consumedVariable,
    updateVariableConsumption,
    clearVariableConsumption
  } = u3(t);
  return {
    consumedVariable,
    updateVariableConsumption: useCallback(async t => {
      if (!t) {
        clearVariableConsumption(zk.YES);
        return;
      }
      let i = await e(Oe(t));
      assertNotNullish(sH(i));
      t.resolvedType === VariableResolvedDataType.STRING ? updateVariableConsumption({
        type: VariableDataType.FONT_STYLE,
        resolvedType: VariableResolvedDataType.FONT_STYLE,
        value: {
          asString: y$(VariableResolvedDataType.STRING, i),
          asFloat: null
        }
      }) : t.resolvedType === VariableResolvedDataType.FLOAT && updateVariableConsumption({
        type: VariableDataType.FONT_STYLE,
        resolvedType: VariableResolvedDataType.FONT_STYLE,
        value: {
          asString: null,
          asFloat: y$(VariableResolvedDataType.FLOAT, i)
        }
      });
    }, [updateVariableConsumption, clearVariableConsumption, e]),
    clearVariableConsumption
  };
}
export function $$S1({
  children: e
}) {
  let {
    consumedVariable,
    updateVariableConsumption
  } = x();
  let r = MH(consumedVariable);
  return jsxs(hu, {
    boundVariableId: r ?? void 0,
    resolvedType: VariableResolvedDataType.STRING,
    requestedTypes: Io.FONT_STYLE,
    onVariableSelected: updateVariableConsumption,
    children: [jsx(V5, {
      variableScope: PropertyScope.FONT_STYLE
    }), e]
  });
}
export function $$w2({
  children: e
}) {
  let {
    consumedVariable,
    updateVariableConsumption
  } = x();
  let r = !consumedVariable || isInvalidValue(consumedVariable) || consumedVariable.type !== VariableDataType.FONT_STYLE ? null : consumedVariable.value.asFloat ? MH(consumedVariable) : null;
  let a = async e => {
    await updateVariableConsumption(e);
  };
  return jsx(hu, {
    boundVariableId: r ?? void 0,
    resolvedType: VariableResolvedDataType.FLOAT,
    onVariableSelected: a,
    children: e
  });
}
export const We = $$E0;
export const XA = $$S1;
export const wJ = $$w2;
export const Ig = $$I3;