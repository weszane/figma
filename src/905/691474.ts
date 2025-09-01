import type { ParsedSchema, SchemaDefinition } from '../905/834634'
import { decodeBinarySchema } from '../905/169464'
import { error, quote } from '../905/206393'
import { HashMap } from '../905/543209'
import { ByteBuffer } from '../905/712081'
import { parseSchema } from '../905/834634'
import { BufferHashReader } from '../905/962010'


/**
 * Interface for compilation options.
 */
interface CompilationOptions {
  shouldIgnoreForRedaction?: RegExp
  sensitiveFields?: Set<string>
}

/**
 * Generates JavaScript code for schema definitions.
 * Original function: $$d1
 * @param schema - The schema to compile.
 * @param dedupTypes - Types to deduplicate.
 * @param dedupArrayTypes - Array types to deduplicate.
 * @param options - Compilation options.
 * @returns Generated JavaScript code as a string.
 */
export function generateSchemaCode(
  schema: string | Uint8Array | ByteBuffer | ParsedSchema,
  dedupTypes: string[],
  dedupArrayTypes: string[],
  options?: CompilationOptions,
): string {
  let parsedSchema: ParsedSchema
  if (typeof schema === 'string') {
    parsedSchema = parseSchema(schema)
  }
  else if (schema instanceof Uint8Array || schema instanceof ByteBuffer) {
    parsedSchema = decodeBinarySchema(schema)
  }
  else {
    parsedSchema = schema
  }

  const definitionsMap: Record<string, SchemaDefinition> = {}
  const packageName = parsedSchema.package
  const codeLines: string[] = []

  // Set up package and exports
  if (packageName !== null) {
    codeLines.push(`var ${packageName} = exports || ${packageName} || {}, exports;`)
  }
  else {
    codeLines.push('var exports = exports || {};')
  }
  codeLines.push(`${packageName || 'exports'}.ByteBuffer = ${packageName || 'exports'}.ByteBuffer || require("kiwi-schema").ByteBuffer;`)
  codeLines.push(`${packageName || 'exports'}.shouldIgnoreForRedaction = ${options?.shouldIgnoreForRedaction ?? /$^/};`)

  // Map definitions
  for (const def of parsedSchema.definitions) {
    definitionsMap[def.name] = def
  }

  // Process each definition
  for (const def of parsedSchema.definitions) {
    switch (def.kind) {
      case 'ENUM':
        codeLines.push(generateEnumCode(def, packageName || 'exports'))
        break
      case 'STRUCT':
      case 'MESSAGE':
        codeLines.push('')
        codeLines.push(generateDecodeFunction(def, definitionsMap, dedupTypes, packageName || 'exports'))
        codeLines.push('')
        codeLines.push(generateEncodeFunction(def, definitionsMap, packageName || 'exports'))
        codeLines.push('')
        codeLines.push(generateHashFunction(def, definitionsMap, packageName || 'exports'))
        codeLines.push('')
        codeLines.push(generateRedactFunction(def, definitionsMap, options?.sensitiveFields ?? new Set(), packageName || 'exports'))
        break
      default:
        error(`Invalid definition kind ${quote(def.kind)}`, def.line, def.column)
    }
  }

  codeLines.push('')
  return codeLines.join('\n')
}

/**
 * Generates code for an ENUM definition.
 * @param def - The enum definition.
 * @param packageName - The package name.
 * @returns Generated code.
 */
function generateEnumCode(def: SchemaDefinition, packageName: string): string {
  const enumObj: Record<string | number, string | number> = {}
  for (const field of def.fields!) {
    enumObj[field.name] = field.value!
    enumObj[field.value!] = field.name
  }
  return `${packageName}[${quote(def.name)}] = ${JSON.stringify(enumObj, null, 2)};`
}

/**
 * Generates the decode function code.
 * Original IIFE in $$d1 for decode.
 * @param def - The definition.
 * @param definitionsMap - Map of definitions.
 * @param dedupTypes - Deduplication types.
 * @param packageName - The package name.
 * @returns Generated code.
 */
function generateDecodeFunction(
  def: SchemaDefinition,
  definitionsMap: Record<string, SchemaDefinition>,
  dedupTypes: string[],
  packageName: string,
): string {
  const lines: string[] = []
  const indent = '  '
  lines.push(`${packageName}[${quote(`decode${def.name}`)}] = function(bb, optDedupCache) {`)
  lines.push('  var dedupKey = null;')

  if (dedupTypes.includes(def.name)) {
    lines.push('  if (!!optDedupCache) {')
    lines.push('    if (!(optDedupCache instanceof this.HashTable)) {')
    lines.push('      throw new Error("optDedupCache must be instance of HashTable");')
    lines.push('    }')
    lines.push('    // lookahead with hasher then reference result with dedup cache')
    lines.push('    var hasher = new this.Hasher(bb.getNewWindowFromRight());')
    lines.push(`    this[${quote(`hash${def.name}`)}](hasher);`)
    lines.push(`    dedupKey = { hash: hasher.value(), data: hasher.windowToUint8Array(), defName: ${quote(def.name)} };`)
    lines.push('    var cachedResult = optDedupCache.get(dedupKey, null);')
    lines.push('    if (cachedResult !== null) {')
    lines.push('      bb.extendWindowTo(hasher.bb());')
    lines.push('      return cachedResult;')
    lines.push('    }')
    lines.push('  }')
  }

  lines.push('  var result = {};')
  lines.push('  if (!(bb instanceof this.ByteBuffer)) {')
  lines.push('    bb = new this.ByteBuffer(bb);')
  lines.push('  }')
  lines.push('')

  if (def.kind === 'MESSAGE') {
    lines.push('  while (true) {')
    lines.push('  var x = bb.readVarUint();')
    lines.push('    switch (x) {')
    lines.push('    case 0:')
    lines.push('      return dedupKey !== null ? optDedupCache.set(dedupKey, result) : result;')
    lines.push('')
  }

  for (const field of def.fields!) {
    const readExpr = getReadExpression(field, definitionsMap)
    const hashExpr = getHashExpression(field, definitionsMap)

    if (def.kind === 'MESSAGE') {
      lines.push(`    case ${field.value}:`)
    }

    if (field.isArray) {
      if (field.isDeprecated) {
        if (field.type === 'byte') {
          lines.push(`${indent}bb.readByteArray();`)
        }
        else {
          lines.push(`${indent}var length = bb.readVarUint();`)
          lines.push(`${indent}while (length-- > 0) ${readExpr};`)
        }
      }
      else {
        if (field.type === 'byte') {
          lines.push(`${indent}result[${quote(field.name)}] = bb.readByteArray();`)
        }
        else {
          lines.push(`${indent}var arrayDedupKey = null;`)
          lines.push(`${indent}var values = null;`)
          if (dedupTypes.includes(field.type!)) {
            lines.push(`${indent}if (!!optDedupCache) {`)
            lines.push(`${indent}  // lookahead with hasher then reference result with dedup cache`)
            lines.push(`${indent}  var hasher = new this.Hasher(bb.getNewWindowFromRight());`)
            lines.push(`${indent}  var length = hasher.readVarUint();`)
            lines.push(`${indent}  for (var i = 0; i < length; i++) ${hashExpr};`)
            lines.push(`${indent}  arrayDedupKey = { hash: hasher.value(), data: hasher.windowToUint8Array(), defName: ${quote(`${field.type}[]`)} };`)
            lines.push(`${indent}  var cachedResult = optDedupCache.get(arrayDedupKey, null);`)
            lines.push(`${indent}  if (cachedResult !== null) {`)
            lines.push(`${indent}    bb.extendWindowTo(hasher.bb());`)
            lines.push(`${indent}    values = cachedResult;`)
            lines.push(`${indent}  }`)
            lines.push(`${indent}}`)
          }
          lines.push(`${indent}if (values === null) {`)
          lines.push(`${indent}  var length = bb.readVarUint();`)
          lines.push(`${indent}  var values = Array(length);`)
          lines.push(`${indent}  for (var i = 0; i < length; i++) values[i] = ${readExpr};`)
          lines.push(`${indent}  if (arrayDedupKey !== null) { optDedupCache.set(arrayDedupKey, values); }`)
          lines.push(`${indent}}`)
          lines.push(`${indent}result[${quote(field.name)}] = values;`)
        }
      }
    }
    else {
      if (field.isDeprecated) {
        lines.push(`${indent}${readExpr};`)
      }
      else {
        lines.push(`${indent}result[${quote(field.name)}] = ${readExpr};`)
      }
    }

    if (def.kind === 'MESSAGE') {
      lines.push('      break;')
      lines.push('')
    }
  }

  if (def.kind === 'MESSAGE') {
    lines.push('    default:')
    lines.push('      throw new Error("Attempted to parse invalid message");')
    lines.push('    }')
    lines.push('  }')
  }
  else {
    lines.push('  return dedupKey !== null ? optDedupCache.set(dedupKey, result) : result;')
  }

  lines.push('}')
  return lines.join('\n')
}

/**
 * Generates the encode function code.
 * Original IIFE in $$d1 for encode.
 * @param def - The definition.
 * @param definitionsMap - Map of definitions.
 * @param packageName - The package name.
 * @returns Generated code.
 */
function generateEncodeFunction(
  def: SchemaDefinition,
  definitionsMap: Record<string, SchemaDefinition>,
  packageName: string,
): string {
  const lines: string[] = []
  lines.push(`${packageName}[${quote(`encode${def.name}`)}] = function(message, bb) {`)
  lines.push('  var isTopLevel = !bb;')
  lines.push('  if (isTopLevel) bb = new this.ByteBuffer();')

  for (const field of def.fields!) {
    if (field.isDeprecated)
      continue

    const writeExpr = getWriteExpression(field, definitionsMap)
    lines.push('')
    lines.push(`  var value = message[${quote(field.name)}];`)
    lines.push('  if (value != null) {')
    if (def.kind === 'MESSAGE') {
      lines.push(`    bb.writeVarUint(${field.value});`)
    }
    if (field.isArray) {
      if (field.type === 'byte') {
        lines.push('    bb.writeByteArray(value);')
      }
      else {
        lines.push('    var values = value, n = values.length;')
        lines.push('    bb.writeVarUint(n);')
        lines.push('    for (var i = 0; i < n; i++) {')
        lines.push('      value = values[i];')
        lines.push(`      ${writeExpr}`)
        lines.push('    }')
      }
    }
    else {
      lines.push(`    ${writeExpr}`)
    }
    if (def.kind === 'STRUCT') {
      lines.push('  } else {')
      lines.push(`    throw new Error(${quote(`Missing required field ${quote(field.name)}`)});`)
    }
    lines.push('  }')
  }

  if (def.kind === 'MESSAGE') {
    lines.push('  bb.writeVarUint(0);')
  }
  lines.push('')
  lines.push('  if (isTopLevel) return bb.toUint8Array();')
  lines.push('}')
  return lines.join('\n')
}

/**
 * Generates the hash function code.
 * Original IIFE in $$d1 for hash.
 * @param def - The definition.
 * @param definitionsMap - Map of definitions.
 * @param packageName - The package name.
 * @returns Generated code.
 */
function generateHashFunction(
  def: SchemaDefinition,
  definitionsMap: Record<string, SchemaDefinition>,
  packageName: string,
): string {
  const lines: string[] = []
  const indent = '  '
  lines.push(`${packageName}[${quote(`hash${def.name}`)}] = function(hasher) {`)
  lines.push('  var result = {};')
  lines.push('  if (!(hasher instanceof this.Hasher)) {')
  lines.push('    throw new Error("Expected Hasher");')
  lines.push('  }')
  lines.push('')

  if (def.kind === 'MESSAGE') {
    lines.push('  while (true) {')
    lines.push('    switch (hasher.readVarUint()) {')
    lines.push('    case 0:')
    lines.push('      return;')
    lines.push('')
  }

  for (const field of def.fields!) {
    const hashExpr = getHashExpression(field, definitionsMap)

    if (def.kind === 'MESSAGE') {
      lines.push(`    case ${field.value}:`)
    }

    if (field.isArray) {
      if (field.type === 'byte') {
        lines.push(`${indent}hasher.readByteArray();`)
      }
      else {
        lines.push(`${indent}var length = hasher.readVarUint();`)
        lines.push(`${indent}while (length-- > 0) ${hashExpr};`)
      }
    }
    else {
      lines.push(`${indent}${hashExpr};`)
    }

    if (def.kind === 'MESSAGE') {
      lines.push('      break;')
      lines.push('')
    }
  }

  if (def.kind === 'MESSAGE') {
    lines.push('    default:')
    lines.push('      throw new Error("Attempted to parse invalid message");')
    lines.push('    }')
    lines.push('  }')
  }
  else {
    lines.push('  return;')
  }

  lines.push('}')
  return lines.join('\n')
}

/**
 * Generates the redact function code.
 * Original IIFE in $$d1 for redact.
 * @param def - The definition.
 * @param definitionsMap - Map of definitions.
 * @param sensitiveFields - Set of sensitive fields.
 * @param packageName - The package name.
 * @returns Generated code.
 */
function generateRedactFunction(
  def: SchemaDefinition,
  definitionsMap: Record<string, SchemaDefinition>,
  sensitiveFields: Set<string>,
  packageName: string,
): string {
  const lines: string[] = []
  const indent = '  '
  lines.push(`${packageName}[${quote(`redact${def.name}`)}] = function(bb) {`)
  lines.push('  if (!(bb instanceof this.ByteBuffer)) {')
  lines.push('    bb = new this.ByteBuffer(bb);')
  lines.push('  }')
  lines.push('')

  if (def.kind === 'MESSAGE') {
    lines.push('  while (true) {')
    lines.push('  var x = bb.readVarUint();')
    lines.push('    switch (x) {')
    lines.push('    case 0:')
    lines.push('      return;')
    lines.push('')
  }

  for (const field of def.fields!) {
    const readExpr = getRedactExpression(field, definitionsMap, sensitiveFields)

    if (def.kind === 'MESSAGE') {
      lines.push(`    case ${field.value}:`)
    }

    if (field.isArray) {
      if (field.isDeprecated) {
        if (field.type === 'byte') {
          lines.push(`${indent}bb.readByteArray();`)
        }
        else {
          lines.push(`${indent}var length = bb.readVarUint();`)
          lines.push(`${indent}while (length-- > 0) ${readExpr};`)
        }
      }
      else {
        if (field.type === 'byte') {
          lines.push(`${indent}bb.readByteArray();`)
        }
        else {
          lines.push(`${indent}var values = null;`)
          lines.push(`${indent}if (values === null) {`)
          lines.push(`${indent}  var length = bb.readVarUint();`)
          lines.push(`${indent}  var values = Array(length);`)
          lines.push(`${indent}  for (var i = 0; i < length; i++) values[i] = ${readExpr};`)
          lines.push(`${indent}}`)
        }
      }
    }
    else {
      if (field.isDeprecated) {
        lines.push(`${indent}${readExpr};`)
      }
      else {
        lines.push(`${indent}${readExpr};`)
      }
    }

    if (def.kind === 'MESSAGE') {
      lines.push('      break;')
      lines.push('')
    }
  }

  if (def.kind === 'MESSAGE') {
    lines.push('    default:')
    lines.push('      throw new Error("Attempted to parse invalid message");')
    lines.push('    }')
    lines.push('  }')
  }

  lines.push('}')
  return lines.join('\n')
}

/**
 * Gets the read expression for a field.
 * @param field - The field.
 * @param definitionsMap - Map of definitions.
 * @returns Read expression.
 */
function getReadExpression(field: any, definitionsMap: Record<string, SchemaDefinition>): string {
  switch (field.type) {
    case 'bool':
      return '!!bb.readByte()'
    case 'byte':
      return 'bb.readByte()'
    case 'int':
      return 'bb.readVarInt()'
    case 'uint':
      return 'bb.readVarUint()'
    case 'int64':
      return 'bb.readVarInt64()'
    case 'uint64':
      return 'bb.readVarUint64()'
    case 'float':
      return 'bb.readVarFloat()'
    case 'string':
      return 'bb.readString()'
    default: {
      const def = definitionsMap[field.type]
      if (def) {
        if (def.kind === 'ENUM') {
          return `this[${quote(def.name)}][bb.readVarUint()]`
        }
        else {
          return `this[${quote(`decode${def.name}`)}](bb, optDedupCache || null)`
        }
      }
      else {
        error(`Invalid type ${quote(field.type)} for field ${quote(field.name)}`, field.line, field.column)
        return ''
      }
    }
  }
}

/**
 * Gets the hash expression for a field.
 * @param field - The field.
 * @param definitionsMap - Map of definitions.
 * @returns Hash expression.
 */
function getHashExpression(field: any, definitionsMap: Record<string, SchemaDefinition>): string {
  switch (field.type) {
    case 'bool':
    case 'byte':
      return 'hasher.readByte()'
    case 'int':
      return 'hasher.readVarInt()'
    case 'uint':
      return 'hasher.readVarUint()'
    case 'int64':
      return 'hasher.readVarInt64()'
    case 'uint64':
      return 'hasher.readVarUint64()'
    case 'float':
      return 'hasher.readVarFloat()'
    case 'string':
      return 'hasher.readString()'
    default: {
      const def = definitionsMap[field.type]
      if (def) {
        if (def.kind === 'ENUM') {
          return 'hasher.readVarUint()'
        }
        else {
          return `this[${quote(`hash${def.name}`)}](hasher)`
        }
      }
      else {
        error(`Invalid type ${quote(field.type)} for field ${quote(field.name)}`, field.line, field.column)
        return ''
      }
    }
  }
}

/**
 * Gets the write expression for a field.
 * @param field - The field.
 * @param definitionsMap - Map of definitions.
 * @returns Write expression.
 */
function getWriteExpression(field: any, definitionsMap: Record<string, SchemaDefinition>): string {
  switch (field.type) {
    case 'bool':
    case 'byte':
      return 'bb.writeByte(value);'
    case 'int':
      return 'bb.writeVarInt(value);'
    case 'uint':
      return 'bb.writeVarUint(value);'
    case 'int64':
      return 'bb.writeVarInt64(value);'
    case 'uint64':
      return 'bb.writeVarUint64(value);'
    case 'float':
      return 'bb.writeVarFloat(value);'
    case 'string':
      return 'bb.writeString(value);'
    default: {
      const def = definitionsMap[field.type]
      if (def) {
        if (def.kind === 'ENUM') {
          return `var encoded = this[${quote(def.name)}][value]; if (encoded === void 0) throw new Error("Invalid value " + JSON.stringify(value) + ${quote(` for enum ${quote(def.name)}`)}); bb.writeVarUint(encoded);`
        }
        else {
          return `this[${quote(`encode${def.name}`)}](value, bb);`
        }
      }
      else {
        throw new Error(`Invalid type ${quote(field.type)} for field ${quote(field.name)}`)
      }
    }
  }
}

/**
 * Gets the redact expression for a field.
 * @param field - The field.
 * @param definitionsMap - Map of definitions.
 * @param sensitiveFields - Set of sensitive fields.
 * @returns Redact expression.
 */
function getRedactExpression(field: any, definitionsMap: Record<string, SchemaDefinition>, sensitiveFields: Set<string>): string {
  switch (field.type) {
    case 'bool':
      return '!!bb.readByte()'
    case 'byte':
      return 'bb.readByte()'
    case 'int':
      return 'bb.readVarInt()'
    case 'uint':
      return 'bb.readVarUint()'
    case 'int64':
      return 'bb.readVarInt64()'
    case 'uint64':
      return 'bb.readVarUint64()'
    case 'float':
      return 'bb.readVarFloat()'
    case 'string':
      return sensitiveFields.has(field.name) ? 'bb.redactString(this.shouldIgnoreForRedaction)' : 'bb.readString()'
    default: {
      const def = definitionsMap[field.type]
      if (def) {
        if (def.kind === 'ENUM') {
          return `this[${quote(def.name)}][bb.readVarUint()]`
        }
        else {
          return `this[${quote(`redact${def.name}`)}](bb)`
        }
      }
      else {
        error(`Invalid type ${quote(field.type)} for field ${quote(field.name)}`, field.line, field.column)
        return ''
      }
    }
  }
}

/**
 * Compiles the schema into a runtime object.
 * Original function: $$c0
 * @param schema - The schema to compile.
 * @param dedupTypes - Types to deduplicate.
 * @param options - Compilation options.
 * @returns Compiled schema object.
 */
export function compileSchema(
  schema: string | Uint8Array | ByteBuffer | ParsedSchema,
  dedupTypes?: string[],
  options?: CompilationOptions,
): any {
  const runtime = {
    ByteBuffer,
    Hasher: BufferHashReader,
    HashTable: HashMap,
    makeDedupCache: () => new HashMap(
      (key: any) => key.hash,
      (a: any, b: any) => a.defName === b.defName && arraysEqual(a.data, b.data),
    ),
  }

  const dedupStructs: string[] = []
  const dedupArrays: string[] = []

  if (dedupTypes) {
    dedupStructs.push(...dedupTypes.filter(type => /^[A-Z_]\w*$/i.test(type)))
    dedupArrays.push(...dedupTypes.filter(type => /^[A-Z_]\w*\[\]$/i.test(type)).map(type => type.slice(0, -2)))
    if (dedupStructs.length + dedupArrays.length !== dedupTypes.length) {
      console.warn('Some definitions to dedup are invalid identifiers, skipping...')
    }
  }

  // eslint-disable-next-line no-new-func
  new Function('exports', generateSchemaCode(schema, dedupStructs, dedupArrays, options))(runtime)
  return runtime
}

/**
 * Helper function to check if two arrays are equal.
 * @param a - First array.
 * @param b - Second array.
 * @returns True if equal.
 */
function arraysEqual(a: Uint8Array, b: Uint8Array): boolean {
  if (a.length !== b.length)
    return false
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i])
      return false
  }
  return true
}

// Aliases for backward compatibility
export const compileSchemaJS = generateSchemaCode
