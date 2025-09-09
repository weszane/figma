// Imports refactored to match new exported names
import type {
  ReturnKeyVersion,
} from '../905/859698'
import {
  CodeComponentId,
  CodeFileId,
  CodeLibraryId,
  ManagedStringId,
  ModuleId,
  ResponsiveSetId,
  StateGroupId,
  StyleId,
  SymbolId,
  VariableCollectionId,
  VariableID,
  VariableOverrideId,
} from '../905/859698'
import {
  defaultSessionLocalID,
  defaultSessionLocalIDString,
  isValidSessionLocalID,
  parseSessionLocalID,
  sessionLocalIDToString,
} from '../905/871411'
import { debug } from '../figma_app/465776'

/**
 * Utility for handling prefixed node IDs and their conversions.
 * Original function: y
 */
function createNodeIdHandler(prefix: string, refType: ReturnKeyVersion) {
  /**
   * Helper to match and process prefixed strings.
   */
  function matchPrefix(str: string, fn: (s: string) => any) {
    return str.startsWith(prefix) ? fn(str.slice(prefix.length)) : null
  }
  /**
   * Converts string to refType.
   */
  function refFromString(str: string) {
    return refType.fromString(str)
  }
  /**
   * Returns sessionLocalID if string is not a refType.
   */
  function guidObjIfLocal(str: string) {
    return matchPrefix(str, s => refFromString(s) ? null : parseSessionLocalID(s))
  }
  /**
   * Returns refType if string is a refType.
   */
  function refIfSubscribed(str: string) {
    return matchPrefix(str, s => refFromString(s))
  }
  /**
   * Converts sessionLocalID to prefixed string.
   */
  function fromLocalNodeIdObj(id: any) {
    return prefix + sessionLocalIDToString(id)
  }
  /**
   * Converts refType to prefixed string.
   */
  function fromRef(ref: any) {
    return prefix + refType.toString(ref)
  }

  return {
    /**
     * Returns the input string.
     * Original: toString
     */
    toString(str: string) {
      return str
    },
    /**
     * Converts string to Kiwi object.
     * Original: toKiwi
     */
    toKiwi(str: string) {
      return (
        matchPrefix(str, (s) => {
          const ref = refFromString(s)
          if (ref) {
            return { assetRef: ref }
          }
          const guid = parseSessionLocalID(s)
          if (guid) {
            return { guid }
          }
        }) ?? { guid: defaultSessionLocalID }
      )
    },
    /**
     * Returns sessionLocalID if local.
     * Original: toGuidObjIfLocal
     */
    toGuidObjIfLocal: guidObjIfLocal,
    /**
     * Returns guid string if local.
     * Original: toGuidStrIfLocal
     */
    toGuidStrIfLocal(str: string) {
      return matchPrefix(str, s => refFromString(s) ? null : s)
    },
    /**
     * Returns refType if subscribed.
     * Original: toRefIfSubscribed
     */
    toRefIfSubscribed: refIfSubscribed,
    /**
     * Parses string to node ID.
     * Original: fromString
     */
    fromString(str: string) {
      return matchPrefix(str, s => parseSessionLocalID(s) || refFromString(s) ? str : null)
    },
    /**
     * Converts sessionLocalID to prefixed string.
     * Original: fromLocalNodeIdObj
     */
    fromLocalNodeIdObj,
    /**
     * Converts sessionLocalID string to prefixed string.
     * Original: fromLocalNodeIdStr
     */
    fromLocalNodeIdStr(str: string) {
      return parseSessionLocalID(str) ? prefix + str : null
    },
    /**
     * Converts refType to prefixed string.
     * Original: fromRef
     */
    fromRef,
    /**
     * Converts Kiwi object to node ID string.
     * Original: fromKiwi
     */
    fromKiwi(obj: any) {
      if (!obj)
        return null
      const { guid, assetRef } = obj
      if (guid && !assetRef)
        return fromLocalNodeIdObj(guid)
      if (!guid && assetRef) {
        const ref = refType.fromKiwi(assetRef)
        if (ref)
          return fromRef(ref)
      }
      return null
    },
    /**
     * Validates node ID string.
     * Original: isValid
     */
    isValid(str: string) {
      const guid = guidObjIfLocal(str)
      if (guid)
        return isValidSessionLocalID(guid)
      const ref = refIfSubscribed(str)
      return !!ref && refType.isValid(ref)
    },
  }
}

// Node ID handlers grouped by business logic
export const CodeLibraryIdHandler = createNodeIdHandler('CodeLibraryId:', CodeLibraryId)
export const CodeFileIdHandler = createNodeIdHandler('CodeFileId:', CodeFileId)
export const CodeComponentIdHandler = createNodeIdHandler('CodeComponentId:', CodeComponentId)
export const ManagedStringIdHandler = createNodeIdHandler('ManagedStringId:', ManagedStringId)
export const ResponsiveSetIdHandler = createNodeIdHandler('ResponsiveSetId:', ResponsiveSetId)
export const SymbolIdHandler = createNodeIdHandler('SymbolId:', SymbolId)
export const StateGroupIdHandler = createNodeIdHandler('StateGroupId:', StateGroupId)
export const StyleIdHandler = {
  ...createNodeIdHandler('StyleId:', StyleId),
  /**
   * Converts bindings object to StyleId string.
   * Original: fromBindingsObj
   */
  fromBindingsObj(bindings: any) {
    return bindings.guid && bindings.guid !== defaultSessionLocalIDString
      ? StyleIdHandler.fromLocalNodeIdStr(bindings.guid)
      : StyleIdHandler.fromRef(bindings.ref)
  },
}
export const VariableIdHandler = createNodeIdHandler('VariableID:', VariableID)
export const VariableOverrideIdHandler = createNodeIdHandler('VariableOverrideId:', VariableOverrideId)
export const VariableCollectionIdHandler = createNodeIdHandler('VariableCollectionId:', VariableCollectionId)
export const VariableSetIdHandler = createNodeIdHandler('VariableSetID:', VariableCollectionId)
export const ModuleIdHandler = createNodeIdHandler('ModuleId:', ModuleId)

// Handles deprecated VariableSetID prefix
/**
 * Handles both current and deprecated VariableSetID formats.
 * Original: inode13
 */
function handleVariableSetId({
  current,
  deprecated,
}: {
  current: (str: string) => any
  deprecated: (str: string) => any
}) {
  const deprecatedPrefix = 'VariableSetID:'
  return (str: string) =>
    str.startsWith(deprecatedPrefix) ? deprecated(str) : current(str)
}

export const VariableSetIdCompatHandler = {
  INVALID: VariableCollectionIdHandler.fromLocalNodeIdStr(defaultSessionLocalIDString),
  toString: VariableCollectionIdHandler.toString,
  toKiwi: handleVariableSetId({
    current: VariableCollectionIdHandler.toKiwi,
    deprecated: VariableSetIdHandler.toKiwi,
  }),
  toGuidObjIfLocal: handleVariableSetId({
    current: VariableCollectionIdHandler.toGuidObjIfLocal,
    deprecated: VariableSetIdHandler.toGuidObjIfLocal,
  }),
  toGuidStrIfLocal: handleVariableSetId({
    current: VariableCollectionIdHandler.toGuidStrIfLocal,
    deprecated: VariableSetIdHandler.toGuidStrIfLocal,
  }),
  toRefIfSubscribed: handleVariableSetId({
    current: VariableCollectionIdHandler.toRefIfSubscribed,
    deprecated: VariableSetIdHandler.toRefIfSubscribed,
  }),
  fromString: handleVariableSetId({
    current: VariableCollectionIdHandler.fromString,
    deprecated: VariableSetIdHandler.fromString,
  }),
  fromLocalNodeIdObj: VariableCollectionIdHandler.fromLocalNodeIdObj,
  fromLocalNodeIdStr: VariableCollectionIdHandler.fromLocalNodeIdStr,
  fromRef: VariableCollectionIdHandler.fromRef,
  fromKiwi: VariableCollectionIdHandler.fromKiwi,
  isValid: handleVariableSetId({
    current: VariableCollectionIdHandler.isValid,
    deprecated: VariableSetIdHandler.isValid,
  }),
}

/**
 * CanvasNodeId handler for multiple node types.
 * Original: $$m5
 */
export const CanvasNodeIdHandler = {
  /**
   * Converts Kiwi object to CanvasNodeId.
   * Original: fromKiwi
   */
  fromKiwi(obj: any) {
    if (obj.guid) {
      return {
        type: 'guid',
        guid: sessionLocalIDToString(obj.guid),
      }
    }
    if (obj.stateGroupId) {
      const stateGroupId = StateGroupIdHandler.fromKiwi(obj.stateGroupId)
      if (stateGroupId) {
        return {
          type: 'stateGroup',
          stateGroupId,
        }
      }
    }
    if (obj.symbolId) {
      const symbolId = SymbolIdHandler.fromKiwi(obj.symbolId)
      if (symbolId) {
        return {
          type: 'symbol',
          symbolId,
        }
      }
    }
    debug(false, 'Unhandled CanvasNodeId type')
  },
  /**
   * Converts CanvasNodeId to guid string if local.
   * Original: toGuidStrIfLocal
   */
  toGuidStrIfLocal(node: any) {
    switch (node.type) {
      case 'guid':
        return node.guid
      case 'symbol':
        return SymbolIdHandler.toGuidStrIfLocal(node.symbolId)
      case 'stateGroup':
        return StateGroupIdHandler.toGuidStrIfLocal(node.stateGroupId)
    }
  },
  /**
   * Converts CanvasNodeId to ref if subscribed.
   * Original: toRefIfSubscribed
   */
  toRefIfSubscribed(node: any) {
    switch (node.type) {
      case 'guid':
        return null
      case 'symbol':
        return SymbolIdHandler.toRefIfSubscribed(node.symbolId)
      case 'stateGroup':
        return StateGroupIdHandler.toRefIfSubscribed(node.stateGroupId)
    }
  },
  /**
   * Converts CanvasNodeId to string.
   * Original: toString
   */
  toString(node: any) {
    switch (node.type) {
      case 'guid':
        return node.guid
      case 'symbol':
        return SymbolIdHandler.toString(node.symbolId)
      case 'stateGroup':
        return StateGroupIdHandler.toString(node.stateGroupId)
    }
  },
  /**
   * Parses string to CanvasNodeId.
   * Original: fromString
   */
  fromString(str: string) {
    const symbolId = SymbolIdHandler.fromString(str)
    if (symbolId) {
      return {
        type: 'symbol',
        symbolId,
      }
    }
    const stateGroupId = StateGroupIdHandler.fromString(str)
    if (stateGroupId) {
      return {
        type: 'stateGroup',
        stateGroupId,
      }
    }
    return parseSessionLocalID(str)
      ? { type: 'guid', guid: str }
      : null
  },
}

// Exported aliases for business logic grouping
export const GU = StateGroupIdHandler
export const Kw = VariableOverrideIdHandler
export const PK = StyleIdHandler
export const Tq = CodeFileIdHandler
export const Ws = SymbolIdHandler
export const YB = CanvasNodeIdHandler
export const _H = CodeComponentIdHandler
export const cd = ResponsiveSetIdHandler
export const eJ = CodeLibraryIdHandler
export const gr = VariableSetIdCompatHandler
export const oW = ManagedStringIdHandler
export const sD = VariableIdHandler
export const h = ModuleIdHandler

// Export INVALID constants for each handler
export const $$n8 = {
  INVALID: CodeLibraryIdHandler.fromLocalNodeIdStr(defaultSessionLocalIDString),
  ...CodeLibraryIdHandler,
}
export const $$i3 = {
  INVALID: CodeFileIdHandler.fromLocalNodeIdStr(defaultSessionLocalIDString),
  ...CodeFileIdHandler,
}
export const $$a6 = {
  INVALID: CodeComponentIdHandler.fromLocalNodeIdStr(defaultSessionLocalIDString),
  ...CodeComponentIdHandler,
}
export const $$s10 = {
  INVALID: ManagedStringIdHandler.fromLocalNodeIdStr(defaultSessionLocalIDString),
  ...ManagedStringIdHandler,
}
export const $$o7 = {
  INVALID: ResponsiveSetIdHandler.fromLocalNodeIdStr(defaultSessionLocalIDString),
  ...ResponsiveSetIdHandler,
}
export const $$l4 = {
  INVALID: SymbolIdHandler.fromLocalNodeIdStr(defaultSessionLocalIDString),
  ...SymbolIdHandler,
}
export const $$d0 = {
  INVALID: StateGroupIdHandler.fromLocalNodeIdStr(defaultSessionLocalIDString),
  ...StateGroupIdHandler,
}
export const $$c2 = {
  INVALID: StyleIdHandler.fromLocalNodeIdStr(defaultSessionLocalIDString),
  ...StyleIdHandler,
}
export const $$u11 = {
  INVALID: VariableIdHandler.fromLocalNodeIdStr(defaultSessionLocalIDString),
  ...VariableIdHandler,
}
export const $$p1 = {
  INVALID: VariableOverrideIdHandler.fromLocalNodeIdStr(defaultSessionLocalIDString),
  ...VariableOverrideIdHandler,
}
export const $$_9 = VariableSetIdCompatHandler
export const $$m5 = CanvasNodeIdHandler
