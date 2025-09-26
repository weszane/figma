interface PluginParameter {
  type: 'plugin-parameter'
  name: string
  key: string
  valueType: 'string'
  description: string
  optional: boolean
  allowFreeform: boolean
}

interface ParameterEntry {
  type: 'parameter-entry'
  parameters: PluginParameter[]
  commandName: string
}

/**
 * Creates a parameter entry object for plugin parameters
 * @param parameters - Array of parameter objects
 * @param commandName - Name of the command
 * @returns ParameterEntry object or undefined if parameters or commandName are missing
 */
export function createParameterEntry(
  parameters: Array<{
    name: string
    key: string
    description: string
    optional: boolean
    allowFreeform: boolean
  }>,
  commandName: string,
): ParameterEntry | undefined {
  if (parameters && commandName) {
    return {
      type: 'parameter-entry',
      parameters: parameters.map(param => ({
        type: 'plugin-parameter',
        name: param.name,
        key: param.key,
        valueType: 'string',
        description: param.description,
        optional: param.optional,
        allowFreeform: param.allowFreeform,
      })),
      commandName,
    }
  }
  return undefined
}

export const c = createParameterEntry
