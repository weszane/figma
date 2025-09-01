import { LogLevel } from "../vendor/597779";
Object.defineProperty(exports, "__esModule", {
  value: !0
});
var s = function () {
  function e(e) {
    this.logLevel = e;
  }
  e.prototype.info = function (e) {
    this.logLevel !== LogLevel.NONE && console.log(e);
  };
  e.prototype.error = function (e) {
    this.logLevel === LogLevel.DEBUG && console.error(e);
  };
  return e;
}();
exports.$$default = s;