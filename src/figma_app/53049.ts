import { loadCanvasData } from '../905/815475'
import { sendWithRetry } from '../905/910117'

interface CanvasLoaderOptions {
  fileKey: string
  selectedGuids?: string[]
}


/**
 * Builds the canvas API endpoint URL with optional node extraction parameters
 * @param options - Configuration for building the URL
 * @returns Formatted URL string for canvas data retrieval
 */
function buildCanvasUrl({ fileKey, selectedGuids }: CanvasLoaderOptions): string {
  const url = new URL(`/api/file_proxy/file/${fileKey}/canvas`, window.location.origin)

  if (selectedGuids?.length) {
    url.searchParams.set('nodes_to_extract', selectedGuids.join(','))
  }

  return url.pathname + url.search
}

/**
 * Loads canvas data for a given file with optional node selection
 * @param options - File key and optional selected node GUIDs
 * @returns Promise resolving to the loaded canvas data
 */
export async function loadCanvasDataAsync({
  fileKey,
  selectedGuids,
}: CanvasLoaderOptions): Promise<any> {
  const apiUrl = buildCanvasUrl({ fileKey, selectedGuids })

  const [canvasData] = await loadCanvasData(
    apiUrl,
    (url: string, version: number) =>
      sendWithRetry.post(url, {
        fv: `${version}`,
      }, {
        responseType: 'arraybuffer',
      }).then(({ data }) => data),
  )

  return canvasData
}

// Alias for backward compatibility
export const R = loadCanvasDataAsync
