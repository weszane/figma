import { sx } from "../905/449184";
import { td } from "../figma_app/181241";
import { XHR } from "../905/910117";
function o(e, t, r, i) {
  let n = {
    pluginId: t,
    orgId: e
  };
  i && (n.workspaceIds = i.join(","));
  sx("plugin" === r ? "Hub Plugin Add to Whitelist" : "Hub Widget Add to Whitelist", n);
}
function a(e, t, r, i) {
  let n = {
    pluginId: t,
    orgId: e
  };
  i && (n.workspaceIds = i.join(","));
  sx("plugin" === r ? "Hub Plugin Remove from Whitelist" : "Hub Widget Remove from Whitelist", n);
}
let l = {
  plugin: "plugins",
  widget: "widgets"
};
let $$c0 = new class {
  enableExtensionForWorkspaces({
    orgId: e,
    extensionId: t,
    extensionType: r,
    workspaceIds: s
  }) {
    o(e, t, r, s);
    return XHR.post(`/api/${l[r]}/org/${e}/allowlist/${t}`, td.toAPIParameters({
      workspaceIds: s
    }));
  }
  disableExtensionForWorkspaces({
    orgId: e,
    extensionId: t,
    extensionType: r,
    workspaceIds: s
  }) {
    a(e, t, r, s);
    return XHR.del(`/api/${l[r]}/org/${e}/allowlist/${t}`, td.toAPIParameters({
      workspaceIds: s
    }));
  }
  enableExtensionForOrg({
    orgId: e,
    extensionId: t,
    extensionType: r
  }) {
    o(e, t, r);
    return XHR.post(`/api/${l[r]}/org/${e}/allowlist/${t}`);
  }
  disableExtensionForOrg({
    orgId: e,
    extensionId: t,
    extensionType: r
  }) {
    a(e, t, r);
    return XHR.del(`/api/${l[r]}/org/${e}/allowlist/${t}`);
  }
}();
export const X = $$c0;