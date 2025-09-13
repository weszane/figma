import { useEffect, useMemo, useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import a from "../vendor/128080";
import { trackEventAnalytics } from "../905/449184";
import { gB } from "../905/723791";
import { $E, y1 } from "../905/445814";
import { V3 } from "../figma_app/976345";
import { le } from "../figma_app/11182";
import { ZN } from "../figma_app/78808";
import { y as _$$y } from "../figma_app/705249";
import { o8, CR } from "../figma_app/12220";
import { N } from "../figma_app/261650";
import { eY } from "../figma_app/722362";
import { buildFileUrl } from "../905/612685";
import { FMemberRoleType, FUserTypeClassification } from "../figma_app/191312";
import { M4 } from "../905/713695";
import { useCurrentPlanUser } from "../figma_app/465071";
import { lD } from "../figma_app/831696";
import { ThreadType } from "../905/380385";
import { cM } from "../905/530837";
import { iw } from "../905/222884";
import { i as _$$i } from "../905/561236";
var s = a;
var $$w3 = (e => (e.TILE = "tile", e.DETAIL_MODAL = "detail", e))($$w3 || {});
function C(e, t, i) {
  return e === i && t !== FMemberRoleType.GUEST;
}
export function $$T1(e, t) {
  let i = `${location.origin}/files/${e}/feed-posts`;
  t?.uuid && (i += `/${t.uuid}`);
  return i;
}
export function $$k2({
  fileVersionId: e,
  fileKey: t,
  startingNodeId: i
}, n) {
  let r = lD({
    startingPointNodeId: i,
    versionId: e
  });
  r["redirect-src"] = "feed";
  Object.assign(r, n);
  let a = Object.entries(r).map(([e, t]) => `${e}=${t}`).join("&");
  return `${location.origin}/proto/${t}?${a}`;
}
export function $$R6(e, t, i) {
  let a = useDispatch();
  let s = t.find(e => e.type === cM.NODE || e.type === cM.PROTOTYPE);
  let l = (s ? s.fileKey : void 0) || i;
  useEffect(() => {
    a(ZN({
      file_key: l ?? void 0
    }));
  }, [a, l]);
  let u = M4.useFile(l).data;
  let m = $E();
  let h = useMemo(() => u && s && s.type === cM.PROTOTYPE ? y1.PROTOTYPE : u ? m(u) : void 0, [u, s, m]);
  let g = u && void 0 !== h;
  return {
    fileData: u,
    fileIcon: h,
    fileLoaded: g,
    openFile: useCallback(() => {
      if (trackEventAnalytics("Team Feed File Clicked", {
        postUuid: e
      }), s) {
        if (s.type === cM.NODE) {
          let t = buildFileUrl({
            file: {
              key: s.fileKey
            },
            commentId: iw(e)
          });
          a(V3({
            url: t
          }));
        } else s.type === cM.PROTOTYPE && a(V3({
          url: $$k2(s)
        }));
      }
      if (l) {
        let e = buildFileUrl({
          file: {
            key: l
          }
        });
        a(V3({
          url: e
        }));
      }
    }, [a, s, e, l])
  };
}
export var $$N4 = (e => (e.TILE = "tile", e.DETAIL = "detail", e))($$N4 || {});
export function $$P0(e, t) {
  let i = useDispatch();
  return useCallback(() => {
    trackEventAnalytics("Team Feed Copy Link Clicked", {
      postUuid: e,
      source: t
    });
    i(le({
      view: "teamFeed",
      postUuid: e
    }));
  }, [i, e, t]);
}
export function $$O5(e, t, i, r) {
  let [a, d] = useState({});
  let [c, u] = useState({});
  let p = eY();
  let _ = useCurrentPlanUser("useFeedPostInfo").unwrapOr(null);
  let y = _?.key.type === FUserTypeClassification.ORG_USER ? _.planKey.parentId ?? void 0 : void 0;
  let v = _?.key.type === FUserTypeClassification.ORG_USER ? _.permission : void 0;
  useEffect(() => {
    if (e.errors && e.errors.length) {
      let t = JSON.stringify(e.errors.map(e => ({
        code: e.code,
        path: e.path,
        message: e.error?.message || ""
      })));
      console.error(`Failed to load feed posts: ${t}`);
      trackEventAnalytics("Livegraph Feed Post Comments Errors", {
        errors: t
      });
    }
  }, [e.errors]);
  useMemo(() => {
    if (_$$y() && "loaded" === e.status && e.data.file && p?.get) {
      let t = e.data.file.feedPosts;
      let n = t.filter(e => !!e.org && !!v && C(y, v, e.org.id));
      let o = N(n);
      let l = i(o);
      Object.entries(l).every(([e, t]) => null === a[e] && null === t || !!a[e] && !!t && a[e] === t) || d(l);
      let m = r(o, p?.get.bind(p), t);
      Object.entries(m).every(([e, t]) => {
        let i = c[e];
        return !!i && s()(i, t);
      }) || u(m);
    }
  }, [e, p, i, r, v, y, a, c]);
  return useMemo(() => y ? function (e, t, i, n, r, a) {
    if ("loaded" !== e.status) return e;
    if (!e.data.file) return gB([]);
    let s = {};
    let o = (e.data.file?.feedPosts || []).sort((e, t) => t.createdAt.getTime() - e.createdAt.getTime()).filter(e => !!e.org && C(r, a, e.org.id)).map(e => {
      let r = e.comments.map(e => ({
        id: `feed_comment_${e.id}`,
        uuid: e.uuid,
        key: "",
        parent_id: null,
        user_id: e.user.id,
        created_at: e.createdAt.toISOString(),
        resolved_at: null,
        deleted_at: null,
        message_meta: o8(e.messageMeta),
        client_meta: null,
        order_id: null,
        isUnread: !1,
        isPendingFromSinatra: !1,
        user: CR(e.user),
        feed_id: e.id,
        attachments: e.attachments
      }));
      let [a, ...o] = N([e]);
      s[a] = s[a] + 1 || 0;
      let l = i[a] ?? null;
      let d = n[e.publicUuid]?.[a];
      let c = {};
      for (let t of o) i[t] === l && (c[t] = n[e.publicUuid]?.[t]);
      let u = null;
      let p = null;
      d && (p = {
        x: d.x + d.width,
        y: d.y
      }, u = {
        x: d.x,
        y: d.y + d.height
      });
      let m = CR(e.creator);
      let f = iw(e.publicUuid);
      let _ = e.content.map(e => JSON.parse(e));
      let {
        thumbnail,
        padImage,
        thumbnailBackground
      } = _$$i(_, e.backgroundColor ?? void 0);
      return {
        id: f,
        uuid: "",
        key: e.fileKey || "",
        anchored: !1,
        selectionAnchorCanvasPosition: null,
        page: l,
        pageName: null,
        isActive: t === f,
        isPendingFromSinatra: !1,
        canvasPosition: p,
        boundingBoxAnchorCanvasPosition: u,
        comments: [{
          id: f,
          uuid: "",
          key: e.fileKey || "",
          parent_id: null,
          user_id: m.id,
          created_at: e.createdAt.toISOString(),
          resolved_at: null,
          deleted_at: null,
          message_meta: o8(e.descriptionMeta),
          client_meta: null,
          order_id: null,
          isUnread: !1,
          isPendingFromSinatra: !1,
          user: m,
          feed_id: e.id
        }, ...r],
        messageMeta: [],
        attachments: [],
        isCanvasMention: !1,
        sidebarItemType: ThreadType.FEED_POST,
        feedPostPublicUuid: e.publicUuid,
        feedPostTitle: e.title,
        feedPostThumbnail: thumbnail,
        feedPostThumbnailBackground: thumbnailBackground,
        feedPostNumContent: e.content.length,
        padFeedPostThumbnail: padImage,
        otherBoundingBoxes: c,
        pinVerticalStagger: s[a]
      };
    });
    return gB(o);
  }(e, t, a, c, y, v) : gB([]), [e, t, a, c, y, v]);
}
export const DG = $$P0;
export const Kc = $$T1;
export const OQ = $$k2;
export const Zp = $$w3;
export const dy = $$N4;
export const _$$in = $$O5;
export const rS = $$R6;