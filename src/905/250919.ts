import { sD } from "../905/937198";
import { YR } from "../905/622391";
import { isNotNullish } from "../figma_app/95419";
import { subscribeAndAwaitData } from "../905/553831";
import { Lst } from "../figma_app/43951";
import { b } from "../905/148729";
async function d({
  fileKey: e
}) {
  if ("" === e) {
    sD("fileKey is being passed as an empty string", {
      fileKey: e
    });
    return null;
  }
  let t = (await subscribeAndAwaitData(Lst, {
    fileKey: e
  })).fileCmsCollections;
  return t?.map(e => e.collectionV2).map(b).filter(isNotNullish);
}
export async function $$c0({
  collectionStableId: e
}) {
  if ("" === e) return null;
  let t = YR();
  if (null == t) {
    sD("fileKey is null", {
      collectionStableId: e
    });
    return null;
  }
  let i = await d({
    fileKey: t
  });
  if (null == i) {
    sD("collections is null", {
      fileKey: t
    });
    return null;
  }
  let a = i.find(t => t.stableId === e);
  return null == a ? (sD("collection is null", {
    collections: i,
    collectionStableId: e
  }), null) : {
    collectionDatabaseId: a.databaseId
  };
}
export const H = $$c0;