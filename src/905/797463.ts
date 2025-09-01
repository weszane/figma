import { z } from "../vendor/835909";
export const f = function e(t, i, r = []) {
  let a = i(t, r);
  if (!a) return;
  if (a !== t) return a;
  let s = a.description;
  let o = function (t, i, r = []) {
    if (t instanceof z.ZodString || t instanceof z.ZodNumber || t instanceof z.ZodBoolean || t instanceof z.ZodNull || t instanceof z.ZodUndefined || t instanceof z.ZodLiteral || t instanceof z.ZodEnum || t instanceof z.ZodNaN || t instanceof z.ZodBigInt) return t;
    if (t instanceof z.ZodObject) {
      let a = t._def.shape();
      let s = {};
      for (let [t, n] of Object.entries(a)) {
        let a = e(n, i, [...r, t]);
        a && (s[t] = a);
      }
      return z.object(s);
    }
    if (t instanceof z.ZodArray) {
      let a = e(t.element, i, [...r, "*"]);
      return a ? z.array(a) : void 0;
    }
    if (t instanceof z.ZodDiscriminatedUnion) {
      let a = t._def.options.map(t => e(t, i, r)).filter(e => !!e);
      return z.discriminatedUnion(t._def.discriminator, a);
    }
    if (t instanceof z.ZodUnion) {
      let a = t._def.options.map(t => e(t, i, r)).filter(e => !!e);
      return z.union(a);
    }
    if (t instanceof z.ZodIntersection) {
      let a = e(t._def.left, i, [...r, "left"]);
      let s = e(t._def.right, i, [...r, "right"]);
      return void 0 === a ? s : void 0 === s ? a : z.intersection(a, s);
    }
    if (t instanceof z.ZodRecord) {
      let a = e(t._def.valueType, i, [...r, "*"]);
      return z.record(t._def.keyType, a);
    }
    if (t instanceof z.ZodTuple) {
      let a = t._def.items.map((t, n) => e(t, i, [...r, n.toString()]));
      return z.tuple(a);
    }
    if (t instanceof z.ZodOptional) {
      let a = e(t.unwrap(), i, r);
      if (!a) return;
      return z.optional(a);
    }
    if (t instanceof z.ZodNullable) {
      let a = e(t.unwrap(), i, r);
      if (!a) return;
      return z.nullable(a);
    }
    if (t instanceof z.ZodDefault) {
      let n = e(t._def.innerType, i, r);
      if (!n) return;
      return n.default(t._def.defaultValue());
    }
    return t;
  }(a, i, r);
  if (o) return s ? o.describe(s) : o;
};