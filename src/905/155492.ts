import { SceneNodeCpp } from '../figma_app/13528'

export interface InsertChildOptions {
  skipValidation?: boolean
}

export function createNodeMixin<T extends new (...args: any[]) => any>(BaseClass: T) {
  return class NodeMixin extends BaseClass {
    get parentGuid(): string {
      this.setGlobalNodeID()
      return this.bindings.NodeTsApi.getParent(this.sceneGraph.nodeContext)
    }

    get parentNode() {
      this.setGlobalNodeID()
      const parentGuid = this.bindings.NodeTsApi.getParent(this.sceneGraph.nodeContext)
      return this.sceneGraph.get(parentGuid)
    }

    get childCount(): number {
      this.setGlobalNodeID()
      return this.bindings.NodeTsApi.getChildCount(this.sceneGraph.nodeContext)
    }

    get childrenGuids(): string[] {
      this.setGlobalNodeID()
      return this.bindings.NodeTsApi.getChildren(this.sceneGraph.nodeContext)
    }

    get childrenNodes() {
      this.setGlobalNodeID()
      const childrenGuids = this.bindings.NodeTsApi.getChildren(this.sceneGraph.nodeContext)
      return this.sceneGraph.getNodes(childrenGuids)
    }

    get reversedChildrenGuids(): string[] {
      this.setGlobalNodeID()
      return SceneNodeCpp.getReversedChildren(this.sceneGraph.nodeContext)
    }

    get reversedChildrenNodes() {
      this.setGlobalNodeID()
      const reversedChildrenGuids = SceneNodeCpp.getReversedChildren(this.sceneGraph.nodeContext)
      return this.sceneGraph.getNodes(reversedChildrenGuids)
    }

    appendChild(child: any, options: InsertChildOptions = {}): void {
      this.setGlobalNodeID()
      const childCount = this.bindings.NodeTsApi.getChildCount(this.sceneGraph.nodeContext)
      this.bindings.NodeTsApi.insertChild(
        childCount,
        child.guid,
        this.sceneGraph.nodeContext,
        !!options.skipValidation,
      )
    }

    insertChild(child: any, index: number, options: InsertChildOptions = {}): void {
      this.setGlobalNodeID()
      this.bindings.NodeTsApi.insertChild(
        index,
        child.guid,
        this.sceneGraph.nodeContext,
        !!options.skipValidation,
      )
    }
  }
}

export const G = createNodeMixin
