import { jsx, jsxs } from "react/jsx-runtime";
import { memo, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "classnames";
import { trackEventAnalytics } from "../905/449184";
import { x6 } from "../905/403166";
import { F } from "../905/241044";
import { SecureLink } from "../figma_app/637027";
import { M } from "../905/649795";
import { renderI18nText } from "../905/303541";
import { RK } from "../figma_app/815170";
import { z3 } from "../figma_app/386952";
import { selectCurrentUser } from "../905/372672";
import { q } from "../905/495564";
import { PositionEnum, KindEnum } from "../905/129884";
import { N as _$$N } from "../905/984200";
import { $x } from "../905/780715";
import { hp, u5, Vc, XH, ty, A9, zD, $t, oh } from "../905/163841";
var o = s;
export function $$I3(e) {
  let t = RegExp("^\\w+:");
  let r = e.match(t);
  return "" === e || r && ["http:", "https:", "mailto:", "tel:"].includes(r[0].toLowerCase()) ? e : "https://" + e;
}
let $$S2 = memo(e => {
  let {
    text,
    hyperlink
  } = e;
  let s = useMemo(() => x6(text), [text]);
  let o = z3();
  let l = useDispatch();
  return jsx(SecureLink, {
    "data-tooltip": PositionEnum.HYPERLINK_POPUP,
    "data-tooltip-editor-type": o,
    "data-tooltip-interactive": !0,
    "data-tooltip-precise": !0,
    "data-tooltip-show-above": !0,
    "data-tooltip-type": KindEnum.SPECIAL,
    "data-tooltip-unconstrain-width": !0,
    "data-tooltip-url-string": hyperlink,
    onClick: () => {
      l(RK({
        rawInput: $$I3(hyperlink)
      }));
    },
    trusted: !1,
    children: s
  });
});
let $$v0 = memo(e => {
  let {
    userId,
    imgUrl,
    handle,
    href
  } = e;
  return jsx(SecureLink, {
    "data-mention-user-id": userId,
    "data-tooltip": _$$N,
    "data-tooltip-show-above": !0,
    "data-tooltip-type": KindEnum.SPECIAL,
    "data-tooltip-unconstrain-width": !0,
    "data-tooltip-user-handle": handle,
    "data-tooltip-user-img-url": imgUrl,
    href,
    target: "_blank",
    trusted: !0,
    children: handle
  });
});
let A = memo(function (e) {
  let t = selectCurrentUser()?.community_profile_id;
  let {
    handle,
    commentId,
    profileId,
    profileName,
    profileImgUrl
  } = e;
  let d = F(handle);
  let p = F(profileName);
  return jsx(SecureLink, {
    "data-tooltip": _$$N,
    "data-tooltip-show-above": !0,
    "data-tooltip-type": KindEnum.SPECIAL,
    "data-tooltip-unconstrain-width": !0,
    "data-tooltip-user-handle": p,
    "data-tooltip-user-img-url": profileImgUrl,
    href: `/${d}`,
    onClick: () => {
      trackEventAnalytics("at_mention_link_clicked", {
        mentioned_profile_id: profileId,
        profile_id: t,
        comment_id: commentId
      });
    },
    target: "_blank",
    trusted: !0,
    children: d
  });
});
let x = memo(e => {
  let {
    text,
    tokenStyles
  } = e;
  let a = useMemo(() => x6(text), [text]);
  let s = tokenStyles?.map(e => "b" === e ? hp : "i" === e ? u5 : "s" === e ? Vc : "lightbold" === e ? XH : void 0) || [];
  return jsx(M, {
    children: jsx("span", {
      className: o()(s),
      children: a
    })
  });
});
let N = memo(e => {
  let {
    text,
    userId,
    profileId,
    user,
    orgPath,
    profiles,
    commentId,
    tokenStyles,
    hyperlink
  } = e;
  let p = F(text);
  if (userId) return jsx($$v0, {
    href: `/files${orgPath}/user/${userId}`,
    userId,
    handle: F(user?.handle) || void 0,
    imgUrl: user?.img_url
  });
  if (profileId && p) {
    let e = "@" + p;
    let t = profiles?.[profileId];
    return t ? jsx(A, {
      handle: e,
      commentId,
      profileId: t.id,
      profileName: t.name,
      profileImgUrl: t.img_url
    }) : jsx("span", {
      children: e
    });
  }
  if (null === profileId && p) {
    let e = "@" + p;
    return jsx("span", {
      children: e
    });
  }
  let _ = hyperlink && $$I3(hyperlink);
  return _ && p && $x(_) ? jsx($$S2, {
    text: p,
    hyperlink: _
  }) : p ? jsx(x, {
    text: p,
    tokenStyles
  }) : null;
});
let $$C1 = memo(e => {
  let t = q();
  let r = useSelector(t => e.mentionedProfiles || t.communityHub?.comments?.mentionedProfiles);
  let i = (e, t, r, a, s) => e.map((e, o) => {
    let l = "";
    if (e.styles?.includes("ul") ? l = ty : e.styles?.includes("ol") && (l = A9), e.children?.length) {
      let d = e.children.map((e, d) => jsx("li", {
        className: l,
        children: i(e.children, `${t}-${o}-${d}`, r, a, s)
      }, `li-${t}-${o}-${d}`));
      if (e.styles?.includes("ul")) return jsx("ul", {
        children: d
      }, `ul-${t}-${o}`);
      if (e.styles?.includes("ol")) return jsx("ol", {
        children: d
      }, `ol-${t}-${o}`);
    }
    return jsx(N, {
      commentId: s,
      hyperlink: e.link,
      orgPath: r,
      profileId: e.profile_id,
      profiles: a || null,
      text: F(e.t) || void 0,
      tokenStyles: e.styles || null,
      user: e.user_annotated,
      userId: e.user_id
    }, `${t}-${o}`);
  });
  let {
    messageMeta,
    showEditedIndicator,
    commentId
  } = e;
  let d = e.className || zD;
  return jsxs("div", {
    className: $t + " " + d,
    "data-testid": "comment-message",
    dir: "auto",
    children: [i(messageMeta, commentId, t, r, commentId), showEditedIndicator && jsxs("span", {
      className: oh,
      children: ["\xa0", renderI18nText("comments.edited")]
    }, "edited_indicator")]
  });
});
$$C1.displayName = "CommentMessage";
export const E4 = $$v0;
export const HH = $$C1;
export const Rk = $$S2;
export const xT = $$I3;