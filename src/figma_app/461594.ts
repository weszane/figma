import { createDeepEqualSelector } from '../905/270781'
import { getComponentProps, selectFallbackStateGroupOrBackingSymbol, selectFallbackStateOrSymbolId, selectUniqueContainingSymbolIds } from '../figma_app/505098'
import { selectSceneGraph, selectSingleSelectedNode } from '../figma_app/889655'
import n from '../vendor/73823'
import { createSelector } from '../vendor/925040'

let i = n
let $$d1 = createDeepEqualSelector([getComponentProps, selectFallbackStateOrSymbolId, selectFallbackStateGroupOrBackingSymbol], (e, t, r) => {
  if (!r && e && t && e[t])
    return e[t].primaryInstances
})
let c = createDeepEqualSelector([selectSceneGraph, getComponentProps, selectFallbackStateOrSymbolId, selectFallbackStateGroupOrBackingSymbol, selectUniqueContainingSymbolIds], (e, t, r, n, a) => {
  if (n)
    return
  let s = []
  let o = new Set()
  if (t && r && t[r]) {
    let n = e.get(r)
    if (!n)
      return
    if (!n.isStateGroup || a.length === 0)
      return i()(t[r].primaryInstances?.filter(e => e.isBubbled) || [], e => [e.connectedGUIDs, ...e.bubbledNestedInstances.map(e => e.connectedGUIDs)])
    for (let e of a) {
      for (let r of t[e]?.primaryInstances?.filter(e => e.isBubbled) || []) {
        if (r.connectedGUIDs && !o.has(r.connectedGUIDs[0])) {
          for (let e of r.connectedGUIDs) o.add(e)
          s.push(r.connectedGUIDs)
        }
        for (let e of r.bubbledNestedInstances) {
          if (e.connectedGUIDs && !o.has(e.connectedGUIDs[0])) {
            for (let t of e.connectedGUIDs) o.add(t)
            s.push(e.connectedGUIDs)
          }
        }
      }
    }
    return s
  }
})
let $$u0 = createDeepEqualSelector([getComponentProps, selectSingleSelectedNode], (e, t) => {
  if (!t || !t.isAlive || t.type !== 'INSTANCE')
    return []
  let r = t.guid
  return e && r && e[r] ? e[r].bubbledNestedInstanceGUIDs?.map(e => [e]) ?? [] : []
})
let $$p2 = createSelector([c, $$u0], (e, t) => e || t || [])
export const Ae = $$u0
export const K4 = $$d1
export const Z3 = $$p2
