import { useMemo } from "react";
import { Xm, gB } from "../905/723791";
import { useLibraries } from "../905/420347";
import { useSubscribedLibraries } from "../figma_app/155728";
import { isPublishedLibraryWithAssets } from "../figma_app/633080";
export function $$l0() {
  let e = useSubscribedLibraries();
  let t = useMemo(() => "loaded" !== e.status ? [] : e.data.map(e => e.libraryKey), [e]);
  let i = useLibraries(t);
  let l = useMemo(() => "loaded" !== i.status ? [] : i.data.filter(isPublishedLibraryWithAssets), [i]);
  return "loaded" !== e.status ? e : "loaded" !== i.status ? Xm() : gB(l);
}
export const $ = $$l0;