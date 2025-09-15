import i from '../vendor/228314'
import s from '../vendor/416412'
import o from '../vendor/915124'
import a from '../vendor/925269'

let h = Object.prototype
let d = h.hasOwnProperty
let p = i((e, r) => {
  e = new Object(e)
  let n = -1
  let i = r.length
  let p = i > 2 ? r[2] : void 0
  for (p && o(r[0], r[1], p) && (i = 1); ++n < i;) {
    for (g = r[n], m = a(g), v = -1, y = m.length, void 0; ++v < y;) {
      var g
      var m
      var v
      var y
      let b = m[v]
      let O = e[b];
      (void 0 === O || s(O, h[b]) && !d.call(e, b)) && (e[b] = g[b])
    }
  }
  return e
})
// lodash defaults
module.exports = p
