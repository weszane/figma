import { mapFilter } from "../figma_app/656233";
import { vA, xb } from "../figma_app/465776";
import { Det, egF, H$z, Dje, sYL, kz3 } from "../figma_app/763686";
import { zl } from "../figma_app/27355";
import { sx } from "../905/449184";
import { w } from "../905/5147";
import { x1 } from "../905/714362";
import { g as _$$g } from "../905/880308";
import { cb } from "../905/760074";
import { nX } from "../905/617744";
import { ap, NQ } from "../905/535806";
var $$n1;
export class $$g0 extends Error {
  constructor(e) {
    super(e);
    Object.setPrototypeOf(this, $$g0.prototype);
  }
}
class f extends Error {
  constructor(e) {
    super(e);
    Object.setPrototypeOf(this, f.prototype);
  }
}
(e => {
  function t(e, t) {
    return {
      originalIndex: e.originalIndex,
      phase: e.phase,
      displayNode: w.decodeNodeChange(e.displayNode),
      canvasId: e.canvasId,
      canvasIsInternal: e.canvasIsInternal,
      basisParentHierarchyGuids: e.basisParentHierarchyGuids,
      parentHierarchyGuids: e.parentHierarchyGuids,
      styleKey: e.styleKey,
      componentKey: e.componentKey,
      componentLibraryKey: e.componentLibraryKey,
      componentFileKey__DO_NOT_USE: e.componentFileKey__DO_NOT_USE,
      diffType: t
    };
  }
  function i(e) {
    let t = zl.get(nX);
    let i = {
      loadType: ap.GRANULAR,
      functionName: e.functionName,
      profileStep: NQ.JAVACRIPT_ONLY,
      durationMs: e.durationMs,
      branchFileKey: e.branchKey,
      sourceFileKey: e.sourceKey,
      diffType: e.diffType,
      nodeIds: e.nodeIds,
      branchModalTrackingId: e.branchModalTrackingId,
      direction: t
    };
    sx("Branch Modal Load Time", i);
  }
  function n(e, i) {
    vA(e.type === Det.GENERIC);
    e.variantChunks.length > 0 && cb(Error("Non-state group chunk with variants"));
    e.variableChunks.length > 0 && cb(Error("Non-variable collection with variable chunks"));
    let {
      basisChunkGuid,
      affectedChunks,
      mainChunk
    } = e;
    return {
      type: "generic",
      mainChunk: t(mainChunk, i),
      basisChunkGuid,
      affectedChunks: affectedChunks.map(e => g(e, i))
    };
  }
  function g(i, o) {
    switch (i.type) {
      case Det.STATE_GROUP:
        return function (e, i) {
          vA(e.type === Det.STATE_GROUP);
          e.variableChunks.length > 0 && cb(Error("Non-variable collection with variable chunks"));
          let {
            basisChunkGuid,
            affectedChunks,
            variantChunks,
            mainChunk
          } = e;
          return {
            type: "state-group",
            mainChunk: t(mainChunk, i),
            basisChunkGuid,
            affectedChunks: affectedChunks.map(e => g(e, i)),
            variantChunks: variantChunks.map(e => n(e, i))
          };
        }(i, o);
      case Det.VARIABLE_COLLECTION:
        return function (i, n) {
          vA(i.type === Det.VARIABLE_COLLECTION);
          i.variantChunks.length > 0 && cb(Error("Non-state group chunk with variants"));
          let {
            basisChunkGuid,
            variableChunks,
            mainChunk
          } = i;
          return {
            type: "variable-collection",
            mainChunk: t(mainChunk, n),
            basisChunkGuid,
            variableChunks: mapFilter(variableChunks, i => function (i, n) {
              i.variantChunks.length > 0 && cb(Error("Variable with variants"));
              i.affectedChunks.length > 0 && cb(Error("Variable with affected nodes"));
              let {
                basisChunkGuid: _basisChunkGuid,
                mainChunk: _mainChunk
              } = i;
              let s = t(_mainChunk, n);
              if (!_mainChunk.variableId) {
                cb(Error("Variable group missing variableId"), {
                  "variable id": _mainChunk.variableId,
                  "display node guid": s.displayNode.guid,
                  phase: s.phase,
                  type: s.displayNode.type
                });
                return null;
              }
              let {
                diffBasis
              } = e.getChunkChanges(n, s.originalIndex);
              return 0 === diffBasis.length ? (cb(Error("Expected basis changes for variable")), null) : {
                type: "variable",
                displayNode: s.displayNode,
                phase: s.phase,
                basisChunkGuid: _basisChunkGuid,
                variableId: _mainChunk.variableId,
                diffBasis: diffBasis[0]
              };
            }(i, n))
          };
        }(i, o);
      case Det.GENERIC:
        return n(i, o);
      default:
        xb(i.type);
    }
  }
  function _(e, t, i) {
    let n = egF.getParentHierarchyNodeChange(e, t, i);
    if (n.error) throw Error(n.error);
    return n.nodeChange;
  }
  e.setDiff = function (e, t, i, n, r) {
    let o = egF.setDiff(e, t, i, n, r);
    if (o !== H$z.SUCCESS) switch (o) {
      case H$z.MERGE_IN_PROGRESS:
        throw new f("a merge is already in progress");
      case H$z.PARSE_ERROR:
        throw Error("unable to parse diff");
      case H$z.VERSION_MISMATCH:
        break;
      case H$z.INTERNAL_ERROR:
        throw Error("could not get fullscreen app instance");
      default:
        xb(o);
    }
    return o;
  };
  e.getDiffMigrationVersion = function (e) {
    return egF.getDiffMigrationVersion(e);
  };
  e.clearDiffs = function () {
    return egF.clearDiffs();
  };
  e.parseChunk = t;
  e.trackGranularLoadTime = i;
  e.getChunks = function (e) {
    let i = egF.getChunks(e);
    if (i.error) throw Error(i.error);
    let n = [];
    for (let r of i.chunks) n.push(t(r, e));
    return n;
  };
  e.getAllGuids = function (e, t) {
    let i = egF.getAllGuids(e, t);
    if (i.error) throw Error(i.error);
    return i.guids;
  };
  e.getDisplayGroups = function (e, t) {
    let n = egF.getDisplayGroups(e, t.branchModalTrackingId);
    if (n.error) throw Error(n.error);
    if (!n.displayGroups) return [];
    let r = performance.now();
    let a = n.displayGroups.map(t => g(t, e));
    a.forEach(e => {
      let t = e.mainChunk;
      if ("state-group" === e.type && e.variantChunks.length > 0 && e.mainChunk.canvasIsInternal) {
        let i = e.variantChunks.find(e => e.mainChunk.phase !== Dje.UNMODIFIED) ?? e.variantChunks[0];
        i && (t.displayNode.guid = i.mainChunk.displayNode.guid);
      }
    });
    i({
      durationMs: performance.now() - r,
      functionName: "getDisplayGroups",
      diffType: sYL[e],
      ...t
    });
    return a;
  };
  e.getChunkChanges = function (e, t) {
    let i = egF.getChunkChanges(e, t);
    if (i.error) throw Error(i.error);
    return {
      nodeChanges: (i.nodeChanges && i.nodeChanges.length > 0 ? w.decodeMessage(i.nodeChanges).nodeChanges : []) ?? [],
      diffBasis: (i.diffBasis && i.diffBasis.length > 0 ? w.decodeMessage(i.diffBasis).nodeChanges : []) ?? []
    };
  };
  e.getParentHierarchyNodeChange = _;
  e.parseParentHierarchyNodeChange = function (e) {
    return {
      guid: e.guid ? `${e.guid?.sessionID}:${e.guid?.localID}` : "",
      parentIndexPosition: e.parentIndex?.position ?? "",
      backgroundColor: e.backgroundColor ? {
        red: e.backgroundColor.r,
        green: e.backgroundColor.g,
        blue: e.backgroundColor.b,
        alpha: e.backgroundColor.a
      } : null,
      name: e.name || "",
      internalOnly: e.internalOnly || null,
      isStateGroup: e.isStateGroup || null
    };
  };
  e.getImmediateParentHierarchyNodeChange = function (e, t) {
    let i;
    switch (t) {
      case kz3.BASIS_PARENT:
        i = e.basisParentHierarchyGuids;
        break;
      case kz3.PARENT:
        i = e.parentHierarchyGuids;
        break;
      default:
        xb(t);
    }
    if (i && i.length > 0) return _(e.diffType, i[0], t);
  };
  e.getTopLevelParentHierarchyNodeChange = function (e, t) {
    let i;
    switch (t) {
      case kz3.BASIS_PARENT:
        i = e.basisParentHierarchyGuids;
        break;
      case kz3.PARENT:
        i = e.parentHierarchyGuids;
        break;
      default:
        xb(t);
    }
    if (i && i.length > 0) return _(e.diffType, i[i.length - 1], t);
  };
  e.getExternalMediaFromDiff = function (e) {
    let {
      error,
      imageShas,
      videoShas
    } = egF.getExternalImagesFromDiff(e);
    if (error || null === imageShas || null === videoShas) throw Error(error || "Failed to getExternalMediaFromDiff");
    return {
      imageShas,
      videoShas
    };
  };
  e.InvalidStateTransitionError = class extends Error {};
  e.getConflicts = function (e) {
    let n = performance.now();
    let r = egF.getConflictingChunkGroups(e.branchModalTrackingId);
    if (r.error) throw Error(r.error);
    let a = r.conflictingChunkGroups.map(e => ({
      id: _$$g(),
      sourceChunks: e.sourceChunks.map(e => t(e, sYL.SOURCE)),
      branchChunks: e.branchChunks.map(e => t(e, sYL.BRANCH)),
      secondarySourceChunkGUIDs: e.sourceChunkParentGUIDs,
      secondaryBranchChunkGUIDs: e.branchChunkParentGUIDs
    }));
    i({
      durationMs: performance.now() - n,
      functionName: "getConflicts",
      ...e
    });
    r.buggedConflictingGUIDs.length > 0 && (x1("Branching", "bugged conflicting guids", {
      branchKey: e.branchKey,
      truncatedGuids: r.buggedConflictingGUIDs.slice(0, 5)
    }), cb(Error("bugged conflicting guids")));
    return {
      conflictGroups: a,
      nonConflictingBranchChunkGUIDs: r.nonConflictingBranchChunkGUIDs,
      nonConflictingSourceChunkGUIDs: r.nonConflictingSourceChunkGUIDs,
      identicalChunkGUIDs: r.identicalChunkGUIDs,
      isMergeRequired: r.isMergeRequired,
      buggedConflictingGUIDs: r.buggedConflictingGUIDs
    };
  };
  e.updateBranchingStagerDirection = function (e) {
    egF.updateBranchingStagerDirection(e);
  };
})($$n1 || ($$n1 = {}));
export const XA = $$g0;
export const rY = $$n1;