import { useMemo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { debounce } from "../905/915765";
import { updateAllStyleThumbnailsOptimist } from "../905/711212";
import { compareLibraryItemsAlias } from "../905/709171";
import { useDropdownState } from "../905/848862";
import { vG } from "../905/213527";
export function $$c3(e, t) {
  let r = useDispatch();
  let o = useMemo(() => debounce(r, 200), [r]);
  useEffect(() => {
    t?.skip || o(updateAllStyleThumbnailsOptimist({
      styleType: e
    }));
  });
}
export function $$u1(e) {
  let t = useDispatch();
  let r = useMemo(() => debounce(t, 200), [t]);
  useEffect(() => {
    r(updateAllStyleThumbnailsOptimist({
      styleType: e
    }));
  }, [r, e]);
}
export function $$p0(e) {
  let t = useDropdownState();
  return useMemo(() => t && t.type === vG && t.data.style.style_type === e ? t : null, [t, e]);
}
export function $$_2(e) {
  let t = useSelector(e => e.stylePreviewShown);
  return useMemo(() => t.isShown && !t.isCreating && t.style.node_id === e.node_id && compareLibraryItemsAlias(t.style, e), [t, e]);
}
export const GC = $$p0;
export const VX = $$u1;
export const bf = $$_2;
export const hg = $$c3;