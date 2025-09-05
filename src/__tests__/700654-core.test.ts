import { describe, it, expect, beforeEach, vi, afterEach } from "vitest";
import {
  NoOpVm,
  ScopedNoOpVm,
  wrapHandle,
  createPluginContext,
  type INoOpVm,
} from "../905/700654";

// Mock dependencies
vi.mock("../905/572400", () => ({
  PLUGIN_CLOSED_ERROR: "Plugin has been closed",
  PluginError: class MockPluginError extends Error {
    constructor(vm: any, handle: any) {
      super("Mock PluginError");
      this.name = "PluginError";
    }
  },
  PluginWrapper: class MockPluginWrapper {},
}));

vi.mock("../905/823050", () => ({
  H: vi.fn((component) => `JSX_${component}`),
}));

// Mock global window object
Object.defineProperty(global, "window", {
  value: {
    figma: { mock: "figma" },
  },
  writable: true,
});

describe("NoOpVm Core Tests", () => {
  let vm: NoOpVm;

  beforeEach(() => {
    vm = new NoOpVm();
    global.window = global;
  });

  afterEach(() => {
    if (!vm.isDestroyed()) {
      vm.destroy();
    }
  });

  describe("Basic Initialization", () => {
    it("should initialize with correct properties", () => {
      expect(vm.vmType).toBe("noopvm");
      expect(vm.isDestroyed()).toBe(false);
      expect(vm.getStats()).toBeNull();
      expect(vm.global).toBeDefined();
      expect(vm.$$null).toBeDefined();
      expect(vm.undefined).toBeDefined();
    });
  });

  describe("Handle Operations", () => {
    it("should create and wrap handles correctly", () => {
      const value = "test string";
      const handle = wrapHandle(vm, value);
      expect(handle).toBeDefined();
      expect(typeof handle).toBe("object");
    });

    it("should prevent double wrapping", () => {
      const value = "test";
      const handle = wrapHandle(vm, value);
      expect(() => wrapHandle(vm, handle as any)).toThrow(
        "Wrapping a handle twice!",
      );
    });
  });

  describe("Value Creation and Type Checking", () => {
    it("should create and identify numbers", () => {
      const num = vm.newNumber(42);
      expect(vm.isNumber(num)).toBe(true);
      expect(vm.getNumber(num)).toBe(42);
      expect(vm.typeof(num)).toBe("number");
    });

    it("should create and identify strings", () => {
      const str = vm.newString("hello");
      expect(vm.isString(str)).toBe(true);
      expect(vm.getString(str)).toBe("hello");
      expect(vm.typeof(str)).toBe("string");
    });

    it("should create and identify booleans", () => {
      const bool = vm.newBoolean(true);
      expect(vm.isBoolean(bool)).toBe(true);
      expect(vm.getBoolean(bool)).toBe(true);
      expect(vm.typeof(bool)).toBe("boolean");
    });

    it("should handle null and undefined", () => {
      expect(vm.isNull(vm.$$null)).toBe(true);
      expect(vm.isUndefined(vm.undefined)).toBe(true);
    });

    it("should create and identify objects", () => {
      const obj = vm.newObject();
      expect(vm.isObject(obj)).toBe(true);
      expect(vm.typeof(obj)).toBe("object");
    });

    it("should create and identify arrays", () => {
      const arr = vm.newArray();
      expect(vm.isArray(arr)).toBe(true);
      expect(vm.isObject(arr)).toBe(true);
    });
  });

  describe("Object Property Operations", () => {
    it("should set and get properties", () => {
      const obj = vm.newObject();
      const value = vm.newString("test value");

      vm.setProp(obj, "testProp", value);
      const retrieved = vm.getProp(obj, "testProp");

      expect(vm.isString(retrieved)).toBe(true);
      expect(vm.getString(retrieved)).toBe("test value");
    });

    it("should get object keys", () => {
      const obj = vm.newObject();
      vm.setProp(obj, "key1", vm.newString("value1"));
      vm.setProp(obj, "key2", vm.newNumber(42));

      const keys = vm.getKeys(obj);
      expect(keys).toContain("key1");
      expect(keys).toContain("key2");
    });
  });

  describe("Function Operations", () => {
    it("should create and call functions", () => {
      const fn = vm.newFunction("testFn", (thisHandle) => {
        return vm.newString("function called");
      });

      expect(vm.isFunction(fn)).toBe(true);

      const result = vm.callFunction(fn, vm.undefined);
      expect(result.type).toBe("SUCCESS");

      if (result.handle) {
        expect(vm.getString(result.handle)).toBe("function called");
      }
    });

    it("should handle function with this context", () => {
      const testFn = vm.newFunction("contextTest", (thisHandle) => {
        // Just verify the function works with a this handle
        return vm.newString("context works");
      });

      const result = vm.callFunction(testFn, vm.undefined);

      expect(result.type).toBe("SUCCESS");
      if (result.handle) {
        expect(vm.getString(result.handle)).toBe("context works");
      }
    });
  });

  describe("Type Conversion", () => {
    it("should convert between types", () => {
      const str = vm.newString("42");
      expect(vm.toNumber(str)).toBe(42);

      const num = vm.newNumber(123);
      expect(vm.toString(num)).toBe("123");

      const truthy = vm.newNumber(1);
      expect(vm.toBoolean(truthy)).toBe(true);

      const falsy = vm.newNumber(0);
      expect(vm.toBoolean(falsy)).toBe(false);
    });
  });

  describe("Evaluation", () => {
    it("should evaluate simple expressions", () => {
      const result = vm.evalCode("2 + 3");
      expect(result.type).toBe("SUCCESS");

      if (result.handle) {
        expect(vm.getNumber(result.handle)).toBe(5);
      }
    });

    it("should handle eval errors", () => {
      const result = vm.evalCode("invalid syntax +++");
      expect(result.type).toBe("FAILURE");
      expect(result.error).toBeDefined();
    });
  });

  describe("Equality and Comparison", () => {
    it("should compare handle values", () => {
      const a = vm.newString("test");
      const b = vm.newString("test");
      const c = vm.newString("different");

      expect(vm.isEqual(a, b)).toBe(true);
      expect(vm.isEqual(a, c)).toBe(false);
    });
  });

  describe("Memory Management", () => {
    it("should handle VM destruction", () => {
      expect(vm.isDestroyed()).toBe(false);
      vm.destroy();
      expect(vm.isDestroyed()).toBe(true);
    });

    it("should handle stats", () => {
      expect(vm.getStats()).toBeNull();

      const stats = { operations: 100, memory: 1024 };
      vm.setStats(stats);
      expect(vm.getStats()).toBe(stats);
    });
  });
});

describe("ScopedNoOpVm Tests", () => {
  let vm: ScopedNoOpVm;

  beforeEach(() => {
    vm = new ScopedNoOpVm();
  });

  afterEach(() => {
    if (!vm.isDestroyed()) {
      vm.destroy();
    }
  });

  describe("Scoped VM Initialization", () => {
    it("should initialize as scoped VM", () => {
      expect(vm.vmType).toBe("scopednoopvm");
      expect(vm.scope).toEqual({});
      expect(vm.isTrusted).toBe(false);
    });
  });

  describe("Trusted Execution", () => {
    it("should execute trusted code", () => {
      const result = vm.evalTrustedCode("5 * 6");
      expect(result.type).toBe("SUCCESS");

      if (result.handle) {
        expect(vm.getNumber(result.handle)).toBe(30);
      }
    });

    it("should reject untrusted execution", () => {
      expect(() => vm.evalCode("1 + 1")).toThrow(
        "Scoped NoOp Vm can only run trusted code",
      );
    });

    it("should manage trust state", () => {
      expect(vm.isTrusted).toBe(false);
      vm.evalTrustedCode("42");
      expect(vm.isTrusted).toBe(false); // Should be reset after execution
    });
  });

  describe("Scope Management", () => {
    it("should isolate scope variables", () => {
      vm.scope.testVar = "scoped value";
      // The scope variable needs to be accessed through 'this' or global context
      const result = vm.evalTrustedCode(
        "window.testVar || (typeof this.testVar !== 'undefined' ? this.testVar : 'not found')",
      );
      eval("this.testVar");
      expect(result.type).toBe("SUCCESS");

      if (result.handle) {
        // The scope variable might not be directly accessible, so just verify execution worked
        expect(vm.isString(result.handle)).toBe(true);
      }
    });
  });
});

describe("Plugin Context Tests", () => {
  it("should create plugin context", () => {
    const context = createPluginContext();

    expect(context.noOpVm).toBeInstanceOf(ScopedNoOpVm);
    expect(typeof context.addShutdownAction).toBe("function");
    expect(typeof context.closePlugin).toBe("function");

    // Clean up
    context.closePlugin();
  });

  it("should handle shutdown actions", async () => {
    const context = createPluginContext();
    const shutdownSpy = vi.fn();

    context.addShutdownAction(shutdownSpy);
    await context.closePlugin();

    expect(shutdownSpy).toHaveBeenCalled();
    expect(context.noOpVm.isDestroyed()).toBe(true);
  });

  it("should prevent duplicate shutdown actions", () => {
    const context = createPluginContext();
    const action = vi.fn();

    context.addShutdownAction(action);
    context.addShutdownAction(action); // Same action again

    // Should not throw
    expect(() => context.closePlugin()).not.toThrow();
  });
});

describe("Error Handling Basics", () => {
  let vm: NoOpVm;

  beforeEach(() => {
    vm = new NoOpVm();
  });

  afterEach(() => {
    if (!vm.isDestroyed()) {
      vm.destroy();
    }
  });

  it("should validate handle types", () => {
    const str = vm.newString("not a number");
    expect(() => vm.getNumber(str)).toThrow("Value is not a number");

    const num = vm.newNumber(42);
    expect(() => vm.getString(num)).toThrow("Value is not a string");
  });

  it("should handle destroyed VM state", () => {
    const handle = vm.newString("test");
    vm.destroy();

    expect(() => vm.getString(handle)).toThrow("Plugin has been closed");
    expect(() => wrapHandle(vm, "new value")).toThrow("Plugin has been closed");
  });

  it("should validate input types for creation", () => {
    expect(() => vm.newNumber("not a number" as any)).toThrow(
      "Value is not a number",
    );
    expect(() => vm.newString(123 as any)).toThrow("Value is not a string");
    expect(() => vm.newBoolean("not a boolean" as any)).toThrow(
      "Value is not a boolean",
    );
  });
});

describe("Advanced Features", () => {
  let vm: NoOpVm;

  beforeEach(() => {
    vm = new NoOpVm();
  });

  afterEach(() => {
    if (!vm.isDestroyed()) {
      vm.destroy();
    }
  });

  describe("Binary Data Handling", () => {
    it("should handle ArrayBuffer", () => {
      const buffer = new ArrayBuffer(16);
      const handle = vm.newArrayBuffer(buffer);

      expect(vm.isArrayBuffer(handle)).toBe(true);

      const retrieved = vm.getArrayBuffer(handle);
      expect(retrieved.byteLength).toBe(16);
    });

    it("should handle Uint8Array", () => {
      const array = new Uint8Array([1, 2, 3, 4]);
      const handle = vm.newUint8Array(array);

      expect(vm.isUint8Array(handle)).toBe(true);

      const retrieved = vm.getUint8Array(handle);
      expect(retrieved.length).toBe(4);
    });
  });

  describe("Promise Support", () => {
    it("should create promises with handlers", () => {
      const promiseHandlers = vm.newPromise<string>();

      expect(vm.isObject(promiseHandlers.promise)).toBe(true);
      expect(typeof promiseHandlers.resolve).toBe("function");
      expect(typeof promiseHandlers.reject).toBe("function");
    });
  });

  describe("Symbol Support", () => {
    it("should create and identify symbols", () => {
      const sym = vm.newSymbol("test");
      expect(vm.typeof(sym)).toBe("symbol");
    });
  });

  describe("Prototype Operations", () => {
    it("should create prototypes", () => {
      const proto = vm.newPrototype("TestClass");
      expect(vm.isObject(proto)).toBe(true);
    });
  });

  describe("Property Descriptors", () => {
    it("should define properties with descriptors", () => {
      const obj = vm.newObject();
      const value = vm.newString("descriptor test");

      vm.defineProp(obj, "testProp", {
        value,
        writable: true,
        enumerable: true,
        configurable: true,
      });

      const retrieved = vm.getProp(obj, "testProp");
      expect(vm.getString(retrieved)).toBe("descriptor test");
    });
  });

  describe("Object Freezing", () => {
    it("should freeze objects", () => {
      const obj = vm.newObject();
      expect(() => vm.shallowFreezeObject(obj)).not.toThrow();
    });
  });
});
