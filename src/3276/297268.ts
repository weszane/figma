import { jsxs, jsx } from "react/jsx-runtime";
import { memo, useContext, useRef, useState, useEffect, useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { throwTypeError } from "../figma_app/465776";
import { ServiceCategories as _$$e } from "../905/165054";
import { DesignGraphElements, AppStateTsApi, LayoutTabType, UserActionState } from "../figma_app/763686";
import { useAtomWithSubscription } from "../figma_app/27355";
import c from "../vendor/635";
import { useDebouncedCallback } from "use-debounce";
import { trackFileEventWithUser } from "../figma_app/901889";
import { useLatestRef } from "../figma_app/922077";
import { reportError } from "../905/11";
import { Point } from "../905/736624";
import { WN } from "../figma_app/638601";
import { getI18nString } from "../905/303541";
import { wg, RP } from "../figma_app/770088";
import { showDropdownThunk } from "../905/929976";
import { qN } from "../905/234821";
import { Z7 } from "../figma_app/8833";
import { U6 } from "../figma_app/591738";
import { isUserNotLoggedInAndEditorSupported } from "../figma_app/564183";
import { Zz } from "../figma_app/12220";
import { E as _$$E } from "../905/617605";
import { getNudgeAmounts } from "../figma_app/740163";
import { Z as _$$Z } from "../905/104740";
import { useViewportWithDelta, viewportToScreen, addRectOffset, getBasicViewportRect, useFullscreenViewportUpdates } from "../figma_app/62612";
import { BI } from "../figma_app/546509";
import { selectCurrentUser } from "../905/372672";
import { o3, nt } from "../905/226610";
import { getObservableValue } from "../figma_app/84367";
import { viewportNavigatorContext } from "../figma_app/298911";
import { NEW_COMMENT_ID, ThreadType } from "../905/380385";
import { v as _$$v } from "../905/99004";
import { s as _$$s } from "../905/518538";
import { R as _$$R } from "../905/780757";
import { H as _$$H, g as _$$g } from "../3276/441754";
import { F_ } from "../905/748636";
import { iX } from "../905/415545";
import { UU, V_ } from "../905/807385";
import { ue } from "../af221b13/476940";
import { u5 } from "../905/936492";
import { XC } from "../905/512783";
import { n as _$$n } from "../3276/582222";
import { J as _$$J } from "../3276/853301";
import { Z5 } from "../figma_app/582377";
import { Ao, c4 } from "../figma_app/70421";
import { BK, x5, vB } from "../3276/677176";
import { Zb, ux, iZ as _$$iZ } from "../905/29425";
import { p as _$$p } from "../figma_app/372802";
var m = c;
var J = (e => (e[e.Gradual = 0] = "Gradual", e[e.Jump = 1] = "Jump", e))(J || {});
let ee = XC.getPinSize(3);
let et = Math.max(u5, ee.width, ee.height);
let en = e => 10 * Math.round(100 * e / 10);
export function $$eo1(e, t, n) {
  let o = n;
  let a = t * n;
  let i = et + _$$H(e, n);
  a < 3 * i && (o = 3 * i * n / a);
  return o;
}
export function $$ea2({
  config: e,
  clusterLocation: t,
  pins: n,
  currentViewport: o
}) {
  let a = m()(n, e => Math.max(Math.abs(e.x - t.x), Math.abs(e.y - t.y)));
  let i = Math.abs(a.x - t.x);
  let s = Math.abs(a.y - t.y);
  let r = i > s ? "width" : "height";
  let l = Math.max(i, s);
  let d = e.clusterClickResultViewportPercentage / 100;
  let c = o[r] * d / (2 * l);
  let u = $$eo1(e, l, c);
  u / o.zoomScale < 1.5 && (u *= 1.5);
  return Math.min(u, e.minZoomPercentage / 100 + .5);
}
let ei = [DesignGraphElements.COMMENTS, DesignGraphElements.SELECT, DesignGraphElements.SCALE, DesignGraphElements.HAND, DesignGraphElements.TYPE];
let es = (e, t, n, o, a, i) => {
  let {
    threads
  } = e;
  let r = threads.map(e => o(e));
  let l = threads.map(e => {
    let t = e.comments[0].client_meta;
    return t?.in_frame ? t.node_id : void 0;
  });
  let d = new Map();
  for (let e of r) for (let t of e.avatars) d.has(t.avatar_user_id) ? (d.get(t.avatar_user_id).num_unread_comments += t.num_unread_comments, d.get(t.avatar_user_id).num_comments += t.num_comments) : d.set(t.avatar_user_id, t);
  let c = 1 === threads.length;
  return {
    id: c ? threads[0].id : Ao(e, threads.length),
    x: e.x,
    y: e.y,
    pins: r,
    isUnread: r.some(e => e.isUnread),
    avatarMap: d,
    onClick: a(e, r),
    anchoredNode: l.every(e => e === l[0]) ? l[0] : void 0,
    isPinnedToFile: r.some(e => e.isPinnedToFile),
    isSinglePin: c,
    cluster: e,
    onKeyDown: i(e, r)
  };
};
"customElements" in window && customElements.define(Zb.desiredElementName, Zb);
let er = memo(function (e) {
  let t = !!e.activeThread || e.threads.length > 0;
  let n = selectCurrentUser();
  let c = _$$s();
  let m = Z5();
  let P = useDispatch();
  let T = useContext(viewportNavigatorContext);
  let z = useRef(null);
  let J = useSelector(e => e.mirror.appModel.currentTool);
  let ee = getObservableValue(AppStateTsApi?.editorState().handToolTemporarilyEnabled, !1);
  let et = BI();
  let eo = e.activeThread?.id === NEW_COMMENT_ID;
  let er = eo ? null : e.activeThread?.id || null;
  let el = useSelector(e => e.comments.emphasizedPinIds);
  let {
    zoomScale,
    deltaOffsetX,
    deltaOffsetY,
    deltaZoomScale
  } = useViewportWithDelta({
    subscribeToUpdates_expensive: t
  });
  let {
    requestToDeselectCommentPin
  } = e;
  let [ef, e_] = useState(!1);
  let eg = qN();
  let ev = isUserNotLoggedInAndEditorSupported();
  let ex = WN();
  let [eb, ey] = useState(void 0);
  let [eC, ew] = useState(!1);
  let ej = useAtomWithSubscription(ux);
  let ek = useRef(null);
  let eP = useAtomWithSubscription(_$$R);
  let eI = useSelector(e => ![LayoutTabType.DESIGN_LAYOUT, LayoutTabType.WHITEBOARD_LAYOUT, LayoutTabType.HISTORY, LayoutTabType.PREVIEW, LayoutTabType.COMMENTS, LayoutTabType.DEV_HANDOFF, LayoutTabType.SLIDE_LAYOUT, LayoutTabType.SITES_LAYOUT].includes(e.mirror.appModel.activeCanvasEditModeType) || e.mirror.appModel.activeUserAction !== UserActionState.DEFAULT);
  let eT = useSelector(e => e.mirror.appModel.activeCanvasEditModeType === LayoutTabType.COMMENTS);
  let eM = eI && (!et || et?.shouldOptimizeForIpadApp && et?.shouldFadeCommentsDuringEdit) || J === DesignGraphElements.MULTISELECT;
  let [eE, eN] = useState({
    viewport: T.getViewportInfo(),
    hasJumped: !1
  });
  let eS = useRef(e.threads);
  useEffect(() => {
    eS.current = e.threads;
  }, [e.threads]);
  let eD = useCallback(e => eS.current?.find(t => t.id === e) || null, [eS]);
  let eA = useSelector(e => e.mirror.appModel.activeUserAction);
  useEffect(() => {
    let e = z.current;
    e && (e.shouldDisablePointerEvents = !ev && c?.disableCommentsWhenHandToolEnabled && J === DesignGraphElements.HAND || ee || void 0 !== eA && eA !== UserActionState.DEFAULT || J === DesignGraphElements.MULTISELECT);
  }, [z, J, ee, eA, c?.disableCommentsWhenHandToolEnabled, ev]);
  let eL = e.dragDisabledOverride || !ei.includes(J);
  let eR = BK(eD, e.pageId, e.setClientMeta, eL, e.requestToSelectCommentPin, eP);
  let eO = x5(eL);
  let eF = useMemo(() => new Set(e.threads.filter(e => eO(e)).map(e => e.id)), [eO, e.threads]);
  let eB = useCallback(e => {
    P(wg({
      threadId: e
    }));
    let t = eD(e);
    t && T.setHovering(t.canvasPosition);
  }, [T, P, eD]);
  let eU = useCallback(e => {
    P(RP({
      threadId: e
    }));
    T.setHovering(null);
  }, [T, P]);
  let eH = trackFileEventWithUser();
  let eV = useCallback((e, t) => ev ? () => Promise.resolve(ex("COMMENT_PIN_CLICK")) : async () => {
    eH("Comment Cluster Clicked", {
      clusterSize: t.length,
      commentThreadIds: t.map(e => e.id)
    });
    let n = $$ea2({
      config: m,
      clusterLocation: e,
      pins: t,
      currentViewport: T.getViewportInfo()
    });
    let o = T.navigateTo(e, n);
    requestToDeselectCommentPin && requestToDeselectCommentPin();
    await o;
  }, [m, T, eH, requestToDeselectCommentPin, ev, ex]);
  let eq = useCallback((e, t) => {
    t.preventDefault();
    t.stopPropagation();
    let n = eD(e);
    if (!n) return;
    let o = T.getViewportInfo();
    let a = z.current.getPinViewportRect(n.id);
    let i = viewportToScreen(o, a);
    let s = {
      x: i.x + a.height / 2,
      y: i.y - a.width / 2,
      height: 0,
      width: 0
    };
    let r = addRectOffset(s, o);
    P(showDropdownThunk({
      type: Z7,
      data: {
        thread: n,
        pinClientRect: r
      }
    }));
  }, [P, T, eD]);
  let ez = z.current;
  let eZ = getBasicViewportRect();
  let e$ = useCallback(e => {
    if (ez) {
      if ("function" != typeof ez.onViewportUpdate) {
        reportError(_$$e.WAYFINDING, Error("pinRenderer.onViewportUpdate is not a function"), {
          extra: {
            pinRendererProperties: Object.getOwnPropertyNames(ez)
          }
        });
        return;
      }
      ez.onViewportUpdate(e);
    }
  }, [ez]);
  useEffect(() => {
    t && e$(T.getViewportInfo());
  }, [e$, t, T]);
  useFullscreenViewportUpdates({
    subscribeToUpdates_expensive: t
  }, e$);
  useEffect(() => {
    ez && (ez.bounds = {
      min: {
        x: eZ.x,
        y: eZ.y
      },
      max: {
        x: eZ.x + eZ.width,
        y: eZ.y + eZ.height
      }
    }, ez.onElementClicked = eR.onPinClicked, ez.onElementDragEnd = eR.onDragEnd, ez.onElementDragMove = eR.onDragUpdate, ez.onElementDragStart = eR.onDragStart, ez.onElementContextMenu = eq);
  }, [eq, ez, eR, eZ]);
  let eK = useCallback(e => {
    let t;
    let o = c4(e.comments);
    let a = e.comments.slice(1).reduce((e, t) => t.isUnread ? e + 1 : e, 0);
    if (e.boundingBoxAnchorCanvasPosition) t = e.boundingBoxAnchorCanvasPosition;else if (e.comments[0].client_meta?.selection_box_anchor && (t = e.comments[0].client_meta.selection_box_anchor, e.comments[0].client_meta?.in_frame)) {
      let n = e.comments[0].client_meta;
      let o = Point.subtract(t, n);
      t = Point.add(e.canvasPosition, o);
    }
    let i = !!e.isPendingFromSinatra;
    let r = {
      id: e.id,
      x: e.canvasPosition.x,
      y: e.canvasPosition.y,
      isOurs: e.comments[0].user_id === n?.id,
      pending: i,
      avatars: o,
      createdAt: new Date(Date.parse(e.comments[0].created_at)),
      onMouseEnter: () => eB(e.id),
      onMouseLeave: () => eU(e.id),
      previewMessageMeta: e.comments[0].message_meta,
      isUnread: e.comments[0].isUnread || a > 0,
      numUnreadReplies: a,
      isDraggable: eF.has(e.id) && !e.boundingBoxAnchorCanvasPosition,
      isResolved: !!e.comments[0].resolved_at,
      label: e.comments[0].order_id || "",
      updatedAt: e.comments[e.comments.length - 1].created_at,
      selectionBoxAnchor: t,
      otherBoundingBoxes: e.otherBoundingBoxes,
      numAttachments: e.comments.map(e => e.attachments?.length || 0).reduce((e, t) => e + t, 0),
      isPinnedToFile: U6() ? !!e.commentPin : void 0
    };
    return e.sidebarItemType === ThreadType.COMMENT_THREAD ? {
      ...r,
      type: ThreadType.COMMENT_THREAD
    } : e.sidebarItemType === ThreadType.FEED_POST ? {
      ...r,
      type: ThreadType.FEED_POST,
      feedPostTitle: e.feedPostTitle,
      pinVerticalStagger: e.pinVerticalStagger
    } : e.sidebarItemType === ThreadType.LITMUS_COMMENT_THREAD ? {
      ...r,
      type: ThreadType.LITMUS_COMMENT_THREAD
    } : void throwTypeError(e);
  }, [n, eF, eB, eU]);
  let eW = useMemo(() => e.threads.reduce((e, t) => {
    let {
      canvasPosition
    } = t;
    canvasPosition && e.push({
      ...t,
      canvasPosition
    });
    return e;
  }, []), [e.threads]);
  let [eG, eQ] = useState(new Map());
  let eX = useCallback((e, t) => {
    eQ(n => new Map(n.set(e, t)));
  }, []);
  let eY = useLatestRef(eW);
  let eJ = eW !== eY && void 0 !== eY;
  useEffect(() => {
    eJ && eQ(new Map());
  }, [eJ, eW]);
  let e0 = useLatestRef(eg);
  let [e1, e2] = useState(() => {
    if (eg) return Zz(e.threads);
  });
  useEffect(() => {
    void 0 === e1 && !e0 && eg && Zz(e.threads) && e2(!0);
  }, [e0, eg, e.threads, e1]);
  useEffect(() => {
    eJ && e1 && (e.threads.some(e => null != e.commentPin && e.comments.some(e => e.isUnread)) || e2(!1));
  }, [e1, eJ, e.threads]);
  let e5 = (() => {
    let e = o3(nt.commentsA11y);
    return useCallback((t, n) => o => {
      e && "Enter" === o.key && eV(t, n)().then(() => {
        z.current.focusOneOf(new Set(t.threads.map(e => e.id)));
      });
    }, [e]);
  })();
  let e3 = useCallback((e, t) => {
    let n = new Set(e.map(e => e.id));
    let o = en(t.zoomScale);
    let a = eG.get(o);
    if (a) {
      let e = a.map(e => es(e, t, c, eK, eV, e5));
      return new _$$n(e, n, t.zoomScale, e1);
    }
    {
      eX(o, a = _$$g(e, t, m));
      let i = a.map(e => es(e, t, c, eK, eV, e5));
      return new _$$n(i, n, t.zoomScale, e1);
    }
  }, [eG, e1, c, eK, eV, e5, m, eX]);
  let e4 = useCallback(e => {
    eN({
      viewport: T.getViewportInfo(),
      hasJumped: 1 === e
    });
  }, [T]);
  let e6 = useDebouncedCallback(e4, m.rebuildClustersZoomDelay);
  let e7 = useMemo(() => {
    let e = e3(eW, eE.viewport);
    e.applyInstant = eE.hasJumped;
    return e;
  }, [eW, eE, e3]);
  useEffect(() => {
    let e = eE.viewport.zoomScale;
    if (zoomScale === e) return;
    let t = z.current;
    e > zoomScale && t && (t.isZoomingOut = !0);
    let {
      width,
      height
    } = T.getViewportInfo();
    Math.abs(deltaZoomScale) / zoomScale > .45 || Math.abs(deltaOffsetX) / width > .95 || Math.abs(deltaOffsetY) / height > .95 ? e4(1) : e6(0);
  }, [T, deltaZoomScale, deltaOffsetX, deltaOffsetY, m.rebuildClustersZoomDelay, eE.viewport, zoomScale, ez, e6, e4]);
  let e8 = useCallback(e => {
    e_(null != e);
    z.current = e;
  }, []);
  useEffect(() => {
    if (z.current) {
      let e = z.current;
      if (ef) e.data = {
        clusters: e7,
        selectedPinId: er,
        emphasizedPinIds: el,
        dimUnselectedPins: !!eM
      };else {
        e.wrapperOffsetFn = e => T.getCommentsWrapperOffset(e);
        let t = T.getViewportInfo();
        e.initialViewport = t;
        e.data = {
          clusters: e7,
          selectedPinId: er,
          emphasizedPinIds: el,
          dimUnselectedPins: !!eM
        };
        e.clientConfig = c;
      }
    }
  }, [T, er, el, ef, e7, c, eM]);
  let e9 = !!e.activeThread;
  let te = e.activeThread ? c4(e.activeThread.comments).length : 1;
  let {
    setActivePinSize
  } = e;
  useEffect(() => {
    if (!e9) {
      setActivePinSize(null);
      return;
    }
    if (eo) {
      let e = XC.getPinSize(1);
      setActivePinSize({
        height: e.height,
        width: e.width
      });
      return;
    }
    setActivePinSize({
      width: XC.getPinSize(te).width,
      height: 0
    });
  }, [setActivePinSize, e9, eo, te]);
  let tn = () => {
    let e;
    if (!z.current) return;
    let t = z.current.shadowRoot;
    let n = t?.querySelector(`[data-onboarding-key="${UU}"]`);
    if (!n) return;
    let o = ek?.current?.getBoundingClientRect();
    let a = o?.height;
    let i = n.getBoundingClientRect();
    let s = V_ / 2;
    let r = i.top < window.innerHeight / 3;
    let l = i.top - 10;
    let d = i.top + 10;
    if (a) {
      let t = i.top + 10 - a;
      e = r ? l : t;
    } else e = d;
    ey({
      top: e,
      left: i.left - V_ - 10,
      pointerOffset: s,
      pointerPosition: F_.RIGHT_BODY
    });
  };
  useEffect(() => {
    ej && tn();
  }, [ej]);
  useEffect(() => {
    tn();
  }, [eC]);
  useEffect(() => {
    ey(void 0);
  }, [deltaOffsetX, deltaOffsetY]);
  let to = useMemo(() => {
    if (eb) return {
      targetLocation: eb,
      innerRef: ek,
      setIsShowingOverlay: ew
    };
  }, [eb, ek, ew]);
  let ta = o3(nt.commentsA11y);
  let ti = useCallback(() => {
    let e = _$$iZ?.getFocusedClusterId();
    return e ? e7.getById(e) : null;
  }, [e7]);
  let ts = getNudgeAmounts();
  let tr = function (e) {
    let t = ed();
    return useCallback(n => {
      let o = _$$iZ?.getFocusedClusterId();
      let a = e.all().map(e => e.id);
      let i = (a.findIndex(e => e === o) + (1 === n ? -1 : 1) + a.length) % a.length;
      let s = e.all()[i];
      if (!s) return;
      let r = a[i];
      t(s.cluster)?.then(() => {
        _$$iZ?.focusPinById(r);
      });
    }, [e, t]);
  }(e7);
  let tl = vB(ti, e.pageId, e.setClientMeta);
  let td = useRef(null);
  let tc = useCallback(e => {
    let t = function (e) {
      switch (e.key) {
        case "ArrowDown":
          return {
            x: 0,
            y: 1
          };
        case "ArrowUp":
          return {
            x: 0,
            y: -1
          };
        case "ArrowLeft":
          return {
            x: -1,
            y: 0
          };
        case "ArrowRight":
          return {
            x: 1,
            y: 0
          };
        default:
          return null;
      }
    }(e);
    if (t && tl(Point.scale(e.shiftKey ? ts.bigNudgeAmount : ts.smallNudgeAmount, t))) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    "Tab" === e.key && (tr(e.shiftKey ? 1 : 0), e.preventDefault());
    !e9 && "Escape" === e.key && _$$iZ?.getFocusedClusterId() && td.current?.focus();
  }, [tl, tr, ts, e9]);
  return jsxs(_$$p, {
    children: [ej && !!to && jsx(ue, {
      registrationOrigin: iX.NEW_COMMENT,
      fixedPositionProps: to
    }), ta ? jsxs(_$$v, {
      isAccessible: eT,
      role: "region",
      "aria-label": getI18nString("comments.accessibility_pin_region_name"),
      children: [jsx("clustered-pins", {
        onKeyDown: tc,
        ref: e8
      }), jsx(_$$J, {
        ref: td
      })]
    }) : jsx("clustered-pins", {
      ref: e8
    })]
  });
});
var el = (e => (e[e.Forward = 0] = "Forward", e[e.Backward = 1] = "Backward", e))(el || {});
let ed = () => {
  let e = _$$Z();
  let t = useContext(viewportNavigatorContext);
  let n = useSelector(e => e.selectedView);
  return useCallback(o => e(_$$E(o.threads[0], t, n, !1, !0)), [e, t, n]);
};
let $$ec0 = memo(function (e) {
  return jsx(er, {
    activeThread: e.activeThread,
    dragDisabledOverride: e.dragDisabledOverride,
    isCommunity: e.isCommunity,
    pageId: e.pageId,
    requestToDeselectCommentPin: e.requestToDeselectCommentPin,
    requestToSelectCommentPin: e.requestToSelectCommentPin,
    setActivePinSize: e.setActivePinSize,
    setClientMeta: e.setClientMeta,
    threads: e.threads,
    viewportPositionFromClientPosition: e.viewportPositionFromClientPosition
  }, e.pageId);
});
export const IN = $$ec0;
export const ez = $$eo1;
export const xw = $$ea2;