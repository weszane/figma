import { Multiplayer, SchemaJoinStatus } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import { createActionCreator } from "../905/73481";
import { desktopAPIInstance } from "../figma_app/876459";
import { debugState } from "../905/407919";
import { getInitialOptions } from "../figma_app/169182";
import { Hh } from "../figma_app/553184";
import { getI18nString } from "../905/303541";
import { VisualBellActions } from "../905/302958";
import { wZ } from "../figma_app/701982";
import { ds } from "../figma_app/314264";
import { G } from "../905/674940";
import { createOptimistThunk } from "../905/350402";
import { showModalHandler } from "../905/156213";
let $$_1 = createActionCreator("SET_SAVE_STATUS");
let $$A0 = createOptimistThunk((e, t) => {
  if (desktopAPIInstance && !desktopAPIInstance.isFileBrowserTab()) {
    let e = !t.hasUnsavedChanges;
    desktopAPIInstance.setSaved(e);
  }
  e.dispatch(b(t));
  e.dispatch($$_1(t));
});
let y = e => {
  if (Hh(), Multiplayer) {
    let t = {
      fileKey: e,
      multiplayer_session_state: Multiplayer.getSessionState(),
      is_joined: Multiplayer.getSessionState() === SchemaJoinStatus.JOINED,
      is_incremental: Multiplayer.isIncrementalSession(),
      isStagingChanges: Multiplayer.isStagingChanges(),
      stagedRegisters: getFeatureFlags().use_registers_with_staged_value
    };
    ds("unsaved_changes_bell", e, debugState.getState(), t);
  }
};
let b = createOptimistThunk((e, t) => {
  let i = e.getState();
  let n = i.openFile;
  n && (i.saveStatus && !i.saveStatus.hasUnsavedChanges && t.hasUnsavedChanges ? G.start(() => {
    getInitialOptions().e2e_traffic && e.dispatch(VisualBellActions.clearAll());
    getFeatureFlags().remove_unsaved_changes_bell || e.dispatch(VisualBellActions.enqueue({
      type: "unsaved_changes",
      message: getI18nString("save_status.unsaved_changes"),
      button: {
        text: getI18nString("save_status.learn_more"),
        action: () => {
          e.dispatch(showModalHandler({
            type: wZ,
            data: {}
          }));
        }
      },
      onDismiss: () => {
        e.dispatch(VisualBellActions.dequeue({
          matchType: "unsaved_changes"
        }));
      },
      timeoutOverride: 1 / 0
    }));
    y(n.key);
  }, getInitialOptions().e2e_traffic ? 10 : void 0) : i.saveStatus && i.saveStatus.hasUnsavedChanges && !t.hasUnsavedChanges && (e.dispatch(VisualBellActions.dequeue({
    matchType: "unsaved_changes"
  })), G.clear() && navigator.onLine && e.dispatch(VisualBellActions.enqueue({
    message: getI18nString("save_status.changes_saved")
  }))));
});
export const E = $$A0;
export const v = $$_1;