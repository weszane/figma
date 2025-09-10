import { deepEqual } from "../905/382883";
import { RevisionNumberAccessor } from "../figma_app/763686";
import a from "../vendor/128080";
function s(e, t, i) {
  t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i;
  return e;
}
function o(e, t) {
  return null === t ? null === e || 0 === e.length : a(e, t);
}
export class $$l1 {
  checkForUpdates(e) {
    var t;
    let i = this.scene !== this.lastSceneInstance;
    let a = "function" == typeof (t = this.scene).getRevisionNumber ? t.getRevisionNumber() : RevisionNumberAccessor && "function" == typeof RevisionNumberAccessor.getRevisionNumber ? RevisionNumberAccessor.getRevisionNumber() : 0;
    if (null === this.lastRevision || this.lastRevision !== a || !o(e, this.lastArgs || null) || i) {
      if (null !== this.lastValue && !this.scene.hasValidScene()) return;
      this.lastSceneInstance = this.scene;
      this.lastArgs = e;
      let t = this.computeValue(this.scene, ...e);
      this.deepEqual && deepEqual(t, this.lastValue) || (this.lastValue = t);
      this.lastRevision = a;
    }
  }
  readValue(...e) {
    this.checkForUpdates(e);
    return this.lastValue;
  }
  subscribe(e) {
    return this.scene.onChange(e, {
      allowDeferral: this.allowDeferral
    });
  }
  constructor(e, t, i = {}) {
    s(this, "lastArgs", null);
    s(this, "lastValue", null);
    s(this, "lastRevision", void 0);
    s(this, "lastSceneInstance", null);
    s(this, "scene", void 0);
    s(this, "computeValue", void 0);
    s(this, "deepEqual", void 0);
    s(this, "allowDeferral", void 0);
    this.lastRevision = null;
    this.lastSceneInstance = e;
    this.scene = e;
    this.computeValue = t;
    this.deepEqual = i.deepEqual ?? !0;
    this.allowDeferral = i.allowDeferral ?? !0;
  }
}
export class $$d0 {
  checkForUpdates(e) {
    let t = this.scene !== this.lastSceneInstance;
    if (!o(e, this.lastArgs || null) || t) {
      if (this.lastSceneInstance = this.scene, this.lastArgs = e, null !== this.lastValue && !this.scene.hasValidScene()) return;
      this.lastValue = this.computeValue(this.scene, ...e);
    }
  }
  readValue(...e) {
    this.checkForUpdates(e);
    return this.lastValue;
  }
  constructor(e, t) {
    s(this, "lastArgs", null);
    s(this, "lastValue", null);
    s(this, "lastSceneInstance", null);
    s(this, "scene", void 0);
    s(this, "computeValue", void 0);
    this.lastSceneInstance = e;
    this.scene = e;
    this.computeValue = t;
  }
}
export const L = $$d0;
export const M = $$l1;