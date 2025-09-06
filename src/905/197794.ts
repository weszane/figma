import { bpS, jXp, KO7, jWk } from "../figma_app/763686";
import { jS } from "../figma_app/762706";
import { createDeferredPromise } from "../905/874553";
import { getFeatureFlags } from "../905/601108";
import { isInteractionPathCheck } from "../figma_app/897289";
import { yF, LQ } from "../905/777093";
import { m as _$$m } from "../905/575846";
import { gx } from "../905/319279";
import { vw, f_ } from "../905/189279";
import { $$K0 } from "../905/896230";
import { e3 } from "../figma_app/298277";
import { g as _$$g } from "../905/544669";
import { Q, r as _$$r } from "../figma_app/661568";
let f = !1;
let _ = createDeferredPromise();
async function A() {
  if (!_$$m && !f) {
    let e = Q.getLoadTimeTracker();
    e && (e.fullscreenEvents.loadAndStartFullscreenIfNecessary = Math.round(performance.now()));
    f = !0;
    await e3($$K0, "prototype-lib");
    _.resolve();
  }
}
let y = new Promise(() => {});
let b = {
  "fullscreen-app": null,
  "prototype-lib": null
};
export async function $$v0(e, t) {
  gx(e.prototypeApp, e.skewKiwiSerialization, e.deprecatedJsSceneHooks);
  let i = "prototype-lib";
  null == b[i] ? b[i] = (async () => {
    if (_$$r.reset(), _$$r.start("initializePrototypeLib"), _$$g({
      canLoadImageResource: !1,
      canLoadFontResource: !0,
      isInPrototypeViewer: !0,
      actionStateDisableUpdates: !0,
      appCanInteractWithWidgetEmbedsAndLinkPreviews: !1,
      appIsReadOnly: !0,
      appIsRecovery: !1,
      appCanRenderHyperlinkHoverUI: !1,
      appCanRenderMultiplayerOrSelectionUI: !1,
      appCanRenderScrollbars: !1,
      appCanRenderSceneGraphUI: !1,
      onlyRenderTopLevelFrameOfSelection: !1,
      clickOnlyComments: !1,
      allowToggleCommentsWhenLoggedOut: !1,
      requireInteractionForFocus: !1,
      requestVariableMirroring: !1,
      requestAssetMirroring: !1
    }), await A(), !bpS) throw Error("PrototypeLib: error during initialization");
    let e = Q.getLoadTimeTracker();
    let t = [jXp.LOCAL, jXp.GOOGLE];
    let i = yF(t).then(t => {
      e && e.handleFontListLoaded((t.indexFontsList?.length || 0) + (t.localFontsList?.length || 0));
      LQ(t);
    });
    y = getFeatureFlags().prototype_async_font_loading ? Promise.resolve() : i;
    _$$r.end("initializePrototypeLib");
    console.debug("[prototype lib] Ready for interactions", performance.now());
    e && (e.fullscreenEvents.fullscreenIsReady = Math.round(performance.now()));
    _$$r.loadTimer.report();
    return KO7();
  })() : jWk && !isInteractionPathCheck() ? jS({
    callMain: () => {
      jWk.refreshJsCppBindings();
    },
    tsApisForCpp: $$K0,
    registerRefreshCallback: e => {
      vw("prototype-lib", e);
    }
  }) : isInteractionPathCheck() && (f_("prototype-lib"), await A());
  return {
    cppModules: await b[i],
    fontListPromise: y
  };
}
export const M = $$v0;