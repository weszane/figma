import { M } from "../vendor/821359";
import { O as GLOBAL_OBJ, B } from "../vendor/240444";
import { H as Scope } from "../vendor/341099";
import { Qg } from "../vendor/314131";
function getMainCarrier() {
  getSentryCarrier(GLOBAL_OBJ);
  return GLOBAL_OBJ;
}
function getSentryCarrier(e) {
  let n = e.__SENTRY__ = e.__SENTRY__ || {};
  n.version = n.version || M;
  return n[M] = n[M] || {};
}
class AsyncContextStack {
  constructor(e, n) {
    let i;
    let t;
    i = e || new Scope();
    t = n || new Scope();
    this._stack = [{
      scope: i
    }];
    this._isolationScope = t;
  }
  withScope(e) {
    let n;
    let i = this._pushScope();
    try {
      n = e(i);
    } catch (e) {
      this._popScope();
      return e;
    }
    return Qg(n) ? n.then(e => (this._popScope(), e), e => {
      this._popScope();
      return e;
    }) : (this._popScope(), n);
  }
  getClient() {
    return this.getStackTop().client;
  }
  getScope() {
    return this.getStackTop().scope;
  }
  getIsolationScope() {
    return this._isolationScope;
  }
  getStackTop() {
    return this._stack[this._stack.length - 1];
  }
  _pushScope() {
    let e = this.getScope().clone();
    this._stack.push({
      client: this.getClient(),
      scope: e
    });
    return e;
  }
  _popScope() {
    return !(this._stack.length <= 1) && !!this._stack.pop();
  }
}
function getAsyncContextStack() {
  let e = getSentryCarrier(getMainCarrier());
  return e.stack = e.stack || new AsyncContextStack(B("defaultCurrentScope", () => new Scope()), B("defaultIsolationScope", () => new Scope()));
}
function withScope1(e) {
  return getAsyncContextStack().withScope(e);
}
function withSetScope1(e, n) {
  let i = getAsyncContextStack();
  return i.withScope(() => (i.getStackTop().scope = e, n(e)));
}
function withIsolationScope1(e) {
  return getAsyncContextStack().withScope(() => e(getAsyncContextStack().getIsolationScope()));
}
function getStackAsyncContextStrategy(e) {
  let n = getSentryCarrier(e);
  return n.acs ? n.acs : {
    withIsolationScope: withIsolationScope1,
    withScope: withScope1,
    withSetScope: withSetScope1,
    withSetIsolationScope: (e, n) => withIsolationScope1(n),
    getCurrentScope: () => getAsyncContextStack().getScope(),
    getIsolationScope: () => getAsyncContextStack().getIsolationScope()
  };
}
export function getCurrentScope() {
  return getStackAsyncContextStrategy(getMainCarrier()).getCurrentScope();
}
export function getIsolationScope() {
  return getStackAsyncContextStrategy(getMainCarrier()).getIsolationScope();
}
export function getGlobalScope() {
  return B("globalScope", () => new Scope());
}
export function withScope(...e) {
  let n = getStackAsyncContextStrategy(getMainCarrier());
  if (2 === e.length) {
    let [i, t] = e;
    return i ? n.withSetScope(i, t) : n.withScope(t);
  }
  return n.withScope(e[0]);
}
export function getClient() {
  return getCurrentScope().getClient();
}
export const KU = getClient;
export const o5 = getCurrentScope;
export const m6 = getGlobalScope;
export const rm = getIsolationScope;
export const v4 = withScope;
