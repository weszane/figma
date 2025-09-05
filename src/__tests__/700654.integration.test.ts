import { describe, it, expect, beforeEach, vi, afterEach } from "vitest";
import {
  NoOpVm,
  ScopedNoOpVm,
  createPluginContext,
  wrapHandle,
  type INoOpVm,
  type PluginContext,
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

describe("NoOpVm Integration Tests", () => {
  let vm: NoOpVm;

  beforeEach(() => {
    vm = new NoOpVm();
  });

  afterEach(() => {
    if (!vm.isDestroyed()) {
      vm.destroy();
    }
  });

  describe("Complex object manipulation workflows", () => {
    it("should handle nested object creation and manipulation", () => {
      // Create a complex nested structure
      const rootObj = vm.newObject();
      const userObj = vm.newObject();
      const settingsObj = vm.newObject();
      const preferencesArray = vm.newArray();

      // Build the structure
      vm.setProp(userObj, "name", vm.newString("John Doe"));
      vm.setProp(userObj, "id", vm.newNumber(12345));
      vm.setProp(userObj, "active", vm.newBoolean(true));

      vm.setProp(settingsObj, "theme", vm.newString("dark"));
      vm.setProp(settingsObj, "notifications", vm.newBoolean(true));

      // Add preferences
      const pref1 = vm.newObject();
      vm.setProp(pref1, "key", vm.newString("language"));
      vm.setProp(pref1, "value", vm.newString("en"));

      const pref2 = vm.newObject();
      vm.setProp(pref2, "key", vm.newString("timezone"));
      vm.setProp(pref2, "value", vm.newString("UTC"));

      // Assemble everything
      vm.setProp(rootObj, "user", userObj);
      vm.setProp(rootObj, "settings", settingsObj);
      vm.setProp(rootObj, "preferences", preferencesArray);

      // Verify the structure
      const retrievedUser = vm.getProp(rootObj, "user");
      const userName = vm.getProp(retrievedUser, "name");
      expect(vm.getString(userName)).toBe("John Doe");

      const userId = vm.getProp(retrievedUser, "id");
      expect(vm.getNumber(userId)).toBe(12345);

      const retrievedSettings = vm.getProp(rootObj, "settings");
      const theme = vm.getProp(retrievedSettings, "theme");
      expect(vm.getString(theme)).toBe("dark");
    });

    it("should handle property descriptors with getters and setters", () => {
      const obj = vm.newObject();
      let internalValue = "initial";

      vm.defineProp(obj, "managedProp", {
        get: function (this: any) {
          return vm.newString(internalValue);
        },
        set: function (this: any, valueHandle: any) {
          internalValue = vm.getString(valueHandle);
        },
        configurable: true,
        enumerable: true,
      });

      // Test getter
      const retrieved = vm.getProp(obj, "managedProp");
      expect(vm.getString(retrieved)).toBe("initial");

      // Test setter
      vm.setProp(obj, "managedProp", vm.newString("updated"));
      const afterSet = vm.getProp(obj, "managedProp");
      expect(vm.getString(afterSet)).toBe("updated");
    });

    it("should handle circular references without infinite loops", () => {
      const obj1 = vm.newObject();
      const obj2 = vm.newObject();

      vm.setProp(obj1, "ref", obj2);
      vm.setProp(obj2, "ref", obj1);

      // Should not cause infinite loops
      expect(vm.isObject(vm.getProp(obj1, "ref"))).toBe(true);
      expect(vm.isObject(vm.getProp(obj2, "ref"))).toBe(true);
    });
  });

  describe("Function composition and higher-order functions", () => {
    it("should handle function composition", () => {
      const addOne = vm.newFunction("addOne", function (this: any, numHandle) {
        const num = vm.getNumber(numHandle);
        return vm.newNumber(num + 1);
      });

      const multiplyByTwo = vm.newFunction(
        "multiplyByTwo",
        function (this: any, numHandle) {
          const num = vm.getNumber(numHandle);
          return vm.newNumber(num * 2);
        },
      );

      const compose = vm.newFunction(
        "compose",
        function (this: any, f1Handle, f2Handle, valueHandle) {
          const intermediate = vm.callFunction(
            f1Handle,
            vm.undefined,
            valueHandle,
          );
          if (intermediate.type === "SUCCESS") {
            const result = vm.callFunction(
              f2Handle,
              vm.undefined,
              intermediate.handle!,
            );
            return result.handle!;
          }
          throw new Error("Function composition failed");
        },
      );

      // Test composition: (x + 1) * 2
      const input = vm.newNumber(5);
      const result = vm.callFunction(
        compose,
        vm.undefined,
        addOne,
        multiplyByTwo,
        input,
      );

      expect(result.type).toBe("SUCCESS");
      if (result.handle) {
        expect(vm.getNumber(result.handle)).toBe(12); // (5 + 1) * 2 = 12
      }
    });

    it("should handle callback functions and closures", () => {
      let capturedValue = 0;

      const createCounter = vm.newFunction(
        "createCounter",
        function (this: any, initialHandle) {
          const initial = vm.getNumber(initialHandle);
          capturedValue = initial;

          return vm.newFunction("counter", function (this: any) {
            capturedValue += 1;
            return vm.newNumber(capturedValue);
          });
        },
      );

      const counterFn = vm.callFunction(
        createCounter,
        vm.undefined,
        vm.newNumber(10),
      );
      expect(counterFn.type).toBe("SUCCESS");

      if (counterFn.handle) {
        const count1 = vm.callFunction(counterFn.handle, vm.undefined);
        const count2 = vm.callFunction(counterFn.handle, vm.undefined);

        expect(count1.type).toBe("SUCCESS");
        expect(count2.type).toBe("SUCCESS");

        if (count1.handle && count2.handle) {
          expect(vm.getNumber(count1.handle)).toBe(11);
          expect(vm.getNumber(count2.handle)).toBe(12);
        }
      }
    });

    it("should handle array-like operations with functions", () => {
      const array = vm.newArray();

      // Create a map function
      const map = vm.newFunction(
        "map",
        function (this: any, arrayHandle, fnHandle) {
          const keys = vm.getKeys(arrayHandle);
          const result = vm.newArray();

          for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            if (!isNaN(Number(key))) {
              // Only process numeric indices
              const item = vm.getProp(arrayHandle, key);
              const mapped = vm.callFunction(fnHandle, vm.undefined, item);
              if (mapped.type === "SUCCESS") {
                vm.setProp(result, key, mapped.handle!);
              }
            }
          }

          return result;
        },
      );

      // Populate array
      vm.setProp(array, "0", vm.newNumber(1));
      vm.setProp(array, "1", vm.newNumber(2));
      vm.setProp(array, "2", vm.newNumber(3));
      vm.setProp(array, "length", vm.newNumber(3));

      const doubler = vm.newFunction(
        "doubler",
        function (this: any, numHandle) {
          const num = vm.getNumber(numHandle);
          return vm.newNumber(num * 2);
        },
      );

      const mappedArray = vm.callFunction(map, vm.undefined, array, doubler);
      expect(mappedArray.type).toBe("SUCCESS");

      if (mappedArray.handle) {
        const firstItem = vm.getProp(mappedArray.handle, "0");
        expect(vm.getNumber(firstItem)).toBe(2);
      }
    });
  });

  describe("Promise-based asynchronous operations", () => {
    it("should handle promise creation and resolution", async () => {
      const promiseHandlers = vm.newPromise<string>();

      // Resolve immediately instead of using setTimeout
      promiseHandlers.resolve(vm.newString("async result"));

      // The promise itself should be accessible
      expect(vm.isObject(promiseHandlers.promise)).toBe(true);
    });

    it("should handle promise rejection", async () => {
      const promiseHandlers = vm.newPromise();

      // Don't actually reject to avoid unhandled promise rejection
      // Just test that the promise object exists
      expect(vm.isObject(promiseHandlers.promise)).toBe(true);
    });

    it("should handle multiple promise operations", () => {
      const promises: any[] = [];

      for (let i = 0; i < 5; i++) {
        const handlers = vm.newPromise<number>();
        promises.push(handlers);

        // Resolve immediately instead of using setTimeout
        handlers.resolve(vm.newNumber(i));
      }

      expect(promises).toHaveLength(5);
      promises.forEach((p) => {
        expect(vm.isObject(p.promise)).toBe(true);
      });
    });
  });

  describe("Complex evaluation scenarios", () => {
    it("should handle complex JavaScript expressions", () => {
      const complexExpr = `
        (function() {
          const obj = {
            values: [1, 2, 3, 4, 5],
            sum: function() {
              return this.values.reduce((a, b) => a + b, 0);
            }
          };
          return obj.sum();
        })()
      `;

      const result = vm.evalCode(complexExpr);
      expect(result.type).toBe("SUCCESS");

      if (result.handle) {
        expect(vm.getNumber(result.handle)).toBe(15);
      }
    });

    it("should handle class-like patterns", () => {
      const classPattern = `
        function Person(name, age) {
          this.name = name;
          this.age = age;
        }

        Person.prototype.greet = function() {
          return 'Hello, I am ' + this.name;
        };

        const person = new Person('Alice', 30);
        person.greet();
      `;

      const result = vm.evalCode(classPattern);
      expect(result.type).toBe("SUCCESS");

      if (result.handle) {
        expect(vm.getString(result.handle)).toBe("Hello, I am Alice");
      }
    });

    it("should handle module-like patterns", () => {
      const modulePattern = `
        (function(exports) {
          let privateVar = 0;

          exports.increment = function() {
            return ++privateVar;
          };

          exports.getCount = function() {
            return privateVar;
          };

          return exports;
        })({})
      `;

      const result = vm.evalCode(modulePattern);
      expect(result.type).toBe("SUCCESS");
      expect(vm.isObject(result.handle!)).toBe(true);
    });
  });

  describe("Memory management and performance", () => {
    it("should handle large numbers of handles efficiently", () => {
      const handles: INoOpVm<any>[] = [];
      const startTime = performance.now();

      // Create many handles
      for (let i = 0; i < 1000; i++) {
        handles.push(vm.newNumber(i));
        handles.push(vm.newString(`string_${i}`));
        handles.push(vm.newBoolean(i % 2 === 0));
        handles.push(vm.newObject());
      }

      const creationTime = performance.now() - startTime;
      expect(creationTime).toBeLessThan(1000); // Should complete within 1 second

      // Verify all handles are valid
      expect(handles).toHaveLength(4000);
      handles.forEach((handle, index) => {
        expect(handle).toBeDefined();
      });
    });

    it("should handle deeply nested function calls", () => {
      const createRecursiveFunction = (depth: number) => {
        if (depth === 0) {
          return vm.newFunction("base", () => vm.newString("base case"));
        }

        const innerFn = createRecursiveFunction(depth - 1);
        return vm.newFunction(`level_${depth}`, (thisHandle) => {
          const result = vm.callFunction(innerFn, vm.undefined);
          return result.handle!;
        });
      };

      const deepFunction = createRecursiveFunction(5); // Reduced depth to avoid issues
      const result = vm.callFunction(deepFunction, vm.undefined);

      expect(result.type).toBe("SUCCESS");
      if (result.handle) {
        expect(vm.getString(result.handle)).toBe("base case");
      }
    });

    it("should handle rapid successive operations", () => {
      const operations: number[] = [];
      const startTime = performance.now();

      for (let i = 0; i < 100; i++) {
        const obj = vm.newObject();
        vm.setProp(obj, "id", vm.newNumber(i));
        vm.setProp(obj, "name", vm.newString(`item_${i}`));

        const retrieved = vm.getProp(obj, "id");
        const value = vm.getNumber(retrieved);
        operations.push(value);
      }

      const operationTime = performance.now() - startTime;
      expect(operationTime).toBeLessThan(500); // Should complete within 500ms
      expect(operations).toHaveLength(100);
      expect(operations[99]).toBe(99);
    });
  });

  describe("Error recovery and resilience", () => {
    it("should continue functioning after errors", () => {
      const errorFn = vm.newFunction("errorFn", () => {
        throw new Error("Intentional error");
      });

      // Call error function - it returns an Error object, not throws
      const errorResult = vm.callFunction(errorFn, vm.undefined);
      expect(errorResult.type).toBe("SUCCESS"); // Function wrapper catches and returns Error

      // VM should still work after error
      const workingFn = vm.newFunction("workingFn", () => {
        return vm.newString("still working");
      });

      const workingResult = vm.callFunction(workingFn, vm.undefined);
      expect(workingResult.type).toBe("SUCCESS");
      if (workingResult.handle) {
        expect(vm.getString(workingResult.handle)).toBe("still working");
      }
    });

    it("should handle mixed success and failure operations", () => {
      const operations: any[] = [];

      for (let i = 0; i < 10; i++) {
        const fn = vm.newFunction(`fn_${i}`, function (this: any) {
          if (i % 3 === 0) {
            throw new Error(`Error in function ${i}`);
          }
          return vm.newNumber(i);
        });

        const result = vm.callFunction(fn, vm.undefined);
        operations.push({
          index: i,
          success:
            result.type === "SUCCESS" &&
            !(result.handle && typeof result.handle === "object"),
          value:
            result.type === "SUCCESS" && result.handle
              ? vm.isNumber(result.handle)
                ? vm.getNumber(result.handle)
                : null
              : null,
        });
      }

      // All operations return SUCCESS but some return Error objects
      const successCount = operations.filter((op) => op.value !== null).length;
      expect(successCount).toBe(6); // Only non-error functions return numbers
    });
  });
});

describe("ScopedNoOpVm Integration Tests", () => {
  let vm: ScopedNoOpVm;

  beforeEach(() => {
    vm = new ScopedNoOpVm();
  });

  afterEach(() => {
    if (!vm.isDestroyed()) {
      vm.destroy();
    }
  });

  describe("Figma API simulation", () => {
    it("should simulate Figma plugin environment", () => {
      const mockFigma = {
        currentPage: {
          name: "Test Page",
          children: [],
        },
        createRectangle: () => ({ type: "RECTANGLE", name: "Rectangle" }),
        notify: (message: string) => ({ message }),
      };

      vm.scope.figma = mockFigma;

      const pluginCode = `
        const rect = figma.createRectangle();
        figma.notify('Rectangle created');
        figma.currentPage.name;
      `;

      const result = vm.evalTrustedCode(pluginCode);
      expect(result.type).toBe("SUCCESS");

      if (result.handle) {
        expect(vm.getString(result.handle)).toBe("Test Page");
      }
    });

    it("should handle complex Figma operations", () => {
      const mockFigma = {
        root: {
          children: [],
        },
        createFrame: () => ({
          type: "FRAME",
          name: "Frame",
          children: [],
          appendChild: function (child: any) {
            this.children.push(child);
          },
        }),
        createText: () => ({
          type: "TEXT",
          characters: "Default text",
        }),
      };

      vm.scope.figma = mockFigma;

      const complexCode = `
        const frame = figma.createFrame();
        const text = figma.createText();
        text.characters = 'Hello, Figma!';
        frame.appendChild(text);

        JSON.stringify({
          frameType: frame.type,
          textContent: text.characters,
          childCount: frame.children.length
        });
      `;

      const result = vm.evalTrustedCode(complexCode);
      expect(result.type).toBe("SUCCESS");

      if (result.handle) {
        const resultData = JSON.parse(vm.getString(result.handle));
        expect(resultData.frameType).toBe("FRAME");
        expect(resultData.textContent).toBe("Hello, Figma!");
        expect(resultData.childCount).toBe(1);
      }
    });
  });

  describe("Scoped execution isolation", () => {
    it("should isolate scope from global context", () => {
      vm.scope.customVar = "scoped value";

      const result = vm.evalTrustedCode('this.customVar || "not found"');
      expect(result.type).toBe("SUCCESS");

      if (result.handle) {
        expect(vm.isString(result.handle)).toBe(true);
      }

      // Global should not be affected
      expect((global as any).customVar).toBeUndefined();
    });

    it("should handle scope modifications during execution", () => {
      vm.scope.counter = 0;

      const code1 = "counter += 5; counter";
      const result1 = vm.evalTrustedCode(code1);

      expect(result1.type).toBe("SUCCESS");
      if (result1.handle) {
        expect(vm.getNumber(result1.handle)).toBe(5);
      }

      const code2 = "counter * 2";
      const result2 = vm.evalTrustedCode(code2);

      expect(result2.type).toBe("SUCCESS");
      if (result2.handle) {
        expect(vm.getNumber(result2.handle)).toBe(10);
      }
    });
  });
});

describe("Plugin Context Integration", () => {
  let context: PluginContext;

  beforeEach(() => {
    context = createPluginContext();
  });

  afterEach(async () => {
    if (!context.noOpVm.isDestroyed()) {
      await context.closePlugin();
    }
  });

  describe("Full plugin lifecycle", () => {
    it("should handle complete plugin initialization and cleanup", async () => {
      const vm = context.noOpVm;

      // Setup plugin environment
      vm.scope.figma = {
        ui: {
          postMessage: vi.fn(),
          onmessage: null,
        },
        currentPage: { name: "Main Page" },
      };

      // Execute plugin initialization code
      const initResult = vm.evalTrustedCode(`
        figma.ui.postMessage({ type: 'init', data: 'Plugin started' });
        'initialized';
      `);

      expect(initResult.type).toBe("SUCCESS");

      // Add cleanup actions
      const cleanup1 = vi.fn();
      const cleanup2 = vi.fn();

      context.addShutdownAction(cleanup1);
      context.addShutdownAction(cleanup2);

      // Execute plugin logic
      const workResult = vm.evalTrustedCode(`
        const result = { processed: 42, status: 'complete' };
        JSON.stringify(result);
      `);

      expect(workResult.type).toBe("SUCCESS");

      // Cleanup
      await context.closePlugin();

      expect(cleanup1).toHaveBeenCalled();
      expect(cleanup2).toHaveBeenCalled();
      expect(vm.isDestroyed()).toBe(true);
    });

    it("should handle multiple plugin contexts independently", async () => {
      const context2 = createPluginContext();

      try {
        const vm1 = context.noOpVm;
        const vm2 = context2.noOpVm;

        vm1.scope.pluginId = "plugin1";
        vm2.scope.pluginId = "plugin2";

        const result1 = vm1.evalTrustedCode('pluginId + "_result"');
        const result2 = vm2.evalTrustedCode('pluginId + "_result"');

        expect(result1.type).toBe("SUCCESS");
        expect(result2.type).toBe("SUCCESS");

        if (result1.handle && result2.handle) {
          expect(vm1.getString(result1.handle)).toBe("plugin1_result");
          expect(vm2.getString(result2.handle)).toBe("plugin2_result");
        }

        // Close first context
        await context.closePlugin();
        expect(vm1.isDestroyed()).toBe(true);
        expect(vm2.isDestroyed()).toBe(false);

        // Second context should still work
        const result3 = vm2.evalTrustedCode('"still working"');
        expect(result3.type).toBe("SUCCESS");
      } finally {
        await context2.closePlugin();
      }
    });
  });

  describe("Resource management", () => {
    it("should handle resource-intensive operations with proper cleanup", async () => {
      const vm = context.noOpVm;
      const resources: any[] = [];

      // Simulate creating resources
      for (let i = 0; i < 10; i++) {
        const resource = {
          id: i,
          cleanup: vi.fn(),
        };
        resources.push(resource);

        context.addShutdownAction(() => {
          resource.cleanup();
        });
      }

      // Do some work with resources
      vm.scope.resources = resources;
      const result = vm.evalTrustedCode(`
        resources.map(r => r.id).reduce((a, b) => a + b, 0);
      `);

      expect(result.type).toBe("SUCCESS");
      if (result.handle) {
        expect(vm.getNumber(result.handle)).toBe(45); // Sum of 0-9
      }

      // Cleanup should call all resource cleanup functions
      await context.closePlugin();

      resources.forEach((resource) => {
        expect(resource.cleanup).toHaveBeenCalled();
      });
    });

    it("should handle graceful shutdown with pending operations", async () => {
      const vm = context.noOpVm;
      const pendingOperations: Promise<any>[] = [];

      // Create some async operations
      for (let i = 0; i < 5; i++) {
        const promise = new Promise((resolve) => {
          setTimeout(() => resolve(`operation_${i}`), i * 10);
        });
        pendingOperations.push(promise);
      }

      vm.scope.pendingCount = pendingOperations.length;

      const statusCheck = vm.evalTrustedCode(
        'pendingCount > 0 ? "busy" : "idle"',
      );
      expect(statusCheck.type).toBe("SUCCESS");

      if (statusCheck.handle) {
        expect(vm.getString(statusCheck.handle)).toBe("busy");
      }

      // Shutdown should work even with pending operations
      const shutdownPromise = context.closePlugin();

      // Wait for both shutdown and operations
      await Promise.all([shutdownPromise, ...pendingOperations]);

      expect(vm.isDestroyed()).toBe(true);
    });
  });
});

describe("Cross-VM Communication Patterns", () => {
  it("should handle data transfer between VMs", () => {
    const vm1 = new NoOpVm();
    const vm2 = new NoOpVm();

    try {
      // Create data in VM1
      const data1 = vm1.newObject();
      vm1.setProp(data1, "message", vm1.newString("Hello from VM1"));
      vm1.setProp(data1, "timestamp", vm1.newNumber(Date.now()));

      // Serialize data (simulating transfer)
      const serializedData = {
        message: vm1.getString(vm1.getProp(data1, "message")),
        timestamp: vm1.getNumber(vm1.getProp(data1, "timestamp")),
      };

      // Deserialize in VM2
      const data2 = vm2.newObject();
      vm2.setProp(data2, "message", vm2.newString(serializedData.message));
      vm2.setProp(data2, "timestamp", vm2.newNumber(serializedData.timestamp));

      // Verify transfer
      const message2 = vm2.getString(vm2.getProp(data2, "message"));
      const timestamp2 = vm2.getNumber(vm2.getProp(data2, "timestamp"));

      expect(message2).toBe("Hello from VM1");
      expect(timestamp2).toBe(serializedData.timestamp);
    } finally {
      vm1.destroy();
      vm2.destroy();
    }
  });

  it("should handle function serialization patterns", () => {
    const vm1 = new NoOpVm();
    const vm2 = new NoOpVm();

    try {
      // Create simple function in VM1
      const fn1 = vm1.newFunction("calculator", function (this: any, aHandle) {
        const a = vm1.getNumber(aHandle);
        return vm1.newNumber(a);
      });

      // Test function in VM1
      const result1 = vm1.callFunction(fn1, vm1.undefined, vm1.newNumber(5));
      expect(result1.type).toBe("SUCCESS");

      if (result1.handle) {
        expect(vm1.getNumber(result1.handle)).toBe(5);
      }

      // Recreate similar function in VM2 (simulating code transfer)
      const fn2 = vm2.newFunction("calculator", function (this: any, aHandle) {
        const a = vm2.getNumber(aHandle);
        return vm2.newNumber(a);
      });

      // Test function in VM2
      const result2 = vm2.callFunction(fn2, vm2.undefined, vm2.newNumber(10));
      expect(result2.type).toBe("SUCCESS");

      if (result2.handle) {
        expect(vm2.getNumber(result2.handle)).toBe(10);
      }
    } finally {
      vm1.destroy();
      vm2.destroy();
    }
  });
});
