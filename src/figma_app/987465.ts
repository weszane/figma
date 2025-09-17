import { useMemo } from "react";
import { isNotNullish } from "../figma_app/95419";
import { useSubscription } from "../figma_app/288654";
import { VisualBellConnectionErrorHandler } from "../905/370185";
import { logCmsError } from "../905/937198";
import { useCurrentFileKey } from "../figma_app/516028";
import { ListItemsView } from "../figma_app/43951";
import { useCollectionDatabaseIdFromStableId } from "../905/366917";
import { J } from "../905/458135";
export function $$p0({
  collectionStableId: e
}) {
  let t = useCurrentFileKey();
  let {
    collectionDatabaseId
  } = useCollectionDatabaseIdFromStableId({
    collectionStableId: e
  });
  let p = (collectionDatabaseId ?? "") !== "" && null != t;
  let _ = useSubscription(ListItemsView, {
    fileKey: t ?? "",
    collectionId: collectionDatabaseId ?? ""
  }, {
    enabled: p
  });
  VisualBellConnectionErrorHandler(_);
  return useMemo(() => ("errors" === _.status && logCmsError("ListItemsView returned an error", {
    collectionStableId: e,
    collectionDatabaseId,
    query: _
  }), {
    items: _.data?.oneFileCmsCollection?.collectionV2?.items?.map(J).filter(isNotNullish) ?? null,
    status: _.status
  }), [collectionDatabaseId, e, _]);
}
export const w = $$p0;