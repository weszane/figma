import { createEmptyMixin29 } from '../905/112832';
import { SceneNodeCpp } from '../figma_app/13528';

export function $$a1(e) {
  return class extends createEmptyMixin29(e) {
    createInstance() {
      if (this.type !== 'SYMBOL')
      throw new Error('Can only create instances of components');
      if (this.setGlobalNodeID(), !SceneNodeCpp)
      return null;
      let e = this.sceneGraph.get(SceneNodeCpp.createInstance());
      e && e.materializeDescendants();
      return e;
    }

    get instances() {
      this.setGlobalNodeID();
      let e = SceneNodeCpp.getInstances(this.sceneGraph.nodeContext);
      return this.sceneGraph.getNodes(e);
    }

    getSublayerIdForInstanceOfSymbol(e) {
      this.setGlobalNodeID();
      return SceneNodeCpp?.getSublayerIdForInstanceOfSymbol(e) ?? null;
    }
  };
}
export function $$s0(e) {
  return e.type === 'SYMBOL';
}
export const B = $$s0;
export const D = $$a1;