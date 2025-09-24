import type { TSSceneGraph } from './518682'
import { z } from 'zod'
import { withAbortSignal } from '../905/829242'
import { findNearestCanvas } from '../figma_app/325988'
import { cortexAPI } from '../figma_app/432652'
import { extractComponentProps, serializeComponentJSX } from '../figma_app/460003'
import { getComponentInfoById, usagePropsToRawProps } from '../figma_app/664063'
import { getReactFunctionComponentDefinition } from '../figma_app/964367'

export function suggestComponentContext() {
  let e = `
    * ### Context
    * You are acting as a Product Designer working with Figma. In Figma, components are UI elements that can be configured by props.
    * These props are to be changed by the designer to configure the component to fit within its surrounding design context. A component has just been inserted into a design, and its current prop values may not be appropriate for the surrounding design context.
    * Your task is to analyze the overall design, the component's possible configurations, and suggest the most appropriate props for the component that would complete the overall design.

    * ### What will be provided
    * Here is what you will be provided:
    * 1) OVERALL_JSX - JSX of the overall design, which contains the recently inserted component (whose current prop values may not be appropriate for the surrounding design context).
    * 2) TARGET_ID - ID of the recently inserted component within the OVERALL_JSX that you are modifying.
    * 3) COMPONENT_JSX - JSX of the expanded component definition of the TARGET_ID, which should be analyzed to understand how the prop values affect the component.
    * 4) REQUESTED_SUGGESTIONS - A list of the props that you must provide suggestions for. You **must** provide a suggestion for every prop listed in REQUESTED_SUGGESTIONS; do **not** provide suggestions for any other props.

    * ### Important notes
    * - For the suggestions, do not use the current prop values to determine what the new values should be. The current prop values should be disregarded and not used in any reasoning.
    * - For TEXT props, any string is allowed.
    * - For VARIANT props, you must pick a value out of the list in the prop's metadata within REQUESTED_SUGGESTIONS. If the variant names are not intuitive, you should just select the default value.

    * Your output should always be valid JSON. You must provide a suggestion for every prop in REQUESTED_SUGGESTIONS, and none others.
  `
  let t = `* Your response must strictly follow this format:
  \`\`\`
  z.object({
    suggestions: z.array(
      z.object({
        
        propertyName: z.string().describe("Name of the property on the component that you are modifying"),
        propertyValue: z.string().describe("Suggested value for the property"),
        confidence: z.number().min(0).max(1).describe('Confidence score between 0 and 1'),
      }),
    ),
  })
  \`\`\`
`
  return `
  ${e}
  ${t}
`
}
// Original code constants and schema
const componentTypes: string[] = ['TEXT', 'VARIANT']

const modelProviders = {
  google: 'models/gemini-2.0-flash-001',
  openai: 'gpt-4o-mini-2024-07-18',
}

const suggestionSchema = z.object({
  suggestions: z.array(z.object({
    propertyName: z.string().describe('Name of the property on the component that you are modifying'),
    propertyValue: z.string().describe('Suggested value for the property'),
    confidence: z.number().min(0).max(1).describe('Confidence score between 0 and 1'),
  })),
})

// Original code options for component definition and serialization
const componentDefinitionOptions = {
  serializeAllVariants: false,
  maxVariantsResultSize: 150000,
  strict: false,
}

const serializationOptions = {
  excludeImageData: true,
  excludeVectorData: true,
}

/**
 * Builds prompt messages for AI suggestion based on component context.
 * Original function: $$f
 * @param targetId - The ID of the target component.
 * @param canvas - The nearest canvas node.
 * @param component - The component node.
 * @param provider - The AI provider ('openai' or 'google').
 * @returns Object containing messages and performance tracking data.
 */
async function buildPromptMessages(
  targetId: string,
  canvas: any,
  component: any,
  provider: 'openai' | 'google',
): Promise<{ messages: any[], perfTracking: any }> {
  const startTime = performance.now()
  const componentJsx = (await getReactFunctionComponentDefinition(component, componentDefinitionOptions, serializationOptions)).jsxStr
  const componentJsxDuration = performance.now() - startTime
  const overallJsx = await serializeComponentJSX(canvas, serializationOptions)
  const topLevelDuration = performance.now() - startTime - componentJsxDuration
  const componentInfo = getComponentInfoById(component.guid, { enableTsArrays: false })
  const requestedSuggestions = extractComponentProps(componentInfo, componentTypes)

  const messages = [
    {
      role: 'user',
      content: `Here is (1) OVERALL_JSX:
          \`\`\`
          ${overallJsx}
          \`\`\``,
    },
    {
      role: 'user',
      content: `Here is (2) TARGET_ID:
          \`\`\`
          ${targetId}
          \`\`\``,
    },
    {
      role: 'user',
      content: `Here is (3) COMPONENT_JSX:
          \`\`\`
          ${componentJsx}
          \`\`\``,
    },
    {
      role: 'user',
      content: `Here is (4) REQUESTED_SUGGESTIONS:
          \`\`\`
          ${requestedSuggestions.toString()}
          \`\`\`
          `,
    },
  ]

  let formattedMessages: any = messages
  if (provider === 'openai') {
    formattedMessages = messages.map(msg => ({
      role: msg.role,
      content: [{ type: 'text', text: msg.content }],
    }))
  }

  return {
    messages: formattedMessages as { role: string, content: { type: string, text: string }[] }[],
    perfTracking: {
      componentJsxDuration: Math.round(componentJsxDuration),
      componentJsxStrLength: componentJsx.length,
      topLevelDuration: Math.round(topLevelDuration),
      topLevelJsxStrLength: overallJsx?.length || 0,
      numSuggestionsRequested: requestedSuggestions.length,
      componentKey: componentInfo?.key,
      model: modelProviders[provider],
    },
  }
}

/**
 * Suggests component props using AI based on context.
 * Original function: $$E1
 * @param componentId - ID of the component.
 * @param selectedNodeId - ID of the selected node.
 * @param sceneGraph - Map of scene graph nodes.
 * @param abortSignal - Abort signal for the request.
 * @param trackEvent - Function to track events.
 * @param provider - Optional AI provider, defaults to 'openai'.
 * @returns Suggested props as raw props.
 */
export async function suggestComponentProps(
  componentId: string,
  selectedNodeId: string,
  sceneGraph: TSSceneGraph,
  abortSignal: AbortSignal,
  trackEvent: (event: string, data: any) => void,
  provider: 'openai' | 'google' = 'openai',
): Promise<any> {
  const startTime = performance.now()
  const component = sceneGraph.get(componentId)
  if (!component) {
    console.error('Could not find component in scene graph: ', componentId)
    return {}
  }

  const selectedNode = sceneGraph.get(selectedNodeId)
  if (!selectedNode) {
    console.error('Could not find selected node in scene graph: ', selectedNodeId)
    return {}
  }

  const canvas = findNearestCanvas(selectedNode)
  const { messages, perfTracking } = await buildPromptMessages(selectedNodeId, canvas, component, provider)

  const fullMessages = [
    { role: 'system', content: suggestComponentContext() },
    ...messages,
  ]

  let aiResponse: any
  try {
    switch (provider) {
      case 'openai':
        aiResponse = cortexAPI.openai.completeChat({
          model: modelProviders[provider] as any,
          max_tokens: 3000,
          temperature: 0,
          response_format: { type: 'json_object' },
          messages: fullMessages,
          use_cache: true,
        })
        break
      case 'google':
        aiResponse = cortexAPI.internal.generateObject({
          provider: 'google',
          model: modelProviders[provider],
          maxTokens: 3000,
          temperature: 0,
          messages: fullMessages,
        })
        break
      default:
        console.error('Unknown provider: ', provider)
        return {}
    }
  }
  catch (error) {
    console.error('Error property suggestions', error)
    return {}
  }

  if (!aiResponse)
    return {}

  const responseStartTime = performance.now()
  let response: any
  try {
    const timeoutPromise = new Promise<never>((_, reject) => {
      setTimeout(() => reject('GPT Response Timeout'), 10000)
    })
    response = await Promise.race([withAbortSignal(aiResponse, abortSignal), timeoutPromise])
  }
  catch (error) {
    trackEvent('autosuggest_props_timeout', {
      componentKey: perfTracking.componentKey,
      error: (error as Error).message,
      ...perfTracking,
    })
    return {}
  }

  const responseDuration = Math.round(performance.now() - responseStartTime)
  let suggestions: any[]
  switch (provider) {
    case 'openai':
      suggestions = suggestionSchema.parse(JSON.parse(response?.choices[0]?.message?.content ?? '{}')).suggestions
      break
    case 'google':
      suggestions = response.object.suggestions ?? []
      break
    default:
      console.error('Unknown provider: ', provider)
      return {}
  }

  const suggestedProps: Record<string, string> = {}
  for (const suggestion of suggestions) {
    suggestedProps[suggestion.propertyName] = suggestion.propertyValue
  }

  const rawProps = usagePropsToRawProps(suggestedProps, componentId, id => getComponentInfoById(id, { enableTsArrays: false }))

  trackEvent('autosuggest_props_perf', {
    totalMs: Math.round(performance.now() - startTime),
    ...perfTracking,
    gptResponseDurationMs: responseDuration,
  })

  return rawProps
}

// Original exports with refactored names
export const f = suggestComponentContext
export const u = suggestComponentProps
