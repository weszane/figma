import { DM, fn, G4, I3, jm, MY, OK, uY, xP, y7, zn } from '../vendor/43545'
import { eq as _$$eq, G as _$$G, WI } from '../vendor/154607'
import { CR, o6, Zp, ZS as util } from '../vendor/607848'
import { $W, pJ, su } from '../vendor/646593'

let i
let s
let ZodFirstPartyTypeKind
let $$a15 = {}
require.d($$a15, {
  BRAND: () => eA,
  DIRTY: () => jm,
  EMPTY_PATH: () => I3,
  INVALID: () => uY,
  NEVER: () => tu,
  OK: () => OK,
  ParseStatus: () => MY,
  Schema: () => b,
  ZodAny: () => K,
  ZodArray: () => er,
  ZodBigInt: () => q,
  ZodBoolean: () => W,
  ZodBranded: () => eC,
  ZodCatch: () => eS,
  ZodDate: () => Y,
  ZodDefault: () => e_,
  ZodDiscriminatedUnion: () => ea,
  ZodEffects: () => ex,
  ZodEnum: () => ey,
  ZodError: () => _$$G,
  ZodFirstPartyTypeKind: () => ZodFirstPartyTypeKind,
  ZodFunction: () => ep,
  ZodIntersection: () => $$eu,
  ZodIssueCode: () => _$$eq,
  ZodLazy: () => eg,
  ZodLiteral: () => em,
  ZodMap: () => ed,
  ZodNaN: () => eE,
  ZodNativeEnum: () => eb,
  ZodNever: () => ee,
  ZodNull: () => H,
  ZodNullable: () => ek,
  ZodNumber: () => B,
  ZodObject: () => ei,
  ZodOptional: () => ZodOptional,
  ZodParsedType: () => Zp,
  ZodPipeline: () => eT,
  ZodPromise: () => eO,
  ZodReadonly: () => eI,
  ZodRecord: () => eh,
  ZodSchema: () => b,
  ZodSet: () => ef,
  ZodString: () => Q,
  ZodSymbol: () => G,
  ZodTransformer: () => ex,
  ZodTuple: () => ec,
  ZodType: () => b,
  ZodUndefined: () => X,
  ZodUnion: () => es,
  ZodUnknown: () => J,
  ZodVoid: () => et,
  addIssueToContext: () => zn,
  any: () => any,
  array: () => array,
  bigint: () => ej,
  boolean: () => boolean,
  coerce: () => tl,
  custom: () => eR,
  date: () => eZ,
  datetimeRegex: () => $$z,
  defaultErrorMap: () => su,
  discriminatedUnion: () => eK,
  effect: () => transformer,
  enum: () => e8,
  function: () => e3,
  getErrorMap: () => $W,
  getParsedType: () => CR,
  instanceof: () => eD,
  intersection: () => intersection,
  isAborted: () => G4,
  isAsync: () => xP,
  isDirty: () => DM,
  isValid: () => fn,
  late: () => eM,
  lazy: () => e6,
  literal: () => literal,
  makeIssue: () => y7,
  map: () => e2,
  nan: () => eL,
  nativeEnum: () => nativeEnum,
  never: () => eq,
  null: () => eQ,
  nullable: () => tr,
  number: () => number,
  object: () => object,
  objectUtil: () => o6,
  oboolean: () => ta,
  onumber: () => to,
  optional: () => optional,
  ostring: () => ts,
  pipeline: () => ti,
  preprocess: () => tn,
  promise: () => e9,
  quotelessJson: () => WI,
  record: () => record,
  set: () => e5,
  setErrorMap: () => pJ,
  strictObject: () => eX,
  string: () => string,
  symbol: () => symbol,
  transformer: () => transformer,
  tuple: () => tuple,
  undefined: () => undefined,
  union: () => union,
  unknown: () => unknown,
  util: () => util,
  void: () => eW,
})
!(function (e) {
  e.errToObj = e => typeof e == 'string'
    ? {
        message: e,
      }
    : e || {}
  e.toString = e => typeof e == 'string' ? e : e?.message
}(s || (s = {})))
class m {
  constructor(e, r, n, i) {
    this._cachedPath = []
    this.parent = e
    this.data = r
    this._path = n
    this._key = i
  }

  get path() {
    this._cachedPath.length || (Array.isArray(this._key) ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key))
    return this._cachedPath
  }
}
let v = (e, r) => {
  if (fn(r)) {
    return {
      success: !0,
      data: r.value,
    }
  }
  if (!e.common.issues.length)
    throw new Error('Validation failed but no issues detected.')
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error
      let r = new _$$G(e.common.issues)
      this._error = r
      return this._error
    },
  }
}
function y(e) {
  if (!e)
    return {}
  let {
    errorMap,
    invalid_type_error,
    required_error,
    description,
  } = e
  if (errorMap && (invalid_type_error || required_error))
    throw new Error('Can\'t use "invalid_type_error" or "required_error" in conjunction with custom error map.')
  return errorMap
    ? {
        errorMap,
        description,
      }
    : {
        errorMap: (r, s) => {
          let {
            message,
          } = e
          return r.code === 'invalid_enum_value'
            ? {
                message: message ?? s.defaultError,
              }
            : void 0 === s.data
              ? {
                  message: message ?? required_error ?? s.defaultError,
                }
              : r.code !== 'invalid_type'
                ? {
                    message: s.defaultError,
                  }
                : {
                    message: message ?? invalid_type_error ?? s.defaultError,
                  }
        },
        description,
      }
}
class b {
  get description() {
    return this._def.description
  }

  _getType(e) {
    return CR(e.data)
  }

  _getOrReturnCtx(e, r) {
    return r || {
      common: e.parent.common,
      data: e.data,
      parsedType: CR(e.data),
      schemaErrorMap: this._def.errorMap,
      path: e.path,
      parent: e.parent,
    }
  }

  _processInputParams(e) {
    return {
      status: new MY(),
      ctx: {
        common: e.parent.common,
        data: e.data,
        parsedType: CR(e.data),
        schemaErrorMap: this._def.errorMap,
        path: e.path,
        parent: e.parent,
      },
    }
  }

  _parseSync(e) {
    let r = this._parse(e)
    if (xP(r))
      throw new Error('Synchronous parse encountered promise.')
    return r
  }

  _parseAsync(e) {
    return Promise.resolve(this._parse(e))
  }

  parse(e, r) {
    let n = this.safeParse(e, r)
    if (n.success)
      return n.data
    throw n.error
  }

  safeParse(e, r) {
    let n = {
      common: {
        issues: [],
        async: r?.async ?? !1,
        contextualErrorMap: r?.errorMap,
      },
      path: r?.path || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: e,
      parsedType: CR(e),
    }
    let i = this._parseSync({
      data: e,
      path: n.path,
      parent: n,
    })
    return v(n, i)
  }

  '~validate'(e) {
    let r = {
      common: {
        issues: [],
        async: !!this['~standard'].async,
      },
      path: [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: e,
      parsedType: CR(e),
    }
    if (!this['~standard'].async) {
      try {
        let n = this._parseSync({
          data: e,
          path: [],
          parent: r,
        })
        return fn(n)
          ? {
              value: n.value,
            }
          : {
              issues: r.common.issues,
            }
      }
      catch (e) {
        e?.message?.toLowerCase()?.includes('encountered') && (this['~standard'].async = !0)
        r.common = {
          issues: [],
          async: !0,
        }
      }
    }
    return this._parseAsync({
      data: e,
      path: [],
      parent: r,
    }).then(e => fn(e)
      ? {
          value: e.value,
        }
      : {
          issues: r.common.issues,
        })
  }

  async parseAsync(e, r) {
    let n = await this.safeParseAsync(e, r)
    if (n.success)
      return n.data
    throw n.error
  }

  async safeParseAsync(e, r) {
    let n = {
      common: {
        issues: [],
        contextualErrorMap: r?.errorMap,
        async: !0,
      },
      path: r?.path || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: e,
      parsedType: CR(e),
    }
    let i = this._parse({
      data: e,
      path: n.path,
      parent: n,
    })
    return v(n, await (xP(i) ? i : Promise.resolve(i)))
  }

  refine(e, r) {
    let n = e => typeof r == 'string' || void 0 === r
      ? {
          message: r,
        }
      : typeof r == 'function' ? r(e) : r
    return this._refinement((r, i) => {
      let s = e(r)
      let o = () => i.addIssue({
        code: _$$eq.custom,
        ...n(r),
      })
      return typeof Promise != 'undefined' && s instanceof Promise ? s.then(e => !!e || (o(), !1)) : !!s || (o(), !1)
    })
  }

  refinement(e, r) {
    return this._refinement((n, i) => !!e(n) || (i.addIssue(typeof r == 'function' ? r(n, i) : r), !1))
  }

  _refinement(e) {
    return new ex({
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: {
        type: 'refinement',
        refinement: e,
      },
    })
  }

  superRefine(e) {
    return this._refinement(e)
  }

  constructor(e) {
    this.spa = this.safeParseAsync
    this._def = e
    this.parse = this.parse.bind(this)
    this.safeParse = this.safeParse.bind(this)
    this.parseAsync = this.parseAsync.bind(this)
    this.safeParseAsync = this.safeParseAsync.bind(this)
    this.spa = this.spa.bind(this)
    this.refine = this.refine.bind(this)
    this.refinement = this.refinement.bind(this)
    this.superRefine = this.superRefine.bind(this)
    this.optional = this.optional.bind(this)
    this.nullable = this.nullable.bind(this)
    this.nullish = this.nullish.bind(this)
    this.array = this.array.bind(this)
    this.promise = this.promise.bind(this)
    this.or = this.or.bind(this)
    this.and = this.and.bind(this)
    this.transform = this.transform.bind(this)
    this.brand = this.brand.bind(this)
    this.$$default = this.$$default.bind(this)
    this.catch = this.catch.bind(this)
    this.describe = this.describe.bind(this)
    this.pipe = this.pipe.bind(this)
    this.readonly = this.readonly.bind(this)
    this.isNullable = this.isNullable.bind(this)
    this.isOptional = this.isOptional.bind(this)
    this['~standard'] = {
      version: 1,
      vendor: 'zod',
      validate: e => this['~validate'](e),
    }
  }

  optional() {
    return ZodOptional.create(this, this._def)
  }

  nullable() {
    return ek.create(this, this._def)
  }

  nullish() {
    return this.nullable().optional()
  }

  array() {
    return er.create(this)
  }

  promise() {
    return eO.create(this, this._def)
  }

  or(e) {
    return es.create([this, e], this._def)
  }

  and(e) {
    return $$eu.create(this, e, this._def)
  }

  transform(e) {
    return new ex({
      ...y(this._def),
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: {
        type: 'transform',
        transform: e,
      },
    })
  }

  default(e) {
    let r = typeof e == 'function' ? e : () => e
    return new e_({
      ...y(this._def),
      innerType: this,
      defaultValue: r,
      typeName: ZodFirstPartyTypeKind.ZodDefault,
    })
  }

  brand() {
    return new eC({
      typeName: ZodFirstPartyTypeKind.ZodBranded,
      type: this,
      ...y(this._def),
    })
  }

  catch(e) {
    let r = typeof e == 'function' ? e : () => e
    return new eS({
      ...y(this._def),
      innerType: this,
      catchValue: r,
      typeName: ZodFirstPartyTypeKind.ZodCatch,
    })
  }

  describe(e) {
    return new this.constructor({
      ...this._def,
      description: e,
    })
  }

  pipe(e) {
    return eT.create(this, e)
  }

  readonly() {
    return eI.create(this)
  }

  isOptional() {
    return this.safeParse(void 0).success
  }

  isNullable() {
    return this.safeParse(null).success
  }
}
let O = /^c[^\s-]{8,}$/i
let x = /^[0-9a-z]+$/
let w = /^[0-9A-HJKMNP-TV-Z]{26}$/i
let k = /^[0-9a-f]{8}\b-[0-9a-f]{4}\b-[0-9a-f]{4}\b-[0-9a-f]{4}\b-[0-9a-f]{12}$/i
let _ = /^[\w-]{21}$/
let S = /^[\w-]+\.[\w-]+\.[\w-]*$/
let E = /^[-+]?P(?!$)(?:[-+]?\d+Y|[-+]?\d+[.,]\d+Y$)?(?:[-+]?\d+M|[-+]?\d+[.,]\d+M$)?(?:[-+]?\d+W|[-+]?\d+[.,]\d+W$)?(?:[-+]?\d+D|[-+]?\d+[.,]\d+D$)?(?:T(?=[\d+-])(?:[-+]?\d+H|[-+]?\d+[.,]\d+H$)?(?:[-+]?\d+M|[-+]?\d+[.,]\d+M$)?(?:[-+]?\d+(?:[.,]\d+)?S)?)?$/
let A = /^(?!\.)(?!.*\.\.)([\w'+\-.]*)[\w+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i
let C = '^([\\p{Extended_Pictographic}\\p{Emoji_Component}])+$'
let T = /^(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)$/
let I = /^(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)\/(3[0-2]|[12]?\d)$/
let P = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]+|::(ffff(:0{1,4})?:)?((25[0-5]|(2[0-4]|1?\d)?\d)\.){3}(25[0-5]|(2[0-4]|1?\d)?\d)|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1?\d)?\d)\.){3}(25[0-5]|(2[0-4]|1?\d)?\d))$/
let R = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]+|::(ffff(:0{1,4})?:)?((25[0-5]|(2[0-4]|1?\d)?\d)\.){3}(25[0-5]|(2[0-4]|1?\d)?\d)|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1?\d)?\d)\.){3}(25[0-5]|(2[0-4]|1?\d)?\d))\/(12[0-8]|1[01]\d|[1-9]?\d)$/
let M = /^([0-9a-z+/]{4})*(([0-9a-z+/]{2}==)|([0-9a-z+/]{3}=))?$/i
let D = /^([\w-]{4})*(([\w-]{2}(==)?)|([\w-]{3}(=)?))?$/
let N = '((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))'
let $ = new RegExp(`^${N}$`)
function L(e) {
  let r = '[0-5]\\d'
  e.precision ? r = `${r}\\.\\d{${e.precision}}` : e.precision == null && (r = `${r}(\\.\\d+)?`)
  let n = e.precision ? '+' : '?'
  return `([01]\\d|2[0-3]):[0-5]\\d(:${r})${n}`
}
function j(e) {
  return new RegExp(`^${L(e)}$`)
}
function $$z(e) {
  let r = `${N}T${L(e)}`
  let n = []
  n.push(e.local ? 'Z?' : 'Z')
  e.offset && n.push('([+-]\\d{2}:?\\d{2})')
  r = `${r}(${n.join('|')})`
  return new RegExp(`^${r}$`)
}
function Z(e, r) {
  return !!((r === 'v4' || !r) && T.test(e) || (r === 'v6' || !r) && P.test(e))
}
function F(e, r) {
  if (!S.test(e))
    return !1
  try {
    let [n] = e.split('.')
    let i = n.replace(/-/g, '+').replace(/_/g, '/').padEnd(n.length + (4 - n.length % 4) % 4, '=')
    let s = JSON.parse(atob(i))
    if (typeof s != 'object' || s === null || 'typ' in s && s?.typ !== 'JWT' || !s.alg || r && s.alg !== r)
      return !1
    return !0
  }
  catch {
    return !1
  }
}
function U(e, r) {
  return !!((r === 'v4' || !r) && I.test(e) || (r === 'v6' || !r) && R.test(e))
}
class Q extends b {
  _parse(e) {
    let r
    if (this._def.coerce && (e.data = String(e.data)), this._getType(e) !== Zp.string) {
      let r = this._getOrReturnCtx(e)
      zn(r, {
        code: _$$eq.invalid_type,
        expected: Zp.string,
        received: r.parsedType,
      })
      return uY
    }
    let n = new MY()
    for (let s of this._def.checks) {
      if (s.kind === 'min') {
        e.data.length < s.value && (r = this._getOrReturnCtx(e, r), zn(r, {
          code: _$$eq.too_small,
          minimum: s.value,
          type: 'string',
          inclusive: !0,
          exact: !1,
          message: s.message,
        }), n.dirty())
      }
      else if (s.kind === 'max') {
        e.data.length > s.value && (r = this._getOrReturnCtx(e, r), zn(r, {
          code: _$$eq.too_big,
          maximum: s.value,
          type: 'string',
          inclusive: !0,
          exact: !1,
          message: s.message,
        }), n.dirty())
      }
      else if (s.kind === 'length') {
        let i = e.data.length > s.value
        let o = e.data.length < s.value;
        (i || o) && (r = this._getOrReturnCtx(e, r), i
          ? zn(r, {
              code: _$$eq.too_big,
              maximum: s.value,
              type: 'string',
              inclusive: !0,
              exact: !0,
              message: s.message,
            })
          : o && zn(r, {
            code: _$$eq.too_small,
            minimum: s.value,
            type: 'string',
            inclusive: !0,
            exact: !0,
            message: s.message,
          }), n.dirty())
      }
      else if (s.kind === 'email') {
        A.test(e.data) || (r = this._getOrReturnCtx(e, r), zn(r, {
          validation: 'email',
          code: _$$eq.invalid_string,
          message: s.message,
        }), n.dirty())
      }
      else if (s.kind === 'emoji') {
        i || (i = new RegExp(C, 'u'))
        i.test(e.data) || (r = this._getOrReturnCtx(e, r), zn(r, {
          validation: 'emoji',
          code: _$$eq.invalid_string,
          message: s.message,
        }), n.dirty())
      }
      else if (s.kind === 'uuid') {
        k.test(e.data) || (r = this._getOrReturnCtx(e, r), zn(r, {
          validation: 'uuid',
          code: _$$eq.invalid_string,
          message: s.message,
        }), n.dirty())
      }
      else if (s.kind === 'nanoid') {
        _.test(e.data) || (r = this._getOrReturnCtx(e, r), zn(r, {
          validation: 'nanoid',
          code: _$$eq.invalid_string,
          message: s.message,
        }), n.dirty())
      }
      else if (s.kind === 'cuid') {
        O.test(e.data) || (r = this._getOrReturnCtx(e, r), zn(r, {
          validation: 'cuid',
          code: _$$eq.invalid_string,
          message: s.message,
        }), n.dirty())
      }
      else if (s.kind === 'cuid2') {
        x.test(e.data) || (r = this._getOrReturnCtx(e, r), zn(r, {
          validation: 'cuid2',
          code: _$$eq.invalid_string,
          message: s.message,
        }), n.dirty())
      }
      else if (s.kind === 'ulid') {
        w.test(e.data) || (r = this._getOrReturnCtx(e, r), zn(r, {
          validation: 'ulid',
          code: _$$eq.invalid_string,
          message: s.message,
        }), n.dirty())
      }
      else if (s.kind === 'url') {
        try {
          new URL(e.data)
        }
        catch {
          r = this._getOrReturnCtx(e, r)
          zn(r, {
            validation: 'url',
            code: _$$eq.invalid_string,
            message: s.message,
          })
          n.dirty()
        }
      }
      else {
        s.kind === 'regex'
          ? (s.regex.lastIndex = 0, s.regex.test(e.data) || (r = this._getOrReturnCtx(e, r), zn(r, {
              validation: 'regex',
              code: _$$eq.invalid_string,
              message: s.message,
            }), n.dirty()))
          : s.kind === 'trim'
            ? e.data = e.data.trim()
            : s.kind === 'includes'
              ? e.data.includes(s.value, s.position) || (r = this._getOrReturnCtx(e, r), zn(r, {
                code: _$$eq.invalid_string,
                validation: {
                  includes: s.value,
                  position: s.position,
                },
                message: s.message,
              }), n.dirty())
              : s.kind === 'toLowerCase'
                ? e.data = e.data.toLowerCase()
                : s.kind === 'toUpperCase'
                  ? e.data = e.data.toUpperCase()
                  : s.kind === 'startsWith'
                    ? e.data.startsWith(s.value) || (r = this._getOrReturnCtx(e, r), zn(r, {
                      code: _$$eq.invalid_string,
                      validation: {
                        startsWith: s.value,
                      },
                      message: s.message,
                    }), n.dirty())
                    : s.kind === 'endsWith'
                      ? e.data.endsWith(s.value) || (r = this._getOrReturnCtx(e, r), zn(r, {
                        code: _$$eq.invalid_string,
                        validation: {
                          endsWith: s.value,
                        },
                        message: s.message,
                      }), n.dirty())
                      : s.kind === 'datetime'
                        ? $$z(s).test(e.data) || (r = this._getOrReturnCtx(e, r), zn(r, {
                          code: _$$eq.invalid_string,
                          validation: 'datetime',
                          message: s.message,
                        }), n.dirty())
                        : s.kind === 'date'
                          ? $.test(e.data) || (r = this._getOrReturnCtx(e, r), zn(r, {
                            code: _$$eq.invalid_string,
                            validation: 'date',
                            message: s.message,
                          }), n.dirty())
                          : s.kind === 'time'
                            ? j(s).test(e.data) || (r = this._getOrReturnCtx(e, r), zn(r, {
                              code: _$$eq.invalid_string,
                              validation: 'time',
                              message: s.message,
                            }), n.dirty())
                            : s.kind === 'duration'
                              ? E.test(e.data) || (r = this._getOrReturnCtx(e, r), zn(r, {
                                validation: 'duration',
                                code: _$$eq.invalid_string,
                                message: s.message,
                              }), n.dirty())
                              : s.kind === 'ip'
                                ? Z(e.data, s.version) || (r = this._getOrReturnCtx(e, r), zn(r, {
                                  validation: 'ip',
                                  code: _$$eq.invalid_string,
                                  message: s.message,
                                }), n.dirty())
                                : s.kind === 'jwt'
                                  ? F(e.data, s.alg) || (r = this._getOrReturnCtx(e, r), zn(r, {
                                    validation: 'jwt',
                                    code: _$$eq.invalid_string,
                                    message: s.message,
                                  }), n.dirty())
                                  : s.kind === 'cidr'
                                    ? U(e.data, s.version) || (r = this._getOrReturnCtx(e, r), zn(r, {
                                      validation: 'cidr',
                                      code: _$$eq.invalid_string,
                                      message: s.message,
                                    }), n.dirty())
                                    : s.kind === 'base64'
                                      ? M.test(e.data) || (r = this._getOrReturnCtx(e, r), zn(r, {
                                        validation: 'base64',
                                        code: _$$eq.invalid_string,
                                        message: s.message,
                                      }), n.dirty())
                                      : s.kind === 'base64url'
                                        ? D.test(e.data) || (r = this._getOrReturnCtx(e, r), zn(r, {
                                          validation: 'base64url',
                                          code: _$$eq.invalid_string,
                                          message: s.message,
                                        }), n.dirty())
                                        : util.assertNever(s)
      }
    }
    return {
      status: n.value,
      value: e.data,
    }
  }

  _regex(e, r, n) {
    return this.refinement(r => e.test(r), {
      validation: r,
      code: _$$eq.invalid_string,
      ...s.errToObj(n),
    })
  }

  _addCheck(e) {
    return new Q({
      ...this._def,
      checks: [...this._def.checks, e],
    })
  }

  email(e) {
    return this._addCheck({
      kind: 'email',
      ...s.errToObj(e),
    })
  }

  url(e) {
    return this._addCheck({
      kind: 'url',
      ...s.errToObj(e),
    })
  }

  emoji(e) {
    return this._addCheck({
      kind: 'emoji',
      ...s.errToObj(e),
    })
  }

  uuid(e) {
    return this._addCheck({
      kind: 'uuid',
      ...s.errToObj(e),
    })
  }

  nanoid(e) {
    return this._addCheck({
      kind: 'nanoid',
      ...s.errToObj(e),
    })
  }

  cuid(e) {
    return this._addCheck({
      kind: 'cuid',
      ...s.errToObj(e),
    })
  }

  cuid2(e) {
    return this._addCheck({
      kind: 'cuid2',
      ...s.errToObj(e),
    })
  }

  ulid(e) {
    return this._addCheck({
      kind: 'ulid',
      ...s.errToObj(e),
    })
  }

  base64(e) {
    return this._addCheck({
      kind: 'base64',
      ...s.errToObj(e),
    })
  }

  base64url(e) {
    return this._addCheck({
      kind: 'base64url',
      ...s.errToObj(e),
    })
  }

  jwt(e) {
    return this._addCheck({
      kind: 'jwt',
      ...s.errToObj(e),
    })
  }

  ip(e) {
    return this._addCheck({
      kind: 'ip',
      ...s.errToObj(e),
    })
  }

  cidr(e) {
    return this._addCheck({
      kind: 'cidr',
      ...s.errToObj(e),
    })
  }

  datetime(e) {
    return typeof e == 'string'
      ? this._addCheck({
          kind: 'datetime',
          precision: null,
          offset: !1,
          local: !1,
          message: e,
        })
      : this._addCheck({
          kind: 'datetime',
          precision: void 0 === e?.precision ? null : e?.precision,
          offset: e?.offset ?? !1,
          local: e?.local ?? !1,
          ...s.errToObj(e?.message),
        })
  }

  date(e) {
    return this._addCheck({
      kind: 'date',
      message: e,
    })
  }

  time(e) {
    return typeof e == 'string'
      ? this._addCheck({
          kind: 'time',
          precision: null,
          message: e,
        })
      : this._addCheck({
          kind: 'time',
          precision: void 0 === e?.precision ? null : e?.precision,
          ...s.errToObj(e?.message),
        })
  }

  duration(e) {
    return this._addCheck({
      kind: 'duration',
      ...s.errToObj(e),
    })
  }

  regex(e, r) {
    return this._addCheck({
      kind: 'regex',
      regex: e,
      ...s.errToObj(r),
    })
  }

  includes(e, r) {
    return this._addCheck({
      kind: 'includes',
      value: e,
      position: r?.position,
      ...s.errToObj(r?.message),
    })
  }

  startsWith(e, r) {
    return this._addCheck({
      kind: 'startsWith',
      value: e,
      ...s.errToObj(r),
    })
  }

  endsWith(e, r) {
    return this._addCheck({
      kind: 'endsWith',
      value: e,
      ...s.errToObj(r),
    })
  }

  min(e, r) {
    return this._addCheck({
      kind: 'min',
      value: e,
      ...s.errToObj(r),
    })
  }

  max(e, r) {
    return this._addCheck({
      kind: 'max',
      value: e,
      ...s.errToObj(r),
    })
  }

  length(e, r) {
    return this._addCheck({
      kind: 'length',
      value: e,
      ...s.errToObj(r),
    })
  }

  nonempty(e) {
    return this.min(1, s.errToObj(e))
  }

  trim() {
    return new Q({
      ...this._def,
      checks: [...this._def.checks, {
        kind: 'trim',
      }],
    })
  }

  toLowerCase() {
    return new Q({
      ...this._def,
      checks: [...this._def.checks, {
        kind: 'toLowerCase',
      }],
    })
  }

  toUpperCase() {
    return new Q({
      ...this._def,
      checks: [...this._def.checks, {
        kind: 'toUpperCase',
      }],
    })
  }

  get isDatetime() {
    return !!this._def.checks.find(e => e.kind === 'datetime')
  }

  get isDate() {
    return !!this._def.checks.find(e => e.kind === 'date')
  }

  get isTime() {
    return !!this._def.checks.find(e => e.kind === 'time')
  }

  get isDuration() {
    return !!this._def.checks.find(e => e.kind === 'duration')
  }

  get isEmail() {
    return !!this._def.checks.find(e => e.kind === 'email')
  }

  get isURL() {
    return !!this._def.checks.find(e => e.kind === 'url')
  }

  get isEmoji() {
    return !!this._def.checks.find(e => e.kind === 'emoji')
  }

  get isUUID() {
    return !!this._def.checks.find(e => e.kind === 'uuid')
  }

  get isNANOID() {
    return !!this._def.checks.find(e => e.kind === 'nanoid')
  }

  get isCUID() {
    return !!this._def.checks.find(e => e.kind === 'cuid')
  }

  get isCUID2() {
    return !!this._def.checks.find(e => e.kind === 'cuid2')
  }

  get isULID() {
    return !!this._def.checks.find(e => e.kind === 'ulid')
  }

  get isIP() {
    return !!this._def.checks.find(e => e.kind === 'ip')
  }

  get isCIDR() {
    return !!this._def.checks.find(e => e.kind === 'cidr')
  }

  get isBase64() {
    return !!this._def.checks.find(e => e.kind === 'base64')
  }

  get isBase64url() {
    return !!this._def.checks.find(e => e.kind === 'base64url')
  }

  get minLength() {
    let e = null
    for (let r of this._def.checks) r.kind === 'min' && (e === null || r.value > e) && (e = r.value)
    return e
  }

  get maxLength() {
    let e = null
    for (let r of this._def.checks) r.kind === 'max' && (e === null || r.value < e) && (e = r.value)
    return e
  }
}
function V(e, r) {
  let n = (e.toString().split('.')[1] || '').length
  let i = (r.toString().split('.')[1] || '').length
  let s = n > i ? n : i
  return Number.parseInt(e.toFixed(s).replace('.', '')) % Number.parseInt(r.toFixed(s).replace('.', '')) / 10 ** s
}
Q.create = e => new Q({
  checks: [],
  typeName: ZodFirstPartyTypeKind.ZodString,
  coerce: e?.coerce ?? !1,
  ...y(e),
})
class B extends b {
  constructor() {
    super(...arguments)
    this.min = this.gte
    this.max = this.lte
    this.step = this.multipleOf
  }

  _parse(e) {
    let r
    if (this._def.coerce && (e.data = Number(e.data)), this._getType(e) !== Zp.number) {
      let r = this._getOrReturnCtx(e)
      zn(r, {
        code: _$$eq.invalid_type,
        expected: Zp.number,
        received: r.parsedType,
      })
      return uY
    }
    let n = new MY()
    for (let i of this._def.checks) {
      i.kind === 'int'
        ? util.isInteger(e.data) || (r = this._getOrReturnCtx(e, r), zn(r, {
          code: _$$eq.invalid_type,
          expected: 'integer',
          received: 'float',
          message: i.message,
        }), n.dirty())
        : i.kind === 'min'
          ? (i.inclusive ? e.data < i.value : e.data <= i.value) && (r = this._getOrReturnCtx(e, r), zn(r, {
              code: _$$eq.too_small,
              minimum: i.value,
              type: 'number',
              inclusive: i.inclusive,
              exact: !1,
              message: i.message,
            }), n.dirty())
          : i.kind === 'max'
            ? (i.inclusive ? e.data > i.value : e.data >= i.value) && (r = this._getOrReturnCtx(e, r), zn(r, {
                code: _$$eq.too_big,
                maximum: i.value,
                type: 'number',
                inclusive: i.inclusive,
                exact: !1,
                message: i.message,
              }), n.dirty())
            : i.kind === 'multipleOf'
              ? V(e.data, i.value) !== 0 && (r = this._getOrReturnCtx(e, r), zn(r, {
                code: _$$eq.not_multiple_of,
                multipleOf: i.value,
                message: i.message,
              }), n.dirty())
              : i.kind === 'finite'
                ? Number.isFinite(e.data) || (r = this._getOrReturnCtx(e, r), zn(r, {
                  code: _$$eq.not_finite,
                  message: i.message,
                }), n.dirty())
                : util.assertNever(i)
    }
    return {
      status: n.value,
      value: e.data,
    }
  }

  gte(e, r) {
    return this.setLimit('min', e, !0, s.toString(r))
  }

  gt(e, r) {
    return this.setLimit('min', e, !1, s.toString(r))
  }

  lte(e, r) {
    return this.setLimit('max', e, !0, s.toString(r))
  }

  lt(e, r) {
    return this.setLimit('max', e, !1, s.toString(r))
  }

  setLimit(e, r, n, i) {
    return new B({
      ...this._def,
      checks: [...this._def.checks, {
        kind: e,
        value: r,
        inclusive: n,
        message: s.toString(i),
      }],
    })
  }

  _addCheck(e) {
    return new B({
      ...this._def,
      checks: [...this._def.checks, e],
    })
  }

  int(e) {
    return this._addCheck({
      kind: 'int',
      message: s.toString(e),
    })
  }

  positive(e) {
    return this._addCheck({
      kind: 'min',
      value: 0,
      inclusive: !1,
      message: s.toString(e),
    })
  }

  negative(e) {
    return this._addCheck({
      kind: 'max',
      value: 0,
      inclusive: !1,
      message: s.toString(e),
    })
  }

  nonpositive(e) {
    return this._addCheck({
      kind: 'max',
      value: 0,
      inclusive: !0,
      message: s.toString(e),
    })
  }

  nonnegative(e) {
    return this._addCheck({
      kind: 'min',
      value: 0,
      inclusive: !0,
      message: s.toString(e),
    })
  }

  multipleOf(e, r) {
    return this._addCheck({
      kind: 'multipleOf',
      value: e,
      message: s.toString(r),
    })
  }

  finite(e) {
    return this._addCheck({
      kind: 'finite',
      message: s.toString(e),
    })
  }

  safe(e) {
    return this._addCheck({
      kind: 'min',
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: s.toString(e),
    })._addCheck({
      kind: 'max',
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: s.toString(e),
    })
  }

  get minValue() {
    let e = null
    for (let r of this._def.checks) r.kind === 'min' && (e === null || r.value > e) && (e = r.value)
    return e
  }

  get maxValue() {
    let e = null
    for (let r of this._def.checks) r.kind === 'max' && (e === null || r.value < e) && (e = r.value)
    return e
  }

  get isInt() {
    return !!this._def.checks.find(e => e.kind === 'int' || e.kind === 'multipleOf' && util.isInteger(e.value))
  }

  get isFinite() {
    let e = null
    let r = null
    for (let n of this._def.checks) {
      if (n.kind === 'finite' || n.kind === 'int' || n.kind === 'multipleOf')
        return !0
      n.kind === 'min' ? (r === null || n.value > r) && (r = n.value) : n.kind === 'max' && (e === null || n.value < e) && (e = n.value)
    }
    return Number.isFinite(r) && Number.isFinite(e)
  }
}
B.create = e => new B({
  checks: [],
  typeName: ZodFirstPartyTypeKind.ZodNumber,
  coerce: e?.coerce || !1,
  ...y(e),
})
class q extends b {
  constructor() {
    super(...arguments)
    this.min = this.gte
    this.max = this.lte
  }

  _parse(e) {
    let r
    if (this._def.coerce) {
      try {
        e.data = BigInt(e.data)
      }
      catch {
        return this._getInvalidInput(e)
      }
    }
    if (this._getType(e) !== Zp.bigint)
      return this._getInvalidInput(e)
    let n = new MY()
    for (let i of this._def.checks) {
      i.kind === 'min'
        ? (i.inclusive ? e.data < i.value : e.data <= i.value) && (r = this._getOrReturnCtx(e, r), zn(r, {
            code: _$$eq.too_small,
            type: 'bigint',
            minimum: i.value,
            inclusive: i.inclusive,
            message: i.message,
          }), n.dirty())
        : i.kind === 'max'
          ? (i.inclusive ? e.data > i.value : e.data >= i.value) && (r = this._getOrReturnCtx(e, r), zn(r, {
              code: _$$eq.too_big,
              type: 'bigint',
              maximum: i.value,
              inclusive: i.inclusive,
              message: i.message,
            }), n.dirty())
          : i.kind === 'multipleOf'
            ? e.data % i.value !== BigInt(0) && (r = this._getOrReturnCtx(e, r), zn(r, {
              code: _$$eq.not_multiple_of,
              multipleOf: i.value,
              message: i.message,
            }), n.dirty())
            : util.assertNever(i)
    }
    return {
      status: n.value,
      value: e.data,
    }
  }

  _getInvalidInput(e) {
    let r = this._getOrReturnCtx(e)
    zn(r, {
      code: _$$eq.invalid_type,
      expected: Zp.bigint,
      received: r.parsedType,
    })
    return uY
  }

  gte(e, r) {
    return this.setLimit('min', e, !0, s.toString(r))
  }

  gt(e, r) {
    return this.setLimit('min', e, !1, s.toString(r))
  }

  lte(e, r) {
    return this.setLimit('max', e, !0, s.toString(r))
  }

  lt(e, r) {
    return this.setLimit('max', e, !1, s.toString(r))
  }

  setLimit(e, r, n, i) {
    return new q({
      ...this._def,
      checks: [...this._def.checks, {
        kind: e,
        value: r,
        inclusive: n,
        message: s.toString(i),
      }],
    })
  }

  _addCheck(e) {
    return new q({
      ...this._def,
      checks: [...this._def.checks, e],
    })
  }

  positive(e) {
    return this._addCheck({
      kind: 'min',
      value: BigInt(0),
      inclusive: !1,
      message: s.toString(e),
    })
  }

  negative(e) {
    return this._addCheck({
      kind: 'max',
      value: BigInt(0),
      inclusive: !1,
      message: s.toString(e),
    })
  }

  nonpositive(e) {
    return this._addCheck({
      kind: 'max',
      value: BigInt(0),
      inclusive: !0,
      message: s.toString(e),
    })
  }

  nonnegative(e) {
    return this._addCheck({
      kind: 'min',
      value: BigInt(0),
      inclusive: !0,
      message: s.toString(e),
    })
  }

  multipleOf(e, r) {
    return this._addCheck({
      kind: 'multipleOf',
      value: e,
      message: s.toString(r),
    })
  }

  get minValue() {
    let e = null
    for (let r of this._def.checks) r.kind === 'min' && (e === null || r.value > e) && (e = r.value)
    return e
  }

  get maxValue() {
    let e = null
    for (let r of this._def.checks) r.kind === 'max' && (e === null || r.value < e) && (e = r.value)
    return e
  }
}
q.create = e => new q({
  checks: [],
  typeName: ZodFirstPartyTypeKind.ZodBigInt,
  coerce: e?.coerce ?? !1,
  ...y(e),
})
class W extends b {
  _parse(e) {
    if (this._def.coerce && (e.data = !!e.data), this._getType(e) !== Zp.boolean) {
      let r = this._getOrReturnCtx(e)
      zn(r, {
        code: _$$eq.invalid_type,
        expected: Zp.boolean,
        received: r.parsedType,
      })
      return uY
    }
    return OK(e.data)
  }
}
W.create = e => new W({
  typeName: ZodFirstPartyTypeKind.ZodBoolean,
  coerce: e?.coerce || !1,
  ...y(e),
})
class Y extends b {
  _parse(e) {
    let r
    if (this._def.coerce && (e.data = new Date(e.data)), this._getType(e) !== Zp.date) {
      let r = this._getOrReturnCtx(e)
      zn(r, {
        code: _$$eq.invalid_type,
        expected: Zp.date,
        received: r.parsedType,
      })
      return uY
    }
    if (Number.isNaN(e.data.getTime())) {
      let r = this._getOrReturnCtx(e)
      zn(r, {
        code: _$$eq.invalid_date,
      })
      return uY
    }
    let n = new MY()
    for (let i of this._def.checks) {
      i.kind === 'min'
        ? e.data.getTime() < i.value && (r = this._getOrReturnCtx(e, r), zn(r, {
          code: _$$eq.too_small,
          message: i.message,
          inclusive: !0,
          exact: !1,
          minimum: i.value,
          type: 'date',
        }), n.dirty())
        : i.kind === 'max'
          ? e.data.getTime() > i.value && (r = this._getOrReturnCtx(e, r), zn(r, {
            code: _$$eq.too_big,
            message: i.message,
            inclusive: !0,
            exact: !1,
            maximum: i.value,
            type: 'date',
          }), n.dirty())
          : util.assertNever(i)
    }
    return {
      status: n.value,
      value: new Date(e.data.getTime()),
    }
  }

  _addCheck(e) {
    return new Y({
      ...this._def,
      checks: [...this._def.checks, e],
    })
  }

  min(e, r) {
    return this._addCheck({
      kind: 'min',
      value: e.getTime(),
      message: s.toString(r),
    })
  }

  max(e, r) {
    return this._addCheck({
      kind: 'max',
      value: e.getTime(),
      message: s.toString(r),
    })
  }

  get minDate() {
    let e = null
    for (let r of this._def.checks) r.kind === 'min' && (e === null || r.value > e) && (e = r.value)
    return e != null ? new Date(e) : null
  }

  get maxDate() {
    let e = null
    for (let r of this._def.checks) r.kind === 'max' && (e === null || r.value < e) && (e = r.value)
    return e != null ? new Date(e) : null
  }
}
Y.create = e => new Y({
  checks: [],
  coerce: e?.coerce || !1,
  typeName: ZodFirstPartyTypeKind.ZodDate,
  ...y(e),
})
class G extends b {
  _parse(e) {
    if (this._getType(e) !== Zp.symbol) {
      let r = this._getOrReturnCtx(e)
      zn(r, {
        code: _$$eq.invalid_type,
        expected: Zp.symbol,
        received: r.parsedType,
      })
      return uY
    }
    return OK(e.data)
  }
}
G.create = e => new G({
  typeName: ZodFirstPartyTypeKind.ZodSymbol,
  ...y(e),
})
class X extends b {
  _parse(e) {
    if (this._getType(e) !== Zp.undefined) {
      let r = this._getOrReturnCtx(e)
      zn(r, {
        code: _$$eq.invalid_type,
        expected: Zp.undefined,
        received: r.parsedType,
      })
      return uY
    }
    return OK(e.data)
  }
}
X.create = e => new X({
  typeName: ZodFirstPartyTypeKind.ZodUndefined,
  ...y(e),
})
class H extends b {
  _parse(e) {
    if (this._getType(e) !== Zp.$$null) {
      let r = this._getOrReturnCtx(e)
      zn(r, {
        code: _$$eq.invalid_type,
        expected: Zp.$$null,
        received: r.parsedType,
      })
      return uY
    }
    return OK(e.data)
  }
}
H.create = e => new H({
  typeName: ZodFirstPartyTypeKind.ZodNull,
  ...y(e),
})
class K extends b {
  constructor() {
    super(...arguments)
    this._any = !0
  }

  _parse(e) {
    return OK(e.data)
  }
}
K.create = e => new K({
  typeName: ZodFirstPartyTypeKind.ZodAny,
  ...y(e),
})
class J extends b {
  constructor() {
    super(...arguments)
    this._unknown = !0
  }

  _parse(e) {
    return OK(e.data)
  }
}
J.create = e => new J({
  typeName: ZodFirstPartyTypeKind.ZodUnknown,
  ...y(e),
})
class ee extends b {
  _parse(e) {
    let r = this._getOrReturnCtx(e)
    zn(r, {
      code: _$$eq.invalid_type,
      expected: Zp.never,
      received: r.parsedType,
    })
    return uY
  }
}
ee.create = e => new ee({
  typeName: ZodFirstPartyTypeKind.ZodNever,
  ...y(e),
})
class et extends b {
  _parse(e) {
    if (this._getType(e) !== Zp.undefined) {
      let r = this._getOrReturnCtx(e)
      zn(r, {
        code: _$$eq.invalid_type,
        expected: Zp.$$void,
        received: r.parsedType,
      })
      return uY
    }
    return OK(e.data)
  }
}
et.create = e => new et({
  typeName: ZodFirstPartyTypeKind.ZodVoid,
  ...y(e),
})
class er extends b {
  _parse(e) {
    let {
      ctx,
      status,
    } = this._processInputParams(e)
    let i = this._def
    if (ctx.parsedType !== Zp.array) {
      zn(ctx, {
        code: _$$eq.invalid_type,
        expected: Zp.array,
        received: ctx.parsedType,
      })
      return uY
    }
    if (i.exactLength !== null) {
      let e = ctx.data.length > i.exactLength.value
      let s = ctx.data.length < i.exactLength.value;
      (e || s) && (zn(ctx, {
        code: e ? _$$eq.too_big : _$$eq.too_small,
        minimum: s ? i.exactLength.value : void 0,
        maximum: e ? i.exactLength.value : void 0,
        type: 'array',
        inclusive: !0,
        exact: !0,
        message: i.exactLength.message,
      }), status.dirty())
    }
    if (i.minLength !== null && ctx.data.length < i.minLength.value && (zn(ctx, {
      code: _$$eq.too_small,
      minimum: i.minLength.value,
      type: 'array',
      inclusive: !0,
      exact: !1,
      message: i.minLength.message,
    }), status.dirty()), i.maxLength !== null && ctx.data.length > i.maxLength.value && (zn(ctx, {
      code: _$$eq.too_big,
      maximum: i.maxLength.value,
      type: 'array',
      inclusive: !0,
      exact: !1,
      message: i.maxLength.message,
    }), status.dirty()), ctx.common.async) {
      return Promise.all([...ctx.data].map((e, n) => i.type._parseAsync(new m(ctx, e, ctx.path, n)))).then(e => MY.mergeArray(status, e))
    }
    let s = [...ctx.data].map((e, n) => i.type._parseSync(new m(ctx, e, ctx.path, n)))
    return MY.mergeArray(status, s)
  }

  get element() {
    return this._def.type
  }

  min(e, r) {
    return new er({
      ...this._def,
      minLength: {
        value: e,
        message: s.toString(r),
      },
    })
  }

  max(e, r) {
    return new er({
      ...this._def,
      maxLength: {
        value: e,
        message: s.toString(r),
      },
    })
  }

  length(e, r) {
    return new er({
      ...this._def,
      exactLength: {
        value: e,
        message: s.toString(r),
      },
    })
  }

  nonempty(e) {
    return this.min(1, e)
  }
}
function en(e) {
  if (e instanceof ei) {
    let r = {}
    for (let n in e.shape) {
      let i = e.shape[n]
      r[n] = ZodOptional.create(en(i))
    }
    return new ei({
      ...e._def,
      shape: () => r,
    })
  }
  return e instanceof er
    ? new er({
      ...e._def,
      type: en(e.element),
    })
    : e instanceof ZodOptional ? ZodOptional.create(en(e.unwrap())) : e instanceof ek ? ek.create(en(e.unwrap())) : e instanceof ec ? ec.create(e.items.map(e => en(e))) : e
}
er.create = (e, r) => new er({
  type: e,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: ZodFirstPartyTypeKind.ZodArray,
  ...y(r),
})
class ei extends b {
  constructor() {
    super(...arguments)
    this._cached = null
    this.nonstrict = this.passthrough
    this.augment = this.extend
  }

  _getCached() {
    if (this._cached !== null)
      return this._cached
    let e = this._def.shape()
    let r = util.objectKeys(e)
    this._cached = {
      shape: e,
      keys: r,
    }
    return this._cached
  }

  _parse(e) {
    if (this._getType(e) !== Zp.object) {
      let r = this._getOrReturnCtx(e)
      zn(r, {
        code: _$$eq.invalid_type,
        expected: Zp.object,
        received: r.parsedType,
      })
      return uY
    }
    let {
      status,
      ctx,
    } = this._processInputParams(e)
    let {
      shape,
      keys,
    } = this._getCached()
    let o = []
    if (!(this._def.catchall instanceof ee && this._def.unknownKeys === 'strip')) {
      for (let e in ctx.data) keys.includes(e) || o.push(e)
    }
    let a = []
    for (let e of keys) {
      let r = shape[e]
      let s = ctx.data[e]
      a.push({
        key: {
          status: 'valid',
          value: e,
        },
        value: r._parse(new m(ctx, s, ctx.path, e)),
        alwaysSet: e in ctx.data,
      })
    }
    if (this._def.catchall instanceof ee) {
      let e = this._def.unknownKeys
      if (e === 'passthrough') {
        for (let e of o) {
          a.push({
            key: {
              status: 'valid',
              value: e,
            },
            value: {
              status: 'valid',
              value: ctx.data[e],
            },
          })
        }
      }
      else if (e === 'strict') {
        o.length > 0 && (zn(ctx, {
          code: _$$eq.unrecognized_keys,
          keys: o,
        }), status.dirty())
      }
      else if (e === 'strip') {
        ;
      }
      else {
        throw new Error('Internal ZodObject error: invalid unknownKeys value.')
      }
    }
    else {
      let e = this._def.catchall
      for (let r of o) {
        let i = ctx.data[r]
        a.push({
          key: {
            status: 'valid',
            value: r,
          },
          value: e._parse(new m(ctx, i, ctx.path, r)),
          alwaysSet: r in ctx.data,
        })
      }
    }
    return ctx.common.async
      ? Promise.resolve().then(async () => {
          let e = []
          for (let r of a) {
            let n = await r.key
            let i = await r.value
            e.push({
              key: n,
              value: i,
              alwaysSet: r.alwaysSet,
            })
          }
          return e
        }).then(e => MY.mergeObjectSync(status, e))
      : MY.mergeObjectSync(status, a)
  }

  get shape() {
    return this._def.shape()
  }

  strict(e) {
    s.errToObj
    return new ei({
      ...this._def,
      unknownKeys: 'strict',
      ...(void 0 !== e
        ? {
            errorMap: (r, n) => {
              let i = this._def.errorMap?.(r, n).message ?? n.defaultError
              return r.code === 'unrecognized_keys'
                ? {
                    message: s.errToObj(e).message ?? i,
                  }
                : {
                    message: i,
                  }
            },
          }
        : {}),
    })
  }

  strip() {
    return new ei({
      ...this._def,
      unknownKeys: 'strip',
    })
  }

  passthrough() {
    return new ei({
      ...this._def,
      unknownKeys: 'passthrough',
    })
  }

  extend(e) {
    return new ei({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...e,
      }),
    })
  }

  merge(e) {
    return new ei({
      unknownKeys: e._def.unknownKeys,
      catchall: e._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...e._def.shape(),
      }),
      typeName: ZodFirstPartyTypeKind.ZodObject,
    })
  }

  setKey(e, r) {
    return this.augment({
      [e]: r,
    })
  }

  catchall(e) {
    return new ei({
      ...this._def,
      catchall: e,
    })
  }

  pick(e) {
    let r = {}
    for (let n of util.objectKeys(e)) e[n] && this.shape[n] && (r[n] = this.shape[n])
    return new ei({
      ...this._def,
      shape: () => r,
    })
  }

  omit(e) {
    let r = {}
    for (let n of util.objectKeys(this.shape)) e[n] || (r[n] = this.shape[n])
    return new ei({
      ...this._def,
      shape: () => r,
    })
  }

  deepPartial() {
    return en(this)
  }

  partial(e) {
    let r = {}
    for (let n of util.objectKeys(this.shape)) {
      let i = this.shape[n]
      e && !e[n] ? r[n] = i : r[n] = i.optional()
    }
    return new ei({
      ...this._def,
      shape: () => r,
    })
  }

  required(e) {
    let r = {}
    for (let n of util.objectKeys(this.shape)) {
      if (e && !e[n]) {
        r[n] = this.shape[n]
      }
      else {
        let e = this.shape[n]
        for (; e instanceof ZodOptional;) e = e._def.innerType
        r[n] = e
      }
    }
    return new ei({
      ...this._def,
      shape: () => r,
    })
  }

  keyof() {
    return ev(util.objectKeys(this.shape))
  }
}
ei.create = (e, r) => new ei({
  shape: () => e,
  unknownKeys: 'strip',
  catchall: ee.create(),
  typeName: ZodFirstPartyTypeKind.ZodObject,
  ...y(r),
})
ei.strictCreate = (e, r) => new ei({
  shape: () => e,
  unknownKeys: 'strict',
  catchall: ee.create(),
  typeName: ZodFirstPartyTypeKind.ZodObject,
  ...y(r),
})
ei.lazycreate = (e, r) => new ei({
  shape: e,
  unknownKeys: 'strip',
  catchall: ee.create(),
  typeName: ZodFirstPartyTypeKind.ZodObject,
  ...y(r),
})
class es extends b {
  _parse(e) {
    let {
      ctx,
    } = this._processInputParams(e)
    let n = this._def.options
    function i(e) {
      for (let r of e) {
        if (r.result.status === 'valid')
          return r.result
      }
      for (let n of e) {
        if (n.result.status === 'dirty') {
          ctx.common.issues.push(...n.ctx.common.issues)
          return n.result
        }
      }
      let n = e.map(e => new _$$G(e.ctx.common.issues))
      zn(ctx, {
        code: _$$eq.invalid_union,
        unionErrors: n,
      })
      return uY
    }
    if (ctx.common.async) {
      return Promise.all(n.map(async (e) => {
        let n = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: [],
          },
          parent: null,
        }
        return {
          result: await e._parseAsync({
            data: ctx.data,
            path: ctx.path,
            parent: n,
          }),
          ctx: n,
        }
      })).then(i)
    }
    {
      let e
      let i = []
      for (let s of n) {
        let n = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: [],
          },
          parent: null,
        }
        let o = s._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: n,
        })
        if (o.status === 'valid')
          return o
        o.status !== 'dirty' || e || (e = {
          result: o,
          ctx: n,
        })
        n.common.issues.length && i.push(n.common.issues)
      }
      if (e) {
        ctx.common.issues.push(...e.ctx.common.issues)
        return e.result
      }
      let s = i.map(e => new _$$G(e))
      zn(ctx, {
        code: _$$eq.invalid_union,
        unionErrors: s,
      })
      return uY
    }
  }

  get options() {
    return this._def.options
  }
}
es.create = (e, r) => new es({
  options: e,
  typeName: ZodFirstPartyTypeKind.ZodUnion,
  ...y(r),
})
let eo = (e) => {
  if (e instanceof eg)
    return eo(e.schema)
  if (e instanceof ex)
    return eo(e.innerType())
  if (e instanceof em)
    return [e.value]
  if (e instanceof ey)
    return e.options
  if (e instanceof eb)
    return util.objectValues(e.enum)
  if (e instanceof e_)
    return eo(e._def.innerType)
  if (e instanceof X)
    return [void 0]; else if (e instanceof H)
    return [null]; else if (e instanceof ZodOptional)
    return [void 0, ...eo(e.unwrap())]; else if (e instanceof ek)
    return [null, ...eo(e.unwrap())]; else if (e instanceof eC)
    return eo(e.unwrap()); else if (e instanceof eI)
    return eo(e.unwrap()); else if (e instanceof eS)
    return eo(e._def.innerType); else return []
}
class ea extends b {
  _parse(e) {
    let {
      ctx,
    } = this._processInputParams(e)
    if (ctx.parsedType !== Zp.object) {
      zn(ctx, {
        code: _$$eq.invalid_type,
        expected: Zp.object,
        received: ctx.parsedType,
      })
      return uY
    }
    let n = this.discriminator
    let i = ctx.data[n]
    let s = this.optionsMap.get(i)
    return s
      ? ctx.common.async
        ? s._parseAsync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx,
          })
        : s._parseSync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx,
          })
      : (zn(ctx, {
          code: _$$eq.invalid_union_discriminator,
          options: Array.from(this.optionsMap.keys()),
          path: [n],
        }), uY)
  }

  get discriminator() {
    return this._def.discriminator
  }

  get options() {
    return this._def.options
  }

  get optionsMap() {
    return this._def.optionsMap
  }

  static create(e, r, n) {
    let i = new Map()
    for (let n of r) {
      let r = eo(n.shape[e])
      if (!r.length)
        throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`)
      for (let s of r) {
        if (i.has(s))
          throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(s)}`)
        i.set(s, n)
      }
    }
    return new ea({
      typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion,
      discriminator: e,
      options: r,
      optionsMap: i,
      ...y(n),
    })
  }
}
function el(e, r) {
  let n = CR(e)
  let i = CR(r)
  if (e === r) {
    return {
      valid: !0,
      data: e,
    }
  }
  if (n === Zp.object && i === Zp.object) {
    let n = util.objectKeys(r)
    let i = util.objectKeys(e).filter(e => n.includes(e))
    let s = {
      ...e,
      ...r,
    }
    for (let n of i) {
      let i = el(e[n], r[n])
      if (!i.valid) {
        return {
          valid: !1,
        }
      }
      s[n] = i.data
    }
    return {
      valid: !0,
      data: s,
    }
  }
  if (n === Zp.array && i === Zp.array) {
    if (e.length !== r.length) {
      return {
        valid: !1,
      }
    }
    let n = []
    for (let i = 0; i < e.length; i++) {
      let s = el(e[i], r[i])
      if (!s.valid) {
        return {
          valid: !1,
        }
      }
      n.push(s.data)
    }
    return {
      valid: !0,
      data: n,
    }
  }
  return n === Zp.date && i === Zp.date && +e == +r
    ? {
        valid: !0,
        data: e,
      }
    : {
        valid: !1,
      }
}
class $$eu extends b {
  _parse(e) {
    let {
      status,
      ctx,
    } = this._processInputParams(e)
    let i = (e, i) => {
      if (G4(e) || G4(i))
        return uY
      let s = el(e.value, i.value)
      return s.valid
        ? ((DM(e) || DM(i)) && status.dirty(), {
            status: status.value,
            value: s.data,
          })
        : (zn(ctx, {
            code: _$$eq.invalid_intersection_types,
          }), uY)
    }
    return ctx.common.async
      ? Promise.all([this._def.left._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx,
        }), this._def.right._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx,
        })]).then(([e, r]) => i(e, r))
      : i(this._def.left._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx,
        }), this._def.right._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx,
        }))
  }
}
$$eu.create = (e, r, n) => new $$eu({
  left: e,
  right: r,
  typeName: ZodFirstPartyTypeKind.ZodIntersection,
  ...y(n),
})
class ec extends b {
  _parse(e) {
    let {
      status,
      ctx,
    } = this._processInputParams(e)
    if (ctx.parsedType !== Zp.array) {
      zn(ctx, {
        code: _$$eq.invalid_type,
        expected: Zp.array,
        received: ctx.parsedType,
      })
      return uY
    }
    if (ctx.data.length < this._def.items.length) {
      zn(ctx, {
        code: _$$eq.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: 'array',
      })
      return uY
    }
    !this._def.rest && ctx.data.length > this._def.items.length && (zn(ctx, {
      code: _$$eq.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: 'array',
    }), status.dirty())
    let i = [...ctx.data].map((e, r) => {
      let i = this._def.items[r] || this._def.rest
      return i ? i._parse(new m(ctx, e, ctx.path, r)) : null
    }).filter(e => !!e)
    return ctx.common.async ? Promise.all(i).then(e => MY.mergeArray(status, e)) : MY.mergeArray(status, i)
  }

  get items() {
    return this._def.items
  }

  rest(e) {
    return new ec({
      ...this._def,
      rest: e,
    })
  }
}
ec.create = (e, r) => {
  if (!Array.isArray(e))
    throw new Error('You must pass an array of schemas to z.tuple([ ... ])')
  return new ec({
    items: e,
    typeName: ZodFirstPartyTypeKind.ZodTuple,
    rest: null,
    ...y(r),
  })
}
class eh extends b {
  get keySchema() {
    return this._def.keyType
  }

  get valueSchema() {
    return this._def.valueType
  }

  _parse(e) {
    let {
      status,
      ctx,
    } = this._processInputParams(e)
    if (ctx.parsedType !== Zp.object) {
      zn(ctx, {
        code: _$$eq.invalid_type,
        expected: Zp.object,
        received: ctx.parsedType,
      })
      return uY
    }
    let i = []
    let s = this._def.keyType
    let o = this._def.valueType
    for (let e in ctx.data) {
      i.push({
        key: s._parse(new m(ctx, e, ctx.path, e)),
        value: o._parse(new m(ctx, ctx.data[e], ctx.path, e)),
        alwaysSet: e in ctx.data,
      })
    }
    return ctx.common.async ? MY.mergeObjectAsync(status, i) : MY.mergeObjectSync(status, i)
  }

  get element() {
    return this._def.valueType
  }

  static create(e, r, n) {
    return new eh(r instanceof b
      ? {
          keyType: e,
          valueType: r,
          typeName: ZodFirstPartyTypeKind.ZodRecord,
          ...y(n),
        }
      : {
          keyType: Q.create(),
          valueType: e,
          typeName: ZodFirstPartyTypeKind.ZodRecord,
          ...y(r),
        })
  }
}
class ed extends b {
  get keySchema() {
    return this._def.keyType
  }

  get valueSchema() {
    return this._def.valueType
  }

  _parse(e) {
    let {
      status,
      ctx,
    } = this._processInputParams(e)
    if (ctx.parsedType !== Zp.map) {
      zn(ctx, {
        code: _$$eq.invalid_type,
        expected: Zp.map,
        received: ctx.parsedType,
      })
      return uY
    }
    let i = this._def.keyType
    let s = this._def.valueType
    let o = [...ctx.data.entries()].map(([e, r], o) => ({
      key: i._parse(new m(ctx, e, ctx.path, [o, 'key'])),
      value: s._parse(new m(ctx, r, ctx.path, [o, 'value'])),
    }))
    if (ctx.common.async) {
      let e = new Map()
      return Promise.resolve().then(async () => {
        for (let n of o) {
          let i = await n.key
          let s = await n.value
          if (i.status === 'aborted' || s.status === 'aborted')
            return uY;
          (i.status === 'dirty' || s.status === 'dirty') && status.dirty()
          e.set(i.value, s.value)
        }
        return {
          status: status.value,
          value: e,
        }
      })
    }
    {
      let e = new Map()
      for (let n of o) {
        let i = n.key
        let s = n.value
        if (i.status === 'aborted' || s.status === 'aborted')
          return uY;
        (i.status === 'dirty' || s.status === 'dirty') && status.dirty()
        e.set(i.value, s.value)
      }
      return {
        status: status.value,
        value: e,
      }
    }
  }
}
ed.create = (e, r, n) => new ed({
  valueType: r,
  keyType: e,
  typeName: ZodFirstPartyTypeKind.ZodMap,
  ...y(n),
})
class ef extends b {
  _parse(e) {
    let {
      status,
      ctx,
    } = this._processInputParams(e)
    if (ctx.parsedType !== Zp.set) {
      zn(ctx, {
        code: _$$eq.invalid_type,
        expected: Zp.set,
        received: ctx.parsedType,
      })
      return uY
    }
    let i = this._def
    i.minSize !== null && ctx.data.size < i.minSize.value && (zn(ctx, {
      code: _$$eq.too_small,
      minimum: i.minSize.value,
      type: 'set',
      inclusive: !0,
      exact: !1,
      message: i.minSize.message,
    }), status.dirty())
    i.maxSize !== null && ctx.data.size > i.maxSize.value && (zn(ctx, {
      code: _$$eq.too_big,
      maximum: i.maxSize.value,
      type: 'set',
      inclusive: !0,
      exact: !1,
      message: i.maxSize.message,
    }), status.dirty())
    let s = this._def.valueType
    function o(e) {
      let n = new Set()
      for (let i of e) {
        if (i.status === 'aborted')
          return uY
        i.status === 'dirty' && status.dirty()
        n.add(i.value)
      }
      return {
        status: status.value,
        value: n,
      }
    }
    let a = [...ctx.data.values()].map((e, r) => s._parse(new m(ctx, e, ctx.path, r)))
    return ctx.common.async ? Promise.all(a).then(e => o(e)) : o(a)
  }

  min(e, r) {
    return new ef({
      ...this._def,
      minSize: {
        value: e,
        message: s.toString(r),
      },
    })
  }

  max(e, r) {
    return new ef({
      ...this._def,
      maxSize: {
        value: e,
        message: s.toString(r),
      },
    })
  }

  size(e, r) {
    return this.min(e, r).max(e, r)
  }

  nonempty(e) {
    return this.min(1, e)
  }
}
ef.create = (e, r) => new ef({
  valueType: e,
  minSize: null,
  maxSize: null,
  typeName: ZodFirstPartyTypeKind.ZodSet,
  ...y(r),
})
class ep extends b {
  constructor() {
    super(...arguments)
    this.validate = this.implement
  }

  _parse(e) {
    let {
      ctx,
    } = this._processInputParams(e)
    if (ctx.parsedType !== Zp.$$function) {
      zn(ctx, {
        code: _$$eq.invalid_type,
        expected: Zp.$$function,
        received: ctx.parsedType,
      })
      return uY
    }
    function n(e, n) {
      return y7({
        data: e,
        path: ctx.path,
        errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, $W(), su].filter(e => !!e),
        issueData: {
          code: _$$eq.invalid_arguments,
          argumentsError: n,
        },
      })
    }
    function i(e, n) {
      return y7({
        data: e,
        path: ctx.path,
        errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, $W(), su].filter(e => !!e),
        issueData: {
          code: _$$eq.invalid_return_type,
          returnTypeError: n,
        },
      })
    }
    let s = {
      errorMap: ctx.common.contextualErrorMap,
    }
    let o = ctx.data
    if (this._def.returns instanceof eO) {
      let e = this
      return OK(async function (...r) {
        let a = new _$$G([])
        let h = await e._def.args.parseAsync(r, s).catch((e) => {
          a.addIssue(n(r, e))
          return a
        })
        let d = await Reflect.apply(o, this, h)
        return await e._def.returns._def.type.parseAsync(d, s).catch((e) => {
          a.addIssue(i(d, e))
          return a
        })
      })
    }
    {
      let e = this
      return OK(function (...r) {
        let a = e._def.args.safeParse(r, s)
        if (!a.success)
          throw new _$$G([n(r, a.error)])
        let h = Reflect.apply(o, this, a.data)
        let d = e._def.returns.safeParse(h, s)
        if (!d.success)
          throw new _$$G([i(h, d.error)])
        return d.data
      })
    }
  }

  parameters() {
    return this._def.args
  }

  returnType() {
    return this._def.returns
  }

  args(...e) {
    return new ep({
      ...this._def,
      args: ec.create(e).rest(J.create()),
    })
  }

  returns(e) {
    return new ep({
      ...this._def,
      returns: e,
    })
  }

  implement(e) {
    return this.parse(e)
  }

  strictImplement(e) {
    return this.parse(e)
  }

  static create(e, r, n) {
    return new ep({
      args: e || ec.create([]).rest(J.create()),
      returns: r || J.create(),
      typeName: ZodFirstPartyTypeKind.ZodFunction,
      ...y(n),
    })
  }
}
class eg extends b {
  get schema() {
    return this._def.getter()
  }

  _parse(e) {
    let {
      ctx,
    } = this._processInputParams(e)
    return this._def.getter()._parse({
      data: ctx.data,
      path: ctx.path,
      parent: ctx,
    })
  }
}
eg.create = (e, r) => new eg({
  getter: e,
  typeName: ZodFirstPartyTypeKind.ZodLazy,
  ...y(r),
})
class em extends b {
  _parse(e) {
    if (e.data !== this._def.value) {
      let r = this._getOrReturnCtx(e)
      zn(r, {
        received: r.data,
        code: _$$eq.invalid_literal,
        expected: this._def.value,
      })
      return uY
    }
    return {
      status: 'valid',
      value: e.data,
    }
  }

  get value() {
    return this._def.value
  }
}
function ev(e, r) {
  return new ey({
    values: e,
    typeName: ZodFirstPartyTypeKind.ZodEnum,
    ...y(r),
  })
}
em.create = (e, r) => new em({
  value: e,
  typeName: ZodFirstPartyTypeKind.ZodLiteral,
  ...y(r),
})
class ey extends b {
  _parse(e) {
    if (typeof e.data != 'string') {
      let r = this._getOrReturnCtx(e)
      let n = this._def.values
      zn(r, {
        expected: util.joinValues(n),
        received: r.parsedType,
        code: _$$eq.invalid_type,
      })
      return uY
    }
    if (this._cache || (this._cache = new Set(this._def.values)), !this._cache.has(e.data)) {
      let r = this._getOrReturnCtx(e)
      let n = this._def.values
      zn(r, {
        received: r.data,
        code: _$$eq.invalid_enum_value,
        options: n,
      })
      return uY
    }
    return OK(e.data)
  }

  get options() {
    return this._def.values
  }

  get enum() {
    let e = {}
    for (let r of this._def.values) e[r] = r
    return e
  }

  get Values() {
    let e = {}
    for (let r of this._def.values) e[r] = r
    return e
  }

  get Enum() {
    let e = {}
    for (let r of this._def.values) e[r] = r
    return e
  }

  extract(e, r = this._def) {
    return ey.create(e, {
      ...this._def,
      ...r,
    })
  }

  exclude(e, r = this._def) {
    return ey.create(this.options.filter(r => !e.includes(r)), {
      ...this._def,
      ...r,
    })
  }
}
ey.create = ev
class eb extends b {
  _parse(e) {
    let r = util.getValidEnumValues(this._def.values)
    let n = this._getOrReturnCtx(e)
    if (n.parsedType !== Zp.string && n.parsedType !== Zp.number) {
      let e = util.objectValues(r)
      zn(n, {
        expected: util.joinValues(e),
        received: n.parsedType,
        code: _$$eq.invalid_type,
      })
      return uY
    }
    if (this._cache || (this._cache = new Set(util.getValidEnumValues(this._def.values))), !this._cache.has(e.data)) {
      let e = util.objectValues(r)
      zn(n, {
        received: n.data,
        code: _$$eq.invalid_enum_value,
        options: e,
      })
      return uY
    }
    return OK(e.data)
  }

  get enum() {
    return this._def.values
  }
}
eb.create = (e, r) => new eb({
  values: e,
  typeName: ZodFirstPartyTypeKind.ZodNativeEnum,
  ...y(r),
})
class eO extends b {
  unwrap() {
    return this._def.type
  }

  _parse(e) {
    let {
      ctx,
    } = this._processInputParams(e)
    if (ctx.parsedType !== Zp.promise && !1 === ctx.common.async) {
      zn(ctx, {
        code: _$$eq.invalid_type,
        expected: Zp.promise,
        received: ctx.parsedType,
      })
      return uY
    }
    let n = ctx.parsedType === Zp.promise ? ctx.data : Promise.resolve(ctx.data)
    return OK(n.then(e => this._def.type.parseAsync(e, {
      path: ctx.path,
      errorMap: ctx.common.contextualErrorMap,
    })))
  }
}
eO.create = (e, r) => new eO({
  type: e,
  typeName: ZodFirstPartyTypeKind.ZodPromise,
  ...y(r),
})
class ex extends b {
  innerType() {
    return this._def.schema
  }

  sourceType() {
    return this._def.schema._def.typeName === ZodFirstPartyTypeKind.ZodEffects ? this._def.schema.sourceType() : this._def.schema
  }

  _parse(e) {
    let {
      status,
      ctx,
    } = this._processInputParams(e)
    let i = this._def.effect || null
    let s = {
      addIssue: (e) => {
        zn(ctx, e)
        e.fatal ? status.abort() : status.dirty()
      },
      get path() {
        return ctx.path
      },
    }
    if (s.addIssue = s.addIssue.bind(s), i.type === 'preprocess') {
      let e = i.transform(ctx.data, s)
      if (ctx.common.async) {
        return Promise.resolve(e).then(async (e) => {
          if (status.value === 'aborted')
            return uY
          let i = await this._def.schema._parseAsync({
            data: e,
            path: ctx.path,
            parent: ctx,
          })
          return i.status === 'aborted' ? uY : i.status === 'dirty' || status.value === 'dirty' ? jm(i.value) : i
        })
      }
      {
        if (status.value === 'aborted')
          return uY
        let i = this._def.schema._parseSync({
          data: e,
          path: ctx.path,
          parent: ctx,
        })
        return i.status === 'aborted' ? uY : i.status === 'dirty' || status.value === 'dirty' ? jm(i.value) : i
      }
    }
    if (i.type === 'refinement') {
      let e = (e) => {
        let r = i.refinement(e, s)
        if (ctx.common.async)
          return Promise.resolve(r)
        if (r instanceof Promise)
          throw new Error('Async refinement encountered during synchronous parse operation. Use .parseAsync instead.')
        return e
      }
      if (!1 !== ctx.common.async) {
        return this._def.schema._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx,
        }).then(n => n.status === 'aborted'
          ? uY
          : (n.status === 'dirty' && status.dirty(), e(n.value).then(() => ({
              status: status.value,
              value: n.value,
            }))))
      }
      {
        let i = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx,
        })
        return i.status === 'aborted'
          ? uY
          : (i.status === 'dirty' && status.dirty(), e(i.value), {
              status: status.value,
              value: i.value,
            })
      }
    }
    if (i.type === 'transform') {
      if (!1 !== ctx.common.async) {
        return this._def.schema._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx,
        }).then(e => fn(e)
          ? Promise.resolve(i.transform(e.value, s)).then(e => ({
              status: status.value,
              value: e,
            }))
          : uY)
      }
      {
        let e = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx,
        })
        if (!fn(e))
          return uY
        let o = i.transform(e.value, s)
        if (o instanceof Promise)
          throw new Error('Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.')
        return {
          status: status.value,
          value: o,
        }
      }
    }
    util.assertNever(i)
  }
}
ex.create = (e, r, n) => new ex({
  schema: e,
  typeName: ZodFirstPartyTypeKind.ZodEffects,
  effect: r,
  ...y(n),
})
ex.createWithPreprocess = (e, r, n) => new ex({
  schema: r,
  effect: {
    type: 'preprocess',
    transform: e,
  },
  typeName: ZodFirstPartyTypeKind.ZodEffects,
  ...y(n),
})
export class ZodOptional extends b {
  _parse(e) {
    return this._getType(e) === Zp.undefined ? OK(void 0) : this._def.innerType._parse(e)
  }

  unwrap() {
    return this._def.innerType
  }
}
ZodOptional.create = (e, r) => new ZodOptional({
  innerType: e,
  typeName: ZodFirstPartyTypeKind.ZodOptional,
  ...y(r),
})
class ek extends b {
  _parse(e) {
    return this._getType(e) === Zp.$$null ? OK(null) : this._def.innerType._parse(e)
  }

  unwrap() {
    return this._def.innerType
  }
}
ek.create = (e, r) => new ek({
  innerType: e,
  typeName: ZodFirstPartyTypeKind.ZodNullable,
  ...y(r),
})
class e_ extends b {
  _parse(e) {
    let {
      ctx,
    } = this._processInputParams(e)
    let n = ctx.data
    ctx.parsedType === Zp.undefined && (n = this._def.defaultValue())
    return this._def.innerType._parse({
      data: n,
      path: ctx.path,
      parent: ctx,
    })
  }

  removeDefault() {
    return this._def.innerType
  }
}
e_.create = (e, r) => new e_({
  innerType: e,
  typeName: ZodFirstPartyTypeKind.ZodDefault,
  defaultValue: typeof r.$$default == 'function' ? r.$$default : () => r.$$default,
  ...y(r),
})
class eS extends b {
  _parse(e) {
    let {
      ctx,
    } = this._processInputParams(e)
    let n = {
      ...ctx,
      common: {
        ...ctx.common,
        issues: [],
      },
    }
    let i = this._def.innerType._parse({
      data: n.data,
      path: n.path,
      parent: {
        ...n,
      },
    })
    return xP(i)
      ? i.then(e => ({
          status: 'valid',
          value: e.status === 'valid'
            ? e.value
            : this._def.catchValue({
                get error() {
                  return new _$$G(n.common.issues)
                },
                input: n.data,
              }),
        }))
      : {
          status: 'valid',
          value: i.status === 'valid'
            ? i.value
            : this._def.catchValue({
                get error() {
                  return new _$$G(n.common.issues)
                },
                input: n.data,
              }),
        }
  }

  removeCatch() {
    return this._def.innerType
  }
}
eS.create = (e, r) => new eS({
  innerType: e,
  typeName: ZodFirstPartyTypeKind.ZodCatch,
  catchValue: typeof r.catch == 'function' ? r.catch : () => r.catch,
  ...y(r),
})
class eE extends b {
  _parse(e) {
    if (this._getType(e) !== Zp.nan) {
      let r = this._getOrReturnCtx(e)
      zn(r, {
        code: _$$eq.invalid_type,
        expected: Zp.nan,
        received: r.parsedType,
      })
      return uY
    }
    return {
      status: 'valid',
      value: e.data,
    }
  }
}
eE.create = e => new eE({
  typeName: ZodFirstPartyTypeKind.ZodNaN,
  ...y(e),
})
let eA = Symbol('zod_brand')
class eC extends b {
  _parse(e) {
    let {
      ctx,
    } = this._processInputParams(e)
    let n = ctx.data
    return this._def.type._parse({
      data: n,
      path: ctx.path,
      parent: ctx,
    })
  }

  unwrap() {
    return this._def.type
  }
}
class eT extends b {
  _parse(e) {
    let {
      status,
      ctx,
    } = this._processInputParams(e)
    if (ctx.common.async) {
      return (async () => {
        let e = await this._def.$$in._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx,
        })
        return e.status === 'aborted'
          ? uY
          : e.status === 'dirty'
            ? (status.dirty(), jm(e.value))
            : this._def.out._parseAsync({
                data: e.value,
                path: ctx.path,
                parent: ctx,
              })
      })()
    }
    {
      let e = this._def.$$in._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx,
      })
      return e.status === 'aborted'
        ? uY
        : e.status === 'dirty'
          ? (status.dirty(), {
              status: 'dirty',
              value: e.value,
            })
          : this._def.out._parseSync({
              data: e.value,
              path: ctx.path,
              parent: ctx,
            })
    }
  }

  static create(e, r) {
    return new eT({
      in: e,
      out: r,
      typeName: ZodFirstPartyTypeKind.ZodPipeline,
    })
  }
}
class eI extends b {
  _parse(e) {
    let r = this._def.innerType._parse(e)
    let n = e => (fn(e) && (e.value = Object.freeze(e.value)), e)
    return xP(r) ? r.then(e => n(e)) : n(r)
  }

  unwrap() {
    return this._def.innerType
  }
}
function eP(e, r) {
  let n = typeof e == 'function'
    ? e(r)
    : typeof e == 'string'
      ? {
          message: e,
        }
      : e
  return typeof n == 'string'
    ? {
        message: n,
      }
    : n
}
function eR(e, r = {}, n) {
  return e
    ? K.create().superRefine((i, s) => {
        let o = e(i)
        if (o instanceof Promise) {
          return o.then((e) => {
            if (!e) {
              let e = eP(r, i)
              let o = e.fatal ?? n ?? !0
              s.addIssue({
                code: 'custom',
                ...e,
                fatal: o,
              })
            }
          })
        }
        if (!o) {
          let e = eP(r, i)
          let o = e.fatal ?? n ?? !0
          s.addIssue({
            code: 'custom',
            ...e,
            fatal: o,
          })
        }
      })
    : K.create()
}
eI.create = (e, r) => new eI({
  innerType: e,
  typeName: ZodFirstPartyTypeKind.ZodReadonly,
  ...y(r),
})
let eM = {
  object: ei.lazycreate,
}
!(function (e) {
  e.ZodString = 'ZodString'
  e.ZodNumber = 'ZodNumber'
  e.ZodNaN = 'ZodNaN'
  e.ZodBigInt = 'ZodBigInt'
  e.ZodBoolean = 'ZodBoolean'
  e.ZodDate = 'ZodDate'
  e.ZodSymbol = 'ZodSymbol'
  e.ZodUndefined = 'ZodUndefined'
  e.ZodNull = 'ZodNull'
  e.ZodAny = 'ZodAny'
  e.ZodUnknown = 'ZodUnknown'
  e.ZodNever = 'ZodNever'
  e.ZodVoid = 'ZodVoid'
  e.ZodArray = 'ZodArray'
  e.ZodObject = 'ZodObject'
  e.ZodUnion = 'ZodUnion'
  e.ZodDiscriminatedUnion = 'ZodDiscriminatedUnion'
  e.ZodIntersection = 'ZodIntersection'
  e.ZodTuple = 'ZodTuple'
  e.ZodRecord = 'ZodRecord'
  e.ZodMap = 'ZodMap'
  e.ZodSet = 'ZodSet'
  e.ZodFunction = 'ZodFunction'
  e.ZodLazy = 'ZodLazy'
  e.ZodLiteral = 'ZodLiteral'
  e.ZodEnum = 'ZodEnum'
  e.ZodEffects = 'ZodEffects'
  e.ZodNativeEnum = 'ZodNativeEnum'
  e.ZodOptional = 'ZodOptional'
  e.ZodNullable = 'ZodNullable'
  e.ZodDefault = 'ZodDefault'
  e.ZodCatch = 'ZodCatch'
  e.ZodPromise = 'ZodPromise'
  e.ZodBranded = 'ZodBranded'
  e.ZodPipeline = 'ZodPipeline'
  e.ZodReadonly = 'ZodReadonly'
}(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {})))
let eD = (e, r = {
  message: `Input not instance of ${e.name}`,
}) => eR(r => r instanceof e, r)
let string = Q.create
let number = B.create
let eL = eE.create
let ej = q.create
let boolean = W.create
let eZ = Y.create
let symbol = G.create
let undefined = X.create
let eQ = H.create
let any = K.create
let unknown = J.create
let eq = ee.create
let eW = et.create
let array = er.create
let object = ei.create
let eX = ei.strictCreate
let union = es.create
let eK = ea.create
let intersection = $$eu.create
let tuple = ec.create
let record = eh.create
let e2 = ed.create
let e5 = ef.create
let e3 = ep.create
let e6 = eg.create
let literal = em.create
let e8 = ey.create
let nativeEnum = eb.create
let e9 = eO.create
let transformer = ex.create
let optional = ZodOptional.create
let tr = ek.create
let tn = ex.createWithPreprocess
let ti = eT.create
let ts = () => string().optional()
let to = () => number().optional()
let ta = () => boolean().optional()
let tl = {
  string: e => Q.create({
    ...e,
    coerce: !0,
  }),
  number: e => B.create({
    ...e,
    coerce: !0,
  }),
  boolean: e => W.create({
    ...e,
    coerce: !0,
  }),
  bigint: e => q.create({
    ...e,
    coerce: !0,
  }),
  date: e => Y.create({
    ...e,
    coerce: !0,
  }),
}
let tu = uY
let $$tc5 = $$a15
export const kY = ZodFirstPartyTypeKind
export const Ii = ZodOptional
export const bz = any
export const YO = array
export const zM = boolean
export const Ay = $$tc5
export const E$ = intersection
export const eu = literal
export const fc = nativeEnum
export const ai = number
export const Ik = object
export const lq = optional
export const g1 = record
export const Yj = string
export const KC = union
export const z = $$a15
