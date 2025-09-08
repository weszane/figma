import type { NoOpVm } from '../700654'
import type { LibraryResult, VariableResult } from '../types'
import { z as _$$z, z } from 'zod'
import { permissionScopeHandler } from '../189185'
import { debugState } from '../407919'
import { oA } from '../419236'
import { getFeatureFlags } from '../601108'
import { getSingletonSceneGraph } from '../700578'
import { x1 } from '../714362'
import { d1 } from '../766303'
import { u as _$$u } from '../816730'
import { Ot } from '../850476'
import { ey as _$$ey } from '../859698'
import { d5, QO, Y4 } from '../888985'
import { zl } from '../../figma_app/27355'
import { Ae, gK } from '../../figma_app/198712'
import { gr, sD } from '../../figma_app/243058'
import { GA, Zt } from '../../figma_app/349248'
import { throwTypeError } from '../../figma_app/465776'
import { kz } from '../../figma_app/633080'
import { oH } from '../../figma_app/646357'
import { CUU, CWU, mSn, NfO, rXF } from '../../figma_app/763686'
import { tK as _$$tK2 } from '../../figma_app/803787'
import { Yi } from '../../figma_app/933328'
import { processPublishStatus, rM, variableDefinitions } from './helper'
import { it, NodeAPI } from './node-api'
import { setupPrototypeFromArgs } from './node-factory'
import { processFeatureFlagFunctions } from './variable-collection-factory'

export function rF(extendedModeId) {
  // rF - Parse extended mode ID format to extract collection and mode IDs

  const idParts = extendedModeId.split('/')
  const modeId = idParts.pop()
  if (!modeId || idParts.length === 0) {
    throw new Error('Invalid extended mode id format. Mode id for extended mode must be encoded using the following format: <collectionId>/<modeId>')
  }
  return {
    collectionId: idParts.join('/'),
    modeId,
  }
}

/**
 * Variable collection validation helper - validates and retrieves variable collection node
 * @param collectionId - ID of the variable collection to validate
 * @returns validated variable collection node
 * @throws Error if collection is invalid or not found
 */
export function validateVariableCollectionNode(collectionId) {
  let nodeId = gr.fromString(collectionId ?? '')
  if (!nodeId)
    throw new Error('Invalid variable collection id')
  let collectionNode = getSingletonSceneGraph().getVariableCollectionNode(nodeId)
  if (!collectionNode)
    throw new Error('Cannot find variable collection node')
  if (CUU && !CUU.isVariableSetExtension(collectionNode.id)) {
    throw new Error('Cannot override value for extended mode on non-extended variable collection')
  }
  return collectionNode
}

/**
 * Check if variable name contains mode separator - helper function
 * @param variableName - variable name to check
 * @returns true if name contains '/' separator
 */
export function isVariableNameWithMode(variableName) {
  return variableName.includes('/')
}

/**
 * Variable API Namespace - contains all variable-related API functions and utilities
 * Simple object literal format with all functions and properties defined
 */
export const VariableAPI = {
  resolvedType({
    vm: e,
    defineVmProp: t,
    getVariableNode: i,
  }, n) {
    t({
      handle: n,
      key: 'resolvedType',
      options: {
        enumerable: !0,
        metricsKey: 'variable.resolvedType',
        get() {
          return e.newString(rG(i(this).variableResolvedType))
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !1,
    })
  },
  variableCollectionId({
    vm: e,
    defineVmProp: t,
    getVariableNode: i,
  }, n) {
    t({
      handle: n,
      key: 'variableCollectionId',
      options: {
        enumerable: !0,
        metricsKey: 'variable.variableCollectionId',
        get() {
          return e.newString(i(this).variableCollectionId)
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !1,
    })
  },
  key({
    vm: e,
    defineVmProp: t,
    getVariableNode: i,
  }, n) {
    t({
      handle: n,
      key: 'key',
      options: {
        enumerable: !0,
        metricsKey: 'variable.key',
        get() {
          let t = i(this).variableKeyForPublish
          return t ? e.newString(t) : e.$$null
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !1,
    })
  },
  remote({
    vm: e,
    defineVmProp: t,
    getVariableNode: i,
  }, n) {
    t({
      handle: n,
      key: 'remote',
      options: {
        enumerable: !0,
        metricsKey: 'variable.remote',
        get() {
          return e.newBoolean(i(this).isSubscribedAsset)
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !1,
    })
  },
  resolveForConsumer({
    vm: e,
    defineVmFunction: t,
    getNode: i,
  }, n) {
    t({
      handle: n,
      key: 'resolveForConsumer',
      metricsKey: 'variable.resolveForConsumer',
      cb(t) {
        let n = e.getStringProp(this, 'id')
        return (function (e, t) {
          let i
          let n = e.newObject()
          if (!t)
            return e.$$null
          switch (t.resolvedType) {
            case rXF.COLOR:
              i = e.deepWrap(t.value)
              break
            case rXF.STRING:
              i = e.newString(t.value)
              break
            case rXF.FLOAT:
              i = e.newNumber(t.value)
              break
            case rXF.BOOLEAN:
              i = e.newBoolean(t.value)
              break
            case rXF.SYMBOL_ID:
              i = e.newString(t.value)
              break
            case rXF.MAP:
              i = e.deepWrap(t.value)
              break
            default:
              throwTypeError(t)
          }
          let r = e.newString(rG(t.resolvedType))
          e.setProp(n, 'value', i)
          e.setProp(n, 'resolvedType', r)
          return n
        }(e, i(t).resolveVariable(n)))
      },
      isAllowedInReadOnly: !0,
      hasEditScope: !1,
    })
  },
  remove({
    vm: e,
    defineVmFunction: t,
    getVariableNode: i,
  }, n) {
    t({
      handle: n,
      key: 'remove',
      metricsKey: 'variable.remove',
      cb() {
        i(this).removeSelfAndChildren()
        return e.undefined
      },
      isAllowedInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  getPublishStatus({
    vm: e,
    defineVmFunction: t,
    getVariableNode: i,
  }, n) {
    t({
      handle: n,
      key: 'getPublishStatusAsync',
      metricsKey: 'variable.getPublishStatusAsync',
      cb() {
        let {
          promise,
          resolve,
          reject,
        } = e.newPromise()
        if (i(this).isSubscribedAsset)
          throw new Error('can only query publish status for local variables')
        e.registerPromise(fetchPublishStatusForCollection(e.getStringProp(this, 'id'))).then(t => resolve(e.newString(t))).$$catch(reject)
        return promise
      },
      isAllowedInReadOnly: !0,
      hasEditScope: !1,
    })
  },
  valuesByMode({
    vm: e,
    defineVmProp: t,
    getVariableNode: i,
  }, n) {
    t({
      handle: n,
      key: 'valuesByMode',
      options: {
        enumerable: !0,
        metricsKey: 'variable.valuesByMode',
        get() {
          return e.deepWrap(i(this).valuesByMode)
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !1,
    })
  },
  setValueForMode({
    vm: e,
    defineVmFunction: r,
    getVariableNode: a,
  }, s) {
    r({
      handle: s,
      key: 'setValueForMode',
      metricsKey: 'variable.setValueForMode',
      cb(r, s) {
        let o = _$$u({
          vm: e,
          handle: r,
          zSchema: z.string(),
          property: 'modeId',
        })
        let l = _$$u({
          vm: e,
          handle: s,
          zSchema: variableDefinitions.VariableValue,
          property: 'newValue',
        })
        if (getFeatureFlags().ds_extended_collections && isVariableNameWithMode(o)) {
          let {
            collectionId,
            modeId,
          } = rF(o)
          if (!collectionId)
            throw new Error('Cannot set value for extended mode')
          if (collectionId === a(this).variableCollectionId) {
            a(this).setValueForMode(modeId, l)
            return e.undefined
          }
          let r = validateVariableCollectionNode(collectionId)
          if (!r.modes.find(e => e.modeID === modeId))
            throw new Error('Cannot find mode on extended variable collection')
          if (!mSn?.getVariableKeysInCollectionChain().includes(a(this).variableKeyForPublish ?? '')) {
            throw new Error('Cannot override value on a variable that is not inherited by this collection')
          }
          r.setVariableOverrideForMode(a(this).id, modeId, l)
        }
        else {
          a(this).setValueForMode(o, l)
        }
        return e.undefined
      },
      isAllowedInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  removeOverrideForMode({
    vm: e,
    defineVmFunction: n,
    getVariableNode: r,
  }, a) {
    n({
      handle: a,
      key: 'removeOverrideForMode',
      metricsKey: 'variable.removeOverrideForMode',
      cb(n) {
        let a = _$$u({
          vm: e,
          handle: n,
          zSchema: z.string(),
          property: 'modeId',
        })
        if (!isVariableNameWithMode(a)) {
          throw new Error('Cannot remove override: the specified modeId does not refer to an extended collection that inherits this variable.')
        }
        let {
          collectionId,
          modeId,
        } = rF(a)
        validateVariableCollectionNode(collectionId).removeOverrideForMode(r(this).id, modeId)
        return e.undefined
      },
      isAllowedInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  scopes({
    vm: e,
    defineVmProp: t,
    getVariableNode: i,
  }, r) {
    t({
      handle: r,
      key: 'scopes',
      options: {
        enumerable: !0,
        metricsKey: 'variable.scopes',
        get() {
          let t = i(this)
          let n = Ae(t.variableScopes).map((e) => {
            let i
            i = t.variableResolvedType
            return e === 'STROKE' ? 'STROKE_COLOR' : e === 'FONT_STYLE' && i === rXF.FLOAT ? 'FONT_WEIGHT' : e
          })
          return e.deepWrap(n)
        },
        set(t) {
          let r = i(this)
          let a = _$$u({
            vm: e,
            handle: t,
            zSchema: z.array(variableDefinitions.PublicVariableScope),
            property: 'scopes',
          }).map(e => (function (e, t) {
            if (t === 'FONT_WEIGHT' && e !== rXF.FLOAT || t === 'FONT_STYLE' && e !== rXF.STRING) {
              throw new Error('Invalid scope for this variable type')
            }
            return t === 'STROKE_COLOR' ? 'STROKE' : t === 'FONT_WEIGHT' && e === rXF.FLOAT ? 'FONT_STYLE' : t
          }(r.variableResolvedType, e)))
          r.variableScopes = gK(a)
          return e.undefined
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !0,
    })
  },
  codeSyntax({
    vm: e,
    defineVmProp: t,
    defineVmFunction: i,
    getVariableNode: r,
  }, a) {
    t({
      handle: a,
      key: 'codeSyntax',
      options: {
        enumerable: !0,
        metricsKey: 'variable.codeSyntax',
        get() {
          let t = r(this).variableCodeSyntax
          return e.deepWrap(t)
        },
      },
      canWriteInReadOnly: !1,
      hasEditScope: !1,
    })
    i({
      handle: a,
      key: 'setVariableCodeSyntax',
      metricsKey: 'variable.setVariableCodeSyntax',
      cb(t, i) {
        let a = _$$u({
          vm: e,
          handle: t,
          zSchema: variableDefinitions.PublicVariableCodeSyntaxPlatformPropType,
          property: 'codeSyntaxPlatform',
        })
        let s = _$$u({
          vm: e,
          handle: i,
          zSchema: z.string(),
          property: 'codeSyntaxValue',
        })
        let o = it(a)
        r(this).setVariableCodeSyntax(o, s)
        return e.deepWrap(r(this).variableCodeSyntax)
      },
      isAllowedInReadOnly: !1,
      hasEditScope: !0,
    })
    i({
      handle: a,
      key: 'removeVariableCodeSyntax',
      metricsKey: 'variable.removeVariableCodeSyntax',
      cb(t) {
        let i = it(_$$u({
          vm: e,
          handle: t,
          zSchema: variableDefinitions.PublicVariableCodeSyntaxPlatformPropType,
          property: 'codeSyntaxPlatform',
        }))
        r(this).removeVariableCodeSyntax(i)
        return e.deepWrap(r(this).variableCodeSyntax)
      },
      isAllowedInReadOnly: !1,
      hasEditScope: !0,
    })
  },
}

let rB = [NodeAPI.name, NodeAPI.description, NodeAPI.pluginData, VariableAPI.variableCollectionId, VariableAPI.key, VariableAPI.remote, VariableAPI.resolvedType, VariableAPI.valuesByMode, VariableAPI.scopes, NodeAPI.hiddenFromPublishing, VariableAPI.codeSyntax, VariableAPI.remove, VariableAPI.resolveForConsumer, VariableAPI.getPublishStatus, VariableAPI.setValueForMode, ...processFeatureFlagFunctions('ds_extended_collections', [VariableAPI.removeOverrideForMode])]

/**
 * VariableFactory - Factory class for creating and managing variable handles.
 * Handles creation, retrieval, and import of variables, including support for
 * local, subscribed, and library variables. Provides type-safe APIs and
 * integrates with the scene graph and VM.
 */
export class VariableFactory {
  vm: NoOpVm
  variablePrototype: any
  sceneGraph: any

  /**
   * Constructs a new VariableFactory.
   * @param params - Factory initialization parameters.
   */
  constructor(params: {
    vm: NoOpVm
    sceneGraph: any
    [key: string]: any
  }) {
    this.vm = params.vm
    this.variablePrototype = setupPrototypeFromArgs(params, 'Variable', ...rB)
    this.sceneGraph = params.sceneGraph
  }

  /**
   * Creates a handle for a variable.
   * @param id - The variable id.
   * @param sceneGraph - The scene graph instance.
   * @returns The VM handle for the variable, or null if not found.
   */
  createVariableHandle(id: string, sceneGraph: any): any {
    const {
      vm,
    } = this
    const variableId = sD.fromString(id)
    if (!variableId || !sceneGraph.getVariableNode(variableId)) {
      return vm.$$null
    }
    const handle = vm.newObject(this.variablePrototype)
    vm.defineProp(handle, 'id', {
      enumerable: true,
      writable: false,
      value: vm.newString(id),
    })
    return handle
  }

  /**
   * Creates a new variable in the specified collection.
   * @param name - The variable name.
   * @param collectionId - The collection id.
   * @param variableType - The variable type string.
   * @returns The id of the created variable.
   */
  createNewVariable(name: string, collectionId: string, variableType: string): string {
    if (isPrivateVariableType(variableType)) {
      logInternalVariableExposure(variableType)
    }
    if (!getFeatureFlags().ds_extended_collections_vars_creation && CUU?.isVariableSetExtension(collectionId)) {
      throw new Error('Cannot create variables in extended variable collections')
    }
    return this.sceneGraph.createVariable(name, collectionId, rV(variableType)).id
  }

  /**
   * Retrieves all local variables, optionally filtered by variable type.
   * @param variableType - Optional variable type string to filter by.
   * @returns VM array of variable handles.
   */
  getLocalVariables(variableType?: string): any {
    const {
      vm,
    } = this
    const arr = vm.newArray()
    const resolvedType = variableType ? rV(variableType) : undefined
    const variables = this.sceneGraph.getLocalVariableNodes({
      resolvedDataType: resolvedType,
    })
    if (variables.length > 0 && variableType && isPrivateVariableType(variableType)) {
      logInternalVariableExposure(variableType)
    }
    variables.forEach((variable: any, idx: number) => {
      const handle = this.createVariableHandle(variable.id, this.sceneGraph)
      vm.setProp(arr, idx.toString(), handle)
    })
    return arr
  }

  /**
   * Retrieves all subscribed variables, optionally filtered by variable type.
   * @param variableType - Optional variable type string to filter by.
   * @returns VM array of variable handles.
   */
  getSubscribedVariables(variableType?: string): any {
    const {
      vm,
    } = this
    const arr = vm.newArray()
    const resolvedType = variableType ? rV(variableType) : null
    const subscribedVariables = CWU.getSubscribedVariablesInfo().filter(info => resolvedType === null || info.resolvedType === resolvedType)
    subscribedVariables.forEach((info: any, idx: number) => {
      const handle = this.createVariableHandle(info.id, this.sceneGraph)
      vm.setProp(arr, idx.toString(), handle)
    })
    return arr
  }

  /**
   * Asynchronously retrieves variables in a library collection by collection key.
   * @param collectionKey - The key of the variable collection.
   * @returns Promise resolving to a VM-wrapped array of variables.
   */
  getVariablesInLibraryCollectionAsync(collectionKey: string) {
    const {
      vm,
    } = this
    const {
      promise,
      resolve,
      reject,
    } = vm.newPromise()
    vm.registerPromise(rU(collectionKey)).then((variables: any) => resolve(vm.deepWrap(variables))).catch(reject)
    return promise
  }

  /**
   * Imports a variable by its key asynchronously, creating a variable handle.
   * @param variableKey - The key of the variable to import.
   * @returns Promise resolving to the created variable handle.
   */
  importByKeyAsync(variableKey: string) {
    const {
      vm,
    } = this
    const {
      promise,
      resolve,
      reject,
    } = vm.newPromise()
    vm.registerPromise(fetchAndSubscribeVariable(_$$ey(variableKey))).then((variableInfo: any) => resolve(permissionScopeHandler.plugin('plugin-create-variable', () => this.createVariableHandle(variableInfo, this.sceneGraph)))).catch((error: any) => {
      let errorMessage = `unable to import variable with key ${variableKey}`
      if (typeof error === 'string')
        errorMessage = error; else if (error instanceof Error)
        errorMessage = error.message
      reject(vm.newString(errorMessage))
    })
    return promise
  }
}

async function rU(variableCollectionKey) {
  // rU - Fetch variables from a variable collection

  const queryParams = d5({
    variableCollectionKey,
  })
  const collectionResult = (await QO(queryParams, (resolve, reject) => {
    const cachedCollection = zl.get<VariableResult>(queryParams)
    if (cachedCollection.status === 'loaded') {
      resolve(cachedCollection)
    }
    else if (cachedCollection.status === 'errors') {
      reject(`error fetching variables in collection with id "${variableCollectionKey}"`)
    }
  })) as VariableResult

  // Transform variables from the collection
  const variables = collectionResult.data?.variableCollection?.variables.map((variable) => {
    // Convert SYMBOL_ID to COMPONENT_ID for compatibility
    const resolvedType = variable.variableType === 'SYMBOL_ID' ? 'COMPONENT_ID' : variable.variableType
    return {
      name: variable.name,
      resolvedType,
      key: variable.key,
    }
  }) ?? []
  return variables
}

export function rV(variableType) {
  // rV - Map variable type strings to internal type constants

  switch (variableType) {
    case 'BOOLEAN':
      return rXF.BOOLEAN
    case 'COLOR':
      return rXF.COLOR
    case 'FLOAT':
      return rXF.FLOAT
    case 'MAP':
      return rXF.MAP
    case 'STRING':
      return rXF.STRING
    case 'COMPONENT_ID':
      return rXF.SYMBOL_ID
    case 'FONT_STYLE':
      return rXF.FONT_STYLE
    case 'TEXT_DATA':
      return rXF.TEXT_DATA
    case 'IMAGE':
      return rXF.IMAGE
    case 'LINK':
      return rXF.LINK
    case 'JS_RUNTIME_ALIAS':
      return rXF.JS_RUNTIME_ALIAS
    case 'SLOT_CONTENT_ID':
      return rXF.SLOT_CONTENT_ID
    default:
      throwTypeError(variableType, `Unsupported variable resolved type: ${variableType}`)
  }
}

/**
 * Map internal type to variable type string - helper function
 * Converts internal type constants to user-facing variable type strings
 * @param internalType - internal type constant to map
 * @returns variable type string or 'UNKNOWN' for unsupported types
 */
export function mapInternalTypeToVariableType(internalType) {
  switch (internalType) {
    case rXF.BOOLEAN:
      return 'BOOLEAN'
    case rXF.COLOR:
      return 'COLOR'
    case rXF.FLOAT:
      return 'FLOAT'
    case rXF.MAP:
      return 'MAP'
    case rXF.STRING:
      return 'STRING'
    case rXF.SYMBOL_ID:
      return 'COMPONENT_ID'
    case rXF.FONT_STYLE:
      return 'FONT_STYLE'
    case rXF.TEXT_DATA:
      return 'TEXT_DATA'
    case rXF.IMAGE:
      return 'IMAGE'
    case rXF.LINK:
      return 'LINK'
    case rXF.JS_RUNTIME_ALIAS:
    case rXF.SLOT_CONTENT_ID:
      throwTypeError(internalType, `Unsupported variable resolved type: ${internalType}`)
  }
}

export function rG(internalType) {
  // rG - Map internal type constants back to variable type strings

  const mappedType = mapInternalTypeToVariableType(internalType)

  // Validate the mapped type
  isPrivateVariableType(mappedType) && logInternalVariableExposure(mappedType)
  return mappedType
}

async function fetchAndProcessVariableData(variableKey) {
  // rH - Fetch variable data from external API and process it

  const queryParams = Y4({
    key: variableKey,
  })
  const variableResult = (await QO(queryParams, (resolve, reject) => {
    const cachedVariable = zl.get<LibraryResult>(queryParams)
    if (cachedVariable.status === 'loaded') {
      resolve(cachedVariable)
    }
    else if (cachedVariable.status === 'errors') {
      reject(cachedVariable.errors)
    }
  })) as any
  const fileInfo = variableResult.data?.variable?.file
  const hubFileInfo = variableResult.data?.variable?.hubFile && oA(variableResult.data.variable.hubFile, null)
  const processedFile = Zt(fileInfo, hubFileInfo)
  return variableResult.data?.variable && processedFile ? GA(variableResult.data.variable, processedFile, false) : null
}

/**
 * Get local variable info by key - helper function
 * Retrieves variable information from local cache with proper wrapping
 * @param key - variable key to lookup
 * @returns wrapped local variable info or null if not found
 */
export function getLocalVariableInfoByKey2(key) {
  const localVariableInfo = CWU.getLocalVariableInfoByKey(key)
  return localVariableInfo ? kz(localVariableInfo) : null
}

async function fetchAndSubscribeVariable(variableKey) {
  // rW - Load variable data and create subscription for changes

  // First try to get variable from local cache, then fetch remotely if needed
  const variableData = getLocalVariableInfoByKey2(variableKey) ?? (await fetchAndProcessVariableData(variableKey))
  if (!variableData) {
    throw new Error(`could not find variable with key "${variableKey}"`)
  }

  // Create a promise that resolves when variable is loaded and tracked
  return new Promise((resolve, reject) => {
    debugState.dispatch(Yi({
      item: variableData,
      callback: resolve,
      errorCallback: reject,
    }))
  })
}

export function isPrivateVariableType(variableType) {
  // rK - Check if variable type is internal-only (should not be exposed to users)
  return variableType === 'MAP' || variableType === 'COMPONENT_ID'
}

export function logInternalVariableExposure(variableType) {
  // rY - Log warning when internal variable type is exposed to user
  x1('variables-plugin', `Internal only variable type exposed to user: ${variableType}`)
}

async function fetchPublishStatusForCollection(variableCollectionId) {
  // rz - Get publish status for a variable collection

  // Update variables and wait for any pending operations
  NfO.updateVariables()
  await oH
  const currentState = debugState.getState()

  // Check if current document is published
  if (!d1(currentState)) {
    return 'UNPUBLISHED'
  }

  // Get variable collection status from published state
  const publishedCollections = _$$tK2(currentState)
  const collectionInfo = publishedCollections[variableCollectionId]
  return processPublishStatus(collectionInfo?.status)
}

/**
 * VariableCollectionAPI - Provides property and method definitions for variable collection objects.
 * Handles modes, default mode, key, remote status, variable IDs, publish status, removal, mode management, extension, etc.
 */
export const VariableCollectionAPI = {
  /**
   * Defines the 'modes' property for a variable collection.
   * Handles both standard and extended variable collections.
   */
  modes({
    vm,
    defineVmProp,
    getVariableCollectionNode,
  }, handle) {
    defineVmProp({
      handle,
      key: 'modes',
      canWriteInReadOnly: false,
      hasEditScope: false,
      options: {
        enumerable: true,
        metricsKey: 'variableCollection.modes',
        get() {
          if (CUU) {
            let modes = getVariableCollectionNode(this).modes
            let isExtension = CUU.isVariableSetExtension(getVariableCollectionNode(this).id)
            let collectionId = getVariableCollectionNode(this).id
            let backingCollection
            if (isExtension) {
              backingCollection = getSingletonSceneGraph().getVariableCollectionNode(getVariableCollectionNode(this).backingVariableCollectionId)
            }
            return vm.deepWrap(isExtension
              ? modes.map((mode) => {
                let parentModeId = ''
                if (mode.parentModeID && backingCollection) {
                  parentModeId = CUU?.isVariableSetExtension(backingCollection.id) ? `${backingCollection.id}/${mode.parentModeID}` : mode.parentModeID
                }
                return {
                  name: mode.name,
                  modeId: `${collectionId}/${mode.modeID}`,
                  parentModeId,
                }
              })
              : modes.map(mode => ({
                name: mode.name,
                modeId: mode.modeID,
              })))
          }
          return vm.newArray()
        },
      },
    })
  },
  /**
   * Defines the 'defaultModeId' property for a variable collection.
   */
  defaultModeId({
    vm,
    defineVmProp,
    getVariableCollectionNode,
  }, handle) {
    defineVmProp({
      handle,
      key: 'defaultModeId',
      canWriteInReadOnly: false,
      hasEditScope: false,
      options: {
        enumerable: true,
        metricsKey: 'variableCollection.defaultModeId',
        get() {
          return vm.newString(getVariableCollectionNode(this).defaultModeId)
        },
      },
    })
  },
  /**
   * Defines the 'key' property for a variable collection.
   */
  key({
    vm,
    defineVmProp,
    getVariableCollectionNode,
  }, handle) {
    defineVmProp({
      handle,
      key: 'key',
      canWriteInReadOnly: false,
      hasEditScope: false,
      options: {
        enumerable: true,
        metricsKey: 'variableCollection.key',
        get() {
          let assetKey = getVariableCollectionNode(this).assetKeyForPublish
          return assetKey ? vm.newString(assetKey) : vm.$$null
        },
      },
    })
  },
  /**
   * Defines the 'remote' property for a variable collection.
   */
  remote({
    vm,
    defineVmProp,
    getVariableCollectionNode,
  }, handle) {
    defineVmProp({
      handle,
      key: 'remote',
      canWriteInReadOnly: false,
      hasEditScope: false,
      options: {
        enumerable: true,
        metricsKey: 'variableCollection.remote',
        get() {
          return vm.newBoolean(getVariableCollectionNode(this).isSubscribedAsset)
        },
      },
    })
  },
  /**
   * Defines the 'variableIds' property for a variable collection.
   */
  variableIds({
    vm,
    defineVmProp,
    getVariableCollectionNode,
  }, handle) {
    defineVmProp({
      handle,
      key: 'variableIds',
      canWriteInReadOnly: false,
      hasEditScope: false,
      options: {
        enumerable: true,
        metricsKey: 'variableCollection.variableIds',
        get() {
          return vm.deepWrap(getVariableCollectionNode(this).variableIds)
        },
      },
    })
  },
  /**
   * Defines the 'getPublishStatusAsync' function for a variable collection.
   */
  getPublishStatus({
    vm,
    defineVmFunction,
    getVariableCollectionNode,
  }, handle) {
    defineVmFunction({
      handle,
      key: 'getPublishStatusAsync',
      metricsKey: 'variableCollection.getPublishStatusAsync',
      cb() {
        let {
          promise,
          resolve,
          reject,
        } = vm.newPromise()
        if (getVariableCollectionNode(this).isSubscribedAsset) {
          throw new Error('can only query publish status for local variable collections')
        }
        vm.registerPromise(rM(vm.getStringProp(this, 'id'))).then(status => resolve(vm.newString(status))).catch(reject)
        return promise
      },
      isAllowedInReadOnly: true,
      hasEditScope: false,
    })
  },
  /**
   * Defines the 'remove' function for a variable collection.
   */
  remove({
    vm,
    defineVmFunction,
    getVariableCollectionNode,
  }, handle) {
    defineVmFunction({
      handle,
      key: 'remove',
      metricsKey: 'variableCollection.remove',
      cb() {
        getVariableCollectionNode(this).removeSelfAndChildren()
        return vm.undefined
      },
      isAllowedInReadOnly: false,
      hasEditScope: true,
    })
  },
  /**
   * Defines the 'addMode' function for a variable collection.
   */
  addMode({
    vm,
    defineVmFunction,
    getVariableCollectionNode,
  }, handle) {
    defineVmFunction({
      handle,
      key: 'addMode',
      metricsKey: 'variableCollection.addMode',
      cb(modeNameHandle) {
        let modeName = _$$u({
          vm,
          handle: modeNameHandle,
          zSchema: _$$z.string(),
          property: 'modeName',
        })
        let collection = getVariableCollectionNode(this)
        return vm.newString(collection.addMode(modeName))
      },
      isAllowedInReadOnly: false,
      hasEditScope: true,
    })
  },
  /**
   * Defines the 'removeMode' function for a variable collection.
   */
  removeMode({
    vm,
    defineVmFunction,
    getVariableCollectionNode,
  }, handle) {
    defineVmFunction({
      handle,
      key: 'removeMode',
      metricsKey: 'variableCollection.removeMode',
      cb(modeIdHandle) {
        let modeId = _$$u({
          vm,
          handle: modeIdHandle,
          zSchema: _$$z.string(),
          property: 'modeId',
        })
        getVariableCollectionNode(this).removeMode(modeId)
        return vm.undefined
      },
      isAllowedInReadOnly: false,
      hasEditScope: true,
    })
  },
  /**
   * Defines the 'renameMode' function for a variable collection.
   */
  renameMode({
    vm,
    defineVmFunction,
    getVariableCollectionNode,
  }, handle) {
    defineVmFunction({
      handle,
      key: 'renameMode',
      metricsKey: 'variableCollection.renameMode',
      cb(modeIdHandle, newNameHandle) {
        let modeId = _$$u({
          vm,
          handle: modeIdHandle,
          zSchema: _$$z.string(),
          property: 'modeId',
        })
        let newName = _$$u({
          vm,
          handle: newNameHandle,
          zSchema: _$$z.string(),
          property: 'newName',
        })
        getVariableCollectionNode(this).renameMode(modeId, newName)
        return vm.undefined
      },
      isAllowedInReadOnly: false,
      hasEditScope: true,
    })
  },
  /**
   * Defines the 'setDefaultMode' function for a variable collection.
   */
  setDefaultMode({
    vm,
    defineVmFunction,
    getVariableCollectionNode,
  }, handle) {
    defineVmFunction({
      handle,
      key: 'setDefaultMode',
      metricsKey: 'variableCollection.setDefaultMode',
      cb(modeIdHandle) {
        let modeId = _$$u({
          vm,
          handle: modeIdHandle,
          zSchema: _$$z.string(),
          property: 'modeId',
        })
        getVariableCollectionNode(this).setDefaultMode(modeId)
        return vm.undefined
      },
      isAllowedInReadOnly: false,
      hasEditScope: true,
    })
  },
  /**
   * Defines the 'isExtension' property for a variable collection.
   */
  isExtension({
    vm,
    defineVmProp,
    getVariableCollectionNode,
  }, handle) {
    defineVmProp({
      handle,
      key: 'isExtension',
      canWriteInReadOnly: false,
      hasEditScope: false,
      options: {
        enumerable: true,
        metricsKey: 'variableCollection.isExtension',
        get() {
          return CUU ? vm.newBoolean(CUU.isVariableSetExtension(getVariableCollectionNode(this).id)) : vm.newBoolean(false)
        },
      },
    })
  },
  /**
   * Defines the 'extend' function for a variable collection.
   */
  extend({
    vm,
    defineVmFunction,
    getVariableCollectionFactory,
    getVariableCollectionNode,
  }, handle) {
    defineVmFunction({
      handle,
      key: 'extend',
      metricsKey: 'variableCollection.extend',
      cb(nameHandle) {
        if (!Ot()) {
          throw new Error('Cannot create extended collections outside of enterprise tier')
        }
        let name = _$$u({
          vm,
          handle: nameHandle,
          zSchema: _$$z.string(),
          property: 'name',
        })
        let collection = getVariableCollectionNode(this)
        if (collection.isSubscribedAsset) {
          throw new Error('Cannot use .extend on subscribed variable collections. Use `extendLibraryCollectionByKeyAsync` instead.')
        }
        let newId = getVariableCollectionFactory().createNewExtendedVariableCollection(collection.id, name)
        return getVariableCollectionFactory().createExtendedVariableCollectionHandle(newId)
      },
      isAllowedInReadOnly: false,
      hasEditScope: true,
    })
  },
}
/**
 * ExtendedVariableCollectionAPI - Provides property and method definitions for extended variable collections.
 * Handles inherited/local variable IDs, variable overrides, parent collection ID, and override removal.
 */
export const ExtendedVariableCollectionAPI = {
  /**
   * Defines the 'inheritedVariableIds' property for an extended variable collection.
   * Returns the IDs of variables inherited from the parent collection.
   */
  inheritedVariableIds({
    vm,
    defineVmProp,
    getVariableCollectionNode,
  }, handle) {
    defineVmProp({
      handle,
      key: 'inheritedVariableIds',
      canWriteInReadOnly: false,
      hasEditScope: false,
      options: {
        enumerable: true,
        metricsKey: 'extendedVariableCollection.inheritedVariableIds',
        get() {
          return vm.deepWrap(getVariableCollectionNode(this).inheritedVariableIds)
        },
      },
    })
  },
  /**
   * Defines the 'localVariableIds' property for an extended variable collection.
   * Returns the IDs of variables defined locally in the collection.
   */
  localVariableIds({
    vm,
    defineVmProp,
    getVariableCollectionNode,
  }, handle) {
    defineVmProp({
      handle,
      key: 'localVariableIds',
      canWriteInReadOnly: false,
      hasEditScope: false,
      options: {
        enumerable: true,
        metricsKey: 'extendedVariableCollection.localVariableIds',
        get() {
          return vm.deepWrap(getVariableCollectionNode(this).localVariableIds)
        },
      },
    })
  },
  /**
   * Defines the 'variableOverrides' property for an extended variable collection.
   * Returns an object mapping variable IDs to their override values.
   */
  variableOverrides({
    vm,
    defineVmProp,
    getVariableCollectionNode,
  }, handle) {
    defineVmProp({
      handle,
      key: 'variableOverrides',
      canWriteInReadOnly: false,
      hasEditScope: false,
      options: {
        enumerable: true,
        metricsKey: 'extendedVariableCollection.variableOverrides',
        get() {
          const overrides = getVariableCollectionNode(this).variableOverrides
          const result = {}
          for (const [varId, modeMap] of overrides.entries()) {
            const modeObj = {}
            for (const [modeId, value] of modeMap.entries()) {
              modeObj[modeId] = value
            }
            result[varId] = modeObj
          }
          return vm.deepWrap(result)
        },
      },
    })
  },
  /**
   * Defines the 'removeOverridesForVariable' function for an extended variable collection.
   * Removes all overrides for a given variable.
   */
  removeOverridesForVariable({
    vm,
    defineVmFunction,
    getNode,
  }, handle) {
    defineVmFunction({
      handle,
      key: 'removeOverridesForVariable',
      metricsKey: 'extendedVariableCollection.removeOverridesForVariable',
      cb(variableHandle) {
        const variableNode = getNode(variableHandle)
        if (!variableNode || variableNode.type !== 'VARIABLE')
          throw new Error('Invalid variable to clear')
        const variableId = vm.getStringProp(variableHandle, 'id')
        getNode(this).deleteOverridesForVariable(variableId)
        return vm.undefined
      },
      isAllowedInReadOnly: false,
      hasEditScope: true,
    })
  },
  /**
   * Defines the 'parentVariableCollectionId' property for an extended variable collection.
   * Returns the ID of the parent variable collection.
   */
  parentVariableCollectionId({
    vm,
    defineVmProp,
    getVariableCollectionNode,
  }, handle) {
    defineVmProp({
      handle,
      key: 'parentVariableCollectionId',
      canWriteInReadOnly: false,
      hasEditScope: false,
      options: {
        enumerable: true,
        metricsKey: 'extendedVariableCollection.parentVariableCollectionId',
        get() {
          return vm.newString(getVariableCollectionNode(this).backingVariableCollectionId)
        },
      },
    })
  },
}
