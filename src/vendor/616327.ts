import { uA, h1 } from "../vendor/291207";
import { FA, T9, bD, g as _$$g, Uj, zW, eX } from "../vendor/977969";
import { P2 } from "../vendor/179215";
var i;
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
let o = [];
!function(e) {
  e[e.DEBUG = 0] = "DEBUG";
  e[e.VERBOSE = 1] = "VERBOSE";
  e[e.INFO = 2] = "INFO";
  e[e.WARN = 3] = "WARN";
  e[e.ERROR = 4] = "ERROR";
  e[e.SILENT = 5] = "SILENT";
}(i || (i = {}));
let a = {
  debug: i.DEBUG,
  verbose: i.VERBOSE,
  info: i.INFO,
  warn: i.WARN,
  error: i.ERROR,
  silent: i.SILENT
};
let h = i.INFO;
let d = {
  [i.DEBUG]: "log",
  [i.VERBOSE]: "log",
  [i.INFO]: "info",
  [i.WARN]: "warn",
  [i.ERROR]: "error"
};
let p = (e, r, ...n) => {
  if (r < e.logLevel) return;
  let i = new Date().toISOString();
  let s = d[r];
  if (s) console[s](`[${i}]  ${e.name}:`, ...n); else throw Error(`Attempted to log a message with an invalid logType (value: ${r})`);
};
class g {
  constructor(e) {
    this.name = e;
    this._logLevel = h;
    this._logHandler = p;
    this._userLogHandler = null;
    o.push(this);
  }
  get logLevel() {
    return this._logLevel;
  }
  set logLevel(e) {
    if (!(e in i)) throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);
    this._logLevel = e;
  }
  setLogLevel(e) {
    this._logLevel = "string" == typeof e ? a[e] : e;
  }
  get logHandler() {
    return this._logHandler;
  }
  set logHandler(e) {
    if ("function" != typeof e) throw TypeError("Value assigned to `logHandler` must be a function");
    this._logHandler = e;
  }
  get userLogHandler() {
    return this._userLogHandler;
  }
  set userLogHandler(e) {
    this._userLogHandler = e;
  }
  debug(...e) {
    this._userLogHandler && this._userLogHandler(this, i.DEBUG, ...e);
    this._logHandler(this, i.DEBUG, ...e);
  }
  log(...e) {
    this._userLogHandler && this._userLogHandler(this, i.VERBOSE, ...e);
    this._logHandler(this, i.VERBOSE, ...e);
  }
  info(...e) {
    this._userLogHandler && this._userLogHandler(this, i.INFO, ...e);
    this._logHandler(this, i.INFO, ...e);
  }
  warn(...e) {
    this._userLogHandler && this._userLogHandler(this, i.WARN, ...e);
    this._logHandler(this, i.WARN, ...e);
  }
  error(...e) {
    this._userLogHandler && this._userLogHandler(this, i.ERROR, ...e);
    this._logHandler(this, i.ERROR, ...e);
  }
}
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class y {
  constructor(e) {
    this.container = e;
  }
  getPlatformInfoString() {
    return this.container.getProviders().map(e => {
      if (!b(e)) return null;
      {
        let r = e.getImmediate();
        return `${r.library}/${r.version}`;
      }
    }).filter(e => e).join(" ");
  }
}
function b(e) {
  let r = e.getComponent();
  return r?.type === "VERSION";
}
let O = "@firebase/app";
let x = "0.13.2";
let w = new g("@firebase/app");
let k = "[DEFAULT]";
let _ = {
  [O]: "fire-core",
  "@firebase/app-compat": "fire-core-compat",
  "@firebase/analytics": "fire-analytics",
  "@firebase/analytics-compat": "fire-analytics-compat",
  "@firebase/app-check": "fire-app-check",
  "@firebase/app-check-compat": "fire-app-check-compat",
  "@firebase/auth": "fire-auth",
  "@firebase/auth-compat": "fire-auth-compat",
  "@firebase/database": "fire-rtdb",
  "@firebase/data-connect": "fire-data-connect",
  "@firebase/database-compat": "fire-rtdb-compat",
  "@firebase/functions": "fire-fn",
  "@firebase/functions-compat": "fire-fn-compat",
  "@firebase/installations": "fire-iid",
  "@firebase/installations-compat": "fire-iid-compat",
  "@firebase/messaging": "fire-fcm",
  "@firebase/messaging-compat": "fire-fcm-compat",
  "@firebase/performance": "fire-perf",
  "@firebase/performance-compat": "fire-perf-compat",
  "@firebase/remote-config": "fire-rc",
  "@firebase/remote-config-compat": "fire-rc-compat",
  "@firebase/storage": "fire-gcs",
  "@firebase/storage-compat": "fire-gcs-compat",
  "@firebase/firestore": "fire-fst",
  "@firebase/firestore-compat": "fire-fst-compat",
  "@firebase/ai": "fire-vertex",
  "fire-js": "fire-js",
  firebase: "fire-js-all"
};
let S = new Map();
let E = new Map();
let A = new Map();
function C(e, r) {
  try {
    e.container.addComponent(r);
  } catch (n) {
    w.debug(`Component ${r.name} failed to register with FirebaseApp ${e.name}`, n);
  }
}
export function $$T1(e) {
  let r = e.name;
  if (A.has(r)) {
    w.debug(`There were multiple attempts to register component ${r}.`);
    return !1;
  }
  for (let n of (A.set(r, e), S.values())) C(n, e);
  for (let r of E.values()) C(r, e);
  return !0;
}
export function $$I0(e, r) {
  let n = e.container.getProvider("heartbeat").getImmediate({
    optional: !0
  });
  n && n.triggerHeartbeat();
  return e.container.getProvider(r);
}
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
let P = {
  "no-app": "No Firebase App '{$appName}' has been created - call initializeApp() first",
  "bad-app-name": "Illegal App name: '{$appName}'",
  "duplicate-app": "Firebase App named '{$appName}' already exists with different options or config",
  "app-deleted": "Firebase App named '{$appName}' already deleted",
  "server-app-deleted": "Firebase Server App has been deleted",
  "no-options": "Need to provide options, when not being deployed to hosting via source.",
  "invalid-app-argument": "firebase.{$appName}() takes either no argument or a Firebase App instance.",
  "invalid-log-argument": "First argument to `onLog` must be null or a function.",
  "idb-open": "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
  "idb-get": "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
  "idb-set": "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
  "idb-delete": "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",
  "finalization-registry-not-supported": "FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",
  "invalid-server-app-environment": "FirebaseServerApp is not for use in browser environments."
};
let R = new FA("app", "Firebase", P);
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class M {
  constructor(e, r, n) {
    this._isDeleted = !1;
    this._options = Object.assign({}, e);
    this._config = Object.assign({}, r);
    this._name = r.name;
    this._automaticDataCollectionEnabled = r.automaticDataCollectionEnabled;
    this._container = n;
    this.container.addComponent(new uA("app", () => this, "PUBLIC"));
  }
  get automaticDataCollectionEnabled() {
    this.checkDestroyed();
    return this._automaticDataCollectionEnabled;
  }
  set automaticDataCollectionEnabled(e) {
    this.checkDestroyed();
    this._automaticDataCollectionEnabled = e;
  }
  get name() {
    this.checkDestroyed();
    return this._name;
  }
  get options() {
    this.checkDestroyed();
    return this._options;
  }
  get config() {
    this.checkDestroyed();
    return this._config;
  }
  get container() {
    return this._container;
  }
  get isDeleted() {
    return this._isDeleted;
  }
  set isDeleted(e) {
    this._isDeleted = e;
  }
  checkDestroyed() {
    if (this.isDeleted) throw R.create("app-deleted", {
      appName: this._name
    });
  }
}
export function $$D3(e, r = {}) {
  let n = e;
  "object" != typeof r && (r = {
    name: r
  });
  let i = Object.assign({
    name: k,
    automaticDataCollectionEnabled: !0
  }, r);
  let o = i.name;
  if ("string" != typeof o || !o) throw R.create("bad-app-name", {
    appName: String(o)
  });
  if (n || (n = T9()), !n) throw R.create("no-options");
  let a = S.get(o);
  if (a) {
    if (bD(n, a.options) && bD(i, a.config)) return a;
    throw R.create("duplicate-app", {
      appName: o
    });
  }
  let h = new h1(o);
  for (let e of A.values()) h.addComponent(e);
  let d = new M(n, i, h);
  S.set(o, d);
  return d;
}
export function $$N2(e = k) {
  let r = S.get(e);
  if (!r && e === k && T9()) return $$D3();
  if (!r) throw R.create("no-app", {
    appName: e
  });
  return r;
}
export function $$$4(e, r, n) {
  var i;
  let o = null !== (i = _[e]) && void 0 !== i ? i : e;
  n && (o += `-${n}`);
  let a = o.match(/\s|\//);
  let h = r.match(/\s|\//);
  if (a || h) {
    let e = [`Unable to register library "${o}" with version "${r}":`];
    a && e.push(`library name "${o}" contains illegal characters (whitespace or "/")`);
    a && h && e.push("and");
    h && e.push(`version name "${r}" contains illegal characters (whitespace or "/")`);
    w.warn(e.join(" "));
    return;
  }
  $$T1(new uA(`${o}-version`, () => ({
    library: o,
    version: r
  }), "VERSION"));
}
/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
let L = "firebase-heartbeat-database";
let j = 1;
let z = "firebase-heartbeat-store";
let Z = null;
function F() {
  Z || (Z = P2(L, j, {
    upgrade: (e, r) => {
      if (0 === r) try {
        e.createObjectStore(z);
      } catch (e) {
        console.warn(e);
      }
    }
  }).catch(e => {
    throw R.create("idb-open", {
      originalErrorMessage: e.message
    });
  }));
  return Z;
}
async function U(e) {
  try {
    let r = (await F()).transaction(z);
    let n = await r.objectStore(z).get(V(e));
    await r.done;
    return n;
  } catch (e) {
    if (e instanceof _$$g) w.warn(e.message); else {
      let r = R.create("idb-get", {
        originalErrorMessage: e?.message
      });
      w.warn(r.message);
    }
  }
}
async function Q(e, r) {
  try {
    let n = (await F()).transaction(z, "readwrite");
    let i = n.objectStore(z);
    await i.put(r, V(e));
    await n.done;
  } catch (e) {
    if (e instanceof _$$g) w.warn(e.message); else {
      let r = R.create("idb-set", {
        originalErrorMessage: e?.message
      });
      w.warn(r.message);
    }
  }
}
function V(e) {
  return `${e.name}!${e.options.appId}`;
} /**
  * @license
  * Copyright 2021 Google LLC
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *   http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  */
let B = 1024;
let q = 30;
class W {
  constructor(e) {
    this.container = e;
    this._heartbeatsCache = null;
    let r = this.container.getProvider("app").getImmediate();
    this._storage = new X(r);
    this._heartbeatsCachePromise = this._storage.read().then(e => (this._heartbeatsCache = e, e));
  }
  async triggerHeartbeat() {
    var e;
    var r;
    try {
      let n = this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString();
      let i = Y();
      if (this._heartbeatsCache?.heartbeats == null && (this._heartbeatsCache = await this._heartbeatsCachePromise, this._heartbeatsCache?.heartbeats == null) || this._heartbeatsCache.lastSentHeartbeatDate === i || this._heartbeatsCache.heartbeats.some(e => e.date === i)) return;
      if (this._heartbeatsCache.heartbeats.push({
        date: i,
        agent: n
      }), this._heartbeatsCache.heartbeats.length > q) {
        let e = K(this._heartbeatsCache.heartbeats);
        this._heartbeatsCache.heartbeats.splice(e, 1);
      }
      return this._storage.overwrite(this._heartbeatsCache);
    } catch (e) {
      w.warn(e);
    }
  }
  async getHeartbeatsHeader() {
    var e;
    try {
      if (null === this._heartbeatsCache && (await this._heartbeatsCachePromise), this._heartbeatsCache?.heartbeats == null || 0 === this._heartbeatsCache.heartbeats.length) return "";
      let r = Y();
      let {
        heartbeatsToSend,
        unsentEntries
      } = G(this._heartbeatsCache.heartbeats);
      let s = Uj(JSON.stringify({
        version: 2,
        heartbeats: heartbeatsToSend
      }));
      this._heartbeatsCache.lastSentHeartbeatDate = r;
      unsentEntries.length > 0 ? (this._heartbeatsCache.heartbeats = unsentEntries, await this._storage.overwrite(this._heartbeatsCache)) : (this._heartbeatsCache.heartbeats = [], this._storage.overwrite(this._heartbeatsCache));
      return s;
    } catch (e) {
      w.warn(e);
      return "";
    }
  }
}
function Y() {
  return new Date().toISOString().substring(0, 10);
}
function G(e, r = B) {
  let n = [];
  let i = e.slice();
  for (let s of e) {
    let e = n.find(e => e.agent === s.agent);
    if (e) {
      if (e.dates.push(s.date), H(n) > r) {
        e.dates.pop();
        break;
      }
    } else if (n.push({
      agent: s.agent,
      dates: [s.date]
    }), H(n) > r) {
      n.pop();
      break;
    }
    i = i.slice(1);
  }
  return {
    heartbeatsToSend: n,
    unsentEntries: i
  };
}
class X {
  constructor(e) {
    this.app = e;
    this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck();
  }
  async runIndexedDBEnvironmentCheck() {
    return !!zW() && eX().then(() => !0).catch(() => !1);
  }
  async read() {
    if (!(await this._canUseIndexedDBPromise)) return {
      heartbeats: []
    };
    {
      let e = await U(this.app);
      return e?.heartbeats ? e : {
        heartbeats: []
      };
    }
  }
  async overwrite(e) {
    var r;
    if (await this._canUseIndexedDBPromise) {
      let n = await this.read();
      return Q(this.app, {
        lastSentHeartbeatDate: null !== (r = e.lastSentHeartbeatDate) && void 0 !== r ? r : n.lastSentHeartbeatDate,
        heartbeats: e.heartbeats
      });
    }
  }
  async add(e) {
    var r;
    if (await this._canUseIndexedDBPromise) {
      let n = await this.read();
      return Q(this.app, {
        lastSentHeartbeatDate: null !== (r = e.lastSentHeartbeatDate) && void 0 !== r ? r : n.lastSentHeartbeatDate,
        heartbeats: [...n.heartbeats, ...e.heartbeats]
      });
    }
  }
}
function H(e) {
  return Uj(JSON.stringify({
    version: 2,
    heartbeats: e
  })).length;
}
function K(e) {
  if (0 === e.length) return -1;
  let r = 0;
  let n = e[0].date;
  for (let i = 1; i < e.length; i++) e[i].date < n && (n = e[i].date, r = i);
  return r;
}
!
  /**
  * @license
  * Copyright 2019 Google LLC
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *   http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  */
  function(e) {
    $$T1(new uA("platform-logger", e => new y(e), "PRIVATE"));
    $$T1(new uA("heartbeat", e => new W(e), "PRIVATE"));
    $$$4(O, x, "");
    $$$4(O, x, "esm2017");
    $$$4("fire-js", "");
  }(0);
export const j6 = $$I0;
export const om = $$T1;
export const Sx = $$N2;
export const Wp = $$D3;
export const KO = $$$4; 
