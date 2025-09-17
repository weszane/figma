import { useMemo } from "react";
import { logCmsWarning } from "../905/937198";
import { getCollectionView } from "../905/707993";
export function $$s0({
  fieldSchemaStableId: e,
  collectionStableId: t
}) {
  "" === e && logCmsWarning("itemStableId should not be an empty string", {
    fieldSchemaStableId: e
  }, {
    reportAsSentryError: !0
  });
  "" === t && logCmsWarning("collectionStableId should not be an empty string", {
    collectionStableId: t
  }, {
    reportAsSentryError: !0
  });
  let i = getCollectionView({
    collectionStableId: t
  });
  return useMemo(() => {
    let t = i.collection?.fieldSchemas.find(t => t.stableId === e) ?? null;
    return {
      status: i.status,
      fieldSchema: t
    };
  }, [e, i.collection?.fieldSchemas, i.status]);
}
export const X = $$s0;