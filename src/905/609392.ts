import { parseQuery } from '../905/634134'

// Refactored query parameter management module
class QueryParamsManager {
  private params: Record<string, string> = {}

  /**
   * Updates the stored query parameters by parsing the provided query string.
   * If no query string is provided, clears all stored parameters.
   *
   * @param queryString - The query string to parse, or null/undefined to clear params
   */
  public updateParams(queryString: string | null | undefined): void {
    if (!queryString) {
      this.params = {}
      return
    }
    this.params = parseQuery(queryString)
  }

  /**
   * Retrieves the value of a specific query parameter.
   *
   * @param key - The parameter key to look up
   * @returns The parameter value, or undefined if not found
   */
  public getParam(key: string): string | undefined {
    return this.params[key]
  }

  /**
   * Removes a specific query parameter.
   *
   * @param key - The parameter key to remove
   */
  public removeParam(key: string): void {
    delete this.params[key]
  }

  /**
   * Gets all current parameters (internal use only)
   * Original name: r
   */
  public getAllParams(): Record<string, string> {
    return this.params
  }
}

// Create singleton instance
const queryParamsManager = new QueryParamsManager()

// Exported functions with descriptive names
export const updateQueryParams = (queryString: string | null | undefined) => queryParamsManager.updateParams(queryString) // Original name: $$a2
export const getQueryParam = (key: string) => queryParamsManager.getParam(key) // Original name: $$s1
export const removeQueryParam = (key: string) => queryParamsManager.removeParam(key) // Original name: $$o0

// Aliases for backward compatibility
export const TH = updateQueryParams // Original name: $$a2
export const QL = getQueryParam // Original name: $$s1
export const EM = removeQueryParam // Original name: $$o0
