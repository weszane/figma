import { addBreadcrumb } from '@sentry/browser'
import { H } from 'react-dom'

export function $$a0(e = 'react-page') {
  let t = document.getElementById(e)
  if (!t) {
    addBreadcrumb({
      category: 'react-root',
      message: 'Failed to find root node',
      data: {
        documentState: {
          bodyChildElements: (function () {
            let e = document.body
            return e ? Array.from(e.children).map(e => `${e.localName}${e.id ? `#${e.id}` : ''}${e.className ? `.${e.className.split(' ').join('.')}` : ''}`) : []
          }()),
          readyState: document.readyState,
        },
        nodeId: e,
        url: window.location.href,
      },
      level: 'error',
    })
    return new Error(`Could not find root node with id ${e}`)
  }
  return H(t)
}
export const Q = $$a0
