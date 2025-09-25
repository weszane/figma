import { useCallback, useContext, useId, useMemo, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { jsx, jsxs } from 'react/jsx-runtime'
import { h as _$$h } from '../905/65944'
import { permissionScopeHandler } from '../905/189185'
import { B, C } from '../905/330741'
import { deepEqual } from '../905/382883'
import { FormattedInputContext } from '../905/427409'
import { d9 } from '../905/579068'
import { Point } from '../905/736624'
import { VZ } from '../905/959568'
import { Ek, u3, y$ } from '../figma_app/152690'
import { yesNoTrackingEnum } from '../figma_app/198712'
import { eF, MH } from '../figma_app/394327'
import { fullscreenValue } from '../figma_app/455680'
import { OperationType, VariableDataType, VariableResolvedDataType, VariablesBindings } from '../figma_app/763686'
import { u as _$$u, bL, BQ, mm } from '../figma_app/852050'
import { Yi } from '../figma_app/933328'
import { ND, Ti } from '../figma_app/960196'

/**
 * Creates a variable data object for a boolean expression that checks if a value is truthy.
 * Original function name: $$I5
 * @param e - The input value or variable reference.
 * @returns A VariableDataType.EXPRESSION object with IS_TRUTHY operation.
 */
export function createBooleanExpressionVariable(e: any): {
  type: VariableDataType.EXPRESSION
  resolvedType: VariableResolvedDataType.BOOLEAN
  value: {
    expressionFunction: OperationType.IS_TRUTHY
    expressionArguments: any[]
  }
} {
  return {
    type: VariableDataType.EXPRESSION,
    resolvedType: VariableResolvedDataType.BOOLEAN,
    value: {
      expressionFunction: OperationType.IS_TRUTHY,
      expressionArguments: ['variable' in e && 'variableId' in e ? y$(e.variable.resolvedType, e.variableId) : e],
    },
  }
}

/**
 * Hook for managing variable picker state and actions for fields.
 * Original function name: $$S2
 * @param e - Fields configuration.
 * @param t - Resolved type.
 * @param r - Optional custom onVariableSelected handler.
 * @param n - Optional configuration object.
 * @param o - Optional onExpressionSubmitted handler.
 * @param l - Optional onComponentPropSelected handler.
 * @param d - Optional initial picker position function.
 * @param p - Responsive text style variant index.
 * @returns Array containing show state, show function, onVariableSelected, onExpressionSubmitted, onComponentPropSelected.
 */
export function useVariablePickerForFields(
  e: any,
  t: VariableResolvedDataType,
  r: ((variable: any) => void) | undefined,
  n: {
    mapVariableIdToTypedValue?: (args: { variable: any, variableId: string }) => any
    metadata?: any
    requestedTypes?: VariableResolvedDataType[]
    variableFilters?: any
  } | undefined,
  o: any,
  l: any,
  d: (() => Point) | undefined,
  p: number,
): [boolean, (element: HTMLElement, options?: any) => void, (variable: any, options?: any) => void, any, any] {
  const { mapVariableIdToTypedValue } = n ?? {}
  const h = useDispatch<AppDispatch>()
  const g = useSelector((e: any) => e.variablePickerShown)
  const { updateVariableConsumption, clearVariableConsumption } = u3(e)
  const T = useCallback((e: any, n?: any) => {
    if (r) {
      r(e)
    }
    else if (e) {
      h(Yi({
        item: e,
        callback: (r: string) => {
          if (mapVariableIdToTypedValue) {
            updateVariableConsumption(mapVariableIdToTypedValue({ variable: e, variableId: r }), n)
          }
          else {
            updateVariableConsumption(y$(t, r), n)
          }
        },
      }))
    }
    else {
      clearVariableConsumption()
    }
  }, [r, h, updateVariableConsumption, t, clearVariableConsumption, mapVariableIdToTypedValue])
  const isShown = g.isShown && g.type === 'variable-picker-fields' && deepEqual(g.fields, e) && g.responsiveTextStyleVariantIndex === p && n?.metadata === g.metadata
  const showPicker = useCallback((r: HTMLElement, i?: any) => {
    const a = i?.initialPosition ?? d?.() ?? VZ(r, d9, false)
    h(C({
      type: 'variable-picker-fields',
      isShown: true,
      initialPosition: a,
      fields: e,
      resolvedType: t,
      requestedTypes: n?.requestedTypes,
      currentFieldValue: i?.currentFieldValue,
      onVariableSelected: T,
      metadata: n?.metadata,
      variableFilters: n?.variableFilters,
      onExpressionSubmitted: undefined,
      onComponentPropSelected: l,
      responsiveTextStyleVariantIndex: p,
    }))
  }, [d, h, e, t, n?.requestedTypes, n?.metadata, n?.variableFilters, T, l, p])
  return [isShown, showPicker, T, undefined, l]
}

/**
 * Hook for managing variable picker state and actions for aliasing.
 * Original function name: $$v1
 * @param e - Variable set ID.
 * @param t - Variable ID.
 * @param r - Mode ID.
 * @param n - Resolved type.
 * @returns Array containing show state, show function, onVariableSelected.
 */
export function useVariablePickerForAlias(
  e: string,
  t: string,
  r: string,
  n: VariableResolvedDataType,
): [boolean, (element: HTMLElement, options?: any) => void, (variable: any) => void] {
  const { setVariableValueOrOverrideForMode } = mm()
  const m = useDispatch<AppDispatch>()
  const g = useSelector((e: any) => e.variablePickerShown)
  const f = useCallback((i: any) => {
    if (i) {
      m(Yi({
        item: i,
        callback: (i: string) => {
          setVariableValueOrOverrideForMode(e, t, r, y$(n, i), yesNoTrackingEnum.YES, 'alias-variable')
        },
      }))
    }
    else {
      if (permissionScopeHandler.user('unalias-variable', () => VariablesBindings.detachVariableValueForMode(t, r, null))) {
        fullscreenValue.triggerAction('commit')
      }
    }
  }, [m, n, setVariableValueOrOverrideForMode, e, t, r])
  const isShown = g.isShown && g.type === 'variable-picker-alias' && g.variableID === t && g.modeID === r
  const showPicker = useCallback((e: HTMLElement, i?: any) => {
    const a = e.getBoundingClientRect()
    m(C({
      type: 'variable-picker-alias',
      isShown: true,
      initialPosition: new Point(a.left, a.bottom),
      initialView: i?.initialView,
      variableID: t,
      modeID: r,
      resolvedType: n,
      onVariableSelected: f,
    }))
  }, [t, r, n, m, f])
  return [isShown, showPicker, f]
}

/**
 * Wrapper component for formatted input.
 * Original function name: $$A4
 * @param children - Child components.
 * @param props - Other props passed to the internal component.
 * @returns JSX element.
 */
export function FormattedInputWithWrapper({ children, ...props }: { children: React.ReactNode, [key: string]: any }) {
  return jsx(FormattedInputProvider, { ...props, children })
}

/**
 * Internal provider component for formatted input context.
 * Original function name: x
 * @param fields - Fields configuration.
 * @param children - Child components.
 * @param resolvedType - Resolved type.
 * @param requestedTypes - Requested types.
 * @param editingStyleGuid - Editing style GUID.
 * @param responsiveTextStyleVariantIndex - Responsive text style variant index.
 * @param initialPickerPosition - Initial picker position function.
 * @param onVariableSelected - Handler for variable selection.
 * @param onExpressionSubmitted - Handler for expression submission.
 * @param onComponentPropSelected - Handler for component prop selection.
 * @returns JSX element.
 */
function FormattedInputProvider({
  fields,
  children,
  resolvedType,
  requestedTypes,
  editingStyleGuid,
  responsiveTextStyleVariantIndex,
  initialPickerPosition,
  onVariableSelected,
  onExpressionSubmitted,
  onComponentPropSelected,
}: {
  fields: string[]
  children: React.ReactNode
  resolvedType: VariableResolvedDataType
  requestedTypes?: VariableResolvedDataType[]
  editingStyleGuid?: string
  responsiveTextStyleVariantIndex?: number
  initialPickerPosition?: () => Point
  onVariableSelected?: (variable: any) => void
  onExpressionSubmitted?: any
  onComponentPropSelected?: any
}) {
  const { consumedVariable } = u3(fields, editingStyleGuid, responsiveTextStyleVariantIndex)
  const h = MH(consumedVariable)
  const m = _$$u(h ?? undefined)
  const g = !!m && eF(m)
  const y = Ek(fields)
  const [T, I, v, A, x] = useVariablePickerForFields(fields, resolvedType, onVariableSelected, { requestedTypes }, onExpressionSubmitted, onComponentPropSelected, initialPickerPosition, responsiveTextStyleVariantIndex ?? 0)
  const contextValue = useMemo(() => ({
    showBindingUI: I,
    isShowingBindingUI: T,
    onVariableSelected: v,
    boundVariableId: h,
    isBoundVariableDeleted: g,
    onExpressionSubmitted: A,
    onComponentPropSelected: x,
    mismatchedValue: y,
  }), [I, T, v, h, g, A, y, x])
  return jsx(FormattedInputContext.Provider, { value: contextValue, children })
}

/**
 * Provider component for variable alias binding.
 * Original function name: $$N7
 * @param variableSetId - Variable set ID.
 * @param variableID - Variable ID.
 * @param modeID - Mode ID.
 * @param children - Child components.
 * @param resolvedType - Resolved type.
 * @returns JSX element.
 */
export function VariableAliasProvider({
  variableSetId,
  variableID,
  modeID,
  children,
  resolvedType,
}: {
  variableSetId: string
  variableID: string
  modeID: string
  children: React.ReactNode
  resolvedType: VariableResolvedDataType
}) {
  const [o, l, d] = useVariablePickerForAlias(variableSetId, variableID, modeID, resolvedType)
  const c = bL(variableID, modeID)
  const u = MH(c ?? null)
  const p = _$$u(u ?? undefined)
  const h = !!p && eF(p)
  const contextValue = useMemo(() => ({
    showBindingUI: l,
    isShowingBindingUI: o,
    onVariableSelected: d,
    boundVariableId: u,
    isBoundVariableDeleted: h,
  }), [l, o, d, u, h])
  return jsx(FormattedInputContext.Provider, { value: contextValue, children })
}

/**
 * Component for variable bindings dropdown.
 * Original function name: $$C0
 * @param children - Child components.
 * @param pickerType - Picker type.
 * @param resolvedType - Resolved type.
 * @param variableValue - Variable value.
 * @param onVariableValueChange - Handler for value change.
 * @param onVariableSelected - Handler for variable selection.
 * @returns JSX element.
 */
export function VariableBindingsDropdown({
  children,
  pickerType = 'create-modal',
  resolvedType,
  variableValue,
  onVariableValueChange,
  onVariableSelected,
}: {
  children: React.ReactNode
  pickerType?: string
  resolvedType: VariableResolvedDataType
  variableValue: any
  onVariableValueChange: (value: any) => void
  onVariableSelected: (variable: any) => void
}) {
  const c = useRef<Point>()
  const [u, p] = useState(false)
  const h = useCallback(() => p(false), [])
  const m = useCallback((e: HTMLElement) => {
    const t = e.getBoundingClientRect()
    c.current = new Point(t.left, t.bottom)
    p(true)
  }, [])
  const y = variableValue.type === VariableDataType.ALIAS ? variableValue.value : undefined
  const b = _$$u(y)
  const I = !!b && eF(b)
  const contextValue = useMemo(() => ({
    showBindingUI: m,
    isShowingBindingUI: u,
    boundVariableId: y ?? null,
    isBoundVariableDeleted: I,
  }), [m, u, y, I])
  const v = BQ(y)

  const renderPicker = () => {
    if (!u)
      return null
    if (variableValue.resolvedType !== VariableResolvedDataType.COLOR) {
      return jsx(Ti, {
        resolvedType,
        onVariableSelected,
        onClose: h,
        initialPosition: c.current,
        pickerType,
      })
    }
    if (variableValue.type === VariableDataType.COLOR) {
      return jsx(_$$h, {
        disabledVariableIds: new Set(),
        color: variableValue.value,
        boundVariable: null,
        initialPosition: c.current,
        recordingKey: 'variableBindingsDropdown',
        onChange: (e: any) => onVariableValueChange({
          type: VariableDataType.COLOR,
          resolvedType: VariableResolvedDataType.COLOR,
          value: { ...e, a: 1 },
        }),
        onVariableChange: onVariableSelected,
        onClose: h,
      })
    }
    if (variableValue.type === VariableDataType.ALIAS) {
      return jsx(_$$h, {
        disabledVariableIds: new Set(),
        color: v.value,
        boundVariable: b,
        initialPosition: c.current,
        recordingKey: 'variableBindingsDropdown',
        onChange: (e: any) => onVariableValueChange({
          type: VariableDataType.COLOR,
          resolvedType: VariableResolvedDataType.COLOR,
          value: { ...e, a: 1 },
        }),
        onVariableChange: onVariableSelected,
        onClose: h,
      })
    }
    return null
  }

  return jsxs(FormattedInputContext.Provider, {
    value: contextValue,
    children: [children, renderPicker()],
  })
}

/**
 * Provider component for controlled variable picker.
 * Original function name: $$w6
 * @param boundVariableId - Bound variable ID.
 * @param resolvedType - Resolved type.
 * @param requestedTypes - Requested types.
 * @param initialPickerPosition - Initial picker position function.
 * @param onVariableSelected - Handler for variable selection.
 * @param onComponentPropSelected - Handler for component prop selection.
 * @param children - Child components.
 * @returns JSX element.
 */
export function ControlledVariablePickerProvider({
  boundVariableId,
  resolvedType,
  requestedTypes,
  initialPickerPosition,
  onVariableSelected,
  onComponentPropSelected,
  children,
}: {
  boundVariableId?: string
  resolvedType: VariableResolvedDataType
  requestedTypes?: VariableResolvedDataType[]
  initialPickerPosition?: () => Point
  onVariableSelected: (variable: any) => void
  onComponentPropSelected?: any
  children: React.ReactNode
}) {
  const p = _$$u(boundVariableId ?? undefined)
  const h = !!p && eF(p)
  const [m, g, y] = useControlledVariablePicker({
    resolvedType,
    requestedTypes,
    boundVariableId,
    initialPickerPosition,
    onVariableSelected,
    onComponentPropSelected,
  })
  return jsx(FormattedInputContext.Provider, {
    value: {
      boundVariableId: boundVariableId ?? null,
      isBoundVariableDeleted: h,
      isShowingBindingUI: m,
      showBindingUI: g,
      onVariableSelected,
      onComponentPropSelected,
      variableBindingContextKey: y,
    },
    children,
  })
}

/**
 * Hook for controlled variable picker.
 * Extracted from ControlledVariablePickerProvider for clarity.
 * @param resolvedType - Resolved type.
 * @param requestedTypes - Requested types.
 * @param boundVariableId - Bound variable ID.
 * @param initialPickerPosition - Initial picker position function.
 * @param onVariableSelected - Handler for variable selection.
 * @param onComponentPropSelected - Handler for component prop selection.
 * @returns Array containing show state, show function, key.
 */
function useControlledVariablePicker({
  resolvedType,
  requestedTypes,
  boundVariableId,
  initialPickerPosition,
  onVariableSelected,
  onComponentPropSelected,
}: {
  resolvedType: VariableResolvedDataType
  requestedTypes?: VariableResolvedDataType[]
  boundVariableId?: string
  initialPickerPosition?: () => Point
  onVariableSelected: (variable: any) => void
  onComponentPropSelected?: any
}): [boolean, (element: HTMLElement, options?: any) => void, string] {
  const l = useId()
  const c = useDispatch()
  const p = useSelector((e: any) => e.variablePickerShown)
  const isShown = p.isShown && p.type === 'variable-picker-controlled' && p.key === l
  const showPicker = useCallback((i: HTMLElement, a?: any) => {
    const rect = i.getBoundingClientRect()
    c(C({
      type: 'variable-picker-controlled',
      isShown: true,
      initialPosition: a?.initialPosition ?? initialPickerPosition?.() ?? new Point(rect.left, rect.bottom),
      initialView: a?.initialView,
      variableID: boundVariableId,
      key: l,
      resolvedType,
      requestedTypes,
      onVariableSelected,
      onComponentPropSelected,
    }))
  }, [c, boundVariableId, l, resolvedType, requestedTypes, initialPickerPosition, onVariableSelected, onComponentPropSelected])
  return [isShown, showPicker, l]
}

/**
 * Component for rendering the variable picker.
 * Original function name: $$O3
 * @param variableScope - Variable scope.
 * @param onPickerClose - Handler for picker close.
 * @returns JSX element or null.
 */
export function VariablePicker({
  variableScope,
  onPickerClose,
}: {
  variableScope?: string
  onPickerClose?: () => void
}) {
  const r = useDispatch()
  const s = useCallback(() => {
    onPickerClose?.()
    r(B())
  }, [r, onPickerClose])
  const o = useContext(FormattedInputContext)?.isShowingBindingUI
  const l = useContext(FormattedInputContext)?.variableBindingContextKey
  const d = useSelector((e: any) => e.variablePickerShown)
  if (o && d.isShown && d.type === 'variable-picker-controlled' && d.key === l) {
    return jsx(ND, {
      ...d,
      onClose: s,
      variableScopes: variableScope ? new Set([variableScope]) : undefined,
    })
  }
  return null
}

export const Cr = VariableBindingsDropdown
export const Gx = useVariablePickerForAlias
export const JV = useVariablePickerForFields
export const V5 = VariablePicker
export const _X = FormattedInputWithWrapper
export const eT = createBooleanExpressionVariable
export const hu = ControlledVariablePickerProvider
export const nE = VariableAliasProvider
