/* eslint-disable no-eval */
import { PLUGIN_CLOSED_ERROR, PluginError, PluginWrapper } from '../905/572400'
import { H } from '../905/823050'

const INTERNAL = Symbol('internal')
const WAS_DESTROYED = Symbol('wasDestroyed')
const APPLY = Function.prototype.apply

export function wrapHandle(vm: NoOpVm, value: unknown) {
  if (vm[WAS_DESTROYED])
    throw new Error(PLUGIN_CLOSED_ERROR)
  if (typeof value === 'object' && value !== null && INTERNAL in value)
    throw new Error('Wrapping a handle twice!')
  return { [INTERNAL]: value }
}

function unwrapHandle(vm: NoOpVm, handle: unknown) {
  if (vm[WAS_DESTROYED])
    throw new Error(PLUGIN_CLOSED_ERROR)
  if (typeof handle !== 'object' || handle === null || !(INTERNAL in handle))
    throw new Error('The provided value is not a handle')
  return handle[INTERNAL]
}

export class NoOpVm extends PluginWrapper {
  protected [WAS_DESTROYED]: boolean
  protected _stats: any
  protected canEval: boolean
  protected errorHandler: (e: any) => void
  protected executionDepth: number
  global: any
  $$null: any
  undefined: any
  vmType: string

  constructor() {
    super()
    this.vmType = 'noopvm'
    this.errorHandler = () => {}
    this.executionDepth = 0
    this[WAS_DESTROYED] = false
    this._stats = null
    this.canEval = false
    this.global = wrapHandle(this, window)
    this.$$null = wrapHandle(this, null)
    this.undefined = wrapHandle(this, void 0)
    try {
      this.canEval = eval('true')
    }
    catch {
      this.canEval = false
    }
  }

  typeof(handle: any) {
    return typeof unwrapHandle(this, handle)
  }

  isNumber(handle: any) {
    return typeof unwrapHandle(this, handle) === 'number'
  }

  isBoolean(handle: any) {
    return typeof unwrapHandle(this, handle) === 'boolean'
  }

  isString(handle: any) {
    return typeof unwrapHandle(this, handle) === 'string'
  }

  isNull(handle: any) {
    return unwrapHandle(this, handle) === null
  }

  isUndefined(handle: any) {
    return unwrapHandle(this, handle) === void 0
  }

  isObject(handle: any) {
    const value = unwrapHandle(this, handle)
    return typeof value === 'object' && value !== null
  }

  isArray(handle: any) {
    return Array.isArray(unwrapHandle(this, handle))
  }

  isArrayBuffer(handle: any) {
    return unwrapHandle(this, handle) instanceof ArrayBuffer
  }

  isUint8Array(handle: any) {
    return unwrapHandle(this, handle) instanceof Uint8Array
  }

  isFunction(handle: any) {
    return typeof unwrapHandle(this, handle) === 'function'
  }

  shallowFreezeObject(handle: any) {
    Object.freeze(unwrapHandle(this, handle))
  }

  getNumber(handle: unknown) {
    const value = unwrapHandle(this, handle)
    if (typeof value !== 'number')
      throw new Error('Value is not a number')
    return value
  }

  getBoolean(handle: unknown) {
    const value = unwrapHandle(this, handle)
    if (typeof value !== 'boolean')
      throw new Error('Value is not a boolean')
    return value
  }

  getString(handle: any) {
    const value = unwrapHandle(this, handle)
    if (typeof value !== 'string')
      throw new Error('Value is not a string')
    return value
  }

  getArrayBuffer(handle: any) {
    if (!this.isArrayBuffer(handle))
      throw new Error('Value is not a ArrayBuffer')
    return ArrayBuffer.prototype.slice.call(unwrapHandle(this, handle), 0)
  }

  getUint8Array(handle: any) {
    if (!this.isUint8Array(handle))
      throw new Error('Value is not a Uint8Array')
    return new Uint8Array(unwrapHandle(this, handle))
  }

  toNumber(handle: any) {
    const value = unwrapHandle(this, handle)
    try {
      return +value
    }
    catch (err) {
      throw new PluginError(this, wrapHandle(this, err))
    }
  }

  toBoolean(handle: unknown) {
    const value = unwrapHandle(this, handle)
    try {
      return !!value
    }
    catch (err) {
      throw new PluginError(this, wrapHandle(this, err))
    }
  }

  toString(handle: unknown) {
    const value = unwrapHandle(this, handle)
    try {
      return `${value}`
    }
    catch (err) {
      throw new PluginError(this, wrapHandle(this, err))
    }
  }

  newNumber(value: unknown) {
    if (typeof value !== 'number')
      throw new Error('Value is not a number')
    return wrapHandle(this, value)
  }

  newBoolean(value: unknown) {
    if (typeof value !== 'boolean')
      throw new Error('Value is not a boolean')
    return wrapHandle(this, value)
  }

  newString(value: unknown) {
    if (typeof value !== 'string')
      throw new Error('Value is not a string')
    return wrapHandle(this, value)
  }

  newSymbol(value: unknown) {
    if (typeof value !== 'string')
      throw new Error('Value is not a string')
    return wrapHandle(this, Symbol(value))
  }

  newObject(protoHandle?: any) {
    if (!protoHandle)
      return wrapHandle(this, {})
    try {
      const proto = unwrapHandle(this, protoHandle)
      return wrapHandle(this, Object.create(proto))
    }
    catch (err) {
      throw new PluginError(this, wrapHandle(this, err))
    }
  }

  newArray() {
    return wrapHandle(this, [])
  }

  newArrayBuffer(value: any) {
    if (Object.prototype.toString.call(value) === '[object ArrayBuffer]')
      return wrapHandle(this, ArrayBuffer.prototype.slice.call(value, 0))
    throw new Error('Value is not an ArrayBuffer')
  }

  newUint8Array(value: Uint8Array) {
    if (
      Object.prototype.toString.call(value) === '[object Uint8Array]'
      && ArrayBuffer.isView(value)
    ) {
      return wrapHandle(this, new Uint8Array(value))
    }
    throw new Error('Value is not an Uint8Array')
  }

  isEqual(a: any, b: any) {
    return unwrapHandle(this, a) === unwrapHandle(this, b)
  }

  newFunction(name: string, fn: (...args: any[]) => any) {
    const vm = this
    const wrappedFn = function (this: any, ...args: any[]) {
      let result
      const thisHandle = wrapHandle(vm, this)
      const argHandles = args.map(arg => wrapHandle(vm, arg))
      while (argHandles.length < fn.length) argHandles.push(vm.undefined)
      try {
        result = fn.apply(thisHandle, argHandles)
      }
      catch (err: any) {
        const msg = err && err.message ? `: ${err.message}` : ''
        return new Error(`in ${name}${msg}`)
      }
      return result === void 0 ? void 0 : unwrapHandle(vm, result)
    }
    Object.defineProperty(wrappedFn, 'name', { writable: false, value: name })
    return wrapHandle(vm, wrappedFn)
  }

  newPrototype(name: string) {
    if (!this.canEval)
      return wrapHandle(this, function () {}.prototype)
    const result = this.evalTrustedCode(`(function ${name}() {}).prototype`)
    if (result.type !== 'SUCCESS')
      throw new Error('Internal eval error')
    return result.handle
  }

  newJsxRenderer(component: any) {
    return wrapHandle(this, H(component))
  }

  newPromise() {
    let resolve: (v: any) => void = () => {}
    let reject: (e: any) => void = () => {}
    const promise = new Promise((res, rej) => {
      resolve = res
      reject = rej
    })
    return {
      promise: wrapHandle(this, promise),
      resolve: (handle: any) => resolve(unwrapHandle(this, handle)),
      reject: (handle: any) => reject(unwrapHandle(this, handle)),
    }
  }

  getKeys(handle: any) {
    return Object.keys(unwrapHandle(this, handle))
  }

  getProp(objHandle: any, prop: string) {
    const obj = unwrapHandle(this, objHandle)
    try {
      return wrapHandle(this, obj[prop])
    }
    catch (err) {
      throw new PluginError(this, wrapHandle(this, err))
    }
  }

  setProp(objHandle: any, prop: string, valueHandle: any) {
    const obj = unwrapHandle(this, objHandle)
    const value = unwrapHandle(this, valueHandle)
    try {
      obj[prop] = value
    }
    catch (err) {
      throw new PluginError(this, wrapHandle(this, err))
    }
  }

  defineProp(objHandle: any, prop: string, desc: any) {
    const descriptor: any = {}
    if ('configurable' in desc)
      descriptor.configurable = !!desc.configurable
    if ('enumerable' in desc)
      descriptor.enumerable = !!desc.enumerable
    if ('writable' in desc)
      descriptor.writable = !!desc.writable
    if ('value' in desc && desc.value)
      descriptor.value = unwrapHandle(this, desc.value)
    if ('get' in desc && desc.get)
      descriptor.get = unwrapHandle(this, this.newFunction(`get_${prop}`, desc.get))
    if ('set' in desc && desc.set)
      descriptor.set = unwrapHandle(this, this.newFunction(`set_${prop}`, desc.set))
    Object.defineProperty(unwrapHandle(this, objHandle), prop, descriptor)
  }

  callFunction(fnHandle: any, thisHandle: any, ...argHandles: any[]) {
    const fn = unwrapHandle(this, fnHandle)
    const thisArg = unwrapHandle(this, thisHandle)
    const args = argHandles.map(arg => unwrapHandle(this, arg))
    try {
      this.executionDepth++
      const result = APPLY.call(fn, thisArg, args)
      return { type: 'SUCCESS', handle: wrapHandle(this, result) }
    }
    catch (err) {
      console.error(err)
      const error = new PluginError(this, wrapHandle(this, err))
      if (this.executionDepth === 1)
        this.errorHandler(error)
      return { type: 'FAILURE', error }
    }
    finally {
      this.executionDepth--
    }
  }

  callConstructor(constructorHandle: any, ...argHandles: any[]) {
    const constructFn = wrapHandle(this, (Ctor: any, ...args: any[]) => new Ctor(...args))
    return this.callFunction(constructFn, this.undefined, constructorHandle, ...argHandles)
  }

  evalCode(code: string) {
    try {
      this.executionDepth++
      const result = eval(`"use strict";\n${code}`)
      return { type: 'SUCCESS', handle: wrapHandle(this, result) }
    }
    catch (err) {
      console.error(err)
      const error = new PluginError(this, wrapHandle(this, err))
      if (this.executionDepth === 1)
        this.errorHandler(error)
      return { type: 'FAILURE', error }
    }
    finally {
      this.executionDepth--
    }
  }

  evalTopLevelCode(code: string) {
    const result = this.evalCode(code)
    if (result.type === 'SUCCESS')
      result.handle = this.undefined
    return result
  }

  evalTrustedCode(code: string) {
    return this.evalCode(code)
  }

  evalTrustedTopLevelCode(code: string) {
    return this.evalTopLevelCode(code)
  }

  setAbortHandler(_handler: any) {}
  setErrorHandler(handler: (e: any) => void) {
    this.errorHandler = handler
  }

  getStats() {
    return this._stats
  }

  setStats(stats: any) {
    this._stats = stats
  }

  destroy() {
    this[WAS_DESTROYED] = true
  }

  isDestroyed() {
    return this[WAS_DESTROYED]
  }

  retainHandle(_handle: any) {}
  releaseHandle(_handle: any) {}
}

export class ScopedNoOpVm extends NoOpVm {
  scope: any
  isTrusted: boolean

  constructor() {
    super()
    this.vmType = 'scopednoopvm'
    this.scope = {}
    this.isTrusted = false
    this.global = wrapHandle(this, this.scope)
  }

  evalTrustedCode(code: string) {
    this.isTrusted = true
    try {
      return super.evalCode(code)
    }
    finally {
      this.isTrusted = false
    }
  }

  evalTrustedTopLevelCode(code: string) {
    this.isTrusted = true
    try {
      return super.evalTopLevelCode(code)
    }
    finally {
      this.isTrusted = false
    }
  }

  evalCode(code: string) {
    if (!this.isTrusted)
      throw new Error('Scoped NoOp Vm can only run trusted code')
    const { figma } = this.scope
    const prevFigma = window.figma
    window.figma = figma
    try {
      const result = (0, eval)(code)
      return { type: 'SUCCESS', handle: wrapHandle(this, result) }
    }
    finally {
      window.figma = prevFigma
    }
  }
}

export function createPluginContext() {
  const vm = new ScopedNoOpVm()
  const shutdownActions: Array<() => void> = [() => vm.destroy()]
  const runShutdownActions = () => {
    let firstError
    for (const action of shutdownActions) {
      try {
        action()
      }
      catch (err) {
        firstError ||= err
        console.error(`runShutdownActions error: ${err}`)
      }
    }
    shutdownActions.length = 0
    if (firstError)
      throw firstError
  }
  return {
    addShutdownAction: (action: () => void) => {
      if (!shutdownActions.includes(action))
        shutdownActions.push(action)
    },
    closePlugin: () => {
      runShutdownActions()
      return Promise.resolve()
    },
    noOpVm: vm,
  }
}

