import _require from "../vendor/170991"

async function n() {
  let e
  {
    e = await Promise.all([]).then(require.t.bind(require, 177177, 23))
    let t = await require.t.bind(require, 468243, 23)
    e.GlobalWorkerOptions.workerSrc = t
  }
  return e
}
let i = null
export function $$a1() {
  i || (i = n())
  return i
}
async function s() {
  return (await _require).optimize
}
let o = null
export function $$l0() {
  o || (o = s())
  return o
}
async function d() {
  return await require.t.bind(require, 122866, 23)
}
let c = null
export function $$u2() {
  c || (c = d())
  return c
}
export const a4 = $$l0
export const eg = $$a1
export const jL = $$u2
