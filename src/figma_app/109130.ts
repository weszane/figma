import { useDispatch } from "react-redux";
import { ServiceCategories as _$$e } from "../905/165054";
import { atom, Xr, useAtomWithSubscription, atomStoreManager } from "../figma_app/27355";
import { z } from "../905/239603";
import o from "../vendor/260986";
import { useDebouncedCallback } from "use-debounce";
import { debugState } from "../905/407919";
import { getResourceDataOrFallback } from "../905/723791";
import { setupResourceAtomHandler } from "../figma_app/566371";
import { reportError } from "../905/11";
import { Vg } from "../figma_app/147952";
import { nl, cW, ZT } from "../figma_app/844435";
import { useCurrentFileKey } from "../figma_app/516028";
import { RecentlyUsedActionsView } from "../figma_app/43951";
import { getPluginByFileId } from "../figma_app/300692";
import { ResourceType } from "../figma_app/45218";
import { CN } from "../figma_app/915202";
import { hasLocalFileId, SV } from "../figma_app/155287";
var l = o;
export let $$I2 = atom([]);
export function $$S1() {
  let [e] = setupResourceAtomHandler(RecentlyUsedActionsView({}));
  let t = nl();
  let r = cW();
  let o = ZT();
  let l = useCurrentFileKey();
  let S = Xr($$I2);
  let v = useDispatch();
  let A = [];
  let x = [];
  let N = useDebouncedCallback(() => {
    A.length > 0 && v(Vg({
      resourceType: ResourceType.PLUGIN,
      resourceIds: A
    }));
    x.length > 0 && v(Vg({
      resourceType: ResourceType.WIDGET,
      resourceIds: x
    }));
  }, 500);
  if (!e.data) return [];
  let C = getResourceDataOrFallback(e.data.actionsHistory);
  if (!C || !C.recentlyUsedActions) return [];
  let w = z.array(CN).safeParse(C.recentlyUsedActions);
  if (!w.success) {
    reportError(_$$e.AI_FOR_PRODUCTION, Error("Fetched invalid schema for QuickActionsRecentCommandSelectedArgs from actions history"), {});
    return [];
  }
  w.data.forEach(e => {
    if (!e.extensionInfo || e.extensionInfo.localFileId) return;
    let {
      extensionType,
      extensionId
    } = e.extensionInfo;
    "plugin" === extensionType ? A.push(extensionId) : "widget" === extensionType && x.push(extensionId);
  });
  N();
  S(function ({
    recentlyUsed: e,
    localExtensions: t,
    publishedExtensions: r,
    openFileKey: n,
    extensionIdsCalledToFetch: a
  }) {
    return e.map(e => function (e, t, r, n, a) {
      let {
        displayName,
        selectedRunPluginArgs,
        extensionInfo
      } = e;
      if (!selectedRunPluginArgs) return {
        displayName,
        extensionInfo
      };
      let d = function ({
        selectedRunPluginArgs: e,
        localExtensions: t,
        publishedExtensions: r,
        openFileKey: n,
        extensionInfo: a,
        extensionIdsCalledToFetch: s
      }) {
        if (!a) {
          reportError(_$$e.AI_FOR_PRODUCTION, Error("Extension info missing for selectedRunPluginArgs"), {});
          return null;
        }
        let {
          extensionId,
          currentExtensionVersionId,
          localFileId
        } = a;
        let {
          parameterValues
        } = e;
        let p = localFileId?.toString() || extensionId;
        let h = getPluginByFileId({
          idToSearch: p,
          localExtensionsByFileId: t,
          publishedExtensions: r
        });
        if (!h && !localFileId) {
          extensionId in debugState.getState().recentlyUsed.plugins.fetchedResources || s.has(extensionId) || reportError(_$$e.AI_FOR_PRODUCTION, Error(`Published plugin with ID ${extensionId} not fetched`), {});
          return null;
        }
        if (!h || !hasLocalFileId(h) && currentExtensionVersionId !== h.current_plugin_version_id) return null;
        if (!parameterValues) {
          hasLocalFileId(h) ? reportError(_$$e.AI_FOR_PRODUCTION, Error(`Parameter values missing for selectedRunPluginArgs for local plugin with ID ${extensionId}`), {}) : reportError(_$$e.AI_FOR_PRODUCTION, Error(`Parameter values missing for selectedRunPluginArgs for published plugin with ID ${extensionId}`), {});
          return null;
        }
        let m = function (e) {
          let t = {};
          for (let r in e) {
            let n;
            try {
              n = JSON.parse(e[r]);
            } catch (t) {
              reportError(_$$e.AI_FOR_PRODUCTION, Error(`Invalid JSON value for key '${r}': ${e[r]}`), {});
              return null;
            }
            let a = SV.safeParse(n);
            if (!a.success) {
              reportError(_$$e.AI_FOR_PRODUCTION, Error(`Invalid ParameterValue for key '${r}': ${e[r]}`), {});
              return null;
            }
            t[r] = a.data;
          }
          return t;
        }(parameterValues);
        return m ? {
          plugin: h,
          command: "",
          queryMode: !1,
          runMode: "default",
          triggeredFrom: "parameter-entry",
          openFileKey: n || "",
          deferRunEvent: !1,
          parameterValues: m,
          isWidget: !1
        } : null;
      }({
        selectedRunPluginArgs,
        localExtensions: t,
        publishedExtensions: r,
        openFileKey: n,
        extensionInfo,
        extensionIdsCalledToFetch: a
      });
      return d ? {
        displayName,
        runPluginArgs: d,
        extensionInfo: e.extensionInfo
      } : null;
    }(e, t, r, n, a)).filter(e => null !== e);
  }({
    recentlyUsed: w.data,
    localExtensions: t,
    publishedExtensions: {
      ...r,
      ...o
    },
    openFileKey: l,
    extensionIdsCalledToFetch: new Set(A.concat(x))
  }));
}
export function $$v3() {
  return l()(useAtomWithSubscription($$I2), "displayName");
}
export function $$A0() {
  return l()(atomStoreManager.get($$I2), "displayName");
}
export const $O = $$A0;
export const WR = $$S1;
export const Z8 = $$I2;
export const wo = $$v3;