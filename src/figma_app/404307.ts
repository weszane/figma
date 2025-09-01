import { NodeReference } from '../905/21872'
import { createTypeMixin } from '../905/112832'
import { createNodeMixin } from '../905/155492'

export class SceneGraphNode extends createNodeMixin(createTypeMixin(NodeReference)) {
  get isAlive(): boolean {
    this.setGlobalNodeID()
    return this.bindings.NodeTsApi.exists(this.sceneGraph.nodeContext)
  }

  get tracking(): any {
    this.setGlobalNodeID()
    return this.bindings.NodeTsApi.getTracking(this.sceneGraph.nodeContext)
  }

  get isSoftDeleted(): boolean {
    this.setGlobalNodeID()
    return this.bindings.NodeTsApi.getIsSoftDeleted(this.sceneGraph.nodeContext)
  }

  set name(value: string) {
    this.setGlobalNodeID()
    const result = this.bindings.NodeTsApi.setName(value, this.sceneGraph.nodeContext)
    if (result) {
      throw new Error(result)
    }
  }

  get name(): string {
    this.setGlobalNodeID()
    return this.bindings.NodeTsApi.getName(this.sceneGraph.nodeContext)
  }

  removeSelfAndChildren(): void {
    this.setGlobalNodeID()
    const success = this.bindings.NodeTsApi.removeSelfAndChildren(this.sceneGraph.nodeContext)
    if (!success) {
      throw new Error('Removing this node is not allowed')
    }
  }
}

export function identity<T>(value: T): T {
  return value
}

export function createIdentityFunction<T>(): (value: T) => T {
  return (value: T) => value
}

export function createValueTransformer<T>(): (value: T) => T {
  return (value: T) => value
}

export const EV = createValueTransformer()
// export const hx = identity
