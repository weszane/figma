import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Rs } from "../figma_app/288654";
import { sz } from "../figma_app/216696";
import { CommunityProfileView } from "../figma_app/43951";
import { oh, mC } from "../905/18797";
export function $$$$d0(e) {
  let t = useDispatch();
  let s = useSelector(t => t.communityHub.shelves[e] || []);
  let n = sz.loadingKeyForPayload({
    shelfType: e
  });
  let o = oh(n);
  let d = mC(n);
  useEffect(() => {
    o || d || t(sz({
      shelfType: e
    }));
  });
  return {
    shelves: s,
    isLoading: o,
    hasResolved: d
  };
}
export function $$c1(e) {
  let t = Rs(CommunityProfileView, {
    profileId: e
  });
  if ("loaded" === t.status) {
    let e = t.data.communityProfile;
    if (e) {
      let t = e.associatedUsers;
      let s = [];
      t.forEach(t => {
        s.push({
          user_id: t.id,
          email: t.email,
          is_primary_user: t.id === e.primaryUserId
        });
      });
      let i = [];
      e.badges.forEach(e => {
        i.push(e.badgeType);
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
        associated_users: s,
        current_user_is_following: e.currentUserIsFollowing,
        current_user_is_followed: e.currentUserIsFollowed,
        badges: i,
        is_restricted_by_current_user: !1,
        img_urls: {},
        img_url: "",
        has_shared_orgs: !1,
        has_shared_teams: !1
      };
    }
  }
}
export const d = $$$$d0;
export const t = $$c1;