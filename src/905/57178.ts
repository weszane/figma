import { noop } from 'lodash-es'
import { useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import { jsx, jsxs } from "react/jsx-runtime"
import { ignoreCommandOrShift } from "../905/63728"
import { isCodeViewPanel } from "../905/298663"
import { renderI18nText } from "../905/303541"
import { Button } from "../905/521428"
import { registerTooltip } from "../905/524523"
import { useIsFullscreenSitesView } from "../905/561485"
import { customHistory } from "../905/612521"
import { ButtonPrimitive } from "../905/632989"
import { hideTooltip } from "../905/765855"
import { SpotlightEventType, useSpotlightCTATracking } from "../905/847283"
import { showDropdownThunk } from "../905/929976"
import { postUserFlag } from "../905/985254"
import { cancelNomination, nominatePresenter } from "../figma_app/385215"
import { getSelectedViewType } from "../figma_app/386952"
import { useIsPresentationAllowed } from "../figma_app/440875"
import { useIsSelectedFigmakeFullscreen } from "../figma_app/552876"
import { getViewerInstance } from "../figma_app/632319"
import { Multiplayer } from "../figma_app/763686"
import { desktopAPIInstance } from "../figma_app/876459"

let w = "view_user_profile_tooltip--base--SgkjR tooltip--column--zo-M5 text--fontPos11--2LvXf text--_fontBase--QdLsd"
let C = "view_user_profile_tooltip--handle--RzZyC"
let T = "view_user_profile_tooltip--userHandleAndLink--b3O-1 view_user_profile_tooltip--base--SgkjR tooltip--column--zo-M5 text--fontPos11--2LvXf text--_fontBase--QdLsd"
let k = "view_user_profile_tooltip--line--BVW2y"
// Define the action types for the user profile tooltip
export enum UserProfileTooltipAction {
  VIEW_PROFILE = "view-profile",
  EDIT_NAME = "edit-name",
  START_OBSERVE = "start-observe",
  STOP_OBSERVE = "stop-observe",
  START_PRESENTING = "start-presenting",
  STOP_PRESENTING = "stop-presenting",
  FOLLOW_PRESENTER = "follow-presenter",
  NOMINATE_PRESENTER = "nominate-presenter",
  NONE = "none",
}

// Component for displaying user handle with a primary button
interface UserProfileTooltipContentProps {
  userHandle: string
  actionText: React.ReactNode
  actionCallback: (e: React.MouseEvent) => void
}

function UserProfileTooltipContent({ userHandle, actionText, actionCallback }: UserProfileTooltipContentProps) {
  return jsxs("div", {
    className: w,
    children: [
      jsx("span", {
        className: C,
        dir: "auto",
        children: userHandle,
      }),
      jsx("div", {
        className: k,
      }),
      jsx(Button, {
        variant: "primary",
        onClick: actionCallback,
        children: actionText,
      }),
    ],
  })
}

// Component for displaying user handle with a primitive button
interface UserProfileTooltipLinkProps {
  userHandle: string
  actionText: React.ReactNode
  actionCallback: (e: React.MouseEvent) => void
}

function UserProfileTooltipLink({ userHandle, actionText, actionCallback }: UserProfileTooltipLinkProps) {
  return jsxs(ButtonPrimitive, {
    onClick: actionCallback,
    className: T,
    children: [
      jsx("span", {
        className: C,
        dir: "auto",
        children: userHandle,
      }),
      actionText,
    ],
  })
}

// Component for displaying user handle with both link and button
interface UserProfileTooltipCompositeProps {
  userHandle: string
  linkText: React.ReactNode
  linkCallback: (e: React.MouseEvent) => void
  buttonText: React.ReactNode
  buttonCallback?: (e: React.MouseEvent) => void
  buttonVariant: "primary" | "secondary"
  disabled?: boolean
}

function UserProfileTooltipComposite({
  userHandle,
  linkText,
  linkCallback,
  buttonText,
  buttonCallback,
  buttonVariant,
  disabled,
}: UserProfileTooltipCompositeProps) {
  const dispatch = useDispatch<AppDispatch>()

  const handleLinkClick = useCallback((e: React.MouseEvent) => {
    linkCallback(e)
    dispatch(hideTooltip())
  }, [linkCallback, dispatch])

  const handleButtonClick = useCallback((e: React.MouseEvent) => {
    if (buttonCallback) {
      buttonCallback(e)
      dispatch(hideTooltip())
    }
  }, [buttonCallback, dispatch])

  const linkElement = jsxs(ButtonPrimitive, {
    onClick: handleLinkClick,
    className: T,
    disabled,
    children: [
      jsx("span", {
        className: C,
        dir: "auto",
        children: userHandle,
      }),
      linkText,
    ],
  })

  return jsxs("div", {
    "className": w,
    "data-preferred-theme": buttonVariant === "secondary" ? "dark" : void 0,
    "children": [
      linkElement,
      jsx("div", {
        className: k,
      }),
      jsx(Button, {
        variant: buttonVariant,
        onClick: handleButtonClick,
        disabled: buttonVariant === "secondary" && !buttonCallback,
        children: buttonText,
      }),
    ],
  })
}

// Component for displaying user handle with no action
interface UserProfileTooltipNoneProps {
  userHandle: string
}

function UserProfileTooltipNone({ userHandle }: UserProfileTooltipNoneProps) {
  return jsx(UserProfileTooltipLink, {
    actionText: null,
    actionCallback: noop,
    userHandle,
  })
}

// Action handlers for different tooltip actions
const ACTION_HANDLERS: Record<UserProfileTooltipAction, React.FC<any>> = {
  [UserProfileTooltipAction.EDIT_NAME]: function EditNameHandler({ userHandle }: { userHandle: string }) {
    const dispatch = useDispatch<AppDispatch>()

    const handleEditName = useCallback((e: React.MouseEvent) => {
      e.stopPropagation()
      e.preventDefault()
      dispatch(showDropdownThunk({
        type: "multiplayer-nickname-dropdown",
      }))
    }, [dispatch])

    return jsx(UserProfileTooltipLink, {
      actionText: renderI18nText("avatar.tooltip.edit_name"),
      actionCallback: handleEditName,
      userHandle,
    })
  },

  [UserProfileTooltipAction.START_OBSERVE]: function StartObserveHandler({
    userHandle,
    userSessionID,
  }: {
    userHandle: string
    userSessionID?: number
  }) {
    const dispatch = useDispatch()
    const isPresentationAllowed = useIsPresentationAllowed()
    const isFullscreen = useIsSelectedFigmakeFullscreen()

    if (isFullscreen) {
      return jsx(UserProfileTooltipNone, {
        userHandle,
      })
    }

    const handleStartObserve = useCallback((e: React.MouseEvent) => {
      e.stopPropagation()
      if (Multiplayer && userSessionID != null) {
        Multiplayer.observeUser(userSessionID)
        dispatch(postUserFlag({
          aware_of_observation_mode: true,
        }))
      }
    }, [userSessionID, dispatch])

    return isPresentationAllowed
      ? jsx(UserProfileTooltipLink, {
        actionText: renderI18nText("collaboration.spotlight.tooltip.click_to_follow"),
        actionCallback: handleStartObserve,
        userHandle,
      })
      : jsx(UserProfileTooltipLink, {
        actionText: renderI18nText("collaboration.spotlight.tooltip.legacy.click_to_observe_user"),
        actionCallback: handleStartObserve,
        userHandle,
      })
  },

  [UserProfileTooltipAction.STOP_OBSERVE]: function StopObserveHandler({ userHandle }: { userHandle: string }) {
    const isPresentationAllowed = useIsPresentationAllowed()

    const handleStopObserve = useCallback((e: React.MouseEvent) => {
      e.stopPropagation()
      Multiplayer.observeUser(-1)
    }, [])

    return isPresentationAllowed
      ? jsx(UserProfileTooltipLink, {
        actionText: renderI18nText("collaboration.spotlight.tooltip.click_to_unfollow"),
        actionCallback: handleStopObserve,
        userHandle,
      })
      : jsx(UserProfileTooltipLink, {
        actionText: renderI18nText("collaboration.spotlight.tooltip.legacy.click_to_stop_observing_user"),
        actionCallback: handleStopObserve,
        userHandle,
      })
  },

  [UserProfileTooltipAction.VIEW_PROFILE]: function ViewProfileHandler({
    userHandle,
    profileUrl,
  }: {
    userHandle: string
    profileUrl: string
  }) {
    const handleViewProfile = ignoreCommandOrShift((e: React.MouseEvent) => {
      e.stopPropagation()
      customHistory.redirect(profileUrl, desktopAPIInstance ? undefined : "_blank")
    })

    return jsx(UserProfileTooltipLink, {
      actionText: renderI18nText("avatar.tooltip.view_profile"),
      actionCallback: handleViewProfile,
      userHandle,
    })
  },

  [UserProfileTooltipAction.START_PRESENTING]: function StartPresentingHandler({ userHandle }: { userHandle: string }) {
    const trackSpotlightCTA = useSpotlightCTATracking()
    const viewType = getSelectedViewType()

    const handleStartPresenting = useCallback((e: React.MouseEvent) => {
      e.stopPropagation()
      e.preventDefault()
      trackSpotlightCTA(SpotlightEventType.START)
      if (viewType === "prototype") {
        getViewerInstance()?.startPresenting()
      }
      else {
        Multiplayer.startPresenting()
      }
    }, [trackSpotlightCTA, viewType])

    return jsx(UserProfileTooltipContent, {
      actionText: renderI18nText("collaboration.spotlight.tooltip.spotlight_me"),
      actionCallback: handleStartPresenting,
      userHandle,
    })
  },

  [UserProfileTooltipAction.STOP_PRESENTING]: function StopPresentingHandler({ userHandle }: { userHandle: string }) {
    const handleStopPresenting = useCallback((e: React.MouseEvent) => {
      e.stopPropagation()
      e.preventDefault()
      Multiplayer.stopPresenting()
    }, [])

    return jsx(UserProfileTooltipLink, {
      actionText: renderI18nText("collaboration.spotlight.tooltip.stop_presenting"),
      actionCallback: handleStopPresenting,
      userHandle,
    })
  },

  [UserProfileTooltipAction.FOLLOW_PRESENTER]: function FollowPresenterHandler({
    userHandle,
    userSessionID,
  }: {
    userHandle: string
    userSessionID?: number
  }) {
    const dispatch = useDispatch()

    const handleFollowPresenter = useCallback((e: React.MouseEvent) => {
      e.stopPropagation()
      if (userSessionID != null) {
        Multiplayer.observeUser(userSessionID)
        dispatch(postUserFlag({
          aware_of_observation_mode: true,
        }))
      }
    }, [userSessionID, dispatch])

    return jsx(UserProfileTooltipLink, {
      actionText: renderI18nText("collaboration.spotlight.tooltip.click_to_follow"),
      actionCallback: handleFollowPresenter,
      userHandle: renderI18nText("avatar.tooltip.spotlight_user_handle", {
        handle: userHandle,
      }),
    })
  },

  [UserProfileTooltipAction.NOMINATE_PRESENTER]: function NominatePresenterHandler({
    userHandle,
    profileUrl,
    userSessionID,
    sitesViewState,
  }: {
    userHandle: string
    profileUrl: string
    userSessionID?: string
    sitesViewState?: number
  }) {
    const multiplayerState = useSelector((state: any) => state.multiplayer)
    const isFullscreenSitesView = useIsFullscreenSitesView()
    const isNominated = multiplayerState && multiplayerState.sessionNominatedByCurrentUser === userSessionID

    const nominate = nominatePresenter()
    const handleNominate = useCallback(() => {
      if (userSessionID !== undefined) {
        nominate(userSessionID, multiplayerState)
      }
    }, [nominate, userSessionID, multiplayerState])

    const cancel = cancelNomination()
    const handleCancelNomination = useCallback(() => {
      if (userSessionID != null) {
        cancel(userSessionID, multiplayerState)
      }
    }, [userSessionID, cancel, multiplayerState])

    const handleViewProfile = ignoreCommandOrShift((e: React.MouseEvent) => {
      e.stopPropagation()
      customHistory.redirect(profileUrl, desktopAPIInstance ? undefined : "_blank")
    })

    const isDisabled = isFullscreenSitesView && sitesViewState !== undefined && isCodeViewPanel(sitesViewState)

    return isNominated
      ? jsx(UserProfileTooltipComposite, {
        linkText: renderI18nText("avatar.tooltip.view_profile"),
        linkCallback: handleViewProfile,
        buttonText: renderI18nText("collaboration.spotlight.tooltip.cancel_ask_to_spotlight"),
        buttonCallback: handleCancelNomination,
        buttonVariant: "secondary",
        userHandle,
      })
      : jsx(UserProfileTooltipComposite, {
        linkText: renderI18nText("avatar.tooltip.view_profile"),
        linkCallback: handleViewProfile,
        disabled: isDisabled,
        buttonText: renderI18nText("collaboration.spotlight.tooltip.ask_to_spotlight"),
        buttonCallback: handleNominate,
        buttonVariant: "primary",
        userHandle,
      })
  },

  [UserProfileTooltipAction.NONE]: UserProfileTooltipNone,
}

// Register the tooltip component
export const UserProfileTooltip = registerTooltip(
  "view_user_profile",
  ({
    action,
    profileUrl,
    userHandle,
    userSessionID,
    sitesViewState,
  }: {
    action: UserProfileTooltipAction
    profileUrl: string
    userHandle: string
    userSessionID?: number
    sitesViewState?: number
  }) => {
    const HandlerComponent = ACTION_HANDLERS[action]
    return jsx(HandlerComponent, {
      profileUrl,
      userHandle,
      userSessionID,
      sitesViewState,
    })
  },
  (element: HTMLElement) => {
    let userSessionID: number | undefined
    let sitesViewState: number | undefined

    const profileUrl = element.getAttribute("data-tooltip-user-profile-url") || ""
    const userHandle = element.getAttribute("data-tooltip-user-handle") || ""
    const sessionIdAttr = element.getAttribute("data-tooltip-user-session-id")
    const viewStateAttr = element.getAttribute("data-tooltip-user-view-state")

    if (sessionIdAttr != null) {
      const parsedId = Number(sessionIdAttr)
      if (!Number.isNaN(parsedId)) {
        userSessionID = parsedId
      }
    }

    if (viewStateAttr) {
      const parsedState = parseInt(viewStateAttr)
      if (!isNaN(parsedState)) {
        sitesViewState = parsedState
      }
    }

    return {
      profileUrl,
      userHandle,
      userSessionID,
      action: element.getAttribute("data-tooltip-click-action") as UserProfileTooltipAction,
      unconstrainWidth: element.getAttribute("data-tooltip-unconstrain-width") === "true",
      sitesViewState,
    }
  },
)

export const c = UserProfileTooltipAction
export const M = UserProfileTooltip
