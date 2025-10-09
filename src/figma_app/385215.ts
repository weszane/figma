import { useCallback } from "react"
import { useDispatch } from "react-redux"
import { VisualBellActions } from "../905/302958"
import { getI18nString } from "../905/303541"
import { trackEventAnalytics } from "../905/449184"
import { SpotlightEventType, useSpotlightCTATracking } from "../905/847283"
import { getViewerInstance } from "../figma_app/632319"
import { Multiplayer } from "../figma_app/763686"
import { isPrototypeView } from "../figma_app/976749"

// Define types for better type safety
interface User {
  sessionID: string;
  userID: string;
  name?: string;
}

interface SpotlightState {
  allUsers: User[];
  sessionID: string;
  deviceNameFilter?: string;
  presenterSessionID?: string;
  observingSessionID: string | number;
  sessionsNominatingCurrentUser: string[];
}

interface SpotlightInfo {
  isPrototypeViewer: boolean;
  presentingUserId?: string;
  presentingSessionId?: string;
  observingUserId?: string;
  observingSessionId?: string;
  currentUserId?: string;
  currentUserSessionId?: string;
}

/**
 * Extracts relevant spotlight information from the state.
 * Original function: p
 */
function extractSpotlightInfo(state: SpotlightState): SpotlightInfo {
  const {
    observingSessionID,
    presenterSessionID,
  } = state;
  const currentUser = state.allUsers.find(user => user.sessionID === state.sessionID);
  const presentingUser = presenterSessionID ? state.allUsers.find(user => user.sessionID === presenterSessionID) : null;
  const observingUser = observingSessionID ? state.allUsers.find(user => user.sessionID === observingSessionID) : null;
  return {
    isPrototypeViewer: state.deviceNameFilter === "prototype",
    presentingUserId: presentingUser?.userID,
    presentingSessionId: presentingUser?.sessionID,
    observingUserId: observingUser?.userID,
    observingSessionId: observingUser?.sessionID,
    currentUserId: currentUser?.userID,
    currentUserSessionId: currentUser?.sessionID,
  };
}

/**
 * Hook to start presenting.
 * Original function: $$_5
 */
export function startPresenting() {
  const trackCTA = useSpotlightCTATracking();
  const isPrototype = isPrototypeView();
  return useCallback(() => {
    trackCTA(SpotlightEventType.START);
    if (isPrototype) {
      getViewerInstance()?.startPresenting();
    } else {
      Multiplayer.startPresenting();
    }
  }, [isPrototype, trackCTA]);
}

/**
 * Hook to stop presenting.
 * Original function: $$h1
 */
export function stopPresenting() {
  const isPrototype = isPrototypeView();
  return useCallback(() => {
    if (isPrototype) {
      getViewerInstance()?.stopPresenting();
    } else {
      Multiplayer.stopPresenting();
    }
  }, [isPrototype]);
}

/**
 * Hook to nominate a presenter.
 * Original function: $$m9
 */
export function nominatePresenter() {
  const isPrototype = isPrototypeView();
  const dispatch = useDispatch<AppDispatch>();
  return useCallback((sessionId: string, state: SpotlightState) => {
    if (isPrototype) {
      performNomination(sessionId, state, getViewerInstance(), dispatch);
    } else {
      performNomination(sessionId, state, null, dispatch);
    }
  }, [isPrototype, dispatch]);
}

/**
 * Hook to cancel nomination.
 * Original function: $$g8
 */
export function cancelNomination() {
  const isPrototype = isPrototypeView();
  const dispatch = useDispatch<AppDispatch>();
  return useCallback((sessionId: string, state: SpotlightState) => {
    if (isPrototype) {
      performCancelNomination(sessionId, state, getViewerInstance(), dispatch);
    } else {
      performCancelNomination(sessionId, state, null, dispatch);
    }
  }, [isPrototype, dispatch]);
}

/**
 * Hook to stop following.
 * Original function: $$f0
 */
export function stopFollowing() {
  const isPrototype = isPrototypeView();
  const dispatch = useDispatch<AppDispatch>();
  return useCallback((state: SpotlightState) => {
    if (isPrototype) {
      performStopFollowing(state, getViewerInstance());
    } else {
      performStopFollowing(state, null);
    }
    dispatch(VisualBellActions.enqueue({
      message: getI18nString("collaboration.spotlight.bell.stopped_following"),
      role: "status",
    }));
  }, [isPrototype, dispatch]);
}

/**
 * Hook to accept nomination.
 * Original function: $$E10
 */
export function acceptNomination() {
  const isPrototype = isPrototypeView();
  return useCallback((state: SpotlightState) => {
    if (isPrototype) {
      performAcceptNomination(state, getViewerInstance());
    } else {
      performAcceptNomination(state, null);
    }
  }, [isPrototype]);
}

/**
 * Performs the nomination action.
 * Original function: y
 */
function performNomination(sessionId: string, state: SpotlightState, viewerInstance: any, dispatch: any) {
  if (viewerInstance) {
    viewerInstance.nominatePresenter(sessionId);
  } else {
    Multiplayer.nominatePresenter(sessionId);
  }
  const nominatedUser = state.allUsers.find(user => user.sessionID === sessionId);
  if (nominatedUser?.name) {
    const message = getI18nString("collaboration.spotlight.visual_bell.nominated_user_to_spotlight", {
      userName: nominatedUser.name,
    });
    dispatch(VisualBellActions.enqueue({
      message,
      type: "nominated_presenter",
    }));
  }
  trackEventAnalytics("Spotlight Nomination Requested", {
    nominatedSessionID: sessionId,
    nominatedUserID: nominatedUser?.userID,
    ...extractSpotlightInfo(state),
  });
}

/**
 * Cancels presenter nomination.
 * Original function: $$b6
 */
export function cancelPresenterNomination(sessionId: string, viewerInstance: any) {
  if (viewerInstance) {
    viewerInstance.cancelPresenterNomination(sessionId);
  } else {
    Multiplayer.cancelPresenterNomination(sessionId);
  }
}

/**
 * Performs the cancel nomination action.
 * Original function: T
 */
function performCancelNomination(sessionId: string, state: SpotlightState, viewerInstance: any, dispatch: any) {
  cancelPresenterNomination(sessionId, viewerInstance);
  const nominatedUser = state.allUsers.find(user => user.sessionID === sessionId);
  const message = getI18nString("collaboration.spotlight.visual_bell.stopped_nominating_user_to_spotlight");
  dispatch(VisualBellActions.enqueue({
    message,
    type: "nominated_presenter",
  }));
  trackEventAnalytics("Spotlight Nomination Canceled", {
    cancelledNomineeSessionId: nominatedUser?.sessionID,
    cancelledNomineeUserId: nominatedUser?.userID,
    cancelledByNominee: sessionId === state.sessionID,
    ...extractSpotlightInfo(state),
  });
}

/**
 * Performs the accept nomination action.
 * Original function: I
 */
function performAcceptNomination(state: SpotlightState, viewerInstance: any) {
  if (viewerInstance) {
    viewerInstance.startPresenting();
  } else {
    Multiplayer.startPresenting();
  }
  const nominatorSessionId = state.sessionsNominatingCurrentUser[0];
  const nominatorUser = state.allUsers.find(user => user.sessionID === nominatorSessionId);
  trackEventAnalytics("Spotlight Nomination Accepted", {
    nominatorSessionId: nominatorUser?.sessionID,
    nominatorUserId: nominatorUser?.userID,
    ...extractSpotlightInfo(state),
  });
}

/**
 * Tracks an action with timing.
 * Original function: $$S2
 */
export function trackActionWithTiming(action: () => void, state: SpotlightState, eventName: string, startTime?: number) {
  const start = performance.now();
  action();
  if (startTime) {
    trackEventAnalytics(eventName, {
      sessionId: state.sessionID,
      timeToActionSeconds: Math.trunc(start - startTime) / 1000,
      ...extractSpotlightInfo(state),
    });
  }
}

/**
 * Performs the stop following action.
 * Original function: v
 */
function performStopFollowing(state: SpotlightState, viewerInstance: any) {
  if (viewerInstance) {
    getViewerInstance()?.setObservingSessionID(-1);
  } else {
    Multiplayer.observeUser(-1);
  }
  trackEventAnalytics("Spotlight Stop Following", {
    ...extractSpotlightInfo(state),
  });
}

/**
 * Checks if the current user is presenting.
 * Original function: $$A7
 */
export function isCurrentUserPresenting(state: SpotlightState): boolean {
  return state.presenterSessionID === state.sessionID;
}

/**
 * Checks if the user is observing.
 * Original function: $$x3
 */
export function isObserving(state: SpotlightState): boolean {
  return state.observingSessionID !== -1;
}

/**
 * Checks if there are nominations for the current user.
 * Original function: $$N4
 */
export function hasNominations(state: SpotlightState): boolean {
  return state.sessionsNominatingCurrentUser.length > 0;
}

// Updated exports with meaningful names
export const $ = stopFollowing;
export const B4 = stopPresenting;
export const KI = trackActionWithTiming;
export const L3 = isObserving;
export const NB = hasNominations;
export const Vi = startPresenting;
export const j$ = cancelPresenterNomination;
export const jA = isCurrentUserPresenting;
export const oJ = cancelNomination;
export const tu = nominatePresenter;
export const y7 = acceptNomination;
