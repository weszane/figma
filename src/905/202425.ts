import { memoizeWithDeepEquality } from '../905/270781'
import { selectSceneGraph, selectSceneGraphSelectionKeys } from '../figma_app/889655'

export let $$a1 = memoizeWithDeepEquality((e) => {
  let t = selectSceneGraph(e)
  let i = selectSceneGraphSelectionKeys(e)
  let n = []
  i.forEach((e) => {
    let i = t.get(e)
    i && n.push($$s0(i) ? 'IMAGE' : i.type)
  })
  return n
})
export function $$s0(e) {
  return !!(e.fills.some(o) && e.childCount === 0)
}
function o(e) {
  return e.type === 'IMAGE' && e.image && e.visible && e.opacity !== 0
}
export const A = $$s0
export const l = $$a1
