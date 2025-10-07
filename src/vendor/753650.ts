import { motionValue } from "../vendor/122594"
import { O } from "../vendor/313656"
import { S } from "../vendor/777323"

export function animate(e, r, n = {}) {
  let h = S(e) ? e : motionValue(e)
  h.start(O("", h, r, n))
  return {
    stop: () => h.stop(),
    isAnimating: () => h.isAnimating(),
  }
}
export const i = animate
