import { createConnectorMixin } from '../905/112832'
import { kiwiParserCodec } from '../905/294864'



/**
 * ConnectorMixin - Mixin class to add connector-related properties and methods.
 * @param Base - The base class to extend.
 * @returns A new class with connector properties and methods.
 */
export function ConnectorMixin<TBase extends new (...args: any[]) => any>(Base: TBase) {
  // $$a1
  return class extends createConnectorMixin(Base) {
    /**
     * Gets the connector line style.
     */
    get connectorLineStyle() {
      this.setGlobalNodeID()
      return this.bindings.NodeTsApi.getConnectorLineStyle(this.sceneGraph.nodeContext)
    }

    /**
     * Sets the connector line style.
     */
    set connectorLineStyle(style: any) {
      this.setGlobalNodeID()
      const error = this.bindings.NodeTsApi.setConnectorLineStyle(style, this.sceneGraph.nodeContext)
      if (error)
        throw new Error(error)
    }

    /**
     * Gets the connector line type.
     */
    get connectorLineType() {
      this.setGlobalNodeID()
      return kiwiParserCodec.ConnectorLineStyle[
        this.bindings.NodeTsApi.getConnectorLineType(this.sceneGraph.nodeContext)
      ] ?? null
    }

    /**
     * Sets the connector line type.
     */
    set connectorLineType(type: keyof typeof kiwiParserCodec.ConnectorLineStyle) {
      const typeValue = kiwiParserCodec.ConnectorLineStyle[type]
      if (typeof typeValue === 'number') {
        this.setGlobalNodeID()
        const error = this.bindings.NodeTsApi.setConnectorLineType(typeValue, this.sceneGraph.nodeContext)
        if (error)
          throw new Error(error)
      }
      else {
        throw new TypeError('Invalid value for connectorLineStyle')
      }
    }

    /**
     * Gets the connector start canvas position.
     */
    get connectorStartCanvasPosition() {
      this.setGlobalNodeID()
      return this.bindings.NodeTsApi.connectorStartCanvasPosition(this.sceneGraph.nodeContext)
    }

    /**
     * Gets the connector end canvas position.
     */
    get connectorEndCanvasPosition() {
      this.setGlobalNodeID()
      return this.bindings.NodeTsApi.connectorEndCanvasPosition(this.sceneGraph.nodeContext)
    }

    /**
     * Gets the connector start cap.
     */
    get connectorStartCap() {
      this.setGlobalNodeID()
      return this.bindings.NodeTsApi.getConnectorStartCap(this.sceneGraph.nodeContext)
    }

    /**
     * Sets the connector start cap.
     */
    set connectorStartCap(cap: any) {
      this.setGlobalNodeID()
      const error = this.bindings.NodeTsApi.setConnectorStartCap(cap, this.sceneGraph.nodeContext)
      if (error)
        throw new Error(error)
    }

    /**
     * Gets the connector end cap.
     */
    get connectorEndCap() {
      this.setGlobalNodeID()
      return this.bindings.NodeTsApi.getConnectorEndCap(this.sceneGraph.nodeContext)
    }

    /**
     * Sets the connector end cap.
     */
    set connectorEndCap(cap: any) {
      this.setGlobalNodeID()
      const error = this.bindings.NodeTsApi.setConnectorEndCap(cap, this.sceneGraph.nodeContext)
      if (error)
        throw new Error(error)
    }

    /**
     * Checks if the connector is unattached.
     */
    isConnectorUnattached(): boolean {
      this.setGlobalNodeID()
      return this.bindings.NodeTsApi.isConnectorUnattached(this.sceneGraph.nodeContext)
    }

    /**
     * Gets the IDs of attached connectors.
     */
    get attachedConnectorIDs() {
      this.setGlobalNodeID()
      return this.bindings.SceneGraphTsApi.getAttachedConnectorIDs()
    }
  }
}

/**
 * Checks if the given object is a connector.
 * @param obj - The object to check.
 * @returns True if the object is a connector, false otherwise.
 */
export function isConnector(obj: { type: string }): boolean {
  // $$s0
  return obj.type === 'CONNECTOR'
}

// Exported names refactored as per instruction
export const w = ConnectorMixin
export const E = isConnector
