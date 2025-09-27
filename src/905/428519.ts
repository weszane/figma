import { useState, useEffect } from "react";
import { WorkerFuseSearch } from "../905/81982";
let a = [{
  name: "message",
  weight: .9
}, {
  name: "author.handle",
  weight: .4
}];
let s = {
  threshold: .1,
  tokenize: !0,
  matchAllTokens: !0,
  shouldSort: !0
};
export function $$o0(e) {
  let [t] = useState(() => new WorkerFuseSearch({
    keys: a,
    ...s
  }));
  useEffect(() => {
    let i = function (e) {
      if ("loaded" !== e.status) return [];
      let t = [];
      e.data.forEach(e => e.comments.forEach(e => t.push(e)));
      return t.map(e => {
        let t = {
          id: e.user.id,
          handle: e.user.handle
        };
        let i = e.message_meta.map(e => e.t || e.user_annotated?.handle || "").join(" ");
        return {
          id: e.id,
          author: t,
          message: i,
          parentId: e.parent_id || null
        };
      });
    }(e);
    t.set(i);
  }, [e, t]);
  return t;
}
export const kC = $$o0;