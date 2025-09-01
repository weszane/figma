import { useMemo, useEffect } from "react";
import { Et } from "../905/125019";
import { eV } from "../905/889062";
import { nK } from "../figma_app/599979";
import { $T } from "../figma_app/12535";
import { q5 } from "../figma_app/516028";
import { Pc } from "../905/372672";
export function $$c0(e) {
  let t = Pc();
  let i = q5();
  let c = useMemo(async () => {
    if (!e) return null;
    if (i && i.key === e.key) {
      let e = $T(i);
      if (e) return {
        thumbnailMedium: {
          ...e,
          type: "image",
          sha1: Et(e.buffer)
        },
        isSetByUser: !!i.thumbnailGuid
      };
    }
    return await eV(e, t);
  }, [e, t, i]);
  useEffect(() => function () {
    (async () => {
      let e = (await c)?.thumbnailMedium;
      e && nK(e);
    })();
  }, [c]);
  return c;
}
export const h = $$c0;