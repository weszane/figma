import { Multiplayer } from "../figma_app/763686";
import { debugState } from "../905/407919";
import { logInfo } from "../905/714362";
import { getAutosaveManagerInstance, setupAutosaveManager, destroyAutosaveManagerAsync } from "../figma_app/840917";
import { logAutosaveError } from "../905/327522";
export let $$n0;
class d {
  readyToAcceptAutosaveChanges() {
    return !!getAutosaveManagerInstance()?.session()?.readyToAcceptChanges();
  }
  hasOngoingCommitTask() {
    return !!getAutosaveManagerInstance()?.session()?.hasOngoingCommitTask();
  }
  async enqueueAutosaveCommit(e, t, r, n, a, s) {
    let d = getAutosaveManagerInstance();
    if (!d) {
      logAutosaveError("AutosaveManager should not be null when committing");
      return !0;
    }
    let c = d.session();
    return !c || (await c.enqueueAutosaveCommit({
      changes: e,
      commitPolicy: t,
      fileVersion: r,
      fileKey: n,
      newSessionID: Multiplayer.currentSessionID(),
      numberOfUncleanRegisters: a,
      reason: s
    }), !0);
  }
  createAutosaveManager(e) {
    let t = debugState.getState().user;
    if (!t) {
      logInfo("Autosave", "Not creating manager for logged out user");
      return;
    }
    setupAutosaveManager(e, t.id);
  }
  destroyAutosaveManager() {
    destroyAutosaveManagerAsync();
  }
  isConnected() {
    return getAutosaveManagerInstance()?.managerState === "connected";
  }
}
export function $$c1() {
  $$n0 = new d();
}
export const X = $$n0;
export const z4 = $$c1;