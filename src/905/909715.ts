import classNames from 'classnames'
import { forwardRef } from 'react'
import { jsx, jsxs } from 'react/jsx-runtime'
import { w } from '../905/442596'
import { l as _$$l } from '../905/479687'
import { CheckboxPrimitive } from '../905/549791'
import { defaultComponentAttribute } from '../905/577641'

export interface ManuallyLabeledCheckboxProps extends React.ComponentProps<typeof CheckboxPrimitive> {
  /** Whether the checkbox should appear muted */
  muted?: boolean
  /** Visual variant of the checkbox */
  variant?: 'default' | 'muted'
}

/**
 * A checkbox component with manual labeling that includes custom visual elements
 * @param props - The props for the ManuallyLabeledCheckbox component
 * @param ref - Ref to the underlying checkbox element
 */
export const ManuallyLabeledCheckbox = forwardRef<HTMLButtonElement, ManuallyLabeledCheckboxProps>(({
  muted = false,
  variant = 'default',
  disabled,
  className,
  ...restProps
}, ref) => {
  const isMuted = muted || variant === 'muted'

  return jsxs('span', {
    ...defaultComponentAttribute,
    'className': 'manually-labeled-checkbox__root__Mo9F-',
    'data-disabled': disabled ? true : undefined,
    'children': [
      jsx(CheckboxPrimitive, {
        ref,
        disabled,
        className: classNames(
          'manually-labeled-checkbox__checkbox__qNblJ',
          {
            'manually-labeled-checkbox__muted__kzSni': isMuted,
          },
        ),
        ...restProps,
      }),
      jsxs('span', {
        className: 'manually-labeled-checkbox__visuals__Be3AE',
        children: [
          jsx(w, {
            className: 'manually-labeled-checkbox__iconMixed__B-Yp4',
          }),
          jsx(_$$l, {
            className: 'manually-labeled-checkbox__iconCheck__tUMFi',
          }),
        ],
      }),
    ],
  })
})

ManuallyLabeledCheckbox.displayName = 'ManuallyLabeledCheckbox'

/** @deprecated Use ManuallyLabeledCheckbox instead */
export const W = ManuallyLabeledCheckbox
