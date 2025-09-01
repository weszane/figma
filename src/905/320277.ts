import { oneLine } from 'common-tags'
import { CustomError } from '../905/962682'

/**
 * Interface defining the structure of scalar field configuration
 * Original: constructor parameters for $$a1
 */
interface ScalarFieldConfig {
  name: string
  type: {
    kind: string
    name: string
  }
  nullable?: boolean
  deprecated?: boolean
  bannedFromViews?: boolean
  typechecked?: boolean
}

/**
 * Interface for validation context containing enums
 * Original: second parameter in validate method
 */
interface ValidationContext {
  enums: Map<string, any>
}

/**
 * Interface for object type context used in validation
 * Original: second parameter 't' in validate method
 */
interface ObjectTypeContext {
  name: string
}

/**
 * Represents a scalar field in the schema
 * Original class: $$a1
 */
export class ScalarField {
  /** The type of field - always 'scalar' for this class */
  readonly fieldType = 'scalar'

  /** The name of the field */
  name: string

  /** The type definition of the field */
  type: { kind: string, name: string }

  /** Whether the field can be null */
  nullable: boolean

  /** Whether the field is deprecated */
  deprecated?: boolean

  /** Whether the field is banned from views */
  bannedFromViews?: boolean

  /** Whether the field should be type-checked */
  typechecked: boolean

  /** When this field was first seen */
  firstSeen: any

  /**
   * Creates a new ScalarField instance
   * Original constructor: $$a1 constructor
   * @param config - The field configuration
   * @param firstSeen - When this field was first encountered
   */
  constructor(config: ScalarFieldConfig, firstSeen: any) {
    this.name = config.name
    this.type = config.type
    this.nullable = config.nullable || false
    this.deprecated = config.deprecated
    this.typechecked = config.typechecked !== undefined ? config.typechecked : true
    this.bannedFromViews = config.bannedFromViews
    this.firstSeen = firstSeen
  }

  /**
   * Validates the field against the provided context
   * Original method: validate in $$a1
   * @param context - The validation context containing available enums
   * @param objectType - The object type this field belongs to
   * @throws {CustomError} When field refers to undefined enum type
   */
  validate(context: ValidationContext, objectType: ObjectTypeContext): void {
    if (this.type.kind === 'enum' && !context.enums.has(this.type.name)) {
      throw new CustomError(oneLine`
        field '${this.name}' of object type '${objectType.name}' refers to undefined
        enum type '${this.type.name}'`)
    }
  }
}

/**
 * Type guard to check if a field is a scalar field
 * Original function: $$s0
 * @param field - The field to check
 * @returns True if the field is a scalar field
 */
export function isScalarField(field: { fieldType: string }): field is ScalarField {
  return field.fieldType === 'scalar'
}

// Legacy exports for backward compatibility
// Original exports: D, W
export const D = isScalarField // Original: $$s0
export const W = ScalarField // Original: $$a1
