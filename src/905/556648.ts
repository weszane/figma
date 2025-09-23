import { ServiceCategories } from "../905/165054";
import { FontSourceType, Fonts } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import { buildStaticUrl } from "../figma_app/169182";
import { reportError } from "../905/11";
let n;
let r;
let $$c0 = buildStaticUrl("font");
let u = buildStaticUrl("woff");
let p = getFeatureFlags().woff_subset_v2 ? "v2" : "v1";
async function m() {
  try {
    if (n && r && Date.now() - r < 864e5) return n;
    let e = `${u}/${p}/subset-index.json`;
    let t = await fetch(e);
    n = await t.json();
    r = Date.now();
    return n;
  } catch (e) {
    n = void 0;
    r = void 0;
    return;
  }
}
export async function $$h1(e) {
  let t = await m();
  Object.entries(e.fonts).forEach(([i, n]) => {
    if (n.source === FontSourceType.GOOGLE) !function (e, t) {
      let i = `${u}/${p}/${e.id}/`;
      if (e.url = `${i}${e.id}.woff2`, t) {
        let n = t[e.id];
        n && (e.subsets = {
          baseUrl: i,
          subsetMappings: getFeatureFlags().woff_subset_v2 ? n.filter(e => "*" !== e.unicodeRange) : n
        });
      }
    }(n, t);else {
      let t = i.split(":")[0];
      let r = i.split(":")[1];
      if (!t || !r) {
        reportError(ServiceCategories.SITES_WEB_RUNTIME, Error(`Invalid font name format: ${i}. Expected format is "family:style".`));
        return;
      }
      !function (e, t, i, n) {
        if (!Fonts) throw Error("Fonts module is not available. Ensure you are in an environment that supports it");
        if (getFeatureFlags().sites_web_fonts) {
          let r = Fonts.fetchFontData(t, i);
          if (!r) {
            reportError(ServiceCategories.SITES_WEB_RUNTIME, Error(`Failed to fetch font data for ${t}:${i}`));
            return;
          }
          let o = n.source === FontSourceType.LOCAL ? `${t}:${i}` : n.id;
          n.id = o;
          e.files[n.id] = new Blob([r]);
          n.url = n.id;
        }
      }(e, t, r, n);
    }
  });
}
export const FF = $$c0;
export const Yf = $$h1;
