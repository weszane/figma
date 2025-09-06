import { z, kY } from "../905/239603";
import r from "lodash-es/snakeCase";
import { getFalseValue } from "../figma_app/897289";
var a = r;
let o = e => {
  if (e instanceof z.ZodLazy) return o(e.schema);
  if (e instanceof z.ZodEffects) return o(e.innerType());
  if (e instanceof z.ZodLiteral) return [e.value];
  if (e instanceof z.ZodEnum) return e.options;
  if (e instanceof z.ZodNativeEnum) return Object.keys(e.enum);
  if (e instanceof z.ZodDefault) return o(e._def.innerType);
  if (e instanceof z.ZodUndefined) return [void 0];else if (e instanceof z.ZodNull) return [null];else return null;
};
let l = new Set([kY.ZodNullable, kY.ZodOptional]);
function d(e) {
  return z.preprocess(e => {
    if (void 0 === e) return null;
    if (e && "string" == typeof e) {
      if ("" === e && getFalseValue()) throw Error("You are passing an empty string for a sinatra date. Don't do that.");
      return new Date(e);
    }
    return e;
  }, e);
}
export function $$c0(e, t) {
  return t ? function (e, t) {
    let i = {};
    let r = e.shape;
    Object.keys(r).map(e => e).forEach(e => {
      let s = a()(e);
      let o = r[e]._def.typeName;
      if (o = l.has(o) ? r[e]._def.innerType._def.typeName : o, s !== e && (!t || t.shape[s])) {
        if (o === kY.ZodDate) {
          i[e] = d(r[e]);
          return;
        }
        i[e] = z.preprocess(e => void 0 === e ? null : e, r[e]);
      }
    });
    let s = t.merge(z.object(i).passthrough());
    return z.preprocess(e => {
      let t = {
        ...e
      };
      Object.keys(r).map(e => e).forEach(i => {
        let n = a()(i);
        n !== i && (t[i] = e[n]);
      });
      return t;
    }, s.passthrough());
  }(e, t) : function (e) {
    let t = {};
    let i = e.shape;
    Object.keys(i).map(e => e).forEach(e => {
      let r = a()(e);
      let s = i[e]._def.typeName;
      if (s = l.has(s) ? i[e]._def.innerType._def.typeName : s, r === e || s === kY.ZodDate) {
        t[e] = d(i[e]);
        return;
      }
    });
    let r = z.object(e.shape);
    return z.preprocess(e => {
      let t = {
        ...e
      };
      Object.keys(i).map(e => e).forEach(i => {
        let n = a()(i);
        n !== i && (t[i] = e[n]);
      });
      return t;
    }, r);
  }(e);
}
Symbol("convertedSinatraModel");
($$c0 || ($$c0 = {})).discriminatedUnion = function (e, t, i) {
  return z.preprocess(t => ({
    ...t,
    [e]: t[a()(e)]
  }), p(e, t, i));
};
class u extends z.ZodType {
  _parse(e) {
    let {
      ctx
    } = this._processInputParams(e);
    if (ctx.parsedType !== z.ZodParsedType.object) {
      z.addIssueToContext(ctx, {
        code: z.ZodIssueCode.invalid_type,
        expected: z.ZodParsedType.object,
        received: ctx.parsedType
      });
      return z.INVALID;
    }
    let i = this.discriminator;
    let r = ctx.data[i];
    let a = this.optionsMap.get(r);
    return a ? ctx.common.async ? a._parseAsync({
      data: ctx.data,
      path: ctx.path,
      parent: ctx
    }) : a._parseSync({
      data: ctx.data,
      path: ctx.path,
      parent: ctx
    }) : (z.addIssueToContext(ctx, {
      code: z.ZodIssueCode.invalid_union_discriminator,
      options: Array.from(this.optionsMap.keys()),
      path: [i]
    }), z.INVALID);
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
  static create(e, t, i) {
    let r = new Map();
    for (let i of t) {
      let t = o(("shape" in i ? i.shape : i.innerType().shape)[e]);
      if (!t) throw Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);
      for (let n of t) {
        if (r.has(n)) throw Error(`Discriminator property ${String(e)} has duplicate value ${String(n)}`);
        r.set(n, i);
      }
    }
    return new u({
      typeName: kY.ZodDiscriminatedUnion,
      discriminator: e,
      options: t,
      optionsMap: r,
      ...function (e) {
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
          errorMap: (e, t) => "invalid_type" !== e.code ? {
            message: t.defaultError
          } : void 0 === t.data ? {
            message: required_error ?? t.defaultError
          } : {
            message: invalid_type_error ?? t.defaultError
          },
          description
        };
      }(i)
    });
  }
}
let p = u.create;
export const D = $$c0;