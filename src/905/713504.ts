import { error, quote } from '../905/206393'

/**
 * Regular expressions and constants for tokenization and validation.
 */
export const TOKEN_TYPES = [
  'bool',
  'byte',
  'float',
  'int',
  'string',
  'uint',
  'int64',
  'uint64',
] // l5

export const RESERVED_NAMES = [
  'ByteBuffer',
  'package',
] // hD

const TOKEN_REGEX = /((?:-|\b)\d+\b|[=;{}]|\[\]|\[deprecated\]|\b[A-Za-z_]\w*\b|\/\/.*|\s+)/g // r
const IDENTIFIER_REGEX = /^[A-Z_]\w*$/i // a
const WHITESPACE_OR_COMMENT_REGEX = /^\/\/.*|\s+$/ // s
const EQUALS_REGEX = /^=$/ // o
const EMPTY_REGEX = /^$/ // l
const SEMICOLON_REGEX = /^;$/ // d
const INTEGER_REGEX = /^-?\d+$/ // c
const OPEN_BRACE_REGEX = /^\{$/ // u
const CLOSE_BRACE_REGEX = /^\}$/ // p
const ARRAY_REGEX = /^\[\]$/ // m
const ENUM_REGEX = /^enum$/ // h
const STRUCT_REGEX = /^struct$/ // g
const MESSAGE_REGEX = /^message$/ // f
const PACKAGE_REGEX = /^package$/ // _
const DEPRECATED_REGEX = /^\[deprecated\]$/ // A

/**
 * Token interface representing a parsed token.
 */
interface Token {
  text: string
  line: number
  column: number
}

/**
 * Field definition for a struct/message/enum.
 */
interface FieldDefinition {
  name: string
  line: number
  column: number
  type: string | null
  isArray: boolean
  isDeprecated: boolean
  value: number
}

/**
 * Definition for a struct, message, or enum.
 */
interface TypeDefinition {
  name: string
  line: number
  column: number
  kind: 'ENUM' | 'STRUCT' | 'MESSAGE'
  fields: FieldDefinition[]
}

/**
 * Parsed result structure.
 */
interface ParseResult {
  package: string | null
  definitions: TypeDefinition[]
}

/**
 * Tokenizes the input string into an array of tokens.
 * @param input The input string to tokenize.
 * @returns Array of tokens.
 */
export function tokenize(input: string): Token[] {
  const parts = input.split(TOKEN_REGEX)
  const tokens: Token[] = []
  let column = 0
  let line = 0
  for (const [idx, part] of parts.entries()) {
    if (idx % 2 === 1) {
      if (!WHITESPACE_OR_COMMENT_REGEX.test(part)) {
        tokens.push({
          text: part,
          line: line + 1,
          column: column + 1,
        })
      }
    }
    else if (part !== '') {
      error(`Syntax error ${quote(part)}`, line + 1, column + 1)
    }
    const lines = part.split('\n')
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
 * Parses the tokenized input into a structured representation.
 * @param tokens Array of tokens.
 * @returns ParseResult object.
 */
export function parseTokens(tokens: Token[]): ParseResult {
  let index = 0
  let packageName: string | null = null
  const definitions: TypeDefinition[] = []

  function current(): Token {
    return tokens[index]
  }

  function match(regex: RegExp): boolean {
    if (regex.test(current().text)) {
      index++
      return true
    }
    return false
  }

  function expect(regex: RegExp, expected: string): void {
    if (!match(regex)) {
      const token = current()
      error(`Expected ${expected} but found ${quote(token.text)}`, token.line, token.column)
    }
  }

  // Parse package declaration if present
  if (match(PACKAGE_REGEX)) {
    packageName = current().text
    expect(IDENTIFIER_REGEX, 'identifier')
    expect(SEMICOLON_REGEX, '";"')
  }

  // Parse type definitions
  while (index < tokens.length && !match(EMPTY_REGEX)) {
    let kind: 'ENUM' | 'STRUCT' | 'MESSAGE'
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
      continue
    }

    const typeToken = current()
    expect(IDENTIFIER_REGEX, 'identifier')
    expect(OPEN_BRACE_REGEX, '"{"')

    const fields: FieldDefinition[] = []
    while (!match(CLOSE_BRACE_REGEX)) {
      let fieldType: string | null = null
      let isArray = false
      let isDeprecated = false
      let fieldValue: number | null = null

      if (kind !== 'ENUM') {
        fieldType = current().text
        expect(IDENTIFIER_REGEX, 'identifier')
        isArray = match(ARRAY_REGEX)
      }

      const fieldToken = current()
      expect(IDENTIFIER_REGEX, 'identifier')

      let valueToken: Token | null = null
      if (kind !== 'STRUCT') {
        expect(EQUALS_REGEX, '"="')
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
        name: fieldToken.text,
        line: fieldToken.line,
        column: fieldToken.column,
        type: fieldType,
        isArray,
        isDeprecated,
        value: valueToken ? (0 | +valueToken.text) : fields.length + 1,
      })
    }

    definitions.push({
      name: typeToken.text,
      line: typeToken.line,
      column: typeToken.column,
      kind,
      fields,
    })
  }

  return {
    package: packageName,
    definitions,
  }
}

/**
 * Validates the parsed result for duplicate names, reserved names, undefined types, and recursive nesting.
 * @param result The parsed result to validate.
 */
export function validateParseResult(result: ParseResult): void {
  const definedTypes = [...TOKEN_TYPES]
  const typeMap: Record<string, TypeDefinition> = {}

  // Check for duplicate and reserved type names
  for (const def of result.definitions) {
    if (definedTypes.includes(def.name)) {
      error(`The type ${quote(def.name)} is defined twice`, def.line, def.column)
    }
    if (RESERVED_NAMES.includes(def.name)) {
      error(`The type name ${quote(def.name)} is reserved`, def.line, def.column)
    }
    definedTypes.push(def.name)
    typeMap[def.name] = def
  }

  // Check for undefined types and field id issues
  for (const def of result.definitions) {
    const fields = def.fields
    if (def.kind === 'ENUM' || fields.length === 0)
      continue

    for (const field of fields) {
      if (!definedTypes.includes(field.type!)) {
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
  function checkRecursive(typeName: string): boolean {
    const def = typeMap[typeName]
    if (
      def
      && def.kind === 'STRUCT'
      && (visitState[typeName] === 1 && error(`Recursive nesting of ${quote(typeName)} is not allowed`, def.line, def.column),
        visitState[typeName] !== 2 && def)
    ) {
      visitState[typeName] = 1
      for (const field of def.fields) {
        if (!field.isArray)
          checkRecursive(field.type!)
      }
      visitState[typeName] = 2
    }
    return true
  }
  for (const def of result.definitions) {
    checkRecursive(def.name)
  }
}

/**
 * Main entry point for parsing and validating the input.
 * @param input The input string to parse.
 * @returns The validated parse result.
 */
export function parseAndValidate(input: string): ParseResult {
  const tokens = tokenize(input)
  const result = parseTokens(tokens)
  validateParseResult(result)
  return result
}

// Export the main function as D0 for compatibility with original code.
export const D0 = parseAndValidate
