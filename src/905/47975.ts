import { useMemo } from "react";
import { useSubscription } from "../figma_app/288654";
import { tT } from "../905/723791";
import { g } from "../905/370185";
import { Q2, sD } from "../905/937198";
import { HasCollectionsView } from "../figma_app/43951";
export function $$d0({
  fileKey: e
}) {
  "" === e && Q2("fileKey is being passed as an empty string", {
    fileKey: e
  }, {
    reportAsSentryError: !0
  });
  let t = (e ?? "") !== "";
  let i = useSubscription(HasCollectionsView, {
    fileKey: e ?? ""
  }, {
    enabled: t
  });
  g(i);
  return useMemo(() => "errors" === i.status ? (sD("FileCmsCollectionView returned an error", {
    fileKey: e,
    query: JSON.stringify(i)
  }), {
    hasCollection: null,
    status: i.status
  }) : i.data?.fileV2?.status !== tT.Loaded ? {
    hasCollection: (i.data?.fileCmsCollections?.length ?? 0) > 0,
    status: i.status
  } : {
    hasCollection: i.data?.fileV2?.data?.fileHasCmsCollections,
    status: i.status
  }, [e, i]);
}
export const $ = $$d0;