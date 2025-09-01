// Original file: /Users/allen/sigma-main/src/905/169464.ts
// Refactored to improve readability, maintainability, and type safety.
// Grouped related functionality, added TypeScript types, split large functions,
// converted to named functions, simplified conditionals, and added JSDoc documentation.
// Ensured imports and exports match the refactored names.

import type { ParsedSchema, SchemaDefinition } from './834634'
import { ByteBuffer } from '../905/712081'

// Define types for better type safety and clarity
interface Field {
  name: string
  line: number
  column: number
  type: string | null
  isArray: boolean
  isDeprecated: boolean
  value: number
}

interface Definition {
  name: string
  line: number
  column: number
  kind: string
  fields: Field[]
}

interface Schema {
  package: string | null
  definitions: Definition[]
}

// Constants for type and kind mappings (original: r and a)
const TYPE_NAMES = ['bool', 'byte', 'int', 'uint', 'float', 'string', 'int64', 'uint64']
const KIND_NAMES = ['ENUM', 'STRUCT', 'MESSAGE']

/**
 * Decodes a binary schema from a ByteBuffer or Uint8Array.
 * Original function: $$s0
 * @param input - The input data to decode.
 * @returns The decoded schema object.
 */
export function decodeBinarySchema(input: ByteBuffer | Uint8Array): ParsedSchema {
  const buffer = input instanceof ByteBuffer ? input : new ByteBuffer(input)
  const definitionCount = buffer.readVarUint()
  const definitions: SchemaDefinition[] = []

  // Read definitions
  for (let i = 0; i < definitionCount; i++) {
    const name = buffer.readString()
    const kindIndex = buffer.readByte()
    const fieldCount = buffer.readVarUint()
    const fields: Field[] = []

    // Read fields for this definition
    for (let j = 0; j < fieldCount; j++) {
      const fieldName = buffer.readString()
      const typeIndex = buffer.readVarInt()
      const isArray = !!(buffer.readByte() & 1)
      const value = buffer.readVarUint()

      fields.push({
        name: fieldName,
        line: 0,
        column: 0,
        type: KIND_NAMES[kindIndex] === 'ENUM' ? null : typeIndex,
        isArray,
        isDeprecated: false,
        value,
      })
    }

    definitions.push({
      name,
      line: 0,
      column: 0,
      kind: KIND_NAMES[kindIndex],
      fields,
    })
  }

  // Resolve type references
  resolveTypeReferences(definitions)

  return {
    package: null,
    definitions,
  }
}

/**
 * Helper function to resolve type references in fields.
 * Original logic from $$s0's second loop.
 * @param definitions - The list of definitions to process.
 */
function resolveTypeReferences(definitions: Definition[]): void {
  for (const definition of definitions) {
    for (const field of definition.fields) {
      const typeIndex = field.type as number | null
      if (typeIndex === null)
        continue

      if (typeIndex < 0) {
        const invertedIndex = ~typeIndex
        if (invertedIndex >= TYPE_NAMES.length) {
          throw new Error(`Invalid type ${typeIndex}`)
        }
        field.type = TYPE_NAMES[invertedIndex]
      }
      else {
        if (typeIndex >= definitions.length) {
          throw new Error(`Invalid type ${typeIndex}`)
        }
        field.type = definitions[typeIndex].name
      }
    }
  }
}

/**
 * Encodes a schema object into a binary Uint8Array.
 * Original function: $$o1
 * @param schema - The schema object to encode.
 * @returns The encoded binary data.
 */
export function encodeBinarySchema(schema: Schema): Uint8Array {
  const buffer = new ByteBuffer()
  const definitions = schema.definitions
  const nameToIndex: Record<string, number> = {}

  buffer.writeVarUint(definitions.length)

  // Build name-to-index map
  for (let i = 0; i < definitions.length; i++) {
    nameToIndex[definitions[i].name] = i
  }

  // Write definitions and fields
  for (const definition of definitions) {
    buffer.writeString(definition.name)
    buffer.writeByte(KIND_NAMES.indexOf(definition.kind))
    buffer.writeVarUint(definition.fields.length)

    for (const field of definition.fields) {
      const typeIndex = TYPE_NAMES.indexOf(field.type || '')
      buffer.writeString(field.name)
      buffer.writeVarInt(typeIndex === -1 ? nameToIndex[field.type!] : ~typeIndex)
      buffer.writeByte(field.isArray ? 1 : 0)
      buffer.writeVarUint(field.value)
    }
  }

  return buffer.toUint8Array()
}

// Export aliases for backward compatibility (original exports)
export const $$s0 = decodeBinarySchema
export const $$o1 = encodeBinarySchema
