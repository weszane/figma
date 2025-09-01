import { createSlideMixin } from '../905/112832';
import { SceneNodeCpp } from '../figma_app/13528';

export function $$a0(e) {
  return class extends createSlideMixin(e) {
    isSlideOrSlidelikeFrame() {
      this.setGlobalNodeID();
      return SceneNodeCpp.isSlideOrSlidelikeFrame(this.sceneGraph.nodeContext);
    }

    isSlideOrTemplate() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.isSlideOrTemplate(this.sceneGraph.nodeContext);
    }

    get slideThemeId() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getSlideThemeId(this.sceneGraph.nodeContext);
    }

    set slideThemeId(e) {
      this.setGlobalNodeID();
      this.bindings.NodeTsApi.setSlideThemeId(this.sceneGraph.nodeContext, e);
    }

    get childSlideOrSelfId() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.findChildSlideOrSelf(this.sceneGraph.nodeContext);
    }

    getSlidesJSON() {
      this.setGlobalNodeID();
      return SceneNodeCpp.getSlidesJSON();
    }
  };
}
export function $$s1(e) {
  return e?.type === 'SLIDE';
}
export const I = $$a0;
export const Y = $$s1;