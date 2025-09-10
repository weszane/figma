import { createEmptyMixin } from '../905/112832';
import { SceneNodeCpp } from '../figma_app/13528';
import { VariableSetIdCompatHandler, VariableIdHandler } from '../figma_app/243058';

/**
 * Mixin for variable-related node functionality.
 * @param Base - The base class to extend.
 * @returns A class with variable-related methods and properties.
 * (Original: $$s0)
 */
export function setupVariableMixin<T extends new (...args: any[]) => any>(Base: T) {
  /**
   * VariableMixin class extends the provided base class with variable-related logic.
   */
  class VariableMixin extends createEmptyMixin(Base) {
    /**
     * Gets the variable ID.
     * @throws Error if variable ID is invalid.
     */
    get variableID(): ReturnType<typeof sD.fromString> {
      this.setGlobalNodeID();
      const id = VariableIdHandler.fromString(this.bindings.NodeTsApi.getVariableID(this.sceneGraph.nodeContext));
      if (!id) throw new Error('Invalid variable id');
      return id;
    }

    /**
     * Gets the variable code syntax.
     */
    get variableCodeSyntax(): any {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getVariableCodeSyntax(this.sceneGraph.nodeContext);
    }

    /**
     * Gets the variable collection ID.
     * @throws Error if variable collection ID is invalid.
     */
    get variableCollectionId(): ReturnType<typeof gr.fromString> {
      this.setGlobalNodeID();
      const id = VariableSetIdCompatHandler.fromString(this.bindings.NodeTsApi.getVariableSetID(this.sceneGraph.nodeContext));
      if (!id) throw new Error('Invalid variable collection id');
      return id;
    }

    /**
     * Sets the variable key for testing.
     * @param key - The key to set.
     * (Original: setVariableKeyForTest)
     */
    setVariableKeyForTest(key: any): void {
      this.setAssetKeyForTest(key);
    }

    /**
     * Gets the resolved type of the variable.
     */
    get variableResolvedType(): any {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getVariableResolvedType(this.sceneGraph.nodeContext);
    }

    /**
     * Sets the variable scopes.
     * @param scopes - The scopes to set.
     */
    set variableScopes(scopes: any) {
      this.setGlobalNodeID();
      this.bindings.NodeTsApi.setVariableScopes(scopes, this.sceneGraph.nodeContext);
    }

    /**
     * Gets the variable scopes.
     */
    get variableScopes(): any {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getVariableScopes(this.sceneGraph.nodeContext);
    }

    /**
     * Sets the variable code syntax.
     * @param syntax - The code syntax.
     * @param options - Additional options.
     * (Original: setVariableCodeSyntax)
     */
    setVariableCodeSyntax(syntax: any, options: any): void {
      this.setGlobalNodeID();
      this.bindings.NodeTsApi.setVariableCodeSyntax(syntax, options, this.sceneGraph.nodeContext);
    }

    /**
     * Removes the variable code syntax.
     * @param syntax - The code syntax to remove.
     * (Original: removeVariableCodeSyntax)
     */
    removeVariableCodeSyntax(syntax: any): void {
      this.setGlobalNodeID();
      this.bindings.NodeTsApi.removeVariableCodeSyntax(syntax, this.sceneGraph.nodeContext);
    }

    /**
     * Gets the bound variables.
     */
    get boundVariables(): any {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getBoundVariables(this.sceneGraph.nodeContext);
    }

    /**
     * Gets the inferred variables.
     */
    get inferredVariables(): any {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getInferredVariables(this.sceneGraph.nodeContext);
    }

    /**
     * Gets the available inferred variables.
     */
    get availableInferredVariables(): any {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getAvailableInferredVariables(this.sceneGraph.nodeContext);
    }

    /**
     * Sets a bound variable.
     * @param variable - The variable to bind.
     * @param value - The value to bind.
     * @throws Error if there is an error message.
     * (Original: setBoundVariable)
     */
    setBoundVariable(variable: any, value: any): void {
      this.setGlobalNodeID();
      const {
        errorMsg
      } = this.bindings.NodeTsApi.setBoundVariable(variable, value, this.sceneGraph.nodeContext);
      if (errorMsg) throw new Error(errorMsg);
    }

    /**
     * Gets the bound variables for style.
     */
    get boundVariablesForStyle(): any {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getBoundVariablesForStyle(this.sceneGraph.nodeContext);
    }

    /**
     * Resolves a variable.
     * @param variable - The variable to resolve.
     * (Original: resolveVariable)
     */
    resolveVariable(variable: any): any {
      this.setGlobalNodeID();
      return SceneNodeCpp.resolveVariable(variable);
    }

    /**
     * Gets the range bound variable.
     * @param a - First parameter.
     * @param b - Second parameter.
     * @param c - Third parameter.
     * (Original: getRangeBoundVariable)
     */
    getRangeBoundVariable(a: any, b: any, c: any): any {
      this.setGlobalNodeID();
      return SceneNodeCpp.getRangeBoundVariable(a, b, c, this.sceneGraph.nodeContext);
    }

    /**
     * Sets the range bound variable.
     * @param a - First parameter.
     * @param b - Second parameter.
     * @param c - Third parameter.
     * @param d - Fourth parameter.
     * @throws Error if there is an error message.
     * (Original: setRangeBoundVariable)
     */
    setRangeBoundVariable(a: any, b: any, c: any, d: any): void {
      this.setGlobalNodeID();
      const {
        errorMsg
      } = SceneNodeCpp.setRangeBoundVariable(a, b, c, d, this.sceneGraph.nodeContext);
      if (errorMsg) throw new Error(errorMsg);
    }
  }
  return VariableMixin;
}

/**
 * Checks if the node type is 'VARIABLE'.
 * @param node - The node to check.
 * @returns True if node type is 'VARIABLE', else false.
 * (Original: $$o1)
 */
export const isVariableNode = (node: {
  type: string;
}): boolean => node.type === 'VARIABLE';

// Export refactored names
export const B = setupVariableMixin;
export const v = isVariableNode;
