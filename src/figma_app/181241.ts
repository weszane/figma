import type { AjaxResponse } from '../905/910117'
import { mapKeys } from 'lodash-es'
import camelCase from 'lodash-es/camelCase'
import snakeCase from 'lodash-es/snakeCase'
import { z } from 'zod'
import { trackEventAnalytics } from '../905/449184'
import { getFeatureFlags } from '../905/601108'
import { logError } from '../905/714362'
import { API } from '../905/910117'

// Types
export interface ValidationContext {
  xr: typeof API
}
export interface ValidationError {
  [key: string]: string[]
}
export interface ValidatorResponse<T = any> {
  status: number
  data: T
  [key: string]: any
}
type LogLevel = 'error' | 'warn'

/**
 * Base validator class for API response validation
 */
export class BaseValidator<T> {
  debugKey: string
  schema: z.ZodSchema<T>
  logLevel: LogLevel
  _input: any = null
  _output: any = null
  constructor(debugKey: string, schema: z.ZodSchema<T>, logLevel: LogLevel) {
    this.debugKey = debugKey
    this.schema = schema
    this.logLevel = logLevel
  }

  /**
   * Validates the API response against the schema
   */
  async validate(requestFn: (context: ValidationContext) => Promise<ValidatorResponse<T>>): Promise<ValidatorResponse<T>> {
    const response = await requestFn({
      xr: API,
    })
    const parseResult = this.schema.safeParse(response.data)
    if (parseResult.success) {
      const validatedData = parseResult.data
      const {
        data,
        ...restResponse
      } = response
      return {
        ...restResponse,
        data: validatedData,
      }
    }

    // Handle validation failure
    this.logValidationFailure(parseResult.error)
    if (this.logLevel === 'error') {
      throw parseResult.error
    }
    return response
  }

  /**
   * Logs validation failures for monitoring
   */
  logValidationFailure(error: z.ZodError): void {
    trackEventAnalytics('Validator Failure', {
      name: this.debugKey,
      level: this.logLevel,
      error: JSON.stringify(error.flatten()),
    }, {
      forwardToDatadog: true,
      batchRequest: true,
    })
    if (this.logLevel === 'error') {
      logError('APIGetValidationFailure', `Validation failed for api response for ${this.debugKey}`, this.formatValidationErrors(error), {
        reportAsSentryError: true,
      })
    }
  }

  /**
   * Formats validation errors for better readability
   */
  formatValidationErrors(error: z.ZodError): ValidationError {
    const formattedErrors: ValidationError = {}
    error.issues.forEach((issue) => {
      const path = issue.path.map(segment => typeof segment === 'number' ? '[#]' : segment).join('.')
      if (!formattedErrors[path]) {
        formattedErrors[path] = []
      }
      formattedErrors[path].push(issue.message)
    })
    return formattedErrors
  }
}

/**
 * Enhanced validator with feature flag support and enforcement options
 */
class EnhancedValidator<T> extends BaseValidator<T> {
  featureFlagKey?: string
  enforce: boolean
  reportAsSentryError: boolean
  constructor(public debugKey: string, schema: z.ZodSchema<T>, featureFlagKey?: string, enforce: boolean = false, reportAsSentryError: boolean = false) {
    super(debugKey, schema, enforce ? 'error' : 'warn')
    this.featureFlagKey = featureFlagKey
    this.enforce = enforce
    this.reportAsSentryError = reportAsSentryError
  }

  /**
   * Validates with feature flag and enforcement logic
   */
  async validate(requestFn: (context: ValidationContext) => Promise<ValidatorResponse>): Promise<ValidatorResponse<T>> {
    const response = await requestFn({
      xr: API,
    })

    // Skip validation if feature flag is disabled or response is not successful
    if (typeof this.featureFlagKey === 'string' && !getFeatureFlags()[this.featureFlagKey] || response.status !== 200) {
      return response
    }
    try {
      const validatedResponse = await super.validate(() => Promise.resolve(response))
      if (this.enforce) {
        return validatedResponse
      }

      // Merge original and validated data for non-enforced validation
      return {
        ...validatedResponse,
        data: {
          ...response.data,
          ...validatedResponse.data,
        },
      }
    }
    catch (error) {
      if (error instanceof z.ZodError) {
        logError('ZODValidatorError', 'Validation failed for api response', {
          debugKey: this.debugKey,
          error: this.formatValidationErrors(error),
        }, {
          reportAsSentryError: this.reportAsSentryError,
        })
      }
      if (this.enforce) {
        throw error
      }
      return response
    }
  }
}
/**
 * Factory functions for creating validators
 */

/**
 * Creates a validator with meta object schema
 */
export function createMetaValidator<T>(debugKey: string, metaSchema: z.ZodSchema<T> | ((zodLib: typeof z) => z.ZodSchema<T>), featureFlagKey?: string, enforce: boolean = false, reportAsSentryError: boolean = false) {
  const resolvedMetaSchema = typeof metaSchema === 'function' ? metaSchema(z) : metaSchema
  return new EnhancedValidator(debugKey, z.object({
    meta: resolvedMetaSchema,
  }), featureFlagKey, enforce, reportAsSentryError)
}

/**
 * Creates a validator with meta and pagination schema
 */
export function createPaginatedValidator<T>(debugKey: string, metaSchema: z.ZodSchema<T> | ((zodLib: typeof z) => z.ZodSchema<T>), featureFlagKey?: string, enforce: boolean = false) {
  const resolvedMetaSchema = typeof metaSchema === 'function' ? metaSchema(z) : metaSchema
  return new EnhancedValidator(debugKey, z.object({
    meta: resolvedMetaSchema,
    pagination: z.object({
      nextPage: z.string().nullable(),
      prevPage: z.string().nullable(),
    }),
  }), featureFlagKey, enforce)
}

/**
 * Creates a simple meta validator with error logging
 */
export function createSimpleMetaValidator<T>(debugKey: string, metaSchema: z.ZodSchema<T>) {
  return new BaseValidator(debugKey, z.object({
    meta: metaSchema,
  }), 'error')
}

/**
 * Creates a no-op validator that passes through responses
 */
export function createNoOpValidator() {
  return {
    _input: null,
    _output: null,
    validate: <T>(requestFn: (context: ValidationContext) => Promise<AjaxResponse<T>>) => requestFn({
      xr: API,
    }),
  }
}

/**
 * Creates a minimal validator without validation
 */
export function createMinimalValidator() {
  return {
    _input: null,
    _output: null,
    validate: <T>(requestFn: (context: ValidationContext) => Promise<AjaxResponse<T>>) => requestFn({
      xr: API,
    }),
  }
}

/**
 * Utility namespace for API parameter transformation
 */
export namespace APIParameterUtils {
  /**
   * Converts camelCase object keys to snake_case for API parameters
   */
  export function toAPIParameters(params: Record<string, any>, preserveKeys: string[] = []): Record<string, any> {
    if (params === undefined) {
      return params
    }
    const preserveKeySet = new Set(preserveKeys)
    return Object.keys(params).reduce((result, key) => {
      const apiKey = preserveKeySet.has(key) ? key : snakeCase(key)
      const value = params[key]
      if (value !== undefined) {
        result[apiKey] = value
        if (typeof value === 'number' || typeof value === 'boolean') {
          result[apiKey] = value.toString()
        }
      }
      return result
    }, {} as Record<string, any>)
  }

  /**
   * Converts object keys to camelCase
   */
  export function toCamelCase<T>(schema: z.ZodSchema<T>): z.ZodSchema<T> {
    return schema.transform(data => mapKeys<any>(data, (value, key) => camelCase(key))) as unknown as z.ZodSchema<T>
  }
}

// Default validator instance
export const defaultValidator = createNoOpValidator()

// Legacy exports for backward compatibility
export const Rq = createPaginatedValidator
export const YV = createMetaValidator
export const _5 = defaultValidator
export const ch = createMinimalValidator
export const q$ = createSimpleMetaValidator
export const td = APIParameterUtils
export const vh = createNoOpValidator

// Modern named exports
export { createMetaValidator as MetaValidator, createMinimalValidator as MinimalValidator, createNoOpValidator as NoOpValidator, createPaginatedValidator as PaginatedValidator, createSimpleMetaValidator as SimpleMetaValidator }
