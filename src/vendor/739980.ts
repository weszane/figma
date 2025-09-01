let t = "undefined" != typeof Buffer;
let n = /"(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])"\s*:/;
let r = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
function i(e, i, o) {
  null == o && null !== i && "object" == typeof i && (o = i, i = void 0);
  t && Buffer.isBuffer(e) && (e = e.toString());
  e && 65279 === e.charCodeAt(0) && (e = e.slice(1));
  let s = JSON.parse(e, i);
  if (null === s || "object" != typeof s) return s;
  let a = o && o.protoAction || "error";
  let l = o && o.constructorAction || "error";
  if ("ignore" === a && "ignore" === l) return s;
  if ("ignore" !== a && "ignore" !== l) {
    if (!1 === n.test(e) && !1 === r.test(e)) return s;
  } else if ("ignore" !== a && "ignore" === l) {
    if (!1 === n.test(e)) return s;
  } else if (!1 === r.test(e)) return s;
  return A(s, {
    protoAction: a,
    constructorAction: l,
    safe: o && o.safe
  });
}
function A(e, {
  protoAction: t = "error",
  constructorAction: n = "error",
  safe: r
} = {}) {
  let i = [e];
  for (; i.length;) {
    let e = i;
    for (let A of (i = [], e)) {
      if ("ignore" !== t && Object.prototype.hasOwnProperty.call(A, "__proto__")) {
        if (!0 === r) return null;
        if ("error" === t) throw SyntaxError("Object contains forbidden prototype property");
        delete A.__proto__;
      }
      if ("ignore" !== n && Object.prototype.hasOwnProperty.call(A, "constructor") && Object.prototype.hasOwnProperty.call(A.constructor, "prototype")) {
        if (!0 === r) return null;
        if ("error" === n) throw SyntaxError("Object contains forbidden prototype property");
        delete A.constructor;
      }
      for (let e in A) {
        let t = A[e];
        t && "object" == typeof t && i.push(t);
      }
    }
  }
  return e;
}
function o(e, t, n) {
  let r = Error.stackTraceLimit;
  Error.stackTraceLimit = 0;
  try {
    return i(e, t, n);
  } finally {
    Error.stackTraceLimit = r;
  }
}
module.exports = o;
module.exports.$$default = o;
module.exports.parse = o;
module.exports.safeParse = function (e, t) {
  let n = Error.stackTraceLimit;
  Error.stackTraceLimit = 0;
  try {
    return i(e, t, {
      safe: !0
    });
  } catch (e) {
    return null;
  } finally {
    Error.stackTraceLimit = n;
  }
};
module.exports.scan = A;