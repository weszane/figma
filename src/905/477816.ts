import type { SVGProps } from 'react'
import { memo } from 'react'
import { jsx } from 'react/jsx-runtime'

/**
 * Icon component for displaying a custom SVG icon.
 * This component is memoized for performance optimization.
 *
 * @param props - SVG props to be applied to the icon
 * @returns React component representing the icon
 */
export const IconComponent = memo((props: SVGProps<SVGSVGElement>) => {
  return jsx('svg', {
    width: '24',
    height: '24',
    fill: 'none',
    viewBox: '0 0 24 24',
    ...props,
    children: jsx('path', {
      fill: 'var(--color-icon)',
      fillRule: 'evenodd',
      d: 'M8.5 5a.5.5 0 0 1 .5.5V15h6V9h-4.5a.5.5 0 0 1 0-1h5a.5.5 0 0 1 .5.5V15h2.5a.5.5 0 0 1 0 1h-10a.5.5 0 0 1-.5-.5V9H5.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 .5-.5m7 12a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5',
      clipRule: 'evenodd',
    }),
  })
})

// Export the component with a more descriptive name
export const V = IconComponent
