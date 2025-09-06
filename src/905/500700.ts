import { Ez5 } from "../figma_app/763686";
import { M } from "../905/512402";
import { getSingletonSceneGraph } from "../905/700578";
import { getFeatureFlags } from "../905/601108";
import { atomStoreManager } from "../figma_app/27355";
import { BT } from "../905/618447";
import { k as _$$k } from "../905/933223";
import { I } from "../905/120648";
export class $$u0 extends _$$k {
  getDefaultChildSize() {
    return new M(1e3, 1e3);
  }
  shouldHideUI() {
    if (atomStoreManager.get(I)) return !0;
    let e = atomStoreManager.get(BT);
    if (!e.length) return !0;
    if (1 === e.length) {
      let e = Ez5?.canvasGrid().getRowGUID(0) ?? null;
      return !getSingletonSceneGraph().get(e)?.isCanvasGridStateGroupRow;
    }
    return !1;
  }
  isRowHeaderSelectable() {
    return !0;
  }
  selectRow(e) {
    Ez5?.canvasGrid().selectRow(e);
  }
  addOrRemoveRowFromSelection(e) {
    Ez5?.canvasGrid().addOrRemoveRowFromSelection(e);
  }
  isStateGroupRowAllowed() {
    return !!getFeatureFlags().buzz_template_sets;
  }
}
export const r = $$u0;