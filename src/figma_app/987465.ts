import { useMemo } from "react";
import { isNotNullish } from "../figma_app/95419";
import { Rs } from "../figma_app/288654";
import { g } from "../905/370185";
import { sD } from "../905/937198";
import { tS } from "../figma_app/516028";
import { UQe } from "../figma_app/43951";
import { k } from "../905/366917";
import { J } from "../905/458135";
export function $$p0({
  collectionStableId: e
}) {
  let t = tS();
  let {
    collectionDatabaseId
  } = k({
    collectionStableId: e
  });
  let p = (collectionDatabaseId ?? "") !== "" && null != t;
  let _ = Rs(UQe, {
    fileKey: t ?? "",
    collectionId: collectionDatabaseId ?? ""
  }, {
    enabled: p
  });
  g(_);
  return useMemo(() => ("errors" === _.status && sD("ListItemsView returned an error", {
    collectionStableId: e,
    collectionDatabaseId,
    query: _
  }), {
    items: _.data?.oneFileCmsCollection?.collectionV2?.items?.map(J).filter(isNotNullish) ?? null,
    status: _.status
  }), [collectionDatabaseId, e, _]);
}
export const w = $$p0;