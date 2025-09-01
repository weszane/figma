import _require2 from "../vendor/724191";
import _require from "../vendor/250242";
import { useContext, useEffect } from "react";
var i = this && this.__importDefault || function(e) {
  return e && e.__esModule ? e : {
    default: e
  };
};
Object.defineProperty(exports, "__esModule", {
  value: !0
});
var o = i(_require);
var a = i(_require2);
function h(e) {
  var r = useContext(a.$$default).initStarted;
  useEffect(function() {
    r && 0 != e.length && o.$$default.prefetchUsers(e).catch(function() { });
  }, [r, e]);
}
exports.$$default = h; 
