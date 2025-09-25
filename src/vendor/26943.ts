import { A } from '../vendor/947527'

export function $$s0(e) {
  let r = A('lrgb')(e)
  return 0.2126 * r.r + 0.7152 * r.g + 0.0722 * r.b
}
export function $$o1(e, r) {
  let n = $$s0(e)
  let i = $$s0(r)
  return (Math.max(n, i) + 0.05) / (Math.min(n, i) + 0.05)
}
export const N = $$s0
export const v = $$o1
