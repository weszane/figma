import { memo } from 'react'
import { jsx, jsxs } from 'react/jsx-runtime'

export let $$r0 = memo((e) => {
  return jsxs('svg', {
    width: '24',
    height: '24',
    fill: 'none',
    viewBox: '0 0 24 24',
    ...e,
    children: [jsx('path', {
      fill: 'var(--color-icon-tertiary)',
      fillRule: 'evenodd',
      d: 'M10 15v2h7v-7h-2v4a1 1 0 0 1-1 1z',
      clipRule: 'evenodd',
    }), jsx('path', {
      fill: 'var(--color-icon)',
      fillRule: 'evenodd',
      d: 'M17 17h-7v-2h4a1 1 0 0 0 1-1v-4h2zm-7-3h4V7H7v7zm-3 1h2v2a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1h-2V7a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1',
      clipRule: 'evenodd',
    })],
  })
})
export const R = $$r0
