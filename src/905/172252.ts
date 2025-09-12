import { forwardRef } from 'react'
import { jsx } from 'react/jsx-runtime'
import { s as _$$s } from '../905/536340'

/**
 * Props interface for ScreenReaderOnly component.
 * Original component name: ScreenReaderOnly
 */
interface ScreenReaderOnlyProps {
  as?: React.ElementType
  className?: string
  children?: React.ReactNode
  [key: string]: any
}

/**
 * ScreenReaderOnly component - renders content that is visually hidden but accessible to screen readers.
 * Original component name: ScreenReaderOnly
 * @param props - The props for the component.
 * @param ref - The ref to forward.
 * @returns The JSX element.
 */
const ScreenReaderOnly = forwardRef<HTMLElement, ScreenReaderOnlyProps>(({
  as: Component = 'div',
  className,
  children,
  ...rest
}, ref) => {
  return jsx(Component, {
    ref,
    'className': _$$s,
    'data-fpl-sr-only': true,
    ...rest,
    children,
  })
})

ScreenReaderOnly.displayName = 'ScreenReaderOnly'

export { ScreenReaderOnly }
export const E = ScreenReaderOnly
