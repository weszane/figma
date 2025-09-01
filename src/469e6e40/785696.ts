import { sx } from "../905/449184";
import { td } from "../figma_app/181241";
import { XHR } from "../905/910117";
function r(e, t, a, s) {
  let i = {
    pluginId: t,
    orgId: e
  };
  s && (i.workspaceIds = s.join(","));
  sx("plugin" === a ? "Hub Plugin Add to Whitelist" : "Hub Widget Add to Whitelist", i);
}
function l(e, t, a, s) {
  let i = {
    pluginId: t,
    orgId: e
  };
  s && (i.workspaceIds = s.join(","));
  sx("plugin" === a ? "Hub Plugin Remove from Whitelist" : "Hub Widget Remove from Whitelist", i);
}
let o = {
  plugin: "plugins",
  widget: "widgets"
};
let $$d0 = new class {
  enableExtensionForWorkspaces({
    orgId: e,
    extensionId: t,
    extensionType: a,
    workspaceIds: n
  }) {
    r(e, t, a, n);
    return XHR.post(`/api/${o[a]}/org/${e}/allowlist/${t}`, td.toAPIParameters({
      workspaceIds: n
    }));
  }
  disableExtensionForWorkspaces({
    orgId: e,
    extensionId: t,
    extensionType: a,
    workspaceIds: n
  }) {
    l(e, t, a, n);
    return XHR.del(`/api/${o[a]}/org/${e}/allowlist/${t}`, td.toAPIParameters({
      workspaceIds: n
    }));
  }
  enableExtensionForOrg({
    orgId: e,
    extensionId: t,
    extensionType: a
  }) {
    r(e, t, a);
    return XHR.post(`/api/${o[a]}/org/${e}/allowlist/${t}`);
  }
  disableExtensionForOrg({
    orgId: e,
    extensionId: t,
    extensionType: a
  }) {
    l(e, t, a);
    return XHR.del(`/api/${o[a]}/org/${e}/allowlist/${t}`);
  }
}();
export const X = $$d0;