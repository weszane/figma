import { memoizeFn } from "../905/707098"

/**
 * Class for reading auto-layout properties with caching mechanism
 * Original name: $$r0
 */
export class AutoLayoutPropertyReader {
  private _cachedProperties: Record<string, any>
  private _EXPENSIVE_TO_READ_node: any

  constructor(node: any) {
    this._cachedProperties = {}
    this._EXPENSIVE_TO_READ_node = node
  }

  /**
   * Read a value with caching
   * @param key - Cache key
   * @param getter - Function to get the value from node
   * @returns The cached or computed value
   */
  private readValue<T>(key: string, getter: (node: any) => T): T {
    return memoizeFn(this._cachedProperties, key, this._EXPENSIVE_TO_READ_node, getter)
  }

  /**
   * Read an auto-layout value with fallback to inferred auto-layout
   * @param key - Cache key
   * @param directGetter - Function to get value directly from node
   * @param inferredGetter - Function to get value from inferred auto-layout
   * @returns The value from either direct or inferred source
   */
  private readAutoLayoutValue<T>(
    key: string,
    directGetter: (node: any) => T,
    inferredGetter: (node: any) => T,
  ): T {
    const inferredAutoLayout = this.readValue("inferredAutoLayout", (node: any) => node.inferredAutoLayout)
    return this.readValue(key, inferredAutoLayout ? inferredGetter : directGetter)
  }

  // Auto-layout properties
  get layoutMode(): string {
    return this.readAutoLayoutValue(
      "layoutMode",
      (node: any) => node.layoutMode,
      (node: any) => node.inferredAutoLayout.layoutMode,
    )
  }

  get primaryAxisSizingMode(): string {
    return this.readAutoLayoutValue(
      "primaryAxisSizingMode",
      (node: any) => node.primaryAxisSizingMode,
      (node: any) => node.inferredAutoLayout.primaryAxisSizingMode,
    )
  }

  get counterAxisSizingMode(): string {
    return this.readAutoLayoutValue(
      "counterAxisSizingMode",
      (node: any) => node.counterAxisSizingMode,
      (node: any) => node.inferredAutoLayout.counterAxisSizingMode,
    )
  }

  get primaryAxisAlignItems(): string {
    return this.readAutoLayoutValue(
      "primaryAxisAlignItems",
      (node: any) => node.primaryAxisAlignItems,
      (node: any) => node.inferredAutoLayout.primaryAxisAlignItems,
    )
  }

  get counterAxisAlignItems(): string {
    return this.readAutoLayoutValue(
      "counterAxisAlignItems",
      (node: any) => node.counterAxisAlignItems,
      (node: any) => node.inferredAutoLayout.counterAxisAlignItems,
    )
  }

  get paddingLeft(): number {
    return this.readAutoLayoutValue(
      "paddingLeft",
      (node: any) => node.paddingLeft,
      (node: any) => node.inferredAutoLayout.paddingLeft,
    )
  }

  get paddingRight(): number {
    return this.readAutoLayoutValue(
      "paddingRight",
      (node: any) => node.paddingRight,
      (node: any) => node.inferredAutoLayout.paddingRight,
    )
  }

  get paddingTop(): number {
    return this.readAutoLayoutValue(
      "paddingTop",
      (node: any) => node.paddingTop,
      (node: any) => node.inferredAutoLayout.paddingTop,
    )
  }

  get paddingBottom(): number {
    return this.readAutoLayoutValue(
      "paddingBottom",
      (node: any) => node.paddingBottom,
      (node: any) => node.inferredAutoLayout.paddingBottom,
    )
  }

  get itemSpacing(): number {
    return this.readAutoLayoutValue(
      "itemSpacing",
      (node: any) => node.itemSpacing,
      (node: any) => node.inferredAutoLayout.itemSpacing,
    )
  }

  // Other layout properties
  get strokesIncludedInLayout(): boolean {
    return this.readValue("strokesIncludedInLayout", (node: any) => node.strokesIncludedInLayout)
  }

  get layoutWrap(): string {
    return this.readValue("layoutWrap", (node: any) => node.layoutWrap)
  }

  get counterAxisAlignContent(): string {
    return this.readValue("counterAxisAlignContent", (node: any) => node.counterAxisAlignContent)
  }

  get counterAxisSpacing(): number | undefined {
    return this.readValue("counterAxisSpacing", (node: any) => node.counterAxisSpacing ?? undefined)
  }

  /**
   * Create an empty instance with default values
   * @returns A new instance with default values
   */
  static empty(): AutoLayoutPropertyReader {
    return new AutoLayoutPropertyReader({
      layoutMode: "NONE",
      primaryAxisSizingMode: "FIXED",
      counterAxisSizingMode: "FIXED",
      primaryAxisAlignItems: "MIN",
      counterAxisAlignItems: "MIN",
      paddingLeft: 0,
      paddingRight: 0,
      paddingTop: 0,
      paddingBottom: 0,
      itemSpacing: 0,
      strokesIncludedInLayout: false,
      inferredAutoLayout: null,
      layoutWrap: "NO_WRAP",
      counterAxisAlignContent: "AUTO",
      counterAxisSpacing: 0,
    })
  }

  /**
   * Create an instance from a node
   * @param node - The node to create from
   * @returns A new instance
   */
  static from(node: any): AutoLayoutPropertyReader {
    return node.type === "GROUP" ? this.fromGroupNode(node) : this.fromBaseFrame(node)
  }

  /**
   * Create an instance from a base frame node
   * @param node - The base frame node
   * @returns A new instance
   */
  static fromBaseFrame(node: any): AutoLayoutPropertyReader {
    return new AutoLayoutPropertyReader(node)
  }

  /**
   * Create an instance from a group node
   * @param node - The group node
   * @returns A new instance
   */
  static fromGroupNode(node: any): AutoLayoutPropertyReader {
    return new AutoLayoutPropertyReader({
      layoutMode: "NONE",
      primaryAxisSizingMode: "FIXED",
      counterAxisSizingMode: "FIXED",
      primaryAxisAlignItems: "MIN",
      counterAxisAlignItems: "MIN",
      paddingLeft: 0,
      paddingRight: 0,
      paddingTop: 0,
      paddingBottom: 0,
      itemSpacing: 0,
      strokesIncludedInLayout: false,
      inferredAutoLayout: node.inferredAutoLayoutResult,
      layoutWrap: "NO_WRAP",
      counterAxisAlignContent: "AUTO",
      counterAxisSpacing: 0,
    })
  }
}

export const c = AutoLayoutPropertyReader
