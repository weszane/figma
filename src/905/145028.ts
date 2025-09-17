import { subscribeAndAwaitData } from "../905/553831";
import { logCmsError } from "../905/937198";
import { OneCollectionView } from "../figma_app/43951";
import { getOpenFileKey } from "../905/622391";
import { H } from "../905/250919";
import { toCollectionSchema } from "../905/148729";
export async function $$d0(e) {
  let t = getOpenFileKey();
  if (null == t) {
    logCmsError("fileKey is null", {
      args: e
    });
    return null;
  }
  let i = await c(e);
  if (null == i) {
    logCmsError("collectionDatabaseId is null", {
      args: e
    });
    return null;
  }
  let o = await subscribeAndAwaitData(OneCollectionView, {
    fileKey: t,
    collectionId: i
  });
  let d = o.oneFileCmsCollection?.collectionV2;
  if (null == d) {
    logCmsError("lgCollection is null", {
      args: e
    });
    return null;
  }
  let u = toCollectionSchema(d);
  return u;
}
async function c(e) {
  return "collectionDatabaseId" in e ? e.collectionDatabaseId : (await H({
    collectionStableId: e.collectionStableId
  }))?.collectionDatabaseId ?? null;
}
export const X = $$d0;