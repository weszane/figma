import { n as _$$n } from "../905/347702";
import { XJn } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import { tS } from "../figma_app/516028";
import { M4, IT } from "../905/713695";
import { Gh } from "../figma_app/707567";
export function $$l2(e) {
  let t = XJn.getLocalDesignSystemKits();
  let i = [];
  for (let n of t) i.push({
    fileKey: e,
    name: n.name,
    dsKitKey: {
      pageId: n.pageId,
      type: "LOCAL"
    },
    metadata: {
      has_theme: !1,
      needs_border: !1,
      direct_generation: !0
    },
    numComponents: n.numComponents
  });
  return i;
}
let d = _$$n(async function () {
  let e = (await Gh.getFirstDraftAllKits()).data.meta.kits.map(e => ({
    name: e.name,
    dsKitKey: {
      type: e.metadata.direct_generation ? "USER_LIBRARY" : "1P_LIBRARY",
      key: e.key
    },
    metadata: e.metadata,
    thumbnailUrl: e.thumbnail_url,
    numComponents: e.num_components
  }));
  e.sort((e, t) => e.name.localeCompare(t.name));
  return e;
});
let c = M4.Query({
  fetch: d
});
async function u() {
  if (!getFeatureFlags().first_draft_publish_ux) return {
    isPublished: !1,
    isDirectGeneration: !1
  };
  {
    let e = await Gh.getFirstDraftKitStatus();
    return {
      isPublished: e.data.meta.is_published,
      isDirectGeneration: e.data.meta.is_direct_generation
    };
  }
}
let p = M4.Query({
  fetch: u
});
export function $$m0() {
  let e = tS();
  let [t] = IT(c(null));
  let i = [];
  if ("loaded" === t.status) for (let n of t.data) n.fileKey !== e && i.push(n);
  let n = e && getFeatureFlags().first_draft_local_kits ? $$l2(e) : [];
  return {
    libraryKitsQueryStatus: t.status,
    localKits: n,
    libraryKits: i
  };
}
export function $$h1() {
  let e = !1;
  let t = !1;
  let [i] = IT(p(null));
  "loaded" === i.status && (e = i.data.isPublished, t = i.data.isDirectGeneration);
  return {
    currentFileIsFirstDraftKit: e,
    currentFileIsDirectGenKit: t
  };
}
export const Ml = $$m0;
export const bj = $$h1;
export const rZ = $$l2;