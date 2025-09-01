import { isPlatform } from "../vendor/42266";
import i from "../vendor/579914";
var o = isPlatform("Mac OS X");
var a = {
  isCtrlKeyCommand: function (t) {
    return !!t.ctrlKey && !t.altKey;
  },
  isOptionKeyCommand: function (t) {
    return o && t.altKey;
  },
  usesMacOSHeuristics: function () {
    return o;
  },
  hasCommandModifier: function (t) {
    return o ? !!t.metaKey && !t.altKey : a.isCtrlKeyCommand(t);
  },
  isSoftNewlineEvent: i
};
module.exports = a;