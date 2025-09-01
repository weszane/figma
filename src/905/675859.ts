import { useState } from 'react'
import { jsx } from 'react/jsx-runtime'
import { wafManager } from '../905/394005'
import { sx } from '../905/449184'
import { eu, iu, wj } from '../vendor/421718'

let l = wj(new eu(), 5e3)
export function $$d0({
  alt: e,
  onError: t,
  additionalTrackingProperties: i = {},
  imageRef: a,
  ...s
}) {
  let [o, l] = useState(!0)
  let [d, c] = useState(m())
  let [p, h] = useState(0)
  return jsx('img', {
    'data-test-key': d,
    'alt': e,
    'ref': a,
    ...s,
    'onError': async (e) => {
      o && (h(p + 1), (p >= 3 || !(await u({
        currentTarget: e.target,
        setKey: c,
        additionalTrackingProperties: i,
      }))) && (t?.(e), l(!1)))
    },
  }, d)
}
function c({
  event: e,
  reason: t,
  lockAcquired: i,
  additionalTrackingProperties: n,
}) {
  let r = {
    waf_img_event: e,
    reason: t,
    ...n,
  }
  i && (r.lockAcquired = i)
  sx('HTML img Tag WAF Handler', r, {
    forwardToDatadog: !0,
    batchRequest: !0,
  })
}
async function u({
  currentTarget: e,
  setKey: t,
  additionalTrackingProperties: i,
}) {
  let n = null
  try {
    n = await l.acquire()
  }
  catch (e) {
    e === iu
      ? c({
          event: 'img_waf_handler_lock_error',
          reason: 'timeout',
          additionalTrackingProperties: i,
        })
      : c({
          event: 'img_waf_handler_lock_error',
          reason: 'other_error',
          additionalTrackingProperties: i,
        })
  }
  let r = n !== null
  try {
    return await p({
      currentTarget: e,
      setKey: t,
      lockAcquired: r,
      additionalTrackingProperties: i,
    })
  }
  finally {
    n && n()
  }
}
async function p({
  currentTarget: e,
  setKey: t,
  lockAcquired: i,
  additionalTrackingProperties: n,
}) {
  let r
  try {
    r = await fetch(e.currentSrc || e.src)
  }
  catch (e) {
    c({
      event: 'img_waf_handler_load_error',
      reason: 'error_or_rejected_promise',
      lockAcquired: i,
      additionalTrackingProperties: n,
    })
    return !1
  }
  if (r && r.status === 200) {
    t(m())
    c({
      event: 'img_waf_handler_load_success',
      reason: '200_status',
      lockAcquired: i,
      additionalTrackingProperties: n,
    })
    return !0
  }
  if (!r || r.status !== 202) {
    c({
      event: 'img_waf_handler_load_error',
      reason: 'non_202_status',
      lockAcquired: i,
      additionalTrackingProperties: n,
    })
    return !1
  }
  try {
    await wafManager.waitForWAFValidation('challenge')
  }
  catch (e) {
    c({
      event: 'img_waf_handler_load_error',
      reason: 'error_handling_waf_validation',
      lockAcquired: i,
      additionalTrackingProperties: n,
    })
    return !1
  }
  t(m())
  c({
    event: 'img_waf_handler_load_success',
    reason: 'waf_challenge_solved',
    lockAcquired: i,
    additionalTrackingProperties: n,
  })
  return !0
}
function m() {
  return `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`
}
export const oW = $$d0
