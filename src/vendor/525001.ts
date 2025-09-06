import { createStore, getDefaultStore } from 'jotai'
import React, { createContext, createElement, use, useCallback, useContext, useDebugValue, useEffect, useReducer, useRef } from 'react'

let r = createContext(void 0)
let useStore = (e) => {
  let n = useContext(r)
  return e?.store || n || getDefaultStore()
}
let Provider = ({
  children: e,
  store: n,
}) => {
  let i = useRef()
  n || i.current || (i.current = createStore())
  return createElement(r.Provider, {
    value: n || i.current,
  }, e)
}
let u = e => typeof e?.then == 'function'
let l = React.use || ((e) => {
  if (e.status === 'pending')
    throw e
  if (e.status === 'fulfilled')
    return e.value
  if (e.status === 'rejected')
    throw e.reason
  e.status = 'pending'
  e.then((n) => {
    e.status = 'fulfilled'
    e.value = n
  }, (n) => {
    e.status = 'rejected'
    e.reason = n
  })
  return e
})
export function useAtomValue(e, n) {
  let i = useStore(n)
  let [[f, r, o], d] = useReducer((n) => {
    let t = i.get(e)
    return Object.is(n[0], t) && n[1] === i && n[2] === e ? n : [t, i, e]
  }, void 0, () => [i.get(e), i, e])
  let s = f;
  (r !== i || o !== e) && (d(), s = i.get(e))
  let c = n?.delay
  useEffect(() => {
    let n = i.sub(e, () => {
      if (typeof c == 'number') {
        setTimeout(d, c)
        return
      }
      d()
    })
    d()
    return n
  }, [i, e, c])
  useDebugValue(s)
  return u(s) ? l(s) : s
}
export function useSetAtom(e, n) {
  let i = useStore(n)
  return useCallback((...n) => {
    if (!('write' in e))
      throw new Error('not writable atom')
    return i.set(e, ...n)
  }, [i, e])
}
export const Kq = Provider
export const Pj = useStore
export const Xr = useSetAtom
export const md = useAtomValue
