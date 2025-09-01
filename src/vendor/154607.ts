import { ZS } from "../vendor/607848";
let $$i2 = ZS.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"]);
let $$A1 = e => JSON.stringify(e, null, 2).replace(/"([^"]+)":/g, "$1:");
export class $$o0 extends Error {
  get errors() {
    return this.issues;
  }
  constructor(e) {
    super();
    this.issues = [];
    this.addIssue = e => {
      this.issues = [...this.issues, e];
    };
    this.addIssues = (e = []) => {
      this.issues = [...this.issues, ...e];
    };
    let t = new.target.prototype;
    Object.setPrototypeOf ? Object.setPrototypeOf(this, t) : this.__proto__ = t;
    this.name = "ZodError";
    this.issues = e;
  }
  format(e) {
    let t = e || function (e) {
      return e.message;
    };
    let n = {
      _errors: []
    };
    let r = e => {
      for (let i of e.issues) if ("invalid_union" === i.code) i.unionErrors.map(r);else if ("invalid_return_type" === i.code) r(i.returnTypeError);else if ("invalid_arguments" === i.code) r(i.argumentsError);else if (0 === i.path.length) n._errors.push(t(i));else {
        let e = n;
        let r = 0;
        for (; r < i.path.length;) {
          let n = i.path[r];
          r === i.path.length - 1 ? (e[n] = e[n] || {
            _errors: []
          }, e[n]._errors.push(t(i))) : e[n] = e[n] || {
            _errors: []
          };
          e = e[n];
          r++;
        }
      }
    };
    r(this);
    return n;
  }
  static assert(e) {
    if (!(e instanceof $$o0)) throw Error(`Not a ZodError: ${e}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, ZS.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return 0 === this.issues.length;
  }
  flatten(e = e => e.message) {
    let t = {};
    let n = [];
    for (let r of this.issues) r.path.length > 0 ? (t[r.path[0]] = t[r.path[0]] || [], t[r.path[0]].push(e(r))) : n.push(e(r));
    return {
      formErrors: n,
      fieldErrors: t
    };
  }
  get formErrors() {
    return this.flatten();
  }
}
$$o0.create = e => new $$o0(e);
export const G = $$o0;
export const WI = $$A1;
export const eq = $$i2;