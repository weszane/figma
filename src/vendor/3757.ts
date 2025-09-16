import d from '../vendor/154164'
import s from '../vendor/189577'
import a from '../vendor/467957'
import g from '../vendor/579571'
import p from '../vendor/621699'
import i from '../vendor/714804'
import o from '../vendor/817584'
import h from '../vendor/969474'

let m = '[object Map]'
let v = '[object Set]'
let y = Object.prototype.hasOwnProperty
function b(e) {
  if (e == null)
    return !0
  if (h(e) && (a(e) || typeof e == 'string' || typeof e.splice == 'function' || d(e) || g(e) || o(e)))
    return !e.length
  let r = s(e)
  if (r == m || r == v)
    return !e.size
  if (p(e))
    return !i(e).length
  for (let n in e) {
    if (y.call(e, n))
      return !1
  }
  return !0
}
// lodash isEmpty
module.exports = b
