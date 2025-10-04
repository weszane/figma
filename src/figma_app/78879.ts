import { getResponsiveChildren } from "../figma_app/387100";
import { getSingletonSceneGraph } from "../905/700578";
import { atomStoreManager } from "../figma_app/27355";
import { debugState } from "../905/407919";
import { getCurrentLiveGraphClient } from "../905/761735";
import { getResourceDataOrFallback } from "../905/723791";
import { SiteBundles } from "../figma_app/43951";
import { up } from "../figma_app/903209";
import { b } from "../905/875374";
export async function $$p0(e) {
  let t;
  let r = debugState.getState().user?.id;
  if (!r) throw Error("No current user found");
  let p = function () {
    try {
      let e = getSingletonSceneGraph();
      let t = e.getCurrentPage();
      if (!t) return [];
      return getResponsiveChildren(e, t.guid).map(e => e.guid);
    } catch (e) {
      console.warn("Could not get responsive sets for site publishing:", e);
      return [];
    }
  }();
  atomStoreManager.set(up, {
    inProgress: !0,
    bundleId: null,
    error: !1
  });
  try {
    t = await b(debugState.dispatch, {
      fileKey: e,
      publishedByUserId: r,
      responsiveSetGuids: p
    });
  } catch (e) {
    atomStoreManager.set(up, {
      inProgress: !1,
      bundleId: null,
      error: !0
    });
    return e;
  }
  atomStoreManager.set(up, {
    inProgress: !0,
    bundleId: t,
    error: !1
  });
  await function (e, t) {
    let r = getCurrentLiveGraphClient();
    if (!r) throw Error("LiveGraph client not available");
    return new Promise((n, i) => {
      let a = setTimeout(() => {
        s?.();
        i(Error("Site publishing timeout - bundle did not complete in time"));
      }, 6e4);
      let s = r.subscribe(SiteBundles, {
        fileKey: e
      }, e => {
        try {
          if ("loaded" === e.status) {
            let r = getResourceDataOrFallback(e.data?.siteBundles);
            let o = r?.find(e => e.id === t);
            o?.status === "succeeded" ? (clearTimeout(a), s?.(), n()) : o?.status === "failed" && (clearTimeout(a), s?.(), i(Error(`Site publishing failed: ${o.error || "Unknown error"}`)));
          }
        } catch (e) {
          clearTimeout(a);
          s?.();
          i(e);
        }
      });
    });
  }(e, t);
  atomStoreManager.set(up, {
    inProgress: !1,
    bundleId: t,
    error: !1
  });
}
export const r = $$p0;