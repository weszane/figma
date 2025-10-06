import { memoizeFn } from "../905/707098"

// Define a type for the node to improve type safety
interface LayoutNode {
  type?: string
  layoutMode?: string
  primaryAxisSizingMode?: string
  counterAxisSizingMode?: string
  gridColumnCount?: number
  gridRowCount?: number
  gridRowGap?: number
  gridColumnGap?: number
  paddingLeft?: number
  paddingRight?: number
  paddingTop?: number
  paddingBottom?: number
  strokesIncludedInLayout?: boolean
  gridRowSpan?: number
  gridColumnSpan?: number
  gridRowAnchorIndex?: number
  gridColumnAnchorIndex?: number
  gridChildHorizontalAlign?: string
  gridChildVerticalAlign?: string
  gridRowSizingCSS?: string
  gridColumnSizingCSS?: string
}

// Rename class to improve readability (original: $$r0)
export class GridLayoutProperties {
  _cachedProperties: Record<string, any>
  _EXPENSIVE_TO_READ_node: LayoutNode

  constructor(node: LayoutNode) {
    this._cachedProperties = {}
    this._EXPENSIVE_TO_READ_node = node
  }

  /**
   * Reads a value using memoization
   * (original: readValue)
   */
  readValue(key: string, getter: (node: LayoutNode) => any): any {
    return memoizeFn(this._cachedProperties, key, this._EXPENSIVE_TO_READ_node, getter)
  }

  /**
   * Reads a grid layout value using memoization
   * (original: readGridLayoutValue)
   */
  readGridLayoutValue(key: string, getter: (node: LayoutNode) => any): any {
    return this.readValue(key, getter)
  }

  // Grid layout properties
  get layoutMode() {
    return this.readGridLayoutValue("layoutMode", e => e.layoutMode)
  }

  get gridRowCount() {
    return this.readGridLayoutValue("gridRowCount", e => e.gridRowCount)
  }

  get gridColumnCount() {
    return this.readGridLayoutValue("gridColumnCount", e => e.gridColumnCount)
  }

  get gridRowGap() {
    return this.readGridLayoutValue("gridRowGap", e => e.gridRowGap)
  }

  get gridColumnGap() {
    return this.readGridLayoutValue("gridColumnGap", e => e.gridColumnGap)
  }

  get gridRowSpan() {
    return this.readGridLayoutValue("gridRowSpan", e => e.gridRowSpan)
  }

  get gridColumnSpan() {
    return this.readGridLayoutValue("gridColumnSpan", e => e.gridColumnSpan)
  }

  get gridRowAnchorIndex() {
    return this.readGridLayoutValue("gridRowAnchorIndex", e => e.gridRowAnchorIndex)
  }

  get gridColumnAnchorIndex() {
    return this.readGridLayoutValue("gridColumnAnchorIndex", e => e.gridColumnAnchorIndex)
  }

  get gridChildHorizontalAlign() {
    return this.readGridLayoutValue("gridChildHorizontalAlign", e => e.gridChildHorizontalAlign)
  }

  get gridChildVerticalAlign() {
    return this.readGridLayoutValue("gridChildVerticalAlign", e => e.gridChildVerticalAlign)
  }

  // Padding properties
  get paddingLeft() {
    return this.readGridLayoutValue("paddingLeft", e => e.paddingLeft)
  }

  get paddingRight() {
    return this.readGridLayoutValue("paddingRight", e => e.paddingRight)
  }

  get paddingTop() {
    return this.readGridLayoutValue("paddingTop", e => e.paddingTop)
  }

  get paddingBottom() {
    return this.readGridLayoutValue("paddingBottom", e => e.paddingBottom)
  }

  // Other layout properties
  get strokesIncludedInLayout() {
    return this.readValue("strokesIncludedInLayout", e => e.strokesIncludedInLayout)
  }

  get gridRowSizingCSS() {
    return this.readGridLayoutValue("gridRowSizingCSS", e => e.gridRowSizingCSS)
  }

  get gridColumnSizingCSS() {
    return this.readGridLayoutValue("gridColumnSizingCSS", e => e.gridColumnSizingCSS)
  }

  /**
   * Factory method to create LayoutPropertiesReader from a node
   * (original: from)
   */
  static from(node: LayoutNode): GridLayoutProperties {
    return node.type === "GROUP" ? this.fromGroupNode() : this.fromBaseFrame(node)
  }

  /**
   * Factory method to create LayoutPropertiesReader from a base frame node
   * (original: fromBaseFrame)
   */
  static fromBaseFrame(node: LayoutNode): GridLayoutProperties {
    return new GridLayoutProperties(node)
  }

  /**
   * Factory method to create LayoutPropertiesReader for a group node
   * (original: fromGroupNode)
   */
  static fromGroupNode(): GridLayoutProperties {
    return this.empty()
  }

  /**
   * Factory method to create an empty LayoutPropertiesReader
   * (original: empty)
   */
  static empty(): GridLayoutProperties {
    return new GridLayoutProperties({
      layoutMode: "NONE",
      primaryAxisSizingMode: "FIXED",
      counterAxisSizingMode: "FIXED",
      gridColumnCount: 0,
      gridRowCount: 0,
      gridRowGap: 0,
      gridColumnGap: 0,
      paddingLeft: 0,
      paddingRight: 0,
      paddingTop: 0,
      paddingBottom: 0,
      strokesIncludedInLayout: false,
      gridRowSpan: 0,
      gridColumnSpan: 0,
      gridRowAnchorIndex: -1,
      gridColumnAnchorIndex: -1,
      gridChildHorizontalAlign: "AUTO",
      gridChildVerticalAlign: "AUTO",
      gridRowSizingCSS: "",
      gridColumnSizingCSS: "",
    })
  }
}

// Export with a more descriptive name (original: R)
export const R = GridLayoutProperties
