import { useMemo } from "react";
import { useSubscription } from "../figma_app/288654";
import { g } from "../905/370185";
import { Q2, sD } from "../905/937198";
import { useCurrentFileKey } from "../figma_app/516028";
import { OneItemView } from "../figma_app/43951";
import { k } from "../905/366917";
import { J } from "../905/458135";
export function $$u0({
  itemStableId: e,
  collectionStableId: t
}) {
  let i = useCurrentFileKey();
  "" === e && Q2("itemStableId is being passed as an empty string", {
    itemStableId: e
  }, {
    reportAsSentryError: !0
  });
  let {
    collectionDatabaseId
  } = k({
    collectionStableId: t
  });
  let p = (e ?? "") !== "" && (t ?? "") !== "" && (collectionDatabaseId ?? "") !== "" && null != i;
  let m = useSubscription(OneItemView, {
    fileKey: i ?? "",
    collectionId: collectionDatabaseId ?? "",
    itemStableId: e ?? ""
  }, {
    enabled: p
  });
  g(m);
  return useMemo(() => {
    "errors" === m.status && sD("OneItemView returned an error", {
      itemStableId: e,
      collectionStableId: t,
      collectionDatabaseId,
      query: m
    });
    let i = m.data?.oneFileCmsCollection?.collectionV2;
    let n = i?.oneItem;
    return {
      item: J(n),
      status: m.status
    };
  }, [collectionDatabaseId, t, e, m]);
}
export const H = $$u0;