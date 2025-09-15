import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useRef, useState, useLayoutEffect, useMemo, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { throwTypeError } from "../figma_app/465776";
import { trackEventAnalytics } from "../905/449184";
import { customHistory } from "../905/612521";
import { useLatestRef } from "../figma_app/922077";
import { KeyCodes } from "../905/63728";
import { NONE_SYMBOL } from "../905/992467";
import { useSubscription } from "../figma_app/288654";
import { XHR } from "../905/910117";
import { w4 } from "../905/445814";
import { P as _$$P } from "../905/347284";
import { SvgComponent } from "../905/714743";
import { handleAtomEvent } from "../905/502364";
import { FlashActions } from "../905/573154";
import { renderI18nText, getI18nString } from "../905/303541";
import { Pf, H8 } from "../905/590952";
import { $M, nb } from "../figma_app/770088";
import { sf } from "../905/929976";
import { hideModal } from "../905/156213";
import { gX } from "../905/504768";
import { o8 } from "../figma_app/12220";
import { E as _$$E } from "../905/881732";
import { hL } from "../905/697795";
import { useCurrentUserOrgId } from "../905/845253";
import { _6 } from "../figma_app/386952";
import { selectCurrentUser } from "../905/372672";
import { FeedPostWithDetails } from "../figma_app/43951";
import { M8 } from "../905/772425";
import { Dr } from "../905/530837";
import { KindEnum } from "../905/129884";
import { J as _$$J } from "../905/375499";
import { registerModal, ModalSupportsBackground } from "../905/102752";
import { p as _$$p } from "../figma_app/353099";
import { Op, nr, rn } from "../figma_app/903573";
import { S as _$$S } from "../figma_app/420927";
import { e as _$$e } from "../905/621515";
import { zl } from "../figma_app/641749";
import { f as _$$f } from "../905/940356";
import { N as _$$N } from "../figma_app/268271";
import { h as _$$h } from "../905/284399";
import { CloseButton } from "../905/17223";
import { ButtonBasePrimaryTracked } from "../figma_app/637027";
import { TrackedButton } from "../figma_app/831799";
import { LN, q3 } from "../figma_app/450829";
import { xT } from "../figma_app/195407";
import { ZA, OQ, jS, dC, TI, ZO, IL, wV, _S } from "../figma_app/809086";
import { bIZ } from "../figma_app/6204";
import { g as _$$g } from "../7037/183814";
import { HH } from "../figma_app/841415";
import { utilityNoop } from "../figma_app/918700";
import { Kc, Zp, rS, DG, dy } from "../905/462076";
import { x as _$$x } from "../7037/837002";
import { i as _$$i } from "../7037/201545";
import { B as _$$B2 } from "../7037/575850";
import { Q$, Us, zY } from "../1250/486464";
import { o as _$$o } from "../7037/529503";
import { Wu } from "../1250/758553";
import { A as _$$A } from "../svg/889438";
import { A as _$$A2 } from "../svg/628015";
import { A as _$$A3 } from "../1617/744239";
import { A as _$$A4 } from "../svg/821527";
let H = "feed_post_detail_modal_opened";
let F = Op({
  initial: "await_open_feed_post_detail_modal",
  states: [{
    id: "await_open_feed_post_detail_modal",
    transitions: [nr(H, "complete")]
  }, {
    id: "complete",
    terminal: !0
  }]
});
let B = rn("open_feed_post_detail_modal", F);
function ee(e) {
  let t = useRef(null);
  let [n, s] = useState({
    width: 0,
    height: 0
  });
  useLayoutEffect(() => {
    if (t.current) {
      let e = t.current.getBoundingClientRect();
      s({
        width: e.width,
        height: e.height
      });
    }
  }, [s]);
  let a = e.width;
  let d = e.backgroundColor;
  let r = "light" === e.background;
  let l = xT(e.targetKey) || document.documentElement;
  if (!l) return null;
  let c = jsx("div", {
    children: e.ctaText && e.onClickPrimaryCta && jsxs("div", {
      className: ZA,
      children: [e.bottomLeftText && jsx("b", {
        children: e.bottomLeftText
      }), jsxs("div", {
        className: OQ,
        children: [e.secondaryCtaText && e.onClickSecondaryCta && jsx(TrackedButton, {
          className: r ? jS : dC,
          onClick: e.onClickSecondaryCta,
          "aria-hidden": !0,
          children: e.secondaryCtaText
        }), e.ctaText && e.onClickPrimaryCta && jsx(ButtonBasePrimaryTracked, {
          className: r ? TI : ZO,
          onClick: e.onClickPrimaryCta,
          trackingProperties: e.buttonContext ? {
            buttonContext: e.buttonContext
          } : void 0,
          children: e.ctaText
        })]
      })]
    })
  });
  let u = function (e, t, n, o, i) {
    let s = i ?? 0;
    switch (o) {
      case LN.BOTTOM_LEFT:
        return {
          top: e.bottom - (n + s),
          left: e.left + s
        };
      case LN.BOTTOM_RIGHT:
        return {
          top: e.bottom - (n + s),
          left: e.right - (t + s)
        };
      case LN.TOP_RIGHT:
        return {
          top: e.top + s,
          left: e.right - (t + s)
        };
      case LN.CENTER:
        return {
          top: e.top + (e.height - n) / 2,
          left: e.left + (e.width - t) / 2
        };
      default:
        return {
          top: e.top + s,
          left: e.left + s
        };
    }
  }(l.getBoundingClientRect(), n.width, n.height, e.modalLocation, e.positionOffset);
  return jsxs("div", {
    className: r ? IL : wV,
    ref: t,
    style: {
      backgroundColor: d,
      width: a,
      ...u
    },
    children: [jsxs("div", {
      children: [jsx("h1", {
        children: e.title
      }), e.children, jsx(CloseButton, {
        className: _S,
        onClick: e.dismissModal,
        innerText: "close"
      })]
    }), c]
  });
}
let en = "feed-post-detail-modal";
function eo() {
  let e = _$$e({
    overlay: bIZ,
    priority: _$$N.DEFAULT_MODAL
  });
  let t = zl(B);
  let n = useMemo(() => renderI18nText("rcs.feed_onboarding.zoom_pan.title"), []);
  let s = !!_$$f("has_seen_feed_post_details_zoom_pan_nudge");
  useEffect(() => {
    !s && t.completed && e.show();
  }, [e, s, t]);
  let a = useMemo(() => jsx(_$$S, {
    shortcut: "\u2318\xb1"
  }), []);
  let d = useMemo(() => jsx(_$$S, {
    shortcut: "Ctrl\xb1"
  }), []);
  return jsx(_$$h, {
    modalType: q3.SELF_CONTAINED,
    element: useCallback(e => jsx(ee, {
      targetKey: en,
      dismissModal: e.dismissModal,
      title: n,
      ctaText: getI18nString("rcs.got_it"),
      onClickPrimaryCta: e.onClickPrimaryCta,
      width: 268,
      modalLocation: LN.BOTTOM_LEFT,
      positionOffset: 16,
      children: jsx("p", {
        children: renderI18nText("rcs.feed_onboarding.zoom_pan.content", {
          macKeyboardShortcut: a,
          windowsKeyboardShortcut: d
        })
      })
    }), [n, a, d]),
    trackingContextName: "Feed Post Details View Zoom Pan Nudge",
    isShowing: e.isShowing,
    onClickPrimaryCta: e.complete,
    onClose: e.complete,
    onManualDismiss: e.complete,
    userFlagOnShow: "has_seen_feed_post_details_zoom_pan_nudge"
  });
}
let ef = "feed_post_detail_modal--detailModal--MMYKj";
let e_ = "feed_post_detail_modal--headerSvg--9mFA0";
function eC() {
  return jsx("div", {
    children: getI18nString("fig_feed.post_dne")
  });
}
export let $$eb0 = registerModal(function (e) {
  let t = useDispatch();
  let n = useCurrentUserOrgId();
  let u = _6();
  useEffect(() => {
    "teamFeed" !== u.view && "user" !== u.view && ("fullscreen" === u.view && e.inFileView || t(hideModal()));
  }, [t, u, e.inFileView]);
  let f = useRef({
    selectedView: u,
    inFileView: e.inFileView
  });
  useEffect(() => {
    f.current = {
      selectedView: u,
      inFileView: e.inFileView
    };
  }, [e.inFileView, u]);
  useEffect(() => () => {
    f.current.inFileView || "teamFeed" !== f.current.selectedView.view || t(sf({
      ...f.current.selectedView,
      postUuid: void 0
    }));
  }, [t]);
  let _ = useRef(!1);
  let h = useCallback(t => {
    _.current || !t || e.autofocusCommentInput || (t.focus(), _.current = !0);
  }, [e.autofocusCommentInput]);
  let C = useLatestRef(e.postUuid);
  useEffect(() => {
    n && (e.inFileView || C === e.postUuid || "teamFeed" !== u.view || (_.current = !1, customHistory.replace(Kc(n, {
      uuid: e.postUuid
    }))));
  }, [C, e.postUuid, n, e.inFileView, u]);
  let b = useSubscription(FeedPostWithDetails, {
    publicUuid: e.postUuid
  });
  useEffect(() => {
    !e.inFileView && b.data?.feedPost?.title && hL(b.data.feedPost.title);
  }, [e.inFileView, b.data]);
  useEffect(() => (trackEventAnalytics("Team Feed Post Details View Visited", {
    postUuid: e.postUuid
  }), () => {
    trackEventAnalytics("Team Feed Post Closed", {
      postUuid: e.postUuid
    });
  }), [e.postUuid]);
  useEffect(() => {
    XHR.post(`/api/feed_posts/${e.postUuid}/mark_viewed`);
  }, [e.postUuid]);
  let [w, P] = useState(0);
  useEffect(() => {
    P(e.selectedContentIdx || 0);
  }, [e.postUuid, e.selectedContentIdx]);
  let j = useMemo(() => b.data?.feedPost ? b.data.feedPost.content.map(e => JSON.parse(e)) : [], [b.data]);
  let U = j.length;
  let {
    requestToOpenPostByFeedIdx
  } = e;
  let M = useCallback(t => {
    t.keyCode === KeyCodes.LEFT_ARROW ? 0 === w ? requestToOpenPostByFeedIdx && void 0 !== e.feedIdx && requestToOpenPostByFeedIdx(e.feedIdx - 1) : P(w - 1) : t.keyCode === KeyCodes.RIGHT_ARROW && (w === U - 1 ? requestToOpenPostByFeedIdx && void 0 !== e.feedIdx && requestToOpenPostByFeedIdx(e.feedIdx + 1) : P(w + 1));
  }, [w, U, requestToOpenPostByFeedIdx, e.feedIdx]);
  let [L, A] = useState(!0);
  let R = useCallback(() => A(e => !e), []);
  let [F, B] = useState(!1);
  useEffect(() => {
    !F && "loaded" === b.status && j[w] && Dr(j[w]) && (handleAtomEvent({
      id: H
    }), B(!0));
  }, [b.status, F, j, w]);
  let W = b.data?.feedPost || e.initialPreloadedPost;
  if (!W) switch (b.status) {
    case "errors":
      return jsx(eC, {});
    case "loading":
      return jsx(utilityNoop, {
        className: ef,
        size: "any"
      });
    case "loaded":
      t(FlashActions.error(getI18nString("fig_feed.post_dne")));
      t(hideModal());
      return null;
    default:
      throwTypeError(b);
  }
  return jsxs(Fragment, {
    children: [jsx(utilityNoop, {
      className: ef,
      size: "any",
      children: jsx("div", {
        className: "feed_post_detail_modal--layout--b28Tm",
        role: "listbox",
        tabIndex: 0,
        onKeyDown: M,
        ref: h,
        children: jsxs("div", {
          className: "feed_post_detail_modal--container--PkjxH",
          "data-onboarding-key": en,
          children: [jsx("div", {
            className: L ? "feed_post_detail_modal--contentContainer--HvXHM" : "feed_post_detail_modal--contentContainerFull--Y-lEo feed_post_detail_modal--contentContainer--HvXHM",
            children: jsx(_$$x, {
              contentItems: j,
              staticContent: !1,
              selectedContentIdx: w,
              setSelectedContentIdx: t => {
                P(t);
                e.onSetSelectedContentIdx?.(t);
              },
              pageBackgroundColor: W.backgroundColor ?? void 0,
              feedPostUuid: e.postUuid,
              source: Zp.DETAIL_MODAL
            })
          }), jsx(eT, {
            feedPost: W,
            contentItems: j,
            autofocusCommentInput: !!e.autofocusCommentInput,
            inFileView: e.inFileView,
            onSidebarToggle: R,
            show: L
          })]
        })
      })
    }), jsx(_$$p, {
      children: jsx(eo, {})
    })]
  });
}, _$$E, ModalSupportsBackground.YES);
function eT(e) {
  let t = useDispatch();
  let n = selectCurrentUser();
  let a = useCurrentUserOrgId();
  let d = useCallback(() => {
    t(hideModal());
  }, [t]);
  let {
    fileData,
    fileIcon,
    fileLoaded,
    openFile
  } = rS(e.feedPost.publicUuid, e.contentItems, e.feedPost.fileKey);
  let m = DG(e.feedPost.publicUuid, dy.DETAIL);
  if (!a || !n) return null;
  let p = jsxs(Fragment, {
    children: [jsx("div", {
      className: "feed_post_detail_modal--headerContextMenu--0idb0",
      children: jsx(Wu, {
        feedPost: e.feedPost,
        source: Zp.DETAIL_MODAL
      })
    }), jsx("button", {
      onClick: m,
      "data-tooltip-type": KindEnum.TEXT,
      "data-tooltip": getI18nString("fig_feed.copy_link_to_post"),
      children: jsx(SvgComponent, {
        svg: _$$A3,
        className: e_
      })
    }), jsx("button", {
      onClick: e.onSidebarToggle,
      children: jsx(SvgComponent, {
        svg: _$$A2,
        className: e_
      })
    }), jsx("button", {
      onClick: d,
      children: jsx(SvgComponent, {
        svg: _$$A4,
        className: "feed_post_detail_modal--closeX--NwlcU"
      })
    })]
  });
  if (!e.show) return jsx("div", {
    className: "feed_post_detail_modal--sidebarCollapsed--JYqsn feed_post_detail_modal--contentOverlayPill--1jsoj",
    children: p
  });
  let _ = jsxs("div", {
    className: "feed_post_detail_modal--headerContainer--oByFt",
    children: [jsx("div", {
      className: "feed_post_detail_modal--headerTitle--SJpLy",
      children: renderI18nText("fig_feed.details")
    }), jsx("div", {
      className: "feed_post_detail_modal--headerRight--VNHRM",
      "data-testid": "feed-modal-open-file",
      children: p
    })]
  });
  let g = jsxs("div", {
    className: "feed_post_detail_modal--infoContainer--r-tGh",
    children: [jsx("div", {
      className: "feed_post_detail_modal--topRow--Rs14r",
      children: jsx(_$$B2, {
        user: e.feedPost.creator,
        date: e.feedPost.createdAt,
        size: Pf.MEDIUM,
        shortDate: !1
      })
    }), jsx(ew, {
      feedPost: e.feedPost,
      currentOrgId: a,
      currentUser: n
    }), fileLoaded && !e.inFileView && jsx("button", {
      className: "feed_post_detail_modal--fileInfo--IsxWn",
      onClick: e.inFileView ? void 0 : openFile,
      children: renderI18nText("fig_feed.from_file", {
        fileComponent: jsxs(Fragment, {
          children: [jsx("div", {
            className: "feed_post_detail_modal--detailsFileButtonIcon--wfORW",
            children: jsx(w4, {
              type: fileIcon,
              size: 16
            })
          }), jsx("span", {
            className: "feed_post_detail_modal--detailsFileButtonName--kqizR",
            children: fileData.name
          })]
        })
      })
    }), jsx("div", {
      className: "feed_post_detail_modal--bottomRow--ycO1b",
      children: jsx(Q$, {
        type: Us.FULL,
        source: zY.DETAIL_POST,
        postUuid: e.feedPost.publicUuid,
        postId: e.feedPost.id,
        feedReactions: e.feedPost.reactions
      })
    })]
  });
  return jsxs("div", {
    className: "feed_post_detail_modal--rightSideContainer--n9eWy",
    children: [_, jsx(eI, {
      postInfo: g,
      comments: e.feedPost.comments,
      postUuid: e.feedPost.publicUuid,
      currentUser: n,
      currentOrgId: a,
      autofocusCommentInput: e.autofocusCommentInput
    })]
  });
}
function eI(e) {
  let t = useDispatch();
  let n = useRef(null);
  let a = useRef(null);
  let [d, r] = useState(!1);
  let l = useCallback(t => {
    0 === t.intersectionRatio && e.comments.length > 0 ? r(!0) : r(!1);
  }, [e.comments.length]);
  _$$g(a, l, {
    threshold: [0, 1]
  });
  let c = useCallback(() => {
    n.current && n.current.scrollToBottom();
  }, []);
  let m = e.comments.sort((e, t) => e.createdAt.getTime() - t.createdAt.getTime());
  let [p, f] = useState(e.comments.length);
  useEffect(() => {
    let t = p < e.comments.length;
    t && f(e.comments.length);
    let n = e.comments[e.comments.length - 1];
    t && n.user.id === e.currentUser.id && c();
  }, [p, e.comments, e.currentUser, c]);
  let [g, v] = useState([]);
  let T = useSelector(e => e.comments.newComment);
  let I = useCallback(() => {
    t(gX({
      postUuid: e.postUuid,
      messageMeta: g,
      attachmentIds: Object.keys(T.attachments)
    }));
    v([]);
    t($M({
      resetStatusOnly: !1
    }));
  }, [t, e.postUuid, g, T]);
  let j = useMemo(() => ({
    library: new M8(e.currentOrgId, e.postUuid)
  }), [e.currentOrgId, e.postUuid]);
  let O = useCallback(e => {
    t(nb({
      attachmentId: e.id,
      attachment: e
    }));
  }, [t]);
  let y = useCallback((e, n) => {
    t(nb({
      attachmentId: e,
      attachment: null
    }));
    n ? n.then(() => _$$J.$$delete(e)) : _$$J.$$delete(e);
  }, [t]);
  return jsxs("div", {
    className: "feed_post_detail_modal--commentSection--2SXbE",
    children: [jsxs(_$$P, {
      innerClassName: "feed_post_detail_modal--commentSectionScroll--yFbDD",
      useBottomPinning: !0,
      ref: n,
      children: [e.postInfo, jsx("div", {
        ref: a,
        className: "feed_post_detail_modal--existingComments--1ORWZ",
        children: m.map(t => jsx(_$$i, {
          attachments: t.attachments,
          commentId: t.id,
          commentUser: t.user,
          commentUuid: t.uuid || "",
          createdAt: t.createdAt,
          currentOrgId: e.currentOrgId,
          mentionables: j,
          messageMeta: o8(t.messageMeta),
          reactions: t.reactions,
          user: e.currentUser
        }, t.id))
      }), d && jsxs("div", {
        className: "feed_post_detail_modal--commentsToast--nTd74",
        onClick: c,
        role: "button",
        tabIndex: 0,
        children: [jsx(SvgComponent, {
          svg: _$$A,
          className: "feed_post_detail_modal--arrowDown--XpvZj"
        }), renderI18nText("fig_feed.num_comments", {
          numComments: m.length
        })]
      })]
    }), jsxs("div", {
      className: "feed_post_detail_modal--composerContainer--bIZJV",
      children: [jsx("div", {
        className: "feed_post_detail_modal--composerAvatar--4cjv3",
        children: jsx(H8, {
          user: e.currentUser,
          size: Pf.MEDIUM
        })
      }), jsx(_$$o, {
        attachments: Object.values(T.attachments),
        autofocus: e.autofocusCommentInput,
        composerContainerClass: "feed_post_detail_modal--composer--A7iTJ thread_comment_composer--inputSectionWrapper--Bxyab",
        currentOrgId: e.currentOrgId,
        deleteAttachment: y,
        editableTypeaheadClass: "feed_post_detail_modal--editableTypeahead--4ZMRF thread_comment_composer--editableTypeahead--9R6Yd text--fontPos13--xW8hS text--_fontBase--QdLsd",
        editingExistingComment: !1,
        errorFallback: NONE_SYMBOL.NONE,
        fallback: null,
        hideSubmitButton: !1,
        mentionables: j,
        messageContent: g,
        onSubmit: I,
        updateAttachment: O,
        updateMessage: v,
        user: e.currentUser
      })]
    })]
  });
}
function ew(e) {
  let t = useMemo(() => o8(e.feedPost.descriptionMeta), [e.feedPost.descriptionMeta]);
  return jsxs("div", {
    role: "textbox",
    tabIndex: 0,
    className: "feed_post_detail_modal--postDescription--9xUac",
    children: [jsx("div", {
      className: "feed_post_detail_modal--postTitle--dZdnT feed_tile--postTitle--DY-Hh",
      children: e.feedPost.title
    }), jsx(HH, {
      messageMeta: t,
      commentId: e.feedPost.id,
      className: "feed_post_detail_modal--postDescriptionMessage--vHcLD comment_message--commentMessage--kZCzD"
    })]
  });
}
export const K = $$eb0;