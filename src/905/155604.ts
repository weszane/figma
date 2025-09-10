import { assert } from "../figma_app/465776";
import { z, kY } from "../905/239603";
import { wQ } from "../905/893701";
import { livestoreNormalized, livestorePrimaryKey } from "../905/67898";
export function $$o0(e) {
  if (!("typeName" in e._def)) {
    console.error("no typeName?", e);
    return;
  }
  if (e instanceof z.ZodOptional || e instanceof z.ZodNullable) return $$o0(e.unwrap());
  if (e._def.typeName !== kY.ZodObject || !e.description?.includes(livestoreNormalized)) return;
  let t = e.description.split(":")[1];
  let i = null;
  let a = e.shape;
  for (let t in a) a[t].description?.includes(livestorePrimaryKey) && (assert(!i, `normalizedObject ${e.description} entry has more than one primaryKey`), i = t);
  assert(!!i, `normalizedObject ${e.description} entry has no primaryKey`);
  return {
    uniqueName: t,
    primaryKey: i
  };
}
export function $$l1(e, t) {
  let i = "function" == typeof e ? e(z) : e;
  let s = function e(t, i) {
    let s = t._def;
    if (!("typeName" in s)) {
      console.error("no typeName?", t);
      return null;
    }
    let l = $$o0(t);
    if (l) {
      let {
        uniqueName,
        primaryKey
      } = l;
      let r = i.get(uniqueName);
      assert(!!r, `No objectDef found for ${uniqueName}`);
      return Object.assign(new wQ.Entity(uniqueName, {}, {
        idAttribute: primaryKey,
        processStrategy: e => e
      }), {
        __HAS_ENTITY__: !0
      });
    }
    if (s.typeName === kY.ZodObject) {
      let t = s.shape();
      let n = {};
      let r = !1;
      for (let a in t) {
        let s = e(t[a], i);
        s && Object.assign(n, {
          [a]: s
        });
        s?.__HAS_ENTITY__ && (r = !0);
      }
      return Object.assign(new wQ.Object(n), {
        __HAS_ENTITY__: r
      });
    }
    if (s.typeName === kY.ZodArray) {
      let t = e(s.type, i);
      return t ? Object.assign(new wQ.Array(t), {
        __HAS_ENTITY__: t.__HAS_ENTITY__
      }) : null;
    }
    return s.typeName === kY.ZodNullable || s.typeName === kY.ZodOptional ? e(s.innerType, i) : null;
  }(i, t);
  return {
    zodSchema: i,
    normalizrSchema: s,
    requiresNormalization: s.__HAS_ENTITY__
  };
}
export const AT = $$o0;
export const q6 = $$l1;
