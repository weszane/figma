import { useDispatch } from "react-redux"
import { jsx, jsxs } from "react/jsx-runtime"
import { ProfilePartnerBadge } from "../905/152724"
import { ProfileFollowButton } from "../905/316655"
import { selectCurrentUser } from "../905/372672"
import { selectViewAction } from "../905/929976"
import { cssBuilderInstance } from "../cssbuilder/589278"
import { logAndTrackCTA } from "../figma_app/314264"
import { Ro } from "../figma_app/805373"
import { v_ } from "../figma_app/878651"
import { BadgeColor } from "../figma_app/919079"

interface ProfileRowTileProps {
  profile: {
    id: string
    name: string
    profile_handle: string
    current_user_is_followed?: boolean
  }
  tileRef?: React.Ref<HTMLDivElement>
  rightSide?: React.ReactNode
  className?: string
  avatarSize?: number
  hideFollowsYouBadge?: boolean
}

interface ProfileWithResourcesTileProps {
  profile: ProfileRowTileProps['profile']
  className?: string
  trackingProperties?: any
  trackingEventName?: string
  toggleFollowing?: () => void
  hideFollowButton?: boolean
}

/**
 * ProfileRowTile ($$h0) - Displays a profile row with avatar, name, handle and optional follow badge
 */
export function ProfileRowTile({
  profile,
  tileRef,
  rightSide,
  className,
  avatarSize = 48,
  hideFollowsYouBadge = false,
}: ProfileRowTileProps): JSX.Element {
  const dispatch = useDispatch()

  const handleProfileClick = () => {
    dispatch(selectViewAction({
      view: "communityHub",
      subView: "handle",
      handle: profile.profile_handle,
    }))
  }

  return jsxs("div", {
    className: className || "profile_tile--profileRowTile---yDD9",
    ref: tileRef,
    children: [
      jsxs("div", {
        className: "profile_tile--profileRowTileProfileInfoClickTarget--yOlvx",
        onClick: handleProfileClick,
        children: [
          jsx(Ro, {
            entity: profile,
            size: avatarSize,
            className: "profile_tile--avatar--zfidx",
          }),
          jsxs("div", {
            className: "profile_tile--profileRowTileProfileInfo--wjbCm",
            children: [
              jsxs("div", {
                className: "profile_tile--profileRowTileProfileName--8Azkx ellipsis--ellipsis--Tjyfa text--fontPos13--xW8hS text--_fontBase--QdLsd",
                children: [
                  jsx("span", {
                    className: cssBuilderInstance.ellipsis.noWrap.overflowHidden.$,
                    children: profile.name,
                  }),
                  jsx(ProfilePartnerBadge, {
                    profile,
                  }),
                ],
              }),
              jsxs("div", {
                className: "profile_tile--profileHandleAndFollowBadge--gbnSc",
                children: [
                  jsxs("div", {
                    className: "profile_tile--profileRowTileProfileHandle--gpLvX ellipsis--ellipsis--Tjyfa text--fontPos11--2LvXf text--_fontBase--QdLsd",
                    children: ["@", profile.profile_handle],
                  }),
                  profile.current_user_is_followed && !hideFollowsYouBadge && jsx(v_, {
                    color: BadgeColor.INVERT,
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      rightSide && jsx("div", {
        className: "profile_tile--profileRowTileRightSide--j7Plw",
        children: rightSide,
      }),
    ],
  }, profile.id)
}

/**
 * ProfileWithResourcesTile ($$g1) - Wrapper component that adds tracking and navigation to ProfileRowTile
 */
export function ProfileWithResourcesTile({
  profile,
  className,
  trackingProperties,
  trackingEventName,
  toggleFollowing,
  hideFollowButton = false,
}: ProfileWithResourcesTileProps): JSX.Element {
  const currentUser = selectCurrentUser()
  const dispatch = useDispatch()

  const handleTileClick = (event: React.MouseEvent) => {
    event.stopPropagation()

    if (trackingProperties && trackingEventName) {
      logAndTrackCTA(trackingProperties, trackingEventName)
    }

    dispatch(selectViewAction({
      view: "communityHub",
      subView: "handle",
      handle: profile.profile_handle,
    }))
  }

  return jsx("div", {
    className,
    onClick: handleTileClick,
    children: jsx("div", {
      children: jsx(ProfileRowTile, {
        profile,
        avatarSize: 64,
        className: "profile_tile--profileWithResourcesTileProfileSection--nUGaw profile_tile--profileRowTile---yDD9",
        rightSide: jsx("div", {
          className: currentUser?.community_profile_id === profile.id ? "profile_tile--followButtonPlaceholderSpace--wDM0C" : void 0,
          children: !hideFollowButton && jsx(ProfileFollowButton, {
            onClick: toggleFollowing,
            profile,
          }),
        }),
        hideFollowsYouBadge: true,
      }),
    }),
  })
}

// Export aliases for backward compatibility
export const y = ProfileRowTile
export const v = ProfileWithResourcesTile
