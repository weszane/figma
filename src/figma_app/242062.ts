import type { AllUser } from '../../types/app';
import type { ViewportInfo } from '../figma_app/62612';
import type { ChatState, CursorCollisionPair } from './cursor-system';
import classNames from 'classnames';
import { AnimatePresence, motion } from 'motion/react';
import React, { memo, useCallback, useContext, useEffect, useLayoutEffect, useMemo, useReducer, useRef, useState } from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { Fragment, jsx, jsxs } from 'react/jsx-runtime';
import { throttle } from 'throttle-debounce';
import { useClickOutside } from '../905/1768';
import { selectWithShallowEqual } from '../905/103090';
import { fullscreenHandler } from '../905/258517';
import { useTheme } from '../905/289770';
import { getI18nString } from '../905/303541';
import { debugState } from '../905/407919';
import { isWebAnimationsApiSupported } from '../905/437800';
import { useIsVotingSessionJoined } from '../905/486443';
import { De, JR, p4 } from '../905/496627';
import { distributionAnalytics, globalPerfTimer } from '../905/542194';
import { getFeatureFlags } from '../905/601108';
import { ErrorBoundaryCrash, errorBoundaryFallbackTypes } from '../905/751457';
import { o as _$$o } from '../905/755806';
import { getCanvasViewState } from '../905/758967';
import { getElementByDataTarget, isNodeContainedIn } from '../905/797478';
import { multiplayerSessionManager } from '../905/977824';
import { atom, useAtomValueAndSetter, useAtomWithSubscription } from '../figma_app/27355';
import { getViewportInfo, useLatestViewportRef, viewportToScreen } from '../figma_app/62612';
import { getObservableOrFallback, getObservableValue } from '../figma_app/84367';
import { H as _$$H } from '../figma_app/147959';
import { useDeepEqualSceneValue } from '../figma_app/167249';
import { buildStaticUrl, buildUploadUrl } from '../figma_app/169182';
import { allNodeStates, isDeleting } from '../figma_app/178273';
import { getDarkerShade, getTextColorForBackground, textOnDarkCanvas, textOnLightCanvas } from '../figma_app/191804';
import { CursorKinematics, hasItem } from '../figma_app/210457';
import { viewportNavigatorContext } from '../figma_app/298911';
import { stopChattingThunk, stopReactingAction } from '../figma_app/308685';
import { getI18nState } from '../figma_app/363242';
import { ViewportContainer } from '../figma_app/372802';
import { setupCursorChatDisabledCheck } from '../figma_app/403368';
import { useDocumentEvent } from '../figma_app/412189';
import { useCurrentSessionID, useObservingSessionID } from '../figma_app/440875';
import { debug } from '../figma_app/465776';
import { usePrefersReducedMotion } from '../figma_app/469468';
import { CHAT_SHORTCUT_ELEMENT_ID } from '../figma_app/580087';
import { chatStateTracker } from '../figma_app/682945';
import { useAppModelProperty } from '../figma_app/722362';
import { uiBlueSteelColor2 } from '../figma_app/728075';
import { EditorPreferencesApi } from '../figma_app/740163';
import { shouldHandleMultiTouchOrPressure } from '../figma_app/753501';
import { AppStateTsApi, DesignGraphElements, Fullscreen, LayoutTabType, Multiplayer, PaintTools, SnapshotLevel } from '../figma_app/763686';
import { BrowserInfo } from '../figma_app/778880';
import { memoizeByArgs } from '../figma_app/815945';
import { useIsMouseInViewport } from '../figma_app/824081';
import { desktopAPIInstance } from '../figma_app/876459';
import { trackFileEventWithUser } from '../figma_app/901889';
import { p as _$$p3, Bj, bu, DE, Dy, hD, iU, iY, Lo, Lw, or, PT, Rt, S8, u0, vD, VW, W7, z8, zr } from '../figma_app/938674';
import { useMousePositionTracker } from '../figma_app/943271';
import { getCurrentFileType } from '../figma_app/976749';
import { CursorTracker, CursorType } from '../figma_app/991227';
import { AnimatedCursorEntity, BubblePopEntity, CollisionDetector, EmoteSystem, ParticleSystem, SparkleEntity, StarParticle, TimedEventEntity, WiggleDetector } from './cursor-system';

let n = {
  GLARE_ANIMATION: '',
  GRAY_BACKGROUND: '',
  NONE: '',
  ORANGE_GRADIENT: '',
  PINK_GRADIENT: '',
  animateBg: '',
  glareAnimation: ''
};
export enum BackgroundEffectType {
  PINK_GRADIENT = 'PINK_GRADIENT',
  ORANGE_GRADIENT = 'ORANGE_GRADIENT',
  GRAY_BACKGROUND = 'GRAY_BACKGROUND',
  GLARE_ANIMATION = 'GLARE_ANIMATION',
  NONE = 'NONE',
}
const emoteSystem = new EmoteSystem();
let backgroundEffectKeywords = emoteSystem.backgroundEffectKeywords;
export enum CursorAnimationType {
  Standard = 0,
}
// Original variable name: q
// Atom for storing a boolean value, likely related to cursor wiggle state.
let q = atom<boolean>(false);

// Original function name: ei
/**
 * Creates and returns an object containing various cursor-related systems and detectors.
 * This function initializes the core components for cursor interactions, including wiggle detection,
 * particle systems, collision detection, and kinematics.
 * @returns An object with cursorWiggleDetector, cursorEntitySystem, cursorCollisionDetector, and cursorKinematics.
 */
function createCursorSystems(): {
  cursorWiggleDetector: WiggleDetector;
  cursorEntitySystem: ParticleSystem;
  cursorCollisionDetector: CollisionDetector;
  cursorKinematics: CursorKinematics;
} {
  return {
    cursorWiggleDetector: new WiggleDetector(),
    cursorEntitySystem: new ParticleSystem(),
    cursorCollisionDetector: new CollisionDetector(),
    cursorKinematics: new CursorKinematics()
  };
}

// Original variable name: ea
// Memoized function to reduce an array of users to an object keyed by sessionID for efficient lookups.
let createUserMap = memoizeByArgs((users: AllUser[]) => {
  return users.reduce((map, user) => {
    map[user.sessionID] = user;
    return map;
  }, {} as Record<string, AllUser>);
});

// Original function name: calculateCursorPosAndRotation
/**
 * Calculates the position and rotation for a cursor based on its canvas position, kinematics, session ID, zoom scale, and a boolean flag.
 * This function determines the offset and angle for cursor rendering, accounting for hand orientation and zoom.
 * @param canvasPosition - The position of the cursor on the canvas.
 * @param kinematics - The CursorKinematics instance for hand orientation data.
 * @param sessionId - The session ID of the cursor.
 * @param zoomScale - The current zoom scale of the viewport.
 * @param isPrimary - A boolean flag indicating if this is the primary cursor.
 * @returns An object containing the calculated position and rotation.
 */
function calculateCursorPosAndRotation(canvasPosition: {
  x: number;
  y: number;
}, kinematics: CursorKinematics, sessionId: string, zoomScale: number, isPrimary: boolean): {
  position: {
    x: number;
    y: number;
  };
  rotation: number;
} {
  const rotation = (hasItem(kinematics.getHandsOnRight(), sessionId) ? 1 : -1) * (Math.PI / 4);
  const offset = 32 / zoomScale;
  const position = {
    x: canvasPosition.x + offset * Math.sin(rotation),
    y: canvasPosition.y - offset * Math.cos(rotation)
  };
  if (!isPrimary) {
    position.x += 16 / zoomScale;
    position.y += 16 / zoomScale;
  }
  return {
    position,
    rotation
  };
}
function isCursorValidForInteraction(cursor, t, currentPageId, currentSessionId, observingSessionId) {
  return !(cursor.deviceName !== 'editor' || t?.mouse?.canvasSpacePosition == null || isNaN(t?.mouse?.canvasSpacePosition.x) || t.mouse.pageId !== currentPageId || (t.lastMouseMoveMs === -1 || window.performance.now() - t.lastMouseMoveMs > 6e4) && currentSessionId !== cursor.sessionID) && cursor.sessionID !== observingSessionId;
}
// Original function name: ed
/**
 * Determines if high-fiving is supported based on the current file type and voting session status.
 * High-fiving is supported only in whiteboard mode and when not in a voting session.
 * @returns {boolean} True if high-fiving is supported, false otherwise.
 */
function isHighFivingSupported(): boolean {
  const fileType = getCurrentFileType();
  const isVoting = useIsVotingSessionJoined();
  return fileType === 'whiteboard' && !isVoting;
}

// Original function name: e_
/**
 * Renders an animated selection box for AI interactions using motion.div.
 * Calculates the scaled dimensions and position based on viewport zoom and bounding box.
 * @param viewportInfo - The current viewport information including zoom scale.
 * @param bb - The bounding box with width, height, x, and y coordinates.
 * @returns A JSX element representing the animated selection box.
 */
function AiSelectionBox({
  viewportInfo,
  bb
}: {
  viewportInfo: {
    zoomScale: number;
  };
  bb: {
    w: number;
    h: number;
    x: number;
    y: number;
  };
}): JSX.Element {
  const {
    zoomScale
  } = viewportInfo;
  const scaledWidth = bb.w * zoomScale;
  const scaledHeight = bb.h * zoomScale;
  const offsetX = (zoomScale - 1) * bb.x;
  const offsetY = (zoomScale - 1) * bb.y;
  const style = {
    transform: `translate(${bb.x + offsetX}px, ${bb.y + offsetY}px)`,
    width: `${scaledWidth}px`,
    height: `${scaledHeight}px`
  };
  return jsx(motion.div, {
    className: 'ai_animations--aiSelectionBox--vHELC',
    style,
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1
    },
    exit: {
      opacity: 0
    },
    transition: {
      duration: 0.1
    }
  });
}

// Original function name: eh
/**
 * Component that manages the presence of AI selection boxes for nodes being deleted.
 * Uses AnimatePresence to animate the entry and exit of selection boxes.
 * @param viewportInfo - The current viewport information.
 * @returns A JSX element containing animated selection boxes.
 */
function AiSelectionBoxes({
  viewportInfo
}: {
  viewportInfo: {
    zoomScale: number;
  };
}): JSX.Element {
  const nodeStates = useAtomWithSubscription(allNodeStates);
  const isDeletingNodes = useAtomWithSubscription(isDeleting);
  return jsx(AnimatePresence, {
    children: isDeletingNodes && nodeStates.map(nodeState => jsx(AiSelectionBox, {
      viewportInfo,
      bb: nodeState.boundingBox
    }, nodeState.guid))
  });
}
/**
 * Creates a rumble animation with randomized keyframes based on intensity.
 * Original function name: createRumbleKeyframes
 * @param intensity - The intensity level for the rumble effect, affecting the range of random movements.
 * @param element - The DOM element to apply the animation to.
 * @returns An Animation object for the rumble effect.
 */
function createRumbleKeyframes(intensity: number, element: HTMLElement): Animation {
  const maxX = 3 * intensity;
  const maxY = 3 * intensity;
  const maxRotation = 1.8 * intensity;
  const keyframes: Keyframe[] = [];
  for (let progress = 0; progress <= 100; progress += 2) {
    if (progress === 0 || progress === 100) {
      keyframes.push(createTransformKeyframe(0, 0, 0));
      continue;
    }
    const x = Math.floor(Math.random() * maxX) - maxX / 2;
    const y = Math.floor(Math.random() * maxY) - maxY / 2;
    const rotation = Math.floor(Math.random() * maxRotation) - maxRotation / 2;
    keyframes.push(createTransformKeyframe(x, y, rotation));
  }
  return new Animation(new KeyframeEffect(element, keyframes, {
    duration: 100,
    easing: 'ease-in-out',
    iterations: Infinity
  }), document.timeline);
}
function createTransformKeyframe(x: number, y: number, rotation: number) {
  return {
    transform: `translate(${x}px, ${y}px) rotate(${rotation}deg)`
  };
}
function areAnimationsRunning(animations: Animation[]) {
  return !!animations.length && animations.some(e => e.playState === 'running');
}
/**
 * ChatAnimationWrapper component handles animation effects for chat messages, specifically rumble animations triggered by exclamation marks.
 * Original function name: ChatAnimationWrapper
 * @param props - The props object containing content and children.
 * @param props.content - The chat message content string.
 * @param props.children - The child React elements to render.
 * @returns A JSX element wrapping the children with animation effects.
 */
function ChatAnimationWrapper({
  content,
  children
}: {
  content: string;
  children: React.ReactNode;
}): JSX.Element {
  // State for animation intensity based on trailing exclamation marks
  const [animationIntensity, setAnimationIntensity] = useState(0);
  // Ref for timeout ID to manage animation decay
  const timeoutRef = useRef<number>(0);
  // Ref for storing animation instances
  const animationsRef = useRef<Animation[]>([]);
  // Ref for the DOM element to apply animations
  const elementRef = useRef<HTMLDivElement>(null);
  // State for animation play states
  const [animationStates, setAnimationStates] = useState<string[]>([]);
  // Track event function
  const trackEvent = trackFileEventWithUser();

  // Memoized calculation of trailing exclamation marks count
  const exclamationCount = useMemo(() => {
    if (content.length === 0) return 0;
    const match = content.match(/!+$/);
    return match ? match[0].length : 0;
  }, [content]);

  // Callback to handle animation decay over time
  const decayAnimation = useCallback((delay: number) => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setAnimationIntensity(prev => {
        const newIntensity = Math.max(prev - 1, 0);
        if (newIntensity > 0) {
          decayAnimation(250);
        }
        return newIntensity;
      });
    }, delay);
  }, []);

  // Effect to initialize and update animation intensity
  useEffect(() => {
    setAnimationIntensity(exclamationCount);
    decayAnimation(1000);
  }, [exclamationCount, decayAnimation]);

  // Effect to manage rumble animations
  useEffect(() => {
    if (!elementRef.current) return;

    // Initialize animations if not already done and intensity > 1
    if (animationIntensity > 1 && animationsRef.current.length === 0) {
      animationsRef.current = [createRumbleKeyframes(1, elementRef.current), createRumbleKeyframes(1.5, elementRef.current), createRumbleKeyframes(2, elementRef.current), createRumbleKeyframes(2.5, elementRef.current), createRumbleKeyframes(3, elementRef.current)];
    }
    const wasRunning = areAnimationsRunning(animationsRef.current);
    if (animationIntensity > 1) {
      const activeIndex = Math.min(animationIntensity - 2, animationsRef.current.length - 1);
      animationsRef.current.forEach((anim, index) => {
        if (index === activeIndex) {
          anim.play();
        } else {
          anim.cancel();
        }
      });
    } else {
      animationsRef.current.forEach(anim => anim?.cancel());
    }
    const isRunning = areAnimationsRunning(animationsRef.current);
    if (!wasRunning && isRunning) {
      trackEvent('cursor_chat_rumble_triggered');
    }
    setAnimationStates(animationsRef.current.map(anim => anim?.playState || 'idle'));
  }, [animationIntensity, trackEvent]);
  return jsx('div', {
    'data-testid': 'chat-animation-wrapper',
    'data-test-animation-state': animationStates,
    'ref': elementRef,
    children
  });
}
let CHAT_ACTION_TYPES = {
  HANDLE_KEYDOWN: 'HANDLE_KEYDOWN',
  HANDLE_INPUT: 'HANDLE_INPUT',
  STOP_CHATTING: 'STOP_CHATTING',
  START_FADING_INACTIVE_CHAT: 'START_FADING_INACTIVE_CHAT',
  STOP_FADING_INACTIVE_CHAT: 'STOP_FADING_INACTIVE_CHAT',
  HANDLE_EMOTE_ANIMATION_END: 'HANDLE_EMOTE_ANIMATION_END'
} as const;
let initialChatState: ChatState = {
  currentUserInput: '',
  previousLine: '',
  fadingOutText: '',
  isWidthLocked: !1,
  isShowingEmptyNewline: !1,
  inputIsEmpty: !0,
  currentEmoteBackground: BackgroundEffectType.NONE,
  width: 0,
  isFigJam: !1,
  isFadingInactiveChat: !1,
  shouldClose: !1,
  hasTypedAnything: !1
};
let updateChatStateWidth = (text: ChatState) => {
  let t = document.createElement('canvas').getContext('2d');
  if (!t) return text;
  t.font = '14px Inter, sans-serif';
  let r = Math.max(t.measureText(text.currentUserInput).width, t.measureText(text.previousLine).width);
  return {
    ...text,
    width: r
  };
};

/**
 * Reducer function for managing chat state in the multiplayer cursor system.
 * Handles various actions to update the chat state based on user interactions.
 * @param state - The current chat state.
 * @param action - The action object containing type and optional payload.
 * @returns The updated chat state.
 */
function chatStateReducer(state: ChatState, action: {
  type: string;
  payload?: any;
}): ChatState {
  switch (action.type) {
    case CHAT_ACTION_TYPES.HANDLE_INPUT:
      return handleInputAction(state, action.payload);
    case CHAT_ACTION_TYPES.HANDLE_KEYDOWN:
      return handleKeydownAction(state, action.payload);
    case CHAT_ACTION_TYPES.HANDLE_EMOTE_ANIMATION_END:
      return handleEmoteAnimationEndAction(state);
    case CHAT_ACTION_TYPES.STOP_CHATTING:
      return handleStopChattingAction(state);
    case CHAT_ACTION_TYPES.START_FADING_INACTIVE_CHAT:
      return handleStartFadingInactiveChatAction(state);
    case CHAT_ACTION_TYPES.STOP_FADING_INACTIVE_CHAT:
      return handleStopFadingInactiveChatAction(state);
    default:
      return state;
  }
}

/**
 * Handles the HANDLE_INPUT action by updating the chat state based on user input.
 * Original logic from HANDLE_INPUT case.
 * @param state - The current chat state.
 * @param payload - The payload containing value and trackEvent.
 * @returns The updated chat state.
 */
function handleInputAction(state: ChatState, payload: {
  value: string;
  trackEvent: (event: string, data?: any) => void;
}): ChatState {
  const newState = {
    ...state
  };
  const {
    value
  } = payload;
  if (state.isShowingEmptyNewline) {
    newState.isShowingEmptyNewline = false;
  }
  if (value.length > newState.currentUserInput.length && newState.isFigJam) {
    const effect = emoteSystem.findBackgroundEffect(value);
    if (effect?.background) {
      newState.currentEmoteBackground = effect.background;
      payload.trackEvent('cursor_chat_background_effect_triggered', {
        keyword: effect.key
      });
    }
    emoteSystem.sendReactionEmotes(value, CursorAnimationType.Standard, payload.trackEvent);
  }
  newState.fadingOutText = newState.previousLine;
  newState.previousLine = '';
  newState.currentUserInput = value;
  if (!state.hasTypedAnything) {
    payload.trackEvent('cursor_chat_typed_something');
  }
  newState.hasTypedAnything = true;
  newState.inputIsEmpty = newState.currentUserInput.length === 0 && newState.previousLine.length === 0;
  return updateChatStateWidth(newState);
}

/**
 * Handles the HANDLE_KEYDOWN action by processing keyboard events.
 * Original logic from HANDLE_KEYDOWN case.
 * @param state - The current chat state.
 * @param event - The keyboard event.
 * @returns The updated chat state.
 */
function handleKeydownAction(state: ChatState, event: KeyboardEvent): ChatState {
  if (event.key === 'Enter') {
    if (!state.hasTypedAnything) {
      return state;
    }
    const newState = {
      ...state
    };
    newState.isShowingEmptyNewline = true;
    newState.inputIsEmpty = false;
    newState.isWidthLocked = true;
    newState.fadingOutText = newState.previousLine;
    newState.previousLine = newState.currentUserInput;
    newState.currentUserInput = '';
    return updateChatStateWidth(newState);
  }
  if (event.key === 'Escape') {
    return {
      ...state,
      shouldClose: true
    };
  }
  return state;
}

/**
 * Handles the HANDLE_EMOTE_ANIMATION_END action by resetting emote-related state.
 * Original logic from HANDLE_EMOTE_ANIMATION_END case.
 * @param state - The current chat state.
 * @returns The updated chat state.
 */
function handleEmoteAnimationEndAction(state: ChatState): ChatState {
  const newState = {
    ...state
  };
  newState.isWidthLocked = false;
  newState.currentEmoteBackground = BackgroundEffectType.NONE;
  return updateChatStateWidth(newState);
}

/**
 * Handles the STOP_CHATTING action by setting shouldClose to true.
 * Original logic from STOP_CHATTING case.
 * @param state - The current chat state.
 * @returns The updated chat state.
 */
function handleStopChattingAction(state: ChatState): ChatState {
  return {
    ...state,
    shouldClose: true
  };
}

/**
 * Handles the START_FADING_INACTIVE_CHAT action by setting isFadingInactiveChat to true.
 * Original logic from START_FADING_INACTIVE_CHAT case.
 * @param state - The current chat state.
 * @returns The updated chat state.
 */
function handleStartFadingInactiveChatAction(state: ChatState): ChatState {
  return {
    ...state,
    isFadingInactiveChat: true
  };
}

/**
 * Handles the STOP_FADING_INACTIVE_CHAT action by setting isFadingInactiveChat to false.
 * Original logic from STOP_FADING_INACTIVE_CHAT case.
 * @param state - The current chat state.
 * @returns The updated chat state.
 */
function handleStopFadingInactiveChatAction(state: ChatState): ChatState {
  return {
    ...state,
    isFadingInactiveChat: false
  };
}
// Original function name: eL
// Hook to manage the width of the chat input element based on input state and width.
function useChatInputWidth(inputRef: React.RefObject<HTMLInputElement>, isInputEmpty: boolean, width: number) {
  useEffect(() => {
    if (inputRef.current) {
      if (isInputEmpty) {
        inputRef.current.style.width = 'initial';
        return;
      }
      inputRef.current.style.width = `${width + 35}px`;
    }
  }, [width, inputRef, isInputEmpty]);
}

// Original function name: eP
// Hook to synchronize the input value and data attribute with refs.
function useChatInputValue(currentUserInput: string, previousLine: string, inputRef: React.RefObject<HTMLInputElement>, labelRef: React.RefObject<HTMLLabelElement>) {
  useEffect(() => {
    if (inputRef.current && labelRef.current) {
      inputRef.current.value = currentUserInput;
      labelRef.current.setAttribute('data-value', currentUserInput);
    }
  }, [currentUserInput, previousLine, inputRef, labelRef]);
}

// Original function name: eG
// Component for rendering the chat input interface, handling state, effects, and user interactions.
/**
 * ChatInput component handles the chat input UI for multiplayer cursors.
 * Manages input state, background effects, and communication with multiplayer session.
 * @param color - The color for styling the chat input.
 */
function ChatInput({
  color
}: {
  color: string;
}) {
  const isWhiteboard = getCurrentFileType() === 'whiteboard';
  const inputRef = useRef<HTMLInputElement>(null);
  const labelRef = useRef<HTMLLabelElement>(null);
  const dispatch = useDispatch<AppDispatch>();
  const trackEvent = trackFileEventWithUser();
  const [chatState, dispatchChatAction] = useReducer(chatStateReducer, {
    ...initialChatState,
    isFigJam: isWhiteboard
  });
  const {
    currentUserInput,
    previousLine,
    fadingOutText,
    isFadingInactiveChat,
    isShowingEmptyNewline,
    inputIsEmpty,
    currentEmoteBackground,
    width,
    shouldClose,
    hasTypedAnything
  } = chatState;

  // Use extracted hooks for width and value management
  useChatInputWidth(inputRef, inputIsEmpty, width);
  useChatInputValue(currentUserInput, previousLine, inputRef, labelRef);

  // Effect to send chat messages and handle closing
  useEffect(() => {
    Multiplayer?.sendChatMessage(currentUserInput, previousLine);
  }, [currentUserInput, previousLine]);
  const stopChatting = useCallback(() => {
    Multiplayer?.sendChatMessage('', '');
    dispatch(stopChattingThunk());
  }, [dispatch]);
  useEffect(() => {
    if (shouldClose) {
      stopChatting();
    }
  }, [shouldClose, stopChatting]);
  useEffect(() => () => stopChatting(), [stopChatting]);

  // Effect to handle fading inactive chat
  const stopChattingCallback = useCallback(() => {
    dispatch(stopChattingThunk());
    dispatchChatAction({
      type: CHAT_ACTION_TYPES.STOP_CHATTING
    });
  }, [dispatch]);
  useEffect(() => {
    dispatchChatAction({
      type: CHAT_ACTION_TYPES.STOP_FADING_INACTIVE_CHAT
    });
    const fadeTimeout = setTimeout(() => {
      dispatchChatAction({
        type: CHAT_ACTION_TYPES.START_FADING_INACTIVE_CHAT
      });
    }, 5000);
    const closeTimeout = setTimeout(() => {
      dispatchChatAction({
        type: CHAT_ACTION_TYPES.STOP_FADING_INACTIVE_CHAT
      });
      stopChattingCallback();
    }, 8000);
    return () => {
      clearTimeout(fadeTimeout);
      clearTimeout(closeTimeout);
    };
  }, [currentUserInput, dispatchChatAction, stopChattingCallback]);

  // Effect to handle keydown events
  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      dispatchChatAction({
        type: CHAT_ACTION_TYPES.HANDLE_KEYDOWN,
        payload: event
      });
    };
    const removeKeydown = () => {
      document.removeEventListener('keydown', handleKeydown);
    };
    const addKeydown = () => {
      document.addEventListener('keydown', handleKeydown);
    };
    if (inputRef.current) {
      window.focus();
      inputRef.current.focus({
        preventScroll: true
      });
    }
    document.addEventListener('keydown', handleKeydown);
    document.addEventListener('compositionstart', removeKeydown);
    document.addEventListener('compositionend', addKeydown);
    return () => {
      document.removeEventListener('keydown', handleKeydown);
      document.removeEventListener('compositionstart', removeKeydown);
      document.removeEventListener('compositionend', addKeydown);
    };
  }, [dispatchChatAction, inputRef]);

  // Callback for blur event
  const handleBlur = useCallback((event: React.FocusEvent<HTMLInputElement>) => {
    if (isNodeContainedIn(event.relatedTarget, getElementByDataTarget(CHAT_SHORTCUT_ELEMENT_ID))) {
      inputRef.current?.focus();
      return;
    }
    stopChattingCallback();
  }, [stopChattingCallback]);

  // Determine text color and placeholder styling
  const textColor = getTextColorForBackground(color);
  const placeholderClass = textColor === textOnDarkCanvas ? 'chat_input--lightPlaceholder--YGSmc' : 'chat_input--darkPlaceholder--BH5Qn';
  const placeholderText = getI18nString('whiteboard.cursor_chat.say_something');

  // Calculate placeholder size based on locale
  let placeholderSize: number;
  switch (getI18nState()?.getPrimaryLocale(false)) {
    case 'ja':
      placeholderSize = 18;
      break;
    case 'ko-kr':
      placeholderSize = 13;
      break;
    default:
      placeholderSize = placeholderText.length;
  }

  // Render the chat input UI
  const chatInputElement = jsx('div', {
    className: `chat_input--mask--P6RFl ${isFadingInactiveChat ? 'chat_input--fading--EBfYy' : ''}`,
    style: {
      boxShadow: `2px 4px 8px ${color}40`
    },
    children: jsxs('label', {
      ref: labelRef,
      className: 'chat_input--inputSizer--9JY00',
      children: [React.createElement('input', {
        ref: inputRef,
        className: `chat_input--input--2o9dx ${placeholderClass} ${isShowingEmptyNewline ? 'chat_input--expanded--1W44Y' : ''}`,
        dir: 'auto',
        maxLength: 50,
        onBlur: handleBlur,
        onChange: event => dispatchChatAction({
          type: CHAT_ACTION_TYPES.HANDLE_INPUT,
          payload: {
            value: event.currentTarget.value,
            trackEvent
          }
        }),
        placeholder: hasTypedAnything ? '' : placeholderText,
        size: hasTypedAnything ? 1 : placeholderSize,
        spellCheck: false,
        style: {
          color: textColor,
          backgroundColor: 'transparent'
        },
        type: 'text',
        value: currentUserInput
      }), jsx('div', {
        className: `chat_input--chatBackground--Mdxwm ${n[currentEmoteBackground]}`,
        style: {
          background: color,
          color: textColor
        },
        onAnimationEnd: () => dispatchChatAction({
          type: CHAT_ACTION_TYPES.HANDLE_EMOTE_ANIMATION_END
        })
      }), jsx('div', {
        style: {
          color: textColor
        },
        className: 'chat_input--previousChat--Y2u9G',
        children: previousLine
      }), jsx('div', {
        style: {
          color: textColor
        },
        className: 'chat_input--fadingOutLine--VF6ni chat_input--previousChat--Y2u9G chat_input--animated--ADHj-',
        children: fadingOutText
      }, fadingOutText)]
    })
  });
  return isWhiteboard ? jsx(ChatAnimationWrapper, {
    content: currentUserInput,
    children: chatInputElement
  }) : chatInputElement;
}
// Original function name: ez
/**
 * Renders the chat input indicator for the current user, adjusting for theme and visibility.
 * This component displays the chat input when the mouse is in the viewport, using enhanced contrast if enabled.
 * @param props - No props are passed; it uses hooks for state.
 * @returns A JSX element representing the chat input indicator.
 */
function renderChatInputIndicator() {
  const theme = useTheme();
  const isMouseInViewport = useIsMouseInViewport();
  const userColor = useSelector(({
    multiplayer: {
      allUsers: users
    }
  }) => users[0]?.color || uiBlueSteelColor2);
  const adjustedColor = getFeatureFlags().fpl_enhanced_contrast_toggle && theme.enhancedContrast ? getDarkerShade(userColor) : userColor;
  const containerClass = Rt;
  return jsx('div', {
    className: containerClass,
    style: {
      opacity: isMouseInViewport ? 1 : 0
    },
    children: jsx(ChatInput, {
      color: adjustedColor
    })
  });
}

// Original function name: eJ
/**
 * Builds the URL for a cursor image based on color, tool type, and version.
 * This function constructs static URLs for multiplayer cursors, differentiating between UI3 and v1 versions.
 * @param color - The hex color string for the cursor.
 * @param tool - The PaintTools enum value indicating the cursor type.
 * @param isUI3 - Boolean flag to use UI3 version or v1.
 * @returns The constructed URL string for the cursor image.
 */
function buildCursorImageUrl(color: string, tool: PaintTools, isUI3: boolean): string {
  const toolName = PaintTools[tool];
  return isUI3 ? buildStaticUrl(`multiplayer_cursors/ui3/${toolName}/${color.substring(1)}.png`) : buildStaticUrl(`multiplayer_cursors/v1/${toolName}/${color.substring(1)}.png`);
}

// Original function name: eZ
/**
 * Generates a fallback base64 data URL for a cursor image.
 * This function provides a base64 encoded PNG as a fallback when image loading fails.
 * @param color - The hex color string for the cursor.
 * @param isUI3 - Boolean flag to select the appropriate fallback data.
 * @returns The base64 data URL string for the fallback cursor image.
 */
function getFallbackCursorImage(color: string, isUI3: boolean): string {
  if (isUI3) {
    const fallbackData = JR[color.substring(1)] ?? JR[p4];
    return `data:image/png;base64, ${fallbackData}`;
  }
  const fallbackData = De[color.substring(1)] ?? De[p4];
  return `data:image/png;base64, ${fallbackData}`;
}

// Original function name: eQ
/**
 * Renders high-five entities on the viewport based on cursor entities.
 * This component maps over cursor entities and renders appropriate JSX elements for animations like stars, bubbles, sparkles, and animated cursors.
 * @param viewportInfo - The current viewport information including zoom and position.
 * @param cursorEntities - An array of cursor entity objects to render.
 * @returns A JSX Fragment containing the rendered entities.
 */
function renderHighFiveEntities({
  viewportInfo,
  cursorEntities
}: {
  viewportInfo: {
    zoomScale: number;
    x: number;
    y: number;
    width: number;
    height: number;
  };
  cursorEntities: Array<{
    id: string;
    type: string;
    position: {
      x: number;
      y: number;
    };
    rotation: number;
    scale: number;
    customData?: any;
  }>;
}): JSX.Element {
  const currentSessionId = useCurrentSessionID();
  const allUsers = useSelector(({
    multiplayer: {
      allUsers: users
    }
  }) => users);
  return jsx(Fragment, {
    children: cursorEntities.map(entity => {
      let renderedEntity: JSX.Element | null = null;
      switch (entity.type) {
        case 'StarParticle':
          renderedEntity = jsx(renderFallingStar, {
            emissionAngle: entity.customData.emissionAngle
          });
          break;
        case 'BubblePopEntity':
          renderedEntity = jsx(renderBubble, {});
          break;
        case 'SparkleEntity':
          renderedEntity = jsx(renderSparkle, {});
          break;
        case 'AnimatedCursorEntity':
          const sessionId = entity.customData.sessionId;
          const isCurrentUser = currentSessionId.toString() === sessionId;
          const color = isCurrentUser ? DEFAULT_CURSOR_COLOR : allUsers.find(user => user.sessionID.toString() === sessionId)?.color;
          renderedEntity = jsx(renderAnimatedCursor, {
            customData: entity.customData,
            color,
            isCurrentUser
          });
          break;
      }
      return renderedEntity && jsx(renderPositionedEntity, {
        canvasPosition: entity.position,
        viewportInfo,
        rotation: entity.rotation,
        scale: entity.scale,
        children: renderedEntity
      }, entity.id);
    })
  });
}

// Original function name: e0
/**
 * Renders the high-five cursor for the current user, handling animation states.
 * This component manages the visibility and animation of the user's own high-five cursor based on wiggle status.
 * @param cursorWiggleStatus - The current status of the cursor wiggle ('HIDDEN', 'SHOWN', 'ABOUT_TO_HIDE').
 * @param temporarilyHide - Boolean flag to temporarily hide the cursor.
 * @param isCursorHandOnRight - Boolean indicating if the cursor hand is on the right.
 * @returns A JSX element for the self high-five cursor.
 */
function renderSelfHighFiveCursor({
  cursorWiggleStatus,
  temporarilyHide,
  isCursorHandOnRight
}: {
  cursorWiggleStatus: string;
  temporarilyHide: boolean;
  isCursorHandOnRight: boolean;
}): JSX.Element {
  const [isHighFiveHandOut, setIsHighFiveHandOut] = useState(false);
  useEffect(() => {
    const animationFrame = requestAnimationFrame(() => {
      setIsHighFiveHandOut(cursorWiggleStatus !== 'HIDDEN');
    });
    return () => cancelAnimationFrame(animationFrame);
  }, [cursorWiggleStatus]);
  return jsx('div', {
    className: 'cursor_high_five--highFiveCursorForSelf--cVByQ',
    children: jsx(renderHighFiveHand, {
      color: DEFAULT_CURSOR_COLOR,
      isHighFiveHandOut,
      aboutToHide: cursorWiggleStatus === 'ABOUT_TO_HIDE',
      temporarilyHide,
      isCursorHandOnRight
    })
  });
}

// Original function name: e1
/**
 * Renders a positioned entity on the viewport, applying transformations.
 * This component converts canvas position to viewport position and applies rotation and scale.
 * @param canvasPosition - The position on the canvas.
 * @param viewportInfo - The viewport information for conversion.
 * @param children - The child JSX elements to render.
 * @param rotation - The rotation angle in radians (default 0).
 * @param scale - The scale factor (default 1).
 * @returns A JSX element with applied transformations.
 */
function renderPositionedEntity({
  canvasPosition,
  viewportInfo,
  children,
  rotation = 0,
  scale = 1
}: {
  canvasPosition: {
    x: number;
    y: number;
  };
  viewportInfo: ViewportInfo;
  children: React.ReactNode;
  rotation?: number;
  scale?: number;
}): JSX.Element {
  const viewportPosition = viewportToScreen(viewportInfo, canvasPosition || {
    x: 0,
    y: 0
  });
  return jsx(renderAbsoluteContainer, {
    viewportPosition,
    rotation,
    scale,
    children
  });
}

// Original function name: e2
/**
 * Renders an absolutely positioned container with transformations.
 * This component applies translate, rotate, and scale transformations for absolute positioning.
 * @param viewportPosition - The position on the viewport.
 * @param children - The child JSX elements.
 * @param rotation - The rotation angle in radians (default 0).
 * @param scale - The scale factor (default 1).
 * @returns A JSX element with absolute positioning and transformations.
 */
function renderAbsoluteContainer({
  viewportPosition,
  children,
  rotation = 0,
  scale = 1
}: {
  viewportPosition: {
    x: number;
    y: number;
  };
  children: React.ReactNode;
  rotation?: number;
  scale?: number;
}): JSX.Element {
  const style = {
    transform: `translate3D(${Math.floor(viewportPosition.x)}px, ${Math.floor(viewportPosition.y)}px, 0) translate(-50%, -50%) rotate(${rotation}rad) scale(${scale})`
  };
  return jsx('div', {
    className: 'cursor_high_five--highFiveAbsoluteContainer---G725',
    style,
    children
  });
}

// Original function name: e5
/**
 * Renders the high-five hand animation container.
 * This component handles the animation states for the high-five hand, including visibility and orientation.
 * @param color - The color for the hand.
 * @param isHighFiveHandOut - Boolean indicating if the hand is out.
 * @param temporarilyHide - Boolean to hide temporarily.
 * @param isCursorHandOnRight - Boolean for hand orientation.
 * @param aboutToHide - Boolean indicating if about to hide (default false).
 * @returns A JSX element for the high-five hand.
 */
function renderHighFiveHand({
  color,
  isHighFiveHandOut,
  temporarilyHide,
  isCursorHandOnRight,
  aboutToHide = false
}: {
  color: string;
  isHighFiveHandOut: boolean;
  temporarilyHide: boolean;
  isCursorHandOnRight: boolean;
  aboutToHide?: boolean;
}): JSX.Element {
  return jsx('div', {
    className: classNames({
      'cursor_high_five--highFiveAnimationContainer--jWFVT': true,
      'cursor_high_five--highFiveAnimHighFiveHandOut--6q5Bu': isHighFiveHandOut,
      'cursor_high_five--highFiveAnimHighFiveHandAboutToHide--tFRSO': aboutToHide
    }),
    children: jsx('div', {
      style: {
        opacity: temporarilyHide ? '0' : '1'
      },
      className: classNames({
        'cursor_high_five--highFiveWaveContainer--M1fBF': true,
        'cursor_high_five--cursorHandOnRight--wSZLI': isCursorHandOnRight
      }),
      children: jsx(renderHighFiveImage, {
        color
      })
    })
  });
}

// Original function name: e7 (from earlier in file, but referenced here)
/**
 * Renders a falling star for high-five animations.
 * @param emissionAngle - The angle for the star emission.
 * @returns A JSX element for the falling star.
 */
function renderFallingStar({
  emissionAngle
}: {
  emissionAngle: number;
}): JSX.Element {
  return jsx('div', {
    className: 'cursor_high_five--fallingStar--Kx2fO',
    children: jsx('div', {
      style: {
        transform: `rotate(${emissionAngle}rad)`
      },
      children: jsx('div', {
        className: 'cursor_high_five--shootingStar--tyk8Z',
        children: jsx(renderStarImage, {})
      })
    })
  });
}

// Original function name: tt
/**
 * Renders a bubble for high-five animations.
 * @returns A JSX element for the bubble.
 */
function renderBubble(): JSX.Element {
  return jsx('div', {
    className: 'cursor_high_five--bubble--9DVru'
  });
}

// Original function name: tr
/**
 * Renders a sparkle for high-five animations.
 * @returns A JSX element for the sparkle.
 */
function renderSparkle(): JSX.Element {
  return jsx('div', {
    className: 'cursor_high_five--sparkle--hCRWw',
    style: {
      backgroundImage: `url(${buildUploadUrl('d67d53e57e063de9a1d2ae0edfb4dc96b2db406f')})`
    }
  });
}

// Original function name: te
/**
 * Renders the star image for animations.
 * @returns A JSX element for the star image.
 */
function renderStarImage(): JSX.Element {
  const starUrl = buildUploadUrl('353e095c3f9c8488d9bb83dec3ce1d4c689f96db');
  return jsx('img', {
    className: 'cursor_high_five--starImage--GqFaX',
    src: starUrl,
    alt: 'star'
  });
}

// Original function name: e9
/**
 * Renders an animated cursor entity with custom animations.
 * @param customData - The custom data for the animation.
 * @param color - The color for the cursor.
 * @param isCurrentUser - Boolean indicating if it's the current user.
 * @returns A JSX element for the animated cursor.
 */
function renderAnimatedCursor({
  customData,
  color
}: {
  customData: any;
  color: string;
  isCurrentUser: boolean;
}): JSX.Element {
  const ref = useRef(null);
  useLayoutEffect(() => {
    if (!isWebAnimationsApiSupported()) return;
    let cancelId = -1;
    customData.animations.forEach((animation: any, index: number) => {
      const anim = ref.current?.animate(animation.keyframes, animation.timing);
      if (anim && index === customData.animations.length - 1) {
        anim.onfinish = () => {
          let elapsed = 0;
          const duration = 1000 / 60 * 12;
          const animate = (timestamp: number) => {
            const delta = elapsed === 0 ? 0 : timestamp - elapsed;
            elapsed = timestamp;
            elapsed += delta;
            if (ref.current && elapsed < duration) {
              const progress = Math.sin(2.1 * (elapsed / duration)) / 0.8632093666488737 * (1 - elapsed / duration) + elapsed / duration;
              ref.current.style.transform = customData.getReturnToCursorTransform(progress);
              cancelId = requestAnimationFrame(animate);
            }
          };
          cancelId = requestAnimationFrame(animate);
        };
      }
    });
    return () => {
      if (cancelId >= 0) cancelAnimationFrame(cancelId);
    };
  }, [customData, ref]);
  return jsx('div', {
    ref,
    children: jsx(renderHighFiveImage, {
      color
    })
  });
}

// Original function name: e6
/**
 * Renders the high-five hand image.
 * @param color - The color for the image.
 * @returns A JSX element for the hand image.
 */
function renderHighFiveImage({
  color
}: {
  color: string;
}): JSX.Element {
  return jsx(renderHighFiveHandImage, {
    color
  }, color);
}

// Original function name: e8
/**
 * Renders the high-five hand image with error fallback.
 * @param color - The color for the image.
 * @param key - The key for the JSX element.
 * @returns A JSX element for the hand image.
 */
function renderHighFiveHandImage({
  color
}: {
  color: string;
}, key?: string): JSX.Element {
  const [hasError, setHasError] = useState(false);
  if (!SUPPORTED_HIGH_FIVE_COLORS.has(color)) {
    debug(!!color, `Unknown color ${color} for Cursor High Fives`);
    return jsx(Fragment, {});
  }
  const imageUrl = buildCursorImageUrl(hasError ? '#ffffff' : color, PaintTools.HIGH_FIVE, false);
  return jsx('img', {
    className: 'cursor_high_five--handImage--mJVid',
    src: imageUrl,
    alt: '',
    onError: () => setHasError(true),
    key
  });
}
// Original variable name: DEFAULT_CURSOR_COLOR
// Constant for the default white color used in cursor rendering.
const DEFAULT_CURSOR_COLOR = '#FFFFFF';

// Original variable name: e4
// Set of supported colors for high-five cursor images.
const SUPPORTED_HIGH_FIVE_COLORS = new Set([DEFAULT_CURSOR_COLOR, '#0FA958', '#5551FF', '#9747FF', '#848484', '#D27C2C', '#F24E1E', '#FFC700', '#667799', '#9747FF', '#007BE5', '#FF24BD', '#F24822', '#FFCD29', '#14AE5C']);

// Original variable name: to
// CSS class name for the solid reaction indicator.
const REACTION_INDICATOR_SOLID_CLASS = 'reactions--indicatorSolid--wjW1q';

/**
 * Component that renders a floating emoji reaction at a specific viewport position.
 * Applies random animation durations and scales for visual variety.
 * Original function name: tl
 * @param viewportInfo - The current viewport information for position calculation.
 * @param reactionInfo - Information about the reaction, including canvas position and image ID.
 * @returns A JSX element representing the floating emoji.
 */
function FloatingEmoji({
  viewportInfo,
  reactionInfo
}: {
  viewportInfo: ViewportInfo;
  reactionInfo: {
    canvasSpacePosition: {
      x: number;
      y: number;
    };
    reactionId: string;
  };
}): JSX.Element {
  const screenPosition = viewportToScreen(viewportInfo, reactionInfo.canvasSpacePosition);
  const [floatDuration] = useState(0.5 * Math.random() + 2);
  const [driftDuration] = useState(0.4 * Math.random() + 0.3);
  const floatStyle = {
    animationDuration: `${floatDuration.toFixed(1)}s`
  };
  const driftStyle = {
    animationDuration: `${driftDuration.toFixed(1)}s`
  };
  let {
    x,
    y
  } = screenPosition;
  x -= 5;
  y -= 10;
  const [scale] = useState(1 * Math.random() + 0.5);
  const containerStyle = {
    willChange: 'transform',
    transform: `translate3D(${Math.floor(x)}px, ${Math.floor(y)}px, 0) scale(${scale})`
  };
  const [directionClass] = useState(Math.random() > 0.5 ? 'reactions--forward--8SV6f' : 'reactions--backward--ZCNdY');
  return jsx('div', {
    "className": 'reactions--translationContainer--G9Mik',
    "style": containerStyle,
    'data-testid': 'reaction',
    "children": jsx('div', {
      className: 'reactions--floatingEmojiContainer--olUKm',
      style: floatStyle,
      children: jsx('img', {
        src: reactionInfo.reactionId,
        className: `reactions--floatingEmoji--IKqDo ${directionClass}`,
        style: driftStyle,
        alt: ''
      })
    })
  });
}

/**
 * Component that renders floating emoji reactions for all active sessions on the current page.
 * Filters reactions based on session ID and multiplayer cursors enabled state.
 * Original function name: td
 * @param viewportInfo - The current viewport information.
 * @param multiplayerCursorsEnabled - Boolean indicating if multiplayer cursors are enabled.
 * @returns A JSX Fragment containing the rendered reactions.
 */
function ReactionsRenderer({
  viewportInfo,
  multiplayerCursorsEnabled
}: {
  viewportInfo: ViewportInfo;
  multiplayerCursorsEnabled: boolean;
}): JSX.Element {
  const reactionsBySession = multiplayerSessionManager.useReactionsBySessionId();
  const sessionIds = Object.keys(reactionsBySession);
  const currentSessionId = useCurrentSessionID();
  const currentPageGuid = useDeepEqualSceneValue(e => e.getCurrentPage()?.guid);
  return jsx(Fragment, {
    children: sessionIds.map(sessionId => {
      const sessionReactions = reactionsBySession[sessionId];
      const pageReactions = Object.keys(sessionReactions).filter(reactionId => sessionReactions[reactionId].pageId === currentPageGuid);
      return sessionId === `${currentSessionId}` || multiplayerCursorsEnabled ? jsx(Fragment, {
        children: pageReactions.map(reactionId => {
          const reactionInfo = sessionReactions[reactionId];
          return jsx(FloatingEmoji, {
            viewportInfo,
            reactionInfo
          }, reactionId);
        })
      }, sessionId) : null;
    })
  });
}

/**
 * Component that handles the display and interaction for emoji reactions during chatting or reacting.
 * Manages pointer events, intervals for continuous reactions, and dispatches actions to stop reacting.
 * Original function name: tc
 * @param multiplayerEmoji - The emoji state object containing type, image URL, and name.
 * @param viewportInfo - The current viewport information for positioning.
 * @returns A JSX element for the reaction indicator or null if not applicable.
 */
function EmojiReactionHandler({
  multiplayerEmoji,
  viewportInfo
}: {
  multiplayerEmoji: {
    type: string;
    imageUrl?: string;
    name?: string;
    isChatting?: boolean;
  };
  viewportInfo: ViewportInfo;
}): JSX.Element | null {
  const mousePosition = useMousePositionTracker({
    subscribeToUpdates_EXPENSIVE: true
  });
  const lastDownTimeRef = useRef(0);
  const [indicatorClass, setIndicatorClass] = useState(REACTION_INDICATOR_SOLID_CLASS);
  const [isMultiTouchActive, setIsMultiTouchActive] = useState(false);
  const dispatch = useDispatch();
  const stopReacting = useCallback(() => {
    dispatch(stopReactingAction());
  }, [dispatch]);
  useClickOutside(stopReacting, {
    closeOnEsc: true,
    ignore: 'allClicks'
  });
  const {
    reactImageUrl,
    reactName
  } = multiplayerEmoji.type === 'REACTING_OR_CHATTING' ? {
    reactImageUrl: multiplayerEmoji.imageUrl,
    reactName: multiplayerEmoji.name
  } : {
    reactImageUrl: null,
    reactName: null
  };
  useEffect(() => {
    setIndicatorClass(REACTION_INDICATOR_SOLID_CLASS);
    if (!reactImageUrl) return;
    let fadeTimeout: number | null = null;
    let reactionInterval: number | null = null;
    const sendReaction = () => {
      multiplayerSessionManager.sendReaction(reactImageUrl!);
      _$$H.trigger(SnapshotLevel.GENERIC);
      setIndicatorClass(REACTION_INDICATOR_SOLID_CLASS);
      if (fadeTimeout != null) clearTimeout(fadeTimeout);
      fadeTimeout = setTimeout(() => {
        setIndicatorClass('reactions--indicatorFading--ZTyOt reactions--indicatorSolid--wjW1q');
      }, 300);
    };
    const handleKeyUp = (event: KeyboardEvent) => {
      if (event.key === ' ' && reactionInterval !== null) clearInterval(reactionInterval);
    };
    const handleMouseDown = (event: MouseEvent) => {
      if (event.target instanceof Element && event.target.tagName === 'CANVAS') {
        lastDownTimeRef.current = Date.now();
        sendReaction();
        if (reactionInterval) clearInterval(reactionInterval);
        reactionInterval = setInterval(() => {
          sendReaction();
        }, 60);
        event.stopPropagation();
        event.preventDefault();
      }
    };
    const handleMouseUp = (event: MouseEvent) => {
      if (reactionInterval != null) {
        const intervalId = reactionInterval;
        if (lastDownTimeRef.current > 0) {
          const duration = Date.now() - lastDownTimeRef.current;
          fullscreenHandler.trackFromFullscreen('emoji_reaction', {
            duration,
            image: reactImageUrl,
            name: reactName
          }, false);
          lastDownTimeRef.current = 0;
        }
        setTimeout(() => {
          clearInterval(intervalId);
        }, 70);
      }
      event.stopPropagation();
      event.preventDefault();
    };
    const activePointers = new Set<number>();
    let maxPointers = 0;
    let syntheticDownEvent: PointerEvent | null = null;
    const handlePointerDown = (event: PointerEvent) => {
      if (event.pointerType === 'mouse') {
        handleMouseDown(event as any);
        return;
      }
      if (event.target instanceof Element && event.target.tagName !== 'CANVAS' || syntheticDownEvent && event.pointerId === syntheticDownEvent.pointerId) return;
      activePointers.add(event.pointerId);
      const pointerCount = activePointers.size;
      maxPointers = Math.max(pointerCount, maxPointers);
      if (maxPointers <= 1) {
        const moveEvent = new PointerEvent('pointermove', event);
        event.target?.dispatchEvent(moveEvent);
        syntheticDownEvent = new PointerEvent('pointerdown', event);
      } else {
        if (syntheticDownEvent) {
          event.target?.dispatchEvent(syntheticDownEvent);
          syntheticDownEvent = null;
        }
        if (reactionInterval) clearInterval(reactionInterval);
        setIsMultiTouchActive(true);
      }
    };
    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse' && syntheticDownEvent && event.pointerId === syntheticDownEvent.pointerId) {
        syntheticDownEvent = new PointerEvent('pointerdown', {
          bubbles: syntheticDownEvent.bubbles,
          cancelable: syntheticDownEvent.cancelable,
          composed: syntheticDownEvent.composed,
          detail: syntheticDownEvent.detail,
          view: syntheticDownEvent.view,
          altKey: syntheticDownEvent.altKey,
          ctrlKey: syntheticDownEvent.ctrlKey,
          metaKey: syntheticDownEvent.metaKey,
          shiftKey: syntheticDownEvent.shiftKey,
          button: syntheticDownEvent.button,
          buttons: syntheticDownEvent.buttons,
          clientX: event.clientX,
          clientY: event.clientY,
          movementX: event.movementX,
          movementY: event.movementY,
          relatedTarget: syntheticDownEvent.relatedTarget,
          screenX: event.screenX,
          screenY: event.screenY,
          isPrimary: syntheticDownEvent.isPrimary,
          pointerId: syntheticDownEvent.pointerId,
          pointerType: syntheticDownEvent.pointerType
        });
      }
    };
    const handlePointerUp = (event: PointerEvent) => {
      if (event.pointerType === 'mouse') {
        handleMouseUp(event as any);
        return;
      }
      if (!activePointers.has(event.pointerId)) return;
      activePointers.delete(event.pointerId);
      const pointerCount = activePointers.size;
      if (maxPointers === 1) handleMouseUp(event as any);
      if (pointerCount === 0) {
        maxPointers = 0;
        syntheticDownEvent = null;
        setIsMultiTouchActive(false);
      }
    };
    const shouldHandleMultiTouch = shouldHandleMultiTouchOrPressure(true);
    if (shouldHandleMultiTouch) {
      document.addEventListener('pointerdown', handlePointerDown, true);
      document.addEventListener('pointermove', handlePointerMove, true);
      document.addEventListener('pointerup', handlePointerUp, true);
      document.addEventListener('pointercancel', handlePointerUp, true);
    } else {
      document.addEventListener('mousedown', handleMouseDown, true);
      document.addEventListener('mouseup', handleMouseUp, true);
      document.addEventListener('mouseleave', handleMouseUp, true);
    }
    document.addEventListener('keydown', handleKeyUp);
    return () => {
      if (reactionInterval != null) clearInterval(reactionInterval);
      if (fadeTimeout != null) clearTimeout(fadeTimeout);
      if (shouldHandleMultiTouch) {
        document.removeEventListener('pointerdown', handlePointerDown, true);
        document.removeEventListener('pointermove', handlePointerMove, true);
        document.removeEventListener('pointerup', handlePointerUp, true);
        document.removeEventListener('pointercancel', handlePointerUp, true);
      } else {
        document.removeEventListener('mousedown', handleMouseDown, true);
        document.removeEventListener('mouseup', handleMouseUp, true);
        document.removeEventListener('mouseleave', handleMouseUp, true);
      }
      document.removeEventListener('keydown', handleKeyUp);
    };
  }, [reactImageUrl, reactName]);
  return reactImageUrl && mousePosition && !isMultiTouchActive ? jsx('div', {
    className: indicatorClass,
    style: {
      willChange: 'transform',
      transform: `translate3D(${mousePosition.x - viewportInfo.x}px, ${mousePosition.y - 0}px, 0)`
    },
    children: jsx('img', {
      src: reactImageUrl,
      alt: ''
    })
  }) : null;
}
// Original component name: $$tu0
/**
 * Memoized component for rendering a multiplayer cursor with chat, high-five, and other features.
 * Handles cursor appearance, chat messages, background effects, and animations based on various props.
 * @param name - The name of the user associated with the cursor.
 * @param color - The color of the cursor.
 * @param cursorType - The type of cursor (e.g., PaintTools).
 * @param chatMessage - The chat message array [currentMessage, previousMessage].
 * @param isHighFiving - Boolean indicating if the cursor is high-fiving.
 * @param focusOnTextCursor - Boolean indicating if focusing on text cursor.
 * @param temporarilyHide - Boolean to temporarily hide the cursor.
 * @param isCursorHandOnRight - Boolean for hand orientation.
 * @param isCursorPointingRight - Boolean for pointing direction (not used in logic, but kept for consistency).
 * @param editorType - The type of editor (e.g., 'whiteboard').
 * @param isCursorAndChatAreaOffscreen - Boolean indicating if cursor is offscreen.
 * @param sessionId - The session ID of the user.
 * @param prefersReducedMotion - Boolean for reduced motion preference.
 * @param isHighFivingSupported - Boolean indicating if high-fiving is supported.
 * @param useChatAnimation - Boolean to use chat animation.
 * @param disableMessageFade - Boolean to disable message fading.
 * @param isStaticView - Boolean for static view.
 * @param isHoveringWidgetWithHiddenCursors - Boolean for hovering widget.
 * @returns A JSX element representing the cursor.
 */
export const CursorRenderer = memo(({
  name,
  color,
  cursorType,
  chatMessage,
  isHighFiving,
  focusOnTextCursor,
  temporarilyHide,
  isCursorHandOnRight,
  isCursorPointingRight,
  editorType,
  isCursorAndChatAreaOffscreen,
  sessionId,
  prefersReducedMotion,
  isHighFivingSupported,
  useChatAnimation,
  disableMessageFade,
  isStaticView,
  isHoveringWidgetWithHiddenCursors
}: {
  name: string;
  color: string;
  cursorType: PaintTools;
  chatMessage: [string | null, string | null] | null;
  isHighFiving: boolean;
  focusOnTextCursor: boolean;
  temporarilyHide: boolean;
  isCursorHandOnRight: boolean;
  isCursorPointingRight: boolean;
  editorType: string;
  isCursorAndChatAreaOffscreen: boolean;
  sessionId: string;
  prefersReducedMotion: boolean;
  isHighFivingSupported: boolean;
  useChatAnimation: boolean;
  disableMessageFade: boolean;
  isStaticView: boolean;
  isHoveringWidgetWithHiddenCursors: boolean;
}) => {
  const theme = useTheme();
  const [fadeOpacity, setFadeOpacity] = useState(1);
  const textColor = useMemo(() => getTextColorForBackground(color), [color]);
  const adjustedColor = getFeatureFlags().fpl_enhanced_contrast_toggle && theme.enhancedContrast ? getDarkerShade(color) : color;
  const [backgroundEffect, setBackgroundEffect] = useState(BackgroundEffectType.NONE);
  const resetBackgroundEffect = () => setBackgroundEffect(BackgroundEffectType.NONE);
  const [isVisible, setIsVisible] = useState(isStaticView);
  const [currentMessage, previousMessage] = chatMessage || [];

  // Effect to handle visibility and fading
  useEffect(() => {
    let fadeTimeout: number | undefined;
    let hideTimeout: number | undefined;
    if (currentMessage || previousMessage) {
      setIsVisible(true);
      setFadeOpacity(1);
    } else {
      setIsVisible(false);
      resetBackgroundEffect();
    }
    if (!disableMessageFade) {
      fadeTimeout = setTimeout(() => setFadeOpacity(0), 5000);
      hideTimeout = setTimeout(() => {
        setIsVisible(false);
        resetBackgroundEffect();
      }, 8000);
    }
    return () => {
      setFadeOpacity(0);
      setIsVisible(false);
      resetBackgroundEffect();
      if (fadeTimeout) clearTimeout(fadeTimeout);
      if (hideTimeout) clearTimeout(hideTimeout);
    };
  }, [currentMessage, previousMessage, disableMessageFade]);
  const isWhiteboard = editorType === 'whiteboard';

  // Effect to detect background effects in whiteboard mode
  useEffect(() => {
    if (isWhiteboard && currentMessage && !isCursorAndChatAreaOffscreen) {
      for (const keyword of backgroundEffectKeywords.keys()) {
        const effect = backgroundEffectKeywords.get(keyword);
        if (effect && emoteSystem.isCompleteKeywordMatch(currentMessage, keyword)) {
          setBackgroundEffect(effect);
          break;
        }
      }
    }
  }, [currentMessage, isCursorAndChatAreaOffscreen, isWhiteboard]);
  const messageRef = useRef<HTMLDivElement>(null);

  // Effect to track performance for chat messages
  useEffect(() => {
    if (messageRef.current && messageRef.current.innerText === currentMessage) {
      const timer = globalPerfTimer.tryStop(`view_cursor_chat_message_${sessionId}_${currentMessage}`);
      if (timer) {
        distributionAnalytics.add('view_cursor_chat_message', timer);
      }
    }
  }, [currentMessage, messageRef, sessionId]);
  const isBotCursor = getFeatureFlags().cursor_bot && isCursorPointingRight && cursorType === PaintTools.DEFAULT;
  const isPenTool = cursorType === PaintTools.PEN;

  // Helper function to render the chat bubble
  const renderChatBubble = () => {
    if (!isVisible) return null;
    return jsxs('div', {
      className: Lo,
      style: {
        opacity: textColor === textOnLightCanvas ? 0.8 * fadeOpacity : fadeOpacity,
        boxShadow: isWhiteboard ? undefined : `2px 4px 8px ${adjustedColor}40`
      },
      dir: 'auto',
      children: [previousMessage && jsx('div', {
        className: previousMessage.length > 0 && (currentMessage?.length ?? 0) > 0 ? vD : '',
        children: previousMessage
      }), currentMessage && jsx('div', {
        ref: messageRef,
        children: currentMessage
      })]
    });
  };

  // Helper function to render the background effect
  const renderBackgroundEffect = () => jsx('div', {
    className: `${hD} ${n[backgroundEffect]}`,
    style: backgroundEffect !== BackgroundEffectType.NONE ? {
      background: adjustedColor,
      overflow: 'hidden',
      borderRadius: '2px 20px 20px 20px'
    } : {
      background: adjustedColor
    },
    onAnimationEnd: resetBackgroundEffect
  });

  // Main render logic with early return for focus on text cursor
  if (focusOnTextCursor) {
    return null;
  }
  const cursorImage = jsx('img', {
    className: classNames({
      [u0]: true,
      [Bj]: isHighFivingSupported,
      [DE]: isHighFiving,
      [z8]: isBotCursor
    }),
    src: buildCursorImageUrl(color, isHighFiving ? PaintTools.DEFAULT : cursorType, true),
    alt: `${isHighFiving ? 'highfive cursor' : 'hand cursor'}`,
    onError: ({
      currentTarget
    }) => {
      currentTarget.onerror = null;
      currentTarget.src = getFallbackCursorImage(color, true);
    }
  });
  const highFiveHand = isHighFivingSupported ? jsx('div', {
    className: _$$p3,
    children: jsx(renderHighFiveHand, {
      color,
      isHighFiveHandOut: isHighFiving,
      temporarilyHide,
      isCursorHandOnRight
    })
  }) : null;
  const chatContent = jsxs('div', {
    className: classNames({
      [iU]: isVisible,
      [VW]: !isVisible,
      [S8]: !isPenTool,
      [z8]: isBotCursor
    }),
    style: {
      color: textColor
    },
    children: [jsx('div', {
      className: isVisible ? bu : iY,
      style: {
        opacity: isVisible ? textColor === textOnDarkCanvas ? 0.8 : 0.5 : 1
      },
      dir: 'auto',
      children: name
    }), renderChatBubble(), renderBackgroundEffect()]
  });
  const animatedChat = (useChatAnimation || isWhiteboard) && !prefersReducedMotion ? jsx(ChatAnimationWrapper, {
    content: currentMessage || '',
    children: chatContent
  }) : chatContent;
  return jsxs('div', {
    "className": Dy,
    "style": {
      opacity: isHoveringWidgetWithHiddenCursors ? 0 : 1
    },
    'data-testid': `multiplayer-cursor-${sessionId}`,
    "children": [jsxs('div', {
      className: or,
      children: [isHighFivingSupported ? jsxs(Fragment, {
        children: [highFiveHand, cursorImage]
      }) : jsx('img', {
        className: classNames({
          [u0]: true,
          [z8]: isBotCursor
        }),
        src: buildCursorImageUrl(color, cursorType, true),
        alt: 'cursor',
        onError: ({
          currentTarget
        }) => {
          currentTarget.onerror = null;
          currentTarget.src = getFallbackCursorImage(color, true);
        }
      }), sessionId && jsx(_$$o, {
        sessionId
      })]
    }), animatedChat]
  });
});

// Original component name: tp
/**
 * Memoized component for positioning the cursor element on the viewport.
 * Handles offscreen detection and applies appropriate transforms.
 * @param isCursorAndChatAreaOffscreen - Boolean indicating if the cursor is offscreen.
 * @param x - The x-coordinate for positioning.
 * @param y - The y-coordinate for positioning.
 * @param children - The child JSX elements to render.
 * @returns A JSX element with applied positioning.
 */
const CursorPositioner = memo(({
  isCursorAndChatAreaOffscreen,
  x,
  y,
  children
}: {
  isCursorAndChatAreaOffscreen: boolean;
  x: number;
  y: number;
  children: React.ReactNode;
}) => {
  const style = {
    display: isCursorAndChatAreaOffscreen ? 'none' : 'block',
    willChange: 'transform',
    transform: isCursorAndChatAreaOffscreen ? 'translate3D(-10000px, -10000px, 0)' : `translate3D(${x}px, ${y}px, 0)`
  };
  return jsx('div', {
    style,
    children
  });
});


// todo: canvas
/**
 * Main multiplayer cursors component that orchestrates the rendering of all cursor-related features.
 * Manages viewport positioning, cursor animations, chat functionality, and high-five interactions.
 * Original function name: t_
 * @returns A JSX Fragment containing all multiplayer cursor elements.
 */
function MultiplayerCursorsManager(): JSX.Element | null {
  // Get all user session IDs for cursor rendering
  const allUserSessionIds = selectWithShallowEqual(({
    multiplayer: {
      allUsers: users
    }
  }) => users.map(user => user.sessionID));

  // Get current viewport information with expensive updates enabled
  const viewportInfo = getViewportInfo({
    subscribeToUpdates_expensive: true
  });

  // Get viewport navigator context for positioning calculations
  const viewportNavigator = useContext(viewportNavigatorContext);

  // Track mouse position (subscription disabled for performance)
  useMousePositionTracker({
    subscribeToUpdates_EXPENSIVE: false
  });

  // Calculate comments wrapper offset for proper positioning
  const commentsOffset = useMemo(() => viewportNavigator.getCommentsWrapperOffset(viewportInfo), [viewportNavigator, viewportInfo]);

  // Get current session and voting state
  const currentSessionId = useCurrentSessionID();
  const isVotingSessionActive = useIsVotingSessionJoined();

  // Get multiplayer emoji state for reactions
  const multiplayerEmojiState = useSelector<AppState, AppState['multiplayerEmoji']>(state => state.multiplayerEmoji);

  // Check if multiplayer cursors should be displayed
  const shouldShowMultiplayerCursors = !getObservableValue(AppStateTsApi?.uiState().hideMultiplayerCursors, false);

  // Get current tool for cursor appearance
  const currentTool = useAppModelProperty('currentTool');

  // Check if high-fiving is supported in current context
  const isHighFivingEnabled = isHighFivingSupported();

  // Initialize cursor systems and get their states
  const [cursorEntities, wiggleStatus, isMouseInCanvas, handsOnRightSet] = useCursorSystemsManager();

  // Determine cursor wiggle state
  const isCursorWiggling = wiggleStatus !== 'HIDDEN';

  // Determine current cursor mode
  let cursorMode = CursorType.NONE;
  const defaultTool = currentTool === DesignGraphElements.HAND ? DesignGraphElements.HAND : DesignGraphElements.SELECT;
  const activeTool = isCursorWiggling ? DesignGraphElements.SELECT : defaultTool;

  // Set cursor mode based on emoji state and wiggle status
  if (multiplayerEmojiState.type === 'REACTING_OR_CHATTING' && multiplayerEmojiState.isChatting) {
    cursorMode = CursorType.CHAT;
  } else if (isCursorWiggling) {
    cursorMode = CursorType.HIGH_FIVE;
  }

  // Determine if cursor should be visible based on mode
  const shouldShowCursor = useCursorVisibility(cursorMode);

  // Early return if no viewport info available
  if (viewportInfo == null) {
    return null;
  }

  // Calculate viewport container styles
  const viewportContainerStyle = {
    left: `${Math.floor(viewportInfo.x)}px`,
    top: `${Math.floor(viewportInfo.y)}px`,
    width: `${Math.floor(viewportInfo.width)}px`,
    height: `${Math.floor(viewportInfo.height)}px`
  };

  // Calculate canvas positioning with zoom and offset
  const canvasOffsetX = (0 - viewportInfo.offsetX) * viewportInfo.zoomScale + commentsOffset.x;
  const canvasOffsetY = (0 - viewportInfo.offsetY) * viewportInfo.zoomScale + commentsOffset.y;

  // Calculate canvas container styles for proper positioning
  const canvasContainerStyle = {
    top: `${viewportInfo.y + viewportInfo.height / 2}px`,
    left: `${viewportInfo.x + viewportInfo.width / 2}px`,
    transform: `translate(${canvasOffsetX}px, ${canvasOffsetY}px)`
  };
  return jsxs(Fragment, {
    children: [
    // Canvas-space cursors container
    jsx(ViewportContainer, {
      children: jsx('div', {
        'aria-hidden': true,
        'data-forward-events-to-fullscreen': true,
        'className': Lw,
        'style': canvasContainerStyle,
        'children': shouldShowMultiplayerCursors && jsxs('div', {
          className: isVotingSessionActive ? W7 : PT,
          children: [
          // AI selection boxes for node deletion animations
          jsx(AiSelectionBoxes, {
            viewportInfo
          }),
          // Render cursors for all other users (excluding current user)
          allUserSessionIds.map(sessionId => sessionId === currentSessionId ? null : jsx(MultiplayerCursorRenderer, {
            sessionID: sessionId,
            viewportInfo,
            cursorEntities,
            cursorHandsOnRight: handsOnRightSet,
            isHighFivingSupported: isHighFivingEnabled
          }, sessionId))]
        })
      })
    }),
    // Viewport-space UI elements container
    jsxs('div', {
      'aria-hidden': true,
      'data-forward-events-to-fullscreen': true,
      'className': zr,
      'style': viewportContainerStyle,
      'children': [
      // Current user's cursor and UI elements
      shouldShowCursor && jsxs(CursorTracker, {
        currentToolForCursor: activeTool,
        children: [
        // Chat input indicator
        cursorMode === CursorType.CHAT && jsx(renderChatInputIndicator, {}),
        // Self high-five cursor
        jsx(renderSelfHighFiveCursor, {
          cursorWiggleStatus: wiggleStatus,
          temporarilyHide: !isMouseInCanvas || hasAnimatedCursorForSession(cursorEntities, currentSessionId.toString()),
          isCursorHandOnRight: hasItem(handsOnRightSet, currentSessionId.toString())
        })]
      }),
      // High-five particle effects and animations
      isHighFivingEnabled && shouldShowMultiplayerCursors ? jsx(renderHighFiveEntities, {
        viewportInfo,
        cursorEntities
      }) : null,
      // Emoji reactions overlay
      viewportInfo ? jsx(ReactionsRenderer, {
        viewportInfo,
        multiplayerCursorsEnabled: shouldShowMultiplayerCursors
      }) : null,
      // Emoji reaction interaction handler
      viewportInfo && multiplayerEmojiState.type === 'REACTING_OR_CHATTING' ? jsx(EmojiReactionHandler, {
        multiplayerEmoji: multiplayerEmojiState,
        viewportInfo
      }) : null]
    })]
  });
}

/**
 * Hook to manage cursor systems and their states.
 * Initializes wiggle detector, entity system, collision detector, and kinematics.
 * Original logic extracted from the main component.
 * @returns Array containing cursor entities, wiggle status, mouse in canvas state, and hands on right set.
 */
function useCursorSystemsManager(): [Array<any>,
// cursorEntities
string,
// wiggleStatus
boolean,
// isMouseInCanvas
Set<string>] // handsOnRightSet
{
  const [cursorSystems] = useState(createCursorSystems);

  // Initialize wiggle detector with event handlers
  useCursorWiggleDetector(cursorSystems.cursorWiggleDetector);
  const trackEvent = trackFileEventWithUser();
  const [cursorEntities, setCursorEntities] = useState([]);
  const [wiggleStatus, setWiggleStatus] = useState('HIDDEN');
  const [handsOnRightSet, setHandsOnRightSet] = useState<Set<string>>(new Set());
  const latestViewportRef = useLatestViewportRef({
    subscribeToUpdates_expensive: true
  });
  const previousStateRef = useRef({
    oldEntitiesKey: '',
    oldHandsOnRightKey: '',
    oldWiggleMode: false,
    oldWiggleStatus: 'HIDDEN'
  });

  // Subscribe to multiplayer session updates with throttling
  multiplayerSessionManager.useInfoBySessionIdSubscription(useMemo(() => throttle(100, () => {
    const currentViewport = latestViewportRef.current;
    if (!currentViewport) return;

    // Update cursor systems with current state
    updateCursorSystems(currentViewport, cursorSystems, trackEvent);

    // Get updated entities and check for changes
    const updatedEntities = cursorSystems.cursorEntitySystem.getEntities();
    const entitiesKey = updatedEntities.map(entity => entity.id).join(',');
    if (entitiesKey !== previousStateRef.current.oldEntitiesKey) {
      setCursorEntities(updatedEntities);
    }

    // Update wiggle status
    const isWiggling = cursorSystems.cursorWiggleDetector.getWiggleMode();
    const newWiggleStatus = cursorSystems.cursorWiggleDetector.getAboutToHide() ? 'ABOUT_TO_HIDE' : isWiggling ? 'SHOWN' : 'HIDDEN';
    if (newWiggleStatus !== previousStateRef.current.oldWiggleStatus) {
      setWiggleStatus(newWiggleStatus);
    }

    // Update hands on right set
    const handsOnRight = cursorSystems.cursorKinematics.getHandsOnRight();
    const handsOnRightKey = Array.from(handsOnRight.keys()).join(',');
    if (handsOnRightKey !== previousStateRef.current.oldHandsOnRightKey) {
      setHandsOnRightSet(new Set(handsOnRight));
    }

    // Update previous state reference
    previousStateRef.current = {
      oldEntitiesKey: entitiesKey,
      oldWiggleMode: isWiggling,
      oldWiggleStatus: newWiggleStatus,
      oldHandsOnRightKey: handsOnRightKey
    };
  }), [latestViewportRef, trackEvent, cursorSystems]));
  return [cursorEntities, wiggleStatus, !cursorSystems.cursorWiggleDetector.getMouseLeftCanvas(), handsOnRightSet];
}

/**
 * Hook to manage cursor wiggle detection and high-five interactions.
 * Sets up event listeners for keyboard and mouse interactions.
 * Original function name: extracted from anonymous function
 * @param wiggleDetector - The WiggleDetector instance to manage.
 */
function useCursorWiggleDetector(wiggleDetector: WiggleDetector): void {
  const trackEvent = trackFileEventWithUser();
  const [, setIsWiggling] = useAtomValueAndSetter(q);
  const isHighFivingEnabled = isHighFivingSupported();

  // Check if wiggle mode should be active
  const shouldEnableWiggleMode = useShouldEnableWiggleMode();

  // Check if enhanced wiggle is enabled
  const isEnhancedWiggleEnabled = getObservableOrFallback(EditorPreferencesApi().cursorHighFiveWiggle);
  const previousToolRef = useRef(null);
  const updateTimeoutRef = useRef(0);
  const store = useStore();

  // Disable wiggling when not in appropriate mode
  useEffect(() => {
    if (!shouldEnableWiggleMode) {
      wiggleDetector.stopWigglingNow();
    }
  }, [wiggleDetector, shouldEnableWiggleMode]);

  // Handle wiggle mode changes
  useEffect(() => {
    const unsubscribe = wiggleDetector.onWiggleModeChange(isWiggling => {
      multiplayerSessionManager.sendHighFiveStatus(isWiggling);
      setIsWiggling(isWiggling);
      if (isWiggling && wiggleDetector.getHighFiveKeyPressed()) {
        trackEvent('figjam_cursor_high_five_events', {
          type: 'enter_hands_up',
          source: 'keyboard'
        });
      } else if (isWiggling) {
        trackEvent('figjam_cursor_high_five_events', {
          type: 'enter_hands_up',
          source: 'mouse'
        });
      }
    });
    return unsubscribe;
  }, [wiggleDetector, setIsWiggling, trackEvent]);

  // Update wiggle state based on atom value
  useEffect(() => {
    const [isWiggling] = useAtomValueAndSetter(q);
    if (isWiggling) {
      wiggleDetector.startOrRefreshWiggle();
      wiggleDetector.setMouseLeftCanvas(false);
      wiggleDetector.update();
    } else {
      wiggleDetector.stopWigglingNow();
    }
  }, [wiggleDetector]);

  // Recursive update function for continuous wiggle checking
  const scheduleWiggleUpdate = useCallback(() => {
    clearTimeout(updateTimeoutRef.current);
    updateTimeoutRef.current = setTimeout(() => {
      if (wiggleDetector.getHighFiveKeyPressed() && !wiggleDetector.getWiggleMode()) {
        wiggleDetector.update();
        scheduleWiggleUpdate();
      }
    }, 250);
  }, [wiggleDetector]);

  // Cleanup timeout on unmount
  useEffect(() => () => clearTimeout(updateTimeoutRef.current), []);

  // Keyboard event handlers
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    const hasModifiers = event.metaKey || event.ctrlKey || event.altKey || event.shiftKey;
    if (event.key !== 'h' || hasModifiers) {
      // Stop wiggling on other keys (except space and slash)
      if (event.key !== ' ' && event.key !== '/' && !hasModifiers && wiggleDetector.getWiggleMode()) {
        wiggleDetector.setHighFiveKeyPressed(false);
        previousToolRef.current = null;
        wiggleDetector.stopWigglingNow();
      }
    } else {
      // Handle 'h' key press for high-five
      if (!wiggleDetector.getHighFiveKeyPressed()) {
        const state = store.getState() as AppState;
        const currentTool = state.mirror.appModel.currentTool;
        previousToolRef.current = currentTool;
      }
      wiggleDetector.setHighFiveKeyPressed(true);
      wiggleDetector.update();
      scheduleWiggleUpdate();
    }
  }, [wiggleDetector, scheduleWiggleUpdate, store]);
  const handleKeyUp = useCallback((event: KeyboardEvent) => {
    if (event.key === 'h') {
      // Restore previous tool if needed
      if (wiggleDetector.getWiggleMode() && previousToolRef.current !== null && previousToolRef.current !== DesignGraphElements.HAND) {
        Fullscreen.triggerActionInUserEditScope('set-tool-default', {
          source: 'cursor-high-fives'
        });
      }
      previousToolRef.current = null;
      wiggleDetector.setHighFiveKeyPressed(false);
      wiggleDetector.stopWigglingNow();
    }
  }, [wiggleDetector]);

  // Mouse event handlers
  const handlePointerDown = useCallback((event: PointerEvent) => {
    if (wiggleDetector.getWiggleMode()) {
      wiggleDetector.setHighFiveKeyPressed(false);
      wiggleDetector.stopWigglingNow();
    }
    if (event.button === 0 || event.button === 1) {
      wiggleDetector.setMouseButtonHeld(true);
    }
  }, [wiggleDetector]);
  const handlePointerUp = useCallback(() => {
    wiggleDetector.setMouseButtonHeld(false);
  }, [wiggleDetector]);
  const handleMouseMove = useCallback((event: MouseEvent) => {
    const isOutsideFullscreen = !(event.target instanceof Element && event.target.closest('#fullscreen-root'));
    wiggleDetector.setMouseLeftCanvas(isOutsideFullscreen);
    wiggleDetector.update({
      x: event.clientX,
      y: event.clientY
    });
  }, [wiggleDetector]);

  // Determine if event listeners should be active
  const shouldListenToEvents = isHighFivingEnabled && shouldEnableWiggleMode;

  // Register event listeners conditionally
  useDocumentEvent('keydown', handleKeyDown, shouldListenToEvents);
  useDocumentEvent('keyup', handleKeyUp, shouldListenToEvents);
  useDocumentEvent('pointerdown', handlePointerDown, shouldListenToEvents);
  useDocumentEvent('pointerup', handlePointerUp, shouldListenToEvents);
  useDocumentEvent('mousemove', handleMouseMove, shouldListenToEvents && isEnhancedWiggleEnabled);
}

/**
 * Hook to determine if wiggle mode should be enabled based on current tool and state.
 * Original logic extracted from inline function.
 * @returns Boolean indicating if wiggle mode should be enabled.
 */
function useShouldEnableWiggleMode(): boolean {
  const isSelectOrHandTool = useSelector<AppState, boolean>(state => {
    const currentTool = state.mirror.appModel.currentTool;
    return currentTool === DesignGraphElements.SELECT || currentTool === DesignGraphElements.HAND;
  });
  const isEmojiActive = useSelector<AppState, boolean>(state => state.multiplayerEmoji?.type === 'WHEEL' || state.multiplayerEmoji?.type === 'REACTING_OR_CHATTING');
  const currentEditMode = useSelector<AppState, LayoutTabType>(state => state.mirror.appModel.activeCanvasEditModeType);
  return isSelectOrHandTool && !isEmojiActive && currentEditMode !== LayoutTabType.TEXT;
}

/**
 * Hook to manage cursor visibility based on cursor mode.
 * Original logic extracted from inline function.
 * @param cursorMode - The current cursor mode.
 * @returns Boolean indicating if cursor should be visible.
 */
function useCursorVisibility(cursorMode: CursorType): boolean {
  const isCursorInactive = cursorMode === CursorType.NONE;
  const [shouldShowCursor, setShouldShowCursor] = useState(!isCursorInactive);
  useEffect(() => {
    let mouseMoveHandler: (() => void) | undefined;
    if (!isCursorInactive) {
      setShouldShowCursor(true);
      return;
    }
    const hideCursor = () => setShouldShowCursor(false);
    if (!BrowserInfo.isIpad && !BrowserInfo.isMeetDevice) {
      mouseMoveHandler = hideCursor;
      document.addEventListener('mousemove', mouseMoveHandler);
      return () => document.removeEventListener('mousemove', mouseMoveHandler);
    }
    hideCursor();
  }, [isCursorInactive]);
  return shouldShowCursor;
}

/**
 * Updates cursor systems with current viewport and multiplayer data.
 * Handles collision detection, high-five animations, and entity management.
 * Original function name: updateCursorSystems (extracted from inline logic)
 * @param viewport - The current viewport information.
 * @param systems - The cursor systems object.
 * @param trackEvent - Function to track events.
 */
function updateCursorSystems(viewport: ViewportInfo, systems: ReturnType<typeof createCursorSystems>, trackEvent: (event: string, data?: any) => void): void {
  if (!debugState || !Multiplayer) return;
  const currentState = debugState.getState();
  const sessionInfoMap = multiplayerSessionManager.infoBySessionId();
  if (!currentState.mirror || !currentState.mirror.appModel) return;
  const currentSessionId = Multiplayer.currentSessionID();
  const multiplayerState = currentState.multiplayer;
  const currentPage = currentState.mirror.appModel.currentPage;
  const observingSessionId = multiplayerState.observingSessionID;
  const userMap = createUserMap(multiplayerState.allUsers);

  // Filter users for high-fiving
  const highFivingUsers = Object.values(sessionInfoMap).filter(sessionInfo => {
    if (!sessionInfo.highFiveStatus || !sessionInfo.mouse) return false;
    const user = userMap[sessionInfo.sessionId];
    return !!user && (user.sessionID === currentSessionId || isCursorValidForInteraction(user, sessionInfo, currentPage, observingSessionId, currentSessionId));
  });

  // Update cursor kinematics
  systems.cursorKinematics.updateCursors(highFivingUsers, currentSessionId, systems.cursorWiggleDetector.getWiggleMode(), systems.cursorWiggleDetector.getMousePosition());
  const zoomScale = viewport?.zoomScale || 1;

  // Check for collisions and handle high-five interactions
  const collisions = systems.cursorCollisionDetector.updateAndCheckCollisions(highFivingUsers);
  collisions.forEach(collisionPair => {
    handleHighFiveCollision(collisionPair, zoomScale, currentSessionId, systems, trackEvent);
  });

  // Update particle system
  systems.cursorEntitySystem.update();
}

/**
 * Handles high-five collision between two cursors.
 * Creates animation entities and triggers appropriate effects.
 * Original function name: handleHighFiveCollision (extracted from inline logic)
 * @param collisionPair - Array of two colliding cursor sessions.
 * @param zoomScale - Current viewport zoom scale.
 * @param currentSessionId - ID of the current user session.
 * @param systems - The cursor systems object.
 * @param trackEvent - Function to track events.
 */
function handleHighFiveCollision(collisionPair: CursorCollisionPair, zoomScale: number, currentSessionId: string, systems: ReturnType<typeof createCursorSystems>, trackEvent: (event: string, data?: any) => void): void {
  const [sessionA, sessionB] = collisionPair;

  // Check if animations already exist for these sessions
  const hasAnimationA = hasAnimatedCursorForSession(systems.cursorEntitySystem.getEntities(), sessionA.sessionId);
  const hasAnimationB = hasAnimatedCursorForSession(systems.cursorEntitySystem.getEntities(), sessionB.sessionId);
  if (hasAnimationA && hasAnimationB) return;

  // Determine which user is current
  const isCurrentUserA = sessionA.sessionId === currentSessionId.toString();
  const isCurrentUserB = sessionB.sessionId === currentSessionId.toString();

  // Get cursor positions
  const positionA = sessionA.mouse.canvasSpacePosition;
  const positionB = sessionB.mouse.canvasSpacePosition;

  // Calculate midpoint for high-five effect
  const midpoint = CollisionDetector.computeMidpoint(positionA, positionB);
  midpoint.y -= 38 / zoomScale;

  // Determine hand orientation
  const isAOnLeft = positionA.x > positionB.x;
  const primaryHandOnRight = isCurrentUserA || isCurrentUserB ? isCurrentUserA : isAOnLeft;

  // Trigger wiggle for current user participants
  if (isCurrentUserA && !hasAnimationA || isCurrentUserB && !hasAnimationB) {
    systems.cursorWiggleDetector.startOrRefreshWiggle();
  }

  // Create animated cursor entities for each participant
  collisionPair.forEach((session, index) => {
    if (!hasAnimatedCursorForSession(systems.cursorEntitySystem.getEntities(), session.sessionId) && session.mouse) {
      const cursorTransform = calculateCursorPosAndRotation(session.mouse.canvasSpacePosition, systems.cursorKinematics, session.sessionId, zoomScale, isCurrentUserA);

      // Trigger snapshot for desktop app
      if (desktopAPIInstance) {
        setTimeout(() => {
          _$$H.trigger(SnapshotLevel.GENERIC);
        }, 400);
      }
      systems.cursorEntitySystem.addEntity(new AnimatedCursorEntity({
        startingRelativePosition: {
          x: (cursorTransform.position.x - midpoint.x) * zoomScale,
          y: (cursorTransform.position.y - midpoint.y) * zoomScale
        },
        startingRotation: cursorTransform.rotation,
        position: midpoint,
        viewportZoomScale: zoomScale,
        cursorOnRightForWindup: index === 0 ? isAOnLeft : !isAOnLeft,
        cursorOnRightForCollision: index === 0 ? primaryHandOnRight : !primaryHandOnRight,
        sessionId: session.sessionId,
        getUserCursorTransform: () => {
          const currentSessionInfo = multiplayerSessionManager.infoBySessionId()[session.sessionId];
          const currentPosition = currentSessionInfo?.mouse?.canvasSpacePosition || {
            x: 0,
            y: 0
          };
          return calculateCursorPosAndRotation(currentPosition, systems.cursorKinematics, session.sessionId, zoomScale, index === 0 ? isCurrentUserA : isCurrentUserB);
        }
      }));
    }
  });

  // Create particle effects for the high-five
  systems.cursorEntitySystem.addEntity(new TimedEventEntity([{
    time: 0.3,
    event: () => {
      systems.cursorEntitySystem.addEntity(new BubblePopEntity(midpoint));
      systems.cursorEntitySystem.addEntity(new SparkleEntity(midpoint));
      // Create multiple star particles
      for (let i = 0; i < 6; i++) {
        systems.cursorEntitySystem.addEntity(new StarParticle(midpoint));
      }
    }
  }]));

  // Track the high-five event
  trackEvent('figjam_cursor_high_five_events', {
    type: 'give_high_five'
  });
}

/**
 * Component for rendering individual multiplayer cursors.
 * Handles cursor validation, positioning, and prop extraction.
 * Original function name: tm
 * @param sessionID - The session ID of the cursor to render.
 * @param viewportInfo - Current viewport information.
 * @param cursorEntities - Array of cursor entities for animation detection.
 * @param cursorHandsOnRight - Set of session IDs with hands on right.
 * @param isHighFivingSupported - Boolean indicating if high-fiving is supported.
 * @returns A JSX element for the cursor or null if invalid.
 */
function MultiplayerCursorRenderer({
  sessionID,
  viewportInfo,
  cursorEntities,
  cursorHandsOnRight,
  isHighFivingSupported
}: {
  sessionID: string;
  viewportInfo: ViewportInfo;
  cursorEntities: Array<any>;
  cursorHandsOnRight: Set<string>;
  isHighFivingSupported: boolean;
}): JSX.Element | null {
  // Get user information for this session
  const userInfo = useSelector(({
    multiplayer: {
      allUsers: users
    }
  }) => users.find(user => user.sessionID === sessionID));

  // Get current page and other required state
  const currentPage = useAppModelProperty('currentPage');
  const prefersReducedMotion = usePrefersReducedMotion();
  const editorType = getCurrentFileType();
  const showOutlines = getObservableOrFallback(getCanvasViewState().showOutlines);
  const isCursorChatDisabled = setupCursorChatDisabledCheck();
  const isObservingMode = useSelector(({
    multiplayer: {
      observingSessionID: sessionId
    }
  }) => sessionId !== -1);

  // Get session info from multiplayer manager
  const sessionInfo = multiplayerSessionManager.useInfoBySessionId({
    updateSynchronously: isObservingMode
  })[sessionID];

  // Get chat message (empty if chat is disabled)
  const chatMessage = !isCursorChatDisabled && sessionInfo ? sessionInfo.chatMessage : [null];

  // Get current and observing session IDs
  const currentSessionId = useCurrentSessionID();
  const observingSessionId = useObservingSessionID();

  // Validate cursor for rendering
  const shouldRenderCursor = !!(userInfo && sessionInfo?.mouse && isCursorValidForInteraction(userInfo, sessionInfo, currentPage, observingSessionId, currentSessionId));

  // Track chat state for other users
  useChatStateTracker(sessionInfo, chatMessage, shouldRenderCursor);

  // Early return if cursor should not be rendered
  if (!shouldRenderCursor || !sessionInfo?.mouse) {
    return null;
  }

  // Check if focusing on text cursor
  const shouldFocusOnTextCursor = !!(getFeatureFlags().ee_text_selection_in_mp && sessionInfo.focusOnTextCursor);

  // Determine cursor color (gray if outlines are shown)
  const cursorColor = showOutlines ? '#848484' : userInfo.color;

  // Get cursor position and calculate screen coordinates
  const canvasPosition = sessionInfo.mouse.canvasSpacePosition;
  const screenPosition = viewportToScreen(viewportInfo, canvasPosition);

  // Check if cursor is offscreen
  const isCursorOffscreen = isCursorOutsideViewport(screenPosition, viewportInfo) && isCursorFarOffscreen(screenPosition);

  // Calculate zoom-adjusted positioning
  const zoomScale = viewportInfo.zoomScale;
  const zoomOffsetX = (zoomScale - 1) * canvasPosition.x;
  const zoomOffsetY = (zoomScale - 1) * canvasPosition.y;
  const sessionIdString = userInfo.sessionID.toString();
  return jsx(CursorPositioner, {
    x: canvasPosition.x + zoomOffsetX,
    y: canvasPosition.y + zoomOffsetY,
    isCursorAndChatAreaOffscreen: isCursorOffscreen,
    children: jsx(CursorRenderer, {
      chatMessage,
      color: cursorColor,
      cursorType: sessionInfo.cursorType,
      editorType,
      focusOnTextCursor: shouldFocusOnTextCursor ?? false,
      isCursorAndChatAreaOffscreen: isCursorOffscreen,
      isCursorHandOnRight: hasItem(cursorHandsOnRight, sessionIdString),
      isCursorPointingRight: false,
      // This prop seems unused in the original
      isHighFiving: sessionInfo.highFiveStatus,
      isHighFivingSupported,
      isHoveringWidgetWithHiddenCursors: sessionInfo.isHoveringWidgetWithHiddenCursors,
      name: userInfo.name,
      prefersReducedMotion,
      sessionId: userInfo.sessionID,
      temporarilyHide: hasAnimatedCursorForSession(cursorEntities, sessionIdString),
      useChatAnimation: true,
      disableMessageFade: false,
      isStaticView: false
    })
  });
}

/**
 * Hook to track chat state for other users in the multiplayer session.
 * Original function name: th
 * @param sessionInfo - Information about the user session.
 * @param chatMessage - The current chat message.
 * @param shouldTrack - Boolean indicating if tracking should be active.
 */
function useChatStateTracker(sessionInfo: any, chatMessage: any, shouldTrack: boolean): void {
  const sessionIdRef = useRef<string | null>(null);
  sessionIdRef.current = sessionInfo?.sessionId ?? sessionIdRef.current;

  // Track chat state when message exists and tracking is enabled
  useEffect(() => {
    if (sessionIdRef.current && shouldTrack) {
      const hasMessage = !!(chatMessage && chatMessage.length && chatMessage[0]);
      chatStateTracker?.setOtherUserChattingState(sessionIdRef.current, hasMessage);
    }
  }, [shouldTrack, chatMessage]);

  // Cleanup on unmount and when tracking stops
  useEffect(() => {
    const cleanup = () => {
      if (sessionIdRef.current) {
        chatStateTracker?.setOtherUserChattingState(sessionIdRef.current, false);
      }
    };
    cleanup();
    return cleanup;
  }, []);
}

/**
 * Checks if a cursor position is outside the viewport bounds.
 * Original logic extracted from inline function.
 * @param screenPosition - The cursor position on screen.
 * @param viewport - The viewport dimensions.
 * @returns Boolean indicating if cursor is outside viewport.
 */
function isCursorOutsideViewport(screenPosition: {
  x: number;
  y: number;
}, viewport: {
  width: number;
  height: number;
}): boolean {
  return screenPosition.x < 0 || screenPosition.y < 0 || screenPosition.x > viewport.width || screenPosition.y > viewport.height;
}

/**
 * Checks if a cursor position is far offscreen (beyond reasonable bounds).
 * Original logic extracted from inline function.
 * @param screenPosition - The cursor position on screen.
 * @returns Boolean indicating if cursor is far offscreen.
 */
function isCursorFarOffscreen(screenPosition: {
  x: number;
  y: number;
}): boolean {
  return screenPosition.x < -400 || screenPosition.y < -100;
}

/**
 * Checks if there's an animated cursor entity for a given session.
 * Helper function for determining cursor visibility.
 * @param entities - Array of cursor entities.
 * @param sessionId - The session ID to check.
 * @returns Boolean indicating if animated cursor exists.
 */
function hasAnimatedCursorForSession(entities: Array<any>, sessionId: string): boolean {
  return entities.some(entity => entity.type === 'AnimatedCursorEntity' && entity.customData?.sessionId === sessionId);
}
export function createMultiplayerCursorSystem() {
  return jsx(ErrorBoundaryCrash, {
    boundaryKey: 'MultiplayerCursors',
    fallback: errorBoundaryFallbackTypes.NONE_I_KNOW_WHAT_IM_DOING,
    children: jsx(MultiplayerCursorsManager, {})
  });
}
export const k_ = CursorRenderer;
export const yL = createMultiplayerCursorSystem;
