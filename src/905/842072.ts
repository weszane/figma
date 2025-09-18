import { useMemo } from 'react'
import { createVariableResConfig, mapVariableToWorkflow, searchAPIHandler } from '../905/144933'
import { H } from '../905/473998'
import { IT, liveStoreInstance } from '../905/713695'
import { N4 } from '../figma_app/630951'
import { n1 } from '../figma_app/657017'

let d = {
  assets: {
    components: [],
    stateGroups: [],
    styles: [],
    variables: [],
    variableSets: [],
  },
  libraries: [],
}
let $$c1 = liveStoreInstance.Query({
  fetch: async ({
    query: e,
  }) => {
    let t
    try {
      t = (await searchAPIHandler.getCommunityLibraryAssets({
        query: e,
      })).data.meta.results
    }
    catch {
      return null
    }
    let i = Object.values(t).flatMap(e => e.map(e => e.hub_file_id))
    if (!i.length)
      return null
    let n = Array.from(new Set(i))
    try {
      let e = (await H.getLibraries({
        libraryIds: n,
      })).data.meta
      return {
        assets: t,
        libraries: e,
      }
    }
    catch {
      return null
    }
  },
  enabled: ({
    query: e,
  }) => !!(e && e.trim().length > 0),
  output: ({
    data: e,
  }) => {
    if (!e)
      return d
    let {
      assets,
      libraries,
    } = e
    let n = assets.variables ? assets.variables.map(e => mapVariableToWorkflow(e)) : []
    let r = assets.variable_sets ? assets.variable_sets.map(e => createVariableResConfig(e)) : []
    let a = new Set(libraries.map(e => e.id))
    let s = {
      components: (assets.components || []).filter(e => a.has(e.hub_file_id)),
      stateGroups: (assets.state_groups || []).filter(e => a.has(e.hub_file_id)),
      styles: (assets.styles || []).filter(e => a.has(e.hub_file_id)),
      variables: n.filter(e => a.has(e.hub_file_id)),
      variableSets: r.filter(e => a.has(e.hub_file_id)),
    }
    let o = Object.values(s).flat().reduce((e, t) => (e[t.hub_file_id] = Math.max(t.score, e[t.hub_file_id] || -1 / 0), e), {})
    return {
      assets: s,
      libraries: libraries.sort((e, t) => o[e.id] < o[t.id] ? 1 : -1),
    }
  },
})
export function $$u0(e) {
  let t = n1()
  let [i] = IT($$c1({
    query: e,
  }), {
    enabled: t,
  })
  let n = i.status === 'loaded' && i.data.libraries.length > 0
  let {
    assets,
    libraries,
  } = n ? i.data : d
  return {
    assets,
    libraries,
    hasResults: n,
    isLoading: i.status === 'loading',
  }
}
export function $$p2(e) {
  let {
    hasResults,
    libraries,
    assets,
  } = $$u0(e)
  return useMemo(() => hasResults
    ? libraries.map((e) => {
        let {
          id,
        } = e
        return {
          file: N4(e),
          components: assets.components.filter(e => e.hub_file_id === id),
          stateGroups: assets.stateGroups.filter(e => e.hub_file_id === id),
          styles: assets.styles.filter(e => e.hub_file_id === id),
          variables: assets.variables.filter(e => e.hub_file_id === id),
          variableSets: assets.variableSets.filter(e => e.hub_file_id === id),
        }
      })
    : [], [libraries, assets, hasResults])
}
export const DV = $$u0
export const XD = $$c1
export const gE = $$p2
