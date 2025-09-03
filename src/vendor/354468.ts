import { ZodError, ZodIssueCode } from "../vendor/582700";
import { getErrorMap, defaultErrorMap } from "../vendor/777234";
import { errorUtil } from "../vendor/232225";
import { isValid, ParseStatus, isAsync, addIssueToContext, INVALID, OK, isAborted, isDirty, makeIssue, DIRTY } from "../vendor/604364";
import { getParsedType, ZodParsedType, util } from "../vendor/781583";
var i;
let s;
exports.discriminatedUnion = exports.date = exports.boolean = exports.bigint = exports.array = exports.any = exports.coerce = exports.ZodFirstPartyTypeKind = exports.late = exports.ZodSchema = exports.Schema = exports.ZodReadonly = exports.ZodPipeline = exports.ZodBranded = exports.BRAND = exports.ZodNaN = exports.ZodCatch = exports.ZodDefault = exports.ZodNullable = exports.ZodOptional = exports.ZodTransformer = exports.ZodEffects = exports.ZodPromise = exports.ZodNativeEnum = exports.ZodEnum = exports.ZodLiteral = exports.ZodLazy = exports.ZodFunction = exports.ZodSet = exports.ZodMap = exports.ZodRecord = exports.ZodTuple = exports.ZodIntersection = exports.ZodDiscriminatedUnion = exports.ZodUnion = exports.ZodObject = exports.ZodArray = exports.ZodVoid = exports.ZodNever = exports.ZodUnknown = exports.ZodAny = exports.ZodNull = exports.ZodUndefined = exports.ZodSymbol = exports.ZodDate = exports.ZodBoolean = exports.ZodBigInt = exports.ZodNumber = exports.ZodString = exports.ZodType = void 0;
exports.NEVER = exports.$$void = exports.unknown = exports.union = exports.undefined = exports.tuple = exports.transformer = exports.symbol = exports.string = exports.strictObject = exports.set = exports.record = exports.promise = exports.preprocess = exports.pipeline = exports.ostring = exports.optional = exports.onumber = exports.oboolean = exports.object = exports.number = exports.nullable = exports.$$null = exports.never = exports.nativeEnum = exports.nan = exports.map = exports.literal = exports.lazy = exports.intersection = exports.$$instanceof = exports.$$function = exports.enum = exports.effect = void 0;
exports.datetimeRegex = j;
exports.custom = eI;
class g {
  constructor(e, r, n, i) {
    this._cachedPath = [];
    this.parent = e;
    this.data = r;
    this._path = n;
    this._key = i;
  }
  get path() {
    this._cachedPath.length || (Array.isArray(this._key) ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key));
    return this._cachedPath;
  }
}
let m = (e, r) => {
  if (isValid(r)) return {
    success: !0,
    data: r.value
  };
  if (!e.common.issues.length) throw Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error) return this._error;
      let r = new ZodError(e.common.issues);
      this._error = r;
      return this._error;
    }
  };
};
function v(e) {
  if (!e) return {};
  let {
    errorMap,
    invalid_type_error,
    required_error,
    description
  } = e;
  if (errorMap && (invalid_type_error || required_error)) throw Error('Can\'t use "invalid_type_error" or "required_error" in conjunction with custom error map.');
  return errorMap ? {
    errorMap,
    description
  } : {
    errorMap: (r, s) => {
      let {
        message
      } = e;
      return "invalid_enum_value" === r.code ? {
        message: message ?? s.defaultError
      } : void 0 === s.data ? {
        message: message ?? required_error ?? s.defaultError
      } : "invalid_type" !== r.code ? {
        message: s.defaultError
      } : {
        message: message ?? invalid_type_error ?? s.defaultError
      };
    },
    description
  };
}
class y {
  get description() {
    return this._def.description;
  }
  _getType(e) {
    return getParsedType(e.data);
  }
  _getOrReturnCtx(e, r) {
    return r || {
      common: e.parent.common,
      data: e.data,
      parsedType: getParsedType(e.data),
      schemaErrorMap: this._def.errorMap,
      path: e.path,
      parent: e.parent
    };
  }
  _processInputParams(e) {
    return {
      status: new ParseStatus(),
      ctx: {
        common: e.parent.common,
        data: e.data,
        parsedType: getParsedType(e.data),
        schemaErrorMap: this._def.errorMap,
        path: e.path,
        parent: e.parent
      }
    };
  }
  _parseSync(e) {
    let r = this._parse(e);
    if (isAsync(r)) throw Error("Synchronous parse encountered promise.");
    return r;
  }
  _parseAsync(e) {
    return Promise.resolve(this._parse(e));
  }
  parse(e, r) {
    let n = this.safeParse(e, r);
    if (n.success) return n.data;
    throw n.error;
  }
  safeParse(e, r) {
    let n = {
      common: {
        issues: [],
        async: r?.async ?? !1,
        contextualErrorMap: r?.errorMap
      },
      path: r?.path || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: e,
      parsedType: getParsedType(e)
    };
    let i = this._parseSync({
      data: e,
      path: n.path,
      parent: n
    });
    return m(n, i);
  }
  "~validate"(e) {
    let r = {
      common: {
        issues: [],
        async: !!this["~standard"].async
      },
      path: [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: e,
      parsedType: getParsedType(e)
    };
    if (!this["~standard"].async) try {
      let n = this._parseSync({
        data: e,
        path: [],
        parent: r
      });
      return isValid(n) ? {
        value: n.value
      } : {
        issues: r.common.issues
      };
    } catch (e) {
      e?.message?.toLowerCase()?.includes("encountered") && (this["~standard"].async = !0);
      r.common = {
        issues: [],
        async: !0
      };
    }
    return this._parseAsync({
      data: e,
      path: [],
      parent: r
    }).then(e => isValid(e) ? {
      value: e.value
    } : {
      issues: r.common.issues
    });
  }
  async parseAsync(e, r) {
    let n = await this.safeParseAsync(e, r);
    if (n.success) return n.data;
    throw n.error;
  }
  async safeParseAsync(e, r) {
    let n = {
      common: {
        issues: [],
        contextualErrorMap: r?.errorMap,
        async: !0
      },
      path: r?.path || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: e,
      parsedType: getParsedType(e)
    };
    let i = this._parse({
      data: e,
      path: n.path,
      parent: n
    });
    return m(n, await (isAsync(i) ? i : Promise.resolve(i)));
  }
  refine(e, r) {
    let n = e => "string" == typeof r || void 0 === r ? {
      message: r
    } : "function" == typeof r ? r(e) : r;
    return this._refinement((r, i) => {
      let s = e(r);
      let a = () => i.addIssue({
        code: ZodIssueCode.custom,
        ...n(r)
      });
      return "undefined" != typeof Promise && s instanceof Promise ? s.then(e => !!e || (a(), !1)) : !!s || (a(), !1);
    });
  }
  refinement(e, r) {
    return this._refinement((n, i) => !!e(n) || (i.addIssue("function" == typeof r ? r(n, i) : r), !1));
  }
  _refinement(e) {
    return new eO({
      schema: this,
      typeName: i.ZodEffects,
      effect: {
        type: "refinement",
        refinement: e
      }
    });
  }
  superRefine(e) {
    return this._refinement(e);
  }
  constructor(e) {
    this.spa = this.safeParseAsync;
    this._def = e;
    this.parse = this.parse.bind(this);
    this.safeParse = this.safeParse.bind(this);
    this.parseAsync = this.parseAsync.bind(this);
    this.safeParseAsync = this.safeParseAsync.bind(this);
    this.spa = this.spa.bind(this);
    this.refine = this.refine.bind(this);
    this.refinement = this.refinement.bind(this);
    this.superRefine = this.superRefine.bind(this);
    this.optional = this.optional.bind(this);
    this.nullable = this.nullable.bind(this);
    this.nullish = this.nullish.bind(this);
    this.array = this.array.bind(this);
    this.promise = this.promise.bind(this);
    this.or = this.or.bind(this);
    this.and = this.and.bind(this);
    this.transform = this.transform.bind(this);
    this.brand = this.brand.bind(this);
    this.$$default = this.$$default.bind(this);
    this.catch = this.catch.bind(this);
    this.describe = this.describe.bind(this);
    this.pipe = this.pipe.bind(this);
    this.readonly = this.readonly.bind(this);
    this.isNullable = this.isNullable.bind(this);
    this.isOptional = this.isOptional.bind(this);
    this["~standard"] = {
      version: 1,
      vendor: "zod",
      validate: e => this["~validate"](e)
    };
  }
  optional() {
    return ex.create(this, this._def);
  }
  nullable() {
    return ew.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return et.create(this);
  }
  promise() {
    return eb.create(this, this._def);
  }
  or(e) {
    return ei.create([this, e], this._def);
  }
  and(e) {
    return el.create(this, e, this._def);
  }
  transform(e) {
    return new eO({
      ...v(this._def),
      schema: this,
      typeName: i.ZodEffects,
      effect: {
        type: "transform",
        transform: e
      }
    });
  }
  default(e) {
    let r = "function" == typeof e ? e : () => e;
    return new ek({
      ...v(this._def),
      innerType: this,
      defaultValue: r,
      typeName: i.ZodDefault
    });
  }
  brand() {
    return new eE({
      typeName: i.ZodBranded,
      type: this,
      ...v(this._def)
    });
  }
  catch(e) {
    let r = "function" == typeof e ? e : () => e;
    return new e_({
      ...v(this._def),
      innerType: this,
      catchValue: r,
      typeName: i.ZodCatch
    });
  }
  describe(e) {
    return new this.constructor({
      ...this._def,
      description: e
    });
  }
  pipe(e) {
    return eA.create(this, e);
  }
  readonly() {
    return eC.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
exports.ZodType = y;
exports.Schema = y;
exports.ZodSchema = y;
let b = /^c[^\s-]{8,}$/i;
let O = /^[0-9a-z]+$/;
let x = /^[0-9A-HJKMNP-TV-Z]{26}$/i;
let w = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
let k = /^[a-z0-9_-]{21}$/i;
let _ = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/;
let S = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
let E = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
let A = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let C = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
let T = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/;
let I = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/;
let P = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
let R = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
let M = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/;
let D = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))";
let N = RegExp(`^${D}$`);
function $(e) {
  let r = "[0-5]\\d";
  e.precision ? r = `${r}\\.\\d{${e.precision}}` : null == e.precision && (r = `${r}(\\.\\d+)?`);
  let n = e.precision ? "+" : "?";
  return `([01]\\d|2[0-3]):[0-5]\\d(:${r})${n}`;
}
function L(e) {
  return RegExp(`^${$(e)}$`);
}
function j(e) {
  let r = `${D}T${$(e)}`;
  let n = [];
  n.push(e.local ? "Z?" : "Z");
  e.offset && n.push("([+-]\\d{2}:?\\d{2})");
  r = `${r}(${n.join("|")})`;
  return RegExp(`^${r}$`);
}
function z(e, r) {
  return !!(("v4" === r || !r) && C.test(e) || ("v6" === r || !r) && I.test(e));
}
function Z(e, r) {
  if (!_.test(e)) return !1;
  try {
    let [n] = e.split(".");
    let i = n.replace(/-/g, "+").replace(/_/g, "/").padEnd(n.length + (4 - n.length % 4) % 4, "=");
    let s = JSON.parse(atob(i));
    if ("object" != typeof s || null === s || "typ" in s && s?.typ !== "JWT" || !s.alg || r && s.alg !== r) return !1;
    return !0;
  } catch {
    return !1;
  }
}
function F(e, r) {
  return !!(("v4" === r || !r) && T.test(e) || ("v6" === r || !r) && P.test(e));
}
class U extends y {
  _parse(e) {
    let r;
    if (this._def.coerce && (e.data = String(e.data)), this._getType(e) !== ZodParsedType.string) {
      let r = this._getOrReturnCtx(e);
      addIssueToContext(r, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.string,
        received: r.parsedType
      });
      return INVALID;
    }
    let n = new ParseStatus();
    for (let i of this._def.checks) if ("min" === i.kind) e.data.length < i.value && (r = this._getOrReturnCtx(e, r), addIssueToContext(r, {
      code: ZodIssueCode.too_small,
      minimum: i.value,
      type: "string",
      inclusive: !0,
      exact: !1,
      message: i.message
    }), n.dirty()); else if ("max" === i.kind) e.data.length > i.value && (r = this._getOrReturnCtx(e, r), addIssueToContext(r, {
      code: ZodIssueCode.too_big,
      maximum: i.value,
      type: "string",
      inclusive: !0,
      exact: !1,
      message: i.message
    }), n.dirty()); else if ("length" === i.kind) {
      let s = e.data.length > i.value;
      let a = e.data.length < i.value;
      (s || a) && (r = this._getOrReturnCtx(e, r), s ? addIssueToContext(r, {
        code: ZodIssueCode.too_big,
        maximum: i.value,
        type: "string",
        inclusive: !0,
        exact: !0,
        message: i.message
      }) : a && addIssueToContext(r, {
        code: ZodIssueCode.too_small,
        minimum: i.value,
        type: "string",
        inclusive: !0,
        exact: !0,
        message: i.message
      }), n.dirty());
    } else if ("email" === i.kind) E.test(e.data) || (r = this._getOrReturnCtx(e, r), addIssueToContext(r, {
      validation: "email",
      code: ZodIssueCode.invalid_string,
      message: i.message
    }), n.dirty()); else if ("emoji" === i.kind) {
      s || (s = RegExp(A, "u"));
      s.test(e.data) || (r = this._getOrReturnCtx(e, r), addIssueToContext(r, {
        validation: "emoji",
        code: ZodIssueCode.invalid_string,
        message: i.message
      }), n.dirty());
    } else if ("uuid" === i.kind) w.test(e.data) || (r = this._getOrReturnCtx(e, r), addIssueToContext(r, {
      validation: "uuid",
      code: ZodIssueCode.invalid_string,
      message: i.message
    }), n.dirty()); else if ("nanoid" === i.kind) k.test(e.data) || (r = this._getOrReturnCtx(e, r), addIssueToContext(r, {
      validation: "nanoid",
      code: ZodIssueCode.invalid_string,
      message: i.message
    }), n.dirty()); else if ("cuid" === i.kind) b.test(e.data) || (r = this._getOrReturnCtx(e, r), addIssueToContext(r, {
      validation: "cuid",
      code: ZodIssueCode.invalid_string,
      message: i.message
    }), n.dirty()); else if ("cuid2" === i.kind) O.test(e.data) || (r = this._getOrReturnCtx(e, r), addIssueToContext(r, {
      validation: "cuid2",
      code: ZodIssueCode.invalid_string,
      message: i.message
    }), n.dirty()); else if ("ulid" === i.kind) x.test(e.data) || (r = this._getOrReturnCtx(e, r), addIssueToContext(r, {
      validation: "ulid",
      code: ZodIssueCode.invalid_string,
      message: i.message
    }), n.dirty()); else if ("url" === i.kind) try {
      new URL(e.data);
    } catch {
      r = this._getOrReturnCtx(e, r);
      addIssueToContext(r, {
        validation: "url",
        code: ZodIssueCode.invalid_string,
        message: i.message
      });
      n.dirty();
    } else "regex" === i.kind ? (i.regex.lastIndex = 0, i.regex.test(e.data) || (r = this._getOrReturnCtx(e, r), addIssueToContext(r, {
      validation: "regex",
      code: ZodIssueCode.invalid_string,
      message: i.message
    }), n.dirty())) : "trim" === i.kind ? e.data = e.data.trim() : "includes" === i.kind ? e.data.includes(i.value, i.position) || (r = this._getOrReturnCtx(e, r), addIssueToContext(r, {
      code: ZodIssueCode.invalid_string,
      validation: {
        includes: i.value,
        position: i.position
      },
      message: i.message
    }), n.dirty()) : "toLowerCase" === i.kind ? e.data = e.data.toLowerCase() : "toUpperCase" === i.kind ? e.data = e.data.toUpperCase() : "startsWith" === i.kind ? e.data.startsWith(i.value) || (r = this._getOrReturnCtx(e, r), addIssueToContext(r, {
      code: ZodIssueCode.invalid_string,
      validation: {
        startsWith: i.value
      },
      message: i.message
    }), n.dirty()) : "endsWith" === i.kind ? e.data.endsWith(i.value) || (r = this._getOrReturnCtx(e, r), addIssueToContext(r, {
      code: ZodIssueCode.invalid_string,
      validation: {
        endsWith: i.value
      },
      message: i.message
    }), n.dirty()) : "datetime" === i.kind ? j(i).test(e.data) || (r = this._getOrReturnCtx(e, r), addIssueToContext(r, {
      code: ZodIssueCode.invalid_string,
      validation: "datetime",
      message: i.message
    }), n.dirty()) : "date" === i.kind ? N.test(e.data) || (r = this._getOrReturnCtx(e, r), addIssueToContext(r, {
      code: ZodIssueCode.invalid_string,
      validation: "date",
      message: i.message
    }), n.dirty()) : "time" === i.kind ? L(i).test(e.data) || (r = this._getOrReturnCtx(e, r), addIssueToContext(r, {
      code: ZodIssueCode.invalid_string,
      validation: "time",
      message: i.message
    }), n.dirty()) : "duration" === i.kind ? S.test(e.data) || (r = this._getOrReturnCtx(e, r), addIssueToContext(r, {
      validation: "duration",
      code: ZodIssueCode.invalid_string,
      message: i.message
    }), n.dirty()) : "ip" === i.kind ? z(e.data, i.version) || (r = this._getOrReturnCtx(e, r), addIssueToContext(r, {
      validation: "ip",
      code: ZodIssueCode.invalid_string,
      message: i.message
    }), n.dirty()) : "jwt" === i.kind ? Z(e.data, i.alg) || (r = this._getOrReturnCtx(e, r), addIssueToContext(r, {
      validation: "jwt",
      code: ZodIssueCode.invalid_string,
      message: i.message
    }), n.dirty()) : "cidr" === i.kind ? F(e.data, i.version) || (r = this._getOrReturnCtx(e, r), addIssueToContext(r, {
      validation: "cidr",
      code: ZodIssueCode.invalid_string,
      message: i.message
    }), n.dirty()) : "base64" === i.kind ? R.test(e.data) || (r = this._getOrReturnCtx(e, r), addIssueToContext(r, {
      validation: "base64",
      code: ZodIssueCode.invalid_string,
      message: i.message
    }), n.dirty()) : "base64url" === i.kind ? M.test(e.data) || (r = this._getOrReturnCtx(e, r), addIssueToContext(r, {
      validation: "base64url",
      code: ZodIssueCode.invalid_string,
      message: i.message
    }), n.dirty()) : util.assertNever(i);
    return {
      status: n.value,
      value: e.data
    };
  }
  _regex(e, r, n) {
    return this.refinement(r => e.test(r), {
      validation: r,
      code: ZodIssueCode.invalid_string,
      ...errorUtil.errToObj(n)
    });
  }
  _addCheck(e) {
    return new U({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  email(e) {
    return this._addCheck({
      kind: "email",
      ...errorUtil.errToObj(e)
    });
  }
  url(e) {
    return this._addCheck({
      kind: "url",
      ...errorUtil.errToObj(e)
    });
  }
  emoji(e) {
    return this._addCheck({
      kind: "emoji",
      ...errorUtil.errToObj(e)
    });
  }
  uuid(e) {
    return this._addCheck({
      kind: "uuid",
      ...errorUtil.errToObj(e)
    });
  }
  nanoid(e) {
    return this._addCheck({
      kind: "nanoid",
      ...errorUtil.errToObj(e)
    });
  }
  cuid(e) {
    return this._addCheck({
      kind: "cuid",
      ...errorUtil.errToObj(e)
    });
  }
  cuid2(e) {
    return this._addCheck({
      kind: "cuid2",
      ...errorUtil.errToObj(e)
    });
  }
  ulid(e) {
    return this._addCheck({
      kind: "ulid",
      ...errorUtil.errToObj(e)
    });
  }
  base64(e) {
    return this._addCheck({
      kind: "base64",
      ...errorUtil.errToObj(e)
    });
  }
  base64url(e) {
    return this._addCheck({
      kind: "base64url",
      ...errorUtil.errToObj(e)
    });
  }
  jwt(e) {
    return this._addCheck({
      kind: "jwt",
      ...errorUtil.errToObj(e)
    });
  }
  ip(e) {
    return this._addCheck({
      kind: "ip",
      ...errorUtil.errToObj(e)
    });
  }
  cidr(e) {
    return this._addCheck({
      kind: "cidr",
      ...errorUtil.errToObj(e)
    });
  }
  datetime(e) {
    return "string" == typeof e ? this._addCheck({
      kind: "datetime",
      precision: null,
      offset: !1,
      local: !1,
      message: e
    }) : this._addCheck({
      kind: "datetime",
      precision: void 0 === e?.precision ? null : e?.precision,
      offset: e?.offset ?? !1,
      local: e?.local ?? !1,
      ...errorUtil.errToObj(e?.message)
    });
  }
  date(e) {
    return this._addCheck({
      kind: "date",
      message: e
    });
  }
  time(e) {
    return "string" == typeof e ? this._addCheck({
      kind: "time",
      precision: null,
      message: e
    }) : this._addCheck({
      kind: "time",
      precision: void 0 === e?.precision ? null : e?.precision,
      ...errorUtil.errToObj(e?.message)
    });
  }
  duration(e) {
    return this._addCheck({
      kind: "duration",
      ...errorUtil.errToObj(e)
    });
  }
  regex(e, r) {
    return this._addCheck({
      kind: "regex",
      regex: e,
      ...errorUtil.errToObj(r)
    });
  }
  includes(e, r) {
    return this._addCheck({
      kind: "includes",
      value: e,
      position: r?.position,
      ...errorUtil.errToObj(r?.message)
    });
  }
  startsWith(e, r) {
    return this._addCheck({
      kind: "startsWith",
      value: e,
      ...errorUtil.errToObj(r)
    });
  }
  endsWith(e, r) {
    return this._addCheck({
      kind: "endsWith",
      value: e,
      ...errorUtil.errToObj(r)
    });
  }
  min(e, r) {
    return this._addCheck({
      kind: "min",
      value: e,
      ...errorUtil.errToObj(r)
    });
  }
  max(e, r) {
    return this._addCheck({
      kind: "max",
      value: e,
      ...errorUtil.errToObj(r)
    });
  }
  length(e, r) {
    return this._addCheck({
      kind: "length",
      value: e,
      ...errorUtil.errToObj(r)
    });
  }
  nonempty(e) {
    return this.min(1, errorUtil.errToObj(e));
  }
  trim() {
    return new U({
      ...this._def,
      checks: [...this._def.checks, {
        kind: "trim"
      }]
    });
  }
  toLowerCase() {
    return new U({
      ...this._def,
      checks: [...this._def.checks, {
        kind: "toLowerCase"
      }]
    });
  }
  toUpperCase() {
    return new U({
      ...this._def,
      checks: [...this._def.checks, {
        kind: "toUpperCase"
      }]
    });
  }
  get isDatetime() {
    return !!this._def.checks.find(e => "datetime" === e.kind);
  }
  get isDate() {
    return !!this._def.checks.find(e => "date" === e.kind);
  }
  get isTime() {
    return !!this._def.checks.find(e => "time" === e.kind);
  }
  get isDuration() {
    return !!this._def.checks.find(e => "duration" === e.kind);
  }
  get isEmail() {
    return !!this._def.checks.find(e => "email" === e.kind);
  }
  get isURL() {
    return !!this._def.checks.find(e => "url" === e.kind);
  }
  get isEmoji() {
    return !!this._def.checks.find(e => "emoji" === e.kind);
  }
  get isUUID() {
    return !!this._def.checks.find(e => "uuid" === e.kind);
  }
  get isNANOID() {
    return !!this._def.checks.find(e => "nanoid" === e.kind);
  }
  get isCUID() {
    return !!this._def.checks.find(e => "cuid" === e.kind);
  }
  get isCUID2() {
    return !!this._def.checks.find(e => "cuid2" === e.kind);
  }
  get isULID() {
    return !!this._def.checks.find(e => "ulid" === e.kind);
  }
  get isIP() {
    return !!this._def.checks.find(e => "ip" === e.kind);
  }
  get isCIDR() {
    return !!this._def.checks.find(e => "cidr" === e.kind);
  }
  get isBase64() {
    return !!this._def.checks.find(e => "base64" === e.kind);
  }
  get isBase64url() {
    return !!this._def.checks.find(e => "base64url" === e.kind);
  }
  get minLength() {
    let e = null;
    for (let r of this._def.checks) "min" === r.kind && (null === e || r.value > e) && (e = r.value);
    return e;
  }
  get maxLength() {
    let e = null;
    for (let r of this._def.checks) "max" === r.kind && (null === e || r.value < e) && (e = r.value);
    return e;
  }
}
function Q(e, r) {
  let n = (e.toString().split(".")[1] || "").length;
  let i = (r.toString().split(".")[1] || "").length;
  let s = n > i ? n : i;
  return Number.parseInt(e.toFixed(s).replace(".", "")) % Number.parseInt(r.toFixed(s).replace(".", "")) / 10 ** s;
}
exports.ZodString = U;
U.create = e => new U({
  checks: [],
  typeName: i.ZodString,
  coerce: e?.coerce ?? !1,
  ...v(e)
});
class V extends y {
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
    this.step = this.multipleOf;
  }
  _parse(e) {
    let r;
    if (this._def.coerce && (e.data = Number(e.data)), this._getType(e) !== ZodParsedType.number) {
      let r = this._getOrReturnCtx(e);
      addIssueToContext(r, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.number,
        received: r.parsedType
      });
      return INVALID;
    }
    let n = new ParseStatus();
    for (let i of this._def.checks) "int" === i.kind ? util.isInteger(e.data) || (r = this._getOrReturnCtx(e, r), addIssueToContext(r, {
      code: ZodIssueCode.invalid_type,
      expected: "integer",
      received: "float",
      message: i.message
    }), n.dirty()) : "min" === i.kind ? (i.inclusive ? e.data < i.value : e.data <= i.value) && (r = this._getOrReturnCtx(e, r), addIssueToContext(r, {
      code: ZodIssueCode.too_small,
      minimum: i.value,
      type: "number",
      inclusive: i.inclusive,
      exact: !1,
      message: i.message
    }), n.dirty()) : "max" === i.kind ? (i.inclusive ? e.data > i.value : e.data >= i.value) && (r = this._getOrReturnCtx(e, r), addIssueToContext(r, {
      code: ZodIssueCode.too_big,
      maximum: i.value,
      type: "number",
      inclusive: i.inclusive,
      exact: !1,
      message: i.message
    }), n.dirty()) : "multipleOf" === i.kind ? 0 !== Q(e.data, i.value) && (r = this._getOrReturnCtx(e, r), addIssueToContext(r, {
      code: ZodIssueCode.not_multiple_of,
      multipleOf: i.value,
      message: i.message
    }), n.dirty()) : "finite" === i.kind ? Number.isFinite(e.data) || (r = this._getOrReturnCtx(e, r), addIssueToContext(r, {
      code: ZodIssueCode.not_finite,
      message: i.message
    }), n.dirty()) : util.assertNever(i);
    return {
      status: n.value,
      value: e.data
    };
  }
  gte(e, r) {
    return this.setLimit("min", e, !0, errorUtil.toString(r));
  }
  gt(e, r) {
    return this.setLimit("min", e, !1, errorUtil.toString(r));
  }
  lte(e, r) {
    return this.setLimit("max", e, !0, errorUtil.toString(r));
  }
  lt(e, r) {
    return this.setLimit("max", e, !1, errorUtil.toString(r));
  }
  setLimit(e, r, n, i) {
    return new V({
      ...this._def,
      checks: [...this._def.checks, {
        kind: e,
        value: r,
        inclusive: n,
        message: errorUtil.toString(i)
      }]
    });
  }
  _addCheck(e) {
    return new V({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  int(e) {
    return this._addCheck({
      kind: "int",
      message: errorUtil.toString(e)
    });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: errorUtil.toString(e)
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: errorUtil.toString(e)
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: errorUtil.toString(e)
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: errorUtil.toString(e)
    });
  }
  multipleOf(e, r) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: errorUtil.toString(r)
    });
  }
  finite(e) {
    return this._addCheck({
      kind: "finite",
      message: errorUtil.toString(e)
    });
  }
  safe(e) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: errorUtil.toString(e)
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: errorUtil.toString(e)
    });
  }
  get minValue() {
    let e = null;
    for (let r of this._def.checks) "min" === r.kind && (null === e || r.value > e) && (e = r.value);
    return e;
  }
  get maxValue() {
    let e = null;
    for (let r of this._def.checks) "max" === r.kind && (null === e || r.value < e) && (e = r.value);
    return e;
  }
  get isInt() {
    return !!this._def.checks.find(e => "int" === e.kind || "multipleOf" === e.kind && util.isInteger(e.value));
  }
  get isFinite() {
    let e = null;
    let r = null;
    for (let n of this._def.checks) {
      if ("finite" === n.kind || "int" === n.kind || "multipleOf" === n.kind) return !0;
      "min" === n.kind ? (null === r || n.value > r) && (r = n.value) : "max" === n.kind && (null === e || n.value < e) && (e = n.value);
    }
    return Number.isFinite(r) && Number.isFinite(e);
  }
}
exports.ZodNumber = V;
V.create = e => new V({
  checks: [],
  typeName: i.ZodNumber,
  coerce: e?.coerce || !1,
  ...v(e)
});
class B extends y {
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
  }
  _parse(e) {
    let r;
    if (this._def.coerce) try {
      e.data = BigInt(e.data);
    } catch {
      return this._getInvalidInput(e);
    }
    if (this._getType(e) !== ZodParsedType.bigint) return this._getInvalidInput(e);
    let n = new ParseStatus();
    for (let i of this._def.checks) "min" === i.kind ? (i.inclusive ? e.data < i.value : e.data <= i.value) && (r = this._getOrReturnCtx(e, r), addIssueToContext(r, {
      code: ZodIssueCode.too_small,
      type: "bigint",
      minimum: i.value,
      inclusive: i.inclusive,
      message: i.message
    }), n.dirty()) : "max" === i.kind ? (i.inclusive ? e.data > i.value : e.data >= i.value) && (r = this._getOrReturnCtx(e, r), addIssueToContext(r, {
      code: ZodIssueCode.too_big,
      type: "bigint",
      maximum: i.value,
      inclusive: i.inclusive,
      message: i.message
    }), n.dirty()) : "multipleOf" === i.kind ? e.data % i.value !== BigInt(0) && (r = this._getOrReturnCtx(e, r), addIssueToContext(r, {
      code: ZodIssueCode.not_multiple_of,
      multipleOf: i.value,
      message: i.message
    }), n.dirty()) : util.assertNever(i);
    return {
      status: n.value,
      value: e.data
    };
  }
  _getInvalidInput(e) {
    let r = this._getOrReturnCtx(e);
    addIssueToContext(r, {
      code: ZodIssueCode.invalid_type,
      expected: ZodParsedType.bigint,
      received: r.parsedType
    });
    return INVALID;
  }
  gte(e, r) {
    return this.setLimit("min", e, !0, errorUtil.toString(r));
  }
  gt(e, r) {
    return this.setLimit("min", e, !1, errorUtil.toString(r));
  }
  lte(e, r) {
    return this.setLimit("max", e, !0, errorUtil.toString(r));
  }
  lt(e, r) {
    return this.setLimit("max", e, !1, errorUtil.toString(r));
  }
  setLimit(e, r, n, i) {
    return new B({
      ...this._def,
      checks: [...this._def.checks, {
        kind: e,
        value: r,
        inclusive: n,
        message: errorUtil.toString(i)
      }]
    });
  }
  _addCheck(e) {
    return new B({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: errorUtil.toString(e)
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: errorUtil.toString(e)
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: errorUtil.toString(e)
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: errorUtil.toString(e)
    });
  }
  multipleOf(e, r) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: errorUtil.toString(r)
    });
  }
  get minValue() {
    let e = null;
    for (let r of this._def.checks) "min" === r.kind && (null === e || r.value > e) && (e = r.value);
    return e;
  }
  get maxValue() {
    let e = null;
    for (let r of this._def.checks) "max" === r.kind && (null === e || r.value < e) && (e = r.value);
    return e;
  }
}
exports.ZodBigInt = B;
B.create = e => new B({
  checks: [],
  typeName: i.ZodBigInt,
  coerce: e?.coerce ?? !1,
  ...v(e)
});
class q extends y {
  _parse(e) {
    if (this._def.coerce && (e.data = !!e.data), this._getType(e) !== ZodParsedType.boolean) {
      let r = this._getOrReturnCtx(e);
      addIssueToContext(r, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.boolean,
        received: r.parsedType
      });
      return INVALID;
    }
    return OK(e.data);
  }
}
exports.ZodBoolean = q;
q.create = e => new q({
  typeName: i.ZodBoolean,
  coerce: e?.coerce || !1,
  ...v(e)
});
class W extends y {
  _parse(e) {
    let r;
    if (this._def.coerce && (e.data = new Date(e.data)), this._getType(e) !== ZodParsedType.date) {
      let r = this._getOrReturnCtx(e);
      addIssueToContext(r, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.date,
        received: r.parsedType
      });
      return INVALID;
    }
    if (Number.isNaN(e.data.getTime())) {
      let r = this._getOrReturnCtx(e);
      addIssueToContext(r, {
        code: ZodIssueCode.invalid_date
      });
      return INVALID;
    }
    let n = new ParseStatus();
    for (let i of this._def.checks) "min" === i.kind ? e.data.getTime() < i.value && (r = this._getOrReturnCtx(e, r), addIssueToContext(r, {
      code: ZodIssueCode.too_small,
      message: i.message,
      inclusive: !0,
      exact: !1,
      minimum: i.value,
      type: "date"
    }), n.dirty()) : "max" === i.kind ? e.data.getTime() > i.value && (r = this._getOrReturnCtx(e, r), addIssueToContext(r, {
      code: ZodIssueCode.too_big,
      message: i.message,
      inclusive: !0,
      exact: !1,
      maximum: i.value,
      type: "date"
    }), n.dirty()) : util.assertNever(i);
    return {
      status: n.value,
      value: new Date(e.data.getTime())
    };
  }
  _addCheck(e) {
    return new W({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  min(e, r) {
    return this._addCheck({
      kind: "min",
      value: e.getTime(),
      message: errorUtil.toString(r)
    });
  }
  max(e, r) {
    return this._addCheck({
      kind: "max",
      value: e.getTime(),
      message: errorUtil.toString(r)
    });
  }
  get minDate() {
    let e = null;
    for (let r of this._def.checks) "min" === r.kind && (null === e || r.value > e) && (e = r.value);
    return null != e ? new Date(e) : null;
  }
  get maxDate() {
    let e = null;
    for (let r of this._def.checks) "max" === r.kind && (null === e || r.value < e) && (e = r.value);
    return null != e ? new Date(e) : null;
  }
}
exports.ZodDate = W;
W.create = e => new W({
  checks: [],
  coerce: e?.coerce || !1,
  typeName: i.ZodDate,
  ...v(e)
});
class Y extends y {
  _parse(e) {
    if (this._getType(e) !== ZodParsedType.symbol) {
      let r = this._getOrReturnCtx(e);
      addIssueToContext(r, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.symbol,
        received: r.parsedType
      });
      return INVALID;
    }
    return OK(e.data);
  }
}
exports.ZodSymbol = Y;
Y.create = e => new Y({
  typeName: i.ZodSymbol,
  ...v(e)
});
class G extends y {
  _parse(e) {
    if (this._getType(e) !== ZodParsedType.undefined) {
      let r = this._getOrReturnCtx(e);
      addIssueToContext(r, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.undefined,
        received: r.parsedType
      });
      return INVALID;
    }
    return OK(e.data);
  }
}
exports.ZodUndefined = G;
G.create = e => new G({
  typeName: i.ZodUndefined,
  ...v(e)
});
class X extends y {
  _parse(e) {
    if (this._getType(e) !== ZodParsedType.$$null) {
      let r = this._getOrReturnCtx(e);
      addIssueToContext(r, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.$$null,
        received: r.parsedType
      });
      return INVALID;
    }
    return OK(e.data);
  }
}
exports.ZodNull = X;
X.create = e => new X({
  typeName: i.ZodNull,
  ...v(e)
});
class H extends y {
  constructor() {
    super(...arguments);
    this._any = !0;
  }
  _parse(e) {
    return OK(e.data);
  }
}
exports.ZodAny = H;
H.create = e => new H({
  typeName: i.ZodAny,
  ...v(e)
});
class K extends y {
  constructor() {
    super(...arguments);
    this._unknown = !0;
  }
  _parse(e) {
    return OK(e.data);
  }
}
exports.ZodUnknown = K;
K.create = e => new K({
  typeName: i.ZodUnknown,
  ...v(e)
});
class J extends y {
  _parse(e) {
    let r = this._getOrReturnCtx(e);
    addIssueToContext(r, {
      code: ZodIssueCode.invalid_type,
      expected: ZodParsedType.never,
      received: r.parsedType
    });
    return INVALID;
  }
}
exports.ZodNever = J;
J.create = e => new J({
  typeName: i.ZodNever,
  ...v(e)
});
class ee extends y {
  _parse(e) {
    if (this._getType(e) !== ZodParsedType.undefined) {
      let r = this._getOrReturnCtx(e);
      addIssueToContext(r, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.$$void,
        received: r.parsedType
      });
      return INVALID;
    }
    return OK(e.data);
  }
}
exports.ZodVoid = ee;
ee.create = e => new ee({
  typeName: i.ZodVoid,
  ...v(e)
});
class et extends y {
  _parse(e) {
    let {
      ctx,
      status
    } = this._processInputParams(e);
    let i = this._def;
    if (ctx.parsedType !== ZodParsedType.array) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      });
      return INVALID;
    }
    if (null !== i.exactLength) {
      let e = ctx.data.length > i.exactLength.value;
      let s = ctx.data.length < i.exactLength.value;
      (e || s) && (addIssueToContext(ctx, {
        code: e ? ZodIssueCode.too_big : ZodIssueCode.too_small,
        minimum: s ? i.exactLength.value : void 0,
        maximum: e ? i.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: i.exactLength.message
      }), status.dirty());
    }
    if (null !== i.minLength && ctx.data.length < i.minLength.value && (addIssueToContext(ctx, {
      code: ZodIssueCode.too_small,
      minimum: i.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: i.minLength.message
    }), status.dirty()), null !== i.maxLength && ctx.data.length > i.maxLength.value && (addIssueToContext(ctx, {
      code: ZodIssueCode.too_big,
      maximum: i.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: i.maxLength.message
    }), status.dirty()), ctx.common.async) return Promise.all([...ctx.data].map((e, n) => i.type._parseAsync(new g(ctx, e, ctx.path, n)))).then(e => ParseStatus.mergeArray(status, e));
    let s = [...ctx.data].map((e, n) => i.type._parseSync(new g(ctx, e, ctx.path, n)));
    return ParseStatus.mergeArray(status, s);
  }
  get element() {
    return this._def.type;
  }
  min(e, r) {
    return new et({
      ...this._def,
      minLength: {
        value: e,
        message: errorUtil.toString(r)
      }
    });
  }
  max(e, r) {
    return new et({
      ...this._def,
      maxLength: {
        value: e,
        message: errorUtil.toString(r)
      }
    });
  }
  length(e, r) {
    return new et({
      ...this._def,
      exactLength: {
        value: e,
        message: errorUtil.toString(r)
      }
    });
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
function er(e) {
  if (e instanceof en) {
    let r = {};
    for (let n in e.shape) {
      let i = e.shape[n];
      r[n] = ex.create(er(i));
    }
    return new en({
      ...e._def,
      shape: () => r
    });
  }
  return e instanceof et ? new et({
    ...e._def,
    type: er(e.element)
  }) : e instanceof ex ? ex.create(er(e.unwrap())) : e instanceof ew ? ew.create(er(e.unwrap())) : e instanceof eu ? eu.create(e.items.map(e => er(e))) : e;
}
exports.ZodArray = et;
et.create = (e, r) => new et({
  type: e,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: i.ZodArray,
  ...v(r)
});
class en extends y {
  constructor() {
    super(...arguments);
    this._cached = null;
    this.nonstrict = this.passthrough;
    this.augment = this.extend;
  }
  _getCached() {
    if (null !== this._cached) return this._cached;
    let e = this._def.shape();
    let r = util.objectKeys(e);
    this._cached = {
      shape: e,
      keys: r
    };
    return this._cached;
  }
  _parse(e) {
    if (this._getType(e) !== ZodParsedType.object) {
      let r = this._getOrReturnCtx(e);
      addIssueToContext(r, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: r.parsedType
      });
      return INVALID;
    }
    let {
      status,
      ctx
    } = this._processInputParams(e);
    let {
      shape,
      keys
    } = this._getCached();
    let a = [];
    if (!(this._def.catchall instanceof J && "strip" === this._def.unknownKeys)) for (let e in ctx.data) keys.includes(e) || a.push(e);
    let h = [];
    for (let e of keys) {
      let r = shape[e];
      let s = ctx.data[e];
      h.push({
        key: {
          status: "valid",
          value: e
        },
        value: r._parse(new g(ctx, s, ctx.path, e)),
        alwaysSet: e in ctx.data
      });
    }
    if (this._def.catchall instanceof J) {
      let e = this._def.unknownKeys;
      if ("passthrough" === e) for (let e of a) h.push({
        key: {
          status: "valid",
          value: e
        },
        value: {
          status: "valid",
          value: ctx.data[e]
        }
      }); else if ("strict" === e) a.length > 0 && (addIssueToContext(ctx, {
        code: ZodIssueCode.unrecognized_keys,
        keys: a
      }), status.dirty()); else if ("strip" === e); else throw Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      let e = this._def.catchall;
      for (let r of a) {
        let i = ctx.data[r];
        h.push({
          key: {
            status: "valid",
            value: r
          },
          value: e._parse(new g(ctx, i, ctx.path, r)),
          alwaysSet: r in ctx.data
        });
      }
    }
    return ctx.common.async ? Promise.resolve().then(async () => {
      let e = [];
      for (let r of h) {
        let n = await r.key;
        let i = await r.value;
        e.push({
          key: n,
          value: i,
          alwaysSet: r.alwaysSet
        });
      }
      return e;
    }).then(e => ParseStatus.mergeObjectSync(status, e)) : ParseStatus.mergeObjectSync(status, h);
  }
  get shape() {
    return this._def.shape();
  }
  strict(e) {
    errorUtil.errToObj;
    return new en({
      ...this._def,
      unknownKeys: "strict",
      ...(void 0 !== e ? {
        errorMap: (r, n) => {
          let i = this._def.errorMap?.(r, n).message ?? n.defaultError;
          return "unrecognized_keys" === r.code ? {
            message: errorUtil.errToObj(e).message ?? i
          } : {
            message: i
          };
        }
      } : {})
    });
  }
  strip() {
    return new en({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new en({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  extend(e) {
    return new en({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...e
      })
    });
  }
  merge(e) {
    return new en({
      unknownKeys: e._def.unknownKeys,
      catchall: e._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...e._def.shape()
      }),
      typeName: i.ZodObject
    });
  }
  setKey(e, r) {
    return this.augment({
      [e]: r
    });
  }
  catchall(e) {
    return new en({
      ...this._def,
      catchall: e
    });
  }
  pick(e) {
    let r = {};
    for (let n of util.objectKeys(e)) e[n] && this.shape[n] && (r[n] = this.shape[n]);
    return new en({
      ...this._def,
      shape: () => r
    });
  }
  omit(e) {
    let r = {};
    for (let n of util.objectKeys(this.shape)) e[n] || (r[n] = this.shape[n]);
    return new en({
      ...this._def,
      shape: () => r
    });
  }
  deepPartial() {
    return er(this);
  }
  partial(e) {
    let r = {};
    for (let n of util.objectKeys(this.shape)) {
      let i = this.shape[n];
      e && !e[n] ? r[n] = i : r[n] = i.optional();
    }
    return new en({
      ...this._def,
      shape: () => r
    });
  }
  required(e) {
    let r = {};
    for (let n of util.objectKeys(this.shape)) if (e && !e[n]) r[n] = this.shape[n]; else {
      let e = this.shape[n];
      for (; e instanceof ex;) e = e._def.innerType;
      r[n] = e;
    }
    return new en({
      ...this._def,
      shape: () => r
    });
  }
  keyof() {
    return em(util.objectKeys(this.shape));
  }
}
exports.ZodObject = en;
en.create = (e, r) => new en({
  shape: () => e,
  unknownKeys: "strip",
  catchall: J.create(),
  typeName: i.ZodObject,
  ...v(r)
});
en.strictCreate = (e, r) => new en({
  shape: () => e,
  unknownKeys: "strict",
  catchall: J.create(),
  typeName: i.ZodObject,
  ...v(r)
});
en.lazycreate = (e, r) => new en({
  shape: e,
  unknownKeys: "strip",
  catchall: J.create(),
  typeName: i.ZodObject,
  ...v(r)
});
class ei extends y {
  _parse(e) {
    let {
      ctx
    } = this._processInputParams(e);
    let n = this._def.options;
    function i(e) {
      for (let r of e) if ("valid" === r.result.status) return r.result;
      for (let n of e) if ("dirty" === n.result.status) {
        ctx.common.issues.push(...n.ctx.common.issues);
        return n.result;
      }
      let n = e.map(e => new ZodError(e.ctx.common.issues));
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors: n
      });
      return INVALID;
    }
    if (ctx.common.async) return Promise.all(n.map(async e => {
      let n = {
        ...ctx,
        common: {
          ...ctx.common,
          issues: []
        },
        parent: null
      };
      return {
        result: await e._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: n
        }),
        ctx: n
      };
    })).then(i);
    {
      let e;
      let i = [];
      for (let s of n) {
        let n = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        };
        let o = s._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: n
        });
        if ("valid" === o.status) return o;
        "dirty" !== o.status || e || (e = {
          result: o,
          ctx: n
        });
        n.common.issues.length && i.push(n.common.issues);
      }
      if (e) {
        ctx.common.issues.push(...e.ctx.common.issues);
        return e.result;
      }
      let s = i.map(e => new ZodError(e));
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors: s
      });
      return INVALID;
    }
  }
  get options() {
    return this._def.options;
  }
}
exports.ZodUnion = ei;
ei.create = (e, r) => new ei({
  options: e,
  typeName: i.ZodUnion,
  ...v(r)
});
let es = e => {
  if (e instanceof ep) return es(e.schema);
  if (e instanceof eO) return es(e.innerType());
  if (e instanceof eg) return [e.value];
  if (e instanceof ev) return e.options;
  if (e instanceof ey) return util.objectValues(e.enum);
  if (e instanceof ek) return es(e._def.innerType);
  if (e instanceof G) return [void 0]; else if (e instanceof X) return [null]; else if (e instanceof ex) return [void 0, ...es(e.unwrap())]; else if (e instanceof ew) return [null, ...es(e.unwrap())]; else if (e instanceof eE) return es(e.unwrap()); else if (e instanceof eC) return es(e.unwrap()); else if (e instanceof e_) return es(e._def.innerType); else return [];
};
class eo extends y {
  _parse(e) {
    let {
      ctx
    } = this._processInputParams(e);
    if (ctx.parsedType !== ZodParsedType.object) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      });
      return INVALID;
    }
    let n = this.discriminator;
    let i = ctx.data[n];
    let s = this.optionsMap.get(i);
    return s ? ctx.common.async ? s._parseAsync({
      data: ctx.data,
      path: ctx.path,
      parent: ctx
    }) : s._parseSync({
      data: ctx.data,
      path: ctx.path,
      parent: ctx
    }) : (addIssueToContext(ctx, {
      code: ZodIssueCode.invalid_union_discriminator,
      options: Array.from(this.optionsMap.keys()),
      path: [n]
    }), INVALID);
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  static create(e, r, n) {
    let s = new Map();
    for (let n of r) {
      let r = es(n.shape[e]);
      if (!r.length) throw Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);
      for (let i of r) {
        if (s.has(i)) throw Error(`Discriminator property ${String(e)} has duplicate value ${String(i)}`);
        s.set(i, n);
      }
    }
    return new eo({
      typeName: i.ZodDiscriminatedUnion,
      discriminator: e,
      options: r,
      optionsMap: s,
      ...v(n)
    });
  }
}
function ea(e, r) {
  let n = getParsedType(e);
  let i = getParsedType(r);
  if (e === r) return {
    valid: !0,
    data: e
  };
  if (n === ZodParsedType.object && i === ZodParsedType.object) {
    let n = util.objectKeys(r);
    let i = util.objectKeys(e).filter(e => -1 !== n.indexOf(e));
    let s = {
      ...e,
      ...r
    };
    for (let n of i) {
      let i = ea(e[n], r[n]);
      if (!i.valid) return {
        valid: !1
      };
      s[n] = i.data;
    }
    return {
      valid: !0,
      data: s
    };
  }
  if (n === ZodParsedType.array && i === ZodParsedType.array) {
    if (e.length !== r.length) return {
      valid: !1
    };
    let n = [];
    for (let i = 0; i < e.length; i++) {
      let s = ea(e[i], r[i]);
      if (!s.valid) return {
        valid: !1
      };
      n.push(s.data);
    }
    return {
      valid: !0,
      data: n
    };
  }
  return n === ZodParsedType.date && i === ZodParsedType.date && +e == +r ? {
    valid: !0,
    data: e
  } : {
    valid: !1
  };
}
exports.ZodDiscriminatedUnion = eo;
class el extends y {
  _parse(e) {
    let {
      status,
      ctx
    } = this._processInputParams(e);
    let i = (e, i) => {
      if (isAborted(e) || isAborted(i)) return INVALID;
      let s = ea(e.value, i.value);
      return s.valid ? ((isDirty(e) || isDirty(i)) && status.dirty(), {
        status: status.value,
        value: s.data
      }) : (addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_intersection_types
      }), INVALID);
    };
    return ctx.common.async ? Promise.all([this._def.left._parseAsync({
      data: ctx.data,
      path: ctx.path,
      parent: ctx
    }), this._def.right._parseAsync({
      data: ctx.data,
      path: ctx.path,
      parent: ctx
    })]).then(([e, r]) => i(e, r)) : i(this._def.left._parseSync({
      data: ctx.data,
      path: ctx.path,
      parent: ctx
    }), this._def.right._parseSync({
      data: ctx.data,
      path: ctx.path,
      parent: ctx
    }));
  }
}
exports.ZodIntersection = el;
el.create = (e, r, n) => new el({
  left: e,
  right: r,
  typeName: i.ZodIntersection,
  ...v(n)
});
class eu extends y {
  _parse(e) {
    let {
      status,
      ctx
    } = this._processInputParams(e);
    if (ctx.parsedType !== ZodParsedType.array) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      });
      return INVALID;
    }
    if (ctx.data.length < this._def.items.length) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      });
      return INVALID;
    }
    !this._def.rest && ctx.data.length > this._def.items.length && (addIssueToContext(ctx, {
      code: ZodIssueCode.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), status.dirty());
    let i = [...ctx.data].map((e, r) => {
      let i = this._def.items[r] || this._def.rest;
      return i ? i._parse(new g(ctx, e, ctx.path, r)) : null;
    }).filter(e => !!e);
    return ctx.common.async ? Promise.all(i).then(e => ParseStatus.mergeArray(status, e)) : ParseStatus.mergeArray(status, i);
  }
  get items() {
    return this._def.items;
  }
  rest(e) {
    return new eu({
      ...this._def,
      rest: e
    });
  }
}
exports.ZodTuple = eu;
eu.create = (e, r) => {
  if (!Array.isArray(e)) throw Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new eu({
    items: e,
    typeName: i.ZodTuple,
    rest: null,
    ...v(r)
  });
};
class ec extends y {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e) {
    let {
      status,
      ctx
    } = this._processInputParams(e);
    if (ctx.parsedType !== ZodParsedType.object) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      });
      return INVALID;
    }
    let i = [];
    let s = this._def.keyType;
    let a = this._def.valueType;
    for (let e in ctx.data) i.push({
      key: s._parse(new g(ctx, e, ctx.path, e)),
      value: a._parse(new g(ctx, ctx.data[e], ctx.path, e)),
      alwaysSet: e in ctx.data
    });
    return ctx.common.async ? ParseStatus.mergeObjectAsync(status, i) : ParseStatus.mergeObjectSync(status, i);
  }
  get element() {
    return this._def.valueType;
  }
  static create(e, r, n) {
    return new ec(r instanceof y ? {
      keyType: e,
      valueType: r,
      typeName: i.ZodRecord,
      ...v(n)
    } : {
      keyType: U.create(),
      valueType: e,
      typeName: i.ZodRecord,
      ...v(r)
    });
  }
}
exports.ZodRecord = ec;
class eh extends y {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e) {
    let {
      status,
      ctx
    } = this._processInputParams(e);
    if (ctx.parsedType !== ZodParsedType.map) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.map,
        received: ctx.parsedType
      });
      return INVALID;
    }
    let i = this._def.keyType;
    let s = this._def.valueType;
    let a = [...ctx.data.entries()].map(([e, r], o) => ({
      key: i._parse(new g(ctx, e, ctx.path, [o, "key"])),
      value: s._parse(new g(ctx, r, ctx.path, [o, "value"]))
    }));
    if (ctx.common.async) {
      let e = new Map();
      return Promise.resolve().then(async () => {
        for (let n of a) {
          let i = await n.key;
          let s = await n.value;
          if ("aborted" === i.status || "aborted" === s.status) return INVALID;
          ("dirty" === i.status || "dirty" === s.status) && status.dirty();
          e.set(i.value, s.value);
        }
        return {
          status: status.value,
          value: e
        };
      });
    }
    {
      let e = new Map();
      for (let n of a) {
        let i = n.key;
        let s = n.value;
        if ("aborted" === i.status || "aborted" === s.status) return INVALID;
        ("dirty" === i.status || "dirty" === s.status) && status.dirty();
        e.set(i.value, s.value);
      }
      return {
        status: status.value,
        value: e
      };
    }
  }
}
exports.ZodMap = eh;
eh.create = (e, r, n) => new eh({
  valueType: r,
  keyType: e,
  typeName: i.ZodMap,
  ...v(n)
});
class ed extends y {
  _parse(e) {
    let {
      status,
      ctx
    } = this._processInputParams(e);
    if (ctx.parsedType !== ZodParsedType.set) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.set,
        received: ctx.parsedType
      });
      return INVALID;
    }
    let i = this._def;
    null !== i.minSize && ctx.data.size < i.minSize.value && (addIssueToContext(ctx, {
      code: ZodIssueCode.too_small,
      minimum: i.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: i.minSize.message
    }), status.dirty());
    null !== i.maxSize && ctx.data.size > i.maxSize.value && (addIssueToContext(ctx, {
      code: ZodIssueCode.too_big,
      maximum: i.maxSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: i.maxSize.message
    }), status.dirty());
    let s = this._def.valueType;
    function a(e) {
      let n = new Set();
      for (let i of e) {
        if ("aborted" === i.status) return INVALID;
        "dirty" === i.status && status.dirty();
        n.add(i.value);
      }
      return {
        status: status.value,
        value: n
      };
    }
    let h = [...ctx.data.values()].map((e, r) => s._parse(new g(ctx, e, ctx.path, r)));
    return ctx.common.async ? Promise.all(h).then(e => a(e)) : a(h);
  }
  min(e, r) {
    return new ed({
      ...this._def,
      minSize: {
        value: e,
        message: errorUtil.toString(r)
      }
    });
  }
  max(e, r) {
    return new ed({
      ...this._def,
      maxSize: {
        value: e,
        message: errorUtil.toString(r)
      }
    });
  }
  size(e, r) {
    return this.min(e, r).max(e, r);
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
exports.ZodSet = ed;
ed.create = (e, r) => new ed({
  valueType: e,
  minSize: null,
  maxSize: null,
  typeName: i.ZodSet,
  ...v(r)
});
class ef extends y {
  constructor() {
    super(...arguments);
    this.validate = this.implement;
  }
  _parse(e) {
    let {
      ctx
    } = this._processInputParams(e);
    if (ctx.parsedType !== ZodParsedType.$$function) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.$$function,
        received: ctx.parsedType
      });
      return INVALID;
    }
    function n(e, n) {
      return makeIssue({
        data: e,
        path: ctx.path,
        errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, getErrorMap(), defaultErrorMap].filter(e => !!e),
        issueData: {
          code: ZodIssueCode.invalid_arguments,
          argumentsError: n
        }
      });
    }
    function i(e, n) {
      return makeIssue({
        data: e,
        path: ctx.path,
        errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, getErrorMap(), defaultErrorMap].filter(e => !!e),
        issueData: {
          code: ZodIssueCode.invalid_return_type,
          returnTypeError: n
        }
      });
    }
    let s = {
      errorMap: ctx.common.contextualErrorMap
    };
    let h = ctx.data;
    if (this._def.returns instanceof eb) {
      let e = this;
      return OK(async function (...r) {
        let a = new ZodError([]);
        let d = await e._def.args.parseAsync(r, s).catch(e => {
          a.addIssue(n(r, e));
          return a;
        });
        let p = await Reflect.apply(h, this, d);
        return await e._def.returns._def.type.parseAsync(p, s).catch(e => {
          a.addIssue(i(p, e));
          return a;
        });
      });
    }
    {
      let e = this;
      return OK(function (...r) {
        let a = e._def.args.safeParse(r, s);
        if (!a.success) throw new ZodError([n(r, a.error)]);
        let d = Reflect.apply(h, this, a.data);
        let p = e._def.returns.safeParse(d, s);
        if (!p.success) throw new ZodError([i(d, p.error)]);
        return p.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...e) {
    return new ef({
      ...this._def,
      args: eu.create(e).rest(K.create())
    });
  }
  returns(e) {
    return new ef({
      ...this._def,
      returns: e
    });
  }
  implement(e) {
    return this.parse(e);
  }
  strictImplement(e) {
    return this.parse(e);
  }
  static create(e, r, n) {
    return new ef({
      args: e || eu.create([]).rest(K.create()),
      returns: r || K.create(),
      typeName: i.ZodFunction,
      ...v(n)
    });
  }
}
exports.ZodFunction = ef;
class ep extends y {
  get schema() {
    return this._def.getter();
  }
  _parse(e) {
    let {
      ctx
    } = this._processInputParams(e);
    return this._def.getter()._parse({
      data: ctx.data,
      path: ctx.path,
      parent: ctx
    });
  }
}
exports.ZodLazy = ep;
ep.create = (e, r) => new ep({
  getter: e,
  typeName: i.ZodLazy,
  ...v(r)
});
class eg extends y {
  _parse(e) {
    if (e.data !== this._def.value) {
      let r = this._getOrReturnCtx(e);
      addIssueToContext(r, {
        received: r.data,
        code: ZodIssueCode.invalid_literal,
        expected: this._def.value
      });
      return INVALID;
    }
    return {
      status: "valid",
      value: e.data
    };
  }
  get value() {
    return this._def.value;
  }
}
function em(e, r) {
  return new ev({
    values: e,
    typeName: i.ZodEnum,
    ...v(r)
  });
}
exports.ZodLiteral = eg;
eg.create = (e, r) => new eg({
  value: e,
  typeName: i.ZodLiteral,
  ...v(r)
});
class ev extends y {
  _parse(e) {
    if ("string" != typeof e.data) {
      let r = this._getOrReturnCtx(e);
      let n = this._def.values;
      addIssueToContext(r, {
        expected: util.joinValues(n),
        received: r.parsedType,
        code: ZodIssueCode.invalid_type
      });
      return INVALID;
    }
    if (this._cache || (this._cache = new Set(this._def.values)), !this._cache.has(e.data)) {
      let r = this._getOrReturnCtx(e);
      let n = this._def.values;
      addIssueToContext(r, {
        received: r.data,
        code: ZodIssueCode.invalid_enum_value,
        options: n
      });
      return INVALID;
    }
    return OK(e.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    let e = {};
    for (let r of this._def.values) e[r] = r;
    return e;
  }
  get Values() {
    let e = {};
    for (let r of this._def.values) e[r] = r;
    return e;
  }
  get Enum() {
    let e = {};
    for (let r of this._def.values) e[r] = r;
    return e;
  }
  extract(e, r = this._def) {
    return ev.create(e, {
      ...this._def,
      ...r
    });
  }
  exclude(e, r = this._def) {
    return ev.create(this.options.filter(r => !e.includes(r)), {
      ...this._def,
      ...r
    });
  }
}
exports.ZodEnum = ev;
ev.create = em;
class ey extends y {
  _parse(e) {
    let r = util.getValidEnumValues(this._def.values);
    let n = this._getOrReturnCtx(e);
    if (n.parsedType !== ZodParsedType.string && n.parsedType !== ZodParsedType.number) {
      let e = util.objectValues(r);
      addIssueToContext(n, {
        expected: util.joinValues(e),
        received: n.parsedType,
        code: ZodIssueCode.invalid_type
      });
      return INVALID;
    }
    if (this._cache || (this._cache = new Set(util.getValidEnumValues(this._def.values))), !this._cache.has(e.data)) {
      let e = util.objectValues(r);
      addIssueToContext(n, {
        received: n.data,
        code: ZodIssueCode.invalid_enum_value,
        options: e
      });
      return INVALID;
    }
    return OK(e.data);
  }
  get enum() {
    return this._def.values;
  }
}
exports.ZodNativeEnum = ey;
ey.create = (e, r) => new ey({
  values: e,
  typeName: i.ZodNativeEnum,
  ...v(r)
});
class eb extends y {
  unwrap() {
    return this._def.type;
  }
  _parse(e) {
    let {
      ctx
    } = this._processInputParams(e);
    if (ctx.parsedType !== ZodParsedType.promise && !1 === ctx.common.async) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.promise,
        received: ctx.parsedType
      });
      return INVALID;
    }
    let n = ctx.parsedType === ZodParsedType.promise ? ctx.data : Promise.resolve(ctx.data);
    return OK(n.then(e => this._def.type.parseAsync(e, {
      path: ctx.path,
      errorMap: ctx.common.contextualErrorMap
    })));
  }
}
exports.ZodPromise = eb;
eb.create = (e, r) => new eb({
  type: e,
  typeName: i.ZodPromise,
  ...v(r)
});
class eO extends y {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === i.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(e) {
    let {
      status,
      ctx
    } = this._processInputParams(e);
    let i = this._def.effect || null;
    let s = {
      addIssue: e => {
        addIssueToContext(ctx, e);
        e.fatal ? status.abort() : status.dirty();
      },
      get path() {
        return ctx.path;
      }
    };
    if (s.addIssue = s.addIssue.bind(s), "preprocess" === i.type) {
      let e = i.transform(ctx.data, s);
      if (ctx.common.async) return Promise.resolve(e).then(async e => {
        if ("aborted" === status.value) return INVALID;
        let i = await this._def.schema._parseAsync({
          data: e,
          path: ctx.path,
          parent: ctx
        });
        return "aborted" === i.status ? INVALID : "dirty" === i.status || "dirty" === status.value ? DIRTY(i.value) : i;
      });
      {
        if ("aborted" === status.value) return INVALID;
        let i = this._def.schema._parseSync({
          data: e,
          path: ctx.path,
          parent: ctx
        });
        return "aborted" === i.status ? INVALID : "dirty" === i.status || "dirty" === status.value ? DIRTY(i.value) : i;
      }
    }
    if ("refinement" === i.type) {
      let e = e => {
        let r = i.refinement(e, s);
        if (ctx.common.async) return Promise.resolve(r);
        if (r instanceof Promise) throw Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        return e;
      };
      if (!1 !== ctx.common.async) return this._def.schema._parseAsync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }).then(n => "aborted" === n.status ? INVALID : ("dirty" === n.status && status.dirty(), e(n.value).then(() => ({
        status: status.value,
        value: n.value
      }))));
      {
        let i = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        return "aborted" === i.status ? INVALID : ("dirty" === i.status && status.dirty(), e(i.value), {
          status: status.value,
          value: i.value
        });
      }
    }
    if ("transform" === i.type) {
      if (!1 !== ctx.common.async) return this._def.schema._parseAsync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }).then(e => isValid(e) ? Promise.resolve(i.transform(e.value, s)).then(e => ({
        status: status.value,
        value: e
      })) : INVALID);
      {
        let e = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (!isValid(e)) return INVALID;
        let o = i.transform(e.value, s);
        if (o instanceof Promise) throw Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return {
          status: status.value,
          value: o
        };
      }
    }
    util.assertNever(i);
  }
}
exports.ZodEffects = eO;
exports.ZodTransformer = eO;
eO.create = (e, r, n) => new eO({
  schema: e,
  typeName: i.ZodEffects,
  effect: r,
  ...v(n)
});
eO.createWithPreprocess = (e, r, n) => new eO({
  schema: r,
  effect: {
    type: "preprocess",
    transform: e
  },
  typeName: i.ZodEffects,
  ...v(n)
});
class ex extends y {
  _parse(e) {
    return this._getType(e) === ZodParsedType.undefined ? OK(void 0) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
exports.ZodOptional = ex;
ex.create = (e, r) => new ex({
  innerType: e,
  typeName: i.ZodOptional,
  ...v(r)
});
class ew extends y {
  _parse(e) {
    return this._getType(e) === ZodParsedType.$$null ? OK(null) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
exports.ZodNullable = ew;
ew.create = (e, r) => new ew({
  innerType: e,
  typeName: i.ZodNullable,
  ...v(r)
});
class ek extends y {
  _parse(e) {
    let {
      ctx
    } = this._processInputParams(e);
    let n = ctx.data;
    ctx.parsedType === ZodParsedType.undefined && (n = this._def.defaultValue());
    return this._def.innerType._parse({
      data: n,
      path: ctx.path,
      parent: ctx
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
exports.ZodDefault = ek;
ek.create = (e, r) => new ek({
  innerType: e,
  typeName: i.ZodDefault,
  defaultValue: "function" == typeof r.$$default ? r.$$default : () => r.$$default,
  ...v(r)
});
class e_ extends y {
  _parse(e) {
    let {
      ctx
    } = this._processInputParams(e);
    let n = {
      ...ctx,
      common: {
        ...ctx.common,
        issues: []
      }
    };
    let i = this._def.innerType._parse({
      data: n.data,
      path: n.path,
      parent: {
        ...n
      }
    });
    return isAsync(i) ? i.then(e => ({
      status: "valid",
      value: "valid" === e.status ? e.value : this._def.catchValue({
        get error() {
          return new ZodError(n.common.issues);
        },
        input: n.data
      })
    })) : {
      status: "valid",
      value: "valid" === i.status ? i.value : this._def.catchValue({
        get error() {
          return new ZodError(n.common.issues);
        },
        input: n.data
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
exports.ZodCatch = e_;
e_.create = (e, r) => new e_({
  innerType: e,
  typeName: i.ZodCatch,
  catchValue: "function" == typeof r.catch ? r.catch : () => r.catch,
  ...v(r)
});
class eS extends y {
  _parse(e) {
    if (this._getType(e) !== ZodParsedType.nan) {
      let r = this._getOrReturnCtx(e);
      addIssueToContext(r, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.nan,
        received: r.parsedType
      });
      return INVALID;
    }
    return {
      status: "valid",
      value: e.data
    };
  }
}
exports.ZodNaN = eS;
eS.create = e => new eS({
  typeName: i.ZodNaN,
  ...v(e)
});
exports.BRAND = Symbol("zod_brand");
class eE extends y {
  _parse(e) {
    let {
      ctx
    } = this._processInputParams(e);
    let n = ctx.data;
    return this._def.type._parse({
      data: n,
      path: ctx.path,
      parent: ctx
    });
  }
  unwrap() {
    return this._def.type;
  }
}
exports.ZodBranded = eE;
class eA extends y {
  _parse(e) {
    let {
      status,
      ctx
    } = this._processInputParams(e);
    if (ctx.common.async) return (async () => {
      let e = await this._def.$$in._parseAsync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
      return "aborted" === e.status ? INVALID : "dirty" === e.status ? (status.dirty(), DIRTY(e.value)) : this._def.out._parseAsync({
        data: e.value,
        path: ctx.path,
        parent: ctx
      });
    })();
    {
      let e = this._def.$$in._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
      return "aborted" === e.status ? INVALID : "dirty" === e.status ? (status.dirty(), {
        status: "dirty",
        value: e.value
      }) : this._def.out._parseSync({
        data: e.value,
        path: ctx.path,
        parent: ctx
      });
    }
  }
  static create(e, r) {
    return new eA({
      in: e,
      out: r,
      typeName: i.ZodPipeline
    });
  }
}
exports.ZodPipeline = eA;
class eC extends y {
  _parse(e) {
    let r = this._def.innerType._parse(e);
    let n = e => (isValid(e) && (e.value = Object.freeze(e.value)), e);
    return isAsync(r) ? r.then(e => n(e)) : n(r);
  }
  unwrap() {
    return this._def.innerType;
  }
}
function eT(e, r) {
  let n = "function" == typeof e ? e(r) : "string" == typeof e ? {
    message: e
  } : e;
  return "string" == typeof n ? {
    message: n
  } : n;
}
function eI(e, r = {}, n) {
  return e ? H.create().superRefine((i, s) => {
    let o = e(i);
    if (o instanceof Promise) return o.then(e => {
      if (!e) {
        let e = eT(r, i);
        let o = e.fatal ?? n ?? !0;
        s.addIssue({
          code: "custom",
          ...e,
          fatal: o
        });
      }
    });
    if (!o) {
      let e = eT(r, i);
      let o = e.fatal ?? n ?? !0;
      s.addIssue({
        code: "custom",
        ...e,
        fatal: o
      });
    }
  }) : H.create();
}
exports.ZodReadonly = eC;
eC.create = (e, r) => new eC({
  innerType: e,
  typeName: i.ZodReadonly,
  ...v(r)
});
exports.late = {
  object: en.lazycreate
};
(function (e) {
  e.ZodString = "ZodString";
  e.ZodNumber = "ZodNumber";
  e.ZodNaN = "ZodNaN";
  e.ZodBigInt = "ZodBigInt";
  e.ZodBoolean = "ZodBoolean";
  e.ZodDate = "ZodDate";
  e.ZodSymbol = "ZodSymbol";
  e.ZodUndefined = "ZodUndefined";
  e.ZodNull = "ZodNull";
  e.ZodAny = "ZodAny";
  e.ZodUnknown = "ZodUnknown";
  e.ZodNever = "ZodNever";
  e.ZodVoid = "ZodVoid";
  e.ZodArray = "ZodArray";
  e.ZodObject = "ZodObject";
  e.ZodUnion = "ZodUnion";
  e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion";
  e.ZodIntersection = "ZodIntersection";
  e.ZodTuple = "ZodTuple";
  e.ZodRecord = "ZodRecord";
  e.ZodMap = "ZodMap";
  e.ZodSet = "ZodSet";
  e.ZodFunction = "ZodFunction";
  e.ZodLazy = "ZodLazy";
  e.ZodLiteral = "ZodLiteral";
  e.ZodEnum = "ZodEnum";
  e.ZodEffects = "ZodEffects";
  e.ZodNativeEnum = "ZodNativeEnum";
  e.ZodOptional = "ZodOptional";
  e.ZodNullable = "ZodNullable";
  e.ZodDefault = "ZodDefault";
  e.ZodCatch = "ZodCatch";
  e.ZodPromise = "ZodPromise";
  e.ZodBranded = "ZodBranded";
  e.ZodPipeline = "ZodPipeline";
  e.ZodReadonly = "ZodReadonly";
})(i || (exports.ZodFirstPartyTypeKind = i = {}));
let eP = (e, r = {
  message: `Input not instance of ${e.name}`
}) => eI(r => r instanceof e, r);
exports.$$instanceof = eP;
let eR = U.create;
exports.string = eR;
let eM = V.create;
exports.number = eM;
let eD = eS.create;
exports.nan = eD;
let eN = B.create;
exports.bigint = eN;
let e$ = q.create;
exports.boolean = e$;
let eL = W.create;
exports.date = eL;
let ej = Y.create;
exports.symbol = ej;
let ez = G.create;
exports.undefined = ez;
let eZ = X.create;
exports.$$null = eZ;
let eF = H.create;
exports.any = eF;
let eU = K.create;
exports.unknown = eU;
let eQ = J.create;
exports.never = eQ;
let eV = ee.create;
exports.$$void = eV;
let eB = et.create;
exports.array = eB;
let eq = en.create;
exports.object = eq;
let eW = en.strictCreate;
exports.strictObject = eW;
let eY = ei.create;
exports.union = eY;
let eG = eo.create;
exports.discriminatedUnion = eG;
let eX = el.create;
exports.intersection = eX;
let eH = eu.create;
exports.tuple = eH;
let eK = ec.create;
exports.record = eK;
let eJ = eh.create;
exports.map = eJ;
let e0 = ed.create;
exports.set = e0;
let e1 = ef.create;
exports.$$function = e1;
let e2 = ep.create;
exports.lazy = e2;
let e5 = eg.create;
exports.literal = e5;
let e3 = ev.create;
exports.enum = e3;
let e6 = ey.create;
exports.nativeEnum = e6;
let e4 = eb.create;
exports.promise = e4;
let e8 = eO.create;
exports.effect = e8;
exports.transformer = e8;
let e7 = ex.create;
exports.optional = e7;
let e9 = ew.create;
exports.nullable = e9;
let te = eO.createWithPreprocess;
exports.preprocess = te;
let tt = eA.create;
exports.pipeline = tt;
let tr = () => eR().optional();
exports.ostring = tr;
let tn = () => eM().optional();
exports.onumber = tn;
let ti = () => e$().optional();
exports.oboolean = ti;
exports.coerce = {
  string: e => U.create({
    ...e,
    coerce: !0
  }),
  number: e => V.create({
    ...e,
    coerce: !0
  }),
  boolean: e => q.create({
    ...e,
    coerce: !0
  }),
  bigint: e => B.create({
    ...e,
    coerce: !0
  }),
  date: e => W.create({
    ...e,
    coerce: !0
  })
};
exports.NEVER = INVALID; 
