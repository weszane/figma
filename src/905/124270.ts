import { differenceWith, isEqual } from 'lodash-es'
import { isSearchViewAtom, selectedItemAtom } from '../905/61477'
import { buildQueryObject, createSpaceFacet, findFacetIndex, getDefaultSearchTypes, isFacetEmpty, isSpaceEmpty } from '../905/171315'
import { includesEqual } from '../905/382883'
import { atom, atomStoreManager, createAtomWithEquality, createRemovableAtomFamily } from '../figma_app/27355'
import { CreatorResourceType, FolderType, SearchModelType } from '../figma_app/162807'
import { hO } from '../figma_app/545293'

let facetSessionIdAtom = atom(null)
let facetQueryIdAtom = atom(null)
let $$g6 = atom(null)
let $$f16 = atom(null)
let $$_0 = atom((e) => {
  let t = e(M)
  let i = e(j)
  let n = e(U)
  let r = e(selectedItemAtom)
  return buildQueryObject(t, i, n, r ?? void 0)
})
let $$A2 = atom(e => e(y))
let y = createAtomWithEquality(atom([]))
let $$b10 = atom((e) => {
  let t = e($$A2)
  return t.length > 0 ? t[t.length - 1] : null
})
let $$v14 = atom(null)
let $$I8 = atom(e => e(M))
let $$E1 = atom(e => e(j))
let $$x4 = atom(e => e(U))
let $$S17 = atom((e) => {
  if (e(hO.isFragmentSearchAtom))
    return [CreatorResourceType.CREATOR, CreatorResourceType.SPACE]
  let t = e(M)
  return t && !getDefaultSearchTypes().includes(t.value) ? Object.values(CreatorResourceType).filter(e => e !== CreatorResourceType.CREATOR) : Object.values(CreatorResourceType)
})
let $$w11 = atom((e) => {
  if (e(hO.isFragmentSearchAtom))
    return [FolderType.FOLDER, FolderType.TEAM]
  let t = e(M)
  return C(t?.value || null)
})
let C = e => e === SearchModelType.USERS || e === SearchModelType.TEAMS ? [FolderType.ORG] : e === SearchModelType.PROJECTS ? [FolderType.TEAM, FolderType.ORG] : e === SearchModelType.PLUGINS || e === SearchModelType.WIDGETS ? [] : [FolderType.FOLDER, FolderType.TEAM, FolderType.ORG]
let $$T7 = atom((e) => {
  let t = e(j)
  let i = e(U)
  let n = e(isSearchViewAtom)
  return n ? getDefaultSearchTypes() : R(t, i, n)
})
let $$k5 = atom(e => R(e(j), e(U), e(isSearchViewAtom)))
let R = (e, t, i) => {
  let n = i ? getDefaultSearchTypes().concat(SearchModelType.ALL_FILES) : getDefaultSearchTypes()
  let r = n.concat([SearchModelType.USERS, SearchModelType.PROJECTS, SearchModelType.TEAMS])
  if (e && e.value.length > 0)
    return n
  if (t && !isSpaceEmpty(t.value)) {
    let e = t.value[FolderType.FOLDER].length > 0
    let i = t.value[FolderType.TEAM].length > 0
    if (t.value[FolderType.ORG].length > 0)
      return r
    if (i)
      return n.concat([SearchModelType.PROJECTS])
    if (e)
      return n
  }
  return r
}
let $$N9 = createRemovableAtomFamily(e => atom(t => e === CreatorResourceType.RESOURCE ? t(M) : e === CreatorResourceType.CREATOR ? t(j) : e === CreatorResourceType.SPACE ? t(U) : null, (t, i, r) => {
  if (!e)
    return null
  let a = !r || isFacetEmpty(r)
  if (e === CreatorResourceType.RESOURCE ? i(M, a ? null : r) : e === CreatorResourceType.CREATOR ? i(j, a ? null : r) : e === CreatorResourceType.SPACE && i(U, a ? null : r), t($$v14) && i($$v14, null), a) {
    let n = t(y)
    i(y, n.filter(t => t.type !== e))
  }
  else {
    let a = t(y)
    let s = []
    let o = []
    if (e === CreatorResourceType.RESOURCE) {
      let e = findFacetIndex(CreatorResourceType.RESOURCE, a)
      let t = {
        type: CreatorResourceType.RESOURCE,
        value: r.value,
      }
      o = [...a]
      e === -1 ? o.push(t) : o[e] = t
      s = O(t, o)
    }
    else if (e === CreatorResourceType.CREATOR) {
      s = D(o = P(t(M), r, t(U), a))
    }
    else if (e === CreatorResourceType.SPACE) {
      let e = t(M)
      let i = t(j)
      let n = t(isSearchViewAtom)
      o = P(e, i, r, a)
      s = L(r, i, n, o)
    }
    i(y, o.filter(e => !includesEqual(s, e)))
    s.forEach((e) => {
      if (e.type === CreatorResourceType.RESOURCE) {
        i(M, null)
      }
      else if (e.type === CreatorResourceType.CREATOR) {
        i(j, null)
      }
      else if (e.type === CreatorResourceType.SPACE) {
        let n = {
          ...t(U),
        }
        n.value[e.spaceType] = []
        i(U, n)
      }
    })
  }
}))
let P = (e, t, i, r) => {
  let a = []
  if (e && a.push({
    type: CreatorResourceType.RESOURCE,
    value: e.value,
  }), t && !isFacetEmpty(t) && t.value.forEach(e => a.push({
    type: CreatorResourceType.CREATOR,
    value: e,
  })), i && !isFacetEmpty(i)) {
    let e = i.value
    for (let t of Object.values(FolderType)) {
      for (let i of e[t]) {
        let e = createSpaceFacet(t, i)
        e && a.push(e)
      }
    }
  }
  let o = []
  r.forEach((e) => {
    includesEqual(a, e) && o.push(e)
  })
  let d = differenceWith(a, o, isEqual)
  o.push(...d)
  return o
}
let O = (e, t) => {
  let i = []
  let n = C(e.value)
  t.filter((t) => {
    t.type === CreatorResourceType.SPACE && !n.includes(t.spaceType) && i.push(t)
    t.type === CreatorResourceType.CREATOR && e.value !== SearchModelType.ALL_FILES && e.value !== SearchModelType.DESIGN_FILES && e.value !== SearchModelType.FIGJAM_FILES && e.value !== SearchModelType.SLIDES && e.value !== SearchModelType.SITES && e.value !== SearchModelType.BUZZ && e.value !== SearchModelType.MAKE && i.push(t)
  })
  return i
}
let D = (e) => {
  let t = []
  e.forEach((e) => {
    e.type === CreatorResourceType.RESOURCE && e.value !== SearchModelType.DESIGN_FILES && e.value !== SearchModelType.FIGJAM_FILES && e.value !== SearchModelType.SLIDES && e.value !== SearchModelType.SITES && e.value !== SearchModelType.BUZZ && e.value !== SearchModelType.MAKE && e.value !== SearchModelType.ALL_FILES && t.push(e)
  })
  return t
}
let L = (e, t, i, n) => {
  let r = []
  let a = R(t, e, i)
  n.forEach((e) => {
    e.type === CreatorResourceType.RESOURCE && !a.includes(e.value) && r.push(e)
  })
  return r
}
let $$F12 = atom((e) => {}, (e, t) => {
  e($$A2).forEach((e) => {
    t($$N9(e.type), null)
  })
  t(selectedItemAtom, null)
})
let M = atom(null)
let j = atom(null)
let U = atom(null)
export function $$B13() {
  let e = atomStoreManager.get($$A2)
  let t = []
  let i = []
  let n = []
  let a = []
  let s = []
  e.forEach((e) => {
    switch (e.type) {
      case CreatorResourceType.CREATOR:
        t.push(e.value.id)
        break
      case CreatorResourceType.SPACE:
        switch (e.spaceType) {
          case FolderType.FOLDER:
            i.push(e.value.id)
            break
          case FolderType.TEAM:
            n.push(e.value.id)
            break
          case FolderType.ORG:
            a.push(e.value.id)
        }
        break
      case CreatorResourceType.RESOURCE:
        s.push(e.value)
    }
  })
  return {
    facet_creator_ids: t,
    facet_folder_ids: i,
    facet_team_ids: n,
    facet_org_ids: a,
    facet_resource_types: s,
  }
}
export const CZ = $$_0
export const J = $$E1
export const L8 = $$A2
export const OM = facetSessionIdAtom
export const P_ = $$x4
export const _4 = $$k5
export const a3 = $$g6
export const a6 = $$T7
export const jM = $$I8
export const l4 = $$N9
export const oT = $$b10
export const q$ = $$w11
export const q4 = $$F12
export const qB = $$B13
export const rG = $$v14
export const wf = facetQueryIdAtom
export const z5 = $$f16
export const zD = $$S17
