import { useEffect, useMemo } from "react";
import { generateUUIDv4 } from "../905/871474";
import { sD, FU } from "../905/937198";
import { useCurrentFileKey } from "../figma_app/516028";
import { X } from "../905/880040";
let l = new Map();
let d = {
  collectionDatabaseId: null,
  status: "disabled"
};
let c = {
  collectionDatabaseId: null,
  status: "loading"
};
let u = {
  collectionDatabaseId: null,
  status: "errors"
};
export function $$p0({
  collectionStableId: e
}) {
  let t = useCurrentFileKey();
  let {
    collections,
    status
  } = X({
    fileKey: t
  });
  useEffect(() => {
    t !== generateUUIDv4() && l.clear();
  }, [t]);
  return useMemo(() => {
    if (null == e) return d;
    let n = l.get(e);
    if (null != n) return {
      collectionDatabaseId: n,
      status: "loaded"
    };
    if ("" === e || "disabled" === status) return d;
    if ("loading" === status) return c;
    if ("errors" === status) return u;
    if (null == collections) {
      sD("[useCollectionDatabaseIdFromCollectionStableId] collections is null", {
        collectionStableId: e,
        fileKey: t
      });
      return u;
    }
    let r = collections?.find(t => t.stableId === e)?.databaseId ?? null;
    null == r ? FU("Collection not found", {
      collectionStableId: e,
      fileKey: t
    }) : l.set(e, r);
    return {
      collectionDatabaseId: r,
      status: "loaded"
    };
  }, [e, collections, t, status]);
}
export const k = $$p0;