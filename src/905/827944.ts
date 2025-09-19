import { debugState } from '../905/407919'
import { getFeatureFlags } from '../905/601108'
import { parseAndRemoveSourceMapComments } from '../905/751771'
import { getRequest } from '../905/910117'

/**
 * Handles plugin code caching and refreshing logic.
 * Original class: $$o0
 */
export class PluginCodeCache {
  private cache: Record<string, any>
  private requestsInFlight: Record<string, Promise<any>>

  constructor() {
    this.clearCache()
  }

  /**
   * Generates a unique version hash for a plugin version.
   * Original method: getPluginVersionOrEmptyVersionHash
   * @param pluginVersion Plugin version object
   * @returns Version hash string or null
   */
  getPluginVersionOrEmptyVersionHash(pluginVersion: { id?: string, plugin_id?: string }): string | null {
    return pluginVersion && pluginVersion.id && pluginVersion.plugin_id
      ? `${pluginVersion.plugin_id}:${pluginVersion.id}`
      : null
  }

  /**
   * Forces refresh of plugin code and caches the result.
   * Original method: forceRefresh
   * @param versionHash Unique version hash
   * @param pluginVersion Plugin version object
   * @param orgId Optional organization ID
   * @returns Promise resolving to plugin code or error
   */
  async forceRefresh(
    versionHash: string,
    pluginVersion: { id?: string, redirect_code_url?: string },
    orgId?: string,
  ): Promise<any> {
    if (!pluginVersion.redirect_code_url) {
      return Promise.reject(new Error('Invalid code download url'))
    }

    let code = ''
    const state = debugState.getState()
    const requestData: Record<string, any> = {
      version_id: pluginVersion.id,
      file_key: state.openFile?.key || '',
    }
    if (orgId) {
      requestData.org_id = orgId
    }

    // Feature flag: plugins_remove_syntax_checking
    if (getFeatureFlags().plugins_remove_syntax_checking) {
      const requestPromise = getRequest(pluginVersion.redirect_code_url, requestData, { raw: true })
        .then(({ data }) => {
          delete this.requestsInFlight[versionHash]
          this.cache[versionHash] = data
          return data
        })
        .catch((error) => {
          delete this.requestsInFlight[versionHash]
          return error
        })
      this.requestsInFlight[versionHash] = requestPromise
      return requestPromise
    }

    // Default code fetch with syntax checking
    const requestPromise = getRequest(pluginVersion.redirect_code_url, requestData, { raw: true })
      .then(({ data }: { data: any }) => {
        code = data
        return parseAndRemoveSourceMapComments(code)
      })
      .then((result) => {
        if (!result.success)
          throw new Error('code is not valid javascript')
        delete this.requestsInFlight[versionHash]
        this.cache[versionHash] = code
        return code
      })
      .catch((error) => {
        delete this.requestsInFlight[versionHash]
        return error
      })

    this.requestsInFlight[versionHash] = requestPromise
    return requestPromise
  }

  /**
   * Gets plugin code from cache or fetches and caches it.
   * Original method: getAndCache
   * @param pluginVersion Plugin version object
   * @param orgId Optional organization ID
   * @returns Promise resolving to plugin code or null
   */
  getAndCache(
    pluginVersion: { id?: string, plugin_id?: string, redirect_code_url?: string },
    orgId?: string,
  ): Promise<any> {
    const versionHash = this.getPluginVersionOrEmptyVersionHash(pluginVersion)
    if (!versionHash)
      return Promise.resolve(null)

    if (versionHash in this.cache) {
      return Promise.resolve(this.cache[versionHash])
    }
    if (versionHash in this.requestsInFlight) {
      return this.requestsInFlight[versionHash]
    }
    return this.forceRefresh(versionHash, pluginVersion, orgId)
  }

  /**
   * Clears the plugin code cache and requests in flight.
   * Original method: clearCache
   */
  clearCache(): void {
    this.cache = Object.create(null)
    this.requestsInFlight = Object.create(null)
  }
}

// Export refactored instance and alias
export const setupPluginCodeCache = new PluginCodeCache()
export const F = setupPluginCodeCache
