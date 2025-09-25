import { noop } from 'lodash-es'
import { jsx } from 'react/jsx-runtime'
import { setupPluginCommandHandler } from '../905/924231'
import { showDropdownThunk } from '../905/929976'
import { ExtensionFeatureKey } from '../905/946805'
import { $I, gn } from '../figma_app/322845'
import { jv } from '../figma_app/357047'
import { debug } from '../figma_app/465776'

/**
 * Transforms a plugin command event into a parameter entry object.
 * Original function name: $$u1
 * @param event - The plugin command event object.
 * @returns The parameter entry object or null if not applicable.
 */
export function getPluginParameterEntry(event: any) {
  if (
    (event.type !== 'run-installed-plugin' && event.type !== 'run-local-plugin')
    || !event.parameterEntry
    || event.parameterEntry.parameters.length === 0
  ) {
    return null
  }

  // Map parameters to expected format
  const parameters = event.parameterEntry.parameters.map(({ valueType, ...rest }) => ({
    ...rest,
    type: valueType,
  }))

  const pluginId = event.type === 'run-installed-plugin' ? event.pluginId : undefined
  const pluginLocalFileId = event.type === 'run-local-plugin' ? event.localFileId : undefined

  return {
    parameters,
    command: event.command,
    displayName: event.parameterEntry.commandName,
    pluginId,
    pluginLocalFileId,
    parameterOnly: !!event.parameterOnly,
  }
}

/**
 * Handles running a plugin parameter entry, opening the appropriate UI or dropdown.
 * Original function name: $$p0
 * @param event - The plugin command event object.
 * @param triggeredFrom - The source of the trigger.
 * @param showDropdown - Callback to show dropdown UI.
 */
export function runPluginParameterEntry(event: any, triggeredFrom: string, showDropdown: (action: any) => void) {
  // Helper to build parameter entry args
  const parameterEntryArgs = (() => {
    const entry = getPluginParameterEntry(event)
    return entry
      ? {
          ...entry,
          triggeredFrom,
        }
      : null
  })()

  // Debug: Can only run parameter entry for plugins that have parameters
  if (debug(parameterEntryArgs !== null, 'Can only run parameter entry for plugins that have parameters') && gn()) {
    $I({
      moduleToOpen: {
        type: 'custom',
        module: jsx(setupPluginCommandHandler, {
          onExitParameterEntry: noop,
          triggeredFrom,
          parameters: parameterEntryArgs.parameters,
          displayName: parameterEntryArgs.displayName,
          parameterOnly: parameterEntryArgs.parameterOnly,
          pluginId: parameterEntryArgs.pluginId,
          pluginLocalFileId: parameterEntryArgs.pluginLocalFileId,
          command: parameterEntryArgs.command,
        }),
        name: ExtensionFeatureKey.PLUGIN_PARAMETER_ENTRY,
      },
      trackingData: {
        source: `extension-parameter-entry-${triggeredFrom}`,
      },
    })
    return
  }

  // Fallback: Show dropdown UI
  showDropdown(
    showDropdownThunk({
      type: jv,
      data: {
        parameterEntryArgs,
      },
    }),
  )
}

// Export refactored names for external usage
export const nO = runPluginParameterEntry
export const o0 = getPluginParameterEntry
