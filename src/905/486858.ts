import { useMemo } from "react";
import { sortByPropertyWithOptions } from "../figma_app/656233";
import { isNotNullish } from "../figma_app/95419";
import s from "../vendor/260986";
import { createLoadedState } from "../905/723791";
import { useFigmaLibrariesEnabled } from "../figma_app/657017";
import { matchesLibraryKey } from "../905/760074";
import { mapLibrarySubscription, LibrarySubscriptionType, useUntransformedSubscribedLibraries } from "../figma_app/155728";
var o = s;
export function $$p0() {
  let e = function (e) {
    let t = useFigmaLibrariesEnabled();
    return useMemo(() => {
      if ("loading" === e.status || "errors" === e.status || "disabled" === e.status) return e;
      let i = e.data.file;
      if (null == i) return createLoadedState([]);
      let n = i.libraryFileSubscriptions.filter(e => t || !e.communityLibrary).map(e => mapLibrarySubscription(e, LibrarySubscriptionType.FILE));
      let s = o()(n.filter(isNotNullish), e => e.libraryKey).filter(e => !matchesLibraryKey(i, e.libraryKey));
      sortByPropertyWithOptions(s, "name");
      return createLoadedState(s);
    }, [e, t]);
  }(useUntransformedSubscribedLibraries());
  return useMemo(() => new Set(e.data?.map(e => e.libraryKey) ?? []), [e]);
}
export const T = $$p0;