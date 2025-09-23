import { reportError } from '../905/11';
import { KeyCodes } from '../905/63728';
import { ServiceCategories } from '../905/165054';
import { trackEventAnalytics } from '../905/449184';
import { customHistory } from '../905/612521';
import { buildFileUrl } from '../905/612685';
import { OrganizationType } from '../905/833838';
import { fakePath, getInitialOptions } from '../figma_app/169182';

// URL manipulation utilities
export function appendSearchParams(url: string, params: Record<string, string>) {
  try {
    const urlObj = new URL(url, fakePath);
    const searchParams = new URLSearchParams(urlObj.search);
    Object.entries(params).forEach(([key, value]) => {
      searchParams.set(key, value);
    });
    const searchString = searchParams.toString();
    if (searchString) {
      urlObj.search = `?${searchString}`;
    }
    const finalUrl = urlObj.href;
    return finalUrl.startsWith(fakePath) ? finalUrl.substr(fakePath.length) : finalUrl;
  } catch (error) {
    reportError(ServiceCategories.WAYFINDING, error, {
      extra: {
        ...params,
        url
      }
    });
    return error;
  }
}
export function appendSearchParam(url: string, key: string, value: string) {
  const urlObj = new URL(url, fakePath);
  const searchParams = new URLSearchParams(urlObj.search);
  if (!searchParams.has(key)) {
    searchParams.set(key, value);
  }
  const searchString = searchParams.toString();
  if (searchString) {
    urlObj.search = `?${searchString}`;
  }
  const finalUrl = urlObj.href;
  return finalUrl.startsWith(fakePath) ? finalUrl.substr(fakePath.length) : finalUrl;
}
export function getCurrentPath() {
  return customHistory.location.pathname + customHistory.location.search;
}
interface RedirectOptions {
  url: string;
  openInNewWindow?: boolean;
}
export function handleExternalRedirect(options: RedirectOptions) {
  const {
    url
  } = options;
  if (url != null) {
    if (url.startsWith('mailto:')) {
      customHistory.unsafeRedirect(url, options.openInNewWindow ? '_blank' : '');
      return;
    }
    const finalUrl = url.startsWith('http://') || url.startsWith('https://') ? url : `http://${url}`;
    customHistory.postRedirect(`/exit?url=${encodeURIComponent(finalUrl)}`, options.openInNewWindow ? '_blank' : '');
  }
}
export function compareValues(a: any, b: any, c: any, d: any) {
  return a ? a !== b : c !== d;
}
interface FileNavigationOptions {
  orgId?: string;
  teamId?: string;
  selectedView?: {
    view: string;
    folderId?: string;
    tab?: string;
  };
  user?: {
    id: string;
  };
}
export function navigateToFile(fileConfig: any, options: FileNavigationOptions) {
  const base = fileConfig.base ?? 'file';
  let url = appendUserIdToUrl(buildFileUrl({
    ...fileConfig,
    base
  }), options.user);
  url = appendNavigationContext(url, options.orgId, options.teamId, options.selectedView);
  trackFileLoad(fileConfig.file.key, options.orgId || options.teamId, base);
  customHistory.redirect(url);
}
export function trackFileLoad(fileKey: string, orgId?: string, urlType: string = 'file') {
  trackEventAnalytics('file_browser_fresh_external_file_load', {
    fileKey,
    entryPlanId: orgId || 'external-teams',
    urlType
  });
}
export function appendUserIdToUrl(url: string, user?: {
  id: string;
}) {
  return user ? appendSearchParam(url, 'fuid', user.id) : url;
}
export function appendNavigationContext(url: string, orgId?: string, teamId?: string, selectedView?: any) {
  let result = '';
  const planId = orgId || teamId;
  if (planId) {
    result = appendSearchParam(url, 'prev-plan-id', planId);
    result = appendSearchParam(result, 'prev-plan-type', orgId ? OrganizationType.ORG : OrganizationType.TEAM);
  }
  if (selectedView) {
    result = appendSearchParam(result, 'prev-selected-view', selectedView.view);
    if (selectedView.view === 'folder') {
      result = appendSearchParam(result, 'prev-folder-id', selectedView.folderId);
    }
    if (selectedView.view === 'recentsAndSharing' && selectedView.tab) {
      result = appendSearchParam(result, 'prev-tab', selectedView.tab);
    }
  }
  return result || url;
}
export function openWindow(url: string, name?: string, features?: string) {
  return window.open(url, name, features);
}
interface Rect {
  top: number;
  right: number;
  bottom: number;
  left: number;
  width: number;
  height: number;
}
export function createRect(rect?: Partial<Rect>): Rect {
  return {
    top: rect?.top ?? 0,
    right: rect?.right ?? 0,
    bottom: rect?.bottom ?? 0,
    left: rect?.left ?? 0,
    width: rect?.width ?? 0,
    height: rect?.height ?? 0
  };
}
export function compareRects(rect1?: Rect, rect2?: Rect) {
  return rect1 && rect2 ? JSON.stringify(createRect(rect1)) === JSON.stringify(createRect(rect2)) : rect1 === rect2;
}
export function isIframe() {
  return self !== top;
}
export function isCrossDomain() {
  try {
    return self !== top && self.location.host !== top?.location.host;
  } catch {
    return true;
  }
}

// Browser capability detection
const browserFeatures = {};
const documentElement = document && document.documentElement;
function defineFeature(name: string, detector: () => any) {
  Object.defineProperty(browserFeatures, name, {
    enumerable: true,
    configurable: true,
    get() {
      const value = detector();
      Object.defineProperty(browserFeatures, name, {
        enumerable: true,
        value
      });
      return value;
    }
  });
}
export function waitForVisibility() {
  if (document.visibilityState == null || document.visibilityState === 'visible') {
    return Promise.resolve();
  }
  return new Promise<void>(resolve => {
    function handler() {
      if (document.visibilityState === 'visible') {
        document.removeEventListener('visibilitychange', handler);
        resolve();
      }
    }
    document.addEventListener('visibilitychange', handler);
  });
}
export function attachUserIdToLinks(container?: HTMLElement) {
  const userData = getInitialOptions().user_data;
  const userId = userData?.id;
  const handler = (event: MouseEvent | KeyboardEvent) => {
    if (!userId || event instanceof KeyboardEvent && event.keyCode !== KeyCodes.ENTER) {
      return;
    }
    const target = event.target;
    if (!(target instanceof Element)) {
      return;
    }
    const link = target.closest('a');
    if (!link || link.hostname !== window.location.hostname) {
      return;
    }
    const currentUrl = window.location.href;
    const linkBaseUrl = link.href.substr(0, link.href.indexOf('#'));
    const hashIndex = currentUrl.indexOf('#');
    const currentBaseUrl = currentUrl.substr(0, hashIndex);
    const currentHash = currentUrl.substr(hashIndex + 1);
    if (!linkBaseUrl || linkBaseUrl === (currentBaseUrl || currentHash)) {
      return;
    }
    link.href = appendSearchParam(link.href, 'fuid', userId);
  };
  const element = container ?? document;
  element.addEventListener('click', handler);
  element.addEventListener('keydown', handler);
}

// Browser feature detection
defineFeature('pointerLock', () => !!(documentElement && documentElement.requestPointerLock));
defineFeature('fullscreenChangeEventName', () => {
  if ('onfullscreenchange' in document) return 'fullscreenchange';
  if ('onmozfullscreenchange' in document) return 'mozfullscreenchange';
  if ('onwebkitfullscreenchange' in document) return 'webkitfullscreenchange';
  if ('onMSFullscreenChange' in document) return 'MSFullscreenChange';
  if ('onmsfullscreenchange' in document) return 'msfullscreenchange';
  return null;
});
defineFeature('fullscreenErrorEventName', () => {
  if ('onfullscreenerror' in document) return 'fullscreenerror';
  if ('onmozfullscreenerror' in document) return 'mozfullscreenerror';
  if ('onwebkitfullscreenerror' in document) return 'webkitfullscreenerror';
  if ('onMSFullscreenError' in document) return 'MSFullscreenError';
  if ('onmsfullscreenerror' in document) return 'msfullscreenerror';
  return null;
});
defineFeature('requestFullscreenFunc', () => {
  return documentElement && (documentElement.requestFullscreen || documentElement.mozRequestFullScreen || documentElement.webkitRequestFullscreen || documentElement.msRequestFullscreen || null);
});
defineFeature('exitFullscreenFunc', () => {
  const func = document.exitFullscreen || document.mozExitFullscreen || document.mozCancelFullScreen || document.webkitExitFullscreen || document.msExitFullscreen || null;
  return func ? func.bind(document) : null;
});
defineFeature('getFullscreenElement', () => {
  if (document.fullscreenElement) return () => document.fullscreenElement;
  if (document.mozFullScreenElement) return () => document.mozFullScreenElement;
  if (document.webkitFullscreenElement) return () => document.webkitFullscreenElement;
  if (document.msFullscreenElement) return () => document.msFullscreenElement;
  return () => null;
});
defineFeature('fullscreen', () => {
  return browserFeatures.requestFullscreenFunc != null && browserFeatures.exitFullscreenFunc != null && (document.fullscreenEnabled || document.webkitFullscreenEnabled);
});
export const $R = trackFileLoad;
export const E = createRect;
export const FJ = openWindow;
export const GZ = isIframe;
export const Lb = waitForVisibility;
export const N7 = compareValues;
export const NQ = appendSearchParam;
export const QV = navigateToFile;
export const R7 = browserFeatures;
export const Up = isCrossDomain;
export const dR = appendSearchParams;
export const jJ = handleExternalRedirect;
export const jM = getCurrentPath;
export const mc = appendUserIdToUrl;
export const t7 = compareRects;
export const vk = appendNavigationContext;
export const wy = attachUserIdToLinks;
