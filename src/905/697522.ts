import { memo } from 'react'
import { jsx, jsxs } from 'react/jsx-runtime'
import { setupThemeContext } from '../905/614223'

export let $$s0 = memo((e) => {
  return jsx(setupThemeContext, {
    brand: 'dev-handoff',
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
        d: 'M9.644 2.522a.5.5 0 0 1 .335.622l-3 10a.5.5 0 0 1-.958-.287l3-10a.5.5 0 0 1 .623-.335M4.146 5.147a.5.5 0 1 1 .708.707L2.707 8.001l2.147 2.146a.5.5 0 0 1-.708.707l-2.5-2.5a.5.5 0 0 1 0-.707zm7 0a.5.5 0 0 1 .707 0l2.5 2.5a.5.5 0 0 1 0 .707l-2.5 2.5a.5.5 0 0 1-.707-.707l2.147-2.146-2.146-2.147a.5.5 0 0 1 0-.707',
      })],
    }),
  })
})
export const P = $$s0
