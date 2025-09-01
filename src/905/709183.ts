
import { camelCase, mapValues, snakeCase } from 'lodash-es'

/**
 * Interface for table configuration options
 * Originally from $$d1 constructor parameters
 */
interface TableConfigOptions {
  skipFromLiveGraphViews?: boolean
  
  liveGraphField?: LiveGraphFieldConfig
  liveGraphFieldInterfaceOptions?: Record<string, any>
}

/**
 * Interface for live graph field
 * Originally from $$d1.liveGraphField
 */

export interface LiveGraphFieldConfig {
  name?: string
  objectName?: string
  requireUserArg?: boolean
  skipFromLiveGraphViews?: boolean
  through?: {
    name: string
    requireUserArg?: boolean
  }
  overrides?: {
    project?: any
    file?: {
      name?: string
      through?: {
        name: string
        requireUserArg?: boolean
      }
      fieldSetGenerator?: (fields: any) => any
    }
    [key: string]: any
  }
}

/**
 * Interface for field configuration options
 * Originally from $$c0 constructor parameters
 */
interface FieldConfigOptions {
  liveGraphFieldName?: string
}

/**
 * Enum for loading states
 * Originally $$u2
 */
export enum LoadingState {
  PENDING_LOAD = '::PENDING_LOAD::',
  NOT_FOUND = '::NOT_FOUND::',
}

/**
 * Enum for comparison operators
 * Originally p
 */
export enum ComparisonOperator {
  equals = '=',
  notEquals = '<>',
  in = 'in', // Originally $$in
  includes = 'includes',
  gt = '>',
  lt = '<',
  gte = '>=',
  lte = '<=',
}

/**
 * Type for serialization formats
 */
type SerializationFormat = 'sinatra' | 'livegraph' | 'livegraphTopLevelResourceName' | 'livegraphFieldName'

/**
 * Represents a database table with serialization capabilities
 * Originally $$d1 class
 */
export class DatabaseTable {
  public readonly name: string
  public readonly liveGraphFieldName?: string
  public readonly liveGraphField?: LiveGraphFieldConfig
  public readonly skipFromLiveGraphViews: boolean = false
  public readonly livegraphTopLevelResourceName?: string
  private readonly serializedValues: Record<string, string>

  /**
   * Creates a new DatabaseTable instance
   * @param name - Table name (originally parameter 'e')
   * @param options - Configuration options (originally parameter 't')
   */
  constructor(name: string, options?: TableConfigOptions) {
    this.name = name
    this.skipFromLiveGraphViews = options?.skipFromLiveGraphViews || false

    // Set live graph field if provided and not skipped from views
    if (options?.liveGraphField && !options?.skipFromLiveGraphViews) {
      this.liveGraphField = options.liveGraphField
      this.liveGraphFieldName = options.liveGraphField.name
    }

    // Set top level resource name if live graph field has object name
    if (typeof options?.liveGraphField !== 'string' && options?.liveGraphField?.objectName) {
      this.livegraphTopLevelResourceName = options.liveGraphField.objectName
    }

    const livegraphName = this.liveGraphFieldName || camelCase(this.name)
    this.serializedValues = {
      sinatra: this.name,
      livegraph: livegraphName,
      livegraphTopLevelResourceName: this.livegraphTopLevelResourceName || livegraphName,
    }
  }


  /**
   * Serializes the table name in the specified format
   * @param format - Serialization format (originally parameter 'e')
   * @returns Serialized table name
   */
  serialize(format: SerializationFormat): string {
    return this.serializedValues[format]
  }

  /**
   * Creates a new table with fields
   * @param tableName - Name of the table (originally parameter 'e')
   * @param fieldDefinitions - Field definitions (originally parameter 't')
   * @param options - Configuration options (originally parameter 'i')
   * @returns Object with field methods and getTableName function
   */
  static new(
    tableName: string,
    fieldDefinitions: Record<string, any>,
    options: TableConfigOptions = {},
  ) {
    const table = new DatabaseTable(tableName, options)
    return DatabaseTable.fields(table, fieldDefinitions, options.liveGraphFieldInterfaceOptions)
  }

  /**
   * Creates fields object for the table
   * @param table - Database table instance (originally parameter 'e')
   * @param fieldDefinitions - Field definitions (originally parameter 't')
   * @param fieldOptions - Field interface options (originally parameter 'i')
   * @returns Object with field instances and utility methods
   */
  static fields(
    table: DatabaseTable,
    fieldDefinitions: Record<string, any>,
    fieldOptions?: Record<string, any>,
  ) {
    return {
      ...mapValues(fieldDefinitions, (fieldDef, fieldName) =>
        DatabaseTableField.create(table, fieldDef, fieldOptions?.[fieldName])),
      getTableName: (format: SerializationFormat) => table.serialize(format),
    }
  }

}

/**
 * Represents a field within a database table
 * Originally $$c0 class
 */
export class DatabaseTableField {
  public readonly table: DatabaseTable
  public readonly name: string
  public readonly liveGraphFieldName: string | null
  private readonly serializedValues: Record<string, string>
  private readonly livegraphParts: string[] | null = null
  private readonly normalizedLivegraphParts: string[] | null = null

  /**
   * Creates a new DatabaseTableField instance
   * @param table - Parent table (originally parameter 'e')
   * @param fieldName - Field name (originally parameter 't')
   * @param options - Field configuration options (originally parameter 'i')
   */
  constructor(table: DatabaseTable, fieldName: string, options?: FieldConfigOptions) {
    this.table = table
    this.name = fieldName
    this.liveGraphFieldName = options?.liveGraphFieldName || null

    const livegraphFieldName = this.liveGraphFieldName || camelCase(this.name)
    this.serializedValues = {
      sinatra: `${this.table.name}.${this.name}`,
      livegraphFieldName,
      livegraph: `${this.table.serialize('livegraph')}.${livegraphFieldName}`,
    }

    this.livegraphParts = this.serializedValues.livegraph.split('.')
    this.normalizedLivegraphParts = this.livegraphParts.map(part => snakeCase(part).toUpperCase())
  }

  /**
   * Creates a new field instance
   * @param table - Parent table (originally parameter 'e')
   * @param fieldName - Field name (originally parameter 't')
   * @param options - Field options (originally parameter 'i')
   * @returns New DatabaseTableField instance
   */
  static create(table: DatabaseTable, fieldName: string, options?: FieldConfigOptions): DatabaseTableField {
    return new DatabaseTableField(table, fieldName, options)
  }

  /**
   * JSON serializer for DatabaseTableField instances
   * @param key - Serialization key (originally parameter 'e')
   * @param value - Value to serialize (originally parameter 't')
   * @returns Serialized value
   */
  static jsonSerializer(key: string, value: any): any {
    return value instanceof DatabaseTableField ? value.serialize('sinatra') : value
  }

  /**
   * Serializes the field in the specified format
   * @param format - Serialization format, defaults to 'sinatra' (originally parameter 'e')
   * @returns Serialized field value
   */
  serialize(format: SerializationFormat = 'sinatra'): string {
    return this.serializedValues[format]
  }

  /**
   * Gets field parts for the specified format
   * @param format - Format to get parts for, defaults to 'livegraph' (originally parameter 'e')
   * @returns Array of field parts
   */
  getFieldParts(format: SerializationFormat = 'livegraph'): string[] {
    return format === 'livegraph'
      ? this.livegraphParts!
      : this.serializedValues[format].split('.')
  }

  /**
   * Gets normalized field parts for the specified format
   * @param format - Format to get normalized parts for, defaults to 'livegraph' (originally parameter 'e')
   * @returns Object with path and normalized arrays
   */
  getNormalizedFieldParts(format: SerializationFormat = 'livegraph'): { path: string[], normalized: string[] } {
    if (format === 'livegraph') {
      return {
        path: this.livegraphParts!,
        normalized: this.normalizedLivegraphParts!,
      }
    }

    const parts = this.serializedValues[format].split('.')
    return {
      path: parts,
      normalized: parts.map(part => snakeCase(part).toUpperCase()),
    }
  }
}

// Export aliases to maintain backward compatibility
export const D0 = DatabaseTableField // Originally $$c0
export const XI = DatabaseTable // Originally $$d1
export const q4 = LoadingState // Originally $$u2
