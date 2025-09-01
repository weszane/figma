import { M } from "../vendor/821359";
import { O, B } from "../vendor/240444";
import { H } from "../vendor/341099";
import { Qg } from "../vendor/314131";
function r() {
  a(O);
  return O;
}
function a(e) {
  let n = e.__SENTRY__ = e.__SENTRY__ || {};
  n.version = n.version || M;
  return n[M] = n[M] || {};
}
class l {
  constructor(e, n) {
    let i;
    let t;
    i = e || new H();
    t = n || new H();
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
function d() {
  let e = a(r());
  return e.stack = e.stack || new l(B("defaultCurrentScope", () => new H()), B("defaultIsolationScope", () => new H()));
}
function s(e) {
  return d().withScope(e);
}
function c(e, n) {
  let i = d();
  return i.withScope(() => (i.getStackTop().scope = e, n(e)));
}
function h(e) {
  return d().withScope(() => e(d().getIsolationScope()));
}
function p(e) {
  let n = a(e);
  return n.acs ? n.acs : {
    withIsolationScope: h,
    withScope: s,
    withSetScope: c,
    withSetIsolationScope: (e, n) => h(n),
    getCurrentScope: () => d().getScope(),
    getIsolationScope: () => d().getIsolationScope()
  };
}
export function $$g1() {
  return p(r()).getCurrentScope();
}
export function $$m3() {
  return p(r()).getIsolationScope();
}
export function $$_2() {
  return B("globalScope", () => new H());
}
export function $$b4(...e) {
  let n = p(r());
  if (2 === e.length) {
    let [i, t] = e;
    return i ? n.withSetScope(i, t) : n.withScope(t);
  }
  return n.withScope(e[0]);
}
export function $$y0() {
  return $$g1().getClient();
}
export const KU = $$y0;
export const o5 = $$g1;
export const m6 = $$_2;
export const rm = $$m3;
export const v4 = $$b4;