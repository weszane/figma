import { strlen } from "../vendor/425872";
import { stringify } from "../vendor/881915";
var i = strlen;
module.exports = function (t, e) {
  var r = [];
  t.findEntityRanges(function (t) {
    return !!t.getEntity();
  }, function (o, a) {
    var s = t.getText();
    var u = t.getEntityAt(o);
    r.push({
      offset: i(s.slice(0, o)),
      length: i(s.slice(o, a)),
      key: Number(e[stringify(u)])
    });
  });
  return r;
};