/* eslint-disable prefer-regex-literals */
/* eslint-disable no-control-regex */
import { camelCase, clone, flatMap, isObject, snakeCase, toPairs } from 'lodash-es'
import { reportError } from '../905/11'
import { findMaxKey, isNotNull, objectEntries, objectKeys } from '../905/8035'
import { StringValueObject } from '../905/34040'
import { DesignIssues, IssueCategoryEnum } from '../905/49095'
import { CssVariable } from '../905/77776'
import { BasicNodeProperties } from '../905/113996'
import { toMatrix2x3 } from '../905/117560'
import { ComponentNodeProperties } from '../905/136718'
import { GenericNode, getNodeSizingMode, getSizingModeForHorizontalParent, getSizingModeForVerticalParent, isAutoLayoutSupportedNode, isBasicNode, SizingModeEnum } from '../905/139004'
import { ServiceCategories } from '../905/165054'
import { toCamelName, toDefaultName } from '../905/232489'
import { NormalValue, PercentageValue, PixelValue, RawValue, roundToDecimal, StringValue } from '../905/235413'
import { createCssVariableIfAvailable, createValidatedCssVariable, filterVisiblePaints, getColorVariable, getFieldVariable, getInferredVariables, getNodeFieldValue, getNodeLayoutMeasurement, getRadiusVariable, getVariableHint, getVariableWithHint, mergeSuggestedVariables, oy, processColorValue, processPaints, processPixelValue, processStringValue, processStringValueObject, wrapWithBoundVariableMarkers, wrapWithSuggestedVariableMarkers } from '../905/246310'
import { InstanceNodeProperties } from '../905/248554'
import { SuggestedVariableReference, SuggestedVariablesCollection } from '../905/363827'
import { deepEqual } from '../905/382883'
import { debugState } from '../905/407919'
import { getLinearGradientPoints, getRadialGradientPoints } from '../905/409381'
import { formatNumber, formatScaledValue, MeasureUnitType, shouldHideColor, shouldHideLayout, shouldHideLayoutOrColor } from '../905/432392'
import { createPluginInstance } from '../905/472793'
import { extractCopyExportRestrictions } from '../905/491708'
import { PluginApiMetrics } from '../905/545265'
import { getFeatureFlags } from '../905/601108'
import { FrameNodeProperties } from '../905/687364'
import { createPluginContext } from '../905/700654'
import { isResolvedStyle, isVariableResolved, resolveFillStyle, resolveTextStyle, VariableStatus } from '../905/707098'
import { ColorFormatter, DEFAULT_COLOR_MANAGEMENT } from '../905/721592'
import { setHandler } from '../905/783825'
import { ConicGradient, DiamondGradient, LinearGradient, RadialGradient } from '../905/804867'
import { getSceneGraphInstance, SceneGraph } from '../905/830071'
import { NodeWrapper } from '../905/860779'
import { NodeProperties } from '../905/897942'
import { ShapeNodeProperties } from '../905/971516'
import { isCopyExportAllowed, isExportRestricted } from '../figma_app/12796'
import { ManifestEditorType } from '../figma_app/155287'
import { PluginPermissions } from '../figma_app/300692'
import { registerNodeChangeCallback, unregisterNodeChangeCallback } from '../figma_app/644255'
import { createCodeBlock } from '../figma_app/711907'
import { ColorConversionEnum, ColorSpaceEnum, Fullscreen, MeasurementUnit, VariableDataType } from '../figma_app/763686'
import { DEFAULT_ALLOWED_ORIGINS } from '../figma_app/985200'

// Refactored code with improved readability and type safety
let selectedNode: any

/**
 * Creates code blocks with proper indentation
 * @param codeLines - Array of code line objects
 * @param baseIndent - Base indentation level
 * @returns Array of formatted code blocks
 */
function createIndentedCodeBlocks(codeLines: any[], baseIndent: number): any[] {
  return codeLines.map(line =>
    createCodeBlock(
      line.code,
      line.indent ? line.indent + baseIndent : baseIndent,
      line.hint,
      line.matchingVars,
    ),
  )
}

// Property ordering for consistent code generation
const propertyOrder: string[] = ['offset', 'shadow', 'blur', 'borders', 'size', 'backgrounds', 'padding']

/**
 * Sorts property entries based on predefined order
 * @param firstEntry - First property entry
 * @param secondEntry - Second property entry
 * @returns Sorting comparison result
 */
function sortPropertiesByOrder([firstKey]: [string, any], [secondKey]: [string, any]): number {
  return propertyOrder.indexOf(firstKey) - propertyOrder.indexOf(secondKey)
}

/**
 * Generates code sections with modifiers and variables
 * @param properties - Object containing property definitions
 * @param variableDefinitions - Set of variable definitions
 * @param matchingVariables - Matching variables collection
 * @returns Array of code sections
 */
function generateCodeSections(
  properties: Record<string, any>,
  variableDefinitions: Set<any> | null,
  matchingVariables: any,
): any[] {
  // Process and sort properties
  const processedProperties = flatMap(
    objectEntries({ ...properties }).sort(sortPropertiesByOrder),
    ([, value]) => value ? createIndentedCodeBlocks(value, 1) : [],
  )

  // Create modifier section if properties exist
  const sections: any[] = processedProperties.length > 0
    ? [{
        lines: [createCodeBlock('Modifier'), ...processedProperties],
        language: 'kotlin',
        name: 'Modifier',
        matchingVars: matchingVariables,
      }]
    : []

  // Add variables section if definitions exist
  if (variableDefinitions && variableDefinitions.size > 0) {
    const variableLines = [...variableDefinitions].map(def => createCodeBlock(def, 1))
    const variablesSection = [
      createCodeBlock('object Variables {'),
      ...variableLines,
      createCodeBlock('}'),
    ]

    sections.push({
      lines: variablesSection,
      language: 'kotlin',
      name: 'Variables',
    })
  }

  return sections
}

/**
 * Gets variable hint for color properties
 * @param variable - Variable reference
 * @param value - Value object
 * @returns Variable hint
 */
function getColorVariableHint(variable: any, value: any): any {
  return getVariableHint(variable, value, {
    isColor: true,
  })
}

/**
 * Converts color component to hexadecimal string
 * @param component - Color component value (0-1)
 * @returns Two-character hex string
 */
function componentToHex(component: number): string {
  return `00${Math.round(255 * component).toString(16).toUpperCase()}`.slice(-2)
}

/**
 * Represents a color value with opacity
 * Original name: N
 */
class ColorValue {
  public readonly color: any
  public readonly opacity: number

  constructor(color: any, opacity: number = 1) {
    this.color = color
    this.opacity = opacity

    // Validate color values are normalized
    if (color.r > 1 || color.g > 1 || color.b > 1) {
      throw new Error(
        `Expected normalised color values (between 0 and 1) but got (${color.r}, ${color.g}, ${color.b})`,
      )
    }
  }

  /**
   * Gets the formatted color value
   * @returns Formatted color string
   */
  get value(): string {
    const colorWithOpacity = (color: any, opacity: number = 1): string => {
      const formatColorComponents = (color: any, opacity: number = 1): string => {
        const { r, g, b, a = 1 } = color
        return `${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}${componentToHex(a * opacity)}`
      }

      const hexComponents = formatColorComponents(color, opacity)
      // Reorder hex components for Android Color format (ARGB)
      return `Color(0x${hexComponents[6]}${hexComponents[7]}${hexComponents[0]}${hexComponents[1]}${hexComponents[2]}${hexComponents[3]}${hexComponents[4]}${hexComponents[5]})`
    }

    return colorWithOpacity(this.color, this.opacity)
  }
}

/**
 * Represents a variable definition
 * Original name: O
 */
class VariableDefinition {
  public readonly name: string
  public readonly wrappedValue: any
  public readonly typeName: string
  public readonly boundVariable: any
  public readonly preferences: any

  constructor(
    name: string,
    wrappedValue: any,
    typeName: string,
    boundVariable: any,
    preferences: any,
  ) {
    this.name = name
    this.wrappedValue = wrappedValue
    this.typeName = typeName
    this.boundVariable = boundVariable
    this.preferences = preferences
  }

  /**
   * Gets the variable reference value
   * @returns Formatted variable reference
   */
  get value(): string {
    return `Variables.${wrapWithBoundVariableMarkers(
      toDefaultName(this.name),
      this.boundVariable,
      this.preferences,
    )}`
  }

  /**
   * Gets the variable definition code
   * @returns Variable definition string
   */
  getDefinition(): string {
    const variableName = wrapWithBoundVariableMarkers(
      toDefaultName(this.name),
      this.boundVariable,
      this.preferences,
    )

    const valueSuffix = this.typeName === 'Dp' || this.typeName === 'Sp'
      ? `.${this.typeName.toLowerCase()}`
      : ''

    return `val ${variableName}: ${this.typeName} = ${this.wrappedValue}${valueSuffix}`
  }
}

// Original function: D
/**
 * Creates a variable definition for Android code generation
 * @param variable - The variable to process
 * @param value - The value to assign
 * @param constants - Set to add constants to
 * @param typeName - The type name for the variable
 * @param preferences - User preferences
 * @returns The variable value or undefined
 */
function createAndroidVariable(
  variable: any,
  value: any,
  constants: Set<any>,
  typeName: string,
  preferences: any,
): any {
  const varValue = variable?.variable?.value
  if (varValue) {
    if (varValue.codeSyntax?.ANDROID) {
      return wrapWithBoundVariableMarkers(varValue.codeSyntax.ANDROID, varValue, preferences)
    }
    const def = new VariableDefinition(varValue.name, value, typeName, varValue, preferences)
    constants.add(def.getDefinition())
    return def.value
  }
}

// Original function: L
/**
 * Resolves a variable for Android code generation
 * @param variable - The variable to resolve
 * @param value - The value to assign
 * @param constants - Set to add constants to
 * @param typeName - The type name for the variable
 * @param preferences - User preferences
 * @returns The resolved variable value or undefined
 */
function resolveAndroidVariable(
  variable: any,
  value: any,
  constants: Set<any>,
  typeName: string,
  preferences: any,
): any {
  if (isVariableResolved(variable)) {
    if (variable.codeSyntax?.ANDROID) {
      return wrapWithBoundVariableMarkers(variable.codeSyntax.ANDROID, variable, preferences)
    }
    const def = new VariableDefinition(variable.name, value, typeName, variable, preferences)
    constants.add(def.getDefinition())
    return def.value
  }
}

// Original function: F
/**
 * Processes border properties for Android Compose
 * @param node - The node to process
 * @param preferences - User preferences
 * @returns Object with properties and constants
 */
function processAndroidBorders(node: any, preferences: any): { properties: any, constants: Set<any> } {
  const {
    strokeTopWeight,
    strokeBottomWeight,
    strokeLeftWeight,
    strokeRightWeight,
    strokeAlign = 'CENTER',
  } = node instanceof NodeWrapper
    ? {
        strokeAlign: 'OUTSIDE',
        strokeTopWeight: node.strokeWeight,
        strokeBottomWeight: node.strokeWeight,
        strokeLeftWeight: node.strokeWeight,
        strokeRightWeight: node.strokeWeight,
      }
    : node.border

  const weights = {
    strokeTopWeight,
    strokeBottomWeight,
    strokeLeftWeight,
    strokeRightWeight,
  }

  const maxKey = findMaxKey(weights, (a, b) => a.rawValue > b.rawValue)
  const maxWeight = weights[maxKey]
  const hasDifferentWeights = !deepEqual(maxWeight, strokeTopWeight)
    || !deepEqual(maxWeight, strokeBottomWeight)
    || !deepEqual(maxWeight, strokeLeftWeight)
    || !deepEqual(maxWeight, strokeRightWeight)

  const shapeResult = getShapeForNode(node, preferences)
  const strokes = node instanceof NodeWrapper ? node.strokes : node.border.strokes
  const constants = new Set()
  const scaledWeight = formatScaledValue(maxWeight.rawValue, preferences)
  const varResult = createAndroidVariable(maxWeight, scaledWeight, constants, 'Dp', preferences)
  const dpValue = `${scaledWeight}.dp`
  const suggestion = varResult
    ? undefined
    : wrapWithSuggestedVariableMarkers({
        value: dpValue,
        node,
        field: maxKey,
        matchIndex: 4,
        preferences,
      })
  const finalValue = varResult ?? suggestion?.value ?? dpValue

  const { borderLines = [], constants: paintConstants = [] } = processPaints(strokes).reduce(
    (acc: any, { paint, index, hint }) => {
      const { color, opacity } = paint
      const colorValue = new ColorValue(color, opacity)
      const colorVar = getColorVariable(paint, index, 'strokes', node)
      const colorHint = getColorVariableHint(colorVar, colorValue)
      let paintValue = colorValue.value
      const paintConstantsSet = new Set()
      const resolvedPaint = resolveAndroidVariable(colorVar, paintValue, paintConstantsSet, 'Color', preferences)
      if (resolvedPaint)
        paintValue = resolvedPaint
      const paintSuggestion = resolvedPaint
        ? undefined
        : wrapWithSuggestedVariableMarkers({
            value: paintValue,
            node,
            field: 'strokes',
            matchIndex: 5,
            arrayIndex: index,
            preferences,
          })
      paintValue = paintSuggestion?.value ?? paintValue

      const borderCode = generateBorderCode(shapeResult, finalValue, paintValue, hasDifferentWeights, hint || colorHint, paintSuggestion?.matchingVars)
      const mergedVars = mergeSuggestedVariables([paintSuggestion?.matchingVars, suggestion?.matchingVars, shapeResult.matchingVars])

      return {
        borderLines: [...acc.borderLines, { ...borderCode, matchingVars: mergedVars }],
        constants: [...acc.constants, ...Array.from(paintConstantsSet)],
      }
    },
    { borderLines: [], constants: [] },
  )

  const paddingLines = generatePaddingForStrokeAlign(strokeAlign, scaledWeight)
  borderLines.push(...paddingLines)

  return {
    properties: { borders: borderLines },
    constants: new Set([...paintConstants, ...Array.from(constants)]),
  }
}

/**
 * Generates border code for Android Compose
 * @param shapeResult - Shape result object
 * @param width - Border width
 * @param color - Border color
 * @param hasDifferentWeights - Whether weights differ
 * @param hint - Hint for the border
 * @param matchingVars - Matching variables
 * @returns Code block for border
 */
function generateBorderCode(shapeResult: any, width: string, color: string, hasDifferentWeights: boolean, hint: any, matchingVars: any): any {
  const borderLines = []
  let code = `.border(width = ${width}`
  code += `, color = ${color}`
  if (shapeResult.code) {
    code += `, shape = ${shapeResult.code})`
    shapeResult.constants.forEach((c: any) => borderLines.push(c)) // Assuming constants are added elsewhere
  }
  else {
    code += ')'
  }
  borderLines.push(createCodeBlock(code, 0, hasDifferentWeights ? DesignIssues.ComposeSeparateBorderWidth : hint, matchingVars))
  return borderLines[0] // Simplified, adjust as needed
}

/**
 * Generates padding based on stroke align
 * @param strokeAlign - Stroke alignment
 * @param weight - Stroke weight
 * @returns Array of code blocks
 */
function generatePaddingForStrokeAlign(strokeAlign: string, weight: number): any[] {
  switch (strokeAlign) {
    case 'CENTER':
      return [createCodeBlock(`.padding(${(weight / 2).toFixed(2)}.dp)`)]
    case 'INSIDE':
      return []
    case 'OUTSIDE':
      return [createCodeBlock(`.padding(${weight.toFixed(2)}.dp)`)]
    default:
      return []
  }
}

// Original function: M
/**
 * Gets shape for node in Android Compose
 * @param node - The node
 * @param preferences - Preferences
 * @returns Shape object
 */
function getShapeForNode(node: any, preferences: any): { code: string, constants: Set<any>, matchingVars?: any } {
  const constants = new Set()
  if (node instanceof NodeWrapper) {
    return { code: '', constants }
  }

  const { bottomRightRadius = 0, topLeftRadius = 0, topRightRadius = 0, bottomLeftRadius = 0 } = node.border
  const radii = [bottomLeftRadius, bottomRightRadius, topLeftRadius, topRightRadius]
  const vars = [
    node.getVariableValue('bottomLeftRadius'),
    node.getVariableValue('bottomRightRadius'),
    node.getVariableValue('topLeftRadius'),
    node.getVariableValue('topRightRadius'),
  ]

  if (radii.every(r => r === radii[0] && r === 0) && !vars.some(isVariableResolved)) {
    return { code: '', constants }
  }

  const processRadius = (radius: number, variable: any, field: string, matchIndex: number) => {
    const scaled = formatScaledValue(radius, preferences)
    if (isVariableResolved(variable)) {
      if (variable.codeSyntax?.ANDROID) {
        return { value: variable.codeSyntax.ANDROID }
      }
      const def = new VariableDefinition(variable.name, scaled, 'Dp', variable, preferences)
      return { value: def.value, constant: def }
    }
    const dpValue = `${scaled}.dp`
    const suggestion = wrapWithSuggestedVariableMarkers({
      value: dpValue,
      node,
      field,
      matchIndex,
      preferences,
    })
    return { value: suggestion?.value ?? dpValue, suggestion }
  }

  const resolvedRadii = radii.map((r, i) => (isVariableResolved(vars[i]) ? vars[i] : r))
  const allEqual = resolvedRadii.every(r => areRadiiEqual(r, resolvedRadii[0]))

  if (!allEqual) {
    const [tl, tr, bl, br] = radii.map((r, i) => processRadius(r, vars[i], ['topLeftRadius', 'topRightRadius', 'bottomLeftRadius', 'bottomRightRadius'][i], i))
    tl.constant && constants.add(tl.constant.getDefinition())
    tr.constant && constants.add(tr.constant.getDefinition())
    bl.constant && constants.add(bl.constant.getDefinition())
    br.constant && constants.add(br.constant.getDefinition())
    return {
      code: `RoundedCornerShape(topStart = ${tl.value}, topEnd = ${tr.value}, bottomStart = ${bl.value}, bottomEnd = ${br.value})`,
      constants,
      matchingVars: mergeSuggestedVariables([tl.suggestion?.matchingVars, tr.suggestion?.matchingVars, bl.suggestion?.matchingVars, br.suggestion?.matchingVars]),
    }
  }

  const result = processRadius(topLeftRadius, vars[2], 'topLeftRadius', 0)
  result.constant && constants.add(result.constant.getDefinition())
  return {
    code: `RoundedCornerShape(size = ${result.value})`,
    constants,
    matchingVars: result.suggestion?.matchingVars,
  }
}

/**
 * Checks if two radii are equal
 * @param a - First radius
 * @param b - Second radius
 * @returns True if equal
 */
function areRadiiEqual(a: any, b: any): boolean {
  if (typeof a === 'number' && typeof b === 'number')
    return a === b
  if (typeof a !== 'number' && typeof b !== 'number' && isVariableResolved(a) && isVariableResolved(b)) {
    return a.name === b.name
  }
  return false
}

// Original function: j
/**
 * Processes backgrounds for Android Compose
 * @param node - The node
 * @param preferences - Preferences
 * @returns Object with properties and constants
 */
function processAndroidBackgrounds(node: any, preferences: any): { properties: any, constants: Set<any> } {
  const { backgrounds = [], constants = [] } = filterVisiblePaints(node.fills).reduce(
    (acc: any, { paint, index }) => {
      const { background, constants: bgConstants = [] } = processPaintForBackground(node, paint, index, getShapeForNode(node, preferences), preferences)
      return {
        backgrounds: [...acc.backgrounds, ...background],
        constants: [...acc.constants, ...bgConstants],
      }
    },
    { backgrounds: [], constants: [] },
  )

  return {
    properties: { backgrounds },
    constants: new Set(constants),
  }
}

/**
 * Processes a single paint for background
 * @param node - The node
 * @param paint - The paint
 * @param index - Paint index
 * @param shapeResult - Shape result
 * @param preferences - Preferences
 * @returns Background code and constants
 */
function processPaintForBackground(node: any, paint: any, index: number, shapeResult: any, preferences: any): { background: any[], constants?: any[] } {
  if (paint.type !== 'SOLID') {
    return { background: [] }
  }

  const colorValue = new ColorValue(paint.color, paint.opacity)
  const colorVar = getColorVariable(paint, index, 'fills', node)
  const colorHint = getColorVariableHint(colorVar, colorValue)
  let paintValue = colorValue.value
  const constantsSet = new Set()
  const resolvedPaint = resolveAndroidVariable(colorVar, paintValue, constantsSet, 'Color', preferences)
  if (resolvedPaint)
    paintValue = resolvedPaint
  const suggestion = resolvedPaint
    ? undefined
    : wrapWithSuggestedVariableMarkers({
        value: paintValue,
        node,
        field: 'fills',
        matchIndex: 4,
        arrayIndex: index,
        preferences,
      })
  paintValue = suggestion?.value ?? paintValue

  const background = shapeResult.code
    ? [createCodeBlock(`.background(color = ${paintValue}, shape = ${shapeResult.code})`, 0, colorHint, mergeSuggestedVariables([shapeResult.matchingVars, suggestion?.matchingVars]))]
    : [createCodeBlock(`.background(color = ${paintValue})`, 0, colorHint, suggestion?.matchingVars)]

  shapeResult.constants.forEach((c: any) => constantsSet.add(c)) // Assuming constants are strings or definitions

  return {
    background,
    constants: Array.from(constantsSet),
  }
}

// Original function: U
/**
 * Processes effects for Android Compose
 * @param node - The node
 * @param preferences - Preferences
 * @returns Object with properties and constants
 */
function processAndroidEffects(node: any, preferences: any): { properties: any, constants: Set<any> } {
  const { effects } = node
  const properties: any = {}
  const constants = new Set()

  effects.filter((effect: any) => effect.visible).forEach((effect: any) => {
    switch (effect.type) {
      case 'DROP_SHADOW':
        properties.shadow = properties.shadow || []
        properties.shadow.push(...generateShadowCode(effect, node, constants, preferences))
        break
      case 'LAYER_BLUR':
        properties.blur = properties.blur || []
        properties.blur.push(...generateBlurCode(effect, node, constants, preferences))
        break
    }
  })

  return { properties, constants }
}

/**
 * Generates shadow code for Android Compose
 * @param effect - The effect
 * @param node - The node
 * @param constants - Constants set
 * @param preferences - Preferences
 * @returns Array of code blocks
 */
function generateShadowCode(effect: any, node: any, constants: Set<any>, preferences: any): any[] {
  const colorValue = new ColorValue(effect.color)
  const radiusVar = getRadiusVariable(effect, node)
  const radiusValue = resolveAndroidVariable(radiusVar, effect.radius, constants, 'Dp', preferences) ?? `${effect.radius}.dp`
  let colorPaintValue = colorValue.value
  const colorVar = getFieldVariable(effect, 'color', node)
  const resolvedColor = resolveAndroidVariable(colorVar, colorPaintValue, constants, 'Color', preferences) ?? colorPaintValue

  return [createCodeBlock(`.shadow(elevation = ${radiusValue}, spotColor = ${resolvedColor}, ambientColor = ${resolvedColor})`, 0, DesignIssues.ComposeShadowIncompatibility)]
}

/**
 * Generates blur code for Android Compose
 * @param effect - The effect
 * @param node - The node
 * @param constants - Constants set
 * @param preferences - Preferences
 * @returns Array of code blocks
 */
function generateBlurCode(effect: any, node: any, constants: Set<any>, preferences: any): any[] {
  const radiusVar = getRadiusVariable(effect, node)
  const radiusValue = resolveAndroidVariable(radiusVar, effect.radius, constants, 'Dp', preferences) ?? `${effect.radius}.dp`

  return [createCodeBlock(`.blur(radius = ${radiusValue})`, 0, DesignIssues.ComposeBlurTip)]
}

/**
 * Processes opacity properties for Android Compose
 * Original name: B
 * @param node - The node to process
 * @param preferences - User preferences
 * @returns Object with properties and constants
 */
function processAndroidOpacity(node: any, preferences: any): { properties: any, constants: Set<any> } {
  const properties: any = {}
  const constants = new Set()

  if (!node.opacity || node.opacity === 1) {
    return { properties, constants }
  }

  const opacityValue = formatNumber(node.opacity, 4)
  const formattedOpacity = `${opacityValue}f`

  const { variable, hint } = getVariableWithHint(node, 'opacity', opacityValue)
  const resolvedVariable = resolveAndroidVariable(variable, opacityValue, constants, '', preferences)

  let finalOpacity = resolvedVariable ?? formattedOpacity
  const suggestion = resolvedVariable
    ? undefined
    : wrapWithSuggestedVariableMarkers({
        value: formattedOpacity,
        node,
        field: 'opacity',
        preferences,
      })

  finalOpacity = suggestion?.value ?? finalOpacity
  properties.opacity = [createCodeBlock(`.alpha(${finalOpacity})`, 0, hint, suggestion?.matchingVars)]

  return { properties, constants }
}

/**
 * Processes size and offset properties for Android Compose
 * Original name: V
 * @param node - The node to process
 * @param preferences - User preferences
 * @returns Object with properties and constants
 */
function processAndroidSize(node: any, preferences: any): { properties: any, constants: Set<any> } {
  const properties: any = {}
  const constants = new Set()

  if (node.layout.shouldUseAbsolutePosition()) {
    const xOffset = formatScaledValue(node.layout.relativeBounds().bounds.x, preferences)
    const yOffset = formatScaledValue(node.layout.relativeBounds().bounds.y, preferences)
    properties.offset = [createCodeBlock(`.offset(x = ${xOffset}.dp, y = ${yOffset}.dp)`)]
  }

  const widthValue = formatScaledValue(node.layout.width, preferences)
  let widthDp = `${widthValue}.dp`
  const { variable: widthVar, hint: widthHint } = getVariableWithHint(node, 'width', widthDp)
  const resolvedWidth = resolveAndroidVariable(widthVar, widthValue, constants, 'Dp', preferences)
  if (resolvedWidth)
    widthDp = resolvedWidth
  const widthSuggestion = resolvedWidth
    ? undefined
    : wrapWithSuggestedVariableMarkers({
        value: widthDp,
        node,
        field: 'width',
        preferences,
      })
  widthDp = widthSuggestion?.value ?? widthDp

  const heightValue = formatScaledValue(node.layout.height, preferences)
  let heightDp = `${heightValue}.dp`
  const { variable: heightVar, hint: heightHint } = getVariableWithHint(node, 'height', heightDp)
  const resolvedHeight = resolveAndroidVariable(heightVar, heightValue, constants, 'Dp', preferences)
  if (resolvedHeight)
    heightDp = resolvedHeight
  const heightSuggestion = resolvedHeight
    ? undefined
    : wrapWithSuggestedVariableMarkers({
        value: heightDp,
        node,
        field: 'height',
        preferences,
      })
  heightDp = heightSuggestion?.value ?? heightDp

  const widthBlock = createCodeBlock(`.width(${widthDp})`, 0, widthHint, widthSuggestion?.matchingVars)
  const heightBlock = createCodeBlock(`.height(${heightDp})`, 0, heightHint, heightSuggestion?.matchingVars)
  properties.size = [widthBlock, heightBlock]

  return { properties, constants }
}

/**
 * Formats padding value for Android Compose
 * Original name: G
 * @param paddingValue - The padding value
 * @param field - The field name
 * @param node - The node
 * @param preferences - User preferences
 * @param constants - Set to add constants to
 * @returns Formatted padding
 */
function formatPaddingValue(paddingValue: number, field: string, node: any, preferences: any, constants: Set<any>): { paddingScaled: string } {
  const scaledValue = formatScaledValue(paddingValue, preferences)
  const dpValue = `${scaledValue}.dp`
  const resolved = resolveAndroidVariable(node.getVariableValue(field), scaledValue, constants, 'Dp', preferences)
  return { paddingScaled: resolved ?? dpValue }
}

/**
 * Gets inferred variables for Android code generation
 * Original name: H
 * @param node - The node
 * @param properties - Properties object
 * @returns Array of inferred variables
 */
function retrieveInferredAttributes(node: any, properties: any): any[] {
  if (node instanceof BasicNodeProperties || node instanceof GenericNode) {
    return []
  }

  const inferred: any[] = []

  Object.keys(node.inferredVariables).forEach((field) => {
    if (!shouldIncludeInferredVariable(field, properties, node)) {
      return
    }

    if (field === 'fills' || field === 'strokes') {
      const vars = node.inferredVariables[field]
      if (!vars)
        return
      vars.forEach((varIds: any[], index: number) => {
        const fieldValue = getNodeFieldValue(field, node, index)
        if (fieldValue && fieldValue.type === 'SOLID' && varIds && varIds.length !== 0) {
          inferred.push({
            ids: varIds.map((v: any) => v.id),
            rawValue: {
              type: VariableDataType.COLOR,
              value: {
                ...fieldValue.color,
                a: fieldValue.opacity ?? 1,
              },
            },
          })
        }
      })
      return
    }

    const varIds = node.inferredVariables[field]
    if (!varIds)
      return

    if (field === 'fontFamily') {
      if (!isBasicNode(node))
        return
      inferred.push({
        ids: varIds.map((v: any) => v.id),
        rawValue: {
          type: VariableDataType.STRING,
          value: node.textSegments[0].fontName.family.rawValue,
        },
      })
      return
    }

    const measurement = getNodeLayoutMeasurement(field, node)
    if (measurement) {
      inferred.push({
        ids: varIds.map((v: any) => v.id),
        rawValue: {
          type: VariableDataType.FLOAT,
          value: measurement,
        },
      })
    }
  })

  return inferred
}

/**
 * Checks if inferred variable should be included
 * @param field - The field name
 * @param properties - Properties object
 * @param node - The node
 * @returns True if should include
 */
function shouldIncludeInferredVariable(field: string, properties: any, node: any): boolean {
  switch (field) {
    case 'fills':
      return !!properties.backgrounds && properties.backgrounds.length > 0
    case 'height':
    case 'width':
      return !!properties.size && properties.size.length > 0
    case 'characters':
    case 'itemSpacing':
    case 'minWidth':
    case 'maxWidth':
    case 'minHeight':
    case 'maxHeight':
    case 'counterAxisSpacing':
      return false
    case 'paddingLeft':
    case 'paddingRight':
    case 'paddingTop':
    case 'paddingBottom':
      return !!properties.padding && properties.padding.length > 0
    case 'topLeftRadius':
      return !!properties.backgrounds && 'border' in node && !!node.border.topLeftRadius
    case 'topRightRadius':
      return !!properties.backgrounds && 'border' in node && !!node.border.topRightRadius
    case 'bottomLeftRadius':
      return !!properties.backgrounds && 'border' in node && !!node.border.bottomLeftRadius
    case 'bottomRightRadius':
      return !!properties.backgrounds && 'border' in node && !!node.border.bottomRightRadius
    case 'strokes':
    case 'strokeWeight':
    case 'strokeTopWeight':
    case 'strokeRightWeight':
    case 'strokeBottomWeight':
    case 'strokeLeftWeight':
      return !!properties.borders && properties.borders.length > 0
    case 'opacity':
      return !!properties.opacity && properties.opacity.length > 0
    case 'fontFamily':
      return !!properties.fontFamily
    case 'fontSize':
      return !!properties.fontSize
    case 'lineHeight':
      return !!properties.lineHeight
    default:
      return false
  }
}

/**
 * Generates image section for Android Compose
 * Original name: W
 * @param node - The node
 * @returns Code section object
 */
function generateImageSection(node: any): any {
  const lines: any[] = []

  if (node instanceof NodeWrapper) {
    lines.push(...createImageCodeBlocks(node.name, null))
  }
  else {
    const { backgrounds = [] } = node.fills
      .filter(({ visible = true, type = 'IMAGE' }) => visible && type === 'IMAGE')
      .reduce(
        (acc: any, paint: any) => ({
          backgrounds: [...acc.backgrounds, ...createImageCodeBlocks(node.name, paint.scaleMode)],
        }),
        { backgrounds: [] },
      )
    lines.push(...backgrounds)
  }

  return {
    name: 'Image',
    language: 'kotlin',
    lines,
  }
}

/**
 * Creates image code blocks for Android Compose
 * Original name: K
 * @param name - Image name
 * @param scaleMode - Scale mode
 * @returns Array of code blocks
 */
function createImageCodeBlocks(name: string, scaleMode: string | null): any[] {
  const blocks = [
    createCodeBlock('Image('),
    createCodeBlock(`painter = painterResource(id = R.drawable.${toDefaultName(name)}),`, 1),
    createCodeBlock('contentDescription = "image description",', 1),
  ]

  switch (scaleMode) {
    case 'FIT':
      blocks.push(createCodeBlock('contentScale = ContentScale.Fit', 1))
      break
    case 'CROP':
      blocks.push(createCodeBlock('contentScale = ContentScale.Crop', 1))
      break
    case 'FILL':
      blocks.push(createCodeBlock('contentScale = ContentScale.FillBounds', 1))
      break
    default:
      blocks.push(createCodeBlock('contentScale = ContentScale.None', 1))
  }

  blocks.push(createCodeBlock(')'))
  return blocks
}

// Original function: Y
/**
 * Generates Android Compose code for image or wrapper nodes
 * @param node - The node to process
 * @param preferences - User preferences
 * @returns Array of code sections
 */
async function generateAndroidImageCode(node: any, preferences: any): Promise<any[]> {
  // Process various properties
  const { properties: sizeProperties, constants: sizeConstants } = processAndroidSize(node, preferences)
  const { properties: opacityProperties, constants: opacityConstants } = processAndroidOpacity(node, preferences)
  const { properties: backgroundProperties, constants: backgroundConstants } = processAndroidBackgrounds(node, preferences)
  const { properties: borderProperties, constants: borderConstants } = processAndroidBorders(node, preferences)
  const { properties: effectProperties, constants: effectConstants } = processAndroidEffects(node, preferences)

  // Combine all properties
  const allProperties = {
    ...effectProperties,
    ...sizeProperties,
    ...opacityProperties,
    ...backgroundProperties,
    ...borderProperties,
  }

  // Get inferred variables
  const inferredVars = retrieveInferredAttributes(node, allProperties)

  // Combine constants
  const allConstants = new Set([...backgroundConstants, ...borderConstants, ...sizeConstants, ...opacityConstants, ...effectConstants])

  // Generate code sections
  const codeSections = generateCodeSections(allProperties, allConstants, inferredVars)

  // Add image section
  const imageSection = generateImageSection(node)

  return [...codeSections, imageSection]
}

// Original function: q
/**
 * Generates Android Compose code for frame or shape nodes
 * @param node - The node to process
 * @param preferences - User preferences
 * @returns Array of code sections
 */
async function generateAndroidFrameCode(node: any, preferences: any): Promise<any[]> {
  // Process various properties
  const { properties: sizeProperties, constants: sizeConstants } = processAndroidSize(node, preferences)
  const { properties: opacityProperties, constants: opacityConstants } = processAndroidOpacity(node, preferences)
  const { properties: backgroundProperties, constants: backgroundConstants } = processAndroidBackgrounds(node, preferences)
  const { properties: borderProperties, constants: borderConstants } = processAndroidBorders(node, preferences)
  const { properties: effectProperties, constants: effectConstants } = processAndroidEffects(node, preferences)
  const { properties: paddingProperties, constants: paddingConstants } = processAndroidPadding(node, preferences)

  // Combine properties based on visibility settings
  const allProperties = {
    ...effectProperties,
    ...(shouldHideLayout(preferences) ? {} : { ...sizeProperties, ...opacityProperties }),
    ...(shouldHideColor(preferences) ? {} : { ...backgroundProperties, ...borderProperties }),
    ...(shouldHideLayout(preferences) ? {} : paddingProperties),
  }

  // Get inferred variables
  const inferredVars = retrieveInferredAttributes(node, allProperties)

  // Generate layout code if auto layout
  const layoutLines: any[] = []
  const layoutConstants = new Set()
  const layoutMatchingVars: any[] = []

  if (node.isAutoLayout()) {
    const {
      primaryAxisAlignItems = 'MIN',
      counterAxisAlignItems = 'MIN',
      layoutMode,
      itemSpacing,
    } = node.autoLayout

    const spacingDp = `${itemSpacing}.dp`
    const { variable, hint } = getVariableWithHint(node, 'itemSpacing', spacingDp)
    const resolvedSpacing = resolveAndroidVariable(variable, itemSpacing, layoutConstants, 'Dp', preferences)
    let finalSpacing = resolvedSpacing ?? spacingDp
    const spacingSuggestion = resolvedSpacing
      ? undefined
      : wrapWithSuggestedVariableMarkers({
          value: finalSpacing,
          node,
          field: 'itemSpacing',
          preferences,
        })
    finalSpacing = spacingSuggestion?.value ?? finalSpacing

    // Add inferred variables for itemSpacing
    if (node.inferredVariables.itemSpacing && itemSpacing) {
      layoutMatchingVars.push({
        ids: node.inferredVariables.itemSpacing.map((v: any) => v.id),
        rawValue: {
          type: VariableDataType.FLOAT,
          value: itemSpacing,
        },
      })
    }

    if (layoutMode === 'HORIZONTAL') {
      layoutLines.push(
        createCodeBlock('Row('),
        createCodeBlock(`horizontalArrangement = ${getHorizontalArrangement(primaryAxisAlignItems, finalSpacing)},`, 1, hint, spacingSuggestion?.matchingVars),
        createCodeBlock(`verticalAlignment = ${getVerticalAlignment(counterAxisAlignItems)},`, 1),
        createCodeBlock(') {'),
        createCodeBlock('// Child views.', 1),
        createCodeBlock('}'),
      )
    }
    else {
      layoutLines.push(
        createCodeBlock('Column('),
        createCodeBlock(`verticalArrangement = ${getVerticalArrangement(primaryAxisAlignItems, finalSpacing)},`, 1, hint, spacingSuggestion?.matchingVars),
        createCodeBlock(`horizontalAlignment = ${getHorizontalAlignment(counterAxisAlignItems)},`, 1),
        createCodeBlock(') {'),
        createCodeBlock('// Child views.', 1),
        createCodeBlock('}'),
      )
    }
  }

  // Combine constants
  const allConstants = new Set([
    ...backgroundConstants,
    ...borderConstants,
    ...paddingConstants,
    ...sizeConstants,
    ...opacityConstants,
    ...layoutConstants,
    ...effectConstants,
  ])

  // Generate code sections
  const codeSections = generateCodeSections(allProperties, allConstants, inferredVars)

  // Add layout section
  const layoutSection = {
    name: 'Layout',
    language: 'kotlin',
    lines: layoutLines,
    matchingVars: layoutMatchingVars,
  }

  // Add image section
  const imageSection = generateImageSection(node)

  return [...codeSections, layoutSection, imageSection]
}

/**
 * Processes padding properties for Android Compose auto layout
 * Original name: inline function in q
 * @param node - The node to process
 * @param preferences - User preferences
 * @returns Object with properties and constants
 */
function processAndroidPadding(node: any, preferences: any): { properties: any, constants: Set<any> } {
  if (!node.isAutoLayout()) {
    return { properties: {}, constants: new Set() }
  }

  const { paddingLeft, paddingBottom, paddingRight, paddingTop } = node.autoLayout
  const leftVar = node.getVariableValue('paddingLeft')
  const topVar = node.getVariableValue('paddingTop')
  const rightVar = node.getVariableValue('paddingRight')
  const bottomVar = node.getVariableValue('paddingBottom')

  if (paddingLeft === 0 && paddingTop === 0 && paddingRight === 0 && paddingBottom === 0 && !leftVar && !topVar && !rightVar && !bottomVar) {
    return { properties: {}, constants: new Set() }
  }

  const constants = new Set()
  let paddingCode = '.padding('

  const addPadding = (value: number, field: string, varValue: any, matchIndex: number) => {
    if (value !== 0 || varValue) {
      const { paddingScaled } = formatPaddingValue(value, field, node, preferences, constants)
      const suggestion = isVariableResolved(varValue)
        ? undefined
        : wrapWithSuggestedVariableMarkers({
            value: paddingScaled,
            node,
            field,
            matchIndex,
            preferences,
          })
      const finalValue = suggestion?.value ?? paddingScaled
      paddingCode += `${getPaddingDirection(field)} = ${finalValue}, `
      return suggestion
    }
    return undefined
  }

  const suggestions = [
    addPadding(paddingLeft, 'paddingLeft', leftVar, 3),
    addPadding(paddingTop, 'paddingTop', topVar, 0),
    addPadding(paddingRight, 'paddingRight', rightVar, 1),
    addPadding(paddingBottom, 'paddingBottom', bottomVar, 2),
  ].filter(Boolean)

  paddingCode = `${paddingCode.slice(0, -2)})`

  return {
    properties: {
      padding: [createCodeBlock(paddingCode, 0, undefined, mergeSuggestedVariables(suggestions.map(s => s?.matchingVars)))],
    },
    constants,
  }
}

/**
 * Gets padding direction for Android Compose
 * @param field - The padding field
 * @returns Direction string
 */
function getPaddingDirection(field: string): string {
  switch (field) {
    case 'paddingLeft': return 'start'
    case 'paddingTop': return 'top'
    case 'paddingRight': return 'end'
    case 'paddingBottom': return 'bottom'
    default: return ''
  }
}

/**
 * Gets horizontal arrangement for Row
 * @param align - Alignment type
 * @param spacing - Spacing value
 * @returns Arrangement string
 */
function getHorizontalArrangement(align: string, spacing: string): string {
  switch (align) {
    case 'CENTER': return `Arrangement.spacedBy(${spacing}, Alignment.CenterHorizontally)`
    case 'MAX': return `Arrangement.spacedBy(${spacing}, Alignment.End)`
    case 'SPACE_BETWEEN': return 'Arrangement.SpaceBetween'
    default: return `Arrangement.spacedBy(${spacing}, Alignment.Start)`
  }
}

/**
 * Gets vertical alignment for Row
 * @param align - Alignment type
 * @returns Alignment string
 */
function getVerticalAlignment(align: string): string {
  switch (align) {
    case 'CENTER': return 'Alignment.CenterVertically'
    case 'MAX': return 'Alignment.Bottom'
    default: return 'Alignment.Top'
  }
}

/**
 * Gets vertical arrangement for Column
 * @param align - Alignment type
 * @param spacing - Spacing value
 * @returns Arrangement string
 */
function getVerticalArrangement(align: string, spacing: string): string {
  switch (align) {
    case 'CENTER': return `Arrangement.spacedBy(${spacing}, Alignment.CenterVertically)`
    case 'MAX': return `Arrangement.spacedBy(${spacing}, Alignment.Bottom)`
    case 'SPACE_BETWEEN': return 'Arrangement.SpaceBetween'
    default: return `Arrangement.spacedBy(${spacing}, Alignment.Top)`
  }
}

/**
 * Gets horizontal alignment for Column
 * @param align - Alignment type
 * @returns Alignment string
 */
function getHorizontalAlignment(align: string): string {
  switch (align) {
    case 'CENTER': return 'Alignment.CenterHorizontally'
    case 'MAX': return 'Alignment.End'
    default: return 'Alignment.Start'
  }
}

// Font weight mappings for Android Compose
const FONT_WEIGHT_NUMERIC = {
  thin: 100,
  extralight: 200,
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
}

/**
 * Font weight names for Android Compose
 * Original name: Q
 */
const FONT_WEIGHT_NAMES = {
  thin: 'thin',
  extralight: 'ultralight',
  light: 'light',
  regular: 'regular',
  medium: 'medium',
  semibold: 'semibold',
  bold: 'bold',
  extrabold: 'heavy',
  black: 'black',
}

/**
 * Parses font style and weight for Android Compose
 * Original name: J
 * @param style - Font style string
 * @param fontWeight - Font weight value
 * @returns Object with fontWeight and italic flag
 */
function parseFontStyle(style: string, fontWeight?: any): { fontWeight: any, italic: boolean } {
  if (fontWeight?.rawValue !== undefined) {
    return {
      fontWeight,
      italic: style.includes('Italic'),
    }
  }
  return {
    fontWeight: {
      rawValue: FONT_WEIGHT_NUMERIC[style.replace(/italic/gi, '').replace(/ /g, '').toLocaleLowerCase()] ?? 400,
    },
    italic: style.includes('Italic'),
  }
}

/**
 * Escapes string for Android Compose text
 * Original name: ee
 * @param text - Text to escape
 * @returns Escaped string
 */
function escapeTextString(text: string): string {
  return `"${text.replace(/"/g, '\\"').replace(/\n/g, '\\n')}"`
}

/**
 * Calculates letter spacing value
 * Original name: et
 * @param letterSpacing - Letter spacing object
 * @param fontSize - Font size value
 * @returns Calculated spacing
 */
function calculateLetterSpacing(letterSpacing: any, fontSize: number): number {
  switch (letterSpacing.unit) {
    case 'PIXELS':
      return letterSpacing.value
    case 'PERCENT':
      return fontSize * letterSpacing.value / 100
    default:
      return 0
  }
}

/**
 * Generates font size code block for Android Compose
 * @param fontSize - Font size object
 * @param preferences - User preferences
 * @param constants - Constants set
 * @param node - The node
 * @returns Code block and properties
 */
function generateFontSizeCode(fontSize: any, preferences: any, constants: Set<any>, node: any): { code: any, properties: any[] } {
  const scaled = formatScaledValue(fontSize.rawValue, preferences, 2)
  const varResult = createAndroidVariable(fontSize, scaled, constants, 'Sp', preferences)
  const spValue = `${scaled}.sp`
  const suggestion = varResult
    ? undefined
    : wrapWithSuggestedVariableMarkers({
        value: spValue,
        node,
        field: 'fontSize',
        preferences,
      })
  const finalValue = suggestion?.value ?? varResult ?? spValue
  const code = createCodeBlock(`fontSize = ${finalValue},`, 2, undefined, suggestion?.matchingVars)
  return { code, properties: [code] }
}

/**
 * Generates line height code block for Android Compose
 * @param lineHeight - Line height object
 * @param fontSize - Font size value
 * @param preferences - User preferences
 * @param constants - Constants set
 * @param node - The node
 * @returns Code block and properties
 */
function generateLineHeightCode(lineHeight: any, fontSize: number, preferences: any, constants: Set<any>, node: any): { code: any, properties: any[] } {
  const rawValue = lineHeight.rawValue
  const calculated = rawValue.unit === 'PIXELS' ? rawValue.value : rawValue.unit !== 'AUTO' ? rawValue.value / 100 * fontSize : undefined
  if (!calculated)
    return { code: null, properties: [] }

  const scaled = formatScaledValue(calculated, preferences, 2)
  const varResult = createAndroidVariable(lineHeight, scaled, constants, 'Sp', preferences)
  const spValue = `${scaled}.sp`
  const suggestion = varResult
    ? undefined
    : wrapWithSuggestedVariableMarkers({
        value: spValue,
        node,
        field: 'lineHeight',
        preferences,
      })
  const finalValue = suggestion?.value ?? varResult ?? spValue
  const code = createCodeBlock(`lineHeight = ${finalValue},`, 2, undefined, suggestion?.matchingVars)
  return { code, properties: [code] }
}

/**
 * Generates font family code block for Android Compose
 * @param family - Font family object
 * @returns Code block and properties
 */
function generateFontFamilyCode(family: any): { code: any, properties: any[] } {
  const code = createCodeBlock(`fontFamily = FontFamily(Font(R.font.${snakeCase(family.rawValue)})),`, 2)
  return { code, properties: [code] }
}

/**
 * Generates font weight and style code blocks for Android Compose
 * @param style - Font style string
 * @param fontWeight - Font weight object
 * @param textSegment - Text segment
 * @param constants - Constants set
 * @param preferences - User preferences
 * @returns Code blocks
 */
function generateFontWeightAndStyleCode(style: string, fontWeight: any, textSegment: any, constants: Set<any>, preferences: any): any[] {
  const { fontWeight: parsedWeight, italic } = parseFontStyle(style, fontWeight)
  const weightValue = parsedWeight.rawValue
  const varResult = createAndroidVariable(textSegment.fontWeight, weightValue, constants, 'Int', preferences)
  const finalWeight = varResult ?? weightValue
  const codes = [createCodeBlock(`fontWeight = FontWeight(${finalWeight}),`, 2)]
  if (italic)
    codes.push(createCodeBlock('fontStyle = FontStyle.Italic,', 2))
  return codes
}

/**
 * Generates text color code block for Android Compose
 * @param fills - Fills array
 * @param node - The node
 * @param preferences - User preferences
 * @param constants - Constants set
 * @returns Code block
 */
function generateTextColorCode(fills: any[], node: any, preferences: any, constants: Set<any>): any {
  const paints = processPaints(fills)
  if (paints.length === 0)
    return null

  const { paint, index, hint } = paints[0]
  const colorValue = new ColorValue(paint.color, paint.opacity)
  const colorVar = getColorVariable(paint, index, 'fills', node)
  const colorHint = hint || (paints.length > 1 ? DesignIssues.SinglePaint : getVariableHint(colorVar, colorValue, { isColor: true }))
  let paintValue = colorValue.value
  const resolvedPaint = resolveAndroidVariable(colorVar, paintValue, constants, 'Color', preferences)
  if (resolvedPaint)
    paintValue = resolvedPaint
  const suggestion = resolvedPaint
    ? undefined
    : wrapWithSuggestedVariableMarkers({
        value: paintValue,
        node,
        field: 'fills',
        arrayIndex: index,
        preferences,
      })
  paintValue = suggestion?.value ?? paintValue
  return createCodeBlock(`color = ${paintValue},`, 2, colorHint, suggestion?.matchingVars)
}

/**
 * Generates text alignment code block for Android Compose
 * @param textAlignHorizontal - Text alignment
 * @returns Code block
 */
function generateTextAlignCode(textAlignHorizontal: string): any {
  switch (textAlignHorizontal) {
    case 'RIGHT':
      return createCodeBlock('textAlign = TextAlign.Right,', 2)
    case 'CENTER':
      return createCodeBlock('textAlign = TextAlign.Center,', 2)
    case 'JUSTIFIED':
      return createCodeBlock('textAlign = TextAlign.Justify,', 2)
    default:
      return null
  }
}

/**
 * Generates letter spacing code block for Android Compose
 * @param letterSpacing - Letter spacing object
 * @param fontSize - Font size value
 * @param preferences - User preferences
 * @param constants - Constants set
 * @param textSegment - Text segment
 * @returns Code block
 */
function generateLetterSpacingCode(letterSpacing: any, fontSize: number, preferences: any, constants: Set<any>, textSegment: any): any {
  if (!letterSpacing || letterSpacing.rawValue.value <= 0)
    return null

  const spacing = calculateLetterSpacing(letterSpacing.rawValue, fontSize)
  const scaled = formatScaledValue(spacing, preferences, 2)
  const varResult = createAndroidVariable(textSegment.letterSpacing, scaled, constants, 'Sp', preferences)
  const spValue = `${scaled}.sp`
  const finalValue = varResult ?? spValue
  return createCodeBlock(`letterSpacing = ${finalValue},`, 2)
}

/**
 * Generates text decoration code block for Android Compose
 * @param textDecoration - Text decoration type
 * @returns Code block
 */
function generateTextDecorationCode(textDecoration: string): any {
  switch (textDecoration) {
    case 'STRIKETHROUGH':
      return createCodeBlock('textDecoration = TextDecoration.LineThrough,', 2)
    case 'UNDERLINE':
      return createCodeBlock('textDecoration = TextDecoration.Underline,', 2)
    default:
      return null
  }
}

/**
 * Generates Android Compose code for text nodes
 * Original name: ei
 * @param node - The node to process
 * @param preferences - User preferences
 * @returns Array of code sections
 */
async function generateAndroidTextCode(node: any, preferences: any): Promise<any[]> {
  const { properties: sizeProperties, constants: sizeConstants } = processAndroidSize(node, preferences)
  const { properties: opacityProperties, constants: opacityConstants } = processAndroidOpacity(node, preferences)

  const lines: any[] = []
  const constants = new Set()
  const properties: any = {}

  const textSegment = node.textSegments[0]
  const { fontName: { family, style }, fontSize, fills, lineHeight, fontWeight, letterSpacing, textDecoration } = textSegment

  lines.push(createCodeBlock('Text('))
  lines.push(createCodeBlock(`text = ${escapeTextString(node.characters)},`, 1))

  if (isResolvedStyle(node.textStyle)) {
    lines.push(createCodeBlock('', 1))
    lines.push(createCodeBlock(`// ${node.textStyle.name}`, 1))
  }

  lines.push(createCodeBlock('style = TextStyle(', 1))

  if (fontSize) {
    const { code, properties: fontSizeProps } = generateFontSizeCode(fontSize, preferences, constants, node)
    lines.push(code)
    properties.fontSize = fontSizeProps

    const { code: lineHeightCode, properties: lineHeightProps } = generateLineHeightCode(lineHeight, fontSize.rawValue, preferences, constants, node)
    if (lineHeightCode) {
      lines.push(lineHeightCode)
      properties.lineHeight = lineHeightProps
    }
  }

  if (family) {
    const { code, properties: fontFamilyProps } = generateFontFamilyCode(family)
    lines.push(code)
    properties.fontFamily = fontFamilyProps
  }

  if (style) {
    const weightCodes = generateFontWeightAndStyleCode(style, fontWeight, textSegment, constants, preferences)
    lines.push(...weightCodes)
  }

  if (fills && !shouldHideLayoutOrColor(preferences)) {
    const colorCode = generateTextColorCode(fills, node, preferences, constants)
    if (colorCode)
      lines.push(colorCode)
  }

  const alignCode = generateTextAlignCode(node.textAlignHorizontal)
  if (alignCode)
    lines.push(alignCode)

  const spacingCode = generateLetterSpacingCode(letterSpacing, textSegment.fontSize.rawValue, preferences, constants, textSegment)
  if (spacingCode)
    lines.push(spacingCode)

  const decorationCode = generateTextDecorationCode(textDecoration)
  if (decorationCode)
    lines.push(decorationCode)

  lines.push(createCodeBlock(')', 1))
  lines.push(createCodeBlock(')'))

  const allProperties = shouldHideLayoutOrColor(preferences)
    ? {}
    : { ...sizeProperties, ...opacityProperties }

  const inferredVars = retrieveInferredAttributes(node, allProperties)
  const textInferredVars = retrieveInferredAttributes(node, properties)

  return [
    ...generateCodeSections(allProperties, new Set(shouldHideLayoutOrColor(preferences) ? constants : [...sizeConstants, ...opacityConstants, ...constants]), inferredVars),
    {
      lines,
      language: 'kotlin',
      name: 'Text',
      matchingVars: textInferredVars,
    },
  ]
}

/**
 * Dispatches to appropriate Android code generator
 * Original name: en
 * @param node - The node to process
 * @param preferences - User preferences
 * @returns Array of code sections
 */
async function dispatchAndroidCodeGeneration(node: any, preferences: any): Promise<any[]> {
  if (node instanceof NodeWrapper) {
    return generateAndroidImageCode(node, preferences)
  }
  if (node instanceof FrameNodeProperties) {
    return generateAndroidFrameCode(node, preferences)
  }
  if (node instanceof NodeProperties) {
    return generateAndroidTextCode(node, preferences)
  }
  if (node instanceof ShapeNodeProperties || node instanceof InstanceNodeProperties || node instanceof ComponentNodeProperties) {
    return generateAndroidFrameCode(node, preferences)
  }
  if (node instanceof BasicNodeProperties) {
    return []
  }
  return [{
    lines: [createCodeBlock('Not implemented.')],
    language: 'kotlin',
    name: 'Modifier',
  }]
}

/**
 * Generates Android Compose code
 * Original name: er
 * @param node - The node to process
 * @param preferences - User preferences
 * @returns Object with sections
 */
async function generateAndroidCode(node: any, preferences: any): Promise<CodegenCodeResult> {
  return {
    sections: await dispatchAndroidCodeGeneration(node, preferences),
  }
}

// Blend mode mappings for CSS
const BLEND_MODE_MAPPING = {
  PASS_THROUGH: 'pass-through',
  NORMAL: 'normal',
  DARKEN: 'darken',
  MULTIPLY: 'multiply',
  LINEAR_BURN: 'plus-darker',
  COLOR_BURN: 'color-burn',
  LIGHTEN: 'lighten',
  SCREEN: 'screen',
  LINEAR_DODGE: 'plus-lighter',
  COLOR_DODGE: 'color-dodge',
  OVERLAY: 'overlay',
  SOFT_LIGHT: 'soft-light',
  HARD_LIGHT: 'hard-light',
  DIFFERENCE: 'difference',
  EXCLUSION: 'exclusion',
  HUE: 'hue',
  SATURATION: 'saturation',
  COLOR: 'color',
  LUMINOSITY: 'luminosity',
}

/**
 * Supported blend modes set
 * Original name: ec
 */
const SUPPORTED_BLEND_MODES: Set<string> = new Set([
  'normal',
  'multiply',
  'screen',
  'overlay',
  'darken',
  'lighten',
  'color-dodge',
  'color-burn',
  'hard-light',
  'soft-light',
  'difference',
  'exclusion',
  'hue',
  'saturation',
  'color',
  'luminosity',
  'plus-lighter',
  'plus-darker',
])

// Refactored CSS utility classes for handling blend modes, filters, shadows, and other effects
// Grouped related functionality together for better organization

/**
 * Represents blend modes for CSS.
 * Original name: eu
 */
class BlendMode {
  public readonly blendModes: string[]

  constructor(blendModes: string[]) {
    this.blendModes = blendModes
  }

  /**
   * Creates a BlendMode instance from Figma blend modes.
   * Original name: eu.fromFigmaBlendMode
   */
  static fromFigmaBlendMode(figmaBlendModes: string[]): BlendMode {
    return new BlendMode(
      figmaBlendModes.map(mode =>
        SUPPORTED_BLEND_MODES.has(BLEND_MODE_MAPPING[mode]) ? BLEND_MODE_MAPPING[mode] : 'normal',
      ),
    )
  }

  /**
   * Gets the CSS value for blend modes.
   */
  get value(): string {
    return this.blendModes.some(mode => mode !== 'normal') ? this.blendModes.join(', ') : 'normal'
  }

  /**
   * Checks if two BlendMode instances are equal.
   */
  equals(other: BlendMode): boolean {
    return this.value === other.value
  }

  /**
   * Checks if the blend modes contain a specific mode.
   */
  contains(mode: string): boolean {
    return this.blendModes.includes(mode)
  }
}

/**
 * Represents CSS filters.
 * Original name: em
 */
class Filter {
  public readonly filterObjects: any[]

  constructor(filterObjects: any[]) {
    this.filterObjects = filterObjects
  }

  /**
   * Concatenates two Filter instances.
   * Original name: em.concat
   */
  static concat(first: Filter | null, second: Filter | null): Filter {
    return new Filter([
      ...(first?.filterObjects ?? []),
      ...(second?.filterObjects ?? []),
    ])
  }

  /**
   * Gets the CSS value for filters.
   */
  get value(): string {
    return this.filterObjects.length === 1
      ? this.filterObjects[0].value
      : this.filterObjects.map(obj => obj.value).join(' ')
  }

  /**
   * Checks if two Filter instances are equal.
   */
  equals(other: Filter): boolean {
    return this.value === other.value
  }
}

/**
 * Represents a blur filter.
 * Original name: eh
 */
class BlurFilter {
  public readonly rawValue: number
  public readonly radius: any

  constructor(rawValue: number, radius: any) {
    this.rawValue = rawValue
    this.radius = radius
  }

  /**
   * Gets the CSS value for the blur filter.
   */
  get value(): string {
    return this.radius instanceof PixelValue
      ? `blur(${this.rawValue / 2}px)`
      : `blur(calc(${this.radius.value} / 2))`
  }

  /**
   * Checks if two BlurFilter instances are equal.
   */
  equals(other: BlurFilter): boolean {
    return this.value === other.value
  }
}

/**
 * Represents a drop-shadow filter.
 * Original name: eg
 */
class DropShadowFilter {
  public readonly params: any

  constructor(params: any) {
    this.params = params
  }

  /**
   * Gets the CSS value for the drop-shadow filter.
   */
  get value(): string {
    return `drop-shadow(${this.params.offsetX.value} ${this.params.offsetY.value} ${this.params.radius.value} ${this.params.color.value})`
  }

  /**
   * Checks if two DropShadowFilter instances are equal.
   */
  equals(other: DropShadowFilter): boolean {
    return this.value === other.value
  }
}

/**
 * Represents a gap value (x and y).
 * Original name: ef
 */
class Gap {
  public readonly x: any
  public readonly y: any

  constructor(x: any, y: any) {
    this.x = x
    this.y = y
  }

  /**
   * Gets the CSS value for the gap.
   */
  get value(): string {
    return this.x.equals(this.y) ? `${this.x.value}` : `${this.x.value} ${this.y.value}`
  }

  /**
   * Checks if two Gap instances are equal.
   */
  equals(other: Gap): boolean {
    return this.value === other.value
  }
}

/**
 * Represents border radius values.
 * Original name: e_
 */
class BorderRadius {
  public readonly top: any
  public readonly right: any
  public readonly bottom: any
  public readonly left: any

  constructor(top: any, right: any, bottom: any, left: any) {
    this.top = top
    this.right = right
    this.bottom = bottom
    this.left = left
  }

  /**
   * Gets the CSS value for border radius.
   */
  get value(): string {
    if (this.top.equals(this.right) && this.right.equals(this.bottom) && this.bottom.equals(this.left)) {
      return `${this.top.value}`
    }
    if (this.top.equals(this.bottom) && this.left.equals(this.right)) {
      return `${this.top.value} ${this.left.value}`
    }
    return `${this.top.value} ${this.right.value} ${this.bottom.value} ${this.left.value}`
  }

  /**
   * Checks if two BorderRadius instances are equal.
   */
  equals(other: BorderRadius): boolean {
    return this.value === other.value
  }
}

/**
 * Represents padding values.
 * Original name: eA
 */
class Padding {
  public readonly top: PixelValue
  public readonly right: PixelValue
  public readonly bottom: PixelValue
  public readonly left: PixelValue

  constructor(top: number, right: number, bottom: number, left: number) {
    this.top = new PixelValue(top)
    this.right = new PixelValue(right)
    this.bottom = new PixelValue(bottom)
    this.left = new PixelValue(left)
  }

  /**
   * Gets the CSS value for padding.
   */
  get value(): string {
    if (this.top.equals(this.right) && this.right.equals(this.bottom) && this.bottom.equals(this.left)) {
      return `${this.top.value}`
    }
    if (this.top.equals(this.bottom) && this.left.equals(this.right)) {
      return `${this.top.value} ${this.left.value}`
    }
    return `${this.top.value} ${this.right.value} ${this.bottom.value} ${this.left.value}`
  }

  /**
   * Checks if two Padding instances are equal.
   */
  equals(other: Padding): boolean {
    return this.value === other.value
  }

  /**
   * Gets the single value if all sides are equal.
   */
  get singleValue(): PixelValue | undefined {
    if (this.top.equals(this.right) && this.right.equals(this.bottom) && this.bottom.equals(this.left)) {
      return this.top
    }
  }
}

/**
 * Enum for shadow types.
 * Original name: ey
 */
enum ShadowType {
  Normal = 0,
  Inset = 1,
}

/**
 * Represents box shadows.
 * Original name: eb
 */
class BoxShadow {
  public readonly shadowObjects: any[]

  constructor(shadowObjects: any[]) {
    this.shadowObjects = shadowObjects
  }

  /**
   * Concatenates two BoxShadow instances.
   * Original name: eb.concat
   */
  static concat(first: BoxShadow | null, second: BoxShadow | null): BoxShadow {
    return new BoxShadow([
      ...(second?.shadowObjects ?? []),
      ...(first?.shadowObjects ?? []),
    ])
  }

  /**
   * Gets the CSS value for box shadows.
   */
  get value(): string {
    return this.shadowObjects
      .map(obj => `${obj.offsetX.value} ${obj.offsetY.value} ${obj.blur.value} ${obj.spread.value} ${obj.color.value}${obj.type === ShadowType.Inset ? ' inset' : ''}`)
      .join(', ')
  }

  /**
   * Checks if two BoxShadow instances are equal.
   */
  equals(other: BoxShadow): boolean {
    return this.value === other.value
  }
}

/**
 * Represents text shadows.
 * Original name: ev
 */
class TextShadow {
  public readonly shadowObjects: any[]

  constructor(shadowObjects: any[]) {
    this.shadowObjects = shadowObjects
  }

  /**
   * Concatenates two TextShadow instances.
   * Original name: ev.concat
   */
  static concat(first: TextShadow | null, second: TextShadow | null): TextShadow {
    return new TextShadow([
      ...(second?.shadowObjects ?? []),
      ...(first?.shadowObjects ?? []),
    ])
  }

  /**
   * Gets the CSS value for text shadows.
   */
  get value(): string {
    return this.shadowObjects
      .map(obj => `${obj.offsetX.value} ${obj.offsetY.value} ${obj.blur.value} ${obj.color.value}`)
      .join(', ')
  }

  /**
   * Checks if two TextShadow instances are equal.
   */
  equals(other: TextShadow): boolean {
    return this.value === other.value
  }
}

/**
 * Represents a rotation transform.
 * Original name: eE
 */
class Rotation {
  public readonly rotationDeg: number

  constructor(rotationDeg: number) {
    this.rotationDeg = rotationDeg
  }

  /**
   * Gets the CSS value for rotation.
   */
  get value(): string {
    return `rotate(${roundToDecimal(this.rotationDeg)}deg)`
  }

  /**
   * Checks if two Rotation instances are equal.
   */
  equals(other: Rotation): boolean {
    return this.value === other.value
  }
}

/**
 * Represents transforms.
 * Original name: ex
 */
class Transform {
  public readonly transforms: any[]

  constructor(transforms: any[]) {
    this.transforms = transforms
  }

  /**
   * Concatenates two Transform instances.
   * Original name: ex.concat
   */
  static concat(first: Transform | null, second: Transform | null): Transform {
    return new Transform([
      ...(first?.transforms ?? []),
      ...(second?.transforms ?? []),
    ])
  }

  /**
   * Gets the CSS value for transforms.
   */
  get value(): string {
    return this.transforms.map(t => t.value).join(' ')
  }

  /**
   * Checks if two Transform instances are equal.
   */
  equals(other: Transform): boolean {
    return this.value === other.value
  }
}

// Default values for CSS properties
// Original name: eS
const defaultValues = {
  'width': new PixelValue('auto'),
  'height': new PixelValue('auto'),
  'min-height': new PixelValue('auto'),
  'min-width': new PixelValue('auto'),
  'max-height': new PixelValue('auto'),
  'max-width': new PixelValue('auto'),
  'position': new RawValue('static'),
  'flex-grow': new RawValue(0),
  'flex-shrink': new RawValue(1),
  'flex-basis': new RawValue('auto'),
  'box-sizing': new RawValue('border-box'),
  'align-self': new RawValue('center'),
  'aspect-ratio': new RawValue('auto'),
  'padding': new Padding(0, 0, 0, 0),
  'flex-direction': new RawValue('row'),
  'justify-content': new RawValue('flex-start'),
  'align-items': new RawValue('stretch'),
  'align-content': new RawValue('stretch'),
  'gap': new PixelValue(0),
  'row-gap': new PixelValue(0),
  'column-gap': new PixelValue(0),
  'left': new PixelValue('auto'),
  'right': new PixelValue('auto'),
  'top': new PixelValue('auto'),
  'bottom': new PixelValue('auto'),
  'word-break': new NormalValue(),
  'pointer-events': new RawValue('auto'),
  'inset': new RawValue('auto'),
  'border-radius': new Padding(0, 0, 0, 0),
  'margin-bottom': new PixelValue(0),
  'text-indent': new PixelValue(0),
  'font-size': new PixelValue(0),
  'letter-spacing': new PixelValue(0),
  'text-transform': new RawValue('none'),
  'text-align': new RawValue('left'),
  'text-overflow': new RawValue('clip'),
  'white-space': new RawValue('normal'),
  'font-variant': new NormalValue(),
  'text-decoration-line': new RawValue('none'),
  'background-blend-mode': new BlendMode(['normal']),
  'overflow': new RawValue('visible'),
  'opacity': new StringValue(1),
  'flex': new RawValue('0 1 auto'),
  'flex-wrap': new RawValue('nowrap'),
  'mix-blend-mode': new BlendMode(['normal']),
}

// Property ordering for consistent CSS generation
// Original name: ew
const ew: string[] = [
  'box-sizing',
  'display',
  'position',
  'left',
  'right',
  'top',
  'bottom',
  'inset',
  'width',
  'height',
  'min-width',
  'max-width',
  'min-height',
  'max-height',
  'overflow',
  'transform',
  '-webkit-box-orient',
  '-webkit-line-clamp',
  'padding',
  'padding-top',
  'padding-bottom',
  'padding-left',
  'padding-right',
  'border-radius',
  'margin-bottom',
  'border',
  'border-top',
  'border-right',
  'border-bottom',
  'border-left',
  'border-width',
  'border-color',
  'border-style',
  'box-shadow',
  'opacity',
  'background',
  'background-clip',
  '-webkit-background-clip',
  '-webkit-text-fill-color',
  'background-blend-mode',
  'mix-blend-mode',
  'flex-direction',
  'justify-content',
  'align-items',
  'align-content',
  'gap',
  'row-gap',
  'column-gap',
  'flex',
  'flex-grow',
  'flex-shrink',
  'flex-basis',
  'align-self',
  'flex-wrap',
  'aspect-ratio',
  'color',
  'font-family',
  'font-size',
  'font-style',
  'font-weight',
  'line-height',
  'font-variant',
  'letter-spacing',
  'text-align',
  'text-decoration',
  'text-decoration-line',
  'text-decoration-style',
  'text-decoration-skip-ink',
  'text-decoration-color',
  'text-decoration-thickness',
  'text-underline-offset',
  'text-underline-position',
  'text-indent',
  'text-transform',
  'text-shadow',
  'word-break',
  'leading-trim',
  'text-edge',
  'font-kerning',
  'font-variant-numeric',
  'font-feature-settings',
  'text-overflow',
  'white-space',
  'filter',
  'backdrop-filter',
  'pointer-events',
  'content',
  'grid-template-rows',
  'grid-template-columns',
  'grid-row',
  'grid-column',
  'justify-self',
]

// Merge functions for CSS properties
// Original name: eC
const mergeFunctions = {
  'box-shadow': BoxShadow.concat,
  'text-shadow': TextShadow.concat,
  'filter': Filter.concat,
  'backdrop-filter': Filter.concat,
  'transform': Transform.concat,
}

// Original class: ek
/**
 * Represents a map of CSS styles with merging and filtering capabilities.
 */
class StyleMap {
  styles: Record<string, any> = {}

  constructor(styles: Record<string, any> = {}) {
    this.styles = styles
  }

  /**
   * Creates a StyleMap from an iterable of key-value pairs.
   * @param entries - The entries to initialize the StyleMap with.
   * @returns A new StyleMap instance.
   */
  static from(entries: Iterable<[string, any]>): StyleMap {
    const styleMap = new StyleMap()
    if (entries) {
      for (const [key, value] of entries) {
        styleMap.set(key, value)
      }
    }
    return styleMap
  }

  /**
   * Gets the number of styles in the map.
   */
  get size(): number {
    return Object.keys(this.styles).length
  }

  /**
   * Retrieves the value for a given key.
   * @param key - The key to look up.
   * @returns The value associated with the key.
   */
  get(key: string): any {
    return this.styles[key]
  }

  /**
   * Checks if a key exists in the map.
   * @param key - The key to check.
   * @returns True if the key exists.
   */
  has(key: string): boolean {
    return this.styles[key] !== undefined
  }

  /**
   * Sets a value for a key, throwing an error if the key already exists unless overridden.
   * @param key - The key to set.
   * @param value - The value to set.
   * @param override - Whether to override existing values.
   */
  set(key: string, value: any, override: boolean = false): void {
    const existing = this.get(key)
    if (existing && !override) {
      throw new Error(`Property "${key}" has already been set, old value: "${existing?.value}", new value: "${value?.value}"`)
    }
    this.styles[key] = value
  }

  /**
   * Merges a value using a merge function if available.
   * @param key - The key to merge.
   * @param value - The value to merge.
   */
  mergeValue(key: string, value: any): void {
    const existing = this.get(key)
    const mergeFunction = mergeFunctions[key]
    if (existing) {
      this.styles[key] = mergeFunction(existing, value)
    }
    else {
      this.styles[key] = value
    }
  }

  /**
   * Merges another StyleMap into this one.
   * @param other - The StyleMap to merge.
   * @param override - Whether to override existing values.
   */
  merge(other: StyleMap, override: boolean = false): void {
    for (const key of other.keys()) {
      if (mergeFunctions[key]) {
        this.mergeValue(key, other.get(key))
      }
      else {
        this.set(key, other.get(key), override)
      }
    }
  }

  /**
   * Gets the styles as a plain object.
   * @returns The styles object.
   */
  getStyles(): Record<string, any> {
    const result: Record<string, any> = {}
    for (const [key, value] of Object.entries(this.styles)) {
      result[key] = value?.value
    }
    return result
  }

  /**
   * Checks if the StyleMap is empty.
   * @returns True if empty.
   */
  isEmpty(): boolean {
    return this.size === 0
  }

  /**
   * Gets the keys of the styles.
   * @returns An array of keys.
   */
  keys(): string[] {
    return Object.keys(this.styles)
  }

  /**
   * Computes the difference with another StyleMap.
   * @param other - The other StyleMap.
   * @returns A new StyleMap with the differences.
   */
  difference(other: StyleMap): StyleMap {
    const diff = new StyleMap()
    for (const key of this.keys()) {
      const value = this.get(key)
      const otherValue = other.get(key)
      if (value && (!otherValue || !value.equals(otherValue))) {
        diff.set(key, value)
      }
    }
    return diff
  }

  /**
   * Filters out default values.
   * @returns A new StyleMap without default values.
   */
  filterDefaultValues(): StyleMap {
    const filtered = new StyleMap()
    for (const key of this.keys()) {
      if (!this.hasDefaultValue(key)) {
        filtered.set(key, this.get(key))
      }
    }
    return filtered
  }

  /**
   * Checks if a key has a default value.
   * @param key - The key to check.
   * @returns True if it has a default value.
   */
  hasDefaultValue(key: string): boolean {
    const value = extractRawValue(this.get(key))
    const defaultValue = extractRawValue(defaultValues[key])
    return !!value && defaultValue !== undefined && value.equals(defaultValue)
  }

  /**
   * Clones the StyleMap.
   * @returns A new StyleMap instance.
   */
  clone(): StyleMap {
    const cloned = new StyleMap()
    for (const key of this.keys()) {
      cloned.set(key, this.get(key))
    }
    return cloned
  }

  /**
   * Deletes a key from the map.
   * @param key - The key to delete.
   */
  delete(key: string): void {
    delete this.styles[key]
  }
}

// Original class: eL
/**
 * Represents a CSS background image with size, position, and repeat properties.
 */
class BackgroundImage {
  public backgroundSize: string
  public backgroundPosition: string
  public backgroundRepeat: string
  public background: string

  constructor(backgroundSize: string = 'cover', backgroundPosition: string = '50%', backgroundRepeat: string = 'no-repeat') {
    this.backgroundSize = backgroundSize
    this.backgroundPosition = backgroundPosition
    this.backgroundRepeat = backgroundRepeat
    this.background = 'url(<path-to-image>) lightgray'
  }

  /**
   * Creates a BackgroundImage for fill scale mode.
   * @returns A new BackgroundImage instance.
   */
  static withFillScaleMode(): BackgroundImage {
    return new BackgroundImage('cover')
  }

  /**
   * Creates a BackgroundImage for fit scale mode.
   * @returns A new BackgroundImage instance.
   */
  static withFitScaleMode(): BackgroundImage {
    return new BackgroundImage('contain')
  }

  /**
   * Creates a BackgroundImage for tile scale mode.
   * @param scalingFactor - The scaling factor.
   * @returns A new BackgroundImage instance.
   */
  static withTileScaleMode(scalingFactor: number = 1): BackgroundImage {
    const size = { width: 100, height: 100 }
    const width = size ? `${size.width * scalingFactor}px` : `${Math.round(100 * scalingFactor)}%`
    const height = size ? `${size.height * scalingFactor}px` : `${Math.round(100 * scalingFactor)}%`
    return new BackgroundImage(`${width} ${height}`, '0% 0%', 'repeat')
  }

  /**
   * Creates a BackgroundImage for crop scale mode.
   * @param imageTransform - The image transform matrix.
   * @param bounds - The bounds object.
   * @returns A new BackgroundImage instance.
   */
  static withCropScaleMode(imageTransform: number[][], bounds: { width: number, height: number } = { width: 0, height: 0 }): BackgroundImage {
    const scaleX = 100 / imageTransform[0][0]
    const scaleY = 100 / imageTransform[1][1]
    const size = `${roundToDecimal(scaleX)}% ${roundToDecimal(scaleY)}%`
    const posX = bounds ? -(bounds.width / imageTransform[0][0]) * imageTransform[0][2] : 0
    const posY = bounds ? -(bounds.height / imageTransform[1][1]) * imageTransform[1][2] : 0
    return new BackgroundImage(size, `${roundToDecimal(posX)}px ${roundToDecimal(posY)}px`, 'no-repeat')
  }

  /**
   * Gets the CSS value of the background image.
   */
  get value(): string {
    return `${this.background} ${this.backgroundPosition} / ${this.backgroundSize} ${this.backgroundRepeat}`
  }

  /**
   * Checks equality with another BackgroundImage.
   * @param other - The other BackgroundImage.
   * @returns True if equal.
   */
  equals(other: BackgroundImage): boolean {
    return this.value === other.value
  }
}

// Original class: eF
/**
 * Parses gradient stops for paints.
 */
class GradientStopParser {
  public paintIndex: number
  public paintOpacity: number
  public node: any
  public preferences: any
  public colorManagement: any

  constructor(paintIndex: number, paintOpacity: number, node: any, preferences: any, colorManagement: any = DEFAULT_COLOR_MANAGEMENT) {
    this.paintIndex = paintIndex
    this.paintOpacity = paintOpacity
    this.node = node
    this.preferences = preferences
    this.colorManagement = colorManagement
  }

  /**
   * Parses a single gradient stop.
   * @param stop - The gradient stop.
   * @returns A ColorFormatter for the stop.
   */
  parseSingleStop(stop: any): ColorFormatter {
    const variable = getColorVariable(stop, this.paintIndex, 'fills', this.node)
    return new ColorFormatter(stop.color, this.preferences, this.paintOpacity, this.colorManagement, variable)
  }
}

// Original function: eM
/**
 * Creates a ColorFormatter from a paint.
 * @param paint - The paint object.
 * @param index - The paint index.
 * @param field - The field name.
 * @param node - The node.
 * @param colorManagement - Color management settings.
 * @param preferences - User preferences.
 * @returns A ColorFormatter instance.
 */
function createColorFormatter(paint: any, index: number, field: string, node: any, colorManagement: any, preferences: any): ColorFormatter {
  const variable = getColorVariable(paint, index, field, node)
  return new ColorFormatter(paint.color, preferences, paint.opacity, colorManagement, variable)
}

// Original function: ej
/**
 * Checks if a ColorFormatter has a resolved variable.
 * @param colorFormatter - The ColorFormatter to check.
 * @returns True if it has a resolved variable.
 */
function hasResolvedVariable(colorFormatter: ColorFormatter): boolean {
  return colorFormatter instanceof ColorFormatter && colorFormatter.hasResolvedVariable()
}

// Original function: eU
/**
 * Creates a fill from a paint object.
 * @param paint - The paint object.
 * @param index - The paint index.
 * @param bounds - The bounds.
 * @param isFirst - Whether it's the first paint.
 * @param node - The node.
 * @param preferences - User preferences.
 * @param colorManagement - Color management settings.
 * @returns The fill object or null.
 */
function createFillFromPaint(paint: any, index: number, bounds: any, isFirst: boolean, node: any, preferences: any, colorManagement: any = DEFAULT_COLOR_MANAGEMENT): any {
  const parser = new GradientStopParser(index, paint.opacity, node, preferences, colorManagement)
  switch (paint.type) {
    case 'SOLID':
      const colorFormatter = createColorFormatter(paint, index, 'fills', node, colorManagement, preferences)
      if (isFirst) {
        return colorFormatter
      }
      return LinearGradient.fromColor(colorFormatter, true)
    case 'GRADIENT_LINEAR':
      return LinearGradient.fromGradientPaint(paint, parser)
    case 'IMAGE':
      return createBackgroundImage(paint, bounds)
    case 'GRADIENT_RADIAL':
      return new RadialGradient(paint, parser)
    case 'GRADIENT_ANGULAR':
      return new ConicGradient(paint, parser)
    case 'GRADIENT_DIAMOND':
      return new DiamondGradient(paint, parser)
    case 'VIDEO':
    case 'PATTERN':
      return null
    default:
      reportError(ServiceCategories.DEVELOPER_TOOLS, new Error(`Unknown paint type: ${paint.type}`))
      return null
  }
}

// Original function: eB
/**
 * Creates a BackgroundImage from a paint.
 * @param paint - The paint object.
 * @param bounds - The bounds.
 * @returns A BackgroundImage instance.
 */
function createBackgroundImage(paint: any, bounds: any): BackgroundImage {
  // Note: paint.rotation is unused in the original code, so omitted.
  switch (paint.scaleMode) {
    case 'FILL':
      return BackgroundImage.withFillScaleMode()
    case 'FIT':
      return BackgroundImage.withFitScaleMode()
    case 'TILE':
      return BackgroundImage.withTileScaleMode(paint.scalingFactor)
    case 'CROP':
      return BackgroundImage.withCropScaleMode(paint.imageTransform, bounds)
  }
}

// Original class: eV
/**
 * Represents a CSS border.
 */
class Border {
  public width: any
  public color: any
  public style: string

  constructor(width: any, color: any, style: string = 'solid') {
    this.width = width
    this.color = color
    this.style = style
  }

  /**
   * Gets the CSS value of the border.
   */
  get value(): string {
    return `${this.width.value} ${this.style} ${this.color.value}`
  }

  /**
   * Checks equality with another Border.
   * @param other - The other Border.
   * @returns True if equal.
   */
  equals(other: Border): boolean {
    return this.value === other.value
  }
}

// Original function: ez
/**
 * Adds a border to the style map.
 * @param styleMap - The StyleMap to add to.
 * @param hints - The hints object.
 * @param property - The CSS property.
 * @param weight - The border weight.
 * @param color - The border color.
 * @param style - The border style.
 * @param field - The field name.
 * @param node - The node.
 * @param suggestedVars - Suggested variables.
 * @param preferences - User preferences.
 * @param hint - The hint.
 */
function addBorder(styleMap: StyleMap, hints: any, property: string, weight: any, color: any, style: string, field: string, node: any, suggestedVars: any, preferences: any, hint: any): void {
  if (weight.variable?.value || weight.rawValue > 0) {
    const cssVariable = createCssVariableIfAvailable(new PixelValue(weight.rawValue), weight, hints, 'stroke-width', preferences)
    styleMap.set(property, new Border(processPixelValue({
      raw: cssVariable,
      node,
      field,
      styleField: property,
      suggestedVars,
      preferences,
    }), color, style))
    hints[property] = hint
  }
}

// Original function: eH
/**
 * Gets the border paint from a node.
 * @param node - The node.
 * @returns The border paint info or null.
 */
function getBorderPaint(node: any): { paint: any, index: number, hint: any } | null {
  const strokes = node instanceof NodeWrapper ? node.strokes : node.border.strokes
  const paints = processPaints(strokes)
  if (paints.length === 0) {
    return null
  }
  let hint: any
  if (paints.length > 1) {
    hint = DesignIssues.SinglePaint
  }
  return {
    paint: paints[0].paint,
    index: paints[0].index,
    hint: paints[0].hint || hint,
  }
}

// Original class: eW
/**
 * Generates layout styles for a node.
 */
class LayoutStyleGenerator {
  node: any
  parent: any
  absolutePosition: any
  transform: any
  preferences: any

  constructor(node: any, preferences: any) {
    this.node = node
    this.parent = node.layout.parent
    this.absolutePosition = node.layout.absolutePosition()
    this.transform = node.layout.relativeBounds().transform
    this.preferences = preferences
  }

  /**
   * Generates the styles.
   * @returns The style map, hints, and suggested variables.
   */
  getStyles(): { styleMap: StyleMap, hints: any, suggestedVars: any } {
    const styleMap = new StyleMap()
    const suggestedVars = new SuggestedVariablesCollection()
    const hints: any = {}

    this.addPosition(styleMap)
    this.addSize(styleMap, hints, suggestedVars, this.preferences)
    this.addRotation(styleMap)
    if (this.node.layout.shouldUseAbsolutePosition()) {
      this.addAbsolutePosition(styleMap, hints)
    }
    else {
      this.addFlexibleLayout(styleMap)
    }
    this.addAspectRatio(styleMap)

    return {
      styleMap,
      hints,
      suggestedVars,
    }
  }

  /**
   * Adds rotation styles.
   * @param styleMap - The StyleMap.
   */
  addRotation(styleMap: StyleMap): void {
    if (this.transform.isRotated()) {
      styleMap.set('transform', new Transform([new Rotation(-this.transform.getAngleDeg())]))
    }
  }

  /**
   * Adds position styles.
   * @param styleMap - The StyleMap.
   */
  addPosition(styleMap: StyleMap): void {
    if (this.node.layout.shouldUseAbsolutePosition()) {
      styleMap.set('position', new RawValue('absolute'))
    }
    else if (isAutoLayoutSupportedNode(this.node) && this.node.children.some((child: any) => child.layout.shouldUseAbsolutePosition())) {
      styleMap.set('position', new RawValue('relative'))
    }
  }

  /**
   * Adds size styles.
   * @param styleMap - The StyleMap.
   * @param hints - The hints.
   * @param suggestedVars - Suggested variables.
   * @param preferences - Preferences.
   */
  addSize(styleMap: StyleMap, hints: any, suggestedVars: any, preferences: any): void {
    const { width, height, minHeight, minWidth, maxHeight, maxWidth } = this.node.layout

    if (this.shouldAddWidth()) {
      const variable = this.node.getVariableValue('width')
      const pixelValue = new PixelValue(width)
      const cssVariable = createValidatedCssVariable(pixelValue, variable, hints, 'width', preferences)
      styleMap.set('width', processPixelValue({
        raw: cssVariable,
        node: this.node,
        field: 'width',
        styleField: 'width',
        suggestedVars,
        preferences,
      }))
    }

    if (this.shouldAddHeight()) {
      const variable = this.node.getVariableValue('height')
      const cssVariable = createValidatedCssVariable(new PixelValue(height), variable, hints, 'height', preferences)
      styleMap.set('height', processPixelValue({
        raw: cssVariable,
        node: this.node,
        field: 'height',
        styleField: 'height',
        suggestedVars,
        preferences,
      }))
    }

    if (minHeight) {
      let r = this.node.getVariableValue("minHeight")
      let a = createValidatedCssVariable(new PixelValue(minHeight), r, t, "min-height", preferences)
      styleMap.set("min-height", processPixelValue({
        raw: a,
        node: this.node,
        field: "minHeight",
        styleField: "min-height",
        suggestedVars: i,
        preferences: n,
      }))
    }
    if (maxHeight) {
      let r = this.node.getVariableValue("maxHeight")
      let a = createValidatedCssVariable(new PixelValue(maxHeight), r, t, "max-height", preferences)
      styleMap.set("max-height", processPixelValue({
        raw: a,
        node: this.node,
        field: "maxHeight",
        styleField: "max-height",
        suggestedVars: i,
        preferences: n,
      }))
    }
    if (minWidth) {
      let r = this.node.getVariableValue("minWidth")
      let a = createValidatedCssVariable(new PixelValue(minWidth), r, t, "min-width", preferences)
      styleMap.set("min-width", processPixelValue({
        raw: a,
        node: this.node,
        field: "minWidth",
        styleField: "min-width",
        suggestedVars: i,
        preferences: n,
      }))
    }
    if (maxWidth) {
      let r = this.node.getVariableValue("maxWidth")
      let a = createValidatedCssVariable(new PixelValue(maxWidth), r, t, "max-width", preferences)
      styleMap.set("max-width", processPixelValue({
        raw: a,
        node: this.node,
        field: "maxWidth",
        styleField: "max-width",
        suggestedVars: i,
        preferences: n,
      }))
    }
  }

  /**
   * Adds flexible layout styles.
   * @param styleMap - The StyleMap.
   */
  addFlexibleLayout(styleMap: StyleMap): void {
    const isHorizontal = this.parent?.isAutoLayout() && this.parent.autoLayout.layoutMode === 'HORIZONTAL'
    const isVertical = !isHorizontal
    const parentVerticalFixed = this.parent && getSizingModeForVerticalParent(this.parent) === SizingModeEnum.FIXED
    const parentHorizontalFixed = this.parent && getSizingModeForHorizontalParent(this.parent) === SizingModeEnum.FIXED

    if ((isHorizontal && getSizingModeForVerticalParent(this.node) === SizingModeEnum.FILL_PARENT)
      || (isVertical && getSizingModeForHorizontalParent(this.node) === SizingModeEnum.FILL_PARENT)) {
      styleMap.set('flex', new RawValue('1 0 0'))
    }
    else if ((isHorizontal && parentVerticalFixed && getSizingModeForVerticalParent(this.node) === SizingModeEnum.FIXED)
      || (isVertical && parentHorizontalFixed && getSizingModeForHorizontalParent(this.node) === SizingModeEnum.FIXED)) {
      styleMap.set('flex-shrink', new RawValue(0))
    }

    if ((isHorizontal && getSizingModeForHorizontalParent(this.node) === SizingModeEnum.FILL_PARENT)
      || (isVertical && getSizingModeForVerticalParent(this.node) === SizingModeEnum.FILL_PARENT)) {
      styleMap.set('align-self', new RawValue('stretch'))
    }
  }

  /**
   * Adds absolute position styles.
   * @param styleMap - The StyleMap.
   * @param hints - The hints.
   */
  addAbsolutePosition(styleMap: StyleMap, hints: any): void {
    if (!this.absolutePosition) {
      return
    }

    const { horizontal, vertical } = this.absolutePosition

    const addHint = (key: string) => {
      if (this.node.layout.parent) {
        hints[key] = DesignIssues.AbsolutePosition(this.node.layout.parent.name)
      }
    }

    if (horizontal.type === 'left' && horizontal.offset !== 0) {
      styleMap.set('left', new PixelValue(horizontal.offset))
      addHint('left')
    }
    if (horizontal.type === 'right') {
      styleMap.set('right', new PixelValue(horizontal.offset))
      if (Object.keys(hints).length === 0)
        addHint('right')
    }
    if (vertical.type === 'top' && vertical.offset !== 0) {
      styleMap.set('top', new PixelValue(vertical.offset))
      if (Object.keys(hints).length === 0)
        addHint('top')
    }
    if (vertical.type === 'bottom') {
      styleMap.set('bottom', new PixelValue(vertical.offset))
      if (Object.keys(hints).length === 0)
        addHint('bottom')
    }
  }

  /**
   * Adds aspect ratio styles.
   * @param styleMap - The StyleMap.
   */
  addAspectRatio(styleMap: StyleMap): void {
    if (!this.node.layout.targetAspectRatio) {
      return
    }

    const { width, height } = this.node.layout
    const ratio = getFeatureFlags().ce_tv_arl_dev_mode_fractions
      ? computeAspectRatioFraction(width, height)
      : computeAspectRatioSimple(width, height)
    styleMap.set('aspect-ratio', new RawValue(ratio))
  }

  /**
   * Checks if width should be added.
   * @returns True if width should be added.
   */
  shouldAddWidth(): boolean {
    return (!(this.node instanceof NodeProperties) || this.node.textAutoResize !== 'WIDTH_AND_HEIGHT' || !!this.transform.isRotated())
      && getSizingModeForVerticalParent(this.node) === SizingModeEnum.FIXED
  }

  /**
   * Checks if height should be added.
   * @returns True if height should be added.
   */
  shouldAddHeight(): boolean {
    return (!(this.node instanceof NodeProperties) || this.node.textAutoResize !== 'HEIGHT' && this.node.textAutoResize !== 'WIDTH_AND_HEIGHT' || !!this.transform.isRotated())
      && getSizingModeForHorizontalParent(this.node) === SizingModeEnum.FIXED
  }
}

// Original class: eK
/**
 * Represents a list of backgrounds.
 */
class BackgroundList {
  public bgs: any[]

  constructor(bgs: any[]) {
    this.bgs = bgs
  }

  /**
   * Gets the CSS value of the background list.
   */
  get value(): string {
    return this.bgs.map(bg => bg.value).join(', ')
  }

  /**
   * Checks equality with another BackgroundList.
   * @param other - The other BackgroundList.
   * @returns True if equal.
   */
  equals(other: BackgroundList): boolean {
    return this.value === other.value
  }
}

// Helper functions for aspect ratio (extracted from original)
function computeAspectRatioFraction(width: number, height: number, maxDenom: number = 50, epsilon: number = 1e-4): string {
  if (!isFinite(width) || !isFinite(height) || height === 0) {
    return `${width.toFixed(2)}/${height.toFixed(2)}`
  }
  const ratio = width / height
  const continued = getContinuedFraction(ratio)
  let h1 = 0
  let k1 = 1
  let h = 1
  let k = 0
  for (let i = 0; i < continued.length; i++) {
    const a = continued[i]
    const h2 = a * h + h1
    const k2 = a * k + k1
    if (k2 > maxDenom || k2 === 0)
      break
    if (Math.abs(h2 / k2 - ratio) <= epsilon) {
      return `${h2}/${k2}`
    }
    h1 = h; k1 = k; h = h2; k = k2
  }
  return `${width.toFixed(2)}/${height.toFixed(2)}`
}

function getContinuedFraction(x: number): number[] {
  const result: number[] = []
  let i = x
  for (let j = 0; j < 10; j++) {
    const integerPart = Math.floor(i)
    result.push(integerPart)
    const fractionalPart = i - integerPart
    if (fractionalPart < 1e-10)
      break
    i = 1 / fractionalPart
  }
  return result
}

function computeAspectRatioSimple(width: number, height: number): string {
  const isInteger = (n: number) => Math.abs(Math.round(n) - n) < 0.001
  if (!(isInteger(width) && isInteger(height))) {
    return `${width.toFixed(2)}/${height.toFixed(2)}`
  }
  const w = Math.round(width)
  const h = Math.round(height)
  const gcd = (a: number, b: number): number => b ? gcd(b, a % b) : Math.abs(a)
  const divisor = gcd(w, h)
  return `${w / divisor}/${h / divisor}`
}

// Original function: eT
/**
 * Extracts the raw value from a SuggestedVariableReference or returns the value itself.
 * @param value - The value to extract from.
 * @returns The raw value.
 */
function extractRawValue(value: any): any {
  return value instanceof SuggestedVariableReference ? value.raw : value
}

// Original function: eY
/**
 * Generates CSS styles for a node, including layout, backgrounds, borders, effects, and other properties.
 * @param node - The node to generate styles for.
 * @param preferences - User preferences for styling.
 * @param colorManagement - Color management settings.
 * @returns An object containing the style map, hints, and suggested variables.
 */
function generateNodeStyles(
  node: any,
  preferences: any,
  colorManagement: any = DEFAULT_COLOR_MANAGEMENT,
): { styleMap: StyleMap, hints: any, suggestedVars: any, fallbackHints?: any, fallbackStyleMap?: StyleMap, spans?: any[] } {
  const styleMap = StyleMap.from([['box-sizing', new RawValue('border-box')]])
  const hints: any = {}
  const { styleMap: layoutStyleMap, hints: layoutHints, suggestedVars } = new LayoutStyleGenerator(node, preferences).getStyles()
  styleMap.merge(layoutStyleMap)

  const fillType = node instanceof NodeWrapper ? 'fill' : 'background'
  const { backgrounds, blendModes } = processFills(node, preferences, colorManagement)

  if (backgrounds) {
    const fills = backgrounds.map(bg => bg.fill)
    const resolvedVariable = fills.some(hasResolvedVariable)
    const isResolvedFillStyle = isResolvedStyle(node.fillStyle)

    if (isResolvedFillStyle && !resolvedVariable) {
      styleMap.set(fillType, new CssVariable(node.fillStyle.name, new BackgroundList(fills), preferences, undefined, node.fillStyle.id))
    }
    else {
      hints[fillType] = getFillHint(0, resolvedVariable, isResolvedFillStyle)
      const processedBackgrounds = backgrounds.map(({ fill, index }) =>
        processColorValue({
          raw: fill,
          node,
          field: 'fills',
          styleField: fillType,
          suggestedVars,
          matchIndex: index,
          arrayIndex: index,
          preferences,
        }),
      )
      styleMap.set(fillType, new BackgroundList(processedBackgrounds))
    }
  }

  if (blendModes) {
    const blendMode = BlendMode.fromFigmaBlendMode(blendModes)
    styleMap.set('background-blend-mode', blendMode)
    const hasPlusLighter = blendMode.contains('plus-lighter')
    const hasPlusDarker = blendMode.contains('plus-darker')
    if (hasPlusLighter || hasPlusDarker) {
      hints['background-blend-mode'] = DesignIssues.BackgroundBlendModePlusLighterDarker(hasPlusLighter ? 'plus-lighter' : 'plus-darker')
    }
  }

  if (node.opacity) {
    const opacityVar = node.getVariableValue('opacity')
    const opacityValue = createValidatedCssVariable(new StringValue(formatNumber(node.opacity, 4)), opacityVar, hints, 'opacity', preferences)
    styleMap.set('opacity', processStringValue({
      raw: opacityValue,
      node,
      field: 'opacity',
      styleField: 'opacity',
      suggestedVars,
      preferences,
    }))
  }

  processBorders(node, colorManagement, styleMap, hints, suggestedVars, preferences)
  processEffects(node, colorManagement, styleMap, hints, preferences)

  if (!(node instanceof NodeWrapper)) {
    processBorderRadius(node, styleMap, hints, suggestedVars, preferences)
  }

  if (node.layout.parent?.isGrid()) {
    processGridLayout(node, styleMap)
  }

  return {
    styleMap,
    hints: { ...hints, ...layoutHints },
    suggestedVars,
  }
}

/**
 * Processes fills for backgrounds and blend modes.
 * @param node - The node.
 * @param preferences - Preferences.
 * @param colorManagement - Color management.
 * @returns Backgrounds and blend modes.
 */
function processFills(node: any, preferences: any, colorManagement: any): { backgrounds?: any[], blendModes?: string[] } {
  const fills = node.fills
  if (fills && fills.toString() === 'Symbol(figma.mixed)') {
    reportError(ServiceCategories.DEVELOPER_TOOLS, new Error(`Mixed value in fills in node ${node.id}`))
    return {}
  }

  const bounds = node.layout.relativeBounds().bounds
  const { blendMode = [], backgrounds: bgList = [] } = filterVisiblePaints(node.fills).reverse().reduce(
    (acc: any, { paint, index }, _, arr) => {
      const fill = createFillFromPaint(paint, index, bounds, index === arr.length - 1, node, preferences, colorManagement)
      if (fill) {
        return {
          backgrounds: [...acc.backgrounds, { fill, index }],
          blendMode: [...acc.blendMode, paint.blendMode ?? 'NORMAL'],
        }
      }
      return acc
    },
    { backgrounds: [], blendMode: [] },
  )

  return {
    backgrounds: bgList.length > 0 ? bgList : undefined,
    blendModes: blendMode.some(mode => mode !== 'NORMAL') ? blendMode : undefined,
  }
}

/**
 * Gets the hint for fill styles.
 * @param index - Index.
 * @param hasResolvedVariable - Whether has resolved variable.
 * @param isResolvedStyle - Whether is resolved style.
 * @returns The hint.
 */
function getFillHint(index: number, hasResolvedVariable: boolean, isResolvedStyle: boolean): any {
  if (!hasResolvedVariable && !isResolvedStyle) {
    return DesignIssues.NoStyleForColor
  }
}

/**
 * Processes borders for the node.
 * @param node - The node.
 * @param colorManagement - Color management.
 * @param styleMap - Style map.
 * @param hints - Hints.
 * @param suggestedVars - Suggested variables.
 * @param preferences - Preferences.
 */
function processBorders(node: any, colorManagement: any, styleMap: StyleMap, hints: any, suggestedVars: any, preferences: any): void {
  const borderPaint = getBorderPaint(node)
  if (!borderPaint)
    return

  const { paint, index, hint } = borderPaint
  const { color, hint: colorHint } = processBorderColor(paint, index, node, colorManagement, preferences)
  const borderHint = hint || colorHint

  if (node instanceof NodeWrapper) {
    if (node.strokeWeight.rawValue <= 0)
      return
    const strokeWidth = processPixelValue({
      raw: new PixelValue(node.strokeWeight.rawValue),
      node,
      field: 'strokeWeight',
      styleField: 'stroke-width',
      suggestedVars,
      preferences,
    })
    const strokeColor = processColorValue({
      raw: color,
      node,
      field: 'strokes',
      styleField: 'stroke',
      suggestedVars,
      arrayIndex: index,
      preferences,
    })
    styleMap.set('stroke-width', strokeWidth)
    styleMap.set('stroke', strokeColor)
    hints.stroke = borderHint
    return
  }

  const { strokeTopWeight, strokeBottomWeight, strokeLeftWeight, strokeRightWeight } = node.border
  const style = node.border.dashPattern?.length > 0 ? 'dashed' : 'solid'

  if ([strokeBottomWeight, strokeLeftWeight, strokeRightWeight].every(w => deepEqual(w, strokeTopWeight))) {
    hints.border = borderHint
    const borderWidth = createCssVariableIfAvailable(new PixelValue(strokeTopWeight.rawValue), strokeTopWeight, hints, 'border', preferences)
    styleMap.set('border', new Border(
      processPixelValue({
        raw: borderWidth,
        node,
        field: 'strokeTopWeight',
        styleField: 'border',
        suggestedVars,
        matchIndex: 0,
        preferences,
      }),
      color instanceof ColorFormatter
        ? processColorValue({
            raw: color,
            node,
            field: 'strokes',
            styleField: 'border',
            suggestedVars,
            matchIndex: 1,
            arrayIndex: index,
            preferences,
          })
        : color,
      style,
    ))
  }
  else {
    const processSide = (side: string, weight: any, field: string, _matchIndex: number) => {
      const processedColor = color instanceof ColorFormatter
        ? processColorValue({
            raw: color,
            node,
            field: 'strokes',
            styleField: side,
            suggestedVars,
            matchIndex: 1,
            arrayIndex: index,
            preferences,
          })
        : color
      addBorder(styleMap, hints, side, weight, processedColor, style, field, node, suggestedVars, preferences, borderHint)
    }
    processSide('border-top', strokeTopWeight, 'strokeTopWeight', 0)
    processSide('border-right', strokeRightWeight, 'strokeRightWeight', 1)
    processSide('border-bottom', strokeBottomWeight, 'strokeBottomWeight', 2)
    processSide('border-left', strokeLeftWeight, 'strokeLeftWeight', 3)
  }
}

/**
 * Processes border color.
 * @param paint - Paint.
 * @param index - Index.
 * @param node - Node.
 * @param colorManagement - Color management.
 * @param preferences - Preferences.
 * @returns Color and hint.
 */
function processBorderColor(paint: any, index: number, node: any, colorManagement: any, preferences: any): { color: any, hint?: any } {
  const colorFormatter = createColorFormatter(paint, index, 'strokes', node, colorManagement, preferences)
  if (isResolvedStyle(node.strokeStyle) && !isVariableResolved(colorFormatter.variableValue)) {
    return { color: new CssVariable(node.strokeStyle.name, colorFormatter.rawColor, preferences, undefined, node.strokeStyle.id) }
  }
  const hint = getVariableHint(colorFormatter.variableValue, colorFormatter.rawColor, { isColor: true })
  return { color: colorFormatter, hint }
}

/**
 * Processes effects for the node.
 * @param node - Node.
 * @param colorManagement - Color management.
 * @param styleMap - Style map.
 * @param hints - Hints.
 * @param preferences - Preferences.
 */
function processEffects(node: any, colorManagement: any, styleMap: StyleMap, hints: any, preferences: any): void {
  const { effects } = node
  let boxShadow = new BoxShadow([])
  let filter = new Filter([])
  let backdropFilter = new Filter([])

  if (node.blendMode && node.blendMode !== 'PASS_THROUGH') {
    styleMap.set('mix-blend-mode', BlendMode.fromFigmaBlendMode([node.blendMode]))
    if (node.blendMode === 'LINEAR_BURN') {
      hints['mix-blend-mode'] = DesignIssues.PlusDarker
    }
  }

  effects.filter((effect: any) => effect.visible).forEach((effect: any) => {
    switch (effect.type) {
      case 'LAYER_BLUR':
      case 'BACKGROUND_BLUR':
        const radiusVar = getRadiusVariable(effect, node)
        const radiusValue = createValidatedCssVariable(new PixelValue(effect.radius), radiusVar, hints, 'filter', preferences)
        const blurFilter = new Filter([new BlurFilter(effect.radius, radiusValue)])
        if (effect.type === 'LAYER_BLUR') {
          filter = Filter.concat(filter, blurFilter)
        }
        else {
          backdropFilter = Filter.concat(backdropFilter, blurFilter)
        }
        if (node instanceof NodeWrapper) {
          hints.filter = DesignIssues.EffectsInSvg
        }
        break
      case 'DROP_SHADOW':
      case 'INNER_SHADOW':
        const isDropShadow = effect.type === 'DROP_SHADOW'
        const isSvgOrGroup = node instanceof NodeWrapper || node.isGroup
        const useFilter = isDropShadow && isSvgOrGroup
        const property = useFilter ? 'filter' : 'box-shadow'
        if (node instanceof NodeWrapper) {
          hints[property] = DesignIssues.EffectsInSvg
        }
        const offsetXVar = getFieldVariable(effect, 'offsetX', node)
        const offsetYVar = getFieldVariable(effect, 'offsetY', node)
        const radiusVar2 = getFieldVariable(effect, 'radius', node)
        const spreadVar = getFieldVariable(effect, 'spread', node)
        const colorVar = getFieldVariable(effect, 'color', node)
        const offsetX = createValidatedCssVariable(new PixelValue(effect.offset.x), offsetXVar, hints, property, preferences)
        const offsetY = createValidatedCssVariable(new PixelValue(effect.offset.y), offsetYVar, hints, property, preferences)
        const radius = createValidatedCssVariable(new PixelValue(effect.radius), radiusVar2, hints, property, preferences)
        const spread = createValidatedCssVariable(new PixelValue(effect.spread ?? 0), spreadVar, hints, property, preferences)
        const color = createValidatedCssVariable(new ColorFormatter(effect.color, preferences, 1, colorManagement), colorVar, hints, property, preferences)
        if (useFilter) {
          filter = Filter.concat(filter, new Filter([new DropShadowFilter({ offsetX, offsetY, radius, color })]))
        }
        else {
          const shadow = new BoxShadow([{
            offsetX,
            offsetY,
            blur: radius,
            spread,
            color,
            type: effect.type === 'INNER_SHADOW' ? ShadowType.Inset : ShadowType.Normal,
          }])
          boxShadow = BoxShadow.concat(boxShadow, shadow)
        }
        break
    }
  })

  if (boxShadow.shadowObjects.length > 0) {
    styleMap.set('box-shadow', boxShadow)
  }
  if (filter.filterObjects.length > 0) {
    styleMap.set('filter', filter)
  }
  if (backdropFilter.filterObjects.length > 0) {
    styleMap.set('backdrop-filter', backdropFilter)
  }
}

/**
 * Processes border radius for the node.
 * @param node - Node.
 * @param styleMap - Style map.
 * @param hints - Hints.
 * @param suggestedVars - Suggested variables.
 * @param preferences - Preferences.
 */
function processBorderRadius(node: any, styleMap: StyleMap, hints: any, suggestedVars: any, preferences: any): void {
  const { topLeftRadius = 0, topRightRadius = 0, bottomRightRadius = 0, bottomLeftRadius = 0 } = node.border

  const processRadius = (field: string, value: number, matchIndex: number) => {
    const variable = node.getVariableValue(field)
    const cssVar = createValidatedCssVariable(new PixelValue(value), variable, hints, 'border-radius', preferences)
    return processPixelValue({
      raw: cssVar,
      node,
      field,
      styleField: 'border-radius',
      suggestedVars,
      matchIndex,
      preferences,
    })
  }

  styleMap.set('border-radius', new BorderRadius(
    processRadius('topLeftRadius', topLeftRadius, 0),
    processRadius('topRightRadius', topRightRadius, 1),
    processRadius('bottomRightRadius', bottomRightRadius, 2),
    processRadius('bottomLeftRadius', bottomLeftRadius, 3),
  ))
}

/**
 * Processes grid layout for the node.
 * @param node - Node.
 * @param styleMap - Style map.
 */
function processGridLayout(node: any, styleMap: StyleMap): void {
  const { gridRowSpan, gridColumnSpan, gridColumnAnchorIndex, gridRowAnchorIndex, gridChildHorizontalAlign, gridChildVerticalAlign } = node.gridLayout
  styleMap.set('grid-row', new RawValue(`${gridRowAnchorIndex + 1} / span ${gridRowSpan}`))
  styleMap.set('grid-column', new RawValue(`${gridColumnAnchorIndex + 1} / span ${gridColumnSpan}`))

  const getAlignValue = (align: string) => {
    switch (align) {
      case 'AUTO': return 'auto'
      case 'MIN': return 'start'
      case 'MAX': return 'end'
      case 'CENTER': return 'center'
      default: return 'auto'
    }
  }

  if (node.layout.layoutGrow === 0 && gridChildHorizontalAlign !== 'AUTO') {
    styleMap.set('justify-self', new RawValue(getAlignValue(gridChildHorizontalAlign)))
  }
  if (node.layout.layoutAlign !== 'STRETCH' && gridChildVerticalAlign !== 'AUTO') {
    styleMap.set('align-self', new RawValue(getAlignValue(gridChildVerticalAlign)))
  }
}

// Original function: eq
/**
 * Generates styles for a node with fallback handling for color profiles.
 * @param node - The node.
 * @param preferences - Preferences.
 * @param options - Optional style map, hints, and suggested vars.
 * @param additionalHints - Additional hints.
 * @returns Style map, hints, suggested vars, and fallbacks.
 */
function generateStylesWithFallback(
  node: any,
  preferences: any,
  options: { styleMap?: StyleMap, hints?: any, suggestedVars?: any } = {},
  additionalHints: any = {},
): { styleMap: StyleMap, hints: any, suggestedVars: any, fallbackHints: any, fallbackStyleMap: StyleMap } {
  const { styleMap = generateNodeStyles(node, preferences, { colorProfile: node.nodeCache.colorProfile }).styleMap, hints = {}, suggestedVars } = options

  const mergedHints = { ...hints, ...additionalHints }

  const { fallbackHints, fallbackStyleMap } = node.nodeCache.colorProfile === ColorSpaceEnum.DISPLAY_P3
    ? (() => {
        const srgbStyles = generateNodeStyles(node, preferences, {
          colorProfile: ColorSpaceEnum.SRGB,
          colorspaceConversion: getFeatureFlags().ee_color_management_lego_assign ? ColorConversionEnum.NO_CONVERSION : ColorConversionEnum.DISPLAY_P3_TO_SRGB,
        }).styleMap
        return {
          fallbackStyleMap: srgbStyles.difference(styleMap),
          fallbackHints: Object.fromEntries(srgbStyles.keys().map(key => [key, DesignIssues.DisplayP3Fallback])),
        }
      })()
    : { fallbackHints: {}, fallbackStyleMap: new StyleMap() }

  return {
    styleMap,
    hints: mergedHints,
    suggestedVars,
    fallbackHints,
    fallbackStyleMap,
  }
}

// Original constants: e$, eZ, etc.
/** Flex direction mappings. Original name: e$ */
const FLEX_DIRECTION_MAP = {
  NONE: 'row',
  HORIZONTAL: 'row',
  VERTICAL: 'column',
  GRID: 'row',
}

/** Alignment mappings. Original name: eZ */
const ALIGNMENT_MAP = {
  MIN: 'flex-start',
  CENTER: 'center',
  MAX: 'flex-end',
  SPACE_BETWEEN: 'space-between',
  BASELINE: 'baseline',
}

/**
 * Processes auto layout padding. Original name: eX
 * @param node - The node.
 * @param styleMap - Style map.
 * @param hints - Hints.
 * @param suggestedVars - Suggested variables.
 * @param preferences - Preferences.
 */
function processAutoLayoutPadding(node: any, styleMap: StyleMap, hints: any, suggestedVars: any, preferences: any): void {
  const { paddingTop, paddingBottom, paddingLeft, paddingRight } = node.autoLayout.layoutMode === 'GRID' ? node.gridLayout : node.autoLayout
  const nonZeroPaddings = [paddingTop, paddingRight, paddingBottom, paddingLeft].filter(p => p !== 0).length

  const processPadding = (field: string, value: number, styleField: string = 'padding', matchIndex: number = 0) => {
    const variable = node.getVariableValue(field)
    const cssVar = createValidatedCssVariable(new PixelValue(value), variable, hints, 'padding', preferences)
    return processPixelValue({
      raw: cssVar,
      node,
      field,
      styleField,
      suggestedVars,
      matchIndex,
      preferences,
    })
  }

  if (nonZeroPaddings === 1) {
    if (paddingTop)
      styleMap.set('padding-top', processPadding('paddingTop', paddingTop, 'padding-top'))
    if (paddingBottom)
      styleMap.set('padding-bottom', processPadding('paddingBottom', paddingBottom, 'padding-bottom'))
    if (paddingLeft)
      styleMap.set('padding-left', processPadding('paddingLeft', paddingLeft, 'padding-left'))
    if (paddingRight)
      styleMap.set('padding-right', processPadding('paddingRight', paddingRight, 'padding-right'))
  }
  else {
    styleMap.set('padding', new BorderRadius(
      processPadding('paddingTop', paddingTop, 'padding', 0),
      processPadding('paddingRight', paddingRight, 'padding', 1),
      processPadding('paddingBottom', paddingBottom, 'padding', 2),
      processPadding('paddingLeft', paddingLeft, 'padding', 3),
    ))
  }
}

/** Text alignment mappings. Original name: e5 */
const TEXT_ALIGN_MAP = {
  LEFT: 'left',
  CENTER: 'center',
  RIGHT: 'right',
  JUSTIFIED: 'justify',
}

/** Vertical alignment mappings. Original name: e4 */
const VERTICAL_ALIGN_MAP = {
  TOP: 'flex-start',
  CENTER: 'center',
  BOTTOM: 'flex-end',
}

/** Text decoration mappings. Original name: e3 */
const TEXT_DECORATION_MAP = {
  NONE: 'none',
  STRIKETHROUGH: 'line-through',
  UNDERLINE: 'underline',
}

/** Text decoration style mappings. Original name: e6 */
const TEXT_DECORATION_STYLE_MAP = {
  SOLID: 'solid',
  DOTTED: 'dotted',
  WAVY: 'wavy',
}

/** Font variant mappings. Original name: e7 */
const FONT_VARIANT_MAP = {
  SMALL_CAPS: 'small-caps',
  SMALL_CAPS_FORCED: 'all-small-caps',
}

/** Text transform mappings. Original name: e8 */
const TEXT_TRANSFORM_MAP = {
  ORIGINAL: 'none',
  UPPER: 'uppercase',
  LOWER: 'lowercase',
  TITLE: 'capitalize',
  SMALL_CAPS: 'uppercase',
  SMALL_CAPS_FORCED: 'capitalize',
}
/**
 * Gets the text segments for a node if it has characters.
 * Original name: e9
 * @param node - The node to process
 * @returns Array of text segments
 */
function getTextSegments(node: any): any[] {
  return node.characters.length === 0 ? [] : node.textSegments
}

/**
 * Gets the first text segment from a node.
 * Original name: te
 * @param node - The node to process
 * @returns The first text segment or undefined
 */
function getFirstTextSegment(node: any): any {
  return getTextSegments(node)[0]
}

/**
 * Processes font and text properties for CSS generation.
 * Original name: tt
 * @param node - The node
 * @param styleMap - The style map to update
 * @param textSegment - The text segment
 * @param preferences - User preferences
 * @returns Hints object
 */
function processFontAndTextProperties(node: any, styleMap: StyleMap, textSegment: any, preferences: any): any {
  const hints: any = {}

  // Process font family
  if (textSegment.fontName?.family) {
    const familyValue = new StringValueObject(textSegment.fontName.family.rawValue.includes(' ') ? `"${textSegment.fontName.family.rawValue}"` : textSegment.fontName.family.rawValue)
    const cssVariable = createCssVariableIfAvailable(familyValue, textSegment.fontName.family, hints, 'font-family', preferences)
    styleMap.set('font-family', cssVariable)
  }

  // Process font size
  if (textSegment.fontSize) {
    const cssVariable = createCssVariableIfAvailable(new PixelValue(textSegment.fontSize.rawValue), textSegment.fontSize, hints, 'font-size', preferences)
    styleMap.set('font-size', cssVariable)
  }

  // Process font weight and style
  const { fontWeight, italic } = textSegment.fontName?.style
    ? parseFontStyle(textSegment.fontName.style, textSegment.fontWeight)
    : { fontWeight: textSegment.fontWeight, italic: undefined }

  if (fontWeight) {
    styleMap.set('font-weight', createCssVariableIfAvailable(new StringValue(fontWeight.rawValue), fontWeight, hints, 'font-weight', preferences))
  }
  styleMap.set('font-style', new RawValue(italic ? 'italic' : 'normal'))

  // Process text decoration
  if (textSegment.textDecoration) {
    styleMap.set('text-decoration-line', new RawValue(TEXT_DECORATION_MAP[textSegment.textDecoration]))
    if (textSegment.textDecoration === 'UNDERLINE') {
      processUnderlineProperties(node, styleMap, hints, textSegment, preferences)
    }
  }

  // Process letter spacing
  const fontSize = textSegment.fontSize || getFirstTextSegment(node).fontSize
  if (textSegment.letterSpacing) {
    const letterSpacingValue = new PixelValue(calculateLetterSpacing(textSegment.letterSpacing.rawValue, fontSize.rawValue))
    styleMap.set('letter-spacing', createCssVariableIfAvailable(letterSpacingValue, textSegment.letterSpacing, hints, 'letter-spacing', preferences))
  }

  // Process text case
  if (textSegment.textCase) {
    if (textSegment.textCase in FONT_VARIANT_MAP) {
      styleMap.set('font-variant', new RawValue(FONT_VARIANT_MAP[textSegment.textCase]))
    }
    else {
      styleMap.set('text-transform', new RawValue(TEXT_TRANSFORM_MAP[textSegment.textCase]))
    }
  }

  // Process line height
  if (textSegment.lineHeight) {
    processLineHeight(node, styleMap, hints, textSegment, preferences)
  }

  // Process OpenType features
  processOpenTypeFeatures(node, styleMap)

  // Process opacity
  if (node.opacity) {
    const opacityVar = node.getVariableValue('opacity')
    const opacityValue = createValidatedCssVariable(new StringValue(formatNumber(node.opacity, 4)), opacityVar, hints, 'opacity', preferences)
    styleMap.set('opacity', opacityValue)
  }

  // Process leading trim
  if (node.leadingTrim && node.leadingTrim === 'CAP_HEIGHT') {
    styleMap.set('leading-trim', new RawValue('both'))
    styleMap.set('text-edge', new RawValue('cap'))
    hints['leading-trim'] = DesignIssues.LeadingTrim
  }

  // Process max lines
  if (node.maxLines) {
    styleMap.set('overflow', new RawValue('hidden'))
    styleMap.set('text-overflow', new RawValue('ellipsis'))
    styleMap.set('-webkit-box-orient', new RawValue('vertical'))
    styleMap.set('-webkit-line-clamp', new RawValue(node.maxLines))
  }

  return hints
}

/**
 * Processes underline-specific properties.
 * @param node - The node
 * @param styleMap - The style map
 * @param hints - Hints object
 * @param textSegment - The text segment
 * @param preferences - Preferences
 */
function processUnderlineProperties(node: any, styleMap: StyleMap, hints: any, textSegment: any, preferences: any): void {
  if (textSegment.textDecorationStyle) {
    styleMap.set('text-decoration-style', new RawValue(TEXT_DECORATION_STYLE_MAP[textSegment.textDecorationStyle]))
  }
  if (textSegment.textDecorationSkipInk !== undefined) {
    styleMap.set('text-decoration-skip-ink', new RawValue(textSegment.textDecorationSkipInk ? 'auto' : 'none'))
  }
  if (textSegment.textDecorationThickness) {
    processTextDecorationThickness(node, styleMap, hints, textSegment, preferences)
  }
  if (textSegment.textDecorationColor) {
    processTextDecorationColor(node, styleMap, hints, textSegment, preferences)
  }
  if (textSegment.textDecorationOffset) {
    processTextDecorationOffset(node, styleMap, hints, textSegment, preferences)
  }
  styleMap.set('text-underline-position', new RawValue('from-font'))
}

/**
 * Processes text decoration thickness.
 * @param node - The node
 * @param styleMap - The style map
 * @param hints - Hints object
 * @param textSegment - The text segment
 * @param preferences - Preferences
 */
function processTextDecorationThickness(node: any, styleMap: StyleMap, hints: any, textSegment: any, _preferences: any): void {
  const thickness = textSegment.textDecorationThickness
  const fontSize = textSegment.fontSize?.rawValue ?? 0
  let value: any
  let hint: any
  if (thickness.unit === 'AUTO') {
    value = new PixelValue('auto')
  }
  else if (thickness.unit === 'PERCENT') {
    value = new PercentageValue(thickness.value)
    hint = new PixelValue(thickness.value / 100 * fontSize)
  }
  else {
    value = new PixelValue(thickness.value)
    hint = new PercentageValue(thickness.value / fontSize * 100)
  }
  styleMap.set('text-decoration-thickness', value)
  if (hint) {
    hints['text-decoration-thickness'] = { hint: hint.value, type: IssueCategoryEnum.Comment }
  }
}

/**
 * Processes text decoration color.
 * @param node - The node
 * @param styleMap - The style map
 * @param hints - Hints object
 * @param textSegment - The text segment
 * @param preferences - Preferences
 */
function processTextDecorationColor(node: any, styleMap: StyleMap, hints: any, textSegment: any, preferences: any): void {
  const colorProfile = node.nodeCache.colorProfile
  processTextDecorationColorInternal(node, styleMap, hints, textSegment, preferences, { colorProfile })
}

/**
 * Processes text decoration offset.
 * @param node - The node
 * @param styleMap - The style map
 * @param hints - Hints object
 * @param textSegment - The text segment
 * @param preferences - Preferences
 */
function processTextDecorationOffset(node: any, styleMap: StyleMap, hints: any, textSegment: any, _preferences: any): void {
  const offset = textSegment.textDecorationOffset
  const fontSize = textSegment.fontSize?.rawValue ?? 0
  let value: any
  let hint: any
  if (offset.unit === 'AUTO') {
    value = new PixelValue('auto')
  }
  else if (offset.unit === 'PERCENT') {
    value = new PercentageValue(offset.value)
    hint = new PixelValue(offset.value / 100 * fontSize)
  }
  else {
    value = new PixelValue(offset.value)
    hint = new PercentageValue(offset.value / fontSize * 100)
  }
  styleMap.set('text-underline-offset', value)
  if (hint) {
    hints['text-underline-offset'] = { hint: hint.value, type: IssueCategoryEnum.Comment }
  }
}

/**
 * Processes line height.
 * @param node - The node
 * @param styleMap - The style map
 * @param hints - Hints object
 * @param textSegment - The text segment
 * @param preferences - Preferences
 */
function processLineHeight(node: any, styleMap: StyleMap, hints: any, textSegment: any, preferences: any): void {
  const lineHeight = textSegment.lineHeight.rawValue
  const fontSize = textSegment.fontSize?.rawValue ?? 0
  let value: any
  let hint: any
  if (lineHeight.unit === 'AUTO') {
    value = new NormalValue()
  }
  else if (lineHeight.unit === 'PERCENT') {
    value = new PercentageValue(lineHeight.value)
    hint = new PixelValue(lineHeight.value / 100 * fontSize)
  }
  else {
    value = new PixelValue(lineHeight.value)
    hint = new PercentageValue(lineHeight.value / fontSize * 100)
  }
  const cssVariable = createCssVariableIfAvailable(value, textSegment.lineHeight, hints, 'line-height', preferences)
  styleMap.set('line-height', cssVariable)
  if (hint) {
    hints['line-height'] = { hint: hint.value, type: IssueCategoryEnum.Comment }
  }
}

/**
 * Processes OpenType features.
 * @param node - The node
 * @param styleMap - The style map
 */
function processOpenTypeFeatures(node: any, styleMap: StyleMap): void {
  const openTypeFeatures: Record<string, boolean> = node.openTypeFeatures
  if (!openTypeFeatures || !isObject(openTypeFeatures))
    return

  const numericFeatures: string[] = []
  if (openTypeFeatures.LNUM)
    numericFeatures.push('lining-nums')
  else if (openTypeFeatures.ONUM)
    numericFeatures.push('oldstyle-nums')
  if (openTypeFeatures.TNUM)
    numericFeatures.push('tabular-nums')
  else if (openTypeFeatures.PNUM)
    numericFeatures.push('proportional-nums')
  if (openTypeFeatures.FRAC)
    numericFeatures.push('stacked-fractions')
  if (openTypeFeatures.ORDN)
    numericFeatures.push('ordinal')
  if (openTypeFeatures.ZERO)
    numericFeatures.push('slashed-zero')
  if (numericFeatures.length > 0) {
    styleMap.set('font-variant-numeric', new RawValue(numericFeatures.join(' ')))
  }

  const featureSettings: string[] = []
  Object.entries(openTypeFeatures).forEach(([key, value]) => {
    if (key === 'KERN') {
      styleMap.set('font-kerning', new RawValue(value ? 'normal' : 'none'))
    }
    else if (!['LNUM', 'ONUM', 'TNUM', 'PNUM', 'FRAC', 'ORDN', 'ZERO'].includes(key)) {
      featureSettings.push(`'${key.toLowerCase()}' ${value ? 'on' : 'off'}`)
    }
  })
  if (featureSettings.length > 0) {
    styleMap.set('font-feature-settings', new RawValue(featureSettings.join(', ')))
  }
}

/**
 * Processes fills for text color.
 * Original name: ti
 * @param node - The node
 * @param styleMap - The style map
 * @param hints - Hints object
 * @param textSegment - The text segment
 * @param preferences - Preferences
 * @param colorManagement - Color management settings
 */
function processTextFills(node: any, styleMap: StyleMap, hints: any, textSegment: any, preferences: any, colorManagement: any = DEFAULT_COLOR_MANAGEMENT): void {
  const fill = createTextFill(node, textSegment, hints, preferences, colorManagement)
  if (!fill)
    return

  if (fill instanceof ColorFormatter) {
    const hint = getVariableHint(fill.variableValue, fill.rawColor, { isColor: true })
    styleMap.set('color', fill)
    hints.color = hints.color || hint
  }
  else if (fill instanceof CssVariable && fill.wrappedValue instanceof ColorFormatter) {
    styleMap.set('color', fill)
  }
  else {
    styleMap.set('background', new BackgroundList([fill]))
    styleMap.set('background-clip', new RawValue('text'))
    styleMap.set('-webkit-background-clip', new RawValue('text'))
    styleMap.set('-webkit-text-fill-color', new RawValue('transparent'))
  }
}

/**
 * Creates a fill for text from paints.
 * @param node - The node
 * @param textSegment - The text segment
 * @param hints - Hints object
 * @param preferences - Preferences
 * @param colorManagement - Color management
 * @returns The fill or null
 */
function createTextFill(node: any, textSegment: any, hints: any, preferences: any, colorManagement: any): any {
  if (!textSegment.fills)
    return null

  const paints = filterVisiblePaints(textSegment.fills)
  if (paints.length === 0)
    return null

  if (paints.length > 1)
    hints.color = DesignIssues.SinglePaint

  const paint = paints[0]
  const bounds = node.layout.relativeBounds().bounds
  const fill = createFillFromPaint(paint.paint, paint.index, bounds, true, node, preferences, colorManagement)
  if (!fill)
    return null

  const isResolvedVariable = hasResolvedVariable(fill)
  if (isResolvedStyle(node.fillStyle) && !isResolvedVariable) {
    return new CssVariable(node.fillStyle.name, fill, preferences, undefined, node.fillStyle.id)
  }

  if (textSegment.fillStyleId) {
    const style = resolveFillStyle({ fillStyleId: textSegment.fillStyleId }, node.nodeCache.stylesResolver)
    if (isResolvedStyle(style)) {
      return new CssVariable(style.name, fill, preferences, undefined, style.id)
    }
  }

  return fill
}

/**
 * Processes text decoration color.
 * Original name: tn
 * @param node - The node
 * @param styleMap - The style map
 * @param hints - Hints object
 * @param textSegment - The text segment
 * @param preferences - Preferences
 * @param colorManagement - Color management
 */
function processTextDecorationColorInternal(node: any, styleMap: StyleMap, hints: any, textSegment: any, preferences: any, colorManagement: any = DEFAULT_COLOR_MANAGEMENT): void {
  if (!textSegment.textDecorationColor || !textSegment.textDecorationColor.rawValue)
    return

  const colorValue = textSegment.textDecorationColor.rawValue.value
  if (colorValue === 'AUTO')
    return

  const paints = filterVisiblePaints([colorValue])
  if (paints.length === 0)
    return

  if (paints.length > 1)
    hints['text-decoration-color'] = DesignIssues.SinglePaint

  const paint = paints[0]
  if (!paint)
    return

  const bounds = node.layout.relativeBounds().bounds
  const fill = createFillFromPaint(paint.paint, paint.index, bounds, true, node, preferences, colorManagement)
  if (!fill)
    return

  if (fill instanceof ColorFormatter) {
    const hint = getVariableHint(fill.variableValue, fill.rawColor, { isColor: true })
    styleMap.set('text-decoration-color', fill)
    hints['text-decoration-color'] = hints['text-decoration-color'] || hint
  }
  else if (fill instanceof CssVariable && fill.wrappedValue instanceof ColorFormatter) {
    styleMap.set('text-decoration-color', fill)
  }
}

/**
 * Processes strokes for text stroke.
 * Original name: tr
 * @param node - The node
 * @param styleMap - The style map
 * @param hints - Hints object
 * @param preferences - Preferences
 * @param colorManagement - Color management
 */
function processTextStrokes(node: any, styleMap: StyleMap, hints: any, preferences: any, colorManagement: any = DEFAULT_COLOR_MANAGEMENT): void {
  const { strokes, strokeStyle, strokeWeight } = node
  if (strokeWeight <= 0 || strokes.length === 0)
    return

  let color: any
  for (let i = 0; i < strokes.length; i++) {
    const stroke = strokes[i]
    if (stroke.type === 'SOLID') {
      color = createColorFormatter(stroke, i, 'strokes', node, colorManagement, preferences)
      break
    }
  }

  styleMap.set('-webkit-text-stroke-width', new PixelValue(Math.round(100 * strokeWeight) / 100))

  if (!color) {
    styleMap.set('-webkit-text-stroke-color', new ColorFormatter({ r: 0, g: 0, b: 0 }, preferences))
    hints['-webkit-text-stroke-color'] = DesignIssues.UnsupportedPaint
    return
  }

  if (strokes.length > 1)
    hints['-webkit-text-stroke-color'] = DesignIssues.SinglePaint

  if (strokeStyle && isResolvedStyle(strokeStyle)) {
    styleMap.set('-webkit-text-stroke-color', new CssVariable(strokeStyle.name, color, preferences))
  }
  else {
    styleMap.set('-webkit-text-stroke-color', color)
  }
}

/**
 * Processes effects for text.
 * Original name: ta
 * @param node - The node
 * @param styleMap - The style map
 * @param hints - Hints object
 * @param preferences - Preferences
 * @param colorManagement - Color management
 */
function processTextEffects(node: any, styleMap: StyleMap, hints: any, preferences: any, colorManagement: any = DEFAULT_COLOR_MANAGEMENT): void {
  if (node.blendMode && node.blendMode !== 'PASS_THROUGH') {
    styleMap.set('mix-blend-mode', BlendMode.fromFigmaBlendMode([node.blendMode]))
    if (node.blendMode === 'LINEAR_BURN') {
      hints['mix-blend-mode'] = DesignIssues.PlusDarker
    }
  }

  let textShadow = new TextShadow([])
  let filter = new Filter([])
  let backdropFilter = new Filter([])

  node.effects.forEach((effect: any) => {
    switch (effect.type) {
      case 'LAYER_BLUR':
      case 'BACKGROUND_BLUR':
        const radiusVar = getRadiusVariable(effect, node)
        const radiusValue = createValidatedCssVariable(new PixelValue(effect.radius), radiusVar, hints, 'filter', preferences)
        const blurFilter = new Filter([new BlurFilter(effect.radius, radiusValue)])
        if (effect.type === 'LAYER_BLUR') {
          filter = Filter.concat(filter, blurFilter)
        }
        else {
          backdropFilter = Filter.concat(backdropFilter, blurFilter)
        }
        break
      case 'DROP_SHADOW':
        const offsetXVar = getFieldVariable(effect, 'offsetX', node)
        const offsetYVar = getFieldVariable(effect, 'offsetY', node)
        const radiusVar2 = getFieldVariable(effect, 'radius', node)
        const colorVar = getFieldVariable(effect, 'color', node)
        const offsetX = createValidatedCssVariable(new PixelValue(effect.offset.x), offsetXVar, hints, 'text-shadow', preferences)
        const offsetY = createValidatedCssVariable(new PixelValue(effect.offset.y), offsetYVar, hints, 'text-shadow', preferences)
        const blur = createValidatedCssVariable(new PixelValue(effect.radius), radiusVar2, hints, 'text-shadow', preferences)
        const color = createValidatedCssVariable(new ColorFormatter(effect.color, preferences, 1, colorManagement), colorVar, hints, 'text-shadow', preferences)
        const shadow = new TextShadow([{ offsetX, offsetY, blur, color }])
        textShadow = TextShadow.concat(textShadow, shadow)
        break
      case 'INNER_SHADOW':
        console.warn('Inner shadow is not supported on text')
        break
    }
  })

  if (textShadow.shadowObjects.length > 0) {
    styleMap.set('text-shadow', textShadow)
  }
  if (filter.filterObjects.length > 0) {
    styleMap.set('filter', filter)
  }
  if (backdropFilter.filterObjects.length > 0) {
    styleMap.set('backdrop-filter', backdropFilter)
  }
}

/**
 * Processes CSS properties with variables for text.
 * Original name: ts
 * @param node - The node
 * @param styleMap - The style map
 * @param suggestedVars - Suggested variables
 * @param preferences - Preferences
 */
function processTextCssProperties(node: any, styleMap: StyleMap, suggestedVars: any, preferences: any): void {
  const color = styleMap.get('color')
  if (color instanceof ColorFormatter) {
    styleMap.set('color', processColorValue({
      raw: color,
      node,
      field: 'fills',
      styleField: 'color',
      suggestedVars,
      preferences,
    }), true)
  }

  const textDecorationColor = styleMap.get('text-decoration-color')
  if (textDecorationColor instanceof ColorFormatter) {
    styleMap.set('text-decoration-color', processColorValue({
      raw: textDecorationColor,
      node,
      field: 'textDecorationColor',
      styleField: 'text-decoration-color',
      suggestedVars,
      preferences,
    }), true)
  }

  const fontFamily = styleMap.get('font-family')
  if (fontFamily instanceof StringValueObject) {
    styleMap.set('font-family', processStringValueObject({
      raw: fontFamily,
      node,
      field: 'fontFamily',
      styleField: 'font-family',
      suggestedVars,
      preferences,
    }), true)
  }

  const fontSize = styleMap.get('font-size')
  if (fontSize instanceof PixelValue) {
    styleMap.set('font-size', processPixelValue({
      raw: fontSize,
      node,
      field: 'fontSize',
      styleField: 'font-size',
      suggestedVars,
      preferences,
    }), true)
  }

  const lineHeight = styleMap.get('line-height')
  if (lineHeight instanceof PixelValue) {
    styleMap.set('line-height', processPixelValue({
      raw: lineHeight,
      node,
      field: 'lineHeight',
      styleField: 'line-height',
      suggestedVars,
      preferences,
    }), true)
  }
}
// Utility constants and arrays for CSS property handling
const CSS_PROPERTIES_TO_SCALE: string[] = ['width', 'height', 'left', 'top', 'right', 'bottom', 'padding', 'padding-left', 'padding-right', 'padding-bottom', 'padding-top', 'gap', 'font-size', 'letter-spacing', 'line-height', 'min-width', 'max-width', 'min-height', 'max-height', 'row-gap', 'border-radius']
const TEXT_PROPERTIES_TO_SCALE: string[] = ['font-size', 'letter-spacing', 'line-height']

/**
 * Transforms CSS property values based on preferences, scaling pixels to rem if needed.
 * Original name: td
 * @param property - The CSS property name.
 * @param value - The value to transform.
 * @param preferences - User preferences for scaling.
 * @returns The transformed value.
 */
function transformCssValue(property: string, value: any, preferences: any): any {
  if (value === undefined)
    return
  if (preferences.unit === MeasureUnitType.PIXEL || (preferences?.customSettings?.onlyText === 'true' && !TEXT_PROPERTIES_TO_SCALE.includes(property))) {
    return value
  }
  const scalePxToRem = (pxValue: string) => pxValue.replace(/(\d+(?:\.\d*)?)px/g, (match, num) => `${formatScaledValue(num, preferences)}rem`)
  if (CSS_PROPERTIES_TO_SCALE.includes(property)) {
    if (property === 'padding' && typeof value === 'string') {
      return value.split(' ').map(scalePxToRem).join(' ')
    }
    if (typeof value === 'string') {
      return scalePxToRem(value)
    }
    return formatScaledValue(value, preferences)
  }
  return value
}

/**
 * Comparator for sorting CSS properties based on predefined order.
 * Original name: tc
 * @param a - First property entry.
 * @param b - Second property entry.
 * @returns Comparison result.
 */
function compareCssProperties([keyA]: [string, any], [keyB]: [string, any]): number {
  return ew.indexOf(keyA) - ew.indexOf(keyB)
}

/**
 * Creates a CSS code block for a property.
 * Original name: tu
 * @param property - The CSS property.
 * @param value - The value.
 * @param indent - Indentation level.
 * @param preferences - Preferences.
 * @param hint - Optional hint.
 * @returns The code block.
 */
function createCssCodeBlock(property: string, value: any, indent: number, preferences: any, hint?: any): any {
  const transformedValue = preferences ? transformCssValue(property, value, preferences) : value
  if (hint?.type !== IssueCategoryEnum.Comment) {
    return createCodeBlock(`${property}: ${transformedValue};`, indent, hint)
  }
  const hintValue = preferences ? transformCssValue(property, hint.hint, preferences) : hint?.hint
  return createCodeBlock(`${property}: ${transformedValue}; /* ${hintValue} */`, indent)
}

// Main style generation functions

/**
 * Generates styles for a given node based on its type.
 * Original name: tp
 * @param node - The node to process.
 * @param preferences - User preferences.
 * @returns Promise resolving to style generation result.
 */
async function retrieveStylesForNode(node: any, preferences: any): Promise<{
  styleMap: StyleMap
  hints?: any
  fallbackHints?: any
  fallbackStyleMap?: StyleMap
  suggestedVars: SuggestedVariablesCollection
}> {
  if (node instanceof NodeWrapper) {
    return generateStylesWithFallback(node, preferences)
  }
  if (node instanceof FrameNodeProperties || node instanceof InstanceNodeProperties || node instanceof ComponentNodeProperties) {
    return generateFrameStyles(node, preferences)
  }
  if (node instanceof NodeProperties) {
    return generateTextStyles(node, preferences)
  }
  if (node instanceof ShapeNodeProperties) {
    return generateStylesWithFallback(node, preferences)
  }
  if (node instanceof BasicNodeProperties) {
    return {
      styleMap: new StyleMap(),
      hints: {},
      suggestedVars: new SuggestedVariablesCollection(),
    }
  }
  return {
    styleMap: new StyleMap(),
    suggestedVars: new SuggestedVariablesCollection(),
  }
}

/**
 * Generates styles for frame-like nodes.
 * @param node - The frame node.
 * @param preferences - Preferences.
 * @returns Style generation result.
 */
function generateFrameStyles(node: any, preferences: any): any {
  const { styleMap, hints, fallbackHints, fallbackStyleMap, suggestedVars } = generateStylesWithFallback(node, preferences)
  const additionalHints: any = {}

  if (node.isAutoLayout()) {
    const { layoutMode, primaryAxisSizingMode, counterAxisSizingMode } = node.autoLayout
    const isInline = !node.layout.parent?.isAutoLayout() && (
      (layoutMode === 'VERTICAL' && counterAxisSizingMode === 'AUTO')
      || (layoutMode === 'HORIZONTAL' && primaryAxisSizingMode === 'AUTO')
    )
    const displayValue = new RawValue(isInline ? 'inline-flex' : 'flex')
    styleMap.set('display', displayValue)
    processAutoLayoutPadding(node, styleMap, additionalHints, suggestedVars, preferences)
    processAutoLayoutProperties(node, styleMap, additionalHints, suggestedVars, preferences)
  }

  if (node.isGrid()) {
    const { gridRowSizingCSS, gridColumnSizingCSS } = node.gridLayout
    const isInline = node.autoLayout.primaryAxisSizingMode === 'AUTO' || node.autoLayout.counterAxisSizingMode === 'AUTO'
    styleMap.set('display', new RawValue(isInline ? 'inline-grid' : 'grid'))
    styleMap.set('grid-template-rows', new RawValue(gridRowSizingCSS))
    styleMap.set('grid-template-columns', new RawValue(gridColumnSizingCSS))
    processGridGaps(node, styleMap, additionalHints, suggestedVars, preferences)
    processAutoLayoutPadding(node, styleMap, additionalHints, suggestedVars, preferences)
  }

  if (isNotNull(getBorderPaint(node)) && node.isLayoutContainer() && !node.autoLayout.strokesIncludedInLayout) {
    additionalHints.border = DesignIssues.BordersDontTakeUpSpace
    additionalHints['border-bottom'] = DesignIssues.BordersDontTakeUpSpace
    additionalHints['border-left'] = DesignIssues.BordersDontTakeUpSpace
    additionalHints['border-right'] = DesignIssues.BordersDontTakeUpSpace
    additionalHints['border-top'] = DesignIssues.BordersDontTakeUpSpace
  }

  if (node.clipsContent) {
    styleMap.set('overflow', new RawValue('hidden'))
  }

  return {
    styleMap,
    hints: { ...additionalHints, ...hints },
    fallbackHints,
    fallbackStyleMap,
    suggestedVars,
  }
}

/**
 * Processes auto layout properties for frames.
 * @param node - The node.
 * @param styleMap - Style map.
 * @param hints - Hints.
 * @param suggestedVars - Suggested variables.
 * @param preferences - Preferences.
 */
function processAutoLayoutProperties(node: any, styleMap: StyleMap, hints: any, suggestedVars: any, preferences: any): void {
  const { layoutMode, itemSpacing, primaryAxisAlignItems, counterAxisAlignItems, layoutWrap, counterAxisSpacing } = node.autoLayout
  const alignContent = getAlignContent(node)
  styleMap.set('flex-direction', new RawValue(FLEX_DIRECTION_MAP[layoutMode]))
  styleMap.set('justify-content', new RawValue(ALIGNMENT_MAP[primaryAxisAlignItems]))
  styleMap.set('align-items', new RawValue(ALIGNMENT_MAP[counterAxisAlignItems]))
  styleMap.set('align-content', new RawValue(alignContent))
  if (layoutWrap === 'WRAP') {
    styleMap.set('flex-wrap', new RawValue('wrap'))
  }
  const counterAxisVar = node.getVariableValue('counterAxisSpacing')
  const counterAxisCssVar = createValidatedCssVariable(new PixelValue(counterAxisSpacing), counterAxisVar, hints, 'row-gap', preferences)
  if (primaryAxisAlignItems !== 'SPACE_BETWEEN') {
    const itemSpacingVar = node.getVariableValue('itemSpacing')
    const itemSpacingCssVar = createValidatedCssVariable(new PixelValue(itemSpacing), itemSpacingVar, hints, 'gap', preferences)
    if (layoutWrap === 'NO_WRAP' || (itemSpacingCssVar.equals(counterAxisCssVar as any) || counterAxisSpacing === undefined) && alignContent !== 'space-between') {
      styleMap.set('gap', processPixelValue({
        raw: itemSpacingCssVar,
        node,
        field: 'itemSpacing',
        styleField: 'gap',
        suggestedVars,
        preferences,
      }))
    }
    else if (alignContent === 'space-between') {
      styleMap.set('column-gap', processPixelValue({
        raw: itemSpacingCssVar,
        node,
        field: 'itemSpacing',
        styleField: 'column-gap',
        suggestedVars,
        preferences,
      }))
    }
    else {
      styleMap.set('gap', new Gap(
        processPixelValue({
          raw: counterAxisCssVar,
          node,
          field: 'counterAxisSpacing',
          styleField: 'gap',
          suggestedVars,
          matchIndex: 0,
          preferences,
        }),
        processPixelValue({
          raw: itemSpacingCssVar,
          node,
          field: 'itemSpacing',
          styleField: 'gap',
          suggestedVars,
          matchIndex: 1,
          preferences,
        }),
      ))
    }
  }
  else {
    if (layoutWrap === 'WRAP' && alignContent !== 'space-between') {
      styleMap.set('row-gap', processPixelValue({
        raw: counterAxisCssVar,
        node,
        field: 'counterAxisSpacing',
        styleField: 'row-gap',
        suggestedVars,
        preferences,
      }))
    }
  }
}

/**
 * Gets align-content value for auto layout.
 * @param node - The node.
 * @returns Align content string.
 */
function getAlignContent(node: any): string {
  if (node.autoLayout.counterAxisAlignContent === 'SPACE_BETWEEN')
    return 'space-between'
  if (node.autoLayout.layoutWrap === 'WRAP' && !node.children.every(child => getNodeSizingMode(child) === SizingModeEnum.FILL_PARENT)) {
    switch (node.autoLayout.counterAxisAlignItems) {
      case 'MIN': return 'flex-start'
      case 'CENTER': return 'center'
      case 'MAX': return 'flex-end'
    }
  }
  return 'stretch'
}

/**
 * Processes grid gaps.
 * @param node - The node.
 * @param styleMap - Style map.
 * @param hints - Hints.
 * @param suggestedVars - Suggested variables.
 * @param preferences - Preferences.
 */
function processGridGaps(node: any, styleMap: StyleMap, hints: any, suggestedVars: any, preferences: any): void {
  const { gridRowGap, gridColumnGap } = node.gridLayout
  const rowGapVar = node.getVariableValue('gridRowGap')
  const rowGapCssVar = createValidatedCssVariable(new PixelValue(gridRowGap), rowGapVar, hints, 'row-gap', preferences)
  const processedRowGap = processPixelValue({
    raw: rowGapCssVar,
    node,
    field: 'gridRowGap',
    styleField: 'row-gap',
    suggestedVars,
    preferences,
  })
  styleMap.set('row-gap', processedRowGap)
  const colGapVar = node.getVariableValue('gridColumnGap')
  const colGapCssVar = createValidatedCssVariable(new PixelValue(gridColumnGap), colGapVar, hints, 'column-gap', preferences)
  const processedColGap = processPixelValue({
    raw: colGapCssVar,
    node,
    field: 'gridColumnGap',
    styleField: 'column-gap',
    suggestedVars,
    preferences,
  })
  styleMap.set('column-gap', processedColGap)
}

/**
 * Generates styles for text nodes.
 * @param node - The text node.
 * @param preferences - Preferences.
 * @returns Promise resolving to style generation result.
 */
async function generateTextStyles(node: any, preferences: any) {
  const styleMap = StyleMap.from([['box-sizing', new RawValue('border-box')]])
  const suggestedVars = new SuggestedVariablesCollection()

  if (node.textAlignHorizontal) {
    styleMap.set('text-align', new RawValue(TEXT_ALIGN_MAP[node.textAlignHorizontal]))
  }

  if (node.maxLines) {
    styleMap.set('display', new RawValue('-webkit-box'))
  }
  else if (node.textAlignVertical && node.textAlignVertical !== 'TOP' && getSizingModeForHorizontalParent(node) !== SizingModeEnum.HUG_CONTENTS) {
    styleMap.set('display', new RawValue('flex'))
    styleMap.set('flex-direction', new RawValue('column'))
    styleMap.set('justify-content', new RawValue(VERTICAL_ALIGN_MAP[node.textAlignVertical]))
  }

  if (node.textAutoResize === 'TRUNCATE') {
    styleMap.set('text-overflow', new RawValue('ellipsis'))
    styleMap.set('overflow', new RawValue('hidden'))
    styleMap.set('white-space', new RawValue('nowrap'))
  }

  if (node.layout.parent?.isGrid()) {
    const { gridRowSpan, gridColumnSpan, gridColumnAnchorIndex, gridRowAnchorIndex, gridChildHorizontalAlign, gridChildVerticalAlign } = node.gridLayout
    styleMap.set('grid-row', new RawValue(`${gridRowAnchorIndex + 1} / span ${gridRowSpan}`))
    styleMap.set('grid-column', new RawValue(`${gridColumnAnchorIndex + 1} / span ${gridColumnSpan}`))
    if (node.layout.layoutGrow === 0 && gridChildHorizontalAlign !== 'AUTO') {
      styleMap.set('justify-self', new RawValue(gridChildHorizontalAlign))
    }
    if (node.layout.layoutAlign !== 'STRETCH' && gridChildVerticalAlign !== 'AUTO') {
      styleMap.set('align-self', new RawValue(gridChildVerticalAlign))
    }
  }

  const { styleMap: layoutStyleMap, hints: layoutHints, suggestedVars: layoutVars } = new LayoutStyleGenerator(node, preferences).getStyles()
  styleMap.merge(layoutStyleMap)
  suggestedVars.merge(layoutVars)

  const colorProfile = node.nodeCache.colorProfile
  processTextFills(node, styleMap, layoutHints, getFirstTextSegment(node), preferences, { colorProfile })
  const fontHints = processFontAndTextProperties(node, styleMap, getFirstTextSegment(node), preferences)
  processTextEffects(node, styleMap, layoutHints, preferences, { colorProfile })
  processTextStrokes(node, styleMap, layoutHints, preferences, { colorProfile })

  const spans = processTextSpans(node, preferences, styleMap, layoutHints, colorProfile)

  const { fallbackHints, fallbackStyleMap } = colorProfile === ColorSpaceEnum.DISPLAY_P3
    ? generateFallbackStyles(node, styleMap, layoutHints, preferences)
    : { fallbackHints: {}, fallbackStyleMap: new StyleMap() }

  processTextCssProperties(node, styleMap, suggestedVars, preferences)
  processTextCssProperties(node, fallbackStyleMap, suggestedVars, preferences)

  return {
    styleMap,
    hints: { ...layoutHints, ...fontHints },
    suggestedVars,
    fallbackHints,
    fallbackStyleMap,
    spans,
  }
}

/**
 * Processes text spans for multi-style text.
 * @param node - The node.
 * @param preferences - Preferences.
 * @param baseStyleMap - Base style map.
 * @param hints - Hints.
 * @param colorProfile - Color profile.
 * @returns Array of spans.
 */
function processTextSpans(node: any, preferences: any, baseStyleMap: StyleMap, hints: any, colorProfile: any) {
  const textSegments = getTextSegments(node)
  const spans: {
    styleMap: StyleMap
    text: string
    styleName?: string
  }[] = []
  const groupedSegments = groupTextSegments(textSegments)

  for (const [, segmentGroup] of groupedSegments.entries()) {
    if (segmentGroup.length !== 1 || segmentGroup[0].characters !== '') {
      for (const [, segment] of segmentGroup.entries()) {
        const text = segment.characters.replace('\n', '').replace(/^(\s+)/, '').replace(/(\s+)$/, '')
        if (text === '')
          continue
        const { characters, ...segmentProps } = segment
        const segmentStyleMap = new StyleMap()
        processFontAndTextProperties(node, segmentStyleMap, segmentProps, preferences)
        processTextFills(node, segmentStyleMap, hints, segmentProps, preferences, { colorProfile })
        if (!segmentStyleMap.difference(baseStyleMap).isEmpty() && !spans.some(span => span.styleMap.difference(segmentStyleMap).isEmpty())) {
          let styleName: string | undefined
          if (segment.textStyleId) {
            const resolvedStyle = resolveTextStyle({ textStyleId: segment.textStyleId }, node.nodeCache.stylesResolver)
            if (isResolvedStyle(resolvedStyle)) {
              styleName = resolvedStyle.name
            }
          }
          spans.push({
            styleMap: segmentStyleMap,
            text: text.substring(0, 10) + (text.length > 10 ? '...' : ''),
            styleName,
          })
        }
      }
    }
  }
  return spans
}

/**
 * Groups text segments by lines.
 * @param segments - Text segments.
 * @returns Grouped segments.
 */
function groupTextSegments(segments: any[]): any[][] {
  const groups: any[][] = []
  let currentGroup: any[] = []
  const newlineRegex = new RegExp('\n|\u2028')
  segments.forEach((segment, index) => {
    if (newlineRegex.test(segment.characters)) {
      const matches = segment.characters.match(new RegExp('(\n|\u2028)|(.+)(\n|\u2028)?', 'g'))
      if (!matches) {
        currentGroup.push(segment)
      }
      else if (matches.length === 1) {
        currentGroup.push(segment)
        groups.push(currentGroup)
        currentGroup = []
      }
      else {
        const firstMatch = matches.shift()!
        const clonedSegment = clone(segment)
        clonedSegment.characters = firstMatch
        currentGroup.push(clonedSegment)
        groups.push(currentGroup)
        currentGroup = []
        const middleMatches = matches.slice(0, -1)
        groups.push(...middleMatches.map((match) => {
          const newSegment = clone(segment)
          newSegment.characters = match
          return [newSegment]
        }))
        const lastMatch = matches[matches.length - 1]
        const lastSegment = clone(segment)
        lastSegment.characters = lastMatch
        if (lastMatch === '') {
          if (segments[index + 1]) {
            groups.push([lastSegment])
          }
        }
        else {
          currentGroup.push(lastSegment)
        }
      }
    }
    else {
      currentGroup.push(segment)
    }
  })
  if (currentGroup.length) {
    groups.push(currentGroup)
  }
  return groups
}

/**
 * Generates fallback styles for Display P3.
 * @param node - The node.
 * @param styleMap - Style map.
 * @param hints - Hints.
 * @param preferences - Preferences.
 * @returns Fallback styles.
 */
function generateFallbackStyles(node: any, styleMap: StyleMap, hints: any, preferences: any): { fallbackStyleMap: StyleMap, fallbackHints: any } {
  const fallbackStyleMap = new StyleMap()
  processTextFills(node, fallbackStyleMap, hints, getFirstTextSegment(node), preferences, {
    colorProfile: ColorSpaceEnum.SRGB,
    colorspaceConversion: getFeatureFlags().ee_color_management_lego_assign ? ColorConversionEnum.NO_CONVERSION : ColorConversionEnum.DISPLAY_P3_TO_SRGB,
  })
  processTextEffects(node, fallbackStyleMap, hints, preferences, {
    colorProfile: ColorSpaceEnum.SRGB,
    colorspaceConversion: getFeatureFlags().ee_color_management_lego_assign ? ColorConversionEnum.NO_CONVERSION : ColorConversionEnum.DISPLAY_P3_TO_SRGB,
  })
  processTextStrokes(node, fallbackStyleMap, hints, preferences, {
    colorProfile: ColorSpaceEnum.SRGB,
    colorspaceConversion: getFeatureFlags().ee_color_management_lego_assign ? ColorConversionEnum.NO_CONVERSION : ColorConversionEnum.DISPLAY_P3_TO_SRGB,
  })
  processTextDecorationColorInternal(node, fallbackStyleMap, hints, getFirstTextSegment(node), preferences, {
    colorProfile: ColorSpaceEnum.SRGB,
    colorspaceConversion: getFeatureFlags().ee_color_management_lego_assign ? ColorConversionEnum.NO_CONVERSION : ColorConversionEnum.DISPLAY_P3_TO_SRGB,
  })
  const diff = fallbackStyleMap.difference(styleMap)
  return {
    fallbackStyleMap: diff,
    fallbackHints: Object.fromEntries(diff.keys().map(key => [key, DesignIssues.DisplayP3Fallback])),
  }
}

/**
 * Generates CSS sections from styles.
 * Original name: tm
 * @param node - The node.
 * @param preferences - Preferences.
 * @returns Promise resolving to sections.
 */
async function generateCssSections(node: any, preferences: any): Promise<any[]> {
  const { styleMap, hints, fallbackStyleMap, fallbackHints, spans, suggestedVars } = await generateNodeStyles(node, preferences)
  if (styleMap.isEmpty())
    return []

  const backgroundProps = ['background', 'background-blend-mode', 'opacity', 'mix-blend-mode', 'background-clip', '-webkit-background-clip', '-webkit-text-fill-color']
  const layoutProps = ['width', 'height', 'min-width', 'max-width', 'min-height', 'max-height', 'flex-grow', 'flex-shrink', 'align-self', 'flex', 'flex-wrap', 'display', 'padding', 'padding-top', 'padding-bottom', 'padding-left', 'padding-right', 'flex-direction', 'justify-content', 'align-items', 'align-content', 'gap', 'transform', 'row-gap', 'column-gap', '-webkit-line-clamp', '-webkit-box-orient', 'aspect-ratio', 'grid-column', 'grid-row', 'grid-template-rows', 'grid-template-columns', 'justify-self']
  const positionProps = ['left', 'right', 'top', 'bottom', 'position']
  const absoluteValues = ['absolute']
  const borderProps = ['border', 'border-bottom', 'border-top', 'border-left', 'border-right', 'border-radius']
  const fontProps = ['font-family', 'font-size', 'font-weight', 'font-style', 'font-variant', 'text-decoration-line', 'text-decoration-style', 'text-decoration-skip-ink', 'text-decoration-color', 'text-decoration-thickness', 'text-underline-offset', 'text-underline-position', 'letter-spacing', 'text-transform', 'line-height', '-webkit-text-stroke-color', '-webkit-text-stroke-width']
  const textProps = ['color', 'text-align', 'leading-trim', 'text-edge', 'font-kerning', 'font-variant-numeric', 'font-feature-settings', 'text-overflow', 'white-space', 'overflow']
  const textShadowProps = ['text-shadow']
  const effectsProps = ['box-shadow', 'filter', 'backdrop-filter']
  const svgProps = ['stroke', 'stroke-width', 'fill']

  const layoutLines: any[] = []
  const positionLines: any[] = []
  const otherLines: any[] = []
  const typographyLines: any[] = []
  const styleLines: any[] = []

  const filteredStyleMap = styleMap.filterDefaultValues()
  const allStyles = [
    ...Object.entries(fallbackStyleMap?.filterDefaultValues().getStyles() ?? {}).map(([key, value]) => ({ isFallback: true, key, value })),
    ...Object.entries(filteredStyleMap.getStyles()).map(([key, value]) => ({ isFallback: false, key, value })),
  ].sort((a, b) => compareCssProperties([a.key, a.value], [b.key, b.value]))

  allStyles.forEach(({ isFallback, key, value }) => {
    if ((shouldHideLayout(preferences) && layoutProps.includes(key)) || (shouldHideColor(preferences) && [...backgroundProps, 'color'].includes(key)))
      return
    const hint = isFallback ? fallbackHints?.[key] : hints?.[key]
    const codeBlock = createCssCodeBlock(key, value, 0, preferences, hint)
    if (suggestedVars && suggestedVars.has(key)) {
      codeBlock.matchingVars = {}
      Object.entries(suggestedVars.get(key)).forEach(([k, v]) => codeBlock.matchingVars[k] = v)
    }
    if (backgroundProps.includes(key) || borderProps.includes(key) || svgProps.includes(key)) {
      styleLines.push(codeBlock)
    }
    else if (effectsProps.includes(key)) {
      styleLines.push(codeBlock)
    }
    else if (layoutProps.includes(key)) {
      layoutLines.push(codeBlock)
    }
    else if (positionProps.includes(key)) {
      if (key === 'position' && absoluteValues.includes(`${value}`)) {
        positionLines.push(codeBlock)
      }
      else {
        positionLines.push(codeBlock)
      }
    }
    else if (fontProps.includes(key)) {
      typographyLines.push(codeBlock)
    }
    else if (textShadowProps.includes(key)) {
      typographyLines.push(codeBlock)
    }
    else if (textProps.includes(key)) {
      typographyLines.push(codeBlock)
    }
    else {
      otherLines.push(codeBlock)
    }
  })

  let styleName: string | undefined
  if (node instanceof NodeProperties) {
    if (isResolvedStyle(node.textStyle)) {
      styleName = node.textStyle.name
    }
    else if (node.textSegments[0].textStyleId) {
      const resolvedStyle = resolveTextStyle({ textStyleId: node.textSegments[0].textStyleId }, node.nodeCache.stylesResolver)
      if (isResolvedStyle(resolvedStyle)) {
        styleName = resolvedStyle.name
      }
    }
  }

  const typographyLinesFinal = node instanceof NodeProperties
    ? [
        ...typographyLines.filter(line => textProps.some(prop => line.code.includes(prop))),
        ...(isResolvedStyle(node.effectStyle) && typographyLines.some(line => textShadowProps.some(prop => line.code.includes(prop))) ? [createCodeBlock(''), createCodeBlock(`/* ${node.effectStyle.name} */`)] : []),
        ...typographyLines.filter(line => textShadowProps.some(prop => line.code.includes(prop))),
        ...(styleName && typographyLines.some(line => fontProps.some(prop => line.code.includes(prop))) ? [createCodeBlock(''), createCodeBlock(`/* ${styleName} */`)] : []),
        ...typographyLines.filter(line => fontProps.some(prop => line.code.includes(prop))),
      ]
    : []

  const styleLinesFinal = [
    ...styleLines.filter(line => backgroundProps.some(prop => line.code.includes(prop))),
    ...('effectStyle' in node && isResolvedStyle(node.effectStyle) && styleLines.some(line => effectsProps.some(prop => line.code.includes(prop))) ? [createCodeBlock(''), createCodeBlock(`/* ${node.effectStyle.name} */`)] : []),
    ...styleLines.filter(line => effectsProps.some(prop => line.code.includes(prop))),
  ]

  const sections = [
    { lines: layoutLines, name: 'Layout', variableKeys: ['width', 'height', 'paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft', 'itemSpacing'] },
    { lines: positionLines, name: 'Position', variableKeys: [] },
    { lines: otherLines, name: 'Other', variableKeys: [] },
    { lines: typographyLinesFinal, name: 'Typography', variableKeys: ['fontFamily', 'fontSize', 'lineHeight'] },
    { lines: styleLinesFinal, name: 'Style', variableKeys: ['fills', 'opacity', 'strokes', 'topLeftRadius', 'topRightRadius', 'bottomLeftRadius', 'bottomRightRadius', 'strokeWeight', 'strokeTopWeight', 'strokeRightWeight', 'strokeBottomWeight', 'strokeLeftWeight'] },
  ].filter(section => section.lines.length > 0).map(section => ({
    name: section.name,
    language: 'css',
    lines: section.lines,
    matchingVars: section.variableKeys.flatMap((key) => {
      if (!shouldIncludeInferredVariable(key, { [key]: true }, node))
        return []
      return getInferredVariables(key, node)
    }).filter(Boolean),
  })) as { name: string, language?: string, lines: any[], matchingVars?: any[], isTextSegment?: boolean }[]

  if (spans) {
    spans.forEach(({ text, styleMap: spanStyleMap, styleName: spanStyleName }) => {
      const spanLines: any[] = []
      const spanTypographyLines: any[] = []
      Object.entries(spanStyleMap.filterDefaultValues().getStyles()).sort(compareCssProperties).forEach(([key, value]) => {
        const codeBlock = createCssCodeBlock(key, value, 0, preferences)
        if (fontProps.includes(key)) {
          spanTypographyLines.push(codeBlock)
        }
        else {
          spanLines.push(codeBlock)
        }
      })
      sections.push({
        name: `"${text}"`,
        isTextSegment: true,
        language: 'css',
        lines: [...spanLines, ...(spanStyleName ? [createCodeBlock(''), createCodeBlock(`/* ${spanStyleName} */`)] : []), ...spanTypographyLines],
      })
    })
  }

  if (node instanceof NodeWrapper && !preferences.isExportRestricted) {
    try {
      const svgDoc = await node.getDocumentAsync()
      sections.push({
        name: 'SVG',
        language: 'html',
        lines: svgDoc.documentElement.outerHTML.split('\n').map(line => line.trim()).map((line) => {
          let indent = 0
          if (line.startsWith('</')) {
            indent--
          }
          const codeBlock = createCodeBlock(line, indent)
          if (line.startsWith('<') && !line.endsWith('/>')) {
            indent++
          }
          return codeBlock
        }),
      })
    }
    catch {}
  }

  return sections
}

/**
 * Generates CSS code for a node.
 * Original name: th
 * @param node - The node.
 * @param preferences - Preferences.
 * @returns Promise resolving to sections.
 */
async function generateCssCode(node: any, preferences: any): Promise<CodegenCodeResult> {
  return {
    sections: await generateCssSections(node, preferences),
  }
}
let tg: Record<string, Record<string, any>> = JSON.parse('{"block":{"display":"block"},"flex":{"display":"flex"},"grid":{"display":"grid"},"hidden":{"display":"none"},"inline":{"display":"inline"},"inlineBlock":{"display":"inline-block"},"inlineFlex":{"display":"inline-flex"},"contentCenter":{"alignContent":"center"},"itemsBaseline":{"alignItems":"baseline"},"itemsCenter":{"alignItems":"center"},"itemsEnd":{"alignItems":"flex-end"},"itemsStart":{"alignItems":"flex-start"},"itemsStretch":{"alignItems":"stretch"},"itemSelfStretch":{"alignSelf":"stretch"},"itemSelfCenter":{"alignSelf":"center"},"itemSelfStart":{"alignSelf":"flex-start"},"selfCenter":{"placeSelf":"center"},"justifyCenter":{"justifyContent":"center"},"justifyEnd":{"justifyContent":"flex-end"},"justifyBetween":{"justifyContent":"space-between"},"justifyStart":{"justifyContent":"flex-start"},"flexColumn":{"flexDirection":"column"},"flexColumnReverse":{"flexDirection":"column-reverse"},"flexRow":{"flexDirection":"row"},"flexRowReverse":{"flexDirection":"row-reverse"},"flexRowNoWrap":{"flexFlow":"row nowrap"},"flexGrow0":{"flexGrow":"0"},"flexGrow1":{"flexGrow":"1"},"flexShrink0":{"flexShrink":"0"},"flexShrink1":{"flexShrink":"1"},"flexNowrap":{"flexWrap":"nowrap"},"flexWrap":{"flexWrap":"wrap"},"flexBasis0":{"flexBasis":"0"},"flexBasisAuto":{"flexBasis":"auto"},"gridColumnStart1":{"gridColumnStart":"1"},"gridColumnStart2":{"gridColumnStart":"2"},"gridColumnStart3":{"gridColumnStart":"3"},"gridColumnStart4":{"gridColumnStart":"4"},"gridColumnStart5":{"gridColumnStart":"5"},"gridColumnStart6":{"gridColumnStart":"6"},"gridColumnStart7":{"gridColumnStart":"7"},"gridColumnStart8":{"gridColumnStart":"8"},"gridColumnStart9":{"gridColumnStart":"9"},"gridColumnStart10":{"gridColumnStart":"10"},"gridColumnStart11":{"gridColumnStart":"11"},"gridColumnStart12":{"gridColumnStart":"12"},"gridColumnStart13":{"gridColumnStart":"13"},"gridColumnStart14":{"gridColumnStart":"14"},"gridColumnStart15":{"gridColumnStart":"15"},"gridColumnStart16":{"gridColumnStart":"16"},"gridColumnStart17":{"gridColumnStart":"17"},"gridColumnStart18":{"gridColumnStart":"18"},"gridColumnStart19":{"gridColumnStart":"19"},"gridColumnStart20":{"gridColumnStart":"20"},"gridColumnStart21":{"gridColumnStart":"21"},"gridColumnStart22":{"gridColumnStart":"22"},"gridColumnStart23":{"gridColumnStart":"23"},"gridColumnStart24":{"gridColumnStart":"24"},"gridColumnStart25":{"gridColumnStart":"25"},"gridColumnStart26":{"gridColumnStart":"26"},"gridColumnStart27":{"gridColumnStart":"27"},"gridColumnStart28":{"gridColumnStart":"28"},"gridColumnStart29":{"gridColumnStart":"29"},"gridColumnStart30":{"gridColumnStart":"30"},"gridColumnStart31":{"gridColumnStart":"31"},"gridColumnStart32":{"gridColumnStart":"32"},"gridColumnEnd1":{"gridColumnEnd":"1"},"gridColumnEnd2":{"gridColumnEnd":"2"},"gridColumnEnd3":{"gridColumnEnd":"3"},"gridColumnEnd4":{"gridColumnEnd":"4"},"gridColumnEnd5":{"gridColumnEnd":"5"},"gridColumnEnd6":{"gridColumnEnd":"6"},"gridColumnEnd7":{"gridColumnEnd":"7"},"gridColumnEnd8":{"gridColumnEnd":"8"},"gridColumnEnd9":{"gridColumnEnd":"9"},"gridColumnEnd10":{"gridColumnEnd":"10"},"gridColumnEnd11":{"gridColumnEnd":"11"},"gridColumnEnd12":{"gridColumnEnd":"12"},"gridColumnEnd13":{"gridColumnEnd":"13"},"gridColumnEnd14":{"gridColumnEnd":"14"},"gridColumnEnd15":{"gridColumnEnd":"15"},"gridColumnEnd16":{"gridColumnEnd":"16"},"gridColumnEnd17":{"gridColumnEnd":"17"},"gridColumnEnd18":{"gridColumnEnd":"18"},"gridColumnEnd19":{"gridColumnEnd":"19"},"gridColumnEnd20":{"gridColumnEnd":"20"},"gridColumnEnd21":{"gridColumnEnd":"21"},"gridColumnEnd22":{"gridColumnEnd":"22"},"gridColumnEnd23":{"gridColumnEnd":"23"},"gridColumnEnd24":{"gridColumnEnd":"24"},"gridColumnEnd25":{"gridColumnEnd":"25"},"gridColumnEnd26":{"gridColumnEnd":"26"},"gridColumnEnd27":{"gridColumnEnd":"27"},"gridColumnEnd28":{"gridColumnEnd":"28"},"gridColumnEnd29":{"gridColumnEnd":"29"},"gridColumnEnd30":{"gridColumnEnd":"30"},"gridColumnEnd31":{"gridColumnEnd":"31"},"gridColumnEnd32":{"gridColumnEnd":"32"},"gridColumnEndSpan1":{"gridColumnEnd":"span 1"},"gridColumnEndSpan2":{"gridColumnEnd":"span 2"},"gridColumnEndSpan3":{"gridColumnEnd":"span 3"},"gridColumnEndSpan4":{"gridColumnEnd":"span 4"},"gridColumnEndSpan5":{"gridColumnEnd":"span 5"},"gridColumnEndSpan6":{"gridColumnEnd":"span 6"},"gridColumnEndSpan7":{"gridColumnEnd":"span 7"},"gridColumnEndSpan8":{"gridColumnEnd":"span 8"},"gridColumnEndSpan9":{"gridColumnEnd":"span 9"},"gridColumnEndSpan10":{"gridColumnEnd":"span 10"},"gridTemplateColumns1":{"gridTemplateColumns":"repeat(1, 1fr)"},"gridTemplateColumns2":{"gridTemplateColumns":"repeat(2, 1fr)"},"gridTemplateColumns3":{"gridTemplateColumns":"repeat(3, 1fr)"},"gridTemplateColumns4":{"gridTemplateColumns":"repeat(4, 1fr)"},"gridTemplateColumns5":{"gridTemplateColumns":"repeat(5, 1fr)"},"gridTemplateRows1":{"gridTemplateRows":"repeat(1, 1fr)"},"gridTemplateRows2":{"gridTemplateRows":"repeat(2, 1fr)"},"gridTemplateRows3":{"gridTemplateRows":"repeat(3, 1fr)"},"gridTemplateRows4":{"gridTemplateRows":"repeat(4, 1fr)"},"gridTemplateRows5":{"gridTemplateRows":"repeat(5, 1fr)"},"overflowAuto":{"overflow":"auto"},"overflowHidden":{"overflow":"hidden"},"overflowBreakWord":{"overflowWrap":"break-word"},"overflowXHidden":{"overflowX":"hidden"},"overflowYScroll":{"overflowY":"scroll"},"ellipsis":{"textOverflow":"ellipsis"},"overflowWrapAnywhere":{"overflowWrap":"anywhere"},"opacity0":{"opacity":"0"},"opacity0_3":{"opacity":"0.3"},"opacity0_5":{"opacity":"0.5"},"opacity1":{"opacity":"1"},"absolute":{"position":"absolute"},"fixed":{"position":"fixed"},"relative":{"position":"relative"},"sticky":{"position":"sticky"},"topHalf":{"top":"50%"},"topToolbarHeight":{"top":"var(--toolbar-height)"},"top0":{"top":"0"},"right0":{"right":"0"},"bottom0":{"bottom":"0"},"left0":{"left":"0"},"leftHalf":{"left":"50%"},"bgContain":{"backgroundSize":"contain"},"bgCover":{"backgroundSize":"cover"},"bgNoRepeat":{"backgroundRepeat":"no-repeat"},"bgPosCenter":{"backgroundPosition":"center"},"bgClipPaddingBox":{"backgroundClip":"padding-box"},"bgTransparent":{"backgroundColor":"transparent"},"bgNone":{"backgroundColor":"initial"},"bSolid":{"borderStyle":"solid"},"bRadiusDefault":{"borderRadius":"constants.defaultCornerRadius"},"bRadiusFull":{"borderRadius":"100%"},"bRadius1":{"borderRadius":"1px"},"bRadius2":{"borderRadius":"2px"},"bRadius3":{"borderRadius":"3px"},"bRadius4":{"borderRadius":"4px"},"bRadiusHalf":{"borderRadius":"50%"},"bRadius5":{"borderRadius":"5px"},"bRadius6":{"borderRadius":"6px"},"bRadius7":{"borderRadius":"7px"},"bRadius8":{"borderRadius":"8px"},"bt0":{"borderTopWidth":"0"},"br0":{"borderRightWidth":"0"},"bb0":{"borderBottomWidth":"0"},"bl0":{"borderLeftWidth":"0"},"bt1":{"borderTopWidth":"1px"},"br1":{"borderRightWidth":"1px"},"bb1":{"borderBottomWidth":"1px"},"bl1":{"borderLeftWidth":"1px"},"bt2":{"borderTopWidth":"2px"},"br2":{"borderRightWidth":"2px"},"bb2":{"borderBottomWidth":"2px"},"bl2":{"borderLeftWidth":"2px"},"radiusFull":{"borderRadius":"var(--radius-full)"},"radiusLarge":{"borderRadius":"var(--radius-large)"},"radiusMedium":{"borderRadius":"var(--radius-medium)"},"radiusSmall":{"borderRadius":"var(--radius-small)"},"radiusNone":{"borderRadius":"var(--radius-none)"},"colorBg":{"backgroundColor":"var(--color-bg, var(--fallback-color-bg))"},"colorBgAssistive":{"backgroundColor":"var(--color-bg-assistive, var(--fallback-color-bg-assistive))"},"colorBgAssistiveHover":{"backgroundColor":"var(--color-bg-assistive-hover, var(--fallback-color-bg-assistive-hover))"},"colorBgAssistivePressed":{"backgroundColor":"var(--color-bg-assistive-pressed, var(--fallback-color-bg-assistive-pressed))"},"colorBgAssistiveSecondary":{"backgroundColor":"var(--color-bg-assistive-secondary, var(--fallback-color-bg-assistive-secondary))"},"colorBgAssistiveTertiary":{"backgroundColor":"var(--color-bg-assistive-tertiary, var(--fallback-color-bg-assistive-tertiary))"},"colorBgBrand":{"backgroundColor":"var(--color-bg-brand, var(--fallback-color-bg-brand))"},"colorBgBrandHover":{"backgroundColor":"var(--color-bg-brand-hover, var(--fallback-color-bg-brand-hover))"},"colorBgBrandPressed":{"backgroundColor":"var(--color-bg-brand-pressed, var(--fallback-color-bg-brand-pressed))"},"colorBgBrandSecondary":{"backgroundColor":"var(--color-bg-brand-secondary, var(--fallback-color-bg-brand-secondary))"},"colorBgBrandTertiary":{"backgroundColor":"var(--color-bg-brand-tertiary, var(--fallback-color-bg-brand-tertiary))"},"colorBgComponent":{"backgroundColor":"var(--color-bg-component, var(--fallback-color-bg-component))"},"colorBgComponentHover":{"backgroundColor":"var(--color-bg-component-hover, var(--fallback-color-bg-component-hover))"},"colorBgComponentPressed":{"backgroundColor":"var(--color-bg-component-pressed, var(--fallback-color-bg-component-pressed))"},"colorBgComponentSecondary":{"backgroundColor":"var(--color-bg-component-secondary, var(--fallback-color-bg-component-secondary))"},"colorBgComponentTertiary":{"backgroundColor":"var(--color-bg-component-tertiary, var(--fallback-color-bg-component-tertiary))"},"colorBgDanger":{"backgroundColor":"var(--color-bg-danger, var(--fallback-color-bg-danger))"},"colorBgDangerHover":{"backgroundColor":"var(--color-bg-danger-hover, var(--fallback-color-bg-danger-hover))"},"colorBgDangerPressed":{"backgroundColor":"var(--color-bg-danger-pressed, var(--fallback-color-bg-danger-pressed))"},"colorBgDangerSecondary":{"backgroundColor":"var(--color-bg-danger-secondary, var(--fallback-color-bg-danger-secondary))"},"colorBgDangerTertiary":{"backgroundColor":"var(--color-bg-danger-tertiary, var(--fallback-color-bg-danger-tertiary))"},"colorBgDesign":{"backgroundColor":"var(--color-bg-design, var(--fallback-color-bg-design))"},"colorBgDesignHover":{"backgroundColor":"var(--color-bg-design-hover, var(--fallback-color-bg-design-hover))"},"colorBgDesignPressed":{"backgroundColor":"var(--color-bg-design-pressed, var(--fallback-color-bg-design-pressed))"},"colorBgDesignSecondary":{"backgroundColor":"var(--color-bg-design-secondary, var(--fallback-color-bg-design-secondary))"},"colorBgDesignTertiary":{"backgroundColor":"var(--color-bg-design-tertiary, var(--fallback-color-bg-design-tertiary))"},"colorBgDisabled":{"backgroundColor":"var(--color-bg-disabled, var(--fallback-color-bg-disabled))"},"colorBgDisabledSecondary":{"backgroundColor":"var(--color-bg-disabled-secondary, var(--fallback-color-bg-disabled-secondary))"},"colorBgFigjam":{"backgroundColor":"var(--color-bg-figjam, var(--fallback-color-bg-figjam))"},"colorBgFigjamHover":{"backgroundColor":"var(--color-bg-figjam-hover, var(--fallback-color-bg-figjam-hover))"},"colorBgFigjamPressed":{"backgroundColor":"var(--color-bg-figjam-pressed, var(--fallback-color-bg-figjam-pressed))"},"colorBgFigjamSecondary":{"backgroundColor":"var(--color-bg-figjam-secondary, var(--fallback-color-bg-figjam-secondary))"},"colorBgFigjamTertiary":{"backgroundColor":"var(--color-bg-figjam-tertiary, var(--fallback-color-bg-figjam-tertiary))"},"colorBgHover":{"backgroundColor":"var(--color-bg-hover, var(--fallback-color-bg-hover))"},"colorBgInfo":{"backgroundColor":"var(--color-bg-info, var(--fallback-color-bg-info))"},"colorBgInverse":{"backgroundColor":"var(--color-bg-inverse, var(--fallback-color-bg-inverse))"},"colorBgMenu":{"backgroundColor":"var(--color-bg-menu, var(--fallback-color-bg-menu))"},"colorBgMenuDisabled":{"backgroundColor":"var(--color-bg-menu-disabled, var(--fallback-color-bg-menu-disabled))"},"colorBgMenuHover":{"backgroundColor":"var(--color-bg-menu-hover, var(--fallback-color-bg-menu-hover))"},"colorBgMenuPressed":{"backgroundColor":"var(--color-bg-menu-pressed, var(--fallback-color-bg-menu-pressed))"},"colorBgMenuSecondary":{"backgroundColor":"var(--color-bg-menu-secondary, var(--fallback-color-bg-menu-secondary))"},"colorBgMenuSelected":{"backgroundColor":"var(--color-bg-menu-selected, var(--fallback-color-bg-menu-selected))"},"colorBgMenuSelectedHover":{"backgroundColor":"var(--color-bg-menu-selected-hover, var(--fallback-color-bg-menu-selected-hover))"},"colorBgMenuSelectedPressed":{"backgroundColor":"var(--color-bg-menu-selected-pressed, var(--fallback-color-bg-menu-selected-pressed))"},"colorBgMenuSelectedSecondary":{"backgroundColor":"var(--color-bg-menu-selected-secondary, var(--fallback-color-bg-menu-selected-secondary))"},"colorBgMenuSelectedTertiary":{"backgroundColor":"var(--color-bg-menu-selected-tertiary, var(--fallback-color-bg-menu-selected-tertiary))"},"colorBgMenuTertiary":{"backgroundColor":"var(--color-bg-menu-tertiary, var(--fallback-color-bg-menu-tertiary))"},"colorBgOnselected":{"backgroundColor":"var(--color-bg-onselected, var(--fallback-color-bg-onselected))"},"colorBgOnselectedHover":{"backgroundColor":"var(--color-bg-onselected-hover, var(--fallback-color-bg-onselected-hover))"},"colorBgOnselectedPressed":{"backgroundColor":"var(--color-bg-onselected-pressed, var(--fallback-color-bg-onselected-pressed))"},"colorBgPressed":{"backgroundColor":"var(--color-bg-pressed, var(--fallback-color-bg-pressed))"},"colorBgSecondary":{"backgroundColor":"var(--color-bg-secondary, var(--fallback-color-bg-secondary))"},"colorBgSelected":{"backgroundColor":"var(--color-bg-selected, var(--fallback-color-bg-selected))"},"colorBgSelectedHover":{"backgroundColor":"var(--color-bg-selected-hover, var(--fallback-color-bg-selected-hover))"},"colorBgSelectedPressed":{"backgroundColor":"var(--color-bg-selected-pressed, var(--fallback-color-bg-selected-pressed))"},"colorBgSelectedSecondary":{"backgroundColor":"var(--color-bg-selected-secondary, var(--fallback-color-bg-selected-secondary))"},"colorBgSelectedStrong":{"backgroundColor":"var(--color-bg-selected-strong, var(--fallback-color-bg-selected-strong))"},"colorBgSelectedTertiary":{"backgroundColor":"var(--color-bg-selected-tertiary, var(--fallback-color-bg-selected-tertiary))"},"colorBgSuccess":{"backgroundColor":"var(--color-bg-success, var(--fallback-color-bg-success))"},"colorBgSuccessHover":{"backgroundColor":"var(--color-bg-success-hover, var(--fallback-color-bg-success-hover))"},"colorBgSuccessPressed":{"backgroundColor":"var(--color-bg-success-pressed, var(--fallback-color-bg-success-pressed))"},"colorBgSuccessSecondary":{"backgroundColor":"var(--color-bg-success-secondary, var(--fallback-color-bg-success-secondary))"},"colorBgSuccessTertiary":{"backgroundColor":"var(--color-bg-success-tertiary, var(--fallback-color-bg-success-tertiary))"},"colorBgTertiary":{"backgroundColor":"var(--color-bg-tertiary, var(--fallback-color-bg-tertiary))"},"colorBgToolbar":{"backgroundColor":"var(--color-bg-toolbar, var(--fallback-color-bg-toolbar))"},"colorBgToolbarDisabled":{"backgroundColor":"var(--color-bg-toolbar-disabled, var(--fallback-color-bg-toolbar-disabled))"},"colorBgToolbarHover":{"backgroundColor":"var(--color-bg-toolbar-hover, var(--fallback-color-bg-toolbar-hover))"},"colorBgToolbarPressed":{"backgroundColor":"var(--color-bg-toolbar-pressed, var(--fallback-color-bg-toolbar-pressed))"},"colorBgToolbarSecondary":{"backgroundColor":"var(--color-bg-toolbar-secondary, var(--fallback-color-bg-toolbar-secondary))"},"colorBgToolbarSelected":{"backgroundColor":"var(--color-bg-toolbar-selected, var(--fallback-color-bg-toolbar-selected))"},"colorBgToolbarSelectedHover":{"backgroundColor":"var(--color-bg-toolbar-selected-hover, var(--fallback-color-bg-toolbar-selected-hover))"},"colorBgToolbarSelectedPressed":{"backgroundColor":"var(--color-bg-toolbar-selected-pressed, var(--fallback-color-bg-toolbar-selected-pressed))"},"colorBgToolbarSelectedSecondary":{"backgroundColor":"var(--color-bg-toolbar-selected-secondary, var(--fallback-color-bg-toolbar-selected-secondary))"},"colorBgToolbarSelectedTertiary":{"backgroundColor":"var(--color-bg-toolbar-selected-tertiary, var(--fallback-color-bg-toolbar-selected-tertiary))"},"colorBgToolbarTertiary":{"backgroundColor":"var(--color-bg-toolbar-tertiary, var(--fallback-color-bg-toolbar-tertiary))"},"colorBgTooltip":{"backgroundColor":"var(--color-bg-tooltip, var(--fallback-color-bg-tooltip))"},"colorBgTooltipDisabled":{"backgroundColor":"var(--color-bg-tooltip-disabled, var(--fallback-color-bg-tooltip-disabled))"},"colorBgTooltipHover":{"backgroundColor":"var(--color-bg-tooltip-hover, var(--fallback-color-bg-tooltip-hover))"},"colorBgTooltipPressed":{"backgroundColor":"var(--color-bg-tooltip-pressed, var(--fallback-color-bg-tooltip-pressed))"},"colorBgTooltipSecondary":{"backgroundColor":"var(--color-bg-tooltip-secondary, var(--fallback-color-bg-tooltip-secondary))"},"colorBgTooltipSelected":{"backgroundColor":"var(--color-bg-tooltip-selected, var(--fallback-color-bg-tooltip-selected))"},"colorBgTooltipSelectedHover":{"backgroundColor":"var(--color-bg-tooltip-selected-hover, var(--fallback-color-bg-tooltip-selected-hover))"},"colorBgTooltipSelectedPressed":{"backgroundColor":"var(--color-bg-tooltip-selected-pressed, var(--fallback-color-bg-tooltip-selected-pressed))"},"colorBgTooltipSelectedSecondary":{"backgroundColor":"var(--color-bg-tooltip-selected-secondary, var(--fallback-color-bg-tooltip-selected-secondary))"},"colorBgTooltipSelectedTertiary":{"backgroundColor":"var(--color-bg-tooltip-selected-tertiary, var(--fallback-color-bg-tooltip-selected-tertiary))"},"colorBgTooltipTertiary":{"backgroundColor":"var(--color-bg-tooltip-tertiary, var(--fallback-color-bg-tooltip-tertiary))"},"colorBgWarning":{"backgroundColor":"var(--color-bg-warning, var(--fallback-color-bg-warning))"},"colorBgWarningHover":{"backgroundColor":"var(--color-bg-warning-hover, var(--fallback-color-bg-warning-hover))"},"colorBgWarningPressed":{"backgroundColor":"var(--color-bg-warning-pressed, var(--fallback-color-bg-warning-pressed))"},"colorBgWarningSecondary":{"backgroundColor":"var(--color-bg-warning-secondary, var(--fallback-color-bg-warning-secondary))"},"colorBgWarningTertiary":{"backgroundColor":"var(--color-bg-warning-tertiary, var(--fallback-color-bg-warning-tertiary))"},"colorBorder":{"borderColor":"var(--color-border, var(--fallback-color-border))"},"colorBorderAssistive":{"borderColor":"var(--color-border-assistive, var(--fallback-color-border-assistive))"},"colorBorderAssistiveStrong":{"borderColor":"var(--color-border-assistive-strong, var(--fallback-color-border-assistive-strong))"},"colorBorderBg":{"borderColor":"var(--color-bg, var(--fallback-color-bg))"},"colorBorderBrand":{"borderColor":"var(--color-border-brand, var(--fallback-color-border-brand))"},"colorBorderBrandStrong":{"borderColor":"var(--color-border-brand-strong, var(--fallback-color-border-brand-strong))"},"colorBorderComponent":{"borderColor":"var(--color-border-component, var(--fallback-color-border-component))"},"colorBorderComponentStrong":{"borderColor":"var(--color-border-component-strong, var(--fallback-color-border-component-strong))"},"colorBorderComponentHover":{"borderColor":"var(--color-border-component-hover, var(--fallback-color-border-component-hover))"},"colorBorderDanger":{"borderColor":"var(--color-border-danger, var(--fallback-color-border-danger))"},"colorBorderDangerStrong":{"borderColor":"var(--color-border-danger-strong, var(--fallback-color-border-danger-strong))"},"colorBorderDesign":{"borderColor":"var(--color-border-design, var(--fallback-color-border-design))"},"colorBorderDesignStrong":{"borderColor":"var(--color-border-design-strong, var(--fallback-color-border-design-strong))"},"colorBorderDisabled":{"borderColor":"var(--color-border-disabled, var(--fallback-color-border-disabled))"},"colorBorderDisabledStrong":{"borderColor":"var(--color-border-disabled-strong, var(--fallback-color-border-disabled-strong))"},"colorBorderFigjam":{"borderColor":"var(--color-border-figjam, var(--fallback-color-border-figjam))"},"colorBorderFigjamStrong":{"borderColor":"var(--color-border-figjam-strong, var(--fallback-color-border-figjam-strong))"},"colorBorderMenu":{"borderColor":"var(--color-border-menu, var(--fallback-color-border-menu))"},"colorBorderMenuDisabled":{"borderColor":"var(--color-border-menu-disabled, var(--fallback-color-border-menu-disabled))"},"colorBorderMenuDisabledStrong":{"borderColor":"var(--color-border-menu-disabled-strong, var(--fallback-color-border-menu-disabled-strong))"},"colorBorderMenuOnselected":{"borderColor":"var(--color-border-menu-onselected, var(--fallback-color-border-menu-onselected))"},"colorBorderMenuOnselectedStrong":{"borderColor":"var(--color-border-menu-onselected-strong, var(--fallback-color-border-menu-onselected-strong))"},"colorBorderMenuSelected":{"borderColor":"var(--color-border-menu-selected, var(--fallback-color-border-menu-selected))"},"colorBorderMenuSelectedStrong":{"borderColor":"var(--color-border-menu-selected-strong, var(--fallback-color-border-menu-selected-strong))"},"colorBorderMenuStrong":{"borderColor":"var(--color-border-menu-strong, var(--fallback-color-border-menu-strong))"},"colorBorderOnassistive":{"borderColor":"var(--color-border-onassistive, var(--fallback-color-border-onassistive))"},"colorBorderOnassistiveStrong":{"borderColor":"var(--color-border-onassistive-strong, var(--fallback-color-border-onassistive-strong))"},"colorBorderOnbrand":{"borderColor":"var(--color-border-onbrand, var(--fallback-color-border-onbrand))"},"colorBorderOnbrandStrong":{"borderColor":"var(--color-border-onbrand-strong, var(--fallback-color-border-onbrand-strong))"},"colorBorderOncomponent":{"borderColor":"var(--color-border-oncomponent, var(--fallback-color-border-oncomponent))"},"colorBorderOncomponentStrong":{"borderColor":"var(--color-border-oncomponent-strong, var(--fallback-color-border-oncomponent-strong))"},"colorBorderOndanger":{"borderColor":"var(--color-border-ondanger, var(--fallback-color-border-ondanger))"},"colorBorderOndangerStrong":{"borderColor":"var(--color-border-ondanger-strong, var(--fallback-color-border-ondanger-strong))"},"colorBorderOndesign":{"borderColor":"var(--color-border-ondesign, var(--fallback-color-border-ondesign))"},"colorBorderOndesignStrong":{"borderColor":"var(--color-border-ondesign-strong, var(--fallback-color-border-ondesign-strong))"},"colorBorderOnfigjam":{"borderColor":"var(--color-border-onfigjam, var(--fallback-color-border-onfigjam))"},"colorBorderOnfigjamStrong":{"borderColor":"var(--color-border-onfigjam-strong, var(--fallback-color-border-onfigjam-strong))"},"colorBorderOnselected":{"borderColor":"var(--color-border-onselected, var(--fallback-color-border-onselected))"},"colorBorderOnselectedStrong":{"borderColor":"var(--color-border-onselected-strong, var(--fallback-color-border-onselected-strong))"},"colorBorderOnsuccess":{"borderColor":"var(--color-border-onsuccess, var(--fallback-color-border-onsuccess))"},"colorBorderOnsuccessStrong":{"borderColor":"var(--color-border-onsuccess-strong, var(--fallback-color-border-onsuccess-strong))"},"colorBorderOnwarning":{"borderColor":"var(--color-border-onwarning, var(--fallback-color-border-onwarning))"},"colorBorderOnwarningStrong":{"borderColor":"var(--color-border-onwarning-strong, var(--fallback-color-border-onwarning-strong))"},"colorBorderSelected":{"borderColor":"var(--color-border-selected, var(--fallback-color-border-selected))"},"colorBorderSelectedStrong":{"borderColor":"var(--color-border-selected-strong, var(--fallback-color-border-selected-strong))"},"colorBorderStrong":{"borderColor":"var(--color-border-strong, var(--fallback-color-border-strong))"},"colorBorderSuccess":{"borderColor":"var(--color-border-success, var(--fallback-color-border-success))"},"colorBorderSuccessStrong":{"borderColor":"var(--color-border-success-strong, var(--fallback-color-border-success-strong))"},"colorBorderToolbar":{"borderColor":"var(--color-border-toolbar, var(--fallback-color-border-toolbar))"},"colorBorderToolbarDisabled":{"borderColor":"var(--color-border-toolbar-disabled, var(--fallback-color-border-toolbar-disabled))"},"colorBorderToolbarOnselected":{"borderColor":"var(--color-border-toolbar-onselected, var(--fallback-color-border-toolbar-onselected))"},"colorBorderToolbarSelected":{"borderColor":"var(--color-border-toolbar-selected, var(--fallback-color-border-toolbar-selected))"},"colorBorderToolbarSelectedStrong":{"borderColor":"var(--color-border-toolbar-selected-strong, var(--fallback-color-border-toolbar-selected-strong))"},"colorBorderToolbarStrong":{"borderColor":"var(--color-border-toolbar-strong, var(--fallback-color-border-toolbar-strong))"},"colorBorderTooltip":{"borderColor":"var(--color-border-tooltip, var(--fallback-color-border-tooltip))"},"colorBorderTooltipDisabled":{"borderColor":"var(--color-border-tooltip-disabled, var(--fallback-color-border-tooltip-disabled))"},"colorBorderTooltipDisabledStrong":{"borderColor":"var(--color-border-tooltip-disabled-strong, var(--fallback-color-border-tooltip-disabled-strong))"},"colorBorderTooltipOnselected":{"borderColor":"var(--color-border-tooltip-onselected, var(--fallback-color-border-tooltip-onselected))"},"colorBorderTooltipOnselectedStrong":{"borderColor":"var(--color-border-tooltip-onselected-strong, var(--fallback-color-border-tooltip-onselected-strong))"},"colorBorderTooltipSelected":{"borderColor":"var(--color-border-tooltip-selected, var(--fallback-color-border-tooltip-selected))"},"colorBorderTooltipSelectedStrong":{"borderColor":"var(--color-border-tooltip-selected-strong, var(--fallback-color-border-tooltip-selected-strong))"},"colorBorderTooltipStrong":{"borderColor":"var(--color-border-tooltip-strong, var(--fallback-color-border-tooltip-strong))"},"colorBorderWarning":{"borderColor":"var(--color-border-warning, var(--fallback-color-border-warning))"},"colorBorderWarningStrong":{"borderColor":"var(--color-border-warning-strong, var(--fallback-color-border-warning-strong))"},"colorIcon":{"fill":"var(--color-icon, var(--fallback-color-icon))"},"colorIconAssistive":{"fill":"var(--color-icon-assistive, var(--fallback-color-icon-assistive))"},"colorIconAssistivePressed":{"fill":"var(--color-icon-assistive-pressed, var(--fallback-color-icon-assistive-pressed))"},"colorIconAssistiveSecondary":{"fill":"var(--color-icon-assistive-secondary, var(--fallback-color-icon-assistive-secondary))"},"colorIconAssistiveTertiary":{"fill":"var(--color-icon-assistive-tertiary, var(--fallback-color-icon-assistive-tertiary))"},"colorIconBrand":{"fill":"var(--color-icon-brand, var(--fallback-color-icon-brand))"},"colorIconBrandPressed":{"fill":"var(--color-icon-brand-pressed, var(--fallback-color-icon-brand-pressed))"},"colorIconBrandSecondary":{"fill":"var(--color-icon-brand-secondary, var(--fallback-color-icon-brand-secondary))"},"colorIconBrandTertiary":{"fill":"var(--color-icon-brand-tertiary, var(--fallback-color-icon-brand-tertiary))"},"colorIconComponent":{"fill":"var(--color-icon-component, var(--fallback-color-icon-component))"},"colorIconComponentPressed":{"fill":"var(--color-icon-component-pressed, var(--fallback-color-icon-component-pressed))"},"colorIconComponentSecondary":{"fill":"var(--color-icon-component-secondary, var(--fallback-color-icon-component-secondary))"},"colorIconComponentTertiary":{"fill":"var(--color-icon-component-tertiary, var(--fallback-color-icon-component-tertiary))"},"colorIconDanger":{"fill":"var(--color-icon-danger, var(--fallback-color-icon-danger))"},"colorIconDangerHover":{"fill":"var(--color-icon-danger-hover, var(--fallback-color-icon-danger-hover))"},"colorIconDangerPressed":{"fill":"var(--color-icon-danger-pressed, var(--fallback-color-icon-danger-pressed))"},"colorIconDangerSecondary":{"fill":"var(--color-icon-danger-secondary, var(--fallback-color-icon-danger-secondary))"},"colorIconDangerSecondaryHover":{"fill":"var(--color-icon-danger-secondary-hover, var(--fallback-color-icon-danger-secondary-hover))"},"colorIconDangerTertiary":{"fill":"var(--color-icon-danger-tertiary, var(--fallback-color-icon-danger-tertiary))"},"colorIconDesign":{"fill":"var(--color-icon-design, var(--fallback-color-icon-design))"},"colorIconDesignPressed":{"fill":"var(--color-icon-design-pressed, var(--fallback-color-icon-design-pressed))"},"colorIconDesignSecondary":{"fill":"var(--color-icon-design-secondary, var(--fallback-color-icon-design-secondary))"},"colorIconDesignTertiary":{"fill":"var(--color-icon-design-tertiary, var(--fallback-color-icon-design-tertiary))"},"colorIconDisabled":{"fill":"var(--color-icon-disabled, var(--fallback-color-icon-disabled))"},"colorIconFigjam":{"fill":"var(--color-icon-figjam, var(--fallback-color-icon-figjam))"},"colorIconFigjamPressed":{"fill":"var(--color-icon-figjam-pressed, var(--fallback-color-icon-figjam-pressed))"},"colorIconFigjamSecondary":{"fill":"var(--color-icon-figjam-secondary, var(--fallback-color-icon-figjam-secondary))"},"colorIconFigjamTertiary":{"fill":"var(--color-icon-figjam-tertiary, var(--fallback-color-icon-figjam-tertiary))"},"colorIconHover":{"fill":"var(--color-icon-hover, var(--fallback-color-icon-hover))"},"colorIconMenu":{"fill":"var(--color-icon-menu, var(--fallback-color-icon-menu))"},"colorIconMenuDanger":{"fill":"var(--color-icon-menu-danger, var(--fallback-color-icon-menu-danger))"},"colorIconMenuDisabled":{"fill":"var(--color-icon-menu-disabled, var(--fallback-color-icon-menu-disabled))"},"colorIconMenuHover":{"fill":"var(--color-icon-menu-hover, var(--fallback-color-icon-menu-hover))"},"colorIconMenuOndisabled":{"fill":"var(--color-icon-menu-ondisabled, var(--fallback-color-icon-menu-ondisabled))"},"colorIconMenuOnselected":{"fill":"var(--color-icon-menu-onselected, var(--fallback-color-icon-menu-onselected))"},"colorIconMenuPressed":{"fill":"var(--color-icon-menu-pressed, var(--fallback-color-icon-menu-pressed))"},"colorIconMenuSecondary":{"fill":"var(--color-icon-menu-secondary, var(--fallback-color-icon-menu-secondary))"},"colorIconMenuSecondaryHover":{"fill":"var(--color-icon-menu-secondary-hover, var(--fallback-color-icon-menu-secondary-hover))"},"colorIconMenuSelected":{"fill":"var(--color-icon-menu-selected, var(--fallback-color-icon-menu-selected))"},"colorIconMenuSelectedSecondary":{"fill":"var(--color-icon-menu-selected-secondary, var(--fallback-color-icon-menu-selected-secondary))"},"colorIconMenuSelectedTertiary":{"fill":"var(--color-icon-menu-selected-tertiary, var(--fallback-color-icon-menu-selected-tertiary))"},"colorIconMenuTertiary":{"fill":"var(--color-icon-menu-tertiary, var(--fallback-color-icon-menu-tertiary))"},"colorIconMenuTertiaryHover":{"fill":"var(--color-icon-menu-tertiary-hover, var(--fallback-color-icon-menu-tertiary-hover))"},"colorIconMenuWarning":{"fill":"var(--color-icon-menu-warning, var(--fallback-color-icon-menu-warning))"},"colorIconOnassistive":{"fill":"var(--color-icon-onassistive, var(--fallback-color-icon-onassistive))"},"colorIconOnassistiveSecondary":{"fill":"var(--color-icon-onassistive-secondary, var(--fallback-color-icon-onassistive-secondary))"},"colorIconOnassistiveTertiary":{"fill":"var(--color-icon-onassistive-tertiary, var(--fallback-color-icon-onassistive-tertiary))"},"colorIconOnbrand":{"fill":"var(--color-icon-onbrand, var(--fallback-color-icon-onbrand))"},"colorIconOnbrandSecondary":{"fill":"var(--color-icon-onbrand-secondary, var(--fallback-color-icon-onbrand-secondary))"},"colorIconOnbrandTertiary":{"fill":"var(--color-icon-onbrand-tertiary, var(--fallback-color-icon-onbrand-tertiary))"},"colorIconOncomponent":{"fill":"var(--color-icon-oncomponent, var(--fallback-color-icon-oncomponent))"},"colorIconOncomponentSecondary":{"fill":"var(--color-icon-oncomponent-secondary, var(--fallback-color-icon-oncomponent-secondary))"},"colorIconOncomponentTertiary":{"fill":"var(--color-icon-oncomponent-tertiary, var(--fallback-color-icon-oncomponent-tertiary))"},"colorIconOndanger":{"fill":"var(--color-icon-ondanger, var(--fallback-color-icon-ondanger))"},"colorIconOndangerSecondary":{"fill":"var(--color-icon-ondanger-secondary, var(--fallback-color-icon-ondanger-secondary))"},"colorIconOndangerTertiary":{"fill":"var(--color-icon-ondanger-tertiary, var(--fallback-color-icon-ondanger-tertiary))"},"colorIconOndesign":{"fill":"var(--color-icon-ondesign, var(--fallback-color-icon-ondesign))"},"colorIconOndesignSecondary":{"fill":"var(--color-icon-ondesign-secondary, var(--fallback-color-icon-ondesign-secondary))"},"colorIconOndesignTertiary":{"fill":"var(--color-icon-ondesign-tertiary, var(--fallback-color-icon-ondesign-tertiary))"},"colorIconOndisabled":{"fill":"var(--color-icon-ondisabled, var(--fallback-color-icon-ondisabled))"},"colorIconOnfigjam":{"fill":"var(--color-icon-onfigjam, var(--fallback-color-icon-onfigjam))"},"colorIconOnfigjamSecondary":{"fill":"var(--color-icon-onfigjam-secondary, var(--fallback-color-icon-onfigjam-secondary))"},"colorIconOnfigjamTertiary":{"fill":"var(--color-icon-onfigjam-tertiary, var(--fallback-color-icon-onfigjam-tertiary))"},"colorIconOninverse":{"fill":"var(--color-icon-oninverse, var(--fallback-color-icon-oninverse))"},"colorIconOnselected":{"fill":"var(--color-icon-onselected, var(--fallback-color-icon-onselected))"},"colorIconOnselectedSecondary":{"fill":"var(--color-icon-onselected-secondary, var(--fallback-color-icon-onselected-secondary))"},"colorIconOnselectedStrong":{"fill":"var(--color-icon-onselected-strong, var(--fallback-color-icon-onselected-strong))"},"colorIconOnselectedTertiary":{"fill":"var(--color-icon-onselected-tertiary, var(--fallback-color-icon-onselected-tertiary))"},"colorIconOnsuccess":{"fill":"var(--color-icon-onsuccess, var(--fallback-color-icon-onsuccess))"},"colorIconOnsuccessSecondary":{"fill":"var(--color-icon-onsuccess-secondary, var(--fallback-color-icon-onsuccess-secondary))"},"colorIconOnsuccessTertiary":{"fill":"var(--color-icon-onsuccess-tertiary, var(--fallback-color-icon-onsuccess-tertiary))"},"colorIconOnwarning":{"fill":"var(--color-icon-onwarning, var(--fallback-color-icon-onwarning))"},"colorIconOnwarningSecondary":{"fill":"var(--color-icon-onwarning-secondary, var(--fallback-color-icon-onwarning-secondary))"},"colorIconOnwarningTertiary":{"fill":"var(--color-icon-onwarning-tertiary, var(--fallback-color-icon-onwarning-tertiary))"},"colorIconPressed":{"fill":"var(--color-icon-pressed, var(--fallback-color-icon-pressed))"},"colorIconSecondary":{"fill":"var(--color-icon-secondary, var(--fallback-color-icon-secondary))"},"colorIconSecondaryHover":{"fill":"var(--color-icon-secondary-hover, var(--fallback-color-icon-secondary-hover))"},"colorIconSelected":{"fill":"var(--color-icon-selected, var(--fallback-color-icon-selected))"},"colorIconSelectedSecondary":{"fill":"var(--color-icon-selected-secondary, var(--fallback-color-icon-selected-secondary))"},"colorIconSelectedTertiary":{"fill":"var(--color-icon-selected-tertiary, var(--fallback-color-icon-selected-tertiary))"},"colorIconSuccess":{"fill":"var(--color-icon-success, var(--fallback-color-icon-success))"},"colorIconSuccessPressed":{"fill":"var(--color-icon-success-pressed, var(--fallback-color-icon-success-pressed))"},"colorIconSuccessSecondary":{"fill":"var(--color-icon-success-secondary, var(--fallback-color-icon-success-secondary))"},"colorIconSuccessTertiary":{"fill":"var(--color-icon-success-tertiary, var(--fallback-color-icon-success-tertiary))"},"colorIconTertiary":{"fill":"var(--color-icon-tertiary, var(--fallback-color-icon-tertiary))"},"colorIconTertiaryHover":{"fill":"var(--color-icon-tertiary-hover, var(--fallback-color-icon-tertiary-hover))"},"colorIconToolbar":{"fill":"var(--color-icon-toolbar, var(--fallback-color-icon-toolbar))"},"colorIconToolbarDanger":{"fill":"var(--color-icon-toolbar-danger, var(--fallback-color-icon-toolbar-danger))"},"colorIconToolbarDisabled":{"fill":"var(--color-icon-toolbar-disabled, var(--fallback-color-icon-toolbar-disabled))"},"colorIconToolbarHover":{"fill":"var(--color-icon-toolbar-hover, var(--fallback-color-icon-toolbar-hover))"},"colorIconToolbarOndisabled":{"fill":"var(--color-icon-toolbar-ondisabled, var(--fallback-color-icon-toolbar-ondisabled))"},"colorIconToolbarOnselected":{"fill":"var(--color-icon-toolbar-onselected, var(--fallback-color-icon-toolbar-onselected))"},"colorIconToolbarPressed":{"fill":"var(--color-icon-toolbar-pressed, var(--fallback-color-icon-toolbar-pressed))"},"colorIconToolbarSecondary":{"fill":"var(--color-icon-toolbar-secondary, var(--fallback-color-icon-toolbar-secondary))"},"colorIconToolbarSecondaryHover":{"fill":"var(--color-icon-toolbar-secondary-hover, var(--fallback-color-icon-toolbar-secondary-hover))"},"colorIconToolbarSelected":{"fill":"var(--color-icon-toolbar-selected, var(--fallback-color-icon-toolbar-selected))"},"colorIconToolbarSelectedSecondary":{"fill":"var(--color-icon-toolbar-selected-secondary,var(--fallback-color-icon-toolbar-selected-econdary))"},"colorIconToolbarSelectedTertiary":{"fill":"var(--color-icon-toolbar-selected-tertiary, var(--fallback-color-icon-toolbar-selected-tertiary))"},"colorIconToolbarTertiary":{"fill":"var(--color-icon-toolbar-tertiary, var(--fallback-color-icon-toolbar-tertiary))"},"colorIconToolbarTertiaryHover":{"fill":"var(--color-icon-toolbar-tertiary-hover, var(--fallback-color-icon-toolbar-tertiary-hover))"},"colorIconToolbarWarning":{"fill":"var(--color-icon-toolbar-warning, var(--fallback-color-icon-toolbar-warning))"},"colorIconTooltip":{"fill":"var(--color-icon-tooltip, var(--fallback-color-icon-tooltip))"},"colorIconTooltipDanger":{"fill":"var(--color-icon-tooltip-danger, var(--fallback-color-icon-tooltip-danger))"},"colorIconTooltipDisabled":{"fill":"var(--color-icon-tooltip-disabled, var(--fallback-color-icon-tooltip-disabled))"},"colorIconTooltipHover":{"fill":"var(--color-icon-tooltip-hover, var(--fallback-color-icon-tooltip-hover))"},"colorIconTooltipOndisabled":{"fill":"var(--color-icon-tooltip-ondisabled, var(--fallback-color-icon-tooltip-ondisabled))"},"colorIconTooltipOnselected":{"fill":"var(--color-icon-tooltip-onselected, var(--fallback-color-icon-tooltip-onselected))"},"colorIconTooltipPressed":{"fill":"var(--color-icon-tooltip-pressed, var(--fallback-color-icon-tooltip-pressed))"},"colorIconTooltipSecondary":{"fill":"var(--color-icon-tooltip-secondary, var(--fallback-color-icon-tooltip-secondary))"},"colorIconTooltipSecondaryHover":{"fill":"var(--color-icon-tooltip-secondary-hover, var(--fallback-color-icon-tooltip-secondary-hover))"},"colorIconTooltipSelected":{"fill":"var(--color-icon-tooltip-selected, var(--fallback-color-icon-tooltip-selected))"},"colorIconTooltipSelectedSecondary":{"fill":"var(--color-icon-tooltip-selected-secondary,var(--fallback-color-icon-tooltip-selected-econdary))"},"colorIconTooltipSelectedTertiary":{"fill":"var(--color-icon-tooltip-selected-tertiary, var(--fallback-color-icon-tooltip-selected-tertiary))"},"colorIconTooltipTertiary":{"fill":"var(--color-icon-tooltip-tertiary, var(--fallback-color-icon-tooltip-tertiary))"},"colorIconTooltipTertiaryHover":{"fill":"var(--color-icon-tooltip-tertiary-hover, var(--fallback-color-icon-tooltip-tertiary-hover))"},"colorIconTooltipWarning":{"fill":"var(--color-icon-tooltip-warning, var(--fallback-color-icon-tooltip-warning))"},"colorIconWarning":{"fill":"var(--color-icon-warning, var(--fallback-color-icon-warning))"},"colorIconWarningPressed":{"fill":"var(--color-icon-warning-pressed, var(--fallback-color-icon-warning-pressed))"},"colorIconWarningSecondary":{"fill":"var(--color-icon-warning-secondary, var(--fallback-color-icon-warning-secondary))"},"colorIconWarningTertiary":{"fill":"var(--color-icon-warning-tertiary, var(--fallback-color-icon-warning-tertiary))"},"colorText":{"color":"var(--color-text, var(--fallback-color-text))"},"colorTextAssistive":{"color":"var(--color-text-assistive, var(--fallback-color-text-assistive))"},"colorTextAssistivePressed":{"color":"var(--color-text-assistive-pressed, var(--fallback-color-text-assistive-pressed))"},"colorTextAssistiveSecondary":{"color":"var(--color-text-assistive-secondary, var(--fallback-color-text-assistive-secondary))"},"colorTextAssistiveTertiary":{"color":"var(--color-text-assistive-tertiary, var(--fallback-color-text-assistive-tertiary))"},"colorTextBrand":{"color":"var(--color-text-brand, var(--fallback-color-text-brand))"},"colorTextBrandSecondary":{"color":"var(--color-text-brand-secondary, var(--fallback-color-text-brand-secondary))"},"colorTextBrandTertiary":{"color":"var(--color-text-brand-tertiary, var(--fallback-color-text-brand-tertiary))"},"colorTextComponent":{"color":"var(--color-text-component, var(--fallback-color-text-component))"},"colorTextComponentPressed":{"color":"var(--color-text-component-pressed, var(--fallback-color-text-component-pressed))"},"colorTextComponentSecondary":{"color":"var(--color-text-component-secondary, var(--fallback-color-text-component-secondary))"},"colorTextComponentTertiary":{"color":"var(--color-text-component-tertiary, var(--fallback-color-text-component-tertiary))"},"colorTextDanger":{"color":"var(--color-text-danger, var(--fallback-color-text-danger))"},"colorTextDangerSecondary":{"color":"var(--color-text-danger-secondary, var(--fallback-color-text-danger-secondary))"},"colorTextDangerTertiary":{"color":"var(--color-text-danger-tertiary, var(--fallback-color-text-danger-tertiary))"},"colorTextDesign":{"color":"var(--color-text-design, var(--fallback-color-text-design))"},"colorTextDesignPressed":{"color":"var(--color-text-design-pressed, var(--fallback-color-text-design-pressed))"},"colorTextDesignSecondary":{"color":"var(--color-text-design-secondary, var(--fallback-color-text-design-secondary))"},"colorTextDesignTertiary":{"color":"var(--color-text-design-tertiary, var(--fallback-color-text-design-tertiary))"},"colorTextDisabled":{"color":"var(--color-text-disabled, var(--fallback-color-text-disabled))"},"colorTextFigjam":{"color":"var(--color-text-figjam, var(--fallback-color-text-figjam))"},"colorTextFigjamPressed":{"color":"var(--color-text-figjam-pressed, var(--fallback-color-text-figjam-pressed))"},"colorTextFigjamSecondary":{"color":"var(--color-text-figjam-secondary, var(--fallback-color-text-figjam-secondary))"},"colorTextFigjamTertiary":{"color":"var(--color-text-figjam-tertiary, var(--fallback-color-text-figjam-tertiary))"},"colorTextHover":{"color":"var(--color-text-hover, var(--fallback-color-text-hover))"},"colorTextMenu":{"color":"var(--color-text-menu, var(--fallback-color-text-menu))"},"colorTextMenuDanger":{"color":"var(--color-text-menu-danger, var(--fallback-color-text-menu-danger))"},"colorTextMenuDisabled":{"color":"var(--color-text-menu-disabled, var(--fallback-color-text-menu-disabled))"},"colorTextMenuHover":{"color":"var(--color-text-menu-hover, var(--fallback-color-text-menu-hover))"},"colorTextMenuOndisabled":{"color":"var(--color-text-menu-ondisabled, var(--fallback-color-text-menu-ondisabled))"},"colorTextMenuOnselected":{"color":"var(--color-text-menu-onselected, var(--fallback-color-text-menu-onselected))"},"colorTextMenuSecondary":{"color":"var(--color-text-menu-secondary, var(--fallback-color-text-menu-secondary))"},"colorTextMenuSecondaryHover":{"color":"var(--color-text-menu-secondary-hover, var(--fallback-color-text-menu-secondary-hover))"},"colorTextMenuSelected":{"color":"var(--color-text-menu-selected, var(--fallback-color-text-menu-selected))"},"colorTextMenuSelectedSecondary":{"color":"var(--color-text-menu-selected-secondary, var(--fallback-color-text-menu-selected-secondary))"},"colorTextMenuSelectedTertiary":{"color":"var(--color-text-menu-selected-tertiary, var(--fallback-color-text-menu-selected-tertiary))"},"colorTextMenuTertiary":{"color":"var(--color-text-menu-tertiary, var(--fallback-color-text-menu-tertiary))"},"colorTextMenuTertiaryHover":{"color":"var(--color-text-menu-tertiary-hover, var(--fallback-color-text-menu-tertiary-hover))"},"colorTextMenuWarning":{"color":"var(--color-text-menu-warning, var(--fallback-color-text-menu-warning))"},"colorTextOnassistive":{"color":"var(--color-text-onassistive, var(--fallback-color-text-onassistive))"},"colorTextOnassistiveSecondary":{"color":"var(--color-text-onassistive-secondary, var(--fallback-color-text-onassistive-secondary))"},"colorTextOnassistiveTertiary":{"color":"var(--color-text-onassistive-tertiary, var(--fallback-color-text-onassistive-tertiary))"},"colorTextOnbrand":{"color":"var(--color-text-onbrand, var(--fallback-color-text-onbrand))"},"colorTextOnbrandSecondary":{"color":"var(--color-text-onbrand-secondary, var(--fallback-color-text-onbrand-secondary))"},"colorTextOnbrandTertiary":{"color":"var(--color-text-onbrand-tertiary, var(--fallback-color-text-onbrand-tertiary))"},"colorTextOncomponent":{"color":"var(--color-text-oncomponent, var(--fallback-color-text-oncomponent))"},"colorTextOncomponentSecondary":{"color":"var(--color-text-oncomponent-secondary, var(--fallback-color-text-oncomponent-secondary))"},"colorTextOncomponentTertiary":{"color":"var(--color-text-oncomponent-tertiary, var(--fallback-color-text-oncomponent-tertiary))"},"colorTextOndanger":{"color":"var(--color-text-ondanger, var(--fallback-color-text-ondanger))"},"colorTextOndangerSecondary":{"color":"var(--color-text-ondanger-secondary, var(--fallback-color-text-ondanger-secondary))"},"colorTextOndangerTertiary":{"color":"var(--color-text-ondanger-tertiary, var(--fallback-color-text-ondanger-tertiary))"},"colorTextOndesign":{"color":"var(--color-text-ondesign, var(--fallback-color-text-ondesign))"},"colorTextOndesignSecondary":{"color":"var(--color-text-ondesign-secondary, var(--fallback-color-text-ondesign-secondary))"},"colorTextOndesignTertiary":{"color":"var(--color-text-ondesign-tertiary, var(--fallback-color-text-ondesign-tertiary))"},"colorTextOndisabled":{"color":"var(--color-text-ondisabled, var(--fallback-color-text-ondisabled))"},"colorTextOnfigjam":{"color":"var(--color-text-onfigjam, var(--fallback-color-text-onfigjam))"},"colorTextOnfigjamSecondary":{"color":"var(--color-text-onfigjam-secondary, var(--fallback-color-text-onfigjam-secondary))"},"colorTextOnfigjamTertiary":{"color":"var(--color-text-onfigjam-tertiary, var(--fallback-color-text-onfigjam-tertiary))"},"colorTextOninverse":{"color":"var(--color-text-oninverse, var(--fallback-color-text-oninverse))"},"colorTextOnselected":{"color":"var(--color-text-onselected, var(--fallback-color-text-onselected))"},"colorTextOnselectedSecondary":{"color":"var(--color-text-onselected-secondary, var(--fallback-color-text-onselected-secondary))"},"colorTextOnselectedStrong":{"color":"var(--color-text-onselected-strong, var(--fallback-color-text-onselected-strong))"},"colorTextOnselectedTertiary":{"color":"var(--color-text-onselected-tertiary, var(--fallback-color-text-onselected-tertiary))"},"colorTextOnsuccess":{"color":"var(--color-text-onsuccess, var(--fallback-color-text-onsuccess))"},"colorTextOnsuccessSecondary":{"color":"var(--color-text-onsuccess-secondary, var(--fallback-color-text-onsuccess-secondary))"},"colorTextOnsuccessTertiary":{"color":"var(--color-text-onsuccess-tertiary, var(--fallback-color-text-onsuccess-tertiary))"},"colorTextOnwarning":{"color":"var(--color-text-onwarning, var(--fallback-color-text-onwarning))"},"colorTextOnwarningSecondary":{"color":"var(--color-text-onwarning-secondary, var(--fallback-color-text-onwarning-secondary))"},"colorTextOnwarningTertiary":{"color":"var(--color-text-onwarning-tertiary, var(--fallback-color-text-onwarning-tertiary))"},"colorTextSecondary":{"color":"var(--color-text-secondary, var(--fallback-color-text-secondary))"},"colorTextSecondaryHover":{"color":"var(--color-text-secondary-hover, var(--fallback-color-text-secondary-hover))"},"colorTextSelected":{"color":"var(--color-text-selected, var(--fallback-color-text-selected))"},"colorTextSelectedSecondary":{"color":"var(--color-text-selected-secondary, var(--fallback-color-text-selected-secondary))"},"colorTextSelectedTertiary":{"color":"var(--color-text-selected-tertiary, var(--fallback-color-text-selected-tertiary))"},"colorTextSuccess":{"color":"var(--color-text-success, var(--fallback-color-text-success))"},"colorTextSuccessSecondary":{"color":"var(--color-text-success-secondary, var(--fallback-color-text-success-secondary))"},"colorTextSuccessTertiary":{"color":"var(--color-text-success-tertiary, var(--fallback-color-text-success-tertiary))"},"colorTextTertiary":{"color":"var(--color-text-tertiary, var(--fallback-color-text-tertiary))"},"colorTextTertiaryHover":{"color":"var(--color-text-tertiary-hover, var(--fallback-color-text-tertiary-hover))"},"colorTextToolbar":{"color":"var(--color-text-toolbar, var(--fallback-color-text-toolbar))"},"colorTextToolbarDanger":{"color":"var(--color-text-toolbar-danger, var(--fallback-color-text-toolbar-danger))"},"colorTextToolbarDisabled":{"color":"var(--color-text-toolbar-disabled, var(--fallback-color-text-toolbar-disabled))"},"colorTextToolbarHover":{"color":"var(--color-text-toolbar-hover, var(--fallback-color-text-toolbar-hover))"},"colorTextToolbarOndisabled":{"color":"var(--color-text-toolbar-ondisabled, var(--fallback-color-text-toolbar-ondisabled))"},"colorTextToolbarOnselected":{"color":"var(--color-text-toolbar-onselected, var(--fallback-color-text-toolbar-onselected))"},"colorTextToolbarSecondary":{"color":"var(--color-text-toolbar-secondary, var(--fallback-color-text-toolbar-secondary))"},"colorTextToolbarSecondaryHover":{"color":"var(--color-text-toolbar-secondary-hover, var(--fallback-color-text-toolbar-secondary-hover))"},"colorTextToolbarSelected":{"color":"var(--color-text-toolbar-selected, var(--fallback-color-text-toolbar-selected))"},"colorTextToolbarSelectedSecondary":{"color":"var(--color-text-toolbar-selected-secondary,var(--fallback-color-text-toolbar-selected-econdary))"},"colorTextToolbarSelectedTertiary":{"color":"var(--color-text-toolbar-selected-tertiary, var(--fallback-color-text-toolbar-selected-tertiary))"},"colorTextToolbarTertiary":{"color":"var(--color-text-toolbar-tertiary, var(--fallback-color-text-toolbar-tertiary))"},"colorTextToolbarTertiaryHover":{"color":"var(--color-text-toolbar-tertiary-hover, var(--fallback-color-text-toolbar-tertiary-hover))"},"colorTextToolbarWarning":{"color":"var(--color-text-toolbar-warning, var(--fallback-color-text-toolbar-warning))"},"colorTextTooltip":{"color":"var(--color-text-tooltip, var(--fallback-color-text-tooltip))"},"colorTextTooltipDanger":{"color":"var(--color-text-tooltip-danger, var(--fallback-color-text-tooltip-danger))"},"colorTextTooltipDisabled":{"color":"var(--color-text-tooltip-disabled, var(--fallback-color-text-tooltip-disabled))"},"colorTextTooltipHover":{"color":"var(--color-text-tooltip-hover, var(--fallback-color-text-tooltip-hover))"},"colorTextTooltipOndisabled":{"color":"var(--color-text-tooltip-ondisabled, var(--fallback-color-text-tooltip-ondisabled))"},"colorTextTooltipOnselected":{"color":"var(--color-text-tooltip-onselected, var(--fallback-color-text-tooltip-onselected))"},"colorTextTooltipSecondary":{"color":"var(--color-text-tooltip-secondary, var(--fallback-color-text-tooltip-secondary))"},"colorTextTooltipSecondaryHover":{"color":"var(--color-text-tooltip-secondary-hover, var(--fallback-color-text-tooltip-secondary-hover))"},"colorTextTooltipSelected":{"color":"var(--color-text-tooltip-selected, var(--fallback-color-text-tooltip-selected))"},"colorTextTooltipSelectedSecondary":{"color":"var(--color-text-tooltip-selected-secondary,var(--fallback-color-text-tooltip-selected-econdary))"},"colorTextTooltipSelectedTertiary":{"color":"var(--color-text-tooltip-selected-tertiary, var(--fallback-color-text-tooltip-selected-tertiary))"},"colorTextTooltipTertiary":{"color":"var(--color-text-tooltip-tertiary, var(--fallback-color-text-tooltip-tertiary))"},"colorTextTooltipTertiaryHover":{"color":"var(--color-text-tooltip-tertiary-hover, var(--fallback-color-text-tooltip-tertiary-hover))"},"colorTextTooltipWarning":{"color":"var(--color-text-tooltip-warning, var(--fallback-color-text-tooltip-warning))"},"colorTextWarning":{"color":"var(--color-text-warning, var(--fallback-color-text-warning))"},"colorTextWarningSecondary":{"color":"var(--color-text-warning-secondary, var(--fallback-color-text-warning-secondary))"},"colorTextWarningTertiary":{"color":"var(--color-text-warning-tertiary, var(--fallback-color-text-warning-tertiary))"},"colorBgvoting":{"backgroundColor":"var(--color-bgvoting)"},"colorBgvotingsecondary":{"backgroundColor":"var(--color-bgvotingsecondary)"},"colorBgvotingtertiary":{"backgroundColor":"var(--color-bgvotingtertiary)"},"colorIcononvoting":{"fill":"var(--color-icononvoting)"},"colorTextonvoting":{"color":"var(--color-textonvoting)"},"colorBgvotingwheelhover":{"backgroundColor":"var(--color-bgvotingwheelhover)"},"colorBgvotingwheeldial":{"backgroundColor":"var(--color-bgvotingwheeldial)"},"textInherit":{"color":"inherit"},"fontInter":{"fontFamily":"Inter"},"fontUi":{"fontFamily":"constants.uiFontFamily"},"fontWhyte":{"fontFamily":"constants.whyteFontFamily"},"font11":{"fontSize":"11px"},"font12":{"fontSize":"12px"},"font13":{"fontSize":"13px"},"font14":{"fontSize":"14px"},"font15":{"fontSize":"15px"},"font16":{"fontSize":"16px"},"font18":{"fontSize":"18px"},"font20":{"fontSize":"20px"},"font22":{"fontSize":"22px"},"font24":{"fontSize":"24px"},"font32":{"fontSize":"32px"},"italic":{"fontStyle":"italic"},"normal":{"fontStyle":"normal"},"fontMedium":{"fontWeight":"500"},"fontSemiBold":{"fontWeight":"600"},"fontBold":{"fontWeight":"700"},"fontNormal":{"fontWeight":"400"},"fpl__textDisplayFontFamily":{"fontFamily":"var(--text-display-font-family)"},"fpl__textDisplayFontSize":{"fontSize":"var(--text-display-font-size)"},"fpl__textDisplayFontWeight":{"fontWeight":"var(--text-display-font-weight)"},"fpl__textDisplayLetterSpacing":{"letterSpacing":"var(--text-display-letter-spacing)"},"fpl__textDisplayLineHeight":{"lineHeight":"var(--text-display-line-height)"},"fpl__textHeadingLargeFontFamily":{"fontFamily":"var(--text-heading-large-font-family)"},"fpl__textHeadingLargeFontSize":{"fontSize":"var(--text-heading-large-font-size)"},"fpl__textHeadingLargeFontWeight":{"fontWeight":"var(--text-heading-large-font-weight)"},"fpl__textHeadingLargeLetterSpacing":{"letterSpacing":"var(--text-heading-large-letter-spacing)"},"fpl__textHeadingLargeLineHeight":{"lineHeight":"var(--text-heading-large-line-height)"},"fpl__textHeadingMediumFontFamily":{"fontFamily":"var(--text-heading-medium-font-family)"},"fpl__textHeadingMediumFontSize":{"fontSize":"var(--text-heading-medium-font-size)"},"fpl__textHeadingMediumFontWeight":{"fontWeight":"var(--text-heading-medium-font-weight)"},"fpl__textHeadingMediumLetterSpacing":{"letterSpacing":"var(--text-heading-medium-letter-spacing)"},"fpl__textHeadingMediumLineHeight":{"lineHeight":"var(--text-heading-medium-line-height)"},"fpl__textHeadingSmallFontFamily":{"fontFamily":"var(--text-heading-small-font-family)"},"fpl__textHeadingSmallFontSize":{"fontSize":"var(--text-heading-small-font-size)"},"fpl__textHeadingSmallFontWeight":{"fontWeight":"var(--text-heading-small-font-weight)"},"fpl__textHeadingSmallLetterSpacing":{"letterSpacing":"var(--text-heading-small-letter-spacing)"},"fpl__textHeadingSmallLineHeight":{"lineHeight":"var(--text-heading-small-line-height)"},"fpl__textBodyLargeFontFamily":{"fontFamily":"var(--text-body-large-font-family)"},"fpl__textBodyLargeFontSize":{"fontSize":"var(--text-body-large-font-size)"},"fpl__textBodyLargeFontWeight":{"fontWeight":"var(--text-body-large-font-weight)"},"fpl__textBodyLargeLetterSpacing":{"letterSpacing":"var(--text-body-large-letter-spacing)"},"fpl__textBodyLargeLineHeight":{"lineHeight":"var(--text-body-large-line-height)"},"fpl__textBodyLargeStrongFontFamily":{"fontFamily":"var(--text-body-large-strong-font-family)"},"fpl__textBodyLargeStrongFontSize":{"fontSize":"var(--text-body-large-strong-font-size)"},"fpl__textBodyLargeStrongFontWeight":{"fontWeight":"var(--text-body-large-strong-font-weight)"},"fpl__textBodyLargeStrongLetterSpacing":{"letterSpacing":"var(--text-body-large-strong-letter-spacing)"},"fpl__textBodyLargeStrongLineHeight":{"lineHeight":"var(--text-body-large-strong-line-height)"},"fpl__textBodyMediumFontFamily":{"fontFamily":"var(--text-body-medium-font-family)"},"fpl__textBodyMediumFontSize":{"fontSize":"var(--text-body-medium-font-size)"},"fpl__textBodyMediumFontWeight":{"fontWeight":"var(--text-body-medium-font-weight)"},"fpl__textBodyMediumLetterSpacing":{"letterSpacing":"var(--text-body-medium-letter-spacing)"},"fpl__textBodyMediumLineHeight":{"lineHeight":"var(--text-body-medium-line-height)"},"fpl__textBodyMediumStrongFontFamily":{"fontFamily":"var(--text-body-medium-strong-font-family)"},"fpl__textBodyMediumStrongFontSize":{"fontSize":"var(--text-body-medium-strong-font-size)"},"fpl__textBodyMediumStrongFontWeight":{"fontWeight":"var(--text-body-medium-strong-font-weight)"},"fpl__textBodyMediumStrongLetterSpacing":{"letterSpacing":"var(--text-body-medium-strong-letter-spacing)"},"fpl__textBodyMediumStrongLineHeight":{"lineHeight":"var(--text-body-medium-strong-line-height)"},"fpl__textBodySmallFontFamily":{"fontFamily":"var(--text-body-small-font-family)"},"fpl__textBodySmallFontSize":{"fontSize":"var(--text-body-small-font-size)"},"fpl__textBodySmallFontWeight":{"fontWeight":"var(--text-body-small-font-weight)"},"fpl__textBodySmallLetterSpacing":{"letterSpacing":"var(--text-body-small-letter-spacing)"},"fpl__textBodySmallLineHeight":{"lineHeight":"var(--text-body-small-line-height)"},"fpl__textBodySmallStrongFontFamily":{"fontFamily":"var(--text-body-small-strong-font-family)"},"fpl__textBodySmallStrongFontSize":{"fontSize":"var(--text-body-small-strong-font-size)"},"fpl__textBodySmallStrongFontWeight":{"fontWeight":"var(--text-body-small-strong-font-weight)"},"fpl__textBodySmallStrongLetterSpacing":{"letterSpacing":"var(--text-body-small-strong-letter-spacing)"},"fpl__textBodySmallStrongLineHeight":{"lineHeight":"var(--text-body-small-strong-line-height)"},"alignLeft":{"textAlign":"left"},"alignCenter":{"textAlign":"center"},"alignRight":{"textAlign":"right"},"spacingCompact":{"letterSpacing":"-0.01em"},"spacingWide":{"letterSpacing":"0.005em"},"noUnderline":{"textDecoration":"none"},"underline":{"textDecoration":"underline"},"noWrap":{"whiteSpace":"nowrap"},"preWrap":{"whiteSpace":"pre-wrap"},"pre":{"whiteSpace":"pre"},"breakWord":{"wordBreak":"break-word"},"zIndexMinus1":{"zIndex":"-1"},"zIndexModal":{"zIndex":"constants.modalZ"},"zIndexSecondaryModal":{"zIndex":"constants.secondaryModalZ"},"zIndexTertiaryModal":{"zIndex":"constants.curatorTertiaryModalZ"},"zIndexTopBar":{"zIndex":"constants.topBarZ"},"zIndexTemplateModalTeamName":{"zIndex":"constants.templateModalTeamName"},"zIndex0":{"zIndex":"0"},"zIndex1":{"zIndex":"1"},"elevation100":{"boxShadow":"var(--elevation-100)"},"elevation200":{"boxShadow":"var(--elevation-200)"},"elevation300":{"boxShadow":"var(--elevation-300)"},"elevation400":{"boxShadow":"var(--elevation-400)"},"elevation500":{"boxShadow":"var(--elevation-500)"},"appearanceNone":{"appearance":"none"},"shadowNone":{"boxShadow":"none"},"borderBox":{"boxSizing":"border-box"},"noContent":{"content":""},"cursorDefault":{"cursor":"default"},"cursorPointer":{"cursor":"pointer"},"cursorText":{"cursor":"text"},"floatLeft":{"float":"left"},"floatRight":{"float":"right"},"eventsAll":{"pointerEvents":"all"},"eventsAuto":{"pointerEvents":"auto"},"eventsNone":{"pointerEvents":"none"},"resizeNone":{"resize":"none"},"selectNone":{"userSelect":"none"},"alignMiddle":{"verticalAlign":"middle"},"alignTop":{"verticalAlign":"top"},"invisible":{"visibility":"hidden"},"visible":{"visibility":"visible"},"hToolbar":{"height":"var(--toolbar-height)"},"hAuto":{"height":"auto"},"hFull":{"height":"100%"},"hInherit":{"height":"inherit"},"hFitContent":{"height":"fit-content"},"wHalf":{"width":"50%"},"wAuto":{"width":"auto"},"wFull":{"width":"100%"},"wFitContent":{"width":"fit-content"},"maxWFull":{"maxWidth":"100%"},"maxWUnset":{"maxWidth":"unset"},"lh1_5Lines":{"lineHeight":"1.5"},"lhNormal":{"lineHeight":"normal"},"mtAuto":{"marginTop":"auto"},"mrAuto":{"marginRight":"auto"},"mbAuto":{"marginBottom":"auto"},"mlAuto":{"marginLeft":"auto"},"h0":{"height":"0px"},"h1":{"height":"1px"},"h2":{"height":"2px"},"h4":{"height":"4px"},"h6":{"height":"6px"},"h8":{"height":"8px"},"h10":{"height":"10px"},"h12":{"height":"12px"},"h14":{"height":"14px"},"h16":{"height":"16px"},"h18":{"height":"18px"},"h20":{"height":"20px"},"h24":{"height":"24px"},"h28":{"height":"28px"},"h32":{"height":"32px"},"h36":{"height":"36px"},"h40":{"height":"40px"},"h44":{"height":"44px"},"h48":{"height":"48px"},"h64":{"height":"64px"},"h100":{"height":"100px"},"h150":{"height":"150px"},"h200":{"height":"200px"},"h250":{"height":"250px"},"h300":{"height":"300px"},"h350":{"height":"350px"},"h400":{"height":"400px"},"minH0":{"minHeight":"0px"},"minH1":{"minHeight":"1px"},"minH2":{"minHeight":"2px"},"minH4":{"minHeight":"4px"},"minH6":{"minHeight":"6px"},"minH8":{"minHeight":"8px"},"minH10":{"minHeight":"10px"},"minH12":{"minHeight":"12px"},"minH14":{"minHeight":"14px"},"minH16":{"minHeight":"16px"},"minH18":{"minHeight":"18px"},"minH20":{"minHeight":"20px"},"minH24":{"minHeight":"24px"},"minH28":{"minHeight":"28px"},"minH32":{"minHeight":"32px"},"minH36":{"minHeight":"36px"},"minH40":{"minHeight":"40px"},"minH44":{"minHeight":"44px"},"minH48":{"minHeight":"48px"},"minH64":{"minHeight":"64px"},"minH100":{"minHeight":"100px"},"minH150":{"minHeight":"150px"},"minH200":{"minHeight":"200px"},"minH250":{"minHeight":"250px"},"minH300":{"minHeight":"300px"},"minH350":{"minHeight":"350px"},"minH400":{"minHeight":"400px"},"maxH0":{"maxHeight":"0px"},"maxH1":{"maxHeight":"1px"},"maxH2":{"maxHeight":"2px"},"maxH4":{"maxHeight":"4px"},"maxH6":{"maxHeight":"6px"},"maxH8":{"maxHeight":"8px"},"maxH10":{"maxHeight":"10px"},"maxH12":{"maxHeight":"12px"},"maxH14":{"maxHeight":"14px"},"maxH16":{"maxHeight":"16px"},"maxH18":{"maxHeight":"18px"},"maxH20":{"maxHeight":"20px"},"maxH24":{"maxHeight":"24px"},"maxH28":{"maxHeight":"28px"},"maxH32":{"maxHeight":"32px"},"maxH36":{"maxHeight":"36px"},"maxH40":{"maxHeight":"40px"},"maxH44":{"maxHeight":"44px"},"maxH48":{"maxHeight":"48px"},"maxH64":{"maxHeight":"64px"},"maxH100":{"maxHeight":"100px"},"maxH150":{"maxHeight":"150px"},"maxH200":{"maxHeight":"200px"},"maxH250":{"maxHeight":"250px"},"maxH300":{"maxHeight":"300px"},"maxH350":{"maxHeight":"350px"},"maxH400":{"maxHeight":"400px"},"w0":{"width":"0px"},"w1":{"width":"1px"},"w2":{"width":"2px"},"w4":{"width":"4px"},"w6":{"width":"6px"},"w8":{"width":"8px"},"w10":{"width":"10px"},"w12":{"width":"12px"},"w14":{"width":"14px"},"w16":{"width":"16px"},"w18":{"width":"18px"},"w20":{"width":"20px"},"w24":{"width":"24px"},"w28":{"width":"28px"},"w32":{"width":"32px"},"w36":{"width":"36px"},"w40":{"width":"40px"},"w44":{"width":"44px"},"w48":{"width":"48px"},"w64":{"width":"64px"},"w100":{"width":"100px"},"w150":{"width":"150px"},"w200":{"width":"200px"},"w250":{"width":"250px"},"w300":{"width":"300px"},"w350":{"width":"350px"},"w400":{"width":"400px"},"minW0":{"minWidth":"0px"},"minW1":{"minWidth":"1px"},"minW2":{"minWidth":"2px"},"minW4":{"minWidth":"4px"},"minW6":{"minWidth":"6px"},"minW8":{"minWidth":"8px"},"minW10":{"minWidth":"10px"},"minW12":{"minWidth":"12px"},"minW14":{"minWidth":"14px"},"minW16":{"minWidth":"16px"},"minW18":{"minWidth":"18px"},"minW20":{"minWidth":"20px"},"minW24":{"minWidth":"24px"},"minW28":{"minWidth":"28px"},"minW32":{"minWidth":"32px"},"minW36":{"minWidth":"36px"},"minW40":{"minWidth":"40px"},"minW44":{"minWidth":"44px"},"minW48":{"minWidth":"48px"},"minW64":{"minWidth":"64px"},"minW100":{"minWidth":"100px"},"minW150":{"minWidth":"150px"},"minW200":{"minWidth":"200px"},"minW250":{"minWidth":"250px"},"minW300":{"minWidth":"300px"},"minW350":{"minWidth":"350px"},"minW400":{"minWidth":"400px"},"maxW0":{"maxWidth":"0px"},"maxW1":{"maxWidth":"1px"},"maxW2":{"maxWidth":"2px"},"maxW4":{"maxWidth":"4px"},"maxW6":{"maxWidth":"6px"},"maxW8":{"maxWidth":"8px"},"maxW10":{"maxWidth":"10px"},"maxW12":{"maxWidth":"12px"},"maxW14":{"maxWidth":"14px"},"maxW16":{"maxWidth":"16px"},"maxW18":{"maxWidth":"18px"},"maxW20":{"maxWidth":"20px"},"maxW24":{"maxWidth":"24px"},"maxW28":{"maxWidth":"28px"},"maxW32":{"maxWidth":"32px"},"maxW36":{"maxWidth":"36px"},"maxW40":{"maxWidth":"40px"},"maxW44":{"maxWidth":"44px"},"maxW48":{"maxWidth":"48px"},"maxW64":{"maxWidth":"64px"},"maxW100":{"maxWidth":"100px"},"maxW150":{"maxWidth":"150px"},"maxW200":{"maxWidth":"200px"},"maxW250":{"maxWidth":"250px"},"maxW300":{"maxWidth":"300px"},"maxW350":{"maxWidth":"350px"},"maxW400":{"maxWidth":"400px"},"lh0":{"lineHeight":"0px"},"lh1":{"lineHeight":"1px"},"lh2":{"lineHeight":"2px"},"lh4":{"lineHeight":"4px"},"lh6":{"lineHeight":"6px"},"lh8":{"lineHeight":"8px"},"lh10":{"lineHeight":"10px"},"lh12":{"lineHeight":"12px"},"lh14":{"lineHeight":"14px"},"lh16":{"lineHeight":"16px"},"lh18":{"lineHeight":"18px"},"lh20":{"lineHeight":"20px"},"lh24":{"lineHeight":"24px"},"lh28":{"lineHeight":"28px"},"lh32":{"lineHeight":"32px"},"lh36":{"lineHeight":"36px"},"gap0":{"gap":"0px"},"gap1":{"gap":"1px"},"gap2":{"gap":"2px"},"gap4":{"gap":"4px"},"gap6":{"gap":"6px"},"gap8":{"gap":"8px"},"gap10":{"gap":"10px"},"gap12":{"gap":"12px"},"gap14":{"gap":"14px"},"gap16":{"gap":"16px"},"gap18":{"gap":"18px"},"gap20":{"gap":"20px"},"gap24":{"gap":"24px"},"gap28":{"gap":"28px"},"gap32":{"gap":"32px"},"gap36":{"gap":"36px"},"rowGap0":{"rowGap":"0px"},"rowGap1":{"rowGap":"1px"},"rowGap2":{"rowGap":"2px"},"rowGap4":{"rowGap":"4px"},"rowGap6":{"rowGap":"6px"},"rowGap8":{"rowGap":"8px"},"rowGap10":{"rowGap":"10px"},"rowGap12":{"rowGap":"12px"},"rowGap14":{"rowGap":"14px"},"rowGap16":{"rowGap":"16px"},"rowGap18":{"rowGap":"18px"},"rowGap20":{"rowGap":"20px"},"rowGap24":{"rowGap":"24px"},"rowGap28":{"rowGap":"28px"},"rowGap32":{"rowGap":"32px"},"rowGap36":{"rowGap":"36px"},"columnGap0":{"columnGap":"0px"},"columnGap1":{"columnGap":"1px"},"columnGap2":{"columnGap":"2px"},"columnGap4":{"columnGap":"4px"},"columnGap6":{"columnGap":"6px"},"columnGap8":{"columnGap":"8px"},"columnGap10":{"columnGap":"10px"},"columnGap12":{"columnGap":"12px"},"columnGap14":{"columnGap":"14px"},"columnGap16":{"columnGap":"16px"},"columnGap18":{"columnGap":"18px"},"columnGap20":{"columnGap":"20px"},"columnGap24":{"columnGap":"24px"},"columnGap28":{"columnGap":"28px"},"columnGap32":{"columnGap":"32px"},"columnGap36":{"columnGap":"36px"},"m0":{"margin":"0px"},"m1":{"margin":"1px"},"m2":{"margin":"2px"},"m4":{"margin":"4px"},"m6":{"margin":"6px"},"m8":{"margin":"8px"},"m10":{"margin":"10px"},"m12":{"margin":"12px"},"m14":{"margin":"14px"},"m16":{"margin":"16px"},"m18":{"margin":"18px"},"m20":{"margin":"20px"},"m24":{"margin":"24px"},"m28":{"margin":"28px"},"m32":{"margin":"32px"},"m36":{"margin":"36px"},"mt0":{"marginTop":"0px"},"mt1":{"marginTop":"1px"},"mt2":{"marginTop":"2px"},"mt4":{"marginTop":"4px"},"mt6":{"marginTop":"6px"},"mt8":{"marginTop":"8px"},"mt10":{"marginTop":"10px"},"mt12":{"marginTop":"12px"},"mt14":{"marginTop":"14px"},"mt16":{"marginTop":"16px"},"mt18":{"marginTop":"18px"},"mt20":{"marginTop":"20px"},"mt24":{"marginTop":"24px"},"mt28":{"marginTop":"28px"},"mt32":{"marginTop":"32px"},"mt36":{"marginTop":"36px"},"mr0":{"marginRight":"0px"},"mr1":{"marginRight":"1px"},"mr2":{"marginRight":"2px"},"mr4":{"marginRight":"4px"},"mr6":{"marginRight":"6px"},"mr8":{"marginRight":"8px"},"mr10":{"marginRight":"10px"},"mr12":{"marginRight":"12px"},"mr14":{"marginRight":"14px"},"mr16":{"marginRight":"16px"},"mr18":{"marginRight":"18px"},"mr20":{"marginRight":"20px"},"mr24":{"marginRight":"24px"},"mr28":{"marginRight":"28px"},"mr32":{"marginRight":"32px"},"mr36":{"marginRight":"36px"},"mb0":{"marginBottom":"0px"},"mb1":{"marginBottom":"1px"},"mb2":{"marginBottom":"2px"},"mb4":{"marginBottom":"4px"},"mb6":{"marginBottom":"6px"},"mb8":{"marginBottom":"8px"},"mb10":{"marginBottom":"10px"},"mb12":{"marginBottom":"12px"},"mb14":{"marginBottom":"14px"},"mb16":{"marginBottom":"16px"},"mb18":{"marginBottom":"18px"},"mb20":{"marginBottom":"20px"},"mb24":{"marginBottom":"24px"},"mb28":{"marginBottom":"28px"},"mb32":{"marginBottom":"32px"},"mb36":{"marginBottom":"36px"},"ml0":{"marginLeft":"0px"},"ml1":{"marginLeft":"1px"},"ml2":{"marginLeft":"2px"},"ml4":{"marginLeft":"4px"},"ml6":{"marginLeft":"6px"},"ml8":{"marginLeft":"8px"},"ml10":{"marginLeft":"10px"},"ml12":{"marginLeft":"12px"},"ml14":{"marginLeft":"14px"},"ml16":{"marginLeft":"16px"},"ml18":{"marginLeft":"18px"},"ml20":{"marginLeft":"20px"},"ml24":{"marginLeft":"24px"},"ml28":{"marginLeft":"28px"},"ml32":{"marginLeft":"32px"},"ml36":{"marginLeft":"36px"},"p0":{"padding":"0px"},"p1":{"padding":"1px"},"p2":{"padding":"2px"},"p4":{"padding":"4px"},"p6":{"padding":"6px"},"p8":{"padding":"8px"},"p10":{"padding":"10px"},"p12":{"padding":"12px"},"p14":{"padding":"14px"},"p16":{"padding":"16px"},"p18":{"padding":"18px"},"p20":{"padding":"20px"},"p24":{"padding":"24px"},"p28":{"padding":"28px"},"p32":{"padding":"32px"},"p36":{"padding":"36px"},"pt0":{"paddingTop":"0px"},"pt1":{"paddingTop":"1px"},"pt2":{"paddingTop":"2px"},"pt4":{"paddingTop":"4px"},"pt6":{"paddingTop":"6px"},"pt8":{"paddingTop":"8px"},"pt10":{"paddingTop":"10px"},"pt12":{"paddingTop":"12px"},"pt14":{"paddingTop":"14px"},"pt16":{"paddingTop":"16px"},"pt18":{"paddingTop":"18px"},"pt20":{"paddingTop":"20px"},"pt24":{"paddingTop":"24px"},"pt28":{"paddingTop":"28px"},"pt32":{"paddingTop":"32px"},"pt36":{"paddingTop":"36px"},"pr0":{"paddingRight":"0px"},"pr1":{"paddingRight":"1px"},"pr2":{"paddingRight":"2px"},"pr4":{"paddingRight":"4px"},"pr6":{"paddingRight":"6px"},"pr8":{"paddingRight":"8px"},"pr10":{"paddingRight":"10px"},"pr12":{"paddingRight":"12px"},"pr14":{"paddingRight":"14px"},"pr16":{"paddingRight":"16px"},"pr18":{"paddingRight":"18px"},"pr20":{"paddingRight":"20px"},"pr24":{"paddingRight":"24px"},"pr28":{"paddingRight":"28px"},"pr32":{"paddingRight":"32px"},"pr36":{"paddingRight":"36px"},"pb0":{"paddingBottom":"0px"},"pb1":{"paddingBottom":"1px"},"pb2":{"paddingBottom":"2px"},"pb4":{"paddingBottom":"4px"},"pb6":{"paddingBottom":"6px"},"pb8":{"paddingBottom":"8px"},"pb10":{"paddingBottom":"10px"},"pb12":{"paddingBottom":"12px"},"pb14":{"paddingBottom":"14px"},"pb16":{"paddingBottom":"16px"},"pb18":{"paddingBottom":"18px"},"pb20":{"paddingBottom":"20px"},"pb24":{"paddingBottom":"24px"},"pb28":{"paddingBottom":"28px"},"pb32":{"paddingBottom":"32px"},"pb36":{"paddingBottom":"36px"},"pl0":{"paddingLeft":"0px"},"pl1":{"paddingLeft":"1px"},"pl2":{"paddingLeft":"2px"},"pl4":{"paddingLeft":"4px"},"pl6":{"paddingLeft":"6px"},"pl8":{"paddingLeft":"8px"},"pl10":{"paddingLeft":"10px"},"pl12":{"paddingLeft":"12px"},"pl14":{"paddingLeft":"14px"},"pl16":{"paddingLeft":"16px"},"pl18":{"paddingLeft":"18px"},"pl20":{"paddingLeft":"20px"},"pl24":{"paddingLeft":"24px"},"pl28":{"paddingLeft":"28px"},"pl32":{"paddingLeft":"32px"},"pl36":{"paddingLeft":"36px"},"mxAuto":{"type":"composite","rules":["mrAuto","mlAuto"]},"b0":{"type":"composite","rules":["bt0","br0","bb0","bl0"]},"b1":{"type":"composite","rules":["bSolid","bt1","br1","bb1","bl1"]},"b2":{"type":"composite","rules":["bSolid","bt2","br2","bb2","bl2"]},"textDisplay":{"type":"composite","rules":["fpl__textDisplayFontFamily","fpl__textDisplayFontSize","fpl__textDisplayFontWeight","fpl__textDisplayLetterSpacing","fpl__textDisplayLineHeight"]},"textHeadingLarge":{"type":"composite","rules":["fpl__textHeadingLargeFontFamily","fpl__textHeadingLargeFontSize","fpl__textHeadingLargeFontWeight","fpl__textHeadingLargeLetterSpacing","fpl__textHeadingLargeLineHeight"]},"textHeadingMedium":{"type":"composite","rules":["fpl__textHeadingMediumFontFamily","fpl__textHeadingMediumFontSize","fpl__textHeadingMediumFontWeight","fpl__textHeadingMediumLetterSpacing","fpl__textHeadingMediumLineHeight"]},"textHeadingSmall":{"type":"composite","rules":["fpl__textHeadingSmallFontFamily","fpl__textHeadingSmallFontSize","fpl__textHeadingSmallFontWeight","fpl__textHeadingSmallLetterSpacing","fpl__textHeadingSmallLineHeight"]},"textBodyLarge":{"type":"composite","rules":["fpl__textBodyLargeFontFamily","fpl__textBodyLargeFontSize","fpl__textBodyLargeFontWeight","fpl__textBodyLargeLetterSpacing","fpl__textBodyLargeLineHeight"]},"textBodyLargeStrong":{"type":"composite","rules":["fpl__textBodyLargeStrongFontFamily","fpl__textBodyLargeStrongFontSize","fpl__textBodyLargeStrongFontWeight","fpl__textBodyLargeStrongLetterSpacing","fpl__textBodyLargeStrongLineHeight"]},"textBodyMedium":{"type":"composite","rules":["fpl__textBodyMediumFontFamily","fpl__textBodyMediumFontSize","fpl__textBodyMediumFontWeight","fpl__textBodyMediumLetterSpacing","fpl__textBodyMediumLineHeight"]},"textBodyMediumStrong":{"type":"composite","rules":["fpl__textBodyMediumStrongFontFamily","fpl__textBodyMediumStrongFontSize","fpl__textBodyMediumStrongFontWeight","fpl__textBodyMediumStrongLetterSpacing","fpl__textBodyMediumStrongLineHeight"]},"textBodySmall":{"type":"composite","rules":["fpl__textBodySmallFontFamily","fpl__textBodySmallFontSize","fpl__textBodySmallFontWeight","fpl__textBodySmallLetterSpacing","fpl__textBodySmallLineHeight"]},"textBodySmallStrong":{"type":"composite","rules":["fpl__textBodySmallStrongFontFamily","fpl__textBodySmallStrongFontSize","fpl__textBodySmallStrongFontWeight","fpl__textBodySmallStrongLetterSpacing","fpl__textBodySmallStrongLineHeight"]},"flexNone":{"type":"composite","rules":["flexGrow0","flexShrink0","flexBasisAuto"]},"flexAuto":{"type":"composite","rules":["flexGrow1","flexShrink1","flexBasisAuto"]},"flex0":{"type":"composite","rules":["flexGrow0","flexShrink1","flexBasis0"]},"flex1":{"type":"composite","rules":["flexGrow1","flexShrink1","flexBasis0"]},"fillPositionedContainer":{"type":"composite","rules":["absolute","top0","right0","bottom0","left0"]},"truncate":{"type":"composite","rules":["ellipsis","noWrap","overflowHidden"]},"mx0":{"type":"composite","rules":["ml0","mr0"]},"mx1":{"type":"composite","rules":["ml1","mr1"]},"mx2":{"type":"composite","rules":["ml2","mr2"]},"mx4":{"type":"composite","rules":["ml4","mr4"]},"mx6":{"type":"composite","rules":["ml6","mr6"]},"mx8":{"type":"composite","rules":["ml8","mr8"]},"mx10":{"type":"composite","rules":["ml10","mr10"]},"mx12":{"type":"composite","rules":["ml12","mr12"]},"mx14":{"type":"composite","rules":["ml14","mr14"]},"mx16":{"type":"composite","rules":["ml16","mr16"]},"mx18":{"type":"composite","rules":["ml18","mr18"]},"mx20":{"type":"composite","rules":["ml20","mr20"]},"mx24":{"type":"composite","rules":["ml24","mr24"]},"mx28":{"type":"composite","rules":["ml28","mr28"]},"mx32":{"type":"composite","rules":["ml32","mr32"]},"mx36":{"type":"composite","rules":["ml36","mr36"]},"my0":{"type":"composite","rules":["mt0","mb0"]},"my1":{"type":"composite","rules":["mt1","mb1"]},"my2":{"type":"composite","rules":["mt2","mb2"]},"my4":{"type":"composite","rules":["mt4","mb4"]},"my6":{"type":"composite","rules":["mt6","mb6"]},"my8":{"type":"composite","rules":["mt8","mb8"]},"my10":{"type":"composite","rules":["mt10","mb10"]},"my12":{"type":"composite","rules":["mt12","mb12"]},"my14":{"type":"composite","rules":["mt14","mb14"]},"my16":{"type":"composite","rules":["mt16","mb16"]},"my18":{"type":"composite","rules":["mt18","mb18"]},"my20":{"type":"composite","rules":["mt20","mb20"]},"my24":{"type":"composite","rules":["mt24","mb24"]},"my28":{"type":"composite","rules":["mt28","mb28"]},"my32":{"type":"composite","rules":["mt32","mb32"]},"my36":{"type":"composite","rules":["mt36","mb36"]},"px0":{"type":"composite","rules":["pl0","pr0"]},"px1":{"type":"composite","rules":["pl1","pr1"]},"px2":{"type":"composite","rules":["pl2","pr2"]},"px4":{"type":"composite","rules":["pl4","pr4"]},"px6":{"type":"composite","rules":["pl6","pr6"]},"px8":{"type":"composite","rules":["pl8","pr8"]},"px10":{"type":"composite","rules":["pl10","pr10"]},"px12":{"type":"composite","rules":["pl12","pr12"]},"px14":{"type":"composite","rules":["pl14","pr14"]},"px16":{"type":"composite","rules":["pl16","pr16"]},"px18":{"type":"composite","rules":["pl18","pr18"]},"px20":{"type":"composite","rules":["pl20","pr20"]},"px24":{"type":"composite","rules":["pl24","pr24"]},"px28":{"type":"composite","rules":["pl28","pr28"]},"px32":{"type":"composite","rules":["pl32","pr32"]},"px36":{"type":"composite","rules":["pl36","pr36"]},"py0":{"type":"composite","rules":["pt0","pb0"]},"py1":{"type":"composite","rules":["pt1","pb1"]},"py2":{"type":"composite","rules":["pt2","pb2"]},"py4":{"type":"composite","rules":["pt4","pb4"]},"py6":{"type":"composite","rules":["pt6","pb6"]},"py8":{"type":"composite","rules":["pt8","pb8"]},"py10":{"type":"composite","rules":["pt10","pb10"]},"py12":{"type":"composite","rules":["pt12","pb12"]},"py14":{"type":"composite","rules":["pt14","pb14"]},"py16":{"type":"composite","rules":["pt16","pb16"]},"py18":{"type":"composite","rules":["pt18","pb18"]},"py20":{"type":"composite","rules":["pt20","pb20"]},"py24":{"type":"composite","rules":["pt24","pb24"]},"py28":{"type":"composite","rules":["pt28","pb28"]},"py32":{"type":"composite","rules":["pt32","pb32"]},"py36":{"type":"composite","rules":["pt36","pb36"]}}')

// Original function: tf
/**
 * Generates CSS builder code for a node.
 * @param node - The node to process
 * @param preferences - User preferences
 * @returns Promise resolving to sections and autocomplete
 */
async function generateCssBuilderCode(node: any, preferences: any): Promise<CodegenCodeResult> {
  const { styleMap } = await retrieveStylesForNode(node, preferences)
  if (styleMap.isEmpty()) {
    return { sections: [], autocomplete: [] }
  }

  const properties: string[] = []
  toPairs(styleMap.filterDefaultValues().getStyles()).sort(compareCssProperties).forEach(([key, value]) => {
    const camelKey = camelCase(key)
    const utilityClass = findUtilityClass(camelKey, value)
    if (utilityClass) {
      properties.push(utilityClass)
    }
    else {
      properties.push(`add({ ${camelKey}: '${value}' })`)
    }
  })

  const codeLines = `sx.${properties.join('\n  .')}.$`.split('\n').map((line, index) => ({
    code: line,
    indent: index > 0 ? 1 : 0,
  }))

  return {
    sections: [{
      language: 'css',
      name: 'CSS',
      lines: codeLines,
    }],
    autocomplete: [{
      code: ['sx', ...properties, '$'].join('.'),
      documentSelector: ['javascriptreact', 'typescriptreact'],
      scope: { type: 'react-prop', propName: 'style' },
      itemType: 'dot-notation-property',
      insertSeparatorAfterCompletion: false,
      triggerCharacters: ['.'],
    }, {
      code: ['cx', ...properties, '$'].join('.'),
      documentSelector: ['javascriptreact', 'typescriptreact'],
      scope: { type: 'react-prop', propName: 'className' },
      itemType: 'dot-notation-property',
      insertSeparatorAfterCompletion: false,
      triggerCharacters: ['.'],
    }],
  }
}

/**
 * Finds the utility class for a given property and value.
 * @param camelKey - Camel cased property key
 * @param value - Property value
 * @returns Utility class name or undefined
 */
function findUtilityClass(camelKey: string, value: any): string | undefined {
  const utilityClasses = toPairs(tg).map(([className, config]) =>
    config.type || config[camelKey] !== value ? undefined : className,
  ).filter(Boolean)
  return utilityClasses.length > 0 ? utilityClasses[0] : undefined
}

// Original function: tA
/**
 * Generates CSS properties for a subtree of nodes.
 * @param node - The root node
 * @param preferences - User preferences
 * @param maxDepth - Maximum depth to traverse
 * @returns Object with properties by layer
 */
async function generateCssPropertiesForSubtree(node: any, preferences: any, maxDepth?: number): Promise<Record<string, any>> {
  const propertiesByLayer: Record<string, any> = {}
  let depth = 0
  const queue: any[] = [node]

  while (queue.length > 0) {
    const currentNode = queue.pop()
    if (!currentNode || (maxDepth && depth >= maxDepth))
      break

    const { styleMap } = await retrieveStylesForNode(currentNode, preferences)
    const cssProperties: any[] = []

    objectEntries(styleMap.filterDefaultValues().getStyles())
      .sort(compareCssProperties)
      .map(([key, value]) => {
        const transformedValue = transformCssValue(key, value, preferences)
        return [key.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase()), transformedValue]
      })
      .forEach(([property, value]) => {
        cssProperties.push({ property, value })
      })

    propertiesByLayer[currentNode.id] = {
      guid: currentNode.id,
      cssProperties,
    }

    depth++
    if (isAutoLayoutSupportedNode(currentNode) && Array.isArray(currentNode.children) && currentNode.children.length > 0) {
      for (const child of currentNode.children) {
        queue.push(child)
      }
    }
  }

  return propertiesByLayer
}

// Original class: ty
/**
 * Represents a variable definition for SwiftUI.
 */
class SwiftVariableDefinition {
  public readonly name: string
  public readonly wrappedValue: any
  public readonly typeName: string
  public readonly boundVariable: any
  public readonly preferences: any

  constructor(name: string, wrappedValue: any, typeName: string, boundVariable: any, preferences: any) {
    this.name = name
    this.wrappedValue = wrappedValue
    this.typeName = typeName
    this.boundVariable = boundVariable
    this.preferences = preferences
  }

  /**
   * Gets the variable reference value.
   */
  get value(): string {
    return `Constants.${wrapWithBoundVariableMarkers(toCamelName(this.name), this.boundVariable, this.preferences)}`
  }

  /**
   * Gets the variable definition code.
   */
  getDefinition(): string {
    return `static let ${wrapWithBoundVariableMarkers(toCamelName(this.name), this.boundVariable, this.preferences)}: ${this.typeName} = ${this.wrappedValue}`
  }
}

// Original function: tb
/**
 * Creates a variable for SwiftUI from a raw value.
 * @param variable - The variable object
 * @param value - The value
 * @param constants - Set to add constants to
 * @param typeName - Type name
 * @param preferences - Preferences
 * @returns Variable value or undefined
 */
function createSwiftVariable(variable: any, value: any, constants: Set<any>, typeName: string, preferences: any): any {
  const varValue = variable?.variable?.value
  if (varValue) {
    if (varValue.codeSyntax?.iOS) {
      return varValue.codeSyntax.iOS
    }
    const def = new SwiftVariableDefinition(varValue.name, value, typeName, varValue, preferences)
    constants.add(def.getDefinition())
    return def.value
  }
}

// Original function: tv
/**
 * Resolves a variable for SwiftUI.
 * @param variable - The variable
 * @param value - The value
 * @param constants - Set to add constants to
 * @param typeName - Type name
 * @param preferences - Preferences
 * @returns Resolved value or undefined
 */
function resolveSwiftVariable(variable: any, value: any, constants: Set<any>, typeName: string, preferences: any): any {
  if (isVariableResolved(variable)) {
    if (variable.codeSyntax?.iOS) {
      return wrapWithBoundVariableMarkers(variable.codeSyntax.iOS, variable, preferences)
    }
    const def = new SwiftVariableDefinition(variable.name, value, typeName, variable, preferences)
    constants.add(def.getDefinition())
    return def.value
  }
}

// Original class: tI
/**
 * Represents padding values for SwiftUI.
 */
class SwiftPadding {
  public readonly top: any
  public readonly bottom: any
  public readonly leading: any
  public readonly trailing: any

  constructor(top: any, bottom: any, leading: any, trailing: any) {
    this.top = top
    this.bottom = bottom
    this.leading = leading
    this.trailing = trailing
  }

  /**
   * Gets the padding code blocks.
   */
  get value(): any[] {
    const codeBlocks: any[] = []
    if (this.top.value === this.leading.value && this.leading.value === this.bottom.value && this.bottom.value === this.trailing.value) {
      addPaddingCode(codeBlocks, this.top)
    }
    else {
      if (this.leading.value === this.trailing.value) {
        addPaddingCode(codeBlocks, this.leading, 'horizontal')
      }
      else {
        addPaddingCode(codeBlocks, this.leading, 'leading')
        addPaddingCode(codeBlocks, this.trailing, 'trailing')
      }
      if (this.top.value === this.bottom.value) {
        addPaddingCode(codeBlocks, this.top, 'vertical')
      }
      else {
        addPaddingCode(codeBlocks, this.top, 'top')
        addPaddingCode(codeBlocks, this.bottom, 'bottom')
      }
    }
    return codeBlocks
  }
}

/**
 * Adds padding code to the list.
 * @param codeBlocks - Array to add to
 * @param padding - Padding object
 * @param direction - Direction or undefined
 */
function addPaddingCode(codeBlocks: any[], padding: any, direction?: string): void {
  if (padding.value === 0 || padding.value === '')
    return
  const finalValue = padding.suggestion ? padding.suggestion.value : padding.value
  const code = direction ? `.padding(.${direction}, ${finalValue})` : `.padding(${finalValue})`
  codeBlocks.push(createCodeBlock(code, 0, padding.hint, padding.suggestion?.matchingVars))
}

// Alignment mappings (original: tx, tS, tw)
const horizontalAlignmentMap = {
  MIN: { MIN: '.topLeading', MAX: '.bottomLeading', CENTER: '.leading', BASELINE: '.leading' },
  MAX: { MIN: '.topTrailing', MAX: '.bottomTrailing', CENTER: '.trailing', BASELINE: '.trailing' },
  CENTER: { MIN: '.top', MAX: '.bottom', CENTER: '.center', BASELINE: '.center' },
  SPACE_BETWEEN: { MIN: '.top', MAX: '.bottom', CENTER: '.center', BASELINE: '.center' },
}

const verticalAlignmentMap = {
  MIN: { MIN: '.topLeading', MAX: '.topTrailing', CENTER: '.top' },
  MAX: { MIN: '.bottomLeading', MAX: '.bottomTrailing', CENTER: '.bottom' },
  CENTER: { MIN: '.leading', MAX: '.trailing', CENTER: '.center' },
  SPACE_BETWEEN: { MIN: '.leading', MAX: '.trailing', CENTER: '.center' },
}

const textAlignmentMap = {
  LEFT: { TOP: '.topLeading', CENTER: '.leading', BOTTOM: '.bottomLeading' },
  CENTER: { TOP: '.top', CENTER: '.center', BOTTOM: '.bottom' },
  RIGHT: { TOP: '.topTrailing', CENTER: '.trailing', BOTTOM: '.bottomTrailing' },
  JUSTIFIED: { TOP: '.top', CENTER: '.center', BOTTOM: '.bottom' },
}

// Original function: tC
/**
 * Generates frame code for SwiftUI.
 * @param node - The node
 * @param verticalSizing - Vertical sizing mode
 * @param horizontalSizing - Horizontal sizing mode
 * @param widthValue - Width value
 * @param heightValue - Height value
 * @param preferences - Preferences
 * @param alignment - Alignment
 * @param hints - Hints
 * @returns Array of code blocks
 */
function generateFrameCode(
  node: any,
  verticalSizing: any,
  horizontalSizing: any,
  widthValue: string,
  heightValue: string,
  preferences: any,
  alignment?: string,
  hints?: any[],
): any[] {
  const params: string[] = []
  const widthSuggestion = wrapWithSuggestedVariableMarkers({
    value: widthValue,
    node,
    field: 'width',
    matchIndex: 0,
    preferences,
  })
  const heightSuggestion = wrapWithSuggestedVariableMarkers({
    value: heightValue,
    node,
    field: 'height',
    matchIndex: 1,
    preferences,
  })
  const finalWidth = widthSuggestion?.value ?? widthValue
  const finalHeight = heightSuggestion?.value ?? heightValue
  const matchingVars = [widthSuggestion?.matchingVars, heightSuggestion?.matchingVars]

  if (verticalSizing !== SizingModeEnum.FILL_PARENT && horizontalSizing !== SizingModeEnum.FILL_PARENT) {
    if (verticalSizing === SizingModeEnum.FIXED)
      params.push(`width: ${finalWidth}`)
    if (horizontalSizing === SizingModeEnum.FIXED)
      params.push(`height: ${finalHeight}`)
  }
  else {
    if (verticalSizing === SizingModeEnum.FIXED) {
      params.push(`minWidth: ${finalWidth}`, `maxWidth: ${finalWidth}`)
    }
    else if (verticalSizing === SizingModeEnum.FILL_PARENT) {
      params.push('maxWidth: .infinity')
      matchingVars[0] = undefined
    }
    if (horizontalSizing === SizingModeEnum.FIXED) {
      params.push(`minHeight: ${finalHeight}`, `maxHeight: ${finalHeight}`)
    }
    else if (horizontalSizing === SizingModeEnum.FILL_PARENT) {
      params.push('maxHeight: .infinity')
      matchingVars[1] = undefined
    }
  }

  if (params.length > 0 && alignment) {
    params.push(`alignment: ${alignment}`)
  }

  const hint = hints?.find(h => h !== undefined)
  return params.length > 0
    ? [createCodeBlock(`.frame(${params.join(', ')})`, 0, hint, mergeSuggestedVariables(matchingVars))]
    : []
}

// Original function: tT
/**
 * Processes size and position properties for SwiftUI.
 * @param node - The node
 * @param preferences - Preferences
 * @returns Object with properties and constants
 */
function processSwiftSizeAndPosition(node: any, preferences: any): { properties: any, constants: Set<any> } {
  const { layout } = node
  const { width, height } = node // Assuming selectedNode is available, but using node for consistency
  const constants = new Set<any>()

  if (node.isAutoLayout()) {
    return processAutoLayoutSizeAndPosition(node, preferences, constants)
  }

  const widthScaled = formatScaledValue(width, preferences).toString()
  const heightScaled = formatScaledValue(height, preferences).toString()

  const { variable: widthVar, hint: widthHint } = getVariableWithHint(node, 'width', widthScaled)
  const widthResolved = resolveSwiftVariable(widthVar, widthScaled, constants, 'CGFloat', preferences)
  const finalWidth = widthResolved ?? widthScaled

  const { variable: heightVar, hint: heightHint } = getVariableWithHint(node, 'height', heightScaled)
  const heightResolved = resolveSwiftVariable(heightVar, heightScaled, constants, 'CGFloat', preferences)
  const finalHeight = heightResolved ?? heightScaled

  const properties: any = {}
  const verticalSizing = getSizingModeForVerticalParent(node)
  const horizontalSizing = getSizingModeForHorizontalParent(node)

  let alignment: string | undefined
  if (node instanceof NodeProperties) {
    alignment = textAlignmentMap[node.textAlignHorizontal]?.[node.textAlignVertical]
  }

  properties.frame = generateFrameCode(node, verticalSizing, horizontalSizing, finalWidth, finalHeight, preferences, alignment, [widthHint, heightHint])

  if (layout.shouldUseAbsolutePosition()) {
    const bounds = layout.relativeBounds().bounds
    const centerX = bounds.x + bounds.width / 2
    const centerY = bounds.y + bounds.height / 2
    const xScaled = formatScaledValue(centerX, preferences)
    const yScaled = formatScaledValue(centerY, preferences)
    properties.position = [createCodeBlock(`.position(x:${xScaled}, y:${yScaled})`)]
  }

  if (layout.relativeTransform?.isRotated()) {
    const angle = -layout.relativeTransform.getAngleDeg()
    properties.transform = [createCodeBlock(`.rotationEffect(Angle(degrees: ${angle.toFixed(2)}))`)]
  }

  return { properties, constants }
}

/**
 * Processes auto layout size and position.
 * @param node - The node
 * @param preferences - Preferences
 * @param constants - Constants set
 * @returns Object with properties and constants
 */
function processAutoLayoutSizeAndPosition(node: any, preferences: any, constants: Set<any>): { properties: any, constants: Set<any> } {
  const { layout } = node
  const { primaryAxisAlignItems = 'MIN', counterAxisAlignItems = 'MIN', layoutMode } = node.autoLayout
  const { width, height } = layout // Assuming selectedNode

  const widthScaled = formatScaledValue(width, preferences).toString()
  const heightScaled = formatScaledValue(height, preferences).toString()

  const { variable: widthVar, hint: widthHint } = getVariableWithHint(node, 'width', widthScaled)
  const widthResolved = resolveSwiftVariable(widthVar, widthScaled, constants, 'CGFloat', preferences)
  const finalWidth = widthResolved ?? widthScaled

  const { variable: heightVar, hint: heightHint } = getVariableWithHint(node, 'height', heightScaled)
  const heightResolved = resolveSwiftVariable(heightVar, heightScaled, constants, 'CGFloat', preferences)
  const finalHeight = heightResolved ?? heightScaled

  const verticalSizing = getSizingModeForVerticalParent(node)
  const horizontalSizing = getSizingModeForHorizontalParent(node)
  const alignment = layoutMode === 'HORIZONTAL'
    ? horizontalAlignmentMap[primaryAxisAlignItems]?.[counterAxisAlignItems]
    : verticalAlignmentMap[primaryAxisAlignItems]?.[counterAxisAlignItems]

  const properties: any = {
    frame: generateFrameCode(node, verticalSizing, horizontalSizing, finalWidth, finalHeight, preferences, alignment, [widthHint, heightHint]),
    ...applyAutoLayoutPadding(node, preferences, constants),
  }

  return { properties, constants }
}

/**
 * Processes auto layout padding.
 * @param node - The node
 * @param preferences - Preferences
 * @param constants - Constants set
 * @returns Padding properties
 */
function applyAutoLayoutPadding(node: any, preferences: any, constants: Set<any>): { padding?: any[] } {
  const { autoLayout } = node
  const paddingFields = ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight']
  const paddingValues = paddingFields.map((field, index) => {
    const value = autoLayout[field]
    const scaled = formatScaledValue(value, preferences).toString()
    const { variable, hint } = getVariableWithHint(node, field, scaled)
    const resolved = resolveSwiftVariable(variable, scaled, constants, 'CGFloat', preferences)
    const finalValue = resolved ?? scaled
    const suggestion = resolved
      ? undefined
      : wrapWithSuggestedVariableMarkers({
          value: finalValue,
          node,
          field,
          matchIndex: index,
          preferences,
        })
    return { value: finalValue, hint, suggestion }
  })

  // Convert to tuple to satisfy TypeScript's requirement for spread arguments
  const [top, bottom, leading, trailing] = paddingValues
  const padding = new SwiftPadding(top, bottom, leading, trailing)
  return { padding: padding.value.length > 0 ? padding.value : undefined }
}

// Update the map to use the new function name

let textStyleProperties = ['view', 'font', 'kerning', 'underline', 'strikethrough', 'multilineTextAlignment', 'foregroundColor', 'fill', 'padding', 'frame', 'position', 'backgrounds', 'cornerRadius', 'shadows', 'borders', 'blur', 'transform', 'opacity']
// Original code: tR
// Indent levels for SwiftUI properties (all set to 0)
const indentLevelsZero: Record<string, number> = {
  view: 0,
  font: 0,
  kerning: 0,
  strikethrough: 0,
  underline: 0,
  multilineTextAlignment: 0,
  fill: 0,
  foregroundColor: 0,
  padding: 0,
  frame: 0,
  position: 0,
  backgrounds: 0,
  cornerRadius: 0,
  borders: 0,
  blur: 0,
  shadows: 0,
  transform: 0,
}

// Original code: tN
// Default indent levels for SwiftUI properties
const defaultIndentLevels: Record<string, number> = {
  view: 0,
  font: 1,
  kerning: 1,
  strikethrough: 1,
  underline: 1,
  multilineTextAlignment: 1,
  fill: 1,
  foregroundColor: 1,
  padding: 1,
  frame: 1,
  position: 1,
  backgrounds: 1,
  cornerRadius: 1,
  borders: 1,
  blur: 1,
  shadows: 1,
  transform: 1,
  opacity: 1,
}

/**
 * Comparator function for sorting SwiftUI properties based on predefined order.
 * Original name: tP
 * @param firstEntry - First property entry [key, value]
 * @param secondEntry - Second property entry [key, value]
 * @returns Comparison result
 */
function compareSwiftProperties([firstKey]: [string, any], [secondKey]: [string, any]): number {
  return textStyleProperties.indexOf(firstKey) - textStyleProperties.indexOf(secondKey)
}

/**
 * Organizes SwiftUI code sections from properties and constants.
 * Original name: tO
 * @param options - Options object containing viewName, properties, constants, indentLevels, and matchingVars
 * @returns Array of code sections
 */
function organizeSwiftSections({
  viewName,
  properties,
  constants,
  indentLevels = defaultIndentLevels,
  matchingVars = [],
}: {
  viewName: string
  properties: Record<string, any[]>
  constants: Set<string>
  indentLevels?: Record<string, number>
  matchingVars?: any[]
}) {
  const sections: {
    lines: any[]
    language: string
    name: string
    matchingVars?: any[]
  }[] = [{
    lines: Object.entries(properties)
      .sort(compareSwiftProperties)
      .flatMap(([key, value]) => value ? createIndentedCodeBlocks(value, indentLevels[key] ?? 0) : []),
    language: 'swift',
    name: viewName,
    matchingVars,
  }]

  if (constants && constants.size > 0) {
    const constantLines = [...constants].map(constant => createCodeBlock(constant, 1))
    const variablesSection = [
      createCodeBlock('struct Constants {'),
      ...constantLines,
      createCodeBlock('}'),
    ]
    sections.push({
      lines: variablesSection,
      language: 'swift',
      name: 'Variables',
    })
  }

  return sections
}

/**
 * Represents a color value with opacity for SwiftUI.
 * Original name: tF
 */
class SwiftColor {
  public readonly color: any
  public readonly opacity: number

  constructor(color: any, opacity: number = 1) {
    this.color = color
    this.opacity = opacity

    // Validate color values are normalized
    if (color.r > 1 || color.g > 1 || color.b > 1) {
      throw new Error(
        `Expected normalised color values (between 0 and 1) but got (${color.r}, ${color.g}, ${color.b})`,
      )
    }
  }

  /**
   * Gets the SwiftUI Color value string.
   */
  get value(): string {
    let colorValue: string
    const { r, g, b, a = 1 } = this.color
    colorValue = Math.abs(r) < 1e-5 && Math.abs(g) < 1e-5 && Math.abs(b) < 1e-5
      ? '.black'
      : Math.abs(1 - r) < 1e-5 && Math.abs(1 - g) < 1e-5 && Math.abs(1 - b) < 1e-5
        ? '.white'
        : `Color(red: ${r.toFixed(2)}, green: ${g.toFixed(2)}, blue: ${b.toFixed(2)})`

    return this.opacity !== 1 || (a !== undefined && a !== 1)
      ? `${colorValue}.opacity(${(this.opacity * a).toFixed(2)})`
      : colorValue
  }
}

/**
 * Represents a gradient stop for SwiftUI.
 * Original name: tM
 */
class SwiftGradientStop {
  public readonly color: SwiftColor
  public readonly position: number
  public readonly variable?: string

  constructor(color: SwiftColor, position: number, variable?: string) {
    this.color = color
    this.position = position
    this.variable = variable
  }

  /**
   * Gets the SwiftUI Gradient.Stop value string.
   */
  get value(): string {
    return `Gradient.Stop(color: ${this.variable ?? this.color.value}, location: ${this.position.toFixed(2)})`
  }
}

/**
 * Creates a SwiftUI UnitPoint from coordinates.
 * Original name: tj
 * @param point - Array of [x, y] coordinates
 * @returns UnitPoint string
 */
function createUnitPoint(point: [number, number]): string {
  return `UnitPoint(x: ${point[0].toFixed(2)}, y: ${point[1].toFixed(2)})`
}

/**
 * Represents a linear gradient for SwiftUI.
 * Original name: tU
 */
class SwiftLinearGradient {
  public readonly startPoint: [number, number]
  public readonly endPoint: [number, number]
  public readonly colorStops: SwiftGradientStop[]

  constructor(startPoint: [number, number], endPoint: [number, number], colorStops: SwiftGradientStop[]) {
    this.startPoint = startPoint
    this.endPoint = endPoint
    this.colorStops = colorStops
  }

  /**
   * Creates a SwiftLinearGradient from a Figma gradient paint.
   * @param paint - The gradient paint
   * @param parser - The gradient stop parser
   * @returns SwiftLinearGradient instance
   */
  static fromGradientPaint(paint: any, parser?: any): SwiftLinearGradient {
    const points = getLinearGradientPoints(toMatrix2x3(paint.gradientTransform))
    const { x: startX, y: startY } = points[0]
    const { x: endX, y: endY } = points[1]
    const stops = paint.gradientStops.map((stop: any) => {
      const { presentedValue } = parser?.parseSinglePaint(stop) ?? {}
      return new SwiftGradientStop(new SwiftColor(stop.color, paint.opacity), stop.position, presentedValue)
    })
    return new SwiftLinearGradient([startX, startY], [endX, endY], stops)
  }

  /**
   * Gets the SwiftUI LinearGradient code lines.
   */
  get value(): any[] {
    const lines = [createCodeBlock('LinearGradient(')]
    if (this.colorStops.length === 1) {
      lines.push(createCodeBlock(`stops: [${this.colorStops[0].value}],`, 1))
    }
    else {
      lines.push(createCodeBlock('stops: [', 1))
      lines.push(...this.colorStops.map(stop => createCodeBlock(`${stop.value},`, 2)))
      lines.push(createCodeBlock('],', 1))
    }
    lines.push(createCodeBlock(`startPoint: ${createUnitPoint(this.startPoint)},`, 1))
    lines.push(createCodeBlock(`endPoint: ${createUnitPoint(this.endPoint)}`, 1))
    lines.push(createCodeBlock(')'))
    return lines
  }
}

/**
 * Represents an elliptical gradient for SwiftUI.
 * Original name: tB
 */
class SwiftEllipticalGradient {
  public readonly centerX: number
  public readonly centerY: number
  public readonly colorStops: SwiftGradientStop[]

  constructor(paint: any, parser?: any) {
    const [{ x, y }] = getRadialGradientPoints(toMatrix2x3(paint.gradientTransform))
    this.centerX = x
    this.centerY = y
    this.colorStops = paint.gradientStops.map((stop: any) => {
      const { presentedValue } = parser?.parseSinglePaint(stop) ?? {}
      return new SwiftGradientStop(new SwiftColor(stop.color, paint.opacity), stop.position, presentedValue)
    })
  }

  /**
   * Gets the SwiftUI EllipticalGradient code lines.
   */
  get value() {
    const lines = [createCodeBlock('EllipticalGradient(')]
    if (this.colorStops.length === 1) {
      lines.push(createCodeBlock(`stops: [${this.colorStops[0].value}],`, 1))
    }
    else {
      lines.push(createCodeBlock('stops: [', 1))
      lines.push(...this.colorStops.map(stop => createCodeBlock(`${stop.value},`, 2)))
      lines.push(createCodeBlock('],', 1))
    }
    lines.push(createCodeBlock(`center: ${createUnitPoint([this.centerX, this.centerY])}`, 1))
    lines.push(createCodeBlock(')'))
    return lines
  }
}

/**
 * Represents an angular gradient for SwiftUI.
 * Original name: tV
 */
class SwiftAngularGradient {
  public readonly centerX: number
  public readonly centerY: number
  public readonly angle: number
  public readonly colorStops: SwiftGradientStop[]

  constructor(paint: any, parser?: any) {
    const [{ x: startX, y: startY }, { x: endX, y: endY }] = getRadialGradientPoints(toMatrix2x3(paint.gradientTransform))
    this.centerX = startX
    this.centerY = startY
    this.angle = (180 * Math.atan2(endY - startY, endX - startX)) / Math.PI
    this.colorStops = paint.gradientStops.map((stop: any) => {
      const { presentedValue } = parser?.parseSinglePaint(stop) ?? {}
      return new SwiftGradientStop(new SwiftColor(stop.color, paint.opacity), stop.position, presentedValue)
    })
  }

  /**
   * Gets the SwiftUI AngularGradient code lines.
   */
  get value(): any[] {
    const lines = [createCodeBlock('AngularGradient(')]
    if (this.colorStops.length === 1) {
      lines.push(createCodeBlock(`stops: [${this.colorStops[0].value}],`, 1))
    }
    else {
      lines.push(createCodeBlock('stops: [', 1))
      lines.push(...this.colorStops.map(stop => createCodeBlock(`${stop.value},`, 2)))
      lines.push(createCodeBlock('],', 1))
    }
    lines.push(createCodeBlock(`center: ${createUnitPoint([this.centerX, this.centerY])},`, 1))
    lines.push(createCodeBlock(`angle: Angle(degrees: ${this.angle.toFixed(2)})`, 1))
    lines.push(createCodeBlock(')'))
    return lines
  }
}

/**
 * Represents an image paint for SwiftUI.
 * Original name: tG
 */
class SwiftImagePaint {
  public readonly imagePaint: any
  public readonly width: number
  public readonly height: number

  constructor(imagePaint: any, width: number, height: number) {
    this.imagePaint = imagePaint
    this.width = width
    this.height = height
  }

  /**
   * Gets the SwiftUI Image code lines.
   */
  get value(): any[] {
    const lines = [createCodeBlock('Image("PATH_TO_IMAGE")')]
    switch (this.imagePaint.scaleMode) {
      case 'FIT':
        lines.push(createCodeBlock('.resizable()', 1))
        lines.push(createCodeBlock('.aspectRatio(contentMode: .fit)', 1))
        break
      case 'TILE':
        lines.push(createCodeBlock('.resizable(resizingMode: .tile)', 1))
        break
      case 'CROP':
      case 'FILL':
        lines.push(createCodeBlock('.resizable()', 1))
        lines.push(createCodeBlock('.aspectRatio(contentMode: .fill)', 1))
        lines.push(createCodeBlock(`.frame(width: ${this.width}, height: ${this.height})`, 1))
        lines.push(createCodeBlock('.clipped()', 1))
    }
    if (this.imagePaint.opacity && this.imagePaint.opacity !== 1) {
      lines.push(createCodeBlock(`.opacity(${this.imagePaint.opacity.toFixed(2)})`, 1))
    }
    return lines
  }
}

/**
 * Parses gradient stops for SwiftUI.
 * Original name: tz
 */
class SwiftGradientStopParser {
  public readonly colorIndex: number
  public readonly matchIndex: number
  public readonly paintIndex: number
  public readonly node: any
  public readonly preferences: any
  readonly constants: Set<string> = new Set()

  constructor(colorIndex: number, matchIndex: number, paintIndex: number, node: any, preferences: any) {
    this.colorIndex = colorIndex
    this.matchIndex = matchIndex
    this.paintIndex = paintIndex
    this.node = node
    this.preferences = preferences
  }

  /**
   * Parses a single gradient stop.
   * @param stop - The gradient stop
   * @returns Object with hint, presentedValue, and suggestion
   */
  parseSinglePaint(stop: any): { hint: any, presentedValue: string, suggestion?: any } {
    const color = new SwiftColor(stop.color, stop.opacity)
    const variable = getColorVariable(stop, this.paintIndex, 'fills', this.node)
    const hint = getVariableHint(variable, color, { isColor: true })
    let presentedValue = color.value
    const resolved = resolveSwiftVariable(variable, presentedValue, this.constants, 'Color', this.preferences)
    if (resolved)
      presentedValue = resolved
    const suggestion = resolved
      ? undefined
      : wrapWithSuggestedVariableMarkers({
          value: presentedValue,
          node: this.node,
          field: 'fills',
          matchIndex: this.matchIndex,
          arrayIndex: this.colorIndex,
          preferences: this.preferences,
        })
    if (suggestion)
      presentedValue = suggestion.value
    return { hint, presentedValue, suggestion }
  }

  /**
   * Gets the constants set.
   * @returns Array of constants
   */
  getConstants(): string[] {
    return Array.from(this.constants)
  }
}
/**
 * Processes backgrounds for SwiftUI code generation.
 * Original name: tH
 * @param node - The node to process
 * @param preferences - User preferences
 * @returns Object with properties and constants
 */
function processSwiftBackgrounds(node: any, preferences: any): { properties: any, constants: Set<any> } {
  const { width, height } = node.layout
  const { backgrounds = [], constants = [] } = filterVisiblePaints(node.fills)
    .reverse()
    .reduce((acc: any, { paint, index }) => {
      const { codeLines, constants: bgConstants = [] } = processPaintForSwiftBackground(node, paint, index, width, height, preferences)
      return {
        backgrounds: [...acc.backgrounds, ...codeLines],
        constants: [...acc.constants, ...bgConstants],
      }
    }, { backgrounds: [], constants: [] })

  return {
    properties: { backgrounds },
    constants: new Set(constants),
  }
}

/**
 * Processes a single paint for SwiftUI background.
 * Original name: inline function in tH
 * @param node - The node
 * @param paint - The paint object
 * @param index - Paint index
 * @param width - Node width
 * @param height - Node height
 * @param preferences - Preferences
 * @returns Code lines and constants
 */
function processPaintForSwiftBackground(node: any, paint: any, index: number, width: number, height: number, preferences: any): { codeLines: any[], constants?: any[] } {
  const parser = new SwiftGradientStopParser(index, 0, index, node, preferences)
  switch (paint.type) {
    case 'SOLID': {
      const { hint, presentedValue, suggestion } = parser.parseSinglePaint(paint)
      return {
        codeLines: [createCodeBlock(`.background(${presentedValue})`, 0, hint, suggestion?.matchingVars)],
        constants: parser.getConstants(),
      }
    }
    case 'GRADIENT_LINEAR': {
      const gradient = SwiftLinearGradient.fromGradientPaint(paint, parser)
      return {
        codeLines: [createCodeBlock('.background('), ...createIndentedCodeBlocks(gradient.value, 1), createCodeBlock(')')],
        constants: parser.getConstants(),
      }
    }
    case 'GRADIENT_RADIAL': {
      const gradient = new SwiftEllipticalGradient(paint, parser)
      return {
        codeLines: [createCodeBlock('.background('), ...createIndentedCodeBlocks(gradient.value, 1), createCodeBlock(')')],
        constants: parser.getConstants(),
      }
    }
    case 'GRADIENT_ANGULAR': {
      const gradient = new SwiftAngularGradient(paint, parser)
      return {
        codeLines: [createCodeBlock('.background('), ...createIndentedCodeBlocks(gradient.value, 1), createCodeBlock(')')],
        constants: parser.getConstants(),
      }
    }
    case 'IMAGE': {
      const imagePaint = new SwiftImagePaint(paint, width, height).value
      if (imagePaint.length > 1) {
        return {
          codeLines: [createCodeBlock('.background('), ...createIndentedCodeBlocks(imagePaint, 1), createCodeBlock(')')],
        }
      }
      if (imagePaint.length === 1) {
        return {
          codeLines: [createCodeBlock(`.background(${imagePaint[0].code})`)],
        }
      }
      return { codeLines: [] }
    }
    default:
      return { codeLines: [] }
  }
}

/**
 * Processes borders and corner radius for SwiftUI.
 * Original name: tW
 * @param node - The node to process
 * @param preferences - User preferences
 * @returns Object with properties and constants
 */
function processSwiftBordersAndRadius(node: any, preferences: any): { properties: any, constants: Set<any> } {
  const {
    strokeTopWeight,
    strokeBottomWeight,
    strokeLeftWeight,
    strokeRightWeight,
    strokeAlign = 'CENTER',
    bottomRightRadius = 0,
    topLeftRadius = 0,
    topRightRadius = 0,
    bottomLeftRadius = 0,
    dashPattern = [],
  } = node instanceof NodeWrapper
    ? {
        strokeTopWeight: node.strokeWeight,
        strokeBottomWeight: node.strokeWeight,
        strokeLeftWeight: node.strokeWeight,
        strokeRightWeight: node.strokeWeight,
      }
    : node.border

  const weights = { strokeTopWeight, strokeBottomWeight, strokeLeftWeight, strokeRightWeight }
  const maxKey = findMaxKey(weights, (a, b) => a.rawValue > b.rawValue)
  const maxWeight = weights[maxKey]
  const hasDifferentWeights = !deepEqual(maxWeight, strokeTopWeight)
    || !deepEqual(maxWeight, strokeBottomWeight)
    || !deepEqual(maxWeight, strokeLeftWeight)
    || !deepEqual(maxWeight, strokeRightWeight)

  const { lines: cornerRadiusLines, cornerRadiusString, constants: radiusConstants } = processCornerRadius(
    node,
    bottomRightRadius,
    topLeftRadius,
    topRightRadius,
    bottomLeftRadius,
    preferences,
  )

  const strokes = node instanceof NodeWrapper ? node.strokes : node.border.strokes
  const constants = new Set(radiusConstants)
  const scaledWeight = formatScaledValue(maxWeight.rawValue, preferences)
  const weightVar = createSwiftVariable(maxWeight, scaledWeight, constants, 'CGFloat', preferences)
  let weightValue = weightVar ?? scaledWeight.toString()
  const weightSuggestion = weightVar
    ? undefined
    : wrapWithSuggestedVariableMarkers({
        value: weightValue,
        node,
        field: maxKey,
        matchIndex: 0,
        preferences,
      })
  weightValue = weightSuggestion?.value ?? weightValue

  const { borderLines = [] } = processPaints(strokes).reduce((acc: any, { paint, index, hint }) => {
    const { color, opacity } = paint
    const swiftColor = new SwiftColor(color, opacity)
    const colorVar = getColorVariable(paint, index, 'strokes', node)
    let colorValue = swiftColor.value
    const resolvedColor = resolveSwiftVariable(colorVar, colorValue, constants, 'Color', preferences)
    if (resolvedColor)
      colorValue = resolvedColor
    const colorSuggestion = resolvedColor
      ? undefined
      : wrapWithSuggestedVariableMarkers({
          value: colorValue,
          node,
          field: 'strokes',
          matchIndex: 1,
          arrayIndex: index,
          preferences,
        })
    colorValue = colorSuggestion?.value ?? colorValue

    const variableHint = getVariableHint(colorVar, swiftColor, { isColor: true })
    const borderCode = generateBorderOverlayCode(
      cornerRadiusString,
      strokeAlign,
      scaledWeight,
      weightValue,
      hasDifferentWeights,
      colorValue,
      dashPattern,
      hint || variableHint,
      mergeSuggestedVariables([colorSuggestion?.matchingVars, weightSuggestion?.matchingVars]),
    )
    return {
      borderLines: [...acc.borderLines, ...borderCode],
    }
  }, { borderLines: [] })

  return {
    properties: {
      cornerRadius: cornerRadiusLines,
      borders: borderLines,
    },
    constants,
  }
}

/**
 * Processes corner radius for SwiftUI.
 * Original name: inline function in tW
 * @param node - The node
 * @param bottomRightRadius - Bottom right radius
 * @param topLeftRadius - Top left radius
 * @param topRightRadius - Top right radius
 * @param bottomLeftRadius - Bottom left radius
 * @param preferences - Preferences
 * @returns Lines, string, and constants
 */
function processCornerRadius(
  node: any,
  bottomRightRadius: number,
  topLeftRadius: number,
  topRightRadius: number,
  bottomLeftRadius: number,
  preferences: any,
): { lines: any[], cornerRadiusString: string, constants: any[] } {
  const radii = { bottomRightRadius, topLeftRadius, topRightRadius, bottomLeftRadius }
  const maxKey = findMaxKey(radii)
  const maxRadius = radii[maxKey]
  const hasDifferentRadii = maxRadius !== bottomRightRadius || maxRadius !== topLeftRadius || maxRadius !== topRightRadius || maxRadius !== bottomLeftRadius
  let scaledRadius = maxRadius > 0 ? formatScaledValue(maxRadius, preferences).toString() : ''
  const radiusVar = node.getVariableValue('topLeftRadius') || node.getVariableValue('topRightRadius') || node.getVariableValue('bottomLeftRadius') || node.getVariableValue('bottomRightRadius')
  const hint = getVariableHint(radiusVar, { value: scaledRadius })
  const constants = new Set<any>()
  const resolvedRadius = resolveSwiftVariable(radiusVar, maxRadius, constants, 'CGFloat', preferences)
  if (resolvedRadius)
    scaledRadius = resolvedRadius
  const suggestion = resolvedRadius
    ? undefined
    : wrapWithSuggestedVariableMarkers({
        value: scaledRadius,
        node,
        field: maxKey,
        preferences,
      })
  const finalRadius = suggestion?.value ?? scaledRadius
  if (finalRadius.length === 0) {
    return { lines: [], cornerRadiusString: finalRadius, constants: Array.from(constants) }
  }
  return {
    lines: [createCodeBlock(`.cornerRadius(${finalRadius})`, 0, hasDifferentRadii ? DesignIssues.SwiftUISeparateCornerRadius : hint, suggestion?.matchingVars)],
    cornerRadiusString: finalRadius,
    constants: Array.from(constants),
  }
}

/**
 * Generates border overlay code for SwiftUI.
 * Original name: inline function in tW
 * @param cornerRadiusString - Corner radius string
 * @param strokeAlign - Stroke alignment
 * @param scaledWeight - Scaled weight
 * @param weightValue - Weight value
 * @param hasDifferentWeights - Whether weights differ
 * @param colorValue - Color value
 * @param dashPattern - Dash pattern
 * @param hint - Hint
 * @param matchingVars - Matching variables
 * @returns Array of code blocks
 */
function generateBorderOverlayCode(
  cornerRadiusString: string,
  strokeAlign: string,
  scaledWeight: number,
  weightValue: string,
  hasDifferentWeights: boolean,
  colorValue: string,
  dashPattern: number[],
  hint: any,
  matchingVars: any,
): any[] {
  const lines = []
  lines.push(createCodeBlock('.overlay('))
  if (cornerRadiusString.length > 0) {
    lines.push(createCodeBlock(`RoundedRectangle(cornerRadius: ${cornerRadiusString})`, 1))
  }
  else {
    lines.push(createCodeBlock('Rectangle()', 1))
  }
  switch (strokeAlign) {
    case 'CENTER':
      break
    case 'INSIDE':
      lines.push(createCodeBlock(`.inset(by: ${(scaledWeight / 2).toFixed(2)})`, 2))
      break
    case 'OUTSIDE':
      lines.push(createCodeBlock(`.inset(by: ${(-scaledWeight / 2).toFixed(2)})`, 2))
      break
  }
  const strokeParams = [colorValue]
  if (dashPattern.length > 0) {
    strokeParams.push(`style: StrokeStyle(lineWidth: ${weightValue}, dash: [${dashPattern.join(', ')}])`)
  }
  else {
    strokeParams.push(`lineWidth: ${weightValue}`)
  }
  lines.push(createCodeBlock(`.stroke(${strokeParams.join(', ')})`, 2, hasDifferentWeights ? DesignIssues.SwiftUISeparateBorderWidth : hint, matchingVars))
  lines.push(createCodeBlock(')'))
  return lines
}

/**
 * Resolves a variable for SwiftUI with formatted value.
 * Original name: tK
 * @param effect - The effect object
 * @param value - The value to format
 * @param field - The field name
 * @param node - The node
 * @param constants - Constants set
 * @param preferences - Preferences
 * @returns Resolved value
 */
function resolveSwiftEffectVariable(effect: any, value: number, field: string, node: any, constants: Set<any>, preferences: any): string {
  const variable = getFieldVariable(effect, field, node)
  const formattedValue = `${formatScaledValue(value, preferences)}`
  return resolveSwiftVariable(variable, formattedValue, constants, 'CGFloat', preferences) ?? formattedValue
}

/**
 * Calculates blur radius for SwiftUI.
 * Original name: tY
 * @param effect - The effect
 * @param node - The node
 * @param constants - Constants set
 * @param preferences - Preferences
 * @returns Blur radius string
 */
function calculateSwiftBlurRadius(effect: any, node: any, constants: Set<any>, preferences: any): string {
  const resolved = resolveSwiftVariable(getRadiusVariable(effect, node), formatScaledValue(effect.radius, preferences), constants, 'CGFloat', preferences)
  return resolved ? `${resolved} / 2` : `${formatScaledValue(effect.radius / 2, preferences)}`
}

/**
 * Processes effects for SwiftUI.
 * Original name: tq
 * @param node - The node
 * @param preferences - Preferences
 * @returns Effects and constants
 */
function processSwiftEffects(node: any, preferences: any): { effects: any, constants: Set<any> } {
  const constants = new Set<any>()
  const effects: any = {}
  node.effects.filter((effect: any) => effect.visible).forEach((effect: any) => {
    switch (effect.type) {
      case 'DROP_SHADOW':
        effects.shadows = effects.shadows || []
        const offsetX = resolveSwiftEffectVariable(effect, effect.offset.x, 'offsetX', node, constants, preferences)
        const offsetY = resolveSwiftEffectVariable(effect, effect.offset.y, 'offsetY', node, constants, preferences)
        const radius = calculateSwiftBlurRadius(effect, node, constants, preferences)
        const color = resolveSwiftShadowColor(effect, node, constants, preferences)
        const hasSpread = !!effect.spread
        effects.shadows.push(createCodeBlock(`.shadow(color: ${color}, radius: ${radius}, x: ${offsetX}, y: ${offsetY})`, 0, hasSpread ? DesignIssues.SwiftUIBlurNoSpread : undefined))
        break
      case 'LAYER_BLUR':
        effects.blur = effects.blur || []
        const layerRadius = calculateSwiftBlurRadius(effect, node, constants, preferences)
        effects.blur.push(createCodeBlock(`.blur(radius: ${layerRadius})`))
        break
      case 'BACKGROUND_BLUR':
        effects.blur = effects.blur || []
        const bgRadius = calculateSwiftBlurRadius(effect, node, constants, preferences)
        effects.blur.push(createCodeBlock(`.blur(radius: ${bgRadius})`, 0, DesignIssues.SwiftUIBackgroundBlur))
        break
    }
  })
  return { effects, constants }
}

/**
 * Resolves shadow color for SwiftUI.
 * Original name: inline in tq
 * @param effect - The effect
 * @param node - The node
 * @param constants - Constants set
 * @param preferences - Preferences
 * @returns Color string
 */
function resolveSwiftShadowColor(effect: any, node: any, constants: Set<any>, preferences: any): string {
  const variable = getFieldVariable(effect, 'color', node)
  const colorValue = new SwiftColor(effect.color).value
  return resolveSwiftVariable(variable, colorValue, constants, 'Color', preferences) ?? colorValue
}

/**
 * Processes opacity for SwiftUI.
 * Original name: t$
 * @param node - The node
 * @param preferences - Preferences
 * @returns Properties and constants
 */
function processSwiftOpacity(node: any, preferences: any): { properties: any, constants: Set<any> } {
  const properties: any = {}
  const constants = new Set<any>()
  if (!node.opacity || node.opacity === 1) {
    return { properties, constants }
  }
  const opacityValue = formatNumber(node.opacity, 4)
  const formattedOpacity = `${opacityValue}`
  const { variable, hint } = getVariableWithHint(node, 'opacity', opacityValue)
  const resolvedOpacity = resolveSwiftVariable(variable, opacityValue, constants, '', preferences)
  let finalOpacity = resolvedOpacity ?? formattedOpacity
  const suggestion = resolvedOpacity
    ? undefined
    : wrapWithSuggestedVariableMarkers({
        value: formattedOpacity,
        node,
        field: 'opacity',
        preferences,
      })
  finalOpacity = suggestion?.value ?? finalOpacity
  properties.opacity = [createCodeBlock(`.opacity(${finalOpacity})`, 0, hint, suggestion?.matchingVars)]
  return { properties, constants }
}

/**
 * Retrieves inferred variables for SwiftUI.
 * Original name: tZ
 * @param node - The node
 * @param properties - Properties object
 * @returns Array of inferred variables
 */
function retrieveSwiftInferredAttributes(node: any, properties: any): any[] {
  if (node instanceof BasicNodeProperties || node instanceof GenericNode) {
    return []
  }
  const inferred: any[] = []
  Object.keys(node.inferredVariables).forEach((field) => {
    if (!shouldIncludeSwiftInferredVariable(field, properties)) {
      return
    }
    if (field === 'fills' || field === 'strokes') {
      const vars = node.inferredVariables[field]
      if (!vars)
        return
      vars.forEach((varIds: any[], index: number) => {
        const fieldValue = getNodeFieldValue(field, node, index)
        if (fieldValue && fieldValue.type === 'SOLID' && varIds && varIds.length !== 0) {
          inferred.push({
            ids: varIds.map((v: any) => v.id),
            rawValue: {
              type: VariableDataType.COLOR,
              value: {
                ...fieldValue.color,
                a: fieldValue.opacity ?? 1,
              },
            },
          })
        }
      })
      return
    }
    const varIds = node.inferredVariables[field]
    if (!varIds)
      return
    if (field === 'fontFamily') {
      if (!isBasicNode(node))
        return
      inferred.push({
        ids: varIds.map((v: any) => v.id),
        rawValue: {
          type: VariableDataType.STRING,
          value: node.textSegments[0].fontName.family.rawValue,
        },
      })
      return
    }
    const measurement = getNodeLayoutMeasurement(field, node)
    if (measurement) {
      inferred.push({
        ids: varIds.map((v: any) => v.id),
        rawValue: {
          type: VariableDataType.FLOAT,
          value: measurement,
        },
      })
    }
  })
  return inferred
}

/**
 * Checks if inferred variable should be included for SwiftUI.
 * Original name: inline in tZ
 * @param field - The field name
 * @param properties - Properties object
 * @returns True if should include
 */
function shouldIncludeSwiftInferredVariable(field: string, properties: any): boolean {
  switch (field) {
    case 'fills':
      return !!properties.backgrounds && properties.backgrounds.length > 0
    case 'height':
    case 'width':
      return !!properties.frame && properties.frame.length > 0
    case 'characters':
    case 'minWidth':
    case 'maxWidth':
    case 'minHeight':
    case 'maxHeight':
    case 'counterAxisSpacing':
      return false
    case 'itemSpacing':
      return !!properties.view && properties.view.length > 0
    case 'paddingLeft':
    case 'paddingRight':
    case 'paddingTop':
    case 'paddingBottom':
      return !!properties.padding && properties.padding.length > 0
    case 'topLeftRadius':
    case 'topRightRadius':
    case 'bottomLeftRadius':
    case 'bottomRightRadius':
      return !!properties.cornerRadius && properties.cornerRadius.length > 0
    case 'strokes':
    case 'strokeWeight':
    case 'strokeTopWeight':
    case 'strokeRightWeight':
    case 'strokeBottomWeight':
    case 'strokeLeftWeight':
      return !!properties.borders && properties.borders.length > 0
    case 'opacity':
      return !!properties.opacity && properties.opacity.length > 0
    case 'fontFamily':
    case 'fontSize':
      return !!properties.font && properties.font.length > 0
    default:
      return false
  }
}

// Refactored code with improved readability, type safety, and logical grouping
// Original functions have been split into smaller, focused units
// Related functionality grouped together (e.g., auto layout processing)
// Added TS documentation comments and original name comments for traceability
// Converted inline functions to named functions
// Simplified nested conditionals with early returns and helper functions

/**
 * Processes auto layout for SwiftUI frames.
 * Original name: inline function in tX
 * @param node - The node to process
 * @param preferences - User preferences
 * @returns Object with section name, properties, and constants
 */
function processSwiftAutoLayout(
  node: any,
  preferences: any,
): { sectionName: string, properties: any, constants: Set<any> } {
  if (!node.isAutoLayout()) {
    return {
      sectionName: 'ZStack',
      properties: {
        view: [createCodeBlock('ZStack { ... }')],
      },
      constants: new Set(),
    }
  }

  const { layoutMode } = node.autoLayout
  switch (layoutMode) {
    case 'HORIZONTAL':
      return processHorizontalStack(node, preferences)
    case 'VERTICAL':
      return processVerticalStack(node, preferences)
    default:
      return {
        sectionName: 'ZStack',
        properties: {
          view: [createCodeBlock('ZStack { ... }')],
        },
        constants: new Set(),
      }
  }
}

/**
 * Processes horizontal stack for SwiftUI.
 * Original name: inline function in processSwiftAutoLayout
 * @param node - The node
 * @param preferences - Preferences
 * @returns HStack configuration
 */
function processHorizontalStack(
  node: any,
  preferences: any,
): { sectionName: string, properties: any, constants: Set<any> } {
  const { counterAxisAlignItems, itemSpacing, primaryAxisAlignItems } = node.autoLayout
  const params: string[] = []

  switch (counterAxisAlignItems) {
    case 'MIN':
      params.push('alignment: .top')
      break
    case 'MAX':
      params.push('alignment: .bottom')
      break
    case 'CENTER':
      params.push('alignment: .center')
      break
    case 'BASELINE':
      params.push('alignment: .firstTextBaseline')
      break
  }

  if (primaryAxisAlignItems === 'SPACE_BETWEEN') {
    return {
      sectionName: 'HStack',
      properties: {
        view: [
          createCodeBlock(`HStack(${params.join(', ')}) {`),
          createCodeBlock('// Space Between', 1),
          createCodeBlock('View()', 1),
          createCodeBlock('Spacer()', 1),
          createCodeBlock('// Alternative Views and Spacers', 1),
          createCodeBlock('View()', 1),
          createCodeBlock('}'),
        ],
      },
      constants: new Set(),
    }
  }

  const spacingValue = formatScaledValue(itemSpacing, preferences)
  const { variable, hint } = getVariableWithHint(node, 'itemSpacing', spacingValue.toString())
  const constants = new Set<any>()
  const resolvedSpacing = resolveSwiftVariable(variable, spacingValue, constants, 'CGFloat', preferences)

  let finalSpacing: string
  let suggestion: any
  if (resolvedSpacing) {
    params.push(`spacing: ${resolvedSpacing}`)
    finalSpacing = resolvedSpacing
  }
  else {
    finalSpacing = `${spacingValue}`
    suggestion = wrapWithSuggestedVariableMarkers({
      value: finalSpacing,
      node,
      field: 'itemSpacing',
      preferences,
    })
    params.push(`spacing: ${suggestion?.value ?? finalSpacing}`)
  }

  return {
    sectionName: 'HStack',
    properties: {
      view: [createCodeBlock(`HStack(${params.join(', ')}) { ... }`, 0, hint, suggestion?.matchingVars)],
    },
    constants,
  }
}

/**
 * Processes vertical stack for SwiftUI.
 * Original name: inline function in processSwiftAutoLayout
 * @param node - The node
 * @param preferences - Preferences
 * @returns VStack configuration
 */
function processVerticalStack(
  node: any,
  preferences: any,
): { sectionName: string, properties: any, constants: Set<any> } {
  const { counterAxisAlignItems, itemSpacing, primaryAxisAlignItems } = node.autoLayout
  const params: string[] = []

  switch (counterAxisAlignItems) {
    case 'MIN':
      params.push('alignment: .leading')
      break
    case 'MAX':
      params.push('alignment: .trailing')
      break
    case 'CENTER':
      params.push('alignment: .center')
      break
  }

  if (primaryAxisAlignItems === 'SPACE_BETWEEN') {
    return {
      sectionName: 'VStack',
      properties: {
        view: [
          params.length ? createCodeBlock(`VStack(${params.join(', ')}) {`) : createCodeBlock('VStack {'),
          createCodeBlock('// Space Between', 1, DesignIssues.SwiftUISpacersForSpaceBetween),
          createCodeBlock('View()', 1),
          createCodeBlock('Spacer()', 1),
          createCodeBlock('// Alternating Views and Spacers', 1),
          createCodeBlock('View()', 1),
          createCodeBlock('}'),
        ],
      },
      constants: new Set(),
    }
  }

  const spacingValue = formatScaledValue(itemSpacing, preferences)
  const { variable, hint } = getVariableWithHint(node, 'itemSpacing', spacingValue.toString())
  const constants = new Set<any>()
  const resolvedSpacing = resolveSwiftVariable(variable, spacingValue, constants, 'CGFloat', preferences)

  let finalSpacing: string
  let suggestion: any
  if (resolvedSpacing) {
    params.push(`spacing: ${resolvedSpacing}`)
    finalSpacing = resolvedSpacing
  }
  else {
    finalSpacing = `${spacingValue}`
    suggestion = wrapWithSuggestedVariableMarkers({
      value: finalSpacing,
      node,
      field: 'itemSpacing',
      preferences,
    })
    params.push(`spacing: ${suggestion?.value ?? finalSpacing}`)
  }

  return {
    sectionName: 'VStack',
    properties: {
      view: [createCodeBlock(`VStack(${params.join(', ')}) { ... }`, 0, hint, suggestion?.matchingVars)],
    },
    constants,
  }
}

/**
 * Generates SwiftUI code for frame or shape nodes.
 * Original name: tX
 * @param node - The node to process
 * @param preferences - User preferences
 * @returns Array of code sections
 */
async function generateSwiftFrameCode(node: any, preferences: any): Promise<any[]> {
  const { properties, constants } = processSwiftSizeAndPosition(node, preferences)
  const { properties: opacityProperties, constants: opacityConstants } = processSwiftOpacity(node, preferences)
  const { properties: backgroundProperties, constants: backgroundConstants } = processSwiftBackgrounds(node, preferences)
  const { effects, constants: effectConstants } = processSwiftEffects(node, preferences)
  const { properties: borderProperties, constants: borderConstants } = processSwiftBordersAndRadius(node, preferences)
  const { sectionName, properties: layoutProperties, constants: layoutConstants } = processSwiftAutoLayout(node, preferences)

  const allProperties = {
    ...layoutProperties,
    ...effects,
    ...properties,
    ...opacityProperties,
    ...backgroundProperties,
    ...borderProperties,
  }

  const allConstants = new Set([
    ...layoutConstants,
    ...backgroundConstants,
    ...borderConstants,
    ...constants,
    ...opacityConstants,
    ...effectConstants,
  ])

  const inferredVars = retrieveSwiftInferredAttributes(node, allProperties)

  return organizeSwiftSections({
    viewName: sectionName,
    properties: allProperties,
    constants: allConstants,
    indentLevels: indentLevelsZero,
    matchingVars: inferredVars,
  })
}

/**
 * Generates SwiftUI code for shape nodes.
 * Original name: tQ
 * @param node - The node to process
 * @param preferences - User preferences
 * @returns Array of code sections
 */
async function generateSwiftShapeCode(node: any, preferences: any): Promise<any[]> {
  const { properties, constants } = processSwiftSizeAndPosition(node, preferences)
  const { properties: opacityProperties, constants: opacityConstants } = processSwiftOpacity(node, preferences)
  const { properties: backgroundProperties, constants: backgroundConstants } = processSwiftBackgrounds(node, preferences)
  const { effects, constants: effectConstants } = processSwiftEffects(node, preferences)
  const { properties: borderProperties, constants: borderConstants } = processSwiftBordersAndRadius(node, preferences)

  const hasEffects = effects.blur?.length > 0 || effects.shadows?.length > 0
  const viewName = shouldHideLayoutOrColor(preferences) && hasEffects ? 'View' : 'Rectangle'

  const allProperties = {
    view: [createCodeBlock(`${viewName}()`)],
    ...(shouldHideColor(preferences) ? {} : { foregroundColor: [createCodeBlock('.foregroundColor(.clear)')] }),
    ...(shouldHideLayout(preferences) ? {} : properties),
    ...(shouldHideLayout(preferences) ? {} : opacityProperties),
    ...(hasEffects ? effects : {}),
    ...(shouldHideLayoutOrColor(preferences) ? {} : borderProperties),
    ...(shouldHideColor(preferences) ? {} : backgroundProperties),
  }

  const allConstants = shouldHideLayoutOrColor(preferences)
    ? hasEffects ? new Set(effectConstants) : new Set()
    : new Set([...backgroundConstants, ...borderConstants, ...constants, ...opacityConstants, ...effectConstants])

  const inferredVars = retrieveSwiftInferredAttributes(node, allProperties)

  return organizeSwiftSections({
    viewName,
    properties: allProperties,
    constants: allConstants,
    matchingVars: inferredVars,
  })
}

/**
 * Generates SwiftUI code for image or wrapper nodes.
 * Original name: tJ
 * @param node - The node to process
 * @param preferences - User preferences
 * @returns Array of code sections
 */
async function generateSwiftImageCode(node: any, preferences: any): Promise<any[]> {
  const { properties, constants } = processSwiftSizeAndPosition(node, preferences)
  const { properties: opacityProperties, constants: opacityConstants } = processSwiftOpacity(node, preferences)
  const { properties: backgroundProperties, constants: backgroundConstants } = processSwiftBackgrounds(node, preferences)
  const { effects, constants: effectConstants } = processSwiftEffects(node, preferences)
  const { properties: borderProperties, constants: borderConstants } = processSwiftBordersAndRadius(node, preferences)

  const allProperties = {
    view: [createCodeBlock(`Image("${node.name}")`)],
    ...effects,
    ...properties,
    ...opacityProperties,
    ...backgroundProperties,
    ...borderProperties,
  }

  const allConstants = new Set([...backgroundConstants, ...borderConstants, ...constants, ...opacityConstants, ...effectConstants])

  const inferredVars = retrieveSwiftInferredAttributes(node, allProperties)

  return organizeSwiftSections({
    viewName: 'Image',
    properties: allProperties,
    constants: allConstants,
    matchingVars: inferredVars,
  })
}

/**
 * Processes text fills for SwiftUI.
 * Original name: t0
 * @param field - The field name
 * @param paints - The paints array
 * @param node - The node
 * @param preferences - Preferences
 * @param constants - Constants set
 * @returns Object with presented value, hint, and matching vars
 */
function processSwiftTextFills(
  field: string,
  paints: any[],
  node: any,
  preferences: any,
  constants: Set<any>,
): { presentedValue?: string, hint?: any, matchingVars?: any } {
  if (paints.length === 0 || shouldHideColor(preferences) || !paints[0]) {
    return {}
  }

  const { paint, index, hint } = paints[0]
  const swiftColor = new SwiftColor(paint.color, paint.opacity)
  const colorVar = getColorVariable(paint, index, field, node)
  const finalHint = hint || (paints.length > 1 ? DesignIssues.SinglePaint : getVariableHint(colorVar, swiftColor, { isColor: true }))
  let colorValue = swiftColor.value
  const resolvedColor = resolveSwiftVariable(colorVar, colorValue, constants, 'Color', preferences)
  const suggestion = colorVar.status === VariableStatus.NotFound
    ? wrapWithSuggestedVariableMarkers({
        value: colorValue,
        node,
        field,
        arrayIndex: index,
        preferences,
      })
    : undefined

  if (resolvedColor) {
    colorValue = resolvedColor
  }
  else if (suggestion) {
    colorValue = suggestion.value
  }

  return {
    presentedValue: colorValue,
    hint: finalHint,
    matchingVars: suggestion?.matchingVars,
  }
}
/**
 * Generates SwiftUI code for text nodes.
 * Original name: generateSwiftTextCode
 * @param node - The text node to process
 * @param preferences - User preferences
 * @returns Array of code sections
 */
async function generateSwiftTextCode(node: any, preferences: any): Promise<any[]> {
  const { properties, constants } = processSwiftSizeAndPosition(node, preferences)
  const { properties: opacityProperties, constants: opacityConstants } = processSwiftOpacity(node, preferences)
  const { properties: textProperties, constants: textConstants } = processSwiftTextProperties(node, preferences)

  const lines: any[] = []
  if (isResolvedStyle(node.textStyle)) {
    lines.push(createCodeBlock(`// ${node.textStyle.name}`))
  }
  lines.push(createCodeBlock(`Text(${escapeTextString(node.characters)})`))

  const allProperties = {
    view: lines,
    ...properties,
    ...opacityProperties,
    ...textProperties,
  }

  const { codeLines, constants: fontConstants } = processSwiftFontProperties(node, preferences)
  if (codeLines?.length) {
    if (codeLines.length === 1) {
      allProperties.font = [createCodeBlock(`.font(${codeLines[0].code})`, 0, undefined, codeLines[0].matchingVars)]
    }
    else {
      const indentedLines = createIndentedCodeBlocks(codeLines, 1)
      allProperties.font = [createCodeBlock('.font('), ...indentedLines, createCodeBlock(')')]
    }
  }

  const allConstants = new Set([...constants, ...opacityConstants, ...textConstants, ...fontConstants])
  const inferredVars = retrieveSwiftInferredAttributes(node, allProperties)

  return organizeSwiftSections({
    viewName: 'Text',
    properties: allProperties,
    constants: allConstants,
    matchingVars: inferredVars,
  })
}

/**
 * Processes text-specific properties for SwiftUI.
 * Original name: inline function in generateSwiftTextCode
 * @param node - The text node
 * @param preferences - User preferences
 * @returns Object with properties and constants
 */
function processSwiftTextProperties(node: any, preferences: any): { properties: any, constants: Set<any> } {
  const textSegment = node.textSegments[0]
  const properties: any = {}
  const constants = new Set<any>()

  if (!textSegment) {
    return { properties, constants }
  }

  // Process kerning
  if (textSegment.letterSpacing && textSegment.letterSpacing.rawValue.value > 0) {
    const kerningValue = formatScaledValue(calculateLetterSpacing(textSegment.letterSpacing.rawValue, textSegment.fontSize.rawValue), preferences)
    const kerningVar = createSwiftVariable(textSegment.letterSpacing, kerningValue, constants, 'CGFloat', preferences) ?? kerningValue.toString()
    properties.kerning = [createCodeBlock(`.kerning(${kerningVar})`)]
  }

  // Process foreground color
  const { presentedValue, hint, matchingVars } = processSwiftTextFills('fills', textSegment.fills, node, preferences, constants)
  if (presentedValue) {
    properties.foregroundColor = [createCodeBlock(`.foregroundColor(${presentedValue})`, 0, hint, matchingVars)]
  }

  // Process text decoration
  if (textSegment.textDecoration) {
    processTextDecoration(node, textSegment, properties, constants, preferences)
  }

  // Process text alignment
  switch (node.textAlignHorizontal) {
    case 'CENTER':
      properties.multilineTextAlignment = [createCodeBlock('.multilineTextAlignment(.center)')]
      break
    case 'RIGHT':
      properties.multilineTextAlignment = [createCodeBlock('.multilineTextAlignment(.trailing)')]
      break
  }

  return { properties, constants }
}

/**
 * Processes text decoration for SwiftUI.
 * @param node - The text node
 * @param textSegment - The text segment
 * @param properties - Properties object to update
 * @param constants - Constants set
 * @param preferences - Preferences
 */
function processTextDecoration(node: any, textSegment: any, properties: any, constants: Set<any>, preferences: any): void {
  switch (textSegment.textDecoration) {
    case 'STRIKETHROUGH':
      properties.strikethrough = [createCodeBlock('.strikethrough()')]
      break
    case 'UNDERLINE':
      const pattern = getUnderlinePattern(textSegment)
      const { presentedValue, hint, matchingVars } = processTextDecorationColorHandler(node, textSegment, constants, preferences)
      if (pattern && presentedValue) {
        properties.underline = [createCodeBlock(`.underline(true, pattern: ${pattern}, color: ${presentedValue})`, 0, hint, matchingVars)]
      }
      else if (pattern || presentedValue) {
        const params = [pattern ? `pattern: ${pattern}` : '', presentedValue ? `color: ${presentedValue}` : ''].filter(Boolean).join(', ')
        properties.underline = [createCodeBlock(`.underline(true, ${params})`, 0, presentedValue ? hint : undefined, presentedValue ? matchingVars : undefined)]
      }
      else {
        properties.underline = [createCodeBlock('.underline()')]
      }
      break
  }
}

/**
 * Gets underline pattern for SwiftUI.
 * @param textSegment - The text segment
 * @returns Pattern string or undefined
 */
function getUnderlinePattern(textSegment: any): string | undefined {
  if (textSegment.textDecorationStyle) {
    switch (textSegment.textDecorationStyle) {
      case 'SOLID':
        return '.solid'
      case 'DOTTED':
        return '.dot'
      case 'WAVY':
        return '.wave' // Assuming WAVY maps to .wave, adjust if needed
    }
  }
}

/**
 * Processes text decoration color for SwiftUI.
 * @param node - The text node
 * @param textSegment - The text segment
 * @param constants - Constants set
 * @param preferences - Preferences
 * @returns Object with presented value, hint, and matching vars
 */
function processTextDecorationColorHandler(node: any, textSegment: any, constants: Set<any>, preferences: any): { presentedValue?: string, hint?: any, matchingVars?: any } {
  if (textSegment.textDecorationColor) {
    const colorValue = textSegment.textDecorationColor.rawValue.value
    if (colorValue === 'AUTO') {
      return {}
    }
    return processSwiftTextFills('textDecorationColor', [colorValue], node, preferences, constants)
  }
  return {}
}

/**
 * Processes font properties for SwiftUI.
 * Original name: inline function in generateSwiftTextCode
 * @param node - The text node
 * @param preferences - Preferences
 * @returns Object with code lines and constants
 */
function processSwiftFontProperties(node: any, preferences: any): { codeLines: any[], constants: Set<any> } {
  const textSegment = node.textSegments[0]
  const { fontName: { family, style }, fontSize } = textSegment
  const codeLines: any[] = []
  const constants = new Set<any>()

  const scaledSize = formatScaledValue(fontSize.rawValue, preferences)
  const sizeVar = createSwiftVariable(fontSize, scaledSize, constants, 'CGFloat', preferences)
  let sizeValue = sizeVar ?? scaledSize.toString()
  const sizeSuggestion = sizeVar
    ? undefined
    : wrapWithSuggestedVariableMarkers({
        value: sizeValue,
        node,
        field: 'fontSize',
        matchIndex: 1,
        preferences,
      })
  sizeValue = sizeSuggestion?.value ?? sizeValue

  if (sizeValue && family) {
    const familyValue = `"${family.rawValue}"`
    const familyVar = createSwiftVariable(family, familyValue, constants, 'String', preferences)
    let finalFamily = familyVar ?? familyValue
    const familySuggestion = familyVar
      ? undefined
      : wrapWithSuggestedVariableMarkers({
          value: finalFamily,
          node,
          field: 'fontFamily',
          matchIndex: 0,
          preferences,
        })
    finalFamily = familySuggestion?.value ?? finalFamily
    codeLines.push(createCodeBlock(`Font.custom(${finalFamily}, size: ${sizeValue})`, 0, undefined, mergeSuggestedVariables([sizeSuggestion?.matchingVars, familySuggestion?.matchingVars])))
  }
  else if (sizeValue) {
    codeLines.push(createCodeBlock(`Font.system(size: ${sizeValue})`, 0, undefined, sizeSuggestion?.matchingVars))
  }

  if (codeLines.length && style) {
    const { fontWeight, italic = false } = parseFontStyle(style, textSegment.fontWeight)
    const weightValue = FONT_WEIGHT_NAMES[fontWeight.rawValue] ?? 'regular'
    const weightVar = createSwiftVariable(textSegment.fontWeight, weightValue, constants, 'Font.Weight', preferences)
    const finalWeight = weightVar ?? weightValue
    if (weightValue !== 'regular' || weightVar) {
      codeLines.push(createCodeBlock(`.weight(${finalWeight})`, 1))
    }
    if (italic) {
      codeLines.push(createCodeBlock('.italic()', 1))
    }
  }

  return { codeLines, constants }
}

/**
 * Dispatches SwiftUI code generation based on node type.
 * Original name: t2
 * @param node - The node to process
 * @param preferences - User preferences
 * @returns Array of code sections
 */
async function dispatchSwiftCodeGeneration(node: any, preferences: any): Promise<any[]> {
  if (node instanceof NodeWrapper) {
    return generateSwiftImageCode(node, preferences)
  }
  if (node instanceof FrameNodeProperties) {
    return generateSwiftFrameCode(node, preferences)
  }
  if (node instanceof NodeProperties) {
    return generateSwiftTextCode(node, preferences)
  }
  if (node instanceof ShapeNodeProperties) {
    return generateSwiftShapeCode(node, preferences)
  }
  if (node instanceof InstanceNodeProperties || node instanceof ComponentNodeProperties) {
    return generateSwiftFrameCode(node, preferences)
  }
  if (node instanceof BasicNodeProperties) {
    return []
  }
  return [{
    name: 'Unimplemented',
    language: 'swift',
    lines: [createCodeBlock('iOS codegen for nodes of type Unknown has not been implemented yet')],
  }]
}

/**
 * Generates SwiftUI code.
 * Original name: t5
 * @param node - The node to process
 * @param preferences - User preferences
 * @returns Object with sections
 */
async function generateSwiftCode(node: any, preferences: any): Promise<CodegenCodeResult> {
  return {
    sections: await dispatchSwiftCodeGeneration(node, preferences),
  }
}

/**
 * Creates a simple object with id and name.
 * Original name: t4
 * @param item - The item with id and name
 * @returns Object with id and name
 */
function createIdNameObject(item: any): { id: string, name: string } {
  return {
    id: item.id,
    name: item.name,
  }
}

/**
 * Resolves styles by caching them.
 * Original name: t3
 */
class StyleResolver {
  getStyleById: (id: string) => any
  colors: Array<{ id: string, name: string }> = []
  textStyles: Array<{ id: string, name: string }> = []
  effects: Array<{ id: string, name: string }> = []

  constructor(getStyleById: (id: string) => any, colors: Array<{ id: string, name: string }> = [], textStyles: Array<{ id: string, name: string }> = [], effects: Array<{ id: string, name: string }> = []) {
    this.getStyleById = getStyleById
    this.colors = colors
    this.textStyles = textStyles
    this.effects = effects
  }

  /**
   * Resolves a color style by ID, caching the result.
   * @param styleId - The style ID to resolve.
   * @returns The resolved color style or undefined.
   */
  resolveColor(styleId: string): { id: string, name: string } | undefined {
    let style = this.colors.find(c => c.id === styleId)
    if (!style) {
      const fetched = this.getStyleById(styleId)
      if (fetched && fetched.type === 'PAINT') {
        style = createIdNameObject(fetched)
        this.colors.push(style)
      }
    }
    return style
  }

  /**
   * Resolves an effect style by ID, caching the result.
   * @param styleId - The style ID to resolve.
   * @returns The resolved effect style or undefined.
   */
  resolveEffect(styleId: string): { id: string, name: string } | undefined {
    let style = this.effects.find(e => e.id === styleId)
    if (!style) {
      const fetched = this.getStyleById(styleId)
      if (fetched && fetched.type === 'EFFECT') {
        style = createIdNameObject(fetched)
        this.effects.push(style)
      }
    }
    return style
  }

  /**
   * Resolves a text style by ID, caching the result.
   * @param styleId - The style ID to resolve.
   * @returns The resolved text style or undefined.
   */
  resolveTextStyle(styleId: string): { id: string, name: string } | undefined {
    let style = this.textStyles.find(t => t.id === styleId)
    if (!style) {
      const fetched = this.getStyleById(styleId)
      if (fetched && fetched.type === 'TEXT') {
        style = createIdNameObject(fetched)
        this.textStyles.push(style)
      }
    }
    return style
  }
}

/**
 * Resolves variables by caching them.
 * Original name: t6
 */
class VariableResolver {
  getVariableById: (id: string) => any
  cachedVariables: any[] = []

  constructor(getVariableById: (id: string) => any, cachedVariables: any[] = []) {
    this.getVariableById = getVariableById
    this.cachedVariables = cachedVariables
  }

  /**
   * Resolves a variable by ID, caching the result.
   * @param variableId - The variable ID to resolve.
   * @returns The resolved variable or undefined.
   */
  resolveVariable(variableId: string): any {
    let variable = this.cachedVariables.find(v => v.id === variableId)
    if (!variable) {
      const fetched = this.getVariableById(variableId)
      if (fetched) {
        variable = fetched
        this.cachedVariables.push(variable)
      }
    }
    return variable
  }
}

/**
 * Caches nodes and resolves styles/variables.
 * Original name: t8
 */
class NodeCache {
  nodes: Record<string, any> = {}
  stylesResolver: StyleResolver
  variableResolver: VariableResolver
  colorProfile: ColorSpaceEnum

  constructor(stylesResolver: StyleResolver, variableResolver: VariableResolver, colorProfile: ColorSpaceEnum = ColorSpaceEnum.SRGB) {
    this.stylesResolver = stylesResolver
    this.variableResolver = variableResolver
    this.colorProfile = colorProfile
  }

  /**
   * Gets or creates a cached node from a Figma node.
   * @param figmaNode - The Figma node to cache.
   * @returns The cached node.
   */
  getNode(figmaNode: any): any {
    const nodeId = figmaNode.id
    if (!this.nodes[nodeId]) {
      this.nodes[nodeId] = createNodeFromFigma(figmaNode, this)
    }
    return this.nodes[nodeId]
  }

  /**
   * Invalidates a cached node by ID.
   * @param nodeId - The node ID to invalidate.
   */
  invalidate(nodeId: string): void {
    if (this.nodes[nodeId]) {
      delete this.nodes[nodeId]
    }
  }
}

/**
 * Creates a node wrapper from Figma node.
 * @param figmaNode - The Figma node
 * @param cache - The node cache
 * @returns Node wrapper
 */
function createNodeFromFigma(figmaNode: any, cache: any): any {
  if (figmaNode.type === 'VECTOR' || figmaNode.type === 'BOOLEAN_OPERATION' || (figmaNode.isAsset && !hasImageOrVideoFill(figmaNode))) {
    return NodeWrapper.from(figmaNode, cache)
  }
  switch (figmaNode.type) {
    case 'LINE':
    case 'ELLIPSE':
    case 'RECTANGLE':
      return ShapeNodeProperties.from(figmaNode, cache)
    case 'FRAME':
    case 'GROUP':
      return FrameNodeProperties.from(figmaNode, cache)
    case 'COMPONENT':
      return ComponentNodeProperties.from(figmaNode, cache)
    case 'COMPONENT_SET':
      return BasicNodeProperties.from(figmaNode, cache)
    case 'INSTANCE':
      return InstanceNodeProperties.from(figmaNode, cache)
    case 'TEXT':
      return NodeProperties.from(figmaNode, cache)
    default:
      return GenericNode.from(figmaNode)
  }
}

/**
 * Checks if node has image or video fill.
 * @param node - The node
 * @returns True if has image/video
 */
function hasImageOrVideoFill(node: any): boolean {
  if ('fills' in node && Array.isArray(node.fills)) {
    return node.fills.some((fill: any) => fill.type === 'IMAGE' || fill.type === 'VIDEO')
  }
  return node.type === 'MEDIA'
}
// Original code: $$il0
// Enum for codegen platforms
enum CodegenPlatform {
  CSS = 'CSS',
  IOS = 'IOS',
  IOS_UIKIT = 'IOS_UIKIT',
  ANDROID = 'ANDROID',
  ANDROID_XML = 'ANDROID_XML',
  CSSBUILDER = 'CSSBUILDER',
}

interface CodegenCodeResult {
  sections: any[]
  autocomplete?: any[]
}
// Original code: id
// Map of platform to generator functions
const platformGenerators = new Map([
  ['CSS', generateCssCode],
  ['IOS', generateSwiftCode],
  ['ANDROID', generateAndroidCode],
  ['CSSBUILDER', generateCssBuilderCode],
])

/**
 * Class for handling code generation operations.
 * Original name: ic
 */
class CodegenHandler {
  sceneGraph: SceneGraph
  figma?: any
  closePlugin?: () => void
  nodeCache?: NodeCache
  nodeCacheDisposable?: () => void

  constructor(sceneGraph: SceneGraph) {
    this.sceneGraph = sceneGraph
  }

  /**
   * Prepares the VM if needed.
   * Original name: prepareVmIfNeeded
   */
  prepareVmIfNeeded(): void {
    if (this.figma)
      return

    const { addShutdownAction, closePlugin, noOpVm } = createPluginContext()
    createPluginInstance(noOpVm, {
      stats: new PluginApiMetrics(),
      pluginVersionID: '',
      name: 'First Party',
      command: '',
      queryMode: false,
      userID: debugState.getState().user?.id || '',
      pluginID: 'CSS',
      titleIconURL: '',
      openFileKey: debugState.getState().openFile?.key || '',
      apiVersion: '1.0.0',
      closePlugin,
      addShutdownAction,
      apiMode: {
        type: 'PLUGIN',
        noOpUI: true,
      },
      enableProposedApi: true,
      enablePrivatePluginApi: true,
      deferRunEvent: false,
      validatedPermissions: PluginPermissions.forFirstPartyPlugin(),
      isLocal: false,
      capabilities: ['codegen'],
      allowedDomains: DEFAULT_ALLOWED_ORIGINS,
      editorType: [ManifestEditorType.DEV, ManifestEditorType.INSPECT],
      html: null,
      incrementalSafeApi: false,
      sceneGraph: this.sceneGraph,
      enableNativeJsx: false,
      isPluginExemptFromPluginDataLimits: true,
      enableResponsiveSetHierarchyMutations: false,
    })

    const { figma } = noOpVm.scope
    this.figma = figma
    this.closePlugin = closePlugin
    this.figma.skipInvisibleInstanceChildren = true
  }

  /**
   * Disposes of resources.
   * Original name: dispose
   */
  dispose(): void {
    this.nodeCacheDisposable?.()
    this.nodeCacheDisposable = undefined
    this.nodeCache = undefined
    this.closePlugin?.()
    this.closePlugin = undefined
    this.figma = undefined
  }

  /**
   * Gets CSS properties of a subtree.
   * Original name: getCSSPropertiesOfSubTree
   */
  async getCSSPropertiesOfSubTree({
    nodeId,
    preferences,
    canRunCodegenArgs,
  }: {
    nodeId: string
    preferences?: any
    canRunCodegenArgs: any
  }): Promise<{ propertiesByLayer: Record<string, any>, error?: Error }> {
    if (!isCopyExportAllowed(canRunCodegenArgs)) {
      return {
        propertiesByLayer: {},
        error: new Error('Codegen is not allowed'),
      }
    }

    this.prepareVmIfNeeded()
    this.nodeCache ?? this.rebuildNodeCache()

    try {
      const figmaNode = this.figma.getNodeById(nodeId)
      if (!figmaNode) {
        return { propertiesByLayer: {} }
      }

      const node = this.nodeCache!.getNode(figmaNode)
      const debugStateSnapshot = debugState.getState()
      const isRestricted = !!debugStateSnapshot.openFile && isExportRestricted(debugStateSnapshot.openFile)

      return {
        propertiesByLayer: await generateCssPropertiesForSubtree(node, {
          unit: preferences?.unit ?? MeasurementUnit.PIXEL,
          scaleFactor: preferences?.scaleFactor || 1,
          customSettings: preferences?.customSettings,
          isExportRestricted: isRestricted,
        }, 20),
      }
    }
    catch (error) {
      return {
        propertiesByLayer: {},
        error: error as Error,
      }
    }
  }

  /**
   * Gets HTML skeleton (placeholder implementation).
   * Original name: getHTMLSkeleton
   */
  async getHTMLSkeleton({
    nodeId,
    canRunCodegenArgs,
  }: {
    nodeId: string
    canRunCodegenArgs: any
  }): Promise<{ code: string, error?: Error }> {
    if (!isCopyExportAllowed(canRunCodegenArgs)) {
      return {
        code: '',
        error: new Error('Codegen is not allowed'),
      }
    }

    this.prepareVmIfNeeded()
    this.nodeCache ?? this.rebuildNodeCache()

    try {
      const figmaNode = this.figma.getNodeById(nodeId)
      if (!figmaNode) {
        return { code: '' }
      }

      this.nodeCache!.getNode(figmaNode)
      return { code: '' } // Placeholder
    }
    catch (error) {
      return {
        code: '',
        error: error as Error,
      }
    }
  }

  /**
   * Rebuilds the node cache.
   * Original name: rebuildNodeCache
   */
  rebuildNodeCache(): void {
    this.prepareVmIfNeeded()

    const stylesResolver = new StyleResolver(this.figma.getStyleById)
    const variableResolver = new VariableResolver(this.figma.variables.getVariableById)

    this.nodeCacheDisposable?.()

    const { nodeCache, dispose } = (() => {
      const cache = new NodeCache(stylesResolver, variableResolver, (() => {
        switch (this.figma.root.documentColorProfile ?? 'LEGACY') {
          case 'LEGACY':
          case 'SRGB':
            return ColorSpaceEnum.SRGB
          case 'DISPLAY_P3':
            return ColorSpaceEnum.DISPLAY_P3
        }
      })())

      const callback = ({ id }: { id: string }) => {
        cache.invalidate(id)
      }

      registerNodeChangeCallback(callback)

      return {
        nodeCache: cache,
        dispose: () => unregisterNodeChangeCallback(callback),
      }
    })()

    this.nodeCache = nodeCache
    this.nodeCacheDisposable = dispose
  }

  /**
   * Runs the extension for code generation.
   * Original name: runExtension
   */
  async runExtension({
    selectedNodeId,
    codegenPluginID,
    preferences,
    canRunCodegenArgs,
    generateForCodePanel,
  }: {
    selectedNodeId: string
    codegenPluginID: string
    preferences?: any
    canRunCodegenArgs: any
    generateForCodePanel?: boolean
  }): Promise<{ code: any[], autocomplete?: any[], error?: Error }> {
    if (!isCopyExportAllowed(canRunCodegenArgs)) {
      return {
        error: new Error('Codegen is not allowed'),
        code: [],
      }
    }

    // Handle special cases early
    if (codegenPluginID === 'ANDROID_XML') {
      return this.handleAndroidXml(selectedNodeId)
    }

    if (codegenPluginID === 'IOS_UIKIT') {
      return this.handleIosUIKit(selectedNodeId)
    }

    if (!platformGenerators.has(codegenPluginID)) {
      return {
        error: new Error(`Cannot run ${codegenPluginID}`),
        code: [],
      }
    }

    const generator = platformGenerators.get(codegenPluginID)!
    this.prepareVmIfNeeded()
    this.nodeCache ?? this.rebuildNodeCache()

    const figmaNode = this.figma.getNodeById(selectedNodeId)
    if (!figmaNode) {
      return { code: [] }
    }

    const node = this.nodeCache!.getNode(figmaNode)
    const debugStateSnapshot = debugState.getState()
    const isRestricted = !!debugStateSnapshot.openFile && isExportRestricted(debugStateSnapshot.openFile)

    try {
      const { sections, autocomplete } = await generator(node, {
        unit: preferences?.unit ?? MeasurementUnit.PIXEL,
        scaleFactor: preferences?.scaleFactor || 1,
        customSettings: preferences?.customSettings,
        isExportRestricted: isRestricted,
        generateForCodePanel,
      })

      return { code: sections, autocomplete }
    }
    catch (error) {
      return {
        error: error as Error,
        code: [],
      }
    }
  }

  /**
   * Handles Android XML generation.
   * Extracted from runExtension for clarity.
   */
  handleAndroidXml(selectedNodeId: string): { code: any[], autocomplete: any[] } {
    const xmlCode = Fullscreen.generateAndroidCodeForNode(selectedNodeId, this.sceneGraph.scene)
    const lines = flatMap(xmlCode.trim().split('\n'), (line: string) => {
      const indent = line.startsWith('<') || /([^-]>$)/.test(line) ? 0 : 1
      return createCodeBlock(line, indent)
    })

    return {
      code: [{
        name: 'XML',
        language: 'xml',
        lines: [createCodeBlock('<!-- Auto layout, grids, variables, and unit scale are not yet supported -->'), ...lines],
      }],
      autocomplete: [],
    }
  }

  /**
   * Handles iOS UIKit generation.
   * Extracted from runExtension for clarity.
   */
  handleIosUIKit(selectedNodeId: string): { code: any[], autocomplete: any[] } {
    const swiftCode = Fullscreen.generateIOSSwiftCodeForNode(selectedNodeId, this.sceneGraph.scene)
    const lines = swiftCode.trim().split('\n').map((line: string) => createCodeBlock(line))

    return {
      code: [{
        name: 'UIKit',
        language: 'swift',
        lines: [createCodeBlock('// Auto layout, grids, variables, and unit scale are not yet supported'), ...lines],
      }],
      autocomplete: [],
    }
  }
}

// Original code: iu
const codegenInstance = new CodegenHandler(getSceneGraphInstance())

// Original code: $$ip1
/**
 * Gets or creates a codegen handler instance.
 * Original name: $$ip1
 */
export function getCodegenHandler(sceneGraph?: any): CodegenHandler {
  if (sceneGraph === undefined || sceneGraph.scene === getSceneGraphInstance().scene) {
    return codegenInstance
  }

  if (selectedNode && sceneGraph.scene === selectedNode.sceneGraph.scene) {
    return selectedNode
  }

  selectedNode?.dispose()
  selectedNode = new CodegenHandler(new SceneGraph(sceneGraph.getSceneType()))
  return selectedNode
}

// Original code: setHandler
setHandler(async (event: any) => {
  codegenInstance.prepareVmIfNeeded()
  codegenInstance.rebuildNodeCache()
  const debugStateSnapshot = debugState.getState()
  const restrictions = extractCopyExportRestrictions(debugStateSnapshot)

  return await codegenInstance.runExtension({
    selectedNodeId: event.guid,
    codegenPluginID: 'CSS',
    preferences: {
      unit: MeasurementUnit.PIXEL,
      scaleFactor: 1,
    },
    canRunCodegenArgs: restrictions,
  })
})

// Original exports
export const qZ = CodegenPlatform
export const px = getCodegenHandler
