import { ServiceCategories as _$$e } from "../905/165054";
import { GLFailureType } from "../figma_app/763686";
import { atomStoreManager } from "../figma_app/27355";
import { trackEventAnalytics } from "../905/449184";
import { isStackOverflowError } from "../905/194389";
import { setTagGlobal, reportError, SeverityLevel } from "../905/11";
import { logInfo } from "../905/714362";
import { showModalHandler } from "../905/156213";
import { bY } from "../figma_app/298277";
import { openFileAtom } from "../figma_app/516028";
import { Lu } from "../figma_app/453508";
import { isActiveAtom } from "../905/617744";
import { h as _$$h } from "../figma_app/276445";
export let $$f0 = new class {
  constructor() {
    this._preventEnteringCpp = !1;
    this._fullscreenCrashState = "ok";
  }
  fullscreenCrashed(e, t) {
    if ("ok" !== this._fullscreenCrashState) {
      logInfo("crash", "crash already reported", {
        "new crash": e,
        "original crash": this._fullscreenCrashState
      });
      return;
    }
    if (t) {
      let t;
      logInfo("crash", "updating crash state", {
        crash: e
      });
      this._preventEnteringCpp = !0;
      this._fullscreenCrashState = e;
      atomStoreManager.set(_$$h, e);
      let i = window.FigmaMobile;
      i?.dismissMediaLoadingToast && i.dismissMediaLoadingToast();
      "oom" === e.type && i?.handleAllocationFailure && i.handleAllocationFailure(GLFailureType.WASM_FAILURE);
      let o = bY();
      setTagGlobal("fullscreen_status", "has_crashed");
      try {
        let e = atomStoreManager.get(openFileAtom);
        t = e?.editorType;
      } catch (e) {
        reportError(_$$e.CLIENT_PLATFORM, e, {
          tags: {
            severity: SeverityLevel.Minor
          }
        });
      }
      trackEventAnalytics("Fullscreen Hard Crash", {
        crashType: e.type,
        isMergeModalOpen: atomStoreManager.get(isActiveAtom),
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
    setTagGlobal("fullscreen_status", "crash");
    let i = reportError(_$$e.UNOWNED, e, {
      tags: {
        severity: SeverityLevel.Critical
      }
    });
    setTagGlobal("fullscreen_status", "has_crashed");
    let r = "oom" === t ? "oom" : isStackOverflowError(e) ? "stack-overflow" : "other";
    this.fullscreenCrashed({
      type: r,
      sentryId: i
    }, !0);
  }
  showMemoryCrashModal(e, t, i) {
    if (t) {
      if (!i) throw Error("Trying to dispatch before we've been initialized");
      i.dispatch(showModalHandler({
        type: Lu,
        data: {
          isBranching: !!e.isBranching
        }
      }));
    }
  }
}();
export const y = $$f0;