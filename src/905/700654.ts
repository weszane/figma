/* eslint-disable no-eval */
import type { Fn } from "../../../types/global";
import { PLUGIN_CLOSED_ERROR, PluginError, PluginWrapper } from "../905/572400";
import { createComponentRenderer } from "../905/823050";

// Generic type definitions
export type VmErrorHandler<TError = any> = (error: TError) => void;
export interface EvalResult<T = any> {
  type: "SUCCESS" | "FAILURE";
  handle?: INoOpVm<T>;
  error?: PluginError;
}
export interface CallResult<T = any> {
  type: "SUCCESS" | "FAILURE";
  handle?: INoOpVm<T>;
  error?: PluginError;
}
export interface PromiseHandlers<T = any> {
  promise: INoOpVm<Promise<T>>;
  resolve: (handle: INoOpVm<T>) => void;
  reject: (handle: INoOpVm<any>) => void;
}
export interface PropertyDescriptor<T = any, TReturn = any> {
  configurable?: boolean;
  enumerable?: boolean;
  writable?: boolean;
  value?: INoOpVm<T>;
  metricsKey?: string;
  get?: (this: INoOpVm<any>) => INoOpVm<T>;
  set?: (this: INoOpVm<any>, value: INoOpVm<T>) => TReturn;
}
export interface VmStats {
  [key: string]: any;
}
export type FunctionWrapper<TArgs extends any[] = any[], TReturn = any> = (this: INoOpVm<any>, ...args: INoOpVm<TArgs[number]>[]) => INoOpVm<TReturn> | TReturn;
export interface PluginContext {
  addShutdownAction: (action: () => void) => void;
  closePlugin: () => Promise<void>;
  noOpVm: ScopedNoOpVm;
}
const inter = Symbol("internal");
const WAS_DESTROYED = Symbol("wasDestroyed");
const APPLY = Function.prototype.apply;
export interface INoOpVm<T = any> {
  [inter]: T;
}
export function wrapHandle<T = any>(vm: NoOpVm, value: T): INoOpVm<T> {
  if (vm[WAS_DESTROYED]) throw new Error(PLUGIN_CLOSED_ERROR);
  if (typeof value === "object" && value !== null && inter in value) throw new Error("Wrapping a handle twice!");
  return {
    [inter]: value as T
  };
}
function unwrapHandle<T = any>(vm: NoOpVm, handle: INoOpVm<T> | T): T {
  if (vm[WAS_DESTROYED]) throw new Error(PLUGIN_CLOSED_ERROR);
  if (typeof handle !== "object" || handle === null || !(inter in handle)) throw new Error("The provided value is not a handle");
  return handle[inter] as T;
}
export class NoOpVm extends PluginWrapper {
  protected [WAS_DESTROYED]: boolean;
  protected _stats: VmStats | null;
  protected canEval: boolean;
  protected errorHandler: VmErrorHandler;
  protected executionDepth: number;
  global: INoOpVm<Window | object>;
  $$null: INoOpVm<null>;
  undefined: INoOpVm<undefined>;
  vmType: string;
  scope: any;
  constructor() {
    super();
    this.vmType = "noopvm";
    this.errorHandler = () => {};
    this.executionDepth = 0;
    this[WAS_DESTROYED] = false;
    this._stats = null;
    this.canEval = false;
    this.global = wrapHandle(this, window);
    this.$$null = wrapHandle(this, null);
    this.undefined = wrapHandle(this, void 0);
    try {
      this.canEval = eval("true");
    } catch {
      this.canEval = false;
    }
  }
  typeof(handle: unknown): string {
    return typeof unwrapHandle(this, handle);
  }
  isNumber(handle: unknown): handle is number {
    return typeof unwrapHandle(this, handle) === "number";
  }
  isBoolean(handle: unknown): handle is boolean {
    return typeof unwrapHandle(this, handle) === "boolean";
  }
  isString(handle: unknown): handle is string {
    return typeof unwrapHandle(this, handle) === "string";
  }
  isNull(handle: unknown): handle is null {
    return unwrapHandle(this, handle) === null;
  }
  isUndefined(handle: unknown): handle is undefined {
    return unwrapHandle(this, handle) === void 0;
  }
  isObject(handle: unknown): handle is object {
    const value = unwrapHandle(this, handle);
    return typeof value === "object" && value !== null;
  }
  isArray(handle: unknown): handle is Array<any> {
    return Array.isArray(unwrapHandle(this, handle));
  }
  isArrayBuffer(handle: unknown): handle is ArrayBuffer {
    return unwrapHandle(this, handle) instanceof ArrayBuffer;
  }
  isUint8Array(handle: unknown): handle is Uint8Array {
    return unwrapHandle(this, handle) instanceof Uint8Array;
  }

  // eslint-disable-next-line ts/no-unsafe-function-type
  isFunction(handle: unknown): handle is Function {
    return typeof unwrapHandle(this, handle) === "function";
  }
  shallowFreezeObject(handle: INoOpVm<object>): void {
    Object.freeze(unwrapHandle(this, handle));
  }
  getNumber(handle: unknown): number {
    const value = unwrapHandle(this, handle);
    if (typeof value !== "number") throw new Error("Value is not a number");
    return value;
  }
  getBoolean(handle: unknown): boolean {
    const value = unwrapHandle(this, handle);
    if (typeof value !== "boolean") throw new Error("Value is not a boolean");
    return value;
  }
  getString(handle: unknown): string {
    const value = unwrapHandle(this, handle);
    if (typeof value !== "string") throw new Error("Value is not a string");
    return value;
  }
  getArrayBuffer(handle: unknown): ArrayBuffer {
    if (!this.isArrayBuffer(handle)) throw new Error("Value is not a ArrayBuffer");
    return ArrayBuffer.prototype.slice.call(unwrapHandle(this, handle), 0);
  }
  getUint8Array(handle: unknown): Uint8Array {
    if (!this.isUint8Array(handle)) throw new Error("Value is not a Uint8Array");
    return new Uint8Array(unwrapHandle(this, handle));
  }
  toNumber(handle: any): number {
    const value = unwrapHandle(this, handle);
    try {
      return +value;
    } catch (err) {
      throw new PluginError(this, wrapHandle(this, err));
    }
  }
  toBoolean(handle: unknown): boolean {
    const value = unwrapHandle(this, handle);
    try {
      return !!value;
    } catch (err) {
      throw new PluginError(this, wrapHandle(this, err));
    }
  }
  toString(handle: unknown): string {
    const value = unwrapHandle(this, handle);
    try {
      return `${value}`;
    } catch (err) {
      throw new PluginError(this, wrapHandle(this, err));
    }
  }
  newNumber(value: unknown): INoOpVm<number> {
    if (typeof value !== "number") throw new Error("Value is not a number");
    return wrapHandle(this, value);
  }
  newBoolean(value: unknown): INoOpVm<boolean> {
    if (typeof value !== "boolean") throw new Error("Value is not a boolean");
    return wrapHandle(this, value);
  }
  newString(value: unknown): INoOpVm<string> {
    if (typeof value !== "string") throw new Error("Value is not a string");
    return wrapHandle(this, value);
  }
  newSymbol(value: unknown): INoOpVm<symbol> {
    if (typeof value !== "string") throw new Error("Value is not a string");
    return wrapHandle(this, Symbol(value));
  }
  newObject<T = any>(protoHandle?: INoOpVm<object>): INoOpVm<T> {
    if (!protoHandle) return wrapHandle(this, {} as T);
    try {
      const proto = unwrapHandle<object>(this, protoHandle);
      return wrapHandle(this, Object.create(proto));
    } catch (err) {
      throw new PluginError(this, wrapHandle(this, err));
    }
  }
  newArray<T = any>(): INoOpVm<T[]> {
    return wrapHandle(this, []);
  }
  newArrayBuffer(value: ArrayBuffer): INoOpVm<ArrayBuffer> {
    if (Object.prototype.toString.call(value) === "[object ArrayBuffer]") return wrapHandle(this, ArrayBuffer.prototype.slice.call(value, 0));
    throw new Error("Value is not an ArrayBuffer");
  }
  newUint8Array(value: Uint8Array): INoOpVm<Uint8Array> {
    if (Object.prototype.toString.call(value) === "[object Uint8Array]" && ArrayBuffer.isView(value)) {
      return wrapHandle(this, new Uint8Array(value));
    }
    throw new Error("Value is not an Uint8Array");
  }
  isEqual(a: INoOpVm<any>, b: INoOpVm<any>): boolean {
    return unwrapHandle(this, a) === unwrapHandle(this, b);
  }
  newFunction<TArgs extends any[] = any[], TReturn = any>(name: string, fn: FunctionWrapper<TArgs, TReturn>): INoOpVm<(...args: any[]) => any> {
    const vm = this;
    const wrappedFn = function (this: any, ...args: any[]) {
      let result;
      const thisHandle = wrapHandle(vm, this);
      const argHandles = args.map(arg => wrapHandle(vm, arg));
      while (argHandles.length < fn.length) argHandles.push(vm.undefined);
      try {
        result = fn.call(thisHandle, ...argHandles);
      } catch (err: any) {
        const msg = err && err.message ? `: ${err.message}` : "";
        return new Error(`in ${name}${msg}`);
      }
      return result === void 0 ? void 0 : unwrapHandle(vm, result);
    };
    Object.defineProperty(wrappedFn, "name", {
      writable: false,
      value: name
    });
    return wrapHandle(vm, wrappedFn);
  }
  newPrototype(name: string): INoOpVm<object> | undefined {
    if (!this.canEval) return wrapHandle(this, function () {}.prototype);
    const result = this.evalTrustedCode(`(function ${name}() {}).prototype`);
    if (result.type !== "SUCCESS") throw new Error("Internal eval error");
    return result.handle;
  }
  newJsxRenderer(component: any): INoOpVm<any> {
    return wrapHandle(this, createComponentRenderer(component));
  }
  newPromise<T = any>(): PromiseHandlers<T> {
    let resolve: (v: any) => void = () => {};
    let reject: (e: any) => void = () => {};
    const promise = new Promise<T>((res, rej) => {
      resolve = res;
      reject = rej;
    });
    return {
      promise: wrapHandle(this, promise),
      resolve: (handle: INoOpVm<T>) => resolve(unwrapHandle(this, handle)),
      reject: (handle: INoOpVm<any>) => reject(unwrapHandle(this, handle))
    };
  }
  getKeys(handle: INoOpVm<object>): string[] {
    return Object.keys(unwrapHandle(this, handle));
  }
  getProp<T = any>(objHandle: INoOpVm<any>, prop: string): INoOpVm<T> {
    const obj = unwrapHandle(this, objHandle);
    try {
      return wrapHandle(this, obj[prop]);
    } catch (err) {
      throw new PluginError(this, wrapHandle(this, err));
    }
  }
  setProp<T = any>(objHandle: INoOpVm<object>, prop: string, valueHandle: INoOpVm<T>): void {
    const obj = unwrapHandle(this, objHandle);
    const value = unwrapHandle(this, valueHandle);
    try {
      obj[prop] = value;
    } catch (err) {
      throw new PluginError(this, wrapHandle(this, err));
    }
  }
  defineProp<T = any>(objHandle: INoOpVm<object>, prop: string, desc: PropertyDescriptor<T>): void {
    const descriptor: any = {};
    if ("configurable" in desc) descriptor.configurable = !!desc.configurable;
    if ("enumerable" in desc) descriptor.enumerable = !!desc.enumerable;
    if ("writable" in desc) descriptor.writable = !!desc.writable;
    if ("value" in desc && desc.value) descriptor.value = unwrapHandle(this, desc.value);
    if ("get" in desc && desc.get) {
      descriptor.get = unwrapHandle(this, this.newFunction(`get_${prop}`, desc.get));
    }
    if ("set" in desc && desc.set) {
      descriptor.set = unwrapHandle(this, this.newFunction(`set_${prop}`, desc.set));
    }
    Object.defineProperty(unwrapHandle(this, objHandle), prop, descriptor);
  }
  callFunction<T = any>(fnHandle: INoOpVm<Fn>, thisHandle: INoOpVm<any>, ...argHandles: INoOpVm<any>[]): CallResult<T> {
    const fn = unwrapHandle(this, fnHandle);
    const thisArg = unwrapHandle(this, thisHandle);
    const args = argHandles.map(arg => unwrapHandle(this, arg));
    try {
      this.executionDepth++;
      const result = APPLY.call(fn, thisArg, args);
      return {
        type: "SUCCESS",
        handle: wrapHandle(this, result)
      };
    } catch (err) {
      console.error(err);
      const error = new PluginError(this, wrapHandle(this, err));
      if (this.executionDepth === 1) this.errorHandler(error);
      return {
        type: "FAILURE",
        error
      };
    } finally {
      this.executionDepth--;
    }
  }
  callConstructor<T = any>(constructorHandle: INoOpVm<(...args: any[]) => T>, ...argHandles: INoOpVm<any>[]): CallResult<T> {
    const constructFn = wrapHandle(this, (Ctor: any, ...args: any[]) => new Ctor(...args));
    return this.callFunction(constructFn, this.undefined, constructorHandle, ...argHandles);
  }
  evalCode<T = any>(code: string): EvalResult<T> {
    try {
      this.executionDepth++;
      const result = eval(`"use strict";\n${code}`);
      return {
        type: "SUCCESS",
        handle: wrapHandle(this, result)
      };
    } catch (err) {
      console.error(err);
      const error = new PluginError(this, wrapHandle(this, err));
      if (this.executionDepth === 1) this.errorHandler(error);
      return {
        type: "FAILURE",
        error
      };
    } finally {
      this.executionDepth--;
    }
  }
  evalTopLevelCode(code: string): EvalResult<undefined> {
    const result = this.evalCode(code);
    if (result.type === "SUCCESS") result.handle = this.undefined;
    return result;
  }
  evalTrustedCode<T = any>(code: string): EvalResult<T> {
    return this.evalCode(code);
  }
  evalTrustedTopLevelCode(code: string): EvalResult<undefined> {
    return this.evalTopLevelCode(code);
  }
  setAbortHandler(_handler: VmErrorHandler): void {}
  setErrorHandler(handler: VmErrorHandler): void {
    this.errorHandler = handler;
  }
  getStats(): VmStats | null {
    return this._stats;
  }
  setStats(stats: VmStats | null): void {
    this._stats = stats;
  }
  destroy(): void {
    this[WAS_DESTROYED] = true;
  }
  isDestroyed(): boolean {
    return this[WAS_DESTROYED];
  }
  retainHandle(_handle: INoOpVm<any>): void {}
  releaseHandle(_handle: INoOpVm<any>): void {}
}
export class ScopedNoOpVm extends NoOpVm {
  scope: Record<string, any>;
  isTrusted: boolean;
  constructor() {
    super();
    this.vmType = "scopednoopvm";
    this.scope = {};
    this.isTrusted = false;
    this.global = wrapHandle(this, this.scope);
  }
  evalTrustedCode<T = any>(code: string): EvalResult<T> {
    this.isTrusted = true;
    try {
      return this.evalCode(code);
    } finally {
      this.isTrusted = false;
    }
  }
  evalTrustedTopLevelCode(code: string): EvalResult<undefined> {
    this.isTrusted = true;
    try {
      return this.evalTopLevelCode(code);
    } finally {
      this.isTrusted = false;
    }
  }
  evalCode<T = any>(code: string): EvalResult<T> {
    if (!this.isTrusted) throw new Error("Scoped NoOp Vm can only run trusted code");
    const {
      figma
    } = this.scope;
    const prevFigma = window.figma;
    window.figma = figma;
    try {
      // Assign scope variables to global context temporarily
      const originalValues: Record<string, any> = {};
      for (const [key, value] of Object.entries(this.scope)) {
        originalValues[key] = (window as any)[key];
        (window as any)[key] = value;
      }
      const result = (0, eval)(code);

      // Update scope with any changes made during eval
      for (const key of Object.keys(this.scope)) {
        this.scope[key] = (window as any)[key];
      }

      // Restore original global values
      for (const [key, value] of Object.entries(originalValues)) {
        if (value === undefined) {
          delete (window as any)[key];
        } else {
          (window as any)[key] = value;
        }
      }
      return {
        type: "SUCCESS",
        handle: wrapHandle(this, result)
      };
    } catch (err) {
      const error = new PluginError(this, wrapHandle(this, err));
      return {
        type: "FAILURE",
        error
      };
    } finally {
      window.figma = prevFigma;
    }
  }
}
export function createPluginContext(): PluginContext {
  const vm = new ScopedNoOpVm();
  const shutdownActions: Array<() => void> = [() => vm.destroy()];
  const runShutdownActions = () => {
    let firstError;
    for (const action of shutdownActions) {
      try {
        action();
      } catch (err) {
        firstError ||= err;
        console.error(`runShutdownActions error: ${err}`);
      }
    }
    shutdownActions.length = 0;
    if (firstError) throw firstError;
  };
  return {
    addShutdownAction: (action: () => void) => {
      if (!shutdownActions.includes(action)) shutdownActions.push(action);
    },
    closePlugin: () => {
      runShutdownActions();
      return Promise.resolve();
    },
    noOpVm: vm
  };
}