import { getSingletonSceneGraph } from "../905/700578";
import { getFeatureFlags } from "../905/601108";
import { atomStoreManager } from "../figma_app/27355";
import { analyticsEventManager } from "../905/449184";
import { debugState } from "../905/407919";
import { logError, logInfo } from "../905/714362";
import { editorTypeAtom } from "../figma_app/976749";
import { fullscreenValue } from "../figma_app/455680";
import { openFileKeyAtom } from "../figma_app/516028";
import { $p } from "../figma_app/155728";
import { FEditorType } from "../figma_app/53721";
import { PrimaryWorkflowEnum } from "../figma_app/633080";
import { FDocumentType } from "../905/862883";
import { z } from "../905/150554";
import { qd } from "../figma_app/257779";
import { k1, OD, x_, ay, ZU, w3 } from "../figma_app/407767";
import { fX, Z9 } from "../figma_app/663669";
import { O as _$$O } from "../figma_app/984498";
async function v({
  topLevelNode: e,
  symbolNode: t,
  parentNode: i,
  insertedNode: n,
  insertedLocation: c,
  preComputedThumbnails: y,
  sourceForTracking: v,
  contextComponentUsage: I
}) {
  if (getFeatureFlags().anticipation_suggestions_shadow) try {
    let r = atomStoreManager.get(openFileKeyAtom) ?? void 0;
    let l = atomStoreManager.get(editorTypeAtom);
    if (!r || l !== FEditorType.Design) return;
    let E = atomStoreManager.get($p);
    if (!E) return;
    let x = new Set(E.map(e => e.libraryKey));
    let S = t.componentKey ?? t.stateGroupKey;
    let w = t.sourceLibraryKey;
    let C = !!w && x.has(w);
    let T = w && t.publishID;
    if (!S || !C || !T) return;
    let k = debugState.getState().recentlyUsed.libraryItems[FDocumentType.Design].findIndex(e => e.key === S);
    let R = k1();
    R.numResults = null;
    let N = new _$$O({
      config: R,
      entryPoint: qd.SHADOW_SUGGESTIONS
    });
    let {
      suggestions
    } = await z({
      targetNode: e,
      topLevelNode: e,
      openFileKey: r,
      subscribedLibraryKeys: x,
      config: R,
      preComputedThumbnails: y,
      logger: N,
      contextComponentUsage: I
    });
    let O = suggestions.findIndex(e => e.type === PrimaryWorkflowEnum.COMPONENT && e.component_key === S || e.type === PrimaryWorkflowEnum.STATE_GROUP && e.key === S);
    let D = JSON.stringify(suggestions.map(e => ({
      type: e.type,
      key: e.type === PrimaryWorkflowEnum.COMPONENT ? e.component_key : e.type === PrimaryWorkflowEnum.STATE_GROUP ? e.key : void 0,
      libraryKey: e.library_key,
      suggestionSource: e.suggestionSource
    })));
    analyticsEventManager.trackDefinedEvent("auto_suggest.suggestion_shadow_read", {
      fileKey: r,
      version: OD(),
      thumbnailGenerationDuration: y.thumbnailGenerationDuration,
      sourceForTracking: v,
      suggestions: D,
      numSuggestions: suggestions.length,
      suggestionsRank: O,
      recentsRank: k,
      insertedNodeGuid: n.guid,
      insertedLocation: c ? x_(c) : "",
      insertedNodeType: n?.type,
      insertedNodeBounds: ay(n?.absoluteBoundingBox),
      parentNodeGuid: i?.guid,
      parentNodeType: i?.type,
      parentNodeBounds: ay(i?.absoluteBoundingBox),
      topLevelNodeGuid: e?.guid,
      topLevelNodeBounds: ay(e?.absoluteBoundingBox),
      insertedAssetKey: S,
      insertedAssetLibraryKey: w
    });
  } catch (e) {
    logError("auto_suggest", "shadow: error logging shadow read suggestions", {
      error: e
    });
  }
}
export function $$I2(e, t, i, a) {
  if (!(!getFeatureFlags().anticipation_suggestions_shadow || !e || a?.startsWith("auto-suggest"))) try {
    let r = getSingletonSceneGraph();
    let s = r.get(i);
    let o = s?.symbolId ? r.get(s.symbolId) : void 0;
    let d = s?.parentNode;
    let c = s?.findContainingTopLevelFrameOrSelf();
    let u = c ? r.get(c) : void 0;
    if (!s || "INSTANCE" !== s.type || !o || !d || !u) return;
    if (c !== e.predictedTLFGuid || !e.thumbnail) {
      logInfo("auto_suggest", "shadow: incorrect tlf prediction", {
        topLevelNodeGuid: c,
        preInsertionDataDominantFrameGuid: e.predictedTLFGuid,
        preInsertionDataThumbnail: e.thumbnail
      });
      return;
    }
    v({
      topLevelNode: u,
      symbolNode: o,
      parentNode: d,
      insertedNode: s,
      insertedLocation: t,
      preComputedThumbnails: {
        targetNode: e.thumbnail,
        topLevelNode: e.thumbnail,
        thumbnailGenerationDuration: e.thumbnailGenerationDuration
      },
      sourceForTracking: `local__${a}`,
      contextComponentUsage: e.contextComponentUsage
    });
  } catch (e) {
    logError("auto_suggest", "shadow: error logging shadow read suggestions", {
      error: e
    });
  }
}
export function $$E0() {
  if (!getFeatureFlags().anticipation_suggestions_shadow) return null;
  try {
    let e = getSingletonSceneGraph();
    let t = fullscreenValue.getViewportInfo();
    let i = fX(t, Z9());
    let r = i ? e.get(i) : null;
    let a = r?.findContainingTopLevelFrameOrSelf();
    let s = a ? e.get(a) : null;
    if (!r || !s || !a) return null;
    let {
      thumbnail,
      duration
    } = ZU(r);
    if (!thumbnail) return null;
    let d = w3({
      scene: e,
      topLevelNode: s
    });
    return {
      predictedTLFGuid: a,
      thumbnail,
      thumbnailGenerationDuration: duration,
      contextComponentUsage: d
    };
  } catch (e) {
    logError("auto_suggest", "shadow: error getting data for shadow read suggestions", {
      error: e
    });
    return null;
  }
}
export function $$x1(e, t) {
  if (getFeatureFlags().anticipation_suggestions_shadow) try {
    let i = getSingletonSceneGraph();
    let r = i.get(e);
    let a = i.get(t);
    let s = r?.symbolId;
    let o = s ? i.get(s) : null;
    let l = a?.findContainingTopLevelFrameOrSelf();
    let d = l ? i.get(l) : null;
    if (!r || !a || !o || !d) return;
    let {
      thumbnail,
      duration
    } = ZU(d);
    if (!thumbnail) return;
    let p = w3({
      scene: i,
      topLevelNode: d
    });
    v({
      topLevelNode: d,
      symbolNode: o,
      parentNode: a,
      insertedNode: r,
      insertedLocation: void 0,
      preComputedThumbnails: {
        targetNode: thumbnail,
        topLevelNode: thumbnail,
        thumbnailGenerationDuration: duration
      },
      sourceForTracking: "paste",
      contextComponentUsage: p
    });
  } catch (e) {
    logError("auto_suggest", "shadow: error logging shadow read suggestions on paste", {
      error: e
    });
  }
}
export const Dl = $$E0;
export const QO = $$x1;
export const cI = $$I2;