import { useCallback, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { KeyCodes } from '../905/63728'
import { ElementTypeEnum, PositionEnum } from '../905/129884'
import { permissionScopeHandler, scopeAwareFunction } from '../905/189185'
import { isInvalidValue } from '../905/216495'
import { useSelectionPropertyValue } from '../905/275640'
import { trackEventAnalytics } from '../905/449184'
import { getFeatureFlags } from '../905/601108'
import { showTooltip } from '../905/765855'
import { getObservableOrFallback } from '../figma_app/84367'
import { isNullish } from '../figma_app/95419'
import { OU, vx } from '../figma_app/175258'
import { Z } from '../figma_app/221818'
import { M } from '../figma_app/634148'
import { getNudgeAmounts } from '../figma_app/740163'
import { stopPropagation } from '../figma_app/753501'
import { a2 } from '../figma_app/762558'
import { AppStateTsApi, Axis, DiagramElementType, Fullscreen, LayoutSizingMode, LayoutTabType, SceneGraphHelpers } from '../figma_app/763686'

// Original: $$I3
/**
 * Hook for handling transform input, including nudges, mixed math, and value changes.
 * @param params - Object containing key and setValue properties.
 * @returns Object with nudge amounts, handlers, and dispatch.
 */
export function useTransformInputHandler(params: {
  key: string
  setValue: (value: any, additional?: any) => void
}) {
  const dispatch = useDispatch<AppDispatch>()
  const {
    bigNudgeAmount,
    smallNudgeAmount,
  } = getNudgeAmounts()

  // Original: onMixedMathNudge from $$I3
  const onMixedMathNudge = useCallback((event: React.KeyboardEvent) => {
    event.stopPropagation()
    const sign = event.keyCode === KeyCodes.UP_ARROW ? '+' : '-'
    const amount = event.shiftKey ? bigNudgeAmount : smallNudgeAmount
    const text = `${sign}${amount}`
    const targetElement = event.currentTarget.closest('label') ?? event.currentTarget.closest('[data-tooltip]')
    const rect = targetElement?.getBoundingClientRect()
    if (rect) {
      dispatch(showTooltip({
        target: {
          kind: ElementTypeEnum.TEXT,
          text,
        },
        targetRect: rect,
        position: PositionEnum.BELOW,
        hideAfterDelay: 200,
      }))
    }
  }, [dispatch, bigNudgeAmount, smallNudgeAmount])

  // Original: mixed math logic from $$I3
  const isVectorEditMode = useSelector<AppState>(state => state.mirror.appModel.activeCanvasEditModeType === LayoutTabType.VECTOR)
  const transformHandler = useMemo(() => {
    class TransformHandler extends M {
      getValueForNode(node: any) {
        return SceneGraphHelpers.getNodeTransformProperties(node.guid)[params.key as any]
      }

      setValueForNode(node: any, value: any) {
        permissionScopeHandler.user(`transform-change-${params.key}`, () => {
          try {
            SceneGraphHelpers.setNodeTransformProperties(node.guid, {
              [params.key]: value,
            })
          }
          catch {
            // Ignore errors
          }
        })
      }
    }
    return new TransformHandler()
  }, [params.key])
  const axis = params.key === 'x' ? Axis.X : params.key === 'y' ? Axis.Y : undefined
  const mixedMathCallback = useMemo(() => {
    if (!isNullish(axis)) {
      return scopeAwareFunction.user('apply-mixed-method-for-vector-network', (value: any) => {
        SceneGraphHelpers.applyMixedMathForSelectedVectorNetwork(axis, value)
      })
    }
  }, [axis])
  const transformConfig = useMemo(() => {
    if (isVectorEditMode && mixedMathCallback) {
      return {
        mixedMathCallback,
      }
    }
    else {
      return {
        mixedMathHandler: transformHandler,
      }
    }
  }, [isVectorEditMode, transformHandler, mixedMathCallback])

  // Original: onValueChange from $$I3
  const canvasNameEditorMode = useSelector<AppState>(state => state.mirror.appModel.onCanvasNameEditorInfo.mode)
  const onValueChange = useCallback((value: any, additional?: any) => {
    trackTransformChange(params.key)
    if (canvasNameEditorMode !== DiagramElementType.NONE) {
      Fullscreen.hideOnCanvasNameEditor()
    }
    params.setValue(value, additional)
  }, [params.key, canvasNameEditorMode, params.setValue])
  return {
    bigNudgeAmount,
    smallNudgeAmount,
    ...transformConfig,
    dispatch,
    onValueChange,
    onMixedMathNudge,
    onKeyUp: stopPropagation,
  }
}

// Original: $$S6
/**
 * Returns nudge amounts and multipliers for scrubbing and wheeling.
 * @returns Object with nudge amounts and multipliers.
 */
export function getNudgeMultipliers() {
  const {
    smallNudgeAmount,
    bigNudgeAmount,
  } = getNudgeAmounts()
  return {
    smallNudgeAmount,
    bigNudgeAmount,
    wheelMultiplier: smallNudgeAmount,
    scrubMultiplier: smallNudgeAmount,
  }
}

// Original: $$v4
/**
 * Hook to determine if width and height are auto-sized based on layout and selection.
 * @returns Object with widthIsAuto and heightIsAuto flags.
 */
export function useAutoSizingFlags() {
  const stackHorizontalSize = useSelectionPropertyValue('stackHorizontalSize')
  const stackVerticalSize = useSelectionPropertyValue('stackVerticalSize')
  const textAutoResize = useSelectionPropertyValue('textAutoResize')
  const isLineOrWashiTapeSelected = isLineOrWashiTapeSelectedSelector()
  const hasTextSelected = useSelector<AppState>((state) => {
    const numSelectedByType = state.mirror.selectionProperties.numSelectedByType
    return numSelectedByType && vx(numSelectedByType, 'TEXT')
  })
  const isAuto = (direction: 'HORIZONTAL' | 'VERTICAL') => {
    const sizeMode = direction === 'VERTICAL' ? stackVerticalSize : stackHorizontalSize
    const isFixed = sizeMode !== LayoutSizingMode.FIXED
    const textCondition = hasTextSelected && (isInvalidValue(textAutoResize) || textAutoResize === 'WIDTH_AND_HEIGHT' || direction === 'VERTICAL' && textAutoResize === 'HEIGHT')
    return isFixed || direction === 'VERTICAL' && isLineOrWashiTapeSelected || textCondition
  }
  return {
    widthIsAuto: !!isAuto('HORIZONTAL'),
    heightIsAuto: !!isAuto('VERTICAL'),
  }
}

// Original: $$A0
/**
 * Selector to check if lines or washi tapes are selected.
 * @returns Boolean indicating if lines or washi tapes are selected.
 */
export function isLineOrWashiTapeSelectedSelector() {
  return useSelector<AppState>((state) => {
    const numSelectedByType = state.mirror.selectionProperties.numSelectedByType
    return OU(numSelectedByType, ['LINE', 'WASHI_TAPE'])
  })
}

// Original: $$x7
/**
 * Tracks transform change analytics and updates state.
 * @param key - The transform key being changed.
 */
export function trackTransformChange(key: string) {
  if (getFeatureFlags().ce_properties_panel_tracking) {
    trackEventAnalytics('editor-transform-panel-change', {
      key,
    })
  }
  a2(key)
}

// Original: $$N1
/**
 * Creates an observable for shown transform controls.
 * @returns New Z instance for shown transform controls.
 */
export function createShownTransformControlsObservable() {
  const observable = getObservableOrFallback(AppStateTsApi.propertiesPanelState().shownTransformControls)
  return useMemo(() => new Z(observable), [observable])
}

// Original: $$C5
/**
 * Gets the value of a shown transform control.
 * @param key - The control key.
 * @returns Value of the transform control.
 */
export function getShownTransformControl(key: string) {
  const observable = getObservableOrFallback(AppStateTsApi.propertiesPanelState().shownTransformControls)
  return useMemo(() => new Z(observable).getValue(key), [observable, key])
}

// Original: $$w2
/**
 * Creates an observable for enabled transform controls.
 * @returns New Z instance for enabled transform controls.
 */
export function createEnabledTransformControlsObservable() {
  const observable = getObservableOrFallback(AppStateTsApi.propertiesPanelState().enabledTransformControls)
  return useMemo(() => new Z(observable), [observable])
}

// Refactored exports with descriptive names
export const AY = isLineOrWashiTapeSelectedSelector
export const Df = createShownTransformControlsObservable
export const Jo = createEnabledTransformControlsObservable
export const KG = useTransformInputHandler
export const M9 = useAutoSizingFlags
export const Qr = getShownTransformControl
export const Xs = getNudgeMultipliers
export const rn = trackTransformChange
