import i from "../vendor/994665";
var s = "Expected a function";
function o(e, r) {
  if ("function" != typeof e || null != r && "function" != typeof r) throw TypeError(s);
  var n = function () {
    var i = arguments;
    var s = r ? r.apply(this, i) : i[0];
    var o = n.cache;
    if (o.has(s)) return o.get(s);
    var a = e.apply(this, i);
    n.cache = o.set(s, a) || o;
    return a;
  };
  n.cache = new (o.Cache || i)();
  return n;
}
o.Cache = i;
module.exports = o;