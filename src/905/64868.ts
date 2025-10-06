import { resolveVariableValue } from "../905/361176"
import { memoizeFn } from "../905/707098"

type Node = any
type NodeCache = any
type BoundVariables = any
type InferredVariables = any

export class BorderProperties {
  cachedProperties: Record<string, any>
  _EXPENSIVE_TO_READ_node: Node
  nodeCache: NodeCache
  boundVariables: BoundVariables
  inferredVariables: InferredVariables

  constructor(e: Node, t: NodeCache, i: BoundVariables, n: InferredVariables) {
    this.cachedProperties = {}
    this._EXPENSIVE_TO_READ_node = e
    this.nodeCache = t
    this.boundVariables = i
    this.inferredVariables = n
  }

  static empty() {
    return new BorderProperties({
      bottomLeftRadius: 0,
      bottomRightRadius: 0,
      topLeftRadius: 0,
      topRightRadius: 0,
      strokeAlign: "CENTER",
      strokeBottomWeight: 0,
      strokeLeftWeight: 0,
      strokeRightWeight: 0,
      strokeTopWeight: 0,
      strokes: [],
      dashPattern: [],
    }, null, {}, {})
  }

  readValue<T>(key: string, getter: (node: Node) => T): T {
    return memoizeFn(this.cachedProperties, key, this._EXPENSIVE_TO_READ_node, getter)
  }

  get strokes() {
    return this.readValue("strokes", e => e.strokes.filter(e => e.visible ?? !0))
  }

  get strokeAlign() {
    return this.readValue("strokeAlign", e => e.strokeAlign)
  }

  get strokeTopWeight() {
    return this.readValue("strokeTopWeight", e => resolveVariableValue(this.boundVariables, this.inferredVariables, this.nodeCache?.variableResolver, e.strokeTopWeight, "strokeTopWeight"))
  }

  get strokeBottomWeight() {
    return this.readValue("strokeBottomWeight", e => resolveVariableValue(this.boundVariables, this.inferredVariables, this.nodeCache?.variableResolver, e.strokeBottomWeight, "strokeBottomWeight"))
  }

  get strokeLeftWeight() {
    return this.readValue("strokeLeftWeight", e => resolveVariableValue(this.boundVariables, this.inferredVariables, this.nodeCache?.variableResolver, e.strokeLeftWeight, "strokeLeftWeight"))
  }

  get strokeRightWeight() {
    return this.readValue("strokeRightWeight", e => resolveVariableValue(this.boundVariables, this.inferredVariables, this.nodeCache?.variableResolver, e.strokeRightWeight, "strokeRightWeight"))
  }

  get topLeftRadius() {
    return this.readValue("topLeftRadius", e => e.topLeftRadius)
  }

  get topRightRadius() {
    return this.readValue("topRightRadius", e => e.topRightRadius)
  }

  get bottomLeftRadius() {
    return this.readValue("bottomLeftRadius", e => e.bottomLeftRadius)
  }

  get bottomRightRadius() {
    return this.readValue("bottomRightRadius", e => e.bottomRightRadius)
  }

  get dashPattern() {
    return this.readValue("dashPattern", e => e.dashPattern)
  }
}

export const N = BorderProperties
