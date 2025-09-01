import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { d4 } from "../vendor/514228";
import { N_ } from "../vendor/956898";
import { sx } from "../905/449184";
import { XHR } from "../905/910117";
import { s as _$$s } from "../cssbuilder/589278";
import { t as _$$t, tx } from "../905/303541";
import { e as _$$e } from "../905/579755";
import { l as _$$l } from "../905/152724";
import { y } from "../905/158417";
import { Jm } from "../figma_app/387599";
import { Dm } from "../figma_app/471982";
import { M } from "../905/722875";
import { o3 } from "../figma_app/831799";
import { L } from "../905/606555";
export function $$y2({
  profileId: e,
  following: t,
  onFollowChange: r
}) {
  let i = Jm();
  return jsx("button", {
    onClick: n => {
      n.preventDefault();
      n.stopPropagation();
      r(!t);
      (t ? XHR.del : XHR.put)("/api/follows", {
        followed_profile_id: e
      }).then(() => {
        t || sx("community_hub_profile_follow", {
          profileId: e,
          searchSessionId: i
        });
      }).catch(e => {
        if ("You're already following this user" === e.message) {
          r(!t);
          return;
        }
        r(t);
      });
    },
    className: t ? "author_dropdown_preview--followButtonFollowing--89WFU author_dropdown_preview--followButton--RGrpo" : "author_dropdown_preview--followButton--RGrpo",
    "data-follow": _$$t("community.follow.follow"),
    "data-unfollow": _$$t("community.follow.unfollow"),
    "data-following": _$$t("community.follow.following")
  });
}
let b = {};
export function $$T0({
  author: e,
  isHoverStateRedesignEnabled: t = !1
}) {
  let [r, s] = useState(!1);
  useEffect(() => {
    M() && L.getFollows({
      authorId: e.id
    }).then(({
      data: t
    }) => {
      let r = t.meta.current_user_is_following;
      b[e.id] = r;
      s(r);
    }).catch(e => {
      throw Error("Could not get following status.");
    });
  }, [e]);
  let l = d4(e => "authedActiveCommunityProfile" in e ? e.authedActiveCommunityProfile : null);
  let h = y(e.profile_handle);
  let T = Dm(e.id, l);
  let I = e.description ? e.description.trim().replace(/\s+/g, " ") : "";
  return t ? jsxs("div", {
    className: "author_dropdown_preview--hoverCardV2--kNSwo",
    children: [jsx("div", {
      className: "author_dropdown_preview--topContentV2--rrryT",
      children: jsxs("div", {
        children: [jsx(_$$e, {
          adtlClassName: "author_dropdown_preview--avatarV2--6iOPu",
          entity: e
        }), jsx("div", {
          className: "author_dropdown_preview--profileBadgeV2--7363f",
          children: jsx(_$$l, {
            profile: e,
            showBorder: !0
          })
        })]
      })
    }), jsxs("div", {
      className: "author_dropdown_preview--authorMetaV2--LZhnv",
      children: [jsx("span", {
        className: "author_dropdown_preview--authorNameV2--yPWXB",
        children: e.name
      }), jsxs("span", {
        className: "author_dropdown_preview--authorHandleV2--hHqIj",
        children: ["@", e.profile_handle]
      })]
    }), I && jsx("div", {
      className: "author_dropdown_preview--authorDescription--ei9Jw",
      children: jsx("span", {
        className: "author_dropdown_preview--authorDescriptionText--yWq1F",
        children: I
      })
    }), jsx("div", {
      className: "author_dropdown_preview--authorFollowerCount--twID0",
      children: tx("community.profiles.follower_count", {
        followerCount: e.follower_count,
        formattedFollowerCount: jsx("span", {
          children: e.follower_count
        })
      })
    })]
  }) : jsxs("div", {
    className: "author_dropdown_preview--hoverCard--enM76",
    children: [jsxs("div", {
      className: "author_dropdown_preview--authorMeta--FtpFs",
      children: [jsxs(o3, {
        to: h.to,
        trackingEventName: "community_hub_profile_preview__profile_visit",
        trackingProperties: {
          profileId: e.id
        },
        children: [jsx(_$$e, {
          adtlClassName: "author_dropdown_preview--avatar--SQSvO",
          entity: e
        }), jsx("div", {
          className: "author_dropdown_preview--profileBadge--VRnGn",
          children: jsx(_$$l, {
            profile: e,
            showBorder: !0
          })
        })]
      }), jsxs(o3, {
        to: h.to,
        trackingEventName: "community_hub_profile_preview__profile_visit",
        trackingProperties: {
          profileId: e.id
        },
        children: [jsx("div", {
          className: "author_dropdown_preview--authorName--QMrjt",
          children: jsx("span", {
            className: _$$s.ellipsis.noWrap.overflowHidden.$,
            children: e.name
          })
        }), jsxs("div", {
          className: "author_dropdown_preview--authorHandle--3bjrt",
          children: ["@", e.profile_handle]
        })]
      })]
    }), !T && jsx($$y2, {
      profileId: e.id,
      following: b[e.id],
      onFollowChange: t => {
        s(t);
        b[e.id] = t;
        sx("community_hub_profile_preview__profile_follow", {
          profileId: e.id
        });
      }
    })]
  });
}
export function $$I1({
  authors: e
}) {
  return jsx("div", {
    children: e.map(e => jsx(S, {
      author: e
    }, e.id))
  });
}
function S({
  author: e
}) {
  let t = y(e.profile_handle);
  return jsxs(N_, {
    className: "author_dropdown_preview--authorPreviewListRow--XiWec text--fontPos12--YsUAh text--_fontBase--QdLsd",
    to: t.to,
    children: [jsx(_$$e, {
      entity: e
    }), jsxs("div", {
      className: "author_dropdown_preview--authorPreviewListName--sVzBY",
      children: [jsx("span", {
        className: _$$s.ellipsis.noWrap.overflowHidden.$,
        children: e.name
      }), jsx(_$$l, {
        profile: e
      })]
    })]
  });
}
export const Z = $$T0;
export const r5 = $$I1;
export const Wc = $$y2; 
