import { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createReduxSubscriptionAtomWithState } from '../905/270322'
import { hideDropdownAction, showDropdownThunk } from '../905/929976'

export function $$s1() {
  return useSelector(e => e.dropdownShown)
}
export function $$o0(e) {
  let t = useDispatch()
  let i = $$s1()
  return useMemo(() => {
    let {
      type,
      ...r
    } = i || {}
    let s = type === e
    function o() {
      t(hideDropdownAction())
    }
    function l(i = {}) {
      t(showDropdownThunk({
        ...i,
        type: e,
      }))
    }
    return {
      ...r,
      showing: s,
      hide: o,
      show: l,
      toggle(e = {}) {
        s ? o() : l(e)
      },
    }
  }, [t, i, e])
}
export let $$l2 = createReduxSubscriptionAtomWithState(e => e.dropdownShown)
export const BK = $$o0
export const Um = $$s1
export const xc = $$l2
