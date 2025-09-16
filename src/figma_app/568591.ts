import { jsx } from "react/jsx-runtime";
import { useMemo, useCallback, useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deepEqual } from "../905/382883";
import { getFeatureFlags } from "../905/601108";
import { memoizeByArgs } from "../figma_app/815945";
import { trackEventAnalytics } from "../905/449184";
import { cs, Rc } from "../figma_app/819288";
import { useLatestRef } from "../figma_app/922077";
import { S6 } from "../905/761735";
import { getLivegraphClient, useSubscription } from "../figma_app/288654";
import { gB, Xm } from "../905/723791";
import { setTagGlobal } from "../905/11";
import { Zv } from "../905/760682";
import { logError, logInfo } from "../905/714362";
import { generateUUIDv4 } from "../905/871474";
import { XHR } from "../905/910117";
import { pI } from "../figma_app/770088";
import { pf } from "../905/201151";
import { getSelectedEditorType } from "../figma_app/976749";
import { Mu, QG } from "../905/901964";
import { gj } from "../figma_app/12220";
import { W9, gu, Hu } from "../figma_app/936061";
import { N as _$$N } from "../figma_app/261650";
import { selectCurrentUser } from "../905/372672";
import { ResolvedComments, FeedPostsByFileKey, FileCanvasMentionsByFileKey } from "../figma_app/43951";
import { FEditorType } from "../figma_app/53721";
import { i as _$$i } from "../905/637293";
import { $J, kR } from "../905/234821";
import { r } from "../905/808413";
import { e as _$$e, I as _$$I } from "../905/601590";
import { xI } from "../905/723870";
import { O as _$$O } from "../905/963222";
class M {
  constructor(e) {
    this.client = e;
  }
  toggleReaction(e, t, r) {
    if ("loaded" !== this.client.subscription.status) throw Error("Unable to toggle reactions for unloaded subscription");
    return this.getReactions(e).find(r => r.emoji === t && r.fileCommentId === e && r.userId === this.client.user.id) ? this.removeReaction(e, t) : this.addReaction(e, t, r);
  }
  async addReaction(e, t, r) {
    let n = XHR.post(`/api/file/${this.client.fileKey}/comments/${e}/reactions`, {
      emoji: t,
      prototype_mode: r?.prototype_mode || !1,
      selected_view: r?.selectedView || "",
      quick_reply: r?.quickReply || !1
    });
    this.client.optimistically(async (r, i, a) => {
      let s = new Date();
      let o = `${e}_${t}_${a.id}`;
      await i.optimisticallyCreate({
        CommentReaction: {
          [o]: {
            fileCommentId: e,
            emoji: t,
            fileKey: r.file.id,
            userId: a.id,
            user: {
              id: a.id,
              handle: a.handle,
              imgUrl: a.img_url
            },
            createdAt: s,
            sortTimestamp: s
          }
        }
      }, n);
    });
    return await n;
  }
  async removeReaction(e, t) {
    let r = XHR.del(`/api/file/${this.client.fileKey}/comments/${e}/reactions`, {
      emoji: t
    });
    this.client.optimistically(async (n, i, a) => {
      let s = a.id;
      let o = this.getReactions(e).filter(e => e.emoji === t && e.userId === s).map(e => e.id);
      let l = o?.reduce((e, t) => ({
        ...e,
        [t]: null
      }), Object.create(null));
      await i.optimisticallyDelete({
        CommentReaction: l
      }, r);
    });
    return await r;
  }
  getReactions(e) {
    if ("loaded" !== this.client.subscription.status) throw Error("Unable to get reaction for unloaded subscription");
    let t = this.client.subscription.data.file;
    if (!t) throw Error("Unable to get reaction for unloaded subscription");
    if ("reactions" in t) return t.reactions.filter(t => t.fileCommentId === e);
    {
      let r = t.mobileCommentThread.find(t => t.id === e);
      return r ? r.reactions : [];
    }
  }
}
function F(e) {
  return e.map(e => ({
    ...e,
    id: e.id.toString()
  }));
}
class j {
  constructor(e) {
    this.client = e;
  }
  trackMissingCommentData(e, t, r, n, i, a) {
    let s = !1;
    _$$O.records[r.id] = {
      parentId: r.parent_id,
      report: (t, o) => {
        if (!s && (s = !0, setTagGlobal("comments_optimistic_updates", "true"), setTagGlobal("isLoadedComments", i.isLoadedComments ? "true" : "false"), setTagGlobal("commentType", e), logError(t, o, {
          id: r.id,
          fileKey: this.client.fileKey,
          parentId: r.parent_id,
          pageId: r.client_meta?.page_id,
          userId: this.client.user.id,
          clientMeta: r.client_meta,
          ...a
        }), this.client.livegraphClient)) {
          let e = n();
          let r = null;
          let i = null;
          let a = null;
          for (let n of e) if ("VIEW_QUERY_NODE.REMOVE_RESULT" === n.type || "STORE.ADD_INSTANCE" === n.type || "STORE.REMOVE_INSTANCE" === n.type || "SESSION.APPLY_MUTATIONS" === n.type || "SESSION.APPLY_SHADOW_MUTATIONS" === n.type || "SESSION.REMOVE_SHADOW_MUTATIONS" === n.type || "REQUEST_MESSAGE" === n.type && "sync" === n.message.messageType || "RESPONSE_MESSAGE" === n.type && "synced" === n.message.messageType || "RESPONSE_MESSAGE" === n.type && "pendingMutations" === n.message.messageType) logInfo(t, JSON.stringify(n));else if ("VIEW_QUERY_NODE.ADD_RESULT" === n.type || "VIEW_QUERY_NODE.UPDATE_RESULT" === n.type) {
            if (n.type === r && n.queryId === i && n.instance === a) continue;
            logInfo(t, JSON.stringify(n));
            r = n.type;
            i = n.queryId;
            a = n.instance;
          } else "SESSION.NOTIFY_OBSERVERS" === n.type && n.view._name.includes("Comments") && logInfo(t, JSON.stringify({
            type: "SESSION.NOTIFY_OBSERVERS",
            viewName: n.view._name
          }));
          logError(t, o);
        }
      }
    };
    setTimeout(() => {
      let i = _$$O.records[r.id];
      if (i || n(), delete _$$O.records[r.id], "loaded" !== this.client.subscription.status) return;
      let a = this.client.loadedComments.some(e => e.id === r.id || e.id === t);
      i && !a ? i.report(`${e} Never Appeared`, "Comment failed to appear within ten seconds of creation") : n();
    }, 1e4);
  }
  create(e, t) {
    let r = S6();
    let {
      fileKey,
      messageMeta,
      attachments,
      clientMeta,
      pageId,
      uuid
    } = e;
    trackEventAnalytics("New comment API create", {
      uuid
    });
    let _ = getFeatureFlags().show_at_mention_invited_users ? [...new Set(cs(messageMeta))] : [];
    let h = async e => {
      let r = e.data?.reason;
      if (!r || "comment_validation_failure" !== r.reason || !t?.onValidationError) throw e;
      let o = r.failure_info;
      let c = await t.onValidationError(F(o.users_without_view), F(o.ext_users_without_view), F(o.uninvitable_users));
      return c ? (trackEventAnalytics("New comment API handling validation", {
        uuid
      }), XHR.post(`/api/file/${fileKey}/comments`, {
        file_key: fileKey,
        message_meta: messageMeta,
        attachments: attachments.map(e => e.id),
        client_meta: clientMeta,
        page_id: pageId,
        prototype_mode: t?.prototypeMode,
        share_to_mentions: c.forceWithInvite,
        force: c.forceMentions,
        uuid,
        pending_mentions: _
      }).catch(h)) : null;
    };
    let m = _$$e(this.client.subscription);
    let g = this.client.subscription.data?.file?.currentUserCommentReadStatus;
    let f = XHR.post(`/api/file/${fileKey}/comments`, {
      file_key: fileKey,
      message_meta: messageMeta,
      attachments: attachments.map(e => e.id),
      client_meta: clientMeta,
      page_id: pageId,
      prototype_mode: t?.prototypeMode,
      share_to_mentions: null === t.onValidationError,
      force: null === t.onValidationError,
      pending_mentions: _,
      uuid,
      ...(!g && {
        all_read_at: gj.allReadAt
      })
    });
    this.client.optimistically((e, t) => {
      let r = this.client.loadedComments.map(e => e.orderId || 0);
      let o = r.length > 0 ? Math.max(...r) : 0;
      let l = Rc(messageMeta);
      t.optimisticallyCreateWithUUID({
        Comment: {
          [uuid]: {
            uuid,
            key: fileKey,
            userId: this.client.user.id,
            parentId: null,
            orderId: o + 1,
            canRead: !0,
            createdAt: new Date(),
            resolvedAt: null,
            deletedAt: null,
            clientMeta: {
              x: clientMeta.x,
              y: clientMeta.y,
              nodeId: clientMeta.node_id || null,
              pageId: clientMeta.page_id || null,
              nodeOffset: clientMeta.node_offset || null,
              inFrame: clientMeta.in_frame || null,
              selectionBoxAnchor: clientMeta.selection_box_anchor || null,
              stablePath: clientMeta.stable_path || null
            },
            messageMeta: l,
            messageMetaStylized: l,
            user: {
              id: this.client.user.id,
              handle: this.client.user.handle,
              imgUrl: this.client.user.img_url
            },
            reactions: [],
            thumbnailUrl: null,
            isCanvasMention: !1,
            commentPin: null
          }
        }
      }, f);
      let d = Mu(attachments, fileKey, uuid);
      if (d && t.optimisticallyCreate({
        CommentAttachment: d
      }, f), !e.file.currentUserCommentReadStatus) {
        let e = new Date();
        t.optimisticallyCreate({
          CommentReadStatus: {
            [`pending-comment-read-status-${e.getTime()}`]: {
              userId: this.client.user.id,
              fileKey: this.client.fileKey,
              createdAt: e,
              allReadAt: gj.allReadAt,
              readComments: {},
              unreadComments: {}
            }
          }
        }, f);
      }
    });
    return [f.catch(h).then(e => {
      if (!e) return null;
      try {
        let n = e.data.meta;
        this.trackMissingCommentData("New Comment", uuid, n, r, {
          isLoadedComments: m
        }, t);
      } catch {}
      return e;
    }), uuid];
  }
  reply(e, t) {
    let r = S6();
    let {
      threadId,
      threadUuid,
      messageMeta,
      attachments,
      uuid
    } = e;
    let {
      fileKey
    } = this.client;
    let u = cs(messageMeta);
    let _ = XHR.post(`/api/file/${fileKey}/comments/${e.threadId}`, {
      file_key: fileKey,
      uuid,
      message_meta: messageMeta,
      attachments: attachments.map(e => e.id),
      prototype_mode: t?.prototypeMode,
      share_to_mentions: t.forceWithInvite || !1,
      force: t.forceMention || !1,
      tracking_context: t.trackingContext,
      pending_mentions: u
    });
    let h = Rc(messageMeta);
    let m = _$$e(this.client.subscription);
    let {
      user
    } = this.client;
    this.client.optimistically((e, t) => {
      threadUuid ? t.optimisticallyUpdateWithUUID({
        Comment: {
          [threadUuid]: {
            uuid: threadUuid,
            resolvedAt: null
          }
        }
      }, _) : t.optimisticallyUpdate({
        Comment: {
          [threadId]: {
            resolvedAt: null
          }
        }
      }, _);
      trackEventAnalytics("Livegraph Optimistic Comment Update", {
        flow: "reply",
        isOptimistic: !!threadUuid
      });
      t.optimisticallyCreateWithUUID({
        Comment: {
          [uuid]: {
            uuid,
            key: fileKey,
            userId: user.id,
            parentId: threadId,
            orderId: null,
            canRead: !0,
            createdAt: new Date(),
            resolvedAt: null,
            deletedAt: null,
            clientMeta: null,
            messageMeta: h,
            messageMetaStylized: h,
            user: {
              id: user.id,
              handle: user.handle,
              imgUrl: user.img_url
            },
            reactions: [],
            thumbnailUrl: null,
            isCanvasMention: !1,
            commentPin: null,
            attachments: attachments.map(e => QG(e, fileKey, uuid))
          }
        }
      }, _);
      let r = Mu(attachments, fileKey, uuid);
      r && t.optimisticallyCreate({
        CommentAttachment: r
      }, _);
    });
    return [_.then(e => {
      if (!e) return null;
      let n = e.data.meta;
      this.trackMissingCommentData("Reply Comment", uuid, n, r, {
        isLoadedComments: m
      }, t);
      return e;
    }), uuid];
  }
}
class U {
  constructor(e) {
    this.client = e;
  }
  get commentReceipts() {
    return this;
  }
  async markAsUnread(e) {
    let t = this.client.subscription.data?.file?.currentUserCommentReadStatus;
    let r = XHR.post(`/api/file/${this.client.fileKey}/unread_comments`, {
      comment_ids: [e],
      ...(!t && {
        all_read_at: gj.allReadAt
      })
    });
    this.client.optimistically(async (t, n, i) => {
      let a = t.file.currentUserCommentReadStatus;
      let s = new Date();
      if (a) {
        let {
          [e]: e,
          ...i
        } = a.readComments;
        await n.optimisticallyUpdate({
          CommentReadStatus: {
            [a.id]: {
              ...a,
              allReadAt: gj.allReadAt,
              readComments: i,
              unreadComments: {
                ...a.unreadComments,
                [e]: "true"
              }
            }
          }
        }, r);
      } else await n.optimisticallyCreate({
        CommentReadStatus: {
          [`pending-comment-read-status-${s.getTime()}`]: {
            userId: i.id,
            fileKey: this.client.fileKey,
            createdAt: s,
            allReadAt: gj.allReadAt,
            readComments: {},
            unreadComments: {
              [e]: "true"
            }
          }
        }
      }, r);
    });
    return await r;
  }
  async markAllAsRead() {
    let e = this.client.subscription.data?.file?.currentUserCommentReadStatus;
    let t = XHR.del(`/api/file/${this.client.fileKey}/unread_comments`, {
      ...(!e && {
        all_read_at: gj.allReadAt
      })
    });
    this.client.optimistically(async (e, r, n) => {
      let i = e.file.currentUserCommentReadStatus;
      let a = new Date();
      i ? await r.optimisticallyUpdate({
        CommentReadStatus: {
          [i.id]: {
            ...i,
            allReadAt: a,
            readComments: {},
            unreadComments: {}
          }
        }
      }, t) : await r.optimisticallyCreate({
        CommentReadStatus: {
          [`pending-comment-read-status-${a.getTime()}`]: {
            userId: n.id,
            fileKey: this.client.fileKey,
            createdAt: a,
            allReadAt: a,
            readComments: {},
            unreadComments: {}
          }
        }
      }, t);
    });
    return await t;
  }
  async markAsRead(e) {
    let t = this.client.subscription.data?.file?.currentUserCommentReadStatus;
    let r = XHR.del(`/api/file/${this.client.fileKey}/unread_comments`, {
      comment_ids: e,
      ...(!t && {
        all_read_at: gj.allReadAt
      })
    });
    this.client.optimistically(async (t, n, i) => {
      let a = t.file.currentUserCommentReadStatus;
      let s = new Date();
      let o = e.reduce((e, t) => ({
        ...e,
        [t]: s.toUTCString()
      }), {});
      a ? await n.optimisticallyUpdate({
        CommentReadStatus: {
          [a.id]: {
            ...a,
            readComments: {
              ...a.readComments,
              ...o
            },
            unreadComments: Object.keys(a.unreadComments).filter(t => !e.includes(t)).reduce((e, t) => (e[t] = "true", e), {})
          }
        }
      }, r) : await n.optimisticallyCreate({
        CommentReadStatus: {
          [`pending-comment-read-status-${s.getTime()}`]: {
            userId: i.id,
            fileKey: this.client.fileKey,
            createdAt: s,
            allReadAt: gj.allReadAt,
            readComments: o,
            unreadComments: {}
          }
        }
      }, r);
    });
    return await r;
  }
}
let B = memoizeByArgs(e => {
  let t = e => (e.hasOwnProperty("transform") || Object.defineProperty(e, "transform", {
    get: function () {
      return {
        filter: r => t(e.filter(r)),
        map: r => t(e.map(r)),
        join: r => t([...e, ...(r || [])])
      };
    }
  }), e);
  return t(e);
});
function G(e, t, r) {
  let n = useMemo(() => {
    if ("loaded" !== r.status) return new Set([]);
    let e = r.data.file;
    return new Set(e ? "comments" in e ? e.comments.map(e => e.id) : e.resolvedComments.map(e => e.id) : []);
  }, [r]);
  let a = useLatestRef(n);
  let {
    removed
  } = useMemo(() => Zv(n, a), [n, a]);
  let o = useCallback(e, t);
  useEffect(() => {
    removed.forEach(e => {
      o(e);
    });
  }, [o, removed]);
}
export function $$V1(e) {
  let t = getLivegraphClient();
  let r = selectCurrentUser();
  let {
    args,
    subscription
  } = e;
  let [o, l] = useState(() => {
    if (r) return new _$$I(args, subscription, r);
  });
  useEffect(() => {
    if (!r) {
      l(void 0);
      return;
    }
    if (!o || !deepEqual(o.args, args)) {
      l(new _$$I(args, subscription, r));
      return;
    }
  }, [o, args, subscription, r, t]);
  o && (r && (o.user = r), o.subscription = subscription, o.livegraphClient = t);
  return useMemo(() => o ? {
    commentReceipts: new U(o),
    reactionsApi: new M(o),
    writeAPI: new j(o),
    pinApi: new xI(o)
  } : {}, [o]);
}
export function $$H0(e) {
  let {
    userId,
    file,
    activeId,
    anchorPositions,
    boundingBoxPositions,
    DEPRECATED_updateWatchedNodeIds,
    updateWatchedStablePaths,
    getPageIdsForNodes,
    children
  } = e;
  let g = useRef({});
  let f = getSelectedEditorType() === FEditorType.Whiteboard;
  let y = !!getFeatureFlags().xr_debounce_threshold;
  let S = file?.key;
  let v = !!S;
  let N = useMemo(() => ({
    fileKey: S ?? ""
  }), [S]);
  let P = useMemo(() => generateUUIDv4(), [N]);
  let D = useSubscription($J, N, {
    enabled: v,
    traceId: P
  });
  let M = useSubscription(ResolvedComments, N, {
    enabled: v
  });
  let F = useSubscription(FeedPostsByFileKey, N, {
    enabled: y && v
  });
  let j = useSubscription(FileCanvasMentionsByFileKey, N, {
    enabled: f && v
  });
  let U = useSelector(e => e.comments.lgPendingUuidToServerIdMap);
  let H = useDispatch();
  let z = useMemo(() => {
    if ("loaded" !== D.status || !D.data.file) return D;
    let e = B(D.data.file.comments).transform.filter(e => null === e.resolvedAt);
    if ("loaded" === M.status) {
      let t = M.data.file?.resolvedComments;
      e = e.transform.join(t);
    }
    let t = {
      ...D.data.file,
      comments: e
    };
    return {
      ...D,
      data: {
        ...D.data,
        file: t
      }
    };
  }, [D, M]);
  useMemo(() => {
    "loaded" === z.status && z.data?.file?.comments?.forEach(e => {
      e.id in U ? (g.current[e.id] = e, e.id = U[e.id]) : e.uuid && e.uuid in U && g.current[e.uuid] && g.current[e.uuid] !== e && (H(pI({
        commentUuid: e.uuid
      })), delete g.current[e.uuid]);
    });
  }, [H, z, U]);
  let W = useSelector(e => e.mirror.appModel.pagesList);
  let {
    commentsAttachedToNodes,
    commentThreadNodeIds,
    commentThreadStablePaths
  } = useMemo(() => {
    if ("loaded" !== z.status || !z.data.file) return {
      commentThreadsNodeIds: [],
      commentsAttachedToNodes: []
    };
    let e = [];
    let t = new Set();
    let r = new Set();
    z.data.file.comments.forEach(n => {
      if (null === n.parentId) {
        let i = n.clientMeta?.nodeId;
        let a = n.clientMeta?.stablePath;
        a && updateWatchedStablePaths ? (e.push(n), r.add(`[${a.join(",")}]`)) : i && DEPRECATED_updateWatchedNodeIds && (e.push(n), t.add(i));
      }
    });
    return {
      commentsAttachedToNodes: e,
      commentThreadNodeIds: t,
      commentThreadStablePaths: r
    };
  }, [z, DEPRECATED_updateWatchedNodeIds, updateWatchedStablePaths]);
  let X = useMemo(() => {
    if ("loaded" !== z.status || !z.data.file || y && !F.data?.file) return [];
    let e = new Set(commentThreadNodeIds);
    y && _$$N(F.data.file.feedPosts).forEach(t => {
      e.add(t);
    });
    return Array.from(e);
  }, [z, F, y, commentThreadNodeIds]);
  let q = useMemo(() => "loaded" === z.status && z.data.file ? Array.from(new Set(commentThreadStablePaths)) : [], [z, commentThreadStablePaths]);
  useEffect(() => {
    DEPRECATED_updateWatchedNodeIds && DEPRECATED_updateWatchedNodeIds(X);
    updateWatchedStablePaths && updateWatchedStablePaths(q);
  }, [DEPRECATED_updateWatchedNodeIds, X, updateWatchedStablePaths, q]);
  let J = W9(userId, z, activeId, anchorPositions, getPageIdsForNodes, W);
  let Z = gu(userId, j, e.activeId);
  let Q = _$$i(F, e.activeId, getPageIdsForNodes, boundingBoxPositions);
  let ee = useMemo(() => {
    if ("loaded" !== z.status || y && "loaded" !== F.status || f && "loaded" !== j.status) return gB([]);
    let e = [];
    J.data && (e = e.concat(J.data));
    Z.data && (e = e.concat(Z.data));
    Q.data && (e = e.concat(Q.data));
    return gB(e);
  }, [z.status, y, F.status, f, j.status, J.data, Z.data, Q.data]);
  let et = $$V1({
    args: N,
    subscription: z
  });
  let er = r({
    args: N,
    subscription: F
  });
  et.canvasMentionReceipts = pf({
    canvasMentionArgs: N,
    canvasMentionSubscription: j
  });
  Hu(commentsAttachedToNodes, {
    enabled: !!getFeatureFlags().comments_absolute_positioning
  });
  G(e => {
    _$$O.records[e]?.report?.("New Comment Missing", "Comment disappeared within ten seconds of creation");
  }, [], D);
  G(e => {
    _$$O.records[e]?.report?.("New Resolved Comment Missing", "Resolved comment disappeared within ten seconds of creation");
  }, [], M);
  let en = useMemo(() => v ? {
    ...z,
    api: et,
    feedApi: er,
    threads: ee,
    isUnresolvedLoaded: "loaded" === D.status,
    isResolvedLoaded: "loaded" === M.status
  } : {
    status: "loading",
    data: null,
    errors: null,
    threads: Xm(),
    api: {},
    isUnresolvedLoaded: !1,
    isResolvedLoaded: !1
  }, [v, z, et, er, ee, D.status, M.status]);
  return jsx(kR, {
    value: en,
    children
  });
}
export const NX = $$H0;
export const dr = $$V1;