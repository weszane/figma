import classNames from 'classnames'
import { forwardRef } from 'react'
import { jsx, jsxs } from 'react/jsx-runtime'
import { Description } from '../905/21985'
import { useSelectionProvider } from '../905/751750'
import { generateDescId, generateInputId } from '../905/786321'
import { ManuallyLabeledCheckbox } from '../905/909715'

interface CheckboxProps {
  label?: React.ReactNode
  className?: string
  children?: React.ReactNode
  htmlAttributes?: React.HTMLAttributes<HTMLDivElement>
  [key: string]: any
}

/**
 * Checkbox component that provides a labeled checkbox with optional description.
 * Uses selection provider for generating unique IDs and managing selection state.
 *
 * @param props - CheckboxProps
 * @returns JSX.Element
 */
export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(({
  label,
  className,
  children,
  htmlAttributes,
  ...checkboxProps
}, ref) => {
  const hasDescription = !!children
  const [selectionId, SelectionProvider] = useSelectionProvider()
  const inputId = generateInputId(selectionId)
  const descriptionId = hasDescription ? generateDescId(selectionId) : undefined

  return jsx(SelectionProvider, {
    value: selectionId,
    children: jsxs('div', {
      className: classNames('checkbox__root__L-PwP', className),
      children: [
        jsx(ManuallyLabeledCheckbox, {
          ...checkboxProps,
          'id': inputId,
          'ref': ref,
          'htmlAttributes': htmlAttributes,
          'aria-describedby': descriptionId,
        }),
        label,
        hasDescription && jsx(Description, {
          className: 'checkbox__description__kr0Zj',
          children,
        }),
      ],
    }),
  })
})

Checkbox.displayName = 'Checkbox'
export const S = Checkbox
