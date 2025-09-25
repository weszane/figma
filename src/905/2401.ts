import type { SessionLocalID } from '../905/871411'
import { useCallback, useContext, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { jsx } from 'react/jsx-runtime'
import { calculatePickerPosition } from '../905/67286'
import { hf, Kk, KY } from '../905/71683'
import { KindEnum } from '../905/129884'
import { permissionScopeHandler } from '../905/189185'
import { isInvalidValue } from '../905/216495'
import { getI18nString } from '../905/303541'
import { o as SVG } from '../905/347208'
import { FormattedInputContext } from '../905/427409'
import { conditionalWrapper } from '../905/579635'
import { sessionLocalIDToString } from '../905/871411'
import { LengthInput } from '../figma_app/178475'
import { FormattedInputWithWrapper } from '../figma_app/260445'
import { Fullscreen, VariableResolvedDataType } from '../figma_app/763686'
import { FormattedInputWrapper } from '../figma_app/841644'
import { generateRecordingKey } from '../figma_app/878298'
import { Oe } from '../figma_app/933328'

/**
 * Props for the ParagraphSpacingInput component (originally $$I0).
 */
interface ParagraphSpacingInputProps {
  paragraphSpacing: number | undefined
  editingStyleGuid: SessionLocalID | undefined
  rowElementRef: React.RefObject<HTMLElement>
  isDisabled: boolean
  smallNudgeAmount: number
  bigNudgeAmount: number
  recordingKey: string
  onChange: (value: number | undefined) => void
  disableVariables: boolean
  responsiveTextStyleVariantIndex: number | undefined
}

/**
 * Props for the VariableBindingInputWrapper component (originally E).
 */
interface VariableBindingInputWrapperProps {
  inputClassName: string
  currentFieldValue: number | undefined
  isInStyleModal: boolean
  rowElementRef: React.RefObject<HTMLElement>
  recordingKey: string
  children: React.ReactNode
  controlRef: React.RefObject<HTMLElement>
}

/**
 * Component for handling paragraph spacing input with optional variable binding (originally $$I0).
 * @param props - The props for the component.
 */
export function ParagraphSpacingInput({
  paragraphSpacing: e,
  editingStyleGuid: t,
  rowElementRef: i,
  isDisabled: c,
  smallNudgeAmount: _,
  bigNudgeAmount: y,
  recordingKey: I,
  onChange: x,
  disableVariables: S,
  responsiveTextStyleVariantIndex: w,
}: ParagraphSpacingInputProps) {
  const dispatch = useDispatch<AppDispatch>()
  const refer = useRef<HTMLElement>(null)

  // Callback for handling variable selection (originally k).
  const handleVariableSelected = useCallback(async (variableId: string | null) => {
    if (w === undefined)
      return

    if (variableId) {
      const resolvedValue = await dispatch(Oe(variableId))
      permissionScopeHandler.user('editVariantVCMForTextStyleNode', () => {
        Fullscreen.editVariantVCMForTextStyleNode(sessionLocalIDToString(t), w, 'PARAGRAPH_SPACING', resolvedValue)
      })
    }
    else {
      permissionScopeHandler.user('editVariantVCMForTextStyleNode', () => {
        Fullscreen.clearVariantVCMFieldForTextStyleNode(sessionLocalIDToString(t), w, 'PARAGRAPH_SPACING')
      })
    }
  }, [dispatch, t, w])

  return jsx(conditionalWrapper, {
    condition: !S,
    wrapper: (r: React.ReactNode) => jsx(FormattedInputWithWrapper, {
      fields: ['PARAGRAPH_SPACING'],
      resolvedType: VariableResolvedDataType.FLOAT,
      editingStyleGuid: t,
      responsiveTextStyleVariantIndex: w,
      onVariableSelected: w !== undefined ? handleVariableSelected : undefined,
      initialPickerPosition: () => calculatePickerPosition({
        inputRef: refer,
        rowRef: i,
        isInStyleModal: !!t,
      }) ?? null,
      children: jsx(VariableBindingInputWrapper, {
        inputClassName: hf,
        currentFieldValue: isInvalidValue(e) ? undefined : e,
        isInStyleModal: !!t,
        rowElementRef: i,
        recordingKey: I,
        controlRef: refer,
        children: r,
      }),
    }),
    children: jsx(LengthInput, {
      'bigNudgeAmount': y,
      'data-tooltip': getI18nString('fullscreen.type_panel.paragraph_spacing'),
      'data-tooltip-type': KindEnum.TEXT,
      'disabled': c,
      'dispatch': dispatch,
      'inputClassName': KY,
      'isTokenizable': true,
      'noBorderOnHover': true,
      'onValueChange': x,
      'recordingKey': I,
      'smallNudgeAmount': _,
      'value': e,
      'children': jsx('div', {
        className: Kk,
        children: jsx(SVG, {}),
      }),
    }),
  })
}

/**
 * Wrapper component for variable binding input (originally E).
 * @param props - The props for the component.
 */
function VariableBindingInputWrapper({
  inputClassName: e,
  currentFieldValue: t,
  isInStyleModal: i,
  rowElementRef: a,
  recordingKey: s,
  children: o,
  controlRef: l,
}: VariableBindingInputWrapperProps) {
  const d = useContext(FormattedInputContext)

  // Callback for opening the picker (originally u).
  const handlePickerOpen = useCallback(() => {
    if (!a.current || !d)
      return
    d.showBindingUI(a.current, {
      currentFieldValue: t,
      initialPosition: calculatePickerPosition({
        inputRef: l,
        rowRef: a,
        isInStyleModal: i,
      }),
    })
  }, [d, t, i, a, l])

  return jsx(FormattedInputWrapper, {
    ref: l,
    inputClassName: e,
    currentFieldValue: t,
    isActive: d?.isShowingBindingUI ?? false,
    recordingKey: generateRecordingKey(s, 'variableControl'),
    onPickerOpen: handlePickerOpen,
    children: o,
  })
}

// Export the main component with the original export name (originally e = $$I0).
export const e = ParagraphSpacingInput
