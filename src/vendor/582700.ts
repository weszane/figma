import { util } from "../vendor/781583";
exports.ZodError = exports.quotelessJson = exports.ZodIssueCode = void 0;
exports.ZodIssueCode = util.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"]);
let s = e => JSON.stringify(e, null, 2).replace(/"([^"]+)":/g, "$1:");
exports.quotelessJson = s;
class o extends Error {
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
    let r = new.target.prototype;
    Object.setPrototypeOf ? Object.setPrototypeOf(this, r) : this.__proto__ = r;
    this.name = "ZodError";
    this.issues = e;
  }
  format(e) {
    let r = e || function (e) {
      return e.message;
    };
    let n = {
      _errors: []
    };
    let i = e => {
      for (let s of e.issues) if ("invalid_union" === s.code) s.unionErrors.map(i);else if ("invalid_return_type" === s.code) i(s.returnTypeError);else if ("invalid_arguments" === s.code) i(s.argumentsError);else if (0 === s.path.length) n._errors.push(r(s));else {
        let e = n;
        let i = 0;
        for (; i < s.path.length;) {
          let n = s.path[i];
          i === s.path.length - 1 ? (e[n] = e[n] || {
            _errors: []
          }, e[n]._errors.push(r(s))) : e[n] = e[n] || {
            _errors: []
          };
          e = e[n];
          i++;
        }
      }
    };
    i(this);
    return n;
  }
  static assert(e) {
    if (!(e instanceof o)) throw Error(`Not a ZodError: ${e}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, util.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return 0 === this.issues.length;
  }
  flatten(e = e => e.message) {
    let r = {};
    let n = [];
    for (let i of this.issues) i.path.length > 0 ? (r[i.path[0]] = r[i.path[0]] || [], r[i.path[0]].push(e(i))) : n.push(e(i));
    return {
      formErrors: n,
      fieldErrors: r
    };
  }
  get formErrors() {
    return this.flatten();
  }
}
exports.ZodError = o;
o.create = e => new o(e);