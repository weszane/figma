import { FigmaSchema } from '../905/125137'
import { NoOpVm } from '../905/700654'
import { logError } from '../905/714362'
import { throwTypeError } from '../figma_app/465776'

/**
 * Utility to mark a schema as optional.
 * Original: function o
 */
function markOptional<T extends object>(schema: T): T & { isOptional: { type: string, __schema: T } } {
  Object.defineProperty(schema, 'isOptional', {
    enumerable: true,
    get() {
      return {
        type: 'optional',
        __schema: this,
      }
    },
  })
  return schema as any
}

/**
 * Number schema with min, max, and range helpers.
 * Original: let l
 */
const numberSchema = {
  type: 'number',
  min(value: number) {
    return markOptional({
      ...this,
      __min: value,
    })
  },
  max(value: number) {
    return markOptional({
      ...this,
      __max: value,
    })
  },
  range(min: number, max: number) {
    return markOptional({
      ...this,
      __min: min,
      __max: max,
    })
  },
}

/**
 * PropTypes definitions.
 * Original: let $$d1
 */
export const PropTypes = {
  bool: markOptional({ type: 'boolean' }),
  string: markOptional({ type: 'string' }),
  uint8Array: markOptional({ type: 'uint8array' }),
  any: markOptional({ type: 'any' }),
  function: markOptional({ type: 'function' }),
  arrayOf: (contentType: any) => markOptional({ type: 'array', __contentType: contentType }),
  dictionaryOf: (contentType: any) => markOptional({ type: 'dictionary', __contentType: contentType }),
  exact: (shape: any) => markOptional({ type: 'exact', __shape: shape }),
  oneOf: (options: any[], primaryField?: string) => {
    if (primaryField) {
      for (const option of options) {
        if (option.type === 'exact') {
          if (!option.__shape[primaryField])
            throw new Error('All variants of a PropTypes.oneOf with a primaryField must contain the primary field')
        }
        else {
          throw new Error('All variants of a PropTypes.oneOf with a primaryField must be PropTypes.exact')
        }
      }
    }
    return markOptional({
      type: 'oneOf',
      __options: options,
      __primaryField: primaryField,
    })
  },
  float: markOptional(numberSchema),
  integer: markOptional({
    ...numberSchema,
    __requireInteger: true,
  }),
}

/**
 * Validates a property using zSchema.
 * Original: export function $$c6
 */
export function validateWithZSchema({
  vm,
  handle,
  zSchema,
  property,
}: {
  vm: any
  handle: any
  zSchema: any
  property: string
}) {
  const value = vm.deepUnwrap(handle, true)
  const result = zSchema.safeParse(value)
  if (result.success)
    return result.data

  function formatIssues(error: any, prop: string) {
    const issues = error.issues.map((issue: any) => formatIssue(issue)).join('\n')
    throw new Error(`Property "${prop}" failed validation: ${issues}`)
  }

  function formatIssue(issue: any, opts?: { issueSeparator?: string, unionSeparator?: string, indent?: number }): string {
    const { issueSeparator = '\n', unionSeparator = '\n', indent = 0 } = opts || {}
    const pathStr = issue.path.map((p: any) => typeof p === 'number' ? `[${p}]` : `.${p}`).join('')
    if (issue.code === 'invalid_union') {
      return `${' '.repeat(indent)}Expected ${issue.path.length > 0 ? `${pathStr} to be ` : ''}one of the following, but none matched:
${issue.unionErrors.reduce((acc: string[], unionErr: any) => {
  const multiple = unionErr.issues.length > 1
  const details = (multiple
    ? `${' '.repeat(indent + 2)}Multiple issues${issue.path.length > 0 ? ` at ${pathStr}` : ''}:\n`
    : '') + unionErr.issues.map((i: any) => formatIssue(i, { ...opts, indent: indent + (multiple ? 4 : 2) })).join(issueSeparator)
  if (!acc.includes(details))
    acc.push(details)
  return acc
}, []).join(unionSeparator)}`
    }
    const msg = ' '.repeat(indent) + (issue.message === 'Required' ? 'Required value missing' : issue.message)
    if (issue.path.length > 0) {
      if (issue.path.length === 1) {
        const p = issue.path[0]
        if (typeof p === 'number')
          return `${msg} at index ${p}`
      }
      return `${msg} at ${pathStr}`
    }
    return msg
  }

  formatIssues(result.error, property)
}

/**
 * Validates a property against a schema using a VM.
 * Original: export function $$u0
 */
export function validateWithVm({
  vm,
  handle,
  schema,
  property,
}: {
  vm: any
  handle: any
  schema: any
  property: string
}) {
  try {
    return validateValue(vm, handle, schema, property)
  }
  catch (err) {
    if (typeof err === 'string')
      throw new Error(err)
    throw err
  }
}

/**
 * Recursively validates a value against a schema.
 * Original: function e (inside $$u0)
 */
function validateValue(vm: any, value: any, schema: any, property: string): any {
  const valueType = vm.$$typeof(value)
  function expectedTypeMsg(): string {
    let expected = schema
    return `Expected "${property}" to have type ${ describeType(expected, 0)} but got ${getActualType(vm, value)} instead`
  }
  if (typeof schema === 'string') {
    if (vm.isString(value) && schema === vm.getString(value))
      return schema
    throw expectedTypeMsg()
  }
  if (typeof schema === 'number') {
    if (vm.isNumber(value) && schema === vm.getNumber(value))
      return schema
    throw expectedTypeMsg()
  }
  if (typeof schema === 'boolean') {
    if (vm.isBoolean(value) && schema === vm.getBoolean(value))
      return schema
    throw expectedTypeMsg()
  }
  if (schema === null) {
    if (vm.isNull(value))
      return schema
    throw expectedTypeMsg()
  }
  if (schema === undefined) {
    if (vm.isUndefined(value))
      return schema
    throw expectedTypeMsg()
  }
  switch (schema.type) {
    case 'optional':
      if (valueType === 'undefined')
        return
      return validateValue(vm, value, schema.__schema, property)
    case 'oneOf':
      if (schema.__primaryField) {
        const fieldName = `${property}.${schema.__primaryField}`
        if (!vm.isObject(value))
          throw new Error(`Expected "${property}" to be an object`)
        let matchedSchema = null
        for (const option of schema.__options) {
          try {
            validateValue(vm, vm.getProp(value, schema.__primaryField), option.__shape[schema.__primaryField], fieldName)
            matchedSchema = option
            break
          }
          catch (err) {
            if (typeof err !== 'string')
              throw err
          }
        }
        if (matchedSchema)
          return validateValue(vm, value, matchedSchema, property)
        throw new Error(`Expected "${fieldName}" to be one of the allowed values for this property`)
      }
      else {
        const errors: string[] = []
        for (const option of schema.__options) {
          try {
            return validateValue(vm, value, option, property)
          }
          catch (err) {
            if (typeof err === 'string') {
              errors.push(err)
              continue
            }
            throw err
          }
        }
        throw new Error(`Expected "${property}" to be one of the following, but none matched: 
${errors.map(e => e.split('\n').map(line => `  ${line}`).join('\n')).join('\n')}`)
      }
    case 'boolean':
      if (valueType !== 'boolean')
        throw expectedTypeMsg()
      return vm.getBoolean(value)
    case 'uint8array':
      if (!vm.isUint8Array(value))
        throw expectedTypeMsg()
      return vm.getUint8Array(value)
    case 'number': {
      if (valueType !== 'number')
        throw expectedTypeMsg()
      const num = vm.getNumber(value)
      if (!isFinite(num))
        throw expectedTypeMsg()
      if (schema.__min != null && num < schema.__min)
        throw new Error(`Expected "${property}" to have value >= ${schema.__min}`)
      if (schema.__max != null && num > schema.__max)
        throw new Error(`Expected "${property}" to have value <= ${schema.__max}`)
      if (schema.__requireInteger != null && (0 | num) !== num)
        throw new Error(`Expected "${property}" to be an integer`)
      return num
    }
    case 'string':
      if (valueType !== 'string')
        throw expectedTypeMsg()
      return vm.getString(value)
    case 'any':
      if (valueType === 'undefined' || vm.isNull(value))
        throw expectedTypeMsg()
      return vm.deepUnwrap(value)
    case 'array': {
      if (!vm.isArray(value))
        throw expectedTypeMsg()
      const arr: any[] = []
      const len = vm.getNumberProp(value, 'length')
      for (let i = 0; i < len; i++)
        arr.push(validateValue(vm, vm.getProp(value, i.toString()), schema.__contentType, `${property}.[${i}]`))
      return arr
    }
    case 'dictionary': {
      if (!vm.isObject(value) || vm.isArray(value))
        throw expectedTypeMsg()
      const dict: Record<string, any> = {}
      for (const key of vm.getKeys(value))
        dict[key] = validateValue(vm, vm.getProp(value, key), schema.__contentType, `${property}["${key}"]`)
      return dict
    }
    case 'exact': {
      if (!vm.isObject(value))
        throw expectedTypeMsg()
      const obj: Record<string, any> = {}
      const keys = Object.keys(schema.__shape)
      for (const key of keys) {
        const subSchema = schema.__shape[key]
        obj[key] = validateValue(vm, vm.getProp(value, key), subSchema, `${property}.${key}`)
      }
      for (const key of vm.getKeys(value)) {
        if (!keys.includes(key)) {
          let l = schema
          throw new Error(`Expected "${property}" to have type ${describeType(l, 0)} but got additional property "${key}"`)
        }
      }
      return obj
    }
    case 'function':
      if (!vm.isFunction(value) || valueType !== 'function')
        throw expectedTypeMsg()
      return vm.deepUnwrap(value, true)
    default:
      throwTypeError(schema)
  }
}

/**
 * Returns a string describing the type of a schema.
 * Original: function p
 */
function describeType(schema: any, depth: number): string {
  if (depth > 50)
    return '[...(recursive type definition)...]'
  if (typeof schema === 'string')
    return `"${schema}"`
  if (typeof schema === 'number' || typeof schema === 'boolean')
    return `${schema}`
  if (schema === null)
    return 'null'
  if (schema === undefined)
    return 'undefined'
  switch (schema.type) {
    case 'optional':
      return `(optional) ${describeType(schema.__schema, depth + 1)}`
    case 'oneOf':
      return `oneOf(${schema.__options.map((opt: any) => describeType(opt, depth + 1)).join(', ')})`
    case 'boolean':
      return 'boolean'
    case 'uint8array':
      return 'Uint8Array'
    case 'number':
      return 'number'
    case 'string':
      return 'string'
    case 'any':
      return 'any'
    case 'array':
      return `[array of ${describeType(schema.__contentType, depth + 1)}]`
    case 'dictionary':
      return `{object with values of type ${describeType(schema.__contentType, depth + 1)}}`
    case 'exact':
      return `{${Object.keys(schema.__shape).map(key => `${key}: ${describeType(schema.__shape[key], depth + 1)}`).join(', ')}}`
    case 'function':
      return 'function'
  }
}

/**
 * Merges two objects, preferring values from the first unless undefined.
 * Original: export function $$m2
 */
export function mergeDefaults<T extends object, U extends object>(obj: T, defaults: U): T & Omit<U, keyof T> {
  const result = { ...obj } as T & Omit<U, keyof T>
  for (const key in defaults) {
    if (obj[key as any] === undefined)
      result[key as any] = defaults[key]
  }
  return result
}

/**
 * Validates a value against a schema using NoOpVm.
 * Original: export function $$h3
 */
export function validateWithNoOpVm(value: any, schema: any, property: string) {
  const vm = new NoOpVm()
  try {
    validateWithVm({
      vm,
      handle: vm.deepWrap(value),
      schema,
      property,
    })
  }
  finally {
    vm.destroy()
  }
}

/**
 * Validates pluginData entry size limits.
 * Original: export function $$g5
 */
export function validatePluginDataEntryLimit(
  pluginId: string,
  entries: string[],
  isExempt: boolean,
): Error | undefined {
  let errorMsg: string | undefined
  let isLimitExceeded = false;
  if (isExempt) {
    if (!FigmaSchema.PluginDataEntryEscapeHatchLimitSchema.safeParse(entries).success) {
      errorMsg = 'This pluginData entry exceeds the grace period limit of 64 MB.';
      isLimitExceeded = true;
    }
  } else {
    if (!FigmaSchema.PluginDataEntryNormalLimitSchema.safeParse(entries).success) {
      errorMsg = 'This pluginData entry exceeds 100 kB per entry limit.';
      isLimitExceeded = true;
    }
  }
  if (isLimitExceeded) {
    logError(
      'Plugin API',
      errorMsg,
      {
        pluginId,
        isPluginExempt: isExempt,
        ext_enable_plugindata_limit_FF: true,
        totalInputStrLength: entries.reduce((sum, str) => sum + str.length, 0),
      },
      {
        reportAsSentryError: true,
      },
    )
    return new Error(errorMsg)
  }
}

/**
 * Exported aliases for refactored functions/objects.
 */
export const BK = validateWithVm
export const By = PropTypes
export const Kb = mergeDefaults
export const MG = validateWithNoOpVm
export const fp = validatePluginDataEntryLimit
export const u = validateWithZSchema

/**
 * Helper to get actual type string for error messages.
 * Original: inline in validateValue
 */
function getActualType(vm: any, value: any): string {
  const type = vm.$$typeof(value)
  if (type === 'object') {
    if (vm.isArray(value))
      return 'array'
    if (vm.isNull(value))
      return 'null'
  }
  else if (type === 'number') {
    const num = vm.getNumber(value)
    if (isNaN(num))
      return 'NaN'
    if (num === Infinity || num === -Infinity)
      return 'Infinity'
  }
  return type
}

/**
 * Validates a value against a schema and returns an array of errors.
 * Original: export function c0
 */
export function validateAndCollectErrors(value: any, schema: any, property: string): string[] {
  let errors: string[] = []
  function expectedTypeMsg(): string {
    return `Expected "${property}" to have type ${describeType(schema, 0)} but got ${value} (type: ${typeof value}) instead`
  }
  if (typeof schema === 'string' || typeof schema === 'number' || typeof schema === 'boolean') {
    if (schema !== value)
      errors.push(expectedTypeMsg())
    return errors
  }
  if (schema === null) {
    if (value !== null)
      errors.push(expectedTypeMsg())
    return errors
  }
  if (schema === undefined) {
    if (value !== undefined)
      errors.push(expectedTypeMsg())
    return errors
  }
  if (schema) {
    switch (schema.type) {
      case 'optional':
        if (Array.isArray(value) && value.length === 0 || value === undefined || value == null)
          return errors
        errors.push(...validateAndCollectErrors(value, schema.__schema, property))
        break
      case 'oneOf':
        if (schema.__primaryField) {
          const fieldName = `${property}.${schema.__primaryField}`
          if (typeof value !== 'object') {
            errors.push(`Expected "${property}" to be an object`)
          }
          else {
            let matchedSchema = null
            let found = false
            for (const option of schema.__options) {
              const fieldErrors = validateAndCollectErrors(value[schema.__primaryField], option.__shape[schema.__primaryField], fieldName)
              if (fieldErrors.length === 0) {
                matchedSchema = option
                found = true
                errors = []
                break
              }
              errors.push(...fieldErrors)
            }
            if (found)
              errors.push(...validateAndCollectErrors(value, matchedSchema, property))
            else errors.push(`Expected "${fieldName}" to be one of the allowed values for this property`)
          }
        }
        else {
          const allErrors: string[] = []
          for (const option of schema.__options) {
            const optionErrors = validateAndCollectErrors(value, option, property)
            if (optionErrors.length === 0)
              return errors
            allErrors.push(...optionErrors)
          }
          const formatted = allErrors.map(e => e.split('\n').map(line => `  ${line}`).join('\n'))
          errors.push(`Expected "${property}" to be one of the following, but none matched: \n${formatted.join('\n')}`)
        }
        break
      case 'boolean':
        if (typeof value !== 'boolean')
          errors.push(expectedTypeMsg())
        break
      case 'uint8array':
        if (!(value instanceof Object.getPrototypeOf(Uint32Array)))
          errors.push(expectedTypeMsg())
        break
      case 'number':
        if (typeof value !== 'number') {
          errors.push(expectedTypeMsg())
        }
        else if (!isFinite(value)) {
          errors.push(expectedTypeMsg())
        }
        else {
          if (schema.__min != null && value < schema.__min)
            errors.push(`Expected "${property}" to have value >= ${schema.__min}`)
          if (schema.__max != null && value > schema.__max)
            errors.push(`Expected "${property}" to have value <= ${schema.__max}`)
          if (schema.__requireInteger != null && (0 | value) !== value)
            errors.push(`Expected "${property}" to be an integer`)
        }
        break
      case 'string':
        if (typeof value !== 'string')
          errors.push(expectedTypeMsg())
        break
      case 'any':
        if (value === undefined || value === 'null')
          errors.push(expectedTypeMsg())
        break
      case 'array':
        if (Array.isArray(value)) {
          for (let i = 0; i < value.length; i++)
            errors.push(...validateAndCollectErrors(value[i], schema.__contentType, `${property}.[${i}]`))
        }
        else {
          errors.push(expectedTypeMsg())
        }
        break
      case 'dictionary':
        if (typeof value !== 'object' || Array.isArray(value) || value === null) {
          errors.push(expectedTypeMsg())
        }
        else {
          Object.keys(value).forEach((key) => {
            errors.push(...validateAndCollectErrors(value[key], schema.__contentType, `${property}["${key}"]`))
          })
        }
        break
      case 'exact':
        if (typeof value !== 'object' || value === null) {
          errors.push(expectedTypeMsg())
        }
        else {
          Object.keys(schema.__shape).forEach((key) => {
            errors.push(...validateAndCollectErrors(value[key], schema.__shape[key], `${property}.${key}`))
          })
        }
        break
      case 'function':
        if (typeof value !== 'function')
          errors.push(expectedTypeMsg())
        break
      default:
        throwTypeError(schema)
    }
  }
  return errors
}
