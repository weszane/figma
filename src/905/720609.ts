import { CNR, Ez5 } from "../figma_app/763686";
import { M as _$$M } from "../905/512402";
import { getFeatureFlags } from "../905/601108";
import { zl } from "../figma_app/27355";
import { BT } from "../905/618447";
import { k as _$$k } from "../905/933223";
import { v2 } from "../figma_app/164260";
export class $$c0 extends _$$k {
  getDefaultChildSize() {
    return CNR ? new _$$M(CNR.slideWidth(), CNR.slideHeight()) : new _$$M(1920, 1080);
  }
  isRowHeaderSelectable() {
    return !!getFeatureFlags().slide_chapters;
  }
  shouldHideUI() {
    return zl.get(v2) || zl.get(BT).length <= 1;
  }
  selectRow(e) {
    getFeatureFlags().slide_chapters ? Ez5?.canvasGrid().selectRow(e) : Ez5?.canvasGrid().selectChildrenInRow(e);
  }
  addOrRemoveRowFromSelection(e) {
    getFeatureFlags().slide_chapters ? Ez5?.canvasGrid().addOrRemoveRowFromSelection(e) : Ez5?.canvasGrid().addOrRemoveRowChildrenFromSelection(e);
  }
}
export const M = $$c0;