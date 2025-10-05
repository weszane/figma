import { normalizeObjectKeys } from "../905/8035"
import { BorderProperties } from "../905/64868"
import { ComponentNodeProperties } from "../905/136718"
import { LayoutNode } from "../905/367656"
import { AutoLayoutPropertyReader } from "../905/543659"
import { memoizeFn, resolveEffectStyle, resolveFillStyle, resolveStrokeStyle, resolveVariable } from "../905/707098"
import { getVisibleChildNodes } from "../905/730910"
import { GridLayoutProperties } from "../905/927840"

type Node = any
type NodeCache = any
type BoundVariables = any
type InferredVariables = any
export class InstanceNodeProperties {
  public _cachedProperties: Record<string, any>
  public _EXPENSIVE_TO_READ_node: Node
  public nodeCache: NodeCache
  constructor(e: Node, t: NodeCache) {
    this._cachedProperties = {}
    this._EXPENSIVE_TO_READ_node = e
    this.nodeCache = t
  }

  public readValue<T>(key: string, getter: (node: Node) => T): T {
    return memoizeFn(this._cachedProperties, key, this._EXPENSIVE_TO_READ_node, getter)
  }

  get id() {
    return this.readValue("id", e => e.id)
  }

  get name() {
    return this.readValue("name", e => e.name)
  }

  get isGroup() {
    return false
  }

  get layout() {
    return this.readValue("layout", e => new LayoutNode(e, this.nodeCache))
  }

  get autoLayout() {
    return this.readValue("autoLayout", e => AutoLayoutPropertyReader.from(e))
  }

  get gridLayout() {
    return this.readValue("gridLayout", e => new GridLayoutProperties(e))
  }

  get border() {
    return this.readValue("border", e => new BorderProperties(e, this.nodeCache, this.boundVariables, this.inferredVariables))
  }

  get fills() {
    return this.readValue("fills", e => typeof e?.fills === "symbol" ? [] : e?.fills?.filter(e => e.visible ?? !0) ?? [])
  }

  get effects() {
    return this.readValue("effects", e => e.effects.filter(e => e.visible ?? !0))
  }

  get clipsContent() {
    return this.readValue("clipsContent", e => e.clipsContent)
  }

  get properties() {
    return this.readValue("properties", e => normalizeObjectKeys(e.componentProperties))
  }

  get opacity() {
    return this.readValue("opacity", e => e.opacity)
  }

  get blendMode() {
    return this.readValue("blendMode", e => e.blendMode)
  }

  get overrides() {
    return this.readValue("overrides", e => e.overrides ?? [])
  }

  get fillStyle() {
    return this.readValue("fillStyle", e => resolveFillStyle(e, this.nodeCache.stylesResolver))
  }

  get strokeStyle() {
    return this.readValue("strokeStyle", e => resolveStrokeStyle(e, this.nodeCache.stylesResolver))
  }

  get effectStyle() {
    return this.readValue("effectStyle", e => resolveEffectStyle(e, this.nodeCache.stylesResolver))
  }

  get mainComponent() {
    return this.readValue("mainComponent", e => e.mainComponent ? new ComponentNodeProperties(e.mainComponent, this.nodeCache) : void 0)
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

  getVariableValue(e: string) {
    return resolveVariable(this.boundVariables, this.inferredVariables, e, this.nodeCache.variableResolver)
  }

  setName(e: string) {
    this._cachedProperties.name = e
  }

  static from(e: Node, t: NodeCache) {
    return new InstanceNodeProperties(e, t)
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


export const B = InstanceNodeProperties
