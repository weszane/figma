import { eU, zl } from "../figma_app/27355";
import { F } from "../905/422355";
import { X } from "../905/457745";
import { r as _$$r } from "../905/656735";
let o = eU({});
let l = e => {
  let t = JSON.stringify({
    library_keys: [...e.library_keys].sort(),
    asset_type: e.entity_type,
    max_results_per_library: e.max_results_per_library,
    entity_value_type: e.entity_value_type
  });
  return F(t);
};
export async function $$d0(e) {
  if (0 === e.library_keys.length) return new Map();
  let t = l(e);
  let r = Date.now();
  let i = zl.get(o);
  let d = i[t];
  if (d && r - d.timestamp < 432e5) return d.data;
  try {
    let l = await _$$r.topKAssets(e);
    let d = X.parse(l.data.meta);
    let c = new Map();
    for (let [e, {
      keys: t
    }] of Object.entries(d.entity_keys_per_library)) c.set(e, t);
    zl.set(o, {
      ...i,
      [t]: {
        data: c,
        timestamp: r
      }
    });
    return c;
  } catch (e) {
    console.error("Failed to fetch top k assets", e);
    return new Map();
  }
}
export const kA = $$d0;