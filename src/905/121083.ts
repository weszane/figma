import { memoize } from '@formatjs/fast-memoize'
import { IntlMessageFormat } from 'intl-messageformat'
import { defaultLanguage } from '../905/816253'

/**
 * Options for initializing LocalizationHandler.
 */
export interface LocalizationHandlerOptions {
  mergeEntries?: boolean
}

/**
 * Entry type for static or dynamic entries.
 */
export interface LocalizationEntry {
  string: string
  [key: string]: any
}

/**
 * Handles localization entries, formatting, and message compilation.
 * Original class name: $$s0
 */
export class LocalizationHandler {
  locale: string
  formatters: {
    getNumberFormat: (locale: string, options?: Intl.NumberFormatOptions) => Intl.NumberFormat
    getDateTimeFormat: (locale: string, options?: Intl.DateTimeFormatOptions) => Intl.DateTimeFormat
    getPluralRules: (locale: string, options?: Intl.PluralRulesOptions) => Intl.PluralRules
  }

  entries: Record<string, LocalizationEntry>
  dynamicEntries: Record<string, LocalizationEntry>
  compiled: Record<string, IntlMessageFormat>

  /**
   * Initializes the localization handler.
   * @param locale - The locale to use.
   * @param entries - Static entries.
   * @param dynamicEntries - Dynamic entries.
   * @param options - Additional options.
   */
  constructor(
    locale: string = defaultLanguage,
    entries: Record<string, LocalizationEntry> = {},
    dynamicEntries: Record<string, LocalizationEntry> = {},
    options: LocalizationHandlerOptions = {},
  ) {
    this.locale = locale
    this.formatters = {
      getNumberFormat: memoize((locale, options) => new Intl.NumberFormat(locale, options)),
      getDateTimeFormat: memoize((locale, options) => new Intl.DateTimeFormat(locale, options)),
      getPluralRules: memoize((locale, options) => new Intl.PluralRules(locale, options)),
    }
    this.entries = this.processEntries(entries, options.mergeEntries)
    this.dynamicEntries = this.processDynamicEntries(dynamicEntries, options.mergeEntries)
    this.compiled = {}
  }

  /**
   * Sets static entries.
   * Original method name: setEntries
   */
  setEntries(entries: Record<string, LocalizationEntry>, merge?: boolean): void {
    this.entries = this.processEntries(entries, merge)
  }

  /**
   * Sets dynamic entries.
   * Original method name: setDynamicEntries
   */
  setDynamicEntries(entries: Record<string, LocalizationEntry>, merge?: boolean): void {
    this.dynamicEntries = this.processDynamicEntries(entries, merge)
  }

  /**
   * Processes static entries, merging if required.
   * Original method name: processEntries
   */
  processEntries(
    entries: Record<string, LocalizationEntry>,
    merge: boolean = false,
  ): Record<string, LocalizationEntry> {
    if (this.entries && (merge || !this.entries)) {
      return {
        ...this.entries,
        ...entries,
      }
    }
    return entries
  }

  /**
   * Processes dynamic entries, merging if required.
   * Original method name: processDynamicEntries
   */
  processDynamicEntries(
    entries: Record<string, LocalizationEntry>,
    merge: boolean = false,
  ): Record<string, LocalizationEntry> {
    if (this.dynamicEntries && (merge || !this.dynamicEntries)) {
      return {
        ...this.dynamicEntries,
        ...entries,
      }
    }
    return entries
  }

  /**
   * Compiles a message string using IntlMessageFormat.
   * Original method name: compile
   */
  compile(message: string): IntlMessageFormat {
    return new IntlMessageFormat(message, this.locale, undefined, {
      formatters: this.formatters,
    })
  }

  /**
   * Gets the compiled message for a key and formats it with provided values.
   * Original method name: getCompiled
   */
  getCompiled(key: string, values?: Record<string, any>): string[] | undefined {
    const entry = this.entries[key]
    if (!entry || !entry.string)
      return
    let compiledMsg = this.compiled[key]
    if (!compiledMsg) {
      compiledMsg = this.compile(entry.string)
      this.compiled[key] = compiledMsg
    }
    const result = compiledMsg.format(values)
    return Array.isArray(result) ? result : [result]
  }

  /**
   * Gets the string for a dynamic entry key.
   * Original method name: getDynamicString
   */
  getDynamicString(key: string): string | undefined {
    return this.dynamicEntries[key]?.string
  }
}

/**
 * Exported alias for LocalizationHandler.
 * Original export name: v
 */
export const v = LocalizationHandler
