import { jsx } from 'react/jsx-runtime'
/**
 * SpacerProps - Props for Spacer component (original: $$r0)
 */
export interface SpacerProps {
  multiple?: number
  children?: React.ReactNode
}

/**
 * Spacer - Renders a vertical spacer div with adjustable height.
 * @param props - SpacerProps
 * @returns JSX.Element
 */
export function CustomSpacer(props: SpacerProps): JSX.Element {
  const { multiple = 1, children } = props
  return jsx('div', {
    style: {
      height: 8 * multiple,
    },
    children,
  })
}

// Export with original alias for compatibility (original: k)
export const k = CustomSpacer
