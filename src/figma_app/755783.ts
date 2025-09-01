import { useCallback, useMemo } from "react";
import { d4 } from "../vendor/514228";
import { RR } from "../figma_app/338442";
import { rXF, glU, Z_n, m1T, Ez5 } from "../figma_app/763686";
import { l7 } from "../905/189185";
import { R } from "../905/103090";
import { hS } from "../905/216495";
import { u as _$$u } from "../figma_app/852050";
import { J2 } from "../figma_app/84367";
import { Sh } from "../figma_app/889655";
import { t } from "../905/62933";
import { Yc } from "../figma_app/930914";
import { O4 } from "../figma_app/264776";
import { Z } from "../figma_app/221818";
import { JV, eT } from "../figma_app/260445";
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
  return JV(["VISIBLE"], rXF.BOOLEAN, void 0, {
    requestedTypes: [rXF.BOOLEAN, rXF.FLOAT, rXF.STRING],
    variableFilters: {
      [t.MUST_INCLUDE_ONE_OF]: {
        [rXF.STRING]: O4
      },
      [t.HIDE_IN_DEFAULT_VIEW]: {
        [rXF.FLOAT]: !0
      }
    },
    mapVariableIdToTypedValue: eT,
    metadata: e
  }, void 0, function () {
    let e = R(e => Sh(e));
    let t = !Yc(RR.VISIBLE, e);
    let r = useCallback(e => {
      l7.user("add-prop-ref", () => glU.addComponentPropRef(RR.VISIBLE, e.value.explicitDefId));
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
    if (hS(consumedVariable) && consumedVariable.type === Z_n.ALIAS) e = consumedVariable.value;else if (hS(consumedVariable) && consumedVariable.type === Z_n.EXPRESSION) {
      for (let r of Pr(consumedVariable)) if (r.type === Z_n.ALIAS) {
        e = r.value;
        break;
      }
    }
  }
  return e;
}
export function $$S2() {
  return d4(e => e.mirror.appModel.activeCanvasEditModeType === m1T.VECTOR);
}
export function $$v3() {
  let e = J2(Ez5.propertiesPanelState().enabledTransformControls);
  return useMemo(() => new Z(e), [e]);
}
export const $H = $$b0;
export const $V = $$I1;
export const AP = $$S2;
export const Jo = $$v3;
export const ND = $$T4;