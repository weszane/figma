// Type definitions for better code clarity
interface CodeGenerationParams {
  apiSource: string
  template: string
  nodeTreeToInject: any
  instanceTemplates: Record<string, string>
  inlineInstancesEnabled: boolean
  breakInTemplateExecution: boolean
}

interface InstanceProcessingParams {
  apiSource: string
  template: string
  nodeTreeToInject: any
  instanceFigmadocs: Record<string, any>
  inlineInstancesEnabled: boolean
  breakInTemplateExecution: boolean
  getInstanceFigmadocFromJSON: (figmadoc: any, guid: string) => any
}

/**
 * Generates code by replacing template placeholders with actual values
 * @param apiSource - The API source code
 * @param nodeTreeToInject - Node tree data to inject
 * @param instanceTemplates - Template instances mapping
 * @param inlineInstancesEnabled - Whether inline instances are enabled
 * @returns Modified API source with injected values
 */
function injectTemplateVariables(
  apiSource: string,
  nodeTreeToInject: any,
  instanceTemplates: Record<string, string>,
  inlineInstancesEnabled: boolean
): string {
  const serializedNodeTree = JSON.stringify(nodeTreeToInject)

  // Replace inline instances enabled flag
  let modifiedSource = apiSource.replace(
    "const __FIGMA_CODE_CONNECT_INLINE_INSTANCES_ENABLED = false",
    `const __FIGMA_CODE_CONNECT_INLINE_INSTANCES_ENABLED = ${inlineInstancesEnabled}`
  )

  // Replace scene graph injection
  if (nodeTreeToInject) {
    modifiedSource = modifiedSource.replace(
      "const __FIGMA_CODE_CONNECT_SCENE_GRAPH = null",
      `const __FIGMA_CODE_CONNECT_SCENE_GRAPH = ${serializedNodeTree}`
    )
  } else {
    modifiedSource = modifiedSource.replace(
      "const sceneGraph = __FIGMA_CODE_CONNECT_SCENE_GRAPH;",
      ""
    )
  }

  // Replace instance templates injection
  if (instanceTemplates) {
    const templateEntries = Object.entries(instanceTemplates)
      .map(([key, template]) => `"${key}": ${template},`)
      .join("\n")

    modifiedSource = modifiedSource.replace(
      "const __FIGMA_CODE_CONNECT_INSTANCE_TEMPLATES = {}",
      `const __FIGMA_CODE_CONNECT_INSTANCE_TEMPLATES = {
        ${templateEntries}
      }`
    )
  } else {
    modifiedSource = modifiedSource.replace(
      "const instanceTemplates = __FIGMA_CODE_CONNECT_INSTANCE_TEMPLATES;",
      ""
    )
  }

  return modifiedSource
}

/**
 * Generates executable code template with error handling (originally function 'n')
 * @param params - Code generation parameters
 * @returns Complete executable code string with try-catch wrapper
 */
function generateCodeTemplate(params: CodeGenerationParams): string {
  const {
    apiSource,
    template,
    nodeTreeToInject,
    instanceTemplates,
    inlineInstancesEnabled,
    breakInTemplateExecution
  } = params

  return `try {

  ${injectTemplateVariables(apiSource, nodeTreeToInject, instanceTemplates, inlineInstancesEnabled)}

  const require = __FIGMA_CODE_CONNECT_REQUIRE
  const data = function() {
    ${breakInTemplateExecution ? "debugger;\n" : ""}${template.replace("export default", "return")}
  }();

  if (data && 'example' in data && !('id' in data)) {
    return {
      result: 'ERROR',
      error: 'id is missing in export',
      data: {
        message: 'id is missing in export',
        error: { type: 'MISSING_CODE_CONNECT_ID' },
      },
    }
  }

  return {
    result: 'SUCCESS',
    data
  }
} catch (e) {
  return {
    result: 'ERROR',
    data: {
      message: e.message,
      error: e.errorObject,
    },
  }
}`;
}
/**
 * Processes instance nodes and generates code with inline instances (originally $$r0)
 * @param params - Instance processing parameters
 * @returns Generated code string with processed instances
 */
export function processInstancesAndGenerateCode(params: InstanceProcessingParams): string {
  const {
    apiSource,
    template,
    nodeTreeToInject,
    instanceFigmadocs,
    inlineInstancesEnabled,
    breakInTemplateExecution,
    getInstanceFigmadocFromJSON
  } = params

  const instanceTemplates: Record<string, string> = {}

  if (inlineInstancesEnabled) {
    // Process node tree to find instances
    const nodeStack = [...nodeTreeToInject.children]

    while (nodeStack.length > 0) {
      const currentNode = nodeStack.pop()

      if (currentNode && currentNode.type === "INSTANCE") {
        const { guid, key } = currentNode
        const instanceFigmadoc = getInstanceFigmadocFromJSON(instanceFigmadocs?.[`key-${key}`], guid)

        if (instanceFigmadoc && instanceFigmadoc.templateData.nestable) {
          // Generate template function for this instance
          const templateFunction = `function(sceneGraph, instanceTemplates) {${generateCodeTemplate({
            apiSource,
            template: instanceFigmadoc.template,
            nodeTreeToInject: currentNode,
            instanceTemplates: {},
            inlineInstancesEnabled,
            breakInTemplateExecution
          })}}`

          instanceTemplates[guid] = templateFunction
        }

        // Add children to processing stack
        for (const childNode of currentNode.children) {
          nodeStack.push(childNode)
        }
      }
    }
  }

  return generateCodeTemplate({
    apiSource,
    template,
    nodeTreeToInject,
    instanceTemplates,
    inlineInstancesEnabled,
    breakInTemplateExecution
  })
}

// Export with original name for backward compatibility (originally $$r0)
export const w = processInstancesAndGenerateCode
