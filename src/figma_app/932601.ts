import { atom } from 'jotai'
import { r } from '../905/520829'
import { getSingletonSceneGraph } from '../905/700578'
import { Wh } from '../figma_app/615482'

let $$o0 = Wh(() => atom([]))
let $$l2 = Wh(() => atom(null))
let $$d3 = Wh(() => atom(r.INIT))
let c = Wh(() => atom(null))
let $$u1 = atom(e => e(c), (e, t, r) => {
  let i = e(c)
  let a = typeof r == 'function' ? r(i) : r
  if (i !== a) {
    if (t(c, a), a) {
      let e = getSingletonSceneGraph().get(a)
      t($$l2, e?.name || '')
    }
    else {
      t($$l2, null)
    }
  }
})
export const cE = $$o0
export const l7 = $$u1
export const oZ = $$l2
export const qp = $$d3
