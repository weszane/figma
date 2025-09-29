// Refactored from /Users/allen/sigma-main/src/figma_app/62612.ts

import type { IPoint } from '../905/736624';
import { useContext, useEffect, useMemo, useRef } from 'react';
import { flushSync } from 'react-dom';
import { requestDeferredExecution } from '../905/561433';
import { logError } from '../905/714362';
import { Point } from '../905/736624';
import { activeStateContext, currentViewportRefContext, defaultViewportState, frameCountContext, previousViewportRefContext, viewportHeightContext, viewportOffsetXContext, viewportOffsetYContext, viewportPanningContext, viewportWidthContext, viewportXContext, viewportYContext, viewportZoomContext, viewportZoomingContext } from '../figma_app/298911';
import { fullscreenValue } from '../figma_app/455680';
import { shouldRenderRulers } from '../figma_app/740163';
import { Fullscreen } from '../figma_app/763686';
import { parsePxNumber } from '../figma_app/783094';
import { rulerThickness } from '../figma_app/786175';
import { memoizeByArgs } from '../figma_app/815945';

// --- Types ---
/**
 * Viewport information type
 */
export interface ViewportInfo {
  x: number;
  y: number;
  width: number;
  height: number;
  offsetX: number;
  offsetY: number;
  zoomScale: number;
  isPanning: boolean;
  isZooming: boolean;
}

/**
 * Rectangle type
 */
export interface Rect {
  x: number;
  y: number;
  width: number;
  height: number;
  w?: number
  h?: number
}

/**
 * Context subscription type
 */
export interface ViewportSubscription {
  subscribeToUpdates_expensive: boolean;
}

// --- Utility Functions ---

/**
 * Converts a point from viewport to screen coordinates.
 * @param viewport - ViewportInfo
 * @param point - Point
 * @param rounded - Whether to round the result
 * @returns Point
 * (Original: $$g16)
 */
export function viewportToScreen(viewport: ViewportInfo, point: IPoint, rounded = true) {
  const screenPoint = {
    x: viewport.width / 2 + (point.x - viewport.offsetX) * viewport.zoomScale,
    y: viewport.height / 2 + (point.y - viewport.offsetY) * viewport.zoomScale
  };
  return rounded ? Point.rounded(screenPoint) : screenPoint;
}

/**
 * Returns a viewport info with offset applied.
 * @param viewport - ViewportInfo
 * @param offset - Point
 * @returns ViewportInfo
 * (Original: $$T0)
 */
export function applyOffsetToViewport(viewport: ViewportInfo, offset: Point) {
  return Point.rounded({
    x: (offset.x - viewport.width / 2) / viewport.zoomScale + viewport.offsetX,
    y: (offset.y - viewport.height / 2) / viewport.zoomScale + viewport.offsetY
  });
}

/**
 * Returns a new viewport info with a delta applied.
 * @param viewport - ViewportInfo
 * @param delta - Point
 * @returns ViewportInfo
 * (Original: $$f7)
 */
export function viewportWithDelta(viewport: ViewportInfo, delta: Point) {
  const base = new Point(viewport.x, viewport.y);
  return applyOffsetToViewport(viewport, Point.subtract(delta, base));
}

/**
 * Adds a viewport offset to a point.
 * @param viewport - ViewportInfo
 * @param point - Point
 * @returns Point
 * (Original: $$E1)
 */
export function addViewportOffset(viewport: ViewportInfo, point: IPoint): Point {
  const base = new Point(viewport.x, viewport.y);
  const screen = viewportToScreen(viewport, point);
  return Point.add(screen, base);
}

/**
 * Rounds division result.
 * @param value - number
 * @param divisor - number
 * @returns number
 * (Original: $$y21)
 */
export function roundedDivision(value: number, divisor: number): number {
  return Math.round(value / divisor - 0.5);
}

/**
 * Calculates a centered value.
 * @param value - number
 * @param offset - number
 * @param scale - number
 * @param size - number
 * @returns number
 * (Original: $$b12)
 */
export function centeredValue(value: number, offset: number, scale: number, size: number): number {
  return Math.round(size / 2 + (value - offset) * scale);
}

/**
 * Returns a scaled rectangle.
 * @param viewport - ViewportInfo
 * @param rect - Rect
 * @param rounded - boolean
 * @returns Rect
 * (Original: $$I15)
 */
export function scaleRect(viewport: ViewportInfo, rect: Rect, rounded?: boolean): Rect {
  const screen = viewportToScreen(viewport, {
    x: rect.x,
    y: rect.y
  }, rounded);
  return {
    x: screen.x,
    y: screen.y,
    width: rect.width * viewport.zoomScale,
    height: rect.height * viewport.zoomScale
  };
}

/**
 * Checks if a rectangle is inside another rectangle.
 * @param rect - Rect
 * @param bounds - Rect
 * @returns boolean
 * (Original: $$S17)
 */
export function isRectInside(rect: Rect, bounds: Rect): boolean {
  return !(rect.x + rect.width < 0) && !(rect.x > bounds.width) && !(rect.y + rect.height < 0) && !(rect.y > bounds.height);
}

/**
 * Checks if a rectangle is inside the viewport.
 * @param rect - Rect
 * @param viewport - ViewportInfo
 * @returns boolean
 * (Original: $$v14)
 */
export function isRectInsideViewport(rect: Rect, viewport: ViewportInfo): boolean {
  const {
    offsetX,
    offsetY,
    zoomScale,
    width,
    height
  } = viewport;
  return !(rect.x < offsetX - width / 2 / zoomScale) && !(rect.x + rect.width > offsetX + width / 2 / zoomScale) && !(rect.y < offsetY - height / 2 / zoomScale) && !(rect.y + rect.height > offsetY + height / 2 / zoomScale);
}

/**
 * Returns the visible area of the viewport.
 * @param viewport - ViewportInfo
 * @returns Rect | Error
 * (Original: $$A24)
 */
export function getVisibleArea(viewport: ViewportInfo): Rect | Error {
  if (viewport.height < 0 || viewport.width < 0 || viewport.zoomScale <= 0) {
    logError('Viewport', 'invalid values', {
      info: viewport
    });
    return new Error('Invalid Viewport');
  }
  return {
    x: viewport.offsetX - viewport.width / viewport.zoomScale / 2,
    y: viewport.offsetY - viewport.height / viewport.zoomScale / 2,
    width: viewport.width / viewport.zoomScale,
    height: viewport.height / viewport.zoomScale
  };
}

/**
 * Adds two rectangles.
 * @param rect - Rect
 * @param offset - Point
 * @returns Rect
 * (Original: $$x4)
 */
export function addRectOffset(rect: Rect, offset: Point): Rect {
  return {
    x: rect.x + offset.x,
    y: rect.y + offset.y,
    width: rect.width,
    height: rect.height
  };
}

/**
 * Memoizes a rectangle.
 * @param rect - Rect
 * @returns Rect
 * (Original: $$N25)
 */
export function memoizedRect(rect: Rect): Rect {
  return memoizeByArgs((x, y, height, width) => ({
    x,
    y,
    height,
    width
  }))(rect.x, rect.y, rect.height, rect.width);
}

/**
 * Returns a ref that updates with the latest viewport info.
 * @param subscription - ViewportSubscription
 * @returns React.RefObject<ViewportInfo>
 * (Original: $$C19)
 */
export function useLatestViewportRef(subscription: ViewportSubscription): React.RefObject<ViewportInfo> {
  const info = getViewportInfo(subscription);
  const ref = useRef(info);
  useEffect(() => {
    ref.current = info;
  }, [ref, info]);
  return ref;
}

/**
 * Returns viewport info with deltas.
 * @param subscription - ViewportSubscription
 * @returns ViewportInfo & { deltaOffsetX: number, deltaOffsetY: number, deltaZoomScale: number }
 * (Original: $$w8)
 */
export function useViewportWithDelta({
  subscribeToUpdates_expensive
}: ViewportSubscription) {
  const current = getViewportInfo({
    subscribeToUpdates_expensive
  });
  const previous = useContext(previousViewportRefContext).current || current;
  const deltaOffsetX = current.offsetX - previous.offsetX;
  const deltaOffsetY = current.offsetY - previous.offsetY;
  const deltaZoomScale = current.zoomScale - previous.zoomScale;
  return {
    ...current,
    deltaOffsetX,
    deltaOffsetY,
    deltaZoomScale
  };
}

/**
 * Subscribes to fullscreen viewport updates.
 * @param subscription - ViewportSubscription
 * @param setViewport - (info: any) => void
 * (Original: $$O3)
 */
export function useFullscreenViewportUpdates(subscription: ViewportSubscription, setViewport: (info: any) => void) {
  useEffect(() => {
    if (fullscreenValue?.isReady() && subscription.subscribeToUpdates_expensive) {
      setViewport(fullscreenValue.getViewportInfo());
      requestDeferredExecution();
    }
  }, [setViewport, subscription.subscribeToUpdates_expensive]);
  useEffect(() => {
    if (fullscreenValue && subscription.subscribeToUpdates_expensive) {
      const handler = (info: any) => {
        flushSync(() => setViewport(info));
      };
      fullscreenValue.viewport.on('onSetViewport', handler);
      return () => {
        fullscreenValue.viewport.removeListener('onSetViewport', handler);
      };
    }
  }, [setViewport, subscription.subscribeToUpdates_expensive]);
}

/**
 * Gets the current viewport info from context.
 * @param context - React.Context<any>
 * @returns ViewportInfo
 * (Original: R)
 */
function getContextViewport(context: React.Context<any>): ViewportInfo {
  useContext(context);
  return useContext(currentViewportRefContext).current || defaultViewportState;
}

/**
 * Gets the X value from the viewport.
 * @param subscription - ViewportSubscription
 * @returns number
 * (Original: $$L6)
 */
export function getViewportX(subscription: ViewportSubscription): number {
  return getContextViewport(subscription.subscribeToUpdates_expensive ? viewportXContext : frameCountContext).x;
}

/**
 * Gets the Y value from the viewport.
 * @param subscription - ViewportSubscription
 * @returns number
 * (Original: $$P13)
 */
export function getViewportY(subscription: ViewportSubscription): number {
  return getContextViewport(subscription.subscribeToUpdates_expensive ? viewportYContext : frameCountContext).y;
}

/**
 * Gets the width from the viewport.
 * @param subscription - ViewportSubscription
 * @returns number
 * (Original: $$D10)
 */
export function getViewportWidth(subscription: ViewportSubscription): number {
  return getContextViewport(subscription.subscribeToUpdates_expensive ? viewportWidthContext : frameCountContext).width;
}

/**
 * Gets the height from the viewport.
 * @param subscription - ViewportSubscription
 * @returns number
 * (Original: k)
 */
function getViewportHeight(subscription: ViewportSubscription): number {
  return getContextViewport(subscription.subscribeToUpdates_expensive ? viewportHeightContext : frameCountContext).height;
}

/**
 * Gets the zoom scale from the viewport.
 * @param subscription - ViewportSubscription
 * @returns number
 * (Original: $$M9)
 */
export function getViewportZoom(subscription: ViewportSubscription): number {
  return getContextViewport(subscription.subscribeToUpdates_expensive ? viewportZoomContext : frameCountContext).zoomScale;
}

/**
 * Gets the panning state from the viewport.
 * @param subscription - ViewportSubscription
 * @returns boolean
 * (Original: $$F5)
 */
export function isViewportPanning(subscription: ViewportSubscription): boolean {
  return getContextViewport(subscription.subscribeToUpdates_expensive ? viewportPanningContext : activeStateContext).isPanning;
}

/**
 * Gets the full viewport info from context.
 * @param subscription - ViewportSubscription
 * @returns ViewportInfo
 * (Original: $$j18)
 */
export function getViewportInfo(subscription: ViewportSubscription): ViewportInfo {
  const x = getViewportX(subscription);
  const y = getViewportY(subscription);
  const width = getViewportWidth(subscription);
  const height = getViewportHeight(subscription);
  const offsetX = getContextViewport(subscription.subscribeToUpdates_expensive ? viewportOffsetXContext : frameCountContext).offsetX;
  const offsetY = getContextViewport(subscription.subscribeToUpdates_expensive ? viewportOffsetYContext : frameCountContext).offsetY;
  const zoomScale = getViewportZoom(subscription);
  const isPanning = isViewportPanning(subscription);
  const isZooming = getContextViewport(subscription.subscribeToUpdates_expensive ? viewportZoomingContext : activeStateContext).isZooming;
  return useMemo(() => ({
    x,
    y,
    width,
    height,
    offsetX,
    offsetY,
    zoomScale,
    isPanning,
    isZooming
  }), [x, y, width, height, offsetX, offsetY, zoomScale, isPanning, isZooming]);
}

/**
 * Gets the basic viewport rectangle.
 * @returns Rect
 * (Original: $$U23)
 */
export function getBasicViewportRect(): Rect {
  const subscription = {
    subscribeToUpdates_expensive: true
  };
  const x = getViewportX(subscription);
  const y = getViewportY(subscription);
  const width = getViewportWidth(subscription);
  const height = getViewportHeight(subscription);
  return useMemo(() => ({
    x,
    y,
    width,
    height
  }), [x, y, width, height]);
}

// --- Internal State ---
/**
 * Global viewport promise resolver.
 * (Original: $$n20)
 */
export let globalViewportPromise: ((value?: unknown) => void) | undefined;
/**
 * Resets the global viewport promise.
 * (Original: $$B22)
 */
export function resetGlobalViewportPromise(): void {
  globalViewportPromise = undefined;
}

/**
 * Computes viewport settings for a node in fullscreen.
 * @param node - any
 * @returns Promise<void>
 * (Original: $$G11)
 */
export function computeFullscreenViewportForNode(node: any): Promise<void> {
  return fullscreenValue.onReady().then(() => {
    if (!Fullscreen) return Promise.reject(new Error('Fullscreen bindings are not initialized'));
    const promise = new Promise<void>(resolve => {
      globalViewportPromise = resolve;
    });
    Fullscreen.computeViewportSettingsForNode__DO_NOT_USE_DIRECTLY(node);
    return promise;
  });
}

// --- Ruler thickness value ---
const rulerPx = parsePxNumber(rulerThickness);

/**
 * Gets the viewport rectangle with ruler offset.
 * @returns Rect
 * (Original: $$H2)
 */
export function getViewportRectWithRuler(): Rect {
  const subscription = {
    subscribeToUpdates_expensive: true
  };
  const rulerOffset = shouldRenderRulers() ? rulerPx : 0;
  const x = getViewportX(subscription) + rulerOffset;
  const y = getViewportY(subscription) + rulerOffset;
  const width = getViewportWidth(subscription) - rulerOffset;
  const height = getViewportHeight(subscription) - rulerOffset;
  return useMemo(() => ({
    x,
    y,
    width,
    height
  }), [x, y, width, height]);
}

// --- Exported Aliases (refactored import/export names) ---
export const $$ = applyOffsetToViewport;
export const $g = addViewportOffset;
export const Cj = getViewportRectWithRuler;
export const D6 = useFullscreenViewportUpdates;
export const HD = addRectOffset;
export const LE = isViewportPanning;
export const MG = getViewportX;
export const Nd = viewportWithDelta;
export const PD = useViewportWithDelta;
export const Pl = getViewportZoom;
export const QU = getViewportWidth;
export const QZ = computeFullscreenViewportForNode;
export const Qt = centeredValue;
export const TZ = getViewportY;
export const UN = isRectInsideViewport;
export const Yb = scaleRect;
export const Z0 = viewportToScreen;
export const ZT = isRectInside;
export const _X = getViewportInfo;
export const bs = useLatestViewportRef;
export const gc = globalViewportPromise;
export const kE = roundedDivision;
export const lc = resetGlobalViewportPromise;
export const ni = getBasicViewportRect;
export const qc = getVisibleArea;
export const th = memoizedRect;
