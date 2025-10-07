/* eslint-disable no-prototype-builtins */
import { normalizePath } from "../905/309735"
import { columnResizeAtom } from "../905/456000"
import { generateUniqueName } from "../905/578436"
import { getVariableTypeInfo } from "../905/604606"
import { useAtomWithSubscription } from "../figma_app/27355"
import { throwTypeError } from "../figma_app/465776"
import { VariableDataType, VariablesBindings } from "../figma_app/763686"
import { compareNumbers } from "../figma_app/766708"
// Utility function to remove duplicates from an array
function uniq<T>(array: T[]): T[] {
  return Array.from(new Set(array))
}

// Default mode string
export const DEFAULT_MODE = "Mode 1"

/**
 * Generates a unique name for a variable based on its type and existing names.
 * @param existingVariables - Array of existing variables with names.
 * @param variableType - The type of the variable.
 * @param prefix - Optional prefix for the name.
 * @returns A unique name string.
 */
export function generateUniqueVariableName(
  existingVariables: { name: string }[],
  variableType: any,
  prefix: string = "",
): string {
  const existingNames = existingVariables.map(v => v.name)
  const typeName = getVariableTypeInfo(variableType).name
  return generateUniqueName(prefix + typeName, existingNames)
}

/**
 * Generates a unique name for a group based on existing names.
 * @param existingGroups - Array of existing groups with names.
 * @param baseName - Base name for the group.
 * @returns A unique group name string.
 */
export function generateUniqueGroupName(
  existingGroups: { name: string }[],
  baseName: string = "",
): string {
  return generateUniquePath(existingGroups, baseName, v => v.name)
}

/**
 * Generates a unique path for an item based on existing paths.
 * @param existingItems - Array of existing items with paths.
 * @param basePath - Base path string.
 * @returns A unique path string.
 */
export function generateUniquePathName(
  existingItems: { name: string }[],
  basePath: string = "",
): string {
  return generateUniquePath(existingItems, basePath, v => v)
}

/**
 * Helper function to generate a unique path.
 * @param items - Array of items.
 * @param basePath - Base path.
 * @param extractor - Function to extract the path from an item.
 * @returns A unique path string.
 */
function generateUniquePath<T>(
  items: T[],
  basePath: string = "",
  extractor: (item: T) => any,
): string {
  const pathParts = basePath.slice(0, -1).split("/")
  const parentPath = pathParts.length === 1 ? "" : `${pathParts.slice(0, -1).join("/")}/`
  const siblingNames = Array.from(
    new Set(
      items
        .map(extractor)
        .filter(name => name.startsWith(parentPath) && name.replace(parentPath, "").includes("/"))
        .map(name => name.replace(parentPath, "").split("/")[0]),
    ),
  )
  return `${parentPath}${generateUniqueName(
    pathParts[pathParts.length - 1].replace(/\d+$/, "").trim(),
    siblingNames,
  )}/`
}

/**
 * Builds a hierarchical structure of groups and variables from a flat list.
 * @param variables - Array of variables to organize.
 * @returns A flattened array of all groups and variables in order.
 */
export function buildVariableHierarchy(variables: any[]): any[] {
  /**
   * Recursively flattens a group structure.
   * @param group - The group to flatten.
   * @returns Array of flattened items.
   */
  function flattenGroup(group: any): any[] {
    const result = [group]
    for (const subgroup of group.subgroups.sort(compareGroups)) {
      result.push(...flattenGroup(subgroup))
    }
    return result
  }

  /**
   * Creates the root group structure from variables.
   * @param vars - Array of variables.
   * @returns The root group.
   */
  function createGroupStructure(vars: any[]): any {
    const groups: { [key: string]: any } = {
      "": {
        name: "",
        subgroups: [],
        variables: [],
      },
    }

    for (const variable of vars.sort((a, b) => -compareNumbers(a.sortPosition, b.sortPosition))) {
      const parentPath = getParentPath(variable.name)
      if (!groups.hasOwnProperty(parentPath)) {
        groups[parentPath] = {
          name: parentPath,
          subgroups: [],
          variables: [],
        }
      }
      groups[parentPath].variables.push(variable)
    }

    // Ensure all intermediate paths exist
    for (const path of Object.keys(groups)) {
      const pathParts = path.split("/").slice(0, -1)
      for (let i = 1; i < pathParts.length; i++) {
        const intermediatePath = `${pathParts.slice(0, i).join("/")}/`
        if (!groups.hasOwnProperty(intermediatePath)) {
          groups[intermediatePath] = {
            name: intermediatePath,
            subgroups: [],
            variables: [],
          }
        }
      }
    }

    // Link subgroups
    for (const [path, group] of Object.entries(groups)) {
      if (path !== "") {
        groups[getParentPath(path)].subgroups.push(group)
      }
    }

    return groups[""]
  }

  return flattenGroup(createGroupStructure(variables))
}

/**
 * Gets all variable names in the specified groups and their subgroups.
 * @param groups - Array of groups.
 * @param groupNames - Array of group names to include.
 * @returns Array of unique variable names.
 */
export function getVariableNamesInGroups(
  groups: any[],
  groupNames: string[],
): string[] {
  const names: string[] = []
  for (const group of groups) {
    if (groupNames.includes(group.name)) {
      /**
       * Recursively collects names from a group.
       * @param g - The group.
       * @returns Array of names.
       */
      function collectNames(g: any): string[] {
        const result = [g.name]
        for (const subgroup of g.subgroups) {
          result.push(...collectNames(subgroup))
        }
        return result
      }
      names.push(...collectNames(group))
    }
  }
  return uniq(names)
}

/**
 * Gets the first variable in a group, recursively if needed.
 * @param group - The group.
 * @returns The first variable.
 */
export function getFirstVariable(group: any): any {
  return group.variables.length === 0
    ? getFirstVariable(group.subgroups[0])
    : group.variables[0]
}

/**
 * Gets the parent path of a given path.
 * @param path - The path string.
 * @returns The parent path.
 */
export function getParentPath(path: string): string {
  if (path.length === 0)
    return ""
  const parts = path.split("/").slice(0, -1)
  return parts.length === 1 ? "" : `${parts.slice(0, -1).join("/")}/`
}

/**
 * Counts variables starting with a given prefix.
 * @param variables - Array of variables.
 * @param prefix - The prefix string, or null.
 * @returns The count.
 */
export function countVariablesWithPrefix(
  variables: any[],
  prefix: string | null,
): number {
  return prefix === null ? 0 : variables.filter(v => v.name.startsWith(prefix)).length
}

/**
 * Filters variables starting with a given prefix.
 * @param variables - Array of variables.
 * @param prefix - The prefix string, or null.
 * @returns Array of matching variables.
 */
export function getVariablesWithPrefix(
  variables: any[],
  prefix: string | null,
): any[] {
  return prefix === null ? [] : variables.filter(v => v.name.startsWith(prefix))
}

/**
 * Renames all variables in a group to a new path.
 * @param variables - Array of variables.
 * @param oldPrefix - The old prefix.
 * @param newPath - The new path.
 * @returns True if all renames succeeded.
 */
export function renameVariablesInGroup(
  variables: any[],
  oldPrefix: string,
  newPath: string,
): boolean {
  return getVariablesWithPrefix(variables, oldPrefix).every(v =>
    VariablesBindings.renameVariable(v.node_id, normalizePath(`${newPath}/${getRelativeName(v, oldPrefix)}`)),
  )
}

/**
 * Gets the parent path from a full path.
 * @param path - The path string.
 * @returns The parent path.
 */
export function getGroupPath(path: string): string {
  return path.includes("/") ? `${path.split("/").slice(0, -1).join("/")}/` : ""
}

/**
 * Normalizes a path with a new parent.
 * @param oldPath - The old path.
 * @param newParent - The new parent path.
 * @returns The normalized path.
 */
export function normalizePathWithParent(oldPath: string, newParent: string): string {
  const parts = oldPath.split("/")
  return normalizePath(newParent + parts[parts.length - 1])
}

/**
 * Gets the last part of a path.
 * @param path - The path string.
 * @returns The last part.
 */
export function getPathLeaf(path: string): string {
  const parts = path.split("/")
  return parts[parts.length - 1]
}

/**
 * Gets the relative name by removing the prefix.
 * @param variable - The variable.
 * @param prefix - The prefix to remove.
 * @returns The relative name.
 */
export function getRelativeName(variable: any, prefix: string): string {
  return variable.name.replace(prefix, "")
}

/**
 * Gets the last part of a path before the trailing slash.
 * @param path - The path string.
 * @returns The last part.
 */
export function getPathBaseName(path: string): string {
  const parts = path.slice(0, -1).split("/")
  return parts[parts.length - 1]
}

/**
 * Constructs a new path with a name.
 * @param basePath - The base path.
 * @param name - The name to append.
 * @returns The new path.
 */
export function constructPath(basePath: string, name: string): string {
  return `${getParentPath(basePath)}${name}/`
}

/**
 * Comparator for sorting groups by their first variable's sort position.
 * @param a - First group.
 * @param b - Second group.
 * @returns Comparison result.
 */
function compareGroups(a: any, b: any): number {
  const posA = getFirstVariable(a).sortPosition
  const posB = getFirstVariable(b).sortPosition
  return -compareNumbers(posA, posB)
}

/**
 * Inserts a variable between others in the bindings.
 * @param variableId - The variable ID to insert.
 * @param position - Optional position tuple.
 * @param groupPath - The group path.
 * @param allVariables - Array of all variables.
 */
export function insertVariableAtPosition(
  variableId: string,
  position: [string, string] | null,
  groupPath: string,
  allVariables: any[],
): void {
  let beforeId: string | undefined
  let afterId: string | undefined

  if (position) {
    const [before, after] = position
    VariablesBindings.insertVariableBetween(variableId, before, after)
    return
  }

  if (allVariables.length === 0)
    return

  const siblingGroups = getSiblingGroups(allVariables, groupPath)
  const targetIndex = siblingGroups.findIndex(g => g.name === groupPath)

  if (targetIndex === -1)
    return

  const targetGroup = siblingGroups[targetIndex]
  if (targetGroup && targetGroup.variables.length >= 1) {
    beforeId = targetGroup.variables[targetGroup.variables.length - 1].node_id
  }
  else if (targetIndex > 0) {
    /**
     * Gets the last variable in a group recursively.
     * @param g - The group.
     * @returns The last variable.
     */
    function getLastVariable(g: any): any {
      return g.variables.length === 0
        ? getLastVariable(g.subgroups[g.subgroups.length - 1])
        : g.variables[g.variables.length - 1]
    }
    beforeId = getLastVariable(siblingGroups[targetIndex - 1]).node_id
  }

  if (targetIndex < siblingGroups.length - 1) {
    afterId = getFirstVariable(siblingGroups[targetIndex + 1]).node_id
  }

  VariablesBindings.insertVariableBetween(variableId, beforeId || "", afterId || "")
}

/**
 * Helper to get sibling groups at the same level.
 * @param variables - All variables.
 * @param path - The path.
 * @returns Array of sibling groups.
 */
function getSiblingGroups(variables: any[], path: string): any[] {
  if (path === "")
    return []
  const parentPath = getParentPath(path)
  const depth = (parentPath.match(/\//g) || []).length + 1
  return variables.filter(
    v =>
      v.name.startsWith(parentPath)
      && (v.name.match(/\//g) || []).length === depth,
  )
}

/**
 * Returns the value if condition is true, else null.
 * @param value - The value.
 * @param condition - The condition.
 * @returns The value or null.
 */
export function conditionalValue<T>(value: T, condition: boolean): T | null {
  return condition ? value : null
}

/**
 * Gets the name column width from the atom.
 * @returns The width as a string.
 */
export function getNameColumnWidth(): string {
  const resizeState = useAtomWithSubscription(columnResizeAtom)
  return resizeState.nameColumnWidth ? `${resizeState.nameColumnWidth}px` : "200px"
}

/**
 * Gets the grid template columns for variables.
 * @param variables - Array of variables.
 * @returns The template string.
 */
export function getValueColumnWidths(variables: any[]): string {
  const resizeState = useAtomWithSubscription(columnResizeAtom)
  return Array.from({ length: variables.length + 1 }, (_, index) => {
    if (index === variables.length)
      return "minmax(200px, 1fr)"
    const width = resizeState.valueColumnWidths?.get(variables[index]?.id ?? "")
    return width ? `${width}px` : "200px"
  }).join(" ")
}

/**
 * Converts a variable value to a mode value.
 * @param value - The variable value.
 * @returns The mode value or undefined.
 */
export function convertToModeValue(value: any): any {
  switch (value.type) {
    case VariableDataType.STRING:
    case VariableDataType.FLOAT:
    case VariableDataType.BOOLEAN:
    case VariableDataType.COLOR:
      return value.value
    case VariableDataType.ALIAS:
      return {
        type: "VARIABLE_ALIAS",
        id: value.value,
      }
    case VariableDataType.NODE_FIELD_ALIAS:
    case VariableDataType.MAP:
    case VariableDataType.FONT_STYLE:
    case VariableDataType.EXPRESSION:
    case VariableDataType.SYMBOL_ID:
    case VariableDataType.TEXT_DATA:
    case VariableDataType.MANAGED_STRING_ALIAS:
    case VariableDataType.CMS_ALIAS:
    case VariableDataType.IMAGE:
    case VariableDataType.LINK:
    case VariableDataType.JS_RUNTIME_ALIAS:
    case VariableDataType.DATE:
    case VariableDataType.SLOT_CONTENT_ID:
      return
    default:
      throwTypeError(value, "Unknown VariableDataType when converting to VariableModeValue")
  }
}

// Aliases for backward compatibility or external use
export const B9 = getPathLeaf
export const Ex = getVariableNamesInGroups
export const F$ = renameVariablesInGroup

/**
 * Recursively collects all variables from a group.
 * @param group - The group.
 * @returns Array of variables.
 */
export function collectAllVariables(group: any): any[] {
  let variables = [...group.variables]
  for (const subgroup of group.subgroups) {
    variables.push(...collectAllVariables(subgroup))
  }
  return variables
}

export const Lo = generateUniqueGroupName
export const Od = getFirstVariable
export const Pf = getGroupPath
export const Pw = buildVariableHierarchy
export const Qo = getVariablesWithPrefix
export const US = normalizePathWithParent
export const Wc = generateUniqueVariableName
export const Wx = getParentPath
export const ZR = constructPath
export const cv = countVariablesWithPrefix
export const hF = getRelativeName
export const ky = getPathBaseName
export const nm = DEFAULT_MODE
export const om = generateUniquePathName
export const pr = convertToModeValue
export const qQ = insertVariableAtPosition
export const rN = conditionalValue
export const x9 = getNameColumnWidth
export const yh = getValueColumnWidths
