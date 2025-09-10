import { useState, useEffect, useMemo } from "react";
import { deepEqual } from "../905/382883";
import { getLivegraphClient } from "../figma_app/288654";
import { y } from "../figma_app/705249";
import { selectCurrentUser } from "../905/372672";
class l {
  constructor(e, t, i) {
    this.args = e;
    this.subscription = t;
    this.user = i;
    this.livegraphClient = null;
  }
}
class d {
  constructor(e) {
    this.client = e;
  }
  getReactionsForPost(e) {
    if ("loaded" !== this.client.subscription.status) throw Error("Unable to get reaction for unloaded subscription");
    let t = this.client.subscription.data.file;
    if (!t) throw Error("Unable to get reaction for unloaded subscription");
    let i = t.feedPosts.find(t => t.publicUuid === e);
    if (!i) throw Error("Unable to find post");
    let n = {};
    for (let e of i.comments) n[e.id] = e.reactions;
    return {
      postReactions: i.reactions,
      commentReactions: n
    };
  }
}
export function $$c0(e) {
  let t = getLivegraphClient();
  let i = selectCurrentUser();
  let {
    args,
    subscription
  } = e;
  let [p, m] = useState(() => {
    if (i) return new l(args, subscription, i);
  });
  useEffect(() => {
    if (!y() || !i) {
      m(void 0);
      return;
    }
    if (!p || !deepEqual(p.args, args)) {
      m(new l(args, subscription, i));
      return;
    }
  }, [p, args, subscription, i, t]);
  p && (i && (p.user = i), p.subscription = subscription, p.livegraphClient = t);
  return useMemo(() => p ? {
    reactionsApi: new d(p)
  } : {}, [p]);
}
export const r = $$c0;