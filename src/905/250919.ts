import { logCmsError } from "../905/937198";
import { getOpenFileKey } from "../905/622391";
import { isNotNullish } from "../figma_app/95419";
import { subscribeAndAwaitData } from "../905/553831";
import { ListCollectionsView } from "../figma_app/43951";
import { toCollectionSummary } from "../905/148729";
async function d({
  fileKey: e
}) {
  if ("" === e) {
    logCmsError("fileKey is being passed as an empty string", {
      fileKey: e
    });
    return null;
  }
  let t = (await subscribeAndAwaitData(ListCollectionsView, {
    fileKey: e
  })).fileCmsCollections;
  return t?.map(e => e.collectionV2).map(toCollectionSummary).filter(isNotNullish);
}
export async function $$c0({
  collectionStableId: e
}) {
  if ("" === e) return null;
  let t = getOpenFileKey();
  if (null == t) {
    logCmsError("fileKey is null", {
      collectionStableId: e
    });
    return null;
  }
  let i = await d({
    fileKey: t
  });
  if (null == i) {
    logCmsError("collections is null", {
      fileKey: t
    });
    return null;
  }
  let a = i.find(t => t.stableId === e);
  return null == a ? (logCmsError("collection is null", {
    collections: i,
    collectionStableId: e
  }), null) : {
    collectionDatabaseId: a.databaseId
  };
}
export const H = $$c0;