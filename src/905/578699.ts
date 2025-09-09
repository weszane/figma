import { oneLine } from 'common-tags'
import { validateAndParseArgument } from '../905/119577'
import { ObjectTypeDefinition } from '../905/644409'
import { validateUniqueArgumentNames } from '../905/690753'
import { findItemByName } from '../905/957591'
import { CustomError } from '../905/962682'

/**
 * Represents an Enum definition.
 * Original class name: n
 */
export class EnumDefinition {
  name: string
  values: any[]
  annotations: any

  constructor(enumDef: { name: string; values: any[]; annotations: any }) {
    this.name = enumDef.name
    this.values = enumDef.values
    this.annotations = enumDef.annotations
  }

  /**
   * Checks if the provided value is valid for this enum.
   * Original method: isValidValue
   */
  isValidValue(value: any): boolean {
    return this.values.some(v => typeof v === 'string' ? value === v : value === v[1])
  }

  /**
   * Validates the enum definition.
   * Original method: validate
   */
  validate(_schema: any): void {
    // No-op for now
  }
}

/**
 * Represents a Session definition.
 * Original class name: c
 */
export class SessionDefinition {
  args: any[]

  constructor(sessionDef?: { args?: any[] }) {
    this.args = sessionDef?.args || [{
      name: 'userId',
      type: { kind: 'string' },
      nullable: true,
    }]
    if (!this.args.find(arg => arg.name === 'sessionId')) {
      this.args.push({
        name: 'sessionId',
        type: { kind: 'string' },
        nullable: true,
      })
    }
    if (!this.args.find(arg => arg.name === 'anonymousUserId')) {
      this.args.push({
        name: 'anonymousUserId',
        type: { kind: 'string' },
        nullable: true,
      })
    }
    validateUniqueArgumentNames('Session definition ', this.args)
    this.validateUserIdArgument(this.args)
  }

  /**
   * Validates the 'userId' argument type.
   * Original method: validateUserIdArgument
   */
  validateUserIdArgument(args: any[]): void {
    for (const arg of args) {
      if (arg.name === 'userId') {
        if (!['string', 'bigint'].includes(arg.type.kind)) {
          throw new CustomError(oneLine`
            Session definition error: 'userId' arg must be of type 'string' or 'bigint'
          `)
        }
        return
      }
    }
    throw new CustomError(oneLine`
      Session definition error: 'userId' arg of type 'string' or 'bigint' is required
    `)
  }

  /**
   * Parses and validates session arguments.
   * Original method: parseAndValidateArguments
   */
  parseAndValidateArguments(args: Record<string, any>, context: any): Record<string, any> {
    const result = {
      userId: null,
      sessionId: '',
      anonymousUserId: null,
    }
    for (const key in args) {
      const argDef = findItemByName(this.args, key)
      if (argDef) {
        const parsed = validateAndParseArgument(context, argDef, args[key])
        if (parsed.type === 'error') {
          throw new CustomError(oneLine`
            Session argument error: '${parsed.argName}' '${parsed.msg}'`)
        }
        result[key] = parsed.parsedValue
      } else {
        throw new CustomError(oneLine`
          Session argument error: '${key}' is not a valid argument
          name`)
      }
    }
    for (const arg of this.args) {
      if (!(arg.name in args)) {
        throw new CustomError(oneLine`
          Session argument error: the argument '${arg.name}' is missing`)
      }
    }
    return result
  }
}

/**
 * Handles legacy config and type conversion exemptions.
 * Original class name: u
 */
export class LegacyConfigHandler {
  typeConversionExemptions: Record<string, any> = {
    viewArg: {},
    filterArg: {},
    computedFieldArg: {},
  }
  allowAllConversions: boolean

  constructor(config?: { exemptions?: any; allowAllExemptions?: boolean }) {
    this.populateTypeConversions(config)
    this.allowAllConversions = config?.allowAllExemptions ?? true
  }

  /**
   * Populates type conversion exemptions from config.
   * Original method: populateTypeConversions
   */
  populateTypeConversions(config?: { exemptions?: any }): void {
    if (!config?.exemptions) return
    const exemptionsCopy = JSON.parse(JSON.stringify(config.exemptions))
    for (const key of Object.keys(config.exemptions)) {
      for (const [name, obj] of Object.entries(exemptionsCopy[key])) {
        for (const field of Object.keys(obj)) {
          obj[field] = new Set(config.exemptions[key][name][field])
        }
      }
    }
    this.typeConversionExemptions = exemptionsCopy
  }

  /**
   * Checks if a type conversion is exempted.
   * Original method: isTypeConversionExempted
   */
  isTypeConversionExempted(
    exemptionType: string,
    argType: string,
    objectName: string,
    fieldName: string
  ): boolean {
    try {
      return this.allowAllConversions || this.typeConversionExemptions[exemptionType][argType][objectName].has(fieldName)
    } catch {
      return false
    }
  }

  /**
   * Serializes the legacy config handler.
   * Original method: toJSON
   */
  toJSON(): string {
    return JSON.stringify({
      typeConversionExemptions: this.typeConversionExemptions,
      allowAllConversions: this.allowAllConversions,
    })
  }
}

/**
 * Main schema handler.
 * Original class name: $$p0
 */
export class SchemaHandler {
  schema: any
  enums: Map<string, EnumDefinition>
  objects: Map<string, ObjectTypeDefinition>
  session: SessionDefinition
  legacyConfig: LegacyConfigHandler
  computedObjectFields: Record<string, Array<{ parentName: string; fieldName: string }>> = {}
  _objectMapping: any

  constructor(schema: any, objectMapping: any, context: any) {
    this.schema = schema
    this.session = new SessionDefinition(schema.session)
    this.legacyConfig = new LegacyConfigHandler(schema.legacyConfigDef)
    this._objectMapping = objectMapping
    this.enums = new Map()
    for (const enumDef of schema.enums || []) {
      this.enums.set(enumDef.name, new EnumDefinition(enumDef))
    }
    this.objects = new Map()
    for (const objDef of schema.objects) {
      this.objects.set(objDef.name, new ObjectTypeDefinition(objDef, context))
    }
    for (const objDef of schema.objects) {
      this.objects.get(objDef.name)?.constructComputedFields(objDef, this)
    }
    this.enums.forEach(enumObj => enumObj.validate(this))
    this.objects.forEach(obj => obj.validate(this))
  }

  /**
   * Adds a computed object field.
   * Original method: addComputedObject
   */
  addComputedObject(field: any): void {
    if (!field.isComputedObject()) return
    const typeName = field.type.name
    if (!this.computedObjectFields[typeName]) {
      this.computedObjectFields[typeName] = []
    }
    this.computedObjectFields[typeName].push({
      parentName: field.objectDef.name,
      fieldName: field.name,
    })
  }

  /**
   * Gets type by kind and name.
   * Original method: typeWithKind
   */
  typeWithKind(kind: 'enums' | 'objects', name: string): any {
    const collection = this[kind].get(name)
    if (collection) return collection
    throw new CustomError(`${kind} with name '${name}' isn't present in schema`)
  }

  /**
   * Gets enum definition by name.
   * Original method: enumDef
   */
  enumDef({ name }: { name: string }): EnumDefinition {
    return this.typeWithKind('enums', name)
  }

  /**
   * Gets object definition by name.
   * Original method: objectDef
   */
  objectDef({ name }: { name: string }): ObjectTypeDefinition {
    return this.typeWithKind('objects', name)
  }

  /**
   * Serializes the schema handler.
   * Original method: toJSON
   */
  toJSON(): any {
    return this.schema
  }

  /**
   * Gets the field type for an object.
   * Original method: fieldType
   */
  fieldType(objectName: string, fieldName: string): any {
    if (!this.objects.has(objectName)) return
    const obj = this.objects.get(objectName)
    if (obj?.fields.has(fieldName)) {
      return obj.fields.get(fieldName).type
    }
  }

  /**
   * Gets the DSL schema.
   * Original method: dsl
   */
  dsl(): any {
    return this.schema
  }

  /**
   * Gets the object mapping.
   * Original getter: objectMapping
   */
  get objectMapping(): any {
    return this._objectMapping
  }
}

// Refactored exports
export const S = SchemaHandler
// export const YJ = SchemaHandler
// export const EnumDef = EnumDefinition
// export const SessionDef = SessionDefinition
// export const LegacyConfig = LegacyConfigHandler
