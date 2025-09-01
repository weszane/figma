import _require from "react";
var i = this && this.__importDefault || function (e) {
  return e && e.__esModule ? e : {
    default: e
  };
};
Object.defineProperty(exports, "__esModule", {
  value: !0
});
var s = i(_require);
exports.$$default = s.$$default.createContext({
  initialized: !1,
  statsigPromise: null,
  userVersion: 0,
  initStarted: !1,
  updateUser: function () {}
});