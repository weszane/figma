import { trackEventAnalytics } from "../905/449184";
import { APIParameterUtils } from "../figma_app/181241";
import { sendWithRetry } from "../905/910117";
function r(e, t, n, l) {
  let o = {
    pluginId: t,
    orgId: e
  };
  l && (o.workspaceIds = l.join(","));
  trackEventAnalytics("plugin" === n ? "Hub Plugin Add to Whitelist" : "Hub Widget Add to Whitelist", o);
}
function u(e, t, n, l) {
  let o = {
    pluginId: t,
    orgId: e
  };
  l && (o.workspaceIds = l.join(","));
  trackEventAnalytics("plugin" === n ? "Hub Plugin Remove from Whitelist" : "Hub Widget Remove from Whitelist", o);
}
let s = {
  plugin: "plugins",
  widget: "widgets"
};
let $$d0 = new class {
  enableExtensionForWorkspaces({
    orgId: e,
    extensionId: t,
    extensionType: n,
    workspaceIds: i
  }) {
    r(e, t, n, i);
    return sendWithRetry.post(`/api/${s[n]}/org/${e}/allowlist/${t}`, APIParameterUtils.toAPIParameters({
      workspaceIds: i
    }));
  }
  disableExtensionForWorkspaces({
    orgId: e,
    extensionId: t,
    extensionType: n,
    workspaceIds: i
  }) {
    u(e, t, n, i);
    return sendWithRetry.del(`/api/${s[n]}/org/${e}/allowlist/${t}`, APIParameterUtils.toAPIParameters({
      workspaceIds: i
    }));
  }
  enableExtensionForOrg({
    orgId: e,
    extensionId: t,
    extensionType: n
  }) {
    r(e, t, n);
    return sendWithRetry.post(`/api/${s[n]}/org/${e}/allowlist/${t}`);
  }
  disableExtensionForOrg({
    orgId: e,
    extensionId: t,
    extensionType: n
  }) {
    u(e, t, n);
    return sendWithRetry.del(`/api/${s[n]}/org/${e}/allowlist/${t}`);
  }
}();
export const X = $$d0;
