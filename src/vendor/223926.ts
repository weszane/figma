import i from '../vendor/182324'
import r from '../vendor/776892'

let A = Object.prototype.hasOwnProperty
let o = i((e, t, n) => {
  A.call(e, n) ? e[n].push(t) : r(e, n, [t])
})
// lodash groupby
module.exports = o
