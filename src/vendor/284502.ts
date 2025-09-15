import { m as _$$m } from '../vendor/338690'
import { yy } from '../vendor/348210'
import { t } from '../vendor/882463'

function a(e) {
  return Math.min(1e3 * 2 ** e, 3e4)
}
export function canFetch(e) {
  return (e != null ? e : 'online') !== 'online' || t.isOnline()
}
class d {
  constructor(e) {
    this.revert = e?.revert
    this.silent = e?.silent
  }
}
export function isCancelledError(e) {
  return e instanceof d
}
export function createRetryer(e) {
  let r
  let n
  let p
  let g = !1
  let m = 0
  let v = !1
  let y = new Promise((e, r) => {
    n = e
    p = r
  })
  let b = (r) => {
    v || (_(new d(r)), e.abort == null || e.abort())
  }
  let O = () => {
    g = !0
  }
  let x = () => {
    g = !1
  }
  let w = () => !_$$m.isFocused() || e.networkMode !== 'always' && !t.isOnline()
  let k = (i) => {
    v || (v = !0, e.onSuccess == null || e.onSuccess(i), r?.(), n(i))
  }
  let _ = (n) => {
    v || (v = !0, e.onError == null || e.onError(n), r?.(), p(n))
  }
  let S = () => new Promise((n) => {
    r = (e) => {
      let r = v || !w()
      r && n(e)
      return r
    }
    e.onPause == null || e.onPause()
  }).then(() => {
    r = void 0
    v || e.onContinue == null || e.onContinue()
  })
  let E = () => {
    let r
    if (!v) {
      try {
        r = e.fn()
      }
      catch (e) {
        r = Promise.reject(e)
      }
      Promise.resolve(r).then(k).catch((r) => {
        let n
        let i
        if (v)
          return
        let s = (n = e.retry) != null ? n : 3
        let h = (i = e.retryDelay) != null ? i : a
        let d = typeof h == 'function' ? h(m, r) : h
        let p = !0 === s || typeof s == 'number' && m < s || typeof s == 'function' && s(m, r)
        if (g || !p) {
          _(r)
          return
        }
        m++
        e.onFail == null || e.onFail(m, r)
        yy(d).then(() => {
          if (w())
            return S()
        }).then(() => {
          g ? _(r) : E()
        })
      })
    }
  }
  canFetch(e.networkMode) ? E() : S().then(E)
  return {
    promise: y,
    cancel: b,
    continue: () => r?.() ? y : Promise.resolve(),
    cancelRetry: O,
    continueRetry: x,
  }
}
export const II = createRetryer
export const v_ = canFetch
export const wm = isCancelledError
