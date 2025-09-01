import i from "../vendor/832512";
import { OrderedMap, is } from "../vendor/116740";
import a from "../vendor/808828";
var n;
var s = OrderedMap;
module.exports = {
  getDirectionMap: function (t, e) {
    n ? n.reset() : n = new i();
    var r = t.getBlockMap();
    var u = r.valueSeq().map(function (t) {
      return a(n).getDirection(t.getText());
    });
    var c = s(r.keySeq().zip(u));
    return null != e && is(e, c) ? e : c;
  }
};