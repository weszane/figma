// Type definitions for better type safety
import K from "./536567"
import { PLUGIN_CLOSED_ERROR, PluginError, PluginWrapper } from "./572400"
import { serializeComponentRenderer } from "./823050"
import { CppVmWrapper, ensureCppVmLoaded } from "./valueCloner"

interface RealmInterface {
  global: any
  evaluate: (code: string) => any
  makeRootRealm: () => RealmInterface
}

interface IframeWindow extends Window {
  Realm?: {
    makeRootRealm: () => RealmInterface
  }
}

interface ConsoleMethods {
  [key: string]: Fn

  log: Fn
  error: Fn
  assert: Fn
  info: Fn
  warn: Fn
  clear: Fn
}

// Realm VM state variables
let realmIframe: HTMLIFrameElement | null = null
let realmModulePromise: any = null
let realmScriptUrl = URL.createObjectURL(
  new Blob([K], {
    type: "application/javascript",
  }),
)
// Console methods for the realm
export const realmConsoleMethodNames: string[] = ["log", "error", "assert", "info", "warn", "clear"]
export const realmConsoleMethods: ConsoleMethods = {} as ConsoleMethods
// Symbols for internal handle management
const INTERNAL_HANDLE_SYMBOL: symbol = Symbol("internal")
const WAS_DESTROYED_SYMBOL: symbol = Symbol("wasDestroyed")
// Fn prototype reference
const functionPrototypeApply = Function.prototype.apply

/**
 * Wraps a value in a handle for the realm
 * Original name: et
 */
function createHandle(vm: RealmVmWrapper, value: any): { [INTERNAL_HANDLE_SYMBOL]: any } {
  if (vm[WAS_DESTROYED_SYMBOL]) {
    throw new Error(PLUGIN_CLOSED_ERROR)
  }
  if (typeof value === "object" && value !== null && INTERNAL_HANDLE_SYMBOL in value) {
    throw new Error("Wrapping a handle twice!")
  }
  return {
    [INTERNAL_HANDLE_SYMBOL]: value,
  }
}

/**
 * Extracts the value from a handle
 * Original name: ei
 */
function extractValueFromHandle(vm: RealmVmWrapper, handle: any): any {
  if (vm[WAS_DESTROYED_SYMBOL]) {
    throw new Error(PLUGIN_CLOSED_ERROR)
  }
  if (typeof handle !== "object" || handle === null || !(INTERNAL_HANDLE_SYMBOL in handle)) {
    throw new Error("The provided value is not a handle")
  }
  return handle[INTERNAL_HANDLE_SYMBOL]
}

/**
 * Realm VM Wrapper Implementation
 * Extends PluginWrapper to provide a secure JavaScript execution environment using Realms
 * Original name: en
 */
export class RealmVmWrapper extends PluginWrapper {
  // VM properties
  public vmType = "realms"
  private globalHandle: any = null
  private nullHandle: any = null
  private undefinedHandle: any = null
  private [WAS_DESTROYED_SYMBOL] = false
  private errorHandler: (error: PluginError) => void = () => {
  }

  private executionDepth = 0

  // Realm-specific properties
  private realm: RealmInterface
  private iframe: HTMLIFrameElement
  private outerToInnerFunctionTransformer: (name: string, func: Fn) => Fn
  private objectFactory: (prototype?: object | null) => any
  private arrayBufferFactory: (outerRealmArray: ArrayBuffer) => ArrayBuffer
  private uint8ArrayFactory: (outerRealmArray: Uint8Array) => Uint8Array
  private emptyObjectFactory: () => any
  private emptyArrayFactory: () => any[]
  private promiseFactory: () => {
    promise: Promise<any>
    resolve: (value?: any) => void
    reject: (reason?: any) => void
  }

  constructor() {
    super()

    // Initialize VM state
    this[WAS_DESTROYED_SYMBOL] = false
    this.errorHandler = () => {
    }
    this.executionDepth = 0

    // Create realm environment
    const { realm, iframe } = (() => {
      if (!realmIframe || !realmIframe.contentWindow || !(realmIframe.contentWindow as IframeWindow).Realm) {
        throw new Error("need to load realm before using it")
      }

      const doc = realmIframe.contentWindow!.document
      const initialLastChild = doc.body.lastChild
      const realmInstance = (realmIframe.contentWindow as IframeWindow).Realm!.makeRootRealm()
      const newLastChild = doc.body.lastChild

      if (
        initialLastChild === newLastChild
        || !newLastChild
        || (newLastChild as HTMLElement).nodeName !== "IFRAME"
      ) {
        throw new Error("can't find iframe to create plugin environment")
      }

      return {
        realm: realmInstance,
        iframe: newLastChild as HTMLIFrameElement,
      }
    })()

    this.realm = realm
    this.iframe = iframe

    // Evaluate realm utilities
    const {
      safeFunctionWrapper,
      objectCreate,
      arrayBufferCopy,
      uint8ArrayCopy,
      emptyObject,
      emptyArray,
      promiseCreate,
    } = this.realm.evaluate(`
      ({
        safeFunctionWrapper: (outerRealmUnsafeFunction, functionName) => {
          // This function is safe because it is created here inside the realm.
          const innerRealmSafeFunction = function innerRealmSafeFunction(...innerRealmArgs) {
            try {
              return outerRealmUnsafeFunction(this, ...innerRealmArgs)
            } catch (outerRealmException) {
              let outerMessage = ''
              try {
                // This nested try-catch exists because it's theoretically possible for .message
                // to throw an error from the outer realm if it's a getter or an object whose
                // toString() throws an error.
                if (outerRealmException && outerRealmException.message) {
                  outerMessage =  ": " + outerRealmException.message
                }
              } catch(ignored) {
                throw new Error('API error trying to convert error message -- please contact support')
              }

              // We need to re-throw a new error object created in the inner realm
              // so that it's safe for the plugin to look at
              throw new Error('in ' + functionName + outerMessage)
            }
          }
          return innerRealmSafeFunction
        },
        objectCreate: (() => {
          // Wrap Object.create so it can't be modified and can't be accessed by the plugin
          let objCreate = Object.create
          return (prototype) => {
            return objCreate(prototype)
          }
        })(),
        arrayBufferCopy: (() => {
          // Wrap ArrayBuffer so it can't be modified by the plugin
          let arrayConstructor = ArrayBuffer
          return (outerRealmArray) => {
            return arrayConstructor.prototype.slice.call(outerRealmArray, 0)
          }
        })(),
        uint8ArrayCopy: (() => {
          // Wrap Uint8Array so it can't be modified by the plugin
          let arrayConstructor = Uint8Array
          return (outerRealmArray) => {
            return new arrayConstructor(outerRealmArray)
          }
        })(),
        emptyObject: () => {
          return {}
        },
        emptyArray: () => {
          return []
        },
        promiseCreate: (() => {
          const promiseCtor = Promise
          return () => {
            let resolve
            let reject
            const promise = new promiseCtor((innerResolve, innerReject) => {
              resolve = innerResolve
              reject = innerReject
            })
            return {
              promise,
              resolve,
              reject,
            }
          }
        })(),
      })
    `)

    // Create function transformer
    const createTransformedFunction = (name: string, func: Fn, padArgs: boolean) => {
      const transformedFunc = safeFunctionWrapper((context: any, ...args: any[]) => {
        const contextHandle = createHandle(this, context)
        const processedArgs = padArgs
          ? args.map(arg => createHandle(this, arg))
          : args

        // Pad arguments if needed
        if (padArgs) {
          while (processedArgs.length < func.length) {
            processedArgs.push(createHandle(this, undefined))
          }
        }

        const result = func.apply(contextHandle, processedArgs)
        return result === undefined ? undefined : extractValueFromHandle(this, result)
      }, name)

      Object.defineProperty(transformedFunc, "name", {
        value: name,
        writable: false,
      })

      return transformedFunc
    }

    this.outerToInnerFunctionTransformer = (name: string, func: Fn) =>
      createTransformedFunction(name, func, true)
    this.objectFactory = objectCreate
    this.arrayBufferFactory = arrayBufferCopy
    this.uint8ArrayFactory = uint8ArrayCopy
    this.emptyObjectFactory = emptyObject
    this.emptyArrayFactory = emptyArray
    this.promiseFactory = promiseCreate

    // Initialize handles
    this.globalHandle = createHandle(this, this.realm.global)
    this.nullHandle = createHandle(this, null)
    this.undefinedHandle = createHandle(this, undefined)

    // Setup console in the realm
    const consoleHandle = this.newObject()
    this.setProp(this.global, "console", consoleHandle)
    for (const methodName of realmConsoleMethodNames) {
      this.setProp(
        consoleHandle,
        methodName,
        createHandle(this, createTransformedFunction(methodName, realmConsoleMethods[methodName], false)),
      )
    }
  }

  // Basic value accessors
  get global(): any {
    if (this.globalHandle) {
      return this.globalHandle
    }
    throw new Error("no global handle")
  }

  get null(): any {
    if (this.nullHandle) {
      return this.nullHandle
    }
    throw new Error("no null handle")
  }

  get undefined(): any {
    if (this.undefinedHandle) {
      return this.undefinedHandle
    }
    throw new Error("no undefined handle")
  }

  // Type checking methods
  typeof(handle: any): string {
    return typeof extractValueFromHandle(this, handle)
  }

  isNumber(handle: any): boolean {
    return typeof extractValueFromHandle(this, handle) === "number"
  }

  isBoolean(handle: any): boolean {
    return typeof extractValueFromHandle(this, handle) === "boolean"
  }

  isString(handle: any): boolean {
    return typeof extractValueFromHandle(this, handle) === "string"
  }

  isNull(handle: any): boolean {
    return extractValueFromHandle(this, handle) === null
  }

  isUndefined(handle: any): boolean {
    return extractValueFromHandle(this, handle) === undefined
  }

  isObject(handle: any): boolean {
    const value = extractValueFromHandle(this, handle)
    return typeof value === "object" && value !== null
  }

  isArray(handle: any): boolean {
    return Array.isArray(extractValueFromHandle(this, handle))
  }

  isArrayBuffer(handle: any): boolean {
    const value = extractValueFromHandle(this, handle)
    return Object.prototype.toString.call(value) === "[object ArrayBuffer]"
  }

  isUint8Array(handle: any): boolean {
    const value = extractValueFromHandle(this, handle)
    return (
      Object.prototype.toString.call(value) === "[object Uint8Array]" && ArrayBuffer.isView(value)
    )
  }

  isFunction(handle: any): boolean {
    return typeof extractValueFromHandle(this, handle) === "function"
  }

  // Object manipulation methods
  shallowFreezeObject(handle: any): void {
    Object.freeze(extractValueFromHandle(this, handle))
  }

  // Value extraction methods
  getNumber(handle: any): number {
    const value = extractValueFromHandle(this, handle)
    if (typeof value !== "number") {
      throw new TypeError("Value is not a number")
    }
    return +value
  }

  getBoolean(handle: any): boolean {
    const value = extractValueFromHandle(this, handle)
    if (typeof value !== "boolean") {
      throw new TypeError("Value is not a boolean")
    }
    return !!value
  }

  getString(handle: any): string {
    const value = extractValueFromHandle(this, handle)
    if (typeof value !== "string") {
      throw new TypeError("Value is not a string")
    }
    return `${value}`
  }

  getArrayBuffer(handle: any): ArrayBuffer {
    const value = extractValueFromHandle(this, handle)
    if (Object.prototype.toString.call(value) !== "[object ArrayBuffer]") {
      throw new Error("Value is not a ArrayBuffer")
    }
    return ArrayBuffer.prototype.slice.call(value, 0)
  }

  getUint8Array(handle: any): Uint8Array {
    if (!this.isUint8Array(handle)) {
      throw new Error("Value is not a Uint8Array")
    }
    const value = extractValueFromHandle(this, handle)
    try {
      const byteOffset = +value.byteOffset
      const byteLength = +value.byteLength
      const bufferSlice = ArrayBuffer.prototype.slice.call(value.buffer, byteOffset, byteOffset + byteLength)
      return new Uint8Array(bufferSlice)
    }
    catch (error) {
      throw new PluginError(this, createHandle(this, error))
    }
  }

  // Type conversion methods
  toNumber(handle: any): number {
    const value = extractValueFromHandle(this, handle)
    try {
      return +value
    }
    catch (error) {
      throw new PluginError(this, createHandle(this, error))
    }
  }

  toBoolean(handle: any): boolean {
    const value = extractValueFromHandle(this, handle)
    try {
      return !!value
    }
    catch (error) {
      throw new PluginError(this, createHandle(this, error))
    }
  }

  toString(handle: any): string {
    const value = extractValueFromHandle(this, handle)
    try {
      return `${value}`
    }
    catch (error) {
      throw new PluginError(this, createHandle(this, error))
    }
  }

  // Value creation methods
  newNumber(value: number): any {
    if (typeof value !== "number") {
      throw new TypeError("Value is not a number")
    }
    return createHandle(this, value)
  }

  newBoolean(value: boolean): any {
    if (typeof value !== "boolean") {
      throw new TypeError("Value is not a boolean")
    }
    return createHandle(this, value)
  }

  newString(value: string): any {
    if (typeof value !== "string") {
      throw new TypeError("Value is not a string")
    }
    return createHandle(this, value)
  }

  newSymbol(description: string): any {
    if (typeof description !== "string") {
      throw new TypeError("Value is not a string")
    }
    return createHandle(this, Symbol(description))
  }

  newObject(prototype?: any): any {
    let obj: any
    if (!prototype) {
      return createHandle(this, this.emptyObjectFactory())
    }
    const prototypeValue = extractValueFromHandle(this, prototype)
    try {
      obj = this.objectFactory(prototypeValue)
    }
    catch (error) {
      throw new PluginError(this, createHandle(this, error))
    }
    return createHandle(this, obj)
  }

  newArray(): any {
    return createHandle(this, this.emptyArrayFactory())
  }

  newArrayBuffer(buffer: ArrayBuffer): any {
    if (Object.prototype.toString.call(buffer) === "[object ArrayBuffer]") {
      return createHandle(this, this.arrayBufferFactory(buffer))
    }
    throw new Error("Value is not an ArrayBuffer")
  }

  newUint8Array(array: Uint8Array): any {
    if (
      Object.prototype.toString.call(array) === "[object Uint8Array]"
      && ArrayBuffer.isView(array)
    ) {
      return createHandle(this, this.uint8ArrayFactory(array))
    }
    throw new Error("Value is not an Uint8Array")
  }

  newFunction(name: string, func: Fn): any {
    if (typeof func !== "function") {
      throw new TypeError("Value is not a function")
    }
    return createHandle(this, this.outerToInnerFunctionTransformer(name, func))
  }

  newPrototype(name: string): any {
    const result = this.evalTrustedCode(`(function ${name}() {}).prototype`)
    if (result.type !== "SUCCESS") {
      throw new Error("Internal eval error")
    }
    return result.handle
  }

  newJsxRenderer(renderer: any): any {
    const result = this.evalTrustedCode(serializeComponentRenderer(renderer))
    if (result.type !== "SUCCESS") {
      throw new Error("Failed to create JSX renderer")
    }
    return result.handle
  }

  newPromise(): { promise: any, resolve: (value: any) => void, reject: (reason: any) => void } {
    const { promise, resolve, reject } = this.promiseFactory()
    return {
      promise: createHandle(this, promise),
      resolve: (value: any) => {
        this.callFunction(createHandle(this, resolve), this.null, value)
      },
      reject: (reason: any) => {
        this.callFunction(createHandle(this, reject), this.null, reason)
      },
    }
  }

  // Object property methods
  getKeys(handle: any): string[] {
    const value = extractValueFromHandle(this, handle)
    if (typeof value !== "object") {
      throw new TypeError("not an object")
    }
    return Object.keys(value)
  }

  getProp(handle: any, propertyName: string): any {
    let propertyValue: any
    const obj = extractValueFromHandle(this, handle)
    try {
      propertyValue = obj[propertyName]
    }
    catch (error) {
      throw new PluginError(this, createHandle(this, error))
    }
    return createHandle(this, propertyValue)
  }

  setProp(handle: any, propertyName: string, value: any): void {
    const obj = extractValueFromHandle(this, handle)
    const propertyValue = extractValueFromHandle(this, value)
    try {
      obj[propertyName] = propertyValue
    }
    catch (error) {
      throw new PluginError(this, createHandle(this, error))
    }
  }

  defineProp(handle: any, propertyName: string, descriptor: PropertyDescriptor): void {
    const descriptorObj: PropertyDescriptor = {}
    if ("configurable" in descriptor) {
      descriptorObj.configurable = !!descriptor.configurable
    }
    if ("enumerable" in descriptor) {
      descriptorObj.enumerable = !!descriptor.enumerable
    }
    if ("writable" in descriptor) {
      descriptorObj.writable = !!descriptor.writable
    }
    if ("value" in descriptor && descriptor.value) {
      descriptorObj.value = extractValueFromHandle(this, descriptor.value)
    }
    if ("get" in descriptor && descriptor.get) {
      descriptorObj.get = this.outerToInnerFunctionTransformer(
        `get_${propertyName}`,
        descriptor.get,
      )
    }
    if ("set" in descriptor && descriptor.set) {
      descriptorObj.set = this.outerToInnerFunctionTransformer(
        `set_${propertyName}`,
        descriptor.set,
      )
    }
    Object.defineProperty(extractValueFromHandle(this, handle), propertyName, descriptorObj)
  }

  isEqual(handle1: any, handle2: any): boolean {
    return extractValueFromHandle(this, handle1) === extractValueFromHandle(this, handle2)
  }

  // Fn calling methods
  callFunction(
    funcHandle: any,
    thisArg: any,
    ...args: any[]
  ): { type: "SUCCESS", handle: any } | { type: "FAILURE", error: PluginError } {
    const func = extractValueFromHandle(this, funcHandle)
    const context = extractValueFromHandle(this, thisArg)
    const processedArgs = args.map(arg => extractValueFromHandle(this, arg))

    try {
      this.executionDepth++
      const result = functionPrototypeApply.call(func, context, processedArgs)
      return {
        type: "SUCCESS",
        handle: createHandle(this, result),
      }
    }
    catch (error) {
      realmConsoleMethods.error(error)
      const pluginError = new PluginError(this, createHandle(this, error))
      if (this.executionDepth === 1) {
        this.errorHandler(pluginError)
      }
      return {
        type: "FAILURE",
        error: pluginError,
      }
    }
    finally {
      this.executionDepth--
    }
  }

  callConstructor(constructorHandle: any, ...args: any[]): any {
    const constructHelper = createHandle(this, (Ctor: any, ...ctorArgs: any[]) => new Ctor(...ctorArgs))
    return this.callFunction(constructHelper, this.undefined, constructorHandle, ...args)
  }

  // Code evaluation methods
  evalCode(
    code: string,
  ): { type: "SUCCESS", handle: any } | { type: "FAILURE", error: PluginError } {
    try {
      this.executionDepth++
      const result = this.realm.evaluate(code)
      return {
        type: "SUCCESS",
        handle: createHandle(this, result),
      }
    }
    catch (error) {
      realmConsoleMethods.error(error)
      const pluginError = new PluginError(this, createHandle(this, error))
      if (this.executionDepth === 1) {
        this.errorHandler(pluginError)
      }
      return {
        type: "FAILURE",
        error: pluginError,
      }
    }
    finally {
      this.executionDepth--
    }
  }

  evalTopLevelCode(
    code: string,
  ): { type: "SUCCESS", handle: any } | { type: "FAILURE", error: PluginError } {
    const result = this.evalCode(code)
    if (result.type === "SUCCESS") {
      result.handle = this.undefined
    }
    return result
  }

  evalTrustedCode(
    code: string,
  ): { type: "SUCCESS", handle: any } | { type: "FAILURE", error: PluginError } {
    return this.evalCode(code)
  }

  evalTrustedTopLevelCode(
    code: string,
  ): { type: "SUCCESS", handle: any } | { type: "FAILURE", error: PluginError } {
    return this.evalTopLevelCode(code)
  }

  // Event handler setters
  setAbortHandler(_handler: Fn): void {
    // No implementation needed
  }

  setErrorHandler(handler: (error: PluginError) => void): void {
    this.errorHandler = handler
  }

  // Stats management
  getStats(): any {
    return null
  }

  setStats(_stats: any): void {
    // No implementation needed
  }

  // Lifecycle methods
  destroy(): void {
    this[WAS_DESTROYED_SYMBOL] = true
    this.iframe.remove()
  }

  isDestroyed(): boolean {
    return this[WAS_DESTROYED_SYMBOL]
  }

  // Handle management
  retainHandle(_handle: any): void {
    // No implementation needed
  }

  releaseHandle(_handle: any): void {
    // No implementation needed
  }
}

// Refactored from minified JS to TypeScript with improved readability, type safety, and comments
// Original function name: $$el0
/**
 * Ensures the appropriate VM module is loaded based on the requested type
 * @param vmType - The type of VM to load ("cppvm" or "realm")
 */
export async function ensureVmModuleLoaded(vmType: "cppvm" | "realm"): Promise<void> {
  if (vmType === "cppvm") {
    await ensureCppVmLoaded()
  }
  else {
    if (!realmModulePromise) {
      realmModulePromise = new Promise<void>((resolve, reject) => {
        const iframe = document.createElement("iframe")
        iframe.style.display = "none"

        iframe.onload = () => {
          const iframeDocument = iframe.contentDocument
          if (!iframeDocument) {
            reject(new Error("Failed to create realm loader"))
            return
          }

          const scriptElement = iframeDocument.createElement("script")
          scriptElement.src = realmScriptUrl

          scriptElement.onload = () => {
            if (iframe.contentWindow && (iframe.contentWindow as IframeWindow).Realm) {
              resolve()
            }
            else {
              reject(new Error("Failed to load realm"))
            }
          }

          iframeDocument.body.appendChild(scriptElement)
        }

        document.body.appendChild(iframe)

        if (!iframe.contentWindow || !iframe.contentDocument) {
          reject(new Error("Failed to create realm loader"))
        }

        realmIframe = iframe
      }).catch(() => {
        realmModulePromise = null
        throw new Error("Failed to load realm module")
      })
    }

    await realmModulePromise
  }
}

// Original function name: ed
/**
 * Creates a new VM instance based on the requested type
 * @param vmType - The type of VM to create ("cppvm" or "realm")
 * @returns A new VM instance
 */
export async function createVmInstance(vmType: "cppvm" | "realm") {
  await ensureVmModuleLoaded(vmType)
  return vmType === "cppvm" ? new CppVmWrapper() : new RealmVmWrapper()
}
