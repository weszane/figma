import { tT } from "../905/663269";
import { Rs } from "../figma_app/288654";
import { oA } from "../905/723791";
import { c } from "../905/587163";
import { M9I, iJD } from "../figma_app/43951";
import { q5 } from "../figma_app/516028";
function d(e, t, r) {
  let i = [];
  let a = [];
  for (let t of e) {
    var s;
    if (!t.plugin) continue;
    if ("status" in t.plugin) {
      if (t.plugin.status !== tT.Loaded) continue;
      s = t.plugin.data;
    } else s = t.plugin;
    if (!s) continue;
    let e = "Workspace" === t.allowlistGroupType;
    let o = t.allowlistedWorkspace;
    if (e && !o || e && !r) continue;
    let l = o?.id;
    r && l && l !== r || (s.isWidget ? a.push(s.id) : i.push(s.id));
  }
  return "plugin" === t ? i : a;
}
export function $$c6(e, t, r = !0) {
  let n = $$g3();
  let a = Rs(M9I, {
    orgId: e
  }, {
    enabled: r
  });
  let s = a.data?.org;
  return "loading" !== a.status && n.loaded ? "errors" !== a.status && s ? {
    loaded: !0,
    data: d(s.allowlistedPlugins, t, n.data?.workspaceId)
  } : {
    loaded: !0,
    data: []
  } : {
    loaded: !1
  };
}
export function $$u1(e, t = !0) {
  let r = c(t);
  if (!r.loaded) return {
    loaded: !1
  };
  let n = r.data;
  return {
    loaded: !0,
    data: d(n?.allowlistedExtensions ?? [], e, n?.workspaceId ?? void 0)
  };
}
export function $$p4({
  workspace: e,
  hasPendingRequest: t,
  extension: r
}) {
  return !!(e.publicPluginsOrWidgetDisabled && !t && e.extensionRequestsAllowed && !r?.roles.org);
}
export function $$_2({
  org: e,
  isWidget: t
}) {
  if (!e) return !1;
  let r = t ? e.widgets_whitelist_enforced : e.plugins_whitelist_enforced;
  let n = t ? e.widget_requests_allowed : e.plugin_requests_allowed;
  return r && n;
}
export function $$h5({
  org: e,
  extension: t,
  allowlistedExtensions: r
}) {
  return !!e && !!t && !!($$_2({
    org: e,
    isWidget: t.is_widget
  }) && !t.roles.org && !r[t.id]);
}
export function $$m0({
  org: e,
  extensionVersion: t,
  isWidget: r,
  allowlistedExtensions: n
}) {
  return !!e && !!t && !!($$_2({
    org: e,
    isWidget: r
  }) && !t.is_private && !n[t.plugin_id]);
}
export function $$g3() {
  let e = q5();
  let t = !!e;
  let r = Rs(iJD, {
    fileKey: e?.key ?? ""
  }, {
    enabled: t
  });
  return t ? "loaded" !== r.status ? {
    loaded: !1
  } : {
    loaded: !0,
    data: {
      workspaceId: r.data?.file?.workspaceId || void 0,
      workspaceName: oA(r.data?.file?.computedWorkspace)?.workspace?.name,
      fileKey: e.key,
      fileName: e.name
    }
  } : {
    loaded: !0,
    data: void 0
  };
}
export const BF = $$m0;
export const CR = $$u1;
export const Cs = $$_2;
export const RW = $$g3;
export const XL = $$p4;
export const XV = $$h5;
export const kA = $$c6;