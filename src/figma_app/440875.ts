import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fullscreenAlias } from "../905/37051";
import { useDelayedCallback } from "../905/116724";
import { VisualBellActions } from "../905/302958";
import { getI18nString } from "../905/303541";
import { createOptimistThunk } from "../905/350402";
import { useIsFullscreenWithDevVariables } from "../905/383776";
import { useCanShowJoinConfirmation, useIsVotingSessionJoined } from "../905/486443";
import { Dv, Fj, jI } from "../905/763714";
import { useAtomWithSubscription } from "../figma_app/27355";
import { useDevModeFocusId, useIsFullscreenDevModeComponentBrowser, useIsFullscreenOverview } from "../figma_app/88239";
import { updateMultiplayerStateThunk } from "../figma_app/91703";
import { isNotNullish, isNullish } from "../figma_app/95419";
import { getSelectedViewType } from "../figma_app/386952";
import { throwTypeError } from "../figma_app/465776";
import { useIsSelectedFigmakeFullscreen } from "../figma_app/552876";
import { getViewerInstance } from "../figma_app/632319";
import { clearSelection } from "../figma_app/741237";
import { Multiplayer } from "../figma_app/763686";
import { getIsMobile, isInFigmaMobile, isIpadDevice } from "../figma_app/778880";
import { isInteractionPathCheck } from "../figma_app/897289";
import { useLatestRef } from "../figma_app/922077";
enum AutoFollowType {
  INITIAL = "initial",
  NEXT = "next",
}
// Thunk for handling presentation stop events with user-specific messages
const handlePresentationStoppedThunk = createOptimistThunk(({
  dispatch,
  getState
}, {
  presenterSessionID
}) => {
  const state = getState().multiplayer;
  const presenterUser = state.allUsers.find(user => user.sessionID === presenterSessionID);
  const presenterName = presenterUser?.name ?? "";
  const message = presenterUser ? getI18nString("collaboration.spotlight.visual_bell.user_left_the_spotlight", {
    userName: presenterName
  }) : getI18nString("collaboration.spotlight.visual_bell.the_presenter_left_the_spotlight");
  dispatch(VisualBellActions.enqueue({
    message,
    type: "presentation_stopped_alert"
  }));
});

// Thunk for clearing presentation stop alerts
const clearPresentationStoppedAlertThunk = createOptimistThunk(({
  dispatch
}) => {
  dispatch(VisualBellActions.dequeue({
    matchType: "presentation_stopped_alert"
  }));
});

// Helper function to determine if a user change should trigger observation
function shouldObserveUserChange(previousPresenterRef: React.MutableRefObject<string | null>, currentPresenter: string | null, observingSession: string | number | null, currentSession: number | string | null): boolean {
  const hasPresenterChanged = isNotNullish(currentPresenter) && previousPresenterRef.current !== currentPresenter;
  const isObservingPresenter = observingSession === currentPresenter;
  const isCurrentUserPresenter = currentSession === currentPresenter;
  return hasPresenterChanged && !isObservingPresenter && !isCurrentUserPresenter;
}

// Hook to get the appropriate observe function based on view type
function useObserveFunction() {
  const viewType = getSelectedViewType();
  const dispatch = useDispatch<AppDispatch>();
  const multiplayerState = useSelector<AppState, AppState['multiplayer']>(state => state.multiplayer);
  const updateObservingSession = useCallback((sessionID: number) => {
    dispatch(updateMultiplayerStateThunk({
      ...multiplayerState,
      observingSessionID: sessionID
    }));
  }, [dispatch, multiplayerState]);
  const observeUser = useCallback((sessionID: number) => {
    Multiplayer.observeUser(sessionID);
  }, []);
  return viewType === "prototype" ? updateObservingSession : observeUser;
}

// Main hook for handling auto-follow functionality
export function useAutoFollowPresenter(multiplayerState: AppState['multiplayer']) {
  const {
    observingSessionID,
    presenterSessionID,
    sessionID
  } = multiplayerState;
  const dispatch = useDispatch<AppDispatch>();
  const viewType = getSelectedViewType();
  const isDevMode = useAtomWithSubscription(Dv);
  const [autoFollowType, setAutoFollowType] = useState("initial");
  const previousPresenterRef = useLatestRef(presenterSessionID);
  const isObservingPresenter = observingSessionID === presenterSessionID;
  const isCurrentUserPresenter = sessionID === presenterSessionID || isDevMode;
  const shouldTriggerObservation = shouldObserveUserChange(previousPresenterRef, presenterSessionID, observingSessionID, sessionID);
  const interactionPathDelay = useAtomWithSubscription(Fj);
  const autoFollowDelay = isInteractionPathCheck() ? 0 : interactionPathDelay;
  const presentationStartDelay = useAtomWithSubscription(jI);
  const [pendingPresenterSession, setPendingPresenterSession] = useState<number | null>(null);

  // Clear pending presenter session after timeout
  useEffect(() => {
    let timeoutId: NodeJS.Timeout | number | null = null;
    if (pendingPresenterSession != null) {
      timeoutId = setTimeout(() => {
        setPendingPresenterSession(null);
      }, 1000);
    }
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [pendingPresenterSession]);
  const observeFunction = useObserveFunction();

  // Observe the current presenter
  const observeCurrentPresenter = useCallback(() => {
    if (isNotNullish(presenterSessionID)) {
      if (viewType !== "prototype") {
        clearSelection();
      }
      observeFunction(presenterSessionID);
    }
  }, [presenterSessionID, observeFunction, viewType]);

  // Start auto-follow process
  const startAutoFollow = useCallback(() => {
    observeCurrentPresenter();
    if (presenterSessionID) {
      setPendingPresenterSession(presenterSessionID);
    }
  }, [presenterSessionID, observeCurrentPresenter]);

  // Clear pending session if it matches current observation
  if (pendingPresenterSession === observingSessionID) {
    setPendingPresenterSession(null);
  }
  const {
    isActive: isAutoFollowActive,
    start: startAutoFollowTimer,
    cancel: cancelAutoFollow,
    complete: completeAutoFollow
  } = useDelayedCallback(startAutoFollow);

  // Callback to cancel auto-follow
  const cancelAutoFollowCallback = useCallback(() => {
    cancelAutoFollow();
    setPendingPresenterSession(null);
  }, [cancelAutoFollow]);

  // Determine auto-follow states
  const shouldStartPresentationFollow = shouldTriggerObservation && observingSessionID === previousPresenterRef.current;
  const shouldResetPresentationFollow = shouldTriggerObservation && !shouldStartPresentationFollow;
  const shouldHandlePresenterLeft = isNullish(presenterSessionID) && isNotNullish(previousPresenterRef.current) && observingSessionID === previousPresenterRef.current;

  // Cancel auto-follow if user becomes presenter
  if (isAutoFollowActive && isCurrentUserPresenter) {
    cancelAutoFollowCallback();
  }

  // Effects for handling different auto-follow scenarios
  useEffect(() => {
    if (shouldStartPresentationFollow) {
      dispatch(clearPresentationStoppedAlertThunk());
      startAutoFollowTimer(presentationStartDelay);
      setAutoFollowType("next");
    }
  }, [presentationStartDelay, dispatch, shouldStartPresentationFollow, startAutoFollowTimer]);
  useEffect(() => {
    if (shouldResetPresentationFollow) {
      dispatch(clearPresentationStoppedAlertThunk());
      startAutoFollowTimer(autoFollowDelay);
      setAutoFollowType("initial");
    }
  }, [autoFollowDelay, dispatch, shouldResetPresentationFollow, startAutoFollowTimer]);
  useEffect(() => {
    if (shouldHandlePresenterLeft) {
      observeFunction(-1);
      cancelAutoFollowCallback();
      dispatch(handlePresentationStoppedThunk({
        presenterSessionID: previousPresenterRef.current!
      }));
    }
  }, [shouldHandlePresenterLeft, observeFunction, cancelAutoFollowCallback, dispatch, previousPresenterRef]);
  useEffect(() => {
    if (isAutoFollowActive && isObservingPresenter) {
      cancelAutoFollowCallback();
    }
  }, [isObservingPresenter, cancelAutoFollowCallback, isAutoFollowActive]);

  // Determine current auto-follow delay
  const autoFollowDelayMs = (() => {
    switch (autoFollowType) {
      case "next":
        return presentationStartDelay;
      case "initial":
        return autoFollowDelay;
      default:
        throwTypeError(autoFollowType);
    }
  })();
  return {
    isAutoFollowPending: !isCurrentUserPresenter && (shouldResetPresentationFollow || shouldStartPresentationFollow || isAutoFollowActive || pendingPresenterSession != null),
    cancelAutoFollowCallback,
    completeAutoFollowCallback: completeAutoFollow,
    observeCurrentPresenter,
    autoFollowType,
    autoFollowDelayMs
  };
}

// Hook to get current session ID
export function useCurrentSessionID() {
  return useSelector<AppState, number>(state => state.multiplayer.sessionID);
}

// Hook to get observing session ID
export function useObservingSessionID() {
  return useSelector<AppState, number>(state => state.multiplayer.observingSessionID);
}

// Hook to get current user info
export function useCurrentUser() {
  const multiplayerState = useSelector<AppState, AppState['multiplayer']>(state => state.multiplayer);
  return multiplayerState.allUsers.find(user => user.sessionID === multiplayerState.sessionID) ?? null;
}

// Hook to get observing user info
export function useObservingUser() {
  const multiplayerState = useSelector<AppState, AppState['multiplayer']>(state => state.multiplayer);
  return multiplayerState.allUsers.find(user => user.sessionID === multiplayerState.observingSessionID) ?? null;
}

// Hook to get presenter user info
export function usePresenterUser() {
  const multiplayerState = useSelector<AppState, AppState['multiplayer']>(state => state.multiplayer);
  return multiplayerState.allUsers.find(user => user.sessionID === multiplayerState.presenterSessionID) ?? null;
}

// Hook to handle presentation stopping based on various conditions
export function usePresentationStopHandler({
  multiplayer: multiplayerState
}: {
  multiplayer: {
    presenterSessionID: string | null;
    sessionID: string;
  };
}) {
  const canPresent = (() => {
    const isFigmakeFullscreen = useIsSelectedFigmakeFullscreen();
    const isPresentationAllowed = useIsPresentationAllowed();
    const isDevToolsOpen = useIsVotingSessionJoined();
    const isDevModeFocus = useCanShowJoinConfirmation();
    const devFocusId = useDevModeFocusId();
    const isOverviewFullscreen = useIsFullscreenOverview();
    const isDevVariablesFullscreen = useIsFullscreenWithDevVariables();
    const isComponentBrowserFullscreen = useIsFullscreenDevModeComponentBrowser();
    return !!isPresentationAllowed && !isDevToolsOpen && !isDevModeFocus && !devFocusId && !isOverviewFullscreen && !isDevVariablesFullscreen && !isComponentBrowserFullscreen && !isFigmakeFullscreen;
  })();
  const isCurrentUserPresenter = multiplayerState.presenterSessionID === multiplayerState.sessionID;
  const viewType = getSelectedViewType();
  const stopPresenting = useCallback(() => {
    if (viewType === "prototype") {
      getViewerInstance()?.stopPresenting();
    } else {
      Multiplayer.stopPresenting();
    }
  }, [viewType]);
  useEffect(() => {
    if (!canPresent && isCurrentUserPresenter) {
      stopPresenting();
    }
  }, [canPresent, isCurrentUserPresenter, stopPresenting]);
}

// Hook to handle observation reset based on conditions
export function useObservationResetHandler({
  multiplayer: multiplayerState
}: {
  multiplayer: {
    observingSessionID: number | null;
  };
}) {
  const observeFunction = useObserveFunction();
  const shouldResetObservation = !useIsObservationAllowed();
  const hasActiveObservation = multiplayerState.observingSessionID !== -1;
  useEffect(() => {
    if (!shouldResetObservation && hasActiveObservation) {
      observeFunction(-1);
    }
  }, [shouldResetObservation, hasActiveObservation, observeFunction]);
}

// Hook to determine if presentation is allowed
export function useIsPresentationAllowed() {
  const isFigmakeFullscreen = useIsSelectedFigmakeFullscreen();
  const isMobileApp = getIsMobile() && isInFigmaMobile() && !isIpadDevice;
  const isExtensionFullscreen = fullscreenAlias?.getIsExtension();
  return !(isMobileApp || isExtensionFullscreen) && !isFigmakeFullscreen;
}

// Hook to determine if observation is allowed
export function useIsObservationAllowed() {
  const isFigmakeFullscreen = useIsSelectedFigmakeFullscreen();
  const isDevToolsOpen = useIsVotingSessionJoined();
  const isDevModeFocus = useCanShowJoinConfirmation();
  const devFocusId = useDevModeFocusId();
  const isOverviewFullscreen = useIsFullscreenOverview();
  return !!isDevToolsOpen || !!isDevModeFocus || !!devFocusId || !!isOverviewFullscreen || !!isFigmakeFullscreen;
}

// Hook to get the user nominating current user
export function useNominatingUser() {
  const multiplayerState = useSelector<AppState, AppState['multiplayer']>(state => state.multiplayer);
  const nominatingSessionID = multiplayerState.sessionsNominatingCurrentUser[0];
  return nominatingSessionID ? multiplayerState.allUsers.find(user => user.sessionID === nominatingSessionID) ?? null : null;
}

// Export aliases for backward compatibility
export const $0 = useObservingUser;
export const By = useIsObservationAllowed;
export const D_ = AutoFollowType;
export const HG = useIsPresentationAllowed;
export const KP = useCurrentSessionID;
export const Lt = clearPresentationStoppedAlertThunk;
export const Pi = useObservationResetHandler;
export const VA = usePresentationStopHandler;
export const Ww = useCurrentUser;
export const _E = useObservingSessionID;
export const c3 = handlePresentationStoppedThunk;
export const dR = usePresenterUser;
export const oW = useAutoFollowPresenter;
export const y = useNominatingUser;