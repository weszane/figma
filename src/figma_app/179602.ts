import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Button } from "../905/521428";
import { linkWithTracking } from "../figma_app/637027";
import { LoadingSpinner } from "../figma_app/858013";
import { getI18nString, renderI18nText } from "../905/303541";
import { VisualBellActions } from "../905/302958";
import { restrictProfileThunk, unrestrictProfileThunk } from "../figma_app/530167";
import { profileServiceAPI } from "../905/608932";
import { registerModal } from "../905/102752";
import { ProfileRowTile } from "../905/617004";
import { ModalContainer } from "../figma_app/918700";
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
    profileServiceAPI.getRestrictedProfiles({
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
    m(VisualBellActions.enqueue({
      message: t ? getI18nString("community.comments.restricted_this_user_s_comments") : getI18nString("community.comments.unrestricted_this_user_s_comments"),
      type: "profile-restricted-change",
      button: {
        text: getI18nString("community.undo"),
        action: () => {
          t ? v(e) : S(e);
        }
      }
    }));
  };
  let S = t => {
    m(restrictProfileThunk({
      profileId: e.profileId,
      blockedProfileId: t,
      onSuccess: () => I(t, !0)
    }));
  };
  let v = t => {
    m(unrestrictProfileThunk({
      profileId: e.profileId,
      blockedProfileId: t,
      onSuccess: () => I(t, !1)
    }));
  };
  let A = f && f.length > 0;
  if (!emptyStateText && !A) return jsx(Fragment, {});
  if (y) return jsx(LoadingSpinner, {});
  let x = A ? jsx(Fragment, {
    children: profileHandle ? getI18nString("community.comments.these_people_can_t_comment_on_any_of_profile_handles_community_files_and_plugins", {
      profileHandle
    }) : getI18nString("community.comments.these_people_can_t_comment_on_any_of_your_community_files_and_plugins")
  }) : jsxs(Fragment, {
    children: [emptyStateText, " ", renderI18nText("community.comments.learn_more_about_managing_comments_on_your_files_and_plugins_in_community", {
      learnMoreLink: jsx(linkWithTracking, {
        href: "https://help.figma.com/hc/articles/1500002628062",
        target: "_blank",
        trusted: !0,
        children: renderI18nText("general.learn_more")
      })
    }), " "]
  });
  let N = jsx("div", {
    className: e.wrapperClassName ? e.wrapperClassName : "",
    children: jsx("div", {
      className: tB,
      children: f.map(e => jsx(ProfileRowTile, {
        profile: e,
        rightSide: e.is_restricted_by_current_user ? jsx(Button, {
          onClick: v.bind(null, e.id),
          variant: "secondary",
          children: renderI18nText("community.comments.unrestrict")
        }) : jsx(Button, {
          onClick: S.bind(null, e.id),
          variant: "primary",
          children: renderI18nText("community.comments.restrict")
        })
      }, e.profile_handle))
    })
  });
  return jsxs(Fragment, {
    children: [jsx("div", {
      className: bV,
      children: renderI18nText("settings_tab.community_commenters_label")
    }), x, N]
  });
}
export let $$E0 = registerModal(function (e) {
  return jsx(ModalContainer, {
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