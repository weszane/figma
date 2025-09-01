import n from "../vendor/153658";
module.exports = function (t, e) {
  var r = [];
  t.findEntityRanges(function (t) {
    return t.getEntity() === e;
  }, function (t, e) {
    r.push({
      start: t,
      end: e
    });
  });
  r.length || n(!1);
  return r;
};