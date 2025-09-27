import { trackEventAnalytics } from '../905/449184';
import { appendSearchParams, isCrossDomain, isIframe } from '../905/508367';
import { isFigmaNativeApp } from '../905/575846';
import { getFeatureFlags } from '../905/601108';
import { customHistory } from '../905/612521';
import { sendWithRetry } from '../905/910117';
import { getInitialOptions } from '../figma_app/169182';
import { BrowserInfo } from '../figma_app/778880';
import { desktopAPIInstance } from '../figma_app/876459';

/**
 * Sends a GET request to either localhost or figmadaemon.com based on browser capabilities
 * @param localPort - Port for localhost connection
 * @param remotePort - Port for remote connection
 * @param path - Request path
 * @param options - Additional sendWithRetry options
 * @returns Promise with response data and origin
 */
async function sendGetRequest(localPort: number, remotePort: number, path: string, options?: any): Promise<{
  data: any;
  origin: string;
}> {
  const canUseLocalhost = BrowserInfo.blink && window.WebAssembly || BrowserInfo.firefox && +BrowserInfo.version >= 56;
  if (canUseLocalhost) {
    const localOrigin = `http://127.0.0.1:${localPort}`;
    const {
      data
    } = await sendWithRetry({
      method: sendWithRetry.Methods.GET,
      url: `${localOrigin}${path}`,
      headers: {
        'Content-Type': 'text/plain'
      },
      ...options
    });
    return {
      data,
      origin: localOrigin
    };
  }
  const remoteOrigin = `https://figmadaemon.com:${remotePort}`;
  const {
    data
  } = await sendWithRetry({
    method: sendWithRetry.Methods.GET,
    url: `${remoteOrigin}${path}`,
    headers: {
      'Content-Type': 'text/plain'
    },
    ...options
  });
  return {
    data,
    origin: remoteOrigin
  };
}

/**
 * Sends a POST request to either localhost or figmadaemon.com based on browser capabilities
 * @param localPort - Port for localhost connection
 * @param remotePort - Port for remote connection
 * @param path - Request path
 * @param postData - Data to send in request body
 * @param contentType - Content type header
 * @returns Promise with response data and origin
 */
async function sendPostRequest(localPort: number, remotePort: number, path: string, postData: any, contentType: string): Promise<{
  data: any;
  origin: string;
}> {
  const canUseLocalhost = BrowserInfo.blink && window.WebAssembly || BrowserInfo.firefox && +BrowserInfo.version >= 56;
  if (canUseLocalhost) {
    const localOrigin = `http://127.0.0.1:${localPort}`;
    const {
      data
    } = await sendWithRetry({
      method: sendWithRetry.Methods.POST,
      url: `${localOrigin}${path}`,
      headers: {
        'Content-Type': contentType
      },
      data: postData
    });
    return {
      data,
      origin: localOrigin
    };
  }
  const remoteOrigin = `https://figmadaemon.com:${remotePort}`;
  const {
    data
  } = await sendWithRetry({
    method: sendWithRetry.Methods.POST,
    url: `${remoteOrigin}${path}`,
    headers: {
      'Content-Type': contentType
    },
    data: postData
  });
  return {
    data,
    origin: remoteOrigin
  };
}

// User data extraction
const initialUserData = getInitialOptions().user_data;
const userId = initialUserData?.id;

/**
 * Enum for desktop modal types
 */
export enum DesktopModalType {
  DESKTOP_INTERSTITIAL = 'desktop_interstitial',
  OOM_MODAL = 'oom_modal',
  OPEN_IN_DESKTOP_MODAL = 'open_in_desktop_modal',
  UNIVERSAL_POSTING_MODAL = 'universal_posting_modal',
  COMMUNITY_INTERSTITIAL = 'community_interstitial',
  FULLSCREEN_MENU = 'fullscreen_menu',
}

/**
 * Checks if the current platform is supported for desktop operations
 * @returns boolean indicating if platform is Mac (not iPad) or Windows
 */
function isSupportedPlatform(): boolean {
  return BrowserInfo.mac && !BrowserInfo.isIpad || BrowserInfo.windows;
}

/**
 * Makes a GET request to the desktop daemon for read operations
 * @param path - Request path
 * @param options - Additional sendWithRetry options
 * @returns Promise with response data and origin
 */
export function makeDesktopGetRequest(path: string, options?: any): Promise<any> {
  const isCrossDomainRequest = isCrossDomain();
  const isUnsupportedPlatform = !isSupportedPlatform();
  if (isCrossDomainRequest || isUnsupportedPlatform) {
    return Promise.reject();
  }
  return sendGetRequest(44950, 44960, `/figma${path}`, options);
}

/**
 * Makes a POST request to the desktop daemon for write operations
 * @param path - Request path
 * @param data - Data to send
 * @param contentType - Content type header
 * @returns Promise with response data and origin
 */
export function makeDesktopPostRequest(path: string, data: any, contentType: string): Promise<any> {
  const isInIframe = isIframe();
  const isUnsupportedPlatform = !isSupportedPlatform();
  if (isInIframe || isUnsupportedPlatform) {
    return Promise.reject();
  }
  return sendPostRequest(44950, 44960, `/figma${path}`, data, contentType);
}

/**
 * Checks if a URL can be opened in the desktop app
 * @param url - URL to check
 * @returns Promise with boolean indicating if URL can be opened
 */
export async function canOpenUrlInDesktop(url: string): Promise<boolean> {
  if (desktopAPIInstance) {
    return false;
  }
  try {
    const urlOrigin = new URL(url).origin;
    const {
      data
    } = await makeDesktopGetRequest(`/desktop/can-open-url?userID=${userId}&url=${urlOrigin}`);
    if (typeof data.canOpen === 'boolean') {
      return data.canOpen;
    }
  } catch {
    // Silently handle errors
  }
  return false;
}

/**
 * Opens a URL in the desktop app
 * @param url - URL to open
 * @param source - Source of the request
 * @param editorType - Editor type
 * @returns Promise with boolean indicating if URL was opened
 */
export async function openUrlInDesktop(url: string, source: string, editorType?: string): Promise<boolean> {
  if (desktopAPIInstance) {
    return false;
  }
  try {
    const editingFileEditorType = getInitialOptions().editing_file?.editor_type;
    if (userId) {
      const params: Record<string, string> = {
        fuid: userId
      };
      if (url === location.href && editingFileEditorType) {
        params.editor_type = editingFileEditorType;
      }
      url = appendSearchParams(url, params);
    }
    const encodedUrl = encodeURIComponent(url);
    const {
      data
    } = await makeDesktopGetRequest(`/desktop/open-url?userID=${userId}&url=${encodedUrl}`);
    if (typeof data.opened === 'boolean') {
      trackEventAnalytics('Open Url In Desktop', {
        opened: data.opened,
        source,
        editorType
      });
      return data.opened;
    }
  } catch {
    // Silently handle errors
  }
  return false;
}

/**
 * Redirects to font settings if desktop environment is available
 */
export function redirectToFontSettings(): void {
  if (isDesktopEnvironmentAvailable()) {
    customHistory.redirect('/settings#fonts');
  }
}

/**
 * Checks if desktop environment is available
 * @returns boolean indicating if desktop environment is available
 */
export function isDesktopEnvironmentAvailable(): boolean {
  return !!isSupportedPlatform() && !desktopAPIInstance && !isFigmaNativeApp;
}

/**
 * Gets the desktop app version
 * @returns Promise with version information
 */
export function getDesktopVersion(): Promise<any> {
  return makeDesktopGetRequest('/version');
}

/**
 * Gets font files with optional freetype minimum API version
 * @param freetypeMinimumApiVersion - Optional freetype minimum API version
 * @returns Promise with font files data
 */
export function getFontFiles(freetypeMinimumApiVersion?: number): Promise<any> {
  let path = '/font-files?';
  if (freetypeMinimumApiVersion !== undefined) {
    path += `freetype_minimum_api_version=${freetypeMinimumApiVersion}&`;
  }
  if (getFeatureFlags().desktop_isolate_metadata) {
    path += 'isolate=true&';
  }
  return makeDesktopGetRequest(path);
}

// Export aliases for backward compatibility
export const B3 = DesktopModalType;
export const oU = canOpenUrlInDesktop;
export const P6 = getDesktopVersion;
export const vH = makeDesktopPostRequest;
export const rO = makeDesktopGetRequest;
export const dm = redirectToFontSettings;
export const Sr = openUrlInDesktop;
export const xQ = getFontFiles;
export const K4 = isDesktopEnvironmentAvailable;