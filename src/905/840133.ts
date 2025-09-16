import { forwardRef } from 'react'
import { jsx } from 'react/jsx-runtime'
import { useFplDebugAttributes } from '../905/302698'
import { defaultComponentAttribute } from '../905/577641'

/**
 * TabStripProps - Props for TabStrip component (originally o)
 */
export interface TabStripProps {
  children: React.ReactNode
  manager: {
    orientation: string
    tabGroupId: string
  }
  htmlAttributes?: React.HTMLAttributes<HTMLDivElement>
  className?: string
  [key: string]: any
}

/**
 * TabStrip - Refactored from function o
 * Renders a tab strip container with accessibility and debug attributes.
 */
export const TabsPrimitiveTabStrip = forwardRef<HTMLDivElement, TabStripProps>((
  {
    children,
    manager,
    htmlAttributes,
    className,
    ...rest
  },
  ref,
) => {
  // useFplDebugAttributes (originally d)
  const debugAttrs = useFplDebugAttributes({
    container: 'tab-strip',
  })

  return jsx('div', {
    ref,
    ...debugAttrs,
    ...defaultComponentAttribute,
    ...htmlAttributes,
    className,
    'role': 'tablist',
    'aria-orientation': manager.orientation,
    'data-tab-group': manager.tabGroupId,
    ...rest,
    children,
  })
})

TabsPrimitiveTabStrip.displayName = 'TabsPrimitive.TabStrip'

// Export refactored component with original export names

export const r = TabsPrimitiveTabStrip
