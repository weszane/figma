import { BrowserInfo, isIpadDevice } from "../figma_app/778880"
import { reportError } from "./11"
import { ServiceCategories } from "./165054"
import { statsigClient } from "./516963"
import { PluginError, PluginWrapper } from "./572400"
import { serializeComponentRenderer } from "./823050"

export let n
let y = {}
// Reserved JavaScript keywords set
const reservedKeywords: Set<string> = new Set([
  "arguments",
  "await",
  "break",
  "case",
  "catch",
  "class",
  "const",
  "continue",
  "debugger",
  "default",
  "delete",
  "do",
  "else",
  "enum",
  "eval",
  "export",
  "extends",
  "false",
  "finally",
  "for",
  "function",
  "if",
  "implements",
  "import",
  "in",
  "instanceof",
  "interface",
  "let",
  "new",
  "null",
  "package",
  "",
  "protected",
  "public",
  "return",
  "static",
  "super",
  "switch",
  "this",
  "throw",
  "true",
  "try",
  "typeof",
  "var",
  "void",
  "while",
  "with",
  "yield",
])
// Valid identifier regex pattern
const validIdentifierPattern: RegExp = /^[a-z_$][\w$]*$/i

// Type definitions for better type safety
interface ApiInterface {
  evalCode: (code: string) => any
  retainHandle: (handle: any) => void
  $$null: any
  $$typeof: (handle: any) => string
  isNumber: (handle: any) => boolean
  isBoolean: (handle: any) => boolean
  isString: (handle: any) => boolean
  isNull: (handle: any) => boolean
  isUndefined: (handle: any) => boolean
  isUint8Array: (handle: any) => boolean
  isFunction: (handle: any) => boolean
  isArray: (handle: any) => boolean
  getNumber: (handle: any) => number
  getBoolean: (handle: any) => boolean
  getString: (handle: any) => string
  getUint8Array: (handle: any) => Uint8Array
  getPropStr: (obj: any, prop: string) => any
  callFunction: (func: any, thisArg: any, args: any[]) => any
  getProto: (obj: any) => any
  getOwnKeys: (obj: any) => string[]
  isObject: (handle: any) => boolean
  newObject: () => any
  setPropStr: (obj: any, prop: string, value: any) => void
  newFunction: (name: string, func: Fn) => any
}

interface ConsoleInterface {
  [key: string]: Fn

  error: (error: any) => void
}

interface HandleToValueMap {
  get: (handle: any) => any
  set: (handle: any, value: any) => void
}

/**
 * Class responsible for cloning values between VM contexts
 * Original name: I
 */
class ValueCloner {
  private api: ApiInterface
  private vmWasDestroyed: () => boolean
  private valuesToHandles: Map<object, any>
  private getOwnPropertyDescriptors: any
  private hasOwnProperty: any
  private newMap: any
  private mapGet: any
  private mapSet: any

  constructor(api: ApiInterface, consoleObj: ConsoleInterface, vmWasDestroyed: () => boolean) {
    this.api = api
    this.vmWasDestroyed = vmWasDestroyed
    this.valuesToHandles = new Map()

    // Initialize essential API functions
    this.getOwnPropertyDescriptors = api.evalCode("Object.getOwnPropertyDescriptors")
    this.hasOwnProperty = api.evalCode("Object.hasOwnProperty")
    this.newMap = api.evalCode("(Map => () => new Map)(Map)")
    this.mapGet = api.evalCode("Map.prototype.get")
    this.mapSet = api.evalCode("Map.prototype.set")

    // Retain handles to prevent garbage collection
    api.retainHandle(this.getOwnPropertyDescriptors)
    api.retainHandle(this.hasOwnProperty)
    api.retainHandle(this.newMap)
    api.retainHandle(this.mapGet)
    api.retainHandle(this.mapSet)

    // Setup console object in VM
    const consoleHandle = api.newObject()
    api.setPropStr(api.global, "console", consoleHandle)

    // Bind console methods
    for (const method in consoleObj) {
      api.setPropStr(
        consoleHandle,
        method,
        api.newFunction(method, (...args: any[]) => {
          try {
            return consoleObj[method](...this.cloneArguments(args))
          }
          catch (error) {
            consoleObj.error(error)
            return error
          }
        }),
      )
    }
  }

  /**
   * Creates a mapping between handles and values
   * Original name: createHandleToValueMap
   */
  private createHandleToValueMap(): HandleToValueMap {
    const api = this.api
    const mapHandle = api.callFunction(this.newMap, api.$$null, [])
    const values: any[] = []

    return {
      get: (handle: any) => {
        const indexHandle = api.callFunction(this.mapGet, mapHandle, [handle])
        return api.isNumber(indexHandle) ? values[api.getNumber(indexHandle)] : y
      },
      set: (handle: any, value: any) => {
        const index = values.length
        api.callFunction(this.mapSet, mapHandle, [handle, api.newNumber(index)])
        values.push(value)
      },
    }
  }

  /**
   * Clones function arguments
   * Original name: cloneArguments
   */
  private cloneArguments(args: any[]): any[] {
    const handleMap = this.createHandleToValueMap()
    const clonedArgs: any[] = []

    for (const arg of args) {
      clonedArgs.push(this.cloneValue(handleMap, arg))
    }

    return clonedArgs
  }

  /**
   * Clones a value from VM context
   * Original name: cloneValue
   */
  private cloneValue(handleMap: HandleToValueMap, handle: any): any {
    const cachedValue = handleMap.get(handle)
    if (cachedValue !== y) {
      return cachedValue
    }

    const api = this.api
    const type = api.$$typeof(handle)

    switch (type) {
      case "undefined":
        return undefined
      case "boolean":
        return api.getBoolean(handle)
      case "number":
        return api.getNumber(handle)
      case "string":
        return api.getString(handle)
      default:
        if (api.isNull(handle)) {
          return null
        }

        if (api.isUint8Array(handle)) {
          const uint8Array = api.getUint8Array(handle)
          handleMap.set(handle, uint8Array)
          return uint8Array
        }

        if (api.isFunction(handle)) {
          let functionName = ""
          try {
            functionName = api.getString(api.getPropStr(handle, "name"))
          }
          catch (e) {
            // Ignore error
          }

          let func: Fn = function () {
          }

          // Create named function if valid identifier
          if (validIdentifierPattern.test(functionName) && !reservedKeywords.has(functionName)) {
            try {
              func = new Fn(`return function ${functionName}() {}`)()
            }
            catch (e) {
              // Ignore error
            }
          }

          handleMap.set(handle, func)
          return func
        }

        if (api.isArray(handle)) {
          const length = api.getNumber(api.getPropStr(handle, "length"))
          const array: any[] = []
          handleMap.set(handle, array)

          for (let i = 0; i < length; i++) {
            array.push(this.cloneValue(handleMap, api.getPropStr(handle, i.toString())))
          }

          return array
        }

        return this.cloneObjectWithProperties(handleMap, handle)
    }
  }

  /**
   * Clones object with its properties
   * Original name: cloneObjectWithProperties
   */
  private cloneObjectWithProperties(handleMap: HandleToValueMap, objHandle: any): object {
    const api = this.api
    const descriptorsHandle = api.callFunction(this.getOwnPropertyDescriptors, api.$$null, [objHandle])
    const clonedObj: any = {}

    handleMap.set(objHandle, clonedObj)
    api.retainHandle(objHandle)
    this.valuesToHandles.set(clonedObj, objHandle)

    // Set prototype
    const protoHandle = api.getProto(objHandle)
    Object.setPrototypeOf(clonedObj, this.cloneValue(handleMap, protoHandle))

    // Clone properties
    for (const key of api.getOwnKeys(descriptorsHandle)) {
      const descriptorHandle = api.getPropStr(descriptorsHandle, key)
      const isEnumerable = api.getBoolean(api.getPropStr(descriptorHandle, "enumerable"))
      const getterHandle = api.getPropStr(descriptorHandle, "get")
      const setterHandle = api.getPropStr(descriptorHandle, "set")
      const hasGetter = !api.isUndefined(getterHandle)
      const hasSetter = !api.isUndefined(setterHandle)

      if (!hasGetter && !hasSetter) {
        // Data property
        Object.defineProperty(clonedObj, key, {
          value: this.cloneValue(handleMap, api.getPropStr(objHandle, key)),
          enumerable: isEnumerable,
        })
        continue
      }

      // Accessor property
      const propertyDescriptor: PropertyDescriptor = {
        enumerable: isEnumerable,
      }

      if (hasGetter) {
        api.retainHandle(getterHandle)
        propertyDescriptor.get = function (this: any) {
          if (this.vmWasDestroyed()) {
            throw new Error("(this plugin run has ended)")
          }

          let thisHandle = this.valuesToHandles.get(this)
          if (thisHandle === undefined) {
            thisHandle = objHandle
          }

          const resultHandle = api.callFunction(getterHandle, thisHandle, [])
          const resultHandleMap = this.createHandleToValueMap()
          return this.cloneValue(resultHandleMap, resultHandle)
        }.bind(this)
      }

      if (hasSetter) {
        propertyDescriptor.set = () => {
        }
      }

      Object.defineProperty(clonedObj, key, propertyDescriptor)
    }

    return clonedObj
  }
}

// Type mapping for JSVM types
const jsvmTypeMap: string[] = [
  "unknown",
  "undefined",
  "boolean",
  "number",
  "string",
  "symbol",
  "function",
  "object",
]

/**
 * Creates a JSVM API wrapper
 * Original name: T
 */
async function createJsvmApiWrapper(module: any): Promise<any> {
  const callbackRegistry = new Map<number, Fn>()
  const functionNameRegistry = new Map<number, string>()
  const stringToPtr = module.string_to_ptr
  const ptrToString = module.ptr_to_string
  let nextFunctionId = 1

  /**
   * Handles JSVM errors
   * Original name: s
   */
  function handleJsvmError(result: any): any {
    if (module._jsvm_didThrow()) {
      const errorHandle = module._jsvm_lastThrow()
      let errorMessage = ptrToString(module._jsvm_toString(errorHandle))

      if (module._jsvm_didThrow()) {
        errorMessage = "Unknown error"
      }

      return new PluginError(errorMessage, errorHandle)
    }
    return result
  }

  // Register callback invocation handler
  module.invokeCallback = (id: number, context: any, args: any[]): any => {
    const callback = callbackRegistry.get(id)
    if (callback === undefined) {
      throw new Error(`Attempted to invoke callback with invalid id ${id}`)
    }

    // Pad args with undefined if needed
    while (args.length < callback.length) {
      args.push(jsvmApi.undefined)
    }

    const result = callback.apply(context, args)
    return result === undefined ? jsvmApi.undefined : result
  }

  // Register function name getter
  module.getRegisteredFunctionName = (id: number): string | undefined => functionNameRegistry.get(id)

  let isMicrotaskScheduled = false

  /**
   * Schedules microtask execution
   * Original name: l
   */
  function scheduleMicrotask(): void {
    if (!isMicrotaskScheduled) {
      isMicrotaskScheduled = true
      Promise.resolve().then(() => {
        isMicrotaskScheduled = false
        module._jsvm_runMicrotasksAndAutorelease()
      })
    }
  }

  /**
   * JSVM API wrapper object
   * Original name: d
   */
  const jsvmApi = {
    /**
     * Resets the JSVM state
     */
    reset(): any {
      try {
        nextFunctionId = 1
        callbackRegistry.clear()
        module._jsvm_reset()
      }
      catch (error) {
        P()
        reportError(ServiceCategories.EXTENSIBILITY, error)
        return error
      }
    },

    /**
     * Retains a handle
     */
    retainHandle(handle: any): void {
      scheduleMicrotask()
      handleJsvmError(module._jsvm_retainHandle(handle))
    },

    /**
     * Releases a handle
     */
    releaseHandle(handle: any): void {
      scheduleMicrotask()
      handleJsvmError(module._jsvm_releaseHandle(handle))
    },

    /**
     * Gets the abort handler
     */
    get onAbort(): any {
      return module.onAbort
    },

    /**
     * Sets the abort handler
     */
    set onAbort(value: any) {
      module.onAbort = value
    },

    /**
     * Gets the null handle
     */
    get null(): any {
      scheduleMicrotask()
      return module._jsvm_nullHandle()
    },

    /**
     * Gets the undefined handle
     */
    get undefined(): any {
      scheduleMicrotask()
      return module._jsvm_undefinedHandle()
    },

    /**
     * Gets the global handle
     */
    get global(): any {
      scheduleMicrotask()
      return module._jsvm_globalHandle()
    },

    /**
     * Gets the type of a handle
     */
    typeof(handle: any): string {
      scheduleMicrotask()
      return jsvmTypeMap[module._jsvm_typeof(handle)]
    },

    /**
     * Checks if handle is a number
     */
    isNumber(handle: any): boolean {
      scheduleMicrotask()
      return !!module._jsvm_isNumber(handle)
    },

    /**
     * Checks if handle is a boolean
     */
    isBoolean(handle: any): boolean {
      scheduleMicrotask()
      return !!module._jsvm_isBoolean(handle)
    },

    /**
     * Checks if handle is a string
     */
    isString(handle: any): boolean {
      scheduleMicrotask()
      return !!module._jsvm_isString(handle)
    },

    /**
     * Checks if handle is null
     */
    isNull(handle: any): boolean {
      scheduleMicrotask()
      return !!module._jsvm_isNull(handle)
    },

    /**
     * Checks if handle is undefined
     */
    isUndefined(handle: any): boolean {
      scheduleMicrotask()
      return !!module._jsvm_isUndefined(handle)
    },

    /**
     * Checks if handle is an object
     */
    isObject(handle: any): boolean {
      scheduleMicrotask()
      return !!module._jsvm_isObject(handle)
    },

    /**
     * Checks if handle is an array
     */
    isArray(handle: any): boolean {
      scheduleMicrotask()
      return !!module._jsvm_isArray(handle)
    },

    /**
     * Checks if handle is an ArrayBuffer
     */
    isArrayBuffer(handle: any): boolean {
      scheduleMicrotask()
      return !!module._jsvm_isArrayBuffer(handle)
    },

    /**
     * Checks if handle is a Uint8Array
     */
    isUint8Array(handle: any): boolean {
      scheduleMicrotask()
      return !!module._jsvm_isUint8Array(handle)
    },

    /**
     * Checks if handle is a function
     */
    isFunction(handle: any): boolean {
      scheduleMicrotask()
      return !!module._jsvm_isFunction(handle)
    },

    /**
     * Shallow freezes an object
     */
    shallowFreezeObject(handle: any): void {
      scheduleMicrotask()
      module._jsvm_shallowFreezeObject(handle)
    },

    /**
     * Gets number value from handle
     */
    getNumber(handle: any): number {
      scheduleMicrotask()
      return handleJsvmError(module._jsvm_getNumber(handle))
    },

    /**
     * Gets boolean value from handle
     */
    getBoolean(handle: any): boolean {
      scheduleMicrotask()
      return !!handleJsvmError(module._jsvm_getBoolean(handle))
    },

    /**
     * Gets string value from handle
     */
    getString(handle: any): string {
      scheduleMicrotask()
      return handleJsvmError(ptrToString(module._jsvm_getString(handle)))
    },

    /**
     * Gets ArrayBuffer from handle
     */
    getArrayBuffer(handle: any): ArrayBuffer {
      scheduleMicrotask()
      return handleJsvmError(module.ptr_to_arraybuffer(module._jsvm_getArrayBuffer(handle)))
    },

    /**
     * Gets Uint8Array from handle
     */
    getUint8Array(handle: any): Uint8Array {
      scheduleMicrotask()
      return handleJsvmError(module.ptr_to_uint8array(module._jsvm_getUint8Array(handle)))
    },

    /**
     * Converts handle to number
     */
    toNumber(handle: any): number {
      scheduleMicrotask()
      return handleJsvmError(module._jsvm_toNumber(handle))
    },

    /**
     * Converts handle to boolean
     */
    toBoolean(handle: any): boolean {
      scheduleMicrotask()
      return !!handleJsvmError(module._jsvm_toBoolean(handle))
    },

    /**
     * Converts handle to string
     */
    toString(handle: any): string {
      scheduleMicrotask()
      return handleJsvmError(ptrToString(module._jsvm_toString(handle)))
    },

    /**
     * Creates a new number handle
     */
    newNumber(value: number): any {
      scheduleMicrotask()
      return module._jsvm_newNumber(value)
    },

    /**
     * Creates a new boolean handle
     */
    newBoolean(value: boolean): any {
      scheduleMicrotask()
      return module._jsvm_newBoolean(value)
    },

    /**
     * Creates a new string handle
     */
    newString(value: string): any {
      scheduleMicrotask()
      return module._jsvm_newString(stringToPtr(value))
    },

    /**
     * Creates a new object handle
     */
    newObject(prototype?: any): any {
      scheduleMicrotask()
      return prototype
        ? handleJsvmError(module._jsvm_newObjectWithProto(prototype))
        : module._jsvm_newObject()
    },

    /**
     * Creates a new array handle
     */
    newArray(): any {
      scheduleMicrotask()
      return module._jsvm_newArray()
    },

    /**
     * Creates a new ArrayBuffer handle
     */
    newArrayBuffer(buffer: ArrayBuffer): any {
      scheduleMicrotask()
      return module._jsvm_newArrayBuffer(module.arraybuffer_to_ptr(buffer))
    },

    /**
     * Creates a new Uint8Array handle
     */
    newUint8Array(array: Uint8Array): any {
      scheduleMicrotask()
      return module._jsvm_newUint8Array(module.uint8array_to_ptr(array))
    },

    /**
     * Creates a new function handle
     */
    newFunction(name: string, func: Fn): any {
      scheduleMicrotask()
      const id = nextFunctionId++
      callbackRegistry.set(id, func)
      functionNameRegistry.set(id, name)
      return module._jsvm_newFunction(stringToPtr(name), id)
    },

    /**
     * Gets prototype of an object
     */
    getProto(handle: any): any {
      scheduleMicrotask()
      return module._jsvm_getProto(handle)
    },

    /**
     * Gets own keys of an object
     */
    getOwnKeys(handle: any): string[] {
      scheduleMicrotask()
      const keys: string[] = []
      for (const ptr of module.ptr_to_int_array(module._jsvm_getOwnKeys(handle))) {
        keys.push(ptrToString(ptr))
      }
      return keys
    },

    /**
     * Gets property by string name
     */
    getPropStr(obj: any, prop: string): any {
      scheduleMicrotask()
      return handleJsvmError(module._jsvm_getPropStr(obj, stringToPtr(prop)))
    },

    /**
     * Sets property by string name
     */
    setPropStr(obj: any, prop: string, value: any): void {
      scheduleMicrotask()
      handleJsvmError(module._jsvm_setPropStr(obj, stringToPtr(prop), value))
    },

    /**
     * Defines property by string name
     */
    definePropStr(obj: any, prop: string, descriptor: PropertyDescriptor): void {
      scheduleMicrotask()

      if (("get" in descriptor || "set" in descriptor)
        && !("value" in descriptor || "writable" in descriptor)) {
        // Accessor property
        handleJsvmError(module._jsvm_accessorDefinePropStr(
          obj,
          stringToPtr(prop),
          descriptor.get === undefined ? jsvmApi.undefined : jsvmApi.newFunction(`get_${prop}`, descriptor.get),
          descriptor.set === undefined ? jsvmApi.undefined : jsvmApi.newFunction(`set_${prop}`, descriptor.set),
          !!descriptor.configurable,
          !!descriptor.enumerable,
        ))
      }
      else {
        // Data property
        if ("get" in descriptor || "set" in descriptor) {
          Object.defineProperty({}, prop, descriptor)
          throw new TypeError("Invalid property descriptor. Cannot both specify accessors and a value or writable attribute")
        }

        handleJsvmError(module._jsvm_dataDefinePropStr(
          obj,
          stringToPtr(prop),
          descriptor.value === undefined ? jsvmApi.undefined : descriptor.value,
          !!descriptor.writable,
          !!descriptor.configurable,
          !!descriptor.enumerable,
        ))
      }
    },

    /**
     * Checks equality of two handles
     */
    isEqual(handle1: any, handle2: any): boolean {
      scheduleMicrotask()
      return !!module._jsvm_isEqual(handle1, handle2)
    },

    /**
     * Calls a function with given arguments
     */
    callFunction(func: any, thisArg: any, args: any[]): any {
      scheduleMicrotask()
      return handleJsvmError(module._jsvm_callFunction(func, thisArg, module.int_array_to_ptr(args)))
    },

    /**
     * Evaluates code string
     */
    evalCode(code: string): any {
      scheduleMicrotask()
      return handleJsvmError(module._jsvm_evalCode(stringToPtr(code)))
    },
  }

  return jsvmApi
}

// Module loading state
let moduleLoadPromise: Promise<any> | null = null
let jsvmApiWrapper: any | null = null

/**
 * Loads the C++ VM module asynchronously
 * Original name: N
 */
export async function loadCppVmModule(): Promise<any> {
  // Only create the loading promise once
  if (!moduleLoadPromise) {
    moduleLoadPromise = new Promise((resolve, reject) => {
      const scriptElement = document.createElement("script")

      // Handle script loading errors
      scriptElement.onerror = () => {
        document.head.removeChild(scriptElement)
        reject(new Error("Failed to load plugin sandbox"))
      }

      // Check if we should use the upgraded JSVM CPP implementation
      if (statsigClient.getFeatureGate("ext_jsvm_cpp_upgrade")) {
        scriptElement.onload = async () => {
          try {
            // Load the WebAssembly module with specific configuration
            const module = await CppVm({
              wasmBinaryFile: Fig.jsvmCppURLs["jsvm-cpp.wasm"],
              locateFile: (fileName: string) => {
                if (fileName === "jsvm-cpp.wasm") {
                  return Fig.jsvmCppURLs["jsvm-cpp.wasm"]
                }
                throw new Error(`This override is only implemented to located jsvm-cpp.wasm, please handle ${fileName}`)
              },
            })

            // Prevent multiple instantiations
            CppVm = () => Promise.reject()
            resolve({
              Module: module,
            })
          }
          catch (error) {
            reject(error)
          }
        }
      }
      else {
        // Legacy loading approach
        scriptElement.onload = () => {
          const moduleConfig: any = {
            wasmBinaryFile: Fig.jsvmCppURLs["jsvm-cpp.wasm"],
            locateFile: (fileName: string) => {
              if (fileName === "jsvm-cpp.wasm") {
                return Fig.jsvmCppURLs["jsvm-cpp.wasm"]
              }
              throw new Error(`This override is only implemented to located jsvm-cpp.wasm, please handle ${fileName}`)
            },
            postRun() {
              // Defer resolution to next tick
              setTimeout(() => {
                resolve({
                  Module: moduleConfig,
                })
              })
            },
          }

          try {
            CppVm(moduleConfig)
            // Prevent multiple instantiations
            CppVm = () => Promise.reject()
          }
          catch (error) {
            reject(error)
          }
        }
      }

      // Start loading the script
      scriptElement.src = Fig.jsvmCppURLs["jsvm-cpp.js"]
      document.head.appendChild(scriptElement)
    }).catch((error) => {
      // Reset state on failure
      moduleLoadPromise = null
      return error
    })
  }

  // Wait for the module to load
  const { Module } = await moduleLoadPromise

  // Create the JSVM API wrapper if it doesn't exist
  if (!jsvmApiWrapper) {
    jsvmApiWrapper = createJsvmApiWrapper(Module)
  }

  return jsvmApiWrapper
}

/**
 * Resets the C++ VM module state
 * Original name: P
 */
function resetCppVmModule(): void {
  moduleLoadPromise = null
  jsvmApiWrapper = null
  CppVm = undefined
}

// Regular expression to detect possible import expressions
const IMPORT_EXPRESSION_REGEX = /^(.*)\bimport\s*(\(|\/\/|\/\*|<!--|-->)/m

/**
 * Validates code for possible import expressions
 * Original name: D
 */
function validateNoImportExpressions(code: string): void {
  const match = IMPORT_EXPRESSION_REGEX.exec(code)
  if (match) {
    const lineNumber = match[1].split("\n").length
    throw new SyntaxError(`possible import expression rejected around line ${lineNumber}`)
  }
}

// Console methods bound to the global console
export const boundConsoleMethods: ConsoleInterface = {} as ConsoleInterface
// Currently active C++ VM instance
let activeCppVmInstance: CppVmWrapper | null = null
// Restricted global properties that should be undefined in the VM context
const restrictedGlobalProperties = ["window", "document", "indexedDB", "atob", "btoa"]

/**
 * C++ VM Wrapper Implementation
 * Extends PluginWrapper to provide a secure JavaScript execution environment
 * Original name: U
 */
export class CppVmWrapper extends PluginWrapper {
  // Event handlers
  private _abortHandler = (_arg?: any) => {
  }

  private _errorHandler = (_arg?: any) => {
  }

  // VM state
  public vmType = "cppvm"
  private _isDestroyed = false
  private _stats: any = null
  private _executionDepth = 0

  // VM-specific properties
  private _promiseFactory: any
  private _symbolConstructor: any
  private _constructorHelper: any
  private _valueCloner: ValueCloner

  constructor() {
    super()

    // Ensure the C++ VM module is loaded
    if (!n) {
      throw new Error("Must await CppVm.load() first")
    }

    // Ensure only one C++ VM instance exists at a time
    if (activeCppVmInstance !== null) {
      throw new Error("Cannot create two CppVm objects at the same time")
    }

    // Reset the VM state
    try {
      n.reset()
    }
    catch (error) {
      n = undefined
      return error
    }

    // Set this instance as the active one
    activeCppVmInstance = this

    // Create a factory for promises in the VM context
    this._promiseFactory = n.evalCode(`(Promise => () => {
      let resolve, reject, promise = new Promise((res, rej) => {
        resolve = res, reject = rej;
      });
      return {resolve, reject, promise};
    })(Promise)`)
    n.retainHandle(this._promiseFactory)

    // Get reference to Symbol constructor in VM context
    this._symbolConstructor = n.evalCode("Symbol")
    n.retainHandle(this._symbolConstructor)

    // Override eval to provide a secure scope
    n.evalCode(`
      this.eval = (function() {
        let __figma_scope_factory__ = ((eval, objectCreate, objectDefineProp) => () => {
          let scope = objectCreate(null)
          objectDefineProp(scope, 'eval', {
            get: function() {
              delete this.eval
              return eval
            },
            configurable: true,
          })
          return scope
        })(eval, Object.create, Object.defineProperty)
        return function() {
          with(__figma_scope_factory__()) {
            let __figma_scope_factory__
            return (function() {
              "use strict"
              return eval(arguments[0])
            }).call(this, arguments[0])
          }
        }.bind(arguments[0])
      })(this)
    `)

    // Create value cloner for transferring data between contexts
    this._valueCloner = new ValueCloner(n, boundConsoleMethods, () => this._isDestroyed)

    // Restrict access to certain global properties
    for (const property of restrictedGlobalProperties) {
      n.definePropStr(n.global, property, {
        value: n.undefined,
        enumerable: false,
        metricsKey: property,
      })
    }

    // Set up abort handler
    n.onAbort = () => {
      this._abortHandler(new Error().stack || "")
    }
  }

  // Basic value accessors
  get null(): any {
    this._failIfDestroyed()
    return n.$$null
  }

  get undefined(): any {
    this._failIfDestroyed()
    return n.undefined
  }

  get global(): any {
    this._failIfDestroyed()
    return n.global
  }

  // Type checking methods
  typeof(handle: any): string {
    this._failIfDestroyed()
    return n.$$typeof(handle)
  }

  isNumber(handle: any): boolean {
    this._failIfDestroyed()
    return n.isNumber(handle)
  }

  isBoolean(handle: any): boolean {
    this._failIfDestroyed()
    return n.isBoolean(handle)
  }

  isString(handle: any): boolean {
    this._failIfDestroyed()
    return n.isString(handle)
  }

  isNull(handle: any): boolean {
    this._failIfDestroyed()
    return n.isNull(handle)
  }

  isUndefined(handle: any): boolean {
    this._failIfDestroyed()
    return n.isUndefined(handle)
  }

  isObject(handle: any): boolean {
    this._failIfDestroyed()
    return n.isObject(handle)
  }

  isArray(handle: any): boolean {
    this._failIfDestroyed()
    return n.isArray(handle)
  }

  isArrayBuffer(handle: any): boolean {
    this._failIfDestroyed()
    return n.isArrayBuffer(handle)
  }

  isUint8Array(handle: any): boolean {
    this._failIfDestroyed()
    return n.isUint8Array(handle)
  }

  isFunction(handle: any): boolean {
    this._failIfDestroyed()
    return n.isFunction(handle)
  }

  // Object manipulation methods
  shallowFreezeObject(handle: any): void {
    this._failIfDestroyed()
    n.shallowFreezeObject(handle)
  }

  // Value extraction methods
  getNumber(handle: any): number {
    this._failIfDestroyed()
    return n.getNumber(handle)
  }

  getBoolean(handle: any): boolean {
    this._failIfDestroyed()
    return n.getBoolean(handle)
  }

  getString(handle: any): string {
    this._failIfDestroyed()
    return n.getString(handle)
  }

  getArrayBuffer(handle: any): ArrayBuffer {
    this._failIfDestroyed()
    return n.getArrayBuffer(handle)
  }

  getUint8Array(handle: any): Uint8Array {
    this._failIfDestroyed()
    return n.getUint8Array(handle)
  }

  // Type conversion methods
  toNumber(handle: any): number {
    this._failIfDestroyed()
    return n.toNumber(handle)
  }

  toBoolean(handle: any): boolean {
    this._failIfDestroyed()
    return n.toBoolean(handle)
  }

  toString(handle: any): string {
    this._failIfDestroyed()
    return n.toString(handle)
  }

  // Value creation methods
  newNumber(value: number) {
    this._failIfDestroyed()
    if (typeof value !== "number") {
      throw new TypeError("Value is not a number")
    }
    return n.newNumber(value)
  }

  newBoolean(value: boolean): any {
    this._failIfDestroyed()
    if (typeof value !== "boolean") {
      throw new TypeError("Value is not a boolean")
    }
    return n.newBoolean(value)
  }

  newString(value: string): any {
    this._failIfDestroyed()
    if (typeof value !== "string") {
      throw new TypeError("Value is not a string")
    }
    return n.newString(value)
  }

  newSymbol(key: string): any {
    this._failIfDestroyed()
    if (typeof key !== "string") {
      throw new TypeError("Symbol key is not a string")
    }
    return n.callFunction(this._symbolConstructor, n.$$null, [n.newString(key)])
  }

  newObject(prototype?: any): any {
    this._failIfDestroyed()
    return n.newObject(prototype)
  }

  newArray(): any {
    this._failIfDestroyed()
    return n.newArray()
  }

  newArrayBuffer(buffer: ArrayBuffer): any {
    this._failIfDestroyed()
    if (

      Object.prototype.toString.call(buffer) !== "[object ArrayBuffer]"
    ) {
      throw new Error("Value is not an ArrayBuffer")
    }
    return n.newArrayBuffer(buffer)
  }

  newUint8Array(array: Uint8Array): any {
    this._failIfDestroyed()
    if (

      Object.prototype.toString.call(array) === "[object Uint8Array]"
      && ArrayBuffer.isView(array)
    ) {
      return n.newUint8Array(array)
    }
    throw new Error("Value is not an Uint8Array")
  }

  newFunction(name: string, func: Fn): any {
    this._failIfDestroyed()
    if (typeof func !== "function") {
      throw new TypeError("Value is not a function")
    }
    return n.newFunction(name, func)
  }

  newPrototype(name: string): any {
    const result = this.evalTrustedCode(`(function ${name}() {}).prototype`)
    if (result.type !== "SUCCESS") {
      throw new Error("Internal eval error")
    }
    return result.handle
  }

  newJsxRenderer(renderer: any): any {
    this._failIfDestroyed()
    return n.evalCode(serializeComponentRenderer(renderer))
  }

  newPromise(): { promise: any, resolve: (value: any) => void, reject: (reason: any) => void } {
    this._failIfDestroyed()

    // Create a new promise in the VM context
    const promiseObj = n.callFunction(this._promiseFactory, n.$$null, [])
    const resolveFunc = n.getPropStr(promiseObj, "resolve")
    const rejectFunc = n.getPropStr(promiseObj, "reject")
    let isResolved = false

    // Helper to release handles when promise is settled
    function releaseHandles(): void {
      if (!isResolved) {
        isResolved = true
        n.releaseHandle(resolveFunc)
        n.releaseHandle(rejectFunc)
      }
    }

    // Retain handles to prevent garbage collection
    n.retainHandle(resolveFunc)
    n.retainHandle(rejectFunc)

    return {
      promise: n.getPropStr(promiseObj, "promise"),
      resolve: (value: any) => {
        if (!isResolved) {
          n.callFunction(resolveFunc, n.$$null, [value])
          releaseHandles()
        }
      },
      reject: (reason: any) => {
        if (!isResolved) {
          n.callFunction(rejectFunc, n.$$null, [reason])
          releaseHandles()
        }
      },
    }
  }

  // Object property methods
  getKeys(objectHandle: any): string[] {
    this._failIfDestroyed()
    return n.getOwnKeys(objectHandle)
  }

  getProp(objectHandle: any, propertyName: string): any {
    this._failIfDestroyed()
    return n.getPropStr(objectHandle, propertyName)
  }

  setProp(objectHandle: any, propertyName: string, value: any): void {
    this._failIfDestroyed()
    n.setPropStr(objectHandle, propertyName, value)
  }

  defineProp(objectHandle: any, propertyName: string, descriptor: PropertyDescriptor): void {
    this._failIfDestroyed()

    // Apply metrics wrappers if stats are enabled
    if (this._stats && ("get" in descriptor || "set" in descriptor) && (descriptor as any).metricsKey) {
      if (descriptor.get) {
        descriptor.get = this._stats.metricsWrapper(`get ${(descriptor as any).metricsKey}`, descriptor.get)
      }
      if (descriptor.set) {
        descriptor.set = this._stats.metricsWrapper(`set ${(descriptor as any).metricsKey}`, descriptor.set)
      }
    }

    n.definePropStr(objectHandle, propertyName, descriptor)
  }

  isEqual(handle1: any, handle2: any): boolean {
    this._failIfDestroyed()
    return n.isEqual(handle1, handle2)
  }

  // Fn calling methods
  callFunction(
    funcHandle: any,
    thisArg: any,
    ...args: any[]
  ): { type: "SUCCESS", handle: any } | { type: "FAILURE", error: PluginError } {
    this._failIfDestroyed()

    try {
      this._executionDepth++
      const result = n.callFunction(funcHandle, thisArg, args)
      return {
        type: "SUCCESS",
        handle: result,
      }
    }
    catch (error) {
      if (error instanceof PluginError) {
        try {
          boundConsoleMethods.error(`${error.message}\n${n.toString(n.getPropStr(error.handle, "stack"))}`)
        }
        catch {
          boundConsoleMethods.error(error)
        }

        // Call error handler only for top-level calls
        if (this._executionDepth === 1) {
          this._errorHandler(error)
        }

        return {
          type: "FAILURE",
          error,
        }
      }
      throw error
    }
    finally {
      this._executionDepth--
    }
  }

  callConstructor(constructorHandle: any, ...args: any[]): any {
    this._failIfDestroyed()
    if (!this._constructorHelper) {
      const helperResult = this.evalTrustedCode("(o, ...args) => new o(...args)")
      if (helperResult.type === "FAILURE") {
        throw new Error(`Error creating constructor helper: ${helperResult.error}`)
      }
      this._constructorHelper = helperResult.handle
      this.retainHandle(this._constructorHelper)
    }
    return this.callFunction(this._constructorHelper, this.undefined, constructorHandle, ...args)
  }

  // Code evaluation methods
  private evalCodeInternal(
    code: string,
  ): { type: "SUCCESS", handle: any } | { type: "FAILURE", error: PluginError } {
    this._failIfDestroyed()

    try {
      this._executionDepth++
      const result = n.evalCode(code)
      return {
        type: "SUCCESS",
        handle: result,
      }
    }
    catch (error) {
      if (error instanceof PluginError) {
        try {
          boundConsoleMethods.error(`${error.message}\n${n.toString(n.getPropStr(error.handle, "stack"))}`)
        }
        catch {
          boundConsoleMethods.error(error)
        }

        // Call error handler only for top-level calls
        if (this._executionDepth === 1) {
          this._errorHandler(error)
        }

        return {
          type: "FAILURE",
          error,
        }
      }
      throw error
    }
    finally {
      this._executionDepth--
    }
  }

  evalCode(code: string): any {
    validateNoImportExpressions(code)
    return this.evalCodeInternal(`eval(${JSON.stringify(code)})`)
  }

  evalTopLevelCode(code: string): any {
    validateNoImportExpressions(code)
    return this.evalCodeInternal(`(function() { "use strict"; ${code} }).call(this)`)
  }

  evalTrustedCode(code: string): any {
    return this.evalCode(code)
  }

  evalTrustedTopLevelCode(code: string): any {
    return this.evalTopLevelCode(code)
  }

  // Event handler setters
  setAbortHandler(handler: Fn): void {
    this._abortHandler = handler
  }

  setErrorHandler(handler: Fn): void {
    this._errorHandler = handler
  }

  // Stats management
  getStats(): any {
    return this._stats
  }

  setStats(stats: any): void {
    this._stats = stats
  }

  // Lifecycle methods
  destroy(): void {
    if (!this._isDestroyed) {
      // Clear the active instance reference if this is it
      if (activeCppVmInstance === this) {
        activeCppVmInstance = null
      }

      // Reset the VM
      n.reset()

      // For Safari/iPad, completely unload the module
      if (isIpadDevice || BrowserInfo.safari) {
        n = undefined
        resetCppVmModule()
      }

      this._isDestroyed = true
    }
  }

  isDestroyed(): boolean {
    return this._isDestroyed
  }

  private _failIfDestroyed(): boolean {
    if (this._isDestroyed) {
      throw new Error("This VM has been destroyed")
    }
    return false
  }

  // Handle management
  retainHandle(handle: any): void {
    n.retainHandle(handle)
  }

  releaseHandle(handle: any): void {
    n.releaseHandle(handle)
  }
}

/**
 * Ensures the C++ VM module is loaded
 * Original name: B
 */
export async function ensureCppVmLoaded(): Promise<void> {
  if (!n) {
    n = await loadCppVmModule()
  }
}
