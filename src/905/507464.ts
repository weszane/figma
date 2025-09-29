import { memo } from 'react'
import { jsx, jsxs } from 'react/jsx-runtime'
import { setupThemeContext } from '../905/614223'

export let $$s0 = memo((e) => {
  return jsx(setupThemeContext, {
    brand: 'design',
    children: jsxs('svg', {
      width: '16',
      height: '16',
      fill: 'none',
      viewBox: '0 0 16 16',
      ...e,
      children: [jsx('path', {
        fill: 'var(--color-bg-brand)',
        d: 'M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2z',
      }), jsx('path', {
        fill: 'var(--color-icon-onbrand)',
        d: 'M4.14 3.208c.236-.182.543-.25.838-.182l3.761.878a4.57 4.57 0 0 1 3.531 4.452l.437.437a1 1 0 0 1 0 1.414l-2.5 2.5a1 1 0 0 1-1.414 0l-.437-.437A4.57 4.57 0 0 1 3.96 8.95l-.054-.21-.879-3.762a1 1 0 0 1 .267-.934l.75-.75zm.59.812 2.624 2.624-.007.006a1.5 1.5 0 1 1-.697.697l-.004.004-2.624-2.624L4 4.75l.879 3.762A3.573 3.573 0 0 0 8.75 11.25l.75.75L12 9.5l-.75-.75a3.57 3.57 0 0 0-2.738-3.872L4.75 4zM8 7.5a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1',
      })],
    }),
  })
})
export const H = $$s0
