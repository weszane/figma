import { camelCase, upperFirst } from "lodash-es"
import { reportError } from "../905/11"
import { ServiceCategories } from "../905/165054"
import { trackToolCallDuration } from "../905/372596"
import { debugState } from "../905/407919"
import { getFeatureFlags } from "../905/601108"
import { getSingletonSceneGraph } from "../905/700578"
import { collectNodeVariablesAndStyles } from "../905/882689"
import { htmlToEditorState } from "../905/902840"
import { updateUnmappedComponentsStore } from "../905/938332"
import { atomStoreManager } from "../figma_app/27355"
import { trackDefinedFileEvent } from "../figma_app/314264"
import { denyOverwritingFilesAtom, imageOptionsWithMount, isCodebaseSuggestionsEnabled, mockDirForImageWritesAtom, useTailwindAtom } from "../figma_app/342355"
import { optimizeCode, updateImagesToEsmImports } from "../figma_app/346422"
import { hB } from "../figma_app/609511"
import { xg } from "../figma_app/677646"
import { ANNOTATION_DOCS, ASSETS_BASE_URL, CODE_CONNECT_DOCS, CODEBASE_SUGGESTIONS_DOCS, GET_CODE, getImageAssetDocs, IMAGE_ASSET_DOCS, IMPORTANT_IMAGE_PROMPT, populateAssetsMap, STYLING_RULE } from "../figma_app/728005"
import { getAnnotationCategoryLabel } from "../figma_app/781512"
import { desktopAPIInstance } from "../figma_app/876459"
// Renamed variables, added types, simplified logic, improved readability
// Origin: $$A0

interface DesignToReactOptions {
  markupImageOption: string
  imageAssetsOptions: {
    transformer: Fn
    assets: Map<string, any>
  }
  convertToTailwindCSS: boolean
  inlineStyleProperties: boolean
  useFigmaComponents: boolean
  useFigmaComponentForNode: (nodeId: string) => boolean
  variantSerializationMode: string
  disableExtractFrames: boolean
  disableSvgImports: boolean
  optimizeCode: (code: string) => Promise<string>
  domNodeToReactStr: (node: { attributes: NamedNodeMap | null }) => string | null
  attributes: Record<string, any>
  attributesWithFallback: any[]
}

interface CodeConnectMapping {
  [nodeId: string]: {
    snippet?: string
    snippetImports?: string[]
    source?: string
    componentName?: string
    label?: string
  }
}

interface CodebaseSuggestions {
  [nodeId: string]: any
}

interface AnnotationAttribute {
  name: string
  value: string
  nodeIds: string[]
  mergeFn: (ids: string[]) => string
}

interface SceneGraphNode {
  guid: string
  type: string
  visible: boolean
  annotations: Array<{
    label?: string
    categoryId?: string
  }>
  childrenNodes: SceneGraphNode[]
  componentProperties?: () => Record<string, { value: string | number | boolean }>
  name?: string
}

interface SceneGraph {
  getRoot: () => {
    annotationCategories: Array<{
      id: string
    }>
  }
}

interface SceneGraphWrapper {
  sceneGraph: SceneGraph
}

interface FileContent {
  name: string
  contents: string
}

interface DesignToReactResult {
  files: FileContent[]
}

interface VariableAndStyleCollection {
  [key: string]: string
}

export async function generateCodeFromDesign(
  sceneGraphWrapper: SceneGraphWrapper,
  nodeCount: number,
  language: string,
  getCodebaseSuggestions: () => Promise<[CodeConnectMapping, CodebaseSuggestions]>,
  outputPath?: string,
): Promise<[{ content: Array<{ type: string, text: string }> }, { codeConnectMapping: CodeConnectMapping }]> {
  const { designToReact } = await import("../2824/40443")

  // Get atom values
  const imageOption = atomStoreManager.get(imageOptionsWithMount)
  const useTailwind = atomStoreManager.get(useTailwindAtom)
  const denyOverwritingFiles = atomStoreManager.get(denyOverwritingFilesAtom)
  const mockDirectoryForImageWrites = atomStoreManager.get(mockDirForImageWritesAtom)

  // Initialize assets map and options
  const assetsMap = new Map<string, any>()
  const imageAssetsOptions = {
    transformer: updateImagesToEsmImports,
    assets: assetsMap,
  }

  // Track imports for code snippets
  const snippetImportsSet = new Set<string>()

  // Get codebase suggestions
  const codebaseSuggestionsPromise = getCodebaseSuggestions()

  // State tracking variables
  let hasProcessedCodebaseSuggestions = true
  let codeConnectMapping: CodeConnectMapping = {}
  let codebaseSuggestions: CodebaseSuggestions = {}
  const unmappedComponentNodeIds = new Set<string>()
  const codebaseSuggestionNodeIds = new Set<string>()
  let dataAttributes: Record<string, any> = {}

  // Update mapping with code connect and codebase suggestions
  function updateMappings(newCodeConnectMapping: CodeConnectMapping, newCodebaseSuggestions: CodebaseSuggestions) {
    hasProcessedCodebaseSuggestions = false
    Object.assign(codeConnectMapping, newCodeConnectMapping)
    Object.assign(codebaseSuggestions, newCodebaseSuggestions)

    Object.keys(codeConnectMapping).forEach((nodeId) => {
      unmappedComponentNodeIds.add(nodeId)
    })

    Object.keys(codebaseSuggestions).forEach((nodeId) => {
      codebaseSuggestionNodeIds.add(nodeId)
    })

    updateUnmappedComponentsStore(sceneGraphWrapper, unmappedComponentNodeIds, debugState)
  }

  // Process codebase suggestions if enabled
  if (isCodebaseSuggestionsEnabled()) {
    const [fetchedCodeConnectMapping, fetchedCodebaseSuggestions] = await codebaseSuggestionsPromise
    updateMappings(fetchedCodeConnectMapping, fetchedCodebaseSuggestions)

    dataAttributes = codebaseSuggestions
      ? Object.fromEntries(
          Object.entries(codebaseSuggestions).map(([nodeId, suggestionData]) => [
            nodeId,
            { "data-codebase-suggestions": JSON.stringify(suggestionData) },
          ]),
        )
      : {}
  }

  // Extract annotations from scene graph
  const extractAnnotations = (wrapper: SceneGraphWrapper): AnnotationAttribute[] => {
    try {
      const extractRecursive = (node: SceneGraphNode, ancestorIds: string[]) => {
        const labeledAnnotations = node.annotations.filter(annotation => annotation.label)

        if (labeledAnnotations.length > 0) {
          labeledAnnotations.forEach((annotation) => {
            const category = annotation.categoryId
              ? rootAnnotationCategories?.find(cat => cat.id === annotation.categoryId)
              : null

            const attributeName = category
              ? `data-${getAnnotationCategoryLabel(category)
                .trim()
                .replace(/[^\w\-.:]/g, "-")
                .replace(/-+/g, "-")
                .replace(/^-+|-+$/g, "")}-annotations`
              : "data-annotations"

            const editorState = htmlToEditorState(annotation.label || "")

            annotationAttributes.push({
              name: attributeName,
              value: editorState,
              nodeIds: [node.guid, ...ancestorIds],
              mergeFn: joinNodeIds,
            })
          })
        }

        node.childrenNodes.forEach((childNode) => {
          extractRecursive(childNode, [node.guid, ...ancestorIds])
        })
      }

      const rootAnnotationCategories = wrapper.sceneGraph.getRoot().annotationCategories
      const annotationAttributes: AnnotationAttribute[] = []
      const joinNodeIds = (ids: string[]) => ids.join(" | ")

      extractRecursive(wrapper.sceneGraph.getRoot() as unknown as SceneGraphNode, [])
      return annotationAttributes
    }
    catch (error) {
      console.error("Error extracting annotations", error)
      reportError(ServiceCategories.DEVELOPER_TOOLS, error, {
        extra: {
          rootNode: wrapper?.sceneGraph?.getRoot()?.annotationCategories?.[0]?.id || "",
        },
      })
      return []
    }
  }

  const annotationAttributes = extractAnnotations(sceneGraphWrapper)

  // Check if MCP refactor is enabled
  const isMcpRefactorEnabled = getFeatureFlags().d2r_refactor_mcp ?? false

  // Start timing for design to React conversion
  const designToReactStartTime = performance.now()

  // Convert design to React
  const { files }: DesignToReactResult = await designToReact(
    sceneGraphWrapper,
    async (node: any) => {
      const serializationStartTime = performance.now()

      const htmlSerializer = await hB({
        assets: assetsMap,
        compactDOM: true,
        isMcpGeneration: true,
        shouldOutputVariables: getFeatureFlags().dt_mcp_inline_variables ?? false,
        codeSyntaxLanguage: language,
      })

      const serializedHtml = await htmlSerializer.serializeHTML(node.guid)
      trackToolCallDuration("html_serialization", performance.now() - serializationStartTime, GET_CODE)

      const [fetchedCodeConnectMapping, fetchedCodebaseSuggestions] = await codebaseSuggestionsPromise
      if (hasProcessedCodebaseSuggestions) {
        updateMappings(fetchedCodeConnectMapping, fetchedCodebaseSuggestions)
      }

      return serializedHtml
    },
    {
      markupImageOption: imageOption,
      imageAssetsOptions,
      convertToTailwindCSS: useTailwind,
      inlineStyleProperties: !useTailwind,
      useFigmaComponents: true,
      useFigmaComponentForNode: (nodeId: string) =>
        !unmappedComponentNodeIds.has(nodeId) && !codebaseSuggestionNodeIds.has(nodeId),
      variantSerializationMode: "used",
      disableExtractFrames: true,
      disableSvgImports: true,
      optimizeCode: async (code: string) => {
        if (isMcpRefactorEnabled) {
          const optimizationStartTime = performance.now()
          const optimizedCode = optimizeCode(code, true)

          optimizedCode.then(() => {
            trackToolCallDuration("code_optimization", performance.now() - optimizationStartTime, GET_CODE)
          })

          return optimizedCode
        }
        return Promise.resolve(code)
      },
      domNodeToReactStr: ({ attributes }) => {
        const nodeId = attributes?.getNamedItem("id")?.value
        if (!nodeId)
          return null

        const developerFriendlyId = xg(nodeId)
        if (!developerFriendlyId)
          return null

        const sceneNode = getSingletonSceneGraph().getFromDeveloperFriendlyId(developerFriendlyId)
        if (!sceneNode || !isFigmaComponent(sceneNode))
          return null

        const mappingInfo = codeConnectMapping[sceneNode.guid]
        if (mappingInfo) {
          const buildComponentTree = (
            node: any,
            mappings: CodeConnectMapping,
            importsSet: Set<string>,
          ): string[] => {
            if (!node.visible)
              return []

            const nodeMapping = isFigmaComponent(node) ? mappings[node.guid] : null

            if (nodeMapping?.snippet) {
              if (nodeMapping.snippetImports) {
                nodeMapping.snippetImports.forEach((importStatement) => {
                  importsSet.add(importStatement)
                })
              }
              else if (nodeMapping.source) {
                importsSet.add(`import ${nodeMapping.componentName} from "${nodeMapping.source}"`)
              }
              return [nodeMapping.snippet]
            }
            else {
              const childSnippets: string[] = []
              for (const childNode of node.childrenNodes) {
                const childResult = buildComponentTree(childNode, mappings, importsSet)
                childSnippets.push(...childResult)
              }

              if (nodeMapping) {
                let componentProps = ""
                let componentName = ""

                try {
                  const properties = node.componentProperties()
                  componentProps = Object.entries<ObjectOf>(properties)
                    .map(([propName, propValue]) => {
                      const formattedName = camelCase(propName.split("#")[0])
                      const formattedValue = typeof propValue.value === "string"
                        ? `"${propValue.value}"`
                        : `{${propValue.value}}`
                      return `${formattedName}=${formattedValue}`
                    })
                    .join(" ")
                }
                catch { }

                componentName = nodeMapping.componentName || upperFirst(camelCase(node.name || ""))

                if (nodeMapping.source) {
                  importsSet.add(`import ${componentName} from "${nodeMapping.source}"`)
                }

                const result: string[] = []
                if (childSnippets.length > 0) {
                  result.push(createComponentTag({ componentName, props: componentProps, hasChildren: true }))
                  result.push(...childSnippets)
                  result.push(createComponentTag({ componentName, props: "", isClosingTag: true }))
                }
                else {
                  result.push(createComponentTag({ componentName, props: componentProps }))
                }
                return result
              }

              return childSnippets
            }
          }

          const componentSnippets = buildComponentTree(sceneNode, codeConnectMapping, snippetImportsSet)

          if (componentSnippets.length > 0) {
            const filteredAttributes = Array.from(attributes || [])
              .filter(attr => attr.name !== "class")
              .map(attr => `${attr.name}="${attr.value}"`)

            if (mappingInfo.label) {
              filteredAttributes.push(`data-snippet-language="${mappingInfo.label}"`)
            }

            const attributesString = filteredAttributes.join(" ")
            return `<CodeConnectSnippet ${attributesString}>${componentSnippets.join("\n")}</CodeConnectSnippet>`
          }
        }
        return null
      },
      attributes: dataAttributes,
      attributesWithFallback: annotationAttributes,
    } as DesignToReactOptions,
  )

  trackToolCallDuration("design_to_react", performance.now() - designToReactStartTime, GET_CODE)

  // Process the generated code
  let generatedCode = files.find(file => file.name === "index.tsx")?.contents
  if (!generatedCode || typeof generatedCode !== "string") {
    throw new Error("No index.tsx string file found")
  }

  // Replace node IDs with data attributes
  generatedCode = generatedCode.replace(
    /id="node-(\d+)_(\d+)"/g,
    (_, nodeId, subNodeId) => `data-node-id="${nodeId}:${subNodeId}"`,
  )

  // Process image assets
  generatedCode = await processImageAssets(
    generatedCode,
    imageOption,
    assetsMap,
    outputPath,
    mockDirectoryForImageWrites,
    denyOverwritingFiles,
  )

  // Add snippet imports if any
  if (snippetImportsSet.size > 0) {
    generatedCode = `${[...snippetImportsSet].join("\n")}\n\n${generatedCode}`
  }

  // Collect variables and styles
  const variablesAndStylesStartTime = performance.now()
  const variablesAndStyles: VariableAndStyleCollection = collectNodeVariablesAndStyles(
    sceneGraphWrapper,
    language,
    getFeatureFlags().dt_mcp_inline_variables ?? false,
  )
  trackToolCallDuration("variables_and_styles", performance.now() - variablesAndStylesStartTime, GET_CODE)

  // Build response content
  const responseContent: Array<{ type: string, text: string }> = [
    {
      type: "text",
      text: generatedCode,
    },
  ]

  // Add styling rule if using Tailwind
  if (useTailwind) {
    responseContent.push({
      type: "text",
      text: STYLING_RULE,
    })
  }

  // Add node ID information
  responseContent.push({
    type: "text",
    text: 'Node ids have been added to the code as data attributes, e.g. `data-node-id="1:2"`.',
  })

  // Add variables/styles information
  if (Object.keys(variablesAndStyles).length > 0) {
    const variableOrStyleType = getFeatureFlags().dt_mcp_inline_variables ? "styles" : "variables"
    responseContent.push({
      type: "text",
      text: `These ${variableOrStyleType} are contained in the design: ${Object.entries(variablesAndStyles)
        .map(([name, value]) => `${name}: ${value}`)
        .join(", ")}.`,
    })
  }

  // Add documentation links
  if (codeConnectMapping && Object.keys(codeConnectMapping).length > 0) {
    responseContent.push({
      type: "text",
      text: CODE_CONNECT_DOCS,
    })
  }

  if (codebaseSuggestions && Object.keys(codebaseSuggestions).length > 0) {
    responseContent.push({
      type: "text",
      text: CODEBASE_SUGGESTIONS_DOCS,
    })
  }

  if (imageOption === "local") {
    responseContent.push({
      type: "text",
      text: IMAGE_ASSET_DOCS,
    })
  }

  if (annotationAttributes.length > 0) {
    responseContent.push({
      type: "text",
      text: ANNOTATION_DOCS,
    })
  }

  if (imageOption === "write-to-disk" && (outputPath || mockDirectoryForImageWrites)) {
    responseContent.push({
      type: "text",
      text: getImageAssetDocs(outputPath || mockDirectoryForImageWrites),
    })
  }

  responseContent.push({
    type: "text",
    text: IMPORTANT_IMAGE_PROMPT,
  })

  // Track file event
  trackDefinedFileEvent(
    "mcp.d2r_output_size",
    debugState.getState().openFile?.key || "",
    debugState.getState(),
    {
      length: generatedCode.length,
      numDivs: generatedCode.split("<div").length - 1,
      numNodes: nodeCount,
      isTailwind: atomStoreManager.get(useTailwindAtom),
    },
  )

  return [
    {
      content: responseContent,
    },
    {
      codeConnectMapping,
    },
  ]
}

// Process image assets based on the selected option
async function processImageAssets(
  code: string,
  imageOption: string,
  assetsMap: Map<string, any>,
  outputPath: string | undefined,
  mockDirectory: string,
  denyOverwrite: boolean,
): Promise<string> {
  if (imageOption === "local") {
    const startTime = performance.now()
    populateAssetsMap(assetsMap)
    const updatedCode = replaceAssetImports(code, ASSETS_BASE_URL)
    trackToolCallDuration("image_assets_update", performance.now() - startTime, GET_CODE)
    return updatedCode
  }

  if (imageOption === "write-to-disk") {
    const startTime = performance.now()
    const targetPath = outputPath || mockDirectory

    if (!targetPath) {
      throw new Error("Path for asset writes is required for write-to-disk option")
    }

    const normalizedPath = targetPath.endsWith("/") ? targetPath.slice(0, -1) : targetPath
    await writeAssetsToDisk(assetsMap, normalizedPath, denyOverwrite)
    const updatedCode = replaceAssetImports(code, normalizedPath)
    trackToolCallDuration("image_write_to_disk", performance.now() - startTime, GET_CODE)
    return updatedCode
  }

  return code
}

// Check if a node is a Figma component (INSTANCE or SYMBOL)
function isFigmaComponent(node: any): boolean {
  return node.type === "INSTANCE" || node.type === "SYMBOL"
}

// Replace asset import statements with const declarations
function replaceAssetImports(code: string, basePath: string): string {
  return code
    .replace(
      /import\s+(\w+)\s+from\s+['"]figma:asset\/([^'"]+)\.png['"];/g,
      (_, varName, assetName) => `const ${varName} = "${basePath}/${assetName}.png";`,
    )
    .replace(
      /import\s+(\w+)\s+from\s+['"]figma:asset\/([^'"]+)\.svg['"];/g,
      (_, varName, assetName) => `const ${varName} = "${basePath}/${assetName}.svg";`,
    )
}

// Create a component tag string
function createComponentTag({
  componentName,
  props = "",
  hasChildren = false,
  isClosingTag = false,
}: {
  componentName: string
  props?: string
  hasChildren?: boolean
  isClosingTag?: boolean
}): string {
  if (isClosingTag) {
    return `</${componentName}>`
  }

  if (props === "") {
    return hasChildren ? `<${componentName}>` : `<${componentName} />`
  }

  return hasChildren ? `<${componentName} ${props}>` : `<${componentName} ${props} />`
}

// Write assets to disk using desktop API
async function writeAssetsToDisk(
  assetsMap: Map<string, any>,
  directoryPath: string,
  denyOverwrite: boolean,
): Promise<void> {
  if (desktopAPIInstance && assetsMap.size > 0) {
    for (const [assetName, assetData] of assetsMap.entries()) {
      const assetBytes = new Uint8Array(await assetData.arrayBuffer())
      const filePath = `${directoryPath}/${assetName}`

      try {
        await desktopAPIInstance.writeFileToPath(filePath, assetBytes, denyOverwrite)
      }
      catch (error) {
        throw new Error(`Failed to write asset ${assetName} to disk at path ${filePath}: ${error.message}`)
      }
    }
  }
}

export const t2 = generateCodeFromDesign
