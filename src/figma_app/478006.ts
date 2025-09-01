import { useEffect } from "react";
import { eU, Xr } from "../figma_app/27355";
let $$a0 = eU({
  isShowing: !1,
  isFigjamDLTBanner: !1
});
let $$s2 = eU(e => {
  let t = e($$a0);
  return t.isShowing && "view_only" === t.bannerType;
});
export function $$o1({
  isFigjamDLTBanner: e,
  bannerType: t
}) {
  let r = Xr($$a0);
  useEffect(() => (r({
    isShowing: !0,
    isFigjamDLTBanner: e,
    bannerType: t
  }), () => {
    r({
      isShowing: !1,
      isFigjamDLTBanner: !1,
      bannerType: void 0
    });
  }), [r, e, t]);
}
export const Gr = $$a0;
export const h8 = $$o1;
export const n2 = $$s2;