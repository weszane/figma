import { useCallback, useRef, useState } from 'react'
import { useDebouncedCallback } from 'use-debounce'

function o(e, r) {
  return e === r
}
function a(e) {
  return typeof e == 'function'
    ? function () {
      return e
    }
    : e
}
function h(e) {
  let r = useState(a(e))
  let n = r[0]
  let s = r[1]
  return [n, useCallback((e) => {
    return s(a(e))
  }, [])]
}
export function useDebounce(e, r, n) {
  let a = n && n.equalityFn || o
  let d = h(e)
  let p = d[0]
  let g = d[1]
  let m = useDebouncedCallback(useCallback((e) => {
    return g(e)
  }, [g]), r, n)
  let v = useRef(e)
  a(v.current, e) || (m(e), v.current = e)
  return [p, {
    cancel: m.cancel,
    isPending: m.isPending,
    flush: m.flush,
  }]
}
export const A = useDebounce
