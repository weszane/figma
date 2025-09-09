import { useState, useEffect } from "react";
import { ServiceCategories as _$$e } from "../905/165054";
import { reportError } from "../905/11";
import { D } from "../905/417423";
import { useCurrentFileKey } from "../figma_app/516028";
export function $$l0() {
  let [e, t] = useState(null);
  let i = useCurrentFileKey();
  useEffect(() => {
    let n = async () => {
      if (i) try {
        let e = (await D.getRecommendedHubFileFragments({
          file_key: i
        })).data.meta.results.map(e => ({
          ...e,
          type: "hub-file-fragment"
        }));
        t(e);
      } catch (e) {
        t([]);
        reportError(_$$e.AI_FOR_PRODUCTION, Error("Recommended hub file fragments error: " + e.message));
      }
    };
    null === e && n();
  }, [i, e]);
  return {
    recommendedHubFileFragments: e
  };
}
export const v = $$l0;