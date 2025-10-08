function t(e) {
  return function (n) {
    let i = n.dispatch
    let t = n.getState
    return function (n) {
      return function (f) {
        return typeof f == "function" ? f(i, t, e) : n(f)
      }
    }
  }
}
let f = t()
f.withExtraArgument = t
export let $$r0 = f
export const A = $$r0
