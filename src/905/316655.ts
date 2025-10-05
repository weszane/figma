import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { jsx } from "react/jsx-runtime"
import { isFailure, isLoading, isSuccess } from "../905/18797"
import { KindEnum } from "../905/129884"
import { showModalHandler } from "../905/156213"
import { AUTH_INIT } from "../905/194276"
import { getI18nString, renderI18nText } from "../905/303541"
import { LoadingSpinner } from "../905/443820"
import { registerLoggedOutCommunityActionModal } from "../905/690005"
import { A as _$$A } from "../6828/373785"
import { A as _$$A2 } from "../6828/806421"
import { FigmaResourceType, HubAction } from "../figma_app/350203"
import { followEntityThunk, unfollowEntityThunk } from "../figma_app/530167"
import { COMMUNITY_OPT_IN_MODAL_NAME, CommunityOnboardingVariation } from "../figma_app/588092"
import { WithTrackedButton } from "../figma_app/617427"
import { isOrgOrTeamExport } from "../figma_app/740025"
import { isMobileUA } from "../figma_app/778880"

export interface ProfileFollowButtonProps {
  profile: {
    id: string
    name?: string
    current_user_is_following: boolean
  }
  trackingProperties?: Record<string, any>
  onClick?: () => void
  onError?: () => void
}

/**
 * Button component for following/unfollowing a community profile
 * Handles various states including loading, hover, and different user scenarios
 *
 * Original function name: $$v0
 */
export function ProfileFollowButton({
  profile,
  trackingProperties,
  onClick,
  onError,
}: ProfileFollowButtonProps) {
  const dispatch = useDispatch<AppDispatch>()
  const currentUser = useSelector<AppState>(state => "user" in state ? state.user : null) as AppState["user"]
  const authedActiveCommunityProfile = useSelector<AppState>(state => "authedActiveCommunityProfile" in state ? state.authedActiveCommunityProfile : null)
  const currentUserProfileId = useSelector<AppState>(state => "user" in state ? state.user?.community_profile_id ?? null : null)
  const loadingState = useSelector<AppState>(state => "loadingState" in state ? state.loadingState : {}) as AppState["loadingState"]

  const [isHoveringUnfollow, setIsHoveringUnfollow] = useState<boolean>(false)
  const [isFollowingActionLoading, setIsFollowingActionLoading] = useState<boolean>(false)
  const [showFullUnfollowText, setShowFullUnfollowText] = useState<boolean>(true)
  const [isCurrentlyFollowing, setIsCurrentlyFollowing] = useState(profile.current_user_is_following)

  const loadingKey = isCurrentlyFollowing
    ? unfollowEntityThunk.loadingKeyForPayload(profile.id)
    : followEntityThunk.loadingKeyForPayload(profile.id)

  // Handle follow/unfollow action completion
  useEffect(() => {
    if (isFollowingActionLoading && !isLoading(loadingState, loadingKey)) {
      if (isSuccess(loadingState, loadingKey)) {
        setIsFollowingActionLoading(false)
        setIsCurrentlyFollowing(!isCurrentlyFollowing)
      }
      else if (isFailure(loadingState, loadingKey)) {
        setIsFollowingActionLoading(false)
        onError?.()
      }
    }
  }, [loadingState, loadingKey, isFollowingActionLoading, isCurrentlyFollowing, onError])

  /**
   * Handle case when user is not authenticated
   * Redirects mobile users to login or shows authentication modal
   */
  const handleUnauthenticatedUser = (headerText: string, origin: string) => {
    if (isMobileUA) {
      window.location.href = "/login"
      return
    }

    dispatch(AUTH_INIT({ origin }))
    dispatch(showModalHandler({
      type: registerLoggedOutCommunityActionModal,
      data: {
        headerText,
        icon: trackingProperties?.modalTab ? _$$A2 : _$$A,
        dispatch,
      },
    }))
  }

  const shouldShowUnfollowConfirmation = isHoveringUnfollow && showFullUnfollowText

  // Case: Organization or team profiles cannot follow others
  if (isOrgOrTeamExport(authedActiveCommunityProfile)) {
    return jsx(WithTrackedButton, {
      "data-tooltip-type": KindEnum.TEXT,
      "data-tooltip": getI18nString("community.follow.org_and_team_profiles_cannot_follow_other_profiles"),
      "data-tooltip-show-immediately": true,
      "disabled": true,
      "variant": "secondary",
      "children": renderI18nText("community.follow.follow"),
    })
  }

  // Case: User is already following this profile
  if (isCurrentlyFollowing) {
    return jsx(WithTrackedButton, {
      htmlAttributes: {
        onMouseEnter: () => {
          setIsHoveringUnfollow(true)
        },
        onMouseLeave: () => {
          setIsHoveringUnfollow(false)
          setShowFullUnfollowText(true)
        },
      },
      variant: shouldShowUnfollowConfirmation && !isFollowingActionLoading ? "destructiveSecondary" : "secondary",
      onClick: (event) => {
        event.stopPropagation()
        if (currentUser && !isFollowingActionLoading) {
          setIsFollowingActionLoading(true)
          onClick?.()
          dispatch(unfollowEntityThunk(profile.id))
        }
      },
      trackingProperties: {
        followerProfileId: currentUserProfileId,
        followedProfileId: profile.id,
        action: HubAction.PROFILE_UNFOLLOW,
        communityHubEntity: FigmaResourceType.PROFILES,
        ...(trackingProperties || {}),
      },
      children: isFollowingActionLoading
        ? jsx("div", {
          className: "x78zum5 x6s0dn4 xl56j7k x1nfngrj",
          children: jsx(LoadingSpinner, {
            size: "sm",
          }),
        })
        : shouldShowUnfollowConfirmation ? getI18nString("community.follow.unfollow") : getI18nString("community.follow.following"),
    })
  }

  // Case: User is not following this profile
  return jsx(WithTrackedButton, {
    onClick: (event) => {
      event.stopPropagation()

      // Handle unauthenticated user
      if (!currentUser) {
        const followMessage = profile.name
          ? getI18nString("community.follow.follow_profile_name_to_keep_up_with_what_they_publish", {
            profileName: profile.name,
          })
          : getI18nString("community.follow.follow_this_profile_to_keep_up_with_what_they_publish")

        handleUnauthenticatedUser(followMessage, "hub_file_follow_signed_out")
        return
      }

      // Handle user without community profile
      if (!currentUser.community_profile_id) {
        dispatch(showModalHandler({
          type: COMMUNITY_OPT_IN_MODAL_NAME,
          data: {
            userId: currentUser.id,
            variations: [CommunityOnboardingVariation.OPT_IN],
            onFinish: () => dispatch(followEntityThunk(profile.id)),
          },
        }))
        return
      }

      // Normal follow action
      if (!isFollowingActionLoading) {
        setShowFullUnfollowText(false)
        setIsFollowingActionLoading(true)
        onClick?.()
        dispatch(followEntityThunk(profile.id))
      }
    },
    trackingProperties: {
      followerProfileId: currentUserProfileId,
      followedProfileId: profile.id,
      action: HubAction.PROFILE_FOLLOW,
      communityHubEntity: FigmaResourceType.PROFILES,
      ...(trackingProperties || {}),
    },
    variant: "primary",
    children: isFollowingActionLoading
      ? jsx("div", {
        className: "x78zum5 x6s0dn4 xl56j7k x1nfngrj",
        children: jsx(LoadingSpinner, {
          size: "sm",
        }),
      })
      : getI18nString("community.follow.follow"),
  })
}

export const W = ProfileFollowButton
