import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSubscription } from "../figma_app/288654";
import { sz } from "../figma_app/216696";
import { CommunityProfileView } from "../figma_app/43951";
import { useIsLoading, useIsLoaded } from "../905/18797";
export function $$c0(e) {
  let t = useDispatch();
  let r = useSelector(t => t.communityHub.shelves[e] || []);
  let n = sz.loadingKeyForPayload({
    shelfType: e
  });
  let a = useIsLoading(n);
  let c = useIsLoaded(n);
  useEffect(() => {
    a || c || t(sz({
      shelfType: e
    }));
  });
  return {
    shelves: r,
    isLoading: a,
    hasResolved: c
  };
}
export function $$$$d1(e) {
  let t = useSubscription(CommunityProfileView, {
    profileId: e
  });
  if ("loaded" === t.status) {
    let e = t.data.communityProfile;
    if (e) {
      let t = e.associatedUsers;
      let r = [];
      t.forEach(t => {
        r.push({
          user_id: t.id,
          email: t.email,
          is_primary_user: t.id === e.primaryUserId
        });
      });
      let s = [];
      e.badges.forEach(e => {
        s.push(e.badgeType);
      });
      return {
        id: e.id,
        name: e.name,
        profile_handle: e.profileHandle,
        description: e.description,
        location: e.location,
        website: e.website,
        twitter: e.twitter,
        instagram: e.instagram,
        public_at: e.publicAt,
        follower_count: e.followerCount,
        following_count: e.followingCount,
        cover_image_path: e.coverImagePath,
        primary_user_id: e.primaryUserId,
        team_id: e.teamId,
        org_id: e.orgId,
        pronouns: e.pronouns,
        entity_type: e.entityType,
        created_at: e.createdAt.toDateString(),
        updated_at: e.updatedAt.toDateString(),
        redirect_cover_image_url: e.coverImagePath ? `/profile/${e.id}/cover_image` : "",
        associated_users: r,
        current_user_is_following: e.currentUserIsFollowing,
        current_user_is_followed: e.currentUserIsFollowed,
        badges: s,
        is_restricted_by_current_user: !1,
        img_urls: {},
        img_url: "",
        has_shared_orgs: !1,
        has_shared_teams: !1
      };
    }
  }
}
export const d = $$c0;
export const t = $$$$d1;