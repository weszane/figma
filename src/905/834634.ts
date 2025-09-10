import { error, quote } from '../905/206393'

/**
 * List of native types supported by the schema.
 */
export const nativeTypes = [
  'bool',
  'byte',
  'float',
  'int',
  'string',
  'uint',
  'int64',
  'uint64',
]

/**
 * List of reserved type names.
 */
export const reservedNames = ['ByteBuffer', 'package']

// Regular expressions for tokenizing and validating schema syntax
const TOKEN_REGEX = /((?:-|\b)\d+\b|[=;{}]|\[\]|\[deprecated\]|\b[A-Za-z_]\w*\b|\/\/.*|\s+)/g
const IDENTIFIER_REGEX = /^[A-Z_]\w*$/i
const COMMENT_OR_WHITESPACE_REGEX = /^\/\/.*|\s+$/
const ASSIGNMENT_REGEX = /^=$/
const EMPTY_REGEX = /^$/
const SEMICOLON_REGEX = /^;$/
const INTEGER_REGEX = /^-?\d+$/
const OPEN_BRACE_REGEX = /^\{$/
const CLOSE_BRACE_REGEX = /^\}$/
const ARRAY_REGEX = /^\[\]$/
const ENUM_REGEX = /^enum$/
const STRUCT_REGEX = /^struct$/
const MESSAGE_REGEX = /^message$/
const PACKAGE_REGEX = /^package$/
const DEPRECATED_REGEX = /^\[deprecated\]$/

/**
 * Token representation for schema parsing.
 */
interface SchemaToken {
  text: string
  line: number
  column: number
}

/**
 * Field definition in a schema structure.
 */
interface SchemaField {
  name: string
  line: number
  column: number
  type: string | null
  isArray: boolean
  isDeprecated: boolean
  value: number
}

/**
 * Definition of a schema entity (enum, struct, message).
 */
export interface SchemaDefinition {
  name: string
  line: number
  column: number
  kind: 'ENUM' | 'STRUCT' | 'MESSAGE'
  fields: SchemaField[]
}

/**
 * Parsed schema result.
 */
export interface ParsedSchema {
  package: string | null
  definitions: SchemaDefinition[]
}

/**
 * Tokenizes the schema source string into an array of SchemaToken.
 * @param source - The schema source string.
 * @returns Array of SchemaToken.
 */
function tokenizeSchemaSource(source: string): SchemaToken[] {
  const splitTokens = source.split(TOKEN_REGEX)
  const tokens: SchemaToken[] = []
  let column = 0
  let line = 0

  for (const [idx, fragment] of splitTokens.entries()) {
    if (idx % 2 === 1) {
      if (!COMMENT_OR_WHITESPACE_REGEX.test(fragment)) {
        tokens.push({
          text: fragment,
          line: line + 1,
          column: column + 1,
        })
      }
    }
    else if (fragment !== '') {
      error(`Syntax error ${quote(fragment)}`, line + 1, column + 1)
    }
    const lines = fragment.split('\n')
    if (lines.length > 1)
      column = 0
    line += lines.length - 1
    column += lines[lines.length - 1].length
  }
  tokens.push({
    text: '',
    line,
    column,
  })
  return tokens
}

/**
 * Parses the tokenized schema into a structured representation.
 * @param tokens - Array of SchemaToken.
 * @returns ParsedSchema object.
 */
function parseTokens(tokens: SchemaToken[]): ParsedSchema {
  let index = 0
  let packageName: string | null = null
  const definitions: SchemaDefinition[] = []

  // Helper to get the current token
  function current(): SchemaToken {
    return tokens[index]
  }

  // Helper to match and advance if regex matches
  function match(regex: RegExp): boolean {
    if (regex.test(current().text)) {
      index++
      return true
    }
    return false
  }

  // Helper to require a token match, or throw error
  function expect(regex: RegExp, expected: string): void {
    if (!match(regex)) {
      const token = current()
      error(`Expected ${expected} but found ${quote(token.text)}`, token.line, token.column)
    }
  }

  // Parse optional package declaration
  if (match(PACKAGE_REGEX)) {
    packageName = current().text
    expect(IDENTIFIER_REGEX, 'identifier')
    expect(SEMICOLON_REGEX, '";"')
  }

  // Parse definitions
  while (index < tokens.length && !match(EMPTY_REGEX)) {
    let kind: 'ENUM' | 'STRUCT' | 'MESSAGE' | undefined
    if (match(ENUM_REGEX)) {
      kind = 'ENUM'
    }
    else if (match(STRUCT_REGEX)) {
      kind = 'STRUCT'
    }
    else if (match(MESSAGE_REGEX)) {
      kind = 'MESSAGE'
    }
    else {
      const token = current()
      error(`Unexpected token ${quote(token.text)}`, token.line, token.column)
    }

    const defToken = current()
    expect(IDENTIFIER_REGEX, 'identifier')
    expect(OPEN_BRACE_REGEX, '"{"')

    const fields: SchemaField[] = []
    while (!match(CLOSE_BRACE_REGEX)) {
      let type: string | null = null
      let isArray = false
      let isDeprecated = false

      if (kind !== 'ENUM') {
        type = current().text
        expect(IDENTIFIER_REGEX, 'identifier')
        isArray = match(ARRAY_REGEX)
      }

      const nameToken = current()
      expect(IDENTIFIER_REGEX, 'identifier')

      let valueToken: SchemaToken | null = null
      if (kind !== 'STRUCT') {
        expect(ASSIGNMENT_REGEX, '"="')
        valueToken = current()
        expect(INTEGER_REGEX, 'integer')
        if (`${0 | +valueToken.text}` !== valueToken.text) {
          error(`Invalid integer ${quote(valueToken.text)}`, valueToken.line, valueToken.column)
        }
      }

      const deprecatedToken = current()
      if (match(DEPRECATED_REGEX)) {
        if (kind !== 'MESSAGE') {
          error('Cannot deprecate this field', deprecatedToken.line, deprecatedToken.column)
        }
        isDeprecated = true
      }

      expect(SEMICOLON_REGEX, '";"')

      fields.push({
        name: nameToken.text,
        line: nameToken.line,
        column: nameToken.column,
        type,
        isArray,
        isDeprecated,
        value: valueToken !== null ? 0 | +valueToken.text : fields.length + 1,
      })
    }

    definitions.push({
      name: defToken.text,
      line: defToken.line,
      column: defToken.column,
      kind: kind!,
      fields,
    })
  }

  return {
    package: packageName,
    definitions,
  }
}

/**
 * Validates the parsed schema for duplicate types, reserved names, undefined types, duplicate field ids, and recursive nesting.
 * @param schema - ParsedSchema object.
 */
function validateSchema(schema: ParsedSchema): void {
  const typeNames = nativeTypes.slice()
  const definitionMap: Record<string, SchemaDefinition> = {}

  // Check for duplicate and reserved type names
  for (const def of schema.definitions) {
    if (typeNames.includes(def.name)) {
      error(`The type ${quote(def.name)} is defined twice`, def.line, def.column)
    }
    if (reservedNames.includes(def.name)) {
      error(`The type name ${quote(def.name)} is reserved`, def.line, def.column)
    }
    typeNames.push(def.name)
    definitionMap[def.name] = def
  }

  // Check for undefined types and field id issues
  for (const def of schema.definitions) {
    const fields = def.fields
    if (def.kind === 'ENUM' || fields.length === 0)
      continue

    for (const field of fields) {
      if (!typeNames.includes(field.type!)) {
        error(
          `The type ${quote(field.type!)} is not defined for field ${quote(field.name)}`,
          field.line,
          field.column,
        )
      }
    }

    const usedIds: number[] = []
    for (const field of fields) {
      if (usedIds.includes(field.value)) {
        error(
          `The id for field ${quote(field.name)} is used twice`,
          field.line,
          field.column,
        )
      }
      if (field.value <= 0) {
        error(
          `The id for field ${quote(field.name)} must be positive`,
          field.line,
          field.column,
        )
      }
      if (field.value > fields.length) {
        error(
          `The id for field ${quote(field.name)} cannot be larger than ${fields.length}`,
          field.line,
          field.column,
        )
      }
      usedIds.push(field.value)
    }
  }

  // Check for recursive nesting in structs
  const visitState: Record<string, number> = {}
  function checkNoRecursiveNesting(typeName: string): boolean {
    const def = definitionMap[typeName]
    if (
      def
      && def.kind === 'STRUCT'
      && (visitState[typeName] === 1
        && error(
          `Recursive nesting of ${quote(typeName)} is not allowed`,
          def.line,
          def.column,
        ),
        visitState[typeName] !== 2
        && def)
    ) {
      visitState[typeName] = 1
      for (const field of def.fields) {
        if (!field.isArray)
          checkNoRecursiveNesting(field.type!)
      }
      visitState[typeName] = 2
    }
    return true
  }
  for (const def of schema.definitions) {
    checkNoRecursiveNesting(def.name)
  }
}

/**
 * Parses and validates a schema source string.
 * @param source - The schema source string.
 * @returns ParsedSchema object.
 */
export function parseSchema(source: string): ParsedSchema {
  // Tokenize source
  const tokens = tokenizeSchemaSource(source)
  // Parse tokens into schema structure
  const schema = parseTokens(tokens)
  // Validate schema
  validateSchema(schema)
  return schema
}
