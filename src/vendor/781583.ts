var n;
var i;
exports.getParsedType = exports.ZodParsedType = exports.objectUtil = exports.util = void 0;
(function(e) {
  function r(e) { }
  function n(e) {
    throw Error();
  }
  function i(e, r = " | ") {
    return e.map(e => "string" == typeof e ? `'${e}'` : e).join(r);
  }
  e.assertEqual = e => { };
  e.assertIs = r;
  e.assertNever = n;
  e.arrayToEnum = e => {
    let r = {};
    for (let n of e) r[n] = n;
    return r;
  };
  e.getValidEnumValues = r => {
    let n = e.objectKeys(r).filter(e => "number" != typeof r[r[e]]);
    let i = {};
    for (let e of n) i[e] = r[e];
    return e.objectValues(i);
  };
  e.objectValues = r => e.objectKeys(r).map(function(e) {
    return r[e];
  });
  e.objectKeys = "function" == typeof Object.keys ? e => Object.keys(e) : e => {
    let r = [];
    for (let n in e) Object.prototype.hasOwnProperty.call(e, n) && r.push(n);
    return r;
  };
  e.find = (e, r) => {
    for (let n of e) if (r(n)) return n;
  };
  e.isInteger = "function" == typeof Number.isInteger ? e => Number.isInteger(e) : e => "number" == typeof e && Number.isFinite(e) && Math.floor(e) === e;
  e.joinValues = i;
  e.jsonStringifyReplacer = (e, r) => "bigint" == typeof r ? r.toString() : r;
})(n || (exports.util = n = {}));
(function(e) {
  e.mergeShapes = (e, r) => ({
    ...e,
    ...r
  });
})(i || (exports.objectUtil = i = {}));
exports.ZodParsedType = n.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"]);
let s = e => {
  switch (typeof e) {
    case "undefined":
      return exports.ZodParsedType.undefined;
    case "string":
      return exports.ZodParsedType.string;
    case "number":
      return Number.isNaN(e) ? exports.ZodParsedType.nan : exports.ZodParsedType.number;
    case "boolean":
      return exports.ZodParsedType.boolean;
    case "function":
      return exports.ZodParsedType.$$function;
    case "bigint":
      return exports.ZodParsedType.bigint;
    case "symbol":
      return exports.ZodParsedType.symbol;
    case "object":
      if (Array.isArray(e)) return exports.ZodParsedType.array;
      if (null === e) return exports.ZodParsedType.$$null;
      if (e.then && "function" == typeof e.then && e.catch && "function" == typeof e.catch) return exports.ZodParsedType.promise;
      if ("undefined" != typeof Map && e instanceof Map) return exports.ZodParsedType.map;
      if ("undefined" != typeof Set && e instanceof Set) return exports.ZodParsedType.set;
      if ("undefined" != typeof Date && e instanceof Date) return exports.ZodParsedType.date;
      return exports.ZodParsedType.object;
    default:
      return exports.ZodParsedType.unknown;
  }
};
exports.getParsedType = s; 
