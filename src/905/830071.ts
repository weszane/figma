import { sceneDocumentType } from '../905/582379'
import { StateSourceType } from '../figma_app/175377'
import { TSSceneGraph as SceneGraphBase } from '../figma_app/518682'

/**
 * SceneGraph extends the base TSSceneGraph for plugin state source.
 * (Original: $$s1)
 */
export class SceneGraph extends SceneGraphBase {
  /**
   * @param e - Initialization parameter for the scene graph.
   */
  constructor(e: any) {
    super(StateSourceType.PLUGIN, e)
  }
}

/**
 * SingletonSceneGraph is a singleton instance of SceneGraph
 * initialized with sceneDocumentType.
 * (Original: class o)
 */
class SingletonSceneGraph extends SceneGraph {
  // Holds the singleton instance
  static instance: SingletonSceneGraph = new SingletonSceneGraph()

  private constructor() {
    super(sceneDocumentType)
  }
}

/**
 * Returns the singleton instance of SingletonSceneGraph.
 * (Original: $$l0)
 */
export function getSceneGraphInstance(): SingletonSceneGraph {
  return SingletonSceneGraph.instance
}

// Export aliases for backward compatibility (Original: NT, zm)
export const NT = getSceneGraphInstance
export const zm = SceneGraph
