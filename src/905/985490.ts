import { kiwiCodec } from "../905/5147"
import { trackEventAnalytics } from "../905/449184"
import { AggregationType, LanguageType } from "../905/535806"
import { currentSelectionAtom } from "../905/617744"
import { logError } from "../905/714362"
import { handleModalError } from "../905/760074"
import { generateUUIDv4 } from "../905/871474"
import { atomStoreManager } from "../figma_app/27355"
import { assert, throwTypeError } from "../figma_app/465776"
import { mapFilter } from "../figma_app/656233"
import { CollectionGroupType, DiffImpl, GitReferenceType, LibraryUpdateStatus, OperationResult, RelationType } from "../figma_app/763686"

class InvalidStateTransitionError extends Error { }
// Refactored code with improved readability, type safety, and structure
export let DiffManager = {
  /**
   * Parse a chunk and decode its display node
   * @param chunk - The chunk to parse
   * @param diffType - The type of diff
   * @returns Parsed chunk with decoded display node
   */
  parseChunk(chunk: any, diffType: GitReferenceType) {
    return {
      originalIndex: chunk.originalIndex,
      phase: chunk.phase,
      displayNode: kiwiCodec.decodeNodeChange(chunk.displayNode),
      canvasId: chunk.canvasId,
      canvasIsInternal: chunk.canvasIsInternal,
      basisParentHierarchyGuids: chunk.basisParentHierarchyGuids,
      parentHierarchyGuids: chunk.parentHierarchyGuids,
      styleKey: chunk.styleKey,
      componentKey: chunk.componentKey,
      componentLibraryKey: chunk.componentLibraryKey,
      componentFileKey__DO_NOT_USE: chunk.componentFileKey__DO_NOT_USE,
      diffType,
    }
  },

  /**
   * Track granular load time for analytics
   * @param params - Tracking parameters
   */
  trackGranularLoadTime(params: {
    functionName: string
    durationMs: number
    branchKey: string
    sourceKey: string
    diffType: GitReferenceType
    nodeIds?: string[]
    branchModalTrackingId: string
  }) {
    const direction = atomStoreManager.get(currentSelectionAtom)

    const trackingData = {
      loadType: AggregationType.GRANULAR,
      functionName: params.functionName,
      profileStep: LanguageType.JAVASCRIPT_ONLY,
      durationMs: params.durationMs,
      branchFileKey: params.branchKey,
      sourceFileKey: params.sourceKey,
      diffType: params.diffType,
      nodeIds: params.nodeIds,
      branchModalTrackingId: params.branchModalTrackingId,
      direction,
    }

    trackEventAnalytics("Branch Modal Load Time", trackingData)
  },

  /**
   * Process a generic collection group
   * @param group - The collection group to process
   * @param diffType - The type of diff
   * @returns Processed generic group
   */
  processGenericGroup(group: any, diffType: GitReferenceType) {
    assert(group.type === CollectionGroupType.GENERIC)

    if (group.variantChunks.length > 0) {
      handleModalError(new Error("Non-state group chunk with variants"))
    }

    if (group.variableChunks.length > 0) {
      handleModalError(new Error("Non-variable collection with variable chunks"))
    }

    const {
      basisChunkGuid,
      affectedChunks,
      mainChunk,
    } = group

    return {
      type: "generic" as const,
      mainChunk: this.parseChunk(mainChunk, diffType),
      basisChunkGuid,
      affectedChunks: affectedChunks.map(chunk => this.processCollectionGroup(chunk, diffType)),
    }
  },

  /**
   * Process a collection group based on its type
   * @param group - The collection group to process
   * @param diffType - The type of diff
   * @returns Processed collection group
   */
  processCollectionGroup(group: any, diffType: GitReferenceType): any {
    switch (group.type) {
      case CollectionGroupType.STATE_GROUP:
        assert(group.type === CollectionGroupType.STATE_GROUP)

        if (group.variableChunks.length > 0) {
          handleModalError(new Error("Non-variable collection with variable chunks"))
        }

        const {
          basisChunkGuid: stateBasisChunkGuid,
          affectedChunks: stateAffectedChunks,
          variantChunks,
          mainChunk: stateMainChunk,
        } = group

        return {
          type: "state-group" as const,
          mainChunk: this.parseChunk(stateMainChunk, diffType),
          basisChunkGuid: stateBasisChunkGuid,
          affectedChunks: stateAffectedChunks.map(chunk => this.processCollectionGroup(chunk, diffType)),
          variantChunks: variantChunks.map(chunk => this.processGenericGroup(chunk, diffType)),
        }

      case CollectionGroupType.VARIABLE_COLLECTION:
        assert(group.type === CollectionGroupType.VARIABLE_COLLECTION)

        if (group.variantChunks.length > 0) {
          handleModalError(new Error("Non-state group chunk with variants"))
        }

        const {
          basisChunkGuid: varBasisChunkGuid,
          variableChunks,
          mainChunk: varMainChunk,
        } = group

        return {
          type: "variable-collection" as const,
          mainChunk: this.parseChunk(varMainChunk, diffType),
          basisChunkGuid: varBasisChunkGuid,
          variableChunks: mapFilter(variableChunks, (variableChunk: any) => {
            if (variableChunk.variantChunks.length > 0) {
              handleModalError(new Error("Variable with variants"))
            }

            if (variableChunk.affectedChunks.length > 0) {
              handleModalError(new Error("Variable with affected nodes"))
            }

            const {
              basisChunkGuid: varChunkBasisGuid,
              mainChunk: varChunkMain,
            } = variableChunk

            const parsedChunk = this.parseChunk(varChunkMain, diffType)

            if (!varChunkMain.variableId) {
              handleModalError(new Error("Variable group missing variableId"), {
                "variable id": varChunkMain.variableId,
                "display node guid": parsedChunk.displayNode.guid,
                "phase": parsedChunk.phase,
                "type": parsedChunk.displayNode.type,
              })
              return null
            }

            const { diffBasis } = this.getChunkChanges(diffType, parsedChunk.originalIndex)

            if (diffBasis.length === 0) {
              handleModalError(new Error("Expected basis changes for variable"))
              return null
            }

            return {
              type: "variable" as const,
              displayNode: parsedChunk.displayNode,
              phase: parsedChunk.phase,
              basisChunkGuid: varChunkBasisGuid,
              variableId: varChunkMain.variableId,
              diffBasis: diffBasis[0],
            }
          }),
        }

      case CollectionGroupType.GENERIC:
        return this.processGenericGroup(group, diffType)

      default:
        throwTypeError(group.type)
    }
  },

  /**
   * Get parent hierarchy node change
   * @param diffType - The type of diff
   * @param guid - The GUID to look up
   * @param relationType - The type of relationship
   * @returns Parent hierarchy node change
   */
  getParentHierarchyNodeChange(diffType: GitReferenceType, guid: string, relationType: RelationType) {
    const result = DiffImpl.getParentHierarchyNodeChange(diffType, guid, relationType)

    if (result.error) {
      throw new Error(result.error)
    }

    return result.nodeChange
  },

  // Public API methods
  setDiff(a: any, b: any, c: any, d: any, e: any) {
    const result = DiffImpl.setDiff(a, b, c, d, e)

    if (result !== OperationResult.SUCCESS) {
      switch (result) {
        case OperationResult.MERGE_IN_PROGRESS:
          throw new MergeInProgressError("a merge is already in progress")
        case OperationResult.PARSE_ERROR:
          throw new Error("unable to parse diff")
        case OperationResult.VERSION_MISMATCH:
          // Intentionally fall through
          break
        case OperationResult.INTERNAL_ERROR:
          throw new Error("could not get fullscreen app instance")
        default:
          throwTypeError(result)
      }
    }

    return result
  },

  getDiffMigrationVersion(diffData: any) {
    return DiffImpl.getDiffMigrationVersion(diffData)
  },

  clearDiffs() {
    return DiffImpl.clearDiffs()
  },

  getChunks(diffType: GitReferenceType) {
    const result = DiffImpl.getChunks(diffType)

    if (result.error) {
      throw new Error(result.error)
    }

    return result.chunks.map(chunk => this.parseChunk(chunk, diffType))
  },

  getAllGuids(diffType: GitReferenceType, params: any) {
    const result = DiffImpl.getAllGuids(diffType, params)

    if (result.error) {
      throw new Error(result.error)
    }

    return result.guids
  },

  getDisplayGroups(diffType: GitReferenceType, params: any) {
    const result = DiffImpl.getDisplayGroups(diffType, params.branchModalTrackingId)

    if (result.error) {
      throw new Error(result.error)
    }

    if (!result.displayGroups) {
      return []
    }

    const startTime = performance.now()
    const displayGroups = result.displayGroups.map(group => this.processCollectionGroup(group, diffType))

    // Update GUIDs for internal canvas state groups
    displayGroups.forEach((group) => {
      const mainChunk = group.mainChunk

      if (group.type === "state-group"
        && group.variantChunks.length > 0
        && group.mainChunk.canvasIsInternal) {
        const variantChunk = group.variantChunks.find(
          chunk => chunk.mainChunk.phase !== LibraryUpdateStatus.UNMODIFIED,
        ) ?? group.variantChunks[0]

        if (variantChunk) {
          mainChunk.displayNode.guid = variantChunk.mainChunk.displayNode.guid
        }
      }
    })

    this.trackGranularLoadTime({
      durationMs: performance.now() - startTime,
      functionName: "getDisplayGroups",
      diffType,
      ...params,
    })

    return displayGroups
  },

  getChunkChanges(diffType: GitReferenceType, index: number) {
    const result = DiffImpl.getChunkChanges(diffType, index)

    if (result.error) {
      throw new Error(result.error)
    }

    return {
      nodeChanges: (result.nodeChanges && result.nodeChanges.length > 0
        ? kiwiCodec.decodeMessage(result.nodeChanges).nodeChanges
        : []) ?? [],
      diffBasis: (result.diffBasis && result.diffBasis.length > 0
        ? kiwiCodec.decodeMessage(result.diffBasis).nodeChanges
        : []) ?? [],
    }
  },

  parseParentHierarchyNodeChange(nodeChange: any) {
    return {
      guid: nodeChange.guid ? `${nodeChange.guid?.sessionID}:${nodeChange.guid?.localID}` : "",
      parentIndexPosition: nodeChange.parentIndex?.position ?? "",
      backgroundColor: nodeChange.backgroundColor
        ? {
            red: nodeChange.backgroundColor.r,
            green: nodeChange.backgroundColor.g,
            blue: nodeChange.backgroundColor.b,
            alpha: nodeChange.backgroundColor.a,
          }
        : null,
      name: nodeChange.name || "",
      internalOnly: nodeChange.internalOnly || null,
      isStateGroup: nodeChange.isStateGroup || null,
    }
  },

  getImmediateParentHierarchyNodeChange(chunk: any, relationType: RelationType) {
    let hierarchyGuids: string[] | undefined

    switch (relationType) {
      case RelationType.BASIS_PARENT:
        hierarchyGuids = chunk.basisParentHierarchyGuids
        break
      case RelationType.PARENT:
        hierarchyGuids = chunk.parentHierarchyGuids
        break
      default:
        throwTypeError(relationType)
    }

    if (hierarchyGuids && hierarchyGuids.length > 0) {
      return this.getParentHierarchyNodeChange(chunk.diffType, hierarchyGuids[0], relationType)
    }
  },

  getTopLevelParentHierarchyNodeChange(chunk: any, relationType: RelationType) {
    let hierarchyGuids: string[] | undefined

    switch (relationType) {
      case RelationType.BASIS_PARENT:
        hierarchyGuids = chunk.basisParentHierarchyGuids
        break
      case RelationType.PARENT:
        hierarchyGuids = chunk.parentHierarchyGuids
        break
      default:
        throwTypeError(relationType)
    }

    if (hierarchyGuids && hierarchyGuids.length > 0) {
      return this.getParentHierarchyNodeChange(chunk.diffType, hierarchyGuids[hierarchyGuids.length - 1], relationType)
    }
  },

  getExternalMediaFromDiff(diffType: GitReferenceType) {
    const {
      error,
      imageShas,
      videoShas,
    } = DiffImpl.getExternalImagesFromDiff(diffType)

    if (error || imageShas === null || videoShas === null) {
      throw new Error(error || "Failed to getExternalMediaFromDiff")
    }

    return {
      imageShas,
      videoShas,
    }
  },

  InvalidStateTransitionError,

  getConflicts(params: any) {
    const startTime = performance.now()
    const result = DiffImpl.getConflictingChunkGroups(params.branchModalTrackingId)

    if (result.error) {
      throw new Error(result.error)
    }

    const conflictGroups = result.conflictingChunkGroups.map(group => ({
      id: generateUUIDv4(),
      sourceChunks: group.sourceChunks.map(chunk => this.parseChunk(chunk, GitReferenceType.SOURCE)),
      branchChunks: group.branchChunks.map(chunk => this.parseChunk(chunk, GitReferenceType.BRANCH)),
      secondarySourceChunkGUIDs: group.sourceChunkParentGUIDs,
      secondaryBranchChunkGUIDs: group.branchChunkParentGUIDs,
    }))

    this.trackGranularLoadTime({
      durationMs: performance.now() - startTime,
      functionName: "getConflicts",
      ...params,
    })

    if (result.buggedConflictingGUIDs.length > 0) {
      logError("Branching", "bugged conflicting guids", {
        branchKey: params.branchKey,
        truncatedGuids: result.buggedConflictingGUIDs.slice(0, 5),
      })
      handleModalError(new Error("bugged conflicting guids"))
    }

    return {
      conflictGroups,
      nonConflictingBranchChunkGUIDs: result.nonConflictingBranchChunkGUIDs,
      nonConflictingSourceChunkGUIDs: result.nonConflictingSourceChunkGUIDs,
      identicalChunkGUIDs: result.identicalChunkGUIDs,
      isMergeRequired: result.isMergeRequired,
      buggedConflictingGUIDs: result.buggedConflictingGUIDs,
    }
  },

  updateBranchingStagerDirection(direction: any) {
    DiffImpl.updateBranchingStagerDirection(direction)
  },
}

// Custom error classes with proper typing
export class DiffError extends Error {
  constructor(message: string) {
    super(message)
    Object.setPrototypeOf(this, DiffError.prototype)
  }
}

class MergeInProgressError extends Error {
  constructor(message: string) {
    super(message)
    Object.setPrototypeOf(this, MergeInProgressError.prototype)
  }
}

export const XA = DiffError
export const rY = DiffManager
