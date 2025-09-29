import { memo } from 'react'
import { jsx, jsxs } from 'react/jsx-runtime'
import { setupThemeContext } from '../905/614223'

export let $$s0 = memo((e) => {
  return jsx(setupThemeContext, {
    brand: 'whiteboard',
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
        d: 'M12 3a1 1 0 0 1 1 1v4.586l-.005.099a1 1 0 0 1-.288.608l-3.414 3.414-.073.066a1 1 0 0 1-.634.227H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm-8 9h4V9a1 1 0 0 1 1-1h3V4H4zm5-.414L11.586 9H9z',
      })],
    }),
  })
})
export const j = $$s0
