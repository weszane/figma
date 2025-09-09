import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useSubscription } from "../figma_app/288654";
import { selectOpenFile } from "../figma_app/516028";
import { FileByKey } from "../figma_app/43951";
export function $$l0() {
  let e = useSelector(selectOpenFile);
  let t = useSubscription(FileByKey, {
    fileKey: e?.key ?? ""
  }, {
    enabled: !!e?.key
  });
  let r = t.data?.file;
  let l = r?.thumbnailUrlOverride || r?.thumbnailUrl;
  let d = !!r?.thumbnailGuid;
  let [c, u] = useState({
    url: void 0,
    shouldCover: !1
  });
  let [p, _] = useState(void 0);
  useEffect(() => {
    let e = !!p;
    let t = c.url === l;
    if (!e && !t) {
      if (c.url) {
        let e = setTimeout(() => {
          u({
            url: l,
            shouldCover: d
          });
          _(void 0);
        }, 5e3);
        _(e);
      } else u({
        url: l,
        shouldCover: d
      });
    }
  }, [c.url, p, l, d]);
  useEffect(() => {
    if (p) return () => clearTimeout(p);
  }, [p]);
  return c;
}
export const t = $$l0;