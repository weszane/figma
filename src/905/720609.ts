import { SlideConstantsCppBindings, AppStateTsApi } from "../figma_app/763686";
import { M as _$$M } from "../905/512402";
import { getFeatureFlags } from "../905/601108";
import { atomStoreManager } from "../figma_app/27355";
import { canvasGridAtom } from "../905/618447";
import { k as _$$k } from "../905/933223";
import { v2 } from "../figma_app/164260";
export class $$c0 extends _$$k {
  getDefaultChildSize() {
    return SlideConstantsCppBindings ? new _$$M(SlideConstantsCppBindings.slideWidth(), SlideConstantsCppBindings.slideHeight()) : new _$$M(1920, 1080);
  }
  isRowHeaderSelectable() {
    return !!getFeatureFlags().slide_chapters;
  }
  shouldHideUI() {
    return atomStoreManager.get(v2) || atomStoreManager.get(canvasGridAtom).length <= 1;
  }
  selectRow(e) {
    getFeatureFlags().slide_chapters ? AppStateTsApi?.canvasGrid().selectRow(e) : AppStateTsApi?.canvasGrid().selectChildrenInRow(e);
  }
  addOrRemoveRowFromSelection(e) {
    getFeatureFlags().slide_chapters ? AppStateTsApi?.canvasGrid().addOrRemoveRowFromSelection(e) : AppStateTsApi?.canvasGrid().addOrRemoveRowChildrenFromSelection(e);
  }
}
export const M = $$c0;