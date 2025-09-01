import { useMemo, useCallback } from "react";
import { wA, d4 } from "../vendor/514228";
import { sD } from "../figma_app/243058";
import { Z_n, CWU, rXF, Ez5, m1T } from "../figma_app/763686";
import { l7 } from "../905/189185";
import { md } from "../figma_app/27355";
import { Uv, AW } from "../figma_app/191804";
import { Oe, nh, AV } from "../figma_app/933328";
import { Y5 } from "../figma_app/455680";
import { hS, E7, gl, oV, _W } from "../905/216495";
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
  let i = md(E_);
  let a = bL(i?.varId || "", r);
  return useMemo(() => i && a && a.type === Z_n.COLOR ? $$v4(a.value) : hS(e) ? e : $$v4(Uv), [i, a, e]);
}
export function $$x0() {
  let [e] = lJ("imageOverlayPaint");
  return useCallback((t, r) => {
    Tm.clearCache();
    let n = [t];
    e && hS(e) && n.push(e);
    Y5.updateSelectionProperties({
      fillPaints: n
    }, {
      shouldCommit: r
    });
  }, [e]);
}
export function $$N10(e) {
  let t = md(E_);
  return useCallback((r, n) => {
    t && r.color ? l7.user("slides-edit-theme-color", () => $$C6(t.varId, t.modeId, r)) : e(r, n);
  }, [t, e]);
}
export function $$C6(e, t, r) {
  CWU?.setVariableValueForMode(e, t, {
    type: Z_n.COLOR,
    resolvedType: rXF.COLOR,
    value: {
      ...r.color,
      a: r.opacity ?? 1
    }
  });
}
export function $$w5(e) {
  let t = wA();
  let r = md(E_);
  return useCallback(async n => {
    let i = await t(Oe(n));
    let l = sD.fromString(i);
    l && (r ? l7.user("slides-edit-theme-color", () => {
      Ez5?.slideThemeLibBindings().setThemeColorVariableFromSubscribedVariableColorValue(r?.varId || "", r?.modeId || "", i);
    }) : e($$S1(l), zk.YES));
  }, [t, r, e]);
}
export function $$O3(e, t, r) {
  let i = WH(t ?? null, r ?? null, e);
  let a = AH(i?.key ?? null, E7(r));
  return useMemo(() => i?.isLocal ? i : a?.status === "loaded" ? a.data : null, [i, a]);
}
export function $$R9(e, t) {
  let r = wA();
  let a = md(E_);
  let s = eY();
  return useCallback((n, i) => {
    a ? r(nh({
      style: n,
      callback: e => {
        let r = s.get(e);
        let n = AW(r?.fills);
        n && t && l7.user("slides-edit-theme-color", () => t(a.varId || "", a.modeId || "", $$v4(n)));
      }
    })) : r(AV({
      style: n,
      inheritStyleKeyField: e,
      fromSearch: i?.fromSearch
    }));
  }, [r, a, e, s, t]);
}
export function $$L2() {
  let e = d4(e => {
    let t = e.mirror.selectionProperties.fillPaints;
    return gl(t) ? oV : t?.length;
  });
  let [t] = lJ("imageOverlayPaint");
  let r = t && hS(t);
  return _W(e, 0) > (r ? 2 : 1);
}
export function $$P8(e) {
  let t = hS(e) && bn(e?.type);
  let r = d4(e => e.mirror.appModel.activeCanvasEditModeType);
  return useCallback(() => {
    t && r !== m1T.GRADIENT && Y5.triggerAction("toggle-gradient-edit-mode");
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