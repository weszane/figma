import { jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { wA, d4 } from "../vendor/514228";
import { k as _$$k } from "../905/443820";
import { rr } from "../figma_app/778880";
import { Ts } from "../905/194276";
import { $z } from "../figma_app/617427";
import { t as _$$t, tx } from "../905/303541";
import { X2, e6 } from "../figma_app/530167";
import { to } from "../905/156213";
import { s0, ZO } from "../figma_app/350203";
import { cs } from "../figma_app/740025";
import { VP, GH, aF } from "../905/18797";
import { Ib } from "../905/129884";
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
  let I = wA();
  let E = d4(e => "user" in e ? e.user : null);
  let x = d4(e => "authedActiveCommunityProfile" in e ? e.authedActiveCommunityProfile : null);
  let S = d4(e => "user" in e ? e.user?.community_profile_id ?? null : null);
  let w = d4(e => "loadingState" in e ? e.loadingState : {});
  let [C, T] = useState(!1);
  let [k, R] = useState(!1);
  let [N, P] = useState(!0);
  let [O, D] = useState(e.current_user_is_following);
  let L = O ? X2.loadingKeyForPayload(e.id) : e6.loadingKeyForPayload(e.id);
  useEffect(() => {
    k && !VP(w, L) && (GH(w, L) ? (R(!1), D(!O)) : aF(w, L) && (R(!1), v?.()));
  }, [w, L, k, O, v]);
  let F = (e, i) => {
    if (rr) {
      window.location.href = "/login";
      return;
    }
    I(Ts({
      origin: i
    }));
    I(to({
      type: _$$l,
      data: {
        headerText: e,
        icon: t?.modalTab ? _$$A2 : _$$A,
        dispatch: I
      }
    }));
  };
  let M = C && N;
  return cs(x) ? jsx($z, {
    "data-tooltip-type": Ib.TEXT,
    "data-tooltip": _$$t("community.follow.org_and_team_profiles_cannot_follow_other_profiles"),
    "data-tooltip-show-immediately": !0,
    disabled: !0,
    variant: "secondary",
    children: tx("community.follow.follow")
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
      action: s0.PROFILE_UNFOLLOW,
      communityHubEntity: ZO.PROFILES,
      ...(t || {})
    },
    children: k ? jsx("div", {
      className: "x78zum5 x6s0dn4 xl56j7k x1nfngrj",
      children: jsx(_$$k, {
        size: "sm"
      })
    }) : M ? _$$t("community.follow.unfollow") : _$$t("community.follow.following")
  }) : jsx($z, {
    onClick: t => {
      if (t.stopPropagation(), !E) {
        F(e.name ? _$$t("community.follow.follow_profile_name_to_keep_up_with_what_they_publish", {
          profileName: e.name
        }) : _$$t("community.follow.follow_this_profile_to_keep_up_with_what_they_publish"), "hub_file_follow_signed_out");
        return;
      }
      if (!E.community_profile_id) {
        I(to({
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
      action: s0.PROFILE_FOLLOW,
      communityHubEntity: ZO.PROFILES,
      ...(t || {})
    },
    variant: "primary",
    children: k ? jsx("div", {
      className: "x78zum5 x6s0dn4 xl56j7k x1nfngrj",
      children: jsx(_$$k, {
        size: "sm"
      })
    }) : _$$t("community.follow.follow")
  });
}
export const W = $$v0;