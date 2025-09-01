import { debugState } from "../905/407919";
import { t } from "../905/303541";
import { F } from "../905/302958";
import { zX } from "../905/576487";
let o = "image_loading";
let $$l0 = new (class {
  constructor() {
    this.pendingImageCount = 0;
  }
  startLoadingImage(e) {
    this.pendingImageCount++;
    1 === this.pendingImageCount
      ? this.queueBell(t("visual_bell.adding_image"), e)
      : 2 === this.pendingImageCount &&
        (this.dequeueBell(), this.queueBell(t("visual_bell.adding_images"), e));
  }
  finishLoadingImage() {
    this.pendingImageCount--;
    0 === this.pendingImageCount && this.dequeueBell();
  }
  dequeueBell() {
    debugState.dispatch(
      F.dequeue({
        matchType: o,
      }),
    );
  }
  queueBell(e, t = 1e3) {
    debugState.dispatch(
      F.enqueue({
        type: o,
        message: e,
        delay: t,
        icon: zX.SPINNER,
      }),
    );
  }
})();
export const J = $$l0;
