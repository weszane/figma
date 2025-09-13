import { useState, useRef, useContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import { throwTypeError } from "../figma_app/465776";
import { ServiceCategories as _$$e } from "../905/165054";
import { GitReferenceType, DiffImpl, MergeStatus, PreviewStage, UndoActionStatus, StateTransitionResult, PluginModalType, AutosaveEventType } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import { trackEventAnalytics } from "../905/449184";
import { reportError } from "../905/11";
import { logInfo } from "../905/714362";
import { generateUUIDv4 } from "../905/871474";
import { XHR } from "../905/910117";
import { rY, XA } from "../905/985490";
import { handleModalError, handleError, getDiffVersion } from "../905/760074";
import { handleLoadAllPagesWithVersionCheck } from "../905/807667";
import { Jr } from "../figma_app/624361";
import { subscribeToContainingPages } from "../figma_app/582924";
import { enterPreviewDetachedState, abandonBranchingChanges } from "../905/346794";
import { Z_, yQ } from "../figma_app/793953";
import { tG } from "../figma_app/723183";
import { Qx, SN } from "../905/491806";
import { CPPEventType, SourceDirection } from "../905/535806";
import { createNoOpValidator } from "../figma_app/181241";
import { FT, ss } from "../905/746499";
import { mT } from "../905/432493";
let S = new class {
  constructor() {
    this.FigDiffMinimizeAnalysisValidator = createNoOpValidator();
  }
  enqueueFigDiffAnalysis(e, t, i, n, r) {
    return this.FigDiffMinimizeAnalysisValidator.validate(async ({
      xr: a
    }) => await a.post(`/api/files/diff/enqueue/${e}/${t}/${i}/${n}?direction=${r}`));
  }
}();
async function T(e, t) {
  let i;
  let {
    imageShas,
    videoShas
  } = rY.getExternalMediaFromDiff(e);
  let a = Jr();
  switch (e) {
    case GitReferenceType.SOURCE:
      i = t.sourceKey;
      break;
    case GitReferenceType.BRANCH:
      i = t.branchKey;
      break;
    case GitReferenceType.COMPARE:
      throw Error("Unexpected DiffType: COMPARE");
  }
  await a.recordImages(i, imageShas);
  let s = tG();
  await s.recordVideos(i, videoShas);
}
export function $$k6() {
  let e = DiffImpl.recreateBranchPoint();
  if (e !== MergeStatus.SUCCESS) {
    let t;
    switch (e) {
      case MergeStatus.INTERNAL_ERROR:
        t = Error("Error recreating branch point: internal error");
        break;
      case MergeStatus.MISSING_BACKING_SYMBOL:
        t = Error("Error recreating branch point: missing backing symbol");
        break;
      case MergeStatus.NO_MERGE_IN_PROGRESS:
        t = Error("Error recreating branch point: no merge in progress");
        break;
      case MergeStatus.VERSION_MISMATCH:
        t = Error("Error recreating branch point: version mismatch");
        break;
      default:
        throwTypeError(e);
    }
    handleModalError(t);
    return t;
  }
}
export function $$R5(e, t = PreviewStage.PREVIEW) {
  let i = DiffImpl.applyDiff(e, t);
  if (i !== MergeStatus.SUCCESS) {
    let e;
    switch (i) {
      case MergeStatus.MISSING_BACKING_SYMBOL:
        e = new XA("Error merging diff: missing backing symbols for diff");
        break;
      case MergeStatus.INTERNAL_ERROR:
        e = Error("Error merging diff: Unknown merge error");
        break;
      case MergeStatus.NO_MERGE_IN_PROGRESS:
        e = Error("Error merging diff: No merge in progress");
        break;
      case MergeStatus.VERSION_MISMATCH:
        e = Error("Error merging diff: Version mismatch");
        break;
      default:
        throwTypeError(i);
    }
    t === PreviewStage.PREVIEW ? handleModalError(e) : handleError(e, CPPEventType.ON_MERGE, SourceDirection.TO_SOURCE);
    return e;
  }
}
export function $$N7() {
  let e = DiffImpl.unapplyAllChunks();
  if (e !== UndoActionStatus.SUCCESS) {
    let t;
    switch (e) {
      case UndoActionStatus.INTERNAL_ERROR:
        t = Error("Error unapplying chunks: internal error");
        break;
      case UndoActionStatus.NO_MERGE_IN_PROGRESS:
        t = Error("Error unapplying chunks: no merge in progress");
        break;
      case UndoActionStatus.UNABLE_TO_UNDO_CHANGES:
        t = Error("Error unapplying chunks: unable to undo changes");
        break;
      default:
        throwTypeError(e);
    }
    handleModalError(t);
    return t;
  }
}
export function $$P3(e, t, i = PreviewStage.PREVIEW) {
  let n = DiffImpl.applyAllChunks(e, t, i);
  if (n !== StateTransitionResult.SUCCESS) {
    let e;
    switch (n) {
      case StateTransitionResult.INVALID_STATE_TRANSITION:
        e = new rY.InvalidStateTransitionError("Error applying chunks: invalid state transition");
        break;
      case StateTransitionResult.INTERNAL_ERROR:
        e = Error("Error applying chunks: internal error");
        break;
      case StateTransitionResult.NO_MERGE_IN_PROGRESS:
        e = Error("Error applying chunks: no merge in progress");
        break;
      case StateTransitionResult.INVALID_INDEX:
        e = Error("Error applying chunks: invalid index");
        break;
      default:
        throwTypeError(n);
    }
    i === PreviewStage.PREVIEW ? handleModalError(e) : handleError(e, CPPEventType.ON_MERGE, SourceDirection.FROM_SOURCE);
    return e;
  }
}
export function $$O4(e, t, i, n, r) {
  $$k6();
  $$P3(e.concat(i), t.concat(n).concat(r), PreviewStage.STAGE);
}
let D = async (e, t, i, n, r) => {
  let d;
  let p = new URLSearchParams();
  switch (p.set("migration_version", `${n}`), r && p.set("source_checkpoint_key", r), p.set("diff_version", getDiffVersion().toString()), i) {
    case GitReferenceType.SOURCE:
      d = SourceDirection.FROM_SOURCE;
      break;
    case GitReferenceType.BRANCH:
      d = SourceDirection.TO_SOURCE;
      break;
    case GitReferenceType.COMPARE:
      throw Error("Unexpected DiffType: COMPARE");
    default:
      throwTypeError(i);
  }
  let {
    data: {
      meta: {
        checkpoint_diff
      }
    }
  } = await XHR.post(`/api/file_diff/checkpoint_diff/${d}/${t}?${p.toString()}`);
  getFeatureFlags().run_fig_diff_job && S.enqueueFigDiffAnalysis(e, t, checkpoint_diff.from_checkpoint_key, checkpoint_diff.to_checkpoint_key, d).catch(e => {
    reportError(_$$e.SCENEGRAPH_AND_SYNC, e);
  });
  logInfo("Branching", "fetched checkpoint diff", {
    direction: d,
    fromCheckpointKey: checkpoint_diff.from_checkpoint_key,
    toCheckpointKey: checkpoint_diff.to_checkpoint_key,
    diffVersion: checkpoint_diff.diff_version
  });
  return checkpoint_diff;
};
let L = async e => {
  let {
    data
  } = await XHR.crossOriginGetAny(e, null, {
    responseType: "arraybuffer"
  });
  return data;
};
let F = async (e, t, i, n, r, a) => {
  let s = performance.now();
  let l = await D(e, t, i, n, r);
  let d = await L(l.signed_url);
  rY.trackGranularLoadTime({
    branchKey: t,
    sourceKey: e,
    durationMs: performance.now() - s,
    functionName: "fetchDiff",
    branchModalTrackingId: a,
    diffType: GitReferenceType[i]
  });
  return {
    checkpointDiff: l,
    mergeDiff: d
  };
};
let M = (e, t, i) => {
  let n = Z_();
  let {
    branchKey,
    sourceKey,
    branchModalTrackingId
  } = i;
  let o = rY.setDiff(e, t, sourceKey, branchKey, branchModalTrackingId);
  let l = Z_();
  let d = yQ(n, l);
  FT({
    diffType: e,
    branchFileKey: branchKey,
    sourceFileKey: sourceKey,
    setDiffResult: o,
    isDeferConflictResolutionEnabled: !0,
    metrics: d,
    diffVersion: getDiffVersion(),
    useDiffVersion: getDiffVersion(),
    branchModalTrackingId,
    mergeDiffSize: t.length
  });
};
let j = async (e, t, i, n) => {
  let r = rY.getDisplayGroups(e, n);
  let {
    styleKeyToLibraryKey,
    styleKeyToFileKey
  } = await mT(r, t, i);
  return {
    displayGroups: r,
    styleKeyToFileKey,
    styleKeyToLibraryKey
  };
};
let U = e => {
  let t = performance.now();
  return handleLoadAllPagesWithVersionCheck(PluginModalType.BRANCHING_MODAL_OPEN).then(() => {
    rY.trackGranularLoadTime({
      durationMs: performance.now() - t,
      functionName: "waitForPagesToLoad",
      ...e
    });
  });
};
export async function $$B10(e, t, i) {
  let n = performance.now();
  await subscribeToContainingPages(e, t);
  rY.trackGranularLoadTime({
    durationMs: performance.now() - n,
    functionName: "waitForContainingPagesToLoad",
    ...i
  });
}
export function $$V8(e, t, i, a, s, l, d, c) {
  let u = useDispatch();
  let [p, m] = useState(null);
  let [g, f] = useState(null);
  let [_, A] = useState(null);
  let [b, v] = useState(null);
  let [I, E] = useState(null);
  let x = useRef(0);
  let S = useContext(ss);
  useEffect(() => {
    x.current > 0 && (m(null), f(null), A(null), v(null), E(null), rY.clearDiffs());
    x.current += 1;
    let n = x.current;
    if (!s) return;
    let r = F(i, t, e, s, d, S);
    let p = null;
    p = U({
      branchKey: t,
      sourceKey: i,
      branchModalTrackingId: S,
      diffType: GitReferenceType[e]
    });
    r.then(async ({
      checkpointDiff: r,
      mergeDiff: s
    }) => {
      let d = {
        branchKey: t,
        sourceKey: i,
        branchModalTrackingId: S,
        diffType: GitReferenceType[e]
      };
      if (x.current !== n || (m(r), await p, c && (await enterPreviewDetachedState(d.branchModalTrackingId, a)), x.current !== n)) return;
      M(e, s, d);
      let {
        displayGroups,
        styleKeyToFileKey,
        styleKeyToLibraryKey
      } = await j(e, l, u, d);
      x.current === n && (f(displayGroups), v(styleKeyToLibraryKey), A(styleKeyToFileKey));
    }).catch(e => E(e));
    return () => {
      x.current += 1;
    };
  }, [t, i, a, s, l, u, d, e, S, c]);
  return {
    diffInfo: {
      checkpointDiff: p,
      displayGroups: g,
      styleKeyToFileKey: _,
      styleKeyToLibraryKey: b
    },
    error: I
  };
}
export function $$G9(e, t, i, a, s, l, d) {
  let c = useDispatch();
  let [u, p] = useState(null);
  let [m, g] = useState(null);
  let [f, _] = useState(null);
  let [A, y] = useState(null);
  let [b, v] = useState(null);
  let I = useRef(0);
  let E = useContext(ss);
  useEffect(() => {
    I.current > 0 && (p(null), g(null), _(null), y(null), v(null), rY.clearDiffs());
    I.current += 1;
    let n = I.current;
    if (s) {
      F(i, t, e, s, d, E).then(async ({
        checkpointDiff: r,
        mergeDiff: a
      }) => {
        let s = {
          branchKey: t,
          sourceKey: i,
          branchModalTrackingId: E,
          diffType: GitReferenceType[e]
        };
        if (I.current !== n) return;
        p(r);
        M(e, a, s);
        let d = rY.getAllGuids(e, s.branchModalTrackingId);
        if (await $$B10(d, AutosaveEventType.BRANCHING_MODAL_OPEN, {
          ...s,
          diffType: GitReferenceType[e]
        }), I.current !== n) return;
        let {
          displayGroups,
          styleKeyToFileKey,
          styleKeyToLibraryKey
        } = await j(e, l, c, s);
        I.current === n && (g(displayGroups), _(styleKeyToFileKey), y(styleKeyToLibraryKey));
      }).catch(e => v(e));
      return () => {
        I.current += 1;
      };
    }
  }, [t, i, a, s, l, c, d, e, E]);
  return {
    diffInfo: {
      checkpointDiff: u,
      displayGroups: m,
      styleKeyToFileKey: f,
      styleKeyToLibraryKey: A
    },
    error: b
  };
}
export class $$z0 {
  constructor(e) {
    this.context = e;
    this.eventId = generateUUIDv4();
    this.startTime = null;
  }
  commitStart() {
    this.startTime = Date.now();
    trackEventAnalytics("Branch Apply Changes Initiated", {
      ...this.commonTrackingProps
    }, {
      forwardToDatadog: !0
    });
  }
  commitEnd(e, t) {
    if (null === this.startTime) return;
    let i = {};
    e && (i = {
      mergeRequestId: e.id,
      mergedWithoutApproval: !e.reviewers.some(e => e.approved_at)
    });
    trackEventAnalytics("Branch Apply Changes", {
      ...this.commonTrackingProps,
      durationMs: Date.now() - this.startTime,
      ...i,
      ...(t ? {
        fileMergeId: t
      } : {})
    }, {
      forwardToDatadog: !0
    });
  }
  commitSynced(e) {
    null !== this.startTime && trackEventAnalytics("Branch Apply Changes Synced", {
      ...this.commonTrackingProps,
      durationMs: Date.now() - this.startTime,
      ...(e ? {
        fileMergeId: e
      } : {})
    }, {
      forwardToDatadog: !0
    });
  }
  get commonTrackingProps() {
    return {
      eventId: this.eventId,
      fileKey: this.context.mergeParams.branchKey,
      direction: this.context.mergeParams.direction,
      sourceFileKey: this.context.mergeParams.sourceKey,
      fileRepoId: this.context.file.file_repo_id,
      isConflictResolution: null != this.context.conflictResolutionDetails,
      branchPickGroupsSize: this.context.conflictResolutionDetails?.branchPickGroups || 0,
      mainPickGroupsSize: this.context.conflictResolutionDetails?.mainPickGroups || 0,
      isReliableMerge: !0,
      branchModalTrackingId: this.context.mergeParams.branchModalTrackingId
    };
  }
}
let H = async (e, t, i, n, r, a, s) => {
  try {
    let o = s;
    o || (o = (await D(e, t, i, n, r)).key);
    return XHR.post(`/api/file_merge/${a}/${t}?include_reason=true`, {
      checkpoint_diff_key: o
    }).then(e => e, e => e);
  } catch (e) {
    return e;
  }
};
export async function $$W2(e, t, i, n = null, r = null) {
  let {
    direction,
    branchKey
  } = e;
  let l = Qx(direction);
  if (null === t) return;
  n?.commitStart();
  let d = T(l, e);
  DiffImpl.uploadImages();
  let c = Jr().imageUploadPromise();
  let u = Jr().imageLookupPromise();
  await Promise.all([c, u]);
  await d;
  return await H(e.sourceKey, branchKey, l, t, i, direction, r);
}
export async function $$K1() {
  await abandonBranchingChanges();
  SN();
}
export const FK = $$z0;
export const ds = $$K1;
export const fA = $$W2;
export const Ur = $$P3;
export const n6 = $$O4;
export const gf = $$R5;
export const _l = $$k6;
export const b_ = $$N7;
export const zZ = $$V8;
export const YH = $$G9;
export const Mt = $$B10;