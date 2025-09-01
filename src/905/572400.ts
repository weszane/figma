export const PLUGIN_CLOSED_ERROR = 'Attempted access to object created in plugin, but the plugin has already been closed'

const FUNCTION_HANDLE = Symbol('Function Handle')

export class PluginError extends Error {
  handle: any

  constructor(error: any, handle: any) {
    let message = 'The plugin threw an error that could not be converted to a string'
    try {
      message = typeof error === 'string' ? error : error.toString(handle).replace(/^Error: /, '')
    }
    catch { }
    super(message)
    this.handle = handle
    Object.setPrototypeOf(this, PluginError.prototype)
  }
}

export function hasFunctionHandle(obj: any): boolean {
  return !!(obj && typeof obj === 'object' && Object.prototype.hasOwnProperty.call(obj, FUNCTION_HANDLE))
}

export function getFunctionHandle(obj: any): any | null {
  return hasFunctionHandle(obj) ? obj[FUNCTION_HANDLE] : null
}

export function memoizedHandle<T>(ctx: any, fn: () => T): () => T {
  let cached: T | undefined
  const create = () => {
    const handle = fn()
    ctx.retainHandle(handle)
    return handle
  }
  return () => cached ?? (cached = create())
}

interface IPluginWrapper {
  getBooleanProp: (object: any, property: string) => boolean
  getNumberProp: (object: any, property: string) => number
  getStringProp: (object: any, property: string) => string
  setBooleanProp: (object: any, property: string, value: boolean) => void
  setNumberProp: (object: any, property: string, value: number) => void
  setStringProp: (object: any, property: string, value: string) => void
  callMethod: (object: any, methodName: string, ...args: any[]) => any
  deepWrap: (value: any) => any
  deepUnwrap: (value: any, allowFunctions?: boolean) => any
  deepFreezeObject: (object: any) => void
  defineFunction: (target: any, name: string, hasMetrics: boolean, implementation: (...args: any[]) => any) => void
  registerPromise: <T>(promise: Promise<T>) => Promise<T>
}

export abstract class PluginWrapper implements IPluginWrapper {
  getBooleanProp(object: any, property: string): boolean {
    return this.toBoolean(this.getProp(object, property))
  }

  getNumberProp(object: any, property: string): number {
    return this.toNumber(this.getProp(object, property))
  }

  getStringProp(object: any, property: string): string {
    return this.toString(this.getProp(object, property))
  }

  setBooleanProp(object: any, property: string, value: boolean): void {
    this.setProp(object, property, this.newBoolean(value))
  }

  setNumberProp(object: any, property: string, value: number): void {
    this.setProp(object, property, this.newNumber(value))
  }

  setStringProp(object: any, property: string, value: string): void {
    this.setProp(object, property, this.newString(value))
  }

  callMethod(object: any, methodName: string, ...args: any[]): any {
    return this.callFunction(this.getProp(object, methodName), object, ...args)
  }

  deepWrap(value: any): any {
    switch (typeof value) {
      case 'undefined':
        return this.undefined
      case 'boolean':
        return this.newBoolean(value)
      case 'number':
        return this.newNumber(value)
      case 'string':
        return this.newString(value)
      case 'object':
        if (value === null)
          return this.$$null

        if (Array.isArray(value)) {
          const wrappedArray = this.newArray()
          const length = value.length
          for (let index = 0; index < length; index++) {
            this.setProp(wrappedArray, index.toString(), this.deepWrap(value[index]))
          }
          return wrappedArray
        }

        if (value instanceof ArrayBuffer)
          return this.newArrayBuffer(value)
        if (value instanceof Uint8Array)
          return this.newUint8Array(value)

        if (hasFunctionHandle(value)) {
          const handle = getFunctionHandle(value)
          if (!handle)
            throw new Error('Handle in function wrapper is not a function')
          return handle
        }

        const wrappedObject = this.newObject()
        for (const key in value) {
          this.setProp(wrappedObject, key, this.deepWrap(value[key]))
        }
        return wrappedObject

      default:
        throw new Error(`Cannot wrap ${typeof value}`)
    }
  }

  deepUnwrap(value: any, allowFunctions = false): any {
    const createUnwrapError = () => new Error(`Cannot unwrap ${this.typeof(value)}`)

    switch (this.typeof(value)) {
      case 'undefined':
        return undefined
      case 'boolean':
        return this.toBoolean(value)
      case 'number':
        return this.toNumber(value)
      case 'string':
        return this.toString(value)
      case 'object':
        if (this.isNull(value))
          return null

        if (this.isArray(value)) {
          const result: any[] = []
          const length = this.getNumberProp(value, 'length')
          for (let index = 0; index < length; index++) {
            result.push(this.deepUnwrap(this.getProp(value, index.toString()), allowFunctions))
          }
          return result
        }

        if (this.isArrayBuffer(value))
          return this.getArrayBuffer(value)
        if (this.isUint8Array(value))
          return this.getUint8Array(value)

        const result = {}
        for (const key of this.getKeys(value)) {
          result[key] = this.deepUnwrap(this.getProp(value, key), allowFunctions)
        }
        return result

      case 'function':
        if (allowFunctions) {
          return { [FUNCTION_HANDLE]: value }
        }
        throw createUnwrapError()

      default:
        throw createUnwrapError()
    }
  }

  deepFreezeObject(object: any): void {
    if (this.isObject(object)) {
      for (const key of this.getKeys(object)) {
        this.deepFreezeObject(this.getProp(object, key))
      }
    }
    this.shallowFreezeObject(object)
  }

  defineFunction(target: any, name: string, hasMetrics: any, implementation: (...args: any[]) => any): void {
    const stats = this.getStats()
    this.defineProp(target, name, {
      enumerable: false,
      value: this.newFunction(name, stats && hasMetrics ? stats.metricsWrapper(hasMetrics, implementation) : implementation),
    })
  }

  registerPromise<T>(promise: Promise<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      promise.then(
        (result) => {
          if (!this.isDestroyed())
            resolve(result)
        },
        (error) => {
          if (!this.isDestroyed())
            reject(error)
        },
      )
    })
  }

  // Abstract methods that need to be implemented by subclasses
  protected abstract toBoolean(value: any): boolean
  protected abstract toNumber(value: any): number
  protected abstract toString(value: any): string
  protected abstract getProp(object: any, property: string): any
  protected abstract setProp(object: any, property: string, value: any): void
  protected abstract newBoolean(value: boolean): any
  protected abstract newNumber(value: number): any
  protected abstract newString(value: string): any
  protected abstract newArray(): any
  protected abstract newObject(): any
  protected abstract newArrayBuffer(buffer: ArrayBuffer): any
  protected abstract newUint8Array(array: Uint8Array): any
  protected abstract newFunction(name: string, implementation: (...args: any[]) => any): any
  protected abstract callFunction(func: any, thisArg: any, ...args: any[]): any
  protected abstract typeof(value: any): string
  protected abstract $$null: any
  protected abstract undefined: any
  protected abstract isNull(value: any): boolean
  protected abstract isArray(value: any): boolean
  protected abstract isObject(value: any): boolean
  protected abstract isArrayBuffer(value: any): boolean
  protected abstract isUint8Array(value: any): boolean
  protected abstract getArrayBuffer(value: any): ArrayBuffer
  protected abstract getUint8Array(value: any): Uint8Array
  protected abstract getKeys(object: any): string[]
  protected abstract shallowFreezeObject(object: any): void
  protected abstract defineProp(target: any, name: string, descriptor: PropertyDescriptor): void
  protected abstract getStats(): any
  protected abstract isDestroyed(): boolean
}