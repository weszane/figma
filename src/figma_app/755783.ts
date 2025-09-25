import { useCallback, useMemo } from "react";
import { useSelector } from "react-redux";
import { SlotSymbolType } from "../figma_app/338442";
import { VariableResolvedDataType, Fullscreen, VariableDataType, LayoutTabType, AppStateTsApi } from "../figma_app/763686";
import { permissionScopeHandler } from "../905/189185";
import { selectWithShallowEqual } from "../905/103090";
import { isValidValue } from "../905/216495";
import { u as _$$u } from "../figma_app/852050";
import { getObservableOrFallback } from "../figma_app/84367";
import { selectSceneGraphSelectionKeys } from "../figma_app/889655";
import { t } from "../905/62933";
import { Yc } from "../figma_app/930914";
import { FLATTENED_BOOLEAN_VALUES } from "../figma_app/264776";
import { Z } from "../figma_app/221818";
import { useVariablePickerForFields, createBooleanExpressionVariable } from "../figma_app/260445";
import { u3 } from "../figma_app/152690";
import { Pr } from "../figma_app/394327";
export function $$b0() {
  let {
    consumedVariable
  } = u3(["VISIBLE"]);
  let t = $$I1();
  let r = _$$u(t);
  return !!consumedVariable && !!r;
}
export function $$T4(e) {
  return useVariablePickerForFields(["VISIBLE"], VariableResolvedDataType.BOOLEAN, void 0, {
    requestedTypes: [VariableResolvedDataType.BOOLEAN, VariableResolvedDataType.FLOAT, VariableResolvedDataType.STRING],
    variableFilters: {
      [t.MUST_INCLUDE_ONE_OF]: {
        [VariableResolvedDataType.STRING]: FLATTENED_BOOLEAN_VALUES
      },
      [t.HIDE_IN_DEFAULT_VIEW]: {
        [VariableResolvedDataType.FLOAT]: !0
      }
    },
    mapVariableIdToTypedValue: createBooleanExpressionVariable,
    metadata: e
  }, void 0, function () {
    let e = selectWithShallowEqual(e => selectSceneGraphSelectionKeys(e));
    let t = !Yc(SlotSymbolType.VISIBLE, e);
    let r = useCallback(e => {
      permissionScopeHandler.user("add-prop-ref", () => Fullscreen.addComponentPropRef(SlotSymbolType.VISIBLE, e.value.explicitDefId));
    }, []);
    return useMemo(() => t ? r : void 0, [t, r]);
  }());
}
export function $$I1() {
  let e;
  let {
    consumedVariable
  } = u3(["VISIBLE"]);
  if (consumedVariable) {
    if (isValidValue(consumedVariable) && consumedVariable.type === VariableDataType.ALIAS) e = consumedVariable.value;else if (isValidValue(consumedVariable) && consumedVariable.type === VariableDataType.EXPRESSION) {
      for (let r of Pr(consumedVariable)) if (r.type === VariableDataType.ALIAS) {
        e = r.value;
        break;
      }
    }
  }
  return e;
}
export function $$S2() {
  return useSelector(e => e.mirror.appModel.activeCanvasEditModeType === LayoutTabType.VECTOR);
}
export function $$v3() {
  let e = getObservableOrFallback(AppStateTsApi.propertiesPanelState().enabledTransformControls);
  return useMemo(() => new Z(e), [e]);
}
export const $H = $$b0;
export const $V = $$I1;
export const AP = $$S2;
export const Jo = $$v3;
export const ND = $$T4;