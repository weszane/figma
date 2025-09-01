import i from "../vendor/37392";
var r = Function.call;
var A = ["size", "caller", "callee", "arguments"];
i && A.push("__proto__");
module.exports = function (e) {
  return Object.getOwnPropertyNames(e).reduce(function (t, n) {
    A.includes(n) || "function" != typeof e[n] || (t[n] = r.bind(e[n]));
    return t;
  }, Object.create(null));
};