import { debugState } from "../905/407919"
import { trackEventAnalytics } from "../905/449184"
import { getFeatureFlags } from "../905/601108"
import { fetchFontByFamilyStyleVersion, fetchFontFile } from "../905/777093"
import { getViewerInstance } from "../figma_app/632319"
import { FontSourceType } from "../figma_app/763686"

interface FontFetchOptions {
  source: FontSourceType
  id: string
  postscriptName: string
  fileKey: string | null
  teamId: string | null
  orgId: string | null
}

interface FontFetchMetrics {
  source: FontSourceType
  id: string
  postscriptName: string
  fileKey: string | null
  teamId: string | null
  orgId: string | null
  fetch_time_ms: number
  font_size_bytes: number
}

function getTeamIdFromState(state: any): string | null {
  const { selectedView, folders } = state

  if (selectedView.view === "team") {
    return selectedView.teamId
  }

  if (selectedView.view === "folder" && folders[selectedView.folderId]) {
    return folders[selectedView.folderId].team_id
  }

  return null
}

function createFontFetchOptions(source: FontSourceType, id: string, postscriptName: string, fileKey: string | null, teamId: string | null, orgId: string | null): FontFetchOptions {
  return {
    source,
    id,
    postscriptName,
    fileKey,
    teamId,
    orgId,
  }
}

function trackFontFetchTime(options: FontFetchOptions, startTime: number, fontData: ArrayBuffer): void {
  if (getFeatureFlags().ce_track_font_fetch_time) {
    const metrics: FontFetchMetrics = {
      ...options,
      id: options.source === FontSourceType.LOCAL ? "N/A" : options.id,
      fetch_time_ms: performance.now() - startTime,
      font_size_bytes: fontData.byteLength,
    }

    trackEventAnalytics("font_fetch_time", metrics)
  }
}

export const debugFontFetcher = {
  /**
   * Fetches a font file with detailed tracking and debugging information
   * Original function: fetchFontFile
   */
  async fetchFontFile(
    source: FontSourceType,
    id: string,
    postscriptName: string,
  ): Promise<ArrayBuffer> {
    const state = debugState.getState()
    const startTime = performance.now()

    const options = createFontFetchOptions(
      source,
      id,
      postscriptName,
      state.openFile?.key || null,
      getTeamIdFromState(state),
      state.currentUserOrgId || null,
    )

    const fontData = await fetchFontFile(options)
    trackFontFetchTime(options, startTime, fontData)

    return fontData
  },

  /**
   * Placeholder for fetching font without picker info
   * Original function: fetchFontFileWithoutPickerInfo
   */
  fetchFontFileWithoutPickerInfo(
    _source: FontSourceType,
    _id: string,
    _postscriptName: string,
  ): Promise<never> {
    return Promise.reject(new Error("Not implemented"))
  },
}

export const fontManagerJsHandler = {
  /**
   * Fetches a font file for production use
   * Original function: fetchFontFile
   */
  fetchFontFile: (
    source: FontSourceType,
    id: string,
    postscriptName: string,
  ): Promise<ArrayBuffer> => {
    const options = createFontFetchOptions(
      source,
      id,
      postscriptName,
      getViewerInstance()?.openFileKey() || null,
      null,
      null,
    )

    return fetchFontFile(options)
  },

  /**
   * Fetches a font by family, style, and version with organization context
   * Original function: fetchFontFileWithoutPickerInfo
   */
  fetchFontFileWithoutPickerInfo: (
    family: string,
    style: string,
    version: string,
  ): Promise<ArrayBuffer> => {
    const fileKey = getViewerInstance()?.openFileKey()

    if (!fileKey) {
      return Promise.reject(new Error("No open file key available"))
    }

    const state = debugState.getState()
    const hasParentOrg = !state || !state.openFile || !!state.openFile.parentOrgId

    return fetchFontByFamilyStyleVersion(
      family,
      style,
      version,
      fileKey,
      hasParentOrg,
    )
  },
}

export const Z = fontManagerJsHandler
export const h = debugFontFetcher
