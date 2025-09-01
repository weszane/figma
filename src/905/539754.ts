import { isNotNullish } from "../figma_app/95419";
import { Ek } from "../905/553831";
import { sD } from "../905/937198";
import { UQe } from "../figma_app/43951";
import { YR } from "../905/622391";
import { H } from "../905/250919";
import { J as _$$J } from "../905/458135";
export async function $$c0(e) {
  let t = YR();
  if (null == t) {
    sD("fileKey is null", {
      args: e
    });
    return null;
  }
  let i = await u(e);
  if (null == i) {
    sD("collectionDatabaseId is null", {
      args: e
    });
    return null;
  }
  let l = await Ek(UQe, {
    fileKey: t,
    collectionId: i
  });
  let c = l.oneFileCmsCollection?.collectionV2?.items;
  return c?.map(_$$J).filter(isNotNullish);
}
async function u(e) {
  return "collectionDatabaseId" in e ? e.collectionDatabaseId : (await H({
    collectionStableId: e.collectionStableId
  }))?.collectionDatabaseId ?? null;
}
export const J = $$c0;