import { useMemo, useEffect } from "react";
import { sha1Hex } from "../905/125019";
import { eV } from "../905/889062";
import { cleanupMediaObjectUrls } from "../figma_app/599979";
import { $T } from "../figma_app/12535";
import { selectCurrentFile } from "../figma_app/516028";
import { selectUser } from "../905/372672";
export function $$c0(e) {
  let t = selectUser();
  let i = selectCurrentFile();
  let c = useMemo(async () => {
    if (!e) return null;
    if (i && i.key === e.key) {
      let e = $T(i);
      if (e) return {
        thumbnailMedium: {
          ...e,
          type: "image",
          sha1: sha1Hex(e.buffer)
        },
        isSetByUser: !!i.thumbnailGuid
      };
    }
    return await eV(e, t);
  }, [e, t, i]);
  useEffect(() => function () {
    (async () => {
      let e = (await c)?.thumbnailMedium;
      e && cleanupMediaObjectUrls(e);
    })();
  }, [c]);
  return c;
}
export const h = $$c0;