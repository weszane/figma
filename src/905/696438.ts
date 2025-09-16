/**
 * Manages plugin instances and their loading state.
 * Original class name: e
 */
export class PluginInstanceManager {
  /** Stores plugin instances by key */
  static instance: Record<string, ObjectOf> = {}

  /** Stores loading promises and their resolvers by key */
  static loadingStates: Record<
    string,
    { promise: Promise<unknown>, resolve: (value: unknown) => void, reject: (reason?: any) => void }
  > = {}

  /**
   * Retrieves an existing plugin instance.
   * @param key - The plugin key.
   * @throws Error if the instance does not exist.
   * @returns The plugin instance.
   * Original method name: getInstance
   */
  static getInstance(key: string): unknown {
    if (!PluginInstanceManager.instance[key]) {
      throw new Error('Running plugin before iframe sandbox started loading')
    }
    return PluginInstanceManager.instance[key]
  }

  /**
   * Gets or creates a loading promise for a plugin instance.
   * @param key - The plugin key.
   * @returns The loading promise.
   * Original method name: getInstanceLoading
   */
  static getInstanceLoading(key: string): Promise<unknown> {
    if (key in PluginInstanceManager.loadingStates) {
      return PluginInstanceManager.loadingStates[key].promise
    }
    let resolveFn: (value: unknown) => void = () => {}
    let rejectFn: (reason?: any) => void = () => {}
    const promise = new Promise<unknown>((resolve, reject) => {
      resolveFn = resolve
      rejectFn = reject
    })
    PluginInstanceManager.loadingStates[key] = {
      promise,
      resolve: resolveFn,
      reject: rejectFn,
    }
    return promise
  }
}

// Export refactored names
export const Y = PluginInstanceManager
