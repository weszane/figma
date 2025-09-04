import type { TSSceneGraph } from '../figma_app/518682'
import { parseInteger } from '../905/833686'

export interface Bindings {
  NodeTsApi: {
    setGlobalUnstableNodeByID: (scene: any, sessionID: number, localID: number, nodeContext: any) => void
    [key: string]: any
  }
  ConstraintsFacetTsApiGenerated: any
  [key: string]: any
}

export class NodeReference {
  public guid: string
  public sceneGraph: TSSceneGraph
  public bindings: Bindings
  public sessionID: number
  public localID: number

  constructor(guid: string, sceneGraph: TSSceneGraph, bindings: Bindings) {
    this.guid = guid
    this.sceneGraph = sceneGraph
    this.bindings = bindings
    this.sessionID = parseInteger(guid, 0)
    this.localID = parseInteger(guid, guid.indexOf(':') + 1)
  }

  get id(): string {
    return this.guid
  }

  setGlobalNodeID(): void {
    this.bindings.NodeTsApi.setGlobalUnstableNodeByID(
      this.sceneGraph.scene,
      this.sessionID,
      this.localID,
      this.sceneGraph.nodeContext,
    )
  }
}

export const X = NodeReference
