import { useMemo } from "react";
import { getLivegraphClient } from "../figma_app/288654";
import { XHR } from "../905/910117";
import { GH, H5 } from "../905/234821";
import { selectCurrentUser } from "../905/372672";
let l = new Date();
let $$d1 = {
  id: "",
  userId: "",
  fileKey: "",
  createdAt: l,
  allReadAt: l,
  readCanvasMentions: {},
  unreadCanvasMentions: {}
};
class c {
  constructor(e, t, i) {
    this.args = e;
    this.subscription = t;
    this.user = i;
    this.livegraphClient = null;
  }
  get fileKey() {
    return this.args.fileKey;
  }
  optimistically(e) {
    var t;
    if (!this.livegraphClient) {
      setTimeout(() => {
        throw Error("Unable to perform optimistic mutation to livegraph, no livegraph client");
      });
      return;
    }
    if (!this.subscription) {
      setTimeout(() => {
        throw Error(`Unable to perform optimistic mutation to livegraph, no livegraph client ${JSON.stringify(this.args)}`);
      });
      return;
    }
    if (!("loaded" === (t = this.subscription).status && t.data.file && t.data.file?.fileCanvasMentions)) {
      console.error("Unable to perform optimistic mutation to livegraph - partial subscription", JSON.stringify(this.args));
      return;
    }
    e(this.subscription.data, this.livegraphClient, this.user);
  }
}
class u {
  constructor(e) {
    this.client = e;
  }
  get canvasMentionReceipts() {
    return this;
  }
  async markAsUnread(e) {
    let t = this.addMentionToUnread(e);
    this.client.optimistically(async (i, n, r) => {
      let a = i?.file?.currentUserFileCanvasMentionReadStatus;
      let s = new Date();
      if (a) {
        let {
          [e]: e,
          ...r
        } = a.readCanvasMentions;
        await n.optimisticallyUpdate({
          FileCanvasMentionReadStatus: {
            [a.id]: {
              ...a,
              allReadAt: $$d1.allReadAt,
              readCanvasMentions: r,
              unreadCanvasMentions: {
                ...a.unreadCanvasMentions,
                [e]: s.toUTCString()
              }
            }
          }
        }, t);
      } else await n.optimisticallyCreate({
        FileCanvasMentionReadStatus: {
          [p(s)]: {
            userId: r.id,
            fileKey: this.client.fileKey,
            createdAt: s,
            updatedAt: s,
            allReadAt: $$d1.allReadAt,
            readCanvasMentions: {},
            unreadCanvasMentions: {
              [e]: s.toUTCString()
            }
          }
        }
      }, t);
    });
    return await t;
  }
  async markAllAsRead() {
    let e = this.removeMentionsFromUnread();
    this.client.optimistically(async (t, i, n) => {
      let r = t?.file?.currentUserFileCanvasMentionReadStatus;
      let a = new Date();
      r ? await i.optimisticallyUpdate({
        FileCanvasMentionReadStatus: {
          [r.id]: {
            ...r,
            allReadAt: a,
            readCanvasMentions: {},
            unreadCanvasMentions: {}
          }
        }
      }, e) : await i.optimisticallyCreate({
        FileCanvasMentionReadStatus: {
          [p(a)]: {
            userId: n.id,
            fileKey: this.client.fileKey,
            createdAt: a,
            updatedAt: a,
            allReadAt: a,
            readCanvasMentions: {},
            unreadCanvasMentions: {}
          }
        }
      }, e);
    });
    return await e;
  }
  async markAsRead(e) {
    let t = this.removeMentionsFromUnread(e);
    this.client.optimistically(async (i, n, r) => {
      let a = i?.file?.currentUserFileCanvasMentionReadStatus;
      let s = new Date();
      let o = e.reduce((e, t) => ({
        ...e,
        [t]: s.toUTCString()
      }), {});
      a ? await n.optimisticallyUpdate({
        FileCanvasMentionReadStatus: {
          [a.id]: {
            ...a,
            readCanvasMentions: {
              ...a.readCanvasMentions,
              ...o
            },
            unreadCanvasMentions: Object.keys(a.unreadCanvasMentions).filter(t => !e.includes(t)).reduce((e, t) => (e[t] = s.toUTCString(), e), {})
          }
        }
      }, t) : await n.optimisticallyCreate({
        FileCanvasMentionReadStatus: {
          [p(s)]: {
            userId: r.id,
            fileKey: this.client.fileKey,
            createdAt: s,
            updatedAt: s,
            allReadAt: $$d1.allReadAt,
            readCanvasMentions: o,
            unreadCanvasMentions: {}
          }
        }
      }, t);
    });
    return await t;
  }
  removeMentionsFromUnread(e) {
    let t = this.client.subscription.data?.file?.currentUserFileCanvasMentionReadStatus;
    return e ? XHR.del(`/api/file/${this.client.fileKey}/canvas_mentions/unread`, {
      canvas_mention_ids: e,
      ...(!t && {
        all_read_at: $$d1.allReadAt
      })
    }) : XHR.del(`/api/file/${this.client.fileKey}/canvas_mentions/unread`, {
      ...(!t && {
        all_read_at: $$d1.allReadAt
      })
    });
  }
  addMentionToUnread(e) {
    let t = this.client.subscription.data?.file?.currentUserFileCanvasMentionReadStatus;
    return XHR.post(`/api/file/${this.client.fileKey}/canvas_mentions/unread`, {
      canvas_mention_ids: [e],
      ...(!t && {
        all_read_at: $$d1.allReadAt
      })
    });
  }
}
function p(e) {
  return `pending-canvas-mention-read-status-${e.getTime()}`;
}
export function $$m2(e) {
  let t = getLivegraphClient();
  let i = selectCurrentUser();
  let {
    canvasMentionArgs,
    canvasMentionSubscription
  } = e;
  let l = useMemo(() => i ? new c(canvasMentionArgs, canvasMentionSubscription, i) : null, [canvasMentionArgs, canvasMentionSubscription, i]);
  if (l) {
    l.livegraphClient = t;
    return new u(l);
  }
}
export function $$h0() {
  let e = GH();
  if (!e) throw Error(H5);
  return e.api.canvasMentionReceipts ?? void 0;
}
export const fr = $$h0;
export const ih = $$d1;
export const pf = $$m2;