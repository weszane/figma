import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { useDispatch } from "../vendor/514228";
import { $n } from "../905/521428";
import { Us } from "../figma_app/637027";
import { kt } from "../figma_app/858013";
import { t as _$$t, tx } from "../905/303541";
import { F } from "../905/302958";
import { _8, dL } from "../figma_app/530167";
import { s as _$$s } from "../905/608932";
import { Ju } from "../905/102752";
import { y as _$$y } from "../905/617004";
import { d_ } from "../figma_app/918700";
import { tB, bV, Iy } from "../905/318500";
export function $$f1(e) {
  let {
    profileId,
    profileHandle,
    emptyStateText
  } = e;
  let m = useDispatch();
  let [f, E] = useState([]);
  let [y, b] = useState(!1);
  useEffect(() => {
    b(!0);
    _$$s.getRestrictedProfiles({
      profileId
    }).then(({
      data: e
    }) => {
      E(e.meta);
      b(!1);
    });
  }, [profileId]);
  let T = (e, t) => {
    E(f.map(r => r.id === e ? {
      ...r,
      is_restricted_by_current_user: t
    } : r));
  };
  let I = (e, t) => {
    T(e, t);
    m(F.enqueue({
      message: t ? _$$t("community.comments.restricted_this_user_s_comments") : _$$t("community.comments.unrestricted_this_user_s_comments"),
      type: "profile-restricted-change",
      button: {
        text: _$$t("community.undo"),
        action: () => {
          t ? v(e) : S(e);
        }
      }
    }));
  };
  let S = t => {
    m(_8({
      profileId: e.profileId,
      blockedProfileId: t,
      onSuccess: () => I(t, !0)
    }));
  };
  let v = t => {
    m(dL({
      profileId: e.profileId,
      blockedProfileId: t,
      onSuccess: () => I(t, !1)
    }));
  };
  let A = f && f.length > 0;
  if (!emptyStateText && !A) return jsx(Fragment, {});
  if (y) return jsx(kt, {});
  let x = A ? jsx(Fragment, {
    children: profileHandle ? _$$t("community.comments.these_people_can_t_comment_on_any_of_profile_handles_community_files_and_plugins", {
      profileHandle
    }) : _$$t("community.comments.these_people_can_t_comment_on_any_of_your_community_files_and_plugins")
  }) : jsxs(Fragment, {
    children: [emptyStateText, " ", tx("community.comments.learn_more_about_managing_comments_on_your_files_and_plugins_in_community", {
      learnMoreLink: jsx(Us, {
        href: "https://help.figma.com/hc/articles/1500002628062",
        target: "_blank",
        trusted: !0,
        children: tx("general.learn_more")
      })
    }), " "]
  });
  let N = jsx("div", {
    className: e.wrapperClassName ? e.wrapperClassName : "",
    children: jsx("div", {
      className: tB,
      children: f.map(e => jsx(_$$y, {
        profile: e,
        rightSide: e.is_restricted_by_current_user ? jsx($n, {
          onClick: v.bind(null, e.id),
          variant: "secondary",
          children: tx("community.comments.unrestrict")
        }) : jsx($n, {
          onClick: S.bind(null, e.id),
          variant: "primary",
          children: tx("community.comments.restrict")
        })
      }, e.profile_handle))
    })
  });
  return jsxs(Fragment, {
    children: [jsx("div", {
      className: bV,
      children: tx("settings_tab.community_commenters_label")
    }), x, N]
  });
}
export let $$E0 = Ju(function (e) {
  return jsx(d_, {
    className: Iy,
    popStack: !0,
    children: jsx($$f1, {
      profileId: e.profileId,
      profileHandle: e.profileHandle,
      emptyStateText: e.emptyStateText
    })
  });
}, "ProfilesBlockedFromCommentingModal");
export const J = $$E0;
export const S = $$f1;