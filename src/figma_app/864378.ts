import { ServiceCategories as _$$e } from "../905/165054";
import { getFeatureFlags } from "../905/601108";
import { reportError } from "../905/11";
import { createOptimistThunk } from "../905/350402";
import { componentUpdate } from "../905/879323";
import { KQ } from "../figma_app/646357";
import { PrimaryWorkflowEnum } from "../figma_app/633080";
let $$c0 = createOptimistThunk(e => {
  KQ(e);
});
let $$u2 = createOptimistThunk((e, t) => {
  e.dispatch(componentUpdate(t));
  e.getState().openFile && e.dispatch($$c0());
  !t.libraryKey && getFeatureFlags().dse_lk_realtime_audit && reportError(_$$e.DESIGN_SYSTEMS_ECOSYSTEM, Error("putProductComponents called without a libraryKey"), {
    tags: {
      libraryFileKey: t.fileKey,
      openFileKey: e.getState().openFile?.key,
      teamId: t.teamId,
      type: t.type
    }
  });
});
let $$p1 = createOptimistThunk((e, t) => {
  let {
    stateGroups,
    components,
    fileKeyOrHubFileId,
    libraryKey,
    teamId
  } = t;
  if (0 !== stateGroups.length) {
    let t = stateGroups.reduce((e, t) => (e[t.node_id] = t, e), {});
    e.dispatch($$u2({
      itemsById: t,
      fileKey: fileKeyOrHubFileId,
      libraryKey,
      teamId: teamId ?? null,
      type: PrimaryWorkflowEnum.STATE_GROUP
    }));
  }
  if (0 !== components.length) {
    let t = components.reduce((e, t) => (e[t.node_id] = t, e), {});
    e.dispatch($$u2({
      itemsById: t,
      fileKey: fileKeyOrHubFileId,
      libraryKey,
      teamId: teamId ?? null,
      type: PrimaryWorkflowEnum.COMPONENT
    }));
  }
});
export const Nf = $$c0;
export const aW = $$p1;
export const vP = $$u2;