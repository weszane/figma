import { cY } from "../vendor/977969";
export class $$s1 {
  constructor(e, r, n) {
    this.name = e;
    this.instanceFactory = r;
    this.type = n;
    this.multipleInstances = !1;
    this.serviceProps = {};
    this.instantiationMode = "LAZY";
    this.onInstanceCreated = null;
  }
  setInstantiationMode(e) {
    this.instantiationMode = e;
    return this;
  }
  setMultipleInstances(e) {
    this.multipleInstances = e;
    return this;
  }
  setServiceProps(e) {
    this.serviceProps = e;
    return this;
  }
  setInstanceCreatedCallback(e) {
    this.onInstanceCreated = e;
    return this;
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
let o = "[DEFAULT]"; /**
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
class a {
  constructor(e, r) {
    this.name = e;
    this.container = r;
    this.component = null;
    this.instances = new Map();
    this.instancesDeferred = new Map();
    this.instancesOptions = new Map();
    this.onInitCallbacks = new Map();
  }
  get(e) {
    let r = this.normalizeInstanceIdentifier(e);
    if (!this.instancesDeferred.has(r)) {
      let e = new cY();
      if (this.instancesDeferred.set(r, e), this.isInitialized(r) || this.shouldAutoInitialize()) try {
        let n = this.getOrInitializeService({
          instanceIdentifier: r
        });
        n && e.resolve(n);
      } catch (e) {}
    }
    return this.instancesDeferred.get(r).promise;
  }
  getImmediate(e) {
    var r;
    let n = this.normalizeInstanceIdentifier(e?.identifier);
    let i = null !== (r = e?.optional) && void 0 !== r && r;
    if (this.isInitialized(n) || this.shouldAutoInitialize()) try {
      return this.getOrInitializeService({
        instanceIdentifier: n
      });
    } catch (e) {
      if (i) return null;
      throw e;
    } else {
      if (i) return null;
      throw Error(`Service ${this.name} is not available`);
    }
  }
  getComponent() {
    return this.component;
  }
  setComponent(e) {
    if (e.name !== this.name) throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);
    if (this.component) throw Error(`Component for ${this.name} has already been provided`);
    if (this.component = e, this.shouldAutoInitialize()) {
      if (d(e)) try {
        this.getOrInitializeService({
          instanceIdentifier: o
        });
      } catch (e) {}
      for (let [e, r] of this.instancesDeferred.entries()) {
        let n = this.normalizeInstanceIdentifier(e);
        try {
          let e = this.getOrInitializeService({
            instanceIdentifier: n
          });
          r.resolve(e);
        } catch (e) {}
      }
    }
  }
  clearInstance(e = o) {
    this.instancesDeferred.$$delete(e);
    this.instancesOptions.$$delete(e);
    this.instances.$$delete(e);
  }
  async delete() {
    let e = Array.from(this.instances.values());
    await Promise.all([...e.filter(e => "INTERNAL" in e).map(e => e.INTERNAL.$$delete()), ...e.filter(e => "_delete" in e).map(e => e._delete())]);
  }
  isComponentSet() {
    return null != this.component;
  }
  isInitialized(e = o) {
    return this.instances.has(e);
  }
  getOptions(e = o) {
    return this.instancesOptions.get(e) || {};
  }
  initialize(e = {}) {
    let {
      options = {}
    } = e;
    let n = this.normalizeInstanceIdentifier(e.instanceIdentifier);
    if (this.isInitialized(n)) throw Error(`${this.name}(${n}) has already been initialized`);
    if (!this.isComponentSet()) throw Error(`Component ${this.name} has not been registered yet`);
    let i = this.getOrInitializeService({
      instanceIdentifier: n,
      options
    });
    for (let [e, r] of this.instancesDeferred.entries()) n === this.normalizeInstanceIdentifier(e) && r.resolve(i);
    return i;
  }
  onInit(e, r) {
    var n;
    let i = this.normalizeInstanceIdentifier(r);
    let s = null !== (n = this.onInitCallbacks.get(i)) && void 0 !== n ? n : new Set();
    s.add(e);
    this.onInitCallbacks.set(i, s);
    let o = this.instances.get(i);
    o && e(o, i);
    return () => {
      s.$$delete(e);
    };
  }
  invokeOnInitCallbacks(e, r) {
    let n = this.onInitCallbacks.get(r);
    if (n) for (let i of n) try {
      i(e, r);
    } catch (e) {}
  }
  getOrInitializeService({
    instanceIdentifier: e,
    options: r = {}
  }) {
    let n = this.instances.get(e);
    if (!n && this.component && (n = this.component.instanceFactory(this.container, {
      instanceIdentifier: h(e),
      options: r
    }), this.instances.set(e, n), this.instancesOptions.set(e, r), this.invokeOnInitCallbacks(n, e), this.component.onInstanceCreated)) try {
      this.component.onInstanceCreated(this.container, e, n);
    } catch (e) {}
    return n || null;
  }
  normalizeInstanceIdentifier(e = o) {
    return this.component ? this.component.multipleInstances ? e : o : e;
  }
  shouldAutoInitialize() {
    return !!this.component && "EXPLICIT" !== this.component.instantiationMode;
  }
}
function h(e) {
  return e === o ? void 0 : e;
}
function d(e) {
  return "EAGER" === e.instantiationMode;
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
export class $$p0 {
  constructor(e) {
    this.name = e;
    this.providers = new Map();
  }
  addComponent(e) {
    let r = this.getProvider(e.name);
    if (r.isComponentSet()) throw Error(`Component ${e.name} has already been registered with ${this.name}`);
    r.setComponent(e);
  }
  addOrOverwriteComponent(e) {
    this.getProvider(e.name).isComponentSet() && this.providers.$$delete(e.name);
    this.addComponent(e);
  }
  getProvider(e) {
    if (this.providers.has(e)) return this.providers.get(e);
    let r = new a(e, this);
    this.providers.set(e, r);
    return r;
  }
  getProviders() {
    return Array.from(this.providers.values());
  }
}
export const h1 = $$p0;
export const uA = $$s1;