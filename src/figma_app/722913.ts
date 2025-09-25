import { useCallback } from "react";
import { throwTypeError } from "../figma_app/465776";
import { clamp } from "../figma_app/492908";
import { permissionScopeHandler } from "../905/189185";
import { sessionLocalIDToString } from "../905/871411";
import { getSingletonSceneGraph } from "../905/700578";
import { useAtomWithSubscription } from "../figma_app/27355";
import { getI18nString } from "../905/303541";
import { fullscreenValue } from "../figma_app/455680";
import { toArray, MIXED_MARKER, isInvalidValue } from "../905/216495";
import { useNonMixedSelectionPropertyValue } from "../905/275640";
import { yesNoTrackingEnum } from "../figma_app/198712";
import { iM, SA } from "../figma_app/405546";
import { lN, lF, QE, F2, Ge, dg, Y4 } from "../figma_app/384713";
let f = e => !!e && e !== sessionLocalIDToString(lN.strokeBrushGuid);
let E = e => {
  let {
    frequency,
    wiggle,
    smoothen
  } = lF;
  return !(("frequency" in e ? e.frequency === frequency : "interval" in e ? e.interval === frequency : throwTypeError) && e.wiggle === wiggle && e.smoothen === smoothen);
};
export function $$y1() {
  let e = toArray(useNonMixedSelectionPropertyValue("strokeBrushGuid"));
  let t = toArray(useNonMixedSelectionPropertyValue("dynamicStrokeSettings"));
  return e.length > 0 && e.every(e => f(sessionLocalIDToString(e))) ? "Brush" : t.length > 0 && t.every(e => e && E(e)) ? "Dynamic" : e.some(e => f(sessionLocalIDToString(e))) || t.some(e => e && E(e)) ? MIXED_MARKER : "Basic";
}
export function $$b6() {
  return toArray(useNonMixedSelectionPropertyValue("strokeBrushGuid")).every(e => !f(sessionLocalIDToString(e)));
}
export function $$T2() {
  return toArray(useNonMixedSelectionPropertyValue("dynamicStrokeSettings")).every(e => !e || !E(e));
}
export function $$I0(e) {
  let t = useAtomWithSubscription(e);
  let r = t.strokeBrushGuid;
  let n = t.dynamicStrokeSettings;
  return r && f(sessionLocalIDToString(r)) ? "Brush" : n && E(n) ? "Dynamic" : "Basic";
}
let S = {
  gap: () => getI18nString("fullscreen.properties_panel.gap"),
  wiggle: () => getI18nString("fullscreen.properties_panel.wiggle"),
  sizeJitter: () => getI18nString("fullscreen.properties_panel.size_jitter"),
  angularJitter: () => getI18nString("fullscreen.properties_panel.angular_jitter"),
  rotation: () => getI18nString("fullscreen.properties_panel.transform_panel.rotation")
};
let v = {
  gap: "scatterBrushGap",
  wiggle: "scatterBrushWiggle",
  rotation: "scatterBrushRotation",
  angularJitter: "scatterBrushAngularJitter",
  sizeJitter: "scatterBrushSizeJitter"
};
let A = {
  wiggle: "dynamicStrokeWiggle",
  frequency: "dynamicStrokeFrequency",
  smoothen: "dynamicStrokeSmoothen"
};
export function $$x3(e, t) {
  let [r, i] = iM(t, v[e]);
  let {
    min,
    max,
    sliderMax
  } = QE[e];
  let d = useCallback(e => {
    i(clamp(e, min, max));
  }, [i, min, max]);
  return {
    value: r ?? F2[e],
    setValue: d,
    min,
    max,
    sliderMax,
    getLabel: S[e],
    mixedMathHandler: new P(e)
  };
}
export function $$N4(e) {
  let [t, r] = iM(e, "stretchStrokeSettings");
  let i = Ge.orientation;
  return {
    orientation: isInvalidValue(t) ? MIXED_MARKER : t?.orientation ?? i,
    setOrientation: useCallback(e => {
      r({
        ...t,
        orientation: e
      });
    }, [t, r])
  };
}
let C = {
  frequency: () => getI18nString("fullscreen.properties_panel.interval"),
  wiggle: () => getI18nString("fullscreen.properties_panel.wiggle"),
  smoothen: () => getI18nString("fullscreen.properties_panel.smoothen")
};
export function $$w5(e, t) {
  let r = "frequency" === e ? "interval" : e;
  let [i, a] = iM(t, A[e]);
  let {
    min,
    max,
    sliderMax
  } = dg[e];
  let d = new $$L7(r);
  let c = useCallback(t => {
    SA({
      [e]: t
    });
    a(t);
  }, [a, e]);
  return {
    value: i ?? Y4[e],
    setValue: c,
    min,
    max,
    sliderMax,
    mixedMathHandler: d,
    getLabel: C[e]
  };
}
function O(e) {
  getSingletonSceneGraph().getDirectlySelectedNodes().forEach(t => function e(t, r) {
    if (t.isGroup) for (let n of t.childrenNodes) e(n, r);else r(t);
  }(t, e));
}
class R {
  getValue() {
    let e = new Map();
    O(t => {
      let r = this.getValueFromNode(t);
      e.set(t.guid, r);
    });
    return e;
  }
  onChange(e, t, r) {
    O(r => {
      let n = e.get(r.guid);
      if (null == n) return;
      let i = t(n);
      this.setValueToNode(r, i);
    });
    r !== yesNoTrackingEnum.NO && fullscreenValue.commit();
  }
}
export class $$L7 extends R {
  constructor(e) {
    super();
    this.key = e;
  }
  getValueFromNode(e) {
    return e.dynamicStrokeSettings[this.key];
  }
  setValueToNode(e, t) {
    permissionScopeHandler.user(`set-dynamic-stroke-${this.key}`, () => {
      e.dynamicStrokeSettings = {
        ...e.dynamicStrokeSettings,
        [this.key]: t
      };
    });
  }
}
class P extends R {
  constructor(e) {
    super();
    this.key = e;
  }
  getValueFromNode(e) {
    return e.scatterStrokeSettings[this.key];
  }
  setValueToNode(e, t) {
    permissionScopeHandler.user(`set-scatter-brush-${this.key}`, () => {
      e.scatterStrokeSettings = {
        ...e.scatterStrokeSettings,
        [this.key]: t
      };
    });
  }
}
export const A8 = $$I0;
export const CL = $$y1;
export const Qd = $$T2;
export const Vb = $$x3;
export const hl = $$N4;
export const i = $$w5;
export const tB = $$b6;
export const xI = $$L7;