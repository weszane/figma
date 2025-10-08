import { isNotNullish } from "../figma_app/95419";
import { ServiceCategories } from "../905/165054";
import { getFeatureFlags } from "../905/601108";
import { atomStoreManager, atom } from "../figma_app/27355";
import { getInitialOptions } from "../figma_app/169182";
import { reportError } from "../905/11";
import { sendWithRetry } from "../905/910117";
import { getFileKey } from "../905/412913";
import { hubFilePutAll } from "../905/359847";
import { createOptimistThunk } from "../905/350402";
import { batchPutFileAction, filePutAction } from "../figma_app/78808";
import { componentBatchUpdate, defaultLibraryInitializeLibraryKeys, defaultLibraryInitialize, putMoveLibraryItemKeyMappings } from "../905/879323";
import { fetchAndUpdateStateGroupsThunk, loadPublishedComponents, processAndDispatchLibraryItems } from "../figma_app/933328";
import { loadingStatePutLoading, loadingStatePutSuccess, loadingStatePutFailure } from "../figma_app/714946";
import { filesByLibraryKeyAtom } from "../905/977779";
import { resolveUsedComponentsStateGroups, addTrackedState, generateDefaultLibrariesCacheKey, resolveUsedLibraries } from "../figma_app/646357";
import { getLibraryKeyWithReport } from "../905/997221";
import { YG } from "../905/921418";
import { withParsedMeta } from "../905/405710";
import { isNullOrFailure, isLoaded, isLoading } from "../905/18797";
import { isWorkshopModeActive } from "../figma_app/193867";
import { kb } from "../figma_app/502247";
import { FEditorType, mapEditorTypeToStringWithObfuscated } from "../figma_app/53721";
import { PrimaryWorkflowEnum, NO_TEAM } from "../figma_app/633080";
import { FDocumentType } from "../905/862883";
import { librariesAPI } from "../905/939602";
import { generateRetrievingSubscribedComponentsKey } from "../905/92359";
let O = new Map();
async function R(e, t) {
  let r = isWorkshopModeActive(e.getState().selectedView);
  let n = !getInitialOptions().user_data;
  if (n && !r) return;
  if ((O.get(t) || 0) > 20) {
    resolveUsedComponentsStateGroups();
    return;
  }
  let d = generateRetrievingSubscribedComponentsKey(t);
  if (!isNullOrFailure(e.getState().loadingState, d)) {
    resolveUsedComponentsStateGroups();
    return;
  }
  e.dispatch(loadingStatePutLoading({
    key: d
  }));
  let c = e.getState();
  try {
    let r = c.selectedView.editorType;
    let o = function (e) {
      switch (e) {
        case FEditorType.Whiteboard:
          return "figjam";
        case FEditorType.Slides:
          return "slides";
        case FEditorType.Cooper:
          return "cooper";
        default:
          return "design";
      }
    }(r);
    let p = librariesAPI.getLibrarySubscribedComponentsEditorType({
      key: t,
      editorType: o
    });
    let [m] = await Promise.all([p]);
    n || (await kb.promise);
    e.dispatch(batchPutFileAction({
      files: m.data.meta.files,
      subscribeToRealtime: !0
    }));
    m.data.meta.files.forEach(e => {
      addTrackedState(e.key);
    });
    let y = atomStoreManager.get(filesByLibraryKeyAtom);
    let T = m.data.meta.hub_files;
    T && (T.forEach(e => {
      addTrackedState(e.id);
    }), e.dispatch(hubFilePutAll(T)));
    let I = m.data.meta.state_groups.map(e => ({
      ...e,
      team_id: y[e.library_key]?.team_id
    }));
    let S = m.data.meta.components.map(e => ({
      ...e,
      team_id: y[e.library_key]?.team_id
    }));
    if (e.dispatch(componentBatchUpdate({
      items: I,
      type: PrimaryWorkflowEnum.STATE_GROUP
    })), e.dispatch(componentBatchUpdate({
      items: S,
      type: PrimaryWorkflowEnum.COMPONENT
    })), getFeatureFlags().dse_lk_realtime_audit) {
      let e = S.filter(e => !e.library_key);
      let t = I.filter(e => !e.library_key);
      (e.length > 0 || t.length > 0) && reportError(ServiceCategories.DESIGN_SYSTEMS_ECOSYSTEM, Error("Missing library keys for components or state groups"), {
        tags: {
          numComponentsWithMissingLibraryKeys: e.length,
          numStateGroupsWithMissingLibraryKeys: t.length
        }
      });
    }
    resolveUsedComponentsStateGroups();
    e.dispatch(loadingStatePutSuccess({
      key: d
    }));
    YG.queryDidChange(e);
  } catch (r) {
    resolveUsedComponentsStateGroups();
    O.set(t, (O.get(t) || 0) + 1);
    e.dispatch(loadingStatePutFailure({
      key: d
    }));
  }
}
async function L(e) {
  let t = e.getState().openFile;
  if (!t) return;
  let r = generateDefaultLibrariesCacheKey(t.key);
  let i = e.getState().loadingState;
  if (!(isLoaded(i, r) || isLoading(i, r))) {
    e.dispatch(loadingStatePutLoading({
      key: r
    }));
    try {
      let t = e.getState().selectedView;
      if ("fullscreen" !== t.view) return;
      let i = await librariesAPI.getDefaultLibraries({
        editorType: mapEditorTypeToStringWithObfuscated(t.editorType)
      });
      D(e, i.data.meta.components, PrimaryWorkflowEnum.COMPONENT);
      D(e, i.data.meta.state_groups, PrimaryWorkflowEnum.STATE_GROUP);
      i.data.meta.files.forEach(t => {
        t.team_id = NO_TEAM;
        e.dispatch(filePutAction({
          file: t
        }));
      });
      let a = i.data.meta.files.map(getLibraryKeyWithReport).filter(isNotNullish);
      e.dispatch(defaultLibraryInitializeLibraryKeys({
        libraryKeys: a
      }));
      resolveUsedLibraries();
      e.dispatch(loadingStatePutSuccess({
        key: r
      }));
    } catch (t) {
      resolveUsedLibraries();
      e.dispatch(loadingStatePutFailure({
        key: r
      }));
      YG.queryDidChange(e);
    }
  }
}
let P = getFileKey();
let D = (e, t, r) => {
  let n = {
    [NO_TEAM]: {}
  };
  let i = {};
  t.forEach(e => {
    let t = P(e = withParsedMeta(e));
    n[NO_TEAM][t] = n[NO_TEAM][t] || {};
    n[NO_TEAM][t][e.node_id] = e;
    (i[e.library_key] ??= {})[e.node_id] = e;
  });
  e.dispatch(defaultLibraryInitialize({
    publishedItemsByTeamId: n,
    publishedItemsByLibraryKey: i,
    type: r
  }));
};
let $$k2 = atom("loading");
let $$M3 = createOptimistThunk(e => {
  let t = e.getState();
  let r = !!t.user;
  if (!t.openFile?.key) return;
  let n = e.getState().selectedView;
  n && "fullscreen" === n.view && (n.editorType === FEditorType.Whiteboard || n.editorType === FEditorType.Slides || n.editorType === FEditorType.Cooper ? L(e) : resolveUsedLibraries(), r && j(e, n.editorType === FEditorType.Whiteboard ? FDocumentType.FigJam : FDocumentType.Design));
  r && (e.dispatch(fetchAndUpdateStateGroupsThunk()), loadPublishedComponents(e));
});
let $$F1 = "FETCH_RECENTLY_USED_LIBRARY_ITEMS";
async function j(e, t) {
  let r;
  if (isLoading(e.getState().loadingState, $$F1)) return;
  atomStoreManager.set($$k2, "loading");
  e.dispatch(loadingStatePutLoading({
    key: $$F1
  }));
  let n = e.getState();
  if ("fullscreen" !== n.selectedView.view) {
    e.dispatch(loadingStatePutSuccess({
      key: $$F1
    }));
    atomStoreManager.set($$k2, "loaded");
    return;
  }
  let i = new Set();
  let a = new Set();
  for (let e of n.recentlyUsed.libraryItems[t]) {
    let t = e.library_key;
    e.type === PrimaryWorkflowEnum.COMPONENT && e.key && !n.library.publishedByLibraryKey.components[e.team_id]?.[t]?.[e.node_id] ? i.add(e.key) : e.type === PrimaryWorkflowEnum.STATE_GROUP && e.key && !n.library.publishedByLibraryKey.stateGroups[e.team_id]?.[t]?.[e.node_id] && a.add(e.key);
  }
  if (0 === i.size && 0 === a.size) {
    e.dispatch(loadingStatePutSuccess({
      key: $$F1
    }));
    atomStoreManager.set($$k2, "loaded");
    return;
  }
  try {
    r = await sendWithRetry.post("/api/design_systems/components_state_groups", {
      component_keys: Array.from(i),
      state_group_keys: Array.from(a),
      org_id: n.openFile?.parentOrgId
    });
  } catch (t) {
    e.dispatch(loadingStatePutFailure({
      key: $$F1
    }));
    atomStoreManager.set($$k2, "loaded");
    return;
  }
  e.dispatch(loadingStatePutSuccess({
    key: $$F1
  }));
  atomStoreManager.set($$k2, "loaded");
  e.dispatch(batchPutFileAction({
    files: r.data.meta.files,
    subscribeToRealtime: !1
  }));
  e.dispatch(putMoveLibraryItemKeyMappings({
    subscribedOldKeyToNewKey: r.data.meta.move_remappings,
    localOldGuidToNewKey: {}
  }));
  let o = atomStoreManager.get(filesByLibraryKeyAtom);
  processAndDispatchLibraryItems(r.data.meta.components, PrimaryWorkflowEnum.COMPONENT, o, e.dispatch);
  processAndDispatchLibraryItems(r.data.meta.state_groups, PrimaryWorkflowEnum.STATE_GROUP, o, e.dispatch);
}
export let $$U4 = createOptimistThunk(e => {
  let t = e.getState().openFile;
  t && R(e, t.key);
});
export function $$B0(e) {
  e.dispatch($$U4());
}
export const QC = $$B0;
export const fi = $$F1;
export const s9 = $$k2;
export const x4 = $$M3;
export const zK = $$U4;