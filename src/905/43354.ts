import { useMemo } from "react";
import { Xm, gB } from "../905/723791";
import { bj } from "../905/420347";
import { je } from "../figma_app/155728";
import { isPublishedLibraryWithAssets } from "../figma_app/633080";
export function $$l0() {
  let e = je();
  let t = useMemo(() => "loaded" !== e.status ? [] : e.data.map(e => e.libraryKey), [e]);
  let i = bj(t);
  let l = useMemo(() => "loaded" !== i.status ? [] : i.data.filter(isPublishedLibraryWithAssets), [i]);
  return "loaded" !== e.status ? e : "loaded" !== i.status ? Xm() : gB(l);
}
export const $ = $$l0;