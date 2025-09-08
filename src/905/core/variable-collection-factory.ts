import type { NoOpVm } from '../700654'
import type { ComponentInfo, LibraryResult } from '../types'
import { keyBy } from 'lodash-es'
import { permissionScopeHandler } from '../189185'
import { oA } from '../419236'
import { subscribeAndAwaitData } from '../553831'
import { getFeatureFlags } from '../601108'
import { yG } from '../859698'
import { QO } from '../888985'
import { resourceUtils } from '../989992'
import { zl } from '../../figma_app/27355'
import { bsh } from '../../figma_app/43951'
import { Ho } from '../../figma_app/216057'
import { gr } from '../../figma_app/243058'
import { cE, Zt } from '../../figma_app/349248'
import { Dt } from '../../figma_app/633080'
import { CUU, CWU } from '../../figma_app/763686'
import { I1 } from '../../figma_app/825489'
import { Yf } from '../../figma_app/933328'
import { NodeAPI } from './node-api'
import { setupPrototypeFromArgs } from './node-factory'
import { ExtendedVariableCollectionAPI, VariableCollectionAPI } from './variable-api'

export function processFeatureFlagFunctions(featureFlag, functions) {
  return functions.map(func => (input, node) => {
    if (getFeatureFlags()[featureFlag]) {
      return func(input, node)
    }
  })
}

let rC = [NodeAPI.name, NodeAPI.hiddenFromPublishing, NodeAPI.pluginData, VariableCollectionAPI.key, VariableCollectionAPI.defaultModeId, VariableCollectionAPI.modes, VariableCollectionAPI.remote, VariableCollectionAPI.variableIds, ...processFeatureFlagFunctions('ds_extended_collections', [VariableCollectionAPI.isExtension]), VariableCollectionAPI.remove, VariableCollectionAPI.getPublishStatus, ...processFeatureFlagFunctions('ds_extended_collections', [VariableCollectionAPI.extend])]
let rT = [...rC, VariableCollectionAPI.addMode, VariableCollectionAPI.removeMode, VariableCollectionAPI.renameMode, VariableCollectionAPI.setDefaultMode]
let rk = [...rC, ExtendedVariableCollectionAPI.parentVariableCollectionId, ExtendedVariableCollectionAPI.variableOverrides, ...processFeatureFlagFunctions('ds_extended_collections_modes_creation', [VariableCollectionAPI.addMode]), ...processFeatureFlagFunctions('ds_extended_collections_vars_creation', [ExtendedVariableCollectionAPI.localVariableIds, ExtendedVariableCollectionAPI.inheritedVariableIds]), ExtendedVariableCollectionAPI.removeOverridesForVariable]

/**
 * VariableCollectionFactory - Factory class for creating and managing variable collection handles.
 * Handles both standard and extended variable collections, including creation, retrieval,
 * and asynchronous operations for library collections.
 */
export class VariableCollectionFactory {
  vm: NoOpVm
  variableCollectionPrototype: any
  extendedVariableCollectionPrototype: any
  sceneGraph: any

  /**
   * Constructs a new VariableCollectionFactory.
   * @param params - Factory initialization parameters.
   */
  constructor(params: {
    vm: NoOpVm
    sceneGraph: any
    [key: string]: any
  }) {
    this.vm = params.vm
    this.variableCollectionPrototype = setupPrototypeFromArgs(params, 'VariableCollection', ...rT)
    this.extendedVariableCollectionPrototype = setupPrototypeFromArgs(params, 'ExtendedVariableCollection', ...rk)
    this.sceneGraph = params.sceneGraph
  }

  /**
   * Creates a handle for a variable collection or extended variable collection.
   * @param id - The variable collection id.
   * @param sceneGraph - The scene graph instance.
   * @returns The VM handle for the variable collection, or null if not found.
   */
  createVariableCollectionHandle(id: string, sceneGraph: any): any {
    const {
      vm,
    } = this
    const collectionId = gr.fromString(id)
    if (!collectionId || !sceneGraph.getVariableCollectionNode(collectionId)) {
      return vm.$$null
    }
    const prototype = CUU.isVariableSetExtension(id) ? this.extendedVariableCollectionPrototype : this.variableCollectionPrototype
    const handle = vm.newObject(prototype)
    vm.defineProp(handle, 'id', {
      enumerable: true,
      writable: false,
      value: vm.newString(id),
    })
    return handle
  }

  /**
   * Creates a new variable collection and returns its id.
   * @param name - The name for the new variable collection.
   * @returns The id of the created variable collection.
   */
  createNewVariableCollection(name: string): string {
    return this.sceneGraph.createVariableCollection(name).id
  }

  /**
   * Retrieves all local variable collections as a VM array.
   * @returns VM array of variable collection handles.
   */
  getLocalVariableCollections(): any {
    const {
      vm,
    } = this
    const arr = vm.newArray()
    const collections = this.sceneGraph.getLocalVariableCollectionNodes()
    let index = 0
    for (const collection of collections) {
      if (!getFeatureFlags().ds_extended_collections && CUU?.isVariableSetExtension(collection.id)) {
        continue
      }
      const handle = this.createVariableCollectionHandle(collection.id, this.sceneGraph)
      vm.setProp(arr, index.toString(), handle)
      index++
    }
    return arr
  }

  /**
   * Asynchronously retrieves all library variable collections.
   * @returns Promise resolving to a VM-wrapped array of library variable collections.
   */
  getLibraryVariableCollectionsAsync() {
    const {
      vm,
    } = this
    const {
      promise,
      resolve,
      reject,
    } = vm.newPromise()
    vm.registerPromise(rL()).then(async (libraries: any) => {
      const collections = await rO(libraries)
      resolve(vm.deepWrap(collections))
    }).catch(reject)
    return promise
  }

  /**
   * Creates a new extended variable collection.
   * @param collectionId - The base collection id.
   * @param name - The name for the extension.
   * @returns The id of the created extended variable collection.
   */
  createNewExtendedVariableCollection(collectionId: string, name: string): string {
    return permissionScopeHandler.system('upsert-shared-collection-plugin', () => CUU.createVariableSetExtension(collectionId, name))
  }

  /**
   * Creates a handle for an extended variable collection.
   * @param id - The extended variable collection id.
   * @returns The VM handle for the extended variable collection, or null if invalid.
   */
  createExtendedVariableCollectionHandle(id: string): any {
    const {
      vm,
    } = this
    if (!gr.fromString(id)) {
      return vm.$$null
    }
    const handle = vm.newObject(this.extendedVariableCollectionPrototype)
    vm.defineProp(handle, 'id', {
      enumerable: true,
      writable: false,
      value: vm.newString(id),
    })
    return handle
  }

  /**
   * Asynchronously gets or upserts a variable collection by key.
   * @param key - The variable collection key.
   * @returns Promise resolving to the node id.
   */
  async getOrUpsertVariableCollectionAsync(key: string): Promise<any> {
    return await rN(yG(key))
  }
}

/**
 * Get local variable set info by key - helper function
 * Retrieves variable set information from local cache with proper wrapping
 * @param key - variable set key to lookup
 * @returns wrapped local variable info or null if not found
 */
export function getLocalVariableSetInfoByKey(key) {
  const localInfo = CWU?.getLocalVariableSetInfoByKey(key)
  return localInfo ? Dt(localInfo) : null
}

async function rN(variableSetKey) {
  // rN - Get node ID for variable set, loading from library if necessary

  // Try to get local variable set info first
  const localVariableSetInfo = getLocalVariableSetInfoByKey(variableSetKey) ?? (await rP(variableSetKey))
  if (!localVariableSetInfo) {
    throw new Error(`Could not find variable set with key ${variableSetKey}`)
  }

  // If it's a library variable set, ensure it's properly subscribed
  if (localVariableSetInfo.subscriptionStatus === 'LIBRARY') {
    await Yf(localVariableSetInfo)
  }
  return localVariableSetInfo.node_id
}

async function rP(variableSetKey) {
  // rP - Fetch variable collection from external API and process it

  const apiResponse = await subscribeAndAwaitData(bsh, {
    key: variableSetKey.toString(),
  })
  const variableCollection = apiResponse.variableCollection
  const fileInfo = variableCollection?.file
  const hubFileInfo = variableCollection?.hubFile && oA(variableCollection.hubFile, null)
  const processedFile = Zt(fileInfo, hubFileInfo)
  return variableCollection && processedFile ? cE(variableCollection, processedFile, false) : null
}

async function rO(variableCollectionInputs) {
  // rO - Process variable collections from library inputs and return formatted results

  const libraryKeys = Ho(variableCollectionInputs.map(input => input.libraryKey))

  // Fetch library data and process variable collections
  const libraryData = (await QO(libraryKeys, (resolve, reject) => {
    const cachedLibraries = zl.get<ComponentInfo>(libraryKeys)
    const allLibrariesResult = resourceUtils.all(Object.values(cachedLibraries))
    if (allLibrariesResult.status === 'loaded') {
      resolve(cachedLibraries)
    }
    else if (allLibrariesResult.status === 'errors') {
      reject('error fetching variable collections from libraries')
    }
  })) as ComponentInfo

  // Process collections from library data
  const processedCollections: any[] = []
  const libraryNameMap = keyBy(variableCollectionInputs, input => input.libraryKey)
  for (const [libraryKey, libraryResult] of Object.entries(libraryData)) {
    if (libraryResult.status === 'loaded') {
      const libraryFileData = libraryResult.data?.file
      const libraryName = libraryFileData?.name
      const inputsForLibrary = libraryNameMap[libraryKey] || []

      // Extract variable collections from library components
      if (libraryFileData?.components) {
        for (const componentKey of Object.keys(libraryFileData.components)) {
          const componentData = libraryFileData.components[componentKey]
          if (componentData?.variableCollections) {
            for (const collectionKey of Object.keys(componentData.variableCollections)) {
              const collectionData = componentData.variableCollections[collectionKey]

              // Check if this collection matches any of the requested inputs
              const matchingInput = inputsForLibrary.find(input => input.variableCollectionId === collectionData.id)
              if (matchingInput) {
                processedCollections.push({
                  name: collectionData.name,
                  key: collectionData.key,
                  libraryName: libraryName || 'Unknown Library',
                })
              }
            }
          }
        }
      }
    }
  }
  return processedCollections
}

export function rD(libraryInfo) {
  // rD - Extract basic library information for API response
  return {
    name: libraryInfo.name,
    libraryKey: libraryInfo.libraryKey,
  }
}

async function rL() {
  // rL - Get available libraries from cache or query them

  const libraryResult = (await QO(I1, (resolve, reject) => {
    const cachedLibraries = zl.get<LibraryResult>(I1)
    if (cachedLibraries.status === 'loaded') {
      resolve(cachedLibraries)
    }
    else if (cachedLibraries.status === 'errors') {
      reject('error in querying available libraries')
    }
  })) as LibraryResult
  return libraryResult.status === 'loaded' ? libraryResult.data.map(rD) : []
}
