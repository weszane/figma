var $$r1;
var $$i3;
(function(e) {
  e.assertEqual = e => { };
  e.assertIs = function(e) { };
  e.assertNever = function(e) {
    throw Error();
  };
  e.arrayToEnum = e => {
    let t = {};
    for (let n of e) t[n] = n;
    return t;
  };
  e.getValidEnumValues = t => {
    let n = e.objectKeys(t).filter(e => "number" != typeof t[t[e]]);
    let r = {};
    for (let e of n) r[e] = t[e];
    return e.objectValues(r);
  };
  e.objectValues = t => e.objectKeys(t).map(function(e) {
    return t[e];
  });
  e.objectKeys = "function" == typeof Object.keys ? e => Object.keys(e) : e => {
    let t = [];
    for (let n in e) Object.prototype.hasOwnProperty.call(e, n) && t.push(n);
    return t;
  };
  e.find = (e, t) => {
    for (let n of e) if (t(n)) return n;
  };
  e.isInteger = "function" == typeof Number.isInteger ? e => Number.isInteger(e) : e => "number" == typeof e && Number.isFinite(e) && Math.floor(e) === e;
  e.joinValues = function(e, t = " | ") {
    return e.map(e => "string" == typeof e ? `'${e}'` : e).join(t);
  };
  e.jsonStringifyReplacer = (e, t) => "bigint" == typeof t ? t.toString() : t;
})($$r1 || ($$r1 = {}));
($$i3 || ($$i3 = {})).mergeShapes = (e, t) => ({
  ...e,
  ...t
});
let $$A2 = $$r1.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"]);
let $$o0 = e => {
  switch (typeof e) {
    case "undefined":
      return $$A2.undefined;
    case "string":
      return $$A2.string;
    case "number":
      return Number.isNaN(e) ? $$A2.nan : $$A2.number;
    case "boolean":
      return $$A2.boolean;
    case "function":
      return $$A2.$$function;
    case "bigint":
      return $$A2.bigint;
    case "symbol":
      return $$A2.symbol;
    case "object":
      if (Array.isArray(e)) return $$A2.array;
      if (null === e) return $$A2.$$null;
      if (e.then && "function" == typeof e.then && e.catch && "function" == typeof e.catch) return $$A2.promise;
      if ("undefined" != typeof Map && e instanceof Map) return $$A2.map;
      if ("undefined" != typeof Set && e instanceof Set) return $$A2.set;
      if ("undefined" != typeof Date && e instanceof Date) return $$A2.date;
      return $$A2.object;
    default:
      return $$A2.unknown;
  }
};
export const CR = $$o0;
export const ZS = $$r1;
export const Zp = $$A2;
export const o6 = $$i3; 
