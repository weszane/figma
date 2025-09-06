import { pq } from '../vendor/150583'
import { getClient, getIsolationScope } from '../vendor/325489'
import { lu } from '../vendor/975854'

export function addBreadcrumb(e, n) {
  let i = getClient()
  let a = getIsolationScope()
  if (!i)
    return
  let {
    beforeBreadcrumb = null,
    maxBreadcrumbs = 100,
  } = i.getOptions()
  if (maxBreadcrumbs <= 0)
    return
  let l = {
    timestamp: lu(),
    ...e,
  }
  let d = beforeBreadcrumb ? pq(() => beforeBreadcrumb(l, n)) : l
  d !== null && (i.emit && i.emit('beforeAddBreadcrumb', d, n), a.addBreadcrumb(d, maxBreadcrumbs))
}
export const Z = addBreadcrumb
