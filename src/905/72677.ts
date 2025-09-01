import { isNotNullish } from "../figma_app/95419";
import { l as _$$l } from "../905/716947";
import { eU } from "../figma_app/27355";
import { oA } from "../905/663269";
import { getInitialOptions } from "../figma_app/169182";
import { M } from "../figma_app/155411";
import { fy7 } from "../figma_app/43951";
let c = eU(getInitialOptions().preset_library_keys ?? []);
let u = eU(getInitialOptions().preset_library_keys_v2?.map(_$$l) ?? []);
let p = eU(e => {
  let t = e(fy7.Query({
    group: M()
  }));
  return t?.status === "loaded" ? t.data?.libraryPresetSubscriptionsV2?.map(e => e.hubFileId) ?? null : null;
});
let m = eU(e => {
  let t = e(fy7.Query({
    group: M()
  }));
  if (t?.status !== "loaded") return null;
  let i = t.data?.libraryPresetSubscriptionsV2?.map(e => {
    let t = oA(e.libraryKey);
    return null == t ? null : _$$l(t);
  }) ?? null;
  return i?.filter(isNotNullish) ?? null;
});
let $$h2 = eU(e => new Set([...(e(p) ?? []), ...e(c)].map(_$$l)));
let $$g0 = eU(e => new Set([...(e(m) ?? []), ...e(u)]));
let $$f1 = eU(e => {
  let t = e(fy7.Query({
    group: M()
  }));
  if (t?.status !== "loaded") return {};
  let i = {};
  for (let e of t.data.libraryPresetSubscriptionsV2 ?? []) {
    let t = oA(e.libraryKey);
    null != t && (i[_$$l(t)] = e);
  }
  return i;
});
export const TG = $$g0;
export const V9 = $$f1;
export const qq = $$h2;