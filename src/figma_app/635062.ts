import { useMemo, useEffect } from "react";
import { wA, d4 } from "../vendor/514228";
import { debounce } from "../905/915765";
import { GT } from "../905/711212";
import { EF } from "../905/709171";
import { Um } from "../905/848862";
import { vG } from "../905/213527";
export function $$c3(e, t) {
  let r = wA();
  let o = useMemo(() => debounce(r, 200), [r]);
  useEffect(() => {
    t?.skip || o(GT({
      styleType: e
    }));
  });
}
export function $$u1(e) {
  let t = wA();
  let r = useMemo(() => debounce(t, 200), [t]);
  useEffect(() => {
    r(GT({
      styleType: e
    }));
  }, [r, e]);
}
export function $$p0(e) {
  let t = Um();
  return useMemo(() => t && t.type === vG && t.data.style.style_type === e ? t : null, [t, e]);
}
export function $$_2(e) {
  let t = d4((e) => e.stylePreviewShown);
  return useMemo(() => t.isShown && !t.isCreating && t.style.node_id === e.node_id && EF(t.style, e), [t, e]);
}
export const GC = $$p0;
export const VX = $$u1;
export const bf = $$_2;
export const hg = $$c3;