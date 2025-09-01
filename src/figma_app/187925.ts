import { um } from "../figma_app/27355";
import { Su } from "../figma_app/781115";
var $$a1 = (e => (e[e.NOT_LOADED = 0] = "NOT_LOADED", e[e.LOADED = 1] = "LOADED", e))($$a1 || {});
var s = (e => (e[e.LOAD_LIVEGRAPH = 0] = "LOAD_LIVEGRAPH", e[e.LOAD_VIEWER_INSTANCE = 1] = "LOAD_VIEWER_INSTANCE", e))(s || {});
export let $$o0 = um({
  status: 0,
  livegraphLoaded: !1,
  viewerInstanceLoaded: !1
}, (e, t) => {
  if (1 === e.status) return e;
  switch (t.type) {
    case 0:
      if (e.viewerInstanceLoaded) {
        Su.handleViewerLoaded("livegraph");
        return {
          status: 1,
          lastLoaded: "livegraph"
        };
      }
      if (e.livegraphLoaded) return e;
      return {
        ...e,
        livegraphLoaded: !0
      };
    case 1:
      if (e.livegraphLoaded) {
        Su.handleViewerLoaded("multiplayer");
        return {
          status: 1,
          lastLoaded: "multiplayer"
        };
      }
      if (e.viewerInstanceLoaded) return e;
      return {
        ...e,
        viewerInstanceLoaded: !0
      };
  }
});
export const Md = $$o0;
export const z2 = $$a1;