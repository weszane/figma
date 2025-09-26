import { jsx } from 'react/jsx-runtime'
import { EventShield } from '../905/821217'

export function renderEventShield({
  children: e,
}) {
  return jsx(EventShield, {
    eventListeners: ['onFocus'],
    display: 'contents',
    children: e,
  })
}
export const P = renderEventShield
