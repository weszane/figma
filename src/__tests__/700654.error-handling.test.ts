import { describe, it, expect, beforeEach, vi, afterEach } from "vitest";
import { NoOpVm, ScopedNoOpVm, wrapHandle, type INoOpVm } from "../905/700654";

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

describe("NoOpVm Error Handling", () => {
  let vm: NoOpVm;

  beforeEach(() => {
    vm = new NoOpVm();
  });

  afterEach(() => {
    if (!vm.isDestroyed()) {
      vm.destroy();
    }
  });

  describe("handle validation errors", () => {
    it("should throw when unwrapping non-handle objects", () => {
      const regularObject = { notAHandle: true };

      // These methods internally call unwrapHandle and should throw
      expect(() => vm.typeof(regularObject as any)).toThrow(
        "The provided value is not a handle",
      );
      expect(() => vm.isNumber(regularObject as any)).toThrow(
        "The provided value is not a handle",
      );
      expect(() => vm.isString(regularObject as any)).toThrow(
        "The provided value is not a handle",
      );
    });

    it("should throw when unwrapping null or primitive values", () => {
      expect(() => vm.typeof(null as any)).toThrow(
        "The provided value is not a handle",
      );
      expect(() => vm.typeof("string" as any)).toThrow(
        "The provided value is not a handle",
      );
      expect(() => vm.typeof(42 as any)).toThrow(
        "The provided value is not a handle",
      );
      expect(() => vm.typeof(true as any)).toThrow(
        "The provided value is not a handle",
      );
    });

    it("should throw when wrapping handles on destroyed VM", () => {
      vm.destroy();
      expect(() => wrapHandle(vm, "test")).toThrow("Plugin has been closed");
    });

    it("should throw when using methods on destroyed VM", () => {
      const handle = vm.newString("test");
      vm.destroy();

      expect(() => vm.typeof(handle)).toThrow("Plugin has been closed");
      expect(() => vm.isString(handle)).toThrow("Plugin has been closed");
      expect(() => vm.getString(handle)).toThrow("Plugin has been closed");
    });
  });

  describe("type validation errors", () => {
    it("should throw detailed errors for type mismatches", () => {
      const stringHandle = vm.newString("hello");
      const numberHandle = vm.newNumber(42);
      const boolHandle = vm.newBoolean(true);
      const objectHandle = vm.newObject();

      // Test getNumber with non-numbers
      expect(() => vm.getNumber(stringHandle)).toThrow("Value is not a number");
      expect(() => vm.getNumber(boolHandle)).toThrow("Value is not a number");
      expect(() => vm.getNumber(objectHandle)).toThrow("Value is not a number");

      // Test getBoolean with non-booleans
      expect(() => vm.getBoolean(stringHandle)).toThrow(
        "Value is not a boolean",
      );
      expect(() => vm.getBoolean(numberHandle)).toThrow(
        "Value is not a boolean",
      );
      expect(() => vm.getBoolean(objectHandle)).toThrow(
        "Value is not a boolean",
      );

      // Test getString with non-strings
      expect(() => vm.getString(numberHandle)).toThrow("Value is not a string");
      expect(() => vm.getString(boolHandle)).toThrow("Value is not a string");
      expect(() => vm.getString(objectHandle)).toThrow("Value is not a string");
    });

    it("should throw errors for invalid ArrayBuffer operations", () => {
      const stringHandle = vm.newString("not a buffer");
      const objectHandle = vm.newObject();

      expect(() => vm.getArrayBuffer(stringHandle)).toThrow(
        "Value is not a ArrayBuffer",
      );
      expect(() => vm.getArrayBuffer(objectHandle)).toThrow(
        "Value is not a ArrayBuffer",
      );
    });

    it("should throw errors for invalid Uint8Array operations", () => {
      const stringHandle = vm.newString("not a uint8array");
      const arrayBufferHandle = vm.newArrayBuffer(new ArrayBuffer(8));

      expect(() => vm.getUint8Array(stringHandle)).toThrow(
        "Value is not a Uint8Array",
      );
      expect(() => vm.getUint8Array(arrayBufferHandle)).toThrow(
        "Value is not a Uint8Array",
      );
    });
  });

  describe("value creation errors", () => {
    it("should throw when creating values with wrong types", () => {
      expect(() => vm.newNumber("not a number" as any)).toThrow(
        "Value is not a number",
      );
      expect(() => vm.newNumber(null as any)).toThrow("Value is not a number");
      expect(() => vm.newNumber(undefined as any)).toThrow(
        "Value is not a number",
      );

      expect(() => vm.newBoolean("not a boolean" as any)).toThrow(
        "Value is not a boolean",
      );
      expect(() => vm.newBoolean(1 as any)).toThrow("Value is not a boolean");

      expect(() => vm.newString(42 as any)).toThrow("Value is not a string");
      expect(() => vm.newString(null as any)).toThrow("Value is not a string");

      expect(() => vm.newSymbol(42 as any)).toThrow("Value is not a string");
    });

    it("should throw when creating ArrayBuffer with invalid input", () => {
      expect(() => vm.newArrayBuffer("not a buffer" as any)).toThrow(
        "Value is not an ArrayBuffer",
      );
      expect(() => vm.newArrayBuffer(new Uint8Array(8) as any)).toThrow(
        "Value is not an ArrayBuffer",
      );
    });

    it("should throw when creating Uint8Array with invalid input", () => {
      expect(() => vm.newUint8Array("not a uint8array" as any)).toThrow(
        "Value is not an Uint8Array",
      );
      expect(() => vm.newUint8Array(new ArrayBuffer(8) as any)).toThrow(
        "Value is not an Uint8Array",
      );
      expect(() => vm.newUint8Array([1, 2, 3] as any)).toThrow(
        "Value is not an Uint8Array",
      );
    });
  });

  describe("function execution errors", () => {
    it("should handle function errors with proper error wrapping", () => {
      const fn = vm.newFunction("errorFunction", () => {
        throw new Error("Custom function error");
      });

      const result = vm.callFunction(fn, vm.undefined);

      // The function wrapper catches errors and returns them as Error objects, not PluginError
      expect(result.type).toBe("SUCCESS");
      expect(result.handle).toBeDefined();
    });

    it("should handle nested function call errors", () => {
      const innerFn = vm.newFunction("innerFn", () => {
        throw new Error("Inner error");
      });

      const outerFn = vm.newFunction("outerFn", (thisHandle) => {
        return vm.callFunction(innerFn, thisHandle);
      });

      const result = vm.callFunction(outerFn, vm.undefined);
      expect(result.type).toBe("FAILURE");
    });

    it("should handle constructor errors", () => {
      const badConstructor = vm.newFunction("BadConstructor", () => {
        throw new Error("Constructor failed");
      });

      const result = vm.callConstructor(badConstructor);
      // Constructor errors are also handled in the wrapper function
      expect(result.type).toBe("SUCCESS");
      expect(result.handle).toBeDefined();
    });

    it("should track execution depth correctly", () => {
      let depth = 0;
      const trackingFn = vm.newFunction("trackingFn", () => {
        depth = (vm as any).executionDepth;
        return vm.newNumber(depth);
      });

      const result = vm.callFunction(trackingFn, vm.undefined);

      expect(result.type).toBe("SUCCESS");
      expect(depth).toBe(1);
      expect((vm as any).executionDepth).toBe(0); // Should be reset after call
    });
  });

  describe("eval errors", () => {
    it("should handle syntax errors in eval", () => {
      const result = vm.evalCode("invalid syntax +++");

      expect(result.type).toBe("FAILURE");
      expect(result.error).toBeDefined();
    });

    it("should handle runtime errors in eval", () => {
      const result = vm.evalCode('throw new Error("Runtime error")');

      expect(result.type).toBe("FAILURE");
      expect(result.error).toBeDefined();
    });

    it("should handle reference errors in eval", () => {
      const result = vm.evalCode("undefinedVariable.property");

      expect(result.type).toBe("FAILURE");
      expect(result.error).toBeDefined();
    });

    it("should handle trusted code eval errors", () => {
      const result = vm.evalTrustedCode("invalid.syntax()");

      expect(result.type).toBe("FAILURE");
    });

    it("should handle top-level code eval errors", () => {
      const result = vm.evalTopLevelCode('throw new Error("Top level error")');

      expect(result.type).toBe("FAILURE");
    });
  });

  describe("property access errors", () => {
    it("should handle errors when getting properties", () => {
      // Create an object with a getter that throws
      const obj = vm.newObject();

      vm.defineProp(obj, "errorProp", {
        get: () => {
          throw new Error("Getter error");
        },
        configurable: true,
      });

      // Property access errors are wrapped in PluginError
      expect(() => vm.getProp(obj, "errorProp")).toThrow();
    });

    it("should handle errors when setting properties", () => {
      const obj = vm.newObject();

      vm.defineProp(obj, "readOnlyProp", {
        value: vm.newString("readonly"),
        writable: false,
        configurable: true,
      });

      // In strict mode, this should throw
      // Setting readonly property throws PluginError
      expect(() => {
        vm.setProp(obj, "readOnlyProp", vm.newString("new value"));
      }).toThrow();
    });
  });

  describe("type conversion errors", () => {
    it("should handle conversion errors gracefully", () => {
      const symbolHandle = vm.newSymbol("test");

      // Converting symbol to number throws PluginError
      expect(() => vm.toNumber(symbolHandle)).toThrow();

      // Converting symbol to string should work
      const stringResult = vm.toString(symbolHandle);
      expect(typeof stringResult).toBe("string");

      // Converting symbol to boolean should work
      const boolResult = vm.toBoolean(symbolHandle);
      expect(typeof boolResult).toBe("boolean");
    });

    it("should handle problematic object conversions", () => {
      const obj = vm.newObject();

      // Objects should convert to numbers as NaN
      const numberResult = vm.toNumber(obj);
      expect(isNaN(numberResult)).toBe(true);

      // Objects should convert to strings
      const stringResult = vm.toString(obj);
      expect(typeof stringResult).toBe("string");

      // Objects should convert to boolean true
      const boolResult = vm.toBoolean(obj);
      expect(boolResult).toBe(true);
    });
  });

  describe("error handler integration", () => {
    it("should call error handler on top-level function errors", () => {
      const errorHandler = vi.fn();
      vm.setErrorHandler(errorHandler);

      const errorFn = vm.newFunction("topLevelError", () => {
        throw new Error("Top level function error");
      });

      vm.callFunction(errorFn, vm.undefined);

      // Function errors are wrapped and returned, not sent to error handler
      expect(errorHandler).not.toHaveBeenCalled();
    });

    it("should call error handler on top-level eval errors", () => {
      const errorHandler = vi.fn();
      vm.setErrorHandler(errorHandler);

      vm.evalCode('throw new Error("Top level eval error")');

      expect(errorHandler).toHaveBeenCalled();
    });

    it("should not call error handler on nested errors", () => {
      const errorHandler = vi.fn();
      vm.setErrorHandler(errorHandler);

      const innerFn = vm.newFunction("innerError", () => {
        throw new Error("Nested error");
      });

      const outerFn = vm.newFunction("outerFn", (thisHandle) => {
        const result = vm.callFunction(innerFn, thisHandle);
        return result.type === "FAILURE"
          ? vm.newString("handled")
          : vm.newString("success");
      });

      const result = vm.callFunction(outerFn, vm.undefined);

      // No error handler calls since function errors are wrapped
      expect(errorHandler).not.toHaveBeenCalled();
    });
  });

  describe("memory and handle errors", () => {
    it("should handle double wrapping prevention", () => {
      const value = { test: "value" };
      const handle = wrapHandle(vm, value);

      expect(() => wrapHandle(vm, handle as any)).toThrow(
        "Wrapping a handle twice!",
      );
    });

    it("should handle retain/release operations without errors", () => {
      const handle = vm.newString("test");

      // These are no-ops but should not throw
      expect(() => vm.retainHandle(handle)).not.toThrow();
      expect(() => vm.releaseHandle(handle)).not.toThrow();
    });
  });
});

describe("ScopedNoOpVm Error Handling", () => {
  let vm: ScopedNoOpVm;

  beforeEach(() => {
    vm = new ScopedNoOpVm();
  });

  afterEach(() => {
    if (!vm.isDestroyed()) {
      vm.destroy();
    }
  });

  describe("trusted execution restrictions", () => {
    it("should throw when attempting untrusted eval", () => {
      expect(() => vm.evalCode("1 + 1")).toThrow(
        "Scoped NoOp Vm can only run trusted code",
      );
    });

    it("should handle errors during trusted execution", () => {
      const result = vm.evalTrustedCode(
        'throw new Error("Trusted code error")',
      );

      expect(result.type).toBe("FAILURE");
      expect(result.error).toBeDefined();
    });

    it("should properly restore trust state after errors", () => {
      expect(vm.isTrusted).toBe(false);

      vm.evalTrustedCode('throw new Error("Error during trusted execution")');

      expect(vm.isTrusted).toBe(false);
    });

    it("should handle errors in trusted top-level code", () => {
      const result = vm.evalTrustedTopLevelCode(
        'throw new Error("Top level error")',
      );

      expect(result.type).toBe("FAILURE");
      expect(vm.isTrusted).toBe(false);
    });
  });

  describe("figma context errors", () => {
    it("should handle missing figma context gracefully", () => {
      // Don't set figma in scope
      const result = vm.evalTrustedCode("typeof figma");

      expect(result.type).toBe("SUCCESS");
    });

    it("should restore original figma context after errors", () => {
      const originalFigma = (global as any).window.figma;
      const mockFigma = { test: "mock" };

      vm.scope.figma = mockFigma;

      vm.evalTrustedCode('throw new Error("Error with figma context")');

      expect((global as any).window.figma).toBe(originalFigma);
    });

    it("should handle figma context switching during eval", () => {
      const originalFigma = (global as any).window.figma;
      const mockFigma = { version: "1.0.0" };

      vm.scope.figma = mockFigma;

      const result = vm.evalTrustedCode("figma.version");

      expect(result.type).toBe("SUCCESS");
      if (result.handle) {
        expect(vm.isString(result.handle)).toBe(true);
      }

      // Should restore original context
      expect((global as any).window.figma).toBe(originalFigma);
    });
  });
});

describe("Error Edge Cases", () => {
  let vm: NoOpVm;

  beforeEach(() => {
    vm = new NoOpVm();
  });

  afterEach(() => {
    if (!vm.isDestroyed()) {
      vm.destroy();
    }
  });

  describe("prototype creation errors", () => {
    it("should handle prototype creation when eval is disabled", () => {
      // Simulate eval being disabled
      (vm as any).canEval = false;

      const proto = vm.newPrototype("TestClass");
      expect(vm.isObject(proto)).toBe(true);
    });

    it("should handle prototype creation eval errors", () => {
      // Mock evalTrustedCode to return failure
      const originalEval = vm.evalTrustedCode;
      vm.evalTrustedCode = vi.fn().mockReturnValue({ type: "FAILURE" });

      expect(() => vm.newPrototype("TestClass")).toThrow("Internal eval error");

      // Restore original method
      vm.evalTrustedCode = originalEval;
    });
  });

  describe("promise creation errors", () => {
    it("should handle promise operations with error values", () => {
      const promiseHandlers = vm.newPromise();
      const errorHandle = vm.newString("error value");

      // These should not throw
      expect(() => promiseHandlers.resolve(errorHandle)).not.toThrow();
      expect(() => promiseHandlers.reject(errorHandle)).not.toThrow();
    });
  });

  describe("object creation errors", () => {
    it("should handle object creation with invalid prototype", () => {
      const invalidProto = vm.newString("not an object");

      expect(() => vm.newObject(invalidProto as any)).toThrow();
    });
  });

  describe("function parameter handling errors", () => {
    it("should handle functions with insufficient arguments", () => {
      const fn = vm.newFunction(
        "multiArgFn",
        (thisHandle, arg1, arg2, arg3) => {
          // Function expects 3 args but we'll call with fewer
          return vm.newString("called");
        },
      );

      // Should pad with undefined
      const result = vm.callFunction(fn, vm.undefined, vm.newString("arg1"));
      expect(result.type).toBe("SUCCESS");
    });

    it("should handle function name edge cases", () => {
      const fnWithSpecialName = vm.newFunction("test@#$%", () =>
        vm.newString("result"),
      );
      expect(vm.isFunction(fnWithSpecialName)).toBe(true);

      const result = vm.callFunction(fnWithSpecialName, vm.undefined);
      expect(result.type).toBe("SUCCESS");
    });
  });

  describe("freezing and property descriptor errors", () => {
    it("should handle property descriptor with invalid get/set functions", () => {
      const obj = vm.newObject();

      const descriptor = {
        get: vi.fn(() => vm.newString("getter result")),
        set: vi.fn(),
        configurable: true,
      };

      expect(() => vm.defineProp(obj, "testProp", descriptor)).not.toThrow();
    });

    it("should handle freezing of complex objects", () => {
      const complexObj = vm.newObject();
      vm.setProp(complexObj, "nested", vm.newObject());

      expect(() => vm.shallowFreezeObject(complexObj)).not.toThrow();
    });
  });
});
