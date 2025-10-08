import { groupBy, keyBy, mapValues, noop, pickBy } from 'lodash-es'
import { resourceDataAndPresetKeysV2SetAtom } from "../905/72677"
import { createAtomFamily } from "../905/157003"
import { attachReducerWrapper, createAtomWithReduxWithState, setupReduxAtomWithState } from "../905/270322"
// import { setupObservableAtomFamily } from "../905/508457"
import { getFeatureFlags } from "../905/601108"
import { logError } from "../905/714362"
import { ey, yG } from "../905/859698"
import { libraryVariableCollectionWithVarsAtom, variableByKeyResourceAtomFamily, variableCollectionByKeyResourceAtomFamily } from "../905/888985"
import { resourceUtils } from "../905/989992"
import { atom, createRemovableAtomFamily, setupCustomAtom } from "../figma_app/27355"
import { CommunityLibraryVariableCollectionDataWithVariables, LibraryVariableCollectionData, LibraryVariableCollectionDataByLibraryKey, LibraryVariableCollectionDataByLibraryKeyWithVariables, LibraryVariableCollectionDataWithVariables, VariablesByVariableCollectionKey } from "../figma_app/43951"
import { isNotNullish } from "../figma_app/95419"
import { handleResourceQuery, hasLibraryKeyInSet, variableByKeyQuery, variableCollectionByKeyQuery } from "../figma_app/255679"
import { registerExplicitModeHandler, registerLocalExplicitModeChangeHandler, registerLocalOverrideHandler, registerLocalVariableHandler, registerSubscribedExplicitModeChangeHandler, registerSubscribedOverrideHandler, subscribeExplicitMode, subscribeVariableResolvedValue } from "../figma_app/345195"
import { fullscreenValue } from "../figma_app/455680"
import { setupRemovableAtomFamily } from "../figma_app/615482"
import { getLocalVariableInfo, getLocalVariableOverride, getLocalVariableSetInfo, getSubscribedVariableInfo, getSubscribedVariableOverride, getSubscribedVariableSetInfo, isExtension } from "../figma_app/633080"
import { arraysEqual } from "../figma_app/656233"
import { figmaLibrariesEnabledAtom } from "../figma_app/657017"
import { VariablesBindings } from "../figma_app/763686"
import { compareNumbers } from "../figma_app/766708"

// Action type definitions
interface _VariableSetAction {
  added?: Array<{ node_id: string, [key: string]: any }>
  deleted?: string[]
  setDeleted?: string
}

interface _VariableAction {
  added?: Array<{ node_id: string, variableSetId: string, [key: string]: any }>
  deleted?: string[]
  setDeleted?: string
}

interface _VariableOverrideAction {
  added?: Array<{ node_id: string, id: string, variableSetId: string, [key: string]: any }>
  deleted?: string[]
  setDeleted?: string
}

// State type definitions
interface _VariableSetState {
  [key: string]: { node_id: string, [key: string]: any }
}

interface _VariableState {
  [key: string]: { node_id: string, variableSetId: string, [key: string]: any }
}

interface _VariableOverrideState {
  [key: string]: { node_id: string, id: string, variableSetId: string, [key: string]: any }
}

// Type definitions for variable sets
interface BaseVariableSetInfo {
  type: string
  node_id: string
  version: string
  userFacingVersion: string
  modes: any[]
  name: string
  sortPosition: number
  isExtendable: boolean
  isExtension?: boolean
  [key: string]: any
}

interface LocalVariableSetInfo extends BaseVariableSetInfo {
  subscriptionStatus: 'LOCAL'
  isPublishable: boolean
  defaultModeID: string
  isSoftDeleted: boolean
  variableSetError: any
  keyForPublish: string
}

interface LocalExtensionVariableSetInfo extends LocalVariableSetInfo {
  isExtension: true
  backingVariableSetId: string
  rootVariableSetKey: string
  rootVariableSetId: string
  variableSetExtensionChain: any[]
}

interface SubscribedVariableSetInfo extends BaseVariableSetInfo {
  subscriptionStatus: 'SUBSCRIBED'
  defaultModeID: string
  key: string
  library_key: string
  pageIds: string[]
}

interface SubscribedExtensionVariableSetInfo extends SubscribedVariableSetInfo {
  isExtension: true
  backingVariableSetId: string
  rootVariableSetId: string
  rootVariableSetKey: string
  variableSetExtensionChain: any[]
}

type VariableSetInfo
  = | LocalVariableSetInfo
    | LocalExtensionVariableSetInfo
    | SubscribedVariableSetInfo
    | SubscribedExtensionVariableSetInfo

type VariableSetsAtomType = Record<string, VariableSetInfo>

// Original: $$G26
// Local variable sets atom with Redux state management
const localVariableSetsAtom = (() => {
  const reduxAtom = createAtomWithReduxWithState<VariableSetsAtomType>({}, "SYNC_ATOM_VARIABLE_SETS_BY_ID")
  const customAtom = setupCustomAtom<VariableSetsAtomType>(reduxAtom, (state, action) => {
    if (action) {
      if ("added" in action) {
        const addedSets = keyBy(action.added.map(getLocalVariableSetInfo), (set: any) => set.node_id)
        return {
          ...state,
          ...addedSets,
        }
      }
      if ("deleted" in action) {
        const newState = { ...state }
        delete newState[action.deleted]
        return newState
      }
    }
    return {}
  })
  customAtom.onMount = (setState) => {
    fullscreenValue.onReady().then(() => {
      setState({
        added: VariablesBindings.getLocalVariableSetsInfo(),
      })
    })
    const handler = registerLocalExplicitModeChangeHandler((change) => {
      setState(change)
    })
    return () => {
      handler()
      setState(null)
    }
  }
  return attachReducerWrapper<VariableSetsAtomType>(customAtom, reduxAtom.reducer)
})()

// Original: $$V20
// Combined local and subscribed variable sets atom
const combinedVariableSetsAtom = atom<VariableSetsAtomType>((get) => {
  const localSets = get(localVariableSetsAtom) as VariableSetsAtomType
  const subscribedSets = get(subscribedVariableSetsAtom) as VariableSetsAtomType
  return {
    ...localSets,
    ...subscribedSets,
  }
})

// Original: $$H19
// Atom family for individual local variable sets
const localVariableSetByIdAtomFamily = createRemovableAtomFamily((id: string) => atom<VariableSetInfo | undefined>(get => (get(localVariableSetsAtom) as VariableSetsAtomType)[id]))

// Original: $$z3
// Atom family for individual combined variable sets
const combinedVariableSetByIdAtomFamily = createRemovableAtomFamily((id: string) => atom<VariableSetInfo | undefined>(get => (get(combinedVariableSetsAtom) as VariableSetsAtomType)[id]))

// Original: $$W17
// Complex atom family for variable table data, handling extensions and backing sets
// Type definitions for variable table data
interface VariableTableEntry {
  originVariableSetId: string
  resolvedType: string
  modeValues: Record<string, unknown>
  modeValueOriginVariableSetId: Record<string, string>
}

interface VariableOverride {
  overriddenVariableID: string
  overrideValues?: Record<string, { resolvedType: string, [key: string]: unknown }>
}

interface Variable {
  node_id: string
  modeValues: Record<string, unknown>
  resolvedType: string
}

interface VariableSet {
  node_id: string
  modes: Array<{ id: string, parentModeId?: string }>
  backingVariableSetId?: string
  isExtension?: boolean
}

interface ExtendedVariableSet extends VariableSet {
  backingVariableSetId: string
}

type VariableTableData = Record<string, VariableTableEntry>

const variableTableDataForVariableSetAtomFamily = createRemovableAtomFamily((variableSetId: string) => setupRemovableAtomFamily(() => atom((get): VariableTableData => {
  const variableSet = get(combinedVariableSetByIdAtomFamily(variableSetId)) as VariableSet | null
  if (!variableSet || !getFeatureFlags().ds_extended_collections) {
    return {}
  }
  const variablesByCollection = get(variablesGroupedByCollectionAtom) as Record<string, Variable[]>
  if (isExtension(variableSet)) {
    const extendedVariableSet = variableSet as ExtendedVariableSet
    const backingVariables = get(variableTableDataForVariableSetAtomFamily(extendedVariableSet.backingVariableSetId)) as VariableTableData
    const overrides = get(overridesByVariableSetIdAtomFamily(variableSetId)) as Record<string, VariableOverride>
    const result: VariableTableData = {}
    Object.entries(backingVariables).forEach(([varId, varData]) => {
      result[varId] = {
        originVariableSetId: varData.originVariableSetId,
        resolvedType: varData.resolvedType,
        modeValues: Object.fromEntries(extendedVariableSet.modes.map((mode) => {
          if (!mode.parentModeId) {
            logError("Mode in extended collection has no parent mode set", "variableTableDataForVariableSetAtom", {
              mode,
              variable: varData,
              variableSet: extendedVariableSet,
            }, {
              reportAsSentryError: true,
            })
            return null
          }
          const parentValue = varData.modeValues[mode.parentModeId]
          return parentValue
            ? [mode.id, parentValue]
            : (logError("Parent mode value not found in backing variable collection", "variableTableDataForVariableSetAtom", {
                parentModeId: mode.parentModeId,
                variable: varData,
                variableSet: extendedVariableSet,
              }, {
                reportAsSentryError: true,
              }), null)
        }).filter(isNotNullish)),
        modeValueOriginVariableSetId: Object.fromEntries(extendedVariableSet.modes.map(mode => [mode.id, extendedVariableSet.backingVariableSetId])),
      }
    })
    Object.values(overrides).forEach((override: VariableOverride) => {
      const varData = result[override.overriddenVariableID]
      if (!varData) {
        logError("Variable not found in backingVariableSet", "variableTableDataForVariableSetAtom", {
          overriddenVariableID: override.overriddenVariableID,
          extensionVariableSetID: variableSetId,
          backingVariableSetID: extendedVariableSet.backingVariableSetId,
          returnValue: result,
        }, {
          reportAsSentryError: true,
        })
        return
      }
      if (!override.overrideValues) {
        logError("VariableOverride has no overrideValues", "variableTableDataForVariableSetAtom", {
          override,
          extensionVariableSetID: variableSetId,
        }, {
          reportAsSentryError: true,
        })
        return
      }
      Object.entries(override.overrideValues).forEach(([modeId, value]) => {
        varData.resolvedType = value.resolvedType
        varData.modeValues[modeId] = value
        varData.modeValueOriginVariableSetId[modeId] = extendedVariableSet.node_id
      })
    })
    return result
  }
  else {
    const collectionVars = variablesByCollection[variableSet.node_id] as Variable[]
    return collectionVars
      ? collectionVars.reduce((acc: VariableTableData, variable: Variable) => {
          const modeOrigins: Record<string, string> = {}
          Object.keys(variable.modeValues).forEach(modeId => modeOrigins[modeId] = variableSet.node_id)
          acc[variable.node_id] = {
            originVariableSetId: variableSet.node_id,
            modeValues: variable.modeValues,
            modeValueOriginVariableSetId: modeOrigins,
            resolvedType: variable.resolvedType,
          }
          return acc
        }, {} as VariableTableData)
      : {}
  }
})))

// Original: $$K7
// Atom family for multiple library variable collections by file keys
const libraryVariableCollectionsByFileKeysAtomFamily = createRemovableAtomFamily((fileKeys: any[]) => atom((get) => {
  const result: Record<string, any> = {}
  for (const key of fileKeys) {
    result[key] = get(LibraryVariableCollectionData.Query({
      fileKey: key,
    }))
  }
  return result
}), arraysEqual)

// Original: $$Y28
// Atom family for library variable collections by library keys
const libraryVariableCollectionsByLibraryKeysAtomFamily = createRemovableAtomFamily((libraryKeys: any[]) => atom(get => mapValues(keyBy(libraryKeys), key => get(LibraryVariableCollectionDataByLibraryKey.Query({
  libraryKey: key,
})))), arraysEqual)

// Original: $$$22
// Library variable collection with vars atom family
const libraryVariableCollectionWithVarsByFileKeyAtomFamily = createRemovableAtomFamily((_fileKey: string) => libraryVariableCollectionWithVarsAtom)

// Original: $$X14
// Function to query community library variable collection with variables
export function queryCommunityLibraryVariableCollectionWithVariables(hubFileId?: string) {
  return CommunityLibraryVariableCollectionDataWithVariables.Query(hubFileId
    ? {
        hubFileId,
      }
    : null)
}

// Original: $$q13
// Atom family for variables by variable collection keys
const variablesByVariableCollectionKeysAtomFamily = createRemovableAtomFamily((collectionKeys: any[]) => atom((get) => {
  const result: Record<string, any> = {}
  for (const key of collectionKeys) {
    result[key] = get(createAtomFamily(VariablesByVariableCollectionKey)({
      variableCollectionKey: key,
    }))
  }
  return result
}), arraysEqual)

// Original: $$J8
// Atom family for library variable collections with vars by library keys
const libraryVariableCollectionsWithVarsByLibraryKeysAtomFamily = createRemovableAtomFamily((libraryKeys: any[]) => atom(get => mapValues(keyBy(libraryKeys), key => get(LibraryVariableCollectionDataByLibraryKeyWithVariables.Query({
  libraryKey: key,
})))), arraysEqual)

// Original: $$Z18
// Atom family for library variable collections with vars by file keys
const libraryVariableCollectionsWithVarsByFileKeysAtomFamily = createRemovableAtomFamily((fileKeys: any[]) => atom((get) => {
  const result: Record<string, any> = {}
  for (const key of fileKeys) {
    result[key] = get(LibraryVariableCollectionDataWithVariables.Query({
      fileKey: key,
    }))
  }
  return result
}), arraysEqual)

// Original: $$Q24
// Atom family for community library variable collections with vars by hub file ids
const communityLibraryVariableCollectionsWithVarsByHubFileIdsAtomFamily = createRemovableAtomFamily((hubFileIds: any[]) => atom((get) => {
  const result: Record<string, any> = {}
  for (const id of hubFileIds) {
    result[id] = get(CommunityLibraryVariableCollectionDataWithVariables.Query({
      hubFileId: id,
    }))
  }
  return result
}), arraysEqual)

// Original: $$ee10
// Function to create disabled resource atom
export function createDisabledResourceAtom(resources: any[]) {
  const disabledResources = mapValues(keyBy(resources), () => resourceUtils.disabled())
  return atom(disabledResources)
}

// Original: et
// Local variables by key atom
const localVariablesByKeyAtom = atom<any>((get) => {
  const localVars = get(subscribedVariablesAtom) // Note: Original uses $$ef21, which is subscribedVariablesAtom
  const resourceKeysSet = get(resourceDataAndPresetKeysV2SetAtom)
  const keys = Object.values<ObjectOf>(localVars).filter(v => !hasLibraryKeyInSet(v, resourceKeysSet)).map(v => v.key).sort()
  const resourceResults: any = get(variableByKeyResourceAtomFamily(keys.map(key => ({ key }))))
  return resourceResults.reduce((acc, res) => {
    acc[ey(res.args.key)] = res.result
    return acc
  }, {})
})

// Original: er
// Library variables by key atom
const libraryVariablesByKeyAtom = atom((get) => {
  const subscribedVars = get(subscribedVariablesAtom)
  const resourceKeysSet = get(resourceDataAndPresetKeysV2SetAtom)
  const keys = (get(figmaLibrariesEnabledAtom) ? Object.values<any>(subscribedVars).filter(v => hasLibraryKeyInSet(v, resourceKeysSet)) : []).map(v => v.key).sort().map(key => ({
    key,
  }))
  const queryResult = handleResourceQuery(variableByKeyQuery, keys, get)
  return queryResult.status !== "loaded"
    ? {}
    : queryResult.data.reduce((acc, res) => {
        if (res.result.status !== "loaded")
          return acc
        const variable = res.result.data.variable
        if (!variable) {
          return acc
        }
        const hashedKey = ey(variable.key)
        acc[hashedKey] = res.result
        return acc
      }, {} as Record<string, any>)
})

// Original: en
// Combined used library variables by key atom
const usedLibraryVariablesByKeyAtom = atom((get) => {
  const localVars = get(localVariablesByKeyAtom)
  const libraryVars = get(libraryVariablesByKeyAtom)
  // Type guard to ensure we're spreading objects
  const safeLocalVars = (typeof localVars === 'object' && localVars !== null) ? localVars : {}
  const safeLibraryVars = (typeof libraryVars === 'object' && libraryVars !== null) ? libraryVars : {}
  return {
    ...safeLocalVars,
    ...safeLibraryVars,
  }
}, noop)

// Original: $$ei12
// Redux atom for used library variables by key
const usedLibraryVariablesByKeyReduxAtom = setupReduxAtomWithState(usedLibraryVariablesByKeyAtom, "SYNC_ATOM_USED_LIBRARY_VARIABLES_BY_KEY", {})

// Original: ea
// Local variable collections by key atom
const localVariableCollectionsByKeyAtom = atom((get) => {
  const collectionKeys = [...new Set(Object.values<ObjectOf>(get(localVariablesByKeyAtom)).map(v => v.data?.variable?.variableCollection.key).filter(isNotNullish))]
  const subscribedSets = get(subscribedVariableSetsAtom)
  const subscribedKeys = Object.keys(subscribedSets)
  Object.values(get(localVariableSetsAtom)).forEach((set) => {
    if (set.isExtension && subscribedKeys.includes(set.backingVariableSetId)) {
      collectionKeys.push(subscribedSets[set.backingVariableSetId].key)
    }
  })
  const sortedKeys = collectionKeys.sort()
  return get(variableCollectionByKeyResourceAtomFamily(sortedKeys.map(key => ({
    key,
  })))).reduce((acc, res) => {
    acc[yG(res.args.key)] = res.result
    return acc
  }, {})
}, noop)

// Original: es
// Library variable collections by key atom
const libraryVariableCollectionsByKeyAtom = atom((get) => {
  const collectionKeys = [...new Set(Object.values<ObjectOf>(get(libraryVariablesByKeyAtom)).map(v => v.data?.variable?.variableCollection.key).filter(isNotNullish))].sort().map(key => ({
    key,
  }))
  const queryResult = handleResourceQuery(variableCollectionByKeyQuery, collectionKeys, get)
  return queryResult.status !== "loaded"
    ? {}
    : queryResult.data.reduce((acc, res) => {
        if (res.result.status !== "loaded")
          return acc
        const collection = res.result.data.variableCollection
        if (!collection) {
          return acc
        }
        const hashedKey = ey(collection.key)
        acc[hashedKey] = res.result
        return acc
      }, {} as Record<string, any>)
})

// Original: eo
// Combined used library variable sets by key atom
const usedLibraryVariableSetsByKeyAtom = atom((get) => {
  const localCollections = get(localVariableCollectionsByKeyAtom)
  const libraryCollections = get(libraryVariableCollectionsByKeyAtom)
  // Type guard to ensure we're spreading objects
  const safeLocalCollections = (typeof localCollections === 'object' && localCollections !== null) ? localCollections : {}
  const safeLibraryCollections = (typeof libraryCollections === 'object' && libraryCollections !== null) ? libraryCollections : {}
  return {
    ...safeLocalCollections,
    ...safeLibraryCollections,
  }
}, noop)

// Original: $$el25
// Redux atom for used library variable sets by key
const usedLibraryVariableSetsByKeyReduxAtom = setupReduxAtomWithState(usedLibraryVariableSetsByKeyAtom, "SYNC_ATOM_USED_LIBRARY_VARIABLE_SETS_BY_KEY", {})

// Original: $$ed15
// All local variable sets atom
const allLocalVariableSetsAtom = atom(get => Object.values(get(localVariableSetsAtom)))

// Original: $$ec29
// Subscribed variable sets atom with Redux state management
const subscribedVariableSetsAtom = (() => {
  const reduxAtom = createAtomWithReduxWithState<VariableSetsAtomType>({}, "SYNC_ATOM_SUBSCRIBED_VARIABLE_SETS_BY_ID")
  const customAtom = setupCustomAtom(reduxAtom, (state, action) => {
    if (action) {
      if ("added" in action) {
        const addedSets = keyBy(action.added.map(getSubscribedVariableSetInfo), (set: any) => set.node_id)
        return {
          ...state,
          ...addedSets,
        }
      }
      else {
        const newState = { ...state }
        delete newState[action.deleted]
        return newState
      }
    }
    return {}
  })
  customAtom.onMount = (setState) => {
    fullscreenValue.onReady().then(() => {
      setState({
        added: VariablesBindings.getSubscribedVariableSetsInfo(),
      })
    })
    const handler = registerSubscribedExplicitModeChangeHandler((change) => {
      setState(change)
    })
    return () => {
      handler()
      setState(null)
    }
  }
  return attachReducerWrapper(customAtom, reduxAtom.reducer)
})()

// Original: $$eu2
// Local variables atom with Redux state management
const localVariablesAtom = (() => {
  const reduxAtom = createAtomWithReduxWithState({}, "SYNC_ATOM_LOCAL_VARIABLES_BY_ID")
  const customAtom = setupCustomAtom(reduxAtom, (state, action) => {
    if (action) {
      if ("added" in action) {
        if (!t.added || !("map" in t.added)) {
          logError("variableChange is malformed, expected added to be an array", "variableChange", {
            variableChange: action,
          }, {
            reportAsSentryError: true,
          })
        }
        return {
          ...state,
          ...keyBy(action.added.map(getLocalVariableInfo), (v: any) => v.node_id),
        }
      }
      if ("deleted" in action) {
        const deletedSet = new Set(action.deleted)
        return pickBy(state, (v: any) => v && v.node_id && !deletedSet.has(v.node_id))
      }
      if ("setDeleted" in action) {
        return pickBy(state, (v: any) => v && v.variableSetId !== action.setDeleted)
      }
    }
    return {}
  })
  customAtom.onMount = (setState) => {
    fullscreenValue.onReady().then(() => {
      setState({
        added: VariablesBindings.getLocalVariablesInfo(),
      })
    })
    const handler = registerLocalVariableHandler((change) => {
      setState(change)
    })
    return () => {
      handler()
      setState(null)
    }
  }
  return attachReducerWrapper(customAtom, reduxAtom.reducer)
})()

// Original: $$ep23
// Atom family for individual local variables
const localVariableByIdAtomFamily = createRemovableAtomFamily((id: string) => atom(get => get(localVariablesAtom)[id] ?? null))

// Original: $$e_27
// Sorted local variables atom
const sortedLocalVariablesAtom = atom(get => Object.keys(get(localVariablesAtom)).map(id => get(localVariableByIdAtomFamily(id))).sort((a, b) => -compareNumbers(a.sortPosition, b?.sortPosition)))

// Original: $$eh6
// Local variables grouped by variable set id
const localVariablesGroupedBySetIdAtom = atom(get => groupBy(get(sortedLocalVariablesAtom), v => v.variableSetId))

// Original: $$em11
// Subscribed variables grouped by variable set id
const subscribedVariablesGroupedBySetIdAtom = atom(get => groupBy<ObjectOf>(get(subscribedVariablesAtom), v => v.variableSetId))

// Original: eg
// Combined variables grouped by collection
const variablesGroupedByCollectionAtom = atom((get) => {
  const localGrouped = get(localVariablesGroupedBySetIdAtom)
  const subscribedGrouped = get(subscribedVariablesGroupedBySetIdAtom)
  return {
    ...localGrouped,
    ...subscribedGrouped,
  }
})

// Original: $$ef21
// Subscribed variables atom with Redux state management
const subscribedVariablesAtom = (() => {
  const reduxAtom = createAtomWithReduxWithState({}, "SYNC_ATOM_SUBSCRIBED_VARIABLES_BY_ID")
  const customAtom = setupCustomAtom(reduxAtom, (state, action) => {
    if (action) {
      if ("added" in action) {
        return {
          ...state,
          ...keyBy(action.added.map(getSubscribedVariableInfo), (v: any) => v.node_id),
        }
      }
      if ("deleted" in action) {
        return pickBy(state, (v: any) => v && v.id !== action.deleted)
      }
      if ("setDeleted" in action) {
        return pickBy(state, (v: any) => v && v.variableSetId !== action.setDeleted)
      }
    }
    return {}
  })
  customAtom.onMount = (setState) => {
    fullscreenValue.onReady().then(() => {
      setState({
        added: VariablesBindings.getSubscribedVariablesInfo(),
      })
    })
    const handler = registerExplicitModeHandler((change) => {
      setState(change)
    })
    return () => {
      handler()
      setState(null)
    }
  }
  return attachReducerWrapper(customAtom, reduxAtom.reducer)
})()

// Original: $$eE4
// Combined local or subscribed variable by id atom family
export const variableByIdAtomFamily = createRemovableAtomFamily((id: string) => atom<ObjectOf>(get => get(localVariablesAtom)[id] ?? get(subscribedVariablesAtom)[id] ?? null))

// Original: $$ey1
// Function to create resolved value atom for a variable
export function createVariableResolvedValueAtom(variableId: string, modes: Record<string, string>) {
  const isReady = fullscreenValue.isReady()
  const initialValue = isReady && variableId ? VariablesBindings.getVariableResolvedValue(variableId, new Map(Object.entries(modes))) : null
  const valueAtom = atom(initialValue)
  if (variableId) {
    valueAtom.onMount = (setValue) => {
      if (!isReady) {
        fullscreenValue.onReady().then(() => {
          setValue(VariablesBindings.getVariableResolvedValue(variableId, new Map(Object.entries(modes))))
        })
      }
      const unsubscribe = subscribeVariableResolvedValue(variableId, () => {
        setValue(VariablesBindings.getVariableResolvedValue(variableId, new Map(Object.entries(modes))))
      })
      return () => {
        unsubscribe()
        setValue(null)
      }
    }
  }
  return valueAtom
}

// Original: $$eb9
// Function to create explicit mode names atom for a variable set
export function createExplicitModeNamesAtom(variableSetId: string) {
  const isReady = fullscreenValue.isReady()
  const initialValue = isReady && variableSetId ? VariablesBindings.getExplicitModeNames(variableSetId) : null
  const namesAtom = atom(initialValue)
  if (variableSetId) {
    namesAtom.onMount = (setValue) => {
      if (!isReady) {
        fullscreenValue.onReady().then(() => {
          setValue(VariablesBindings.getExplicitModeNames(variableSetId))
        })
      }
      const unsubscribe = subscribeExplicitMode(variableSetId, (names) => {
        setValue(names)
      })
      return () => {
        unsubscribe()
        setValue(null)
      }
    }
  }
  return namesAtom
}

// Original: eT
// Local variable overrides atom
const localVariableOverridesAtom = (() => {
  const baseAtom = atom({})
  const customAtom = setupCustomAtom(baseAtom, (state, action) => {
    if (action) {
      if ("added" in action) {
        return {
          ...state,
          ...keyBy(action.added.map(getLocalVariableOverride), (o: any) => o.node_id),
        }
      }
      if ("deleted" in action) {
        const deletedSet = new Set(action.deleted)
        return pickBy(state, (v: any) => v && v.node_id && !deletedSet.has(v.node_id))
      }
    }
    return state
  })
  customAtom.onMount = (setState) => {
    fullscreenValue.onReady().then(() => {
      const overrides = VariablesBindings?.getLocalVariableOverridesInfo()
      if (overrides) {
        setState({
          added: overrides,
        })
      }
    })
    const handler = registerLocalOverrideHandler((change) => {
      setState(change)
    })
    return () => {
      handler()
      setState(null)
    }
  }
  return customAtom
})()

// Original: eI
// Subscribed variable overrides atom
const subscribedVariableOverridesAtom = (() => {
  const baseAtom = atom({})
  const customAtom = setupCustomAtom(baseAtom, (state, action) => {
    if (action) {
      if ("added" in action) {
        return {
          ...state,
          ...keyBy(action.added.map(getSubscribedVariableOverride), (o: any) => o.node_id),
        }
      }
      if ("deleted" in action) {
        const deletedSet = new Set(action.deleted)
        return pickBy(state, (v: any) => v && v.node_id && !deletedSet.has(v.node_id))
      }
    }
    return state
  })
  customAtom.onMount = (setState) => {
    fullscreenValue.onReady().then(() => {
      const overrides = VariablesBindings?.getSubscribedVariableOverridesInfo()
      if (overrides) {
        setState({
          added: overrides,
        })
      }
    })
    const handler = registerSubscribedOverrideHandler((change) => {
      setState(change)
    })
    return () => {
      handler()
      setState(null)
    }
  }
  return customAtom
})()

// Original: $$eS0
// Local overrides by variable set id atom family
const localOverridesByVariableSetIdAtomFamily = createRemovableAtomFamily(setId => atom((get) => {
  const overridesAtomValue = get(localVariableOverridesAtom)
  if (typeof overridesAtomValue === 'function') {
    return {}
  }
  const overridesObject = overridesAtomValue as Record<string, any>
  const overrides = Object.values(overridesObject).filter((o: any) => o && o.variableSetId === setId)
  return keyBy(overrides, (o: any) => o.overriddenVariableID)
}))

// Original: ev
// Subscribed overrides by variable set id atom family
const subscribedOverridesByVariableSetIdAtomFamily = createRemovableAtomFamily(setId => atom((get) => {
  const overridesAtomValue = get(subscribedVariableOverridesAtom)
  if (typeof overridesAtomValue === 'function') {
    return {}
  }
  const overridesObject = overridesAtomValue as Record<string, any>
  const overrides = Object.values(overridesObject).filter((o: any) => o && o.variableSetId === setId)
  return keyBy(overrides, (o: any) => o.overriddenVariableID)
}))

// Original: $$eA5
// Combined overrides by variable set id atom family
const overridesByVariableSetIdAtomFamily = createRemovableAtomFamily(setId => atom((get) => {
  const localOverrides = get(localOverridesByVariableSetIdAtomFamily(setId))
  const subscribedOverrides = get(subscribedOverridesByVariableSetIdAtomFamily(setId))
  const combined = {
    ...localOverrides,
    ...subscribedOverrides,
  }
  return keyBy<ObjectOf>(combined, o => o.overriddenVariableID)
}))

// Original: $$ex16
// Function to create page level modes atom
export function createPageLevelModesAtom() {
  const isReady = fullscreenValue.isReady()
  const initialValue = isReady ? VariablesBindings.getPageLevelModes() : null
  const modesAtom = atom(initialValue)
  modesAtom.onMount = (setValue) => {
    if (!isReady) {
      fullscreenValue.onReady().then(() => {
        setValue(VariablesBindings.getPageLevelModes())
      })
    }
    return () => {
      setValue(null)
    }
  }
  return modesAtom
}

// Refactored exports with meaningful names, keeping originals as comments
export const A6 = localOverridesByVariableSetIdAtomFamily // Original: A6 = $$eS0
export const BJ = createVariableResolvedValueAtom // Original: BJ = $$ey1
export const Cg = localVariablesAtom // Original: Cg = $$eu2
export const Eo = combinedVariableSetByIdAtomFamily // Original: Eo = $$z3
export const Ev = variableByIdAtomFamily // Original: Ev = $$eE4
export const Fx = overridesByVariableSetIdAtomFamily // Original: Fx = $$eA5
export const Gc = localVariablesGroupedBySetIdAtom // Original: Gc = $$eh6
export const H2 = libraryVariableCollectionsByFileKeysAtomFamily // Original: H2 = $$K7
export const Ho = libraryVariableCollectionsWithVarsByLibraryKeysAtomFamily // Original: Ho = $$J8
export const JB = createExplicitModeNamesAtom // Original: JB = $$eb9
export const Jo = createDisabledResourceAtom // Original: Jo = $$ee10
export const L9 = subscribedVariablesGroupedBySetIdAtom // Original: L9 = $$em11
export const LC = usedLibraryVariablesByKeyReduxAtom // Original: LC = $$ei12
export const Oj = variablesByVariableCollectionKeysAtomFamily // Original: Oj = $$q13
export const Ri = queryCommunityLibraryVariableCollectionWithVariables // Original: Ri = $$X14
export const TD = allLocalVariableSetsAtom // Original: TD = $$ed15
export const Tg = createPageLevelModesAtom // Original: Tg = $$ex16
export const XC = variableTableDataForVariableSetAtomFamily // Original: XC = $$W17
export const Yt = libraryVariableCollectionsWithVarsByFileKeysAtomFamily // Original: Yt = $$Z18
export const ZG = localVariableSetByIdAtomFamily // Original: ZG = $$H19
export const Zc = combinedVariableSetsAtom // Original: Zc = $$V20
export const bO = subscribedVariablesAtom // Original: bO = $$ef21
export const cp = libraryVariableCollectionWithVarsByFileKeyAtomFamily // Original: cp = $$$22
export const hy = localVariableByIdAtomFamily // Original: hy = $$ep23
export const hz = communityLibraryVariableCollectionsWithVarsByHubFileIdsAtomFamily // Original: hz = $$Q24
export const jt = usedLibraryVariableSetsByKeyReduxAtom // Original: jt = $$el25
export const qy = localVariableSetsAtom // Original: qy = $$G26
export const uk = sortedLocalVariablesAtom // Original: uk = $$e_27
export const wh = libraryVariableCollectionsByLibraryKeysAtomFamily // Original: wh = $$Y28
export const xA = subscribedVariableSetsAtom // Original: xA = $$ec29
