var i;
function s(e) {
  var r;
  var n = e.Symbol;
  "function" == typeof n ? n.observable ? r = n.observable : (r = n("observable"), n.observable = r) : r = "@@observable";
  return r;
}
module = require.hmd(module);
"undefined" != typeof self ? i = self : i = "undefined" != typeof window ? window : void 0 !== require.g ? require.g : module;
export let $$o0 = s(i);
export const A = $$o0;