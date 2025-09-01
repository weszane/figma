import { createDeferredPromise } from "../905/874553";
export class $$r0 {
  retainFn;
  deferred;
  unsub;
  constructor(e) {
    this.retainFn = e;
    this.unsub = null;
    this.createDeferred = () => {
      let e = createDeferredPromise();
      e.promise = e.promise.catch(() => { });
      return e;
    };
    this.getPromise = () => this.deferred.promise;
    this.resolve = () => {
      this.deferred?.resolve();
      this.deferred = this.createDeferred();
    };
    this.reject = e => {
      this.deferred?.reject(e);
      this.deferred = this.createDeferred();
    };
    this.registerPromise = e => {
      e.then(() => {
        this.resolve();
        this.deferred = this.createDeferred();
      }).catch(e => {
        this.reject(e);
        this.deferred = this.createDeferred();
      });
    };
    this.retain = () => {
      this.unsub || (this.unsub = this.retainFn());
      this.deferred.promise.$$finally(() => {
        setTimeout(() => this.release(), 6e3);
      });
    };
    this.release = () => {
      this.unsub?.();
      this.unsub = null;
    };
    this.deferred = this.createDeferred();
  }
  createDeferred;
  getPromise;
  resolve;
  reject;
  registerPromise;
  retain;
  release;
}
export const W = $$r0; 
