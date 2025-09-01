import { sx } from "../905/449184";
import { td } from "../figma_app/181241";
import { XHR } from "../905/910117";
function r(e, t, n, l) {
  let o = {
    pluginId: t,
    orgId: e
  };
  l && (o.workspaceIds = l.join(","));
  sx("plugin" === n ? "Hub Plugin Add to Whitelist" : "Hub Widget Add to Whitelist", o);
}
function u(e, t, n, l) {
  let o = {
    pluginId: t,
    orgId: e
  };
  l && (o.workspaceIds = l.join(","));
  sx("plugin" === n ? "Hub Plugin Remove from Whitelist" : "Hub Widget Remove from Whitelist", o);
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
    return XHR.post(`/api/${s[n]}/org/${e}/allowlist/${t}`, td.toAPIParameters({
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
    return XHR.del(`/api/${s[n]}/org/${e}/allowlist/${t}`, td.toAPIParameters({
      workspaceIds: i
    }));
  }
  enableExtensionForOrg({
    orgId: e,
    extensionId: t,
    extensionType: n
  }) {
    r(e, t, n);
    return XHR.post(`/api/${s[n]}/org/${e}/allowlist/${t}`);
  }
  disableExtensionForOrg({
    orgId: e,
    extensionId: t,
    extensionType: n
  }) {
    u(e, t, n);
    return XHR.del(`/api/${s[n]}/org/${e}/allowlist/${t}`);
  }
}();
export const X = $$d0;