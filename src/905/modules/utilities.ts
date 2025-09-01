/**
 * Utility Functions and Helper Methods Module
 * 
 * This module contains various utility functions, helper methods, and common operations
 * extracted from the main plugin file to improve code organization and reusability.
 * 
 * Key responsibilities:
 * - URL manipulation and validation utilities
 * - Data transformation and conversion helpers
 * - Color palette and style constants
 * - Matrix and geometry operations
 * - Validation and type checking utilities
 * - String and format manipulation
 */

/**
 * Color Palettes and Style Constants
 */
export const COLOR_PALETTES = {
  STANDARD: {
    black: '#1E1E1E',
    gray: '#B3B3B3',
    red: '#F24822',
    orange: '#FFA629',
    yellow: '#FFCD29',
    green: '#14AE5C',
    blue: '#0D99FF',
    violet: '#9747FF',
    white: '#FFFFFF',
  },
  EXTENDED: {
    darkGray: '#757575',
    lightGray: '#E6E6E6',
  }
}

/**
 * Geometry and Matrix Utilities
 */
export class GeometryUtils {
  /**
   * Transform matrix to array format
   * Original function: eZ
   */
  static transformMatrixToArray(transform: any): any {
    if (!transform) {
      return {
        m00: 1,
        m01: 0,
        m02: 0,
        m10: 0,
        m11: 1,
        m12: 0,
      }
    }
    return transform
  }

  /**
   * Create identity matrix
   */
  static createIdentityMatrix(): any {
    return {
      m00: 1,
      m01: 0,
      m02: 0,
      m10: 0,
      m11: 1,
      m12: 0,
    }
  }

  /**
   * Check if two matrices are equal
   */
  static matricesEqual(a: any, b: any): boolean {
    if (!a || !b) return false
    return a.m00 === b.m00 && a.m01 === b.m01 && a.m02 === b.m02 &&
      a.m10 === b.m10 && a.m11 === b.m11 && a.m12 === b.m12
  }
}

/**
 * URL and String Utilities
 */
export class URLUtils {
  /**
   * Process and validate URL with default parameter handling
   * Original function: tB
   */
  static processURL(url: any): URL | null {
    if (!url) return null
    
    // Check if URL needs default parameter processing
    if (this.needsDefaultProcessing(url.toString())) {
      const defaultParam = url.searchParams?.get('default') || url.searchParams?.get('d')
      if (defaultParam) {
        try {
          url = new URL(defaultParam)
        } catch {
          return null
        }
      }
    }
    return url
  }

  /**
   * Check if URL needs default parameter processing
   */
  static needsDefaultProcessing(urlString: string): boolean {
    // Mock implementation - would contain actual URL pattern checking logic
    return urlString.includes('default=') || urlString.includes('d=')
  }

  /**
   * Extract domain from URL
   */
  static extractDomain(url: string | URL): string | null {
    try {
      const urlObj = typeof url === 'string' ? new URL(url) : url
      return urlObj.hostname
    } catch {
      return null
    }
  }

  /**
   * Validate URL format
   */
  static isValidURL(url: string): boolean {
    try {
      // Create URL for validation without assignment
      void new URL(url)
      return true
    } catch {
      return false
    }
  }
}

/**
 * Data Validation and Type Checking Utilities
 */
export class ValidationUtils {
  /**
   * Check if value is not null or undefined
   * Original function: tq
   */
  static isNotNull<T>(value: T | null | undefined): value is T {
    return value != null
  }

  /**
   * Check if value is defined and not null
   */
  static isDefined<T>(value: T | null | undefined): value is T {
    return value !== null && value !== undefined
  }

  /**
   * Check if array is not empty
   */
  static isNonEmptyArray<T>(array: T[] | null | undefined): array is T[] {
    return Array.isArray(array) && array.length > 0
  }

  /**
   * Check if string is not empty
   */
  static isNonEmptyString(value: string | null | undefined): value is string {
    return typeof value === 'string' && value.length > 0
  }

  /**
   * Check if object has specific property
   */
  static hasProperty<T extends object, K extends PropertyKey>(
    obj: T,
    prop: K
  ): obj is T & Record<K, unknown> {
    return prop in obj
  }

  /**
   * Type guard for checking if value is an object
   */
  static isObject(value: unknown): value is Record<string, unknown> {
    return typeof value === 'object' && value !== null && !Array.isArray(value)
  }
}

/**
 * Data Transformation Utilities
 */
export class TransformationUtils {
  /**
   * Create variable alias structure
   * Original function: eQ
   */
  static createVariableAlias(variableId: string): any {
    return {
      type: 'VARIABLE_ALIAS',
      id: this.processVariableId(variableId),
    }
  }

  /**
   * Normalize blend mode value
   * Original function: eJ
   */
  static normalizeBlendMode(blendMode: string): string {
    return blendMode === 'PASS_THROUGH' ? 'NORMAL' : blendMode
  }

  /**
   * Process variable ID for external use
   */
  static processVariableId(id: string): string {
    // Mock implementation - would contain actual variable ID processing logic
    return id
  }

  /**
   * Convert camelCase to snake_case
   */
  static camelToSnakeCase(str: string): string {
    return str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`)
  }

  /**
   * Convert snake_case to camelCase
   */
  static snakeToCamelCase(str: string): string {
    return str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase())
  }

  /**
   * Deep clone object
   */
  static deepClone<T>(obj: T): T {
    if (obj === null || typeof obj !== 'object') return obj
    if (obj instanceof Date) return new Date(obj.getTime()) as unknown as T
    if (Array.isArray(obj)) return obj.map(item => this.deepClone(item)) as unknown as T
    
    const cloned = {} as T
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        cloned[key] = this.deepClone(obj[key])
      }
    }
    return cloned
  }
}

/**
 * Storage Key Utilities
 */
export class StorageKeyUtils {
  /**
   * Create storage key from parameters
   * Original function: eA
   */
  static createStorageKey(params: {
    userID: string
    pluginID: string
    name: string
  }): string[] {
    const { userID, pluginID, name } = params
    return [userID, pluginID, name]
  }

  /**
   * Extract name from storage key
   * Original function: ey
   */
  static extractNameFromKey(key: string[]): string {
    return key[2]
  }

  /**
   * Validate storage key parameters
   * Original function: eb
   */
  static validateStorageParams(params: {
    userID?: string
    pluginID?: string
    name?: string
  }): void {
    if (!params.userID) {
      throw new Error('Cannot access client storage without a user ID')
    }
    if (!params.pluginID) {
      throw new Error('Cannot access client storage without a plugin ID')
    }
  }

  /**
   * Generate storage key hash
   */
  static generateKeyHash(key: string[]): string {
    return key.join(':')
  }

  /**
   * Parse storage key hash back to components
   */
  static parseKeyHash(hash: string): string[] {
    return hash.split(':')
  }
}

/**
 * Array and Collection Utilities
 */
export class CollectionUtils {
  /**
   * Remove duplicates from array
   */
  static removeDuplicates<T>(array: T[]): T[] {
    return [...new Set(array)]
  }

  /**
   * Group array items by key
   */
  static groupBy<T, K extends PropertyKey>(
    array: T[],
    keyFn: (item: T) => K
  ): Record<K, T[]> {
    return array.reduce((groups, item) => {
      const key = keyFn(item)
      if (!groups[key]) {
        groups[key] = []
      }
      groups[key].push(item)
      return groups
    }, {} as Record<K, T[]>)
  }

  /**
   * Chunk array into smaller arrays
   */
  static chunk<T>(array: T[], size: number): T[][] {
    const chunks: T[][] = []
    for (let i = 0; i < array.length; i += size) {
      chunks.push(array.slice(i, i + size))
    }
    return chunks
  }

  /**
   * Find item in array with optional default
   */
  static findWithDefault<T>(
    array: T[],
    predicate: (item: T) => boolean,
    defaultValue: T
  ): T {
    return array.find(predicate) ?? defaultValue
  }

  /**
   * Sort array by multiple criteria
   */
  static sortBy<T>(
    array: T[],
    ...selectors: Array<(item: T) => any>
  ): T[] {
    return [...array].sort((a, b) => {
      for (const selector of selectors) {
        const aVal = selector(a)
        const bVal = selector(b)
        if (aVal < bVal) return -1
        if (aVal > bVal) return 1
      }
      return 0
    })
  }
}

/**
 * Number and Math Utilities
 */
export class MathUtils {
  /**
   * Clamp number between min and max
   */
  static clamp(value: number, min: number, max: number): number {
    return Math.min(Math.max(value, min), max)
  }

  /**
   * Round to specific decimal places
   */
  static roundTo(value: number, decimals: number): number {
    const factor = 10 ** decimals
    return Math.round(value * factor) / factor
  }

  /**
   * Check if number is in range (inclusive)
   */
  static isInRange(value: number, min: number, max: number): boolean {
    return value >= min && value <= max
  }

  /**
   * Linear interpolation between two values
   */
  static lerp(start: number, end: number, t: number): number {
    return start + (end - start) * t
  }

  /**
   * Map value from one range to another
   */
  static mapRange(
    value: number,
    fromMin: number,
    fromMax: number,
    toMin: number,
    toMax: number
  ): number {
    const t = (value - fromMin) / (fromMax - fromMin)
    return this.lerp(toMin, toMax, t)
  }

  /**
   * Generate random number in range
   */
  static randomInRange(min: number, max: number): number {
    return Math.random() * (max - min) + min
  }
}

/**
 * String Formatting Utilities
 */
export class StringUtils {
  /**
   * Capitalize first letter
   */
  static capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  /**
   * Convert to title case
   */
  static toTitleCase(str: string): string {
    return str.replace(/\w\S*/g, (txt) => 
      txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    )
  }

  /**
   * Truncate string with ellipsis
   */
  static truncate(str: string, length: number, suffix = '...'): string {
    if (str.length <= length) return str
    return str.slice(0, length - suffix.length) + suffix
  }

  /**
   * Remove whitespace from both ends and normalize internal whitespace
   */
  static normalizeWhitespace(str: string): string {
    return str.trim().replace(/\s+/g, ' ')
  }

  /**
   * Extract initials from name
   */
  static getInitials(name: string, maxInitials = 2): string {
    return name
      .split(/\s+/)
      .map(word => word.charAt(0).toUpperCase())
      .slice(0, maxInitials)
      .join('')
  }

  /**
   * Generate random string
   */
  static randomString(length: number, charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'): string {
    let result = ''
    for (let i = 0; i < length; i++) {
      result += charset.charAt(Math.floor(Math.random() * charset.length))
    }
    return result
  }
}

/**
 * Export utility constants for common use
 */
export const UTILITY_CONSTANTS = {
  STORAGE_KEYS: {
    CLIENT_QUOTA: 'client-quota',
    CLIENT_STORAGE: 'client-storage',
  },
  DEFAULT_VALUES: {
    OPACITY: 1,
    BLEND_MODE: 'NORMAL',
    VISIBLE: true,
  },
  LIMITS: {
    MAX_ACTIONS: 1,
    MIN_SCALE_FACTOR: 0.01,
    MAX_SCALE_FACTOR: 100,
    MIN_SPACING: -1000,
    MAX_SPACING: 1000,
  }
}

/**
 * Factory functions for creating utility instances
 */
export function createGeometryUtils(): typeof GeometryUtils {
  return GeometryUtils
}

export function createValidationUtils(): typeof ValidationUtils {
  return ValidationUtils
}

export function createTransformationUtils(): typeof TransformationUtils {
  return TransformationUtils
}

/**
 * Convenience functions for common operations
 */
export function processURL(url: any): URL | null {
  return URLUtils.processURL(url)
}

export function isNotNull<T>(value: T | null | undefined): value is T {
  return ValidationUtils.isNotNull(value)
}

export function createVariableAlias(variableId: string): any {
  return TransformationUtils.createVariableAlias(variableId)
}

export function normalizeBlendMode(blendMode: string): string {
  return TransformationUtils.normalizeBlendMode(blendMode)
}

export function clampValue(value: number, min: number, max: number): number {
  return MathUtils.clamp(value, min, max)
}
