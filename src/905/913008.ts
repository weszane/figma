import { ServiceCategories as _$$e } from "../905/165054";
import { HTr } from "../figma_app/763686";
import { zl } from "../figma_app/27355";
import { sx } from "../905/449184";
import { fF } from "../905/194389";
import { kF, $D, DZ } from "../905/11";
import { Lo } from "../905/714362";
import { to } from "../905/156213";
import { bY } from "../figma_app/298277";
import { yV } from "../figma_app/516028";
import { Lu } from "../figma_app/453508";
import { qm } from "../905/617744";
import { h as _$$h } from "../figma_app/276445";
export let $$f0 = new class {
  constructor() {
    this._preventEnteringCpp = !1;
    this._fullscreenCrashState = "ok";
  }
  fullscreenCrashed(e, t) {
    if ("ok" !== this._fullscreenCrashState) {
      Lo("crash", "crash already reported", {
        "new crash": e,
        "original crash": this._fullscreenCrashState
      });
      return;
    }
    if (t) {
      let t;
      Lo("crash", "updating crash state", {
        crash: e
      });
      this._preventEnteringCpp = !0;
      this._fullscreenCrashState = e;
      zl.set(_$$h, e);
      let i = window.FigmaMobile;
      i?.dismissMediaLoadingToast && i.dismissMediaLoadingToast();
      "oom" === e.type && i?.handleAllocationFailure && i.handleAllocationFailure(HTr.WASM_FAILURE);
      let o = bY();
      kF("fullscreen_status", "has_crashed");
      try {
        let e = zl.get(yV);
        t = e?.editorType;
      } catch (e) {
        $D(_$$e.CLIENT_PLATFORM, e, {
          tags: {
            severity: DZ.Minor
          }
        });
      }
      sx("Fullscreen Hard Crash", {
        crashType: e.type,
        isMergeModalOpen: zl.get(qm),
        editorType: t,
        ...o
      }, {
        forwardToDatadog: !0
      });
    }
  }
  getFullscreenCrashState() {
    return this._fullscreenCrashState;
  }
  preventEnteringCpp() {
    return this._preventEnteringCpp;
  }
  fatalCppError(e, t = "other") {
    "bindings" === t && window.dispatchEvent(new ErrorEvent("bindingserror", {
      error: e
    }));
    kF("fullscreen_status", "crash");
    let i = $D(_$$e.UNOWNED, e, {
      tags: {
        severity: DZ.Critical
      }
    });
    kF("fullscreen_status", "has_crashed");
    let r = "oom" === t ? "oom" : fF(e) ? "stack-overflow" : "other";
    this.fullscreenCrashed({
      type: r,
      sentryId: i
    }, !0);
  }
  showMemoryCrashModal(e, t, i) {
    if (t) {
      if (!i) throw Error("Trying to dispatch before we've been initialized");
      i.dispatch(to({
        type: Lu,
        data: {
          isBranching: !!e.isBranching
        }
      }));
    }
  }
}();
export const y = $$f0;