import { getSingletonSceneGraph } from "../905/700578"
/**
 * Singleton instance for managing scene graph operations
 * Original name: $$n1
 */
export let SceneGraphHookBindingsInstance: SceneGraphManager

/**
 * Class for handling scene graph triggers
 * Original name: a
 */
class SceneGraphManager {
  /**
   * Trigger change event in the scene graph
   */
  triggerChange(): void {
    getSingletonSceneGraph().triggerChange()
  }

  /**
   * Trigger delete callbacks in the scene graph
   * @param element - The element to be deleted
   */
  triggerDelete(element: any): void {
    getSingletonSceneGraph().triggerDeleteCallbacks(element)
  }
}

/**
 * Initialize the scene graph manager singleton
 * Original name: $$s0
 */
export function initializeSceneGraphManager(): void {
  SceneGraphHookBindingsInstance = new SceneGraphManager()
}

/**
 * Exported initializer function
 * Original name: Io
 */
export const Io = initializeSceneGraphManager

/**
 * Exported scene graph manager instance
 * Original name: uo
 */
export const uo = SceneGraphHookBindingsInstance
