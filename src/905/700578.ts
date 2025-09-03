import { sceneDocumentType } from '../905/582379'
import { StateSourceType } from '../figma_app/175377'
import { TSSceneGraph } from '../figma_app/518682'

export class ReduxSceneGraph extends TSSceneGraph {
  constructor(e) {
    super(StateSourceType.REDUX, e)
  }
}
export class SingletonSceneGraph extends ReduxSceneGraph {
  static instance = new SingletonSceneGraph()
  constructor() {
    super(sceneDocumentType)
  }
}
export function getSingletonSceneGraph() {
  return SingletonSceneGraph.instance
}

export const M3 = SingletonSceneGraph
export const UN = getSingletonSceneGraph
export const qo = ReduxSceneGraph
