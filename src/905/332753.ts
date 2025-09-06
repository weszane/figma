import { jsx } from "react/jsx-runtime";
import { useCallback, useEffect } from "react";
import { AD } from "../905/871411";
import { getFeatureFlags } from "../905/601108";
import { createRemovableAtomFamily, atom, useAtomValueAndSetter } from "../figma_app/27355";
import { A } from "../vendor/90566";
import { qv, r2 } from "../figma_app/80990";
import { Fk } from "../figma_app/167249";
import { J } from "../905/273120";
let p = createRemovableAtomFamily(e => atom(null, (t, i, n) => {
  let r = t(p(e));
  i(p(e), n);
  r && qv(r.url);
}));
export function $$m0(e) {
  let t = e.pageId;
  let [i, m] = useAtomValueAndSetter(p(t));
  let h = Fk(e => e.get(t)?.thumbnailInfo);
  let g = getFeatureFlags().dse_library_pg_thumbnails && h?.nodeID !== AD;
  let f = useCallback(() => {
    requestAnimationFrame(() => {
      if (h) {
        let e = r2(h.nodeID);
        e && m({
          thumbnailId: h.nodeID,
          url: e,
          content_hash: h.thumbnailVersion
        });
      } else console.warn("Attempted page thumbnail url generation without a page thumbnail");
    });
  }, [h, m]);
  let _ = A(f, 2e3, {
    leading: !0,
    trailing: !0
  });
  useEffect(() => {
    getFeatureFlags().dse_library_pg_thumbnails && h && (i?.thumbnailId !== h?.nodeID || i?.content_hash !== h?.thumbnailVersion) && _();
  }, [_, h, i]);
  return g && i?.url ? jsx(J, {
    className: e.className,
    style: e.style,
    src: i?.url,
    draggable: !1,
    alt: e.alt,
    loading: "lazy"
  }) : e.fallback;
}
export const L = $$m0;