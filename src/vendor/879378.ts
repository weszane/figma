import s from '../vendor/509185'
import i from '../vendor/805353'

let o = 'Expected a function'
function a(e, r, n) {
  let a = !0
  let h = !0
  if (typeof e != 'function')
    throw new TypeError(o)
  s(n) && (a = 'leading' in n ? !!n.leading : a, h = 'trailing' in n ? !!n.trailing : h)
  return i(e, r, {
    leading: a,
    maxWait: r,
    trailing: h,
  })
}

// lodash throttle v4.1.1 (Custom Build) <https://lodash.com/>
module.exports = a
