import { useEffect, useLayoutEffect, useMemo, useRef } from 'react';
import { isRegularQuery, isPaginatedQuery } from '../905/16369';
import { useMemoShallow } from '../905/19536';
import { createRefetcher, createPaginator } from '../905/80725';
import { getResourceAtomStore } from '../905/157003';
import { logErrorAndReturn } from '../905/607410';
import { hasInternalSymbol } from '../905/663269';
import { isEnabled } from '../905/745286';
import { resourceUtils } from '../905/989992';
import { atom, atomStoreManager, useAtomValueAndSetter, useAtomWithSubscription } from '../figma_app/27355';

/**
 * Resource Atom Handler (original: $$_2)
 * Handles different resource atom types and returns their state and controls.
 * @param e Resource atom or view
 * @param t Options
 * @returns [state, controls]
 */
export function setupResourceAtomHandler(e: any, t: any = {}) {
  if (isPaginatedQuery(e)) {
    // Paginated resource atom
    return handlePaginatedResourceAtom(e, t);
  }
  if (isRegularQuery(e)) {
    // Suspendable resource atom
    return handleSuspendableResourceAtom(e, t);
  }
  // Internal symbol or generic atom
  return hasInternalSymbol(e) ? handleGenericResourceAtom(getResourceAtomStore(e.view)(e.args), t) : handleGenericResourceAtom(e, t);
}
const defaultAtom = atom([null, null]);

/**
 * Handles paginated resource atom (original: inline in $$_2)
 */
function handlePaginatedResourceAtom(e: any, t: any) {
  const atomToUse = isEnabled(t) ? e : defaultAtom;
  let [resource, setter] = useAtomValueAndSetter(atomToUse);
  if (!isEnabled(t)) {
    resource = resourceUtils.Paginated.disabled();
    setter = undefined;
  }
  const controls = useMemo(() => createPaginator(setter), [setter]);
  return useMemo(() => [resource, controls], [resource, controls]);
}

/**
 * Handles suspendable resource atom (original: inline in $$_2)
 */
function handleSuspendableResourceAtom(e: any, t: any) {
  const atomToUse = isEnabled(t) ? e : defaultAtom;
  let [resource, setter] = useAtomValueAndSetter(atomToUse);
  if (!isEnabled(t)) {
    resource = resourceUtils.disabledSuspendable({
      release: () => {}
    });
    setter = undefined;
  }
  const controls = useMemo(() => createRefetcher(setter), [setter]);
  useLayoutEffect(() => {
    if (t.revalidateOnMount) controls.refetch();
  }, [t.revalidateOnMount, controls]);
  return useMemo(() => [resource, controls], [resource, controls]);
}

/**
 * Handles generic resource atom (original: m)
 */
function handleGenericResourceAtom(e: any, t: any) {
  if (isEnabled(t)) {
    return [useAtomWithSubscription(e), undefined];
  }
  useAtomWithSubscription(defaultAtom);
  return [resourceUtils.disabledSuspendable({
    release: () => {}
  }), undefined];
}

/**
 * Memoized Atom Subscription (original: $$g1)
 * @param e Array of atoms
 * @param t Options
 * @returns Atom subscription value
 */
export function setupMemoizedAtomSubscription(e: any, t: any = {}) {
  const enabled = isEnabled(t);
  const memoizedAtoms = useMemoShallow(() => e, [e]);
  const atomToSubscribe = useMemo(() => enabled ? atom((get: any) => memoizedAtoms.map((fn: any) => get(fn))) : atom(() => memoizedAtoms.map(() => resourceUtils.disabled())), [memoizedAtoms, enabled]);
  useEffect(() => {
    const unsubscribe = atomStoreManager.sub(atomToSubscribe, () => {});
    return () => {
      requestAnimationFrame(unsubscribe);
    };
  }, [atomToSubscribe]);
  return useAtomWithSubscription(atomToSubscribe);
}

/**
 * Suspense Retain/Release Handler (original: $$E6)
 * Retains loading suspenses and releases others.
 * @param resources Array of resource objects
 * @returns Array of resources
 */
export function handleSuspenseRetainRelease(...resources: any[]) {
  const loadingSuspenses = resources.filter(r => r.status === 'loading').map(r => r.suspense);
  const nonLoadingSuspenses = resources.filter(r => r.status !== 'loading').map(r => r.suspense);
  if (loadingSuspenses.length > 0) {
    loadingSuspenses.forEach(suspense => suspense.retain());
    logErrorAndReturn(Promise.all(loadingSuspenses.map(suspense => suspense.getPromise())));
  }
  useEffect(() => {
    nonLoadingSuspenses.forEach(suspense => suspense.release());
  }, [nonLoadingSuspenses]);
  return [...resources];
}

/**
 * Metrics Handler for Resource Atom (original: $$b4)
 * Handles metrics and suspense for resource atom.
 * @param e Resource atom
 * @param t Mode
 * @param r Metrics options
 * @returns Resource atom
 */
const metricsTimeMap: Record<string, number> = {};
export function handleResourceAtomMetrics(e: any, t: any, r: any) {
  const onResolve = r?.onResolveForMetrics;
  const metricKey = r?.metricKey;
  const notLoading = e.status !== 'loading';
  const isLoaded = e.status === 'loaded';
  if (e.status === 'loading' && t === 'suspend') {
    if (metricKey) {
      r?.willSuspend?.();
      metricsTimeMap[metricKey] = performance.now();
    }
    e.suspense.retain();
    logErrorAndReturn(e.suspense.getPromise());
  }
  useEffect(() => {
    if (notLoading) e.suspense.release();
  }, [notLoading, e.suspense]);
  useEffect(() => {
    if (isLoaded && onResolve && metricKey && metricsTimeMap[metricKey] != null) {
      const duration = performance.now() - metricsTimeMap[metricKey];
      delete metricsTimeMap[metricKey];
      onResolve(duration);
    }
  }, [isLoaded, onResolve, metricKey]);
  return e;
}

/**
 * Status Change Effect Handler (original: $$T0)
 * Calls callback when resource status changes from 'loading' to 'loaded'.
 * @param e Resource atom
 * @param t Callback
 */
export function handleStatusChangeEffect(e: any, t: (data: any) => void) {
  const statusRef = useRef<string>('');
  useLayoutEffect(() => {
    if (statusRef.current === 'loading' && e.status === 'loaded') {
      t(e.data);
    }
    statusRef.current = e.status;
  }, [e, t]);
}

/**
 * Atom Subscription with Enabled Check (original: $$I7)
 * @param e Atom
 * @param t Options
 * @returns Atom value or undefined
 */
export function getAtomWithEnabledCheck(e: any, t: any) {
  const enabled = t?.enabled;
  const value = useAtomWithSubscription(e);
  if (enabled !== false) return value;
}

/**
 * Atom Mutate Getter (original: $$S5)
 * @param e Atom
 * @param t Options
 * @returns Mutate function or undefined
 */
export function getAtomMutate(e: any, t: any) {
  return getAtomWithEnabledCheck(e, t)?.mutate;
}

/**
 * Atom Setter Factory (original: $$v3)
 * @param e Atom
 * @returns Setter function
 */
export function createAtomSetter(e: any) {
  return (value: any) => atomStoreManager.set(e, [value]);
}

// Exported names refactored for clarity and traceability
export const DC = handleStatusChangeEffect;
export const En = setupMemoizedAtomSubscription;
export const IT = setupResourceAtomHandler;
export const Jl = createAtomSetter;
export const QV = handleResourceAtomMetrics;
export const gY = getAtomMutate;
export const mI = handleSuspenseRetainRelease;
export const n_ = getAtomWithEnabledCheck;