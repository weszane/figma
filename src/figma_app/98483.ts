import { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { KeyCodes } from '../905/63728';
import { ElementTypeEnum, PositionEnum } from '../905/129884';
import { permissionScopeHandler, scopeAwareFunction } from '../905/189185';
import { isInvalidValue } from '../905/216495';
import { kl } from '../905/275640';
import { trackEventAnalytics } from '../905/449184';
import { getFeatureFlags } from '../905/601108';
import { showTooltip } from '../905/765855';
import { getObservableOrFallback } from '../figma_app/84367';
import { isNullish } from '../figma_app/95419';
import { OU, vx } from '../figma_app/175258';
import { Z } from '../figma_app/221818';
import { M } from '../figma_app/634148';
import { sT } from '../figma_app/740163';
import { dG } from '../figma_app/753501';
import { a2 } from '../figma_app/762558';
import { AppStateTsApi, Axis, DiagramElementType, Fullscreen, LayoutSizingMode, LayoutTabType, SceneGraphHelpers } from '../figma_app/763686';
export function $$I3(e) {
  let t = useDispatch();
  let r = sT();
  let {
    bigNudgeAmount,
    smallNudgeAmount
  } = r;
  let _ = useCallback(e => {
    e.stopPropagation();
    let r = e.keyCode === KeyCodes.UP_ARROW ? '+' : '-';
    let n = e.shiftKey ? bigNudgeAmount : smallNudgeAmount;
    let i = `${r}${n}`;
    let a = e.currentTarget.closest('label') ?? e.currentTarget.closest('[data-tooltip]');
    let s = a?.getBoundingClientRect();
    s && t(showTooltip({
      target: {
        kind: ElementTypeEnum.TEXT,
        text: i
      },
      targetRect: s,
      position: PositionEnum.BELOW,
      hideAfterDelay: 200
    }));
  }, [t, bigNudgeAmount, smallNudgeAmount]);
  let m = function (e) {
    let t = useSelector(e => e.mirror.appModel.activeCanvasEditModeType === LayoutTabType.VECTOR);
    let r = useMemo(() => {
      class t extends M {
        getValueForNode(t) {
          return SceneGraphHelpers.getNodeTransformProperties(t.guid)[e];
        }
        setValueForNode(t, r) {
          permissionScopeHandler.user(`transform-change-${e}`, () => {
            try {
              SceneGraphHelpers.setNodeTransformProperties(t.guid, {
                [e]: r
              });
            } catch {}
          });
        }
      }
      return new t();
    }, [e]);
    let l = function (e) {
      let t = e === 'x' ? Axis.X : e === 'y' ? Axis.Y : void 0;
      return useMemo(() => {
        if (!isNullish(t)) {
          return scopeAwareFunction.user('apply-mixed-method-for-vector-network', e => {
            SceneGraphHelpers.applyMixedMathForSelectedVectorNetwork(t, e);
          });
        }
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
    let r = useSelector(e => e.mirror.appModel.onCanvasNameEditorInfo.mode);
    return useCallback((n, i) => {
      $$x7(e);
      r !== DiagramElementType.NONE && Fullscreen.hideOnCanvasNameEditor();
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
  let e = kl('stackHorizontalSize');
  let t = kl('stackVerticalSize');
  let r = kl('textAutoResize');
  let n = $$A0();
  let a = useSelector(e => {
    let t = e.mirror.selectionProperties.numSelectedByType;
    return t && vx(t, 'TEXT');
  });
  let o = i => {
    let o = (i === 'VERTICAL' ? t : e) !== LayoutSizingMode.FIXED;
    let l = a && (isInvalidValue(r) || r === 'WIDTH_AND_HEIGHT' || i === 'VERTICAL' && r === 'HEIGHT');
    return o || i === 'VERTICAL' && n || l;
  };
  return {
    widthIsAuto: !!o('HORIZONTAL'),
    heightIsAuto: !!o('VERTICAL')
  };
}
export function $$A0() {
  return useSelector(e => {
    let t = e.mirror.selectionProperties.numSelectedByType;
    return OU(t, ['LINE', 'WASHI_TAPE']);
  });
}
export function $$x7(e) {
  getFeatureFlags().ce_properties_panel_tracking && trackEventAnalytics('editor-transform-panel-change', {
    key: e
  });
  a2(e);
}
export function $$N1() {
  let e = getObservableOrFallback(AppStateTsApi.propertiesPanelState().shownTransformControls);
  return useMemo(() => new Z(e), [e]);
}
export function $$C5(e) {
  let t = getObservableOrFallback(AppStateTsApi.propertiesPanelState().shownTransformControls);
  return useMemo(() => new Z(t).getValue(e), [t, e]);
}
export function $$w2() {
  let e = getObservableOrFallback(AppStateTsApi.propertiesPanelState().enabledTransformControls);
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