import { getSingletonSceneGraph } from "../905/700578";
import { debugState } from "../905/407919";
import { getInitialOptions } from "../figma_app/169182";
import { Iv, sO } from "../figma_app/97020";
import { isFullscreenSitesView } from "../905/561485";
export function $$l0({
  domain: e,
  path: t = "/",
  fullUrl: r = !0
}) {
  t = t.replace(/\/$/, "");
  e = e.toLowerCase();
  return `${r ? "https://" : ""}${e}${t}`;
}
export function $$d2(e, t) {
  let {
    selectedView
  } = debugState.getState();
  if (!isFullscreenSitesView(selectedView) || t) return {
    id: e,
    cmsSlug: null
  };
  let a = Iv(e);
  e = sO(e);
  let l = getSingletonSceneGraph().getCurrentPage();
  if (!l) throw Error("No current page. Unable to resolve URL.");
  return {
    id: l.childrenNodes.find(t => t.isResponsiveSet && t.name === e)?.guid,
    cmsSlug: a
  };
}
export function $$c1() {
  let e = getInitialOptions().cluster_name;
  return "prod" === e ? "figma.site" : "staging" === e ? "pung.site" : "devenv01" === e ? "pung-sandbox.site" : "pung-devbox.site";
}
export const IU = $$l0;
export const nC = $$c1;
export const sF = $$d2;