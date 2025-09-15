import { S } from "../905/872825";
import { nS, Ac, aV } from "../figma_app/321395";
import { ResourceTypeSubset } from "../905/178090";
import { VR, FZ, CS, p7 } from "../figma_app/979714";
let a = class extends nS {};
Ac(a);
a.displayName = "SavesRoute";
a.path = aV(VR, "/community/saves/:resourceType?");
a.serializeParams = e => ({
  ...FZ(e),
  ...(e.resourceType && {
    resourceType: e.resourceType
  })
});
a.deserializeParams = e => ({
  ...CS(e),
  ...(e.resourceType && {
    resourceType: S(e.resourceType, ResourceTypeSubset)
  })
});
a.parseQueryString = e => ({
  ...p7(e)
});
export let $$l0 = 443 == require.j ? a : null;
export const e = $$l0;