import { jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { k as _$$k } from "../905/443820";
import { isMobileUA } from "../figma_app/778880";
import { AUTH_INIT } from "../905/194276";
import { $z } from "../figma_app/617427";
import { getI18nString, renderI18nText } from "../905/303541";
import { X2, e6 } from "../figma_app/530167";
import { showModalHandler } from "../905/156213";
import { HubAction, FigmaResourceType } from "../figma_app/350203";
import { isOrgOrTeamExport } from "../figma_app/740025";
import { isLoading, isSuccess, isFailure } from "../905/18797";
import { KindEnum } from "../905/129884";
import { l as _$$l } from "../905/690005";
import { G$, FF } from "../figma_app/588092";
import { A as _$$A } from "../6828/373785";
import { A as _$$A2 } from "../6828/806421";
export function $$v0({
  profile: e,
  trackingProperties: t,
  onClick: i,
  onError: v
}) {
  let I = useDispatch();
  let E = useSelector(e => "user" in e ? e.user : null);
  let x = useSelector(e => "authedActiveCommunityProfile" in e ? e.authedActiveCommunityProfile : null);
  let S = useSelector(e => "user" in e ? e.user?.community_profile_id ?? null : null);
  let w = useSelector(e => "loadingState" in e ? e.loadingState : {});
  let [C, T] = useState(!1);
  let [k, R] = useState(!1);
  let [N, P] = useState(!0);
  let [O, D] = useState(e.current_user_is_following);
  let L = O ? X2.loadingKeyForPayload(e.id) : e6.loadingKeyForPayload(e.id);
  useEffect(() => {
    k && !isLoading(w, L) && (isSuccess(w, L) ? (R(!1), D(!O)) : isFailure(w, L) && (R(!1), v?.()));
  }, [w, L, k, O, v]);
  let F = (e, i) => {
    if (isMobileUA) {
      window.location.href = "/login";
      return;
    }
    I(AUTH_INIT({
      origin: i
    }));
    I(showModalHandler({
      type: _$$l,
      data: {
        headerText: e,
        icon: t?.modalTab ? _$$A2 : _$$A,
        dispatch: I
      }
    }));
  };
  let M = C && N;
  return isOrgOrTeamExport(x) ? jsx($z, {
    "data-tooltip-type": KindEnum.TEXT,
    "data-tooltip": getI18nString("community.follow.org_and_team_profiles_cannot_follow_other_profiles"),
    "data-tooltip-show-immediately": !0,
    disabled: !0,
    variant: "secondary",
    children: renderI18nText("community.follow.follow")
  }) : O ? jsx($z, {
    htmlAttributes: {
      onMouseEnter: () => {
        T(!0);
      },
      onMouseLeave: () => {
        T(!1);
        P(!0);
      }
    },
    variant: M && !k ? "destructiveSecondary" : "secondary",
    onClick: t => {
      t.stopPropagation();
      E && !k && (R(!0), i?.(), I(X2(e.id)));
    },
    trackingProperties: {
      followerProfileId: S,
      followedProfileId: e.id,
      action: HubAction.PROFILE_UNFOLLOW,
      communityHubEntity: FigmaResourceType.PROFILES,
      ...(t || {})
    },
    children: k ? jsx("div", {
      className: "x78zum5 x6s0dn4 xl56j7k x1nfngrj",
      children: jsx(_$$k, {
        size: "sm"
      })
    }) : M ? getI18nString("community.follow.unfollow") : getI18nString("community.follow.following")
  }) : jsx($z, {
    onClick: t => {
      if (t.stopPropagation(), !E) {
        F(e.name ? getI18nString("community.follow.follow_profile_name_to_keep_up_with_what_they_publish", {
          profileName: e.name
        }) : getI18nString("community.follow.follow_this_profile_to_keep_up_with_what_they_publish"), "hub_file_follow_signed_out");
        return;
      }
      if (!E.community_profile_id) {
        I(showModalHandler({
          type: G$,
          data: {
            userId: E.id,
            variations: [FF.OPT_IN],
            onFinish: () => I(e6(e.id))
          }
        }));
        return;
      }
      k || (P(!1), R(!0), i?.(), I(e6(e.id)));
    },
    trackingProperties: {
      followerProfileId: S,
      followedProfileId: e.id,
      action: HubAction.PROFILE_FOLLOW,
      communityHubEntity: FigmaResourceType.PROFILES,
      ...(t || {})
    },
    variant: "primary",
    children: k ? jsx("div", {
      className: "x78zum5 x6s0dn4 xl56j7k x1nfngrj",
      children: jsx(_$$k, {
        size: "sm"
      })
    }) : getI18nString("community.follow.follow")
  });
}
export const W = $$v0;