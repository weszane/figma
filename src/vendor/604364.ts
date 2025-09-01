import _require from "../vendor/368474";
import { getErrorMap } from "../vendor/777234";
var i = this && this.__importDefault || function (e) {
  return e && e.__esModule ? e : {
    default: e
  };
};
exports.isAsync = exports.isValid = exports.isDirty = exports.isAborted = exports.OK = exports.DIRTY = exports.INVALID = exports.ParseStatus = exports.EMPTY_PATH = exports.makeIssue = void 0;
exports.addIssueToContext = h;
let o = i(_require);
let a = e => {
  let {
    data,
    path,
    errorMaps,
    issueData
  } = e;
  let o = [...path, ...(issueData.path || [])];
  let a = {
    ...issueData,
    path: o
  };
  if (void 0 !== issueData.message) return {
    ...issueData,
    path: o,
    message: issueData.message
  };
  let h = "";
  for (let e of errorMaps.filter(e => !!e).slice().reverse()) h = e(a, {
    data,
    defaultError: h
  }).message;
  return {
    ...issueData,
    path: o,
    message: h
  };
};
function h(e, n) {
  let i = getErrorMap();
  let a = exports.makeIssue({
    issueData: n,
    data: e.data,
    path: e.path,
    errorMaps: [e.common.contextualErrorMap, e.schemaErrorMap, i, i === o.$$default ? void 0 : o.$$default].filter(e => !!e)
  });
  e.common.issues.push(a);
}
exports.makeIssue = a;
exports.EMPTY_PATH = [];
class d {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    "valid" === this.value && (this.value = "dirty");
  }
  abort() {
    "aborted" !== this.value && (this.value = "aborted");
  }
  static mergeArray(e, n) {
    let i = [];
    for (let s of n) {
      if ("aborted" === s.status) return exports.INVALID;
      "dirty" === s.status && e.dirty();
      i.push(s.value);
    }
    return {
      status: e.value,
      value: i
    };
  }
  static async mergeObjectAsync(e, r) {
    let n = [];
    for (let e of r) {
      let r = await e.key;
      let i = await e.value;
      n.push({
        key: r,
        value: i
      });
    }
    return d.mergeObjectSync(e, n);
  }
  static mergeObjectSync(e, n) {
    let i = {};
    for (let s of n) {
      let {
        key,
        value
      } = s;
      if ("aborted" === key.status || "aborted" === value.status) return exports.INVALID;
      "dirty" === key.status && e.dirty();
      "dirty" === value.status && e.dirty();
      "__proto__" !== key.value && (void 0 !== value.value || s.alwaysSet) && (i[key.value] = value.value);
    }
    return {
      status: e.value,
      value: i
    };
  }
}
exports.ParseStatus = d;
exports.INVALID = Object.freeze({
  status: "aborted"
});
let p = e => ({
  status: "dirty",
  value: e
});
exports.DIRTY = p;
let g = e => ({
  status: "valid",
  value: e
});
exports.OK = g;
let m = e => "aborted" === e.status;
exports.isAborted = m;
let v = e => "dirty" === e.status;
exports.isDirty = v;
let y = e => "valid" === e.status;
exports.isValid = y;
let b = e => "undefined" != typeof Promise && e instanceof Promise;
exports.isAsync = b;