import { isArrowKey, isCommandEvent, isNavigationKey, KeyCodes } from '../905/63728';
import { eb, IL, No, pP, xC } from '../905/392533';
import { debugState } from '../905/407919';
import { browserCapabilities } from '../905/409121';
import { trackEventAnalytics } from '../905/449184';
import { decodeBase64, encodeBase64 } from '../905/561685';
import { getFeatureFlags } from '../905/601108';
import { logWarning } from '../905/714362';
import { KeyboardFocusManager } from '../905/826900';
import { isEventProcessed } from '../905/955878';
import { atomStoreManager } from '../figma_app/27355';
import { FEditorType } from '../figma_app/53721';
import { sitesViewSetterAtomFamily } from '../figma_app/115923';
import { createPendingAttachmentAtom, handleInsertError, hasMaxAttachmentsAtom } from '../figma_app/119420';
import { SUPPORTED_DRAWING_TOOLS } from '../figma_app/358450';
import { fullscreenValue } from '../figma_app/455680';
import { getCurrentKeyboardLayout } from '../figma_app/475303';
import { gk, tj } from '../figma_app/540726';
import { isDebugSelectedFigmakeFullscreen } from '../figma_app/552876';
import { getInitialDynamicConfig } from '../figma_app/594947';
import { checkStackInvariants } from '../figma_app/603466';
import { preventDefault } from '../figma_app/753501';
import { DesignGraphElements, EventTypeEnum, Fullscreen, HTMLWindow, InsertErrorType, KeyboardLayout, PageNavigation, PanelType, PointerType } from '../figma_app/763686';
import { isMobileUA } from '../figma_app/778880';
import { ty } from '../figma_app/844818';
import { desktopAPIInstance } from '../figma_app/876459';
import { setKeyPressCallback, shouldIgnoreKeyEvent } from '../figma_app/896988';
import { ClipboardOperation } from '../figma_app/915202';
import { escapeHtml } from '../figma_app/930338';
import { PluginIframeMode, PluginInstanceManager } from '../figma_app/985200';
/**
 * Enum representing modifier key flags for keyboard events
 * Used to combine multiple modifier keys using bitwise operations
 */
export enum ModifierKeyFlags {
  ALT = 256,
  META = 512,
  SHIFT = 1024,
  CONTROL = 2048,
}
/**
 * Enum representing different pointer input types
 * Maps to PointerType values used throughout the application
 */
enum PointerInputType {
  MOUSE = 0,
  TOUCH = 1,
  STYLUS = 2,
  TRACKPAD = 3,
}
/**
 * Maps PointerEvent pointerType to internal PointerInputType enum
 * @param e - PointerEvent to extract type from
 * @returns PointerInputType value corresponding to the pointer type
 */
function mapPointerEventType(e: PointerEvent): PointerInputType {
  switch (e.pointerType) {
    case 'mouse':
      return PointerInputType.MOUSE;
    case 'touch':
      return PointerInputType.TOUCH;
    case 'pen':
      return PointerInputType.STYLUS;
  }
  console.error('Unknown pointer type', e.pointerType);
  return PointerInputType.MOUSE;
}
/**
 * Calculates the distance and magnification change between two pinch gesture states
 * Used for handling multi-touch scaling gestures
 * @param previousState - Previous gesture state with x, y, distance
 * @param currentState - Current gesture state with x, y, distance
 * @returns Object containing x/y delta and magnification change
 */
function calculatePinchGestureDistance(previousState: any, currentState: any) {
  return {
    x: currentState.x - previousState.x,
    y: currentState.y - previousState.y,
    magnification: Math.log(currentState.distance / previousState.distance) / Math.log(Fullscreen.pinchToZoomExponent())
  };
}
/**
 * Tracks pointer events and maintains state for multi-touch gesture detection
 * Manages touch points and their lifecycle for gesture recognition
 */
class PointerEventTracker {
  _touches: PointerEvent[] = [];
  _maxTouchCount: number = 0;
  constructor() {
    this._touches = [];
    this._maxTouchCount = 0;
  }

  /**
   * Handles incoming pointer events and updates internal state
   * @param pointerEvent - The pointer event to process
   */
  handleEvent(pointerEvent: PointerEvent): void {
    if (pointerEvent.type === 'pointercancel') {
      this.reset();
      return;
    }
    this._touches = this._touches.filter(touch => {
      return pointerEvent.pointerId !== touch.pointerId;
    });
    (pointerEvent.type === 'pointerdown' || pointerEvent.type === 'pointermove') && this._touches.push(pointerEvent);
    this._maxTouchCount = Math.max(this._maxTouchCount, this._touches.length);
  }

  /**
   * Resets the touch tracking state
   */
  reset(): void {
    this._touches = [];
    this._maxTouchCount = 0;
  }

  /**
   * Gets the current active touch points
   * @returns Array of current pointer events
   */
  get(): PointerEvent[] {
    return this._touches;
  }

  /**
   * Gets the maximum number of simultaneous touches recorded
   * @returns Maximum touch count
   */
  maxTouchCount(): number {
    return this._maxTouchCount;
  }
}
/**
 * Tracks click events to determine multi-click sequences (double-click, triple-click, etc.)
 * Maintains timing and position data to detect rapid sequential clicks
 */
class ClickCountTracker {
  oldX: number = 0;
  oldY: number = 0;
  oldTime: number = 0;
  oldCount: number = 0;
  constructor() {
    this.oldX = 0;
    this.oldY = 0;
    this.oldTime = 0;
    this.oldCount = 0;
  }

  /**
   * Calculates the click count for a click event based on timing and position
   * @param x - X coordinate of the click
   * @param y - Y coordinate of the click
   * @returns Click count (1 for single, 2 for double, etc.)
   */
  getClickCount(x: number, y: number): number {
    const currentTime = Date.now();
    let clickCount = 1;
    if (this.oldTime && currentTime - this.oldTime < 500 && Math.abs(x - this.oldX) < 10 && Math.abs(y - this.oldY) < 10) {
      clickCount = this.oldCount + 1;
    }
    this.oldX = x;
    this.oldY = y;
    this.oldCount = clickCount;
    this.oldTime = currentTime;
    return clickCount;
  }
}
/**
 * Sets up multi-touch pointer event handling with gesture support
 * @param mouseEventHandler - Function to handle converted mouse events
 * @param viewElement - HTML element to attach events to
 * @param clickTracker - Click count tracker instance
 * @param allowNativeGestures - Whether to allow native gesture handling
 * @param touchSupport - Whether touch events are supported
 * @returns Event handler state machine for touch processing
 */
/**
 * Sets up multi-touch pointer event handling with gesture support
 * Manages touch events, converts them to mouse events, and handles gestures like pinch-to-zoom
 * @param mouseEventHandler - Function to handle converted mouse events
 * @param viewElement - HTML element to attach events to
 * @param clickTracker - Click count tracker instance (ClickCountTracker)
 * @param allowNativeGestures - Whether to allow native gesture handling
 * @param touchSupport - Whether touch events are supported
 * @returns Event handler state machine for touch processing
 */
export function setupMultiTouchPointerHandler(mouseEventHandler: Fn, viewElement: HTMLElement, clickTracker: ClickCountTracker, allowNativeGestures?: boolean, touchSupport?: boolean) {
  const pointerTracker = new PointerEventTracker();

  /**
   * Sends a mouse event by converting touch/pointer data to mouse event format
   * @param eventData - Event data containing position, type, and other properties
   */
  function sendMouseEvent(eventData: any): void {
    const isMouseRelease = eventData.type === EventTypeEnum.MOUSE_RELEASE;
    const isMousePress = eventData.type === EventTypeEnum.MOUSE_PRESS;
    const isClickEvent = isMousePress || isMouseRelease;
    mouseEventHandler(eventData.type, eventData.x, eventData.y, eventData.button || (isClickEvent ? 0 : -1), eventData.buttons || (isMousePress ? 1 : 0), eventData.clickCount || (isClickEvent ? 1 : 0), eventData.modifierKeys || 0, eventData.deltaX || 0, eventData.deltaY || 0, eventData.gestureValue || 0, eventData.pointerType, eventData.pointerId || -1, eventData.timeStamp, -1);
  }

  /**
   * Gets the relative position of an event within the view element
   * @param event - Pointer/touch event
   * @returns Object with x, y coordinates relative to viewElement
   */
  function getRelativePosition(event: any): {
    x: number;
    y: number;
  } {
    let x = event.pageX;
    let y = event.pageY;
    for (let element = viewElement; element; element = element.offsetParent as HTMLElement) {
      x -= element.offsetLeft;
      y -= element.offsetTop;
    }
    return {
      x,
      y
    };
  }

  /**
   * Extracts modifier key flags from a keyboard/mouse event
   * @param event - Event with modifier key properties
   * @returns Bitwise combination of modifier flags
   */
  function extractModifierKeys(event: any): number {
    return (event.altKey ? ModifierKeyFlags.ALT : 0) | (event.metaKey ? ModifierKeyFlags.META : 0) | (event.shiftKey ? ModifierKeyFlags.SHIFT : 0) | (event.ctrlKey ? ModifierKeyFlags.CONTROL : 0);
  }

  /**
   * Summarizes multiple touch points into center position and spread distance
   * Used for multi-touch gesture calculations
   * @param touchPoints - Array of touch/pointer events
   * @returns Summary with center position, distance, and count
   */
  function summarizeTouchPoints(touchPoints: any[]): {
    x: number;
    y: number;
    distance: number;
    count: number;
  } {
    let totalX = 0;
    let totalY = 0;
    const count = touchPoints.length;
    let variance = 0;

    // Calculate center position
    for (let i = 0; i < count; i++) {
      const position = getRelativePosition(touchPoints[i]);
      totalX += position.x;
      totalY += position.y;
    }
    totalX /= count;
    totalY /= count;

    // Calculate variance for distance measurement
    for (let i = 0; i < count; i++) {
      const position = getRelativePosition(touchPoints[i]);
      variance += (position.x - totalX) ** 2 + (position.y - totalY) ** 2;
    }
    return {
      x: totalX,
      y: totalY,
      distance: Math.sqrt(variance / count),
      count
    };
  }

  /**
   * Simulates a right-click mouse event from touch event
   * @param touchEvent - Touch event to convert to right-click
   */
  function simulateRightClickFromTouch(touchEvent: any): void {
    if (!touchSupport) return;
    const position = getRelativePosition(touchEvent);
    const modifierKeys = extractModifierKeys(touchEvent);
    const pointerType = mapPointerEventType(touchEvent);
    const timestamp = touchEvent.timeStamp;

    // Simulate right-click sequence: enter -> press -> release -> leave
    const rightClickEvents = [{
      type: EventTypeEnum.MOUSE_ENTER
    }, {
      type: EventTypeEnum.MOUSE_PRESS,
      button: 2,
      buttons: 2
    }, {
      type: EventTypeEnum.MOUSE_RELEASE,
      button: 2,
      buttons: 0
    }, {
      type: EventTypeEnum.MOUSE_LEAVE
    }];
    rightClickEvents.forEach(eventConfig => {
      sendMouseEvent({
        ...eventConfig,
        x: position.x,
        y: position.y,
        modifierKeys,
        pointerType,
        timeStamp: timestamp
      });
    });
  }

  /**
   * Creates a state machine for handling pinch/pan gestures with two touch points
   * @param initialTouchSummary - Initial touch summary when gesture started
   * @returns State machine object with next() method
   */
  function createPinchPanGestureState(initialTouchSummary: any) {
    let previousSummary = initialTouchSummary;
    let isScalingActive = false;
    return {
      next(currentEvent: any) {
        pointerTracker.handleEvent(currentEvent);
        if (pointerTracker.get().length === 0) {
          // End scaling gesture if it was active
          if (isScalingActive) {
            sendMouseEvent({
              type: EventTypeEnum.MOUSE_SCALE_END,
              x: previousSummary.x,
              y: previousSummary.y,
              pointerType: mapPointerEventType(currentEvent),
              timeStamp: currentEvent.timeStamp
            });
          }
          return null;
        }
        const currentSummary = summarizeTouchPoints(pointerTracker.get());
        if (currentSummary.count === previousSummary.count) {
          const gestureDistance = calculatePinchGestureDistance(previousSummary, currentSummary);

          // Activate scaling if magnification threshold is met
          if (!isScalingActive) {
            const {
              magnification
            } = calculatePinchGestureDistance(initialTouchSummary, currentSummary);
            if (!isNaN(magnification) && Math.abs(magnification) > 0.2) {
              isScalingActive = true;
              gestureDistance.magnification = magnification;
            }
          }

          // Handle panning (translation)
          if (gestureDistance.x || gestureDistance.y) {
            const devicePixelRatio = window.devicePixelRatio || 1;
            const deltaX = gestureDistance.x / devicePixelRatio;
            const deltaY = gestureDistance.y / devicePixelRatio;
            sendMouseEvent({
              type: EventTypeEnum.MOUSE_WHEEL,
              x: currentSummary.x,
              y: currentSummary.y,
              deltaX,
              deltaY,
              pointerType: mapPointerEventType(currentEvent),
              timeStamp: currentEvent.timeStamp
            });
          }

          // Handle scaling (pinch)
          if (isScalingActive && currentSummary.count > 1 && !isNaN(gestureDistance.magnification)) {
            sendMouseEvent({
              type: EventTypeEnum.MOUSE_SCALE,
              x: currentSummary.x,
              y: currentSummary.y,
              gestureValue: gestureDistance.magnification,
              pointerType: mapPointerEventType(currentEvent),
              timeStamp: currentEvent.timeStamp
            });
          }
        }
        previousSummary = currentSummary;
        return this;
      }
    };
  }

  /**
   * Creates a state machine for handling single-touch drag events
   * @param initialEvent - The initial touch event
   * @param eventHistory - Array of events that occurred before drag started
   * @returns State machine object with next() method
   */
  function createSingleTouchDragState(initialEvent: any, eventHistory: any[]) {
    let currentPosition = getRelativePosition(initialEvent);
    const clickCount = clickTracker.getClickCount(currentPosition.x, currentPosition.y);
    const pointerType = mapPointerEventType(initialEvent);
    let currentTimestamp = initialEvent.timeStamp;

    /**
     * Processes touch move events and updates position
     * @param touchEvent - Touch event to process
     */
    function processTouchMove(touchEvent: any): void {
      const activePointers = pointerTracker.get();
      for (let i = 0; i < activePointers.length; i++) {
        const pointer = activePointers[i];
        if (pointer.pointerId === initialEvent.pointerId) {
          currentPosition = getRelativePosition(pointer);
          currentTimestamp = touchEvent.timeStamp;
          sendMouseEvent({
            type: EventTypeEnum.MOUSE_MOVE,
            x: currentPosition.x,
            y: currentPosition.y,
            modifierKeys: extractModifierKeys(touchEvent),
            pointerType: mapPointerEventType(pointer),
            timeStamp: currentTimestamp
          });
          break;
        }
      }
    }

    // Send initial mouse events
    sendMouseEvent({
      type: EventTypeEnum.MOUSE_ENTER,
      x: currentPosition.x,
      y: currentPosition.y,
      modifierKeys: extractModifierKeys(initialEvent),
      pointerType,
      timeStamp: currentTimestamp
    });
    sendMouseEvent({
      type: EventTypeEnum.MOUSE_PRESS,
      x: currentPosition.x,
      y: currentPosition.y,
      clickCount,
      modifierKeys: extractModifierKeys(initialEvent),
      pointerType,
      timeStamp: currentTimestamp
    });

    // Process any queued events
    eventHistory.forEach(processTouchMove);
    return {
      next(nextEvent: any) {
        pointerTracker.handleEvent(nextEvent);
        if (pointerTracker.get().length === 0) {
          // End drag sequence
          sendMouseEvent({
            type: EventTypeEnum.MOUSE_RELEASE,
            x: currentPosition.x,
            y: currentPosition.y,
            clickCount,
            modifierKeys: extractModifierKeys(nextEvent),
            pointerType: mapPointerEventType(nextEvent),
            timeStamp: nextEvent.timeStamp
          });
          sendMouseEvent({
            type: EventTypeEnum.MOUSE_LEAVE,
            x: currentPosition.x,
            y: currentPosition.y,
            modifierKeys: extractModifierKeys(nextEvent),
            pointerType: mapPointerEventType(nextEvent),
            timeStamp: nextEvent.timeStamp
          });
          return null;
        }
        processTouchMove(nextEvent);
        return this;
      }
    };
  }

  /**
   * Creates the main touch state machine for handling touch events
   * Manages the initial touch detection and routing to appropriate handlers
   * @returns State machine object with next() method
   */
  function createTouchStateMachine() {
    let initialEvent: any = null;
    let eventHistory: any[] = [];
    return {
      next(currentEvent: any) {
        // Set initial event on first touch
        if (!initialEvent) {
          initialEvent = currentEvent;
        }
        pointerTracker.handleEvent(currentEvent);

        // Ignore events with more than 2 touches
        if (pointerTracker.maxTouchCount() > 2) {
          return null;
        }
        const currentTouchCount = pointerTracker.get().length;

        // Handle touch end scenarios
        if (currentTouchCount === 0) {
          if (currentEvent.type === 'pointercancel') {
            return null;
          }
          const touchDuration = currentEvent.timeStamp - initialEvent.timeStamp;

          // Long press becomes right-click
          if (touchDuration > 500) {
            simulateRightClickFromTouch(currentEvent);
            return null;
          }

          // Short press becomes drag
          return createSingleTouchDragState(initialEvent, eventHistory).next(currentEvent);
        }

        // Handle two-finger gestures
        if (currentTouchCount === 2) {
          return createPinchPanGestureState(summarizeTouchPoints(pointerTracker.get()));
        }

        // Handle single finger movement detection
        const firstTouch = pointerTracker.get()[0];
        const deltaX = firstTouch.pageX - initialEvent.pageX;
        const deltaY = firstTouch.pageY - initialEvent.pageY;
        const movementThreshold = 25;
        if (deltaX * deltaX + deltaY * deltaY > movementThreshold) {
          // Movement detected, start drag
          return createSingleTouchDragState(initialEvent, eventHistory).next(currentEvent);
        }

        // Still within threshold, queue event
        eventHistory.push(currentEvent);
        return this;
      }
    };
  }

  /**
   * Creates a native gesture handler that queues events and delegates to touch state machine
   * Used when allowNativeGestures is true
   * @returns Native gesture handler state machine
   */
  function createNativeGestureHandler() {
    const nativePointerTracker = new PointerEventTracker();
    let eventQueue: any[] = [];
    let isProcessingGesture = false;

    /**
     * Creates and processes queued events through touch state machine
     * @returns New touch state machine with processed events
     */
    function createAndProcessStateMachine() {
      let stateMachine = createTouchStateMachine();
      eventQueue.forEach(event => {
        if (stateMachine) {
          stateMachine = stateMachine.next(event);
        }
      });
      return stateMachine;
    }
    return {
      next(pointerEvent: any) {
        nativePointerTracker.handleEvent(pointerEvent);
        eventQueue.push(pointerEvent);

        // Check if gesture should be processed
        const shouldProcess = nativePointerTracker.maxTouchCount() > 2;
        if (shouldProcess) {
          return null;
        }
        const hasActiveTouches = nativePointerTracker.get().length !== 0;
        const isSingleTouch = nativePointerTracker.maxTouchCount() === 1;
        if (!isProcessingGesture && (!hasActiveTouches || !isSingleTouch)) {
          isProcessingGesture = true;
        }
        return isProcessingGesture ? createAndProcessStateMachine() : this;
      },
      allow(shouldAllow: boolean) {
        return shouldAllow ? createAndProcessStateMachine() : null;
      }
    };
  }

  // Return appropriate handler based on native gesture support
  return allowNativeGestures ? createNativeGestureHandler() : createTouchStateMachine();
}
let U = new Set(['date', 'datetime-local', 'email', 'month', 'number', 'password', 'search', 'tel', 'text', 'week']);
/**
 * Checks if a keyboard event represents an activation key (Enter or Space)
 * Used to determine if an element should be activated by keyboard
 * @param keyboardEvent - The keyboard event to check
 * @returns True if the key is Enter or Space
 */
function isActivationKey(keyboardEvent: KeyboardEvent): boolean {
  const keyCode = keyboardEvent.keyCode;
  return keyCode === KeyCodes.ENTER || keyCode === KeyCodes.SPACE;
}
export function UpdateVisibilityStatus() {
  let e = !document.hidden;
  HTMLWindow?.setIsActive(e);
}
/**
 * Creates a wrapper function that only executes the handler when fullscreen is active
 * Used to conditionally handle events based on fullscreen state
 * @param eventHandler - The event handler to wrap
 * @returns Wrapped handler that checks fullscreen state
 */
function wrapFullscreenEventHandler<T extends Event>(eventHandler: (event: T) => void) {
  return (event: T) => {
    if (isFullscreenActive()) return eventHandler(event);
  };
}
/**
 * Checks if the fullscreen mode is currently active
 * @returns True if fullscreen root element exists and is visible
 */
function isFullscreenActive(): boolean {
  const fullscreenRoot = document.getElementById('fullscreen-root');
  return fullscreenRoot != null && fullscreenRoot.style.visibility !== 'hidden';
}
/**
 * Creates a wrapper function that only executes when fullscreen or debug mode is active
 * Used for event handlers that should work in both fullscreen and debug modes
 * @param eventHandler - The event handler to wrap
 * @returns Wrapped handler that checks fullscreen or debug state
 */
function wrapDebugFullscreenEventHandler<T extends Event>(eventHandler: (event: T) => void) {
  return (event: T) => {
    if (isFullscreenActive() || isDebugSelectedFigmakeFullscreen()) return eventHandler(event);
  };
}
/**
 * Main event management class for fullscreen mode
 * Handles mouse, keyboard, touch, and clipboard events in the fullscreen editor
 */
class FullscreenEventManager {
  pendingViewHandle: any = null;
  lastViewHandleWithFocus: any = null;
  currentViewHandleWithFocus: any = null;
  canvasViewHandle: any = null;
  touchState: any = null;
  pointerState: any = null;
  lastGestureScale: number = 0;
  lastCompositionInputEvent: string | null = null;
  isComposing: boolean = false;
  previousComposition: string | null = null;
  simulatedPreviousComposition: string | null = null;
  lastCompositionEndValue: string | null = null;
  isHandlingDoubleInputForMicrosoftIMEFix: boolean = false;
  isHandlingBackspaceKeyForIPadKoreanInputFix: boolean = false;
  lastKeydown: string | null = null;
  lastKeydownEventAccepted: boolean = false;
  lastKeydownEventForwarded: boolean = false;
  lastAltKeyWasRight: boolean = false;
  lastMousedownButtonsForContextmenu: number | null = null;
  isLastKeydownUnreleased: boolean = false;
  middleButtonPressedLast: boolean = false;
  rightButtonPressedLast: boolean = false;
  fullscreenExpectsMouseReleaseEvent: boolean = false;
  hasReportedTouchStart: boolean = false;
  oldX: number = 0;
  oldY: number = 0;
  oldTime: number = 0;
  oldCount: number = 1;
  clipboardDataTransfer: DataTransfer | null = null;
  cppAPI: any;
  viewElement: HTMLElement;
  rootElement: HTMLDivElement;
  onResize: () => void;
  markKeydownEventForwarded: () => void;
  constructor(viewElement: HTMLElement, cppAPI: any) {
    // Initialize instance properties
    this.initializeProperties(cppAPI, viewElement);

    // Create and setup root element
    this.setupRootElement(viewElement);

    // Setup event listeners
    this.setupFocusEventListeners();
    this.setupDragEventListeners();
    this.setupWindowFocusEventListeners();
    this.setupContextMenuEventListeners();
    this.setupKeyboardEventListeners();
    this.setupWheelEventListeners();
    this.setupPointerAndTouchEventListeners();
    this.setupClipboardAndDropEvents();

    // Setup resize and visibility listeners
    this.setupResizeAndVisibilityListeners();
  }

  /**
   * Initializes all instance properties
   * @param cppAPI - The C++ API instance
   * @param viewElement - The view HTML element
   */
  private initializeProperties(cppAPI: any, viewElement: HTMLElement): void {
    this.pendingViewHandle = null;
    this.lastViewHandleWithFocus = null;
    this.currentViewHandleWithFocus = null;
    this.canvasViewHandle = null;
    this.touchState = null;
    this.pointerState = null;
    this.lastGestureScale = 0;
    this.lastCompositionInputEvent = null;
    this.isComposing = false;
    this.previousComposition = null;
    this.simulatedPreviousComposition = null;
    this.lastCompositionEndValue = null;
    this.isHandlingDoubleInputForMicrosoftIMEFix = false;
    this.isHandlingBackspaceKeyForIPadKoreanInputFix = false;
    this.lastKeydown = null;
    this.lastKeydownEventAccepted = false;
    this.lastKeydownEventForwarded = false;
    this.lastAltKeyWasRight = false;
    this.lastMousedownButtonsForContextmenu = null;
    this.isLastKeydownUnreleased = false;
    this.middleButtonPressedLast = false;
    this.rightButtonPressedLast = false;
    this.fullscreenExpectsMouseReleaseEvent = false;
    this.hasReportedTouchStart = false;
    this.oldX = 0;
    this.oldY = 0;
    this.oldTime = 0;
    this.oldCount = 1;
    this.clipboardDataTransfer = null;
    this.cppAPI = cppAPI;
    this.viewElement = viewElement;
    this.onResize = () => {
      this.cppAPI.updateSize(this.viewElement.clientWidth, this.viewElement.clientHeight);
    };
    this.markKeydownEventForwarded = () => {
      this.lastKeydownEventForwarded = true;
    };
  }

  /**
   * Creates and configures the root element
   * @param viewElement - The view HTML element to append
   */
  private setupRootElement(viewElement: HTMLElement): void {
    this.rootElement = document.createElement('div');
    this.rootElement.id = 'fullscreen-root';
    this.rootElement.appendChild(viewElement);
    this.rootElement.style.visibility = 'hidden';
    document.body.appendChild(this.rootElement);
  }

  /**
   * Sets up focus event listeners for intercept elements
   */
  private setupFocusEventListeners(): void {
    document.addEventListener('focus', (e: FocusEvent) => {
      const target = e.target instanceof HTMLElement ? e.target : null;
      if (target && this.isInterceptElement(target)) {
        target.classList.add('focus-target');
      }
    }, true);
  }

  /**
   * Checks if an element is an intercept element
   * @param element - The element to check
   * @returns True if the element has intercept attributes
   */
  private isInterceptElement(element: HTMLElement): boolean {
    return !!(element.getAttribute('data-fullscreen-intercept') || element.getAttribute('data-fullscreen-intercept-dangerously-include-tab'));
  }

  /**
   * Sets up drag event listeners to prevent default behavior
   */
  private setupDragEventListeners(): void {
    this.viewElement.addEventListener('dragenter', wrapFullscreenEventHandler(preventDefault));
    this.viewElement.addEventListener('dragover', wrapFullscreenEventHandler(preventDefault));
  }

  /**
   * Sets up window focus and blur event listeners
   */
  private setupWindowFocusEventListeners(): void {
    window.addEventListener('focus', wrapFullscreenEventHandler(() => {
      if (this.lastViewHandleWithFocus !== null) {
        if (getFeatureFlags().a11y_design_dom_mirror) {
          this.cppAPI.focusEvent(EventTypeEnum.APP_FOCUS_GAINED, this.lastViewHandleWithFocus);
        }
        this.focusView(this.lastViewHandleWithFocus, true);
      }
    }));
    window.addEventListener('blur', wrapFullscreenEventHandler(() => {
      if (getFeatureFlags().a11y_design_dom_mirror && this.lastViewHandleWithFocus !== null) {
        this.cppAPI.focusEvent(EventTypeEnum.APP_FOCUS_LOST, this.lastViewHandleWithFocus);
      }
    }));
  }

  /**
   * Sets up context menu event listeners
   */
  private setupContextMenuEventListeners(): void {
    this.viewElement.addEventListener('contextmenu', wrapFullscreenEventHandler((contextMenuEvent: Event) => {
      if (isTextInputElement(contextMenuEvent.target as HTMLInputElement)) {
        this.fullscreenExpectsMouseReleaseEvent = false;
        this.mouseEvent(contextMenuEvent as MouseEvent, EventTypeEnum.MOUSE_RELEASE);
        return;
      }
      contextMenuEvent.preventDefault();
    }));
    window.addEventListener('contextmenu', wrapFullscreenEventHandler((e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const shouldIgnore = this.lastMousedownButtonsForContextmenu == null || this.lastMousedownButtonsForContextmenu <= 0;
      const isOwnedOrIntercept = this.isElementOwnedByFullscreen(target) || target && target.dataset && target.getAttribute('data-fullscreen-intercept-dangerously-include-tab');
      if (!shouldIgnore || !isOwnedOrIntercept) {
        return;
      }
      const position = getRelativeEventPosition(e, this.viewElement);
      const viewHandle = this.viewHandleFromElement(e.target as Element);
      const timestamp = performance.now();
      this.cppAPI.contextMenuEvent(EventTypeEnum.MOUSE_PRESS, viewHandle, position.x, position.y, position.preciseX, position.preciseY, 2, 2, 1, this.modifierKeys(e), 0, 0, 0, PointerType.MOUSE, 1, timestamp);
      this.cppAPI.contextMenuEvent(EventTypeEnum.MOUSE_RELEASE, viewHandle, position.x, position.y, position.preciseX, position.preciseY, 2, 0, 1, this.modifierKeys(e), 0, 0, 0, PointerType.MOUSE, 1, timestamp);
      this.fullscreenExpectsMouseReleaseEvent = false;
      this.lastMousedownButtonsForContextmenu = null;
      e.preventDefault();
    }));
  }

  /**
   * Sets up keyboard event listeners
   */
  private setupKeyboardEventListeners(): void {
    document.addEventListener('keydown', wrapDebugFullscreenEventHandler((e: KeyboardEvent) => {
      this.isHandlingDoubleInputForMicrosoftIMEFix = false;
      this.lastKeydownEventAccepted = false;
      this.lastKeydownEventForwarded = false;
      if (isDebugSelectedFigmakeFullscreen()) {
        if (isTextInputElement(e.target as HTMLInputElement)) {
          return;
        }
        const isMac = browserCapabilities.isMac();
        const isUndo = (isMac ? e.metaKey : e.ctrlKey) && e.key.toLowerCase() === 'z' && !e.shiftKey;
        const isRedo = (isMac ? e.metaKey : e.ctrlKey) && e.key.toLowerCase() === 'z' && e.shiftKey;
        if (isUndo || isRedo) {
          e.preventDefault();
          fullscreenValue.triggerAction(isUndo ? 'undo' : 'redo');
          this.lastKeydownEventAccepted = true;
          return;
        }
      }
      if (!KeyboardFocusManager.shouldInterceptKeyboardEvent(e) && ((isZoomKeyboardCommand(e) || isFileOpenKeyboardCommand(e)) && e.preventDefault(), !this.shouldIgnoreKeyboardEvent(e))) {
        try {
          const modifierKeys = this.modifierKeys(e);
          if (e.which === 18) {
            this.lastAltKeyWasRight = e.location === 2;
          }
          if (!isTextInputElement(e.target as HTMLInputElement) || e.which !== 8) {
            e.preventDefault();
          }
          const isTabInInput = isTextInputElement(e.target as HTMLInputElement) && e.which === 9 && (!modifierKeys || modifierKeys === IL);
          const viewHandle = this.viewHandleFromElement(e.target as Element);
          const isRepeat = e.repeat;
          this.lastKeydown = e.key;
          this.lastKeydownEventForwarded = true;
          this.isLastKeydownUnreleased = true;
          if (this.cppAPI.keyboardEvent(EventTypeEnum.KEY_PRESS, viewHandle, e.which, modifierKeys, isRepeat, e.code, hasKeyboardLayoutDetection(), getCurrentKeyboardLayout())) {
            this.lastKeydownEventAccepted = true;
            if (e.which === 8 && browserCapabilities.isIpad()) {
              this.isHandlingBackspaceKeyForIPadKoreanInputFix = true;
            } else {
              e.preventDefault();
            }
          } else if (isTabInInput) {
            this.cppAPI.focusViewInTabOrder(viewHandle, e.shiftKey ? PageNavigation.PREVIOUS : PageNavigation.NEXT);
            this.lastKeydownEventAccepted = true;
            e.preventDefault();
          }
        } catch {
          e.preventDefault();
        }
      }
    }), true);
    document.addEventListener('keyup', wrapFullscreenEventHandler((e: KeyboardEvent) => {
      if (e.which === 8 && browserCapabilities.isIpad()) {
        this.isHandlingBackspaceKeyForIPadKoreanInputFix = false;
      }
      if (KeyboardFocusManager.shouldInterceptKeyboardEvent(e) || ((isZoomKeyboardCommand(e) || isFileOpenKeyboardCommand(e)) && e.preventDefault(), !this.isLastKeydownUnreleased && this.shouldIgnoreKeyboardEvent(e))) {
        return;
      }
      if (!e.isComposing) {
        this.lastKeydown = null;
      }
      const viewHandle = this.viewHandleFromElement(e.target as Element);
      this.isLastKeydownUnreleased = false;
      if (this.cppAPI.keyboardEvent(EventTypeEnum.KEY_RELEASE, viewHandle, e.which, this.modifierKeys(e), false, e.code, hasKeyboardLayoutDetection(), getCurrentKeyboardLayout())) {
        e.preventDefault();
      }
    }), true);
    document.addEventListener('keydown', wrapFullscreenEventHandler((e: KeyboardEvent) => {
      if (!(shouldPreventKeyboardCapture(e) || this.lastKeydownEventForwarded || this.isElementOwnedByFullscreen(e.target) || e.code === 'Tab' || !(e.target instanceof HTMLElement) || !e.target.closest('[data-fpl-component],[data-fullscreen-bubble-phase]') || this.shouldAllowKeyboardEvent(e))) {
        const viewHandle = this.viewHandleFromElement(e.target as Element);
        if (this.cppAPI.keyboardEvent(EventTypeEnum.KEY_PRESS, viewHandle, e.which, this.modifierKeys(e), e.repeat, e.code, hasKeyboardLayoutDetection(), getCurrentKeyboardLayout())) {
          this.lastKeydownEventAccepted = true;
          e.preventDefault();
        }
      }
    }));
  }

  /**
   * Determines if a keyboard event should be allowed to bubble
   * @param e - The keyboard event
   * @returns True if the event should be allowed
   */
  private shouldAllowKeyboardEvent(e: KeyboardEvent): boolean {
    if (isEventProcessed(e)) {
      return false;
    }
    if (e.keyCode === KeyCodes.TAB) {
      return true;
    }
    const target = e.target as HTMLInputElement | HTMLTextAreaElement | HTMLAnchorElement;
    if (!(target instanceof HTMLElement)) {
      return false;
    }
    if (isNavigationKey(e.keyCode)) {
      const scrollElement = target.closest('[data-fpl-scroll-y]');
      if (scrollElement && scrollElement.getAttribute('data-fpl-scroll-y') !== 'none') {
        return true;
      }
    }
    if (target.isContentEditable) {
      return shouldIgnoreKeyEvent(e);
    }
    const tagName = target.tagName;
    switch (tagName) {
      case 'INPUT':
      case 'TEXTAREA':
        {
          if ((target as HTMLInputElement).readOnly) {
            return isCommandEvent(e) && e.keyCode === KeyCodes.A;
          }
          if (tagName === 'TEXTAREA' || tagName === 'INPUT' && U.has((target as HTMLInputElement).type)) {
            return shouldIgnoreKeyEvent(e);
          }
          const inputType = (target as HTMLInputElement).type;
          if (inputType === 'checkbox' || inputType === 'submit') {
            return isActivationKey(e);
          }
          if (inputType === 'radio') {
            return isActivationKey(e) || isArrowKey(e.keyCode);
          }
          return true;
        }
      case 'BUTTON':
      case 'SUMMARY':
        return isActivationKey(e);
      case 'SELECT':
        return true;
      case 'A':
        return !!(target as HTMLAnchorElement).href && e.keyCode === KeyCodes.ENTER;
      default:
        return false;
    }
  }

  /**
   * Sets up wheel event listeners
   */
  private setupWheelEventListeners(): void {
    if (!window.PointerEvent) {
      trackEventAnalytics('No PointerEvent available');
    }
    let wheelDeltaX = 0;
    let wheelDeltaY = 0;
    let lastWheelTime = 0;
    let lastWheelSignX = 0;
    let lastWheelSignY = 0;
    let wheelMultiplier = 0;
    document.addEventListener('wheel', wrapFullscreenEventHandler((e: WheelEvent) => {
      if (e.ctrlKey || e.metaKey) {
        e.preventDefault();
      }
      if (this.shouldIgnoreMouseEvent(e)) {
        return;
      }
      let deltaX = e.deltaX;
      let deltaY = e.deltaY;
      const isPageMode = e.deltaMode !== 0;
      if (!browserCapabilities.isMac() && e.shiftKey) {
        const temp = deltaY;
        deltaY = deltaX;
        deltaX = temp;
      }
      if ('wheelDeltaY' in e) {
        const wheelEvent = e as WheelEvent & {
          wheelDeltaX?: number;
          wheelDeltaY?: number;
        };
        wheelDeltaX = wheelEvent.wheelDeltaX || 0;
        wheelDeltaY = wheelEvent.wheelDeltaY || 0;
        if (!browserCapabilities.isMac() && e.shiftKey) {
          const temp = wheelDeltaY;
          wheelDeltaY = wheelDeltaX;
          wheelDeltaX = temp;
        }
      }
      deltaX = -deltaX;
      deltaY = -deltaY;
      let isTrackpad = !e.ctrlKey;
      const isNonInteger = !Number.isInteger(deltaX) || !Number.isInteger(deltaY);
      if (browserCapabilities.isIpad()) {
        isTrackpad = true;
      } else if (browserCapabilities.isSafari() || browserCapabilities.isChrome()) {
        isTrackpad = !isNonInteger;
      } else if (browserCapabilities.isFirefox()) {
        isTrackpad = !isNonInteger && deltaY % 16 !== 0;
        if (deltaX !== 0 && deltaY !== 0) {
          isTrackpad = true;
        }
      }
      const devicePixelRatio = window.devicePixelRatio || 1;
      if (browserCapabilities.isChromePre118()) {
        deltaX /= devicePixelRatio;
        deltaY /= devicePixelRatio;
        wheelDeltaX /= devicePixelRatio;
        wheelDeltaY /= devicePixelRatio;
      }
      if (browserCapabilities.isIpad()) {
        deltaX /= devicePixelRatio;
        deltaY /= devicePixelRatio;
      }
      if (browserCapabilities.isChromeOS()) {
        if (e.ctrlKey && wheelDeltaY % 120 === 0) {
          deltaY *= 5;
        }
      } else if (browserCapabilities.isWindows() && (fullscreenValue.pinchZoomFixDisabled() || !isNonInteger)) {
        let shouldAdjustDelta = false;
        if (browserCapabilities.isChrome()) {
          deltaX = wheelDeltaX;
          deltaY = wheelDeltaY;
          shouldAdjustDelta = true;
        } else if (browserCapabilities.isFirefox() && isPageMode) {
          deltaX *= 40;
          deltaY *= 40;
          shouldAdjustDelta = true;
        }
        if (shouldAdjustDelta && (Math.abs(deltaX) >= 99 || Math.abs(deltaY) >= 99)) {
          deltaX /= 120;
          deltaY /= 120;
          const currentTime = e.timeStamp / 1000;
          const signX = Math.sign(deltaX);
          const signY = Math.sign(deltaY);
          let multiplier = 8;
          if (currentTime - lastWheelTime < 0.05 && signX === lastWheelSignX && signY === lastWheelSignY) {
            multiplier = 2.5 * wheelMultiplier;
          }
          deltaX *= multiplier;
          deltaY *= multiplier;
          const maxDelta = e.ctrlKey ? 40 : 120;
          const deltaSquared = deltaX * deltaX + deltaY * deltaY;
          if (deltaSquared > maxDelta * maxDelta) {
            const scale = maxDelta / Math.sqrt(deltaSquared);
            deltaX *= scale;
            deltaY *= scale;
          }
          wheelMultiplier = multiplier;
          lastWheelTime = currentTime;
          lastWheelSignX = signX;
          lastWheelSignY = signY;
        }
      }
      const position = getRelativeEventPosition(e, this.viewElement);
      if (this.cppAPI.mouseEvent(EventTypeEnum.MOUSE_WHEEL, position.x, position.y, e.button, e.buttons, 0, this.modifierKeys(e), deltaX, deltaY, 0, isTrackpad ? PointerType.TRACKPAD : PointerType.MOUSE, -1, e.timeStamp, -1)) {
        e.preventDefault();
      }
    }), {
      passive: false
    });
  }

  /**
   * Sets up pointer and touch event listeners
   */
  private setupPointerAndTouchEventListeners(): void {
    if (browserCapabilities.isIpadNative()) {
      this.setupIPadSideChannelEvents();
    }
    if (windowManagerInstance.usingMultiTouchPointerEvents()) {
      this.setupMultiTouchPointerEvents();
    } else if (browserCapabilities.isIpad()) {
      this.setupLowLevelPointerEvents();
    } else {
      this.setupStandardPointerEvents();
    }
  }

  /**
   * Sets up standard pointer events for non-iPad devices
   */
  private setupStandardPointerEvents(): void {
    const supportsPressure = window.PointerEvent && getFeatureFlags().ce_il_pressure_sensitivity && !isMobileUA;
    const clickTracker = new ClickCountTracker();
    const createTouchHandler = () => {
      const figmaMobile = window.FigmaMobile;
      return setupMultiTouchPointerHandler(this.cppAPI.mouseEvent, this.viewElement, clickTracker, !!figmaMobile?.shouldAllowNativeGestures, ty());
    };
    this.viewElement.addEventListener(supportsPressure ? 'pointerdown' : 'mousedown', wrapFullscreenEventHandler((e: PointerEvent | MouseEvent) => {
      this.middleButtonPressedLast = hasMiddleButtonPressed(e as MouseEvent);
      this.rightButtonPressedLast = hasRightButtonPressed(e as MouseEvent);
      if (this.middleButtonPressedLast || this.rightButtonPressedLast) {
        updatePointerEventState(true);
      }
      this.cppAPI.setIsUsingTouchEvents(false);
      if (!this.shouldIgnoreMouseEvent(e as MouseEvent)) {
        this.fullscreenExpectsMouseReleaseEvent = true;
        this.lastMousedownButtonsForContextmenu = (e as MouseEvent).buttons;
        this.mouseEvent(e as MouseEvent, EventTypeEnum.MOUSE_PRESS, createTouchHandler);
      }
    }));
    const handleMouseRelease = (e: PointerEvent | MouseEvent, button: number) => {
      const position = getRelativeEventPosition(e as MouseEvent, this.viewElement);
      if (this.cppAPI.preciseMouseEvent(EventTypeEnum.MOUSE_RELEASE, position.x, position.y, position.preciseX, position.preciseY, button, (e as MouseEvent).buttons, 1, this.modifierKeys(e as MouseEvent), 0, 0, 0, PointerType.MOUSE, -1, e.timeStamp, -1)) {
        e.preventDefault();
      }
    };
    document.addEventListener(supportsPressure ? 'pointerenter' : 'mouseenter', wrapFullscreenEventHandler((e: PointerEvent | MouseEvent) => {
      if (browserCapabilities.isChrome() && !hasMiddleButtonPressed(e as MouseEvent) && this.middleButtonPressedLast) {
        handleMouseRelease(e, 1);
      }
      if (browserCapabilities.isChrome() && !hasRightButtonPressed(e as MouseEvent) && this.rightButtonPressedLast) {
        handleMouseRelease(e, 2);
      }
    }));
    document.addEventListener(supportsPressure ? 'pointermove' : 'mousemove', wrapFullscreenEventHandler((e: PointerEvent | MouseEvent) => {
      this.cppAPI.setIsUsingTouchEvents(false);
      if (!this.shouldIgnoreMouseEvent(e as MouseEvent)) {
        this.mouseEvent(e as MouseEvent, EventTypeEnum.MOUSE_MOVE);
      }
    }), true);
    this.viewElement.addEventListener(supportsPressure ? 'pointerleave' : 'mouseout', wrapFullscreenEventHandler((e: PointerEvent | MouseEvent) => {
      this.mouseEvent(e as MouseEvent, EventTypeEnum.MOUSE_LEAVE);
    }));
    document.addEventListener(supportsPressure ? 'pointerup' : 'mouseup', wrapFullscreenEventHandler((e: PointerEvent | MouseEvent) => {
      if (this.middleButtonPressedLast || this.rightButtonPressedLast) {
        updatePointerEventState(false);
      }
      this.middleButtonPressedLast = hasMiddleButtonPressed(e as MouseEvent);
      this.rightButtonPressedLast = hasRightButtonPressed(e as MouseEvent);
      this.cppAPI.setIsUsingTouchEvents(false);
      if (!this.shouldIgnoreMouseEvent(e as MouseEvent)) {
        this.fullscreenExpectsMouseReleaseEvent = false;
        if (!(this.lastMousedownButtonsForContextmenu === 2 && (e as MouseEvent).button === 2 && (e as MouseEvent).buttons === 0)) {
          this.lastMousedownButtonsForContextmenu = null;
        }
        this.mouseEvent(e as MouseEvent, EventTypeEnum.MOUSE_RELEASE);
      }
    }), true);
    this.setupGestureEvents();
    this.viewElement.addEventListener('touchstart', wrapFullscreenEventHandler((e: TouchEvent) => {
      this.cppAPI.setIsUsingTouchEvents(true);
      e.preventDefault();
      this.touchState = (this.touchState || this.createInitialTouchState()).next(e);
      this.reportTouchStart();
    }), {
      passive: false
    });
    document.addEventListener('touchmove', wrapFullscreenEventHandler((e: TouchEvent) => {
      this.cppAPI.setIsUsingTouchEvents(true);
      if (this.touchState) {
        e.preventDefault();
        this.touchState = this.touchState.next(e);
      }
    }), {
      passive: false
    });
    document.addEventListener('touchend', wrapFullscreenEventHandler((e: TouchEvent) => {
      this.cppAPI.setIsUsingTouchEvents(true);
      if (this.touchState) {
        e.preventDefault();
        this.touchState = this.touchState.next(e);
      }
    }), {
      passive: false
    });
    document.addEventListener('touchcancel', wrapFullscreenEventHandler((e: TouchEvent) => {
      if (this.touchState) {
        this.touchState = this.touchState.next(e);
      }
    }));
    fullscreenValue.cancelPendingGestures = () => {
      this.touchState = null;
      this.pointerState = null;
    };
  }

  /**
   * Sets up resize and visibility change listeners
   */
  private setupResizeAndVisibilityListeners(): void {
    window.addEventListener('resize', this.onResize);
    UpdateVisibilityStatus();
    document.addEventListener('visibilitychange', UpdateVisibilityStatus);
  }
  destroy() {
    window.removeEventListener('resize', this.onResize);
    document.removeEventListener('visibilitychange', UpdateVisibilityStatus);
  }
  updateSizeAndPixelRatio() {
    this.cppAPI.updateSize(this.viewElement.clientWidth, this.viewElement.clientHeight);
    this.cppAPI.updateDevicePixelRatio(window.devicePixelRatio || 1);
  }

  /**
   * Sets up iPad-specific side channel events for pencil and gesture handling
   * Configures callbacks for Apple Pencil drawing and indirect pinch gestures
   * Original method name: setupIPadSideChannelEvents
   */
  setupIPadSideChannelEvents() {
    // Enum for pencil event states
    const PencilEventState = {
      BEGAN: 0,
      MOVED: 1,
      ENDED: 2,
      CANCELLED: 3,
      MOVED_COALESCED: 4
    } as const;

    // Enum for gesture event states
    const GestureEventState = {
      BEGAN: 0,
      MOVED: 1,
      ENDED: 2,
      CANCELLED: 3
    } as const;
    const viewElement = this.viewElement;

    /**
     * Handles pencil sample events by converting to mouse events
     * @param eventState - The pencil event state
     * @param x - X coordinate
     * @param y - Y coordinate
     * @param modifierKeys - Modifier key flags
     */
    const handlePencilSample = (eventState: number, x: number, y: number, modifierKeys: number) => {
      if (!shouldHandleApplePencilDrawing()) return;

      /**
       * Converts coordinates and sends mouse event
       * @param eventType - The mouse event type to send
       */
      const sendMouseEvent = (eventType: EventTypeEnum) => {
        // Adjust coordinates relative to view element
        let adjustedX = x;
        let adjustedY = y;
        for (let element = viewElement; element !== null; element = element.offsetParent instanceof HTMLElement ? element.offsetParent : null) {
          adjustedX -= element.offsetLeft;
          adjustedY -= element.offsetTop;
        }
        const roundedX = Math.round(adjustedX);
        const roundedY = Math.round(adjustedY);
        const isPress = eventType === EventTypeEnum.MOUSE_PRESS;
        const isRelease = eventType === EventTypeEnum.MOUSE_RELEASE;
        const isClickEvent = isPress || isRelease;
        const button = isClickEvent ? 0 : -1;
        const buttons = isPress ? 1 : 0;
        const clickCount = isClickEvent ? 1 : 0;
        const timestamp = performance.now();
        this.cppAPI.preciseMouseEvent(eventType, roundedX, roundedY, adjustedX, adjustedY, button, buttons, clickCount, modifierKeys, 0, 0, 0, PointerType.STYLUS, -1, timestamp, -1);
      };
      switch (eventState) {
        case PencilEventState.BEGAN:
          this.cppAPI.setIsUsingTouchEvents(false);
          sendMouseEvent(EventTypeEnum.MOUSE_PRESS);
          break;
        case PencilEventState.MOVED:
          this.cppAPI.setIsUsingTouchEvents(false);
          sendMouseEvent(EventTypeEnum.MOUSE_MOVE);
          break;
        case PencilEventState.MOVED_COALESCED:
          this.cppAPI.setIsUsingTouchEvents(false);
          sendMouseEvent(EventTypeEnum.MOUSE_MOVE_COALESCED);
          break;
        case PencilEventState.ENDED:
        case PencilEventState.CANCELLED:
          this.cppAPI.setIsUsingTouchEvents(false);
          sendMouseEvent(EventTypeEnum.MOUSE_RELEASE);
          break;
      }
    };

    /**
     * Handles indirect pinch gesture events
     * @param eventState - The gesture event state
     * @param scale - Current scale value
     * @param x - X coordinate
     * @param y - Y coordinate
     * @param modifierKeys - Modifier key flags
     */
    const handleIndirectPinchGesture = (eventState: number, scale: number, x: number, y: number, modifierKeys: number) => {
      const timestamp = performance.now();

      /**
       * Sends scale event with delta calculation
       */
      const sendScaleEvent = () => {
        const scaleDelta = scale - this.lastGestureScale;
        this.lastGestureScale = scale;
        this.cppAPI.setIsUsingTouchEvents(false);
        this.cppAPI.preciseMouseEvent(EventTypeEnum.MOUSE_SCALE, x, y, x, y, -1, 0, 0, modifierKeys, 0, 0, scaleDelta, PointerType.TRACKPAD, 1, timestamp, -1);
      };
      switch (eventState) {
        case GestureEventState.BEGAN:
          this.lastGestureScale = 1;
          sendScaleEvent();
          break;
        case GestureEventState.MOVED:
          sendScaleEvent();
          break;
        case GestureEventState.ENDED:
        case GestureEventState.CANCELLED:
          this.cppAPI.setIsUsingTouchEvents(false);
          this.cppAPI.preciseMouseEvent(EventTypeEnum.MOUSE_SCALE_END, x, y, x, y, -1, 0, 0, modifierKeys, 0, 0, 0, PointerType.TRACKPAD, 1, timestamp, -1);
          break;
      }
    };

    // Assign callbacks to fullscreen value
    fullscreenValue.takePencilSample = handlePencilSample;
    fullscreenValue.takeIndirectPinchGesture = handleIndirectPinchGesture;
  }

  /**
   * Sets up low-level pointer events for mouse, pen, and touch handling
   * Handles pointer events with appropriate routing based on pointer type
   * Original method name: setupLowLevelPointerEvents
   */
  setupLowLevelPointerEvents() {
    /**
     * Handles mouse press events
     * @param event - Pointer event
     */
    const handleMousePress = (event: PointerEvent) => {
      this.cppAPI.setIsUsingTouchEvents(false);
      if (this.shouldIgnoreMouseEvent(event)) return;
      this.fullscreenExpectsMouseReleaseEvent = true;
      this.mouseEvent(event, EventTypeEnum.MOUSE_PRESS);
    };

    /**
     * Handles mouse move events
     * @param event - Pointer event
     */
    const handleMouseMove = (event: PointerEvent) => {
      this.cppAPI.setIsUsingTouchEvents(false);
      if (this.shouldIgnoreMouseEvent(event)) return;
      this.mouseEvent(event, EventTypeEnum.MOUSE_MOVE);
    };

    /**
     * Handles mouse leave events
     * @param event - Pointer event
     */
    const handleMouseLeave = (event: PointerEvent) => {
      this.mouseEvent(event, EventTypeEnum.MOUSE_LEAVE);
    };

    /**
     * Handles mouse release events
     * @param event - Pointer event
     */
    const handleMouseRelease = (event: PointerEvent) => {
      this.cppAPI.setIsUsingTouchEvents(false);
      if (this.shouldIgnoreMouseEvent(event)) return;
      this.fullscreenExpectsMouseReleaseEvent = false;
      this.mouseEvent(event, EventTypeEnum.MOUSE_RELEASE);
    };

    /**
     * Handles touch press events
     * @param event - Pointer event
     */
    const handleTouchPress = (event: PointerEvent) => {
      this.cppAPI.setIsUsingTouchEvents(true);
      event.preventDefault();
      this.pointerState = (this.pointerState || createMultiTouchHandler()).next(event);
      this.reportTouchStart();
    };

    /**
     * Handles touch move events
     * @param event - Pointer event
     */
    const handleTouchMove = (event: PointerEvent) => {
      this.cppAPI.setIsUsingTouchEvents(true);
      if (this.pointerState) {
        event.preventDefault();
        this.pointerState = this.pointerState.next(event);
      } else {
        if (this.shouldIgnoreEvent(event as any)) return;
        event.preventDefault();
        this.mouseEvent(event, EventTypeEnum.MOUSE_MOVE);
      }
    };

    /**
     * Handles touch release events
     * @param event - Pointer event
     */
    const handleTouchRelease = (event: PointerEvent) => {
      this.cppAPI.setIsUsingTouchEvents(true);
      if (this.pointerState) {
        event.preventDefault();
        this.pointerState = this.pointerState.next(event);
      }
    };

    /**
     * Routes events based on pointer type
     * @param mouseHandler - Handler for mouse events
     * @param touchHandler - Handler for touch events
     * @returns Event handler function
     */
    const createPointerTypeRouter = (mouseHandler?: (event: PointerEvent) => void, touchHandler?: (event: PointerEvent) => void) => {
      return (event: PointerEvent) => {
        if (event.pointerType === 'mouse') {
          mouseHandler?.(event);
        } else if (event.pointerType === 'pen') {
          if (!shouldHandleApplePencilDrawing()) mouseHandler?.(event);
        } else {
          touchHandler?.(event);
        }
      };
    };
    const clickTracker = new ClickCountTracker();

    /**
     * Creates multi-touch pointer handler
     * @returns Handler state machine
     */
    const createMultiTouchHandler = () => {
      const figmaMobile = window.FigmaMobile;
      return setupMultiTouchPointerHandler(this.cppAPI.mouseEvent, this.viewElement, clickTracker, !!figmaMobile?.shouldAllowNativeGestures, ty());
    };
    if (window.PointerEvent) {
      // Pointer event listeners
      this.viewElement.addEventListener('pointerdown', wrapFullscreenEventHandler(createPointerTypeRouter(handleMousePress, handleTouchPress)), {
        passive: false
      });
      document.addEventListener('pointermove', wrapFullscreenEventHandler(createPointerTypeRouter(handleMouseMove, handleTouchMove)), {
        passive: false,
        capture: true
      });
      this.viewElement.addEventListener('pointerout', wrapFullscreenEventHandler(createPointerTypeRouter(handleMouseLeave)), {
        passive: false
      });
      document.addEventListener('pointerup', wrapFullscreenEventHandler(createPointerTypeRouter(handleMouseRelease, handleTouchRelease)), {
        passive: false,
        capture: true
      });
      document.addEventListener('pointercancel', wrapFullscreenEventHandler(event => {
        if (this.pointerState) {
          this.pointerState = this.pointerState.next(event);
        }
      }));
      if (browserCapabilities.isIpad()) {
        this.viewElement.addEventListener('touchmove', preventDefault);
        this.viewElement.addEventListener('touchstart', preventDefault, {
          passive: false
        });
      }
    } else {
      // Fallback to mouse events
      this.viewElement.addEventListener('mousedown', wrapFullscreenEventHandler(handleMousePress), {
        passive: false
      });
      document.addEventListener('mousemove', G(handleMouseMove), {
        passive: false,
        capture: true
      });
      this.viewElement.addEventListener('mouseout', G(handleMouseLeave), {
        passive: false
      });
      document.addEventListener('mouseup', G(handleMouseRelease), {
        passive: false,
        capture: true
      });
    }
    if (!browserCapabilities.isIpad()) {
      this.setupGestureEvents();
    }

    // Gesture control callbacks
    fullscreenValue.allowWebGestures = (allow: boolean) => {
      if (this.pointerState?.allow) {
        this.pointerState = this.pointerState.allow(allow);
      }
    };
    fullscreenValue.cancelPendingGestures = () => {
      this.pointerState = null;
      this.touchState = null;
    };
  }

  /**
   * Sets up multi-touch pointer events with advanced handling
   * Manages pointer capture and routing for multi-touch scenarios
   * Original method name: setupMultiTouchPointerEvents
   */
  setupMultiTouchPointerEvents() {
    const ignoredPointerIds = new Set<number>();

    /**
     * Processes pointer events with capture management
     * @param event - Pointer event
     * @param eventType - Event type enum
     * @param pointerType - Pointer type
     */
    const processPointerEvent = (event: PointerEvent, eventType: EventTypeEnum, pointerType: PointerType) => {
      const pointerId = event.pointerId;
      if (eventType === EventTypeEnum.MOUSE_PRESS && (this.shouldIgnoreEvent(event as any) || pointerType === PointerType.STYLUS && shouldHandleApplePencilDrawing())) {
        ignoredPointerIds.add(pointerId);
        return;
      }
      if (ignoredPointerIds.has(pointerId)) {
        if (eventType === EventTypeEnum.MOUSE_RELEASE || eventType === EventTypeEnum.MOUSE_CANCEL) {
          ignoredPointerIds.delete(pointerId);
        }
        return;
      }

      // Manage pointer capture
      if (eventType === EventTypeEnum.MOUSE_PRESS) {
        this.viewElement.setPointerCapture(pointerId);
      } else if (eventType === EventTypeEnum.MOUSE_RELEASE || eventType === EventTypeEnum.MOUSE_CANCEL) {
        this.viewElement.releasePointerCapture(pointerId);
      }

      // Set touch usage flag
      if ([EventTypeEnum.MOUSE_PRESS, EventTypeEnum.MOUSE_MOVE, EventTypeEnum.MOUSE_RELEASE, EventTypeEnum.MOUSE_CANCEL].includes(eventType)) {
        this.cppAPI.setIsUsingTouchEvents(pointerType === PointerType.TOUCH);
      }
      const clickCount = eventType === EventTypeEnum.MOUSE_PRESS || eventType === EventTypeEnum.MOUSE_RELEASE ? 1 : 0;
      const position = getRelativeEventPosition(event, this.viewElement);
      if (this.cppAPI.preciseMouseEvent(eventType, position.x, position.y, position.preciseX, position.preciseY, event.button, event.buttons, clickCount, this.modifierKeys(event), 0, 0, 0, pointerType, pointerId, event.timeStamp, -1)) {
        event.preventDefault();
      }
      if (pointerType === PointerType.TOUCH && eventType === EventTypeEnum.MOUSE_PRESS) {
        this.reportTouchStart();
      }
    };

    /**
     * Creates event handler for specific event type
     * @param eventType - The event type to handle
     * @returns Event handler function
     */
    const createEventHandler = (eventType: EventTypeEnum) => {
      return (event: PointerEvent) => {
        let pointerType = PointerType.MOUSE;
        if (event.pointerType === 'touch') {
          pointerType = PointerType.TOUCH;
        } else if (event.pointerType === 'pen') {
          pointerType = PointerType.STYLUS;
        }
        processPointerEvent(event, eventType, pointerType);
      };
    };

    // Add event listeners
    this.viewElement.addEventListener('pointerdown', G(createEventHandler(EventTypeEnum.MOUSE_PRESS)), {
      passive: false
    });
    this.viewElement.addEventListener('pointermove', G(createEventHandler(EventTypeEnum.MOUSE_MOVE)), {
      passive: false
    });
    this.viewElement.addEventListener('pointerout', G(createEventHandler(EventTypeEnum.MOUSE_LEAVE)), {
      passive: false
    });
    this.viewElement.addEventListener('pointerup', G(createEventHandler(EventTypeEnum.MOUSE_RELEASE)), {
      passive: false
    });
    document.addEventListener('pointercancel', G(createEventHandler(EventTypeEnum.MOUSE_CANCEL)), {
      passive: false
    });

    // Prevent default touch events
    const preventDefaultTouch = (event: TouchEvent) => {
      if (event.cancelable) event.preventDefault();
    };
    this.viewElement.addEventListener('touchstart', preventDefaultTouch, {
      passive: false
    });
    this.viewElement.addEventListener('touchmove', preventDefaultTouch, {
      passive: false
    });
    this.viewElement.addEventListener('touchend', preventDefaultTouch, {
      passive: false
    });
    this.viewElement.addEventListener('touchcancel', preventDefaultTouch, {
      passive: false
    });
  }

  /**
   * Sets up gesture events for Safari browser
   * Handles gesture start and change events for scaling
   * Original method name: setupGestureEvents
   */
  setupGestureEvents() {
    if (!browserCapabilities.isSafari()) return;

    /**
     * Handles gesture start event
     * @param event - Gesture event
     */
    const handleGestureStart = (event: any) => {
      event.preventDefault();
      this.lastGestureScale = 1;
    };

    /**
     * Handles gesture change event
     * @param event - Gesture event
     */
    const handleGestureChange = (event: any) => {
      event.preventDefault();
      if (!('scale' in event) || event.scale === undefined || isNaN(event.scale) || this.touchState || this.pointerState) return;
      const scaleDelta = event.scale - this.lastGestureScale;
      this.lastGestureScale = event.scale;
      const position = getRelativeEventPosition(event, this.viewElement);
      this.cppAPI.mouseEvent(EventTypeEnum.MOUSE_SCALE, position.x, position.y, -1, 0, 0, this.modifierKeys(event), 0, 0, scaleDelta, PointerType.MOUSE, -1, event.timeStamp, -1);
    };
    document.addEventListener('gesturestart', G(handleGestureStart));
    document.addEventListener('gesturechange', G(handleGestureChange));
  }
  createInitialTouchState() {
    let e;
    let t = Date.now();
    let i = [];
    let n = this;
    return {
      next(r) {
        if (r.touches.length === 0) return r.type === 'touchcancel' ? null : Date.now() - t > 500 ? (n.simulateRightClick(e ?? r), null) : e ? n.createMouseDragTouchState(e, i).next(r) : null;
        if (r.touches.length > 1) return n.createPanZoomTouchState(n.summarizeTouches(r.touches));
        e || (e = r);
        let a = r.touches[0];
        let s = a.pageX - e.touches[0].pageX;
        let o = a.pageY - e.touches[0].pageY;
        return s * s + o * o > 25 ? n.createMouseDragTouchState(e, i).next(r) : (i.push(r), this);
      }
    };
  }
  simulateRightClick(e) {
    let t = getRelativeEventPosition(e.touches[0], this.viewElement);
    let i = this.modifierKeys(e);
    let n = e.timeStamp;
    this.cppAPI.mouseEvent(EventTypeEnum.MOUSE_ENTER, t.x, t.y, -1, 0, 0, i, 0, 0, 0, PointerType.MOUSE, -1, n, -1);
    this.cppAPI.mouseEvent(EventTypeEnum.MOUSE_PRESS, t.x, t.y, 2, 2, 1, i, 0, 0, 0, PointerType.MOUSE, -1, n, -1);
    this.cppAPI.mouseEvent(EventTypeEnum.MOUSE_RELEASE, t.x, t.y, 2, 0, 1, i, 0, 0, 0, PointerType.MOUSE, -1, n, -1);
    this.cppAPI.mouseEvent(EventTypeEnum.MOUSE_LEAVE, t.x, t.y, -1, 0, 0, i, 0, 0, 0, PointerType.MOUSE, -1, n, -1);
  }

  /**
   * Summarizes multiple touch points into center position and spread distance
   * Used for multi-touch gesture calculations (original method name: summarizeTouches)
   * @param touches - Array of touch events
   * @returns Summary with center position, distance, and count
   */
  summarizeTouches = (touches: TouchList) => {
    let totalX = 0;
    let totalY = 0;
    let count = 0;
    let variance = 0;

    // Calculate center position
    for (let i = 0; i < touches.length; i++) {
      const position = getRelativeEventPosition(touches[i], this.viewElement);
      totalX += position.x;
      totalY += position.y;
      count++;
    }
    totalX /= count;
    totalY /= count;

    // Calculate variance for distance measurement
    for (let i = 0; i < touches.length; i++) {
      const position = getRelativeEventPosition(touches[i], this.viewElement);
      variance += (position.x - totalX) ** 2 + (position.y - totalY) ** 2;
    }
    return {
      x: totalX,
      y: totalY,
      distance: Math.sqrt(variance / count),
      count
    };
  };

  /**
   * Creates a state machine for handling single-touch drag events
   * Manages mouse events from touch input (original method name: createMouseDragTouchState)
   * @param initialTouchEvent - The initial touch event
   * @param queuedEvents - Array of events that occurred before drag started
   * @returns State machine object with next() method
   */
  createMouseDragTouchState(initialTouchEvent: TouchEvent, queuedEvents: TouchEvent[]): {
    next: (nextEvent: TouchEvent) => any;
  } {
    const viewElement = this.viewElement;
    const getModifierKeys = this.modifierKeys.bind(this);
    let currentPosition = getRelativeEventPosition(initialTouchEvent.touches[0], viewElement);
    const clickCount = this.simulatedClickCount(true, currentPosition.x, currentPosition.y, 10);
    let currentTimestamp = initialTouchEvent.timeStamp;

    /**
     * Processes touch move events and updates position
     * @param touchEvent - Touch event to process
     */
    const processTouchMove = (touchEvent: TouchEvent): void => {
      for (let i = 0; i < touchEvent.touches.length; i++) {
        const touch = touchEvent.touches[i];
        if (touch.identifier === initialTouchEvent.touches[0].identifier) {
          currentPosition = getRelativeEventPosition(touch, viewElement);
          currentTimestamp = touchEvent.timeStamp;
          this.cppAPI.mouseEvent(EventTypeEnum.MOUSE_MOVE, currentPosition.x, currentPosition.y, -1, 0, 0, getModifierKeys(touchEvent), 0, 0, 0, PointerType.MOUSE, -1, currentTimestamp, -1);
          break;
        }
      }
    };

    // Send initial mouse events
    this.cppAPI.mouseEvent(EventTypeEnum.MOUSE_ENTER, currentPosition.x, currentPosition.y, -1, 0, 0, this.modifierKeys(initialTouchEvent), 0, 0, 0, PointerType.MOUSE, -1, currentTimestamp, -1);
    this.cppAPI.mouseEvent(EventTypeEnum.MOUSE_PRESS, currentPosition.x, currentPosition.y, 0, 1, clickCount, this.modifierKeys(initialTouchEvent), 0, 0, 0, PointerType.MOUSE, -1, currentTimestamp, -1);

    // Process any queued events
    queuedEvents.forEach(processTouchMove);
    return {
      next: (nextEvent: TouchEvent) => {
        if (nextEvent.touches.length === 0) {
          // End drag sequence
          this.cppAPI.mouseEvent(EventTypeEnum.MOUSE_RELEASE, currentPosition.x, currentPosition.y, 0, 0, clickCount, getModifierKeys(nextEvent), 0, 0, 0, PointerType.MOUSE, -1, nextEvent.timeStamp, -1);
          this.cppAPI.mouseEvent(EventTypeEnum.MOUSE_LEAVE, currentPosition.x, currentPosition.y, -1, 0, 0, getModifierKeys(nextEvent), 0, 0, 0, PointerType.MOUSE, -1, nextEvent.timeStamp, -1);
          return null;
        }
        processTouchMove(nextEvent);
        return this;
      }
    };
  }

  /**
   * Creates a state machine for handling pan and zoom gestures with multiple touch points
   * Manages scaling and translation from touch input (original method name: createPanZoomTouchState)
   * @param initialTouchSummary - Initial touch summary when gesture started
   * @returns State machine object with next() method
   */
  createPanZoomTouchState(initialTouchSummary: any): {
    next: (currentEvent: TouchEvent) => any;
  } {
    const cppAPI = this.cppAPI;
    let previousSummary = initialTouchSummary;
    return {
      next: (currentEvent: TouchEvent) => {
        if (currentEvent.touches.length === 0) {
          return null;
        }
        const currentSummary = this.summarizeTouches(currentEvent.touches);
        if (currentSummary.count === previousSummary.count) {
          const scaleFactor = currentSummary.distance / previousSummary.distance;
          const magnification = Fullscreen ? Math.log(scaleFactor) / Math.log(Fullscreen.pinchToZoomExponent()) : NaN;
          const deltaX = currentSummary.x - previousSummary.x;
          const deltaY = currentSummary.y - previousSummary.y;
          const devicePixelRatio = window.devicePixelRatio || 1;
          const adjustedDeltaX = deltaX / devicePixelRatio;
          const adjustedDeltaY = deltaY / devicePixelRatio;

          // Handle panning (translation)
          if (adjustedDeltaX || adjustedDeltaY) {
            cppAPI.mouseEvent(EventTypeEnum.MOUSE_WHEEL, currentSummary.x, currentSummary.y, -1, 0, 0, 0, adjustedDeltaX, adjustedDeltaY, 0, PointerType.TOUCH, -1, currentEvent.timeStamp, -1);
          }

          // Handle scaling (pinch)
          if (currentSummary.count > 1 && !isNaN(magnification)) {
            cppAPI.mouseEvent(EventTypeEnum.MOUSE_SCALE, currentSummary.x, currentSummary.y, -1, 0, 0, 0, 0, 0, magnification, PointerType.TOUCH, -1, currentEvent.timeStamp, -1);
          }
        }
        previousSummary = currentSummary;
        return this;
      }
    };
  }

  /**
   * Reports that touch interaction has started for analytics
   * Tracks the first touch event on the canvas (original method name: reportTouchStart)
   */
  reportTouchStart(): void {
    if (!this.hasReportedTouchStart) {
      this.hasReportedTouchStart = true;
      trackEventAnalytics('Editor Canvas Touch');
    }
  }

  /**
   * Sets focus to a specific view handle and manages DOM focus state
   * Handles focus transitions and prevents unnecessary refocus (original method name: focusView)
   * @param viewHandle - The view handle to focus
   * @param forceFocus - Whether to force focus even if already focused
   */
  focusView(viewHandle: any, forceFocus: boolean): void {
    this.lastViewHandleWithFocus = viewHandle;
    const activeElement = document.activeElement;
    const shouldRefocus = viewHandle && activeElement === document.body;
    if (this.currentViewHandleWithFocus === viewHandle && !shouldRefocus) {
      return;
    }
    const isFocusableElement = activeElement instanceof HTMLElement && (activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA' || activeElement.getAttribute('contenteditable') === 'true' || activeElement.classList.contains('focus-target') && activeElement.dataset && activeElement.getAttribute('data-fullscreen-intercept-dangerously-include-tab'));
    if (forceFocus && document.hasFocus() && isFocusableElement) {
      return;
    }
    const previousViewHandle = this.currentViewHandleWithFocus;
    this.currentViewHandleWithFocus = null;
    this.cppAPI.focusEvent(EventTypeEnum.FOCUS_LOST, previousViewHandle);
    const wasFocusEventDisabled = windowManagerInstance.maybeTemporarilyDisableFocusEvents();
    this.customFocusElementFor(viewHandle)?.focus({
      preventScroll: true
    });
    windowManagerInstance.focusEventBeingCalled = wasFocusEventDisabled;

    // Reset composition state
    this.isComposing = false;
    this.previousComposition = null;
    this.simulatedPreviousComposition = null;
    this.currentViewHandleWithFocus = viewHandle;
    this.cppAPI.focusEvent(EventTypeEnum.FOCUS_GAINED, viewHandle);
  }

  /**
   * Creates and configures custom focus elements for text input handling
   * Sets up read-write and read-only elements with appropriate event listeners
   * @param viewHandle - The view handle to associate with the focus element
   * @returns The appropriate focus element (read-write or read-only) based on input expectations
   */
  customFocusElementFor(viewHandle: any): HTMLElement | null {
    if (windowManagerInstance.customFocusElementReadWrite === null) {
      this.initializeCustomFocusElements();
    }
    this.pendingViewHandle = viewHandle;
    return windowManagerInstance.isExpectingTextInput() ? windowManagerInstance.customFocusElementReadWrite : windowManagerInstance.customFocusElementReadOnly;
  }

  /**
   * Initializes the custom focus elements (read-write and read-only) and sets up their event listeners
   * Handles creation, configuration, and event binding for text input management
   */
  initializeCustomFocusElements(): void {
    this.createCustomFocusElements();
    this.setupKeyboardFocusManagerCallbacks();
    this.attachEventListenersToFocusElements();
    this.cppAPI.setFocusElementsRegistered(true);
  }

  /**
   * Creates the read-write and read-only custom focus elements
   * Configures their properties and appends them to the root element
   */
  createCustomFocusElements(): void {
    const useContentEditable = getFeatureFlags().ce_tv_contenteditable_focus_element;
    const readWriteElement = useContentEditable ? document.createElement('div') : document.createElement('textarea');
    if (useContentEditable) {
      (readWriteElement as HTMLDivElement).contentEditable = 'plaintext-only';
    }
    windowManagerInstance.customFocusElementReadWrite = readWriteElement as HTMLTextAreaElement | HTMLDivElement;
    if (browserCapabilities.isChrome()) {
      if (readWriteElement instanceof HTMLTextAreaElement) {
        readWriteElement.value = generateInvisibleInputText();
      } else {
        readWriteElement.textContent = generateInvisibleInputText();
      }
    }
    readWriteElement.tabIndex = -1;
    readWriteElement.ariaHidden = 'true';
    readWriteElement.setAttribute('spellcheck', 'false');
    readWriteElement.setAttribute('autocorrect', 'off');
    if (readWriteElement instanceof HTMLTextAreaElement) {
      readWriteElement.wrap = 'off';
    }
    windowManagerInstance.customFocusElementReadOnly = document.createElement('input');
    windowManagerInstance.customFocusElementReadOnly.readOnly = true;
    windowManagerInstance.customFocusElementReadOnly.tabIndex = -1;
    windowManagerInstance.customFocusElementReadOnly.ariaHidden = 'true';
    windowManagerInstance.customFocusElementReadOnly.role = 'application';
    windowManagerInstance.customFocusElementReadOnly.style.top = '-200px';
    const elements = [windowManagerInstance.customFocusElementReadWrite, windowManagerInstance.customFocusElementReadOnly];
    elements.forEach(element => {
      element.className = 'focus-target';
      this.rootElement.appendChild(element);
    });
    windowManagerInstance.updateCustomFocusType();
  }

  /**
   * Sets up callbacks for the KeyboardFocusManager to handle focus changes
   */
  setupKeyboardFocusManagerCallbacks(): void {
    KeyboardFocusManager.setCustomFocusElement({
      addFocusChangedCallback: (callback: (focused: boolean) => void) => {
        if (windowManagerInstance.customFocusElementReadWrite) {
          windowManagerInstance.customFocusElementReadWrite.addEventListener('focus', () => callback(true));
          windowManagerInstance.customFocusElementReadWrite.addEventListener('blur', () => callback(false));
        }
        if (windowManagerInstance.customFocusElementReadOnly) {
          windowManagerInstance.customFocusElementReadOnly.addEventListener('focus', () => callback(true));
          windowManagerInstance.customFocusElementReadOnly.addEventListener('blur', () => callback(false));
        }
      },
      isFocusElement: (element: HTMLElement) => element === windowManagerInstance.customFocusElementReadWrite || element === windowManagerInstance.customFocusElementReadOnly,
      focus: () => {
        if (windowManagerInstance.isExpectingTextInput()) {
          windowManagerInstance.customFocusElementReadWrite?.focus();
          return windowManagerInstance.customFocusElementReadWrite;
        } else {
          windowManagerInstance.customFocusElementReadOnly?.focus();
          return windowManagerInstance.customFocusElementReadOnly;
        }
      }
    });
  }

  /**
   * Attaches all necessary event listeners to the custom focus elements
   */
  attachEventListenersToFocusElements(): void {
    const elements = [windowManagerInstance.customFocusElementReadWrite, windowManagerInstance.customFocusElementReadOnly];
    elements.forEach(element => {
      if (!element) return;
      this.attachKeyboardEventListeners(element);
      this.attachFocusEventListeners(element);
      this.attachCompositionEventListeners(element);
      this.attachInputEventListeners(element);
    });
  }

  /**
   * Attaches keyboard-related event listeners (keydown, keyup) to a focus element
   * @param element - The focus element to attach listeners to
   */
  attachKeyboardEventListeners(element: HTMLElement): void {
    element.addEventListener('keydown', wrapFullscreenEventHandler((event: KeyboardEvent) => {
      try {
        const shouldIgnore = this.shouldIgnoreKeyboardEvent(event);
        if (event.metaKey || event.ctrlKey || this.cppAPI.getViewWantsTextEvents(this.currentViewHandleWithFocus) || shouldIgnore) {
          // Allow default behavior
        } else {
          event.preventDefault();
        }
        if (event.ctrlKey === false && event.metaKey === false) {
          if (event.which === 88 || event.which === 67) {
            // X or C
            windowManagerInstance.setExpectingCopyCutEvent(true);
          } else if (event.which === 86) {
            // V
            windowManagerInstance.setExpectingPasteEvent(true);
          }
        }
      } catch {
        event.preventDefault();
      }
    }));
    element.addEventListener('keyup', wrapFullscreenEventHandler(() => {
      windowManagerInstance.setExpectingCopyCutEvent(false);
      windowManagerInstance.setExpectingPasteEvent(false);
    }));
  }

  /**
   * Attaches focus and blur event listeners to a focus element
   * @param element - The focus element to attach listeners to
   */
  attachFocusEventListeners(element: HTMLElement): void {
    element.addEventListener('focus', wrapFullscreenEventHandler(() => {
      const pendingHandle = this.pendingViewHandle;
      if (pendingHandle) {
        this.lastViewHandleWithFocus = pendingHandle;
        this.currentViewHandleWithFocus = pendingHandle;
        if (windowManagerInstance.customFocusElementReadWrite) {
          windowManagerInstance.customFocusElementReadWrite._pointer = pendingHandle;
        }
        if (windowManagerInstance.customFocusElementReadOnly) {
          windowManagerInstance.customFocusElementReadOnly._pointer = pendingHandle;
        }
        if (!windowManagerInstance.focusEventBeingCalled) {
          this.cppAPI.focusEvent(EventTypeEnum.FOCUS_GAINED, pendingHandle);
        }
      }
    }));
    element.addEventListener('blur', wrapFullscreenEventHandler((event: FocusEvent) => {
      const currentHandle = this.currentViewHandleWithFocus;
      if (!currentHandle) return;
      this.currentViewHandleWithFocus = null;
      if (windowManagerInstance.customFocusElementReadWrite) {
        windowManagerInstance.customFocusElementReadWrite._pointer = null;
      }
      if (windowManagerInstance.customFocusElementReadOnly) {
        windowManagerInstance.customFocusElementReadOnly._pointer = null;
      }
      const relatedTarget = event.relatedTarget as HTMLElement;
      const isInterceptElement = relatedTarget && relatedTarget.getAttribute('data-fullscreen-intercept-dangerously-include-tab');
      if (!windowManagerInstance.focusEventBeingCalled && !isInterceptElement) {
        this.cppAPI.focusEvent(EventTypeEnum.FOCUS_LOST, currentHandle);
      }
    }));

    // Additional focus/blur for read-write element
    if (element === windowManagerInstance.customFocusElementReadWrite) {
      element.addEventListener('focus', () => {
        if (windowManagerInstance.customFocusElementReadWrite) {
          windowManagerInstance.customFocusElementReadWrite.ariaHidden = 'false';
        }
      });
      element.addEventListener('blur', () => {
        if (windowManagerInstance.customFocusElementReadWrite) {
          windowManagerInstance.customFocusElementReadWrite.ariaHidden = 'true';
          if (windowManagerInstance.customFocusElementReadWrite instanceof HTMLTextAreaElement) {
            windowManagerInstance.customFocusElementReadWrite.value = browserCapabilities.isChrome() ? generateInvisibleInputText() : '';
          } else {
            windowManagerInstance.customFocusElementReadWrite.textContent = browserCapabilities.isChrome() ? generateInvisibleInputText() : '';
          }
        }
      });
    }
  }

  /**
   * Attaches composition event listeners to a focus element
   * @param element - The focus element to attach listeners to
   */
  attachCompositionEventListeners(element: HTMLElement): void {
    const resetComposition = () => {
      this.previousComposition = '';
    };
    element.addEventListener('compositionstart', wrapFullscreenEventHandler(() => {
      this.lastCompositionInputEvent = 'compositionstart';
      this.isComposing = true;
      this.isHandlingDoubleInputForMicrosoftIMEFix = false;
      resetComposition();
    }));
    element.addEventListener('compositionupdate', wrapFullscreenEventHandler(() => {
      this.isHandlingDoubleInputForMicrosoftIMEFix = false;
      this.lastCompositionInputEvent = 'compositionupdate';
    }));
    element.addEventListener('compositionend', wrapFullscreenEventHandler(() => {
      const lastEvent = this.lastCompositionInputEvent;
      this.lastCompositionInputEvent = 'compositionend';
      this.isComposing = false;
      this.lastCompositionEndValue = this.previousComposition;
      this.isHandlingDoubleInputForMicrosoftIMEFix = browserCapabilities.isWindows() && getFeatureFlags().ce_microsoft_ime_fix === true;
      if (lastEvent === 'input') {
        resetComposition();
      }
    }));
  }

  /**
   * Attaches input-related event listeners (beforeinput, input) to a focus element
   * @param element - The focus element to attach listeners to
   */
  attachInputEventListeners(element: HTMLElement): void {
    element.addEventListener('beforeinput', wrapFullscreenEventHandler((event: InputEvent) => {
      if (!this.cppAPI.getViewWantsTextEvents(this.currentViewHandleWithFocus)) return;
      if (!(browserCapabilities.isMac() || browserCapabilities.isIpad() || browserCapabilities.isMeetDevice() || browserCapabilities.isiOS() || browserCapabilities.isWindows())) return;
      const data = event.data;
      if (!data) {
        if (event.inputType === 'deleteContentBackward' && !this.isComposing && (browserCapabilities.isIpad() || browserCapabilities.isMeetDevice()) && !this.isHandlingBackspaceKeyForIPadKoreanInputFix) {
          if (element instanceof HTMLTextAreaElement) {
            this.simulatedPreviousComposition = element.value.slice(-1);
          } else {
            this.simulatedPreviousComposition = element.textContent?.slice(-1) ?? '';
          }
        }
        return;
      }
      if (this.isHandlingDoubleInputForMicrosoftIMEFix && (data === null && event.inputType === 'deleteContentBackward' || event.inputType === 'insertText')) {
        event.preventDefault();
        return;
      }
      const charCode = typeof data === 'string' ? data.charCodeAt(0) : 0;
      const lastKeyCharCode = this.lastKeydown ? this.lastKeydown.charCodeAt(0) : 49;
      const isComposingOrNumber = this.isComposing ? event.inputType === 'insertCompositionText' && !this.previousComposition : lastKeyCharCode >= 49 && lastKeyCharCode <= 57;
      let hasSelection = false;
      let selectedText = '';
      if (element instanceof HTMLTextAreaElement) {
        const start = element.selectionStart ?? 0;
        const end = element.selectionEnd ?? 0;
        hasSelection = start < end;
        selectedText = element.value.slice(start, end);
      } else {
        const selection = document.getSelection();
        hasSelection = !!(selection && selection.type === 'Range' && (selection.anchorNode === element || selection.anchorNode === element.firstChild) && (selection.focusNode === element || selection.focusNode === element.firstChild) && selection.anchorOffset <= selection.focusOffset);
        selectedText = selection?.toString() ?? '';
      }
      if (this.lastKeydown !== data && data.length === 1 && isComposingOrNumber && charCode >= 192 && charCode <= 669) {
        const viewHandle = this.viewHandleFromElement(event.target as Element);
        this.cppAPI.keyboardEvent(EventTypeEnum.KEY_PRESS, viewHandle, 8, 0, false, 'Backspace', hasKeyboardLayoutDetection(), getCurrentKeyboardLayout());
      } else {
        if (browserCapabilities.isIpad() || browserCapabilities.isiOS()) {
          if (hasSelection && !this.isComposing) {
            this.simulatedPreviousComposition = selectedText;
          }
        } else if (event.inputType === 'insertReplacementText' && browserCapabilities.isSafari() && browserCapabilities.isMac() && !browserCapabilities.isIpad() && !browserCapabilities.isIpadNative() && !browserCapabilities.isiOS() && hasSelection && !this.isComposing) {
          this.simulatedPreviousComposition = selectedText;
        }
      }
    }));
    element.addEventListener('input', wrapFullscreenEventHandler((event: InputEvent) => {
      if (event.data === null && event.inputType === 'deleteContentBackward' && browserCapabilities.isIpad() && this.isHandlingBackspaceKeyForIPadKoreanInputFix) {
        this.isHandlingBackspaceKeyForIPadKoreanInputFix = false;
        return;
      }
      if (this.isHandlingDoubleInputForMicrosoftIMEFix) {
        if (event.data === null && event.inputType === 'deleteContentBackward') {
          event.preventDefault();
          return;
        }
        if (event.inputType === 'insertText') {
          this.isHandlingDoubleInputForMicrosoftIMEFix = false;
          event.preventDefault();
          return;
        }
      }
      const lastEvent = this.lastCompositionInputEvent;
      this.lastCompositionInputEvent = 'input';
      const isDeadKey = this.lastKeydown === 'Dead' || this.lastKeydown === 'Process';
      if (event.inputType === 'insertCompositionText' && isDeadKey && this.lastKeydownEventAccepted === true) {
        this.isComposing = false;
        resetComposition();
        if (element instanceof HTMLTextAreaElement) {
          const start = element.selectionStart ?? 0;
          element.value = element.value.slice(0, start - 1) + element.value.slice(start);
        } else {
          const selection = document.getSelection();
          if (selection && selection.anchorNode === element) {
            const offset = selection.getRangeAt(0).startOffset;
            const text = element.textContent ?? '';
            element.textContent = text.slice(0, offset - 1) + text.slice(offset);
          }
        }
        return;
      }
      if (this.cppAPI.getViewWantsTextEvents(this.currentViewHandleWithFocus)) {
        let data = event.data;
        if (data && data.length === 1) {
          const charCode = data.charCodeAt(0);
          if (charCode >= 55296 && charCode <= 56319) return; // High surrogate
        }
        let isComposing = this.isComposing;
        let previousComposition = this.previousComposition;
        if (lastEvent === 'compositionend' && event.inputType === 'insertCompositionText') {
          isComposing = true;
          previousComposition = this.lastCompositionEndValue ?? '';
        }
        if (this.simulatedPreviousComposition != null) {
          if (!isComposing) {
            isComposing = true;
            previousComposition = this.simulatedPreviousComposition;
          }
          this.simulatedPreviousComposition = null;
        }
        this.cppAPI.textEvent(this.currentViewHandleWithFocus, data ?? '', isComposing, previousComposition, this.modifierKeys(event));
        if (lastEvent === 'compositionend') {
          this.previousComposition = data;
          resetComposition();
        } else if (this.isComposing) {
          this.previousComposition = data;
        } else {
          resetComposition();
        }
        event.preventDefault();
      }
    }));

    // Helper function for resetting composition
    function resetComposition() {
      this.previousComposition = '';
    }
  }

  /**
   * Retrieves the view handle associated with a given DOM element
   * Traverses the DOM tree to find elements with view handle data
   * @originalName viewHandleFromElement
   * @param element - The DOM element to find the view handle for
   * @returns The view handle or null if not found
   */
  viewHandleFromElement(element: Element | null): any {
    // Check if element is a custom focus element
    if (element === windowManagerInstance.customFocusElementReadWrite || element === windowManagerInstance.customFocusElementReadOnly) {
      return this.currentViewHandleWithFocus;
    }

    // Ensure element is an HTMLElement
    if (!(element instanceof HTMLElement)) {
      return null;
    }

    // Traverse up the DOM tree to find an element with a _pointer property
    let currentElement: HTMLElement | null = element;
    while (currentElement) {
      if ('_pointer' in currentElement && (currentElement as any)._pointer) {
        return (currentElement as any)._pointer;
      }
      currentElement = currentElement.parentElement;
    }

    // Check for fullscreen intercept attributes
    if (element && (element.getAttribute('data-fullscreen-intercept') || element.getAttribute('data-fullscreen-intercept-dangerously-include-tab'))) {
      if (this.lastViewHandleWithFocus) {
        return this.lastViewHandleWithFocus;
      }
      logWarning('viewHandleFromElement', 'No cached view handle on intercept element, passing null.');
    }
    return null;
  }

  /**
   * Extracts modifier key flags from a keyboard/mouse event
   * Handles special cases for Alt key detection on different platforms
   * @originalName modifierKeys
   * @param event - The event containing modifier key states
   * @returns Bitwise combination of modifier key flags
   */
  modifierKeys(event: Event): number {
    // Guard clause: check if event has modifier key properties
    if (!hasModifierKeyProperties(event)) {
      return 0;
    }
    const typedEvent = event as KeyboardEvent | MouseEvent;

    // Determine if right Alt key was pressed (for Windows AltGr handling)
    const isRightAltPressed = typedEvent.altKey && (typedEvent.which === 18 && 'location' in typedEvent && typedEvent.location === 2 || typedEvent.which !== 18 && this.lastAltKeyWasRight);
    const isAltGraphPressed = !!browserCapabilities.isWindows() && 'getModifierState' in typedEvent && typedEvent.getModifierState('AltGraph') && !this.lastAltKeyWasRight;

    // Combine Alt and Ctrl states (AltGr affects both)
    const altPressed = typedEvent.altKey || isAltGraphPressed;
    const ctrlPressed = typedEvent.ctrlKey || isAltGraphPressed;

    // Build bitwise flags
    return (altPressed ? xC : 0) | (typedEvent.metaKey ? No : 0) | (typedEvent.shiftKey ? IL : 0) | (ctrlPressed ? pP : 0) | (isRightAltPressed ? eb : 0);
  }

  /**
   * Determines if a keyboard event should be ignored by fullscreen handlers
   * Checks various conditions including browser-specific behaviors and element ownership
   * @originalName shouldIgnoreKeyboardEvent
   * @param event - The keyboard event to evaluate
   * @returns True if the event should be ignored
   */
  shouldIgnoreKeyboardEvent(event: KeyboardEvent): boolean {
    // Check if C++ API wants to handle the event
    if (this.cppAPI.shouldSendKeyboardEventToBrowser(event.which, event.code, hasKeyboardLayoutDetection(), getCurrentKeyboardLayout())) {
      return true;
    }

    // Ignore if target is a text input element not owned by fullscreen
    if (isTextInputElement(event.target as any) && !this.isElementOwnedByFullscreen(event.target)) {
      return true;
    }

    // Ignore during composition
    if (this.isComposing) {
      return true;
    }

    // Ignore specific IME-related key codes
    if ((event.code === 'ArrowLeft' || event.code === 'ArrowRight' || event.code === 'Enter') && event.which === 229) {
      return true;
    }

    // Ignore Tab key on elements not owned by fullscreen (unless dangerously included)
    if (event.target && !this.isElementOwnedByFullscreen(event.target) && !(event.target instanceof HTMLElement && event.target.getAttribute('data-fullscreen-intercept-dangerously-include-tab')) && event.code === 'Tab') {
      return true;
    }

    // Ignore Enter on buttons not owned by fullscreen
    if (event.target && event.target instanceof HTMLElement && event.target.tagName === 'BUTTON' && !this.isElementOwnedByFullscreen(event.target) && event.code === 'Enter') {
      return true;
    }

    // ChromeOS-specific mute key handling
    if (event.key === 'AudioVolumeMute' && browserCapabilities.isChromeOS()) {
      return true;
    }

    // Check for key capture prevention attributes
    if (shouldPreventKeyboardCapture(event)) {
      return true;
    }
    return false;
  }

  /**
   * Determines if a mouse event should be ignored by fullscreen handlers
   * Combines general event ignoring with mouse-specific logic
   * @originalName shouldIgnoreMouseEvent
   * @param event - The mouse event to evaluate
   * @returns True if the event should be ignored
   */
  shouldIgnoreMouseEvent(event: MouseEvent): boolean {
    // Ignore if not expecting mouse release and general event should be ignored
    return !this.fullscreenExpectsMouseReleaseEvent && this.shouldIgnoreEvent(event as any);
  }

  /**
   * Determines if an event should be ignored based on target element properties
   * Checks for event capture attributes and input element ownership
   * @originalName shouldIgnoreEvent
   * @param event - The event to evaluate
   * @returns True if the event should be ignored
   */
  shouldIgnoreEvent(event: KeyboardEvent): boolean {
    const target = event.target;

    // Ensure target is an Element
    if (!(target instanceof Element) || target.nodeType !== 1) {
      return false;
    }

    // Check for event capture prevention attributes
    if (shouldIgnoreEventBasedOnTarget(event as any)) {
      return true;
    }

    // For non-wheel events or when input scrollover is disabled, ignore text inputs not owned by fullscreen
    if ((!getFeatureFlags().ce_input_scrollover || event.type !== 'wheel') && isTextInputElement(target as HTMLInputElement) && !this.isElementOwnedByFullscreen(target)) {
      return true;
    }
    return false;
  }

  /**
   * Processes mouse events and forwards them to the C++ API
   * Handles different event types, pointer types, and touch state management
   * @originalName mouseEvent
   * @param event - The mouse/pointer event
   * @param eventType - The type of mouse event
   * @param touchHandlerFactory - Optional factory for creating touch handlers
   */
  mouseEvent(event: MouseEvent | PointerEvent, eventType: EventTypeEnum, touchHandlerFactory: (() => any) | null = null): void {
    // Determine click count for press/release events
    let clickCount = event.detail;
    const isPointerEvent = window.PointerEvent && event instanceof window.PointerEvent;
    if (isPointerEvent || browserCapabilities.isIE() || browserCapabilities.isEdge()) {
      if (eventType === EventTypeEnum.MOUSE_PRESS || eventType === EventTypeEnum.MOUSE_RELEASE) {
        clickCount = this.simulatedClickCount(eventType === EventTypeEnum.MOUSE_PRESS, event.pageX, event.pageY, 4);
      }
    }

    // Determine button and pointer type
    let button = event.button;
    let pointerType = PointerType.MOUSE;
    let pointerId = -1;
    if (isPointerEvent) {
      if (event.pointerType === 'pen') {
        pointerType = PointerType.STYLUS;
      } else if (event.pointerType === 'touch' && !getFeatureFlags().ce_il_disable_touch_events) {
        pointerType = PointerType.TOUCH;
        pointerId = event.pointerId;
      }
    }

    // Update touch usage state
    if ([EventTypeEnum.MOUSE_PRESS, EventTypeEnum.MOUSE_MOVE, EventTypeEnum.MOUSE_RELEASE, EventTypeEnum.MOUSE_CANCEL].includes(eventType)) {
      this.cppAPI.setIsUsingTouchEvents(pointerType === PointerType.TOUCH);
    }

    // Handle touch-specific logic
    if (pointerType === PointerType.TOUCH) {
      if (eventType === EventTypeEnum.MOUSE_PRESS && touchHandlerFactory) {
        this.pointerState = (this.pointerState || touchHandlerFactory()).next(event);
        return;
      }
      if (eventType === EventTypeEnum.MOUSE_CANCEL || eventType === EventTypeEnum.MOUSE_RELEASE) {
        this.pointerState = null;
        return;
      }
      if (this.pointerState) {
        this.pointerState = this.pointerState.next(event);
        return;
      }
    }

    // Adjust button for non-pointer events
    if (!isPointerEvent && eventType !== EventTypeEnum.MOUSE_PRESS && eventType !== EventTypeEnum.MOUSE_RELEASE) {
      button = -1;
    }

    // Get relative position and send event to C++ API
    const position = getRelativeEventPosition(event, this.viewElement);
    const pressure = event instanceof PointerEvent ? event.pressure : -1;
    if (this.cppAPI.preciseMouseEvent(eventType, position.x, position.y, position.preciseX, position.preciseY, button, event.buttons, clickCount, this.modifierKeys(event), 0, 0, 0, pointerType, pointerId, event.timeStamp, pressure)) {
      event.preventDefault();
    }
  }
  simulatedClickCount(e, t, i, n) {
    if (!e) return this.oldCount;
    let r = Date.now();
    let a = 1;
    this.oldTime && r - this.oldTime < 500 && Math.abs(t - this.oldX) < n && Math.abs(i - this.oldY) < n && (a = this.oldCount + 1);
    this.oldX = t;
    this.oldY = i;
    this.oldCount = a;
    this.oldTime = r;
    return a;
  }
  isElementOwnedByFullscreen(e) {
    return e instanceof Element && this.rootElement.contains(e);
  }

  /**
   * Sets up clipboard and drop event handlers for the fullscreen editor
   * Handles copy, cut, paste, and file drop operations with appropriate filtering
   * Original method name: setupClipboardAndDropEvents
   */
  setupClipboardAndDropEvents(): void {
    this.setupClipboardEvents();
    this.setupDropEvents();
  }

  /**
   * Sets up clipboard event handlers (copy, cut, paste) with filtering logic
   * Prevents default behavior and delegates to C++ API when appropriate
   * Original method name: setupClipboardEvents (extracted from setupClipboardAndDropEvents)
   */
  setupClipboardEvents(): void {
    /**
     * Handles clipboard events by checking conditions and delegating to C++ API
     * @param event - The clipboard event (copy, cut, or paste)
     * @param action - The clipboard action type
     */
    const handleClipboardEvent = (event: ClipboardEvent, action: ClipboardOperation): void => {
      this.clipboardDataTransfer = event.clipboardData || (window as any).clipboardData;
      if (KeyboardFocusManager.shouldInterceptClipboardEvent(event, action) || shouldIgnoreEventBasedOnTarget(event) && !isDebugSelectedFigmakeFullscreen()) {
        return;
      }
      if (!this.clipboardDataTransfer) {
        return;
      }
      event.preventDefault();
      let targetElement = event.target as HTMLElement;
      if (targetElement.tagName === 'BODY') {
        targetElement = document.activeElement as HTMLElement;
      }
      const viewHandle = isDebugSelectedFigmakeFullscreen() ? this.canvasViewHandle : this.viewHandleFromElement(targetElement);
      this.cppAPI.clipboardEvent(viewHandle, action);
    };

    /**
     * Checks if the current view is in a state that should skip clipboard handling
     * Specifically for sites editor in code panel mode
     * @returns True if clipboard events should be skipped
     */
    const shouldSkipClipboardEvent = (): boolean => {
      const selectedView = debugState.getState().selectedView;
      return selectedView.view === 'fullscreen' && selectedView.editorType === FEditorType.Sites && atomStoreManager.get(sitesViewSetterAtomFamily) === PanelType.CODE;
    };
    document.body.addEventListener('copy', wrapFullscreenEventHandler((event: ClipboardEvent) => {
      if (!shouldSkipClipboardEvent()) {
        handleClipboardEvent(event, ClipboardOperation.COPY);
      }
    }));
    document.body.addEventListener('cut', wrapFullscreenEventHandler((event: ClipboardEvent) => {
      if (!shouldSkipClipboardEvent()) {
        handleClipboardEvent(event, ClipboardOperation.CUT);
      }
    }));
    document.body.addEventListener('paste', wrapDebugFullscreenEventHandler((event: ClipboardEvent) => {
      if (shouldSkipClipboardEvent()) {
        return;
      }
      if (isDebugSelectedFigmakeFullscreen()) {
        if (!(tj(event) || gk(event))) {
          return;
        }
        if (atomStoreManager.get(hasMaxAttachmentsAtom)) {
          handleInsertError(InsertErrorType.MAXIMUM_ATTACHMENTS_EXCEEDED);
          return;
        }
        atomStoreManager.set(createPendingAttachmentAtom);
        const htmlData = gk(event) && event.clipboardData?.getData('text/html');
        if (getFeatureFlags().bake_large_paste_warning && htmlData && htmlData.length > getInitialDynamicConfig('make_large_paste_threshold').get('sizeBytes', 250000)) {
          handleInsertError(InsertErrorType.INSERTED_NODES_TOO_LARGE);
        }
      }
      handleClipboardEvent(event, ClipboardOperation.PASTE);
    }));
  }

  /**
   * Sets up drop event handler for file and URL drops
   * Processes dropped files, URLs, and directories with appropriate validation
   * Original method name: setupDropEvents (extracted from setupClipboardAndDropEvents)
   */
  setupDropEvents(): void {
    this.viewElement.addEventListener('drop', wrapFullscreenEventHandler((event: DragEvent) => {
      event.preventDefault();
      if (!checkStackInvariants(event)) {
        event.stopImmediatePropagation();
        return;
      }
      if (fullscreenValue && fullscreenValue.handleSketchImportEvent(event)) {
        return;
      }
      const dataTransfer = event.dataTransfer;
      if (!dataTransfer) {
        return;
      }
      if (dataTransfer.items) {
        this.handleDataTransferItems(event, dataTransfer.items);
      } else if (dataTransfer.files) {
        this.handleDataTransferFiles(event, dataTransfer.files);
      }
    }));
  }

  /**
   * Handles DataTransferItemList from drop events, processing files, URLs, and directories
   * @param dropEvent - The original drop event
   * @param items - The DataTransferItemList to process
   */
  handleDataTransferItems(dropEvent: DragEvent, items: DataTransferItemList): void {
    const fileEntries: any[] = [];
    const directoryReaders = new Map();
    let hasDirectories = false;

    // Process each item
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      if (!item) continue;
      if (item.webkitGetAsEntry) {
        const entry = item.webkitGetAsEntry();
        if (entry) {
          if (entry.isFile) {
            fileEntries.push(entry);
          } else if (item.kind === 'file') {
            fileEntries.push({
              file(callback: (file: File) => void) {
                callback(item.getAsFile()!);
              }
            });
          }
        }
      }
    }

    // Handle URL data
    const urlData = dropEvent.dataTransfer!.getData('URL');
    if (urlData) {
      let filename = dropEvent.dataTransfer!.getData('filename');
      if (filename === '') {
        filename = 'dropped-image.png';
      }
      const file = this.createFileFromDataUrl(urlData, filename);
      if (file) {
        fileEntries.push({
          file(callback: (file: File) => void) {
            callback(file);
          }
        });
      }
    }

    // Process directories
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      if (!item?.webkitGetAsEntry) continue;
      const entry = item.webkitGetAsEntry();
      if (entry?.isDirectory) {
        hasDirectories = true;
        this.processDirectory(directoryReaders, entry, fileEntries).then(() => {
          if (directoryReaders.size === 0) {
            this.importEntries(dropEvent, fileEntries);
          }
        });
      }
    }
    if (!hasDirectories) {
      this.importEntries(dropEvent, fileEntries);
    }
  }

  /**
   * Processes a directory entry recursively, collecting all files
   * @param directoryReaders - Map to track active directory readers
   * @param directoryEntry - The directory entry to process
   * @param fileEntries - Array to collect file entries
   * @returns Promise that resolves when directory processing is complete
   */
  processDirectory(directoryReaders: Map<any, any>, directoryEntry: any, fileEntries: any[]): Promise<void> {
    return new Promise((resolve, reject) => {
      let activeReaders = 0;
      const readDirectory = (dirEntry: any) => {
        let reader = directoryReaders.get(dirEntry);
        if (!reader) {
          activeReaders++;
          reader = dirEntry.createReader();
          directoryReaders.set(dirEntry, reader);
        }
        reader.readEntries((entries: any[]) => {
          if (entries.length > 0) {
            entries.forEach(entry => {
              if (entry.isFile) {
                fileEntries.push(entry);
              } else if (entry.isDirectory) {
                readDirectory(entry);
              }
            });
            readDirectory(dirEntry);
          } else {
            activeReaders--;
            directoryReaders.delete(dirEntry);
            if (activeReaders === 0) {
              resolve();
            }
          }
        }, reject);
      };
      readDirectory(directoryEntry);
    });
  }

  /**
   * Creates a File object from a data URL string
   * @param dataUrl - The data URL containing the file data
   * @param filename - The desired filename for the created file
   * @returns File object or null if creation fails
   */
  createFileFromDataUrl(dataUrl: string, filename: string): File | null {
    const pngPrefix = 'data:image/png;base64,';
    if (dataUrl.indexOf(pngPrefix) === 0) {
      try {
        const base64Data = dataUrl.slice(pngPrefix.length);
        const binaryData = atob(base64Data);
        const byteArray = [];
        for (let i = 0; i < binaryData.length; i++) {
          byteArray.push(binaryData.charCodeAt(i));
        }
        const blob = new Blob([new Uint8Array(byteArray)], {
          type: 'image/png'
        });
        return new File([blob], filename, {
          type: 'image/png'
        });
      } catch {
        return null;
      }
    }
    return null;
  }

  /**
   * Handles DataTransfer files directly (fallback for older browsers)
   * @param dropEvent - The original drop event
   * @param files - The FileList to process
   */
  handleDataTransferFiles(dropEvent: DragEvent, files: FileList): void {
    if (!fullscreenValue.fileArrayToString) {
      logWarning('FileDrop', 'Unable to import files, fileArrayToString is not defined');
      return;
    }
    this.cppAPI.dropEvent(this.viewHandleFromElement(dropEvent.target as Element), dropEvent.pageX, dropEvent.pageY, this.modifierKeys(dropEvent), fullscreenValue.fileArrayToString(files));
  }

  /**
   * Imports file entries by collecting files and sending to C++ API
   * @param dropEvent - The original drop event
   * @param fileEntries - Array of file entries to process
   * Original method name: importEntries
   */
  importEntries(dropEvent: DragEvent, fileEntries: any[]): void {
    const files: File[] = [];
    let processedCount = 0;
    fileEntries.forEach(entry => {
      entry.file((file: File) => {
        files.push(file);
        processedCount++;
        if (processedCount === fileEntries.length) {
          if (!fullscreenValue.fileArrayToString) {
            logWarning('FileDrop', 'Unable to import file entries, fileArrayToString is not defined');
            return;
          }
          this.cppAPI.dropEvent(this.viewHandleFromElement(dropEvent.target as Element), dropEvent.pageX, dropEvent.pageY, this.modifierKeys(dropEvent), fullscreenValue.fileArrayToString(files));
        }
      });
    });
  }
}

/**
 * Converts page coordinates to element-relative coordinates with precise positioning
 * Used throughout the application to translate mouse/touch events to canvas coordinates
 * @param event - Event with pageX/pageY properties (mouse, touch, or pointer event)
 * @param targetElement - HTML element to calculate relative position from
 * @returns Object containing rounded and precise x/y coordinates relative to targetElement
 */
function getRelativeEventPosition(event: any, targetElement: HTMLElement): {
  x: number;
  y: number;
  preciseX: number;
  preciseY: number;
} {
  let x = event.pageX;
  let y = event.pageY;

  // Walk up the offset parent chain to calculate relative position
  for (let element = targetElement; element !== null; element = element.offsetParent instanceof HTMLElement ? element.offsetParent : null) {
    x -= element.offsetLeft;
    y -= element.offsetTop;
  }
  const preciseX = x;
  const preciseY = y;

  // Round coordinates for PointerEvent to match expected behavior
  if (window.PointerEvent && event instanceof window.PointerEvent) {
    x = Math.round(x);
    y = Math.round(y);
  }
  return {
    x,
    y,
    preciseX,
    preciseY
  };
}

/**
 * Determines if Apple Pencil drawing should be handled automatically
 * Checks mobile environment, pencil availability, and current tool state
 * @returns True if pencil drawing should be automatically processed
 */
function shouldHandleApplePencilDrawing(): boolean {
  const figmaMobile = window.FigmaMobile;
  const mobileInstance = window.FigmaMobile;
  if (figmaMobile?.suppliesPencilSamples) {
    const currentTool = debugState.getState().mirror.appModel.currentTool;
    const isReadOnly = debugState.getState().mirror.appModel.isReadOnly;
    if (isReadOnly) {
      return false;
    } else if (mobileInstance._auto_draw_with_pencil && currentTool !== DesignGraphElements.MULTISELECT) {
      return true;
    } else {
      return SUPPORTED_DRAWING_TOOLS.includes(currentTool);
    }
  }
  return false;
}

/**
 * Updates pointer event handling state for inspect and modal panels
 * Controls whether pointer events should be stopped during certain UI interactions
 * @param shouldStopEvents - Whether to stop pointer events from propagating
 */
function updatePointerEventState(shouldStopEvents: boolean): void {
  PluginInstanceManager.instance[PluginIframeMode.INSPECT]?.updateState({
    stopPointerEvents: shouldStopEvents
  });
  PluginInstanceManager.instance[PluginIframeMode.MODAL]?.updateState({
    stopPointerEvents: shouldStopEvents
  });
}

// Key codes for zoom-related keyboard shortcuts (+ and - keys)
const ZOOM_KEY_CODES = [107, 187, 109, 173, 189];

/**
 * Checks if a keyboard event represents a zoom command (Cmd/Ctrl + Plus/Minus)
 * Used to detect zoom shortcuts and prevent default browser zoom behavior
 * @param keyboardEvent - The keyboard event to check
 * @returns True if event is a zoom command
 */
function isZoomKeyboardCommand(keyboardEvent: KeyboardEvent): boolean {
  const isModifierPressed = browserCapabilities.isMac() ? keyboardEvent.metaKey : keyboardEvent.ctrlKey;
  const isAltNotPressed = !keyboardEvent.altKey;
  const isZoomKey = ZOOM_KEY_CODES.includes(keyboardEvent.which || keyboardEvent.keyCode);
  return isModifierPressed && isAltNotPressed && isZoomKey;
}

/**
 * Checks if a keyboard event represents a file open command (Cmd/Ctrl + O)
 * Only applies when not in desktop app context
 * @param keyboardEvent - The keyboard event to check
 * @returns True if event is a file open command that should be handled
 */
function isFileOpenKeyboardCommand(keyboardEvent: KeyboardEvent): boolean {
  const isModifierPressed = browserCapabilities.isMac() ? keyboardEvent.metaKey : keyboardEvent.ctrlKey;
  const isNotDesktopApp = !(desktopAPIInstance && desktopAPIInstance.getVersion() > 0);
  const isOpenKey = keyboardEvent.key === 'o';
  return isModifierPressed && isNotDesktopApp && isOpenKey;
}

/**
 * Determines if an event should be ignored based on element attributes and event type
 * Checks for various data attributes that control event capture behavior
 * @param event - Event to check for capture prevention
 * @returns True if the event should be ignored/prevented from reaching fullscreen handlers
 */
function shouldIgnoreEventBasedOnTarget(event: ClipboardEvent): boolean {
  let targetElement = event.target;

  // Walk up the DOM tree checking for capture control attributes
  while (targetElement instanceof HTMLElement || targetElement instanceof SVGElement) {
    // Check for wheel event capture attributes
    if (event.type === 'wheel') {
      if (hasWheelEventCaptureAttribute(targetElement) || hasNoModifierWheelCaptureAttribute(targetElement) && !hasModifierKeys(event as any)) {
        return true;
      }
    }

    // Check for general event prevention attributes
    if (hasEventPreventionAttribute(targetElement) && !(event.type === 'wheel' && hasWheelEventPassthroughAttribute(targetElement))) {
      return true;
    }

    // Check for clipboard event passthrough
    if (isClipboardEvent(event.type) && hasClipboardPassthroughAttribute(targetElement)) {
      break;
    }
    targetElement = targetElement.parentElement;
  }
  return false;
}

/**
 * Generates zero-width characters used for text input detection
 * These invisible characters help detect composition and input events
 * @returns String containing zero-width directional characters
 */
function generateInvisibleInputText(): string {
  return String.fromCharCode(8296) + String.fromCharCode(8297);
}

/**
 * Checks if an element is a text input that accepts user typing
 * Used to determine if keyboard events should be handled by the element
 * @param element - Element to check
 * @returns True if element accepts text input
 */
function isTextInputElement(element: HTMLInputElement): boolean {
  return element instanceof HTMLElement && (element.tagName === 'INPUT' && element.type === 'text' || element.tagName === 'INPUT' && element.type === 'password' || element.tagName === 'TEXTAREA' && !element.readOnly);
}

/**
 * Checks if mouse event has middle button pressed
 * Handles different button representations across browsers
 * @param mouseEvent - Mouse event to check
 * @returns True if middle mouse button is pressed
 */
function hasMiddleButtonPressed(mouseEvent: MouseEvent): boolean {
  return !!(8 & mouseEvent.buttons) || !!(16 & mouseEvent.buttons) || !!(4 & mouseEvent.buttons);
}

/**
 * Checks if mouse event has right button pressed
 * @param mouseEvent - Mouse event to check
 * @returns True if right mouse button is pressed
 */
function hasRightButtonPressed(mouseEvent: MouseEvent): boolean {
  return !!(2 & mouseEvent.buttons);
}

/**
 * Checks if event has modifier key properties (for type safety)
 * @param event - Event to check
 * @returns True if event has ctrlKey and metaKey properties
 */
function hasModifierKeyProperties(event: any): boolean {
  return 'ctrlKey' in event && 'metaKey' in event;
}

/**
 * Checks if event target has key capture prevention attributes
 * Used to determine if keyboard events should bubble up normally
 * @param event - Keyboard event to check
 * @returns True if event should be prevented from fullscreen capture
 */
function shouldPreventKeyboardCapture(event: KeyboardEvent): boolean {
  let targetElement = event.target;
  while (targetElement instanceof HTMLElement || targetElement instanceof SVGElement) {
    if (hasKeyPreventionAttribute(targetElement)) {
      return true;
    }
    targetElement = targetElement.parentElement;
  }
  return false;
}

/**
 * Checks if a keyboard layout is available and detected
 * @returns True if keyboard layout detection is working
 */
function hasKeyboardLayoutDetection(): boolean {
  return getCurrentKeyboardLayout() !== KeyboardLayout.UNKNOWN;
}

/**
 * Checks if element has key prevention attributes
 * @param element - Element to check
 * @returns True if element prevents key capture
 */
function hasKeyPreventionAttribute(element: HTMLElement | SVGElement): boolean {
  return element.classList.contains('js-fullscreen-prevent-event-capture-keys') || element.getAttribute('data-fullscreen-prevent-event-capture-keys') !== null;
}

// Helper functions for event attribute checking
function hasWheelEventCaptureAttribute(element: HTMLElement | SVGElement): boolean {
  return element.classList.contains('js-fullscreen-wheel-event-capture') || element.getAttribute('data-fullscreen-wheel-event-capture') !== null;
}
function hasNoModifierWheelCaptureAttribute(element: HTMLElement | SVGElement): boolean {
  return element.classList.contains('js-fullscreen-no-mod-wheel-event-capture') || element.getAttribute('data-fullscreen-no-mod-wheel-event-capture') !== null;
}
function hasEventPreventionAttribute(element: HTMLElement | SVGElement): boolean {
  return element.classList.contains('js-fullscreen-prevent-event-capture') || element.getAttribute('data-fullscreen-prevent-event-capture') !== null || hasKeyPreventionAttribute(element);
}
function hasWheelEventPassthroughAttribute(element: HTMLElement | SVGElement): boolean {
  return element.classList.contains('js-fullscreen-wheel-event-passthrough') || element.getAttribute('data-fullscreen-wheel-event-passthrough') !== null;
}
function hasClipboardPassthroughAttribute(element: HTMLElement | SVGElement): boolean {
  return element.classList.contains('js-fullscreen-clipboard-event-passthrough') || element.getAttribute('data-fullscreen-clipboard-event-passthrough') !== null;
}
function hasModifierKeys(event: KeyboardEvent): boolean {
  return hasModifierKeyProperties(event) && (event.ctrlKey || event.metaKey);
}
function isClipboardEvent(eventType: string): boolean {
  return eventType === 'paste' || eventType === 'cut' || eventType === 'copy';
}

/**
 * windowManagerInstance class - Manages global window state, focus handling, clipboard operations, and fullscreen event management
 * Original class name: windowManagerInstance
 */
export class WindowManager {
  globalWindowState: FullscreenEventManager | null = null;
  focusEventBeingCalled: boolean = false;
  customFocusElementReadWrite: HTMLElement | null = null;
  customFocusElementReadOnly: HTMLInputElement | HTMLTextAreaElement | null = null;
  expectingTextInput: boolean = false;
  expectingCopyCutEvent: boolean = false;
  expectingPasteEvent: boolean = false;

  /**
   * Initializes the global window state with a fullscreen event manager
   * Original method name: initializeGlobalWindowState
   * @param viewElement - The HTML element to manage
   * @returns The initialized FullscreenEventManager instance
   */
  initializeGlobalWindowState(viewElement: HTMLElement): FullscreenEventManager {
    if (this.globalWindowState !== null) {
      throw new Error('Global window state already initialized');
    }
    if (HTMLWindow === undefined) {
      throw new Error('HTMLWindow cannot initialize without cpp module');
    }
    const fullscreenEventManager = new FullscreenEventManager(viewElement, HTMLWindow);
    this.globalWindowState = fullscreenEventManager;
    setKeyPressCallback(fullscreenEventManager.markKeydownEventForwarded);
    return fullscreenEventManager;
  }

  /**
   * Completes window setup by updating size and pixel ratio
   * Original method name: windowSetupComplete
   */
  windowSetupComplete(): void {
    this.globalWindowState?.updateSizeAndPixelRatio();
  }

  /**
   * Handles window updates before each tick
   * Original method name: windowHandleBeforeTick
   */
  windowHandleBeforeTick(): void {
    this.globalWindowState?.updateSizeAndPixelRatio();
  }

  /**
   * Destroys the window and cleans up resources
   * Original method name: destroyWindow
   */
  destroyWindow(): void {
    try {
      if (this.globalWindowState?.rootElement?.parentNode) {
        this.globalWindowState.rootElement.parentNode.removeChild(this.globalWindowState.rootElement);
      }
    } catch (error) {
      if (error.name === 'NotFoundError') {
        console.warn('Caught NotFoundError during removeChild', error);
      } else {
        console.error('Unexpected error:', error);
      }
    }
    this.globalWindowState?.destroy();
  }

  /**
   * Sets the document title
   * Original method name: setTitle
   * @param title - The new title
   */
  setTitle(title: string): void {
    document.title = title;
  }

  /**
   * Gets the current document title
   * Original method name: title
   * @returns The document title
   */
  title(): string {
    return document.title;
  }

  /**
   * Displays an alert dialog
   * Original method name: alert
   * @param title - Alert title
   * @param message - Alert message
   */
  alert(title: string, message: string): void {
    // eslint-disable-next-line no-alert
    alert(`${title}\n\n${message}`);
  }

  /**
   * Initializes reduced motion preference detection
   * Original method name: initPrefersReducedMotion
   */
  initPrefersReducedMotion(): void {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    HTMLWindow?.updatePrefersReducedMotion(mediaQuery.matches);
    mediaQuery.onchange = event => {
      HTMLWindow?.updatePrefersReducedMotion(event.matches);
    };
  }

  /**
   * Sets text caret bounds for the read-write focus element
   * Original method name: setTextCaretBounds
   * @param x - X position
   * @param y - Y position
   * @param height - Height of the caret
   */
  setTextCaretBounds(x: number, y: number, height: number): void {
    const element = this.customFocusElementReadWrite;
    if (!element) return;
    const hasVisibleCanvasInputs = document.body.getAttribute('data-visible-canvas-inputs');
    if (hasVisibleCanvasInputs) {
      element.style.left = '';
      element.style.top = '';
      element.style.height = '';
      element.style.fontSize = '';
    } else {
      element.style.left = `${x}px`;
      element.style.top = `${y}px`;
      element.style.height = `${height}px`;
      element.style.fontSize = `${0.8 * height}px`;
    }
  }

  /**
   * Sets whether text input is expected
   * Original method name: setExpectingTextInput
   * @param expecting - Whether text input is expected
   */
  setExpectingTextInput(expecting: boolean): void {
    if (this.expectingTextInput === expecting) return;
    this.expectingTextInput = expecting;
    this.updateCustomFocusType();
  }

  /**
   * Sets whether copy/cut event is expected
   * Original method name: setExpectingCopyCutEvent
   * @param expecting - Whether copy/cut event is expected
   */
  setExpectingCopyCutEvent(expecting: boolean): void {
    if (this.expectingCopyCutEvent === expecting) return;
    this.expectingCopyCutEvent = expecting;
    this.updateCustomFocusType();
  }

  /**
   * Sets whether paste event is expected
   * Original method name: setExpectingPasteEvent
   * @param expecting - Whether paste event is expected
   */
  setExpectingPasteEvent(expecting: boolean): void {
    if (this.expectingPasteEvent === expecting) return;
    this.expectingPasteEvent = expecting;
    this.updateCustomFocusType();
  }

  /**
   * Updates the custom focus element type based on expectations
   * Original method name: updateCustomFocusType
   */
  updateCustomFocusType(): void {
    // Skip if in VSCode iframe
    if (document.location.ancestorOrigins && document.location.ancestorOrigins.length > 1 && document.location.ancestorOrigins[1].startsWith('vscode')) {
      return;
    }
    const wasFocusEventDisabled = this.maybeTemporarilyDisableFocusEvents();
    if (this.expectingCopyCutEvent || !this.isExpectingTextInput()) {
      if (document.activeElement !== this.customFocusElementReadOnly && this.customFocusElementReadOnly) {
        this.customFocusElementReadOnly.focus();
        this.customFocusElementReadOnly.value = browserCapabilities.isChrome() ? '' : generateInvisibleInputText();
        this.customFocusElementReadOnly.selectionStart = 0;
        this.customFocusElementReadOnly.selectionEnd = 1;
      }
    } else if (this.customFocusElementReadWrite) {
      if (browserCapabilities.isIpad()) {
        this.customFocusElementReadWrite.style.left = '0px';
        this.customFocusElementReadWrite.style.top = '0px';
      }
      if (document.activeElement !== this.customFocusElementReadWrite) {
        this.customFocusElementReadWrite.focus();
      }
    }
    this.focusEventBeingCalled = wasFocusEventDisabled;
  }

  /**
   * Checks if any text input is expected
   * Original method name: isExpectingTextInput
   * @returns True if text input, copy, or paste is expected
   */
  isExpectingTextInput(): boolean {
    return this.expectingTextInput || this.expectingCopyCutEvent || this.expectingPasteEvent;
  }

  /**
   * Temporarily disables focus events if needed
   * Original method name: maybeTemporarilyDisableFocusEvents
   * @returns Previous focus event state
   */
  maybeTemporarilyDisableFocusEvents(): boolean {
    const previousState = this.focusEventBeingCalled;
    if (document.activeElement === this.customFocusElementReadOnly || document.activeElement === this.customFocusElementReadWrite) {
      this.focusEventBeingCalled = true;
    }
    return previousState;
  }

  /**
   * Focuses a specific view
   * Original method name: focusView
   * @param viewHandle - The view handle to focus
   */
  focusView(viewHandle: any): void {
    this.globalWindowState?.focusView(viewHandle, false);
  }

  /**
   * Gets the currently focused view handle
   * Original method name: viewWithFocus
   * @returns The focused view handle or null
   */
  viewWithFocus(): any {
    return this.globalWindowState?.currentViewHandleWithFocus ?? null;
  }

  /**
   * Sets the canvas view handle
   * Original method name: setCanvasView
   * @param viewHandle - The canvas view handle
   */
  setCanvasView(viewHandle: any): void {
    if (this.globalWindowState) {
      this.globalWindowState.canvasViewHandle = viewHandle;
    }
  }

  /**
   * Checks if multi-touch pointer events are being used
   * Original method name: usingMultiTouchPointerEvents
   * @returns True if multi-touch is enabled
   */
  usingMultiTouchPointerEvents(): boolean {
    return !!browserCapabilities.isMeetDevice() || (browserCapabilities.isIpadNative() || browserCapabilities.isiOS() && browserCapabilities.isInNativeApp()) && window.FigmaMobile?.shouldHandleMultiTouchInFullscreen;
  }

  /**
   * Executes the copy command
   * Original method name: execCommandCopy
   * @returns True if copy was successful
   */
  execCommandCopy(): boolean {
    const wasExpectingCopyCut = this.expectingCopyCutEvent;
    this.setExpectingCopyCutEvent(true);
    let success = false;
    try {
      success = document.execCommand('copy');
      if (!success && browserCapabilities.isEdge()) {
        success = true;
      }
    } catch (error) {
      console.warn(error);
    }
    this.setExpectingCopyCutEvent(wasExpectingCopyCut);
    return success;
  }

  /**
   * Reads clipboard contents for a specific format
   * Original method name: readClipboardContents
   * @param format - The data format to read
   * @returns The clipboard data or null
   */
  readClipboardContents(format: string): string | null {
    if (!this.globalWindowState?.clipboardDataTransfer) return null;
    try {
      let data = this.globalWindowState.clipboardDataTransfer.getData(format);
      // Remove BOM and null characters
      if (data.charCodeAt(0) === 65279) data = data.slice(1);
      if (data.charCodeAt(data.length - 1) === 0) data = data.slice(0, data.length - 1);
      return data;
    } catch {
      // Ignore errors
    }
    return null;
  }

  /**
   * Writes data to clipboard for a specific format
   * Original method name: writeClipboardContents
   * @param format - The data format
   * @param data - The data to write
   * @returns True if write was successful
   */
  writeClipboardContents(format: string, data: string): boolean {
    if (!this.globalWindowState?.clipboardDataTransfer) return false;
    try {
      this.globalWindowState.clipboardDataTransfer.setData(format, data);
      return true;
    } catch {
      // Ignore errors
    }
    return false;
  }

  /**
   * Clears clipboard contents
   * Original method name: clearClipboardContents
   */
  clearClipboardContents(): void {
    this.globalWindowState?.clipboardDataTransfer?.clearData();
  }

  /**
   * Reads clipboard contents as blob in HTML format
   * Original method name: tryToReadFromClipboardAsBlobInHTML
   * @param startMarker - Start marker string
   * @param endMarker - End marker string
   * @returns Decoded blob data or null
   */
  tryToReadFromClipboardAsBlobInHTML(startMarker: string, endMarker: string): Uint8Array | null {
    const jsSubstring = this.tryToReadJSSubstringFromClipboard(startMarker, endMarker);
    return jsSubstring === null ? null : decodeBase64(jsSubstring);
  }

  /**
   * Reads substring from clipboard and decodes it
   * Original method name: tryToReadSubstringFromClipboard
   * @param startMarker - Start marker string
   * @param endMarker - End marker string
   * @returns Decoded substring or null
   */
  tryToReadSubstringFromClipboard(startMarker: string, endMarker: string): string | null {
    const jsSubstring = this.tryToReadJSSubstringFromClipboard(startMarker, endMarker);
    return jsSubstring === null ? null : decodeURIComponent(escape(atob(jsSubstring)));
  }

  /**
   * Reads JavaScript substring from clipboard HTML data
   * Original method name: tryToReadJSSubstringFromClipboard
   * @param startMarker - Start marker string
   * @param endMarker - End marker string
   * @returns The substring between markers or null
   */
  tryToReadJSSubstringFromClipboard(startMarker: string, endMarker: string): string | null {
    if (!this.globalWindowState?.clipboardDataTransfer) return null;
    try {
      const htmlData = this.globalWindowState.clipboardDataTransfer.getData('text/html');
      const startIndex = htmlData.indexOf(startMarker);
      const endIndex = htmlData.indexOf(endMarker);
      if (startIndex >= 0 && endIndex >= 0 && startIndex < endIndex) {
        return htmlData.slice(startIndex + startMarker.length, endIndex);
      }
    } catch {
      // Ignore errors
    }
    return null;
  }

  /**
   * Attempts to read files from clipboard
   * Original method name: tryToReadFilesFromClipboard
   * @returns File array string or null
   */
  tryToReadFilesFromClipboard(): string | null {
    if (!this.globalWindowState?.clipboardDataTransfer) return null;
    try {
      const files: File[] = [];
      const items = this.globalWindowState.clipboardDataTransfer.items;
      for (let i = 0; i < items.length; i++) {
        const item = items[i];
        if (item && item.kind === 'file') {
          const file = item.getAsFile();
          if (file && file.size > 0) {
            files.push(file);
          }
        }
      }
      if (files.length > 0) {
        if (!fullscreenValue.fileArrayToString) {
          logWarning('Clipboard', 'Unable to read files to clipboard. fileArrayToString is not defined');
          return null;
        }
        return fullscreenValue.fileArrayToString(files);
      }
    } catch {
      // Ignore errors
    }
    return null;
  }

  /**
   * Detects if spreadsheet data is on the clipboard
   * Original method name: tryToDetectSpreadsheetDataOnClipboard
   * @returns True if spreadsheet data detected
   */
  tryToDetectSpreadsheetDataOnClipboard(): boolean {
    if (!this.globalWindowState?.clipboardDataTransfer) return false;
    try {
      const htmlData = this.globalWindowState.clipboardDataTransfer.getData('text/html').trim();
      const tableStart = '<table';
      const tableEnd = '</table>';
      const metaStart = htmlData.indexOf('<meta');
      const metaEnd = htmlData.indexOf('>', metaStart);
      const tableStartIndex = htmlData.indexOf(tableStart);
      const tableEndIndex = htmlData.indexOf(tableEnd);
      if (tableStartIndex >= 0 && tableEndIndex >= 0 && tableStartIndex < tableEndIndex) {
        const isGoogleSheets = htmlData.includes('google-sheets-html-origin');
        const isExcel = htmlData.includes('content=Excel.Sheet');
        if (isGoogleSheets || isExcel) return true;
        const hasSingleTable = !htmlData.includes(tableStart, tableStartIndex + 1);
        const isCleanTable = (metaStart === 0 && metaEnd + 1 === tableStartIndex || tableStartIndex === 0) && tableEndIndex === htmlData.length - tableEnd.length;
        return hasSingleTable && isCleanTable;
      }
    } catch {
      // Ignore errors
    }
    return false;
  }

  /**
   * Detects if line data is on the clipboard
   * Original method name: tryToDetectLineDataOnClipboard
   * @returns True if line data detected
   */
  tryToDetectLineDataOnClipboard(): boolean {
    if (!this.globalWindowState?.clipboardDataTransfer) return false;
    try {
      const htmlData = this.globalWindowState.clipboardDataTransfer.getData('text/html');
      const dirAttr = ' dir=';
      let paragraphIndex = htmlData.indexOf('<p');
      let hasDirAttribute = false;
      if (paragraphIndex >= 0) {
        let dirIndex = htmlData.indexOf(dirAttr, paragraphIndex);
        if (dirIndex === -1) return false;
        while (paragraphIndex >= 0) {
          const closingBracketIndex = htmlData.indexOf('>', paragraphIndex);
          if (closingBracketIndex === -1) return false;
          if (dirIndex < closingBracketIndex) {
            hasDirAttribute = true;
            break;
          }
          paragraphIndex = htmlData.indexOf('<p', paragraphIndex + 1);
          dirIndex = htmlData.indexOf(dirAttr, paragraphIndex);
        }
      }
      return hasDirAttribute;
    } catch {
      // Ignore errors
    }
    return false;
  }

  /**
   * Writes blob data to clipboard as HTML
   * Original method name: writeToClipboardAsBlobInHTML
   * @param prefix - HTML prefix
   * @param data - Data to encode
   * @param middle - HTML middle section
   * @param suffix - HTML suffix
   * @param blobData - Blob data to encode
   * @param end - HTML end section
   * @param plainText - Plain text fallback
   * @param richText - Rich text HTML
   * @returns True if write was successful
   */
  writeToClipboardAsBlobInHTML(prefix: string, data: string, middle: string, suffix: string, blobData: Uint8Array, end: string, plainText: string, richText?: string): boolean {
    if (!this.globalWindowState?.clipboardDataTransfer) return false;
    const escapedPlainText = `<span style="white-space:pre-wrap;">${escapeHtml(plainText).replace(/\n/g, '<br>')}</span>`;
    const htmlContent = `<meta charset="utf-8">${prefix}${btoa(unescape(encodeURIComponent(data)))}${middle}${suffix}${encodeBase64(blobData)}${end}${getFeatureFlags().ce_rich_text_copy && richText ? richText : escapedPlainText}`;
    try {
      this.globalWindowState.clipboardDataTransfer.setData('text/html', htmlContent);
      return true;
    } catch {
      // Ignore errors
    }
    return false;
  }
}

// Create singleton instance
export const windowManagerInstance = new WindowManager();

// Update exports to match refactored names
export const IM = windowManagerInstance;
export const II = UpdateVisibilityStatus;