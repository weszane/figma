import { createEmptyMixin } from '../905/112832';
import { SceneNodeCpp } from '../figma_app/13528';
import { gr, sD } from '../figma_app/243058';

export function $$s0(e) {
  return class extends createEmptyMixin(e) {
    get variableID() {
      this.setGlobalNodeID();
      let e = sD.fromString(this.bindings.NodeTsApi.getVariableID(this.sceneGraph.nodeContext));
      if (!e)
      throw new Error('Invalid variable id');
      return e;
    }

    get variableCodeSyntax() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getVariableCodeSyntax(this.sceneGraph.nodeContext);
    }

    get variableCollectionId() {
      this.setGlobalNodeID();
      let e = gr.fromString(this.bindings.NodeTsApi.getVariableSetID(this.sceneGraph.nodeContext));
      if (!e)
      throw new Error('Invalid variable collection id');
      return e;
    }

    setVariableKeyForTest(e) {
      this.setAssetKeyForTest(e);
    }

    get variableResolvedType() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getVariableResolvedType(this.sceneGraph.nodeContext);
    }

    set variableScopes(e) {
      this.setGlobalNodeID();
      this.bindings.NodeTsApi.setVariableScopes(e, this.sceneGraph.nodeContext);
    }

    get variableScopes() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getVariableScopes(this.sceneGraph.nodeContext);
    }

    setVariableCodeSyntax(e, t) {
      this.setGlobalNodeID();
      this.bindings.NodeTsApi.setVariableCodeSyntax(e, t, this.sceneGraph.nodeContext);
    }

    removeVariableCodeSyntax(e) {
      this.setGlobalNodeID();
      this.bindings.NodeTsApi.removeVariableCodeSyntax(e, this.sceneGraph.nodeContext);
    }

    get boundVariables() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getBoundVariables(this.sceneGraph.nodeContext);
    }

    get inferredVariables() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getInferredVariables(this.sceneGraph.nodeContext);
    }

    get availableInferredVariables() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getAvailableInferredVariables(this.sceneGraph.nodeContext);
    }

    setBoundVariable(e, t) {
      this.setGlobalNodeID();
      let {
        errorMsg
      } = this.bindings.NodeTsApi.setBoundVariable(e, t, this.sceneGraph.nodeContext);
      if (errorMsg)
      throw new Error(errorMsg);
    }

    get boundVariablesForStyle() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getBoundVariablesForStyle(this.sceneGraph.nodeContext);
    }

    resolveVariable(e) {
      this.setGlobalNodeID();
      return SceneNodeCpp.resolveVariable(e);
    }

    getRangeBoundVariable(e, t, i) {
      this.setGlobalNodeID();
      return SceneNodeCpp.getRangeBoundVariable(e, t, i, this.sceneGraph.nodeContext);
    }

    setRangeBoundVariable(e, t, i, n) {
      this.setGlobalNodeID();
      let {
        errorMsg
      } = SceneNodeCpp.setRangeBoundVariable(e, t, i, n, this.sceneGraph.nodeContext);
      if (errorMsg)
      throw new Error(errorMsg);
    }
  };
}
export function $$o1(e) {
  return e.type === 'VARIABLE';
}
export const B = $$s0;
export const v = $$o1;