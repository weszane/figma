import o from '../vendor/214915'
import i from '../vendor/300823'
import d from '../vendor/335186'
import s from '../vendor/408459'
import h from '../vendor/621699'
import a from '../vendor/969474'

let p = Object.prototype.hasOwnProperty
let g = o((e, r) => {
  if (h(r) || a(r)) {
    s(r, d(r), e)
    return
  }
  for (let n in r) p.call(r, n) && i(e, n, r[n])
})
// lodash assign
module.exports = g
