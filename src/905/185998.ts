import classNames from 'classnames'
import { forwardRef } from 'react'
import { jsx } from 'react/jsx-runtime'
import { InputPrimitive } from '../905/246212'
import { useDebouncedValue } from '../905/850310'
import { identity } from '../905/893109'
/**
 * Input component styles and classnames.
 * Original variable names: c, u, $$p, m, h, g, f, n
 */
export const inputMdClass = 'input__md__8Ieqg'
export const inputLgClass = 'input__lg__8bKGi'
export const inputRootClass = 'input__root__zuNvf'
export const inputInputClass = 'input__input__fmfv0'
export const inputSpecificityHackClass = 'input__specificity-hack__mgE8y'
export const inputGroupClass = 'input__group__tnF8A'

/**
 * Mapping of input sizes to classnames.
 * Original variable name: f
 */
const inputSizeClassMap = {
  md: inputMdClass,
  lg: inputLgClass,
}

/**
 * Input component.
 * Original variable name: _
 */
/**
 * Input component.
 * Original variable name: _
 * Refactored to use jsx factory instead of JSX syntax.
 */
export const Input = forwardRef<HTMLInputElement, any>(
  ({ className, size = 'md', ...props }, ref) =>
    jsx(InputPrimitive, {
      ...props,
      ref,
      className: classNames(inputInputClass, inputSizeClassMap[size], className),
    }),
)
Input.displayName = 'Input'

/**
/**
 * Input.Root component.
 * Original variable name: A
 * Refactored to use jsx factory instead of JSX syntax.
 */
export const InputRoot = forwardRef<HTMLDivElement, any>(
  ({ size = 'md', colspan, className, ...props }, ref) =>
    jsx(InputPrimitive.Root, {
      ...props,
      ref,
      className: classNames(inputRootClass, inputSizeClassMap[size], className),
      style: {
        [identity('--colspan')]: colspan,
      },
    }),
)
InputRoot.displayName = 'Input.Root'

/**
 * Input.Group component.
 * Original variable name: y
 * Refactored to use jsx factory instead of JSX syntax.
 */
export const InputGroup = forwardRef<HTMLDivElement, any>(
  ({ size = 'md', columns, ...props }, ref) =>
    jsx('div', {
      ...props,
      ref,
      className: classNames(inputGroupClass, inputSizeClassMap[size]),
      style: {
        [identity('--columns')]: columns,
      },
    }),
)
InputGroup.displayName = 'Input.Group'

/**
 * Input.Lazy component.
 * Original variable name: b
 * Refactored to use jsx factory instead of JSX syntax.
 */
/**
 * Input.Lazy component.
 * Original variable name: b
 * Refactored to use jsx factory instead of JSX syntax.
 * Ensures correct props shape for useDebouncedValue.
 */
export const InputLazy = forwardRef<any, any>((props, ref) => {
  // Destructure value and onChange for useDebouncedValue
  const { value, onChange, ...rest } = props
  const debouncedProps = useDebouncedValue({ value, onChange })
  return jsx(InputComponent, {
    ...rest,
    ...debouncedProps,
    ref,
  })
})
InputLazy.displayName = 'Input.Lazy'

/**
 * Main Input export with grouped subcomponents.
 * Original variable name: $$v0
 */
export const InputComponent = Object.assign(Input, {
  Root: InputRoot,
  Group: InputGroup,
  Lazy: InputLazy,
})

/**
 * Exported InputComponent as 'p'.
 * Original variable name: p
 */
export const p = InputComponent
