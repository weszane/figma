import { useCallback } from "react";
import { xb } from "../figma_app/465776";
import { qE } from "../figma_app/492908";
import { l7 } from "../905/189185";
import { dI } from "../905/871411";
import { UN } from "../905/700578";
import { md } from "../figma_app/27355";
import { t } from "../905/303541";
import { Y5 } from "../figma_app/455680";
import { C8, oV, gl } from "../905/216495";
import { Gt } from "../905/275640";
import { zk } from "../figma_app/198712";
import { iM, SA } from "../figma_app/405546";
import { lN, lF, QE, F2, Ge, dg, Y4 } from "../figma_app/384713";
let f = e => !!e && e !== dI(lN.strokeBrushGuid);
let E = e => {
  let {
    frequency,
    wiggle,
    smoothen
  } = lF;
  return !(("frequency" in e ? e.frequency === frequency : "interval" in e ? e.interval === frequency : xb) && e.wiggle === wiggle && e.smoothen === smoothen);
};
export function $$y1() {
  let e = C8(Gt("strokeBrushGuid"));
  let t = C8(Gt("dynamicStrokeSettings"));
  return e.length > 0 && e.every(e => f(dI(e))) ? "Brush" : t.length > 0 && t.every(e => e && E(e)) ? "Dynamic" : e.some(e => f(dI(e))) || t.some(e => e && E(e)) ? oV : "Basic";
}
export function $$b6() {
  return C8(Gt("strokeBrushGuid")).every(e => !f(dI(e)));
}
export function $$T2() {
  return C8(Gt("dynamicStrokeSettings")).every(e => !e || !E(e));
}
export function $$I0(e) {
  let t = md(e);
  let r = t.strokeBrushGuid;
  let n = t.dynamicStrokeSettings;
  return r && f(dI(r)) ? "Brush" : n && E(n) ? "Dynamic" : "Basic";
}
let S = {
  gap: () => t("fullscreen.properties_panel.gap"),
  wiggle: () => t("fullscreen.properties_panel.wiggle"),
  sizeJitter: () => t("fullscreen.properties_panel.size_jitter"),
  angularJitter: () => t("fullscreen.properties_panel.angular_jitter"),
  rotation: () => t("fullscreen.properties_panel.transform_panel.rotation")
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
    i(qE(e, min, max));
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
    orientation: gl(t) ? oV : t?.orientation ?? i,
    setOrientation: useCallback(e => {
      r({
        ...t,
        orientation: e
      });
    }, [t, r])
  };
}
let C = {
  frequency: () => t("fullscreen.properties_panel.interval"),
  wiggle: () => t("fullscreen.properties_panel.wiggle"),
  smoothen: () => t("fullscreen.properties_panel.smoothen")
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
  UN().getDirectlySelectedNodes().forEach(t => function e(t, r) {
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
    r !== zk.NO && Y5.commit();
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
    l7.user(`set-dynamic-stroke-${this.key}`, () => {
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
    l7.user(`set-scatter-brush-${this.key}`, () => {
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