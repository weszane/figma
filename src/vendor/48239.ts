import n from "../vendor/153658";
var i = /\.textClipping$/;
var o = {
  "text/plain": !0,
  "text/html": !0,
  "text/rtf": !0
};
module.exports = function (t, e) {
  var a = 0;
  var s = [];
  t.forEach(function (u) {
    !function (t, e) {
      if (!require.g.FileReader || t.type && !(t.type in o)) {
        e("");
        return;
      }
      if ("" === t.type) {
        var a = "";
        i.test(t.name) && (a = t.name.replace(i, ""));
        e(a);
        return;
      }
      var s = new FileReader();
      s.onload = function () {
        var t = s.result;
        "string" != typeof t && n(!1);
        e(t);
      };
      s.onerror = function () {
        e("");
      };
      s.readAsText(t);
    }(u, function (r) {
      a++;
      r && s.push(r.slice(0, 5e3));
      a == t.length && e(s.join("\r"));
    });
  });
};