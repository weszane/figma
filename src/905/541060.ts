import { YEY, dNx, w3z, Ez5, glU } from "../figma_app/763686";
import { NC } from "../905/17179";
import { logInfo } from "../905/714362";
import { F } from "../905/302958";
import { G } from "../905/674940";
import { Y5 } from "../figma_app/455680";
import { wY } from "../905/753206";
import { H1 } from "../figma_app/451700";
import { nF } from "../905/350402";
import { cL } from "../figma_app/712525";
import { cL as _$$cL } from "../figma_app/770088";
import { ot, g6 } from "../figma_app/389091";
import { XE } from "../figma_app/91703";
let $$f1 = NC("FULLSCREEN_CLOSE");
let $$_0 = nF(e => {
  logInfo("fullscreen cleanup", "Closing fullscreen file", {
    fileKey: e.getState().openFile?.key
  });
  e.dispatch(_$$cL());
  e.dispatch(cL());
  e.dispatch(ot());
  e.dispatch(g6());
  YEY?.exitSearchMode(dNx.NONE);
  H1.destroyIndex();
  w3z?.setDevModeFocusViewNodeId(null, null);
  null != Ez5 && Ez5.uiState().showMemoryUsage.set(!1);
  e.dispatch(XE());
  Y5.isReady() && (glU.fullscreenWasClosed(), wY());
  e.dispatch(F.dequeue({
    matchType: "unsaved_changes"
  }));
  G.clear();
  e.dispatch($$f1());
});
export const V = $$_0;
export const a = $$f1;