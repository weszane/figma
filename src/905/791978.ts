import type { SVGProps } from 'react'
import { memo } from 'react'
import { jsx } from 'react/jsx-runtime'

/**
 * Icon component for displaying a resize arrow SVG
 * @param props - SVG props to extend the icon
 * @returns JSX element representing the resize icon
 */
export const ResizeIcon = memo((props: SVGProps<SVGSVGElement>) => {
  return jsx('svg', {
    width: '16',
    height: '16',
    fill: 'none',
    viewBox: '0 0 16 16',
    ...props,
    children: jsx('path', {
      fill: 'var(--color-icon)',
      fillRule: 'evenodd',
      d: 'M7 3.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V4.707l-8.146 8.147a.5.5 0 0 1-.708-.708L11.293 4H7.5a.5.5 0 0 1-.5-.5',
      clipRule: 'evenodd',
    }),
  })
})

// Alias export for backward compatibility
export const O = ResizeIcon
