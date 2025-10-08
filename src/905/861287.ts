import { bytesToHex, sha1HexFromString } from "../905/125019"
import { ASSETS_BASE_URL, populateAssetsMap } from "../905/419431"
import { ImageCppBindings } from "../figma_app/763686"

/**
 * Options for generating node markup
 */
interface NodeMarkupOptions {
  node: any
  maxDepth?: number
  includeComponents?: boolean
  includeVariables?: boolean
  codeConnectMapping?: Record<string, any>
  codebaseSuggestions?: Record<string, any>
  configSettings: {
    markupImageOption: "local" | "inline"
  }
  loadImageByHash?: (hash: string) => Promise<void>
}

/**
 * Generates XML markup representation of a Figma design node
 */
export function generateNodeMarkup(options: NodeMarkupOptions) {
  try {
    const imageOption = options.configSettings.markupImageOption
    const xmlContent = convertNodeToXml(options)
    const hasCodeConnect = Object.keys(options?.codeConnectMapping || {}).length > 0
    const hasSuggestions = Object.keys(options?.codebaseSuggestions || {}).length > 0

    return {
      content: [
        {
          type: "text",
          text: [
            "The following message is an XML representation of the design node. ",
            hasCodeConnect ? "If the node is connected to a code component in the users codebase, the source of the code component will be included in the XML on the codeConnectSrc attribute. The component name will be included in the codeConnectName attribute." : "",
            hasSuggestions ? "If the node is similar to existing components in your codebase based on name and visual similarity, the top suggested components will be included in the XML on the codebaseSuggestions attribute. It will be an array of objects with the component `name` and `source`, ordered in descending order of similarity." : "",
            imageOption === "local" ? "Image assets are stored on a local server and can be referenced using the imageSrc attribute in the XML-they will be served from the local server." : ""
          ].filter(text => !!text).join("\n\n"),
        },
        {
          type: "text",
          text: xmlContent,
        }
      ],
    }
  } catch (error) {
    console.error(error)
    return error
  }
}

/**
 * Converts a node to XML format
 */
function convertNodeToXml(options: NodeMarkupOptions): string {
  const maxDepth = options.maxDepth || undefined
  const includeComponents = options.includeComponents ?? true
  const includeVariables = options.includeVariables ?? true

  const xmlBody = generateNodeXml({
    node: options.node,
    includeComponents,
    includeVariables,
    maxDepth,
    codeConnectMapping: options.codeConnectMapping,
    codebaseSuggestions: options.codebaseSuggestions,
    configSettings: options.configSettings,
    loadImageByHash: options.loadImageByHash,
  })

  return `<?xml version="1.0" encoding="UTF-8"?>
<root>
${xmlBody}
</root>`
}

/**
 * Recursively generates XML for a node and its children
 */
function generateNodeXml(params: {
  node: any
  maxDepth?: number
  includeComponents: boolean
  includeVariables: boolean
  codeConnectMapping?: Record<string, any>
  codebaseSuggestions?: Record<string, any>
  configSettings: any
  loadImageByHash?: (hash: string) => Promise<void>
}, depth: number = 0): string {
  const {
    node,
    maxDepth,
    includeComponents,
    includeVariables,
    codeConnectMapping,
    codebaseSuggestions,
    configSettings,
    loadImageByHash,
  } = params

  // Skip invisible nodes
  if (!node.visible && (!node.componentPropertyReferences() || !node.componentPropertyReferences().visible)) {
    return ""
  }

  const indent = "  ".repeat(depth)
  const attributes = collectNodeAttributes({
    node,
    includeComponents,
    includeVariables,
    codeConnectMapping,
    codebaseSuggestions,
    configSettings,
    loadImageByHash,
  })

  const tagName = node.type.toLowerCase()
  const attributeString = Object.entries(attributes).flatMap(([key, value]) => {
    if (key === "spans" || key === "svg" || value == null) {
      return []
    }
    const escapedValue = escapeXml(String(value))
    return `${key}="${escapedValue}"`
  }).join(" ")

  let xmlString = `${indent}<${tagName} ${attributeString}`
  const isMaxDepthReached = maxDepth !== undefined && depth >= maxDepth

  // Handle text nodes with spans
  if (attributes.spans) {
    xmlString += ">\n"
    xmlString += attributes.spans.map(span =>
      `${indent}  <span ${Object.entries(span).flatMap(([key, value]) => {
        if (key === "content") return []
        const escapedValue = escapeXml(String(value || ""))
        return `${key}="${escapedValue}"`
      }).join(" ")} ${span.content ? `>${span.content}</span>` : "/>"}`
    ).join("\n")
    xmlString += `\n${indent}</${tagName}>\n`
  }
  // Handle vector nodes with SVG
  else if (attributes.svg) {
    xmlString += ">\n"
    xmlString += `${indent}  ${attributes.svg.replace(/\n/g, "")}`
    xmlString += `\n${indent}</${tagName}>\n`
  }
  // Handle nodes with children
  else if ("childrenNodes" in node && node.childrenNodes.length > 0 && !isMaxDepthReached) {
    xmlString += ">\n"
    for (const childNode of node.childrenNodes) {
      xmlString += generateNodeXml({
        node: childNode,
        maxDepth,
        includeComponents,
        includeVariables,
        codeConnectMapping,
        codebaseSuggestions,
        configSettings,
        loadImageByHash,
      }, depth + 1)
    }
    xmlString += `${indent}</${tagName}>\n`
  }
  // Self-closing tag
  else {
    xmlString += " />\n"
  }

  return xmlString
}

/**
 * Collects all attributes for a node
 */
function collectNodeAttributes(params: {
  node: any
  includeComponents: boolean
  includeVariables: boolean
  codeConnectMapping?: Record<string, any>
  codebaseSuggestions?: Record<string, any>
  configSettings: any
  loadImageByHash?: (hash: string) => Promise<void>
}): Record<string, any> {
  const {
    node,
    includeComponents,
    includeVariables,
    codeConnectMapping,
    codebaseSuggestions,
    configSettings,
    loadImageByHash,
  } = params

  const attributes: Record<string, any> = {
    name: node.name,
    id: node.guid,
  }

  if (includeComponents) {
    addComponentAttributes(node, attributes, configSettings)
  }

  if (node.annotations?.length) {
    addAnnotationAttributes(node, attributes)
  }

  addStyleAttributes(node, attributes, configSettings, loadImageByHash)

  if (includeVariables && node.boundVariables) {
    addVariableAttributes(node, attributes)
  }

  if (codeConnectMapping) {
    addCodeConnectAttributes(node, attributes, codeConnectMapping)
  }

  if (codebaseSuggestions) {
    addCodebaseSuggestions(node, attributes, codebaseSuggestions)
  }

  return attributes
}

/**
 * Adds component-related attributes
 */
function addComponentAttributes(node: any, attributes: Record<string, any>, configSettings: any): void {
  // Handle SYMBOL nodes with state groups
  if (node.type === "SYMBOL" && node.parentNode?.isStateGroup) {
    attributes.componentKey = node.componentKey ?? ""
    attributes.parentComponentKey = node.parentNode.componentKey ?? ""
  } else if (node.isStateGroup && node.componentKey) {
    attributes.componentKey = node.componentKey
  }

  // Handle component property definitions
  if (node.isStateGroup || (node.type === "SYMBOL" && node.parentNode && !node.parentNode.isStateGroup)) {
    const propertyDefinitions = node.componentPropertyDefinitions()
    for (const propName in propertyDefinitions) {
      const prop = propertyDefinitions[propName]
      const sanitizedName = propName?.split("#")[0] || ""
      const attrKey = `prop[${sanitizedName.replace(/[^A-Z0-9]/gi, "_")}]`

      if (prop?.type === "INSTANCE_SWAP") {
        try {
          const swapNode = node.sceneGraph.get("#{p.defaultValue}")
          if (swapNode?.parentNode) {
            attributes[attrKey] = swapNode.parentNode.isStateGroup ? swapNode.parentNode.name : swapNode.name
          }
        } catch (error) {
          console.warn("Could not get default swap component:", error)
        }
      } else if (prop?.type === "VARIANT") {
        attributes[attrKey] = prop.variantOptions?.join(",")
      } else {
        attributes[attrKey] = prop?.defaultValue
      }
    }
  }

  // Handle VECTOR nodes
  if (node.type === "VECTOR" && node.visible) {
    handleVectorNode(node, attributes, configSettings)
  }

  // Handle INSTANCE nodes
  if (node.type === "INSTANCE") {
    handleInstanceNode(node, attributes)
  }
}

/**
 * Handles vector node SVG export
 */
function handleVectorNode(node: any, attributes: Record<string, any>, configSettings: any): void {
  if (configSettings.markupImageOption === "local") {
    const svgData = new TextDecoder("utf-8").decode(node.$$export([{ imageType: "SVG" }]))
    const hash = sha1HexFromString(svgData)
    const blob = new Blob([svgData])
    const assetMap = new Map()
    const filename = `${hash}.svg`
    assetMap.set(filename, blob)
    populateAssetsMap(assetMap)
    attributes["xlink:href"] = `${ASSETS_BASE_URL}/${filename}`
  } else {
    try {
      const svgData = new TextDecoder("utf-8").decode(node.$$export([{ imageType: "SVG" }]))
      attributes.svg = svgData
    } catch {
      // Silently fail for inline SVG
    }
  }
}

/**
 * Handles instance node properties
 */
function handleInstanceNode(node: any, attributes: Record<string, any>): void {
  try {
    const mainComponent = node.mainComponent || null
    if (mainComponent) {
      attributes.componentKey = mainComponent.componentKey ?? ""
      if (mainComponent.parentNode?.isStateGroup && mainComponent.parentNode.componentKey) {
        attributes.parentComponentKey = mainComponent.parentNode.componentKey
      }
    }
  } catch (error) {
    console.warn("Could not get main component:", error)
  }

  const componentProps = node.componentProperties()
  for (const propName in componentProps) {
    const prop = componentProps[propName]
    const sanitizedName = propName?.split("#")[0] || ""
    const attrKey = `prop[${sanitizedName.replace(/[^A-Z0-9]/gi, "_")}]`

    if (prop?.type === "INSTANCE_SWAP") {
      try {
        const swapNode = node.sceneGraph.get(`${prop.value}`)
        if (swapNode?.parentNode) {
          attributes[attrKey] = swapNode.parentNode.isStateGroup ? swapNode.parentNode.name : swapNode.name
        }
      } catch (error) {
        console.warn("Could not get swap component:", error)
      }
    } else {
      attributes[attrKey] = prop?.value
    }
  }
}

/**
 * Adds annotation attributes
 */
function addAnnotationAttributes(node: any, attributes: Record<string, any>): void {
  for (const annotation of node.annotations) {
    const category = annotation.categoryId
      ? node.sceneGraph.getRoot().annotationCategories?.find(cat => cat?.id === annotation.categoryId)
      : null
    if (annotation.label) {
      attributes[`annotation[${category ? category.id : "Default"}]`] = annotation.label
    }
  }
}

/**
 * Adds variable binding attributes
 */
function addVariableAttributes(node: any, attributes: Record<string, any>): void {
  for (const propName in node.boundVariables) {
    const isArrayType = propName === "fills" || propName === "strokes"
    const bindings = isArrayType ? node.boundVariables[propName] : [node.boundVariables[propName]]

    if (!bindings) continue

    const bindingArray = Array.isArray(bindings) ? bindings : [bindings]
    if (bindingArray.length === 0) continue

    let index = 0
    for (const binding of bindingArray) {
      if (!binding) continue

      const variableNode = node.sceneGraph.getVariableNode(binding.id)
      const attrKey = isArrayType ? `var[${propName}][${index}]` : `var[${propName}]`
      const variableName = variableNode ? variableNode.name : binding.id

      if (variableName) {
        attributes[attrKey] = variableName
        index++
      }
    }
  }
}

/**
 * Adds code connect attributes
 */
function addCodeConnectAttributes(node: any, attributes: Record<string, any>, codeConnectMapping: Record<string, any>): void {
  const mapping = codeConnectMapping[node.guid]
  if (mapping) {
    attributes.codeConnectSrc = mapping.source
    attributes.codeConnectName = mapping.componentName
  }
}

/**
 * Adds codebase suggestion attributes
 */
function addCodebaseSuggestions(node: any, attributes: Record<string, any>, codebaseSuggestions: Record<string, any>): void {
  const suggestions = codebaseSuggestions[node.guid]
  if (suggestions && suggestions.length !== 0) {
    attributes.codebaseSuggestions = JSON.stringify(suggestions)
  }
}

/**
 * Adds style-related attributes (main entry point for style processing)
 */
async function addStyleAttributes(
  node: any,
  attributes: Record<string, any>,
  configSettings: any,
  loadImageByHash?: (hash: string) => Promise<void>
): Promise<void> {
  if (node.type === "TEXT") {
    addTextStyleAttributes(node, attributes)
    return
  }

  // Add auto-layout properties
  const autoLayoutResult = node.inferredAutoLayoutResult
  if (autoLayoutResult) {
    for (const key in autoLayoutResult) {
      attributes[`style[${key}]`] = autoLayoutResult[key]
    }
  }

  // Add dimensions and position
  if (node.absoluteRenderBounds?.w !== undefined) {
    attributes["style[width]"] = node.absoluteRenderBounds.w
  }
  if (node.absoluteRenderBounds?.h !== undefined) {
    attributes["style[height]"] = node.absoluteRenderBounds.h
  }
  if (node.x !== undefined) {
    attributes["style[x]"] = node.x
  }
  if (node.y !== undefined) {
    attributes["style[y]"] = node.y
  }

  // Process fills
  if (node.fills?.length > 0) {
    await addFillAttributes(node, attributes, configSettings, loadImageByHash)
  }

  // Process strokes
  addStrokeAttributes(node, attributes)

  // Process effects
  addEffectAttributes(node, attributes)
}

/**
 * Adds text-specific style attributes
 */
function addTextStyleAttributes(node: any, attributes: Record<string, any>): void {
  // Set simplified name for text nodes
  attributes.name = node.name === node.characters ? "Text Node" : node.name.slice(0, 30)

  const textSegments = node.getStyledTextSegments([
    "textStyleId", "fontName", "fontSize", "fontWeight",
    "letterSpacing", "lineHeight", "textCase", "textDecoration"
  ])

  const spans: any[] = []

  for (const segment of textSegments) {
    const span: Record<string, any> = {
      content: segment.characters,
    }

    if (segment.textStyleId) {
      const textStyle = node.getRangeInheritedTextStyle(segment.start, segment.end)
      span["style[textStyleName]"] = getTextStyleName(node, textStyle)
    }

    if (segment.fontName) {
      span["style[fontFamily]"] = segment.fontName.family
      span["style[fontStyle]"] = segment.fontName.style
    }

    if (segment.fontSize !== undefined) {
      span["style[fontSize]"] = segment.fontSize
    }

    if (segment.fontWeight !== undefined) {
      span["style[fontWeight]"] = segment.fontWeight
    }

    if (segment.letterSpacing !== undefined) {
      const spacing = segment.letterSpacing
      if (typeof spacing === "object") {
        span["style[letterSpacing]"] = spacing.value
        span["style[letterSpacingUnit]"] = spacing.units
      } else {
        span["style[letterSpacing]"] = spacing
      }
    }

    if (segment.lineHeight !== undefined) {
      const lineHeight = segment.lineHeight
      if (typeof lineHeight === "object") {
        span["style[lineHeight]"] = lineHeight.value
        span["style[lineHeightUnit]"] = lineHeight.units
      } else {
        span["style[lineHeight]"] = lineHeight
      }
    }

    if (segment.textCase !== undefined) {
      span["style[textCase]"] = segment.textCase
    }

    if (segment.textDecoration !== undefined) {
      span["style[textDecoration]"] = segment.textDecoration
    }

    if (segment.paragraphIndent !== undefined) {
      span["style[paragraphIndent]"] = segment.paragraphIndent
    }

    if (segment.paragraphSpacing !== undefined) {
      span["style[paragraphSpacing]"] = segment.paragraphSpacing
    }

    spans.push(span)
  }

  attributes.spans = spans

  if (node.textAlignHorizontal !== undefined) {
    attributes["style[textAlign]"] = node.textAlignHorizontal
  }

  if (node.textAlignVertical !== undefined) {
    attributes["style[textAlignVertical]"] = node.textAlignVertical
  }
}

/**
 * Gets the text style name
 */
function getTextStyleName(node: any, textStyle: any): string {
  if (textStyle === "mixed") {
    return "mixed"
  }
  if (textStyle?.key) {
    const styleNode = node.sceneGraph.getStyleNodeByRef(textStyle)
    return styleNode ? styleNode.name : textStyle.key
  }
  return "unknown"
}

/**
 * Adds fill attributes
 */
async function addFillAttributes(
  node: any,
  attributes: Record<string, any>,
  configSettings: any,
  loadImageByHash?: (hash: string) => Promise<void>
): Promise<void> {
  const fillPromises = node.fills.map(async (fill: any, index: number) => {
    if (fill.type === "SOLID" && fill.visible !== false && fill.color) {
      const { r, g, b, a } = fill.color
      const hexColor = rgbToHex(r, g, b)
      attributes[`style[fill][${index}]`] = hexColor
      if (a !== 1) {
        attributes[`style[fillOpacity][${index}]`] = a
      }
    }
    else if (
      configSettings.markupImageOption === "local" &&
      fill.type === "IMAGE" &&
      fill.image?.hash &&
      ImageCppBindings &&
      fill.visible !== false
    ) {
      try {
        const hash = bytesToHex(fill.image.hash)
        if (loadImageByHash) {
          await loadImageByHash(hash)
        }
        const imageData = ImageCppBindings.getCompressedImage(hash)
        if (!imageData) {
          console.error(`Image data for hash ${hash} not found`)
          return
        }
        const blob = new Blob([imageData])
        const assetMap = new Map()
        const filename = `${hash}.png`
        assetMap.set(filename, blob)
        populateAssetsMap(assetMap)
        attributes[`style[fill][${index}][imageSrc]`] = `${ASSETS_BASE_URL}/${filename}`
      } catch (error) {
        console.error(`Error processing image fill at index ${index}:`, error)
      }
    }
    else if (fill.type) {
      attributes[`style[fill][${index}]`] = fill.type
    }
  })

  await Promise.all(fillPromises)
}

/**
 * Adds stroke attributes
 */
function addStrokeAttributes(node: any, attributes: Record<string, any>): void {
  const strokes = node.strokePaints?.data
  if (!strokes?.length) return

  strokes.forEach((stroke: any, index: number) => {
    if (stroke.type === "SOLID" && stroke.visible !== false) {
      const { r, g, b, a } = stroke.color || { r: 0, g: 0, b: 0, a: 1 }
      const hexColor = rgbToHex(r, g, b)
      attributes[`style[stroke][${index}]`] = hexColor
      if (a !== 1) {
        attributes[`style[strokeOpacity][${index}]`] = `${a}`
      }
    } else if (stroke.type) {
      attributes[`style[stroke][${index}]`] = stroke.type
    }
  })
}

/**
 * Adds effect attributes
 */
function addEffectAttributes(node: any, attributes: Record<string, any>): void {
  if (!node.effects?.length) return

  node.effects.forEach((effect: any, index: number) => {
    if (!effect.visible) return

    attributes[`style[effect][${index}][type]`] = `${effect.type}`

    if (effect.type === "DROP_SHADOW" || effect.type === "INNER_SHADOW") {
      if (effect.color) {
        const { r, g, b, a } = effect.color
        attributes[`style[effect][${index}][color]`] = rgbToHex(r, g, b)
        if (a !== 1) {
          attributes[`style[effect][${index}][opacity]`] = `${a}`
        }
      }
      attributes[`style[effect][${index}][offset][x]`] = effect.offset?.x
      attributes[`style[effect][${index}][offset][y]`] = effect.offset?.y
      attributes[`style[effect][${index}][radius]`] = effect.radius
      attributes[`style[effect][${index}][spread]`] = effect.spread
    }
    else if (effect.type === "FOREGROUND_BLUR" || effect.type === "BACKGROUND_BLUR") {
      attributes[`style[effect][${index}][radius]`] = effect.radius
    }
  })
}

/**
 * Converts RGB values (0-1) to hex color string
 */
function rgbToHex(r: number, g: number, b: number): string {
  const red = Math.round(255 * r)
  const green = Math.round(255 * g)
  const blue = Math.round(255 * b)
  return `#${(0x1000000 + (red << 16) + (green << 8) + blue).toString(16).slice(1).toUpperCase()}`
}

/**
 * Escapes special XML characters
 */
function escapeXml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;")
}

// Export with original name for compatibility
export const $$o0 = generateNodeMarkup
export const d = generateNodeMarkup
