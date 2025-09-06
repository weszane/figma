import { h3O, kul } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import { NC } from "../905/17179";
import { desktopAPIInstance } from "../figma_app/876459";
import { debugState } from "../905/407919";
import { getInitialOptions } from "../figma_app/169182";
import { Hh } from "../figma_app/553184";
import { getI18nString } from "../905/303541";
import { F } from "../905/302958";
import { wZ } from "../figma_app/701982";
import { ds } from "../figma_app/314264";
import { G } from "../905/674940";
import { nF } from "../905/350402";
import { to } from "../905/156213";
let $$_1 = NC("SET_SAVE_STATUS");
let $$A0 = nF((e, t) => {
  if (desktopAPIInstance && !desktopAPIInstance.isFileBrowserTab()) {
    let e = !t.hasUnsavedChanges;
    desktopAPIInstance.setSaved(e);
  }
  e.dispatch(b(t));
  e.dispatch($$_1(t));
});
let y = e => {
  if (Hh(), h3O) {
    let t = {
      fileKey: e,
      multiplayer_session_state: h3O.getSessionState(),
      is_joined: h3O.getSessionState() === kul.JOINED,
      is_incremental: h3O.isIncrementalSession(),
      isStagingChanges: h3O.isStagingChanges(),
      stagedRegisters: getFeatureFlags().use_registers_with_staged_value
    };
    ds("unsaved_changes_bell", e, debugState.getState(), t);
  }
};
let b = nF((e, t) => {
  let i = e.getState();
  let n = i.openFile;
  n && (i.saveStatus && !i.saveStatus.hasUnsavedChanges && t.hasUnsavedChanges ? G.start(() => {
    getInitialOptions().e2e_traffic && e.dispatch(F.clearAll());
    getFeatureFlags().remove_unsaved_changes_bell || e.dispatch(F.enqueue({
      type: "unsaved_changes",
      message: getI18nString("save_status.unsaved_changes"),
      button: {
        text: getI18nString("save_status.learn_more"),
        action: () => {
          e.dispatch(to({
            type: wZ,
            data: {}
          }));
        }
      },
      onDismiss: () => {
        e.dispatch(F.dequeue({
          matchType: "unsaved_changes"
        }));
      },
      timeoutOverride: 1 / 0
    }));
    y(n.key);
  }, getInitialOptions().e2e_traffic ? 10 : void 0) : i.saveStatus && i.saveStatus.hasUnsavedChanges && !t.hasUnsavedChanges && (e.dispatch(F.dequeue({
    matchType: "unsaved_changes"
  })), G.clear() && navigator.onLine && e.dispatch(F.enqueue({
    message: getI18nString("save_status.changes_saved")
  }))));
});
export const E = $$A0;
export const v = $$_1;