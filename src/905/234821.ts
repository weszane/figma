import { createContext, useContext, useState, useEffect, useMemo } from "react";
import { ServiceCategories } from "../905/165054";
import { getFeatureFlags } from "../905/601108";
import { splitEmojiAndSkinTone } from "../905/403166";
import { Xm } from "../905/723791";
import { reportError } from "../905/11";
import { FileWithCommentsAndReactions } from "../figma_app/43951";
let $$c3 = "You are trying to use comments functionality but didn't wire a provider for comments";
let u = createContext(void 0);
let $$p8 = u.Provider;
export function $$m2() {
  let e = useContext(u);
  let [t, i] = useState(null);
  getFeatureFlags().usecommentscontext_warn_no_provider && null === t && void 0 === e && i(Error("useCommentsContext called outside of a LoadedCommentsContextProvider"));
  useEffect(() => {
    t && reportError(ServiceCategories.WAYFINDING, t);
  }, [t]);
  return e;
}
let h = {};
export function $$g7() {
  return function (e, t) {
    let i = useMemo(() => e?.status !== "loaded" ? h : t(e.data), [e, t]);
    let r = e?.status || "loading";
    let a = e?.errors || [];
    return useMemo(() => i === h || "loading" === r ? Xm() : "errors" === r ? {
      status: r,
      data: null,
      errors: a
    } : {
      status: "loaded",
      errors: a,
      data: i
    }, [r, a, i]);
  }($$m2(), e => e.file?.currentUserFileFollower || null);
}
export function $$f10() {
  let e = $$m2();
  return !!e && e.isUnresolvedLoaded;
}
export function $$_5() {
  let e = $$m2();
  return !!e && e.isUnresolvedLoaded && e.isResolvedLoaded;
}
export function $$A11() {
  let e = $$m2();
  return e ? e.threads : Xm();
}
export function $$y1(e) {
  let t = $$m2();
  return useMemo(() => {
    if (!t) throw Error($$c3);
    if ("loaded" !== t.status || !t.data || !t.api.reactionsApi) return 0;
    let i = t.api.reactionsApi?.getReactions(e);
    return i?.length || 0;
  }, [e, t]);
}
export function $$b6(e, t) {
  let i = $$m2();
  return useMemo(() => {
    if (!i) throw Error($$c3);
    return "loaded" === i.status && i.data ? {
      status: "loaded",
      data: function (e, t) {
        if (!t) return {
          typed: [],
          users: [],
          yours: 0,
          total: 0
        };
        let i = {};
        return t.sort((e, t) => e.createdAt.getTime() - t.createdAt.getTime()).reduce((t, n) => {
          let [r, a] = splitEmojiAndSkinTone(n.emoji);
          t.total++;
          let o = i[r];
          if (!o) {
            let e = {
              count: 0,
              selected: !1,
              users: [],
              emoji: r,
              skinTonesToUsers: {}
            };
            t.typed.push(e);
            o = e;
            i[r] = e;
          }
          let l = {
            id: n.user.id,
            handle: n.user.handle,
            img_url: n.user.imgUrl
          };
          null !== a && (void 0 === o.skinTonesToUsers[a] && (o.skinTonesToUsers[a] = []), o.skinTonesToUsers[a].push(l));
          o.count++;
          o.users.push(l);
          o.selected = o.selected || n.userId === e;
          return t;
        }, {
          typed: [],
          yours: 0,
          total: 0,
          users: []
        });
      }(t, i.api.reactionsApi?.getReactions(e)),
      errors: i.errors
    } : Xm();
  }, [e, t, i]);
}
export function $$v4() {
  let e = $$m2();
  if (!e) throw Error($$c3);
  return e.api;
}
export function $$I9() {
  return function (e) {
    if ("loaded" !== e.status) return 0;
    let t = 0;
    for (let i of e.data) if ((i.anchored || i.isCanvasMention) && !i.comments[0].resolved_at) for (let e of i.comments) e.isUnread && t++;
    return t;
  }($$A11());
}
export const $J = FileWithCommentsAndReactions;
export const AK = $$y1;
export const GH = $$m2;
export const H5 = $$c3;
export const I_ = $$v4;
export const Le = $$_5;
export const Tv = $$b6;
export const jp = $$g7;
export const kR = $$p8;
export const n6 = $$I9;
export const qN = $$f10;
export const wq = $$A11;
