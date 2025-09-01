import { h3O, _em, xal, DPQ } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import { zl } from "../figma_app/27355";
import { sx } from "../905/449184";
import { debugState } from "../905/407919";
import { getInitialOptions, buildUploadUrl } from "../figma_app/169182";
import { t as _$$t } from "../905/303541";
import { F } from "../905/302958";
import { zX } from "../905/576487";
import { Y5 } from "../figma_app/455680";
import { q } from "../905/807667";
import { Ru } from "../figma_app/300692";
import { k0, ZQ } from "../figma_app/155287";
import { s6, nc } from "../figma_app/474636";
import { Jp } from "../905/816197";
import { $A } from "../905/782918";
import { n as _$$n } from "../905/347702";
import { hw, iu, fD } from "../905/753206";
let n;
function I() {
  return n = new Set();
}
async function $$E() {
  if (n) return n;
  try {
    let e = "staging" === getInitialOptions().cluster_name ? new URL(buildUploadUrl("d22f7cdebb6824859628228028af4125310c5497")) : "prod" === getInitialOptions().cluster_name ? new URL(buildUploadUrl("59b96eebae268ef59559b1850b43a3bf625b9bfa")) : void 0;
    if (!e) return I();
    let t = await fetch(e);
    if (!t.ok) {
      console.error("Error fetching incremental loading list");
      return I();
    }
    let i = await t.json();
    return n = new Set(i);
  } catch {
    console.error("Error fetching incremental loading list");
    return I();
  }
}
async function x(e, t) {
  if (!h3O.isIncrementalSession()) {
    h3O.isValidatingIncremental() && (await q(_em.PLUGIN_VALIDATION));
    return !1;
  }
  let i = e?.plugin_id || null;
  let n = e?.manifest.documentAccess || null;
  return !(!i || e && Ru(e) || $A(debugState.getState().selectedView)) && !t && (!!getFeatureFlags().plugins_force_load_all_pages || (n ? "dynamic-page" !== n : !(await $$E()).has(i)));
}
export let $$S0 = _$$n(async (e, t, i) => {
  let n = debugState.getState().mirror.appModel.pagesList.filter(e => e.status === xal.NOT_LOADED).length;
  if (0 === n) return {
    isCancelled: !1
  };
  zl.set(s6, !0);
  let a = e && k0(e) ? _$$t("plugins.loading_pages_for_widget", {
    numUnloadedPages: n
  }) : _$$t("plugins.loading_pages_for_plugin", {
    numUnloadedPages: n
  });
  let d = () => {
    Y5.dispatch(F.dequeue({
      matchType: "loading-pages-for-plugin"
    }));
  };
  let g = !1;
  let y = () => {};
  let b = new Promise(e => {
    zl.set(nc, !0);
    y = e;
  });
  e && k0(e) && t?.widgetAction === "insert" && Y5.dispatch(F.dequeue({
    matchType: "plugins-status"
  }));
  Y5.dispatch(F.enqueue({
    message: a,
    icon: zX.IMAGE_BACKED_SPINNER,
    type: "loading-pages-for-plugin",
    delay: 1e3,
    timeoutOverride: 1 / 0,
    button: {
      text: _$$t("plugins.cancel_loading_pages"),
      action: () => {
        y();
        d();
        g || function (e) {
          let t = e?.plugin ?? hw() ?? null;
          let i = iu.stats;
          sx("Plugin Start Cancelled", {
            pluginRunID: fD(),
            trigger: e?.triggeredFrom,
            runMode: e?.runMode,
            isWidget: e?.isWidget,
            command: e?.command,
            fileKey: e?.openFileKey,
            pluginID: t?.plugin_id,
            ...(i ? i.getTimingMarks() : {}),
            ...(t ? ZQ(t) ? {
              pluginVersionID: "",
              source: "development",
              name: "<local plugin>"
            } : {
              pluginVersionID: t.id,
              source: "imported",
              name: t.name
            } : {})
          });
        }(t);
        g = !0;
      }
    }
  }));
  let I = q(i);
  Jp() ? h3O.resolveSceneGraphQueryForTest("0:0", DPQ.DEFAULT) : (await Promise.race([I, b]), d(), zl.set(s6, !1));
  return {
    isCancelled: g
  };
});
export async function $$w1(e) {
  let t = e?.plugin ?? hw();
  let i = e?.queryMode ?? !1;
  return (await x(t, i)) ? iu.stats ? await iu.stats.markDuration("waitForAllPagesForPluginMs", async () => await $$S0(t, e, _em.LEGACY_PLUGIN)) : await $$S0(t, e, _em.LEGACY_PLUGIN) : {
    isCancelled: !1
  };
}
export const E = $$S0;
export const y = $$w1;