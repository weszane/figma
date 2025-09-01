/*! js-cookie v3.0.5 | MIT */
function i(e) {
  for (var r = 1; r < $$arguments.length; r++) {
    var n = $$arguments[r];
    for (var i in n) e[i] = n[i];
  }
  return e;
}
function s(e, r) {
  function n(n, s, o) {
    if ("undefined" != typeof document) {
      "number" == typeof (o = i({}, r, o)).expires && (o.expires = new Date(Date.now() + 864e5 * o.expires));
      o.expires && (o.expires = o.expires.toUTCString());
      n = encodeURIComponent(n).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
      var a = "";
      for (var h in o) o[h] && (a += "; " + h, !0 !== o[h] && (a += "=" + o[h].split(";")[0]));
      return document.cookie = n + "=" + e.write(s, n) + a;
    }
  }
  return Object.create({
    set: n,
    get: function (r) {
      if ("undefined" != typeof document && (!$$arguments.length || r)) {
        for (n = document.cookie ? document.cookie.split("; ") : [], i = {}, s = 0, void 0; s < n.length; s++) {
          var n;
          var i;
          var s;
          var o = n[s].split("=");
          var a = o.slice(1).join("=");
          try {
            var h = decodeURIComponent(o[0]);
            if (i[h] = e.read(a, h), r === h) break;
          } catch (e) {}
        }
        return r ? i[r] : i;
      }
    },
    remove: function (e, r) {
      n(e, "", i({}, r, {
        expires: -1
      }));
    },
    withAttributes: function (e) {
      return s(this.converter, i({}, this.attributes, e));
    },
    withConverter: function (e) {
      return s(i({}, this.converter, e), this.attributes);
    }
  }, {
    attributes: {
      value: Object.freeze(r)
    },
    converter: {
      value: Object.freeze(e)
    }
  });
}
export var $$o0 = s({
  read: function (e) {
    '"' === e[0] && (e = e.slice(1, -1));
    return e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
  },
  write: function (e) {
    return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent);
  }
}, {
  path: "/"
});
export const A = $$o0;