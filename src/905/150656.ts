import classNames from 'classnames'
import { jsx, jsxs } from 'react/jsx-runtime'
import { useTabManager, useTabState } from '../905/56919'
import { N } from '../905/130112'
import { eg, gy, I5, SZ, zw } from '../905/183218'
import { r as _$$r } from '../905/216849'
import { TabsPrimitiveTabStrip } from '../905/840133'

interface TabProps {
  children: React.ReactNode
  [key: string]: any
}

interface TabPanelProps {
  height?: 'fill' | string
  [key: string]: any
}

interface TabStripProps {
  [key: string]: any
}

/**
 * Tab component - Renders a tab with hidden and visible spans for accessibility
 * (Original: function o)
 */
function Tab({ children, ...props }: TabProps): JSX.Element {
  return jsxs(_$$r, {
    ...props,
    className: eg,
    children: [
      jsx('span', {
        'aria-hidden': true,
        'className': zw,
        'children': children,
      }),
      jsx('span', {
        children,
      }),
    ],
  })
}
Tab.displayName = 'Tabs.Tab'

/**
 * TabPanel component - Renders a tab panel with optional fill height
 * (Original: function c)
 */
function TabPanel({ height, ...props }: TabPanelProps): JSX.Element {
  return jsx(N, {
    ...props,
    className: classNames(SZ, {
      [I5]: height === 'fill',
    }),
  })
}
TabPanel.displayName = 'Tabs.TabPanel'

/**
 * TabStrip component - Renders a tab strip
 * (Original: function p)
 */
function TabStrip(props: TabStripProps): JSX.Element {
  return jsx(TabsPrimitiveTabStrip, {
    ...props,
    className: gy,
  })
}
TabStrip.displayName = 'Tabs.TabStrip'

export const Tabs = {
  Tab,
  TabPanel,
  TabStrip,
  useTabs: useTabState,
  useManagedTabs: useTabManager,
}

export const t = Tabs
