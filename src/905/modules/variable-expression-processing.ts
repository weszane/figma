// Phase 21: Advanced Variable and Expression Processing Systems
// Extracted from 472793.ts - tX, tQ functions and related variable/expression utilities

// Interfaces for Variable and Expression Processing
export interface VariableValue {
  boolValue?: boolean
  textValue?: string
  floatValue?: number
  colorValue?: { r: number, g: number, b: number, a?: number }
  alias?: string
  expressionValue?: {
    expressionFunction: string
    expressionArguments: VariableValue[]
  }
}

export interface ExpressionFunction {
  type: 'ADDITION' | 'SUBTRACTION' | 'MULTIPLICATION' | 'DIVISION'
  | 'EQUALS' | 'NOT_EQUAL' | 'LESS_THAN' | 'LESS_THAN_OR_EQUAL'
  | 'GREATER_THAN' | 'GREATER_THAN_OR_EQUAL' | 'AND' | 'OR' | 'NOT'
  | 'STRINGIFY' | 'TERNARY' | 'VAR_MODE_LOOKUP' | 'NEGATE' | 'IS_TRUTHY'
  | 'RESOLVE_VARIANT'
}

export interface VariableDataType {
  type: 'BOOLEAN' | 'COLOR' | 'FLOAT' | 'STRING' | 'VARIABLE_ALIAS'
  | 'EXPRESSION' | 'SYMBOL_ID' | 'MAP'
}

export interface ProcessedVariable {
  value?: VariableValue
  dataType?: string
  resolvedDataType?: string
}

export interface VariableExpressionConfig {
  supportedFunctions: Set<string>
  supportedDataTypes: Set<string>
  enableExpressionValidation: boolean
  maxExpressionDepth: number
}

// Advanced Variable Expression Processor
export class AdvancedVariableExpressionProcessor {
  private config: VariableExpressionConfig
  private hrUtilities: any
  private dIFunction: any
  private sHFunction: any

  constructor(config: VariableExpressionConfig, hrUtilities: any, dIFunction: any, sHFunction: any) {
    this.config = config
    this.hrUtilities = hrUtilities
    this.dIFunction = dIFunction
    this.sHFunction = sHFunction
  }

  // Convert internal variable to external format (original tX function)
  convertVariableToExternal(e: any): ProcessedVariable {
    let t: ProcessedVariable = {}

    if (e.value !== undefined) {
      t.value = this.processVariableValue(e.value)
    }

    if (e.type !== undefined) {
      t.dataType = this.convertDataType(e.type)
    }

    if (e.resolvedType !== undefined) {
      t.resolvedDataType = this.convertResolvedDataType(e.resolvedType)
    }

    return t
  }

  // Process variable value with all supported types
  private processVariableValue(e: any): VariableValue {
    let t: VariableValue = {}

    if (typeof e === 'boolean') {
      t.boolValue = e
    }
    else if (typeof e === 'string') {
      t.textValue = e
    }
    else if (typeof e === 'number') {
      t.floatValue = e
    }
    else if ('r' in e && 'g' in e && 'b' in e && 'a' in e) {
      t.colorValue = e
    }
    else if ('r' in e && 'g' in e && 'b' in e) {
      t.colorValue = {
        r: e.r,
        g: e.g,
        b: e.b,
        a: 1,
      }
    }
    else if ('type' in e && 'id' in e && e.type === 'VARIABLE_ALIAS') {
      let i = this.sHFunction(e.id)
      t.alias = i !== null ? i : this.hrUtilities.w1(this.hrUtilities.Hr)
    }
    else if ('expressionFunction' in e && 'expressionArguments' in e) {
      let i: VariableValue[] = []
      for (let t of e.expressionArguments || []) {
        let e = this.convertVariableToExternal(t)
        i.push(e.value || {} as VariableValue)
      }
      t.expressionValue = {
        expressionFunction: this.convertExpressionFunction(e.expressionFunction),
        expressionArguments: i,
      }
    }
    else {
      throw new Error(`Invalid variable value type provided: ${JSON.stringify(e)}`)
    }

    return t
  }

  // Convert expression function type
  private convertExpressionFunction(e: string): string {
    switch (e) {
      case 'ADDITION':
        return 'ADDITION'
      case 'SUBTRACTION':
        return 'SUBTRACTION'
      case 'RESOLVE_VARIANT':
        return 'RESOLVE_VARIANT'
      case 'MULTIPLICATION':
        return 'MULTIPLY'
      case 'DIVISION':
        return 'DIVIDE'
      case 'EQUALS':
        return 'EQUALS'
      case 'NOT_EQUAL':
        return 'NOT_EQUAL'
      case 'LESS_THAN':
        return 'LESS_THAN'
      case 'LESS_THAN_OR_EQUAL':
        return 'LESS_THAN_OR_EQUAL'
      case 'GREATER_THAN':
        return 'GREATER_THAN'
      case 'GREATER_THAN_OR_EQUAL':
        return 'GREATER_THAN_OR_EQUAL'
      case 'AND':
        return 'AND'
      case 'OR':
        return 'OR'
      case 'NOT':
        return 'NOT'
      case 'STRINGIFY':
        return 'STRINGIFY'
      case 'TERNARY':
        return 'TERNARY'
      case 'VAR_MODE_LOOKUP':
        return 'VAR_MODE_LOOKUP'
      case 'NEGATE':
        return 'NEGATE'
      case 'IS_TRUTHY':
        return 'IS_TRUTHY'
      default:
        throw new Error(`We do not support this expression function: ${e}`)
    }
  }

  // Convert data type from internal to external
  private convertDataType(e: string): string {
    switch (e) {
      case 'BOOLEAN':
        return 'BOOLEAN'
      case 'COLOR':
        return 'COLOR'
      case 'FLOAT':
        return 'FLOAT'
      case 'STRING':
        return 'STRING'
      case 'VARIABLE_ALIAS':
        return 'ALIAS'
      case 'EXPRESSION':
        return 'EXPRESSION'
      case 'SYMBOL_ID':
        return 'SYMBOL_ID'
      case 'MAP':
        return 'MAP'
      default:
        throw new Error(`We do not support this variable data type: ${e}`)
    }
  }

  // Convert resolved data type
  private convertResolvedDataType(e: string): string {
    switch (e) {
      case 'BOOLEAN':
        return 'BOOLEAN'
      case 'COLOR':
        return 'COLOR'
      case 'FLOAT':
        return 'FLOAT'
      case 'STRING':
        return 'STRING'
      default:
        throw new Error(`We do not support this variable resolved data type: ${e}`)
    }
  }
}

// Advanced Variable Parser for External to Internal Conversion
export class AdvancedVariableParser {
  private processor: AdvancedVariableExpressionProcessor
  private dIFunction: any

  constructor(processor: AdvancedVariableExpressionProcessor, dIFunction: any) {
    this.processor = processor
    this.dIFunction = dIFunction
  }

  // Convert external variable to internal format (original tQ function)
  convertVariableToInternal(e: any): any {
    if (e === undefined)
      return undefined

    let t: any = {}

    if (e.value !== undefined) {
      t.value = this.parseVariableValue(e.value)
    }

    if (e.type !== undefined) {
      t.dataType = this.parseDataType(e.dataType)
    }

    if (e.resolvedDataType !== undefined) {
      t.resolvedType = this.parseResolvedDataType(e.resolvedDataType)
    }

    return t
  }

  // Parse variable value from external format
  private parseVariableValue(e: any): any {
    if (e.floatValue !== undefined)
      return e.floatValue
    if (e.textValue !== undefined)
      return e.textValue
    if (e.boolValue !== undefined)
      return e.boolValue
    if (e.colorValue !== undefined)
      return e.colorValue
    if (e.alias !== undefined) {
      return {
        type: 'VARIABLE_ALIAS',
        id: this.dIFunction(e.alias),
      }
    }
    if (e.expressionValue !== undefined
      && e.expressionValue.expressionFunction !== undefined
      && e.expressionValue.expressionArguments) {
      let t: any[] = []
      for (let i of e.expressionValue.expressionArguments || []) {
        let e = this.convertVariableToInternal(i)
        e && t.push(e)
      }
      return {
        expressionArguments: t,
        expressionFunction: this.parseExpressionFunction(e.expressionValue.expressionFunction),
      }
    }
    if (e.alias) {
      return {
        type: 'VARIABLE_ALIAS',
        id: this.dIFunction(e.alias),
      }
    }
    else {
      throw new Error(`Invalid variable value type provided: ${JSON.stringify(e)}`)
    }
  }

  // Parse expression function from external to internal
  private parseExpressionFunction(e: string): string {
    switch (e) {
      case 'ADDITION':
        return 'ADDITION'
      case 'SUBTRACTION':
        return 'SUBTRACTION'
      case 'RESOLVE_VARIANT':
        return 'RESOLVE_VARIANT'
      case 'MULTIPLY':
        return 'MULTIPLICATION'
      case 'DIVIDE':
        return 'DIVISION'
      case 'EQUALS':
        return 'EQUALS'
      case 'NOT_EQUAL':
        return 'NOT_EQUAL'
      case 'LESS_THAN':
        return 'LESS_THAN'
      case 'LESS_THAN_OR_EQUAL':
        return 'LESS_THAN_OR_EQUAL'
      case 'GREATER_THAN':
        return 'GREATER_THAN'
      case 'GREATER_THAN_OR_EQUAL':
        return 'GREATER_THAN_OR_EQUAL'
      case 'AND':
        return 'AND'
      case 'OR':
        return 'OR'
      case 'NOT':
        return 'NOT'
      case 'STRINGIFY':
        return 'STRINGIFY'
      case 'TERNARY':
        return 'TERNARY'
      case 'VAR_MODE_LOOKUP':
        return 'VAR_MODE_LOOKUP'
      case 'NEGATE':
        return 'NEGATE'
      case 'IS_TRUTHY':
        return 'IS_TRUTHY'
      default:
        throw new Error(`We do not support this expression function: ${e}`)
    }
  }

  // Parse data type from external to internal
  private parseDataType(e: string): string {
    switch (e) {
      case 'BOOLEAN':
        return 'BOOLEAN'
      case 'COLOR':
        return 'COLOR'
      case 'FLOAT':
        return 'FLOAT'
      case 'STRING':
        return 'STRING'
      case 'ALIAS':
        return 'VARIABLE_ALIAS'
      case 'EXPRESSION':
        return 'EXPRESSION'
      case 'SYMBOL_ID':
        return 'SYMBOL_ID'
      case 'MAP':
        return 'MAP'
      default:
        throw new Error(`We do not support this variable data type: ${e}`)
    }
  }

  // Parse resolved data type
  private parseResolvedDataType(e: string): string {
    switch (e) {
      case 'BOOLEAN':
        return 'BOOLEAN'
      case 'COLOR':
        return 'COLOR'
      case 'FLOAT':
        return 'FLOAT'
      case 'STRING':
        return 'STRING'
      default:
        throw new Error(`We do not support this variable resolved data type: ${e}`)
    }
  }
}

// Factory function to create variable expression processor
export function createAdvancedVariableExpressionProcessor(
  config?: Partial<VariableExpressionConfig>,
  hrUtilities?: any,
  dIFunction?: any,
  sHFunction?: any,
): AdvancedVariableExpressionProcessor {
  const defaultConfig: VariableExpressionConfig = {
    supportedFunctions: new Set([
      'ADDITION',
      'SUBTRACTION',
      'MULTIPLICATION',
      'DIVISION',
      'EQUALS',
      'NOT_EQUAL',
      'LESS_THAN',
      'GREATER_THAN',
      'AND',
      'OR',
      'NOT',
      'STRINGIFY',
      'TERNARY',
    ]),
    supportedDataTypes: new Set([
      'BOOLEAN',
      'COLOR',
      'FLOAT',
      'STRING',
      'VARIABLE_ALIAS',
    ]),
    enableExpressionValidation: true,
    maxExpressionDepth: 10,
  }

  const finalConfig = { ...defaultConfig, ...config }
  return new AdvancedVariableExpressionProcessor(finalConfig, hrUtilities, dIFunction, sHFunction)
}

// Factory function to create variable parser
export function createAdvancedVariableParser(
  processor: AdvancedVariableExpressionProcessor,
  dIFunction?: any,
): AdvancedVariableParser {
  return new AdvancedVariableParser(processor, dIFunction)
}

// Utility functions for variable and expression processing
export class VariableExpressionUtils {
  // Convert resolved data type to internal enum
  static convertResolvedDataType(e: string): any {
    // This would need access to the rXF enum from the main file
    switch (e) {
      case 'BOOLEAN':
        return 'BOOLEAN' // rXF.BOOLEAN
      case 'FLOAT':
        return 'FLOAT' // rXF.FLOAT
      case 'STRING':
        return 'STRING' // rXF.STRING
      case 'COLOR':
        return 'COLOR' // rXF.COLOR
      case 'MAP':
        return 'MAP' // rXF.MAP
      case 'SYMBOL_ID':
        return 'SYMBOL_ID' // rXF.SYMBOL_ID
      default:
        throw new Error(`Unsupported resolved data type: ${e}`)
    }
  }

  // Convert resolved data type with external enum access
  static convertResolvedDataTypeWithEnum(e: string, rXF: any): any {
    switch (e) {
      case 'BOOLEAN':
        return rXF.BOOLEAN
      case 'FLOAT':
        return rXF.FLOAT
      case 'STRING':
        return rXF.STRING
      case 'COLOR':
        return rXF.COLOR
      case 'MAP':
        return rXF.MAP
      case 'SYMBOL_ID':
        return rXF.SYMBOL_ID
      default:
        throw new Error(`Unsupported resolved data type: ${e}`)
    }
  }

  // Convert expression function to internal enum
  static convertExpressionFunctionToEnum(e: string): any {
    // This would need access to the JTp enum from the main file
    switch (e) {
      case 'ADDITION':
        return 'ADDITION' // JTp.ADDITION
      case 'SUBTRACTION':
        return 'SUBTRACTION' // JTp.SUBTRACTION
      case 'RESOLVE_VARIANT':
        return 'RESOLVE_VARIANT' // JTp.RESOLVE_VARIANT
      case 'MULTIPLY':
        return 'MULTIPLY' // JTp.MULTIPLY
      case 'DIVIDE':
        return 'DIVIDE' // JTp.DIVIDE
      case 'EQUALS':
        return 'EQUALS' // JTp.EQUALS
      case 'NOT_EQUAL':
        return 'NOT_EQUAL' // JTp.NOT_EQUAL
      case 'LESS_THAN':
        return 'LESS_THAN' // JTp.LESS_THAN
      case 'LESS_THAN_OR_EQUAL':
        return 'LESS_THAN_OR_EQUAL' // JTp.LESS_THAN_OR_EQUAL
      case 'GREATER_THAN':
        return 'GREATER_THAN' // JTp.GREATER_THAN
      case 'GREATER_THAN_OR_EQUAL':
        return 'GREATER_THAN_OR_EQUAL' // JTp.GREATER_THAN_OR_EQUAL
      case 'AND':
        return 'AND' // JTp.AND
      case 'OR':
        return 'OR' // JTp.OR
      case 'NOT':
        return 'NOT' // JTp.NOT
      case 'STRINGIFY':
        return 'STRINGIFY' // JTp.STRINGIFY
      case 'TERNARY':
        return 'TERNARY' // JTp.TERNARY
      case 'VAR_MODE_LOOKUP':
        return 'VAR_MODE_LOOKUP' // JTp.VAR_MODE_LOOKUP
      case 'NEGATE':
        return 'NEGATE' // JTp.NEGATE
      case 'IS_TRUTHY':
        return 'IS_TRUTHY' // JTp.IS_TRUTHY
      default:
        throw new Error(`Unsupported expression function: ${e}`)
    }
  }

  // Convert expression function with external enum access
  static convertExpressionFunctionWithEnum(e: string, JTp: any): any {
    switch (e) {
      case 'ADDITION':
        return JTp.ADDITION
      case 'SUBTRACTION':
        return JTp.SUBTRACTION
      case 'RESOLVE_VARIANT':
        return JTp.RESOLVE_VARIANT
      case 'MULTIPLY':
        return JTp.MULTIPLY
      case 'DIVIDE':
        return JTp.DIVIDE
      case 'EQUALS':
        return JTp.EQUALS
      case 'NOT_EQUAL':
        return JTp.NOT_EQUAL
      case 'LESS_THAN':
        return JTp.LESS_THAN
      case 'LESS_THAN_OR_EQUAL':
        return JTp.LESS_THAN_OR_EQUAL
      case 'GREATER_THAN':
        return JTp.GREATER_THAN
      case 'GREATER_THAN_OR_EQUAL':
        return JTp.GREATER_THAN_OR_EQUAL
      case 'AND':
        return JTp.AND
      case 'OR':
        return JTp.OR
      case 'NOT':
        return JTp.NOT
      case 'STRINGIFY':
        return JTp.STRINGIFY
      case 'TERNARY':
        return JTp.TERNARY
      case 'VAR_MODE_LOOKUP':
        return JTp.VAR_MODE_LOOKUP
      case 'NEGATE':
        return JTp.NEGATE
      case 'IS_TRUTHY':
        return JTp.IS_TRUTHY
      default:
        throw new Error(`Unsupported expression function: ${e}`)
    }
  }

  // Validate variable expression depth
  static validateExpressionDepth(expr: any, maxDepth: number = 10): boolean {
    function checkDepth(e: any, currentDepth: number): number {
      if (currentDepth > maxDepth)
        return currentDepth

      if (e && e.expressionValue && e.expressionValue.expressionArguments) {
        let maxChildDepth = currentDepth
        for (let arg of e.expressionValue.expressionArguments) {
          const childDepth = checkDepth(arg, currentDepth + 1)
          maxChildDepth = Math.max(maxChildDepth, childDepth)
        }
        return maxChildDepth
      }

      return currentDepth
    }

    return checkDepth(expr, 0) <= maxDepth
  }

  // Validate expression function support
  static isExpressionFunctionSupported(func: string, supportedFunctions: Set<string>): boolean {
    return supportedFunctions.has(func)
  }
}
