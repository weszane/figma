import _require from "../vendor/730089";
module.exports = _require;
var t = module.exports.unstable_scheduleCallback;
var f = module.exports.unstable_next;
var r = module.exports.unstable_runWithPriority;
function a(e) {
  var n = "object" == typeof FIGMA_appTimer ? FIGMA_appTimer : null;
  var i = "function" == typeof FIGMA_start_react_profile ? FIGMA_start_react_profile : null;
  var t = "function" == typeof FIGMA_stop_react_profile ? FIGMA_stop_react_profile : null;
  return function (...f) {
    n?.start("react");
    var r = i?.();
    var a = e(...f);
    r && t?.();
    n?.stop("react");
    return a;
  };
}
module.exports.unstable_scheduleCallback = (e, n, i) => t(e, a(n), i);
module.exports.unstable_next = e => f(a(e));
module.exports.unstable_runWithPriority = (e, n) => r(e, a(n));