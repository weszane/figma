import { QueryDef } from '../905/8928'
import { ScalarField } from '../905/320277'
import { resolveBasicProperty } from '../905/415342'
import { hasFieldsProperty, NULL_FIELD_REF } from '../905/552287'
import { createValidationError, validateFieldArguments } from '../905/690753'
import { ObjectFieldDefinition } from '../905/824218'
import { CustomError } from '../905/962682'

/**
 * Represents a parameterized computation for a computed field
 * Original class: a
 */
export class ParameterizedComputation {
  public readonly computationId: string
  constructor(public readonly computationDef: ComputedFieldQuery, public readonly computationArgs: Record<string, any>, public readonly instanceId: string, public readonly instanceUuid: string, public readonly parentLiveViewSpan: any, public readonly permissionArgs?: any) {
    // Build computation arguments excluding natural key fields
    const filteredArgs = this.buildFilteredArgs(computationArgs)

    // Create computation ID for caching/identification
    this.computationId = this.createComputationId(instanceId, filteredArgs, permissionArgs)
  }

  /**
   * Get the computed field definition
   * Original getter: fieldDef
   */
  get fieldDefinition() {
    return this.computationDef.computedFieldDef
  }

  /**
   * Get the object name from the field definition
   * Original getter: objectName
   */
  get objectName() {
    return this.fieldDefinition.objectDef.name
  }

  /**
   * Get the field name from the field definition
   * Original getter: fieldName
   */
  get fieldName() {
    return this.fieldDefinition.name
  }

  /**
   * Get the display name in format "objectName.fieldName"
   * Original getter: displayName
   */
  get displayName() {
    return `${this.objectName}.${this.fieldName}`
  }

  /**
   * Build filtered arguments excluding natural key fields
   * Original inline logic in constructor
   */
  private buildFilteredArgs(args: Record<string, any>): Record<string, any> {
    const filteredArgs: Record<string, any> = {}
    for (const key in args) {
      if (!key.startsWith('_nk_')) {
        filteredArgs[key] = args[key]
      }
    }
    return filteredArgs
  }

  /**
   * Create computation ID for caching/identification
   * Original inline logic in constructor
   */
  private createComputationId(instanceId: string, filteredArgs: Record<string, any>, permissionArgs?: any): string {
    const idComponents = [this.objectName, this.fieldName, instanceId, filteredArgs]
    if (permissionArgs) {
      idComponents.push(permissionArgs)
    }
    return JSON.stringify(idComponents)
  }
}

/**
 * Query builder for computed fields that can return computed objects
 * Original class: $$u0
 */
export class ComputedFieldQuery {
  public readonly computedObjectQueries = new Map<string, QueryDef>()
  public readonly aliasMappings = new Map<string, string>()
  public readonly optionalFields = new Set<string>()
  public filterFields: Set<string> | null = null
  constructor(public readonly parent: any, public readonly computedFieldDef: any, public readonly fieldArgs: Record<string, any>, public readonly viewArgs: any, public readonly schema: any, fieldPath: string[], public readonly optional: boolean | undefined, metadata: any, public readonly requestedFields?: any) {
    const fieldName = this.computedFieldDef.name
    const viewName = parent.path[0]
    this.validateComputedObjectFields(schema, viewName)
    this.validateFieldArguments(fieldPath, fieldName, metadata)
    this.buildObjectQueries(schema, metadata)
  }

  /**
   * Get the computed field definition
   * Original getter: def
   */
  get definition() {
    return this.computedFieldDef
  }

  /**
   * Get the object name if this is a computed object
   * Original getter: objectName
   */
  get objectName(): string | undefined {
    return this.computedFieldDef.isComputedObject() ? this.computedFieldDef.type.name : undefined
  }

  /**
   * Get the field name
   * Original getter: name
   */
  get name(): string {
    return this.computedFieldDef.name
  }

  /**
   * Get the field path
   * Original getter: path
   */
  get path(): string[] {
    return [...this.parent.path, this.name]
  }

  /**
   * Check if this is a computed field dependency
   * Original getter: isComputedFieldDependency
   */
  get isComputedFieldDependency(): boolean {
    return this.parent.isComputedFieldDependency
  }

  /**
   * Validate computed object fields for view compatibility
   * Original method: validateComputedObject
   */
  private validateComputedObjectFields(schema: any, viewName: string): void {
    if (!this.computedFieldDef.isComputedObject()) {
      return
    }
    const objectDef = schema.objectDef(this.computedFieldDef.type)
    for (const [fieldName, fieldConfig] of Object.entries(this.requestedFields || [])) {
      const actualFieldName = this.getActualFieldName(fieldName, fieldConfig)
      if (this.shouldSkipOptionalField(objectDef, actualFieldName, fieldConfig)) {
        continue
      }
      this.validateFieldViewCompatibility(objectDef, actualFieldName, viewName)
    }
  }

  /**
   * Get the actual field name, handling aliased fields
   */
  private getActualFieldName(fieldName: string, fieldConfig: any): string {
    return fieldConfig && hasFieldsProperty(fieldConfig) && fieldConfig.aliasedField ? fieldConfig.aliasedField : fieldName
  }

  /**
   * Check if an optional field should be skipped
   */
  private shouldSkipOptionalField(objectDef: any, fieldName: string, fieldConfig: any): boolean {
    return !objectDef.fields.has(fieldName) && hasFieldsProperty(fieldConfig) && fieldConfig?.optional
  }

  /**
   * Validate field compatibility with views
   */
  private validateFieldViewCompatibility(objectDef: any, fieldName: string, viewName: string): void {
    const fieldDef = objectDef.fieldDef(fieldName)
    if ((fieldDef instanceof ObjectFieldDefinition || fieldDef instanceof ScalarField) && fieldDef.bannedFromViews && !this.parent.isComputedFieldDependency) {
      throw new CustomError(`The field ${fieldName} from view ${viewName} should not be selected on views and queried on client side because it's marked with bannedFromViews attribute on the object graph. It can only be used as part of computed field dependency.`)
    }
  }

  /**
   * Validate field arguments
   * Original inline logic using uH function
   */
  private validateFieldArguments(fieldPath: string[], fieldName: string, metadata?: any): void {
    validateFieldArguments([...fieldPath, fieldName], {
      ...this.fieldArgs,
      ...this.createDummyNaturalKeyArgs(this.parent.objectDef),
    }, this.computedFieldDef.args, this.viewArgs, true, this.schema, metadata)
  }

  /**
   * Create dummy arguments for natural key fields
   * Original method: dummyArgs
   */
  private createDummyNaturalKeyArgs(objectDef: {
    naturalKey: any[]
    fields: any
  }): Record<string, any> {
    if (!objectDef.naturalKey) {
      return {
        _rootId: '',
      }
    }
    const dummyArgs: Record<string, any> = {}
    Array.from(objectDef.naturalKey).forEach((fieldName) => {
      const fieldType = objectDef.fields.get(fieldName).type.kind
      const dummyValue = this.getDummyValueForType(fieldType)
      dummyArgs[`_nk_${fieldName}`] = dummyValue
    })
    return dummyArgs
  }

  /**
   * Get dummy value based on field type
   */
  private getDummyValueForType(typeKind: string): any {
    const typeMap: Record<string, any> = {
      string: '',
      bigint: '0',
      uuid: '00000000-0000-0000-0000-000000000000',
      int: 0,
      float: 0,
      bool: false,
      enum: [],
      list: [],
      map: [],
    }
    if (!(typeKind in typeMap)) {
      throw new Error('this natural key type is unsupported, add a dummy type to this switch for computed fields to work')
    }
    return typeMap[typeKind]
  }

  /**
   * Create a parameterized computation instance
   * Original method: parameterizedComputation
   */
  public createParameterizedComputation(evaluationContext: any, objectContext: any, instance: any, naturalKeyFields: string[] | null, liveViewSpan: any, permissionArgs: any, additionalArgs?: Map<string, any>): ParameterizedComputation {
    const computationArgs = this.buildComputationArgs(evaluationContext, objectContext, instance, naturalKeyFields, additionalArgs)
    return new ParameterizedComputation(this, computationArgs, instance.id, instance.uuid, liveViewSpan, permissionArgs)
  }

  /**
   * Build computation arguments
   */
  private buildComputationArgs(evaluationContext: any, objectContext: any, instance: any, naturalKeyFields: string[] | null, additionalArgs?: Map<string, any>): Record<string, any> {
    const args: Record<string, any> = {
      _rootId: instance.id,
    }

    // Add natural key fields
    if (naturalKeyFields) {
      for (const field of naturalKeyFields) {
        args[`_nk_${field}`] = instance[field]
      }
    }

    // Add field arguments
    for (const argName in this.fieldArgs) {
      args[argName] = resolveBasicProperty(evaluationContext, objectContext, this.fieldArgs[argName])
    }

    // Add additional arguments
    if (additionalArgs) {
      for (const [key, value] of additionalArgs.entries()) {
        args[key] = value
      }
    }
    return args
  }

  /**
   * Build object queries for computed object fields
   * Original method: buildObjectQueries
   */
  private buildObjectQueries(schema: any, metadata?: any): void {
    if (!this.computedFieldDef.isComputedObject()) {
      return
    }
    for (const [originalFieldName, fieldConfig] of Object.entries(this.requestedFields || [])) {
      try {
        this.processObjectField(schema, originalFieldName, fieldConfig, metadata)
      }
      catch (error) {
        if (error instanceof CustomError && this.isOptionalField(fieldConfig)) {
          continue // Skip optional fields that fail validation
        }
        throw error
      }
    }
  }

  /**
   * Process a single object field
   */
  private processObjectField(schema: any, originalFieldName: string, fieldConfig: any, metadata?: any): void {
    const {
      actualFieldName,
      isOptional,
      nestedFields,
    } = this.parseFieldConfig(originalFieldName, fieldConfig)
    if (!this.isFieldAvailable(schema, actualFieldName, isOptional)) {
      return
    }
    if (!nestedFields) {
      this.validateScalarField(schema, actualFieldName)
      return
    }
    this.buildNestedObjectQuery(schema, originalFieldName, actualFieldName, fieldConfig, nestedFields, isOptional, metadata)
  }

  /**
   * Parse field configuration to extract field name, optionality, and nested fields
   */
  private parseFieldConfig(originalFieldName: string, fieldConfig: any) {
    let actualFieldName = originalFieldName
    let isOptional = false
    let nestedFields = fieldConfig
    if (fieldConfig && hasFieldsProperty(fieldConfig)) {
      if (fieldConfig.aliasedField) {
        actualFieldName = fieldConfig.aliasedField
        this.aliasMappings.set(actualFieldName, originalFieldName)
      }
      isOptional = !!fieldConfig.optional
      if (isOptional) {
        this.optionalFields.add(actualFieldName)
      }
      nestedFields = fieldConfig.fields
    }
    return {
      actualFieldName,
      isOptional,
      nestedFields,
    }
  }

  /**
   * Check if a field is available in the schema
   */
  private isFieldAvailable(schema: any, fieldName: string, isOptional: boolean): boolean {
    const hasField = schema.objectDef(this.computedFieldDef.type)?.fields.has(fieldName)
    return hasField || !isOptional
  }

  /**
   * Check if a field configuration indicates it's optional
   */
  private isOptionalField(fieldConfig: any): boolean {
    return fieldConfig && hasFieldsProperty(fieldConfig) && fieldConfig.optional
  }

  /**
   * Validate scalar field requirements
   */
  private validateScalarField(schema: any, fieldName: string): void {
    const fieldDef = schema.objectDef(this.computedFieldDef.type)?.fieldDef(fieldName)
    if (fieldDef instanceof ObjectFieldDefinition && !fieldDef.embedded) {
      throw createValidationError(this.parent.path, `expected nested fields for '${fieldName}' but got '_'. ${fieldName} is an object field and should be selected with individual fields.`)
    }
  }

  /**
   * Build nested object query
   */
  private buildNestedObjectQuery(schema: any, originalFieldName: string, actualFieldName: string, fieldConfig: any, nestedFields: any, isOptional: boolean, metadata?: any): void {
    const fieldDef = schema.objectDef(this.computedFieldDef.type)?.fieldDef(actualFieldName)
    if (!fieldDef) {
      throw createValidationError(this.parent.path, `field definition for name "${actualFieldName}" doesn't exist in the schema`)
    }
    const [fieldArgs, fields] = Array.isArray(nestedFields) ? nestedFields : [{}, nestedFields]
    if (fieldDef instanceof ObjectFieldDefinition && !fieldDef.embedded) {
      this.validateNestedFields(actualFieldName, fields)
      this.createObjectQuery(originalFieldName, fieldDef, fieldArgs, fields, schema, isOptional, metadata)
      this.addFilterFields(fieldDef)
    }
  }

  /**
   * Validate nested fields are provided
   */
  private validateNestedFields(fieldName: string, fields: any): void {
    if (fields === NULL_FIELD_REF || !fields) {
      throw createValidationError(this.parent.path, `expected nested fields for '${fieldName}' but got '_'`)
    }
  }

  /**
   * Create object query for nested field
   */
  private createObjectQuery(originalFieldName: string, fieldDef: ObjectFieldDefinition, fieldArgs: any, fields: any, schema: any, isOptional: boolean, metadata?: any): void {
    this.computedObjectQueries.set(originalFieldName, new QueryDef({
      parent: this,
      objectDef: schema.objectDef(fieldDef.type),
      objectFieldDef: fieldDef,
      fieldArgs,
      fields,
      viewArgs: this.viewArgs,
      schema,
      metadata: metadata
        ? {
            ...metadata,
            shouldUseMissingFields: true,
          }
        : undefined,
      optional: isOptional,
      context: this.parent?.context || null,
    }))
  }

  /**
   * Add filter fields from field definition
   */
  private addFilterFields(fieldDef: ObjectFieldDefinition): void {
    if (!this.filterFields) {
      this.filterFields = new Set()
    }
    for (const filterField of fieldDef.filterFields) {
      this.filterFields.add(filterField)
    }
  }

  /**
   * Resolve field alias to original name
   * Original method: dealias
   */
  public resolveFieldAlias(fieldName: string): string {
    return this.aliasMappings.get(fieldName) || fieldName
  }
}

// Export alias for backward compatibility
// Original export: A
export const A = ComputedFieldQuery
