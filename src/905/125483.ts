import { debugState } from "../905/407919";
import { getI18nString } from "../905/303541";
import { VisualBellActions } from "../905/302958";
import { VisualBellIcon } from "../905/576487";
let o = "image_loading";
let $$l0 = new class {
  constructor() {
    this.pendingImageCount = 0;
  }
  startLoadingImage(e) {
    this.pendingImageCount++;
    1 === this.pendingImageCount ? this.queueBell(getI18nString("visual_bell.adding_image"), e) : 2 === this.pendingImageCount && (this.dequeueBell(), this.queueBell(getI18nString("visual_bell.adding_images"), e));
  }
  finishLoadingImage() {
    this.pendingImageCount--;
    0 === this.pendingImageCount && this.dequeueBell();
  }
  dequeueBell() {
    debugState.dispatch(VisualBellActions.dequeue({
      matchType: o
    }));
  }
  queueBell(e, t = 1e3) {
    debugState.dispatch(VisualBellActions.enqueue({
      type: o,
      message: e,
      delay: t,
      icon: VisualBellIcon.SPINNER
    }));
  }
}();
export const J = $$l0;