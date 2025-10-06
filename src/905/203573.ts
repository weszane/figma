import { g } from '../905/566160'
import { ReduxSceneGraph } from '../905/700578'
import { FileSourceType, Fullscreen } from '../figma_app/763686'

/**
 * Error class for invalid auto-suggest session states
 * Original name: s, e
 */
export class InvalidSessionError extends Error {
  static readonly label = 'InvalidSessionError'
  static readonly message = 'Auto-suggest session is not available'

  constructor() {
    super(InvalidSessionError.message)
    this.name = InvalidSessionError.label
  }
}

/**
 * Scene graph implementation for auto-suggest functionality
 * Original name: l
 */
class AutoSuggestSceneGraph extends (ReduxSceneGraph ?? class { }) {
  public readonly sceneGUID: string
  public readonly sessionType: string

  constructor(sceneGUID: string, sessionType: string) {
    super(FileSourceType.AUTO_SUGGEST)
    this.sceneGUID = sceneGUID
    this.sessionType = sessionType
  }

  /**
   * Gets the auto-suggest scene instance
   * @throws {Error} When scene does not exist
   */
  get scene(): any {
    const scene = Fullscreen?.getAutoSuggestSceneByGUID(this.sceneGUID, this.sessionType)
    if (!scene) {
      throw new Error('Scene does not exist')
    }
    return scene
  }
}

/**
 * Manager for auto-suggest sessions and scenes
 * Original name: $$d0
 */
export class AutoSuggestSessionManager {
  readonly sessionID: string
  readonly sceneMap: Map<string, AutoSuggestSceneGraph>
  readonly sessionType: string
  readonly abortController: AbortController

  /**
   * Creates a new auto-suggest session
   * @param sessionType - Type of the session
   * @param abortController - Controller for aborting the session
   * @throws {Error} When fullscreen is not initialized or session creation fails
   */
  constructor(sessionType: string, abortController: AbortController) {
    this.validateFullScreenAvailable()

    const sessionID = Fullscreen?.startNewAutoSuggestSession(sessionType)
    if (!sessionID) {
      throw new Error('Failed to reset auto suggest scene')
    }

    this.sessionID = sessionID
    this.sceneMap = new Map()
    this.sessionType = sessionType
    this.abortController = abortController
  }

  /**
   * Destroys the auto-suggest session
   */
  destroy(): void {
    this.validation()
    Fullscreen?.endAutoSuggestSession(this.sessionID, this.sessionType)
  }

  /**
   * Loads buffer data to a scene
   * @param key - Scene key
   * @param buffer - Buffer data to load
   * @returns The created scene graph
   * @throws {Error} When buffer loading or scene creation fails
   */
  async loadBufferToScene(key: string, buffer: Uint8Array): Promise<AutoSuggestSceneGraph> {
    const taskController = new TaskController({
      priority: 'background',
    })

    const sceneGUIDPromise = new Promise<string>((resolve, reject) => {
      scheduler.postTask(() => {
        const guid = Fullscreen?.loadBufferToAutoSuggestScene(this.sessionID, buffer, this.sessionType)
        if (!guid) {
          reject(new Error('Failed to load buffer to auto suggest scene'))
        }
        resolve(guid)
      }, {
        signal: taskController.signal,
      })
    })

    const sceneGUID = await sceneGUIDPromise
    const sceneGraph = new AutoSuggestSceneGraph(sceneGUID, this.sessionType)

    if (!sceneGraph) {
      throw new Error('Failed to locate buffer scene')
    }

    this.sceneMap.set(key, sceneGraph)
    return sceneGraph
  }

  /**
   * Gets a scene by its key
   * @param key - Scene key
   * @returns The scene graph or undefined if not found
   */
  getSceneByKey(key: string): AutoSuggestSceneGraph | undefined {
    return this.sceneMap.get(key)
  }

  /**
   * Gets or creates a fragment scene
   * @param fragment - Fragment identifier
   * @returns The scene graph for the fragment
   * @throws {Error} When buffer retrieval or scene loading fails
   */
  async getFragmentScene(fragment: any): Promise<AutoSuggestSceneGraph> {
    this.validation()

    const existingScene = this.getSceneByKey(fragment)
    if (existingScene) {
      return existingScene
    }

    const bufferData = new Uint8Array(await g(fragment, fragment.file_key))
    if (!bufferData || bufferData.length === 0) {
      throw new Error('Failed to get copy buffer for fragment')
    }

    return this.loadBufferToScene(fragment, bufferData)
  }

  /**
   * Unloads a scene
   * @param key - Scene key to unload
   * @throws {Error} When scene does not exist
   */
  unloadScene(key: string): void {
    const sceneGraph = this.sceneMap.get(key)
    if (!sceneGraph) {
      throw new Error('Scene does not exist')
    }

    Fullscreen?.unloadAutoSuggestSceneByGUID(
      this.sessionID,
      sceneGraph.sceneGUID,
      this.sessionType,
    )

    this.sceneMap.delete(key)
  }

  /**
   * Unloads a fragment scene
   * @param key - Fragment key to unload
   */
  unloadFragment(key: string): void {
    this.validation()
    this.unloadScene(key)
  }

  /**
   * Validates the session state
   * @throws {InvalidSessionError} When session is aborted or invalid
   */
  validation(): void {
    if (this.abortController.signal.aborted) {
      throw new InvalidSessionError()
    }

    this.validateFullScreenAvailable()
    this.validateSceneAvailable()
  }

  /**
   * Validates that fullscreen is available
   * @throws {Error} When fullscreen is not initialized
   */
  validateFullScreenAvailable(): void {
    if (!Fullscreen) {
      throw new Error('Fullscreen is not initialized')
    }
  }

  /**
   * Validates that the scene is available
   * @throws {InvalidSessionError} When session ID mismatch occurs
   */
  validateSceneAvailable(): void {
    const currentSessionID = Fullscreen?.getAutoSuggestSessionID(this.sessionType)
    if (!currentSessionID || currentSessionID !== this.sessionID) {
      this.abortController.abort()
      throw new InvalidSessionError()
    }
  }
}

// Export aliases for backward compatibility
export const I = AutoSuggestSessionManager
export const u = InvalidSessionError
