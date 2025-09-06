import { O } from '../vendor/240444'
import { getClient, getCurrentScope, getIsolationScope } from '../vendor/325489'
import { li } from '../vendor/650703'
import { fj, qO, Vu } from '../vendor/882763'
import { U } from '../vendor/885230'

export function captureException(e, n) {
  return getCurrentScope().captureException(e, li(n))
}
export function captureMessage(e, n) {
  let i = typeof n == 'string' ? n : void 0
  let t = typeof n != 'string'
    ? {
        captureContext: n,
      }
    : void 0
  return getCurrentScope().captureMessage(e, i, t)
}
export function captureEvent(e, n) {
  return getCurrentScope().captureEvent(e, n)
}
export function setContext(e, n) {
  getIsolationScope().setContext(e, n)
}
export function setTags(e) {
  getIsolationScope().setTags(e)
}
export function setTag(e, n) {
  getIsolationScope().setTag(e, n)
}
export function setUser(e) {
  getIsolationScope().setUser(e)
}
export function startSession(e) {
  let n = getClient()
  let i = getIsolationScope()
  let o = getCurrentScope()
  let {
    release,
    environment = U,
  } = n && n.getOptions() || {}
  let {
    userAgent,
  } = O.navigator || {}
  let s = fj({
    release,
    environment,
    user: o.getUser() || i.getUser(),
    ...(userAgent && {
      userAgent,
    }),
    ...e,
  })
  let c = i.getSession()
  c && c.status === 'ok' && qO(c, {
    status: 'exited',
  })
  endSession()
  i.setSession(s)
  o.setSession(s)
  return s
}
function endSession() {
  let e = getIsolationScope()
  let n = getCurrentScope()
  let i = n.getSession() || e.getSession()
  i && Vu(i)
  _sendSessionUpdate()
  e.setSession()
  n.setSession()
}
function _sendSessionUpdate() {
  let e = getIsolationScope()
  let n = getCurrentScope()
  let i = getClient()
  let t = n.getSession() || e.getSession()
  t && i && i.captureSession(t)
}
export function captureSession(e = !1) {
  if (e) {
    endSession()
    return
  }
  _sendSessionUpdate()
}
export const Cp = captureException
export const J0 = startSession
export const J5 = captureSession
export const NA = setTag
export const Wt = setTags
export const gV = setUser
export const o = setContext
export const r = captureEvent
export const wd = captureMessage
