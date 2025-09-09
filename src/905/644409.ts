import { oneLine } from 'common-tags'
import { ComputedFieldDef, isComputedField } from '../905/52806'
import { ScalarField } from '../905/320277'
import { throwIf } from '../905/419236'
import { isComputed, isEmbedded, isObjectType } from '../905/552287'
import { ObjectFieldDefinition } from '../905/824218'
import { CustomError } from '../905/962682'

/**
 * Represents an object type definition with fields, computed fields, and validation logic.
 * Original class name: $$c0
 */
export class ObjectTypeDefinition {
  name: string
  fields: Map<string, ScalarField | ObjectFieldDefinition | ComputedFieldDef>
  queriedFields: string[] = []
  needsTransform: boolean
  embedded: boolean
  pendingComputedFields: Set<string> = new Set()
  naturalKey: Set<string>
  deprecated: boolean
  annotations: any
  fieldGuide: any
  def: any

  /**
   * Constructs an ObjectTypeDefinition instance.
   * @param def - The object type definition.
   * @param fieldGuideMap - Optional field guide mapping.
   */
  constructor(def: any, fieldGuideMap?: Record<string, any>) {
    this.def = def
    this.name = def.name
    this.fields = new Map()
    this.embedded = def.embedded
    this.naturalKey = def.naturalKey
    this.annotations = def.annotations
    this.deprecated = def.deprecated
    if (fieldGuideMap && this.name in fieldGuideMap) {
      this.fieldGuide = fieldGuideMap[this.name]
    }
    for (const field of def.fields) {
      // Determine firstSeen date if available
      const firstSeen = this.fieldGuide && field.name in this.fieldGuide ? new Date(this.fieldGuide[field.name].firstSeen) : undefined
      if (isObjectType(field)) {
        this.fields.set(field.name, new ObjectFieldDefinition(field, firstSeen))
        if (isEmbedded(field)) {
          this.queriedFields.push(field.name)
        }
      }
      else if (isComputed(field)) {
        this.pendingComputedFields.add(field.name)
      }
      else {
        this.fields.set(field.name, new ScalarField(field, firstSeen))
        this.queriedFields.push(field.name)
      }
    }

    // Determine if any field needs transformation
    this.needsTransform = def.fields.some(({
      type,
    }) => isDateType(type) || type.kind === 'list' && isDateType(type.ofType))
  }

  /**
   * Constructs computed fields for the object type.
   * Original method name: constructComputedFields
   * @param def - The object type definition.
   * @param schema - The schema instance.
   */
  constructComputedFields(def: any, schema: any): void {
    for (const field of def.fields) {
      if (isComputed(field)) {
        const firstSeen = this.fieldGuide && field.name in this.fieldGuide ? new Date(this.fieldGuide[field.name].firstSeen) : undefined
        const computedField = new ComputedFieldDef(field, this, schema, firstSeen)
        this.fields.set(field.name, computedField)
        this.pendingComputedFields.delete(field.name)
        schema.addComputedObject(computedField)
      }
    }
  }

  /**
   * Validates the object type definition.
   * Original method name: validate
   * @param schema - The schema instance.
   */
  validate(schema: any): void {
    if (this.name === 'root') {
      for (const field of this.fields.values()) {
        if (field instanceof ObjectFieldDefinition) {
          if (field.embedded) {
            throw new CustomError(oneLine`
              root fields cannot be embedded type, but '${field.name}'
              is embedded`)
          }
        }
        else if (!(field instanceof ComputedFieldDef)) {
          throw new CustomError(oneLine`
            root fields must be of object type or computed field type, but '${field.name}' is
            '${field.type.kind}'`)
        }
      }
    }
    else {
      if (!this.embedded) {
        this.fieldDef('id')
      }
    }
    for (const field of this.fields.values()) {
      if (isComputedField(field) && field.viewDef === undefined) {
        throw new CustomError(`Error constructing lazy viewDef for computed field '${field.name}' of object '${this.name}'`)
      }
      field.validate(schema, this)
    }
  }

  /**
   * Retrieves the field definition by name.
   * Original method name: fieldDef
   * @param fieldName - The name of the field.
   * @returns The field definition.
   */
  fieldDef(fieldName: string): ScalarField | ObjectFieldDefinition | ComputedFieldDef {
    const field = this.fields.get(fieldName)
    if (field)
      return field
    if (this.pendingComputedFields.has(fieldName)) {
      throw new CustomError(oneLine`
        field '${fieldName}' is a computed field of '${this.name}', but computed fields haven't yet been constructed.
        You may need to re-order objects in the Schema definition.
      `)
    }
    throw new CustomError(oneLine`
      field '${fieldName}' isn't present in object type '${this.name}'`)
  }

  /**
   * Reads a plain object and transforms fields if needed.
   * Original method name: readPlainObject
   * @param obj - The plain object to read.
   * @returns The transformed object.
   */
  readPlainObject(obj: Record<string, any>): Record<string, any> {
    if (!this.needsTransform)
      return obj
    const result: Record<string, any> = {
      id: obj.id,
    }
    for (const [fieldName, {
      type,
    }] of this.fields.entries()) {
      if (!(fieldName in obj))
        continue
      const value = obj[fieldName]
      result[fieldName] = this.readPlainObjectField(fieldName, value, type)
    }
    return result
  }

  /**
   * Reads and transforms a single field value if needed.
   * Original method name: readPlainObjectField
   * @param fieldName - The field name.
   * @param value - The field value.
   * @param type - The field type.
   * @returns The transformed value.
   */
  readPlainObjectField(fieldName: string, value: any, type?: any): any {
    if (!this.needsTransform)
      return value
    if (!type)
      type = this.fields.get(fieldName)?.type
    if (value !== null) {
      if (isDateType(type))
        return parseDate(value)
      if (type.kind === 'list' && isDateType(type.ofType))
        return value.map(parseDate)
    }
    return value
  }
}

/**
 * Checks if a type is a date or datetime type.
 * Original function name: u
 * @param type - The type to check.
 * @returns True if the type is date or datetime.
 */
function isDateType(type: any): boolean {
  return type.kind === 'date' || type.kind === 'datetime'
}

/**
 * Parses a date value from a string.
 * Original function name: p
 * @param value - The value to parse.
 * @returns The parsed Date object.
 */
function parseDate(value: any): Date {
  throwIf(typeof value !== 'string', 'readDateFromString: input is not a string')
  return new Date(value)
}

// Export with refactored name
export const D = ObjectTypeDefinition
