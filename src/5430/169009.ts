import _require4 from "../draftjs_composer/925133";
import _require3 from "../draftjs_composer/144893";
import _require2 from "../draftjs_composer/577988";
import _require from "../draftjs_composer/577988";
import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useDispatch, useSelector, connect } from "react-redux";
import { isOrgOrTeamExport, isResourcePublicWithComments, getAcceptedPublisherProfile, isCommentingEnabled } from "../figma_app/740025";
import { PR, MK, Cw } from "../figma_app/599979";
import { DropdownReportAction, DropdownCommunityType, DROPDOWN_TYPE_GENERIC_COMMENT_MENU, DropdownEnableState } from "../figma_app/188152";
import { selectCurrentUser } from "../905/372672";
import { useRef, useEffect, useState, useCallback, cloneElement, useMemo } from "react";
import { Button } from "../905/521428";
import { trackEventAnalytics } from "../905/449184";
import { hasMorePages } from "../figma_app/661371";
import { LoadingSpinner } from "../figma_app/858013";
import { x as _$$x } from "../905/211326";
import { IntersectionSentinel } from "../905/925868";
import { getI18nString, renderI18nText } from "../905/303541";
import { getSearchSessionIdFromSelector } from "../figma_app/387599";
import { Zl, getResourceType } from "../figma_app/427318";
import { hJ, XY } from "../905/506641";
import { setCommentsActiveFeedType, restrictProfileThunk, unrestrictProfileThunk, followEntityThunk, unfollowEntityThunk, fetchCommentsThunk, setCommentStateThunk, resetCommentState } from "../figma_app/530167";
import { COMMUNITY_TIMEOUT } from "../figma_app/350203";
import { t0 } from "../figma_app/198840";
import { CommentTabType, ResourceTypeNoComment } from "../figma_app/45218";
import { E as _$$E, d as _$$d } from "../5430/165157";
import { hideDropdownAction, showDropdownThunk } from "../905/929976";
import { setShowResolved, removeCommentsByAuthor, reportComment, deleteComment } from "../figma_app/703138";
import { Um } from "../905/848862";
import { p as _$$p } from "../905/927118";
import { j as _$$j } from "../905/834956";
import { T as _$$T } from "../5132/203178";
import { Link } from "react-router-dom";
import { IconButton } from "../905/443068";
import { J as _$$J } from "../905/125993";
import H from "classnames";
import { h1 } from "../905/986103";
import { SvgComponent } from "../905/714743";
import { Badge, BadgeColor } from "../figma_app/919079";
import { AG } from "../figma_app/999312";
import { y as _$$y } from "../905/158417";
import { isResourceHubProfilesEnabled } from "../figma_app/275462";
import { KindEnum } from "../905/129884";
import { Ro } from "../figma_app/805373";
import { HH } from "../figma_app/841415";
import { ky } from "../figma_app/99826";
import { VisualBellActions } from "../905/302958";
import { CommunityRoute } from "../figma_app/354658";
import { lW } from "../figma_app/11182";
import { showModalHandler } from "../905/156213";
import { E as _$$E2 } from "../905/565019";
import { H as _$$H } from "../5430/304640";
import { SecureLink } from "../figma_app/637027";
import { UserAvatar, AvatarSize } from "../905/590952";
import { registerModal } from "../905/102752";
import { ConfirmationModal2 } from "../figma_app/918700";
import { zC, RZ } from "../5430/39369";
import { setupLazyComponentFactory } from "../905/992467";
import { A as _$$A } from "../svg/724030";
function p(e) {
  let t = useRef(null);
  useEffect(() => {
    let r = () => {
      window.innerHeight < (t.current?.getBoundingClientRect().bottom || 1 / 0) || e.onScrollToBottom();
    };
    window.addEventListener("scroll", r);
    return () => window.removeEventListener("scroll", r);
  }, [e]);
  return jsxs("div", {
    ref: t,
    children: [e.children, e.showLoader && jsx("div", {
      className: "infinite_scroll_container--loadingSpinner--UMKR8",
      children: jsx(LoadingSpinner, {})
    })]
  });
}
function h(e) {
  let {
    onScrollToBottom,
    children,
    showLoader
  } = e;
  return jsx(p, {
    onScrollToBottom,
    children,
    showLoader
  });
}
h.displayName = "WithInfiniteScroll";
let k = "comments_view--loader--tz-FD";
let A = "comments-sort-dropdown";
let P = "SHOW_RESOLVED";
let M = function ({
  labelClassName: e,
  includeShowResolved: t,
  isLoggedIn: r
}) {
  let n = useDispatch();
  let o = Um();
  let a = useSelector(e => e.communityHub.comments.activeFeedType);
  let l = useSelector(e => e.communityHub.comments.showResolved);
  let d = useRef(null);
  let [m, _] = useState(null);
  let p = o?.type === A;
  let h = {
    ALL: "All",
    ME: "Your comments",
    COMMENTS: "Comments only",
    RATINGS_REVIEWS: "Reviews only"
  };
  let x = e => {
    switch (e) {
      case h.ALL:
        return getI18nString("community.comments.all");
      case h.ME:
        return getI18nString("community.comments.your_comments");
      case h.COMMENTS:
        return getI18nString("community.comments.comments_only");
      case h.RATINGS_REVIEWS:
        return getI18nString("community.comments.reviews_only");
      default:
        return "";
    }
  };
  let f = o?.data?.targetRect;
  useEffect(() => {
    f && _(f);
  }, [f]);
  let g = Object.keys(h).filter(e => r || e !== CommentTabType.ME).filter(e => e !== CommentTabType.RATINGS_REVIEWS && e !== CommentTabType.COMMENTS).map(e => ({
    displayText: x(h[e]),
    name: e,
    isChecked: e === a
  }));
  t && (g.push({
    displayText: "",
    separator: !0,
    name: void 0
  }), g.push({
    displayText: getI18nString("community.comments.show_resolved"),
    isChecked: l,
    name: P
  }));
  return jsxs("div", {
    children: [jsxs("div", {
      onClick: e => {
        e.stopPropagation();
        let t = d.current;
        p ? n(hideDropdownAction()) : t && (_(t.getBoundingClientRect()), n(showDropdownThunk({
          type: A
        })));
      },
      className: e || "comments_view--commentsSortLabel--mpkGD",
      children: [x(h[a]), jsx("span", {
        ref: d,
        children: jsx(_$$p, {
          svgContainerClassName: "comments_view--commentsSortChevron--989-q",
          showingDropdown: p
        })
      })]
    }), p && m && jsx(_$$j, {
      dispatch: n,
      items: g,
      parentRect: m,
      onSelectItem: e => {
        trackEventAnalytics("Comments Filter Changed", {
          thread_type: "community_preview",
          view: e.name
        });
        e.name && (e.name === P ? n(setShowResolved(!l)) : n(setCommentsActiveFeedType(e.name)));
      },
      minWidth: 164,
      showPoint: !0
    })]
  });
};
var U = H;
function $() {
  return jsx(Badge, {
    text: getI18nString("community.comments.creator"),
    color: BadgeColor.TOOLBAR,
    className: "creator_badge--creatorBadge--P5vsL"
  });
}
let $$X = "comment_tile--commentContainerFadeOut--AMWrR";
let J = "comment_tile--nextSiblingCommentReset--4shUj";
function K(e) {
  return document.querySelector(`[data-comment-id="${e}"]`);
}
let ee = {
  fadeOut: async (e, t) => {
    t || (t = {
      resetNextComment: !1
    });
    let r = K(e);
    if (!r) return;
    let s = r.getBoundingClientRect();
    r.classList.add($$X);
    let i = r.nextSibling;
    i && (i.style.marginTop = `-${s.height - 1}px`);
    await new Promise(e => setTimeout(e, ee.ANIMATION_LENGTH));
    t.resetNextComment && ee.resetNextComment(i?.getAttribute("data-comment-id") ?? void 0);
    return i?.getAttribute("data-comment-id") ?? void 0;
  },
  resetNextComment: e => {
    let t = e && K(e);
    t && (t.classList.add(J), t.style.marginTop = "0px", setTimeout(() => t.classList.remove(J), 50));
  },
  fadeIn: e => {
    let t = document.querySelector(`[data-comment-id="${e}"]`);
    if (!t) return;
    t.classList.remove($$X);
    let r = t.nextSibling;
    r && (r.style.marginTop = "0px");
  },
  ANIMATION_LENGTH: 400
};
let ep = registerModal(function (e) {
  let t = e.reportType === DropdownReportAction.REPORT_AND_HIDE;
  let r = t ? getI18nString("community.comments.report_and_hide_author_name_s_comment", {
    authorName: e.comment.author.name
  }) : getI18nString("community.comments.report_author_name_s_comment", {
    authorName: e.comment.author.name
  });
  let i = jsxs("p", {
    className: zC,
    children: [t ? getI18nString("community.comments.this_will_flag_the_comment_for_review_and_hide_it_for_everyone") : getI18nString("community.comments.this_will_flag_the_comment_for_review"), " ", getI18nString("community.comments.comment_author_will_not_be_notified", {
      authorName: e.comment.author.name
    }), " ", renderI18nText("community.comments.please_read_our_link_before_reporting", {
      link: jsx(SecureLink, {
        href: "https://help.figma.com/hc/articles/360038510573-Figma-Community-Guidelines",
        target: "_blank",
        trusted: !0,
        children: renderI18nText("community.community_guidelines")
      })
    })]
  });
  return jsx(ConfirmationModal2, {
    confirmationTitle: r,
    confirmText: getI18nString("community.comments.report"),
    onConfirm: () => e.onReport(e.comment.id),
    destructive: !0,
    children: jsxs("div", {
      className: RZ,
      "data-testid": "comment-confirm-report-modal-content",
      children: [jsx(UserAvatar, {
        user: e.comment.author,
        size: AvatarSize.LARGE
      }), i]
    })
  });
}, "CommentConfirmReportModal");
var eh = (e => (e.COPY_LINK = "Copy link", e.EDIT = "Edit", e.DELETE = "Delete", e.DELETE_THREAD = "Delete thread", e.FOLLOW_PROFILE = "Follow", e.UNFOLLOW_PROFILE = "Unfollow", e.BLOCK_PROFILE_COMMENTING = "Restrict user's comments", e.UNBLOCK_PROFILE_COMMENTING = "Unrestrict user's comments", e.REPORT_COMMENT = "Report", e.REPLY = "Reply", e))(eh || {});
function ex(e) {
  return {
    name: e,
    displayText: function (e) {
      switch (e) {
        case "Copy link":
          return getI18nString("community.comments.copy_link");
        case "Edit":
          return getI18nString("community.comments.edit");
        case "Delete":
          return getI18nString("community.comments.delete");
        case "Delete thread":
          return getI18nString("community.comments.delete_thread");
        case "Follow":
          return getI18nString("community.follow.follow");
        case "Unfollow":
          return getI18nString("community.follow.unfollow");
        case "Restrict user's comments":
          return getI18nString("community.comments.restrict_user_s_comments");
        case "Unrestrict user's comments":
          return getI18nString("community.comments.unrestrict_user_s_comments");
        case "Report":
          return getI18nString("community.comments.report_comment");
        case "Reply":
          return getI18nString("community.comments.reply");
      }
    }(e)
  };
}
function ef(e) {
  let t = useDispatch();
  let r = selectCurrentUser();
  let n = Zl[e.resourceType];
  let o = e.resourceId;
  let c = () => {
    e.onEdit?.();
  };
  let d = () => {
    e.onDelete && t(showModalHandler({
      type: _$$E2,
      data: {
        onConfirm: () => e.onDelete()
      }
    }));
  };
  let m = () => {
    t(lW({
      stringToCopy: ky(new CommunityRoute({
        apiResourceType: n,
        resourceId: o
      }, {
        comment: e.comment.id
      }).href)
    }));
  };
  let _ = (s, i) => {
    t(restrictProfileThunk({
      blockedProfileId: i,
      profileId: s,
      onSuccess: () => {
        t(removeCommentsByAuthor({
          authorId: i,
          removeCommentsCallback: async e => {
            e.map(e => ee.fadeOut(e.id, {
              resetNextComment: !0
            }));
            await new Promise(e => setTimeout(e, ee.ANIMATION_LENGTH));
          }
        }));
        t(VisualBellActions.enqueue({
          message: getI18nString("community.comments.restricted_this_user_s_comments"),
          type: "profile-restricted-change"
        }));
        trackEventAnalytics("comment_profile_restricted", {
          restricted_by_profile_id: r?.community_profile_id,
          restricted_profile_id: i,
          entry_point: "comment",
          comment_id: e.comment.id
        });
      }
    }));
  };
  let p = (r, s) => {
    t(unrestrictProfileThunk({
      blockedProfileId: s,
      profileId: r,
      onSuccess: () => {
        t(VisualBellActions.enqueue({
          message: getI18nString("community.comments.unrestricted_this_user_s_comments"),
          type: "profile-restricted-change",
          button: {
            text: getI18nString("community.comments.undo"),
            action: () => {
              _(r, s);
            }
          }
        }));
        trackEventAnalytics("comment_profile_unrestricted", {
          unrestricted_by_profile_id: r,
          unrestricted_profile_id: s,
          comment_id: e.comment.id,
          entry_point: "comment"
        });
      }
    }));
  };
  let h = () => {
    let {
      profileIdToAdminResourceAs
    } = e;
    let s = e.comment?.author.id;
    profileIdToAdminResourceAs && s && t(showModalHandler({
      type: _$$H,
      data: {
        onBlock: () => _(profileIdToAdminResourceAs, s),
        confirmationTitle: getI18nString("community.comments.remove_comment_and_restrict_user"),
        confirmButtonText: getI18nString("community.comments.remove_and_restrict")
      }
    }));
  };
  let x = e => {
    t(followEntityThunk(e));
  };
  let f = e => {
    t(unfollowEntityThunk(e));
  };
  let g = async r => {
    let s = await ee.fadeOut(r);
    t(reportComment({
      commentId: r,
      userIsAdmin: !!e.userIsAdmin,
      onFinish: e => {
        e ? ee.fadeIn(r) : s && ee.resetNextComment(s);
      }
    }));
  };
  let b = e => {
    t(showModalHandler({
      type: ep,
      data: {
        comment: e,
        reportType: DropdownReportAction.REPORT_AND_HIDE,
        onReport: g
      }
    }));
  };
  let w = e => {
    t(showModalHandler({
      type: ep,
      data: {
        comment: e,
        reportType: DropdownReportAction.REPORT,
        onReport: g
      }
    }));
  };
  return jsx(_$$j, {
    dispatch: t,
    items: e.items,
    showPoint: !0,
    parentRect: e.parentRect,
    onSelectItem: (t, r) => {
      "Edit" === t.name ? c() : "Delete" === t.name || "Delete thread" === t.name ? d() : "Copy link" === t.name ? m() : "Follow" === t.name && e.comment.author.id ? x(e.comment.author.id) : "Unfollow" === t.name && e.comment.author.id ? f(e.comment.author.id) : "Restrict user's comments" === t.name && e.comment.author.id && e.profileIdToAdminResourceAs ? h() : "Unrestrict user's comments" === t.name && e.comment.author.id && e.profileIdToAdminResourceAs ? p(e.profileIdToAdminResourceAs, e.comment.author.id) : "Report" === t.name ? e.userIsAdmin ? b(e.comment) : w(e.comment) : "Reply" === t.name && e.onReply?.();
    },
    minWidth: 96,
    dataTestId: "comment-menu"
  });
}
function ey(e) {
  let t = [ex(eh.EDIT), ex(e.isThreadParent ? eh.DELETE_THREAD : eh.DELETE)];
  e.hideCopyLink || t.push(ex(eh.COPY_LINK));
  return jsx(ef, {
    comment: e.comment,
    parentRect: e.parentRect,
    items: t,
    onEdit: e.onEdit,
    onDelete: e.onDelete,
    resourceId: e.resourceId,
    resourceType: e.resourceType
  });
}
function eg(e) {
  let t = [];
  e.canReplyToComment && t.push(ex(eh.REPLY));
  e.hideCopyLink || t.push(ex(eh.COPY_LINK));
  t.push(ex(e.author.is_restricted_by_current_user ? eh.UNBLOCK_PROFILE_COMMENTING : eh.BLOCK_PROFILE_COMMENTING));
  t.push(ex(eh.REPORT_COMMENT));
  return jsx(ef, {
    profileIdToAdminResourceAs: e.profileIdToAdminResourceAs,
    comment: e.comment,
    parentRect: e.parentRect,
    items: t,
    onDelete: e.onDelete,
    onReply: e.onReply,
    userIsAdmin: !0,
    resourceId: e.resourceId,
    resourceType: e.resourceType
  });
}
function ev(e) {
  let t = [];
  e.userExists && t.push(ex(eh.REPORT_COMMENT));
  e.hideCopyLink || t.unshift(ex(eh.COPY_LINK));
  return jsx(ef, {
    comment: e.comment,
    parentRect: e.parentRect,
    items: t,
    resourceId: e.resourceId,
    resourceType: e.resourceType
  });
}
function eb(e) {
  var t;
  let r = selectCurrentUser();
  let o = useSelector(e => e.authedActiveCommunityProfile);
  let c = useSelector(t => t.communityHub.comments.commentsById[e.comment.id]);
  let d = useSelector(e => e.communityHub.comments.authorsById[c.author.id]);
  t = DropdownCommunityType.COMMUNITY;
  let u = !!r && t === DropdownCommunityType.COMMUNITY && !isOrgOrTeamExport(o) && c.author.profile_handle === r.community_profile_handle;
  let m = o?.id === e.profileIdToAdminResourceAs;
  return u ? jsx(ey, {
    comment: c,
    parentRect: e.parentRect,
    onEdit: () => e.onEdit(c),
    onDelete: () => e.onDelete(c),
    hideCopyLink: e.hideCopyLink,
    isThreadParent: e.isThreadParent,
    resourceId: e.resourceId,
    resourceType: e.resourceType
  }) : e.profileIdToAdminResourceAs && m ? jsx(eg, {
    author: d,
    canReplyToComment: !!e.onReply,
    comment: c,
    hideCopyLink: e.hideCopyLink,
    onDelete: e.onDelete,
    onReply: () => e.onReply?.(c),
    parentRect: e.parentRect,
    profileIdToAdminResourceAs: e.profileIdToAdminResourceAs,
    resourceId: e.resourceId,
    resourceType: e.resourceType
  }) : jsx(ev, {
    comment: c,
    parentRect: e.parentRect,
    userExists: !!r,
    hideCopyLink: e.hideCopyLink,
    resourceId: e.resourceId,
    resourceType: e.resourceType
  });
}
let ew = setupLazyComponentFactory("lazy_create_comment_composer", {
  isCodesplit: !0,
  ComponentFactory: async () => ({
    default: (await Promise.all([]).then(_require2)).CreateCommentComposer
  })
});
let eC = setupLazyComponentFactory("lazy_edit_comment_composer", {
  isCodesplit: !0,
  ComponentFactory: async () => ({
    default: (await Promise.all([]).then(_require3)).EditCommentComposer
  })
});
let eL = setupLazyComponentFactory("lazy_reply_comment_composer", {
  isCodesplit: !0,
  ComponentFactory: async () => ({
    default: (await Promise.all([]).then(_require4)).ReplyCommentComposer
  })
});
setupLazyComponentFactory("lazy_comment_editable_typeahead", {
  isCodesplit: !0,
  ComponentFactory: async () => ({
    default: (await Promise.all([]).then(_require)).CommentEditableTypeahead
  })
});
function eI(e) {
  let t = AG();
  let r = isResourceHubProfilesEnabled();
  let {
    comment,
    author,
    userIsAuthor,
    isAuthorAcceptedPublisher
  } = e;
  let [m, _] = useState(!1);
  let p = useRef(null);
  let h = useSelector(e => e.dropdownShown);
  let x = useDispatch();
  let [f, v] = useState(!1);
  let [b, j] = useState(null);
  let w = useCallback(() => {
    h?.type === DROPDOWN_TYPE_GENERIC_COMMENT_MENU && x(hideDropdownAction());
  }, [h, x]);
  useEffect(() => (window.addEventListener("scroll", w, !1), () => {
    window.removeEventListener("scroll", w, !1);
  }), [w]);
  let C = getSearchSessionIdFromSelector();
  let L = _$$y(author?.profile_handle ?? "").href;
  let E = t && !r ? "_blank" : void 0;
  if (!comment || !author) return jsx(Fragment, {});
  let S = async () => {
    let t = await ee.fadeOut(comment.id);
    x(deleteComment({
      commentId: comment.id,
      commentType: e.commentType,
      onFinish: e => {
        e ? ee.fadeIn(comment.id) : ee.resetNextComment(t);
      }
    }));
  };
  if (f) return jsx(eC, {
    fallback: null,
    errorFallback: null,
    commentType: e.commentType,
    commentId: comment.id,
    message: comment.message,
    messageMeta: comment.message_meta ?? [],
    onComplete: () => {
      trackEventAnalytics(_$$E, {
        commentId: comment?.id,
        message: comment?.message,
        userId: author.primary_user_id,
        profileId: author.id,
        resourceType: e.resourceType,
        resourceId: e.resourceId,
        searchSessionId: C
      }, {
        forwardToDatadog: !0
      });
      v(!1);
    }
  });
  let R = e.selected && !e.isCreatorReply;
  let k = comment.reply_count;
  let A = !!(h && h.type === DROPDOWN_TYPE_GENERIC_COMMENT_MENU && h.data.commentId === comment.id);
  let P = !!comment.hidden_at && !userIsAuthor;
  return jsxs("div", {
    className: U()(R ? "comment_tile--tempSelectedCommentTile--eo1zi comment_tile--selectedCommentTile--9xoJJ comment_tile--commentTile--Y-2jW comment_tile--commentContainer--alB5v" : "comment_tile--commentTile--Y-2jW comment_tile--commentContainer--alB5v", {
      "comment_tile--creatorReplySelectedParent--aVNCs comment_tile--creatorReply--OO0It": !!e.selected && e.isCreatorReply,
      "comment_tile--creatorReply--OO0It": !e.selected && e.isCreatorReply,
      "comment_tile--noSeparator--RL2vm": e.hideSeparator
    }),
    "data-comment-id": comment.id,
    role: "button",
    tabIndex: 0,
    children: [jsx(Link, {
      className: "comment_tile--commentAvatarContainer--e8z35",
      to: L,
      target: E,
      children: jsx(Ro, {
        entity: author,
        size: 32,
        className: "comment_tile--commentAvatar--5xfu2 community_hub_view--creatorInsetBorder--z2InY community_hub_view--creatorInsetBorderNoHover--27smC"
      })
    }), jsx("div", {
      className: e.hideSeparator || R ? "comment_tile--commentContentWrapperNoBorder--Poey3 comment_tile--commentContentWrapper--L2vv2" : "comment_tile--commentContentWrapper--L2vv2",
      children: jsxs("div", {
        className: "comment_tile--commentContent--QUN--",
        children: [jsxs("div", {
          className: "comment_tile--commentMetaAndOptions--Avk6k",
          children: [jsxs("div", {
            children: [jsxs(Link, {
              className: "comment_tile--commentAuthorLink--3Q-Ty ellipsis--ellipsis--Tjyfa",
              to: L,
              target: E,
              children: [jsx("span", {
                className: "comment_tile--commentAuthor--X2tiN text--fontPos13--xW8hS text--_fontBase--QdLsd",
                children: author.name
              }), jsx("span", {
                className: "comment_tile--commentAuthorHandle--qrjUX comment_tile--commentTime--Zz1IX text--fontPos11--2LvXf text--_fontBase--QdLsd ellipsis--ellipsis--Tjyfa",
                children: `@${author.profile_handle}`
              })]
            }), isAuthorAcceptedPublisher && jsx($, {}), jsx("span", {
              className: "comment_tile--commentMetaDivider--pzekb text--fontPos13--xW8hS text--_fontBase--QdLsd",
              children: "\xb7"
            }), jsx(h1, {
              className: "comment_tile--commentTime--Zz1IX text--fontPos11--2LvXf text--_fontBase--QdLsd",
              date: comment.created_at
            })]
          }), jsxs("div", {
            className: "comment_tile--commentOptions--hNQQM",
            children: [P && jsx(SvgComponent, {
              className: "comment_tile--isHiddenIcon--isUzt",
              svg: _$$A
            }), jsx("div", {
              className: "comment_tile--iconButton--MZmz1",
              children: jsx(IconButton, {
                ref: p,
                onClick: e => {
                  let t = p.current;
                  h ? w() : t && (j(t.getBoundingClientRect()), x(showDropdownThunk({
                    type: DROPDOWN_TYPE_GENERIC_COMMENT_MENU,
                    data: {
                      commentId: comment.id
                    }
                  })));
                  e.stopPropagation();
                },
                "aria-label": getI18nString("community.comments.comment_actions"),
                htmlAttributes: {
                  "data-tooltip-type": KindEnum.TEXT,
                  "data-tooltip": getI18nString("community.comments.comment_actions")
                },
                children: jsx(_$$J, {})
              })
            })]
          })]
        }), jsx("div", {
          className: P ? "comment_tile--messageIsHidden--e-XiE comment_tile--commentMessage--W-vWb comment_tile--commentMessageText---N-OK text--fontPos13--xW8hS text--_fontBase--QdLsd" : "comment_tile--commentMessage--W-vWb comment_tile--commentMessageText---N-OK text--fontPos13--xW8hS text--_fontBase--QdLsd",
          children: jsx(HH, {
            messageMeta: comment.message_meta ?? [],
            className: "comment_tile--commentMessageText---N-OK text--fontPos13--xW8hS text--_fontBase--QdLsd",
            showEditedIndicator: !!comment.edited_at,
            commentId: comment.id
          })
        }), m && jsx("div", {
          className: "comment_tile--replyComposerContainer--Cfzby",
          children: jsx(eL, {
            fallback: null,
            errorFallback: null,
            commentType: e.commentType,
            parentId: comment.id,
            resourceId: e.resourceId,
            resourceType: e.resourceType,
            onSuccessCallback: () => _(!1),
            onComplete: () => _(!1)
          })
        })]
      })
    }), A && b && jsx(eb, {
      comment,
      hideCopyLink: !!comment.parent_id,
      isThreadParent: k > 0,
      onDelete: S,
      onEdit: () => {
        v(!0);
      },
      onReply: 0 === comment.reply_count ? () => {
        _(!0);
      } : void 0,
      parentRect: b,
      profileIdToAdminResourceAs: e.profileIdToAdminResourceAs,
      resourceId: e.resourceId,
      resourceType: e.resourceType
    })]
  });
}
let eN = connect((e, t) => {
  let {
    comments
  } = e.communityHub;
  let s = comments.commentsById[t.id];
  let i = t.replyId ? comments.commentsById[t.replyId] : void 0;
  if (!s) return {
    user: e.user || null
  };
  let n = comments.authorsById[s.author.id];
  let o = comments && comments.selectedCommentId === s.id;
  let a = i ? comments.authorsById[i.author.id] : void 0;
  return {
    user: e.user || null,
    comment: s,
    creatorReply: i,
    replyAuthor: a,
    author: n,
    userIsResponder: a?.id === e.user?.community_profile_id,
    userIsAuthor: n.id === e.user?.community_profile_id,
    selected: o
  };
})(function (e) {
  return jsxs(Fragment, {
    children: [jsx(eI, {
      author: e.author,
      comment: e.comment,
      commentType: e.commentType,
      hideSeparator: e.hideSeparator || !!e.creatorReply,
      id: e.id,
      isAuthorAcceptedPublisher: e.isAuthorAcceptedPublisher,
      profileIdToAdminResourceAs: e.profileIdToAdminResourceAs,
      resourceId: e.resourceId,
      resourceType: e.resourceType,
      selected: e.selected,
      user: e.user,
      userIsAuthor: e.userIsAuthor
    }), !!e.replyId && jsx(eI, {
      author: e.replyAuthor,
      comment: e.creatorReply,
      commentType: e.commentType,
      hideSeparator: e.hideSeparator,
      id: e.replyId,
      isAuthorAcceptedPublisher: !0,
      isCreatorReply: !!e.replyId,
      profileIdToAdminResourceAs: e.profileIdToAdminResourceAs,
      resourceId: e.resourceId,
      resourceType: e.resourceType,
      selected: e.selected,
      user: e.user,
      userIsAuthor: e.userIsResponder
    })]
  });
});
function eE() {
  return jsxs("svg", {
    width: "288",
    height: "200",
    viewBox: "0 0 288 200",
    fill: "none",
    children: [jsx("rect", {
      width: "288",
      height: "200",
      fill: "var(--color-bg, white)"
    }), jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M121.5 60.5C147.457 60.5 168.5 81.5426 168.5 107.5C168.5 133.457 147.457 154.5 121.5 154.5C113.522 154.5 106.013 152.514 99.4356 149.01L98.9861 148.77L77.5743 152.339L85.893 138.197L85.2249 137.387C78.5239 129.264 74.5 118.854 74.5 107.5C74.5 81.5426 95.5426 60.5 121.5 60.5ZM171.5 107.5C171.5 79.8858 149.114 57.5 121.5 57.5C93.8858 57.5 71.5 79.8858 71.5 107.5C71.5 119.197 75.5183 129.959 82.2484 138.476L71.7319 156.354L98.4789 151.896C105.371 155.477 113.201 157.5 121.5 157.5C149.114 157.5 171.5 135.114 171.5 107.5Z",
      fill: "var(--color-icon-secondary, #BBBBBB)"
    }), jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M196.932 119.342C203.847 110.959 208 100.215 208 88.5C208 61.7142 186.286 40 159.5 40C132.714 40 111 61.7142 111 88.5C111 115.286 132.714 137 159.5 137C167.729 137 175.48 134.95 182.27 131.334L206.347 135.347L196.932 119.342Z",
      fill: "var(--color-bg, white)"
    }), jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M153.901 38.8101C155.739 38.6052 157.608 38.5 159.5 38.5C161.392 38.5 163.261 38.6052 165.099 38.8101L164.767 41.7917C163.038 41.599 161.281 41.5 159.5 41.5C157.719 41.5 155.962 41.599 154.233 41.7917L153.901 38.8101ZM169.531 39.5067C173.248 40.2639 176.816 41.4337 180.184 42.9659L178.942 45.6966C175.777 44.2568 172.425 43.1578 168.932 42.4464L169.531 39.5067ZM138.816 42.9659C142.184 41.4337 145.752 40.2639 149.469 39.5067L150.068 42.4464C146.575 43.1578 143.223 44.2568 140.058 45.6966L138.816 42.9659ZM184.181 45.0062C187.446 46.863 190.481 49.0766 193.234 51.5939L191.209 53.8077C188.621 51.4405 185.767 49.3593 182.698 47.6141L184.181 45.0062ZM125.766 51.5939C128.519 49.0766 131.554 46.863 134.819 45.0062L136.302 47.6141C133.233 49.3593 130.379 51.4405 127.791 53.8077L125.766 51.5939ZM196.406 54.7662C198.923 57.5187 201.137 60.5541 202.994 63.8194L200.386 65.3023C198.641 62.2331 196.559 59.3792 194.192 56.7908L196.406 54.7662ZM116.006 63.8194C117.863 60.5541 120.077 57.5187 122.594 54.7662L124.808 56.7908C122.441 59.3792 120.359 62.2331 118.614 65.3023L116.006 63.8194ZM205.034 67.8159C206.566 71.1837 207.736 74.7516 208.493 78.4694L205.554 79.0681C204.842 75.5749 203.743 72.2228 202.303 69.0582L205.034 67.8159ZM110.507 78.4694C111.264 74.7516 112.434 71.1837 113.966 67.8159L116.697 69.0582C115.257 72.2228 114.158 75.5749 113.446 79.0681L110.507 78.4694ZM209.19 82.9007C209.395 84.7394 209.5 86.6077 209.5 88.5C209.5 90.5773 209.373 92.6257 209.127 94.6378L206.149 94.2732C206.381 92.3818 206.5 90.4552 206.5 88.5C206.5 86.719 206.401 84.9616 206.208 83.2331L209.19 82.9007ZM109.5 88.5C109.5 86.6077 109.605 84.7394 109.81 82.9007L112.792 83.2331C112.599 84.9616 112.5 86.719 112.5 88.5C112.5 90.281 112.599 92.0384 112.792 93.7669L109.81 94.0993C109.605 92.2606 109.5 90.3923 109.5 88.5ZM113.966 109.184C112.434 105.816 111.264 102.248 110.507 98.5306L113.446 97.9319C114.158 101.425 115.257 104.777 116.697 107.942L113.966 109.184ZM208.289 99.4872C207.378 103.549 205.973 107.424 204.14 111.045L201.464 109.69C203.186 106.287 204.506 102.647 205.361 98.8307L208.289 99.4872ZM122.594 122.234C120.077 119.481 117.863 116.446 116.006 113.181L118.614 111.698C120.359 114.767 122.441 117.621 124.808 120.209L122.594 122.234ZM198.752 119.476C199.804 118.144 200.79 116.758 201.705 115.321L199.174 113.71C198.136 115.34 197 116.902 195.775 118.387L195.107 119.197L199.002 125.818L201.588 124.297L198.752 119.476ZM134.819 131.994C131.554 130.137 128.519 127.923 125.766 125.406L127.791 123.192C130.379 125.559 133.233 127.641 136.302 129.386L134.819 131.994ZM204.277 128.87L209.268 137.354L201.801 136.11L202.294 133.15L203.426 133.339L201.692 130.391L204.277 128.87ZM182.014 129.77L186.816 130.571L186.323 133.53L182.521 132.896C181.385 133.487 180.224 134.034 179.039 134.538L177.865 131.777C179.128 131.241 180.361 130.651 181.564 130.01L182.014 129.77ZM198.361 135.536L189.762 134.103L190.255 131.144L198.854 132.577L198.361 135.536ZM149.469 137.493C145.752 136.736 142.184 135.566 138.816 134.034L140.058 131.303C143.223 132.743 146.575 133.842 150.068 134.554L149.469 137.493ZM175.78 135.789C173.059 136.726 170.231 137.434 167.32 137.892L166.855 134.928C169.59 134.498 172.247 133.833 174.804 132.953L175.78 135.789ZM159.5 138.5C157.608 138.5 155.739 138.395 153.901 138.19L154.233 135.208C155.962 135.401 157.719 135.5 159.5 135.5C160.881 135.5 162.248 135.44 163.598 135.324L163.856 138.313C162.42 138.437 160.967 138.5 159.5 138.5Z",
      fill: "var(--color-icon-secondary, #BBBBBB)"
    }), jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M158 98H161L161 90H169V87L161 87L161 79H158L158 87L150 87V90H158L158 98Z",
      fill: "var(--color-icon-secondary, #BBBBBB)"
    })]
  });
}
function eS(e) {
  let t = useSelector(e => e.communityHub.comments.commentsById);
  let r = useSelector(e => e.communityHub.comments.showResolved);
  let l = useSelector(e => isOrgOrTeamExport(e.authedActiveCommunityProfile));
  let {
    parentCommentIds,
    replies
  } = function (e, t) {
    let r = [];
    let s = {};
    e.forEach(e => {
      if (t[e]) {
        let {
          parent_id
        } = t[e];
        parent_id && t[parent_id] ? s[parent_id] = e : parent_id || r.push(e);
      }
    });
    return {
      parentCommentIds: r,
      replies: s
    };
  }(e.comments, t);
  let m = r ? parentCommentIds : parentCommentIds.reduce((e, r) => (t[r]?.resolved_at || e.push(r), e), []);
  let _ = getResourceType(e.resource);
  if (0 === m.length && !e.hasSelectedComment && e.resource.comments_setting !== DropdownEnableState.ALL_DISABLED) return jsx(eR, {
    isTeamOrOrgProfileActive: l
  });
  let p = [];
  if ((_ === ResourceTypeNoComment.PLUGIN || _ === ResourceTypeNoComment.WIDGET) && e.resource?.versions && e.resource.current_plugin_version_id) {
    let r = e.resource;
    let i = r.versions[r.current_plugin_version_id].id;
    m.forEach(n => {
      let a = t[n];
      let l = a?.resource_version_id;
      let d = r.versions[l];
      if (l && d) {
        if (l !== i) {
          let e = new Date(d.created_at).toLocaleDateString(navigator.language, {
            year: "numeric",
            month: "long",
            day: "numeric"
          });
          let t = l === i && d ? void 0 : `Version ${d.version} \xb7 ${e}`;
          let r = p.pop();
          r && p.push(cloneElement(r, {
            hideSeparator: !0
          }));
          p.push(jsx("div", {
            className: "comments_list--versionDivider--NHliU text--fontPos11--2LvXf text--_fontBase--QdLsd",
            children: t
          }, `divider-${l}`));
          i = l;
        }
        p.push(jsx(eN, {
          id: n,
          replyId: replies[n],
          isAuthorAcceptedPublisher: PR(a, e.resource),
          commentType: e.commentType,
          resourceType: _,
          resourceId: e.resource.id,
          profileIdToAdminResourceAs: e.profileIdToAdminResourceAs
        }, n));
      }
    });
  } else p = m.map(r => {
    let i = t[r];
    return jsx(eN, {
      id: r,
      replyId: replies[r],
      isAuthorAcceptedPublisher: PR(i, e.resource),
      commentType: e.commentType,
      resourceType: _,
      resourceId: e.resource.id,
      profileIdToAdminResourceAs: e.profileIdToAdminResourceAs
    }, r);
  });
  return jsx(Fragment, {
    children: p
  });
}
function eR({
  isTeamOrOrgProfileActive: e
}) {
  return e ? jsxs("div", {
    className: "comments_list--emptyStateWrapper--utBdd",
    children: [jsx(eE, {}), jsx("div", {
      className: "comments_list--emptyStateHeader--72NAJ text--fontPos13--xW8hS text--_fontBase--QdLsd",
      children: renderI18nText("community.comments.to_comment_switch_to_your_personal_profile")
    })]
  }) : null;
}
eN.displayName = "CommentTile";
let ek = !1;
function eA(e) {
  let t;
  let r = useDispatch();
  let o = selectCurrentUser();
  let [a, _] = useState(!1);
  let [p, I] = useState(!1);
  let N = _$$T();
  let [E, S] = useState(!0);
  let R = useRef(null);
  let A = useSelector(e => "communityHub" === e.selectedView.view && "hubFile" === e.selectedView.subView && e.selectedView.fullscreenState && t0(e.selectedView.fullscreenState));
  let P = useSelector(e => e.communityHub.comments.activeFeedType);
  let B = useSelector(e => e.communityHub.comments.feeds);
  let {
    feed,
    pagination
  } = useMemo(() => B[P] || {
    feed: []
  }, [B, P]);
  let H = useSelector(e => e.communityHub.comments.selectedCommentId);
  let U = useSelector(e => e.selectedView.commentThreadId);
  let V = useSelector(e => !!e.user?.community_profile_id);
  let W = H || U;
  let G = P === CommentTabType.ALL ? e.numCommentsForResource : B[P]?.totalNumberOfComments;
  let {
    resource
  } = e;
  let z = getResourceType(resource);
  let Q = () => {
    if (ek) return;
    ek = !0;
    _(!0);
    let e = {
      resourceId: resource.id,
      resourceType: z,
      selectedCommentId: W,
      pagination,
      activeFeedType: P,
      numCommentsForResource: G,
      pageSizeOverride: COMMUNITY_TIMEOUT
    };
    r(fetchCommentsThunk({
      ...e,
      onSuccess: e => {
        r(setCommentStateThunk(e));
        ek = !1;
        _(!1);
      },
      onError: () => {
        ek = !1;
        _(!1);
      }
    }));
  };
  let Z = void 0 === pagination && isResourcePublicWithComments(resource);
  useEffect(() => {
    Z && Q();
  }, [P, Z]);
  let q = !!pagination;
  let Y = pagination?.selected_comment;
  useEffect(() => {
    E && Y && (R.current && window.scroll({
      left: 0,
      top: R.current.offsetTop - 36,
      behavior: "smooth"
    }), S(!1));
  }, [E, Y]);
  useEffect(() => {
    r(resetCommentState());
  }, [resource.id]);
  let X = () => q && hasMorePages({
    pagination
  }) && Q();
  let J = feed.filter(e => e !== pagination?.selected_comment?.id);
  pagination?.selected_comment && J.unshift(pagination?.selected_comment.id);
  let K = getSearchSessionIdFromSelector();
  return isResourcePublicWithComments(resource) ? jsx(Fragment, {
    children: jsxs("div", {
      className: "comments_view--commentsViewWrapper--SURB9",
      ref: R,
      children: [N && jsx("div", {
        className: "comments_view--commentsHeader--RVPOY",
        children: renderI18nText("community.resource_page.comments", {
          numComments: jsx("span", {
            className: "comments_view--commentsHeaderCommentCount--W9ZLs",
            children: G || 0
          })
        })
      }), !e.commentingIsRestricted && jsx(ew, {
        fallback: null,
        errorFallback: null,
        commentType: e.commentType,
        resourceType: z,
        resourceId: resource.id,
        onSuccessCallback: e => {
          trackEventAnalytics(_$$d, {
            commentId: e?.id,
            message: e?.message,
            userId: o?.id,
            profileId: o?.community_profile_id,
            resourceType: z,
            resourceId: resource.id,
            searchSessionId: K
          });
        }
      }), jsxs("div", {
        className: "comments_view--commentsListHeader--3uRw8 text--fontPos11--2LvXf text--_fontBase--QdLsd",
        children: [jsx("div", {
          className: "comments_view--numCommentsForResource--J0QKb",
          children: (t = G || 0, getI18nString("community.comments.pluralize_comments", {
            numComments: t
          }))
        }), !A && !e.commentingIsRestricted && e.numCommentsForResource > 0 && jsx(M, {
          includeShowResolved: !1,
          isLoggedIn: V
        })]
      }), jsx(IntersectionSentinel, {
        onIntersectionChange: e => {
          p || (I(!0), trackEventAnalytics("Community Comments Section Impressed", {
            resourceType: z,
            resourceId: resource.id
          }));
        }
      }), jsx(hJ, {
        children: jsx(_$$x, {
          isLoading: void 0 === pagination,
          className: k,
          children: () => jsx(h, {
            onScrollToBottom: X,
            showLoader: a && hasMorePages({
              pagination
            }),
            children: jsx(eS, {
              comments: J,
              commentType: e.commentType,
              resource,
              profileIdToAdminResourceAs: e.profileIdToAdminResourceAs,
              hasSelectedComment: !!pagination?.selected_comment
            })
          })
        })
      }), jsx(XY, {
        children: jsx(_$$x, {
          isLoading: void 0 === pagination,
          className: k,
          children: () => jsxs(Fragment, {
            children: [jsx(eS, {
              comments: J,
              commentType: e.commentType,
              resource,
              profileIdToAdminResourceAs: e.profileIdToAdminResourceAs
            }), hasMorePages({
              pagination
            }) && jsx("div", {
              className: "comments_view--mobileLoadMore--tqxIs",
              children: jsx(Button, {
                variant: "link",
                onClick: X,
                children: renderI18nText("community.comments.load_more_comments")
              })
            })]
          })
        })
      })]
    })
  }) : null;
}
export function $$eP0({
  resource: e
}) {
  let t = selectCurrentUser();
  let r = useSelector(t => MK(t, e)) >= Cw.ADMIN && (getAcceptedPublisherProfile(e)?.id || t?.community_profile_id) || null;
  let c = useSelector(e => e.authedActiveCommunityProfile);
  return jsx(eA, {
    commentType: DropdownCommunityType.COMMUNITY,
    resource: e,
    numCommentsForResource: e.comment_count,
    profileIdToAdminResourceAs: r,
    commentingIsRestricted: !isCommentingEnabled(t, e) || isOrgOrTeamExport(c)
  });
}
export const X = $$eP0;