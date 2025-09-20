import { useMemo, useCallback } from "react";
import { nearlyEqual } from "../figma_app/492908";
import { isNotNullish } from "../figma_app/95419";
import { VariableSetIdCompatHandler } from "../figma_app/243058";
import { rgbToHsl } from "../figma_app/273493";
import { VariablesBindings, AppStateTsApi, VariableResolvedDataType, VariableDataType, VariableUIContext } from "../figma_app/763686";
import { parseSessionLocalID } from "../905/871411";
import { useAtomWithSubscription } from "../figma_app/27355";
import { areColorsEqual } from "../figma_app/191804";
import { compareNumbers } from "../figma_app/766708";
import { createReduxSubscriptionAtomWithState } from "../905/270322";
import { filterStylesByType } from "../figma_app/646357";
import { UV } from "../905/438367";
import { Cg } from "../figma_app/216057";
import { ay } from "../905/886545";
import { X_ } from "../figma_app/634146";
import { i1 } from "../figma_app/177697";
export function $$b3(e) {
  let t = i1(e);
  let {
    data
  } = useAtomWithSubscription(t);
  return !data;
}
let T = createReduxSubscriptionAtomWithState(e => e.library.local.styles);
export function $$I1(e) {
  let t = useAtomWithSubscription(T);
  let r = i1(e);
  let {
    data
  } = useAtomWithSubscription(r);
  return useMemo(() => {
    if (!e) return [];
    if (!X_(e)) {
      console.warn("Expected local theme", e);
      return [];
    }
    if (!data) {
      console.warn("Theme no longer exists in the theme map", e);
      return [];
    }
    let r = new Set(data?.styleGUIDs || []);
    return r.size > 0 ? filterStylesByType(t, "TEXT").filter(e => r.has(e.node_id)).sort((e, t) => compareNumbers(t.sort_position || "", e.sort_position || "")) : [];
  }, [e, data, t]);
}
function S(e) {
  let t = useAtomWithSubscription(Cg);
  let r = i1(e);
  let {
    data
  } = useAtomWithSubscription(r);
  return e ? X_(e) ? data ? (data.variableIDs || []).map(e => t[e]) || [] : (console.warn("Theme no longer exists in the theme map", e), []) : (console.warn("Expected local theme", e), []) : [];
}
export function $$v0(e) {
  let t = i1(e);
  let {
    data
  } = useAtomWithSubscription(t);
  let i = data?.variableSetID || "";
  return useMemo(() => VariableSetIdCompatHandler.isValid(i) ? VariablesBindings?.getVariableSetDefaultMode(i) ?? "" : "", [i]);
}
function A(e, t) {
  if (!e.color || !t.color) return 0;
  let r = {
    ...rgbToHsl(e.color),
    a: e.opacity ?? e.color.a
  };
  let n = {
    ...rgbToHsl(t.color),
    a: t.opacity ?? t.color.a
  };
  let i = (e, t, r) => {
    for (let n of r) if (e[n] !== t[n]) return e[n] - t[n];
    return 0;
  };
  return r.s < .05 && n.s < .05 ? r.l !== n.l ? -(r.l - n.l) : i(r, n, ["s", "h", "a"]) : r.s < .05 ? 1 : n.s < .05 ? -1 : i(r, n, ["h", "l", "s", "a"]);
}
export function $$x5(e) {
  let t = UV();
  let r = $$N4(e);
  return useMemo(() => {
    let e = r.map(e => e.paint);
    return t.map(e => {
      if ("paint" === e.type && e.stylePaint.paint.color) return e.stylePaint.paint;
    }).filter(isNotNullish).filter(t => !e.some(e => t.color && e.color && areColorsEqual({
      ...t.color,
      a: 1
    }, {
      ...e.color,
      a: 1
    }) && nearlyEqual(t.opacity || t.color.a, e.color.a))).sort(A);
  }, [t, r]);
}
export function $$N4(e) {
  let t = function (e) {
    let t = S(e);
    return useMemo(() => {
      let r = AppStateTsApi?.slideThemeLibBindings().getBlackColorVariableId(e);
      let n = AppStateTsApi?.slideThemeLibBindings().getWhiteColorVariableId(e);
      return t.filter(e => e && e.resolvedType === VariableResolvedDataType.COLOR).sort((e, t) => {
        for (let i of [r, n]) {
          if (e.node_id === i) return -1;
          if (t.node_id === i) return 1;
        }
        return e.sortPosition < t.sortPosition ? -1 : 1;
      }).map(e => e.node_id);
    }, [e, t]);
  }(e);
  let r = $$v0(e);
  let i = X_(e);
  return t.map(e => {
    if (!e || 0 === e.length) return;
    let t = i ? VariablesBindings?.getLocalVariableInfo(e) : VariablesBindings?.getSubscribedVariableInfo(e);
    if (t && t.modeValues && t.modeValues[r] && t.modeValues[r].type === VariableDataType.COLOR && t.modeValues[r].value) {
      let n = {
        color: t.modeValues[r].value,
        colorVar: {
          dataType: "ALIAS",
          resolvedDataType: "COLOR",
          value: {
            alias: {
              guid: parseSessionLocalID(e.replace("VariableID:", "")) || void 0
            }
          }
        }
      };
      return {
        variableId: e,
        variableName: t.name,
        paint: n
      };
    }
  }).filter(isNotNullish);
}
export function $$C2(e) {
  let t = i1(e);
  let {
    data
  } = useAtomWithSubscription(t);
  let i = data?.variableSetID || "";
  let a = $$v0(e);
  let s = S(e);
  let o = ay();
  return useCallback(e => {
    if (i) {
      let t = o(i, s, VariableResolvedDataType.COLOR, "", VariableUIContext.SLIDES_THEME);
      t && VariablesBindings?.setVariableValueForMode(t, a, {
        type: VariableDataType.COLOR,
        resolvedType: VariableResolvedDataType.COLOR,
        value: e
      });
      return t;
    }
    return null;
  }, [o, i, a, s]);
}
export const UZ = $$v0;
export const Xo = $$I1;
export const k1 = $$C2;
export const kO = $$b3;
export const lK = $$N4;
export const nE = $$x5;