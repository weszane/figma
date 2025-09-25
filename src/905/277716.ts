import { useCallback, useRef } from 'react';
import { jsx } from 'react/jsx-runtime';
import { C } from '../905/213457';
import { nt, o3 } from '../905/226610';
import { trackEventAnalytics } from '../905/449184';
import { F } from '../905/680873';
import { EM, wu } from '../905/729783';
import { InteractivityContext } from '../905/896141';
import { microtaskThrottle } from '../905/915765';
import { ET, MF, ps, Pu, R8, VC } from '../905/939257';
import { Ap, Bu, qR, SD } from '../figma_app/243213';
// Original file: /Users/allen/github/fig/src/905/277716.ts

// Refactored utility functions for event handling and interaction tracking
// Grouped together for logical cohesion related to DOM interactions and throttling

/**
 * Checks if the given element is an HTMLElement. Logs an error if not.
 * Original: h
 * @param element - The element to check.
 * @returns The HTMLElement if valid, otherwise undefined.
 */
function isHTMLElement(element: any): HTMLElement | undefined {
  const htmlElement = SD(element);
  if (!htmlElement) {
    console.error(`${JSON.stringify(element)} is not an HTMLElement`);
  }
  return htmlElement;
}

/**
 * Extracts target and root HTMLElements from an event.
 * Original: g
 * @param event - The event object.
 * @returns An object with target and root HTMLElements, or null if invalid.
 */
function getEventElements(event: Event): {
  target: HTMLElement;
  root: HTMLElement;
} | null {
  const target = isHTMLElement(event.target);
  const root = isHTMLElement(event.currentTarget);
  return target && root ? {
    target,
    root
  } : null;
}

/**
 * Wraps a function with microtask throttling.
 * Original: f
 * @param func - The function to throttle.
 * @returns The throttled function.
 */
function throttleFunction<T extends (...args: any[]) => void>(func: T) {
  return microtaskThrottle(func);
}

/**
 * Checks if an element is interactive (not marked as non-interactive or disabled).
 * Original: _
 * @param element - The element to check.
 * @returns True if interactive, false otherwise.
 */
function isInteractiveElement(element: HTMLElement): boolean {
  return !element.hasAttribute('data-non-interactive') && !element.hasAttribute('disabled');
}

/**
 * Handles pointer down events for interaction tracking.
 * Original: A
 * @param eventElements - The target and root elements from the event.
 * @param trackCallback - The callback to track the interaction.
 */
const handlePointerDown = throttleFunction((eventElements: {
  target: HTMLElement;
  root: HTMLElement;
}, trackCallback: (data: any) => void) => {
  const {
    target,
    root
  } = eventElements;
  if (!isInteractiveElement(target) || target.hasAttribute('data-non-interactive') || Ap(target)) {
    return;
  }
  const interactable = qR(target, root, Bu);
  trackCallback(interactable ? {
    userInputMethod: 'pointer',
    interactionType: 'action',
    ...Pu(interactable)
  } : {
    userInputMethod: 'pointer',
    interactionType: 'unattributed',
    ...Pu(target)
  });
});

/**
 * Handles blur events for interaction tracking.
 * Original: y
 * @param eventElements - The target and root elements from the event.
 * @param currentRef - A ref to track the current element.
 */
const handleBlur = throttleFunction((eventElements: {
  target: HTMLElement;
  root: HTMLElement;
}, currentRef: React.MutableRefObject<HTMLElement | null>) => {
  const {
    target
  } = eventElements;
  if (isInteractiveElement(target)) {
    currentRef.current = null;
  }
});

/**
 * Handles key down events for interaction tracking.
 * Original: b
 * @param eventElements - The target and root elements from the event.
 * @param key - The key pressed.
 * @param currentRef - A ref to track the current element.
 * @param trackCallback - The callback to track the interaction.
 */
const handleKeyDown = throttleFunction((eventElements: {
  target: HTMLElement;
  root: HTMLElement;
}, key: string, currentRef: React.MutableRefObject<HTMLElement | null>, trackCallback: (data: any) => void) => {
  const {
    target,
    root
  } = eventElements;
  if (!isInteractiveElement(target) || target.hasAttribute('data-non-interactive') || Ap(target)) {
    return;
  }
  const interactable = qR(target, root, Bu);
  if (interactable && key === 'Enter') {
    trackCallback({
      userInputMethod: 'keyboard',
      interactionType: 'action',
      ...Pu(interactable)
    });
  }
  if (key !== 'Tab') {
    if (currentRef.current === target) {
      return;
    }
    currentRef.current = target;
    trackCallback({
      userInputMethod: 'keyboard',
      interactionType: 'unattributed',
      ...Pu(target)
    });
  }
});

/**
 * Handles change events for interaction tracking.
 * Original: v
 * @param eventElements - The target and root elements from the event.
 * @param currentRef - A ref to track the current element.
 * @param trackCallback - The callback to track the interaction.
 */
const handleChange = throttleFunction((eventElements: {
  target: HTMLElement;
  root: HTMLElement;
}, currentRef: React.MutableRefObject<HTMLElement | null>, trackCallback: (data: any) => void) => {
  const {
    target
  } = eventElements;
  if (!(!isInteractiveElement(target) || target.hasAttribute('data-non-interactive')) && Ap(target)) {
    if (currentRef.current === target) {
      return;
    }
    currentRef.current = target;
    trackCallback({
      userInputMethod: 'unknown',
      interactionType: 'input',
      ...Pu(target)
    });
  }
});

// Main component: AutoInteractable
// Refactored from $$E, split logic into smaller units for clarity
// Added TypeScript types for props and internal functions

interface AutoInteractableProps {
  name: string;
  children: React.ReactNode;
  alsoTrack?: any; // Based on F(i), likely a ref or similar
}

/**
 * A React component that automatically tracks interactions on its children.
 * Original: $$E
 * @param props - The component props.
 * @returns The JSX element.
 */
function AutoInteractable({
  name,
  children,
  alsoTrack
}: AutoInteractableProps) {
  const alsoTrackRef = F(alsoTrack);
  const trackable = MF({
    name,
    alsoTrackRef
  });
  const context = ps(trackable);
  const {
    error,
    trackablePath
  } = context;
  const additionalData = MF(() => ET(trackablePath, trackable));

  // Track callback function
  const trackInteraction = useCallback((interactionData: any) => {
    if (!error && VC(trackablePath)) {
      const fullData = {
        ...interactionData,
        ...additionalData()
      };
      wu.trigger(EM, fullData);
      trackEventAnalytics(EM, fullData);
    }
  }, [trackablePath, trackable, additionalData, error]);

  // Event handlers setup
  const currentElementRef = useRef<HTMLElement | null>(null);
  const eventHandlers = {
    onKeyDownCapture: useCallback((event: React.KeyboardEvent) => {
      const elements = getEventElements(event.nativeEvent);
      if (elements) {
        handleKeyDown(elements, event.key, currentElementRef, trackInteraction);
      }
    }, [trackInteraction]),
    onPointerDownCapture: useCallback((event: React.PointerEvent) => {
      const elements = getEventElements(event.nativeEvent);
      if (elements) {
        handlePointerDown(elements, trackInteraction);
      }
    }, [trackInteraction]),
    onChangeCapture: useCallback((event: React.ChangeEvent) => {
      const elements = getEventElements(event.nativeEvent);
      if (elements) {
        handleChange(elements, currentElementRef, trackInteraction);
      }
    }, [trackInteraction]),
    onBlurCapture: useCallback((event: React.FocusEvent) => {
      const elements = getEventElements(event.nativeEvent);
      if (elements) {
        handleBlur(elements, currentElementRef);
      }
    }, [])
  };
  const isDebugMode = o3(nt.trackableDebug);
  const tooltipText = MF(() => R8({
    componentName: 'AutoInteractable',
    name,
    error,
    alsoTrackedProperties: additionalData()
  }));
  const wrappedChildren = C({
    children,
    isDebugMode,
    name,
    color: error ? 'red' : 'blue',
    depth: trackablePath.length + 1,
    getTooltipText: tooltipText
  });
  return jsx(InteractivityContext.Provider, {
    value: context,
    children: jsx('div', {
      className: 'displayContents',
      ...eventHandlers,
      children: wrappedChildren
    })
  });
}

/**
 * Wrapper function for AutoInteractable component.
 * Original: $$I0
 * @param props - The props to pass to AutoInteractable.
 * @returns The AutoInteractable JSX element.
 */
export function AutoInteractableWrapper(props: AutoInteractableProps) {
  return jsx(AutoInteractable, {
    ...props
  });
}

// Export the wrapper as the main export, renamed for clarity
// Original: export const E = $$I0
export const E = AutoInteractableWrapper;
