import { getFeatureFlags } from "../905/601108";
import { zl } from "../figma_app/27355";
import { D, d } from "../905/433403";
import { wm } from "../figma_app/601682";
import { K } from "../905/621769";
export function $$l0(e, t, i) {
  if (!function (e) {
    if (!getFeatureFlags().dt_mcp_unmapped_components_banner) return !1;
    let t = e.getState().openFile;
    if (!t) return !1;
    let i = e.getState().library.publishedByLibraryKey;
    let r = t.teamId;
    let a = t.libraryKey;
    let o = !!(r && a && Object.keys(i.components[r]?.[a] ?? []).length > 0);
    return !!wm(t, o);
  }(i)) return;
  let l = function (e, t) {
    let i = [];
    (function (e) {
      let t = [];
      (function e(i) {
        if ("SYMBOL" === i.type || "INSTANCE" === i.type) {
          t.push(i);
          return;
        }
        "childrenNodes" in i && Array.isArray(i.childrenNodes) && i.childrenNodes.forEach(t => {
          e(t);
        });
      })(e);
      return t;
    })(e).forEach(function (e) {
      let n = t.getState().mirror.sceneGraph;
      let {
        backingNodeId,
        backingLibraryKey
      } = K(e.guid, n, null);
      if (!backingNodeId) return;
      let s = e.name;
      let l = {
        nodeId: backingNodeId,
        nodeGuid: e.guid,
        name: s,
        libraryKey: backingLibraryKey || null
      };
      i.find(e => e.nodeId === backingNodeId) || i.push(l);
    });
    return i;
  }(e, i);
  try {
    let e = l.filter(e => !t.has(e.nodeGuid));
    zl.set(D, e);
    zl.set(d, e.length > 0);
  } catch (e) {
    console.error("Error storing unmapped components:", e);
  }
}
export const Q = $$l0;