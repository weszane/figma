import { oA } from "../905/723791";
import { IT } from "../figma_app/566371";
import { DuV, lPt } from "../figma_app/43951";
export function $$s0(e) {
  let [t] = IT(DuV.Query(e ? {
    fileKey: e
  } : null));
  let [r] = IT(lPt.Query(e ? {
    fileKey: e
  } : null));
  if ("loaded" !== t.status || "loaded" !== r.status) return {
    isLoading: !0
  };
  let s = oA(t.data?.siteBundles);
  let o = oA(r.data?.siteMount);
  let l = s?.find(e => "succeeded" === e.status) || null;
  let d = s?.find(e => null == e.completedAt) || null;
  let c = !o || "published" !== o.status;
  let u = o?.publishEvents ?? [];
  return {
    isLoading: !1,
    isPublishing: null !== d,
    lastPublishedAt: function (e, t) {
      if (!e || "published" !== e.status) return null;
      let r = e?.publishEvents ?? [];
      if (r.length > 0) {
        let e = r.find(e => ["publish_new_bundle", "publish_preexisting_bundle"].includes(e.action));
        if (e) return e.createdAt;
      }
      return t ? t.completedAt : null;
    }(o || null, l),
    publishedBy: function (e, t) {
      if (!e || "published" !== e.status) return null;
      let r = e?.publishEvents ?? [];
      if (r.length > 0) {
        let e = r.find(e => ["publish_new_bundle", "publish_preexisting_bundle"].includes(e.action));
        if (e) return e.actor;
      }
      return t?.publishedByUser || null;
    }(o || null, l),
    lastAttemptedPublish: function (e, t) {
      let r = null;
      t.length > 0 && (r = t.find(e => ["publish_new_bundle", "publish_preexisting_bundle"].includes(e.action)));
      let n = e?.find(e => null != e.completedAt) || null;
      return r ? n && n.completedAt ? r.createdAt >= n.completedAt ? r.siteBundle : r.createdAt < n.completedAt ? n : null : r.siteBundle : n;
    }(s || [], u),
    lastSuccessfulPublishedResponsiveSetGuids: function (e, t, r) {
      if (e) return null;
      if (t.length > 0) {
        let e = t.find(e => ["publish_new_bundle", "publish_preexisting_bundle"].includes(e.action));
        if (e) return e.siteBundle?.responsiveSetGuids ?? null;
      }
      return r?.responsiveSetGuids ?? null;
    }(c, u, l),
    isNotPublished: c,
    hasPublishEvents: u.length > 0
  };
}
export const JW = $$s0;