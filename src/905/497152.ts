import { FacetType } from '../figma_app/763686'

/**
 * Enum mapping for facet types to their string representations
 */
export enum PrimaryWorkflowEnum {
  COMPONENT = 'component',
  STYLE = 'style',
  STATE_GROUP = 'state_group',
  VARIABLE = 'variable',
  VARIABLE_SET = 'variable_set',
  MODULE = 'module',
  VARIABLE_OVERRIDE = 'variable_override',
  RESPONSIVE_SET = 'responsive_set',
  CONSTRAINED_TEMPLATE = 'constrained_template',
  CODE_LIBRARY = 'code_library',
  CODE_FILE = 'code_file',
  CODE_COMPONENT = 'code_component',
  MANAGED_STRING = 'managed_string',
}



/**
 * Converts a FacetType enum value to its string representation
 * @param facetType - The FacetType enum value to convert
 * @returns The string representation of the facet type, or null if not applicable
 */
export function mapFacetTypeToString(facetType: FacetType) {
  switch (facetType) {
    case FacetType.SYMBOL:
      return 'component'
    case FacetType.STYLE:
      return 'style'
    case FacetType.STATE_GROUP:
      return 'state_group'
    case FacetType.MODULE:
      return 'module'
    case FacetType.RESPONSIVE_SET:
      return 'responsive_set'
    case FacetType.VARIABLE:
      return 'variable'
    case FacetType.VARIABLE_SET:
      return 'variable_set'
    case FacetType.VARIABLE_OVERRIDE:
      return 'variable_override'
    case FacetType.CONSTRAINED_TEMPLATE:
      return 'constrained_template'
    case FacetType.CODE_LIBRARY:
      return 'code_library'
    case FacetType.CODE_FILE:
      return 'code_file'
    case FacetType.CODE_COMPONENT:
      return 'code_component'
    case FacetType.MANAGED_STRING:
      return 'managed_string'
    case FacetType.BRUSH:
    case FacetType.NONE:
      return null
    default:
      return null
  }
}

/**
 * Converts a string representation to its corresponding FacetType enum value
 * @param facetString - The string representation of the facet type
 * @returns The corresponding FacetType enum value, or undefined if not found
 */
export function convertStringToFacetType(facetString: string): FacetType | undefined {
  switch (facetString) {
    case 'component':
      return FacetType.SYMBOL
    case 'module':
      return FacetType.MODULE
    case 'style':
      return FacetType.STYLE
    case 'state_group':
      return FacetType.STATE_GROUP
    case 'variable':
      return FacetType.VARIABLE
    case 'variable_set':
      return FacetType.VARIABLE_SET
    case 'variable_override':
      return FacetType.VARIABLE_OVERRIDE
    case 'responsive_set':
      return FacetType.RESPONSIVE_SET
    case 'constrained_template':
      return FacetType.CONSTRAINED_TEMPLATE
    case 'code_library':
      return FacetType.CODE_LIBRARY
    case 'code_file':
      return FacetType.CODE_FILE
    case 'code_component':
      return FacetType.CODE_COMPONENT
    case 'managed_string':
      return FacetType.MANAGED_STRING
    default:
      return undefined
  }
}

/**
 * Converts a FacetType enum value to its string representation
 * @param facetType - The FacetType enum value to convert
 * @returns The string representation of the facet type, or null if not applicable
 */
export function convertFacetTypeToString(facetType: FacetType) {
  return mapFacetTypeToString(facetType)
}


// Maintain backward compatibility
export const $$a2 = mapFacetTypeToString
export const $$s0 = convertStringToFacetType
export const PW = PrimaryWorkflowEnum
