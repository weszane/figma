import { debugState } from '../905/407919';
import { getRequest } from '../905/910117';
import { getValidNumber } from '../figma_app/111825';

/**
 * Generates a URL with the current file version as a query parameter.
 * @param baseUrl - The base URL to append the file version to.
 * @returns An object containing the constructed URL and file version.
 * (Original function: $$s0)
 */
export function generateFileVersionUrl(baseUrl: string) {
  const fileVersion = getValidNumber(debugState?.getState().fileVersion);
  const urlObj = new URL(baseUrl, location.origin);
  urlObj.searchParams.set('fv', fileVersion.toString());
  return {
    url: urlObj.toString(),
    fileVersion
  };
}

/**
 * Fetches data from a given URL as an arraybuffer.
 * @param url - The URL to fetch.
 * @param _fileVersion - Unused, kept for compatibility.
 * @returns A promise resolving to the fetched data.
 * (Original variable: o)
 */
export function fetchArrayBuffer(url: string, _fileVersion?: number) {
  return getRequest(url, null, {
    responseType: 'arraybuffer'
  }).then(({
    data
  }) => data);
}

/**
 * Loads canvas data from a URL, retrying if the file version has changed.
 * @param canvasUrl - The canvas URL to load.
 * @param fetchFn - The function to fetch data (default: fetchArrayBuffer).
 * @returns A promise resolving to [data, url, fileVersion].
 * (Original function: $$l1)
 */
export async function loadCanvasData(canvasUrl: string, fetchFn: (url: string, fileVersion?: number) => Promise<any> = fetchArrayBuffer) {
  if (!canvasUrl) {
    return Promise.reject(new Error('No canvas URL'));
  }
  const {
    url,
    fileVersion
  } = generateFileVersionUrl(canvasUrl);
  const data = await fetchFn(url, fileVersion);
  // If the file version has changed, retry loading
  if (getValidNumber(debugState?.getState().fileVersion) > fileVersion) {
    return loadCanvasData(canvasUrl, fetchFn);
  }
  return [data, url, fileVersion];
}

// Export aliases for compatibility with original names
export const P = generateFileVersionUrl;
export const n = loadCanvasData;