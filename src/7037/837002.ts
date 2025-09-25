import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState, useEffect, useRef, useMemo, useCallback, Fragment as _$$Fragment } from "react";
import { throwTypeError } from "../figma_app/465776";
import a from "classnames";
import { _ as _$$_ } from "../vendor/853977";
import { parseColor } from "../figma_app/191804";
import { M as _$$M } from "../figma_app/749682";
import { pz } from "../figma_app/60079";
import { x as _$$x } from "../905/211326";
import { SvgComponent } from "../905/714743";
import { getI18nString, renderI18nText } from "../905/303541";
import { $ as _$$$ } from "../905/355181";
import { QUICKTIME_TYPES } from "../905/966582";
import { cM, aT } from "../905/530837";
import { KindEnum } from "../905/129884";
import { OQ, Zp } from "../905/462076";
import { m as _$$m } from "../905/561236";
import { dp, DH } from "../905/508893";
import { LoadingSpinner } from "../figma_app/858013";
import { buildViewerQueryParams } from "../figma_app/831696";
import { noop } from 'lodash-es';
import { atom, useAtomValueAndSetter, useAtomWithSubscription } from "../figma_app/27355";
import { useLatestRef } from "../figma_app/922077";
import { Fe, uz } from "../905/284552";
import { g as _$$g } from "../7037/183814";
import { A as _$$A } from "../svg/871455";
import { A as _$$A2 } from "../1617/954184";
import { A as _$$A3 } from "../1617/342635";
var d = a;
function b() {
  return jsxs("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    children: [jsx("path", {
      d: "M1 9C1 4.58172 4.58172 1 9 1C13.4183 1 17 4.58172 17 9C17 13.4183 13.4183 17 9 17C4.58172 17 1 13.4183 1 9Z",
      fill: "var(--color-icon)"
    }), jsx("path", {
      d: "M9 16.25C4.99594 16.25 1.75 13.0041 1.75 9H0.25C0.25 13.8325 4.16751 17.75 9 17.75V16.25ZM16.25 9C16.25 13.0041 13.0041 16.25 9 16.25V17.75C13.8325 17.75 17.75 13.8325 17.75 9H16.25ZM9 1.75C13.0041 1.75 16.25 4.99594 16.25 9H17.75C17.75 4.16751 13.8325 0.25 9 0.25V1.75ZM9 0.25C4.16751 0.25 0.25 4.16751 0.25 9H1.75C1.75 4.99594 4.99594 1.75 9 1.75V0.25Z",
      fill: "var(--color-icon-oninverse)"
    }), jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M9.1554 8.44833L11.6037 6L12.3108 6.7071L9.86251 9.15544L12.3108 11.6038L11.6037 12.3109L9.15541 9.86255L6.70711 12.3109L6 11.6038L8.4483 9.15544L6 6.70715L6.70711 6.00004L9.1554 8.44833Z",
      fill: "var(--color-icon-oninverse)"
    })]
  });
}
function P(e) {
  let [t, n] = useState();
  let [s, a] = useState(!0);
  useEffect(() => {
    let t = buildViewerQueryParams({
      hideUI: !0,
      disableDefaultKeyboardNav: !1,
      showProtoSidebar: !1,
      scalingInfo: {
        viewportScalingMode: "contain"
      },
      showHotspots: !0,
      inlinePreview: !1,
      startingPointNodeId: e.item.startingNodeId,
      nodeId: e.item.startingNodeId
    });
    let o = OQ(e.item, t);
    n(`${location.origin}/embed?embed_host=feed&url=${encodeURIComponent(o)}`);
  }, [e.item]);
  return jsxs("div", {
    style: {
      width: "100%",
      height: "100%",
      boxSizing: "border-box",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "black"
    },
    children: [s && jsx(LoadingSpinner, {}), t ? jsx("iframe", {
      title: "Prototype Viewer",
      style: s ? {
        width: 0,
        height: 0
      } : {
        width: "100%",
        height: "100%"
      },
      src: t,
      onLoad: () => a(!1)
    }) : null]
  });
}
let N = e => e.preventDefault();
let k = atom(null);
let M = atom(new Map());
let L = atom(null, (e, t, n) => {
  t(M, new Map(e(M).set(n.id, n.snapshot)));
});
let A = atom(new Set());
let D = atom(e => {
  let t = e(A);
  return 0 === t.size ? null : Array.from(t).pop() ?? null;
});
let R = atom(null);
function H(e) {
  let t = useRef(null);
  let [n, s, a] = _$$M();
  let r = useRef(null);
  let l = useRef(!1);
  let u = useRef(!1);
  let m = useRef(!1);
  let [f, _] = useAtomValueAndSetter(k);
  let [g, v] = useState();
  let C = useAtomValueAndSetter(M)[0];
  let b = useAtomValueAndSetter(L)[1];
  let [T, I] = useAtomValueAndSetter(A);
  let w = useAtomWithSubscription(D);
  let [P, H] = useAtomValueAndSetter(R);
  let B = f?.id === e.id;
  let W = e.source === Zp.TILE && !e.isThumbnail;
  let V = W && f?.isPreviewing;
  let z = !e.isThumbnail && s;
  let Y = W || e.isThumbnail;
  let Z = u.current;
  let {
    feedPostUuid
  } = e;
  let Q = QUICKTIME_TYPES.includes(e.videoContent.mediaType) && !!feedPostUuid;
  let X = useMemo(() => Q ? `/api/feed_posts/${feedPostUuid}/videos/${e.videoContent.videoFileUuid}/manifest` : e.videoContent.path, [Q, feedPostUuid, e.videoContent]);
  let K = useLatestRef(f);
  let $ = useLatestRef(e.videoContent.path);
  let J = useCallback((t, n = !1) => {
    e.isThumbnail || b({
      id: e.id,
      snapshot: {
        currentTime: n ? 0 : t.currentTime,
        ended: t.ended,
        paused: t.paused
      }
    });
  }, [b, e.id, e.isThumbnail]);
  let q = useCallback(() => {
    u.current = !0;
    let e = t.current;
    e && (e.muted = !0, e.play().catch(noop));
  }, []);
  let ee = useCallback(() => {
    let e = t.current;
    e && e.pause();
  }, []);
  let et = useCallback(() => {
    _({
      id: e.id,
      ref: t,
      feedPostUuid: e.feedPostUuid,
      src: e.videoContent.path,
      source: e.source,
      isPreviewing: u.current
    });
  }, [_, e.id, e.feedPostUuid, e.videoContent.path, e.source, u]);
  let en = useCallback(() => {
    if (!f) return;
    let n = t.current;
    if (n) {
      if (!B) {
        let t = f.feedPostUuid === e.feedPostUuid && f.src === e.videoContent.path;
        if (e.source === Zp.DETAIL_MODAL && f.source === Zp.TILE && t) {
          if (n) {
            if (f.ref?.current) {
              let e = f.ref.current;
              n.currentTime = e.ended ? 0 : e.currentTime;
              e.paused ? et() : n.play();
            } else {
              let e = F(f.feedPostUuid, f.src, Zp.TILE);
              let t = C.get(e);
              t && (n.currentTime = t.ended ? 0 : t.currentTime);
              et();
            }
          }
        } else if (e.source === Zp.TILE && f.source === Zp.DETAIL_MODAL && t) {
          if (n && !f.ref?.current) {
            let e = F(f.feedPostUuid, f.src, Zp.DETAIL_MODAL);
            let t = C.get(e);
            t && (n.currentTime = t.currentTime || 0);
            et();
          } else n.pause();
        } else if (n.paused) {
          let t = C.get(e.id);
          t && (n.currentTime = t.ended ? 0 : t.currentTime);
        } else n.pause();
      }
      if (B && C.has(e.id) && !f.ref?.current) {
        let n = C.get(e.id);
        if (t.current) {
          if (t.current.currentTime = n.ended ? 0 : n.currentTime, n.paused) return;
          t.current.play();
        }
      }
    }
  }, [f, e.id, e.source, C, et, e.feedPostUuid, e.videoContent.path, B]);
  let eo = useCallback(() => {
    let n = t.current;
    n && e.source === Zp.DETAIL_MODAL && !e.isThumbnail && n.play().catch(() => {
      n.muted = !0;
      n.play();
    });
  }, [e.isThumbnail, e.source]);
  let ei = useCallback(t => {
    let n = T.has(e.id);
    V && t.isIntersecting && !u.current && !n ? (q(), null != e.feedPostIdx && (null === P || P > e.feedPostIdx) && H(t => null != e.feedPostIdx && (null === t || t > e.feedPostIdx) ? e.feedPostIdx : t), I(t => {
      let n = new Set(t);
      n.add(e.id);
      return n;
    })) : !t.isIntersecting && n && (ee(), I(t => {
      let n = new Set(t);
      n.$$delete(e.id);
      return n;
    }), B && _(null));
  }, [q, ee, e.id, e.feedPostIdx, I, V, T, B, _, P, H]);
  _$$g(a, ei, {
    threshold: .9
  });
  useEffect(() => {
    V && w === e.id && q();
  }, [w, q, e.id, V]);
  useEffect(() => {
    let n = t.current;
    if (!n) return;
    let o = () => {
      et();
      J(n);
    };
    let i = () => {
      if (u.current) {
        u.current = !1;
        n.currentTime = 0;
      } else {
        let e = t.current;
        e && J(e);
      }
    };
    let s = () => {
      let e = t.current;
      if (e) {
        let t = e.duration - e.currentTime;
        t !== g && v(t);
      }
    };
    let a = () => {
      s();
    };
    let d = () => {
      !m.current && (m.current = !0, Y && t.current && (t.current.muted = !0), V && P === e.feedPostIdx && q());
    };
    n.addEventListener("play", o);
    n.addEventListener("pause", i);
    n.addEventListener("timeupdate", s);
    n.addEventListener("loadedmetadata", a);
    n.addEventListener("canplay", d);
    return () => {
      n.removeEventListener("play", o);
      n.removeEventListener("pause", i);
      n.removeEventListener("timeupdate", s);
      n.removeEventListener("loadedmetadata", a);
      n.removeEventListener("canplay", d);
    };
  }, [et, J, q, ee, u, g, Y, V, P, e.id, e.feedPostIdx]);
  useEffect(() => {
    let n = t.current;
    if (n) return () => {
      J(n, e.source === Zp.TILE);
    };
  }, [J, e.source]);
  useEffect(() => {
    l.current || (l.current = !0, async function () {
      window.VIDEOJS_NO_DYNAMIC_STYLE = !0;
      let n = await Fe();
      if (r.current) return;
      let o = t.current;
      e.isThumbnail ? o.style.objectFit = "cover" : (o.style.maxHeight = "100%", o.style.maxWidth = "100%");
      o.style.height = "100%";
      o.style.width = "100%";
      o.style.display = "flex";
      o.style.justifyContent = "center";
      o.style.alignItems = "center";
      r.current = n.videoJs(o, {
        muted: !1,
        controls: !1,
        controlBar: !1,
        bigPlayButton: !1,
        loadingSpinner: !1,
        errorDisplay: !1,
        textTrackSettings: !1,
        textTrackDisplay: !1,
        nativeTextTracks: !1
      }, () => {
        e.isThumbnail || e.source === Zp.TILE || o.setAttribute("controls", "true");
        e.source === Zp.TILE && o.classList.add("feed_video_player--hideFullscreenControl--C1EYT");
        uz(X, Q, r.current).then(() => {
          en();
        });
      });
    }());
  }, [e.isThumbnail, e.videoContent, e.source, Q, X, en]);
  useEffect(() => {
    r.current && $ !== e.videoContent.path && uz(X, Q, r.current).then(() => {
      en();
      et();
    });
  }, [en, e.videoContent, Q, X, $, et]);
  useEffect(() => {
    if (r.current && K && f) {
      if ("detail" === f.source && !f.ref?.current) {
        en();
        return;
      }
      K.id !== f.id && en();
    }
  }, [en, K, f]);
  let es = useCallback(() => {
    if (e.isThumbnail || e.source !== Zp.TILE || !t.current || void 0 === g || isNaN(g)) return null;
    let n = new Date(1e3 * g);
    return !n || isNaN(n.getTime()) ? null : jsxs(Fragment, {
      children: [jsx("div", {
        className: "feed_video_player--mediaBadgeV2--fvyMQ feed_post_content--mediaBadgeV2--7Akie feed_tile--feedPostHoverContainer--238j6",
        children: n.toLocaleString("en", {
          minute: "2-digit",
          second: "2-digit"
        })
      }), t.current.muted && jsx(SvgComponent, {
        svg: _$$A,
        className: "feed_video_player--mutedBadge--K8Mfa"
      })]
    });
  }, [e.isThumbnail, e.source, g]);
  return jsxs("div", {
    ref: n,
    className: d()("feed_video_player--videoContainer--L740O", e.isThumbnail && "feed_video_player--videoContainerThumbnail--p1UBT"),
    children: [jsx("video", {
      ref: t,
      style: {
        backgroundColor: "#000000"
      },
      onCanPlay: eo,
      onClick: e.source !== Zp.DETAIL_MODAL ? N : void 0,
      controls: z,
      loop: Z
    }), (!s || !z) && es()]
  });
}
function F(e, t, n) {
  return [e, t, n].join(":");
}
let B = "feed_post_content--mediaBadgeV2--7Akie feed_tile--feedPostHoverContainer--238j6";
let W = "feed_post_content--contentThumbnailsSectionInnerV2--26v-c";
let V = "feed_post_content--contentThumbnailsSectionInnerV2_vertical--ysuGr";
let z = "feed_post_content--contentThumbnailV2--o2ggD";
let Y = "feed_post_content--smallThumbnail--0trZ9";
let Z = "feed_post_content--wideThumbnail--FPYj1";
function X(e) {
  let t;
  switch (e.type) {
    case cM.NODE:
      t = e.nodeId;
      break;
    case cM.IMAGE:
      t = e.url;
      break;
    case cM.VIDEO:
      t = e.path;
      break;
    case cM.PROTOTYPE:
      t = e.startingNodeId;
      break;
    default:
      throw Error("unexpected content item type");
  }
  return `${e.type}:${t}`;
}
function K(e) {
  let [t, n] = useState(!e.isThumbnail && !e.usesPreviewImage);
  if (useEffect(() => {
    if (!e.imgUrl) return;
    let t = new Image();
    t.src = e.imgUrl;
    t.onload = () => {
      let e = t.width / t.height;
      n(t => t && Math.abs(e - dp) > .01);
    };
  }, [e.imgUrl]), null === e.imgUrl) return jsx("div", {
    children: getI18nString("fig_feed.could_not_load_preview_image")
  });
  let s = e.isThumbnail && e.thumbnailUrl ? e.thumbnailUrl : e.imgUrl;
  return jsxs(Fragment, {
    children: [e.showPreviewFacade && jsx("div", {
      className: "feed_post_content--previewFacadeOverlay--EXG86 feed_post_content--thumbnailOverlay--feEzZ",
      children: jsx(pz, {
        onClick: e.onUpdatePreviewImage,
        children: getI18nString("fig_feed.update_preview_image")
      })
    }), jsx("img", {
      src: s,
      alt: getI18nString("fig_feed.thumbnail_alt_text"),
      draggable: !1,
      className: d()("feed_post_content--itemImage--pGodc", e.isThumbnail && "feed_post_content--itemImageThumbnail--LBdlC", t && "feed_post_content--itemImagePadded--exY8B")
    }), e.isThumbnail ? null : "image/gif" === e.mediaType ? jsx("div", {
      className: B,
      children: getI18nString("fig_feed.gif")
    }) : null]
  });
}
function $(e) {
  let t = !!e.editPreviewOptions;
  return jsx("div", {
    className: "feed_post_content--zoomPanContainer--IGM49",
    children: e.contentItems.map((n, i) => {
      let s;
      e.editPreviewOptions?.applyToAllCallback && (s = t => e.editPreviewOptions.applyToAllCallback(t, X(n)));
      return jsx("div", {
        className: d()({
          "feed_post_content--zoomPan--T-44S": !0,
          "feed_post_content--zoomPanSelected--2QOfW": i === e.selectedIdx
        }),
        children: jsx(DH, {
          applyToAllCallback: s,
          disableReset: !!e.editPreviewOptions?.disableReset,
          enableSnapToGuidelines: t,
          enableZoomControls: e.source === Zp.DETAIL_MODAL,
          enableZoomKeyControls: i === e.selectedIdx && (e.source === Zp.DETAIL_MODAL || t),
          imageScale: t ? 1 : void 0,
          imageSrc: n.image_url,
          initialSnapshotState: e.editPreviewOptions?.initialSnapshotStates?.[X(n)],
          pageBackgroundColor: e.editPreviewOptions?.pageBackgroundColor || n.backgroundColor && parseColor(n.backgroundColor) || e.pageBackgroundColor && parseColor(e.pageBackgroundColor) || void 0,
          resetSnapshotState: e.editPreviewOptions?.selectedContentResetSnapshotState,
          setContentPreview: i === e.selectedIdx ? e.editPreviewOptions?.setContentPreview : void 0,
          shouldWheelPan: !0,
          shouldZoomToStart: !1,
          showEditPreviewControls: t
        }, `details::${n.image_url}`)
      }, i);
    })
  });
}
function J(e) {
  return jsx(P, {
    item: e.prototypeContent
  });
}
function q(e) {
  let t = !!e.editPreviewOptions;
  return jsx(DH, {
    applyToAllCallback: e.editPreviewOptions?.applyToAllCallback ? t => e.editPreviewOptions.applyToAllCallback(t, X(e.imageContent)) : void 0,
    disableReset: !!e.editPreviewOptions?.disableReset,
    enableSnapToGuidelines: t,
    enableZoomControls: e.source === Zp.DETAIL_MODAL,
    enableZoomKeyControls: e.source === Zp.DETAIL_MODAL || t,
    imageScale: 1,
    imageSrc: e.imageContent.url,
    initialSnapshotState: e.editPreviewOptions?.initialSnapshotStates?.[X(e.imageContent)],
    pageBackgroundColor: e.editPreviewOptions?.pageBackgroundColor || e.imageContent.backgroundColor && parseColor(e.imageContent.backgroundColor) || e.pageBackgroundColor && parseColor(e.pageBackgroundColor) || void 0,
    resetSnapshotState: e.editPreviewOptions?.selectedContentResetSnapshotState,
    setContentPreview: e.editPreviewOptions?.setContentPreview,
    shouldWheelPan: !0,
    shouldZoomToStart: !1,
    showEditPreviewControls: t
  }, `details::${e.imageContent.url}`);
}
function ee(e) {
  let t = F(e.feedPostUuid, e.videoContent.path, e.source);
  return jsx(H, {
    id: t,
    videoContent: e.videoContent,
    isThumbnail: e.isThumbnail,
    feedPostUuid: e.feedPostUuid,
    source: e.source
  });
}
function et(e) {
  return e.isThumbnail ? jsx("div", {
    children: renderI18nText("fig_feed.video")
  }) : jsx("div", {
    children: renderI18nText("fig_feed.transcode_after_submit")
  });
}
function en(e) {
  if (QUICKTIME_TYPES.includes(e.videoContent.mediaType) && "" === e.videoContent.videoFileUuid) return jsx(et, {
    isThumbnail: e.isThumbnail
  });
  if (e.isThumbnail && e.videoContent.coverImage) return jsx(K, {
    imgUrl: e.videoContent.coverImage,
    isThumbnail: !0
  });
  let t = F(e.feedPostUuid, e.videoContent.path, e.source);
  return jsx(H, {
    id: t,
    videoContent: e.videoContent,
    isThumbnail: e.isThumbnail,
    feedPostUuid: e.feedPostUuid,
    feedPostIdx: e.feedPostIdx,
    source: e.source
  });
}
function eo(e) {
  return jsxs(Fragment, {
    children: [jsx(_$$x, {
      isLoading: !e.content.imageUrl,
      children: () => jsx(K, {
        imgUrl: e.content.imageUrl,
        isThumbnail: e.isThumbnail
      })
    }), !e.isThumbnail && jsx("div", {
      className: B,
      children: renderI18nText("fig_feed.prototype_badge")
    })]
  });
}
function ei(e) {
  let t = e.contentItems[e.selectedIdx];
  switch (t.type) {
    case cM.NODE:
      return jsx($, {
        selectedIdx: e.selectedIdx,
        contentItems: e.contentItems,
        editPreviewOptions: e.editPreviewOptions,
        pageBackgroundColor: e.pageBackgroundColor,
        source: e.source
      });
    case cM.IMAGE:
      return jsx(q, {
        imageContent: t,
        source: e.source,
        editPreviewOptions: e.editPreviewOptions,
        pageBackgroundColor: e.pageBackgroundColor
      });
    case cM.VIDEO:
      return jsx(ee, {
        videoContent: t,
        isThumbnail: !1,
        feedPostUuid: e.feedPostUuid,
        source: e.source
      });
    case cM.PROTOTYPE:
      return jsx(J, {
        prototypeContent: t
      });
    default:
      throwTypeError(t);
  }
}
function es(e) {
  switch (e.content.type) {
    case cM.NODE:
      let t = e.content;
      let n = t.mediumImageUrl ?? t.preview_image_url ?? t.image_url;
      let i = t.preview_image_url ?? t.image_url;
      return jsx(_$$x, {
        isLoading: !!t.isLoading,
        children: () => jsx(K, {
          imgUrl: e.isEditing ? i : n,
          usesPreviewImage: !!t.preview_image_url,
          isThumbnail: e.isThumbnail,
          thumbnailUrl: e.isEditing ? i : t.thumbnailUrl,
          showPreviewFacade: e.showPreviewFacade,
          onUpdatePreviewImage: e.onUpdatePreviewImage
        })
      });
    case cM.IMAGE:
      let a = e.content.mediumImageUrl ?? e.content.preview_image_url ?? e.content.url;
      let d = e.content.preview_image_url ?? e.content.url;
      return jsx(K, {
        imgUrl: e.isEditing ? d : a,
        isThumbnail: e.isThumbnail,
        usesPreviewImage: !!e.content.preview_image_url,
        mediaType: e.content.mediaType,
        thumbnailUrl: e.isEditing ? d : e.content.thumbnailUrl,
        showPreviewFacade: e.showPreviewFacade,
        onUpdatePreviewImage: e.onUpdatePreviewImage
      });
    case cM.VIDEO:
      return jsx(en, {
        videoContent: e.content,
        isThumbnail: e.isThumbnail,
        feedPostUuid: e.feedPostUuid,
        feedPostIdx: e.feedPostIdx,
        source: e.source
      });
    case cM.PROTOTYPE:
      return jsx(eo, {
        content: e.content,
        isThumbnail: e.isThumbnail
      });
    default:
      throwTypeError(e.content);
  }
}
export function $$ea0(e) {
  let t = !!e.editPreviewOptions;
  let n = e.contentItems.length > 1 || t;
  let {
    selectedContentIdx,
    pageBackgroundColor,
    setSelectedContentIdx,
    contentItems,
    onContentHover
  } = e;
  let [h, x] = _$$M();
  useEffect(() => {
    onContentHover?.(x);
  }, [x, onContentHover]);
  let b = useMemo(() => contentItems[selectedContentIdx], [contentItems, selectedContentIdx]);
  let T = useMemo(() => n ? jsx(ed, {
    direction: "horizontal",
    contentItems,
    selectedIdx: selectedContentIdx,
    setSelectedIdx: setSelectedContentIdx,
    pageBackgroundColor: e.pageBackgroundColor,
    feedPostUuid: e.feedPostUuid,
    canAddContent: !1
  }) : null, [n, contentItems, selectedContentIdx, setSelectedContentIdx, e.pageBackgroundColor, e.feedPostUuid]);
  e.editPreviewOptions && b && "node" === b.type && b.backgroundColor && (e.editPreviewOptions.pageBackgroundColor = parseColor(b.backgroundColor) ?? void 0);
  let {
    openEditPreviewModalCallback,
    deleteSelectedItemCallback
  } = e;
  let [P, j] = useState(!1);
  let O = useMemo(() => {
    if (!openEditPreviewModalCallback && !deleteSelectedItemCallback || !P || !b) return null;
    let e = n ? "feed_post_content--editPreviewOverlayWithThumbnails--pPLEV feed_post_content--editPreviewOverlay--GYr8Q" : "feed_post_content--editPreviewOverlay--GYr8Q";
    return jsxs("div", {
      className: e,
      children: [b && aT(b) && openEditPreviewModalCallback && jsx("div", {
        children: jsx("button", {
          onClick: openEditPreviewModalCallback,
          className: "feed_post_content--editPreviewButton--Z9MT5",
          children: renderI18nText("fig_feed.edit_preview")
        })
      }), deleteSelectedItemCallback && jsx(SvgComponent, {
        svg: _$$A3,
        className: "feed_post_content--deleteContentItemIcon--XF-w3",
        onClick: deleteSelectedItemCallback,
        autosize: !0,
        "data-tooltip-type": KindEnum.TEXT,
        "data-tooltip": getI18nString("fig_feed.delete"),
        dataTestId: "delete-content-item"
      })]
    });
  }, [P, b, n, openEditPreviewModalCallback, deleteSelectedItemCallback]);
  return jsxs("div", {
    className: d()("feed_post_content--contentSectionContainer--KsA0H", t && "feed_post_content--showOverflow--LCCb8"),
    children: [jsxs("div", {
      ref: h,
      className: n && !t ? "feed_post_content--selectedContentWithThumbnails--OrAWq feed_post_content--selectedContent--pGcQE" : "feed_post_content--selectedContent--pGcQE",
      style: {
        backgroundColor: _$$m(b, e.pageBackgroundColor)
      },
      onMouseDown: e.onSelectedTileMouseDown,
      role: "button",
      tabIndex: 0,
      onPointerEnter: () => j(!0),
      onPointerLeave: () => j(!1),
      "data-testid": "feed-post-content-section",
      children: [O, jsx(_$$x, {
        isLoading: !b,
        children: () => e.staticContent ? jsx(es, {
          content: b,
          isThumbnail: !1,
          feedPostUuid: e.feedPostUuid,
          feedPostIdx: e.feedPostIdx,
          source: e.source
        }) : jsx(ei, {
          contentItems: contentItems.filter(e => null !== e),
          selectedIdx: selectedContentIdx,
          editPreviewOptions: e.editPreviewOptions,
          feedPostUuid: e.feedPostUuid,
          pageBackgroundColor,
          source: e.source
        })
      })]
    }), T]
  });
}
function ed(e) {
  let t = useRef(null);
  useEffect(() => {
    let n = t.current;
    let o = t.current?.children[e.selectedIdx];
    if (!n || !o) return;
    let i = n?.getBoundingClientRect();
    i?.top >= 0 && i?.left >= 0 && i?.bottom <= (window.innerHeight || document.documentElement.clientHeight) && i?.right <= (window.innerWidth || document.documentElement.clientWidth) && o.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "nearest"
    });
  }, [e.direction, e.selectedIdx]);
  let n = function () {
    let e = useAtomValueAndSetter(k)[0];
    return useCallback(t => {
      e && e.ref?.current && (t && t !== e?.feedPostUuid || e.ref?.current.pause());
    }, [e]);
  }();
  let {
    scrollToItem,
    onReorderCallback,
    setSelectedIdx,
    deleteItem
  } = e;
  let [u, m] = useState(null);
  let f = e.thumbnailType || "wide";
  let h = useCallback((t, i, a) => {
    let r = d()(z, a && "feed_post_content--selectedThumbnail--MdH-d", "small" === f && Y, "wide" === f && Z);
    return jsxs("div", {
      className: r,
      onMouseDown: () => {
        n(e.feedPostUuid);
        scrollToItem?.(i);
        setSelectedIdx?.(i);
      },
      onPointerEnter: () => m(i),
      onPointerLeave: () => m(null),
      role: "button",
      tabIndex: 0,
      style: {
        backgroundColor: _$$m(t, e.pageBackgroundColor)
      },
      "data-testid": `content-item-${i}`,
      children: [jsx(es, {
        content: t,
        isThumbnail: !0,
        isEditing: e.isEditing
      }), deleteItem && i === u && jsx("div", {
        className: "feed_post_content--thumbnailOverlay--feEzZ",
        children: jsx("div", {
          className: "feed_post_content--deleteIcon--ptC6G",
          onClick: e => {
            e.stopPropagation();
            deleteItem(i);
          },
          role: "button",
          tabIndex: 0,
          children: jsx(b, {})
        })
      })]
    });
  }, [e.pageBackgroundColor, e.feedPostUuid, f, e.isEditing, u, n, scrollToItem, setSelectedIdx, deleteItem]);
  let g = t => {
    if ("horizontal" !== e.direction) return null;
    let n = e.selectedIdx === ("left" === t ? 0 : e.contentItems.length - 1);
    return jsx(_$$$, {
      onMouseDown: () => {
        let n = (e.selectedIdx + ("left" === t ? -1 : 1) + e.contentItems.length) % e.contentItems.length;
        setSelectedIdx?.(n);
      },
      icon: "left" === t ? "chevron-left-32" : "chevron-right-32",
      variant: "text",
      disabled: n
    });
  };
  let v = d()("feed_post_content--contentThumbnailsSectionV2--dXne6", "horizontal" === e.direction ? "feed_post_content--contentThumbnailsSectionV2_horizontal--mE1uH" : "feed_post_content--contentThumbnailsSectionV2_vertical--xycdu");
  if (onReorderCallback) return jsx("div", {
    className: v,
    children: jsxs(_$$_.Group, {
      axis: "vertical" === e.direction ? "y" : "x",
      onReorder: onReorderCallback,
      values: e.contentItems,
      className: d()(W, "horizontal" === e.direction ? "feed_post_content--contentThumbnailsSectionInnerV2_horizontalReorder--icuQg" : V),
      role: "button",
      tabIndex: 0,
      ref: t,
      children: [e.contentItems.map((t, n) => jsx(_$$_.Item, {
        value: t,
        id: X(t),
        translate: "no",
        children: h(t, n, !(e.canAddContent && e.isAddingContent) && n === e.selectedIdx)
      }, X(t))), e.canAddContent && jsx("div", {
        className: d()(z, "small" === e.thumbnailType && Y, "wide" === e.thumbnailType && Z, e.isAddingContent ? "feed_post_content--addingActive--h51xM" : "feed_post_content--plusIcon--QHfa6"),
        onMouseDown: e.setAddingActive,
        role: "button",
        tabIndex: 0,
        children: jsx(SvgComponent, {
          svg: _$$A2
        })
      })]
    })
  });
  {
    let n = d()(W, "horizontal" === e.direction ? "feed_post_content--contentThumbnailsSectionInnerV2_horizontal--r0SNN" : V);
    return jsxs("div", {
      className: v,
      children: [g("left"), jsx("div", {
        className: n,
        ref: t,
        children: e.contentItems.map((t, n) => jsx(_$$Fragment, {
          children: h(t, n, n === e.selectedIdx)
        }, n))
      }), g("right")]
    });
  }
}
export const x = $$ea0;
