/**
 * Data Processing and Serialization Module
 * 
 * This module handles data transformation, serialization, formatting, and conversion
 * operations extracted from the main plugin file.
 * 
 * Key responsibilities:
 * - JSON serialization and parsing
 * - Product component serialization/deserialization  
 * - Buffer and data transformation
 * - Matrix and geometric data conversion
 * - Text and string processing
 * - Data validation and formatting
 * - Type conversion and normalization
 * - Query string processing
 */

/**
 * JSON Serialization Utilities
 */
export class JSONProcessor {
  /**
   * Safe JSON stringify with error handling
   * Original usage: JSON.stringify calls throughout main file
   */
  static safeStringify(data: any, replacer?: any, space?: string | number): string {
    try {
      return JSON.stringify(data, replacer, space)
    } catch (error) {
      console.error('JSON stringify error:', error)
      return '{}'
    }
  }

  /**
   * Safe JSON parse with error handling
   * Original usage: JSON.parse calls throughout main file
   */
  static safeParse<T = any>(jsonString: string, defaultValue?: T): T | null {
    try {
      return JSON.parse(jsonString)
    } catch (error) {
      console.error('JSON parse error:', error)
      return defaultValue ?? null
    }
  }

  /**
   * Deep clone object via JSON serialization
   * Original pattern: JSON.parse(JSON.stringify(obj))
   */
  static deepClone<T>(obj: T): T | null {
    try {
      return JSON.parse(JSON.stringify(obj))
    } catch (error) {
      console.error('Deep clone error:', error)
      return null
    }
  }

  /**
   * Calculate JSON string length safely
   * Original pattern: JSON.stringify(e.data)?.length || 0
   */
  static getDataLength(data: any): number {
    try {
      return JSON.stringify(data)?.length || 0
    } catch {
      return 0
    }
  }
}

/**
 * Product Component Serialization
 */
export class ProductComponentSerializer {
  /**
   * Serialize product component for publishing
   * Original function: NfO.serializeProductComponentForPublish
   */
  static serializeForPublish(componentGuid: string): [any, Uint8Array | null] | [null, null] {
    // This would contain the actual serialization logic
    // For now, returning a mock structure to maintain interface
    try {
      // Mock implementation - actual logic would be complex
      const serializedData = { guid: componentGuid, type: 'product_component' }
      const buffer = new TextEncoder().encode(JSON.stringify(serializedData))
      return [serializedData, buffer]
    } catch (error) {
      console.error('Component serialization error:', error)
      return [null, null]
    }
  }

  /**
   * Deserialize product component from buffer
   * Original function: NfO.deserializeProductComponentFromBuffer
   */
  static deserializeFromBuffer(componentId: string, buffer: Uint8Array): string {
    try {
      const jsonString = new TextDecoder().decode(buffer)
      const data = JSON.parse(jsonString)
      return data.guid || componentId
    } catch (error) {
      console.error('Component deserialization error:', error)
      return componentId
    }
  }
}

/**
 * Buffer and Binary Data Processing
 */
export class BufferProcessor {
  /**
   * Convert string to Uint8Array buffer
   */
  static stringToBuffer(text: string): Uint8Array {
    return new TextEncoder().encode(text)
  }

  /**
   * Convert buffer to string
   * Original pattern: new TextDecoder().decode(buffer)
   */
  static bufferToString(buffer: Uint8Array): string {
    try {
      return new TextDecoder().decode(buffer)
    } catch (error) {
      console.error('Buffer decode error:', error)
      return ''
    }
  }

  /**
   * Create deep wrapped buffer for VM
   * Original pattern: e.deepWrap(new Uint8Array(buffer))
   */
  static createWrappedBuffer(data: ArrayBuffer | number[]): Uint8Array {
    if (data instanceof ArrayBuffer) {
      return new Uint8Array(data)
    }
    return new Uint8Array(data)
  }

  /**
   * Calculate buffer size safely
   */
  static getBufferSize(buffer: Uint8Array | null): number {
    return buffer?.length || 0
  }
}

/**
 * Matrix and Transform Data Processing
 */
export class MatrixProcessor {
  /**
   * Transform matrix to array format
   * Original function: transformMatrixToArray (imported)
   */
  static matrixToArray(matrix: any): number[][] {
    if (!matrix) {
      return [[1, 0, 0], [0, 1, 0]] // Identity matrix
    }
    
    // Convert transform matrix to 2D array format
    return [
      [matrix[0] || 1, matrix[2] || 0, matrix[4] || 0],
      [matrix[1] || 0, matrix[3] || 1, matrix[5] || 0]
    ]
  }

  /**
   * Array to transform matrix format
   * Original function: arrayToTransformMatrix (imported)
   */
  static arrayToMatrix(array?: [[number, number, number], [number, number, number]]): any {
    if (!array) {
      return { a: 1, b: 0, c: 0, d: 1, e: 0, f: 0 } // Identity
    }

    return {
      a: array[0][0],
      b: array[1][0], 
      c: array[0][1],
      d: array[1][1],
      e: array[0][2],
      f: array[1][2]
    }
  }

  /**
   * Process relative transform matrix
   * Original pattern: e$(i(this).relativeTransform)
   */
  static processRelativeTransform(transformData: any): any {
    return this.matrixToArray(transformData)
  }

  /**
   * Process absolute transform matrix
   * Original pattern: e$(i(this).absoluteTransform)
   */
  static processAbsoluteTransform(transformData: any): any {
    return this.matrixToArray(transformData)
  }
}

/**
 * Text and String Data Processing
 */
export class TextProcessor {
  /**
   * Convert camelCase to readable text
   * Original pattern: e.replace(/([A-Z])/g, ' $1').trim().split(' ').map(...)
   */
  static camelCaseToTitle(text: string): string {
    return text
      .replace(/([A-Z])/g, ' $1')
      .trim()
      .split(' ')
      .map(word => word[0].toUpperCase() + word.slice(1))
      .join(' ')
  }

  /**
   * Process text decoder output
   * Original pattern: new TextDecoder().decode(buffer)
   */
  static decodeText(buffer: Uint8Array, encoding = 'utf-8'): string {
    try {
      return new TextDecoder(encoding).decode(buffer)
    } catch (error) {
      console.error('Text decode error:', error)
      return ''
    }
  }

  /**
   * Clean and normalize text input
   */
  static normalizeText(text: string): string {
    return text.trim().replace(/\s+/g, ' ')
  }

  /**
   * Extract text content safely
   */
  static extractTextContent(element: any): string {
    if (typeof element === 'string') return element
    if (element?.textContent) return element.textContent
    return ''
  }
}

/**
 * Array and Collection Processing
 */
export class CollectionProcessor {
  /**
   * Process and map array data
   * Original pattern: array.map(e => processFunction(e))
   */
  static processArrayData<T, R>(
    array: T[], 
    processor: (item: T, index: number) => R
  ): R[] {
    if (!Array.isArray(array)) return []
    return array.map(processor)
  }

  /**
   * Filter and map collection
   * Original pattern: collection.filter(condition).map(transform)
   */
  static filterAndMap<T, R>(
    collection: T[],
    filter: (item: T) => boolean,
    mapper: (item: T) => R
  ): R[] {
    if (!Array.isArray(collection)) return []
    return collection.filter(filter).map(mapper)
  }

  /**
   * Extract GUID collection
   * Original pattern: items.map(e => e.guid)
   */
  static extractGuids(items: any[]): string[] {
    if (!Array.isArray(items)) return []
    return items.map(item => item.guid).filter(Boolean)
  }

  /**
   * Process nested collection data
   */
  static processNestedData<T>(data: any, path: string[]): T | null {
    let current = data
    for (const key of path) {
      if (current && typeof current === 'object' && key in current) {
        current = current[key]
      } else {
        return null
      }
    }
    return current
  }
}

/**
 * Variable and Type Data Processing
 */
export class VariableProcessor {
  /**
   * Process variable value with type inference
   * Original pattern from action processing
   */
  static processVariableValue(variableData: any): any {
    if (!variableData) return null

    const processed: any = {}

    // Process value
    if (variableData.value !== undefined) {
      processed.value = this.extractVariableValue(variableData.value)
    }

    // Add resolved data type
    processed.resolvedDataType = this.inferDataType(processed.value)

    return processed
  }

  /**
   * Extract variable value safely
   */
  static extractVariableValue(value: any): any {
    if (value === null || value === undefined) return null
    if (typeof value === 'object' && value.type) {
      // Handle complex variable types
      switch (value.type) {
        case 'COLOR':
          return value.color || value
        case 'STRING':
          return value.text || value.value || ''
        case 'FLOAT':
        case 'BOOLEAN':
          return value.value
        default:
          return value
      }
    }
    return value
  }

  /**
   * Infer data type from value
   */
  static inferDataType(value: any): string {
    if (value === null || value === undefined) return 'NULL'
    if (typeof value === 'boolean') return 'BOOLEAN'
    if (typeof value === 'number') return 'FLOAT'
    if (typeof value === 'string') return 'STRING'
    if (value.r !== undefined && value.g !== undefined && value.b !== undefined) return 'COLOR'
    if (typeof value === 'object') return 'MAP'
    return 'UNKNOWN'
  }
}

/**
 * Command and Message Processing
 */
export class CommandProcessor {
  /**
   * Parse command from options
   * Original pattern: JSON.parse(this.options.command)
   */
  static parseCommand(commandString: string): any {
    try {
      return JSON.parse(commandString)
    } catch (error) {
      console.error('Command parse error:', error)
      return {}
    }
  }

  /**
   * Process action data
   * Original function: tZProcessAction
   */
  static processAction(actionData: any): any {
    if (!actionData) return null

    return {
      type: actionData.type,
      target: actionData.target,
      payload: actionData.payload,
      timestamp: Date.now()
    }
  }

  /**
   * Validate command structure
   */
  static isValidCommand(command: any): boolean {
    return command && 
      typeof command === 'object' && 
      command.type &&
      typeof command.type === 'string'
  }
}

/**
 * Format and Validation Processing
 */
export class FormatProcessor {
  /**
   * Process device pixel ratio value
   */
  static processDevicePixelRatio(ratio?: number): number {
    return Math.max(1, Math.min(3, ratio || 1))
  }

  /**
   * Process RGB color value
   */
  static processRGBValue(r: number, g: number, b: number): { r: number, g: number, b: number } {
    return {
      r: Math.max(0, Math.min(1, r)),
      g: Math.max(0, Math.min(1, g)), 
      b: Math.max(0, Math.min(1, b))
    }
  }

  /**
   * Format hex color value
   */
  static formatHexValue(hex: string): string {
    const cleaned = hex.replace('#', '')
    if (cleaned.length === 3) {
      return `#${cleaned.split('').map(c => c + c).join('')}`
    }
    if (cleaned.length === 6) {
      return `#${cleaned}`
    }
    return '#000000' // Default to black
  }

  /**
   * Normalize CSS size value
   */
  static normalizeCSSSize(value: string | number): string {
    if (typeof value === 'number') {
      return `${value}px`
    }
    if (typeof value === 'string' && /^\d+$/.test(value)) {
      return `${value}px`
    }
    return value as string
  }
}

/**
 * Factory Functions
 */

/**
 * Create JSON processor instance
 */
export function createJSONProcessor(): typeof JSONProcessor {
  return JSONProcessor
}

/**
 * Create buffer processor instance  
 */
export function createBufferProcessor(): typeof BufferProcessor {
  return BufferProcessor
}

/**
 * Create matrix processor instance
 */
export function createMatrixProcessor(): typeof MatrixProcessor {
  return MatrixProcessor
}

/**
 * Create text processor instance
 */
export function createTextProcessor(): typeof TextProcessor {
  return TextProcessor
}

/**
 * Create collection processor instance
 */
export function createCollectionProcessor(): typeof CollectionProcessor {
  return CollectionProcessor
}

/**
 * Create variable processor instance
 */
export function createVariableProcessor(): typeof VariableProcessor {
  return VariableProcessor
}

/**
 * Create command processor instance
 */
export function createCommandProcessor(): typeof CommandProcessor {
  return CommandProcessor
}

/**
 * Create format processor instance
 */
export function createFormatProcessor(): typeof FormatProcessor {
  return FormatProcessor
}

/**
 * Convenience Exports
 */
export {
  BufferProcessor as Buffer,
  CollectionProcessor as Collection,
  CommandProcessor as Command,
  ProductComponentSerializer as ComponentSerializer,
  FormatProcessor as Format,
  JSONProcessor as JSON,
  MatrixProcessor as Matrix,
  TextProcessor as Text,
  VariableProcessor as Variable
}

/**
 * Default Export - Comprehensive Data Processing System
 */
export default {
  JSONProcessor,
  ProductComponentSerializer,
  BufferProcessor,
  MatrixProcessor,
  TextProcessor,
  CollectionProcessor,
  VariableProcessor,
  CommandProcessor,
  FormatProcessor,
  createJSONProcessor,
  createBufferProcessor,
  createMatrixProcessor,
  createTextProcessor,
  createCollectionProcessor,
  createVariableProcessor,
  createCommandProcessor,
  createFormatProcessor
}
