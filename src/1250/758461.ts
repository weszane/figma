import { S } from "../905/872825";
import { nS, Ac, aV } from "../figma_app/321395";
import { VR, FZ, CS, p7 } from "../figma_app/979714";
var $$o0 = (e => (e.FIGJAM_TEMPLATES = "figjam-templates", e.PLUGINS = "plugins", e.WIDGETS = "widgets", e.SLIDE_TEMPLATES = "slide-templates", e.LIBRARIES = "libraries", e.COOPER_TEMPLATES = "buzz-templates", e.FIGMAKE_TEMPLATES = "figmake-templates", e.RECENTLY_ADDED_TEMPLATES = "recently-added-templates", e))($$o0 || {});
let s = class extends nS {};
Ac(s);
s.displayName = "InternalResourcesRoute";
s.path = aV(VR, "/internal/:resourceTypeSlug/:templatesTeamId?");
s.serializeParams = e => ({
  ...FZ(e),
  resourceTypeSlug: e.resourceTypeSlug,
  templatesTeamId: e.templatesTeamId
});
s.deserializeParams = e => {
  let t = S(e.resourceTypeSlug, $$o0);
  if (void 0 === t) throw Error(`InternalResourceHubRoute: Invalid resource type slug ${e.resourceTypeSlug}`);
  return {
    resourceTypeSlug: t,
    templatesTeamId: e.templatesTeamId,
    ...CS(e)
  };
};
s.parseQueryString = e => ({
  ...p7(e)
});
export let $$l1 = 443 == require.j ? s : null;
export const M = $$o0;
export const U = $$l1;