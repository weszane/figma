import { jsx } from 'react/jsx-runtime'
import { getNextAndLastNode } from '../905/117474'
import { P } from '../905/536340'

export function TabLoop(e) {
  return jsx('div', {
    className: P,
    ...e,
    onKeyDown(e) {
      if (e.key !== 'Tab')
        return
      let t = e.currentTarget
      let [i, n] = getNextAndLastNode(t)
      if (i === n) {
        e.preventDefault()
        return
      }
      let a = e.target
      let s = !e.shiftKey
      if (a !== i || s) {
        if (a !== n || !s)
          return
        i.focus()
      }
      else {
        n.focus()
      }
      e.preventDefault()
    },
  })
}
TabLoop.displayName = 'TabLoop'
export const i = TabLoop
