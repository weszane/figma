import { createSiteMixin } from '../905/112832';

export function $$r1(e) {
  return class extends createSiteMixin(e) {
    get isPrimaryBreakpointFrame() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getIsPrimaryBreakpointFrame(this.sceneGraph.nodeContext);
    }

    get isInPrimaryBreakpointFrame() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getIsInPrimaryBreakpointFrame(this.sceneGraph.nodeContext);
    }

    get breakpointFrameRange() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getBreakpointFrameRange(this.sceneGraph.nodeContext);
    }

    get defaultResponsiveSetId() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getDefaultResponsiveSetId(this.sceneGraph.nodeContext);
    }

    setDefaultResponsiveSetId(e) {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.setDefaultResponsiveSetId(e, this.sceneGraph.nodeContext);
    }

    get containingBreakpointFrame() {
      this.setGlobalNodeID();
      let e = this.bindings.NodeTsApi.findContainingBreakpointFrame(this.sceneGraph.nodeContext);
      return this.sceneGraph.get(e);
    }

    get responsiveSetSettings() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getResponsiveSetSettings(this.sceneGraph.nodeContext);
    }

    get multiEditGlueId() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getMultiEditGlueId(this.sceneGraph.nodeContext);
    }

    get gluedNodes() {
      this.setGlobalNodeID();
      let e = this.bindings.NodeTsApi.getGluedNodeIds(this.sceneGraph.nodeContext);
      return this.sceneGraph.getNodes(e);
    }

    get primaryGluedNodeId() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getPrimaryGluedNodeId(this.sceneGraph.nodeContext);
    }
  };
}
export function $$a0(e) {
  e.setGlobalNodeID();
  let t = e.bindings.NodeTsApi.findContainingResponsiveSet(e.sceneGraph.nodeContext);
  return e.sceneGraph.get(t);
}
export const f = $$a0;
export const n = $$r1;