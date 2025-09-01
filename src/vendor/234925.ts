import n from "../vendor/445525";
var i = "Unknown";
var o = {
  "Mac OS": "Mac OS X"
};
var a = new n().getResult();
var s = function (t) {
  if (!t) return {
    major: "",
    minor: ""
  };
  var e = t.split(".");
  return {
    major: e[0],
    minor: e[1]
  };
}(a.browser.version);
var u = {
  browserArchitecture: a.cpu.architecture || i,
  browserFullVersion: a.browser.version || i,
  browserMinorVersion: s.minor || i,
  browserName: a.browser.name || i,
  browserVersion: a.browser.major || i,
  deviceName: a.device.model || i,
  engineName: a.engine.name || i,
  engineVersion: a.engine.version || i,
  platformArchitecture: a.cpu.architecture || i,
  platformName: function (t) {
    return o[t] || t;
  }(a.os.name) || i,
  platformVersion: a.os.version || i,
  platformFullVersion: a.os.version || i
};
module.exports = u;