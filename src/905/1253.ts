import classNames from 'classnames'
import { useCallback, useMemo, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Fragment, jsx, jsxs } from 'react/jsx-runtime'
import { toggleInstanceSwapPicker } from '../905/8732'
import { PickerOptionType } from '../905/211621'
import { isInvalidValue, isValidValue } from '../905/216495'
import { renderI18nText } from '../905/303541'
import { getBasename } from '../905/309735'
import { r as SVG } from '../905/571562'
import { y as SVG1 } from '../905/582657'
import { ButtonPrimitive } from '../905/632989'
import { calculatePickerPositionBelow, calculatePickerPositionRight } from '../905/959568'
import { cssBuilderInstance } from '../cssbuilder/589278'
import { Flg } from '../figma_app/27776'
import { g as _$$g } from '../figma_app/60940'
import { T as _$$T } from '../figma_app/270091'
import { MB } from '../figma_app/525558'
import { stopPropagation } from '../figma_app/753501'
import { parsePxNumber } from '../figma_app/783094'
import { generateRecordingKey } from '../figma_app/878298'
// Original constants: S, $$w0, C, T
const PICKER_CONTENT_FILL_CLASS = 'instance_swap_toggle--pickerContentFill--8hXPb'
const INSTANCE_SWAP_TOGGLE_ID = 'instance-swap-toggle'
const PARSED_FLG = parsePxNumber(Flg)
const PARSED_5PX = parsePxNumber('5px')

/**
 * Calculates the position for the instance swap picker.
 * Original: W
 */
function calculatePickerPosition(toggleRef: React.RefObject<HTMLElement>, pickerWidth: number, initialPosition: string, instanceSwapPickerInitialHeight?: number, getInstanceSwapPickerPosition?: (el: HTMLElement, width: number, position: string, height?: number) => any) {
  if (!toggleRef.current)
    return undefined

  if (getInstanceSwapPickerPosition) {
    return getInstanceSwapPickerPosition(toggleRef.current, pickerWidth, initialPosition, instanceSwapPickerInitialHeight)
  }

  if (initialPosition === 'bottom') {
    return calculatePickerPositionBelow(toggleRef.current, pickerWidth, false)
  }

  return calculatePickerPositionRight({
    el: toggleRef.current,
    initialHeight: instanceSwapPickerInitialHeight ? instanceSwapPickerInitialHeight + PARSED_FLG + PARSED_5PX : instanceSwapPickerInitialHeight,
    verticalAlign: initialPosition === 'right-center',
  })
}

/**
 * Handles the click event for toggling the picker.
 * Original: K
 */
function handleToggleClick(dispatch: Dispatch, pickerID: string, position: any, disableToggle: boolean) {
  return (event: React.MouseEvent) => {
    if (disableToggle)
      return
    dispatch(toggleInstanceSwapPicker({
      initialPosition: position,
      id: pickerID,
      modal: true,
    }))
    event.stopPropagation()
  }
}

/**
 * Handles the key down event for toggling the picker.
 * Original: Y
 */
function handleToggleKeyDown(dispatch: Dispatch, pickerID: string, position: any) {
  return () => {
    dispatch(toggleInstanceSwapPicker({
      initialPosition: position,
      id: pickerID,
      modal: true,
      returnFocusToToggle: true,
    }))
  }
}

/**
 * InstanceSwapToggle component for handling instance swap picker functionality.
 * Original: $$k1
 */
export function InstanceSwapToggle(props: {
  fill: boolean
  pickerID: string
  pickerWidth: number
  shouldPerformSwapOnClick: boolean
  instanceSwapNode: any
  title: string
  onSwapCallback: () => void
  disableToggle: boolean
  preferredItems: any[]
  preferredValuesErrorComponent: any
  sceneGraph: any
  instanceSwapPickerInitialHeight?: number
  initialPosition?: string
  entrypointForLogging: string
  getInstanceSwapPickerPosition?: (el: HTMLElement, width: number, position: string, height?: number) => any
}) {
  const {
    fill,
    pickerID,
    pickerWidth,
    shouldPerformSwapOnClick,
    instanceSwapNode,
    title,
    onSwapCallback,
    disableToggle,
    preferredItems,
    preferredValuesErrorComponent,
    sceneGraph,
    instanceSwapPickerInitialHeight,
    initialPosition = 'bottom',
    entrypointForLogging,
    getInstanceSwapPickerPosition,
  } = props

  // Original: U
  const instanceGuid = instanceSwapNode && isValidValue(instanceSwapNode) ? instanceSwapNode.guid : ''

  // Original: B
  const selector = useMemo(_$$g, [])

  // Original: V
  const selectedInstance = useSelector((state: any) => selector(state, instanceGuid, sceneGraph))

  // Original: G
  const pickerState = useSelector((state: any) => state.instanceSwapPickerShown)

  // Original: z
  const dispatch = useDispatch<AppDispatch>()

  // Original: H
  const toggleRef = useRef<HTMLElement>(null)

  // Original: W (now calculatePickerPosition function)
  const pickerPosition = useCallback(
    () => calculatePickerPosition(toggleRef, pickerWidth, initialPosition, instanceSwapPickerInitialHeight, getInstanceSwapPickerPosition),
    [initialPosition, instanceSwapPickerInitialHeight, pickerWidth, getInstanceSwapPickerPosition],
  )

  // Original: K (now handleToggleClick function)
  const onClick = useCallback(
    handleToggleClick(dispatch, pickerID, pickerPosition(), disableToggle),
    [disableToggle, dispatch, pickerID, pickerPosition],
  )

  // Original: Y (now handleToggleKeyDown function)
  const onKeyDown = useCallback(
    handleToggleKeyDown(dispatch, pickerID, pickerPosition()),
    [dispatch, pickerID, pickerPosition],
  )

  // Original: q
  const buttonHandlers = MB({
    onClick,
    onKeyDown,
  })

  // Original: $
  const buttonClassName = useMemo(() => {
    if (pickerState.isShown && pickerState.id === pickerID) {
      return 'instance_swap_toggle--selectedInstanceSwapPickerButton--fNyIE'
    }
    if (disableToggle) {
      return 'instance_swap_toggle--disabledInstanceSwapPickerButton--MPdD6 instance_swap_toggle--instanceSwapPickerButton--Yyiv7'
    }
    return 'instance_swap_toggle--instanceSwapPickerButton--Yyiv7'
  }, [disableToggle, pickerState, pickerID])

  // Original: Z
  const selectedItems = useMemo(() => selectedInstance ? [selectedInstance] : [], [selectedInstance])

  const renderButtonContent = () => {
    if (instanceSwapNode && (isInvalidValue(instanceSwapNode) || instanceSwapNode.isAlive)) {
      return jsx('div', {
        className: classNames('instance_swap_toggle--pickerButtonContent--wSQrI ellipsis--ellipsis--Tjyfa', {
          [PICKER_CONTENT_FILL_CLASS]: fill,
        }),
        children: isInvalidValue(instanceSwapNode) ? renderI18nText('design_systems.instance_swap_picker.mixed') : getBasename(instanceSwapNode.name),
      })
    }
    return jsx('div', {
      className: classNames('instance_swap_toggle--pickerButtonPlaceholder--OIjte instance_swap_toggle--pickerButtonContent--wSQrI ellipsis--ellipsis--Tjyfa', {
        [PICKER_CONTENT_FILL_CLASS]: fill,
      }),
      children: renderI18nText('design_systems.instance_swap_picker.pick_instance'),
    })
  }

  return jsxs(Fragment, {
    children: [
      jsxs(ButtonPrimitive, {
        className: classNames(buttonClassName, cssBuilderInstance.alignLeft.$),
        ref: toggleRef,
        onClick: buttonHandlers,
        recordingKey: generateRecordingKey('instanceSwapToggle', pickerID),
        htmlAttributes: {
          'id': INSTANCE_SWAP_TOGGLE_ID,
          'onMouseDown': stopPropagation,
          'data-testid': 'instance-swap-toggle-button',
        },
        children: [
          jsx('span', {
            className: 'instance_swap_toggle--instanceIcon--I3hqd',
            children: jsx(SVG1, {}),
          }),
          renderButtonContent(),
          !disableToggle && jsx('span', {
            className: 'instance_swap_toggle--chevronIcon--4CRVk',
            children: jsx(SVG, {}),
          }),
        ],
      }),
      pickerState.isShown && pickerState.id === pickerID && jsx(_$$T, {
        entrypointForLogging,
        initialHeight: instanceSwapPickerInitialHeight,
        initialWidth: pickerWidth,
        onSwapCallback,
        pickerToggleRef: toggleRef,
        pickerType: PickerOptionType.INSTANCE_SWAP_PICKER,
        preferredItems,
        preferredValuesErrorComponent,
        recordingKey: generateRecordingKey('instanceSwapPicker', pickerID),
        selectedItems,
        shouldPerformSwapOnClick,
        title,
      }),
    ],
  })
}

// Original exports: D = $$w0, x = $$k1
export const D = INSTANCE_SWAP_TOGGLE_ID
export const x = InstanceSwapToggle
