import { useMemo } from "react";
import { tW, W5, zy, B6 } from "../vendor/130505";
import { Ay } from "../905/612521";
import { serializeQuery } from "../905/634134";
import { captureMessage } from "../905/11";
import { iY, p_ } from "../figma_app/598412";
export function $$d0(e) {}
export class $$c8 {
  get params() {
    return this._params;
  }
  get search() {
    return this._search;
  }
  get state() {
    return this._state;
  }
  constructor(...e) {
    let [t, r, n] = e;
    this._params = t ?? {};
    this._search = r ?? {};
    this._state = n ?? {};
  }
  copyWith(e, t, r) {
    return new this.constructor({
      ...this._params,
      ...e
    }, {
      ...this._search,
      ...t
    }, {
      ...this._state,
      ...r
    });
  }
  pushToHistory() {
    Ay.push(this.href, this.state);
  }
  replaceInHistory() {
    Ay.replace(this.href, this.state);
  }
  get pathname() {
    let e = this.constructor;
    return tW(e.path, "serializeParams" in e ? e.serializeParams(this._params) : this._params);
  }
  get queryString() {
    let e = Object.fromEntries(Object.entries(this._search).filter(([, e]) => void 0 !== e));
    if (0 === Object.keys(e).length) return "";
    let t = this.constructor;
    let r = "encodeQueryString" in t ? t.encodeQueryString ?? serializeQuery : serializeQuery;
    return `?${r(e)}`;
  }
  get href() {
    return `${this.pathname}${this.queryString}`;
  }
  get to() {
    return {
      pathname: this.pathname,
      search: this.queryString,
      state: this._state
    };
  }
}
export function $$u4(e) {
  var t;
  (t = class extends e {
    get pathname() {
      return super.pathname.replace("/community", iY());
    }
  }).localizedPaths = p_(e.path);
  return t;
}
function p(e) {
  W5("localizedPaths" in e ? e.localizedPaths : e.path) || function (e) {
    let t = `Current location does not match the provided CommunityRoute: ${e.displayName ?? e.constructor.name}`;
    captureMessage(t);
    console.warn(t, "This could indicate a bug in the route definition or usage.");
  }(e);
}
export function $$_11(e, t = !1) {
  let r = W5({
    path: "localizedPaths" in e ? e.localizedPaths : e.path,
    exact: t
  });
  return useMemo(() => null !== r, [r]);
}
export function $$h3(e) {
  let t = W5("localizedPaths" in e ? e.localizedPaths : e.path);
  return useMemo(() => {
    if (null === t) return null;
    try {
      return "deserializeParams" in e ? e.deserializeParams(t.params) : t.params;
    } catch (e) {
      return null;
    }
  }, [e, t]);
}
export function $$m2(e) {
  p(e);
  let t = $$h3(e);
  return useMemo(() => t ?? {}, [t]);
}
export function $$g10(e) {
  let t = W5("localizedPaths" in e ? e.localizedPaths : e.path);
  let r = zy();
  return useMemo(() => {
    if (null === t) return null;
    try {
      return "parseQueryString" in e ? e.parseQueryString(r.search) : {};
    } catch (e) {
      return null;
    }
  }, [e, r.search, t]);
}
export function $$f1(e) {
  p(e);
  let t = $$g10(e);
  return useMemo(() => t ?? {}, [t]);
}
function E(e) {
  let t = W5("localizedPaths" in e ? e.localizedPaths : e.path);
  let r = zy();
  return null === t ? null : r.state ?? {};
}
export function $$y7(e) {
  let t = $$h3(e);
  let r = $$g10(e);
  let i = E(e);
  return useMemo(() => null === t || null === r || null === i ? null : new e(t, r, i), [e, t, r, i]);
}
export function $$b5(e) {
  let t = $$m2(e);
  let r = $$f1(e);
  let i = function (e) {
    p(e);
    let t = E(e);
    return useMemo(() => t ?? {}, [t]);
  }(e);
  return useMemo(() => new e(t, r, i), [e, t, r, i]);
}
export function $$T9(e) {
  return function (t, r = {}) {
    for (let n of "localizedPaths" in e ? e.localizedPaths : [e.path]) {
      let a = B6(t, {
        ...r,
        path: n
      });
      if (a) return {
        ...a,
        params: "deserializeParams" in e ? e.deserializeParams(a.params) : a.params
      };
    }
    return null;
  };
}
export function $$I6(e, t) {
  return `${e}${t}`;
}
export const Ac = $$d0;
export const NY = $$f1;
export const RA = $$m2;
export const Rd = $$h3;
export const Wk = $$u4;
export const a4 = $$b5;
export const aV = $$I6;
export const ed = $$y7;
export const nS = $$c8;
export const pO = $$T9;
export const vA = $$g10;
export const ye = $$_11;