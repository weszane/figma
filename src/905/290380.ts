import * as acorn from 'acorn'
import { generate, GENERATOR } from 'astring'
import { z } from 'zod'
import { AcornJsxPlugin } from '../905/253473'

/**
 * Refactored exports and JSX AST utilities from 290380.ts
 * Original function/variable names are preserved in comments for traceability.
 */

/**
 * Type for AST node, can be extended for more precise typing.
 */
export type AstNode = any

/**
 * Zod schema for parsing number or string as number.
 * Original: m
 */
export const DataIdSchema = z.union([
  z.number(),
  z.string().transform((e, ctx) => {
    const parsed = parseInt(e)
    if (isNaN(parsed)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Not a number',
      })
      return z.NEVER
    }
    return parsed
  }),
])

/**
 * Custom JSX generator for AST to string conversion.
 * Original: u
 */
export const JsxAstGenerator = Object.assign({}, GENERATOR, {
  // JSXElement
  JSXElement(node: any, writer: any) {
    const opening = node.openingElement
    if (opening)
      this[opening.type](opening, writer)
    for (const child of node.children ?? []) this[child.type](child, writer)
    const closing = node.closingElement
    if (closing)
      this[closing.type](closing, writer)
  },
  // JSXAttribute
  JSXAttribute(node: any, writer: any) {
    if (node.name) {
      writer.write(' ')
      this[node.name.type](node.name, writer)
      writer.write('=')
      if (node.value) {
        if (node.value.type === 'JSXExpressionContainer') {
          if (node.value.expression.type !== 'JSXEmptyExpression' && node.value.expression) {
            writer.write('{')
            this[node.value.expression.type](node.value.expression, writer)
            writer.write('}')
          }
          else {
            writer.write('""')
          }
        }
        else {
          writer.write('"')
          writer.write(node.value.value ?? '')
          writer.write('"')
        }
      }
      else {
        writer.write('""')
      }
    }
  },
  // JSXOpeningElement
  JSXOpeningElement(node: any, writer: any) {
    writer.write('<')
    this[node.name.type](node.name, writer)
    for (const attr of node.attributes ?? []) this[attr.type](attr, writer)
    writer.write(node.selfClosing ? '/>' : '>')
  },
  // JSXFragment
  JSXFragment(node: any, writer: any) {
    writer.write('<>')
    for (const child of node.children ?? []) this[child.type](child, writer)
    writer.write('</>')
  },
  // JSXClosingFragment
  JSXClosingFragment(_node: any, writer: any) {
    writer.write('</>')
  },
  // JSXClosingElement
  JSXClosingElement(node: any, writer: any) {
    writer.write('</')
    this[node.name.type](node.name, writer)
    writer.write('>')
  },
  // JSXText
  JSXText(node: any, writer: any) {
    writer.write(node.raw)
  },
  // JSXIdentifier
  JSXIdentifier(node: any, writer: any) {
    writer.write(node.name)
  },
  // JSXExpressionContainer
  JSXExpressionContainer(node: any, writer: any) {
    writer.write('{')
    this[node.expression.type](node.expression, writer)
    writer.write('}')
  },
  // JSXEmptyExpression
  JSXEmptyExpression(_node: any, _writer: any) {},
  // JSXArrayExpression
  JSXArrayExpression(node: any, writer: any) {
    writer.write('[')
    for (let i = 0; i < node.elements.length; i++) {
      this[node.elements[i].type](node.elements[i], writer)
      if (i < node.elements.length - 1)
        writer.write(', ')
    }
    writer.write(']')
  },
  // JSXObject
  JSXObject(node: any, writer: any) {
    writer.write('{')
    for (let i = 0; i < node.properties.length; i++) {
      this[node.properties[i].type](node.properties[i], writer)
      if (i < node.properties.length - 1)
        writer.write(', ')
    }
    writer.write('}')
  },
  // JSXProperty
  JSXProperty(node: any, writer: any) {
    this[node.key.type](node.key, writer)
    writer.write(': ')
    this[node.value.type](node.value, writer)
  },
})

/**
 * Converts AST to string using custom JSX generator.
 * Original: p
 */
export function astToString(ast: AstNode): string {
  if (!ast)
    return JSON.stringify(ast)
  let result = generate(ast, { generator: JsxAstGenerator })
  if (result.endsWith(';\n'))
    result = result.slice(0, -2)
  return result
}

/**
 * Parses JSX code loosely and wraps with a root.
 * Original: h
 */
export function parseLooseWrapped(code: string, options?: Record<string, any>): AstNode {
  const parser = acorn.Parser.extend(
    AcornJsxPlugin({
      loose: true,
      addDataIds: true,
      ...(options ?? {}),
    }) as any,
  )
  const wrappedCode = `<root>${code}`
  return parser.parse(wrappedCode, {
    ecmaVersion: 11,
    locations: true,
  })
}

/**
 * Loosely parses JSX code.
 * Original: parseLoose
 */
export function parseLoose(code: string): AstNode {
  return acorn.Parser.extend(
    AcornJsxPlugin({ loose: true }) as any,
  ).parse(code, {
    ecmaVersion: 11,
    allowImportExportEverywhere: false,
  })
}

/**
 * Strictly parses JSX code.
 * Original: parseStrict
 */
export function parseStrict(code: string): AstNode {
  return acorn.Parser.extend(
    AcornJsxPlugin({ loose: false }) as any,
  ).parse(code, {
    ecmaVersion: 11,
    allowImportExportEverywhere: false,
  })
}

/**
 * Loosely parses JSX code in edit mode.
 * Original: parseLooseEdit
 */
export function parseLooseEdit(code: string): AstNode {
  return acorn.Parser.extend(
    AcornJsxPlugin({ loose: true, editMode: true }) as any,
  ).parse(code, {
    ecmaVersion: 11,
    allowImportExportEverywhere: false,
  })
}

/**
 * Converts JSX code to string with data-id attributes.
 * Original: g
 */
export function jsxWithDataId(code: string): string {
  return astToString(parseLooseWrapped(code))
}

/**
 * Extracts JSX node by data-id from code.
 * Original: f
 */
export function extractDataIdFromJSX(code: string, dataId: string | number): string {
  const id = DataIdSchema.parse(dataId)
  const children = parseLooseWrapped(code, { addDataIds: false }).body[0].expression.children || []
  const stack = [...children]
  while (stack.length) {
    const node = stack.pop()
    if (node) {
      if (node.start === id)
        return astToString(node)
      if ('children' in node && 'start' in node && 'end' in node && node.start < id && node.end > id) {
        stack.push(...node.children)
      }
    }
  }
  console.error(`Failed to find dataId=${dataId} in\n\n${jsxWithDataId(code)}`)
  return ''
}

/**
 * Extracts JSX code without data-id attributes.
 * Original: extractJSXWithoutDataId
 */
export function extractJSXWithoutDataId(code: string, dataId: string | number): [string, string] {
  const id = DataIdSchema.parse(dataId)

  const jsxString = astToString(parseLooseWrapped(code, { addDataIds: false }))
  const extracted = extractDataIdFromJSX(code, dataId)
  return [jsxString.slice(6, id), jsxString.slice(id + extracted.length)]
}
