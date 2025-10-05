import { StringValueObject } from "../905/34040"
import { DesignIssues } from "../905/49095"
import { CssVariable } from "../905/77776"
import { BasicNodeProperties } from "../905/113996"
import { GenericNode, isAutoLayoutSupportedNode, isBasicNode, isLayoutConstrainedNode } from "../905/139004"
import { PixelValue, StringValue } from "../905/235413"
import { SuggestedVariableReference } from "../905/363827"
import { VariableStatus } from "../905/707098"
import { ColorFormatter } from "../905/721592"
import { ColorStop, LinearGradient } from "../905/804867"
import { NodeWrapper } from "../905/860779"
import { NodeProperties } from "../905/897942"
import { VariableDataType } from "../figma_app/763686"

// Regular expression patterns for variable references
export const SUGGESTED_VARIABLE_START_PATTERN = /\/\*SUGGESTED_VAR_START_(.*?)\*\//g // $$f3
export const SUGGESTED_VARIABLE_END_PATTERN = /\/\*SUGGESTED_VAR_END\*\//g // $$_7

/**
 * Get radius variable information from node
 * @param node - The node to check for bound variables
 * @param context - Context containing node cache and variable resolver
 * @returns Variable information or status
 */
export function getRadiusVariable(node: any, context: any) { // $$A10
  if (node.boundVariables?.radius) {
    const variableId = node.boundVariables.radius.id
    const resolvedVariable = context.nodeCache.variableResolver?.resolveVariable(variableId)

    return resolvedVariable
      ? {
          name: resolvedVariable.name,
          codeSyntax: resolvedVariable.codeSyntax,
          status: VariableStatus.Resolved,
          id: resolvedVariable.id,
        }
      : {
          status: VariableStatus.NotResolved,
        }
  }

  return {
    status: VariableStatus.NotFound,
  }
}

/**
 * Get variable information for a specific field from node
 * @param node - The node to check for bound variables
 * @param field - The field name to look up
 * @param context - Context containing node cache and variable resolver
 * @returns Variable information or status
 */
export function getFieldVariable(node: any, field: string, context: any) { // $$y12
  if (node.boundVariables?.[field]) {
    const variableId = node.boundVariables[field].id
    const resolvedVariable = context.nodeCache.variableResolver?.resolveVariable(variableId)

    return resolvedVariable
      ? {
          name: resolvedVariable.name,
          codeSyntax: resolvedVariable.codeSyntax,
          status: VariableStatus.Resolved,
          id: resolvedVariable.id,
        }
      : {
          status: VariableStatus.NotResolved,
        }
  }

  return {
    status: VariableStatus.NotFound,
  }
}

/**
 * Get color variable information from node
 * @param node - The node to check for bound variables
 * @param unused1 - Unused parameter (kept for compatibility)
 * @param unused2 - Unused parameter (kept for compatibility)
 * @param context - Context containing node cache and variable resolver
 * @returns Variable information or status
 */
export function getColorVariable(node: any, unused1: any, unused2: any, context: any) { // $$b11
  if (node.boundVariables?.color) {
    const colorVariableId = node.boundVariables.color.id
    const resolvedVariable = context.nodeCache.variableResolver?.resolveVariable(colorVariableId)

    return resolvedVariable
      ? {
          name: resolvedVariable.name,
          codeSyntax: resolvedVariable.codeSyntax,
          status: VariableStatus.Resolved,
          id: colorVariableId, // Note: Using the original ID from boundVariables, not resolved variable
        }
      : {
          status: VariableStatus.NotResolved,
        }
  }

  return {
    status: VariableStatus.NotFound,
  }
}

/**
 * Get variable value and associated hint
 * @param node - The node to get variable value from
 * @param variableName - Name of the variable to retrieve
 * @param value - The value to check
 * @returns Object containing variable and hint
 */
export function getVariableWithHint(node: any, variableName: string, value: any) { // $$v20
  const variable = node.getVariableValue(variableName)
  const hint = getVariableHint(variable, {
    value,
  })

  return {
    variable,
    hint,
  }
}

/**
 * Get hint based on variable status
 * @param variable - The variable to check
 * @param options - Options for hint generation
 * @param additionalOptions - Additional options
 * @returns Appropriate design issue or undefined
 */
export function getVariableHint(variable: any, options?: any, additionalOptions?: any) { // $$I13
  switch (variable?.status) {
    case VariableStatus.NotResolved:
      return DesignIssues.VariableNotResolved
    case VariableStatus.NotFound:
      return additionalOptions?.isColor ? DesignIssues.NoStyleForColor : undefined
    default:
      return undefined
  }
}

/**
 * Create CSS variable if variable has value
 * @param fallbackValue - Fallback value if no variable
 * @param variableInfo - Information about the variable
 * @param unused - Unused parameter (kept for compatibility)
 * @param unused2 - Unused parameter (kept for compatibility)
 * @param cssProperty - CSS property name
 * @returns CssVariable instance or fallback value
 */
export function createCssVariableIfAvailable(
  fallbackValue: PixelValue | StringValue | ColorFormatter | LinearGradient | StringValueObject,
  variableInfo: any,
  unused: any,
  unused2: any,
  cssProperty: string,
) { // $$E19
  if (variableInfo.variable?.value) {
    const variableValue = variableInfo.variable.value
    return new CssVariable(variableValue.name, fallbackValue, cssProperty, {
      name: variableValue.name,
      id: variableValue.id,
      codeSyntax: variableValue.codeSyntax,
    })
  }

  return fallbackValue
}

/**
 * Create CSS variable with validation
 * @param fallbackValue - Fallback value if no variable
 * @param variableData - Variable data to process
 * @param issues - Issues object to populate
 * @param fieldName - Field name for issues
 * @param cssProperty - CSS property name
 * @returns CssVariable instance or fallback value
 */
export function createValidatedCssVariable<T extends PixelValue | StringValue | ColorFormatter | LinearGradient | StringValueObject>(
  fallbackValue: T,
  variableData: any,
  issues: any,
  fieldName: string,
  cssProperty: string,
) { // $$x0
  const hint = getVariableHint(variableData, fallbackValue)

  if (hint) {
    issues[fieldName] = hint
  }

  return variableData?.status === VariableStatus.Resolved
    ? new CssVariable(variableData.name, fallbackValue, cssProperty, variableData.status === VariableStatus.Resolved ? variableData : undefined)
    : fallbackValue
}

/**
 * Process raw value with suggested variable reference
 * @param params - Parameters for processing
 * @returns Processed value with variable reference or original value
 */
function processWithSuggestedVariableReference({
  raw: rawValue,
  styleField,
  suggestedVars,
  node,
  field,
  matchIndex,
  arrayIndex,
  preferences,
}: {
  raw: any
  styleField: string
  suggestedVars: Map<string, any>
  node: any
  field: string
  matchIndex: number
  arrayIndex: number
  preferences: any
}) { // S
  const suggestionResult = getSuggestedVariable({
    node,
    field,
    matchIndex,
    arrayIndex,
    preferences,
  })

  if (suggestionResult) {
    const suggestedReference = new SuggestedVariableReference(rawValue, suggestionResult.id)

    if (!suggestedVars.has(styleField)) {
      suggestedVars.set(styleField, {})
    }

    const fieldSuggestions = suggestedVars.get(styleField)
    fieldSuggestions[suggestionResult.id] = suggestionResult.matchingVars
    suggestedVars.set(styleField, fieldSuggestions)

    return suggestedReference
  }

  return rawValue
}

/**
 * Merge multiple suggestion objects
 * @param suggestionObjects - Array of suggestion objects to merge
 * @returns Merged suggestions or undefined if empty
 */
export function mergeSuggestedVariables(suggestionObjects: any[]) { // $$w9
  const mergedSuggestions: Record<string, any> = {}

  for (const suggestionObj of suggestionObjects) {
    if (suggestionObj) {
      for (const [key, value] of Object.entries(suggestionObj)) {
        mergedSuggestions[key] = value
      }
    }
  }

  return Object.keys(mergedSuggestions).length > 0 ? mergedSuggestions : undefined
}

/**
 * Get suggested variable for a field
 * @param params - Parameters for getting suggested variable
 * @returns Suggested variable information or undefined
 */
function getSuggestedVariable({
  node,
  field,
  matchIndex = 0,
  arrayIndex = 0,
  preferences,
}: {
  node: any
  field: string
  matchIndex?: number
  arrayIndex?: number
  preferences: any
}) { // C
  if (!preferences.generateForCodePanel) {
    return undefined
  }

  const inferredVariables = getInferredVariables(field, node)

  if (inferredVariables && inferredVariables[arrayIndex]) {
    return {
      id: `${matchIndex}`,
      matchingVars: inferredVariables[arrayIndex],
    }
  }

  return undefined
}

/**
 * Wrap value with bound variable markers
 * @param value - Value to wrap
 * @param variableData - Variable data
 * @param preferences - Preferences for generation
 * @returns Wrapped value with variable markers or original value
 */
export function wrapWithBoundVariableMarkers(value: string, variableData: any, preferences: any) { // $$T18
  if (!preferences.generateForCodePanel) {
    return value
  }

  const variableId = variableData.status !== undefined
    ? variableData.status === VariableStatus.Resolved ? variableData.id : undefined
    : variableData.id

  return variableId
    ? `/*BOUND_VAR_START_${variableId}*/${value}/*BOUND_VAR_END*/`
    : value
}

/**
 * Wrap value with suggested variable markers
 * @param params - Parameters for wrapping
 * @returns Object with wrapped value and matching variables
 */
export function wrapWithSuggestedVariableMarkers({
  value,
  node,
  field,
  matchIndex,
  arrayIndex,
  preferences,
}: {
  value: string
  node: any
  field: string
  matchIndex?: number
  arrayIndex?: number
  preferences: any
}) { // $$k5
  const suggestionResult = getSuggestedVariable({
    node,
    field,
    matchIndex,
    arrayIndex,
    preferences,
  })

  if (suggestionResult) {
    const wrapValueWithId = ({ value, id }: { value: string, id: string }) => {
      return `/*SUGGESTED_VAR_START_${id}*/${value}/*SUGGESTED_VAR_END*/`
    }

    return {
      value: wrapValueWithId({
        value,
        id: suggestionResult.id,
      }),
      matchingVars: {
        [suggestionResult.id]: suggestionResult.matchingVars,
      },
    }
  }

  return undefined
}

/**
 * Process pixel value with suggested variable
 * @param params - Parameters for processing
 * @returns Processed value
 */
export function processPixelValue(params: any) { // $$R17
  const { raw } = params

  return raw instanceof PixelValue
    ? processWithSuggestedVariableReference({
        ...params,
        raw,
      })
    : raw
}

/**
 * Process color value with suggested variable
 * @param params - Parameters for processing
 * @returns Processed value
 */
export function processColorValue(params: any) { // $$N15
  const { raw } = params

  if (raw instanceof LinearGradient && raw.isFromSolid) {
    const processedColorStops = raw.colorStops.map((stop) => {
      const { color } = stop

      return color instanceof ColorFormatter
        ? new ColorStop(processWithSuggestedVariableReference({
          ...params,
          raw: color,
        }), stop.position)
        : stop
    })

    return raw.toNewWithColorStops(processedColorStops)
  }

  return raw instanceof ColorFormatter
    ? processWithSuggestedVariableReference({
        ...params,
        raw,
      })
    : raw
}

/**
 * Process string value with suggested variable
 * @param params - Parameters for processing
 * @returns Processed value
 */
export function processStringValue(params: any) { // $$P4
  const { raw } = params

  return raw instanceof StringValue
    ? processWithSuggestedVariableReference({
        ...params,
        raw,
      })
    : raw
}

/**
 * Process string value object with suggested variable
 * @param params - Parameters for processing
 * @returns Processed value
 */
export function processStringValueObject(params: any) { // $$O8
  const { raw } = params

  return raw instanceof StringValueObject
    ? processWithSuggestedVariableReference({
        ...params,
        raw,
      })
    : raw
}

/**
 * Filter visible paints
 * @param paints - Array of paints to filter
 * @returns Array of visible paints with indices
 */
export function filterVisiblePaints(paints: any[]) { // $$D16
  return paints.reduce((result: any[], paint: any, index: number) => {
    const { visible = true } = paint

    if (visible) {
      result.push({
        paint,
        index,
      })
    }

    return result
  }, [])
}

/**
 * Process paints and convert unsupported types
 * @param paints - Array of paints to process
 * @returns Array of processed paints with indices
 */
export function processPaints(paints: any[]) { // $$L2
  return paints.reduce((result: any[], paint: any, index: number) => {
    const { visible = true } = paint

    if (visible) {
      switch (paint.type) {
        case "SOLID":
          result.push({
            paint,
            index,
          })
          break

        case "GRADIENT_ANGULAR":
        case "GRADIENT_DIAMOND":
        case "GRADIENT_LINEAR":
        case "GRADIENT_RADIAL":
          if (paint.gradientStops.length === 0) {
            break
          }

          const firstStopColor = paint.gradientStops[0].color
          result.push({
            paint: {
              type: "SOLID",
              opacity: firstStopColor.a,
              color: {
                r: firstStopColor.r,
                g: firstStopColor.g,
                b: firstStopColor.b,
              },
            },
            index,
            hint: DesignIssues.UnsupportedGradientPaint,
          })
          break

        default:
          result.push({
            paint: {
              type: "SOLID",
              color: {
                r: 0,
                g: 0,
                b: 0,
              },
            },
            index,
            hint: DesignIssues.UnsupportedPaint,
          })
      }
    }

    return result
  }, [])
}

/**
 * Get field value from node
 * @param fieldName - Name of the field to retrieve
 * @param node - Node to retrieve value from
 * @param index - Index for array fields
 * @returns Field value or undefined
 */
export function getNodeFieldValue(fieldName: string, node: any, index: number) { // $$F1
  if (!(node instanceof BasicNodeProperties) && !(node instanceof GenericNode)) {
    switch (fieldName) {
      case "fills":
        if (node instanceof NodeProperties) {
          return node.textSegments[0]?.fills?.[index]
        }
        return node.fills[index]

      case "strokes":
        if (node instanceof NodeProperties) {
          return undefined
        }
        if (node instanceof NodeWrapper) {
          return node.strokes[index]
        }
        return node.border.strokes[index]

      case "textDecorationColor":
        if (!isBasicNode(node) || !node.textSegments[0]) {
          return undefined
        }
        const textDecorationRawValue = node.textSegments[0].textDecorationColor.rawValue
        if (textDecorationRawValue.value === "AUTO") {
          return undefined
        }
        return textDecorationRawValue.value
    }
  }

  return undefined
}

/**
 * Get layout measurement from node
 * @param measurementName - Name of the measurement to retrieve
 * @param node - Node to retrieve measurement from
 * @returns Measurement value or undefined
 */
export function getNodeLayoutMeasurement(measurementName: string, node: any) { // $$M6
  if (!(node instanceof BasicNodeProperties) && !(node instanceof GenericNode)) {
    switch (measurementName) {
      case "width":
        return node.layout.width
      case "height":
        return node.layout.height
      case "paddingTop":
        if (!isAutoLayoutSupportedNode(node) || !node.isAutoLayout()) {
          return undefined
        }
        return node.autoLayout.paddingTop
      case "paddingRight":
        if (!isAutoLayoutSupportedNode(node) || !node.isAutoLayout()) {
          return undefined
        }
        return node.autoLayout.paddingRight
      case "paddingBottom":
        if (!isAutoLayoutSupportedNode(node) || !node.isAutoLayout()) {
          return undefined
        }
        return node.autoLayout.paddingBottom
      case "paddingLeft":
        if (!isAutoLayoutSupportedNode(node) || !node.isAutoLayout()) {
          return undefined
        }
        return node.autoLayout.paddingLeft
      case "itemSpacing":
        if (!isAutoLayoutSupportedNode(node) || !node.isAutoLayout()) {
          return undefined
        }
        return node.autoLayout.itemSpacing
      case "opacity":
        return node.opacity
      case "minWidth":
        return node.layout.minWidth
      case "maxWidth":
        return node.layout.maxWidth
      case "minHeight":
        return node.layout.minHeight
      case "maxHeight":
        return node.layout.maxHeight
      case "counterAxisSpacing":
        if (!isAutoLayoutSupportedNode(node) || !node.isAutoLayout()) {
          return undefined
        }
        return node.autoLayout.counterAxisSpacing
      case "gridRowGap":
        if (!isAutoLayoutSupportedNode(node) || !node.isGrid()) {
          return undefined
        }
        return node.gridLayout.gridRowGap
      case "gridColumnGap":
        if (!isAutoLayoutSupportedNode(node) || !node.isGrid()) {
          return undefined
        }
        return node.gridLayout.gridColumnGap
      case "strokeWeight":
        if (node instanceof NodeWrapper) {
          return node.strokeWeight.rawValue
        }
        if (!isLayoutConstrainedNode(node)) {
          return undefined
        }
        return node.border.strokeTopWeight.rawValue
      case "strokeTopWeight":
        if (!isLayoutConstrainedNode(node)) {
          return undefined
        }
        return node.border.strokeTopWeight.rawValue
      case "strokeRightWeight":
        if (!isLayoutConstrainedNode(node)) {
          return undefined
        }
        return node.border.strokeRightWeight.rawValue
      case "strokeBottomWeight":
        if (!isLayoutConstrainedNode(node)) {
          return undefined
        }
        return node.border.strokeBottomWeight.rawValue
      case "strokeLeftWeight":
        if (!isLayoutConstrainedNode(node)) {
          return undefined
        }
        return node.border.strokeLeftWeight.rawValue
      case "topLeftRadius":
        if (!isLayoutConstrainedNode(node)) {
          return undefined
        }
        return node.border.topLeftRadius
      case "topRightRadius":
        if (!isLayoutConstrainedNode(node)) {
          return undefined
        }
        return node.border.topRightRadius
      case "bottomLeftRadius":
        if (!isLayoutConstrainedNode(node)) {
          return undefined
        }
        return node.border.bottomLeftRadius
      case "bottomRightRadius":
        if (!isLayoutConstrainedNode(node)) {
          return undefined
        }
        return node.border.bottomRightRadius
      case "fontSize":
        if (!isBasicNode(node)) {
          return undefined
        }
        return node.textSegments[0].fontSize.rawValue
      case "lineHeight":
        if (!isBasicNode(node)) {
          return undefined
        }
        const lineHeightRawValue = node.textSegments[0].lineHeight.rawValue
        if (lineHeightRawValue.unit === "AUTO") {
          return undefined
        }
        return lineHeightRawValue.value
    }
  }

  return undefined
}

/**
 * Get inferred variables for a field
 * @param fieldName - Name of the field
 * @param node - Node to get inferred variables from
 * @returns Array of inferred variables
 */
export function getInferredVariables(fieldName: string, node: any) { // $$j14
  if (node instanceof BasicNodeProperties || node instanceof GenericNode) {
    return []
  }

  if (fieldName === "fills" || fieldName === "strokes") {
    const inferredVars = node.inferredVariables[fieldName]

    return inferredVars
      ? inferredVars.map((vars: any, index: number) => {
          const fieldValue = getNodeFieldValue(fieldName, node, index)

          return fieldValue && fieldValue.type === "SOLID" && vars && vars.length !== 0
            ? {
                ids: vars.map((v: any) => v.id),
                rawValue: {
                  type: VariableDataType.COLOR,
                  value: {
                    ...fieldValue.color,
                    a: fieldValue.opacity ?? 1,
                  },
                },
              }
            : null
        })
      : []
  }

  if (fieldName === "textDecorationColor") {
    const inferredVars = node.inferredVariables[fieldName]

    if (!inferredVars) {
      return []
    }

    const fieldValue = getNodeFieldValue(fieldName, node, 0)

    return fieldValue && fieldValue.type === "SOLID" && inferredVars && inferredVars.length !== 0
      ? [{
          ids: inferredVars.map((v: any) => v.id),
          rawValue: {
            type: VariableDataType.COLOR,
            value: {
              ...fieldValue.color,
              a: fieldValue.opacity ?? 1,
            },
          },
        }]
      : [null]
  }

  const inferredVars = node.inferredVariables[fieldName]

  if (!inferredVars) {
    return []
  }

  if (fieldName === "fontFamily") {
    return isBasicNode(node)
      ? [{
          ids: inferredVars.map((v: any) => v.id),
          rawValue: {
            type: VariableDataType.STRING,
            value: node.textSegments[0].fontName.family.rawValue,
          },
        }]
      : []
  }

  const measurementValue = getNodeLayoutMeasurement(fieldName, node)

  return measurementValue
    ? [{
        ids: inferredVars.map((v: any) => v.id),
        rawValue: {
          type: VariableDataType.FLOAT,
          value: measurementValue,
        },
      }]
    : []
}

// Export aliases for backward compatibility
export const DX = createValidatedCssVariable // $$x0
export const Eu = getNodeFieldValue // $$F1
export const F$ = processPaints // $$L2
export const G6 = SUGGESTED_VARIABLE_START_PATTERN // $$f3
export const JT = processStringValue // $$P4
export const Kp = wrapWithSuggestedVariableMarkers // $$k5
export const LI = getNodeLayoutMeasurement // $$M6
export const P1 = SUGGESTED_VARIABLE_END_PATTERN // $$_7
export const ZN = processStringValueObject // $$O8
export const a3 = mergeSuggestedVariables // $$w9
export const bE = getRadiusVariable // $$A10
export const hO = getColorVariable // $$b11
export const jX = getFieldVariable // $$y12
export const mJ = getVariableHint // $$I13
export const nK = getInferredVariables // $$j14
export const nb = processColorValue // $$N15
export const oE = filterVisiblePaints // $$D16
export const oy = processPixelValue // $$R17
export const pO = wrapWithBoundVariableMarkers // $$T18
export const vV = createCssVariableIfAvailable // $$E19
export const zr = getVariableWithHint // $$v20
