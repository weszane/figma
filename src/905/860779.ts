import { isNotNull } from "../905/8035"
import { LayoutNode } from "../905/367656"
import { memoizeFn, resolveFillStyle, resolveStrokeStyle, resolveVariable, StyleStatus } from "../905/707098"
import { GridLayoutProperties } from "../905/927840"

export class NodeWrapper {
  private _cachedProperties: Record<string, any>
  children: any[]
  private _EXPENSIVE_TO_READ_node: any
  nodeCache: any

  constructor(node: any, nodeCache: any) {
    this._cachedProperties = {}
    this.children = []
    this._EXPENSIVE_TO_READ_node = node
    this.nodeCache = nodeCache
  }

  /**
   * Reads a value from the node and memoizes it
   * @param key - The key to memoize the value under
   * @param resolver - Function to resolve the value from the node
   * @returns The resolved value
   */
  readValue<T>(key: string, resolver: (node: any) => T): T {
    return memoizeFn(this._cachedProperties, key, this._EXPENSIVE_TO_READ_node, resolver)
  }

  /**
   * Factory method to create a NodeWrapper instance
   * @param node - The node to wrap
   * @param nodeCache - The cache for node-related data
   * @returns A new NodeWrapper instance
   */
  static from(node: any, nodeCache: any): NodeWrapper {
    return new NodeWrapper(node, nodeCache)
  }

  /**
   * Gets the node's ID
   */
  get id(): string {
    return this.readValue("id", node => node.id)
  }

  /**
   * Gets the node's name
   */
  get name(): string {
    return this.readValue("name", node => node.name)
  }

  /**
   * Gets the node's layout information
   */
  get layout(): LayoutNode {
    return this.readValue("layout", node => new LayoutNode(node, this.nodeCache))
  }

  /**
   * Gets the node's grid layout properties
   */
  get gridLayout(): GridLayoutProperties {
    return this.readValue("gridLayout", node => new GridLayoutProperties(node))
  }

  /**
   * Gets the node's stroke weight
   */
  get strokeWeight(): { rawValue: number } {
    return this.readValue("strokeWeight", node =>
      node.type === "GROUP" || typeof node.strokeWeight !== "number"
        ? {
          rawValue: 0,
        }
        : {
          rawValue: node.strokeWeight,
        })
  }

  /**
   * Gets the node's visible strokes
   */
  get strokes(): any[] {
    return this.readValue("strokes", node =>
      node.type === "GROUP"
        ? []
        : node.strokes
          ? node.strokes.filter((stroke: any) => stroke.visible ?? true)
          : [])
  }

  /**
   * Gets the node's visible fills
   */
  get fills(): any[] {
    return this.readValue("fills", node =>
      node.type === "GROUP" || typeof node?.fills === "symbol"
        ? []
        : node?.fills
          ? node.fills.filter((fill: any) => fill.visible ?? true)
          : [])
  }

  /**
   * Gets the node's fill style
   */
  get fillStyle(): any {
    return this.readValue("fillStyle", node =>
      node.type !== "GROUP"
        ? resolveFillStyle(node, this.nodeCache.stylesResolver)
        : StyleStatus.StyleNotSet)
  }

  /**
   * Gets the node's stroke style
   */
  get strokeStyle(): any {
    return this.readValue("strokeStyle", node =>
      node.type !== "GROUP"
        ? resolveStrokeStyle(node, this.nodeCache.stylesResolver)
        : StyleStatus.StyleNotSet)
  }

  /**
   * Gets the node's visible effects
   */
  get effects(): any[] {
    return this.readValue("effects", node =>
      node.effects
        ? node.effects.filter((effect: any) => effect.visible ?? true)
        : [])
  }

  /**
   * Gets the node's opacity
   */
  get opacity(): number {
    return this.readValue("opacity", node => node.opacity)
  }

  /**
   * Gets the node's blend mode
   */
  get blendMode(): any {
    return this.readValue("blendMode", node => node.blendMode)
  }

  /**
   * Gets the node's bound variables
   */
  get boundVariables(): any {
    return this.readValue("boundVariables", node => node.boundVariables)
  }

  /**
   * Gets the node's inferred variables
   */
  get inferredVariables(): any {
    return this.readValue("inferredVariables", node => node.availableInferredVariables)
  }

  /**
   * Gets the value of a variable bound to the node
   * @param variableName - The name of the variable to resolve
   * @returns The resolved variable value
   */
  getVariableValue(variableName: string): any {
    return resolveVariable(
      this.boundVariables,
      this.inferredVariables,
      variableName,
      this.nodeCache.variableResolver,
    )
  }

  /**
   * Sets the node's name in the cache
   * @param name - The name to set
   */
  setName(name: string): void {
    this._cachedProperties.name = name
  }

  /**
   * Gets the node's SVG document asynchronously
   * @returns A promise that resolves to the parsed SVG document
   */
  async getDocumentAsync(): Promise<Document> {
    const node = this._EXPENSIVE_TO_READ_node
    if (!node) {
      throw new Error("Node reference does not exist")
    }

    if (!isNotNull(this._cachedProperties.document)) {
      const parser = new window.DOMParser()
      const svgData = new TextDecoder().decode(await node.exportAsync({
        format: "SVG",
      }))
      this._cachedProperties.document = parser.parseFromString(svgData, "image/svg+xml")
    }

    return this._cachedProperties.document
  }

  /**
   * Checks if the node uses auto layout
   * @returns false (placeholder implementation)
   */
  isAutoLayout(): boolean {
    return false
  }

  /**
   * Checks if the node is a grid
   * @returns false (placeholder implementation)
   */
  isGrid(): boolean {
    return false
  }
}

export const a = NodeWrapper
