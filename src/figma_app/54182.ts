import { useSelector } from "react-redux"
import { jsx } from "react/jsx-runtime"
import { UserProfileTooltip, UserProfileTooltipAction } from "../905/57178"
import { KindEnum } from "../905/129884"
import { getI18nString } from "../905/303541"
import { selectCurrentUser } from "../905/372672"
import { useUserOrgPath } from "../905/495564"
import { AccessLevelEnum } from "../905/557142"
import { useIsFullscreenSitesView } from "../905/561485"
import { isWorkshopModeEnabled } from "../figma_app/789"
import { getSelectedView } from "../figma_app/386952"
import { isIncludedView } from "../figma_app/707808"
import { truncate } from "../figma_app/930338"

interface TooltipUser {
  id?: string
  sessionId?: number
}

interface MultiplayerState {
  sessionID: number
  presenterSessionID: number
  observingSessionID: number
  allUsers: Array<{ userID: string, sitesViewState?: any }>
}

interface TooltipProps {
  id?: string
  tooltipOffsetY?: number
  children: React.ReactNode
  user?: {
    id: string
    handle: string
    sessionId?: number
  }
  role?: {
    id: string
    level: AccessLevelEnum
    user: {
      id: string
      handle: string
      sessionId?: number
    }
  }
}

/**
 * Gets the role name suffix based on access level
 * @param level - The access level enum
 * @returns The role name string
 */
function getRoleName(level: AccessLevelEnum): string {
  switch (level) {
    case AccessLevelEnum.OWNER:
      return " (owner)"
    case AccessLevelEnum.ADMIN:
      return " (admin)"
    default:
      return ""
  }
}

/**
 * Formats the user handle tooltip text
 * @param handle - User handle to truncate and display
 * @param isCurrentUser - Whether this is the current user
 * @param accessLevel - Optional access level for role information
 * @returns Formatted tooltip string
 */
function formatUserHandleTooltip(
  handle: string,
  isCurrentUser: boolean,
  accessLevel?: AccessLevelEnum,
): string {
  const truncatedHandle = truncate(handle, 25)
  const roleName = accessLevel ? getRoleName(accessLevel) : ""

  return isCurrentUser
    ? getI18nString("avatar.tooltip.current_user_handle", {
      handle: truncatedHandle,
      roleName,
    })
    : getI18nString("avatar.tooltip.other_user_handle", {
      handle: truncatedHandle,
      roleName,
    })
}

/**
 * Determines the appropriate tooltip action based on user context
 * @param params - Object containing all necessary context parameters
 * @returns The appropriate tooltip action
 */
function getTooltipAction(params: {
  localUser: any
  tooltipUser: TooltipUser
  multiplayer: MultiplayerState
  isInWorkshop: boolean
  selectedView: any
}): UserProfileTooltipAction {
  const { localUser, tooltipUser, multiplayer, isInWorkshop, selectedView } = params

  const isVisitor = tooltipUser.id?.includes("VISITOR-") || !tooltipUser.id
  const hasActiveSession = multiplayer.sessionID !== -1
  const isLocalUserSession = "sessionId" in tooltipUser && tooltipUser.sessionId === multiplayer.sessionID
  const isPresenter = "sessionId" in tooltipUser && tooltipUser.sessionId === multiplayer.presenterSessionID
  const isObserver = "sessionId" in tooltipUser && multiplayer.observingSessionID === tooltipUser.sessionId

  if (!hasActiveSession || isIncludedView(selectedView)) {
    return isVisitor
      ? UserProfileTooltipAction.NONE
      : UserProfileTooltipAction.VIEW_PROFILE
  }

  if (isLocalUserSession) {
    if (isVisitor || !localUser) {
      return isInWorkshop
        ? UserProfileTooltipAction.EDIT_NAME
        : UserProfileTooltipAction.NONE
    }
    return isPresenter
      ? UserProfileTooltipAction.STOP_PRESENTING
      : UserProfileTooltipAction.NONE
  }

  if (isPresenter && !isObserver) {
    return UserProfileTooltipAction.FOLLOW_PRESENTER
  }

  return isObserver
    ? UserProfileTooltipAction.STOP_OBSERVE
    : UserProfileTooltipAction.START_OBSERVE
}

/**
 * Avatar component with user tooltip functionality
 * @param props - Component props
 * @returns JSX element
 */
export function AvatarWithTooltip(props: TooltipProps) {
  const currentUser = selectCurrentUser()
  const multiplayerState = useSelector((state: any) => state.multiplayer)
  const userOrgPath = useUserOrgPath()
  const isFullscreenSitesView = useIsFullscreenSitesView()

  // Determine user/role ID for element key
  const elementId = "user" in props
    ? `user-${props.user!.id}`
    : `role-${props.role!.id}`

  // Get the user object from either user or role
  const user = "user" in props ? props.user : props.role?.user

  // Determine if this is the current user
  let isCurrentUser = false
  const isLocalSession = "sessionId" in user! && user!.sessionId === multiplayerState.sessionID
  const userInMultiplayer = multiplayerState.allUsers.find((u: any) => u.userID === user!.id)
  const userViewState = isFullscreenSitesView ? userInMultiplayer?.sitesViewState : undefined

  if (currentUser) {
    isCurrentUser = user!.id === currentUser.id
  }
  else if ("sessionId" in user!) {
    isCurrentUser = isLocalSession
  }

  // Format the user handle tooltip
  const tooltipHandle = props.role
    ? formatUserHandleTooltip(user!.handle, isCurrentUser, props.role.level)
    : formatUserHandleTooltip(user!.handle, isCurrentUser)

  // Determine tooltip action
  const tooltipAction = getTooltipAction({
    localUser: currentUser,
    tooltipUser: user!,
    multiplayer: multiplayerState,
    isInWorkshop: isWorkshopModeEnabled(),
    selectedView: getSelectedView(),
  })

  // Build user profile URL
  const userProfileUrl = `/files${userOrgPath}/user/${user!.id}`

  return jsx("div", {
    "data-tooltip": UserProfileTooltip,
    "data-tooltip-click-action": tooltipAction,
    "data-tooltip-interactive": true,
    "data-tooltip-max-width": 300,
    "data-tooltip-offset-y": props.tooltipOffsetY ?? 8,
    "data-tooltip-timeout-delay": 150,
    "data-tooltip-type": KindEnum.SPECIAL,
    "data-tooltip-user-handle": tooltipHandle,
    "data-tooltip-user-profile-url": userProfileUrl,
    "data-tooltip-user-session-id": "sessionId" in user! ? user!.sessionId : undefined,
    "data-tooltip-user-view-state": userViewState,
    "id": props.id,
    "style": {
      display: "inherit",
    },
    "children": props.children,
  }, `avatar-${elementId}`)
}

export const W = AvatarWithTooltip
