import { useCallback, useMemo } from "react";
import { wA, d4 } from "../vendor/514228";
import { isNullish } from "../figma_app/95419";
import { m1T, Egt, _0v, nzw, glU, mKm, Ez5 } from "../figma_app/763686";
import { l7, nc } from "../905/189185";
import { getFeatureFlags } from "../905/601108";
import { sx } from "../905/449184";
import { Uz } from "../905/63728";
import { eB } from "../905/765855";
import { dG } from "../figma_app/753501";
import { vx, OU } from "../figma_app/175258";
import { sT } from "../figma_app/740163";
import { gl } from "../905/216495";
import { M } from "../figma_app/634148";
import { kl } from "../905/275640";
import { J2 } from "../figma_app/84367";
import { Ui, Zj } from "../905/129884";
import { a2 } from "../figma_app/762558";
import { Z } from "../figma_app/221818";
export function $$I3(e) {
  let t = wA();
  let r = sT();
  let {
    bigNudgeAmount,
    smallNudgeAmount
  } = r;
  let _ = useCallback(e => {
    e.stopPropagation();
    let r = e.keyCode === Uz.UP_ARROW ? "+" : "-";
    let n = e.shiftKey ? bigNudgeAmount : smallNudgeAmount;
    let i = `${r}${n}`;
    let a = e.currentTarget.closest("label") ?? e.currentTarget.closest("[data-tooltip]");
    let s = a?.getBoundingClientRect();
    s && t(eB({
      target: {
        kind: Ui.TEXT,
        text: i
      },
      targetRect: s,
      position: Zj.BELOW,
      hideAfterDelay: 200
    }));
  }, [t, bigNudgeAmount, smallNudgeAmount]);
  let m = function (e) {
    let t = d4(e => e.mirror.appModel.activeCanvasEditModeType === m1T.VECTOR);
    let r = useMemo(() => {
      class t extends M {
        getValueForNode(t) {
          return Egt.getNodeTransformProperties(t.guid)[e];
        }
        setValueForNode(t, r) {
          l7.user(`transform-change-${e}`, () => {
            try {
              Egt.setNodeTransformProperties(t.guid, {
                [e]: r
              });
            } catch {}
          });
        }
      }
      return new t();
    }, [e]);
    let l = function (e) {
      let t = "x" === e ? _0v.X : "y" === e ? _0v.Y : void 0;
      return useMemo(() => {
        if (!isNullish(t)) return nc.user("apply-mixed-method-for-vector-network", e => {
          Egt.applyMixedMathForSelectedVectorNetwork(t, e);
        });
      }, [t]);
    }(e);
    return useMemo(() => t && l ? {
      mixedMathCallback: l
    } : {
      mixedMathHandler: r
    }, [t, r, l]);
  }(e.key);
  let f = function ({
    key: e,
    setValue: t
  }) {
    let r = d4(e => e.mirror.appModel.onCanvasNameEditorInfo.mode);
    return useCallback((n, i) => {
      $$x7(e);
      r !== nzw.NONE && glU.hideOnCanvasNameEditor();
      t(n, i);
    }, [e, r, t]);
  }(e);
  return {
    ...r,
    ...m,
    dispatch: t,
    onValueChange: f,
    onMixedMathNudge: _,
    onKeyUp: dG
  };
}
export function $$S6() {
  let {
    smallNudgeAmount,
    bigNudgeAmount
  } = sT();
  return {
    smallNudgeAmount,
    bigNudgeAmount,
    wheelMultiplier: smallNudgeAmount,
    scrubMultiplier: smallNudgeAmount
  };
}
export function $$v4() {
  let e = kl("stackHorizontalSize");
  let t = kl("stackVerticalSize");
  let r = kl("textAutoResize");
  let n = $$A0();
  let a = d4(e => {
    let t = e.mirror.selectionProperties.numSelectedByType;
    return t && vx(t, "TEXT");
  });
  let o = i => {
    let o = ("VERTICAL" === i ? t : e) !== mKm.FIXED;
    let l = a && (gl(r) || "WIDTH_AND_HEIGHT" === r || "VERTICAL" === i && "HEIGHT" === r);
    return o || "VERTICAL" === i && n || l;
  };
  return {
    widthIsAuto: !!o("HORIZONTAL"),
    heightIsAuto: !!o("VERTICAL")
  };
}
export function $$A0() {
  return d4(e => {
    let t = e.mirror.selectionProperties.numSelectedByType;
    return OU(t, ["LINE", "WASHI_TAPE"]);
  });
}
export function $$x7(e) {
  getFeatureFlags().ce_properties_panel_tracking && sx("editor-transform-panel-change", {
    key: e
  });
  a2(e);
}
export function $$N1() {
  let e = J2(Ez5.propertiesPanelState().shownTransformControls);
  return useMemo(() => new Z(e), [e]);
}
export function $$C5(e) {
  let t = J2(Ez5.propertiesPanelState().shownTransformControls);
  return useMemo(() => new Z(t).getValue(e), [t, e]);
}
export function $$w2() {
  let e = J2(Ez5.propertiesPanelState().enabledTransformControls);
  return useMemo(() => new Z(e), [e]);
}
export const AY = $$A0;
export const Df = $$N1;
export const Jo = $$w2;
export const KG = $$I3;
export const M9 = $$v4;
export const Qr = $$C5;
export const Xs = $$S6;
export const rn = $$x7;