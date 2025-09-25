import { forwardRef, useContext } from 'react'
import { jsx, jsxs } from 'react/jsx-runtime'
import { RadioPrimivteContext } from '../905/5729'
import { RadioPrimitiveRoot } from '../905/22449'
import { RadioPrimitiveOption } from '../905/34525'
import { getThemeContextOrDefault } from '../905/158740'
import { G8, hO, wO, xS } from '../905/434007'

/**
 * Radio icon configuration by UI version.
 * Original variable: $$c
 */
const radioIconConfig: Record<
  'ui2' | 'ui3',
  { viewbox: string, center: string, outerRadius: string, innerRadius: string }
> = {
  ui2: {
    viewbox: '0 0 32 32',
    center: '16',
    outerRadius: '6',
    innerRadius: '3',
  },
  ui3: {
    viewbox: '0 0 24 24',
    center: '12',
    outerRadius: '8',
    innerRadius: '4',
  },
}

/**
 * Props for ManuallyLabeledRadioRoot.
 * Original interface: ManuallyLabeledRadioRootProps
 */
export interface ManuallyLabeledRadioRootProps extends React.HTMLAttributes<HTMLDivElement> {
  'aria-labelledby'?: string
  /**
   * Additional HTML attributes for the root element.
   * Original prop: htmlAttributes
   */
  htmlAttributes?: React.HTMLAttributes<HTMLDivElement>
}

/**
 * Root component for manually labeled radio.
 * Original name: ManuallyLabeledRadioRoot
 */
export const ManuallyLabeledRadioRoot = forwardRef<HTMLDivElement, ManuallyLabeledRadioRootProps>(
  ({ htmlAttributes, 'aria-labelledby': ariaLabelledby, ...rest }, ref) =>
    jsx(RadioPrimitiveRoot, {
      'className': G8,
      ref,
      'htmlAttributes': { ...htmlAttributes },
      ...rest,
      'aria-labelledby': ariaLabelledby,
    }),
)
ManuallyLabeledRadioRoot.displayName = 'ManuallyLabeledRadio.Root'

/**
 * Props for ManuallyLabeledRadioOption.
 */
export interface ManuallyLabeledRadioOptionProps extends React.ComponentProps<typeof RadioPrimitiveOption> {
  readonly?: boolean
}

/**
 * Option component for manually labeled radio.
 * Original name: ManuallyLabeledRadioOptionOption
 */
export const ManuallyLabeledRadioOption = forwardRef<HTMLSpanElement, ManuallyLabeledRadioOptionProps>(
  (props, ref) => {
    const { readonlyGroup } = useContext(RadioPrimivteContext)
    const isDisabled = readonlyGroup || props.readonly

    return jsxs('span', {
      'className': wO,
      'data-disabled': isDisabled || undefined,
      'children': [
        jsx(RadioPrimitiveOption, {
          className: hO,
          ref,
          ...props,
        }),
        jsx(RadioInputRadioIcon, {}),
      ],
    })
  },
)
ManuallyLabeledRadioOption.displayName = 'ManuallyLabeledRadioOption.Option'

/**
 * SVG icon for radio input.
 * Original name: RadioInputRadioIcon
 */
export function RadioInputRadioIcon() {
  const { version } = getThemeContextOrDefault()
  const { outerRadius, innerRadius, viewbox, center } = radioIconConfig[version]

  return jsxs('svg', {
    'className': xS,
    'viewBox': viewbox,
    'fill': 'none',
    'aria-hidden': true,
    'children': [
      jsx('circle', {
        r: outerRadius,
        cx: center,
        cy: center,
        stroke: 'var(--radio-stroke-color)',
        strokeWidth: 'var(--radio-stroke-width)',
      }),
      jsx('circle', {
        r: innerRadius,
        cx: center,
        cy: center,
        fill: 'var(--radio-fill)',
      }),
    ],
  })
}
RadioInputRadioIcon.displayName = 'RadioInput.RadioIcon'

// Export refactored components with original export names for compatibility
export const b = ManuallyLabeledRadioRoot
export const c = ManuallyLabeledRadioOption
