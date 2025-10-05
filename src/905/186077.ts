import { useLayoutEffect, useState } from "react"
import { KindEnum } from "../905/129884"

var $$a0 = (e => (e[e.NEVER = 0] = "NEVER", e[e.ALWAYS = 1] = "ALWAYS", e[e.WHEN_TRUNCATED = 2] = "WHEN_TRUNCATED", e))($$a0 || {})
export function $$s1(e, t, i) {
  let [a, s] = useState(t === 1)
  let o = typeof e == "function" ? e(!1) : e
  let [l, d] = useState(o)
  useLayoutEffect(() => {
    let n = i.current != null && i.current.scrollWidth > i.current.clientWidth
    t === 2 ? s(n) : s(t === 1)
    d(typeof e == "function" ? e(n) : e)
  }, [i, t, e])
  return a && l !== ""
    ? {
        "data-tooltip-type": KindEnum.TEXT,
        "data-tooltip": l,
      }
    : {}
}
export const i = $$a0
export const m = $$s1
