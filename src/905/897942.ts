import { resolveVariableValue } from "../905/361176"
import { LayoutNode } from "../905/367656"
import { hasProperty, memoizeFn, resolveEffectStyle, resolveFillStyle, resolveStrokeStyle, resolveTextStyle, resolveVariable } from "../905/707098"
import { GridLayoutProperties } from "../905/927840"

export class NodeProperties {
  private _cachedProperties: Record<string, any>
  private _EXPENSIVE_TO_READ_node: any
  nodeCache: any

  constructor(node: any, cache: any) {
    this._cachedProperties = {}
    this._EXPENSIVE_TO_READ_node = node
    this.nodeCache = cache
  }

  static from(node: any, cache: any): NodeProperties {
    return new NodeProperties(node, cache)
  }

  /**
   * Reads a value from the node and caches it for future access.
   * @param key - The property key to read and cache
   * @param getter - Function to extract the value from the node
   * @returns The cached or newly computed value
   */
  private readValue<T>(key: string, getter: (node: any) => T): T {
    return memoizeFn(this._cachedProperties, key, this._EXPENSIVE_TO_READ_node, getter)
  }

  /**
   * Unique identifier for the node
   */
  get id(): string {
    return this.readValue("id", node => node.id)
  }

  /**
   * Name of the node
   */
  get name(): string {
    return this.readValue("name", node => node.name)
  }

  /**
   * Whether the node should auto-rename
   */
  get autoRename(): boolean {
    return this.readValue("autoRename", node => node.autoRename)
  }

  /**
   * Layout properties of the node
   */
  get layout(): LayoutNode {
    return this.readValue("layout", node => new LayoutNode(node, this.nodeCache))
  }

  /**
   * Grid layout properties of the node
   */
  get gridLayout(): GridLayoutProperties {
    return this.readValue("gridLayout", node => new GridLayoutProperties(node))
  }

  /**
   * Opacity of the node (0-1)
   */
  get opacity(): number {
    return this.readValue("opacity", node => node.opacity)
  }

  /**
   * Blend mode of the node
   */
  get blendMode(): BlendMode {
    return this.readValue("blendMode", node => node.blendMode)
  }

  /**
   * Text content of the node (if it's a text node)
   */
  get characters(): string {
    return this.readValue("characters", node => node.characters)
  }

  /**
   * Horizontal text alignment
   */
  get textAlignHorizontal(): "LEFT" | "CENTER" | "RIGHT" | "JUSTIFIED" {
    return this.readValue("textAlignHorizontal", node => node.textAlignHorizontal)
  }

  /**
   * Vertical text alignment
   */
  get textAlignVertical(): "TOP" | "CENTER" | "BOTTOM" {
    return this.readValue("textAlignVertical", node => node.textAlignVertical)
  }

  /**
   * Text auto-resize behavior
   */
  get textAutoResize(): "NONE" | "WIDTH_AND_HEIGHT" | "HEIGHT" {
    return this.readValue("textAutoResize", node => node.textAutoResize)
  }

  /**
   * Paragraph indentation
   */
  get paragraphIndent(): number {
    return this.readValue("paragraphIndent", node => node.paragraphIndent)
  }

  /**
   * Spacing between paragraphs
   */
  get paragraphSpacing(): number {
    return this.readValue("paragraphSpacing", node => node.paragraphSpacing)
  }

  /**
   * Visible effects applied to the node
   */
  get effects(): Effect[] {
    return this.readValue("effects", node => node.effects.filter(effect => effect.visible ?? true))
  }

  /**
   * Visible stroke paints applied to the node
   */
  get strokes(): Paint[] {
    return this.readValue("strokes", node => node.strokes.filter(stroke => stroke.visible ?? true))
  }

  /**
   * Stroke weight (thickness) of the node
   */
  get strokeWeight(): number {
    return this.readValue("strokeWeight", node =>
      typeof node.strokeWeight !== "number" ? 0 : node.strokeWeight)
  }

  /**
   * Fill style associated with the node
   */
  get fillStyle(): any {
    return this.readValue("fillStyle", node =>
      resolveFillStyle(node, this.nodeCache.stylesResolver))
  }

  /**
   * Effect style associated with the node
   */
  get effectStyle(): any {
    return this.readValue("effectStyle", node =>
      resolveEffectStyle(node, this.nodeCache.stylesResolver))
  }

  /**
   * Stroke style associated with the node
   */
  get strokeStyle(): any {
    return this.readValue("strokeStyle", node =>
      resolveStrokeStyle(node, this.nodeCache.stylesResolver))
  }

  /**
   * Text style associated with the node
   */
  get textStyle(): any {
    return this.readValue("textStyle", node =>
      resolveTextStyle(node, this.nodeCache.stylesResolver))
  }

  /**
   * Maximum number of lines for text nodes
   */
  get maxLines(): number | undefined {
    return this.readValue("maxLines", node => node.maxLines ?? undefined)
  }

  /**
   * Styled text segments with resolved variables
   */
  get textSegments(): any[] {
    return this.readValue("textSegments", (node) => {
      const segments = node.textSegments
        ? node.textSegments
        : node.getStyledTextSegments([
          "fontSize",
          "fontName",
          "fontWeight",
          "textCase",
          "textDecoration",
          "textDecorationStyle",
          "textDecorationSkipInk",
          "textDecorationColor",
          "textDecorationThickness",
          "textDecorationOffset",
          "letterSpacing",
          "lineHeight",
          "fills",
          "textStyleId",
          "fillStyleId",
          "hyperlink",
          "boundVariables",
        ])

      return segments.map((segment) => {
        // Resolve font family variable
        const fontFamilyVar = resolveVariableValue(
          segment.boundVariables ?? {},
          {},
          this.nodeCache.variableResolver,
          segment.fontName.family,
          "fontFamily",
        )

        // Resolve font weight variable
        const fontWeightVar = resolveVariableValue(
          segment.boundVariables ?? {},
          {},
          this.nodeCache.variableResolver,
          segment.fontWeight,
          "fontWeight",
        )

        // Use variable if it's a float type, otherwise use raw value
        const resolvedFontWeight = fontWeightVar.variable?.value?.resolvedType === "FLOAT"
          ? fontWeightVar
          : { rawValue: segment.fontWeight }

        // Resolve other text properties
        const fontSizeVar = resolveVariableValue(
          segment.boundVariables ?? {},
          {},
          this.nodeCache.variableResolver,
          segment.fontSize,
          "fontSize",
        )

        const lineHeightVar = resolveVariableValue(
          segment.boundVariables ?? {},
          {},
          this.nodeCache.variableResolver,
          segment.lineHeight,
          "lineHeight",
        )

        const letterSpacingVar = resolveVariableValue(
          segment.boundVariables ?? {},
          {},
          this.nodeCache.variableResolver,
          segment.letterSpacing,
          "letterSpacing",
        )

        const textDecorationColorVar = resolveVariableValue(
          segment.boundVariables ?? {},
          {},
          this.nodeCache.variableResolver,
          segment.textDecorationColor,
          "textDecorationColor",
        )

        return {
          ...segment,
          fontName: {
            ...segment.fontName,
            family: fontFamilyVar,
          },
          fontWeight: resolvedFontWeight,
          fontSize: fontSizeVar,
          lineHeight: lineHeightVar,
          letterSpacing: letterSpacingVar,
          textDecorationColor: textDecorationColorVar,
        }
      })
    })
  }

  /**
   * Leading trim setting for text
   */
  get leadingTrim(): "NONE" | "CAP_HEIGHT" | "ALL_ASCENDER_DECENDER" {
    return this.readValue("leadingTrim", node => node.leadingTrim)
  }

  /**
   * OpenType feature settings
   */
  get openTypeFeatures(): Record<string, any> | undefined {
    return this.readValue("openTypeFeatures", node => node?.openTypeFeatures)
  }

  /**
   * Variables bound to this node's properties
   */
  get boundVariables(): any {
    return this.readValue("boundVariables", node => node.boundVariables)
  }

  /**
   * Inferred variables available for this node
   */
  get inferredVariables(): any {
    return this.readValue("inferredVariables", node => node.availableInferredVariables)
  }

  /**
   * Check if a variable is bound to this node
   * @param variablePath - Path to the variable
   * @returns Whether the variable exists
   */
  hasVariable(variablePath: string): boolean {
    return hasProperty(this.boundVariables, variablePath)
  }

  /**
   * Get the resolved value of a bound variable
   * @param variablePath - Path to the variable
   * @returns Resolved variable value
   */
  getVariableValue(variablePath: string): any {
    return resolveVariable(
      this.boundVariables,
      this.inferredVariables,
      variablePath,
      this.nodeCache.variableResolver,
    )
  }

  /**
   * Set the name property (bypassing cache)
   * @param name - New name for the node
   */
  setName(name: string): void {
    this._cachedProperties.name = name
  }

  /**
   * Check if this node uses auto-layout
   * @returns False (overridden in subclasses)
   */
  isAutoLayout(): boolean {
    return false
  }

  /**
   * Check if this node is a grid
   * @returns False (overridden in subclasses)
   */
  isGrid(): boolean {
    return false
  }
}

export const z = NodeProperties
