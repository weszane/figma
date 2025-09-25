import { noop } from 'lodash-es'
import { createContext, forwardRef, useContext, useLayoutEffect, useState } from 'react'
import { jsx } from 'react/jsx-runtime'
import { InputComponent } from '../905/185998'
import { Stepper } from '../905/294086'

import { useFormattedTextInput } from '../905/427996'
import { hasIncrementBy } from '../905/687992'
import { setupRefUpdater } from '../905/823680'

/**
 * Context for formatted input value.
 * @originalName c
 */
export const FormattedInputValueContext = createContext(null)

/**
 * Context for formatted input setter.
 * @originalName u
 */
export const FormattedInputSetterContext = createContext(noop)

/**
 * Provider for formatted input context.
 * @param props - React children.
 * @originalName p
 */
export function FormattedInputProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [value, setValue] = useState(null)
  return jsx(FormattedInputValueContext.Provider, {
    value,
    children: jsx(FormattedInputSetterContext.Provider, {
      value: setValue,
      children,
    }),
  })
}
FormattedInputProvider.displayName = 'FormattedInputContext'

/**
 * Root component for formatted input.
 * @originalName $$h1
 */
export const FormattedInputRoot = forwardRef((props, ref) =>
  jsx(FormattedInputProvider, {
    children: jsx(InputComponent.Root, {
      ...props,
      ref,
    }),
  }),
)
FormattedInputRoot.displayName = 'FormattedInput.Root'

/**
 * Field component for formatted input.
 * @originalName g
 */
export const FormattedInputField = forwardRef((props, ref) => {
  const setValue = useContext(FormattedInputSetterContext)
  const formattedInput = useFormattedTextInput(props)
  useLayoutEffect(() => setValue(formattedInput), [formattedInput])
  const { inputProps } = formattedInput
  const mergedRef = setupRefUpdater(ref, inputProps.ref)
  return jsx(InputComponent, {
    ...inputProps,
    ref: mergedRef,
  })
})
FormattedInputField.displayName = 'FormattedInput.Field'

/**
 * Stepper component for formatted input.
 * @originalName FormattedInput.Stepper
 */
export const FormattedInputStepper = forwardRef((props, ref) => {
  const context = useContext(FormattedInputValueContext)
  if (
    context
    && !context.inputProps.disabled
    && hasIncrementBy(context.formatter)
  ) {
    return jsx(Stepper, {
      ref,
      value: context.value,
      formatter: context.formatter,
      getStringValue: context.getStringValue,
      onChange: value =>
        context.onChange(value, {
          commit: true,
          source: 'stepper',
        }),
      onChangeRestricted: context.onChangeRestricted,
    })
  }
  return null
})
FormattedInputStepper.displayName = 'FormattedInput.Stepper'

// Export aliases for backward compatibility
export const D0 = FormattedInputField
export const bL = FormattedInputRoot
