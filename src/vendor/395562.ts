import { j6, om, KO, Sx } from "../vendor/616327";
import { uA } from "../vendor/291207";
import { FA, g as _$$g, eX as _$$eX, zW, dM, Ku } from "../vendor/977969";
import { P2, MR } from "../vendor/179215";
var i;
var s;
let p = "@firebase/installations";
let g = "0.6.18";
let m = 1e4;
let v = `w:${g}`;
let y = "FIS_v2";
let b = "https://firebaseinstallations.googleapis.com/v1";
let O = 36e5;
let x = "installations";
let w = "Installations";
let k = {
  "missing-app-config-values": 'Missing App configuration value: "{$valueName}"',
  "not-registered": "Firebase Installation is not registered.",
  "installation-not-found": "Firebase Installation not found.",
  "request-failed": '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',
  "app-offline": "Could not process request. Application offline.",
  "delete-pending-registration": "Can't delete installation while there is a pending registration request."
};
let _ = new FA(x, w, k);
function S(e) {
  return e instanceof _$$g && e.code.includes("request-failed");
} /**
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
function E({
  projectId: e
}) {
  return `${b}/projects/${e}/installations`;
}
function A(e) {
  return {
    token: e.token,
    requestStatus: 2,
    expiresIn: R(e.expiresIn),
    creationTime: Date.now()
  };
}
async function C(e, r) {
  let n = (await r.json()).error;
  return _.create("request-failed", {
    requestName: e,
    serverCode: n.code,
    serverMessage: n.message,
    serverStatus: n.status
  });
}
function T({
  apiKey: e
}) {
  return new Headers({
    "Content-Type": "application/json",
    Accept: "application/json",
    "x-goog-api-key": e
  });
}
function I(e, {
  refreshToken: r
}) {
  let n = T(e);
  n.append("Authorization", M(r));
  return n;
}
async function P(e) {
  let r = await e();
  return r.status >= 500 && r.status < 600 ? e() : r;
}
function R(e) {
  return Number(e.replace("s", "000"));
}
function M(e) {
  return `${y} ${e}`;
} /**
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
async function D({
  appConfig: e,
  heartbeatServiceProvider: r
}, {
  fid: n
}) {
  let i = E(e);
  let s = T(e);
  let o = r.getImmediate({
    optional: !0
  });
  if (o) {
    let e = await o.getHeartbeatsHeader();
    e && s.append("x-firebase-client", e);
  }
  let a = {
    method: "POST",
    headers: s,
    body: JSON.stringify({
      fid: n,
      authVersion: y,
      appId: e.appId,
      sdkVersion: v
    })
  };
  let h = await P(() => fetch(i, a));
  if (h.ok) {
    let e = await h.json();
    return {
      fid: e.fid || n,
      registrationStatus: 2,
      refreshToken: e.refreshToken,
      authToken: A(e.authToken)
    };
  }
  throw await C("Create Installation", h);
} /**
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
function N(e) {
  return new Promise(r => {
    setTimeout(r, e);
  });
} /**
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
function $(e) {
  return btoa(String.fromCharCode(...e)).replace(/\+/g, "-").replace(/\//g, "_");
} /**
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
let L = /^[cdef][\w-]{21}$/;
let j = "";
function z() {
  try {
    let e = new Uint8Array(17);
    (self.crypto || self.msCrypto).getRandomValues(e);
    e[0] = 112 + e[0] % 16;
    let r = Z(e);
    return L.test(r) ? r : j;
  } catch (e) {
    return j;
  }
}
function Z(e) {
  return $(e).substr(0, 22);
} /**
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
function F(e) {
  return `${e.appName}!${e.appId}`;
} /**
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
let U = new Map();
function Q(e, r) {
  let n = F(e);
  V(n, r);
  B(n, r);
}
function V(e, r) {
  let n = U.get(e);
  if (n) for (let e of n) e(r);
}
function B(e, r) {
  let n = W();
  n && n.postMessage({
    key: e,
    fid: r
  });
  Y();
}
let q = null;
function W() {
  !q && "BroadcastChannel" in self && ((q = new BroadcastChannel("[Firebase] FID Change")).onmessage = e => {
    V(e.data.key, e.data.fid);
  });
  return q;
}
function Y() {
  0 === U.size && q && (q.close(), q = null);
} /**
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
let G = "firebase-installations-database";
let X = 1;
let H = "firebase-installations-store";
let K = null;
function J() {
  K || (K = P2(G, X, {
    upgrade: (e, r) => {
      0 === r && e.createObjectStore(H);
    }
  }));
  return K;
}
async function ee(e, r) {
  let n = F(e);
  let i = (await J()).transaction(H, "readwrite");
  let s = i.objectStore(H);
  let o = await s.get(n);
  await s.put(r, n);
  await i.done;
  o && o.fid === r.fid || Q(e, r.fid);
  return r;
}
async function et(e) {
  let r = F(e);
  let n = (await J()).transaction(H, "readwrite");
  await n.objectStore(H).$$delete(r);
  await n.done;
}
async function er(e, r) {
  let n = F(e);
  let i = (await J()).transaction(H, "readwrite");
  let s = i.objectStore(H);
  let o = await s.get(n);
  let a = r(o);
  void 0 === a ? await s.$$delete(n) : await s.put(a, n);
  await i.done;
  a && (!o || o.fid !== a.fid) && Q(e, a.fid);
  return a;
} /**
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
async function en(e) {
  let r;
  let n = await er(e.appConfig, n => {
    let i = es(e, ei(n));
    r = i.registrationPromise;
    return i.installationEntry;
  });
  return n.fid === j ? {
    installationEntry: await r
  } : {
    installationEntry: n,
    registrationPromise: r
  };
}
function ei(e) {
  return eu(e || {
    fid: z(),
    registrationStatus: 0
  });
}
function es(e, r) {
  if (0 === r.registrationStatus) {
    if (!navigator.onLine) return {
      installationEntry: r,
      registrationPromise: Promise.reject(_.create("app-offline"))
    };
    let n = {
      fid: r.fid,
      registrationStatus: 1,
      registrationTime: Date.now()
    };
    let i = eo(e, n);
    return {
      installationEntry: n,
      registrationPromise: i
    };
  }
  return 1 === r.registrationStatus ? {
    installationEntry: r,
    registrationPromise: ea(e)
  } : {
    installationEntry: r
  };
}
async function eo(e, r) {
  try {
    let n = await D(e, r);
    return ee(e.appConfig, n);
  } catch (n) {
    S(n) && 409 === n.customData.serverCode ? await et(e.appConfig) : await ee(e.appConfig, {
      fid: r.fid,
      registrationStatus: 0
    });
    return n;
  }
}
async function ea(e) {
  let r = await el(e.appConfig);
  for (; 1 === r.registrationStatus;) {
    await N(100);
    r = await el(e.appConfig);
  }
  if (0 === r.registrationStatus) {
    let {
      installationEntry,
      registrationPromise
    } = await en(e);
    return registrationPromise || installationEntry;
  }
  return r;
}
function el(e) {
  return er(e, e => {
    if (!e) throw _.create("installation-not-found");
    return eu(e);
  });
}
function eu(e) {
  return ec(e) ? {
    fid: e.fid,
    registrationStatus: 0
  } : e;
}
function ec(e) {
  return 1 === e.registrationStatus && e.registrationTime + m < Date.now();
} /**
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
async function eh({
  appConfig: e,
  heartbeatServiceProvider: r
}, n) {
  let i = ed(e, n);
  let s = I(e, n);
  let o = r.getImmediate({
    optional: !0
  });
  if (o) {
    let e = await o.getHeartbeatsHeader();
    e && s.append("x-firebase-client", e);
  }
  let a = {
    method: "POST",
    headers: s,
    body: JSON.stringify({
      installation: {
        sdkVersion: v,
        appId: e.appId
      }
    })
  };
  let h = await P(() => fetch(i, a));
  if (h.ok) return A(await h.json());
  throw await C("Generate Auth Token", h);
}
function ed(e, {
  fid: r
}) {
  return `${E(e)}/${r}/authTokens:generate`;
} /**
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
async function ef(e, r = !1) {
  let n;
  let i = await er(e.appConfig, i => {
    if (!ev(i)) throw _.create("not-registered");
    let s = i.authToken;
    if (!r && ey(s)) return i;
    if (1 === s.requestStatus) {
      n = ep(e, r);
      return i;
    }
    {
      if (!navigator.onLine) throw _.create("app-offline");
      let r = eO(i);
      n = em(e, r);
      return r;
    }
  });
  return n ? await n : i.authToken;
}
async function ep(e, r) {
  let n = await eg(e.appConfig);
  for (; 1 === n.authToken.requestStatus;) {
    await N(100);
    n = await eg(e.appConfig);
  }
  let i = n.authToken;
  return 0 === i.requestStatus ? ef(e, r) : i;
}
function eg(e) {
  return er(e, e => {
    if (!ev(e)) throw _.create("not-registered");
    return ex(e.authToken) ? Object.assign(Object.assign({}, e), {
      authToken: {
        requestStatus: 0
      }
    }) : e;
  });
}
async function em(e, r) {
  try {
    let n = await eh(e, r);
    let i = Object.assign(Object.assign({}, r), {
      authToken: n
    });
    await ee(e.appConfig, i);
    return n;
  } catch (n) {
    if (S(n) && (401 === n.customData.serverCode || 404 === n.customData.serverCode)) await et(e.appConfig); else {
      let n = Object.assign(Object.assign({}, r), {
        authToken: {
          requestStatus: 0
        }
      });
      await ee(e.appConfig, n);
    }
    throw n;
  }
}
function ev(e) {
  return void 0 !== e && 2 === e.registrationStatus;
}
function ey(e) {
  return 2 === e.requestStatus && !eb(e);
}
function eb(e) {
  let r = Date.now();
  return r < e.creationTime || e.creationTime + e.expiresIn < r + O;
}
function eO(e) {
  let r = {
    requestStatus: 1,
    requestTime: Date.now()
  };
  return Object.assign(Object.assign({}, e), {
    authToken: r
  });
}
function ex(e) {
  return 1 === e.requestStatus && e.requestTime + m < Date.now();
} /**
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
async function ew(e) {
  let r = e;
  let {
    installationEntry,
    registrationPromise
  } = await en(r);
  registrationPromise ? registrationPromise.catch(console.error) : ef(r).catch(console.error);
  return installationEntry.fid;
} /**
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
async function ek(e, r = !1) {
  let n = e;
  await e_(n);
  return (await ef(n, r)).token;
}
async function e_(e) {
  let {
    registrationPromise
  } = await en(e);
  registrationPromise && (await registrationPromise);
} /**
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
function eS(e) {
  if (!e || !e.options) throw eE("App Configuration");
  if (!e.name) throw eE("App Name");
  for (let r of ["projectId", "apiKey", "appId"]) if (!e.options[r]) throw eE(r);
  return {
    appName: e.name,
    projectId: e.options.projectId,
    apiKey: e.options.apiKey,
    appId: e.options.appId
  };
}
function eE(e) {
  return _.create("missing-app-config-values", {
    valueName: e
  });
} /**
  * @license
  * Copyright 2020 Google LLC
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
let eA = "installations";
let eC = "installations-internal";
let eT = e => {
  let r = e.getProvider("app").getImmediate();
  let n = eS(r);
  let i = j6(r, "heartbeat");
  return {
    app: r,
    appConfig: n,
    heartbeatServiceProvider: i,
    _delete: () => Promise.resolve()
  };
};
let eI = e => {
  let r = e.getProvider("app").getImmediate();
  let n = j6(r, eA).getImmediate();
  return {
    getId: () => ew(n),
    getToken: e => ek(n, e)
  };
};
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
(function() {
  om(new uA(eA, eT, "PUBLIC"));
  om(new uA(eC, eI, "PRIVATE"));
})();
KO(p, g);
KO(p, g, "esm2017");
let eP = "/firebase-messaging-sw.js";
let eR = "/firebase-cloud-messaging-push-scope";
let eM = "BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4";
let eD = "https://fcmregistrations.googleapis.com/v1";
let eN = "google.c.a.c_id";
let e$ = "google.c.a.c_l";
let eL = "google.c.a.ts";
let ej = "google.c.a.e";
let ez = 1e4;
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
function eZ(e) {
  return btoa(String.fromCharCode(...new Uint8Array(e))).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
}
function eF(e) {
  let r = "=".repeat((4 - e.length % 4) % 4);
  let n = atob((e + r).replace(/\-/g, "+").replace(/_/g, "/"));
  let i = new Uint8Array(n.length);
  for (let e = 0; e < n.length; ++e) i[e] = n.charCodeAt(e);
  return i;
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
!function(e) {
  e[e.DATA_MESSAGE = 1] = "DATA_MESSAGE";
  e[e.DISPLAY_NOTIFICATION = 3] = "DISPLAY_NOTIFICATION";
}(i || (i = {}));
(function(e) {
  e.PUSH_RECEIVED = "push-received";
  e.NOTIFICATION_CLICKED = "notification-clicked";
})(s || (s = {}));
let eU = "fcm_token_details_db";
let eQ = 5;
let eV = "fcm_token_object_Store";
async function eB(e) {
  if ("databases" in indexedDB && !(await indexedDB.databases()).map(e => e.name).includes(eU)) return null;
  let r = null;
  (await P2(eU, eQ, {
    upgrade: async (n, i, s, o) => {
      var a;
      if (i < 2 || !n.objectStoreNames.contains(eV)) return;
      let h = o.objectStore(eV);
      let d = await h.index("fcmSenderId").get(e);
      if (await h.clear(), d) {
        if (2 === i) {
          let e = d;
          if (!e.auth || !e.p256dh || !e.endpoint) return;
          r = {
            token: e.fcmToken,
            createTime: null !== (a = e.createTime) && void 0 !== a ? a : Date.now(),
            subscriptionOptions: {
              auth: e.auth,
              p256dh: e.p256dh,
              endpoint: e.endpoint,
              swScope: e.swScope,
              vapidKey: "string" == typeof e.vapidKey ? e.vapidKey : eZ(e.vapidKey)
            }
          };
        } else if (3 === i) {
          let e = d;
          r = {
            token: e.fcmToken,
            createTime: e.createTime,
            subscriptionOptions: {
              auth: eZ(e.auth),
              p256dh: eZ(e.p256dh),
              endpoint: e.endpoint,
              swScope: e.swScope,
              vapidKey: eZ(e.vapidKey)
            }
          };
        } else if (4 === i) {
          let e = d;
          r = {
            token: e.fcmToken,
            createTime: e.createTime,
            subscriptionOptions: {
              auth: eZ(e.auth),
              p256dh: eZ(e.p256dh),
              endpoint: e.endpoint,
              swScope: e.swScope,
              vapidKey: eZ(e.vapidKey)
            }
          };
        }
      }
    }
  })).close();
  await MR(eU);
  await MR("fcm_vapid_details_db");
  await MR("undefined");
  return eq(r) ? r : null;
}
function eq(e) {
  if (!e || !e.subscriptionOptions) return !1;
  let {
    subscriptionOptions
  } = e;
  return "number" == typeof e.createTime && e.createTime > 0 && "string" == typeof e.token && e.token.length > 0 && "string" == typeof subscriptionOptions.auth && subscriptionOptions.auth.length > 0 && "string" == typeof subscriptionOptions.p256dh && subscriptionOptions.p256dh.length > 0 && "string" == typeof subscriptionOptions.endpoint && subscriptionOptions.endpoint.length > 0 && "string" == typeof subscriptionOptions.swScope && subscriptionOptions.swScope.length > 0 && "string" == typeof subscriptionOptions.vapidKey && subscriptionOptions.vapidKey.length > 0;
} /**
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
let eW = "firebase-messaging-database";
let eY = 1;
let eG = "firebase-messaging-store";
let eX = null;
function eH() {
  eX || (eX = P2(eW, eY, {
    upgrade: (e, r) => {
      0 === r && e.createObjectStore(eG);
    }
  }));
  return eX;
}
async function eK(e) {
  let r = e1(e);
  let n = await eH();
  let i = await n.transaction(eG).objectStore(eG).get(r);
  if (i) return i;
  {
    let r = await eB(e.appConfig.senderId);
    if (r) {
      await eJ(e, r);
      return r;
    }
  }
}
async function eJ(e, r) {
  let n = e1(e);
  let i = (await eH()).transaction(eG, "readwrite");
  await i.objectStore(eG).put(r, n);
  await i.done;
  return r;
}
async function e0(e) {
  let r = e1(e);
  let n = (await eH()).transaction(eG, "readwrite");
  await n.objectStore(eG).$$delete(r);
  await n.done;
}
function e1({
  appConfig: e
}) {
  return e.appId;
} /**
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
let e2 = {
  "missing-app-config-values": 'Missing App configuration value: "{$valueName}"',
  "only-available-in-window": "This method is available in a Window context.",
  "only-available-in-sw": "This method is available in a service worker context.",
  "permission-default": "The notification permission was not granted and dismissed instead.",
  "permission-blocked": "The notification permission was not granted and blocked instead.",
  "unsupported-browser": "This browser doesn't support the API's required to use the Firebase SDK.",
  "indexed-db-unsupported": "This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)",
  "failed-service-worker-registration": "We are unable to register the default service worker. {$browserErrorMessage}",
  "token-subscribe-failed": "A problem occurred while subscribing the user to FCM: {$errorInfo}",
  "token-subscribe-no-token": "FCM returned no token when subscribing the user to push.",
  "token-unsubscribe-failed": "A problem occurred while unsubscribing the user from FCM: {$errorInfo}",
  "token-update-failed": "A problem occurred while updating the user from FCM: {$errorInfo}",
  "token-update-no-token": "FCM returned no token when updating the user to push.",
  "use-sw-after-get-token": "The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.",
  "invalid-sw-registration": "The input to useServiceWorker() must be a ServiceWorkerRegistration.",
  "invalid-bg-handler": "The input to setBackgroundMessageHandler() must be a function.",
  "invalid-vapid-key": "The public VAPID key must be a string.",
  "use-vapid-key-after-get-token": "The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."
};
let e5 = new FA("messaging", "Messaging", e2);
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
async function e3(e, r) {
  let n;
  let i = {
    method: "POST",
    headers: await e7(e),
    body: JSON.stringify(e9(r))
  };
  try {
    let r = await fetch(e8(e.appConfig), i);
    n = await r.json();
  } catch (e) {
    throw e5.create("token-subscribe-failed", {
      errorInfo: e?.toString()
    });
  }
  if (n.error) {
    let e = n.error.message;
    throw e5.create("token-subscribe-failed", {
      errorInfo: e
    });
  }
  if (!n.token) throw e5.create("token-subscribe-no-token");
  return n.token;
}
async function e6(e, r) {
  let n;
  let i = {
    method: "PATCH",
    headers: await e7(e),
    body: JSON.stringify(e9(r.subscriptionOptions))
  };
  try {
    let s = await fetch(`${e8(e.appConfig)}/${r.token}`, i);
    n = await s.json();
  } catch (e) {
    throw e5.create("token-update-failed", {
      errorInfo: e?.toString()
    });
  }
  if (n.error) {
    let e = n.error.message;
    throw e5.create("token-update-failed", {
      errorInfo: e
    });
  }
  if (!n.token) throw e5.create("token-update-no-token");
  return n.token;
}
async function e4(e, r) {
  let n = {
    method: "DELETE",
    headers: await e7(e)
  };
  try {
    let i = await fetch(`${e8(e.appConfig)}/${r}`, n);
    let s = await i.json();
    if (s.error) {
      let e = s.error.message;
      throw e5.create("token-unsubscribe-failed", {
        errorInfo: e
      });
    }
  } catch (e) {
    throw e5.create("token-unsubscribe-failed", {
      errorInfo: e?.toString()
    });
  }
}
function e8({
  projectId: e
}) {
  return `${eD}/projects/${e}/registrations`;
}
async function e7({
  appConfig: e,
  installations: r
}) {
  let n = await r.getToken();
  return new Headers({
    "Content-Type": "application/json",
    Accept: "application/json",
    "x-goog-api-key": e.apiKey,
    "x-goog-firebase-installations-auth": `FIS ${n}`
  });
}
function e9({
  p256dh: e,
  auth: r,
  endpoint: n,
  vapidKey: i
}) {
  let s = {
    web: {
      endpoint: n,
      auth: r,
      p256dh: e
    }
  };
  i !== eM && (s.web.applicationPubKey = i);
  return s;
} /**
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
let te = 6048e5;
async function tt(e) {
  let r = await ti(e.swRegistration, e.vapidKey);
  let n = {
    vapidKey: e.vapidKey,
    swScope: e.swRegistration.scope,
    endpoint: r.endpoint,
    auth: eZ(r.getKey("auth")),
    p256dh: eZ(r.getKey("p256dh"))
  };
  let i = await eK(e.firebaseDependencies);
  if (!i) return tn(e.firebaseDependencies, n);
  if (ts(i.subscriptionOptions, n)) return Date.now() >= i.createTime + te ? tr(e, {
    token: i.token,
    createTime: Date.now(),
    subscriptionOptions: n
  }) : i.token;
  try {
    await e4(e.firebaseDependencies, i.token);
  } catch (e) {
    console.warn(e);
  }
  return tn(e.firebaseDependencies, n);
}
async function tr(e, r) {
  try {
    let n = await e6(e.firebaseDependencies, r);
    let i = Object.assign(Object.assign({}, r), {
      token: n,
      createTime: Date.now()
    });
    await eJ(e.firebaseDependencies, i);
    return n;
  } catch (e) {
    throw e;
  }
}
async function tn(e, r) {
  let n = {
    token: await e3(e, r),
    createTime: Date.now(),
    subscriptionOptions: r
  };
  await eJ(e, n);
  return n.token;
}
async function ti(e, r) {
  return (await e.pushManager.getSubscription()) || e.pushManager.subscribe({
    userVisibleOnly: !0,
    applicationServerKey: eF(r)
  });
}
function ts(e, r) {
  let n = r.vapidKey === e.vapidKey;
  let i = r.endpoint === e.endpoint;
  let s = r.auth === e.auth;
  let o = r.p256dh === e.p256dh;
  return n && i && s && o;
} /**
  * @license
  * Copyright 2020 Google LLC
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
function to(e) {
  let r = {
    from: e.from,
    collapseKey: e.collapse_key,
    messageId: e.fcmMessageId
  };
  ta(r, e);
  tl(r, e);
  tu(r, e);
  return r;
}
function ta(e, r) {
  if (!r.notification) return;
  e.notification = {};
  let n = r.notification.title;
  n && (e.notification.title = n);
  let i = r.notification.body;
  i && (e.notification.body = i);
  let s = r.notification.image;
  s && (e.notification.image = s);
  let o = r.notification.icon;
  o && (e.notification.icon = o);
}
function tl(e, r) {
  r.data && (e.data = r.data);
}
function tu(e, r) {
  var n;
  var i;
  var s;
  var o;
  var a;
  if (!r.fcmOptions && !r.notification?.click_action) return;
  e.fcmOptions = {};
  let h = null !== (s = r.fcmOptions?.link) && void 0 !== s ? s : r.notification?.click_action;
  h && (e.fcmOptions.link = h);
  let d = r.fcmOptions?.analytics_label;
  d && (e.fcmOptions.analyticsLabel = d);
} /**
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
function tc(e) {
  return "object" == typeof e && !!e && eN in e;
} /**
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
function th(e) {
  if (!e || !e.options) throw td("App Configuration Object");
  if (!e.name) throw td("App Name");
  let {
    options
  } = e;
  for (let e of ["projectId", "apiKey", "appId", "messagingSenderId"]) if (!options[e]) throw td(e);
  return {
    appName: e.name,
    projectId: options.projectId,
    apiKey: options.apiKey,
    appId: options.appId,
    senderId: options.messagingSenderId
  };
}
function td(e) {
  return e5.create("missing-app-config-values", {
    valueName: e
  });
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
  function(e, r) {
    let n = [];
    for (let i = 0; i < e.length; i++) {
      n.push(e.charAt(i));
      i < r.length && n.push(r.charAt(i));
    }
    n.join("");
  }("AzSCbw63g1R0nCw85jG8", "Iaya3yLKwmgvh7cF0q4"); /**
                                                  * @license
                                                  * Copyright 2020 Google LLC
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
class tf {
  constructor(e, r, n) {
    this.deliveryMetricsExportedToBigQueryEnabled = !1;
    this.onBackgroundMessageHandler = null;
    this.onMessageHandler = null;
    this.logEvents = [];
    this.isLogServiceStarted = !1;
    let i = th(e);
    this.firebaseDependencies = {
      app: e,
      appConfig: i,
      installations: r,
      analyticsProvider: n
    };
  }
  _delete() {
    return Promise.resolve();
  }
} /**
  * @license
  * Copyright 2020 Google LLC
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
async function tp(e) {
  try {
    e.swRegistration = await navigator.serviceWorker.register(eP, {
      scope: eR
    });
    e.swRegistration.update().catch(() => { });
    await tg(e.swRegistration);
  } catch (e) {
    throw e5.create("failed-service-worker-registration", {
      browserErrorMessage: e?.message
    });
  }
}
async function tg(e) {
  return new Promise((r, n) => {
    let i = setTimeout(() => n(Error(`Service worker not registered after ${ez} ms`)), ez);
    let s = e.installing || e.waiting;
    e.active ? (clearTimeout(i), r()) : s ? s.onstatechange = e => {
      var n;
      e.target?.state === "activated" && (s.onstatechange = null, clearTimeout(i), r());
    } : (clearTimeout(i), n(Error("No incoming service worker found.")));
  });
} /**
  * @license
  * Copyright 2020 Google LLC
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
async function tm(e, r) {
  if (r || e.swRegistration || (await tp(e)), r || !e.swRegistration) {
    if (!(r instanceof ServiceWorkerRegistration)) throw e5.create("invalid-sw-registration");
    e.swRegistration = r;
  }
} /**
  * @license
  * Copyright 2020 Google LLC
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
async function tv(e, r) {
  r ? e.vapidKey = r : e.vapidKey || (e.vapidKey = eM);
} /**
  * @license
  * Copyright 2020 Google LLC
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
async function ty(e, r) {
  if (!navigator) throw e5.create("only-available-in-window");
  if ("default" === Notification.permission && (await Notification.requestPermission()), "granted" !== Notification.permission) throw e5.create("permission-blocked");
  await tv(e, r?.vapidKey);
  await tm(e, r?.serviceWorkerRegistration);
  return tt(e);
} /**
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
async function tb(e, r, n) {
  let i = tO(r);
  (await e.firebaseDependencies.analyticsProvider.get()).logEvent(i, {
    message_id: n[eN],
    message_name: n[e$],
    message_time: n[eL],
    message_device_time: Math.floor(Date.now() / 1e3)
  });
}
function tO(e) {
  switch (e) {
    case s.NOTIFICATION_CLICKED:
      return "notification_open";
    case s.PUSH_RECEIVED:
      return "notification_foreground";
    default:
      throw Error();
  }
} /**
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
async function tx(e, r) {
  let n = r.data;
  if (!n.isFirebaseMessaging) return;
  e.onMessageHandler && n.messageType === s.PUSH_RECEIVED && ("function" == typeof e.onMessageHandler ? e.onMessageHandler(to(n)) : e.onMessageHandler.next(to(n)));
  let i = n.data;
  tc(i) && "1" === i[ej] && (await tb(e, n.messageType, i));
}
let tw = "@firebase/messaging";
let tk = "0.12.22";
let t_ = e => {
  let r = new tf(e.getProvider("app").getImmediate(), e.getProvider("installations-internal").getImmediate(), e.getProvider("analytics-internal"));
  navigator.serviceWorker.addEventListener("message", e => tx(r, e));
  return r;
};
let tS = e => {
  let r = e.getProvider("messaging").getImmediate();
  return {
    getToken: e => ty(r, e)
  };
};
/**
* @license
* Copyright 2020 Google LLC
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
async function tE() {
  try {
    await _$$eX();
  } catch (e) {
    return !1;
  }
  return "undefined" != typeof window && zW() && dM() && "serviceWorker" in navigator && "PushManager" in window && "Notification" in window && "fetch" in window && ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification") && PushSubscription.prototype.hasOwnProperty("getKey");
} /**
  * @license
  * Copyright 2020 Google LLC
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
function tA(e, r) {
  if (!navigator) throw e5.create("only-available-in-window");
  e.onMessageHandler = r;
  return () => {
    e.onMessageHandler = null;
  };
} /**
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
export function $$tC0(e = Sx()) {
  tE().then(e => {
    if (!e) throw e5.create("unsupported-browser");
  }, e => {
    throw e5.create("indexed-db-unsupported");
  });
  return j6(Ku(e), "messaging").getImmediate();
}
export async function $$tT1(e, r) {
  return ty(e = Ku(e), r);
}
export function $$tI2(e, r) {
  return tA(e = Ku(e), r);
}
(function e() {
  om(new uA("messaging", t_, "PUBLIC"));
  om(new uA("messaging-internal", tS, "PRIVATE"));
  KO(tw, tk);
  KO(tw, tk, "esm2017");
})();
export const dG = $$tC0;
export const gf = $$tT1;
export const xD = $$tI2; 
