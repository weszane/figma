import type { Fn } from '../../../types/global';
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { requestDeferredExecution } from '../905/561433';
import { useSyncedRef } from '../905/633914';
import { useFullscreenReady } from '../905/924253';
import { weakHandleHelpers } from '../figma_app/763686';

/**
 * Checks if the observable handle is alive.
 * Original: $$l2
 */
export function isObservableAlive(observable: any): boolean {
  return weakHandleHelpers?.isAlive(observable.handle) ?? false;
}

/**
 * Set to track deferred callbacks.
 * Original: d
 */
const deferredCallbacks = new Set<Fn>();

/**
 * Adds a callback to the deferred set and requests execution.
 * Original: c
 */
function addDeferredCallback(callback: Fn) {
  if (!deferredCallbacks.has(callback)) {
    deferredCallbacks.add(callback);
    requestDeferredExecution();
  }
}

/**
 * Subscribes to observable changes and handles immediate and deferred callbacks.
 * Original: $$u3
 */
export function subscribeObservable(observable: any, {
  onChangeImmediate,
  onChangeDeferred
}: {
  onChangeImmediate?: () => void;
  onChangeDeferred?: () => void;
}) {
  const subscription = observable.subscribeFromJs(() => {
    onChangeImmediate?.();
    if (onChangeDeferred) addDeferredCallback(onChangeDeferred);
  });
  return () => {
    if (onChangeDeferred) deferredCallbacks.delete(onChangeDeferred);
    if (observable instanceof Object) {
      isObservableAlive(observable) && observable.unsubscribeFromJs(subscription);
    } else {
      try {
        observable.unsubscribeFromJs(subscription);
      } catch { }
    }
  };
}

/**
 * Executes all deferred callbacks.
 * Original: $$p1
 */
export function executeDeferredCallbacks() {
  if (deferredCallbacks.size === 0) return;
  const callbacks = new Set(deferredCallbacks);
  deferredCallbacks.clear();
  for (const callback of callbacks) callback();
}

/**
 * Internal counter for state updates.
 * Original: _
 */
let updateCounter = 0;

/**
 * Symbol representing an empty observable.
 * Original: h
 */
const EMPTY_OBSERVABLE = Symbol('EMPTY_OBSERVABLE');

/**
 * Returns the observable value or a fallback if not alive.
 * Original: $$m0
 */
export function getObservableOrFallback(observable: any) {
  return getObservableValue(observable, EMPTY_OBSERVABLE);
}

/**
 * Returns the current value of an observable, updating on changes.
 * Original: $$g4
 */
export function getObservableValue(observable: any, fallback: any) {
  useFullscreenReady();
  const [_, setUpdate] = useState(0);
  const triggerUpdate = useCallback(() => {
    setUpdate(++updateCounter);
  }, []);
  const valueRef = useRef<any>(EMPTY_OBSERVABLE);
  const resetValue = () => {
    valueRef.current = EMPTY_OBSERVABLE;
  };
  useEffect(() => {
    if (!observable || !isObservableAlive(observable)) return;
    const unsubscribe = subscribeObservable(observable, {
      onChangeImmediate: resetValue,
      onChangeDeferred: triggerUpdate
    });
    const currentValue = observable.getCopy();
    if (valueRef.current !== currentValue) {
      resetValue();
      addDeferredCallback(triggerUpdate);
    }
    return unsubscribe;
  }, [observable, triggerUpdate]);
  if (valueRef.current === EMPTY_OBSERVABLE && observable && isObservableAlive(observable)) {
    valueRef.current = observable.getCopy();
  }
  return valueRef.current === EMPTY_OBSERVABLE ? fallback : valueRef.current;
}

/**
 * Returns the current value of an observable using a synced ref.
 * Original: $$f5
 */
export function useSyncedObservableValue(observable: any, fallback: any) {
  useFullscreenReady();
  const [ref, value, setValue] = useSyncedRef(EMPTY_OBSERVABLE);
  useLayoutEffect(() => {
    if (!observable || !isObservableAlive(observable)) return;
    const unsubscribe = subscribeObservable(observable, {
      onChangeImmediate: () => {
        if (isObservableAlive(observable)) setValue(observable.getCopy());
      }
    });
    const currentValue = observable.getCopy();
    if (ref.current !== currentValue) setValue(currentValue);
    return unsubscribe;
  }, [observable, ref, setValue]);
  return value === EMPTY_OBSERVABLE ? fallback : value;
}

// Exported names refactored for clarity and traceability
export const J2 = getObservableOrFallback;
export const TG = executeDeferredCallbacks;
export const _n = isObservableAlive;
export const lu = subscribeObservable;
export const ut = getObservableValue;
export const xB = useSyncedObservableValue;
