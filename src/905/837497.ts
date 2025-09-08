import { NC } from "../905/17179";
import { logWarning } from "../905/714362";
import { P, o as _$$o } from "../905/717906";
import { createOptimistThunk } from "../905/350402";
import { Cx, x2, of } from "../figma_app/714946";
import { getPluginAllowListKey, getWidgetAllowListKey } from "../figma_app/155287";
import { pluginAPIService } from "../905/3209";
import { U } from "../905/424668";
import { Qi } from "../figma_app/559491";
let $$p1 = P;
let $$m7 = _$$o;
let $$h3 = createOptimistThunk((e, t) => {
  let i = t.orgId || e.getState().currentUserOrgId;
  if (!i) return;
  let n = e.getState();
  let a = n.openFile?.key ?? null;
  let s = getPluginAllowListKey(i, a);
  e.dispatch(Cx({
    key: s
  }));
  pluginAPIService.getOrgWhitelist({
    orgId: i,
    profileId: t.profileId,
    fileKey: a
  }).then(({
    data: t
  }) => {
    let i = t.meta;
    e.dispatch(Qi({
      publishedPlugins: i,
      src: "initializeAllowlistedPlugins"
    }));
    let n = i.reduce((e, t) => (e[t.id] = !0, e), {});
    e.dispatch($$p1(n));
    e.dispatch(x2({
      key: s
    }));
  }).catch(t => {
    logWarning("plugin allowlist", "Unable to fetch the plugin allowlist", {
      message: t.message
    });
    e.dispatch(of({
      key: s
    }));
  });
});
let $$g6 = createOptimistThunk(async (e, t) => {
  let i = t.orgId || e.getState().currentUserOrgId;
  if (!i) return;
  let n = e.getState();
  let a = n.openFile?.key ?? null;
  let s = getWidgetAllowListKey(i, a);
  e.dispatch(Cx({
    key: s
  }));
  try {
    let n = await U.getOrgWhitelist({
      orgId: i,
      profileId: t.profileId,
      fileKey: a
    });
    let r = n?.data?.meta || [];
    e.dispatch(Qi({
      publishedPlugins: r,
      src: "initializeAllowlistedWidgets"
    }));
    let l = r.reduce((e, t) => (e[t.id] = !0, e), {});
    e.dispatch($$m7(l));
    e.dispatch(x2({
      key: s
    }));
  } catch (t) {
    logWarning("widget allowlist", "Unable to fetch the widget allowlist", {
      message: t.message
    });
    e.dispatch(of({
      key: s
    }));
  }
});
let $$f2 = NC("PUT_ALLOWLISTED_PLUGIN");
let $$_4 = NC("DEL_ALLOWLISTED_PLUGIN");
let $$A0 = NC("PUT_ALLOWLISTED_WIDGET");
let $$y5 = NC("DEL_ALLOWLISTED_WIDGET");
export const EE = $$A0;
export const Pq = $$p1;
export const Rg = $$f2;
export const Vl = $$h3;
export const XV = $$_4;
export const Yw = $$y5;
export const mV = $$g6;
export const oO = $$m7;