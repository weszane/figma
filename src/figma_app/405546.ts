import { useCallback } from "react";
import { useSelector } from "react-redux";
import { useAtomValueAndSetter } from "../figma_app/27355";
import { analyticsEventManager } from "../905/449184";
import { debugState } from "../905/407919";
import { mapEditorTypeToProductType } from "../figma_app/314264";
import { useSelectionPropertyValue } from "../905/275640";
import { AP } from "../figma_app/755783";
import { Xd } from "../figma_app/359164";
import { F2, Y4 } from "../figma_app/384713";
export function $$_0(e) {
  analyticsEventManager.trackDefinedEvent("illustration.set_dynamic_stroke_settings", {
    numNodes: debugState.getState().mirror.selectionProperties.numSelected,
    productType: mapEditorTypeToProductType(debugState.getState().selectedView.editorType),
    ...e
  });
}
export function $$h2(e, t) {
  let [r, i] = useAtomValueAndSetter(e);
  return [r[t], useCallback(e => {
    i({
      [t]: e
    });
  }, [i, t])];
}
function m(e) {
  return {
    get: t => t.scatterStrokeSettings?.[e],
    set: (t, r) => ({
      scatterStrokeSettings: {
        ...(t.scatterStrokeSettings ?? F2),
        [e]: r
      }
    })
  };
}
function g(e) {
  return {
    get: t => t.dynamicStrokeSettings?.[e],
    set: (t, r) => {
      var n;
      return {
        dynamicStrokeSettings: {
          ...(t.dynamicStrokeSettings ?? {
            interval: (n = Y4).frequency ?? Y4.frequency,
            wiggle: n.wiggle ?? Y4.wiggle,
            smoothen: n.smoothen ?? Y4.smoothen
          }),
          [e]: r
        }
      };
    }
  };
}
function f(e) {
  return {
    get: t => t[e],
    set: (t, r) => ({
      [e]: r
    })
  };
}
let E = {
  strokeWeight: f("strokeWeight"),
  strokePaints: f("paints"),
  strokeBrushGuid: f("strokeBrushGuid"),
  stretchStrokeSettings: f("stretchStrokeSettings"),
  scatterBrushAngularJitter: m("angularJitter"),
  scatterBrushSizeJitter: m("sizeJitter"),
  scatterBrushRotation: m("rotation"),
  scatterBrushWiggle: m("wiggle"),
  scatterBrushGap: m("gap"),
  dynamicStrokeFrequency: g("interval"),
  dynamicStrokeSmoothen: g("smoothen"),
  dynamicStrokeWiggle: g("wiggle")
};
export function $$y1(e, t) {
  let {
    get,
    set
  } = E[t];
  let o = Xd();
  let [l, p] = useAtomValueAndSetter(e);
  let _ = get(l);
  let h = useSelector(e => e.mirror.selectionProperties.numSelected);
  let m = useSelectionPropertyValue(t);
  let g = AP();
  let f = !!h || g;
  return [f ? m : _, useCallback(e => {
    f ? o({
      [t]: e
    }) : p(t => set(t, e));
  }, [set, f, o, t, p])];
}
export const SA = $$_0;
export const iM = $$y1;
export const w1 = $$h2;