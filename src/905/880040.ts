import { useMemo } from "react";
import { isNotNullish } from "../figma_app/95419";
import { useSubscription } from "../figma_app/288654";
import { g } from "../905/370185";
import { Q2, sD } from "../905/937198";
import { ListCollectionsView } from "../figma_app/43951";
import { b } from "../905/148729";
export function $$c0({
  fileKey: e
}) {
  "" === e && Q2("fileKey is being passed as an empty string", {
    fileKey: e
  }, {
    reportAsSentryError: !0
  });
  let t = (e ?? "") !== "";
  let i = useSubscription(ListCollectionsView, {
    fileKey: e ?? ""
  }, {
    enabled: t
  });
  g(i);
  return useMemo(() => "errors" === i.status ? (sD("ListCollectionsView returned an error", {
    fileKey: e,
    query: JSON.stringify(i)
  }), {
    collections: null,
    status: i.status
  }) : {
    collections: i.data?.fileCmsCollections?.map(e => e.collectionV2)?.map(b)?.filter(isNotNullish) ?? null,
    status: i.status
  }, [e, i]);
}
export const X = $$c0;