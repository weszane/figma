import { normalizeObjectKeys } from "../905/8035"
import { LayoutNode } from "../905/367656"
import { memoizeFn } from "../905/707098"
import { getVisibleChildNodes } from "../905/730910"

type NodeCache = any
type Node = any
export class BasicNodeProperties {
  _cachedProperties: Record<string, any>
  nodeCache: NodeCache
  _EXPENSIVE_TO_READ_node: Node
  constructor(e: Node, t: NodeCache) {
    this._cachedProperties = {}
    this.nodeCache = t
    this._EXPENSIVE_TO_READ_node = e
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

  get layout() {
    return this.readValue("layout", e => new LayoutNode(e, this.nodeCache))
  }

  get properties() {
    return this.readValue("properties", e => normalizeObjectKeys(e.componentPropertyDefinitions))
  }

  get children() {
    return this.readValue("children", e => getVisibleChildNodes(this.nodeCache, e))
  }

  getVariableValue(_e: string) {
    return null
  }

  setName(e: string) {
    this._cachedProperties.name = e
  }

  static from(e: Node, t: NodeCache) {
    return new BasicNodeProperties(e, t)
  }

  isAutoLayout() {
    return false
  }

  isLayoutContainer() {
    return false
  }

  isGrid() {
    return false
  }
}
export const B = BasicNodeProperties
