import { useMemo } from "react";
import { sortByPropertyWithOptions } from "../figma_app/656233";
import { isNotNullish } from "../figma_app/95419";
import s from "../vendor/260986";
import { gB } from "../905/723791";
import { n1 } from "../figma_app/657017";
import { matchesLibraryKey } from "../905/760074";
import { m1, Qh, fi } from "../figma_app/155728";
var o = s;
export function $$p0() {
  let e = function (e) {
    let t = n1();
    return useMemo(() => {
      if ("loading" === e.status || "errors" === e.status || "disabled" === e.status) return e;
      let i = e.data.file;
      if (null == i) return gB([]);
      let n = i.libraryFileSubscriptions.filter(e => t || !e.communityLibrary).map(e => m1(e, Qh.FILE));
      let s = o()(n.filter(isNotNullish), e => e.libraryKey).filter(e => !matchesLibraryKey(i, e.libraryKey));
      sortByPropertyWithOptions(s, "name");
      return gB(s);
    }, [e, t]);
  }(fi());
  return useMemo(() => new Set(e.data?.map(e => e.libraryKey) ?? []), [e]);
}
export const T = $$p0;