import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useRef, memo, useMemo, useCallback, useState, useContext, useEffect, forwardRef } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import { throwTypeError, assertNotNullish } from "../figma_app/465776";
import { T as _$$T } from "../905/745591";
import { U1 } from "../figma_app/343967";
import { getFeatureFlags } from "../905/601108";
import { x as _$$x } from "../905/211326";
import { s as _$$s } from "../cssbuilder/589278";
import { renderI18nText, getI18nString } from "../905/303541";
import { AY, QY, Fm, l5, bB, NJ, Oo, Tb, UU, hx, Mv } from "../figma_app/770088";
import { T8 } from "../figma_app/831799";
import { y as _$$y } from "../figma_app/705249";
import { k as _$$k2 } from "../figma_app/564183";
import { fullscreenValue } from "../figma_app/455680";
import { useFullscreenReady } from "../905/924253";
import { dH } from "../figma_app/722362";
import { e0 as _$$e } from "../905/696396";
import { i$, Z5, uw } from "../figma_app/582377";
import { hB, Ue, Lc, Qj, Yo, lM } from "../905/301347";
import { v as _$$v } from "../905/266815";
import { Mw, ON } from "../3276/43946";
import { L9, vO, T4, ek as _$$ek, hh, oS } from "../figma_app/42945";
import { z as _$$z } from "../vendor/999105";
import { wY, cU } from "../figma_app/708845";
import { P as _$$P } from "../905/347284";
import { To, $I } from "../3276/545630";
import { HG, bL, O6 } from "../905/598775";
import { useHandleMouseEvent } from "../figma_app/878298";
import { useLatestRef } from "../figma_app/922077";
import { yZ } from "../905/407352";
import { F as _$$F } from "../905/241044";
import { WN } from "../figma_app/638601";
import { useCurrentFileKey, selectCurrentFile, selectOpenFileKey } from "../figma_app/516028";
import { getUserId, selectCurrentUser } from "../905/372672";
import { MV, m as _$$m, kT, Vk } from "../905/380385";
import { E as _$$E } from "../905/632989";
import { q7, mc, b as _$$b, bL as _$$bL, Ov, ME, rm, wv, hE, r1 } from "../figma_app/860955";
import { d as _$$d } from "../905/976845";
import { J as _$$J } from "../905/125993";
import { g as _$$g } from "../905/757007";
import { W as _$$W } from "../905/569454";
import { H as _$$H } from "../905/855344";
import K from "classnames";
import { I as _$$I } from "../figma_app/819288";
import { B as _$$B } from "../905/714743";
import { Ib } from "../905/129884";
import { HH } from "../figma_app/841415";
import { Ro } from "../figma_app/805373";
import { f as _$$f } from "../figma_app/750432";
import { K0 } from "../figma_app/778125";
import { h1 } from "../905/986103";
import { Kq } from "../figma_app/936061";
import { s as _$$s2 } from "../905/573154";
import { J as _$$J2 } from "../905/231762";
import { createOptimistThunk } from "../905/350402";
import { showModalHandler } from "../905/156213";
import { fr } from "../905/201151";
import { I_, jp, n6 } from "../905/234821";
import { E as _$$E2 } from "../905/565019";
import { A as _$$A } from "../6828/255111";
import { A as _$$A2 } from "../svg/452";
import { A as _$$A3 } from "../1617/325876";
import { A as _$$A4 } from "../svg/214487";
import { A as _$$A5 } from "../svg/57544";
import { A as _$$A6 } from "../1617/505000";
import { DataLoadStatus, Fullscreen, MentionsCppBindings } from "../figma_app/763686";
import { defaultSessionLocalIDArrayString } from "../905/871411";
import { waitForAnimationFrame } from "../905/236856";
import { globalPerfTimer } from "../905/542194";
import { Point } from "../905/736624";
import { VisualBellActions } from "../905/302958";
import { S as _$$S } from "../figma_app/11182";
import { oB } from "../905/929976";
import { Z as _$$Z } from "../905/104740";
import { dh } from "../figma_app/186343";
import { Fy } from "../figma_app/623300";
import { jN } from "../905/612685";
import { FFileType } from "../figma_app/191312";
import { viewportNavigatorContext } from "../figma_app/298911";
import { ez as _$$ez } from "../3276/297268";
import { s as _$$s3 } from "../905/518538";
import { n0 } from "../figma_app/32128";
import { VS } from "../1250/506456";
import { K as _$$K } from "../7037/201222";
import { e as _$$e2 } from "../3276/460810";
import { mW, hJ } from "../905/123443";
import { Jn } from "../905/17223";
import { D as _$$D } from "../905/555681";
import { h as _$$h } from "../905/994594";
import { L as _$$L } from "../905/704296";
import { L as _$$L2 } from "../905/408237";
import { ne } from "../figma_app/563413";
import { lQ } from "../905/934246";
import { H_, z6, CU, $Q, a2 } from "../905/963340";
import { am } from "../figma_app/901889";
import { selectWithShallowEqual } from "../905/103090";
import { WB } from "../905/761735";
import { XHR } from "../905/910117";
import { m0 } from "../figma_app/976749";
import { c1 } from "../figma_app/357047";
import { notificationAPI } from "../905/894881";
import { Z as _$$Z2 } from "../905/438683";
import { A as _$$A7 } from "../svg/343167";
import { A as _$$A8 } from "../svg/383262";
import { A as _$$A9 } from "../2854/890611";
function R(e) {
  let t = useRef(null);
  let n = wY(t) ?? cU;
  let i = function (e) {
    switch (e.display) {
      case "inline-flex":
        return e.selected ? "card--selectedCard---f8bk card--_card--xs0Vl" : "card--card---tdpz card--_card--xs0Vl";
      case "flex":
        return e.selected ? "card--flexSelectedCard---zq1t card--selectedCard---f8bk card--_card--xs0Vl" : "card--flexCard--i3MFT card--card---tdpz card--_card--xs0Vl";
      default:
        throwTypeError(e.display);
    }
  }(e);
  return jsxs("div", {
    className: "card--container--aao5L",
    children: [jsx("button", {
      "aria-label": e.ariaLabel,
      style: {
        width: n.width,
        height: n.height,
        borderRadius: e.borderRadius
      },
      className: "card--keyboardFocusableCard--rZ7LL",
      onClick: e.onClick,
      onFocus: e.onFocus,
      onBlur: e.onBlur
    }), jsx("div", {
      ref: t,
      className: i,
      onClick: e.onClick,
      onMouseEnter: e.onMouseEnter,
      onMouseLeave: e.onMouseLeave,
      children: e.children
    })]
  });
}
var W = K;
let et = "comment_avatar_list--avatarListElement--7ghSl";
let en = memo(function (e) {
  let {
    userId,
    imgUrl,
    handle
  } = e;
  let s = useMemo(() => ({
    id: userId,
    img_url: imgUrl,
    handle
  }), [userId, imgUrl, handle]);
  return jsx("div", {
    className: et,
    children: jsx(Ro, {
      size: 24,
      entity: s,
      className: "comment_avatar_list--commentAvatar--LwAuB"
    })
  });
});
function eo(e) {
  let {
    avatars,
    maxAvatarsShown
  } = e;
  let i = useMemo(() => avatars.slice(0, maxAvatarsShown - 1), [avatars, maxAvatarsShown]);
  let s = avatars.length === maxAvatarsShown;
  let r = avatars.length > e.maxAvatarsShown;
  let l = avatars[e.maxAvatarsShown - 1];
  return jsxs("div", {
    className: e.grayscale ? "comment_avatar_list--avatarListGrayscale--TQPH8 comment_avatar_list--avatarList--ogW8K" : "comment_avatar_list--avatarList--ogW8K",
    children: [i.map(e => jsx(en, {
      userId: e.avatar_user_id,
      imgUrl: e.avatar_url,
      handle: e.avatar_user_handle
    }, e.avatar_user_id)), s && l && jsx(en, {
      userId: l.avatar_user_id,
      imgUrl: l.avatar_url,
      handle: l.avatar_user_handle
    }, l.avatar_user_id), r && jsx("div", {
      className: et,
      children: jsx(_$$f, {
        size: 24,
        className: "comment_avatar_list--overflowAvatar--6i3DO comment_avatar_list--commentAvatar--LwAuB",
        text: `${e.avatars.length - e.maxAvatarsShown + 1}`
      })
    })]
  });
}
let er = memo(function (e) {
  return jsxs("div", {
    className: "comment_metadata--commentMetadata---ku0T",
    children: [(e.orderId || e.parentName && !e.hideParentName) && jsx("span", {
      className: "comment_metadata--parentName--pO-hK text--fontPos11--2LvXf text--_fontBase--QdLsd",
      children: jsx(ed, {
        parentName: e.parentName || null,
        orderId: e.orderId,
        hideParentName: e.hideParentName,
        thread: e.thread,
        hideOrphanedState: e.hideOrphanedState
      })
    }), jsx(el, {
      rootUser: e.rootUser,
      createdAt: e.createdAt,
      isPendingFromSinatra: e.isPendingFromSinatra,
      metaAddon: e.metaAddon
    })]
  });
});
function el(e) {
  return jsxs("span", {
    className: "comment_metadata--authorTimeCreated--su-Jn",
    children: [jsx("div", {
      className: "comment_metadata--author--FqE-k text--fontPos11--2LvXf text--_fontBase--QdLsd",
      dir: "auto",
      children: e.rootUser
    }), "\xa0", jsx("div", {
      className: "comment_metadata--timeCreated---00vM text--fontPos11--2LvXf text--_fontBase--QdLsd",
      children: e.isPendingFromSinatra ? renderI18nText("comments.in_a_moment") : jsx(h1, {
        date: e.createdAt,
        capitalize: !0
      })
    }), e.metaAddon]
  });
}
function ed(e) {
  let t = Kq(e.thread);
  if (!e.hideOrphanedState && t) {
    if (e.orderId) {
      let t = renderI18nText("comments.unattached");
      return renderI18nText("comments.parent_name_and_number", {
        parentName: t,
        commentNumber: e.orderId
      });
    }
    return null;
  }
  return e.hideParentName || !e.parentName ? e.orderId ? renderI18nText("comments.number_only", {
    commentNumber: e.orderId
  }) : null : e.orderId ? renderI18nText("comments.parent_name_and_number", {
    parentName: e.parentName,
    commentNumber: e.orderId
  }) : jsx("span", {
    children: e.parentName
  });
}
let ep = createOptimistThunk((e, t) => {
  let {
    receiptsAPI,
    comment
  } = t;
  receiptsAPI.markAsUnread(comment.uuid).catch(t => {
    let n = getI18nString("whiteboard.an_error_occurred_while_marking_a_canvas_mention_as_unread");
    try {
      t = JSON.parse(t);
      e.dispatch(_$$s2.error(_$$J2(t, n)));
    } catch (t) {
      e.dispatch(_$$s2.error(n));
    }
  });
});
let eh = createOptimistThunk((e, t) => {
  let {
    receiptsAPI,
    thread
  } = t;
  let a = thread.comments.map(e => e.uuid).filter(e => !!e);
  receiptsAPI.markAsRead(a).catch(t => {
    let n = getI18nString("whiteboard.an_error_occurred_while_marking_a_canvas_mention_as_read");
    try {
      t = JSON.parse(t);
      e.dispatch(_$$s2.error(_$$J2(t, n)));
    } catch (t) {
      e.dispatch(_$$s2.error(n));
    }
  });
});
function ex(e) {
  let {
    thread,
    isUnread,
    copyLink,
    onDeleteThread,
    onDeleteThreadComplete,
    onDeleteThreadCancel
  } = e;
  let {
    commentReceipts
  } = I_();
  let m = fr();
  let h = useDispatch();
  let f = useCurrentFileKey();
  let _ = getUserId();
  let g = useCallback(() => {
    commentReceipts && (isUnread ? h(AY({
      receiptsAPI: commentReceipts,
      thread
    })) : h(QY({
      receiptsAPI: commentReceipts,
      comment: thread.comments[0]
    })));
  }, [commentReceipts, h, isUnread, thread]);
  let v = useCallback(() => {
    m && (isUnread ? h(eh({
      receiptsAPI: m,
      thread
    })) : h(ep({
      receiptsAPI: m,
      comment: thread.comments[0]
    })));
  }, [m, h, isUnread, thread]);
  let x = useCallback(() => {
    copyLink(thread.comments[0]);
  }, [copyLink, thread]);
  let b = useCallback(() => {
    h(showModalHandler({
      type: _$$E2,
      data: {
        onConfirm: () => onDeleteThread(thread),
        onConfirmComplete: onDeleteThreadComplete,
        onCancel: onDeleteThreadCancel
      }
    }));
  }, [h, onDeleteThread, onDeleteThreadCancel, onDeleteThreadComplete, thread]);
  let y = useMemo(() => {
    if (_ === thread.comments[0].user_id && !thread.isCanvasMention && MV(thread.sidebarItemType)) return jsx(q7, {
      onClick: b,
      children: renderI18nText("comments.delete_thread")
    }, "deleteThread");
  }, [thread, _, b]);
  let C = useMemo(() => {
    let e = [];
    m && f && thread.isCanvasMention ? e.push(jsx(q7, {
      onClick: v,
      children: isUnread ? renderI18nText("comments.mark_as_read") : renderI18nText("comments.mark_as_unread")
    }, "toggleUnreadCanvasMention")) : commentReceipts && f && !thread.isCanvasMention && _$$m(thread.sidebarItemType) && e.push(jsx(q7, {
      onClick: g,
      children: isUnread ? renderI18nText("comments.mark_as_read") : renderI18nText("comments.mark_as_unread")
    }, "toggleUnreadComment"));
    e.push(jsx(q7, {
      onClick: x,
      children: renderI18nText("comments.copy_link")
    }, "copyCommentLink"));
    y && e.push(y);
    return e;
  }, [commentReceipts, m, f, x, y, thread.isCanvasMention, thread.sidebarItemType, v, g, isUnread]);
  return jsx(mc, {
    children: C
  });
}
let eb = "comments_row_presentation--button--wBibN";
let ey = "comments_row_presentation--headerElement--FStcl";
let eC = "comments_row_presentation--countMetadata--xGPiX";
let eM = memo(function (e) {
  return jsxs("div", {
    className: "comments_row_presentation--replyAndAttachmentCount--OrlJC",
    children: [0 !== e.replyCount && jsxs(Fragment, {
      children: [jsx("div", {
        className: eC,
        children: renderI18nText("comments.reply_count", {
          replyCount: e.replyCount
        })
      }), 0 !== e.attachmentCount && jsx("div", {
        className: "comments_row_presentation--dot--9cR30 comments_row_presentation--countMetadata--xGPiX",
        children: "\xb7"
      })]
    }), 0 !== e.attachmentCount && jsx("div", {
      className: eC,
      children: renderI18nText("comments.attachment_count", {
        attachmentCount: e.attachmentCount
      })
    })]
  });
});
let eE = memo(function (e) {
  return jsxs(Fragment, {
    children: [e.postTitle && jsx("div", {
      className: "comments_row_presentation--postTitle--9oNMe",
      children: e.postTitle
    }), !_$$I(e.messageMeta) && jsx(HH, {
      className: "comments_row_presentation--commentMessage--q-YaC text--fontPos11--2LvXf text--_fontBase--QdLsd ellipsis--ellipsisAfter3Lines--h405C ellipsis--_ellipsisAfterNLines--LzI7k comment_message--commentMessage--kZCzD",
      messageMeta: e.messageMeta,
      commentId: e.commentId
    }), jsx(eM, {
      replyCount: e.replyCount,
      attachmentCount: e.attachmentCount
    })]
  });
});
let eN = e => e.stopPropagation();
let eS = memo(function (e) {
  let {
    copyLink,
    isPendingFromSinatra,
    optionsMenuRef,
    onDeleteThread,
    onDeleteThreadComplete,
    onDeleteThreadCancel,
    isUnavailable,
    isResolved,
    isUnread,
    onChangeResolveState,
    thread,
    isFocusedThread,
    userCanResolveThread,
    openPostDetailModal
  } = e;
  let b = useSelector(e => e.comments.hoveredPinIds);
  let y = getFeatureFlags().fpl_card_primitive_migration;
  let C = e.thread.replyCount || e.thread.comments.length - 1;
  let w = e.thread.attachments?.length || e.thread.comments.map(e => e.attachments?.length || 0).reduce((e, t) => e + t, 0) || 0;
  let j = e.avatars[0].avatar_user_handle;
  let k = e.hideResolve || !userCanResolveThread || isPendingFromSinatra;
  let P = thread.sidebarItemType === kT.FEED_POST && !_$$y();
  let I = y ? jsx(HG, {
    children: jsx(_$$E, {
      "aria-label": getI18nString("comments.unavailable_offline"),
      "data-tooltip-type": Ib.TEXT,
      "data-tooltip": getI18nString("comments.unavailable_offline"),
      "data-onboarding-key": "page-unavailable-offline",
      children: jsx("span", {
        "aria-hidden": "true",
        children: jsx(_$$B, {
          svg: _$$A
        })
      })
    })
  }) : jsx("div", {
    "data-tooltip-type": Ib.TEXT,
    "data-tooltip": getI18nString("comments.unavailable_offline"),
    "data-onboarding-key": "page-unavailable-offline",
    children: jsx(_$$B, {
      svg: _$$A
    })
  });
  let T = null != thread.commentPin;
  let {
    manager,
    getTriggerProps
  } = _$$b();
  let S = jsxs(_$$bL, {
    manager,
    children: [jsx(_$$d, {
      "aria-label": getI18nString("comments.more_actions"),
      ...getTriggerProps(),
      children: jsx(_$$J, {
        className: manager.isOpen ? void 0 : eb
      })
    }), jsx(ex, {
      thread,
      isUnread: e.isUnread,
      copyLink,
      onDeleteThread,
      onDeleteThreadComplete,
      onDeleteThreadCancel
    })]
  });
  let D = jsx(K0, {
    svg: isResolved ? _$$A4 : _$$A3,
    className: W()(isResolved ? "comments_row_presentation--resolvedButton--EJTu4 comments_row_presentation--button--wBibN" : !T && eb, e.isUnread ? "" : "comments_row_presentation--buttonRead--zeH0O"),
    "data-tooltip-type": Ib.TEXT,
    "data-tooltip": T ? getI18nString("comments.pinning.cannot_resolve") : isResolved ? getI18nString("comments.mark_as_unresolved") : getI18nString("comments.mark_as_resolved"),
    onClick: onChangeResolveState,
    onMouseDown: eN,
    disabled: T,
    children: isResolved ? jsx(_$$g, {}) : jsx(_$$W, {})
  });
  let A = jsx(K0, {
    svg: _$$A6,
    className: eb,
    "data-tooltip-type": Ib.TEXT,
    "data-tooltip": getI18nString("fig_feed.view_post"),
    onClick: openPostDetailModal,
    onMouseDown: eN
  });
  let L = jsxs(Fragment, {
    children: [!isPendingFromSinatra && !P && (y ? jsx(HG, {
      className: ey,
      ref: optionsMenuRef,
      children: S
    }) : jsx("div", {
      className: ey,
      ref: optionsMenuRef,
      children: S
    })), e.thread.sidebarItemType === kT.FEED_POST && (y ? jsx(HG, {
      className: ey,
      ref: optionsMenuRef,
      children: A
    }) : jsx("div", {
      className: ey,
      ref: optionsMenuRef,
      children: A
    })), !k && (y ? jsx(HG, {
      className: ey,
      children: D
    }) : jsxs("div", {
      className: ey,
      children: [D, " "]
    }))]
  });
  return jsx("div", {
    className: W()(thread.isActive ? "comments_row_presentation--commentSelected--whxrP comments_row_presentation--_comment--x7j04 text--fontPos11--2LvXf text--_fontBase--QdLsd" : isFocusedThread || manager.isOpen ? "comments_row_presentation--commentFocused---7hfS comments_row_presentation--_comment--x7j04 text--fontPos11--2LvXf text--_fontBase--QdLsd" : "comments_row_presentation--comment--wtdS- comments_row_presentation--_comment--x7j04 text--fontPos11--2LvXf text--_fontBase--QdLsd", {
      "comments_row_presentation--unread--xgn7e": isUnread,
      "comments_row_presentation--pinHovered--k1OJV": b.includes(thread.id)
    }),
    children: jsxs("div", {
      className: "comments_row_presentation--commentInner--Eu0xM",
      children: [jsx("div", {
        className: "comments_row_presentation--blueDot--n7bLI",
        children: jsx(_$$H, {})
      }), jsxs("span", {
        className: "comments_row_presentation--commentHeader---8DED",
        children: [e.thread.sidebarItemType === kT.FEED_POST && jsx(_$$B, {
          svg: _$$A5,
          className: "comments_row_presentation--postIcon--VsaAl"
        }), jsx(eo, {
          maxAvatarsShown: 4,
          avatars: e.avatars,
          grayscale: !e.isUnread && e.thread.sidebarItemType !== kT.LITMUS_COMMENT_THREAD
        }), jsx("div", {
          className: manager.isOpen ? "comments_row_presentation--buttonsVisible--m7qED comments_row_presentation--buttons--qc-Yn" : "comments_row_presentation--buttons--qc-Yn",
          children: isUnavailable ? I : L
        })]
      }), jsx(er, {
        rootUser: j,
        createdAt: e.thread.comments[0].created_at,
        isPendingFromSinatra,
        orderId: e.orderId,
        parentName: e.parentName,
        hideParentName: e.hideParentName,
        thread: e.thread,
        hideOrphanedState: e.hideOrphanedState,
        metaAddon: e.metaAddon?.(e.thread)
      }), e.thread.sidebarItemType === kT.FEED_POST && jsxs("div", {
        className: "comments_row_presentation--postThumbnailContainer--NjgZy",
        children: [jsx("img", {
          src: e.thread.feedPostThumbnail,
          alt: "placeholder",
          className: "comments_row_presentation--postThumbnail--SPSS3 feed_post_popover_modal--postThumbnail--jac1E",
          style: {
            backgroundColor: e.thread.feedPostThumbnailBackground,
            padding: e.thread.padFeedPostThumbnail ? "8px" : "0"
          }
        }), e.thread.feedPostNumContent > 1 && jsx("div", {
          className: "comments_row_presentation--numContent--HmWiu comments_row_presentation--postThumbnailOverlay--pPIMf feed_post_popover_modal--postThumbnailOverlay--vDoKP",
          children: jsx(_$$B, {
            svg: _$$A2,
            className: "comments_row_presentation--overlayIcon--91i3d"
          })
        })]
      }), jsx(eE, {
        commentId: e.thread.comments[0].id,
        messageMeta: e.thread.comments[0].message_meta,
        replyCount: C,
        attachmentCount: w,
        postTitle: e.thread.sidebarItemType === kT.FEED_POST ? e.thread.feedPostTitle : void 0
      })]
    })
  });
});
function eJ(e) {
  let t = useSelector(e => e.mirror.appModel.pagesList);
  return null === e.page || Fy(t, e.page) === DataLoadStatus.LOADED;
}
let e0 = memo(function (e) {
  let {
    element
  } = e;
  let {
    comments
  } = t;
  let {
    getClosestThread,
    onResolveComment
  } = e.extras;
  let l = useMemo(() => {
    let e = new Map();
    let t = [];
    comments.forEach(n => {
      if (e.has(n.user.id)) {
        let o = e.get(n.user.id);
        t[o].num_unread_comments += n.isUnread ? 1 : 0;
        t[o].num_comments += 1;
      } else {
        t.push({
          avatar_url: n.user.img_url,
          avatar_user_id: n.user.id,
          avatar_user_handle: n.user.handle,
          num_unread_comments: n.isUnread ? 1 : 0,
          num_comments: 1
        });
        e.set(n.user.id, t.length - 1);
      }
    });
    return t;
  }, [comments]);
  let c = !!comments[0].resolved_at;
  let m = comments.some(e => e.isUnread);
  let h = !!element.isPendingFromSinatra;
  let f = useRef(null);
  let v = useRef(null);
  let x = useLatestRef(element.isActive);
  let b = useRef(!1);
  let w = selectCurrentUser();
  let j = selectCurrentFile();
  let k = yZ();
  let P = eJ(element);
  let I = useMemo(() => !k && !P, [k, P]);
  let T = hB();
  let U = useMemo(() => T(element), [T, element]);
  let H = element.id;
  let {
    isFocusedThread,
    onCanvasMentionSelect,
    onCommentFocus,
    onCommentBlur,
    onCommentMouseEnter,
    onCommentMouseLeave,
    onCommentSelect,
    onChangeResolveState,
    onCanvasMentionCopyLink,
    openPostDetailModal
  } = function (e, t, n) {
    let o = useDispatch();
    let {
      comments: _comments
    } = e;
    let r = !!_comments[0].resolved_at;
    let l = useRef(!1);
    let [d, c] = useState(!1);
    let m = e.id;
    let h = !selectCurrentFile()?.canEdit;
    let f = useSelector(e => e.mirror.appModel.showComments);
    let _ = yZ();
    let v = eJ(e);
    let x = useContext(viewportNavigatorContext);
    let b = _$$s3();
    let w = Kq(e);
    let j = _$$Z("comments_navigate");
    let k = !!e.isPendingFromSinatra;
    let P = I_();
    let I = fr();
    let T = useStore();
    let M = n0();
    let E = VS({
      pagesList: M,
      isComparingChanges: !1,
      enabled: !!e.isCanvasMention
    });
    let N = dh(!!e.isCanvasMention);
    let S = useCallback(() => {
      let t = T.getState().openFile;
      if (t) {
        let n = jN({
          file: t,
          nodeId: e.nodeId,
          isFigJam: t.editorType === FFileType.WHITEBOARD
        });
        o(_$$S({
          url: n
        }));
      }
    }, [o, e.nodeId, T]);
    let A = useCallback(() => _ || v ? (o(VisualBellActions.dequeue({
      matchType: "offline-comment-navigation"
    })), !1) : (o(VisualBellActions.enqueue({
      type: "offline-comment-navigation",
      message: getI18nString("comments.unavailable_offline")
    })), !0), [_, v, o]);
    let L = useCallback(async () => {
      if (!A() && (l.current = !0, o(Fm({
        threadId: m,
        source: void 0
      })), e.nodeId || e.stablePath)) {
        let t;
        let n = T.getState().mirror.sceneGraph;
        e.isCanvasMention && I && o(eh({
          thread: e,
          receiptsAPI: I
        }));
        let a = defaultSessionLocalIDArrayString;
        e.stablePath ? a = `[${e.stablePath.join(",")}]` : e.nodeId && (a = `[${e.nodeId}]`);
        e.isCanvasMention && e.page && e.page !== N && (await E(e.page), await waitForAnimationFrame());
        Fullscreen.setActiveCommentAnchorData({
          stablePath: a
        });
        MentionsCppBindings.markMentionsAsReadFromStablePath(a);
        e.stablePath ? t = n.getFromStablePath(e.stablePath) : e.nodeId && (t = n.get(e.nodeId));
        t && j(_$$e2(t, x, "canvas-mentions"), {
          additionalTrackEventParams: {
            text_node_id_path: e.nodeId,
            mention_id: e.uuid
          }
        });
      }
    }, [A, o, m, e, T, I, j, x, E, N]);
    let R = Ue();
    let F = useMemo(() => {
      if (R) return R(e);
    }, [R, e]);
    let U = useCallback(() => {
      if (A()) return;
      l.current = !0;
      h && !f && fullscreenValue.triggerAction("toggle-show-comments", {
        source: "comment_sidebar_list"
      });
      F && F();
      globalPerfTimer.start("view_comment_thread");
      let n = x.getViewportInfo();
      let a = {
        thread: e,
        viewport: x,
        config: b,
        navigate: j,
        isOrphanedComment: w
      };
      if (o(k ? l5(a) : bB({
        ...a,
        receiptsAPI: P.commentReceipts
      })), !w && !b.disableZoomViewportOnCommentSelection) {
        let o = t(e.id);
        if (o) {
          let t = Point.distance(e.canvasPosition, o?.canvasPosition);
          let a = _$$ez(i$, t, n.zoomScale);
          a > n.zoomScale && (x.setZoomScale(n.zoomScale, a), x.setCanvasSpaceCenter(e.canvasPosition, n, a));
        }
      }
    }, [P.commentReceipts, b, f, o, t, w, k, j, F, A, e, h, x]);
    let H = useCallback(() => {
      c(!0);
      o(NJ({
        threadId: m
      }));
    }, [o, m]);
    let V = useCallback(() => {
      requestAnimationFrame(() => {
        c(!1);
      });
      o(Oo({
        threadId: m
      }));
    }, [o, m]);
    let q = useCallback(() => {
      o(NJ({
        threadId: m
      }));
    }, [o, m]);
    return {
      isFocusedThread: d,
      onCanvasMentionSelect: L,
      onCommentFocus: H,
      onCommentBlur: V,
      onCommentMouseEnter: q,
      onCommentMouseLeave: useCallback(() => {
        l.current = !1;
        o(Oo({
          threadId: m
        }));
      }, [o, m]),
      onCommentSelect: U,
      onChangeResolveState: useCallback(e => {
        e.stopPropagation();
        o(oB());
        n && n(m, !r);
      }, [m, o, n, r]),
      onCanvasMentionCopyLink: S,
      openPostDetailModal: useCallback(() => {
        e.sidebarItemType === kT.FEED_POST && o(showModalHandler({
          type: _$$K,
          data: {
            postUuid: e.feedPostPublicUuid,
            inFileView: !0
          }
        }));
      }, [o, e])
    };
  }(element, getClosestThread, onResolveComment);
  let {
    scrollableRef
  } = e;
  let {
    isActive
  } = t;
  useEffect(() => {
    b.current || !isActive || x || scrollableRef.current?.scrollToRow(H);
  }, [isActive, H, x, scrollableRef]);
  let ee = w?.id;
  let et = useMemo(() => !!Vk(element.sidebarItemType) && (!_$$m(element.sidebarItemType) || (j && ee ? To(element, j, ee) : null)), [j, ee, element]);
  let en = useHandleMouseEvent(`comment-sidebar-comment-${element.id}`, "click", onCommentSelect);
  let eo = _$$k2();
  let ea = WN();
  eo && (en = () => ea("SELECT_COMMENT_SIDEBAR"));
  element.isCanvasMention && (en = onCanvasMentionSelect);
  let ei = element.comments.length - 1;
  let er = m ? getI18nString("comments.aria_label_select_comment_descriptive_unread", {
    authorString: l[0].avatar_user_handle,
    contentString: _$$F(element.comments[0].message_meta[0]?.t) ?? "",
    replyString: getI18nString("comments.reply_count", {
      replyCount: ei
    })
  }) : getI18nString("comments.aria_label_select_comment_descriptive", {
    authorString: l[0].avatar_user_handle,
    contentString: _$$F(element.comments[0].message_meta[0]?.t) ?? "",
    replyString: getI18nString("comments.reply_count", {
      replyCount: ei
    })
  });
  let el = element.isCanvasMention ? onCanvasMentionCopyLink : e.extras.copyLink;
  let ed = useCallback(() => {
    requestAnimationFrame(() => v.current?.focus());
  }, []);
  let ec = jsx(eS, {
    avatars: l,
    copyLink: el,
    hideOrphanedState: e.extras.hideOrphanedState,
    hideParentName: e.extras.hidePageName,
    hideResolve: e.extras.hideResolve || !!element.isCanvasMention,
    isFocusedThread,
    isPendingFromSinatra: h,
    isResolved: c,
    isUnavailable: I,
    isUnread: m,
    metaAddon: e.extras.metaAddon,
    onChangeResolveState,
    onDeleteThread: e.extras.onDeleteThread,
    onDeleteThreadCancel: ed,
    onDeleteThreadComplete: e.extras.onDeleteThreadComplete,
    openPostDetailModal,
    optionsMenuRef: f,
    orderId: element.comments[0].order_id || null,
    parentName: U,
    thread: element,
    userCanResolveThread: et
  });
  return jsx(Fragment, {
    children: getFeatureFlags().fpl_card_primitive_migration ? jsxs(bL, {
      className: "comments_row_presentation--cardRoot--PjGzu",
      children: [jsx(O6, {
        ref: v,
        htmlAttributes: {
          onBlur: onCommentBlur,
          onFocus: onCommentFocus,
          onMouseEnter: onCommentMouseEnter,
          onMouseLeave: onCommentMouseLeave
        },
        className: "comments_row_presentation--cardButton--5hUiX",
        onClick: en,
        "aria-label": er,
        "aria-expanded": element.isActive
      }), ec]
    }) : jsx(R, {
      onClick: en,
      onBlur: onCommentBlur,
      onFocus: onCommentFocus,
      onMouseEnter: onCommentMouseEnter,
      onMouseLeave: onCommentMouseLeave,
      ariaLabel: er,
      selected: element.isActive,
      display: "flex",
      children: ec
    })
  });
});
let e1 = memo(function (e) {
  let {
    index,
    start,
    measureRef
  } = e.virtualItem;
  let {
    setSize
  } = e;
  let r = useRef(index);
  useEffect(() => {
    r.current = index;
  }, [index, r]);
  let l = useCallback(e => {
    let t = e?.getBoundingClientRect().height;
    t && setSize(r.current, t);
    measureRef(e);
  }, [r, measureRef, setSize]);
  return jsx("div", {
    ref: l,
    style: {
      position: "absolute",
      top: start,
      left: 0,
      width: "100%"
    },
    children: e.children
  });
});
function e2(e) {
  let t = useRef(null);
  let {
    elements
  } = e;
  let i = Lc();
  let s = useRef(elements);
  useEffect(() => {
    s.current = elements;
  }, [elements]);
  let r = wY(t);
  let {
    estimatedSize
  } = e;
  let d = useRef(null);
  let c = useRef(new Map());
  let m = useCallback(e => 0 === elements.length ? 0 : c.current.get(e) || estimatedSize, [elements, estimatedSize]);
  let u = useCallback((e, t) => {
    c.current.set(e, t);
  }, []);
  let p = _$$z({
    size: elements.length,
    parentRef: d,
    estimateSize: m,
    overscan: 10,
    paddingEnd: i
  });
  let h = p.scrollToIndex;
  let f = useRef({
    scrollToRow: t => {
      h(elements.findIndex(n => n[e.elementKey] === t));
    }
  });
  useEffect(() => {
    f.current = {
      scrollToRow: t => {
        h(elements.findIndex(n => n[e.elementKey] === t));
      }
    };
  }, [elements, h, e.elementKey]);
  return jsx("div", {
    ref: t,
    className: "comments_sidebar_list--container--VBa2a",
    children: jsx(_$$P, {
      scrollContainerRef: d,
      height: r?.height || 0,
      children: jsx("div", {
        style: {
          height: `${p.totalSize}px`,
          width: "100%",
          position: "relative",
          marginTop: "var(--spacer-1)"
        },
        children: p.virtualItems.map(t => {
          let n = e.elements[t.index];
          let a = n[e.elementKey];
          let i = e.row;
          return jsx(e1, {
            virtualItem: t,
            setSize: u,
            children: jsx(i, {
              element: n,
              dataset: s,
              scrollableRef: f,
              extras: e.extras
            })
          }, a);
        })
      })
    })
  });
}
let e5 = memo(function (e) {
  let {
    onResolveComment,
    hideResolve,
    copyLink,
    hidePageName,
    hideOrphanedState,
    onDeleteThread,
    onDeleteThreadComplete,
    metaAddon
  } = e;
  let m = $I(e.items);
  let u = useMemo(() => ({
    onResolveComment,
    getClosestThread: m,
    hideResolve,
    copyLink,
    hidePageName,
    hideOrphanedState,
    onDeleteThread,
    onDeleteThreadComplete,
    metaAddon
  }), [onResolveComment, m, hideResolve, copyLink, hidePageName, hideOrphanedState, onDeleteThread, onDeleteThreadComplete, metaAddon]);
  return jsx(e2, {
    elements: e.items,
    elementKey: "id",
    row: e0,
    estimatedSize: 133,
    extras: u
  });
});
let tt = forwardRef((e, t) => {
  let {
    searchInputRef,
    onMouseDown,
    onMouseUp,
    onClearSearchClick,
    onClearSearchKeyDown,
    onBlur,
    onSearchKeyDown,
    onSearchChange
  } = ne(e, t);
  let h = useCallback(e => {
    e.stopPropagation();
    onSearchKeyDown(e);
  }, [onSearchKeyDown]);
  let f = useCallback(e => {
    "Enter" === e.key && onClearSearchKeyDown(e);
    e.stopPropagation();
  }, [onClearSearchKeyDown]);
  return jsx("div", {
    className: "sidebar_search--searchContainer--eU94N",
    children: getFeatureFlags().a11y_comments_search ? jsx(_$$D, {
      ref: searchInputRef,
      "aria-description": getI18nString("general.search_will_update"),
      "aria-label": getI18nString("comments.search"),
      disabled: e.disabled,
      onChange: e.onChange,
      onKeyDown: onSearchKeyDown,
      placeholder: e.placeholder || getI18nString("general.search"),
      recordingKey: e.recordingKey,
      spellCheck: !1,
      value: e.query
    }) : jsxs(Fragment, {
      children: [jsx(_$$h, {}), jsx(_$$L2, {
        ref: searchInputRef,
        className: "sidebar_search--searchInput--ySEJ2 text--fontPos11--2LvXf text--_fontBase--QdLsd ellipsis--ellipsis--Tjyfa",
        onBlur,
        onChange: onSearchChange,
        onKeyDown: h,
        onMouseDown,
        onMouseUp,
        placeholder: e.placeholder || getI18nString("search.sidebar_search_placeholder"),
        spellCheck: !1,
        value: e.query
      }), !!e.query && jsx("button", {
        className: "sidebar_search--xIcon--1xoiw",
        onClick: onClearSearchClick,
        onKeyDown: f,
        "aria-label": getI18nString("search.sidebar_search_clear"),
        children: jsx(_$$L, {})
      })]
    })
  });
});
tt.displayName = "sidebarSearchBar";
let tl = createOptimistThunk((e, t) => {
  let n = XHR.put(`/api/file/${t.key}/file_followers`, {
    notification_preference: t.notification_preference
  }).catch(t => {
    let n = t.data?.message || "An error occurred while updating notification preference.";
    e.dispatch(_$$s2.flash(n));
    console.error(t);
  });
  let o = e.getState().user?.id;
  t.id ? WB()?.optimisticallyUpdate({
    FileFollower: {
      [t.id]: {
        notificationPreference: t.notification_preference
      }
    }
  }, n) : o && WB()?.optimisticallyCreate({
    FileFollower: {
      [`optimistic-id-${t.key}`]: {
        key: t.key,
        userId: o,
        notificationPreference: t.notification_preference,
        unreadComments: null,
        statusChangeNotifs: !1
      }
    }
  }, n);
});
var tc = (e => (e.ALL = "all", e.PARTICIPATING = "participating", e.NONE = "none", e))(tc || {});
function tp() {
  let e = useSelector(selectOpenFileKey);
  let t = selectCurrentUser();
  let n = jp();
  let s = I_();
  let r = fr();
  let l = n6();
  let d = m0();
  let c = useDispatch();
  let m = useSelector(e => e.mirror.appModel.showComments);
  let h = useCallback(() => {
    fullscreenValue.triggerAction("toggle-show-comments", {
      source: "comments_sidebar_setting"
    });
  }, []);
  let f = selectWithShallowEqual(e => e.mirror.appModel.keyboardShortcuts);
  let _ = c1(f, "toggle-show-comments");
  let v = am();
  if (useEffect(() => {
    v("Properties Panel Comments Tab Settings Opened");
  }, [v]), !e || !t) return null;
  if ("loaded" !== n.status) return jsx(mc, {
    children: jsx(q7, {
      disabled: !0,
      onClick: lQ,
      children: renderI18nText("comments.error_loading_notification_preferences")
    })
  });
  let x = n?.data?.notificationPreference || tc.NONE;
  let b = n?.data?.statusChangeNotifs ?? !1;
  let y = t => {
    t !== x && (c(tl({
      id: n?.data?.id,
      key: e,
      notification_preference: t
    })), v("Comments Notification Preference Changed", {
      newPreference: t,
      fileKey: e
    }));
  };
  let C = o => {
    if (o === b) return;
    let a = notificationAPI.updateStatusChangePreferences({
      fileKey: e,
      optIn: o
    }).catch(e => {
      let t = e.data?.message || "An error occurred while updating status change preference.";
      c(_$$s2.flash(t));
      console.error(e);
    });
    n?.data?.id ? WB()?.optimisticallyUpdate({
      FileFollower: {
        [n?.data?.id]: {
          statusChangeNotifs: o
        }
      }
    }, a) : t?.id && WB()?.optimisticallyCreate({
      FileFollower: {
        [`optimistic-id-${e}`]: {
          key: e,
          userId: t.id,
          notificationPreference: null,
          unreadComments: null,
          statusChangeNotifs: o
        }
      }
    }, a);
    v("Dev Mode Notification Preference Changed", {
      newPreference: o,
      fileKey: e
    });
  };
  return jsxs(mc, {
    children: [jsxs(H_, {
      checked: !m,
      onChange: h,
      children: [renderI18nText("comments.hide_comments"), _ && jsx(Ov, {
        children: jsx(ME, {
          children: jsx(rm, {
            children: _
          })
        })
      })]
    }, "preference"), jsx(wv, {}), jsxs(z6, {
      onChange: e => y(e),
      title: jsx(hE, {
        children: renderI18nText("comments.comment_notifications")
      }),
      value: x,
      children: [jsx(CU, {
        value: tc.ALL,
        children: renderI18nText("comments.everything_option")
      }, "notification-all"), jsx(CU, {
        value: tc.PARTICIPATING,
        children: renderI18nText("comments.just_mentions_and_replies_option")
      }, "notification-participating"), jsx(CU, {
        value: tc.NONE,
        children: renderI18nText("comments.nothing_option")
      }, "notification-none")]
    }, "comment-notification-title"), d && jsxs(z6, {
      title: jsx(hE, {
        children: renderI18nText("comments.dev_mode_notifications")
      }),
      onChange: e => C("true" === e),
      value: b ? "true" : "false",
      children: [jsx(CU, {
        value: "true",
        children: renderI18nText("comments.status_changes")
      }, "notification-dm-status-changes"), jsx(CU, {
        value: "false",
        children: renderI18nText("comments.nothing_option")
      }, "notification-dm-none")]
    }, "dev-mode-notification-title"), jsx(q7, {
      onClick: () => {
        let e = s.commentReceipts;
        e && r && c(Tb({
          commentReceiptsAPI: e,
          canvasMentionReceiptsAPI: r
        }));
      },
      disabled: 0 === l,
      children: renderI18nText("comments.mark_all_as_read")
    }, "mark_all_read")]
  });
}
let tf = "comments_sidebar_header--headerIconButton--JiHD6";
let t_ = "comments_sidebar_header--headerIconButtonSel--3-zXH";
function tg(e) {
  let t = useDispatch();
  let {
    getTriggerProps,
    manager
  } = _$$b();
  let r = _$$k2();
  let l = WN();
  _$$Z2(manager);
  let d = useLatestRef(manager.isOpen);
  return (useEffect(() => {
    if (d !== manager.isOpen) {
      if (r) return l("SELECT_COMMENT_SIDEBAR");
      t(UU());
    }
  }, [t, r, manager.isOpen, d, l]), e.hideSettingsDropdown) ? null : jsxs(_$$bL, {
    manager,
    children: [jsx(_$$d, {
      ...getTriggerProps(),
      "aria-label": getI18nString("comments.settings"),
      children: jsx(_$$J, {
        className: W()(manager.isOpen && t_)
      })
    }), jsx(tp, {})]
  });
}
function tb({
  activeFilters: e,
  ...t
}) {
  let n = useDispatch();
  let {
    getTriggerProps,
    manager
  } = _$$b();
  let l = useMemo(() => {
    let t = new Set(e);
    e.has(mW.RESOLVED) ? t.$$delete(mW.RESOLVED) : t.add(mW.RESOLVED);
    return t;
  }, [e]);
  let d = t.filters.some(e => l.has(e));
  let c = "all" !== t.activeMode;
  let m = (d || c) && !manager.isOpen;
  let h = useMemo(() => {
    let e = [];
    t.sorts.length > 0 && e.push(jsx(z6, {
      title: jsx(r1, {
        children: getI18nString("comments.sort")
      }),
      onChange: t.threadManager.setSort,
      value: t.activeSort,
      children: t.sorts.map(e => jsx(CU, {
        value: e,
        children: L9(e)
      }, `sort-option-${e}`))
    }, "sort-group"));
    t.filters.length > 0 && e.push(jsx($Q, {
      title: jsx(r1, {
        children: getI18nString("comments.filter")
      }),
      onChange: e => {
        let n = new Set(e);
        let o = new Set(l);
        new Set([...Array.from(n).filter(e => !o.has(e)), ...Array.from(o).filter(e => !n.has(e))]).forEach(t.threadManager.toggleFilter);
      },
      selectedItems: Array.from(l),
      children: t.filters.map(e => jsx(a2, {
        value: e,
        disabled: vO[t.activeMode].includes(e),
        children: T4(e)
      }, `filter-option-${e}`))
    }, "filter-group"));
    t.modes && t.modes.length > 0 && e.push(jsx(z6, {
      title: jsx(r1, {
        children: getI18nString("comments.mode")
      }),
      onChange: t.threadManager.setMode,
      value: t.activeMode,
      children: t.modes.map(e => jsx(CU, {
        value: e,
        children: _$$ek(e)
      }, `mode-option-${e}`))
    }, "mode-group"));
    return e;
  }, [t.sorts, t.filters, t.modes, t.activeSort, t.threadManager, t.activeMode, l]);
  let f = useLatestRef(manager.isOpen) ?? !1;
  useEffect(() => {
    f !== manager.isOpen && n(UU());
  }, [n, manager.isOpen, f]);
  return jsxs(_$$bL, {
    manager,
    children: [jsx(_$$d, {
      ...getTriggerProps(),
      "aria-label": getI18nString("comments.sort_filter"),
      children: jsx(_$$B, {
        className: W()(m ? "comments_sidebar_header--sortButtonActive--sPnuw" : tf, manager.isOpen && t_),
        svg: m ? _$$A8 : _$$A7
      })
    }), jsx(mc, {
      children: h
    })]
  });
}
function ty(e) {
  let t = useDispatch();
  let n = useCallback(() => {
    t(UU());
    e.threadManager.setQuery("");
  }, [t, e.threadManager]);
  let s = useCallback(n => {
    t(UU());
    e.threadManager.setQuery(n);
  }, [t, e.threadManager]);
  return jsx(Fragment, {
    children: jsxs("div", {
      className: e.stackHeader ? "comments_sidebar_header--sidebarHeaderStacked--qkQGM comments_sidebar_header--sidebarHeader--BwT0H text--fontPos11--2LvXf text--_fontBase--QdLsd" : "comments_sidebar_header--sidebarHeader--BwT0H text--fontPos11--2LvXf text--_fontBase--QdLsd",
      children: [jsx(tt, {
        focusOnMount: !1,
        query: e.activeQuery || "",
        clearSearch: n,
        onChange: s
      }), jsxs("div", {
        className: "comments_sidebar_header--sidebarHeaderButtons--XMkx3",
        children: [jsx(tb, {
          activeFilters: e.activeFilters,
          activeMode: e.activeMode,
          activeSort: e.activeSort,
          filters: e.filters,
          modes: e.modes,
          sorts: e.sorts,
          threadManager: e.threadManager
        }), jsx(tg, {
          hideSettingsDropdown: e.hideSettingsDropdown
        }), e.onCloseButton && jsx(Jn, {
          className: tf,
          recordingKey: "threadHeader",
          onClick: e.onCloseButton,
          innerText: getI18nString("comments.close_sidebar"),
          "aria-label": getI18nString("comments.close_sidebar")
        })]
      })]
    })
  });
}
function tw(e) {
  return jsx("div", {
    className: "empty_state_message_view--emptyStateWrapper--QSOXE",
    children: jsxs("div", {
      className: "empty_state_message_view--emptyStateInner--XVxQ0",
      children: [jsx(_$$B, {
        className: "empty_state_message_view--commentTool--lg4bm",
        svg: _$$A9
      }), jsx("div", {
        className: "empty_state_message_view--emptyStateMessage--3q4Qh",
        children: e.message
      })]
    })
  });
}
function tj(e) {
  return e.hasActiveQuery ? jsx(tw, {
    message: getFeatureFlags().a11y_comments_search ? jsx(_$$T, {
      role: "alert",
      children: renderI18nText("comments.no_comments_matched_your_search")
    }) : renderI18nText("comments.no_comments_matched_your_search")
  }) : {
    filters: e.filters
  }.filters.has("yours") ? jsx(tw, {
    message: renderI18nText("comments.when_you_leave_a_comment_or_get_mentioned_in_one_it_ll_show_up_here")
  }) : jsx(tw, {
    message: renderI18nText("comments.give_feedback_ask_a_question_or_just_leave_a_note_of_appreciation_click_anywhere_in_the_file_to_leave_a_comment")
  });
}
function tk({
  loadedSidebarItems: e,
  ...t
}) {
  let n = dH();
  let {
    activeQuery,
    activeFilters
  } = useContext(hh);
  let r = !activeQuery || activeQuery && !e.length;
  let l = e.length;
  let d = useFullscreenReady();
  let c = _$$k2();
  return T8(jsxs(Fragment, {
    children: [d && jsx(Mw, {
      panelName: ON.COMMENTS
    }), r && !l && !c && jsx(tj, {
      hasActiveQuery: !!activeQuery,
      filters: activeFilters,
      empty: !e.length
    }), jsx(e5, {
      items: e,
      onResolveComment: t.onResolveComment,
      hideResolve: t.hideResolve,
      copyLink: t.copyLink,
      onDeleteThread: t.onDeleteThread,
      onDeleteThreadComplete: t.onDeleteThreadComplete,
      hidePageName: t.hidePageName,
      hideOrphanedState: t.hideOrphanedState
    })]
  }), _$$e.COMMENTS_TOOL, {
    currentTool: n
  });
}
let tP = e => e.stopPropagation();
let tI = [hJ.COMMENTS_ONLY, hJ.POSTS_ONLY];
export function $$tT0(e) {
  let t = useDispatch();
  let {
    activeQuery,
    activeSort,
    activeMode,
    activeFilters,
    filteredSidebarItems,
    threadManager
  } = useContext(hh);
  let x = Qj();
  let b = Yo();
  let j = lM();
  let P = useMemo(() => e.sorts && Array.from(e.sorts) || x, [e.sorts, x]);
  let I = useMemo(() => e.filters && Array.from(e.filters) || b, [e.filters, b]);
  let T = useMemo(() => _$$y() && !j ? tI : void 0, [j]);
  let M = useMemo(() => "loaded" === filteredSidebarItems.status && filteredSidebarItems.data || [], [filteredSidebarItems]);
  let E = useRef(M);
  useEffect(() => {
    E.current = M;
  }, [M, E]);
  let N = useCallback((e, n) => {
    let o = E.current.find(t => t.id === e);
    o && t(hx({
      thread: o,
      resolved: n
    }));
    let a = oS(activeFilters, mW.RESOLVED);
    n && !a && A.current?.focus();
  }, [E, t, activeFilters]);
  let S = useCallback(e => {
    assertNotNullish(e.comments[0], "thread.comments[0] is null");
    t(Mv({
      comment: e.comments[0]
    }));
  }, [t]);
  let D = useCallback(() => {
    requestAnimationFrame(() => A.current?.focus());
  }, []);
  let A = useRef(null);
  let L = e.isShown ?? !0;
  useEffect(() => {
    if (!L) return;
    let e = A.current;
    if (!e) return;
    let t = () => (e?.focus(), document.activeElement === e);
    requestAnimationFrame(() => {
      t() || setTimeout(t, 100);
    });
  }, [L]);
  let {
    disableSidebar
  } = Z5();
  let O = useCallback(() => {
    uw({
      disableSidebar: !1
    });
  }, []);
  let F = _$$v();
  let B = e.copyLinkOverride ?? F;
  let U = U1(A);
  return disableSidebar ? jsxs("div", {
    className: _$$s.flex.flexColumn.justifyStart.alignCenter.m8.mt18.$,
    children: [renderI18nText("comments.you_have_disabled_the_comments_sidebar_via_the_debug_menu"), jsx("div", {
      className: _$$s.flex.flexRow.justifyCenter.alignCenter.$,
      children: jsx("button", {
        className: _$$s.p10.w100.m8.$,
        style: {
          backgroundColor: "green",
          color: "white"
        },
        onClick: O,
        children: renderI18nText("comments.re_enable")
      })
    })]
  }) : jsxs("div", {
    className: "comments_sidebar--container--g86FO",
    "data-comments-sidebar": !0,
    onKeyDown: e => {
      fullscreenValue.isReady() && "Escape" === e.key && fullscreenValue.triggerAction("set-tool-default");
      tP(e);
    },
    onMouseDown: tP,
    ref: U,
    tabIndex: -1,
    "aria-label": getI18nString("fullscreen.accessibility.comments_sidebar"),
    "data-fullscreen-intercept": !0,
    children: [jsx(ty, {
      activeFilters,
      activeMode,
      activeQuery,
      activeSort,
      filters: I,
      hideSettingsDropdown: e.hideSettingsDropdown,
      modes: T,
      onCloseButton: e.onCloseButton,
      sorts: P,
      stackHeader: e.stackHeader,
      threadManager
    }), jsx(_$$x, {
      className: "comments_sidebar--loading--7fXvY",
      isLoading: "loading" === filteredSidebarItems.status,
      children: () => jsx(tk, {
        hidePageName: e.hidePageName,
        hideOrphanedState: e.hideOrphanedState,
        onResolveComment: N,
        copyLink: B,
        onDeleteThread: S,
        onDeleteThreadComplete: D,
        hideResolve: e.hideResolve,
        loadedSidebarItems: M
      })
    })]
  });
}
export const B = $$tT0;