import { useMemo, useCallback } from "react";
import { useDispatch, useSelector } from "../vendor/514228";
import { sD } from "../figma_app/243058";
import { VariableDataType, VariablesBindings, VariableResolvedDataType, AppStateTsApi, LayoutTabType } from "../figma_app/763686";
import { permissionScopeHandler } from "../905/189185";
import { useAtomWithSubscription } from "../figma_app/27355";
import { Uv, AW } from "../figma_app/191804";
import { Oe, nh, AV } from "../figma_app/933328";
import { fullscreenValue } from "../figma_app/455680";
import { isValidValue, normalizeValue, isInvalidValue, MIXED_MARKER, valueOrFallback } from "../905/216495";
import { Tm, bn } from "../figma_app/385874";
import { lJ } from "../905/275640";
import { bL } from "../figma_app/852050";
import { eY } from "../figma_app/722362";
import { zk } from "../figma_app/198712";
import { AH } from "../905/571648";
import { WH } from "../figma_app/836943";
import { E_ } from "../figma_app/177697";
import { UZ } from "../figma_app/687767";
import { s1 } from "../figma_app/226737";
export function $$S1(e) {
  return {
    type: "SOLID",
    opacity: 1,
    visible: !0,
    blendMode: "NORMAL",
    colorVar: {
      value: {
        alias: sD.toKiwi(e)
      },
      dataType: "ALIAS",
      resolvedDataType: "COLOR"
    }
  };
}
export function $$v4(e) {
  return {
    type: "SOLID",
    color: {
      ...e,
      a: 1
    },
    opacity: e.a,
    blendMode: "NORMAL"
  };
}
export function $$A7(e) {
  let t = s1();
  let r = UZ(t);
  let i = useAtomWithSubscription(E_);
  let a = bL(i?.varId || "", r);
  return useMemo(() => i && a && a.type === VariableDataType.COLOR ? $$v4(a.value) : isValidValue(e) ? e : $$v4(Uv), [i, a, e]);
}
export function $$x0() {
  let [e] = lJ("imageOverlayPaint");
  return useCallback((t, r) => {
    Tm.clearCache();
    let n = [t];
    e && isValidValue(e) && n.push(e);
    fullscreenValue.updateSelectionProperties({
      fillPaints: n
    }, {
      shouldCommit: r
    });
  }, [e]);
}
export function $$N10(e) {
  let t = useAtomWithSubscription(E_);
  return useCallback((r, n) => {
    t && r.color ? permissionScopeHandler.user("slides-edit-theme-color", () => $$C6(t.varId, t.modeId, r)) : e(r, n);
  }, [t, e]);
}
export function $$C6(e, t, r) {
  VariablesBindings?.setVariableValueForMode(e, t, {
    type: VariableDataType.COLOR,
    resolvedType: VariableResolvedDataType.COLOR,
    value: {
      ...r.color,
      a: r.opacity ?? 1
    }
  });
}
export function $$w5(e) {
  let t = useDispatch();
  let r = useAtomWithSubscription(E_);
  return useCallback(async n => {
    let i = await t(Oe(n));
    let l = sD.fromString(i);
    l && (r ? permissionScopeHandler.user("slides-edit-theme-color", () => {
      AppStateTsApi?.slideThemeLibBindings().setThemeColorVariableFromSubscribedVariableColorValue(r?.varId || "", r?.modeId || "", i);
    }) : e($$S1(l), zk.YES));
  }, [t, r, e]);
}
export function $$O3(e, t, r) {
  let i = WH(t ?? null, r ?? null, e);
  let a = AH(i?.key ?? null, normalizeValue(r));
  return useMemo(() => i?.isLocal ? i : a?.status === "loaded" ? a.data : null, [i, a]);
}
export function $$R9(e, t) {
  let r = useDispatch();
  let a = useAtomWithSubscription(E_);
  let s = eY();
  return useCallback((n, i) => {
    a ? r(nh({
      style: n,
      callback: e => {
        let r = s.get(e);
        let n = AW(r?.fills);
        n && t && permissionScopeHandler.user("slides-edit-theme-color", () => t(a.varId || "", a.modeId || "", $$v4(n)));
      }
    })) : r(AV({
      style: n,
      inheritStyleKeyField: e,
      fromSearch: i?.fromSearch
    }));
  }, [r, a, e, s, t]);
}
export function $$L2() {
  let e = useSelector(e => {
    let t = e.mirror.selectionProperties.fillPaints;
    return isInvalidValue(t) ? MIXED_MARKER : t?.length;
  });
  let [t] = lJ("imageOverlayPaint");
  let r = t && isValidValue(t);
  return valueOrFallback(e, 0) > (r ? 2 : 1);
}
export function $$P8(e) {
  let t = isValidValue(e) && bn(e?.type);
  let r = useSelector(e => e.mirror.appModel.activeCanvasEditModeType);
  return useCallback(() => {
    t && r !== LayoutTabType.GRADIENT && fullscreenValue.triggerAction("toggle-gradient-edit-mode");
  }, [t, r]);
}
export const CK = $$x0;
export const FW = $$S1;
export const Gc = $$L2;
export const Mg = $$O3;
export const NQ = $$v4;
export const PG = $$w5;
export const Vz = $$C6;
export const eE = $$A7;
export const jj = $$P8;
export const o9 = $$R9;
export const rR = $$N10;