import { Dg } from "../905/946258";
import { getFeatureFlags } from "../905/601108";
import { WB } from "../905/761735";
import { maybeCreateSavepoint } from "../905/294113";
import { z } from "../905/931953";
export async function $$l0(e, {
  fileKey: t,
  publishedByUserId: i,
  responsiveSetGuids: n
}) {
  let r = c(e, t, n);
  WB().optimisticallyCreate({
    SiteBundle: {
      [`optimistic-id-${t}`]: {
        fileKey: t,
        canRead: !0,
        canReadV2: !0,
        completedAt: null,
        createdAt: new Date(),
        publishedByUserId: i,
        publishedByUser: null,
        status: "pending",
        updatedAt: new Date(),
        fileVersionId: null,
        responsiveSetGuids: n
      }
    }
  }, r);
  let {
    site_bundle_id
  } = (await r).data.meta;
  return site_bundle_id;
}
async function d(e, t) {
  let i = null;
  try {
    i = await maybeCreateSavepoint(t, void 0, void 0, e, !0);
  } catch (e) {
    throw Error(`error creating savepoint: ${e}`);
  }
  if (!i) throw Error("error creating savepoint: savepoint is nullish");
  return i;
}
async function c(e, t, i) {
  let a;
  let s = await d(e, t);
  let l = Dg({
    shouldUse250317Index: !!getFeatureFlags().font_index_250317
  });
  try {
    a = await z.postSitesBundleAsync({
      fileKey: t,
      responsiveSetGuids: i,
      fontIndexHash: l,
      fileVersionId: s.id
    });
  } catch (e) {
    throw Error(`error posting sites bundle: ${e}`);
  }
  return a;
}
export const b = $$l0;