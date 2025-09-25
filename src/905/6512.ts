import { collectTree, countTree, everyInTree, filterTree, findInTree, someInTree, traverseTree } from '../905/809288'
/**
 * Type definition for tree node properties.
 */
export interface TreeNodeProps {
  id: string
  parent?: TreeNode | null
  children?: TreeNode[]
}

/**
 * Type definition for cached properties.
 */
interface CachedProperties {
  _cachedDisplayProperties?: any
  _cachedSearchProperties?: any
  _cachedRawProperties?: any
  _cachedComputedProperties?: any
}

/**
 * TreeNode class (original: $$r0)
 * Represents a node in a tree structure with various property caching and traversal utilities.
 */
export class TreeNode implements TreeNodeProps, CachedProperties {
  id: string
  parent?: TreeNode | null
  children?: TreeNode[]
  _cachedDisplayProperties?: any
  _cachedSearchProperties?: any
  _cachedRawProperties?: any
  _cachedComputedProperties?: any

  constructor(id: string) {
    this.id = id
  }

  /**
   * Lazily generates and caches display properties.
   */
  get displayProperties(): any {
    if (!this._cachedDisplayProperties) {
      this._cachedDisplayProperties = this.generateDisplayProperties()
    }
    return this._cachedDisplayProperties
  }

  /**
   * Lazily generates and caches search properties.
   */
  get searchProperties(): any {
    if (!this._cachedSearchProperties) {
      this._cachedSearchProperties = this.generateSearchProperties()
    }
    return this._cachedSearchProperties
  }

  /**
   * Lazily generates and caches raw properties.
   */
  get rawProperties(): any {
    if (!this._cachedRawProperties) {
      this._cachedRawProperties = this.generateRawProperties()
    }
    return this._cachedRawProperties
  }

  /**
   * Lazily generates and caches computed properties.
   */
  get computedProperties(): any {
    if (!this._cachedComputedProperties) {
      this._cachedComputedProperties = this.generateComputedProperties()
    }
    return this._cachedComputedProperties
  }

  /**
   * Returns a frozen version of this node.
   * (original: freeze)
   */
  freeze(): FrozenTreeNode {
    return new FrozenTreeNode(this)
  }

  /**
   * Traverses ancestors of this node.
   * (original: forEachAncestor)
   */
  forEachAncestor(callback: (node: TreeNode) => void, context?: any): void {
    traverseTree(this, 'parent', callback, context)
  }

  /**
   * Traverses descendants of this node.
   * (original: forEachDescendant)
   */
  forEachDescendant(callback: (node: TreeNode) => void, context?: any): void {
    traverseTree(this, 'children', callback, context)
  }

  /**
   * Maps ancestors of this node.
   * (original: mapAncestors)
   */
  mapAncestors<T>(callback: (node: TreeNode) => T, context?: any): T[] {
    return collectTree(this, 'parent', callback, context)
  }

  /**
   * Maps descendants of this node.
   * (original: mapDescendants)
   */
  mapDescendants<T>(callback: (node: TreeNode) => T, context?: any): T[] {
    return collectTree(this, 'children', callback, context)
  }

  /**
   * Filters ancestors of this node.
   * (original: filterAncestors)
   */
  filterAncestors(callback: (node: TreeNode) => boolean, context?: any): TreeNode[] {
    return filterTree(this, 'parent', callback, context)
  }

  /**
   * Filters descendants of this node.
   * (original: filterDescendants)
   */
  filterDescendants(callback: (node: TreeNode) => boolean, context?: any): TreeNode[] {
    return filterTree(this, 'children', callback, context)
  }

  /**
   * Finds an ancestor node.
   * (original: findAncestor)
   */
  findAncestor(callback: (node: TreeNode) => boolean, context?: any): TreeNode | undefined {
    return findInTree(this, 'parent', callback, context)
  }

  /**
   * Finds a descendant node.
   * (original: findDescendant)
   */
  findDescendant(callback: (node: TreeNode) => boolean, context?: any): TreeNode | undefined {
    return findInTree(this, 'children', callback, context)
  }

  /**
   * Checks if some ancestor matches the callback.
   * (original: someAncestor)
   */
  someAncestor(callback: (node: TreeNode) => boolean, context?: any): boolean {
    return someInTree(this, 'parent', callback, context)
  }

  /**
   * Checks if some descendant matches the callback.
   * (original: someDescendant)
   */
  someDescendant(callback: (node: TreeNode) => boolean, context?: any): boolean {
    return someInTree(this, 'children', callback, context)
  }

  /**
   * Checks if every ancestor matches the callback.
   * (original: everyAncestor)
   */
  everyAncestor(callback: (node: TreeNode) => boolean, context?: any): boolean {
    return everyInTree(this, 'parent', callback, context)
  }

  /**
   * Checks if every descendant matches the callback.
   * (original: everyDescendant)
   */
  everyDescendant(callback: (node: TreeNode) => boolean, context?: any): boolean {
    return everyInTree(this, 'children', callback, context)
  }

  /**
   * Counts ancestors matching the callback.
   * (original: countAncestors)
   */
  countAncestors(callback: (node: TreeNode) => boolean, context?: any): number {
    return countTree(this, 'parent', callback, context)
  }

  /**
   * Counts descendants matching the callback.
   * (original: countDescendants)
   */
  countDescendants(callback: (node: TreeNode) => boolean, context?: any): number {
    return countTree(this, 'children', callback, context)
  }

  /**
   * Generates display properties. Override in subclasses.
   */
  protected generateDisplayProperties(): any {
    // Implement logic in subclass or override
    return {}
  }

  /**
   * Generates search properties. Override in subclasses.
   */
  protected generateSearchProperties(): any {
    // Implement logic in subclass or override
    return {}
  }

  /**
   * Generates raw properties. Override in subclasses.
   */
  protected generateRawProperties(): any {
    // Implement logic in subclass or override
    return {}
  }

  /**
   * Generates computed properties. Override in subclasses.
   */
  protected generateComputedProperties(): any {
    // Implement logic in subclass or override
    return {}
  }
}

/**
 * FrozenTreeNode class (original: a)
 * Represents an immutable/frozen version of TreeNode.
 */
export class FrozenTreeNode extends TreeNode {
  constructor(node: TreeNode) {
    super(node.id)
    this.parent = node.parent
    this.children = node.children
    this._cachedDisplayProperties = node.displayProperties
    this._cachedSearchProperties = node.searchProperties
    this._cachedRawProperties = node.rawProperties
    this._cachedComputedProperties = node.computedProperties
  }

  /** Returns cached display properties. */
  protected generateDisplayProperties(): any {
    return this._cachedDisplayProperties
  }

  /** Returns cached search properties. */
  protected generateSearchProperties(): any {
    return this._cachedSearchProperties
  }

  /** Returns cached raw properties. */
  protected generateRawProperties(): any {
    return this._cachedRawProperties
  }

  /** Returns cached computed properties. */
  protected generateComputedProperties(): any {
    return this._cachedComputedProperties
  }
}

/**
 * Export for backward compatibility (original: s)
 */
export const s = TreeNode
