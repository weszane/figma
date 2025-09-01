import { BEGIN } from 'redux-optimist'
import { MM as _$$MM, NC, T4 } from '../905/17179'
import { c as _$$c, r as _$$r } from '../905/676456'
import { F } from '../905/842794'
import { Lg } from '../figma_app/257275'

export function $$l1(e, t) {
  let i = T4('THUNK')
  let l = e => t ? t(e) : i
  let c = (t) => {
    let s = l(t)
    return (l, c, u) => (Lg() && l(d({
      thunkIdentifier: i,
      thunkPayload: t,
    })), e({
      dispatch: l,
      getState: c,
      optimisticDispatch(e) {
        let t = F()
        l({
          type: e.type,
          payload: e.payload,
          optimist: {
            type: BEGIN,
            id: t,
          },
        })
        return {
          optimistId: t,
          revert: () => {
            l(_$$r(t))
          },
          commit: () => {
            l(_$$c(t))
          },
        }
      },
    }, t, {
      loadingKey: s,
      ...u,
    }))
  }
  c.loadingKeyForPayload = l
  Lg() && (c._uniqueIdentifierForTest_ = i)
  return c
}
let d = NC('_THUNK_FOR_TEST_')
export function $$c0(e, t, i) {
  return _$$MM(e, t, i)
}
export const MM = $$c0
export const nF = $$l1
