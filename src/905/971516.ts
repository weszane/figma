import { reportError } from "../905/11"
import { BorderProperties } from "../905/64868"
import { FixedLayoutNodeWrapper, StrokeNodeWrapper } from "../905/121113"
import { ServiceCategories } from "../905/165054"
import { LayoutNode } from "../905/367656"
import { memoizeFn, resolveEffectStyle, resolveFillStyle, resolveStrokeStyle, resolveVariable } from "../905/707098"
import { GridLayoutProperties } from "../905/927840"

type Node = any
type NodeCache = any

type BoundVariables = any
type InferredVariables = any

export class ShapeNodeProperties {
  _cachedProperties: Record<string, any>
  _EXPENSIVE_TO_READ_node: Node
  nodeCache: NodeCache

  constructor(e: Node, t: NodeCache) {
    this._cachedProperties = {}
    this._EXPENSIVE_TO_READ_node = e
    this.nodeCache = t
  }

  static from(e: Node, t: NodeCache) {
    return new ShapeNodeProperties(e, t)
  }

  readValue<T>(key: string, getter: (node: Node) => T): T {
    return memoizeFn(this._cachedProperties, key, this._EXPENSIVE_TO_READ_node, getter)
  }

  get isGroup() {
    return false
  }

  get border() {
    return this.readValue("border", (e) => {
      let t
      e.type === "RECTANGLE"
        ? t = new BorderProperties(e, this.nodeCache, this.boundVariables, this.inferredVariables)
        : e.type === "LINE"
          ? t = new BorderProperties({
            strokes: [],
            strokeAlign: e.strokeAlign,
            strokeBottomWeight: 0,
            strokeTopWeight: 0,
            strokeLeftWeight: 0,
            strokeRightWeight: 0,
            bottomRightRadius: 0,
            topLeftRadius: 0,
            topRightRadius: 0,
            bottomLeftRadius: 0,
            dashPattern: [],
          }, this.nodeCache, this.boundVariables, this.inferredVariables)
          : e.type === "ELLIPSE" ? t = new BorderProperties(new StrokeNodeWrapper(e), this.nodeCache, this.boundVariables, this.inferredVariables) : reportError(ServiceCategories.DEVELOPER_TOOLS, new Error(`Unexpected node type for border: ${e?.type}`))
      return t
    })
  }

  get fills() {
    return this.readValue("fills", (e) => {
      let t
      return typeof e?.fills == "symbol" ? [] : (e.type === "RECTANGLE" ? t = e?.fills?.filter(e => e.visible ?? !0) ?? [] : e.type === "LINE" ? t = e?.strokes?.filter(e => e.visible ?? !0) ?? [] : e.type === "ELLIPSE" ? t = e?.fills?.filter(e => e.visible ?? !0) ?? [] : reportError(ServiceCategories.DEVELOPER_TOOLS, new Error(`Unexpected node type for fill: ${e?.type}`)), t)
    })
  }

  get layout() {
    return this.readValue("layout", (e) => {
      let t
      if (e.type === "RECTANGLE") {
        t = new LayoutNode(e, this.nodeCache)
      }
      else if (e.type === "LINE") {
        let i = 0
        let n = 0
        switch (Math.round(e.rotation)) {
          case 0:
          case 180:
            i = e.width
            n = e.strokeWeight
            break
          case 90:
          case -90:
            i = e.strokeWeight
            n = e.width
            break
          default:
            i = e.width
            n = e.height
        }
        t = new LayoutNode(new FixedLayoutNodeWrapper(e, i, n), this.nodeCache)
      }
      else {
        e.type === "ELLIPSE" && (t = new LayoutNode(e, this.nodeCache))
      }
      return t
    })
  }

  get gridLayout() {
    return this.readValue("gridLayout", e => new GridLayoutProperties(e))
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

  get id() {
    return this.readValue("id", e => e.id)
  }

  get name() {
    return this.readValue("name", e => e.name)
  }

  get effects() {
    return this.readValue("effects", e => e.effects.filter(e => e.visible ?? !0))
  }

  get opacity() {
    return this.readValue("opacity", e => e.opacity)
  }

  get blendMode() {
    return this.readValue("blendMode", e => e.blendMode)
  }

  get boundVariables(): BoundVariables {
    return this.readValue("boundVariables", e => e.boundVariables)
  }

  get inferredVariables(): InferredVariables {
    return this.readValue("inferredVariables", e => e.availableInferredVariables)
  }

  getVariableValue(e: string) {
    return resolveVariable(this.boundVariables, this.inferredVariables, e, this.nodeCache.variableResolver)
  }

  setName(e: string) {
    this._cachedProperties.name = e
  }

  isAutoLayout() {
    return false
  }

  isGrid() {
    return false
  }
}

export const j = ShapeNodeProperties
