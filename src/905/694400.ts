let n = {}
export function $$r0(e, t) {
  n[e] = t
}
export function $$a1(e) {
  let t = n[e]
  return t ? (delete n[e], t) : null
}
export const K = $$r0
export const L = $$a1
