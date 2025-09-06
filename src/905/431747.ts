import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { _Z } from "../figma_app/819288";
import { Yx } from "../figma_app/930338";
import { T } from "../figma_app/257703";
import { getI18nString, renderI18nText } from "../905/303541";
import { Ju } from "../905/102752";
import { Of } from "../905/31837";
import { yX } from "../figma_app/918700";
import { W } from "../figma_app/54182";
import { iZ, Rt, N4, Be, jE } from "../figma_app/639088";
import { v_ } from "../figma_app/538002";
function h(e) {
  return jsxs("div", {
    className: iZ,
    children: [e.header && jsx("span", {
      className: Rt,
      children: e.header
    }), jsx("span", {
      className: N4,
      children: e.text
    })]
  });
}
function g(e) {
  let {
    user
  } = e;
  return jsx("span", {
    className: Be,
    children: jsxs(W, {
      user,
      children: ["@", user.handle]
    })
  });
}
function f(e) {
  return jsx(T, {
    children: e.users.map(e => jsx(g, {
      user: e
    }, e.id))
  });
}
export let $$_0 = Ju(function (e) {
  let t = Of();
  let i = e.usersWithoutAccess.map(e => e.handle);
  let s = e.externalUsersWithoutAccess.map(e => e.handle);
  let l = e.uninvitableUsers.map(e => e.handle);
  let u = [...i, ...s, ...l];
  if (0 === e.externalUsersWithoutAccess.length || l.length > 0) {
    let t = [...e.uninvitableUsers, ...e.usersWithoutAccess];
    let i = getI18nString("comments.cant_view_this_comment", {
      numUsers: t.length,
      userHandle: t[0].handle
    });
    return jsxs(yX, {
      confirmationTitle: i,
      confirmText: 0 === l.length ? getI18nString("comments.post_share") : getI18nString("comments.post_anyway"),
      cancelText: getI18nString("comments.cancel_post_and_share"),
      size: "small",
      hideClose: !0,
      ...e,
      children: [jsx("div", {
        className: jE,
        children: renderI18nText("comments.wont_be_able_to_view_your_comments_because_they_dont_have_access_to_this_file", {
          mentionedUsers: jsx(f, {
            users: t
          })
        })
      }), jsx(h, {
        header: getI18nString("comments.you"),
        text: _Z(e.messageMeta)
      })]
    });
  }
  let g = s.length !== u.length;
  let _ = jsx("a", {
    className: v_,
    target: "_blank",
    rel: "noopener",
    href: "https://help.figma.com/hc/articles/360039960434",
    children: renderI18nText("comments.learn_more")
  });
  let A = g ? renderI18nText("comments.please_note_that_is_external_to_your_organization", {
    numUsers: s.length,
    userNames: Yx(s),
    learnMore: _
  }) : renderI18nText("comments.please_note_that_some_of_these_users_are_external_to_your_organization", {
    numUsers: s.length,
    learnMore: _
  });
  return jsx(yX, {
    confirmationTitle: getI18nString("comments.post_comment_and_share_file"),
    confirmText: getI18nString("comments.post_share"),
    cancelText: getI18nString("comments.discard"),
    size: "small",
    hideClose: !0,
    ...e,
    children: jsxs("div", {
      className: jE,
      children: [jsxs(Fragment, {
        children: [jsx("div", {
          children: renderI18nText("comments.mention_confirm_warning", {
            numUsers: e.usersWithoutAccess.length + e.externalUsersWithoutAccess.length,
            mentionedUsers: jsx(f, {
              users: [...e.usersWithoutAccess, ...e.externalUsersWithoutAccess]
            })
          })
        }), jsx("br", {}), jsx("div", {
          children: t ? renderI18nText("comments.mfa_required_warning_without_link", {
            numUsers: s.length
          }) : A
        })]
      }), jsx(h, {
        header: getI18nString("comments.you"),
        text: _Z(e.messageMeta)
      })]
    })
  });
}, "confirm-comment-mention-modal-new");
export const VB = $$_0;