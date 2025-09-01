let i = () => void 0;
let s = function(e) {
  let r = [];
  let n = 0;
  for (let i = 0; i < e.length; i++) {
    let s = e.charCodeAt(i);
    s < 128 ? r[n++] = s : (s < 2048 ? r[n++] = s >> 6 | 192 : ((64512 & s) == 55296 && i + 1 < e.length && (64512 & e.charCodeAt(i + 1)) == 56320 ? (s = 65536 + ((1023 & s) << 10) + (1023 & e.charCodeAt(++i)), r[n++] = s >> 18 | 240, r[n++] = s >> 12 & 63 | 128) : r[n++] = s >> 12 | 224, r[n++] = s >> 6 & 63 | 128), r[n++] = 63 & s | 128);
  }
  return r;
};
let o = function(e) {
  let r = [];
  let n = 0;
  let i = 0;
  for (; n < e.length;) {
    let s = e[n++];
    if (s < 128) r[i++] = String.fromCharCode(s); else if (s > 191 && s < 224) {
      let o = e[n++];
      r[i++] = String.fromCharCode((31 & s) << 6 | 63 & o);
    } else if (s > 239 && s < 365) {
      let o = ((7 & s) << 18 | (63 & e[n++]) << 12 | (63 & e[n++]) << 6 | 63 & e[n++]) - 65536;
      r[i++] = String.fromCharCode(55296 + (o >> 10));
      r[i++] = String.fromCharCode(56320 + (1023 & o));
    } else {
      let o = e[n++];
      let a = e[n++];
      r[i++] = String.fromCharCode((15 & s) << 12 | (63 & o) << 6 | 63 & a);
    }
  }
  return r.join("");
};
let a = {
  byteToCharMap_: null,
  charToByteMap_: null,
  byteToCharMapWebSafe_: null,
  charToByteMapWebSafe_: null,
  ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
  get ENCODED_VALS() {
    return this.ENCODED_VALS_BASE + "+/=";
  },
  get ENCODED_VALS_WEBSAFE() {
    return this.ENCODED_VALS_BASE + "-_.";
  },
  HAS_NATIVE_SUPPORT: "function" == typeof atob,
  encodeByteArray(e, r) {
    if (!Array.isArray(e)) throw Error("encodeByteArray takes an array as a parameter");
    this.init_();
    let n = r ? this.byteToCharMapWebSafe_ : this.byteToCharMap_;
    let i = [];
    for (let r = 0; r < e.length; r += 3) {
      let s = e[r];
      let o = r + 1 < e.length;
      let a = o ? e[r + 1] : 0;
      let h = r + 2 < e.length;
      let d = h ? e[r + 2] : 0;
      let p = s >> 2;
      let g = (3 & s) << 4 | a >> 4;
      let m = (15 & a) << 2 | d >> 6;
      let v = 63 & d;
      h || (v = 64, o || (m = 64));
      i.push(n[p], n[g], n[m], n[v]);
    }
    return i.join("");
  },
  encodeString(e, r) {
    return this.HAS_NATIVE_SUPPORT && !r ? btoa(e) : this.encodeByteArray(s(e), r);
  },
  decodeString(e, r) {
    return this.HAS_NATIVE_SUPPORT && !r ? atob(e) : o(this.decodeStringToByteArray(e, r));
  },
  decodeStringToByteArray(e, r) {
    this.init_();
    let n = r ? this.charToByteMapWebSafe_ : this.charToByteMap_;
    let i = [];
    for (let r = 0; r < e.length;) {
      let s = n[e.charAt(r++)];
      let o = r < e.length ? n[e.charAt(r)] : 0;
      let a = ++r < e.length ? n[e.charAt(r)] : 64;
      let d = ++r < e.length ? n[e.charAt(r)] : 64;
      if (++r, null == s || null == o || null == a || null == d) throw new h();
      let p = s << 2 | o >> 4;
      if (i.push(p), 64 !== a) {
        let e = o << 4 & 240 | a >> 2;
        if (i.push(e), 64 !== d) {
          let e = a << 6 & 192 | d;
          i.push(e);
        }
      }
    }
    return i;
  },
  init_() {
    if (!this.byteToCharMap_) {
      this.byteToCharMap_ = {};
      this.charToByteMap_ = {};
      this.byteToCharMapWebSafe_ = {};
      this.charToByteMapWebSafe_ = {};
      for (let e = 0; e < this.ENCODED_VALS.length; e++) {
        this.byteToCharMap_[e] = this.ENCODED_VALS.charAt(e);
        this.charToByteMap_[this.byteToCharMap_[e]] = e;
        this.byteToCharMapWebSafe_[e] = this.ENCODED_VALS_WEBSAFE.charAt(e);
        this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]] = e;
        e >= this.ENCODED_VALS_BASE.length && (this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)] = e, this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)] = e);
      }
    }
  }
};
class h extends Error {
  constructor() {
    super(...arguments);
    this.name = "DecodeBase64StringError";
  }
}
/**
* @license
* Copyright 2022 Google LLC
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
let d = function(e) {
  let r = s(e);
  return a.encodeByteArray(r, !0);
};
let $$p5 = function(e) {
  return d(e).replace(/\./g, "");
};
let $$$$g4 = function(e) {
  try {
    return a.decodeString(e, !0);
  } catch (e) {
    console.error("base64Decode failed: ", e);
  }
  return null;
};
function m() {
  if ("undefined" != typeof self) return self;
  if ("undefined" != typeof window) return window;
  if (void 0 !== require.g) return require.g;
  throw Error("Unable to locate global object.");
} /**
  * @license
  * Copyright 2022 Google LLC
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
let v = () => m().__FIREBASE_DEFAULTS__;
let y = () => {
  if ("undefined" == typeof process || void 0 === process.env) return;
  let e = process.env.__FIREBASE_DEFAULTS__;
  if (e) return JSON.parse(e);
};
let b = () => {
  let e;
  if ("undefined" == typeof document) return;
  try {
    e = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
  } catch (e) {
    return;
  }
  let r = e && $$$$g4(e[1]);
  return r && JSON.parse(r);
};
let O = () => {
  try {
    return i() || v() || y() || b();
  } catch (e) {
    console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);
    return;
  }
};
let $$x7 = () => {
  var e;
  return O()?.config;
};
export class $$w0 {
  constructor() {
    this.reject = () => { };
    this.resolve = () => { };
    this.promise = new Promise((e, r) => {
      this.resolve = e;
      this.reject = r;
    });
  }
  wrapCallback(e) {
    return (r, n) => {
      r ? this.reject(r) : this.resolve(n);
      "function" == typeof e && (this.promise.catch(() => { }), 1 === e.length ? e(r) : e(r, n));
    };
  }
}
export function $$k9() {
  try {
    return "object" == typeof indexedDB;
  } catch (e) {
    return !1;
  }
}
export function $$_10() {
  return new Promise((e, r) => {
    try {
      let n = !0;
      let i = "validate-browser-context-for-indexeddb-analytics-module";
      let s = self.indexedDB.open(i);
      s.onsuccess = () => {
        s.result.close();
        n || self.indexedDB.deleteDatabase(i);
        e(!0);
      };
      s.onupgradeneeded = () => {
        n = !1;
      };
      s.onerror = () => {
        var e;
        r(s.error?.message || "");
      };
    } catch (e) {
      r(e);
    }
  });
}
export function $$S3() {
  return "undefined" != typeof navigator && !!navigator.cookieEnabled;
}
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
let E = "FirebaseError";
export class $$A2 extends Error {
  constructor(e, r, n) {
    super(r);
    this.code = e;
    this.customData = n;
    this.name = E;
    Object.setPrototypeOf(this, $$A2.prototype);
    Error.captureStackTrace && Error.captureStackTrace(this, $$C1.prototype.create);
  }
}
export class $$C1 {
  constructor(e, r, n) {
    this.service = e;
    this.serviceName = r;
    this.errors = n;
  }
  create(e, ...r) {
    let n = r[0] || {};
    let i = `${this.service}/${e}`;
    let s = this.errors[e];
    let o = s ? T(s, n) : "Error";
    let a = `${this.serviceName}: ${o} (${i}).`;
    return new $$A2(i, a, n);
  }
}
function T(e, r) {
  return e.replace(I, (e, n) => {
    let i = r[n];
    return null != i ? String(i) : `<${n}?>`;
  });
}
let I = /\{\$([^}]+)}/g;
export function $$P6(e, r) {
  if (e === r) return !0;
  let n = Object.keys(e);
  let i = Object.keys(r);
  for (let s of n) {
    if (!i.includes(s)) return !1;
    let n = e[s];
    let o = r[s];
    if (R(n) && R(o)) {
      if (!$$P6(n, o)) return !1;
    } else if (n !== o) return !1;
  }
  for (let e of i) if (!n.includes(e)) return !1;
  return !0;
}
function R(e) {
  return null !== e && "object" == typeof e;
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
export function $$M8(e) {
  return e && e._delegate ? e._delegate : e;
}
export const cY = $$w0;
export const FA = $$C1;
export const g = $$A2;
export const dM = $$S3;
export const u = $$$$g4;
export const Uj = $$p5;
export const bD = $$P6;
export const T9 = $$x7;
export const Ku = $$M8;
export const zW = $$k9;
export const eX = $$_10; 
