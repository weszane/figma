import { U } from "../vendor/150351";
import { j } from "../vendor/637177";
import { k } from "../vendor/38262";
import { II, v_ } from "../vendor/284502";
export class $$h1 extends k {
  constructor(e) {
    super();
    this.options = {
      ...e.defaultOptions,
      ...e.options
    };
    this.mutationId = e.mutationId;
    this.mutationCache = e.mutationCache;
    this.logger = e.logger || U;
    this.observers = [];
    this.state = e.state || $$d0();
    this.updateCacheTime(this.options.cacheTime);
    this.scheduleGc();
  }
  get meta() {
    return this.options.meta;
  }
  setState(e) {
    this.dispatch({
      type: "setState",
      state: e
    });
  }
  addObserver(e) {
    -1 === this.observers.indexOf(e) && (this.observers.push(e), this.clearGcTimeout(), this.mutationCache.notify({
      type: "observerAdded",
      mutation: this,
      observer: e
    }));
  }
  removeObserver(e) {
    this.observers = this.observers.filter(r => r !== e);
    this.scheduleGc();
    this.mutationCache.notify({
      type: "observerRemoved",
      mutation: this,
      observer: e
    });
  }
  optionalRemove() {
    this.observers.length || ("loading" === this.state.status ? this.scheduleGc() : this.mutationCache.remove(this));
  }
  continue() {
    var e;
    var r;
    return null != (e = null == (r = this.retryer) ? void 0 : r.$$continue()) ? e : this.execute();
  }
  async execute() {
    var e;
    var r;
    var n;
    var i;
    var s;
    var o;
    var h;
    var d;
    var p;
    var g;
    var m;
    var v;
    var y;
    var b;
    var O;
    var x;
    let w = () => {
      var e;
      this.retryer = II({
        fn: () => this.options.mutationFn ? this.options.mutationFn(this.state.variables) : Promise.reject("No mutationFn found"),
        onFail: (e, r) => {
          this.dispatch({
            type: "failed",
            failureCount: e,
            error: r
          });
        },
        onPause: () => {
          this.dispatch({
            type: "pause"
          });
        },
        onContinue: () => {
          this.dispatch({
            type: "continue"
          });
        },
        retry: null != (e = this.options.retry) ? e : 0,
        retryDelay: this.options.retryDelay,
        networkMode: this.options.networkMode
      });
      return this.retryer.promise;
    };
    let k = "loading" === this.state.status;
    try {
      if (!k) {
        this.dispatch({
          type: "loading",
          variables: this.options.variables
        });
        await (null == (h = (d = this.mutationCache.config).onMutate) ? void 0 : h.call(d, this.state.variables, this));
        let e = await (null == (p = (g = this.options).onMutate) ? void 0 : p.call(g, this.state.variables));
        e !== this.state.context && this.dispatch({
          type: "loading",
          context: e,
          variables: this.state.variables
        });
      }
      let a = await w();
      await (null == (e = (r = this.mutationCache.config).onSuccess) ? void 0 : e.call(r, a, this.state.variables, this.state.context, this));
      await (null == (n = (i = this.options).onSuccess) ? void 0 : n.call(i, a, this.state.variables, this.state.context));
      await (null == (s = (o = this.options).onSettled) ? void 0 : s.call(o, a, null, this.state.variables, this.state.context));
      this.dispatch({
        type: "success",
        data: a
      });
      return a;
    } catch (e) {
      try {
        await (null == (m = (v = this.mutationCache.config).onError) ? void 0 : m.call(v, e, this.state.variables, this.state.context, this));
        await (null == (y = (b = this.options).onError) ? void 0 : y.call(b, e, this.state.variables, this.state.context));
        await (null == (O = (x = this.options).onSettled) ? void 0 : O.call(x, void 0, e, this.state.variables, this.state.context));
        return e;
      } finally {
        this.dispatch({
          type: "error",
          error: e
        });
      }
    }
  }
  dispatch(e) {
    let r = r => {
      switch (e.type) {
        case "failed":
          return {
            ...r,
            failureCount: e.failureCount,
            failureReason: e.error
          };
        case "pause":
          return {
            ...r,
            isPaused: !0
          };
        case "continue":
          return {
            ...r,
            isPaused: !1
          };
        case "loading":
          return {
            ...r,
            context: e.context,
            data: void 0,
            failureCount: 0,
            failureReason: null,
            error: null,
            isPaused: !v_(this.options.networkMode),
            status: "loading",
            variables: e.variables
          };
        case "success":
          return {
            ...r,
            data: e.data,
            failureCount: 0,
            failureReason: null,
            error: null,
            status: "success",
            isPaused: !1
          };
        case "error":
          return {
            ...r,
            data: void 0,
            error: e.error,
            failureCount: r.failureCount + 1,
            failureReason: e.error,
            isPaused: !1,
            status: "error"
          };
        case "setState":
          return {
            ...r,
            ...e.state
          };
      }
    };
    this.state = r(this.state);
    j.batch(() => {
      this.observers.forEach(r => {
        r.onMutationUpdate(e);
      });
      this.mutationCache.notify({
        mutation: this,
        type: "updated",
        action: e
      });
    });
  }
}
export function $$d0() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0
  };
}
export const $ = $$d0;
export const s = $$h1;