import { useCallback } from "react";
import { useSelector } from "react-redux";
import { useOpenFileLibraryKey } from "../figma_app/516028";
import { generatePublishedComponentsCacheKey, isTrackedState } from "../figma_app/646357";
import { isLoaded } from "../905/18797";
import { useSubscribedLibraries } from "../figma_app/155728";
import { D } from "../905/367723";
import { SITE_KIT_EMBEDS_LIBRARY_KEY } from "../figma_app/10098";
import { useSiteKitAssets } from "../figma_app/177636";
export function $$p0() {
  let e = useSubscribedLibraries();
  let t = useSelector(e => e.loadingState);
  return !!D() && (!e.data || e.data.some(e => {
    let r = generatePublishedComponentsCacheKey(e.libraryKey);
    return !isLoaded(t, r);
  }));
}
export function $$_1() {
  let e = useSelector(e => e.loadingState);
  let t = useOpenFileLibraryKey();
  let r = useSiteKitAssets();
  let l = r.data?.assetsByLibraryKey;
  return useCallback(r => {
    if (!r || r === SITE_KIT_EMBEDS_LIBRARY_KEY || l?.has(r) || t === r) return !1;
    let n = generatePublishedComponentsCacheKey(r);
    return !isLoaded(e, n) && !isTrackedState("", r);
  }, [l, t, e]);
}
export const U = $$p0;
export const q = $$_1;