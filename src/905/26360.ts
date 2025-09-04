import { createSiteMixin as CreateSiteMixin } from '../905/112832'

/**
 * Extends a base class with responsive set and breakpoint frame related properties and methods.
 * @param Base - The base class to extend.
 * @returns A new class with additional responsive set and breakpoint frame logic.
 */
// $$r1
export function ResponsiveSetMixin<T extends new (...args: any[]) => any>(Base: T) {
  return class extends CreateSiteMixin(Base) {
    /**
     * Whether this node is the primary breakpoint frame.
     */
    get isPrimaryBreakpointFrame(): boolean {
      this.setGlobalNodeID()
      return this.bindings.NodeTsApi.getIsPrimaryBreakpointFrame(this.sceneGraph.nodeContext)
    }

    /**
     * Whether this node is in the primary breakpoint frame.
     */
    get isInPrimaryBreakpointFrame(): boolean {
      this.setGlobalNodeID()
      return this.bindings.NodeTsApi.getIsInPrimaryBreakpointFrame(this.sceneGraph.nodeContext)
    }

    /**
     * The range of the breakpoint frame.
     */
    get breakpointFrameRange(): any {
      this.setGlobalNodeID()
      return this.bindings.NodeTsApi.getBreakpointFrameRange(this.sceneGraph.nodeContext)
    }

    /**
     * The default responsive set ID.
     */
    get defaultResponsiveSetId(): string {
      this.setGlobalNodeID()
      return this.bindings.NodeTsApi.getDefaultResponsiveSetId(this.sceneGraph.nodeContext)
    }

    /**
     * Sets the default responsive set ID.
     * @param id - The responsive set ID to set as default.
     */
    setDefaultResponsiveSetId(id: string): any {
      this.setGlobalNodeID()
      return this.bindings.NodeTsApi.setDefaultResponsiveSetId(id, this.sceneGraph.nodeContext)
    }

    /**
     * The containing breakpoint frame node.
     */
    get containingBreakpointFrame(): any {
      this.setGlobalNodeID()
      const frameId = this.bindings.NodeTsApi.findContainingBreakpointFrame(this.sceneGraph.nodeContext)
      return this.sceneGraph.get(frameId)
    }

    /**
     * Responsive set settings.
     */
    get responsiveSetSettings(): any {
      this.setGlobalNodeID()
      return this.bindings.NodeTsApi.getResponsiveSetSettings(this.sceneGraph.nodeContext)
    }

    /**
     * The multi-edit glue ID.
     */
    get multiEditGlueId(): string {
      this.setGlobalNodeID()
      return this.bindings.NodeTsApi.getMultiEditGlueId(this.sceneGraph.nodeContext)
    }

    /**
     * The glued nodes.
     */
    get gluedNodes(): any[] {
      this.setGlobalNodeID()
      const nodeIds = this.bindings.NodeTsApi.getGluedNodeIds(this.sceneGraph.nodeContext)
      return this.sceneGraph.getNodes(nodeIds)
    }

    /**
     * The primary glued node ID.
     */
    get primaryGluedNodeId(): string {
      this.setGlobalNodeID()
      return this.bindings.NodeTsApi.getPrimaryGluedNodeId(this.sceneGraph.nodeContext)
    }
  }
}

/**
 * Finds the containing responsive set node for the given instance.
 * @param instance - The instance to find the containing responsive set for.
 * @returns The containing responsive set node.
 */
// $$a0
export function findContainingResponsiveSet(instance: any): any {
  instance.setGlobalNodeID()
  const setId = instance.bindings.NodeTsApi.findContainingResponsiveSet(instance.sceneGraph.nodeContext)
  return instance.sceneGraph.get(setId)
}

// Export aliases for backward compatibility with original names
export const n = ResponsiveSetMixin
export const f = findContainingResponsiveSet
