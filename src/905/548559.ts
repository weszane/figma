import { decodeBinarySchema } from '../905/169464'
import { HashMap } from '../905/543209'
import { compileSchema } from '../905/691474'
import { ByteBuffer } from '../905/712081'
import { parseSchema } from '../905/834634'
import { BufferHashReader } from '../905/962010'

/**
 * Checks if eval is allowed in the current environment.
 * Original: n (variable), c (eval alias)
 */
let isEvalAllowed: boolean
// eslint-disable-next-line no-eval
const evalAlias = eval
try {
  isEvalAllowed = evalAlias('true')
}
catch {
  isEvalAllowed = false
}

/**
 * Creates a KiwiCodec instance, optionally compiling the schema if eval is allowed.
 * Original: $$u1
 * @param schema - The schema to process.
 * @param options - Additional options.
 * @param sensitiveFields - Set of sensitive field names.
 * @param shouldIgnoreForRedaction - Regex for fields to ignore during redaction.
 * @returns A KiwiCodec instance.
 */


/**
 * KiwiCodec class for encoding/decoding schemas.
 * Original: $$p0
 */
export class KiwiCodec {
  [x: string]: any
  private definitions: Record<string, any> = {}
  private fieldValueToIndex: Record<string, Record<number, number>> = {}
  private enums: Record<string, Record<string | number, string | number>> = {}
  private nonArrayDefinitionsToDedup: Set<string>
  private arrayDefinitionsToDedup: Set<string>
  private sensitiveFields: Set<string>
  private shouldIgnoreForRedaction: RegExp

  constructor(
    schema: string | Uint8Array | ByteBuffer | any,
    options?: string[],
    sensitiveFields?: Set<string>,
    shouldIgnoreForRedaction?: RegExp,
  ) {
    this.sensitiveFields = sensitiveFields ?? new Set()
    this.shouldIgnoreForRedaction = shouldIgnoreForRedaction ?? /$^/

    // Parse schema if needed
    if (typeof schema === 'string') {
      schema = parseSchema(schema)
    }
    else if (schema instanceof Uint8Array || schema instanceof ByteBuffer) {
      schema = decodeBinarySchema(schema)
    }

    // Process definitions
    for (const def of schema.definitions) {
      this.definitions[def.name] = def
    }

    for (const def of schema.definitions) {
      if (def.kind === 'ENUM') {
        this.processEnum(def)
      }
      else if (def.kind === 'STRUCT' || def.kind === 'MESSAGE') {
        this.processStructOrMessage(def)
      }
      else {
        throw new Error(`Invalid definition kind ${def.kind}`)
      }
    }

    // Initialize dedup sets
    this.nonArrayDefinitionsToDedup = new Set()
    this.arrayDefinitionsToDedup = new Set()
    if (options) {
      this.nonArrayDefinitionsToDedup = new Set(
        options.filter((e: string) => /^[A-Z_]\w*$/i.test(e)),
      )
      this.arrayDefinitionsToDedup = new Set(
        options
          .filter((e: string) => /^[A-Z_]\w*\[\]$/i.test(e))
          .map((e: string) => e.slice(0, -2)),
      )
      if (this.arrayDefinitionsToDedup.size + this.nonArrayDefinitionsToDedup.size !== options.length) {
        console.warn('Some definitions to dedup are invalid identifiers, skipping...')
      }
    }
  }

  /**
   * Processes an ENUM definition.
   * Original: part of constructor loop
   */
  private processEnum(def: any): void {
    const enumMap: Record<string | number, string | number> = {}
    for (const field of def.fields) {
      enumMap[field.name] = field.value
      enumMap[field.value] = field.name
    }
    this.enums[def.name] = enumMap;
    (this as any)[def.name] = enumMap
  }

  /**
   * Processes a STRUCT or MESSAGE definition.
   * Original: part of constructor loop
   */
  private processStructOrMessage(def: any): void {
    (this as any)[`decode${def.name}`] = (data: any, cache?: any) => this.decodeObject(def, data, cache);
    (this as any)[`encode${def.name}`] = (data: any) => this.encodeObject(def, data);
    (this as any)[`redact${def.name}`] = (data: any) => this.redactObject(def, data)
    if (def.kind === 'MESSAGE') {
      const fieldMap: Record<number, number> = {}
      for (let i = 0; i < def.fields.length; i++) {
        fieldMap[def.fields[i].value] = i
      }
      this.fieldValueToIndex[def.name] = fieldMap
    }
  }

  /**
   * Decodes data for a given definition name.
   * Original: decode
   */
  decode(defName: string, data: any, cache?: any): any {
    const def = this.definitions[defName]
    if (!def)
      throw new Error(`Invalid definition ${defName}`)
    return this.decodeObject(def, data, cache)
  }

  /**
   * Encodes data for a given definition name.
   * Original: encode
   */
  encode(defName: string, data: any): Uint8Array {
    const def = this.definitions[defName]
    if (!def)
      throw new Error(`Invalid definition ${defName}`)
    return this.encodeObject(def, data)
  }

  /**
   * Decodes a single field.
   * Original: decodeSingleField
   */
  private decodeSingleField(field: any, buffer: ByteBuffer, cache?: any): any {
    switch (field.type) {
      case 'bool': return !!buffer.readByte()
      case 'byte': return buffer.readByte()
      case 'int': return buffer.readVarInt()
      case 'uint': return buffer.readVarUint()
      case 'int64': return buffer.readVarInt64()
      case 'uint64': return buffer.readVarUint64()
      case 'float': return buffer.readVarFloat()
      case 'string': return buffer.readString()
      default: {
        const def = this.definitions[field.type]
        if (!def)
          throw new Error(`Invalid type ${field.type}`)
        if (def.kind === 'ENUM')
          return this.enums[field.type][buffer.readVarUint()]
        if (def.kind === 'STRUCT' || def.kind === 'MESSAGE')
          return this.decodeObject(def, buffer, cache)
        throw new Error(`Invalid definition kind ${def.kind}`)
      }
    }
  }

  /**
   * Encodes a single field.
   * Original: encodeSingleField
   */
  private encodeSingleField(field: any, value: any, buffer: ByteBuffer): void {
    switch (field.type) {
      case 'bool':
      case 'byte': buffer.writeByte(value); break
      case 'int': buffer.writeVarInt(value); break
      case 'uint': buffer.writeVarUint(value); break
      case 'int64': buffer.writeVarInt64(value); break
      case 'uint64': buffer.writeVarUint64(value); break
      case 'float': buffer.writeVarFloat(value); break
      case 'string': buffer.writeString(value); break
      default: {
        const def = this.definitions[field.type]
        if (!def)
          throw new Error(`Invalid type ${field.type}`)
        if (def.kind === 'ENUM') {
          const enumValue = this.enums[field.type][value]
          if (enumValue === undefined)
            throw new Error(`Invalid value ${JSON.stringify(value)} for enum ${field.type}`)
          buffer.writeVarUint(enumValue as number)
        }
        else if (def.kind === 'STRUCT' || def.kind === 'MESSAGE') {
          this.encodeObject(def, value, buffer)
        }
        else {
          throw new Error(`Invalid definition kind ${def.kind}`)
        }
      }
    }
  }

  /**
   * Hashes a single field.
   * Original: hashSingleField
   */
  private hashSingleField(field: any, buffer: BufferHashReader): void {
    switch (field.type) {
      case 'bool':
      case 'byte': buffer.readByte(); break
      case 'int': buffer.readVarInt(); break
      case 'uint': buffer.readVarUint(); break
      case 'int64': buffer.readVarInt64(); break
      case 'uint64': buffer.readVarUint64(); break
      case 'float': buffer.readVarFloat(); break
      case 'string': buffer.readString(); break
      default: {
        const def = this.definitions[field.type]
        if (!def)
          throw new Error(`Invalid type ${field.type}`)
        if (def.kind === 'ENUM')
          buffer.readVarUint()
        else if (def.kind === 'STRUCT' || def.kind === 'MESSAGE')
          this.hashObject(def, buffer)
        else throw new Error(`Invalid definition kind ${def.kind}`)
      }
    }
  }

  /**
   * Redacts a single field.
   * Original: redactSingleField
   */
  private redactSingleField(field: any, buffer: ByteBuffer): void {
    switch (field.type) {
      case 'bool':
      case 'byte': buffer.readByte(); break
      case 'int': buffer.readVarInt(); break
      case 'uint': buffer.readVarUint(); break
      case 'int64': buffer.readVarInt64(); break
      case 'uint64': buffer.readVarUint64(); break
      case 'float': buffer.readVarFloat(); break
      case 'string':
        if (this.sensitiveFields.has(field.name)) {
          buffer.redactString(this.shouldIgnoreForRedaction)
        }
        else {
          buffer.readString()
        }
        break
      default: {
        const def = this.definitions[field.type]
        if (!def)
          throw new Error(`Invalid type ${field.type}`)
        if (def.kind === 'ENUM')
          buffer.readVarUint()
        else if (def.kind === 'STRUCT' || def.kind === 'MESSAGE')
          this.redactObject(def, buffer)
        else throw new Error(`Invalid definition kind ${def.kind}`)
      }
    }
  }

  /**
   * Decodes an array field.
   * Original: decodeArrayField
   */
  private decodeArrayField(field: any, buffer: ByteBuffer, cache?: any) {
    if (field.type === 'byte')
      return buffer.readByteArray()

    let dedupKey = null
    let result = null

    if (cache && this.arrayDefinitionsToDedup.has(field.type)) {
      const hashReader = new BufferHashReader(buffer.getNewWindowFromRight())
      const length = hashReader.readVarUint()
      for (let i = 0; i < length; i++) this.hashSingleField(field, hashReader)
      dedupKey = {
        hash: hashReader.value(),
        data: hashReader.windowToUint8Array(),
        defName: `${field.type}[]`,
      }
      const cached = cache.get(dedupKey, null)
      if (cached !== null) {
        buffer.extendWindowTo(hashReader.bb())
        result = cached
      }
    }

    if (result === null) {
      const length = buffer.readVarUint()
      result = Array.from({ length })
      for (let i = 0; i < length; i++) {
        result[i] = this.decodeSingleField(field, buffer, cache)
      }
      if (dedupKey !== null)
        cache.set(dedupKey, result)
    }

    return result
  }

  /**
   * Decodes an object.
   * Original: decodeObject
   */
  private decodeObject(def: any, buffer: any, cache?: any): any {
    if (!(buffer instanceof ByteBuffer))
      buffer = new ByteBuffer(buffer)

    let dedupKey = null
    if (cache && this.nonArrayDefinitionsToDedup.has(def.name)) {
      if (!(cache instanceof HashMap))
        throw new Error('optDedupCache must be instance of HashTable')
      const hashReader = new BufferHashReader(buffer.getNewWindowFromRight())
      this.hashObject(def, hashReader)
      dedupKey = {
        hash: hashReader.value(),
        data: hashReader.windowToUint8Array(),
        defName: def.name,
      }
      const cached = cache.get(dedupKey, null)
      if (cached !== null) {
        buffer.extendWindowTo(hashReader.bb())
        return cached
      }
    }

    const obj: any = {}
    if (def.kind === 'MESSAGE') {
      while (true) {
        const tag = buffer.readVarUint()
        if (tag === 0)
          break
        const index = this.fieldValueToIndex[def.name][tag]
        if (index === undefined)
          throw new Error('Attempted to parse invalid message')
        const field = def.fields[index]
        const fieldCache = field.isDeprecated ? null : cache
        const value = field.isArray
          ? this.decodeArrayField(field, buffer, fieldCache)
          : this.decodeSingleField(field, buffer, fieldCache)
        if (!field.isDeprecated)
          obj[field.name] = value
      }
    }
    else {
      for (const field of def.fields) {
        const fieldCache = field.isDeprecated ? null : cache
        const value = field.isArray
          ? this.decodeArrayField(field, buffer, fieldCache)
          : this.decodeSingleField(field, buffer, fieldCache)
        if (!field.isDeprecated)
          obj[field.name] = value
      }
    }

    if (dedupKey !== null)
      cache.set(dedupKey, obj)
    return obj
  }

  /**
   * Hashes an object.
   * Original: hashObject
   */
  private hashObject(def: any, buffer: BufferHashReader): void {
    if (def.kind === 'MESSAGE') {
      while (true) {
        const tag = buffer.readVarUint()
        if (tag === 0)
          break
        const index = this.fieldValueToIndex[def.name][tag]
        if (index === undefined)
          throw new Error('Attempted to parse invalid message')
        const field = def.fields[index]
        if (field.isArray) {
          if (field.type === 'byte') {
            buffer.readByteArray()
          }
          else {
            const length = buffer.readVarUint()
            for (let i = 0; i < length; i++) this.hashSingleField(field, buffer)
          }
        }
        else {
          this.hashSingleField(field, buffer)
        }
      }
    }
    else {
      for (const field of def.fields) {
        if (field.isArray) {
          if (field.type === 'byte') {
            buffer.readByteArray()
          }
          else {
            const length = buffer.readVarUint()
            for (let i = 0; i < length; i++) this.hashSingleField(field, buffer)
          }
        }
        else {
          this.hashSingleField(field, buffer)
        }
      }
    }
  }

  /**
   * Encodes an object.
   * Original: encodeObject
   */
  private encodeObject(def: any, obj: any, buffer?: ByteBuffer): Uint8Array | void {
    const isNewBuffer = !buffer
    buffer = buffer || new ByteBuffer()

    for (const field of def.fields) {
      if (field.isDeprecated)
        continue
      const value = obj[field.name]
      if (value != null) {
        if (def.kind === 'MESSAGE')
          buffer.writeVarUint(field.value)
        if (field.isArray) {
          if (field.type === 'byte') {
            buffer.writeByteArray(value)
          }
          else {
            buffer.writeVarUint(value.length)
            for (let i = 0; i < value.length; i++) this.encodeSingleField(field, value[i], buffer)
          }
        }
        else {
          this.encodeSingleField(field, value, buffer)
        }
      }
      else if (def.kind === 'STRUCT') {
        throw new Error(`Missing required field ${field.name}`)
      }
    }

    if (def.kind === 'MESSAGE')
      buffer.writeVarUint(0)
    if (isNewBuffer)
      return buffer.toUint8Array()
  }

  /**
   * Redacts an object.
   * Original: redactObject
   */
  private redactObject(def: any, buffer: any): void {
    if (!(buffer instanceof ByteBuffer))
      buffer = new ByteBuffer(buffer)
    if (def.kind === 'MESSAGE') {
      while (true) {
        const tag = buffer.readVarUint()
        if (tag === 0)
          break
        const index = this.fieldValueToIndex[def.name][tag]
        if (index === undefined)
          throw new Error('Attempted to parse invalid message')
        const field = def.fields[index]
        if (field.isArray) {
          if (field.type === 'byte') {
            buffer.readByteArray()
          }
          else {
            const length = buffer.readVarUint()
            for (let i = 0; i < length; i++) this.redactSingleField(field, buffer)
          }
        }
        else {
          this.redactSingleField(field, buffer)
        }
      }
    }
    else {
      for (const field of def.fields) {
        if (field.isArray) {
          if (field.type === 'byte') {
            buffer.readByteArray()
          }
          else {
            const length = buffer.readVarUint()
            for (let i = 0; i < length; i++) this.redactSingleField(field, buffer)
          }
        }
        else {
          this.redactSingleField(field, buffer)
        }
      }
    }
  }

  /**
   * Creates a deduplication cache.
   * Original: makeDedupCache
   */
  makeDedupCache() {
    const arrayEquals = (a: Uint8Array, b: Uint8Array): boolean => {
      if (a.length !== b.length)
        return false
      for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i])
          return false
      }
      return true
    }
    return new HashMap(
      (key: any) => key.hash,
      (a: any, b: any) => a.defName === b.defName && arrayEquals(a.data, b.data),
    )
  }
}

export const KiwiCodecAlias = KiwiCodec
export const createKiwiCodecAlias = createKiwiCodec
export function createKiwiCodec(
  schema: string | Uint8Array | ByteBuffer | any,
  options?: any,
  sensitiveFields?: Set<string>,
  shouldIgnoreForRedaction?: any,
): KiwiCodec {
  return !schema && isEvalAllowed
    ? compileSchema(options, Array.from(sensitiveFields || []), shouldIgnoreForRedaction)
    : new KiwiCodec(schema, options, sensitiveFields, shouldIgnoreForRedaction)
}
