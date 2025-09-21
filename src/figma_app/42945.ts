import { jsx } from "react/jsx-runtime";
import { createContext, useState, useMemo, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppStateTsApi } from "../figma_app/763686";
import { defaultSessionLocalIDString } from "../905/871411";
import { getSingletonSceneGraph } from "../905/700578";
import d from "../vendor/128080";
import { emojiPresentationRegex, nativeToShortcode } from "../905/403166";
import { getI18nString } from "../905/303541";
import { WJ } from "../figma_app/379850";
import { useDevModeFocusId } from "../figma_app/88239";
import { nL, U3, RO } from "../figma_app/770088";
import { setCommentsActiveFeedType } from "../figma_app/530167";
import { setShowResolved } from "../figma_app/703138";
import { wq } from "../905/234821";
import { F$ } from "../figma_app/12220";
import { kC } from "../905/428519";
import { useIsCommunityHubView } from "../figma_app/740025";
import { getUserId } from "../905/372672";
import { getObservableValue } from "../figma_app/84367";
import { ThreadType } from "../905/380385";
import { CommentTabType } from "../figma_app/45218";
import { Ld } from "../905/301347";
import { mW } from "../905/123443";
var c = d;
let C = new Set([]);
export function $$w0(e) {
  return {
    creationDate: getI18nString("comments.sort_by_date"),
    recent: getI18nString("comments.sort_by_last_action"),
    unread: getI18nString("comments.sort_by_unread"),
    slide: getI18nString("comments.sort_by_slide"),
    asset: getI18nString("comments.sort_by_asset")
  }[e];
}
let O = (e, t) => Date.parse(t.comments[0].created_at) - Date.parse(e.comments[0].created_at);
let R = (e, t) => 0;
let L = {
  creationDate: O,
  recent: (e, t) => Date.parse(t.lastRepliedAt || t.comments[t.comments.length - 1].created_at) - Date.parse(e.lastRepliedAt || e.comments[e.comments.length - 1].created_at),
  unread: (e, t) => {
    let r = Number(e.comments.some(e => e.isUnread));
    let n = Number(t.comments.some(e => e.isUnread));
    return r === n ? O(e, t) : n - r;
  },
  slide: R,
  asset: R
};
export function $$P1(e) {
  return {
    resolved: getI18nString("comments.show_resolved_comments"),
    yours: getI18nString("comments.only_your_threads"),
    currentPage: getI18nString("comments.only_current_page"),
    currentSlide: getI18nString("comments.only_current_slide"),
    currentAsset: getI18nString("comments.only_current_asset"),
    currentTest: getI18nString("litmus.comments.only_current_test"),
    currentBuild: getI18nString("litmus.comments.only_current_build")
  }[e];
}
let D = e => !e.comments[0].resolved_at;
let k = e => e.sidebarItemType === ThreadType.COMMENT_THREAD;
let M = e => e.sidebarItemType === ThreadType.FEED_POST;
let F = {
  currentPage: !1,
  currentNode: !1,
  currentSlide: !1,
  currentDevModeFocus: !1,
  currentAsset: !1,
  currentTest: !1,
  currentBuild: !1
};
export function $$j2(e) {
  return {
    commentsOnly: getI18nString("comments.only_comments"),
    postsOnly: getI18nString("comments.only_posts")
  }[e];
}
export let $$U6 = {
  postsOnly: [mW.RESOLVED],
  all: [],
  commentsOnly: []
};
async function B(e, t) {
  if (t) {
    let r = t.replace(emojiPresentationRegex, nativeToShortcode);
    return await e.search(r).then(e => new Set(e.map(e => e.item.parentId || e.item.id)));
  }
  return C;
}
export let $$G3 = createContext({});
export function $$V5(e) {
  let t = wq();
  let r = useDispatch();
  let d = useIsCommunityHubView();
  let u = useSelector(e => e.comments.showResolved);
  let p = useSelector(e => e.comments.showOnlyParticipating);
  let v = useSelector(e => e.mirror.appModel.currentPage);
  let C = e.currentNode || v;
  let w = getUserId() || void 0;
  let O = useSelector(e => e.selectedView.commentThreadId);
  let R = getObservableValue(AppStateTsApi?.singleSlideView().focusedNodeId, defaultSessionLocalIDString);
  let P = getObservableValue(AppStateTsApi?.cooperFocusView().focusedNodeId, defaultSessionLocalIDString);
  let j = useDevModeFocusId();
  let V = Ld();
  let [z, W] = useState("creationDate");
  let [K, Y] = useState({
    ...F,
    resolved: !u,
    yours: p,
    currentDevModeFocus: !!j,
    ...e.initialFilterState
  });
  let [$, X] = useState("all");
  let [q, J] = useState("");
  let [Z, Q] = useState(null);
  let ee = kC(t);
  let et = useMemo(() => ({
    resolved: D,
    yours: e => w && e.comments.some(e => e.user_id === w || F$(e).includes(w)) || !1,
    currentPage: e => v && e.page === v || !1,
    currentNode: e => {
      let t = e.comments[0].client_meta;
      return !!t?.in_frame && t.node_id === C;
    },
    currentSlide: e => {
      let t = e.comments[0].client_meta?.node_id;
      let r = t ? getSingletonSceneGraph().get(t) : void 0;
      let n = r ? r.containingSlideId : defaultSessionLocalIDString;
      return R === defaultSessionLocalIDString || n === defaultSessionLocalIDString || n === R;
    },
    currentDevModeFocus: e => {
      let t = j ? getSingletonSceneGraph().get(j) : null;
      if (!t) return !0;
      let r = e.comments[0]?.client_meta?.node_id;
      let n = r ? getSingletonSceneGraph().get(r) : null;
      return WJ(t, n);
    },
    currentAsset: e => {
      let t = e.comments[0].client_meta?.node_id;
      let r = t ? getSingletonSceneGraph().get(t) : void 0;
      let n = r ? r.containingCooperFrameId() : defaultSessionLocalIDString;
      return P === defaultSessionLocalIDString || n === defaultSessionLocalIDString || n === P;
    },
    currentTest: () => !0,
    currentBuild: () => !0
  }), [w, v, C, R, j, P]);
  let er = useMemo(() => ({
    all: () => !0,
    commentsOnly: k,
    postsOnly: M
  }), []);
  let en = useCallback(e => {
    J(e);
  }, []);
  let ei = useCallback(e => {
    r(nL({
      activeSort: e
    }));
    W(e);
  }, [r]);
  let ea = useCallback(e => {
    "resolved" === e && (r(U3({
      showResolved: K.resolved
    })), d && r(setShowResolved(K.resolved)));
    "yours" === e && (r(RO({
      showOnlyParticipating: !K.yours
    })), d && r(setCommentsActiveFeedType(K.yours ? CommentTabType.ALL : CommentTabType.ME)));
    Y(t => (t[e] = !t[e], {
      ...t
    }));
  }, [r, K, d]);
  let es = useMemo(() => {
    let e = new Set();
    for (let t of Object.values(mW)) K[t] && e.add(t);
    return e;
  }, [K]);
  let eo = useCallback(e => {
    X(e);
  }, []);
  useEffect(() => {
    $$U6[$].forEach(e => {
      $$H4(es, e) && ea(e);
    });
  }, [$, es, ea]);
  useEffect(() => {
    q ? B(ee, q).then(e => {
      c()(Z, e) || Q(e);
    }) : Q(null);
  }, [t, q, Z, ee]);
  let el = useMemo(() => ({
    ...L,
    ...V
  }), [V]);
  let ed = useMemo(() => function (e, t, r, n, i, a, s, o) {
    if ("loaded" !== e.status) return e;
    let l = [...e.data];
    for (let e of (o && (l = l.filter(e => o.has(e.id))), n)) l = l.filter(a[e]);
    l = l.filter(s[r]);
    return {
      ...e,
      data: l.sort(i[t])
    };
  }(t, z, $, es, el, et, er, Z), [t, z, $, es, el, et, er, Z]);
  let ec = useMemo(() => ({
    setSort: ei,
    toggleFilter: ea,
    setMode: eo,
    setQuery: en
  }), [en, ei, ea, eo]);
  let eu = useMemo(() => ({
    activeQuery: q,
    activeSort: z,
    activeMode: $,
    activeFilters: es,
    threads: t,
    filteredThreads: ed,
    filteredSidebarItems: ed,
    threadManager: ec
  }), [q, z, $, es, t, ed, ec]);
  let ep = useMemo(() => {
    if (t && "loaded" === t.status) return t.data.find(e => e.id === O);
  }, [O, t]);
  useEffect(() => {
    ep && ep.comments[0].resolved_at && K.resolved && ea("resolved");
  }, [K, ep, ea]);
  useEffect(() => {
    Y(e => ({
      ...e,
      currentDevModeFocus: !!j
    }));
  }, [j, Y]);
  return jsx($$G3.Provider, {
    value: eu,
    children: e.children
  });
}
export function $$H4(e, t) {
  return t === mW.RESOLVED ? !e.has(t) : e.has(t);
}
export const L9 = $$w0;
export const T4 = $$P1;
export const ek = $$j2;
export const hh = $$G3;
export const oS = $$H4;
export const pO = $$V5;
export const vO = $$U6;