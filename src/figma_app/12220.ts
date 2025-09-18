import { throwTypeError } from "../figma_app/465776";
import { getFeatureFlags } from "../905/601108";
import { memoizeWeak } from "../figma_app/815945";
import { containsDash } from "../figma_app/819288";
import { parsePxNumber } from "../figma_app/783094";
import { gB, getResourceDataOrFallback } from "../905/723791";
import { isPointInRect, Point } from "../905/736624";
import { ih } from "../905/201151";
import { viewportToScreen } from "../figma_app/62612";
import { BusyReadyState, NEW_COMMENT_ID, ThreadType } from "../905/380385";
import { XC, b1 } from "../905/512783";
import { NJv, QP5, oGx } from "../figma_app/27776";
let $$m18 = 1;
let $$g9 = {
  x: 16,
  y: -4
};
let $$f5 = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  width: 0,
  height: 0
};
let $$E3 = {
  messageMeta: [],
  attachments: {},
  state: BusyReadyState.READY,
  anchorPosition: null,
  selectionBoxAnchor: null,
  discardAttempt: 0
};
export function $$y13(e, t) {
  return !t || isPointInRect(t, e);
}
function b(e) {
  return parsePxNumber(e ? NJv : QP5);
}
export function $$T15() {
  return b(!0);
}
export function $$I11() {
  return parsePxNumber(oGx);
}
export function $$S4(e, t, r) {
  let {
    messageMeta,
    attachments,
    anchorPosition,
    selectionBoxAnchor
  } = t;
  return {
    id: NEW_COMMENT_ID,
    key: NEW_COMMENT_ID,
    uuid: NEW_COMMENT_ID,
    anchored: !0,
    canvasPosition: anchorPosition,
    selectionAnchorCanvasPosition: selectionBoxAnchor,
    page: r,
    isActive: e === NEW_COMMENT_ID,
    comments: [],
    messageMeta,
    attachments: Object.values(attachments),
    pageName: null,
    isCanvasMention: !1,
    sidebarItemType: ThreadType.COMMENT_THREAD
  };
}
export function $$v7(e) {
  return e === NEW_COMMENT_ID;
}
let $$A12 = memoizeWeak(e => e.map(e => e.user ? {
  user_id: e.user.id,
  user_annotated: {
    id: e.user.id,
    handle: e.user.handle,
    img_url: e.user.imgUrl
  }
} : {
  t: null !== e.t ? e.t : void 0,
  link: e.link ? e.link : void 0,
  styles: e.styles ? e.styles : void 0,
  children: e.children?.length ? $$A12(e.children) : void 0
}));
let x = memoizeWeak(e => ({
  x: e.x,
  y: e.y,
  ...(e.nodeId ? {
    node_id: e.nodeId
  } : {}),
  ...(e.inFrame ? {
    in_frame: e.inFrame
  } : {}),
  ...(e.nodeOffset ? {
    node_offset: e.nodeOffset
  } : {}),
  ...(e.selectionBoxAnchor ? {
    selection_box_anchor: e.selectionBoxAnchor
  } : {}),
  ...(e.stablePath ? {
    stable_path: e.stablePath
  } : {})
}));
let $$N0 = memoizeWeak(e => ({
  id: e.id,
  handle: e.handle,
  img_url: e.imgUrl
}));
let C = (e, t, r) => {
  if ("publicUuid" in e && e.publicUuid) return !1;
  if (t.unreadComments[e.id]) return !0;
  if (t.readComments[e.id]) return !1;
  let n = t.allReadAt || t.createdAt;
  return !(e.createdAt.getTime() <= n.getTime()) && e.user.id !== r;
};
export function $$w2(e, t, r, n, a, o, l) {
  let d = C(r, n, e);
  let c = containsDash(r.id);
  let u = r.messageMeta;
  r.messageMetaStylized?.length && (u = r.messageMetaStylized);
  let p = getFeatureFlags().comments_faster_saving_ux ? !!r.uuid && a.has(r.uuid) : void 0;
  let _ = getFeatureFlags().comments_faster_saving_ux_v2 ? c || !!t.uuid && t.uuid in o : void 0;
  return {
    id: r.id,
    uuid: r.uuid,
    key: t.key,
    parent_id: r.parentId,
    user_id: r.user.id,
    created_at: r.createdAt.toISOString(),
    resolved_at: t.resolvedAt ? t.resolvedAt.toISOString() : null,
    deleted_at: null,
    message_meta: $$A12(u),
    attachments: l,
    client_meta: r.clientMeta ? x(r.clientMeta) : null,
    order_id: null !== r.orderId ? r.orderId.toString() : null,
    isUnread: d,
    isPendingFromSinatra: c,
    isSaving: p,
    isPendingFromLg: _,
    user: $$N0(r.user)
  };
}
let O = new Date();
let $$R8 = {
  id: "",
  userId: "",
  fileKey: "",
  createdAt: O,
  allReadAt: O,
  readComments: {},
  unreadComments: {}
};
export function $$L14(e, t, r, n, a, o, d, c) {
  if ("loaded" !== t.status) return t;
  let u = t.data.file;
  if (!u) return gB([]);
  let _ = u?.comments.filter(e => !e.parentId);
  let h = u.comments.filter(e => e.parentId).reduce((e, t) => {
    let r = e[t.parentId] || [];
    r.push(t);
    e[t.parentId] = r;
    return e;
  }, {});
  let m = u.commentAttachments.reduce((e, t) => {
    if (!t.fileCommentId) return e;
    let r = e[t.fileCommentId] || [];
    r.push(t);
    e[t.fileCommentId] = r;
    return e;
  }, {});
  let g = a(_.filter(e => e.clientMeta?.nodeId).map(e => e.clientMeta.nodeId));
  let f = _.map(t => {
    let a = t.clientMeta && t.clientMeta.nodeId;
    let l = n[t.id] || t.uuid && n[t.uuid];
    let _ = null;
    if (l && t.clientMeta?.selectionBoxAnchor) {
      let e = t.clientMeta.x - t.clientMeta.selectionBoxAnchor.x;
      let r = t.clientMeta.y - t.clientMeta.selectionBoxAnchor.y;
      _ = {
        x: l.x - e,
        y: l.y - r
      };
    }
    let f = a ? g[a] || t.clientMeta?.pageId || null : t.clientMeta?.pageId || "0:1";
    let E = h[t.id] || [];
    let y = [t, ...E.sort((e, t) => e.createdAt.getTime() - t.createdAt.getTime())];
    let b = u.currentUserCommentReadStatus || $$R8;
    let T = y.map(r => {
      let n = m[r.id] ?? (r.uuid && m[r.uuid]);
      return $$w2(e, t, r, b, d, c, n);
    });
    let I = containsDash(t.id);
    let S = getFeatureFlags().comments_faster_saving_ux ? !!t.uuid && d.has(t.uuid) : void 0;
    let v = getFeatureFlags().comments_faster_saving_ux_v2 ? I || !!t.uuid && t.uuid in c : void 0;
    return {
      id: t.id,
      uuid: t.uuid || void 0,
      key: t.key,
      anchored: !!l,
      canvasPosition: l,
      selectionAnchorCanvasPosition: _,
      page: f,
      pageName: f && o[f] || null,
      isActive: r === t.id,
      isPendingFromSinatra: I,
      isSaving: S,
      isPendingFromLg: v,
      comments: T,
      messageMeta: [],
      attachments: [],
      isCanvasMention: !1,
      sidebarItemType: ThreadType.COMMENT_THREAD,
      commentPin: t.commentPin
    };
  });
  return gB(f);
}
export function $$P17(e, t, r, i) {
  let {
    canvasPosition
  } = t;
  let s = canvasPosition && e ? viewportToScreen(e, canvasPosition) : null;
  let o = function (e, t, r, i, a, s) {
    if (!e || !t) return null;
    let o = function (e) {
      switch (e) {
        case ThreadType.COMMENT_THREAD:
        case ThreadType.LITMUS_COMMENT_THREAD:
          return XC;
        case ThreadType.FEED_POST:
          return b1;
        default:
          throwTypeError(e);
      }
    }(i).getPinSize(r).width;
    let l = o + $$g9.x + b(a) + 25;
    return e.width - t.x - (s ?? 0) < l ? {
      x: -1 * b(a) - $$g9.x,
      y: -55
    } : {
      x: o + $$g9.x,
      y: -55
    };
  }(e, s, new Set(t.comments.map(e => e.user_id)).size, t.sidebarItemType, r, i);
  let l = s && o ? Point.add(s, o) : null;
  return {
    ...t,
    anchorPosition: s,
    threadPosition: l,
    threadOffset: o
  };
}
let D = (e, t, r) => {
  let n = e.id;
  if (t.unreadCanvasMentions[n]) return !0;
  if (t.readCanvasMentions[n]) return !1;
  let i = t.allReadAt || t.createdAt;
  return !(e.createdAt.getTime() <= i.getTime()) && r !== e.id;
};
export function $$k10(e, t, r) {
  if ("loaded" !== t.status) return t;
  let n = t.data.file;
  if (!n) return gB([]);
  let i = n.fileCanvasMentions;
  let a = n.currentUserFileCanvasMentionReadStatus || ih;
  let s = i.map(t => function (e, t, r, n) {
    let i = `canvas_mention_${t.id.replace(/-/g, "_")}`;
    let a = t.id;
    let s = D(t, r, e);
    return {
      id: i,
      uuid: a,
      key: t.fileKey,
      anchored: !1,
      canvasPosition: null,
      selectionAnchorCanvasPosition: null,
      page: getResourceDataOrFallback(t.pageId, null),
      pageName: null,
      isActive: n === i,
      isPendingFromSinatra: void 0,
      comments: [{
        id: i,
        uuid: a,
        key: a,
        parent_id: null,
        user_id: t.fileKey,
        created_at: t.createdAt.toISOString(),
        resolved_at: null,
        deleted_at: null,
        message_meta: $$A12(t.messageMeta),
        client_meta: null,
        order_id: null,
        isUnread: s,
        isPendingFromSinatra: !1,
        user: $$N0(t.mentionedByUser)
      }],
      messageMeta: $$A12(t.messageMeta),
      attachments: [],
      isCanvasMention: !0,
      replyCount: void 0,
      sidebarItemType: ThreadType.COMMENT_THREAD,
      nodeId: t.nodeIdPath[0]
    };
  }(e, t, a, r));
  return gB(s);
}
export function $$M16() {
  return {
    reply: {
      messageMeta: [],
      attachments: {}
    },
    state: BusyReadyState.READY
  };
}
export function $$F1(e) {
  let t = [];
  for (let r = 0; r < e.message_meta.length; r++) {
    let n = e.message_meta[r];
    n.hasOwnProperty("user_id") && t.push(n.user_id);
  }
  return t;
}
export function $$j6(e) {
  return e.some(e => null != e.commentPin && e.comments.some(e => e.isUnread));
}
export const CR = $$N0;
export const F$ = $$F1;
export const G9 = $$w2;
export const GV = $$E3;
export const JG = $$S4;
export const PK = $$f5;
export const Zz = $$j6;
export const eR = $$v7;
export const gj = $$R8;
export const hx = $$g9;
export const k0 = $$k10;
export const mz = $$I11;
export const o8 = $$A12;
export const rN = $$y13;
export const ro = $$L14;
export const t$ = $$T15;
export const us = $$M16;
export const vl = $$P17;
export const wB = $$m18;