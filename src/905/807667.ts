import { ServiceCategories as _$$e } from "../905/165054";
import { PluginModalType } from "../figma_app/763686";
import { debugState } from "../905/407919";
import { reportError } from "../905/11";
import { V_, un } from "../figma_app/841351";
import { W5 } from "../figma_app/582924";
export function $$d0(e) {
  let t = debugState.getState();
  if (t.versionHistory.activeId && t.versionHistory.activeId !== V_) switch (e) {
    case PluginModalType.SAVE_LOCAL_COPY:
    case PluginModalType.FIND_AND_REPLACE:
      return un();
    default:
      reportError(_$$e.SCENEGRAPH_AND_SYNC, Error(`Unexpected reason for loading all pages from version history (${e})`));
      return Promise.resolve();
  }
  return W5(e);
}
export const q = $$d0;