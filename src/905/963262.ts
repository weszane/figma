// Origin: /Users/allen/sigma-main/src/905/963262.ts
// Changes: Renamed variables, added TypeScript types/interfaces, simplified logic, added comments, improved readability, formatted code.
// Assumed dependencies: sceneGraph is a Map<string, { name: string }> or similar.

import type { SceneGraph } from "./830071"

// Regular expression to match internal pill keys (unchanged)
export const internalPillKeyRegex = /_INTERNAL_PILL_KEY_\d+_/g

// Type definitions for section types

interface CodeSection {
  type: "CODE"
  code: string
}

interface InstanceSection {
  type: "INSTANCE"
  guid: string
}

interface ErrorSection {
  type: "ERROR"
  message: string
  errorObject?: unknown
}

type Section = CodeSection | InstanceSection | ErrorSection

interface ExampleData {
  sections: Section[]
  language: string
}

interface OutputData {
  type?: string
  preview?: string
  sections?: Section[]
  language?: string
  example?: ExampleData
}

interface Output {
  data: OutputData
}





interface PillInstance {
  type: "INSTANCE"
  id: string
  name: string
}

interface PillError {
  type: "ERROR"
  id: string
  message: string
  errorObject?: unknown
}

type Pill = PillInstance | PillError

interface RefactoredResult {
  language: string
  code: string
  pills: Record<string, Pill>
}

/**
 * Processes output data and generates code string with pill placeholders.
 * - Renamed variables for clarity.
 * - Added TypeScript types.
 * - Added comments to explain logic.
 * - Handles three section types: CODE, INSTANCE, ERROR.
 * - Potential bug: If sceneGraph.get(e.guid) returns undefined, name will be empty string.
 */
export function processOutputSections({
  output,
  sceneGraph,
  includeInstancePills = true,
  unrenderableInstanceMessage,
}: {
  output: Output
  sceneGraph: SceneGraph
  includeInstancePills?: boolean
  unrenderableInstanceMessage?: string
}): RefactoredResult {
  let sections: Section[]
  let language: string

  // Extract sections and language from output data
  if ("example" in output.data) {
    sections = output.data.example!.sections
    language = output.data.example!.language
  }
  else {
    if (output.data.type === "VALUE") {
      // Special case: VALUE type returns preview code directly
      return {
        language: "javascript",
        code: output.data.preview ?? "",
        pills: {},
      }
    }
    sections = output.data.sections ?? []
    language = output.data.language ?? "javascript"
  }

  let pillIndex = 0
  const pills: Record<string, Pill> = {}

  // Build code string by mapping sections to code or pill placeholders
  const code = sections
    .map((section) => {
      switch (section.type) {
        case "CODE":
          return section.code
        case "INSTANCE": {
          const pillKey = `_INTERNAL_PILL_KEY_${pillIndex++}_`
          const instance = sceneGraph.get(section.guid)
          pills[pillKey] = {
            type: "INSTANCE",
            id: section.guid,
            name: instance?.name ?? "",
          }
          // If including instance pills, insert pillKey; else, insert fallback message
          return includeInstancePills ? pillKey : unrenderableInstanceMessage ?? ""
        }
        case "ERROR": {
          const pillKey = `_INTERNAL_PILL_KEY_${pillIndex++}_`
          pills[pillKey] = {
            type: "ERROR",
            id: pillKey,
            message: section.message,
            errorObject: section.errorObject,
          }
          return pillKey
        }
        default:
          // Unknown section type; log error and return empty string
          console.error("Unknown section type", section)
          return ""
      }
    })
    .join("")

  return {
    language,
    code,
    pills,
  }
}

// Export statements with original names mapped to refactored names
export const $$r0 = processOutputSections
export const A = processOutputSections
export const $$n1 = internalPillKeyRegex
export const k = internalPillKeyRegex
