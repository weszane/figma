import { getFeatureFlags } from "../905/601108";
import { NC } from "../905/17179";
import { trackEventAnalytics } from "../905/449184";
import { Pq, _Z, Rc, l5, vj } from "../figma_app/819288";
import { WB } from "../905/761735";
import { generateUUIDv4 } from "../905/871474";
import { XHR } from "../905/910117";
import { createOptimistThunk } from "../905/350402";
import { N } from "../905/696711";
import { Gq } from "../905/380385";
import { createNoOpValidator } from "../figma_app/181241";
let h = new class {
  constructor() {
    this.FeedBellStatesSchemaValidator = createNoOpValidator();
  }
  getFeedBellStates() {
    return this.FeedBellStatesSchemaValidator.validate(async ({
      xr: e
    }) => await e.get("/api/feed_bell_states"));
  }
}();
let $$g7 = NC("REFRESH_FEED");
let $$f5 = createOptimistThunk((e, t, {
  loadingKey: i
}) => {
  if (!getFeatureFlags().xr_debounce_threshold) return;
  let r = h.getFeedBellStates();
  N(r, e, i);
  r.then(t => {
    e.dispatch($$A10({
      bellStates: t.data.meta
    }));
  });
});
let $$_11 = NC("TEAM_FEED_SET_BELL_STATE");
let $$A10 = NC("TEAM_FEED_SET_INITIAL_BELL_STATES");
let $$y3 = createOptimistThunk((e, t) => {
  let i = e.getState().user;
  let n = WB();
  let r = t.uuid;
  if (!i || !n || !r || t.commentId.startsWith($$R0)) return;
  let a = n.getIdFromUuid("FeedComment", r).then(e => XHR.del(`/api/feed_posts/comments/${e}`));
  n.optimisticallyDeleteWithUUID({
    FeedComment: {
      [r]: null
    }
  }, a);
});
let $$b4 = createOptimistThunk((e, t) => {
  t.messageMeta = Pq(t.messageMeta);
  let i = e.getState().user;
  let n = WB();
  let r = t.uuid;
  if (!i || !n || !r) return;
  let l = n.getIdFromUuid("FeedComment", r).then(e => XHR.put(`/api/feed_posts/comments/${e}`, {
    message_meta: t.messageMeta,
    attachment_updates: Gq(t.attachmentUpdates)
  }));
  trackEventAnalytics("Team Feed Comment Edited", {
    text: _Z(t.messageMeta)
  });
  let c = Rc(t.messageMeta);
  n.optimisticallyUpdateWithUUID({
    FeedComment: {
      [r]: {
        messageMeta: c
      }
    }
  }, l);
});
let $$v6 = createOptimistThunk((e, t) => {
  t.messageMeta = Pq(t.messageMeta);
  let i = e.getState().user;
  let n = WB();
  if (!i || !n) return;
  let r = generateUUIDv4();
  let c = XHR.post(`/api/feed_posts/${t.postUuid}/comments`, {
    message_meta: t.messageMeta,
    uuid: r,
    attachment_ids: t.attachmentIds
  });
  let u = !!t.messageMeta.find(e => l5(e) === vj.EMOJI);
  let p = !!t.messageMeta.find(e => l5(e) === vj.EDITOR_MENTION);
  trackEventAnalytics("Team Feed Comment Added", {
    emojiUsed: u,
    mentionUsed: p,
    text: _Z(t.messageMeta),
    postUuid: t.postUuid
  });
  let m = Rc(t.messageMeta);
  n.optimisticallyCreateWithUUID({
    FeedComment: {
      [r]: {
        feedPostPublicUuid: t.postUuid,
        uuid: r,
        userId: i.id,
        user: {
          id: i.id,
          handle: i.handle,
          imgUrl: i.img_url
        },
        messageMeta: m,
        createdAt: new Date(),
        reactions: []
      }
    }
  }, c);
});
let $$I8 = createOptimistThunk((e, t) => {
  let {
    commentUuid,
    emoji,
    reactionId
  } = t;
  let a = E(commentUuid, emoji);
  e.getState().user && WB().optimisticallyDelete({
    FeedReaction: {
      [reactionId]: null
    }
  }, a);
});
let E = (e, t) => WB().getIdFromUuid("FeedComment", e).then(e => XHR.del(`/api/feed_posts/comments/${e}/reactions`, {
  emoji: t
}));
let $$x1 = createOptimistThunk((e, t) => {
  let {
    commentUuid,
    commentId,
    emoji
  } = t;
  let s = e.getState().user;
  if (!s || commentId.startsWith($$R0)) return;
  let l = S(commentUuid, emoji);
  trackEventAnalytics("Team Feed Reaction Added", {
    commentId,
    type: emoji
  });
  let d = `optimistic-id-comment-${commentId}-${emoji}-${s.id}`;
  WB().optimisticallyCreate({
    FeedReaction: {
      [d]: {
        createdAt: new Date(),
        emoji,
        feedResourceId: commentId,
        feedResourceType: "FeedComment",
        userId: s.id
      }
    }
  }, l);
});
let S = (e, t) => WB().getIdFromUuid("FeedComment", e).then(e => XHR.post(`/api/feed_posts/comments/${e}/reactions`, {
  emoji: t
}));
let $$w9 = createOptimistThunk((e, t) => {
  let {
    feedPostUuid,
    emoji,
    reactionId
  } = t;
  let a = C(feedPostUuid, emoji);
  e.getState().user && WB().optimisticallyDelete({
    FeedReaction: {
      [reactionId]: null
    }
  }, a);
});
let C = (e, t) => XHR.del(`/api/feed_posts/${e}/reactions`, {
  emoji: t
});
let $$T2 = createOptimistThunk((e, t) => {
  let {
    feedPostUuid,
    feedPostId,
    emoji
  } = t;
  let s = e.getState().user;
  if (!s) return;
  let l = k(feedPostUuid, emoji);
  trackEventAnalytics("Team Feed Reaction Added", {
    postUuid: feedPostUuid,
    type: emoji
  });
  let d = `optimistic-id-${feedPostUuid}-${emoji}-${s.id}`;
  WB().optimisticallyCreate({
    FeedReaction: {
      [d]: {
        createdAt: new Date(),
        emoji,
        feedResourceId: feedPostId,
        feedResourceType: "FeedPost",
        userId: s.id,
        user: {
          id: s.id,
          handle: s.handle,
          imgUrl: s.img_url
        }
      }
    }
  }, l);
});
let k = (e, t) => XHR.post(`/api/feed_posts/${e}/reactions`, {
  emoji: t
});
let $$R0 = "pending-feed-comment";
export const v6 = $$R0;
export const FJ = $$x1;
export const EF = $$T2;
export const BC = $$y3;
export const cx = $$b4;
export const au = $$f5;
export const gX = $$v6;
export const Y9 = $$g7;
export const t9 = $$I8;
export const Oy = $$w9;
export const hK = $$A10;
export const yu = $$_11;