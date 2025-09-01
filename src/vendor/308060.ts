!function (t, e) {
  "use strict";

  if (!t.setImmediate) {
    var r;
    var n;
    var i;
    var o;
    var a;
    var s = 1;
    var u = {};
    var c = !1;
    var l = t.document;
    var f = Object.getPrototypeOf && Object.getPrototypeOf(t);
    (f = f && f.setTimeout ? f : t, "[object process]" === {}.toString.call(t.process)) ? a = function (t) {
      process.nextTick(function () {
        h(t);
      });
    } : function () {
      if (t.postMessage && !t.importScripts) {
        var e = !0;
        var r = t.onmessage;
        t.onmessage = function () {
          e = !1;
        };
        t.postMessage("", "*");
        t.onmessage = r;
        return e;
      }
    }() ? (r = "setImmediate$" + Math.random() + "$", n = function (e) {
      e.source === t && "string" == typeof e.data && 0 === e.data.indexOf(r) && h(+e.data.slice(r.length));
    }, t.addEventListener ? t.addEventListener("message", n, !1) : t.attachEvent("onmessage", n), a = function (e) {
      t.postMessage(r + e, "*");
    }) : t.MessageChannel ? ((i = new MessageChannel()).port1.onmessage = function (t) {
      h(t.data);
    }, a = function (t) {
      i.port2.postMessage(t);
    }) : l && "onreadystatechange" in l.createElement("script") ? (o = l.documentElement, a = function (t) {
      var e = l.createElement("script");
      e.onreadystatechange = function () {
        h(t);
        e.onreadystatechange = null;
        o.removeChild(e);
        e = null;
      };
      o.appendChild(e);
    }) : a = function (t) {
      setTimeout(h, 0, t);
    };
    f.setImmediate = function (t) {
      "function" != typeof t && (t = Function("" + t));
      for (e = Array($$arguments.length - 1), r = 0, void 0; r < e.length; r++) {
        var e;
        var r;
        e[r] = $$arguments[r + 1];
      }
      var n = {
        callback: t,
        args: e
      };
      u[s] = n;
      a(s);
      return s++;
    };
    f.clearImmediate = p;
  }
  function p(t) {
    delete u[t];
  }
  function h(t) {
    if (c) setTimeout(h, 0, t);else {
      var r = u[t];
      if (r) {
        c = !0;
        try {
          !function (t) {
            var r = t.callback;
            var n = t.args;
            switch (n.length) {
              case 0:
                r();
                break;
              case 1:
                r(n[0]);
                break;
              case 2:
                r(n[0], n[1]);
                break;
              case 3:
                r(n[0], n[1], n[2]);
                break;
              default:
                r.apply(e, n);
            }
          }(r);
        } finally {
          p(t);
          c = !1;
        }
      }
    }
  }
}("undefined" == typeof self ? void 0 === require.g ? this : require.g : self);