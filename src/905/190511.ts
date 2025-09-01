import { useMemo } from "react";
import { Q2 } from "../905/937198";
import { G } from "../905/707993";
export function $$s0({
  fieldSchemaStableId: e,
  collectionStableId: t
}) {
  "" === e && Q2("itemStableId should not be an empty string", {
    fieldSchemaStableId: e
  }, {
    reportAsSentryError: !0
  });
  "" === t && Q2("collectionStableId should not be an empty string", {
    collectionStableId: t
  }, {
    reportAsSentryError: !0
  });
  let i = G({
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