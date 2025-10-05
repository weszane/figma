import { toSlug } from "../905/232489"
import { parseStyleString } from "../figma_app/276332"

// Regular expressions for parsing and identifying CSS variable bindings
export const VARIABLE_SYNTAX_REGEX = /(var\s*\(\s*)(--[\w\-]*)(\s*,\s*(?:\S.*)?\)|\))/i
export const BOUND_VAR_START_REGEX = /\/\*BOUND_VAR_START_(.*?)\*\//g
export const BOUND_VAR_END_REGEX = /\/\*BOUND_VAR_END\*\//g
export const BOUND_STYLE_START_REGEX = /\/\*BOUND_STYLE_START_(.*?)\*\//g
export const BOUND_STYLE_END_REGEX = /\/\*BOUND_STYLE_END\*\//g

/**
 * Class representing a CSS variable with Figma integration capabilities.
 * Handles generation of CSS variable definitions and values with optional binding metadata.
 */
export class CssVariable {
  name: string
  wrappedValue: any
  preferences: any
  figmaVariable: any
  figmaStyle: any

  /**
   * Creates a new CSS variable instance.
   * @param name - The name of the CSS variable
   * @param wrappedValue - The wrapped value object containing the actual value
   * @param preferences - User preferences for code generation
   * @param figmaVariable - Associated Figma variable object
   * @param figmaStyle - Associated Figma style object
   */
  constructor(
    name: string,
    wrappedValue: any,
    preferences: any,
    figmaVariable?: any,
    figmaStyle?: any,
  ) {
    this.name = name
    this.wrappedValue = wrappedValue
    this.preferences = preferences
    this.figmaVariable = figmaVariable
    this.figmaStyle = figmaStyle
  }

  /**
   * Gets the CSS variable value, potentially with binding annotations.
   * @returns The formatted CSS variable value string
   */
  get value(): string {
    // Handle Figma variable binding
    if (this.preferences.generateForCodePanel && this.figmaVariable) {
      const processedValue = this.processFigmaVariableValue(
        this.figmaVariable,
        this.wrappedValue.value,
      )
      if (processedValue) {
        return processedValue
      }
    }

    // Handle Figma style binding
    if (this.preferences.generateForCodePanel && this.figmaStyle) {
      const processedStyleValue = this.processFigmaStyleValue(
        parseStyleString(this.figmaStyle)?.key ?? "",
        toSlug(this.name),
        this.wrappedValue.value,
      )
      if (processedStyleValue) {
        return processedStyleValue
      }
    }

    // Return default value format
    return this.figmaVariable
      && this.figmaVariable.codeSyntax
      && this.figmaVariable.codeSyntax.WEB
      ? this.figmaVariable.codeSyntax.WEB
      : `var(--${toSlug(this.name)}, ${this.wrappedValue.value})`
  }

  /**
   * Processes a Figma variable to generate an annotated CSS value.
   * @param figmaVar - The Figma variable object
   * @param fallbackValue - The fallback value for the CSS variable
   * @returns The processed CSS value string with annotations
   */
  private processFigmaVariableValue(figmaVar: any, fallbackValue: string): string | null {
    if (!figmaVar.id) {
      return null
    }

    if (figmaVar.codeSyntax && figmaVar.codeSyntax.WEB) {
      const webSyntax = figmaVar.codeSyntax.WEB

      // Handle nested var() syntax
      if (webSyntax?.includes("var(--")) {
        const match = webSyntax?.match(VARIABLE_SYNTAX_REGEX)
        if (match && match.length === 4) {
          return `${match[1]}/*BOUND_VAR_START_${figmaVar.id}*/${match[2]}/*BOUND_VAR_END*/${match[3]}`
        }
      }

      // Simple annotation case
      return `/*BOUND_VAR_START_${figmaVar.id}*/${figmaVar.codeSyntax.WEB}/*BOUND_VAR_END*/`
    }

    // Generate standard var() syntax with slugified name
    return `var(/*BOUND_VAR_START_${figmaVar.id}*/--${toSlug(figmaVar.name)}/*BOUND_VAR_END*/, ${fallbackValue})`
  }

  /**
   * Processes a Figma style to generate an annotated CSS value.
   * @param styleKey - The Figma style key
   * @param variableName - The CSS variable name
   * @param fallbackValue - The fallback value for the CSS variable
   * @returns The processed CSS value string with annotations
   */
  private processFigmaStyleValue(styleKey: string, variableName: string, fallbackValue: string): string | null {
    if (!styleKey) {
      return null
    }
    return `var(/*BOUND_STYLE_START_${styleKey}*/--${variableName}/*BOUND_STYLE_END*/, ${fallbackValue})`
  }

  /**
   * Gets the CSS variable definition with optional binding annotations.
   * @returns The formatted CSS variable definition string
   */
  getDefinition(): string {
    if (this.preferences.generateForCodePanel && this.figmaVariable) {
      return `/*BOUND_VAR_START_${this.figmaVariable.id}*/--${toSlug(this.name)}/*BOUND_VAR_END*/: ${this.wrappedValue.value}`
    }
    return `--${toSlug(this.name)}: ${this.wrappedValue.value}`
  }

  /**
   * Compares this CSS variable with another for equality based on value.
   * @param other - The other CSS variable to compare with
   * @returns True if values are equal, false otherwise
   */
  equals(other: CssVariable): boolean {
    return this.value === other.value
  }

  /**
   * Compares this CSS variable with another for raw value equality.
   * @param other - The other CSS variable or value object to compare with
   * @returns True if raw values are equal, false otherwise
   */
  rawValueEquals(other: CssVariable | any): boolean {
    const otherValue = other instanceof CssVariable ? other.wrappedValue : other.value
    return this.wrappedValue.value === otherValue
  }
}

// Export aliases for backward compatibility
export const kz = CssVariable
export const M$ = BOUND_VAR_END_REGEX
export const Z4 = BOUND_VAR_START_REGEX
export const Q6 = BOUND_STYLE_END_REGEX
export const NT = BOUND_STYLE_START_REGEX
