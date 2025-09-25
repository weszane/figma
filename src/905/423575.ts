import { createCookieManager } from "../905/414007";
/**
 * Singleton instance for CookieManager.
 * Original variable: n
 */
let cookieManagerInstance: ReturnType<typeof createCookieManager> | undefined;

/**
 * Returns a singleton instance of CookieManager.
 * Original function: $$a0
 */
export function getCookieManager(): ReturnType<typeof createCookieManager> {
  if (cookieManagerInstance === undefined) {
    cookieManagerInstance = createCookieManager();
  }
  return cookieManagerInstance;
}

/**
 * Exported alias for getCookieManager.
 * Original export: W
 */
export const W = getCookieManager;
