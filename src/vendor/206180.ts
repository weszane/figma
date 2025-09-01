var g = "undefined" != typeof window && window;
var Q = "undefined" != typeof self && "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && self;
var C = void 0 !== require.g && require.g;
var E = g || C || Q;
exports.z = E;
(function () {
  if (!E) throw Error("Could not find any global context (window, self, global)");
})();