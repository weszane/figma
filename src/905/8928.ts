import { isComputedField } from '../905/52806'
import { isScalarField } from '../905/320277'
import { ComputedFieldQuery } from '../905/329793'
import { hasFieldsProperty, NULL_FIELD_REF } from '../905/552287'
import { createValidationError, validateFieldArguments } from '../905/690753'
import { isObjectField, ObjectFieldDefinition } from '../905/824218'
import { hasTypeProperty, ResourceStatus } from '../905/957591'
import { CustomError } from '../905/962682'

/**
 * Represents a field definition with optional flag.
 * Original class name: u
 */
class FieldDef {
  def: any
  optional: boolean
  constructor(def: any, optional: boolean) {
    this.def = def
    this.optional = optional
  }
}

/**
 * Represents a query or view definition for an object field.
 * Handles queries, computations, projections, permissions, and metadata.
 * Original class name: $$p0
 */
export class QueryDef {
  parent: any
  context: any
  objectDef: any
  objectFieldDef: any
  fieldArgs: Record<string, any>
  permissionComputation: any
  shadowPermissionComputation: any
  queries = new Map()
  computations = new Map()
  projectedFields = new Map()
  transmittedFields = new Set()
  aliasMappings = new Map()
  optionalFields = new Set<string>()
  _missingOptionalFields = new Map()
  optional: boolean
  metadata: any

  /**
   * Checks if the field is nullable.
   * @returns {boolean} True if nullable.
   */
  isNullable(): boolean {
    return this.objectFieldDef.isNullable()
  }

  /**
   * Checks if the field is a list.
   * @returns {boolean} True if list.
   */
  isList(): boolean {
    return this.objectFieldDef.isList()
  }

  /**
   * Gets the path of the field.
   * @returns {string[]} The path array.
   */
  get path(): string[] {
    return [...this.parent.path, this.objectFieldDef.name]
  }

  /**
   * Gets the name of the object definition.
   * @returns {string} The object name.
   */
  get name(): string {
    return this.objectDef.name
  }

  /**
   * Gets the field definition.
   * @returns {any} The field def.
   */
  get def(): any {
    return this.objectFieldDef
  }

  /**
   * Gets missing optional fields, with validation.
   * @returns {any[]} Array of missing fields.
   */
  get missingOptionalFields(): any[] {
    if (!this.metadata?.shouldUseMissingFields) {
      throw new Error('invalid missingOptionalFields access with shouldUseMissingFields=false, are you trying to call missingOptionalFields from the Livegraph client? The client should only inspect missing fields via a QueryObserver.')
    }
    return Array.from(this._missingOptionalFields.values())
  }

  /**
   * Constructor for QueryDef.
   * Initializes the instance with provided parameters and processes fields, permissions, etc.
   * @param {object} params - Constructor parameters.
   * @param {any} params.parent - Parent query def.
   * @param {any} params.objectDef - Object definition.
   * @param {any} params.objectFieldDef - Object field definition.
   * @param {any} params.fieldArgs - Field arguments.
   * @param {any} params.fields - Fields to process.
   * @param {any} params.viewArgs - View arguments.
   * @param {any} params.schema - Schema.
   * @param {any} params.metadata - Metadata.
   * @param {boolean} params.optional - Optional flag.
   * @param {any} params.context - Context.
   */
  constructor({
    parent,
    objectDef,
    objectFieldDef,
    fieldArgs,
    fields,
    viewArgs,
    schema,
    metadata,
    optional,
    context,
  }: {
    parent: any
    objectDef: any
    objectFieldDef: any
    fieldArgs: any
    fields: any
    viewArgs: any
    schema: any
    metadata: any
    optional: boolean
    context: any
  }) {
    this.parent = parent
    this.objectDef = objectDef
    this.objectFieldDef = objectFieldDef
    this.fieldArgs = fieldArgs
    this.optional = optional
    this.context = context
    this.metadata = metadata
    this.processFieldArgs()
    this.processFields(fields, viewArgs, schema, metadata)
    this.setupPermissions(viewArgs, schema, metadata)
    this.addDependentFields()
    this.logDebugInfo()
  }

  /**
   * Processes field arguments, setting defaults if needed.
   * Original logic from constructor.
   */
  private processFieldArgs(): void {
    for (const arg of this.objectFieldDef.args) {
      if (!(arg.name in this.fieldArgs) && arg.name === 'initialPageSize') {
        this.fieldArgs = {
          ...this.fieldArgs,
          initialPageSize: 0,
        }
      }
    }
  }

  /**
   * Processes the fields map, handling queries, computations, and projections.
   * Original logic from constructor loop.
   * @param {any} fields - Fields to process.
   * @param {any} viewArgs - View arguments.
   * @param {any} schema - Schema.
   * @param {any} metadata - Metadata.
   */
  private processFields(fields: any, viewArgs: any, schema: any, metadata: any): void {
    validateFieldArguments(this.path, this.fieldArgs, this.objectFieldDef.args, viewArgs, this.isComputedFieldDependency, schema, metadata)
    for (const [key, value] of Object.entries(fields ?? {})) {
      let fieldName = key
      let fieldValue: any = value
      let isOptional = false
      if (fieldValue && hasFieldsProperty(fieldValue)) {
        if (fieldValue.aliasedField) {
          fieldName = fieldValue.aliasedField
          this.aliasMappings.set(fieldName, key)
        }
        isOptional = !!fieldValue.optional
        if (isOptional) {
          this.optionalFields.add(fieldName)
        }
        fieldValue = fieldValue.fields
      }
      const [args, nestedFields] = Array.isArray(fieldValue) ? fieldValue : [{}, fieldValue]
      let fieldDef: any
      try {
        fieldDef = this.objectDef.fieldDef(fieldName)
      }
      catch (error) {
        if (error instanceof CustomError) {
          if (isOptional && metadata?.shouldUseMissingFields) {
            this._missingOptionalFields.set(fieldName, {
              fieldName,
              info: error.message,
            })
            this.transmittedFields.add(fieldName)
            continue
          }
          throw error
        }
      }
      if (!fieldDef)
        continue
      const viewName = this.path[0]
      if ((isObjectField(fieldDef) || isScalarField(fieldDef) || isComputedField(fieldDef)) && !this.isComputedFieldDependency && fieldDef.bannedFromViews) {
        throw new CustomError(`The field ${fieldName} from view ${viewName} should not be selected on views and queried on client side because it's marked with bannedFromViews attribute on the object graph. It can only be used as part of computed field dependency.`)
      }
      if (isObjectField(fieldDef)) {
        this.handleQueryField(fieldName, fieldDef, args, nestedFields, viewArgs, schema, metadata, isOptional)
      }
      else if (isComputedField(fieldDef)) {
        this.handleComputedField(fieldName, fieldDef, args, nestedFields, viewArgs, schema, metadata, isOptional)
      }
      else {
        this.handleProjectedField(fieldName, fieldDef, nestedFields, isOptional)
      }
    }
    if (this.objectDef.name !== 'root') {
      this.transmittedFields.add('id')
    }
  }

  /**
   * Handles query field processing.
   * @param {string} fieldName - Name of the field.
   * @param {any} fieldDef - Field definition.
   * @param {any} args - Arguments.
   * @param {any} nestedFields - Nested fields.
   * @param {any} viewArgs - View arguments.
   * @param {any} schema - Schema.
   * @param {any} metadata - Metadata.
   * @param {boolean} isOptional - Optional flag.
   */
  private handleQueryField(fieldName: string, fieldDef: any, args: any, nestedFields: any, viewArgs: any, schema: any, metadata: any, isOptional: boolean): void {
    if (nestedFields === NULL_FIELD_REF) {
      throw createValidationError(this.path, `expected nested fields for '${fieldName}' but got '_'`)
    }
    try {
      this.queries.set(fieldName, new QueryDef({
        parent: this,
        objectDef: schema.objectDef(fieldDef.type),
        objectFieldDef: fieldDef,
        fieldArgs: args,
        fields: nestedFields,
        viewArgs,
        schema,
        metadata,
        optional: isOptional,
        context: this.context,
      }))
    }
    catch (error) {
      if (isOptional && error instanceof CustomError && metadata?.shouldUseMissingFields) {
        this._missingOptionalFields.set(fieldName, {
          fieldName,
          info: error.message,
        })
        this.transmittedFields.add(fieldName)
        return
      }
      throw error
    }
    if (fieldDef.embedded) {
      this.transmittedFields.add(fieldName)
    }
    for (const filterField of fieldDef.filterFields) {
      this.transmittedFields.add(filterField)
    }
  }

  /**
   * Handles computed field processing.
   * @param {string} fieldName - Name of the field.
   * @param {any} fieldDef - Field definition.
   * @param {any} args - Arguments.
   * @param {any} nestedFields - Nested fields.
   * @param {any} viewArgs - View arguments.
   * @param {any} schema - Schema.
   * @param {any} metadata - Metadata.
   * @param {boolean} isOptional - Optional flag.
   */
  private handleComputedField(fieldName: string, fieldDef: any, args: any, nestedFields: any, viewArgs: any, schema: any, metadata: any, isOptional: boolean): void {
    if (nestedFields !== NULL_FIELD_REF && !fieldDef.isComputedObject()) {
      throw createValidationError(this.path, `cannot query field '${fieldName}'.`)
    }
    if (nestedFields === NULL_FIELD_REF && fieldDef.isComputedObject()) {
      throw createValidationError(this.path, `'${fieldName}' is a computed object. Must query individual fields from the object instead of "_".`)
    }
    if (this.computations.has(fieldName)) {
      throw createValidationError(this.path, `duplicate computed field '${fieldName}'`)
    }
    this.computations.set(fieldName, new ComputedFieldQuery(this, fieldDef, args, viewArgs, schema, this.path, isOptional, metadata, nestedFields))
  }

  /**
   * Handles projected field processing.
   * @param {string} fieldName - Name of the field.
   * @param {any} fieldDef - Field definition.
   * @param {any} nestedFields - Nested fields.
   * @param {boolean} isOptional - Optional flag.
   */
  private handleProjectedField(fieldName: string, fieldDef: any, nestedFields: any, isOptional: boolean): void {
    if (nestedFields !== NULL_FIELD_REF) {
      throw createValidationError(this.path, `cannot query field '${fieldName}'`)
    }
    this.projectedFields.set(fieldName, new FieldDef(fieldDef, isOptional))
    this.transmittedFields.add(fieldName)
  }

  /**
   * Sets up permission computations.
   * Original logic from constructor.
   * @param {any} viewArgs - View arguments.
   * @param {any} schema - Schema.
   * @param {any} metadata - Metadata.
   */
  private setupPermissions(viewArgs: any, schema: any, metadata: any): void {
    const {
      checkCanRead,
      shadowCheckCanRead,
    } = this.objectFieldDef
    if (checkCanRead) {
      let permissionFieldName = 'canRead'
      if (checkCanRead.fieldName) {
        permissionFieldName = checkCanRead.fieldName.toString()
      }
      this.permissionComputation = new ComputedFieldQuery(this, this.objectDef.fieldDef(permissionFieldName), this.checkCanReadFieldArgs(checkCanRead), viewArgs, schema, this.path, undefined, metadata)
    }
    if (shadowCheckCanRead) {
      let shadowPermissionFieldName = 'canRead'
      if (shadowCheckCanRead.fieldName) {
        shadowPermissionFieldName = shadowCheckCanRead.fieldName.toString()
      }
      this.shadowPermissionComputation = new ComputedFieldQuery(this, this.objectDef.fieldDef(shadowPermissionFieldName), this.checkCanReadFieldArgs(shadowCheckCanRead), viewArgs, schema, this.path, undefined, metadata)
    }
  }

  /**
   * Adds dependent fields to transmitted fields.
   * Original logic from constructor.
   */
  private addDependentFields(): void {
    for (const dependentField of this.objectFieldDef.dependentFields) {
      this.transmittedFields.add(dependentField)
    }
  }

  /**
   * Logs debug information.
   * Original logic from constructor.
   */
  private logDebugInfo(): void {
    this.context?.options?.logger?.debug('VIEW_QUERY_DEF.CREATE', this.debugFields)
  }

  /**
   * Checks and prepares field arguments for canRead checks.
   * Original method: checkCanReadFieldArgs
   * @param {any} checkCanRead - Check can read object.
   * @returns {any} Prepared arguments.
   */
  checkCanReadFieldArgs(checkCanRead: Record<string, any>): any {
    const args: any = {}
    for (const [key, value] of Object.entries(checkCanRead)) {
      if (key !== 'fieldName' && key !== 'featureFlag') {
        if (hasTypeProperty(value) && this.fieldArgs[value.ref]) {
          args[key] = this.fieldArgs[value.ref]
        }
        else {
          args[key] = value
        }
      }
    }
    return args
  }

  /**
   * Sets query fields for exists check.
   * Original method: setQueryFieldsForExists
   * @param {any} expectedMaxCount - Expected max count.
   */
  setQueryFieldsForExists(expectedMaxCount: any): void {
    const originalFieldDef = this.objectFieldDef
    const existsFieldName = `${originalFieldDef.name}_exists`
    const existsFieldDef = new ObjectFieldDefinition({
      name: existsFieldName,
      type: originalFieldDef.type,
      nullable: originalFieldDef.nullable,
      args: originalFieldDef.args,
      filter: originalFieldDef.filterDef,
      expectedMaxCount: originalFieldDef.expectedMaxCount,
      orderBy: originalFieldDef.orderBy,
      pagination: originalFieldDef.pagination,
      resolver: originalFieldDef.resolver,
      deprecated: originalFieldDef.deprecated,
      typechecked: originalFieldDef.typechecked,
      bannedFromViews: originalFieldDef.bannedFromViews,
      permissionName: originalFieldDef.permissionName,
      checkCanRead: originalFieldDef.checkCanRead,
      shadowCheckCanRead: originalFieldDef.shadowCheckCanRead,
    }, originalFieldDef.firstSeen)
    existsFieldDef.expectedMaxCount = expectedMaxCount
    this.objectFieldDef = existsFieldDef
  }

  /**
   * Gets a query by name.
   * Original method: getQueryByName
   * @param {string} name - Query name.
   * @returns {any} The query.
   */
  getQueryByName(name: string): any {
    return this.queries.get(name)
  }

  /**
   * Checks if there are static queries.
   * Original method: hasStaticQueries
   * @returns {boolean} True if static.
   */
  hasStaticQueries(): boolean {
    return this.objectFieldDef.resolver?.type === 'HTTP' && this.objectFieldDef.resolver?.realtimePolicy.type === 'Static'
  }

  /**
   * Gets debug fields information.
   * Original getter: debugFields
   * @returns {object} Debug info.
   */
  get debugFields(): any {
    return {
      parent: this.parent.name,
      queryReturnType: this.objectDef.name,
      field: this.objectFieldDef.name,
      optional: this.optional,
      queryFields: JSON.stringify(Array.from(this.queries.keys())),
      projectedBaseFields: JSON.stringify(Array.from(this.projectedFields.keys())),
    }
  }

  /**
   * Deals with alias mappings.
   * Original method: dealias
   * @param {string} field - Field name.
   * @returns {string} Dealiased name.
   */
  dealias(field: string): string {
    return this.aliasMappings.get(field) || field
  }

  /**
   * Gets missing optional fields for an embedded instance.
   * Original method: missingOptionalFieldsForEmbeddedInstance
   * @param {any} instance - Instance object.
   * @returns {any[]} Missing fields.
   */
  missingOptionalFieldsForEmbeddedInstance(instance: Record<string, any>): any[] {
    const missing: any[] = []
    for (const field of this.optionalFields.values()) {
      if (instance[field] === undefined) {
        missing.push({
          fieldName: field,
          info: `optional field '${field}' was missing in instance of object '${this.objectDef.name}'`,
        })
      }
    }
    return missing
  }

  /**
   * Projects an instance based on fields.
   * Original method: projectInstance
   * @param {any} instance - Instance to project.
   * @returns {any} Projected object.
   */
  projectInstance(instance: any): any {
    const projected: any = {}
    if (this.objectFieldDef.embedded) {
      for (const field of this.projectedFields.keys()) {
        projected[this.dealias(field)] = field in instance ? instance[field] : null
      }
    }
    else {
      for (const field of this.projectedFields.keys()) {
        projected[this.dealias(field)] = instance[field]
      }
    }
    for (const field of this.projectedFields.keys()) {
      if (this.optionalFields.has(field)) {
        projected[this.dealias(field)] = {
          status: ResourceStatus.Loaded,
          data: projected[this.dealias(field)],
        }
      }
    }
    return projected
  }

  /**
   * Gets missing projected fields from an instance.
   * Original method: getMissingProjectedFields
   * @param {any} instance - Instance to check.
   * @returns {string[]} Missing fields.
   */
  getMissingProjectedFields(instance: any): string[] {
    const allFields = [...this.projectedFields.keys(), ...this.computations.keys(), ...this.queries.keys()]
    const missing: string[] = []
    for (const field of allFields) {
      const dealiased = this.dealias(field)
      if (instance[dealiased] === undefined) {
        missing.push(dealiased)
      }
    }
    return missing
  }

  /**
   * Checks if this is a computed field dependency.
   * Original getter: isComputedFieldDependency
   * @returns {boolean} True if dependency.
   */
  get isComputedFieldDependency(): boolean {
    return this.parent.isComputedFieldDependency
  }
}

// Export alias for backward compatibility
export const E = QueryDef
