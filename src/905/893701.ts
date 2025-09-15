/* Refactored from /src/905/893701.ts
  - Added types and clearer names
  - Split complex logic into helpers
  - Preserved behavior and exports
  - Comments include original identifiers for traceability
*/

// Types
type Id = string | number
type SchemaMap = Record<string, any>
type EntitiesStore = Record<string, Record<Id, any>>
type Visit = (
  input: any,
  parent: any,
  key: string | number | null,
  schema: any,
  addEntity: AddEntity,
  visitedEntities: Record<string, Record<Id, any[]>>
) => any
type AddEntity = (entity: EntitySchema, processedEntity: any, input: any, parent: any, key: any) => void
type GetEntity = (id: Id, schema: EntitySchema) => any
type Denormalizer = (input: any, schema: any) => any

// Helper: check for Immutable.js-like structures
// original: n
function isMaybeImmutable(value: any): boolean {
  return !!(
    value
    && typeof (value as any).hasOwnProperty === 'function'
    && (Object.prototype.hasOwnProperty.call((value), '__ownerID')
      || ((value as any)._map && Object.prototype.hasOwnProperty.call((value)._map, '__ownerID')))
  )
}

// Helper: apply schema reducer to Immutable-like map
// original: r(e, t, i)
function reduceImmutableWithSchema(schema: SchemaMap, immutable: any, denormalizeField: Denormalizer) {
  return Object.keys(schema).reduce((acc: any, keyName: string) => {
    const key = `${keyName}`
    return acc.has(key) ? acc.set(key, denormalizeField(acc.get(key), (schema as any)[key])) : acc
  }, immutable)
}

// Base class for polymorphic schema (Union/Values/Array)
// original: class a
class PolymorphicSchemaBase {
  _schemaAttribute?: (input: any, parent?: any, key?: any) => string
  schema: any

  constructor(schema: any, schemaAttribute?: string | ((input: any, parent?: any, key?: any) => string)) {
    if (schemaAttribute) {
      this._schemaAttribute
      = typeof schemaAttribute === 'string' ? (input: any) => (input as any)[schemaAttribute] : schemaAttribute
    }
    this.define(schema)
  }

  // original: isSingleSchema getter
  get isSingleSchema(): boolean {
    return !this._schemaAttribute
  }

  // original: define
  define(schema: any): void {
    this.schema = schema
  }

  // original: getSchemaAttribute
  getSchemaAttribute(input: any, parent?: any, key?: any): string | undefined {
    return !this.isSingleSchema && this._schemaAttribute!(input, parent, key)
  }

  // original: inferSchema
  inferSchema(input: any, parent?: any, key?: any) {
    if (this.isSingleSchema)
      return this.schema
    const schemaKey = this.getSchemaAttribute(input, parent, key)
    return this.schema[schemaKey as any]
  }

  // original: normalizeValue
  normalizeValue(
    input: any,
    parent: any,
    key: any,
    visit: Visit,
    addEntity: AddEntity,
    visitedEntities: Record<string, Record<Id, any[]>>,
  ) {
    const schema = this.inferSchema(input, parent, key)
    if (!schema)
      return input
    const idOrValue = visit(input, parent, key, schema, addEntity, visitedEntities)
    return this.isSingleSchema || idOrValue == null
      ? idOrValue
      : {
          id: idOrValue,
          schema: this.getSchemaAttribute(input, parent, key),
        }
  }

  // original: denormalizeValue
  denormalizeValue(input: any, denormalizeField: Denormalizer) {
    const schemaKey = isMaybeImmutable(input) ? input.get('schema') : (input as any).schema
    return this.isSingleSchema || schemaKey
      ? denormalizeField(
          ((this.isSingleSchema ? undefined : isMaybeImmutable(input) ? input.get('id') : (input as any).id) as any)
          || input,
          this.isSingleSchema ? this.schema : this.schema[schemaKey],
        )
      : input
  }
}

// Helpers
// original: s
function pickSingleSchema(arr: any[]) {
  if (Array.isArray(arr) && arr.length > 1) {
    throw new Error(`Expected schema definition to be a single schema, but found ${arr.length}.`)
  }
  return arr[0]
}

// original: o
const valuesOf = (input: any): any[] => (Array.isArray(input) ? input : Object.keys(input).map(k => input[k]))

// original: l
const getKeyFromMaybeImmutable = (key: string) => (obj: any) => (isMaybeImmutable(obj) ? obj.get(key) : obj[key])

// Entity Schema
// original: class d
class EntitySchema {
  private _key: string
  private _getId: (input: any, parent?: any, key?: any) => Id
  private _idAttribute: string | ((input: any, parent?: any, key?: any) => Id)
  private _mergeStrategy: (entityA: any, entityB: any) => any
  private _processStrategy: (input: any, parent?: any, key?: any) => any
  private _fallbackStrategy: (id: Id, schema: EntitySchema) => any
  schema: SchemaMap = {}

  constructor(
    key: string,
   definition: SchemaMap = {},
   options: {
     idAttribute?: string | ((input: any, parent?: any, key?: any) => Id)
     mergeStrategy?: (entityA: any, entityB: any) => any
     processStrategy?: (input: any, parent?: any, key?: any) => any
     fallbackStrategy?: (id: Id, schema: EntitySchema) => any
   } = {},
  ) {
    if (!key || typeof key !== 'string')
      throw new Error(`Expected a string key for Entity, but found ${key}.`)

    const {
      idAttribute = 'id',
      mergeStrategy = (a: any, b: any) => ({ ...a, ...b }),
      processStrategy = (input: any) => ({ ...input }),
      fallbackStrategy = (_id: Id, _schema: EntitySchema) => void 0,
    } = options

    this._key = key
    this._getId = typeof idAttribute === 'function' ? (idAttribute as any) : getKeyFromMaybeImmutable(idAttribute)
    this._idAttribute = idAttribute
    this._mergeStrategy = mergeStrategy
    this._processStrategy = processStrategy
    this._fallbackStrategy = fallbackStrategy
    this.define(definition)
  }

  // original: key getter
  get key(): string {
    return this._key
  }

  // original: idAttribute getter
  get idAttribute(): string | ((input: any, parent?: any, key?: any) => Id) {
    return this._idAttribute
  }

  // original: define
  define(definition: SchemaMap): void {
    this.schema = Object.keys(definition).reduce((acc, k) => {
      const v = definition[k]
      return { ...acc, [k]: v }
    }, this.schema || {})
  }

  // original: getId
  getId(input: any, parent?: any, key?: any): Id {
    return this._getId(input, parent, key)
  }

  // original: merge
  merge(entityA: any, entityB: any) {
    return this._mergeStrategy(entityA, entityB)
  }

  // original: fallback
  fallback(id: Id, schema: EntitySchema) {
    return this._fallbackStrategy(id, schema)
  }

  // original: normalize
  normalize(
    input: any,
    parent: any,
    key: any,
    visit: Visit,
    addEntity: AddEntity,
    visitedEntities: Record<string, Record<Id, any[]>>,
  ) {
    const id = this.getId(input, parent, key)
    const entityKey = this.key

    if (!(entityKey in visitedEntities))
      visitedEntities[entityKey] = {}
    if (!(id in visitedEntities[entityKey]))
      visitedEntities[entityKey][id] = []
    if (visitedEntities[entityKey][id].includes(input))
      return id

    visitedEntities[entityKey][id].push(input)

    const processed = this._processStrategy(input, parent, key)

    Object.keys(this.schema).forEach((schemaKey) => {
      if (Object.prototype.hasOwnProperty.call(processed, schemaKey) && typeof processed[schemaKey] === 'object') {
        const fieldDef = this.schema[schemaKey]
        const resolved = typeof fieldDef === 'function' ? fieldDef(input) : fieldDef
        processed[schemaKey] = visit(processed[schemaKey], processed, schemaKey, resolved, addEntity, visitedEntities)
      }
    })

    addEntity(this, processed, input, parent, key)
    return id
  }

  // original: denormalize
  denormalize(input: any, denormalizeField: Denormalizer) {
    if (isMaybeImmutable(input)) {
      return reduceImmutableWithSchema(this.schema, input, denormalizeField)
    }
    Object.keys(this.schema).forEach((k) => {
      if (Object.prototype.hasOwnProperty.call(input, k)) {
        const def = this.schema[k];
        (input as any)[k] = denormalizeField((input as any)[k], def)
      }
    })
    return input
  }
}

// Normalize helpers
// original: c
function normalizeObjectWithSchema(
  schema: SchemaMap,
  input: any,
  parent: any,
  key: any,
  visit: Visit,
  addEntity: AddEntity,
  visitedEntities: Record<string, Record<Id, any[]>>,
) {
  const output: any = { ...input }
  Object.keys(schema).forEach((k) => {
    const field = schema[k]
    const resolvedField = typeof field === 'function' ? field(input) : field
    const normalized = visit(input[k], input, k, resolvedField, addEntity, visitedEntities)
    if (normalized == null) {
      delete output[k]
    }
    else {
      output[k] = normalized
    }
  })
  return output
}

// original: u
function denormalizeObjectWithSchema(schema: SchemaMap, input: any, denormalizeField: Denormalizer) {
  if (isMaybeImmutable(input)) {
    return reduceImmutableWithSchema(schema, input, denormalizeField)
  }
  const out: any = { ...input }
  Object.keys(schema).forEach((k) => {
    if (out[k] != null) {
      out[k] = denormalizeField(out[k], (schema as any)[k])
    }
  })
  return out
}

// original: p
const normalizeRecursive: Visit = (input, parent, key, schema, addEntity, visited) =>
  typeof input === 'object' && input
    ? typeof schema !== 'object' || (schema.normalize && typeof schema.normalize === 'function')
      ? schema.normalize(input, parent, key, normalizeRecursive, addEntity, visited)
      : (Array.isArray(schema) ? normalizeArray : normalizeObjectWithSchema)(
          schema as any,
          input,
          parent,
          key,
          normalizeRecursive,
          addEntity,
          visited,
        )
    : input

// original: array normalize branch inside p -> extracted
function normalizeArray(
  schemaArr: any[],
  input: any,
  parent: any,
  key: any,
  visit: Visit,
  addEntity: AddEntity,
  visited: Record<string, Record<Id, any[]>>,
) {
  const schema = pickSingleSchema(schemaArr)
  return valuesOf(input).map(item => visit(item, parent, key, schema, addEntity, visited)).filter(v => v != null)
}

// original: m
function createEntityMerger(entities: EntitiesStore): AddEntity {
  return (entitySchema, processedEntity, _input, parent, key) => {
    const entityKey = entitySchema.key
    const id = entitySchema.getId(_input, parent, key)
    if (!(entityKey in entities))
      entities[entityKey] = {}
    const existing = entities[entityKey][id]
    entities[entityKey][id] = existing ? entitySchema.merge(existing, processedEntity) : processedEntity
  }
}

// Schema library (Array, Entity, Object, Union, Values)
// original: $$h2
const SchemaLibrary = {
  // original: Array extends a
  Array: class ArraySchema extends PolymorphicSchemaBase {
    normalize(input: any, parent: any, key: any, visit: Visit, addEntity: AddEntity, visited: any) {
      return valuesOf(input)
        .map(item => this.normalizeValue(item, parent, key, visit, addEntity, visited))
        .filter(v => v != null)
    }

    denormalize(input: any, denormalizeField: Denormalizer) {
      return input && input.map ? input.map((v: any) => this.denormalizeValue(v, denormalizeField)).filter((v: any) => v != null) : input
    }
  },

  // original: Entity: d
  Entity: EntitySchema,

  // original: Object
  Object: class ObjectSchema {
    schema: SchemaMap = {}
    constructor(definition: SchemaMap) {
      this.define(definition)
    }

    define(definition: SchemaMap) {
      this.schema = Object.keys(definition).reduce((acc, k) => ({ ...acc, [k]: definition[k] }), this.schema || {})
    }

    normalize(
      input: any,
      parent: any,
      key: any,
      visit: Visit,
      addEntity: AddEntity,
      visitedEntities: Record<string, Record<Id, any[]>>,
    ) {
      return normalizeObjectWithSchema(this.schema, input, parent, key, visit, addEntity, visitedEntities)
    }

    denormalize(input: any, denormalizeField: Denormalizer) {
      return denormalizeObjectWithSchema(this.schema, input, denormalizeField)
    }
  },

  // original: Union extends a
  Union: class UnionSchema extends PolymorphicSchemaBase {
    constructor(schema: any, options?: { schemaAttribute?: string | ((input: any, parent?: any, key?: any) => string) }) {
      if (!options || !options.schemaAttribute) {
        throw new Error('Expected option "schemaAttribute" not found on UnionSchema.')
      }
      super(schema, options.schemaAttribute)
    }

    normalize(input: any, parent: any, key: any, visit: Visit, addEntity: AddEntity, visited: any) {
      return this.normalizeValue(input, parent, key, visit, addEntity, visited)
    }

    denormalize(input: any, denormalizeField: Denormalizer) {
      return this.denormalizeValue(input, denormalizeField)
    }
  },

  // original: Values extends a
  Values: class ValuesSchema extends PolymorphicSchemaBase {
    normalize(input: Record<string, any>, parent: any, key: any, visit: Visit, addEntity: AddEntity, visited: any) {
      return Object.keys(input).reduce((acc: any, k) => {
        const value = input[k]
        return value != null
          ? { ...acc, [k]: this.normalizeValue(value, input, k, visit, addEntity, visited) }
          : acc
      }, {})
    }

    denormalize(input: Record<string, any>, denormalizeField: Denormalizer) {
      return Object.keys(input).reduce((acc: any, k) => {
        const value = input[k]
        return { ...acc, [k]: this.denormalizeValue(value, denormalizeField) }
      }, {})
    }
  },
}

// Normalize entry
// original: $$g1
function normalizeRoot(input: any, schema: any) {
  if (!input || typeof input !== 'object') {
    throw new Error(
      `Unexpected input given to normalize. Expected type to be "object", found "${
        input === null ? 'null' : typeof input
      }".`,
    )
  }
  const entities: EntitiesStore = {}
  const addEntity = createEntityMerger(entities)
  return {
    entities,
    result: normalizeRecursive(input, input, null, schema, addEntity, {}),
  }
}

// Denormalize helpers
// original: f
function getOrBuildEntity(id: Id, schema: EntitySchema, denormalizeField: Denormalizer, getEntity: GetEntity, cache: Record<string, Record<Id, any>>) {
  let entity = getEntity(id, schema)
  if (void 0 === entity && schema instanceof EntitySchema) {
    entity = schema.fallback(id, schema)
  }
  if (typeof entity !== 'object' || entity === null)
    return entity

  if (!cache[schema.key])
    cache[schema.key] = {}
  if (!cache[schema.key][id]) {
    cache[schema.key][id] = entity
    cache[schema.key][id] = schema.denormalize(entity, denormalizeField)
  }
  return cache[schema.key][id]
}

// original: A
function buildEntityGetter(entities: any): GetEntity {
  const isImm = isMaybeImmutable(entities)
  return (id: Id, schema: EntitySchema) => {
    const key = schema.key
    return typeof id === 'object'
      ? id
      : isImm
        ? (entities as any).getIn([key, id.toString()])
        : entities[key] && (entities[key] as any)[id]
  }
}

// original: _
function buildDenormalizer(entities: any): Denormalizer {
  const cache: Record<string, Record<Id, any>> = {}
  const getEntity = buildEntityGetter(entities)
  return function denormalizeField(value: any, schema: any): any {
    if (typeof schema !== 'object' || (schema.denormalize && typeof schema.denormalize === 'function')) {
      if (value == null)
        return value
      return schema instanceof EntitySchema ? getOrBuildEntity(value, schema, denormalizeField, getEntity, cache) : schema.denormalize(value, denormalizeField)
    }
    return (Array.isArray(schema) ? denormalizeArray : denormalizeObjectWithSchema)(schema as any, value, denormalizeField)
  }
}

// original: array denormalize branch inside _
function denormalizeArray(schemaArr: any[], input: any, denormalizeField: Denormalizer) {
  const schema = pickSingleSchema(schemaArr)
  return input && input.map ? input.map((v: any) => denormalizeField(v, schema)).filter((v: any) => v != null) : input
}

// Denormalize entry
// original: $$y0
function denormalizeRoot(input: any, schema: any, entities: any) {
  if (void 0 !== input) {
    return buildDenormalizer(entities)(input, schema)
  }
  return undefined
}

// Exports (preserve original export names and add readable aliases)
// original: export function $$y0, $$g1, and export const NU = $$y0; S8 = $$g1; wQ = $$h2
export function $$y0(e: any, t: any, i: any) {
  return denormalizeRoot(e, t, i)
}
export function $$g1(e: any, t: any) {
  return normalizeRoot(e, t)
}

export const NU = denormalizeRoot // original alias: NU = $$y0
export const S8 = normalizeRoot // original alias: S8 = $$g1
export const wQ = SchemaLibrary // original alias: wQ = $$h2

// Also export core classes/types for clarity
export { denormalizeRoot, EntitySchema, normalizeRoot, PolymorphicSchemaBase, SchemaLibrary }
