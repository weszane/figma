import { createReduxSubscriptionAtomWithState } from '../905/270322'
import { Mz } from '../vendor/925040'

let $$r0 = createReduxSubscriptionAtomWithState(e => e.fileByKey, {
  notifyImmediate: !0,
})
let $$a2 = e => e.fileByKey
export function $$s3(e) {
  return e.fileVersion
}
export function $$o1(e) {
  let t = e.mirror.appModel.currentPage
  return e.mirror.appModel.pagesList.length > 0 && !!e.mirror.appModel.pagesList[0] && e.mirror.appModel.pagesList[0].nodeId === t
}
Mz([$$a2], (e) => {
  let t = {}
  for (let i of Object.keys(e)) {
    let n = e[i]
    n && (t[i] = n.name)
  }
  return t
})
export const k1 = $$r0
export const s6 = $$o1
export const t_ = $$a2
export const vx = $$s3
