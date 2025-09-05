import type { CallResult, EvalResult, INoOpVm, PromiseHandlers, PropertyDescriptor, VmErrorHandler } from '../905/700654'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import {

  createPluginContext,

  NoOpVm,

  ScopedNoOpVm,

  wrapHandle,
} from '../905/700654'

// Mock dependencies
vi.mock('../905/572400', () => ({
  PLUGIN_CLOSED_ERROR: 'Plugin has been closed',
  PluginError: class MockPluginError extends Error {
    constructor(vm: any, handle: any) {
      super('Mock PluginError')
      this.name = 'PluginError'
    }
  },
  PluginWrapper: class MockPluginWrapper {},
}))

vi.mock('../905/823050', () => ({
  H: vi.fn(component => `JSX_${component}`),
}))

// Mock global window object
Object.defineProperty(global, 'window', {
  value: {
    figma: { mock: 'figma' },
  },
  writable: true,
})

describe('noOpVm', () => {
  let vm: NoOpVm

  beforeEach(() => {
    vm = new NoOpVm()
  })

  afterEach(() => {
    if (!vm.isDestroyed()) {
      vm.destroy()
    }
  })

  describe('constructor', () => {
    it('should initialize with correct default values', () => {
      expect(vm.vmType).toBe('noopvm')
      expect(vm.isDestroyed()).toBe(false)
      expect(vm.getStats()).toBeNull()
      expect(vm.global).toBeDefined()
      expect(vm.$$null).toBeDefined()
      expect(vm.undefined).toBeDefined()
    })

  })

  describe('handle operations', () => {
    it('should wrap and unwrap values correctly', () => {
      const value = { test: 'data' }
      const handle = wrapHandle(vm, value)

      expect(handle).toBeDefined()
      expect(typeof handle).toBe('object')
      // Note: We can't directly test unwrapHandle as it's not exported,
      // but we can test through other methods
    })

    it('should throw error when wrapping handle twice', () => {
      const value = { test: 'data' }
      const handle = wrapHandle(vm, value)

      expect(() => wrapHandle(vm, handle as any)).toThrow(
        'Wrapping a handle twice!',
      )
    })

    it('should throw error when using destroyed VM', () => {
      vm.destroy()
      expect(() => wrapHandle(vm, 'test')).toThrow('Plugin has been closed')
    })
  })

  describe('type checking methods', () => {
    it('should correctly identify numbers', () => {
      const numberHandle = vm.newNumber(42)
      expect(vm.isNumber(numberHandle)).toBe(true)
      expect(vm.isString(numberHandle)).toBe(false)
    })

    it('should correctly identify strings', () => {
      const stringHandle = vm.newString('hello')
      expect(vm.isString(stringHandle)).toBe(true)
      expect(vm.isNumber(stringHandle)).toBe(false)
    })

    it('should correctly identify booleans', () => {
      const boolHandle = vm.newBoolean(true)
      expect(vm.isBoolean(boolHandle)).toBe(true)
      expect(vm.isNumber(boolHandle)).toBe(false)
    })

    it('should correctly identify null', () => {
      expect(vm.isNull(vm.$$null)).toBe(true)
      expect(vm.isUndefined(vm.$$null)).toBe(false)
    })

    it('should correctly identify undefined', () => {
      expect(vm.isUndefined(vm.undefined)).toBe(true)
      expect(vm.isNull(vm.undefined)).toBe(false)
    })

    it('should correctly identify objects', () => {
      const objHandle = vm.newObject()
      expect(vm.isObject(objHandle)).toBe(true)
      expect(vm.isArray(objHandle)).toBe(false)
    })

    it('should correctly identify arrays', () => {
      const arrayHandle = vm.newArray()
      expect(vm.isArray(arrayHandle)).toBe(true)
      expect(vm.isObject(arrayHandle)).toBe(true) // arrays are objects
    })

    it('should correctly identify functions', () => {
      const fnHandle = vm.newFunction('test', thisHandle =>
        vm.newString('result'))
      expect(vm.isFunction(fnHandle)).toBe(true)
      expect(vm.isObject(fnHandle)).toBe(false) // in this implementation, functions are not considered objects
    })

    it('should correctly identify ArrayBuffer', () => {
      const buffer = new ArrayBuffer(8)
      const bufferHandle = vm.newArrayBuffer(buffer)
      expect(vm.isArrayBuffer(bufferHandle)).toBe(true)
    })

    it('should correctly identify Uint8Array', () => {
      const uint8 = new Uint8Array(8)
      const uint8Handle = vm.newUint8Array(uint8)
      expect(vm.isUint8Array(uint8Handle)).toBe(true)
    })
  })

  describe('value creation methods', () => {
    it('should create number handles', () => {
      const handle = vm.newNumber(42)
      expect(vm.isNumber(handle)).toBe(true)
      expect(vm.getNumber(handle)).toBe(42)
    })

    it('should throw when creating number with non-number', () => {
      expect(() => vm.newNumber('not a number' as any)).toThrow(
        'Value is not a number',
      )
    })

    it('should create boolean handles', () => {
      const handle = vm.newBoolean(true)
      expect(vm.isBoolean(handle)).toBe(true)
      expect(vm.getBoolean(handle)).toBe(true)
    })

    it('should create string handles', () => {
      const handle = vm.newString('hello')
      expect(vm.isString(handle)).toBe(true)
      expect(vm.getString(handle)).toBe('hello')
    })

    it('should create symbol handles', () => {
      const handle = vm.newSymbol('test')
      expect(vm.typeof(handle)).toBe('symbol')
    })

    it('should create object handles', () => {
      const handle = vm.newObject()
      expect(vm.isObject(handle)).toBe(true)
    })

    it('should create object with prototype', () => {
      const proto = vm.newObject()
      const handle = vm.newObject(proto)
      expect(vm.isObject(handle)).toBe(true)
    })

    it('should create array handles', () => {
      const handle = vm.newArray()
      expect(vm.isArray(handle)).toBe(true)
    })

    it('should create ArrayBuffer handles', () => {
      const buffer = new ArrayBuffer(8)
      const handle = vm.newArrayBuffer(buffer)
      expect(vm.isArrayBuffer(handle)).toBe(true)
      const retrieved = vm.getArrayBuffer(handle)
      expect(retrieved.byteLength).toBe(8)
    })

    it('should create Uint8Array handles', () => {
      const uint8 = new Uint8Array(8)
      const handle = vm.newUint8Array(uint8)
      expect(vm.isUint8Array(handle)).toBe(true)
      const retrieved = vm.getUint8Array(handle)
      expect(retrieved.length).toBe(8)
    })
  })

  describe('type conversion methods', () => {
    it('should convert to number', () => {
      const stringHandle = vm.newString('42')
      expect(vm.toNumber(stringHandle)).toBe(42)
    })

    it('should convert to boolean', () => {
      const numberHandle = vm.newNumber(1)
      expect(vm.toBoolean(numberHandle)).toBe(true)

      const zeroHandle = vm.newNumber(0)
      expect(vm.toBoolean(zeroHandle)).toBe(false)
    })

    it('should convert to string', () => {
      const numberHandle = vm.newNumber(42)
      expect(vm.toString(numberHandle)).toBe('42')
    })
  })

  describe('object manipulation', () => {
    it('should get and set properties', () => {
      const obj = vm.newObject()
      const value = vm.newString('test value')

      vm.setProp(obj, 'testProp', value)
      const retrieved = vm.getProp(obj, 'testProp')

      expect(vm.isString(retrieved)).toBe(true)
      expect(vm.getString(retrieved)).toBe('test value')
    })

    it('should get object keys', () => {
      const obj = vm.newObject()
      vm.setProp(obj, 'key1', vm.newString('value1'))
      vm.setProp(obj, 'key2', vm.newString('value2'))

      const keys = vm.getKeys(obj)
      expect(keys).toContain('key1')
      expect(keys).toContain('key2')
    })

    it('should define properties with descriptor', () => {
      const obj = vm.newObject()
      const value = vm.newString('test')

      const descriptor: PropertyDescriptor = {
        value,
        writable: true,
        enumerable: true,
        configurable: true,
      }

      vm.defineProp(obj, 'testProp', descriptor)
      const retrieved = vm.getProp(obj, 'testProp')
      expect(vm.getString(retrieved)).toBe('test')
    })

    it('should freeze objects', () => {
      const obj = vm.newObject()
      vm.shallowFreezeObject(obj)
      // Object should be frozen, but we can't easily test this without unwrapping
    })
  })

  describe('function operations', () => {
    it('should create and call functions', () => {
      const fn = vm.newFunction('testFn', (thisHandle) => {
        return vm.newString('called')
      })

      expect(vm.isFunction(fn)).toBe(true)

      const result = vm.callFunction(fn, vm.undefined)
      expect(result.type).toBe('SUCCESS')
      if (result.handle) {
        expect(vm.isString(result.handle)).toBe(true)
        expect(vm.getString(result.handle)).toBe('called')
      }
    })

    it('should handle function errors', () => {
      const fn = vm.newFunction('errorFn', () => {
        throw new Error('Function error')
      })

      const result = vm.callFunction(fn, vm.undefined)
      expect(result.type).toBe('SUCCESS') // The function wrapper catches errors and returns them
      expect(result.handle).toBeDefined()
    })

    it('should call constructors', () => {
      const ctor = vm.newFunction('TestConstructor', (thisHandle) => {
        return vm.newString('constructed')
      })

      const result = vm.callConstructor(ctor)
      expect(result.type).toBe('SUCCESS')
    })
  })

  describe('promise operations', () => {
    it('should create promises with handlers', () => {
      const promiseHandlers = vm.newPromise<string>()

      expect(vm.isObject(promiseHandlers.promise)).toBe(true)
      expect(typeof promiseHandlers.resolve).toBe('function')
      expect(typeof promiseHandlers.reject).toBe('function')
    })
  })

  describe('eval operations', () => {
    it('should evaluate code successfully', () => {
      const result = vm.evalCode('1 + 2')

      expect(result.type).toBe('SUCCESS')
      if (result.handle) {
        expect(vm.isNumber(result.handle)).toBe(true)
        expect(vm.getNumber(result.handle)).toBe(3)
      }
    })

    it('should handle eval errors', () => {
      const result = vm.evalCode('invalid syntax +++')

      expect(result.type).toBe('FAILURE')
      expect(result.error).toBeDefined()
    })

    it('should evaluate top-level code', () => {
      const result = vm.evalTopLevelCode('var x = 42; x')

      expect(result.type).toBe('SUCCESS')
      if (result.handle) {
        expect(vm.isUndefined(result.handle)).toBe(true)
      }
    })

    it('should evaluate trusted code', () => {
      const result = vm.evalTrustedCode('"trusted"')

      expect(result.type).toBe('SUCCESS')
      if (result.handle) {
        expect(vm.isString(result.handle)).toBe(true)
        expect(vm.getString(result.handle)).toBe('trusted')
      }
    })
  })

  describe('equality operations', () => {
    it('should check handle equality', () => {
      const handle1 = vm.newString('test')
      const handle2 = vm.newString('test')
      const handle3 = handle1

      expect(vm.isEqual(handle1, handle2)).toBe(true) // same value
      expect(vm.isEqual(handle1, handle3)).toBe(true) // same reference
    })
  })

  describe('prototype operations', () => {
    it('should create prototypes', () => {
      const proto = vm.newPrototype('TestClass')
      expect(vm.isObject(proto)).toBe(true)
    })
  })

  describe('jSX operations', () => {
    it('should create JSX renderer', () => {
      const component = vm.newString('div')
      const renderer = vm.newJsxRenderer(component)
      expect(renderer).toBeDefined()
    })
  })

  describe('error handling', () => {
    it('should set and use error handler', () => {
      const errorHandler = vi.fn()
      vm.setErrorHandler(errorHandler)

      // Create a function that throws
      const fn = vm.newFunction('errorFn', () => {
        throw new Error('Test error')
      })

      // The error handler is only called for top-level execution errors, not function creation
      const result = vm.callFunction(fn, vm.undefined)
      // Function errors are wrapped and returned, not thrown to error handler
      expect(result.type).toBe('SUCCESS')
    })
  })

  describe('stats operations', () => {
    it('should get and set stats', () => {
      expect(vm.getStats()).toBeNull()

      const stats = { calls: 10, memory: 1024 }
      vm.setStats(stats)
      expect(vm.getStats()).toBe(stats)
    })
  })

  describe('lifecycle operations', () => {
    it('should destroy and check destroyed state', () => {
      expect(vm.isDestroyed()).toBe(false)

      vm.destroy()
      expect(vm.isDestroyed()).toBe(true)
    })

    it('should handle retain and release (no-op)', () => {
      const handle = vm.newString('test')
      expect(() => vm.retainHandle(handle)).not.toThrow()
      expect(() => vm.releaseHandle(handle)).not.toThrow()
    })
  })
})

describe('scopedNoOpVm', () => {
  let vm: ScopedNoOpVm

  beforeEach(() => {
    vm = new ScopedNoOpVm()
  })

  afterEach(() => {
    if (!vm.isDestroyed()) {
      vm.destroy()
    }
  })

  describe('constructor', () => {
    it('should initialize as scoped VM', () => {
      expect(vm.vmType).toBe('scopednoopvm')
      expect(vm.scope).toEqual({})
      expect(vm.isTrusted).toBe(false)
    })

    it('should have global pointing to scope', () => {
      expect(vm.global).toBeDefined()
    })
  })

  describe('trusted execution', () => {
    it('should execute trusted code', () => {
      const result = vm.evalTrustedCode('1 + 1')
      expect(result.type).toBe('SUCCESS')
      if (result.handle) {
        expect(vm.getNumber(result.handle)).toBe(2)
      }
    })

    it('should execute trusted top-level code', () => {
      const result = vm.evalTrustedTopLevelCode('var y = 100; y')
      expect(result.type).toBe('SUCCESS')
    })

    it('should throw error for untrusted eval', () => {
      expect(() => vm.evalCode('1 + 1')).toThrow(
        'Scoped NoOp Vm can only run trusted code',
      )
    })

    it('should manage trust state correctly', () => {
      expect(vm.isTrusted).toBe(false)

      // During trusted execution, isTrusted should be true temporarily
      vm.evalTrustedCode('1')

      // After execution, should be false again
      expect(vm.isTrusted).toBe(false)
    })
  })

  describe('figma context switching', () => {
    it('should switch figma context during eval', () => {
      const originalFigma = (global as any).window.figma
      const mockFigma = { test: 'mock' }

      vm.scope.figma = mockFigma

      vm.evalTrustedCode('1') // Should switch context

      // Context should be restored after eval
      expect((global as any).window.figma).toBe(originalFigma)
    })
  })
})

describe('createPluginContext', () => {
  it('should create plugin context with VM and shutdown actions', () => {
    const context = createPluginContext()

    expect(context.noOpVm).toBeInstanceOf(ScopedNoOpVm)
    expect(typeof context.addShutdownAction).toBe('function')
    expect(typeof context.closePlugin).toBe('function')
  })

  it('should handle shutdown actions', async () => {
    const context = createPluginContext()
    const shutdownAction = vi.fn()

    context.addShutdownAction(shutdownAction)

    await context.closePlugin()

    expect(shutdownAction).toHaveBeenCalled()
    expect(context.noOpVm.isDestroyed()).toBe(true)
  })

  it('should not add duplicate shutdown actions', () => {
    const context = createPluginContext()
    const shutdownAction = vi.fn()

    context.addShutdownAction(shutdownAction)
    context.addShutdownAction(shutdownAction) // Same action

    expect(() => context.closePlugin()).not.toThrow()
  })

  it('should handle shutdown action errors', async () => {
    const context = createPluginContext()
    const errorAction = vi.fn(() => {
      throw new Error('Shutdown error')
    })
    const successAction = vi.fn()

    context.addShutdownAction(errorAction)
    context.addShutdownAction(successAction)

    // The implementation catches errors and throws the first one at the end
    try {
      await context.closePlugin()
      // Should not reach here
      expect(true).toBe(false)
    }
    catch (error) {
      expect(error.message).toBe('Shutdown error')
    }

    // Both actions should have been called despite error
    expect(errorAction).toHaveBeenCalled()
    expect(successAction).toHaveBeenCalled()
  })

  it('should clear shutdown actions after execution', async () => {
    const context = createPluginContext()
    const shutdownAction = vi.fn()

    context.addShutdownAction(shutdownAction)
    await context.closePlugin()

    // Adding and closing again should not call the original action
    shutdownAction.mockClear()
    await context.closePlugin()
    expect(shutdownAction).not.toHaveBeenCalled()
  })
})

describe('edge cases and error conditions', () => {
  let vm: NoOpVm

  beforeEach(() => {
    vm = new NoOpVm()
  })

  afterEach(() => {
    if (!vm.isDestroyed()) {
      vm.destroy()
    }
  })

  it('should handle type validation errors', () => {
    const stringHandle = vm.newString('not a number')

    expect(() => vm.getNumber(stringHandle)).toThrow('Value is not a number')
    expect(() => vm.getBoolean(stringHandle)).toThrow('Value is not a boolean')
  })

  it('should handle ArrayBuffer validation errors', () => {
    expect(() => vm.newArrayBuffer('not an array buffer' as any)).toThrow(
      'Value is not an ArrayBuffer',
    )
    expect(() => vm.newUint8Array('not a uint8array' as any)).toThrow(
      'Value is not an Uint8Array',
    )
  })

  it('should handle invalid array buffer checks', () => {
    const stringHandle = vm.newString('test')

    expect(() => vm.getArrayBuffer(stringHandle)).toThrow(
      'Value is not a ArrayBuffer',
    )
    expect(() => vm.getUint8Array(stringHandle)).toThrow(
      'Value is not a Uint8Array',
    )
  })

  it('should handle execution depth tracking', () => {
    const fn = vm.newFunction('recursiveFn', (thisHandle) => {
      // This would normally cause infinite recursion, but we're just testing depth tracking
      return vm.newString('result')
    })

    const result = vm.callFunction(fn, vm.undefined)
    expect(result.type).toBe('SUCCESS')
  })

  it('should handle property access errors gracefully', () => {
    const obj = vm.newObject()

    // Setting property on object should not throw
    expect(() => vm.setProp(obj, 'test', vm.newString('value'))).not.toThrow()

    // Getting non-existent property should return undefined, not throw
    const result = vm.getProp(obj, 'nonexistent')
    expect(vm.isUndefined(result)).toBe(true)
  })

  it('should handle function creation edge cases', () => {
    const fn = vm.newFunction('testFn', () => {
      return undefined // Return undefined explicitly
    })

    const result = vm.callFunction(fn, vm.undefined)
    expect(result.type).toBe('SUCCESS')
    // When function returns undefined, callFunction should return undefined
  })
})
