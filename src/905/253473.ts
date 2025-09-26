

import { parseStrict } from '../905/290380'
import XHTMLUnicode from '../905/691976'

// Original: export const getJsxTokens = u
export const getJsxTokens = setupJsxTokens

/**
 * Acorn JSX Plugin
 * Extends the Acorn parser to support JSX syntax.
 * @param options - Configuration options for the plugin.
 * @returns A function that extends the parser with JSX capabilities.
 */
export function AcornJsxPlugin(options: any = {}) {
  options = options || {}
  return function (Parser: any) {
    const acornInstance = Parser.acorn || Parser
    const jsxTokens = setupJsxTokens(acornInstance)
    const baseTokTypes = acornInstance.tokTypes
    const jsxTokTypes = jsxTokens.tokTypes
    const baseTokContexts = acornInstance.tokContexts
    const jsxTokContexts = jsxTokens.tokContexts
    const tc_oTag = jsxTokContexts.tc_oTag
    const tc_cTag = jsxTokContexts.tc_cTag
    const tc_expr = jsxTokContexts.tc_expr
    const isNewLine = acornInstance.isNewLine
    const isIdentifierStart = acornInstance.isIdentifierStart
    const isIdentifierChar = acornInstance.isIdentifierChar

    return class JsxParser extends Parser {
      static get acornJsx() {
        return jsxTokens
      }

      /**
       * Reads JSX tokens within expressions.
       * @returns The token read.
       */
      jsx_readToken(): any {
        let text = ''
        const startPos = this.pos
        for (;;) {
          if (this.pos >= this.input.length) {
            if (options.loose) {
              text += this.input.slice(startPos, this.pos)
              return this.finishToken(jsxTokTypes.jsxText, text)
            }
            this.raise(this.start, 'Unterminated JSX contents')
          }
          const code = this.input.charCodeAt(this.pos)
          switch (code) {
            case 60: // '<'
            case 123: // '{'
              if (this.pos === this.start) {
                if (code === 60 && this.exprAllowed) {
                  ++this.pos
                  return this.finishToken(jsxTokTypes.jsxTagStart)
                }
                return this.getTokenFromCode(code)
              }
              text += this.input.slice(startPos, this.pos)
              return this.finishToken(jsxTokTypes.jsxText, text)
            case 38: // '&'
              text += this.input.slice(startPos, this.pos)
              text += this.jsx_readEntity()
              break
            case 62: // '>'
            case 125: // '}'
              this.raise(this.pos, `Unexpected token \`${this.input[this.pos]}\`. Did you mean \`${code === 62 ? '&gt;' : '&rbrace;'}\` or \`{"${this.input[this.pos]}"}\`?`)
            // eslint-disable-next-line no-fallthrough
            default:
              if (isNewLine(code)) {
                text += this.input.slice(startPos, this.pos)
                text += this.jsx_readNewLine(true)
              }
              else {
                ++this.pos
              }
          }
        }
      }

      /**
       * Reads newlines in JSX.
       * @param normalize - Whether to normalize the newline.
       * @returns The newline string.
       */
      jsx_readNewLine(normalize: boolean): string {
        let val: string
        const code = this.input.charCodeAt(this.pos)
        ++this.pos
        if (code === 13 && this.input.charCodeAt(this.pos) === 10) {
          ++this.pos
          val = normalize ? '\n' : '\r\n'
        }
        else {
          val = String.fromCharCode(code)
        }
        if (this.options.locations) {
          ++this.curLine
          this.lineStart = this.pos
        }
        return val
      }

      /**
       * Reads JSX strings.
       * @param quote - The quote character.
       * @returns The token.
       */
      jsx_readString(quote: number): any {
        let out = ''
        let startPos = ++this.pos
        for (;;) {
          if (this.pos >= this.input.length) {
            if (options.loose) {
              out += this.input.slice(startPos, this.pos)
              return this.finishToken(baseTokTypes.string, out)
            }
            this.raise(this.start, 'Unterminated string constant')
          }
          if (options.editMode && this.input.charCodeAt(this.pos) === 60) {
            out += this.input.slice(startPos, this.pos)
            return this.finishToken(baseTokTypes.string, out)
          }
          const code = this.input.charCodeAt(this.pos)
          if (code === quote)
            break
          if (code === 38) {
            out += this.input.slice(startPos, this.pos)
            out += this.jsx_readEntity()
            startPos = this.pos
          }
          else if (isNewLine(code)) {
            out += this.input.slice(startPos, this.pos)
            out += this.jsx_readNewLine(false)
            startPos = this.pos
          }
          else {
            ++this.pos
          }
        }
        out += this.input.slice(startPos, this.pos++)
        return this.finishToken(baseTokTypes.string, out)
      }

      /**
       * Reads HTML entities in JSX.
       * @returns The entity string.
       */
      jsx_readEntity(): string {
        let entity = ''
        let count = 0
        let val: string | undefined
        let ch = this.input[this.pos]
        if (ch !== '&')
          this.raise(this.pos, 'Entity must start with an ampersand')
        const startPos = ++this.pos
        for (; this.pos < this.input.length && count++ < 10;) {
          ch = this.input[this.pos++]
          if (ch === ';') {
            if (entity[0] === '#') {
              if (entity[1] === 'x') {
                const hex = entity.substr(2)
                if (/^[\da-f]+$/i.test(hex))
                  val = String.fromCharCode(parseInt(hex, 16))
              }
              else {
                const dec = entity.substr(1)
                if (/^\d+$/.test(dec))
                  val = String.fromCharCode(parseInt(dec, 10))
              }
            }
            else {
              val = (XHTMLUnicode as any)[entity]
            }
            break
          }
          entity += ch
        }
        return val || (this.pos = startPos, '&')
      }

      /**
       * Reads JSX words (identifiers).
       * @returns The token.
       */
      jsx_readWord(): any {
        const startPos = this.pos
        let code: number
        do {
          code = this.input.charCodeAt(++this.pos)
        } while (isIdentifierChar(code) || code === 45) // '-'
        if (options.loose && isNaN(code)) {
          return this.next()
        }
        return this.finishToken(jsxTokTypes.jsxName, this.input.slice(startPos, this.pos))
      }

      /**
       * Parses JSX identifiers.
       * @returns The AST node.
       */
      jsx_parseIdentifier(): any {
        const node = this.startNode()
        if (this.type === jsxTokTypes.jsxName) {
          node.name = this.value
        }
        else if (this.type.keyword) {
          node.name = this.type.keyword
        }
        else if (options.loose && this.type === baseTokTypes.name) {
          node.name = this.value
        }
        else {
          this.unexpected()
        }
        this.next()
        return this.finishNode(node, 'JSXIdentifier')
      }

      /**
       * Parses JSX namespaced names.
       * @returns The AST node.
       */
      jsx_parseNamespacedName(): any {
        const start = this.start
        const startLoc = this.startLoc
        const name = this.jsx_parseIdentifier()
        if (!options.allowNamespaces || !this.eat(baseTokTypes.colon))
          return name
        const node = this.startNodeAt(start, startLoc)
        node.namespace = name
        node.name = this.jsx_parseIdentifier()
        return this.finishNode(node, 'JSXNamespacedName')
      }

      /**
       * Parses JSX element names.
       * @returns The AST node.
       */
      jsx_parseElementName(): any {
        if (this.type === jsxTokTypes.jsxTagEnd || (options.loose && this.type === baseTokTypes.eof))
          return ''
        const start = this.start
        const startLoc = this.startLoc
        let name = this.jsx_parseNamespacedName()
        while (this.eat(baseTokTypes.dot)) {
          if (name.type !== 'JSXNamespacedName' && !options.allowNamespacedObjects)
            this.unexpected()
          const node = this.startNodeAt(start, startLoc)
          node.object = name
          node.property = this.jsx_parseIdentifier()
          name = this.finishNode(node, 'JSXMemberExpression')
        }
        return name
      }

      /**
       * Parses JSX attribute values.
       * @returns The AST node.
       */
      jsx_parseAttributeValue(): any {
        switch (this.type) {
          case baseTokTypes.braceL:
            try {
              const expr = this.jsx_parseExpressionContainer()
              if (expr.expression.type === 'JSXEmptyExpression') {
                this.raise(expr.start, 'JSX attributes must only be assigned a non-empty expression')
              }
              return expr
            }
            catch (error) {
              if (!options.loose)
                throw error
              return null
            }
          case jsxTokTypes.jsxTagStart:
          case baseTokTypes.string:
            return this.parseExprAtom()
          default:
            if (this.type.label === 'name')
              return this.parseExprAtom()
            this.raise(this.start, 'JSX value should be either an expression or a quoted JSX text')
        }
      }

      /**
       * Parses JSX empty expressions.
       * @returns The AST node.
       */
      jsx_parseEmptyExpression(): any {
        const node = this.startNodeAt(this.lastTokEnd, this.lastTokEndLoc)
        return this.finishNodeAt(node, 'JSXEmptyExpression', this.start, this.startLoc)
      }

      /**
       * Parses JSX object properties.
       * @returns The AST node.
       */
      jsx_parseObjectProperty(): any {
        const node = this.startNode()
        if (this.type.keyword)
          this.type = baseTokTypes.name
        node.key = (this.type === baseTokTypes.num || this.type === baseTokTypes.string || this.type.label === 'name') ? this.parseExprAtom() : null
        if (this.eat(baseTokTypes.colon)) {
          if (this.type === baseTokTypes.eof && options.loose)
            return
          node.value = this.parseMaybeAssign(false, undefined)
        }
        else {
          node.value = node.key
        }
        return this.finishNode(node, 'JSXProperty')
      }

      /**
       * Parses JSX object properties list.
       * @returns Array of properties.
       */
      jsx_parseObjectProperties(): any[] {
        const properties: any[] = []
        let first = true
        for (;;) {
          if (this.eat(baseTokTypes.braceR) || this.eat(baseTokTypes.eof))
            break
          if (first) {
            first = false
          }
          else {
            this.expect(baseTokTypes.comma)
            if (this.afterTrailingComma(baseTokTypes.braceR))
              break
          }
          const prop = this.jsx_parseObjectProperty()
          if (prop)
            properties.push(prop)
        }
        return properties
      }

      /**
       * Parses JSX objects.
       * @returns The AST node.
       */
      jsx_parseObject(): any {
        const node = this.startNode()
        this.next()
        node.properties = this.jsx_parseObjectProperties()
        return this.finishNode(node, 'JSXObject')
      }

      /**
       * Parses JSX expression lists.
       * @returns Array of expressions.
       */
      jsx_parseExprList(): any[] {
        const elements: any[] = []
        let first = true
        try {
          for (;;) {
            if (this.eat(baseTokTypes.bracketR) || this.eat(baseTokTypes.eof))
              break
            if (first) {
              first = false
            }
            else {
              if (this.type !== jsxTokTypes.jsxTagStart)
                this.expect(baseTokTypes.comma)
              if (this.afterTrailingComma(baseTokTypes.bracketR))
                break
            }
            let element: any
            if (this.type === baseTokTypes.comma) {
              element = null
            }
            else if (this.type === baseTokTypes.ellipsis) {
              element = this.parseSpread()
            }
            else if (this.type === baseTokTypes.braceL) {
              element = this.jsx_parseObject()
            }
            else if (this.type === jsxTokTypes.jsxTagStart) {
              element = this.jsx_parseElement()
            }
            else {
              element = this.parseExprAtom()
            }
            elements.push(element)
          }
        }
        catch (error) {
          if (!options.loose)
            throw error
        }
        return elements
      }

      /**
       * Parses JSX maybe list or object.
       * @returns The AST node.
       */
      jsx_parseMaybeListOrObject(): any {
        const node = this.startNode()
        if (this.eat(baseTokTypes.bracketL)) {
          node.elements = this.jsx_parseExprList()
          return this.finishNode(node, 'JSXArrayExpression')
        }
        else if (this.eat(baseTokTypes.braceL)) {
          node.properties = this.jsx_parseObjectProperties()
          return this.finishNode(node, 'JSXObject')
        }
        else {
          return this.parseExpression()
        }
      }

      /**
       * Parses JSX expression containers.
       * @returns The AST node.
       */
      jsx_parseExpressionContainer(): any {
        const node = this.startNode()
        this.next()
        node.expression = this.type === baseTokTypes.braceR ? this.jsx_parseEmptyExpression() : this.jsx_parseMaybeListOrObject()
        if (options.loose) {
          this.eat(baseTokTypes.braceR) || (this.curContext() !== baseTokContexts.b_expr || this.context.pop())
        }
        else {
          this.expect(baseTokTypes.braceR)
        }
        return this.finishNode(node, 'JSXExpressionContainer')
      }

      /**
       * Parses JSX attributes.
       * @returns The AST node.
       */
      jsx_parseAttribute(): any {
        const node = this.startNode()
        try {
          if (this.eat(baseTokTypes.braceL)) {
            this.expect(baseTokTypes.ellipsis)
            node.argument = this.parseMaybeAssign()
            this.expect(baseTokTypes.braceR)
            return this.finishNode(node, 'JSXSpreadAttribute')
          }
          node.name = this.jsx_parseNamespacedName()
          node.value = this.eat(baseTokTypes.eq) ? this.jsx_parseAttributeValue() : null
        }
        catch (error) {
          if (!options.loose)
            throw error
          node.name = ''
          node.value = null
        }
        return this.finishNode(node, 'JSXAttribute')
      }

      /**
       * Parses JSX opening elements.
       * @param start - Start position.
       * @param startLoc - Start location.
       * @returns The AST node.
       */
      jsx_parseOpeningElementAt(start: number, startLoc: any): any {
        const node = this.startNodeAt(start, startLoc)
        node.attributes = []
        const name = this.jsx_parseElementName()
        if (name)
          node.name = name
        if (options.addDataIds) {
          const attrNode = this.startNode()
          const idNode = this.startNode()
          const valNode = this.startNode()
          idNode.name = 'data-id'
          valNode.raw = start.toString()
          valNode.value = start.toString()
          attrNode.name = this.finishNode(idNode, 'JSXIdentifier')
          attrNode.value = this.finishNode(valNode, 'Literal')
          node.attributes.push(this.finishNode(attrNode, 'JSXAttribute'))
        }
        for (;;) {
          if (this.type === baseTokTypes.slash || this.type === jsxTokTypes.jsxTagEnd || (options.loose && this.type === baseTokTypes.eof))
            break
          const pos = this.pos
          if (options.loose && this.eat(baseTokTypes.comma))
            continue
          if (options.loose && (this.type === jsxTokTypes.jsxTagStart || this.type === baseTokTypes.bracketR))
            break
          node.attributes.push(this.jsx_parseAttribute())
          if (options.loose && this.pos === pos) {
            for (;;) {
              if (this.type === baseTokTypes.slash || this.type === jsxTokTypes.jsxTagEnd || this.type === baseTokTypes.eof)
                break
              try {
                this.next()
              }
              catch {
                return this.finishNode(node, name ? 'JSXOpeningElement' : 'JSXOpeningFragment')
              }
            }
            break
          }
        }
        node.selfClosing = this.eat(baseTokTypes.slash)
        if (this.type === jsxTokTypes.jsxTagEnd) {
          this.eat(jsxTokTypes.jsxTagEnd)
        }
        else if (options.loose && this.type === baseTokTypes.eof) {
          node.isPartial = true
        }
        else if (options.loose && (this.type === jsxTokTypes.jsxTagStart || this.type === baseTokTypes.bracketR)) {
          node.selfClosing = true
        }
        else {
          this.unexpected()
        }
        return this.finishNode(node, name ? 'JSXOpeningElement' : 'JSXOpeningFragment')
      }

      /**
       * Parses JSX closing elements.
       * @param start - Start position.
       * @param startLoc - Start location.
       * @returns The AST node.
       */
      jsx_parseClosingElementAt(start: number, startLoc: any): any {
        const node = this.startNodeAt(start, startLoc)
        const name = this.jsx_parseElementName()
        if (name)
          node.name = name
        if (this.type === jsxTokTypes.jsxTagEnd) {
          this.eat(jsxTokTypes.jsxTagEnd)
        }
        else if (options.loose && this.type === baseTokTypes.eof) {
          node.isPartial = true
        }
        else {
          this.unexpected()
        }
        return this.finishNode(node, name ? 'JSXClosingElement' : 'JSXClosingFragment')
      }

      /**
       * Parses JSX elements.
       * @param start - Start position.
       * @param startLoc - Start location.
       * @returns The AST node.
       */
      jsx_parseElementAt(start: number, startLoc: any): any {
        const node = this.startNodeAt(start, startLoc)
        const children: any[] = []
        const opening = this.jsx_parseOpeningElementAt(start, startLoc)
        if (opening.isPartial)
          node.isPartial = true
        let closing: any = null
        if (!opening.selfClosing) {
          // eslint-disable-next-line no-labels
          loop: for (;;) {
            try {
              switch (this.type) {
                case jsxTokTypes.jsxTagStart:
                  const childStart = this.start
                  const childStartLoc = this.startLoc
                  this.next()
                  if (this.eat(baseTokTypes.slash)) {
                    closing = this.jsx_parseClosingElementAt(childStart, childStartLoc)
                    if (closing.isPartial)
                      node.isPartial = true
                    // eslint-disable-next-line no-labels
                    break loop
                  }
                  children.push(this.jsx_parseElementAt(childStart, childStartLoc))
                  break
                case jsxTokTypes.jsxText:
                  children.push(this.parseExprAtom())
                  break
                case baseTokTypes.braceL:
                  children.push(this.jsx_parseExpressionContainer())
                  break
                default:
                  this.unexpected()
              }
            }
            catch (error) {
              if (!options.loose)
                throw error
              node.isPartial = true
              if (this.type === baseTokTypes.eof)
                break
              for (;;) {
                if (this.type === jsxTokTypes.jsxTagStart)
                  break
                try {
                  this.next()
                }
                catch {
                  ++this.pos
                }
                if (this.type === baseTokTypes.eof)
                  break
              }
            }
          }
          if (!options.loose && getQualifiedName(closing.name) !== getQualifiedName(opening.name)) {
            this.raise(closing.start, `Expected corresponding JSX closing tag for <${getQualifiedName(opening.name)}>`)
          }
        }
        const elementType = opening.name ? 'Element' : 'Fragment'
        node[`opening${elementType}`] = opening
        node[`closing${elementType}`] = closing
        node.children = children
        if (this.type === baseTokTypes.relational && this.value === '<') {
          this.raise(this.start, 'Adjacent JSX elements must be wrapped in an enclosing tag')
        }
        return this.finishNode(node, `JSX${elementType}`)
      }

      /**
       * Parses JSX text.
       * @returns The AST node.
       */
      jsx_parseText(): any {
        const node = this.parseLiteral(this.value)
        node.type = 'JSXText'
        return node
      }

      /**
       * Parses JSX elements.
       * @returns The AST node.
       */
      jsx_parseElement(): any {
        const start = this.start
        const startLoc = this.startLoc
        this.next()
        return this.jsx_parseElementAt(start, startLoc)
      }

      /**
       * Parses maybe unterminated JSX strings.
       * @returns The AST node.
       */
      jsx_parseMaybeUnterminatedString(): any {
        const node = this.parseLiteral(this.value)
        if (node.raw[0] === '"' || node.raw[0] === '\'') {
          const quote = node.raw[0]
          if (options.loose && (node.raw[node.raw.length - 1] !== quote || node.raw.length === 1)) {
            node.raw += quote
            node.isPartial = true
            node.type = 'JSXText'
          }
        }
        return node
      }

      /**
       * Parses expression atoms, extended for JSX.
       * @param refDestructuringErrors - Reference for destructuring errors.
       * @returns The AST node.
       */
      parseExprAtom(refDestructuringErrors?: any): any {
        if (this.type === jsxTokTypes.jsxText)
          return this.jsx_parseText()
        if (this.type === jsxTokTypes.jsxTagStart)
          return this.jsx_parseElement()
        if (this.type === baseTokTypes.string)
          return this.jsx_parseMaybeUnterminatedString()
        if (this.type === baseTokTypes.bracketL || this.type === baseTokTypes.braceL)
          return this.jsx_parseMaybeListOrObject()
        if (this.type === baseTokTypes.plusMin)
          return super.parseMaybeUnary()
        return super.parseExprAtom(refDestructuringErrors)
      }

      /**
       * Parses identifiers, allowing JSX.
       * @param liberal - Whether to be liberal.
       * @returns The AST node.
       */
      parseIdent(_liberal?: boolean): any {
        return super.parseIdent(true)
      }

      /**
       * Checks if semicolon can be inserted, extended for JSX.
       * @returns Whether semicolon can be inserted.
       */
      canInsertSemicolon(): boolean {
        return (options.loose && this.type === jsxTokTypes.jsxTagStart) || super.canInsertSemicolon()
      }

      /**
       * Reads tokens, extended for JSX.
       * @param code - The character code.
       * @returns The token.
       */
      readToken(code: number): any {
        const context = this.curContext()
        if (context === tc_expr)
          return this.jsx_readToken()
        if (context === tc_oTag || context === tc_cTag) {
          if (isIdentifierStart(code))
            return this.jsx_readWord()
          if (code === 62) {
            ++this.pos
            return this.finishToken(jsxTokTypes.jsxTagEnd)
          }
          if ((code === 34 || code === 39) && context === tc_oTag)
            return this.jsx_readString(code)
        }
        if (code === 60 && (this.exprAllowed || options.loose) && this.input.charCodeAt(this.pos + 1) !== 33) {
          ++this.pos
          return this.finishToken(jsxTokTypes.jsxTagStart)
        }
        if (code === 34 || code === 39)
          return this.jsx_readString(code)
        return super.readToken(code)
      }

      /**
       * Updates context, extended for JSX.
       * @param prevType - Previous token type.
       */
      updateContext(prevType: any): void {
        if (this.type === baseTokTypes.braceL) {
          const context = this.curContext()
          if (context === tc_oTag) {
            this.context.push(baseTokContexts.b_expr)
          }
          else if (context === tc_expr) {
            this.context.push(baseTokContexts.b_tmpl)
          }
          else {
            super.updateContext(prevType)
          }
          this.exprAllowed = true
        }
        else if (this.type !== baseTokTypes.slash || prevType !== jsxTokTypes.jsxTagStart) {
          super.updateContext(prevType)
        }
        else {
          this.context.length -= 2
          this.context.push(tc_cTag)
          this.exprAllowed = false
        }
      }
    }
  }
}


const jsxCache = new WeakMap()

/**
 * Sets up JSX tokens for the given Acorn instance.
 * @param acornInstance - The Acorn parser instance.
 * @returns The JSX token configuration.
 */
function setupJsxTokens(acornInstance: any): any {
  acornInstance = acornInstance.Parser?.acorn || acornInstance
  let jsxTokens = jsxCache.get(acornInstance)
  if (!jsxTokens) {
    const tokTypes = acornInstance.tokTypes
    const TokContext = acornInstance.TokContext
    const TokenType = acornInstance.TokenType
    const tc_oTag = new TokContext('<tag', false)
    const tc_cTag = new TokContext('</tag', false)
    const tc_expr = new TokContext('<tag>...</tag>', true, true)
    const jsxTokTypes = {
      jsxName: new TokenType('jsxName'),
      jsxText: new TokenType('jsxText', { beforeExpr: true }),
      jsxTagStart: new TokenType('jsxTagStart', { startsExpr: true }),
      jsxTagEnd: new TokenType('jsxTagEnd'),
    }
    jsxTokTypes.jsxTagStart.updateContext = function () {
      this.context.push(tc_expr)
      this.context.push(tc_oTag)
      this.exprAllowed = false
    }
    jsxTokTypes.jsxTagEnd.updateContext = function (prevType: any) {
      const popped = this.context.pop()
      if ((popped === tc_oTag && prevType === tokTypes.slash) || popped === tc_cTag) {
        this.context.pop()
        this.exprAllowed = this.curContext() === tc_expr
      }
      else {
        this.exprAllowed = true
      }
    }
    jsxTokens = {
      tokContexts: {
        tc_oTag,
        tc_cTag,
        tc_expr,
      },
      tokTypes: jsxTokTypes,
    }
    jsxCache.set(acornInstance, jsxTokens)
  }
  return jsxTokens
}

/**
 * Gets the qualified name of a JSX element.
 * @param name - The name node.
 * @returns The qualified name string.
 */
function getQualifiedName(name: any): string | undefined {
  if (!name)
    return name
  if (name.type === 'JSXIdentifier')
    return name.name
  if (name.type === 'JSXNamespacedName')
    return `${name.namespace.name}:${name.name.name}`
  if (name.type === 'JSXMemberExpression')
    return `${getQualifiedName(name.object)}.${getQualifiedName(name.property)}`
  return undefined
}

export { parseStrict }
