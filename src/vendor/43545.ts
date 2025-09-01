import { $W } from "../vendor/646593";
import { A } from "../vendor/746817";
let $$A9 = e => {
  let {
    data,
    path,
    errorMaps,
    issueData
  } = e;
  let A = [...path, ...(issueData.path || [])];
  let o = {
    ...issueData,
    path: A
  };
  if (void 0 !== issueData.message) return {
    ...issueData,
    path: A,
    message: issueData.message
  };
  let s = "";
  for (let e of errorMaps.filter(e => !!e).slice().reverse()) s = e(o, {
    data,
    defaultError: s
  }).message;
  return {
    ...issueData,
    path: A,
    message: s
  };
};
let $$o2 = [];
export function $$s10(e, t) {
  let n = $W();
  let o = $$A9({
    issueData: t,
    data: e.data,
    path: e.path,
    errorMaps: [e.common.contextualErrorMap, e.schemaErrorMap, n, n === A ? void 0 : A].filter(e => !!e)
  });
  e.common.issues.push(o);
}
export class $$a3 {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    "valid" === this.value && (this.value = "dirty");
  }
  abort() {
    "aborted" !== this.value && (this.value = "aborted");
  }
  static mergeArray(e, t) {
    let n = [];
    for (let r of t) {
      if ("aborted" === r.status) return $$l7;
      "dirty" === r.status && e.dirty();
      n.push(r.value);
    }
    return {
      status: e.value,
      value: n
    };
  }
  static async mergeObjectAsync(e, t) {
    let n = [];
    for (let e of t) {
      let t = await e.key;
      let r = await e.value;
      n.push({
        key: t,
        value: r
      });
    }
    return $$a3.mergeObjectSync(e, n);
  }
  static mergeObjectSync(e, t) {
    let n = {};
    for (let r of t) {
      let {
        key,
        value
      } = r;
      if ("aborted" === key.status || "aborted" === value.status) return $$l7;
      "dirty" === key.status && e.dirty();
      "dirty" === value.status && e.dirty();
      "__proto__" !== key.value && (void 0 !== value.value || r.alwaysSet) && (n[key.value] = value.value);
    }
    return {
      status: e.value,
      value: n
    };
  }
}
let $$l7 = Object.freeze({
  status: "aborted"
});
let $$u6 = e => ({
  status: "dirty",
  value: e
});
let $$g4 = e => ({
  status: "valid",
  value: e
});
let $$c1 = e => "aborted" === e.status;
let $$f0 = e => "dirty" === e.status;
let $$d5 = e => "valid" === e.status;
let $$h8 = e => "undefined" != typeof Promise && e instanceof Promise;
export const DM = $$f0;
export const G4 = $$c1;
export const I3 = $$o2;
export const MY = $$a3;
export const OK = $$g4;
export const fn = $$d5;
export const jm = $$u6;
export const uY = $$l7;
export const xP = $$h8;
export const y7 = $$A9;
export const zn = $$s10;