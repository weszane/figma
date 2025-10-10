import { jsx } from "react/jsx-runtime"
import { getI18nString } from "../905/303541"
import { getFeatureFlags } from "../905/601108"

// Refactored function with improved readability, type safety, and clearer logic
// Renamed variables, added TypeScript interface, simplified conditional logic

interface LibraryCounts {
  numComponents: number
  numStateGroups: number
  numStyles: number
  numVariables: number
  numVariableCollections: number
}

export function formatLibraryCounts({
  numComponents,
  numStateGroups,
  numStyles,
  numVariables,
  numVariableCollections,
}: LibraryCounts) {
  const totalComponentsAndStateGroups = numComponents + numStateGroups
  const messages: string[] = []

  // Add component count message if applicable
  if (totalComponentsAndStateGroups > 0) {
    messages.push(
      getI18nString("design_systems.libraries_modal.plural.num_component_match", {
        numComponents: totalComponentsAndStateGroups,
      }),
    )
  }

  // Add style count message if applicable
  if (numStyles > 0) {
    messages.push(
      getI18nString("design_systems.libraries_modal.plural.num_style_match", {
        numStyles,
      }),
    )
  }

  // Add variable count message if feature flag is enabled and count is positive
  if (getFeatureFlags().dsa_styles_variables_ui && numVariables > 0) {
    messages.push(
      getI18nString("design_systems.libraries_modal.plural.num_variable_match", {
        numVariables,
      }),
    )
  }

  // Add variable collection count message if applicable
  if (numVariableCollections > 0) {
    messages.push(
      getI18nString("design_systems.libraries_modal.plural.num_variable_collection_match", {
        numVariableCollections,
      }),
    )
  }

  // Render appropriate JSX based on message count
  if (messages.length > 1) {
    return jsx("div", {
      children: messages.join(", "),
    })
  }
  else if (messages.length === 1) {
    return jsx("span", {
      children: messages[0],
    })
  }
  else {
    return jsx("span", {})
  }
}

// Original function name preserved in export
export const I = formatLibraryCounts
