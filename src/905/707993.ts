import { useMemo } from "react";
import { Rs } from "../figma_app/288654";
import { g } from "../905/370185";
import { sD } from "../905/937198";
import { tS } from "../figma_app/516028";
import { YsX } from "../figma_app/43951";
import { k } from "../905/366917";
import { D } from "../905/148729";
export function $$u0({
  collectionStableId: e
}) {
  let t = tS();
  let {
    collectionDatabaseId
  } = k({
    collectionStableId: e
  });
  let u = (collectionDatabaseId ?? "") !== "" && null != t;
  let p = Rs(YsX, {
    fileKey: t ?? "",
    collectionId: collectionDatabaseId ?? ""
  }, {
    enabled: u
  });
  g(p);
  return useMemo(() => ("errors" === p.status && sD("OneCollectionView returned an error", {
    collectionStableId: e,
    collectionDatabaseId,
    query: p
  }), {
    collection: D(p.data?.oneFileCmsCollection?.collectionV2),
    status: p.status
  }), [collectionDatabaseId, e, p]);
}
export const G = $$u0;