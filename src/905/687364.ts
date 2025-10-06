import { BorderProperties } from "../905/64868"
import { AutoLayoutNodeWrapper } from "../905/121113"
import { LayoutNode } from "../905/367656"
import { AutoLayoutPropertyReader } from "../905/543659"
import { hasProperty, memoizeFn, resolveEffectStyle, resolveFillStyle, resolveStrokeStyle, resolveVariable, StyleStatus } from "../905/707098"
import { getVisibleChildNodes } from "../905/730910"
import { GridLayoutProperties } from "../905/927840"

type Node = any
type NodeCache = any
type BoundVariables = any
type InferredVariables = any
export class FrameNodeProperties {
  _cachedProperties: Record<string, any>
  _EXPENSIVE_TO_READ_node: Node
  nodeCache: NodeCache
  constructor(e: Node, t: NodeCache) {
    this._cachedProperties = {}
    this._EXPENSIVE_TO_READ_node = e
    this.nodeCache = t
  }

  readValue<T>(key: string, getter: (node: Node) => T): T {
    return memoizeFn(this._cachedProperties, key, this._EXPENSIVE_TO_READ_node, getter)
  }

  get id() {
    return this.readValue("id", e => e.id)
  }

  get name() {
    return this.readValue("name", e => e.name)
  }

  get isGroup() {
    return this.readValue("isGroup", e => e.type === "GROUP")
  }

  get layout() {
    return this.readValue("layout", e => e.type === "GROUP" ? new LayoutNode(new AutoLayoutNodeWrapper(e), this.nodeCache) : new LayoutNode(e, this.nodeCache))
  }

  get autoLayout() {
    return this.readValue("autoLayout", e => AutoLayoutPropertyReader.from(e))
  }

  get gridLayout() {
    return this.readValue("gridLayout", e => GridLayoutProperties.from(e))
  }

  get border() {
    return this.readValue("border", e => e.type !== "GROUP" ? new BorderProperties(e, this.nodeCache, this.boundVariables, this.inferredVariables) : BorderProperties.empty())
  }

  get fills() {
    return this.readValue("fills", e => typeof e?.fills === "symbol" ? [] : e.type !== "GROUP" ? e?.fills?.filter(e => e.visible ?? !0) ?? [] : [])
  }

  get effects() {
    return this.readValue("effects", e => e.effects ? e.effects.filter(e => e.visible ?? !0) : [])
  }

  get clipsContent() {
    return this.readValue("clipsContent", e => e.type !== "GROUP" && e.clipsContent)
  }

  get opacity() {
    return this.readValue("opacity", e => e.opacity)
  }

  get blendMode() {
    return this.readValue("blendMode", e => e.blendMode)
  }

  get fillStyle() {
    return this.readValue("fillStyle", e => e.type !== "GROUP" ? resolveFillStyle(e, this.nodeCache.stylesResolver) : StyleStatus.StyleNotSet)
  }

  get strokeStyle() {
    return this.readValue("strokeStyle", e => e.type !== "GROUP" ? resolveStrokeStyle(e, this.nodeCache.stylesResolver) : StyleStatus.StyleNotSet)
  }

  get effectStyle() {
    return this.readValue("effectStyle", e => e.type !== "GROUP" ? resolveEffectStyle(e, this.nodeCache.stylesResolver) : StyleStatus.StyleNotSet)
  }

  get boundVariables(): BoundVariables {
    return this.readValue("boundVariables", e => e.boundVariables)
  }

  get inferredVariables(): InferredVariables {
    return this.readValue("inferredVariables", e => e.availableInferredVariables)
  }

  get children() {
    return this.readValue("children", e => getVisibleChildNodes(this.nodeCache, e))
  }

  hasVariable(e: string) {
    return hasProperty(this.boundVariables, e)
  }

  getVariableValue(e: string) {
    return resolveVariable(this.boundVariables, this.inferredVariables, e, this.nodeCache.variableResolver)
  }

  setName(e: string) {
    this._cachedProperties.name = e
  }

  static from(e: Node, t: NodeCache) {
    return new FrameNodeProperties(e, t)
  }

  isLayoutContainer() {
    return this.autoLayout.layoutMode !== "NONE"
  }

  isAutoLayout() {
    return this.autoLayout.layoutMode !== "NONE" && !this.isGrid()
  }

  isGrid() {
    return this.gridLayout.layoutMode === "GRID"
  }
}
export const L = FrameNodeProperties
