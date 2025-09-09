import { customHistory } from "../905/612521";
import { getInitialOptions } from "../figma_app/169182";
let a = class e {
  static initialize() {
    let t = getInitialOptions().user_data?.email;
    if (t && (-1 !== t.indexOf("@figma)") || -1 !== t.indexOf("@test.figma"))) {
      let t = new URLSearchParams(customHistory.location.search).get("safeModeRenderLimitMs");
      t && (e.getForcedRenderTimeMsValue = parseInt(t));
    }
  }
  getForcedRenderTimeMs() {
    return e.getForcedRenderTimeMsValue;
  }
};
a.getForcedRenderTimeMsValue = null;
a.initialize();
let $$s1 = new a();
let $$o0 = new class {
  constructor(e) {
    this.safeModeOptions = e;
  }
  getForcedRenderTimeMs() {
    let e = this.safeModeOptions.getForcedRenderTimeMs();
    return null != e ? e : -1;
  }
}($$s1);
export const iw = $$o0;
export const ld = $$s1;