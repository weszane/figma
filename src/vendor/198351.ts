import { se, Sh, K2, di, G1, Tb, VF, c4, C as _$$C } from "../vendor/691964";
import { HT, tW, HC, b2, wN, K5, kg, YW } from "../vendor/157953";
import { LU, j, vd, MS, Sv, XZ } from "../vendor/897392";
import { l as _$$l, A as _$$A } from "../vendor/940273";
import { MY, r1 } from "../vendor/260757";
import { wE } from "../vendor/780294";
var t;
var f = function () {
  function e(e) {
    var n = this;
    this._insertTag = function (e) {
      var i;
      i = 0 === n.tags.length ? n.insertionPoint ? n.insertionPoint.nextSibling : n.prepend ? n.container.firstChild : n.before : n.tags[n.tags.length - 1].nextSibling;
      n.container.insertBefore(e, i);
      n.tags.push(e);
    };
    this.isSpeedy = void 0 === e.speedy || e.speedy;
    this.tags = [];
    this.ctr = 0;
    this.nonce = e.nonce;
    this.key = e.key;
    this.container = e.container;
    this.prepend = e.prepend;
    this.insertionPoint = e.insertionPoint;
    this.before = null;
  }
  var n = e.prototype;
  n.hydrate = function (e) {
    e.forEach(this._insertTag);
  };
  n.insert = function (e) {
    if (this.ctr % (this.isSpeedy ? 65e3 : 1) == 0) {
      var n;
      this._insertTag(((n = document.createElement("style")).setAttribute("data-emotion", this.key), void 0 !== this.nonce && n.setAttribute("nonce", this.nonce), n.appendChild(document.createTextNode("")), n.setAttribute("data-s", ""), n));
    }
    var i = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var t = function (e) {
        if (e.sheet) return e.sheet;
        for (var n = 0; n < document.styleSheets.length; n++) if (document.styleSheets[n].ownerNode === e) return document.styleSheets[n];
      }(i);
      try {
        t.insertRule(e, t.cssRules.length);
      } catch (e) {}
    } else i.appendChild(document.createTextNode(e));
    this.ctr++;
  };
  n.flush = function () {
    this.tags.forEach(function (e) {
      var n;
      return null == (n = e.parentNode) ? void 0 : n.removeChild(e);
    });
    this.tags = [];
    this.ctr = 0;
  };
  return e;
}();
var s = function (e, n, i) {
  for (t = 0, f = 0, void 0; t = f, f = se(), 38 === t && 12 === f && (n[i] = 1), !Sh(f);) {
    var t;
    var f;
    K2();
  }
  return di(e, G1);
};
var c = function (e, n) {
  var i = -1;
  var t = 44;
  do switch (Sh(t)) {
    case 0:
      38 === t && 12 === se() && (n[i] = 1);
      e[i] += s(G1 - 1, n, i);
      break;
    case 2:
      e[i] += Tb(t);
      break;
    case 4:
      if (44 === t) {
        e[++i] = 58 === se() ? "&\f" : "";
        n[i] = e[i].length;
        break;
      }
    default:
      e[i] += HT(t);
  } while (t = K2());
  return e;
};
var h = new WeakMap();
var p = function (e) {
  if ("rule" === e.type && e.parent && !(e.length < 1)) {
    for (n = e.value, i = e.parent, t = e.column === i.column && e.line === i.line, void 0; "rule" !== i.type;) {
      var n;
      var i;
      var t;
      if (!(i = i.parent)) return;
    }
    if ((1 !== e.props.length || 58 === n.charCodeAt(0) || h.get(i)) && !t) {
      h.set(e, !0);
      for (f = [], a = VF(c(c4(n), f)), o = i.props, u = 0, l = 0, void 0; u < a.length; u++) {
        var f;
        var a;
        var o;
        var u;
        var l;
        for (var d = 0; d < o.length; d++, l++) e.props[l] = f[u] ? a[u].replace(/&\f/g, o[d]) : o[d] + " " + a[u];
      }
    }
  }
};
var g = function (e) {
  if ("decl" === e.type) {
    var n = e.value;
    108 === n.charCodeAt(0) && 98 === n.charCodeAt(2) && (e.$$return = "", e.value = "");
  }
};
var m = [function (e, n, i, t) {
  if (e.length > -1 && !e.$$return) switch (e.type) {
    case LU:
      e.$$return = function e(n, i) {
        switch (tW(n, i)) {
          case 5103:
            return j + "print-" + n + n;
          case 5737:
          case 4201:
          case 3177:
          case 3433:
          case 1641:
          case 4457:
          case 2921:
          case 5572:
          case 6356:
          case 5844:
          case 3191:
          case 6645:
          case 3005:
          case 6391:
          case 5879:
          case 5623:
          case 6135:
          case 4599:
          case 4855:
          case 4215:
          case 6389:
          case 5109:
          case 5365:
          case 5621:
          case 3829:
            return j + n + n;
          case 5349:
          case 4246:
          case 4810:
          case 6968:
          case 2756:
            return j + n + vd + n + MS + n + n;
          case 6828:
          case 4268:
            return j + n + MS + n + n;
          case 6165:
            return j + n + MS + "flex-" + n + n;
          case 5187:
            return j + n + HC(n, /(\w+).+(:[^]+)/, j + "box-$1$2" + MS + "flex-$1$2") + n;
          case 5443:
            return j + n + MS + "flex-item-" + HC(n, /flex-|-self/, "") + n;
          case 4675:
            return j + n + MS + "flex-line-pack" + HC(n, /align-content|flex-|-self/, "") + n;
          case 5548:
            return j + n + MS + HC(n, "shrink", "negative") + n;
          case 5292:
            return j + n + MS + HC(n, "basis", "preferred-size") + n;
          case 6060:
            return j + "box-" + HC(n, "-grow", "") + j + n + MS + HC(n, "grow", "positive") + n;
          case 4554:
            return j + HC(n, /([^-])(transform)/g, "$1" + j + "$2") + n;
          case 6187:
            return HC(HC(HC(n, /(zoom-|grab)/, j + "$1"), /(image-set)/, j + "$1"), n, "") + n;
          case 5495:
          case 3959:
            return HC(n, /(image-set\([^]*)/, j + "$1$`$1");
          case 4968:
            return HC(HC(n, /(.+:)(flex-)?(.*)/, j + "box-pack:$3" + MS + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + j + n + n;
          case 4095:
          case 3583:
          case 4068:
          case 2532:
            return HC(n, /(.+)-inline(.+)/, j + "$1$2") + n;
          case 8116:
          case 7059:
          case 5753:
          case 5535:
          case 5445:
          case 5701:
          case 4933:
          case 4677:
          case 5533:
          case 5789:
          case 5021:
          case 4765:
            if (b2(n) - 1 - i > 6) switch (wN(n, i + 1)) {
              case 109:
                if (45 !== wN(n, i + 4)) break;
              case 102:
                return HC(n, /(.+:)(.+)-([^]+)/, "$1" + j + "$2-$3$1" + vd + (108 == wN(n, i + 3) ? "$3" : "$2-$3")) + n;
              case 115:
                return ~K5(n, "stretch") ? e(HC(n, "stretch", "fill-available"), i) + n : n;
            }
            break;
          case 4949:
            if (115 !== wN(n, i + 1)) break;
          case 6444:
            switch (wN(n, b2(n) - 3 - (~K5(n, "!important") && 10))) {
              case 107:
                return HC(n, ":", ":" + j) + n;
              case 101:
                return HC(n, /(.+:)([^;!]+)(;|!.+)?/, "$1" + j + (45 === wN(n, 14) ? "inline-" : "") + "box$3$1" + j + "$2$3$1" + MS + "$2box$3") + n;
            }
            break;
          case 5936:
            switch (wN(n, i + 11)) {
              case 114:
                return j + n + MS + HC(n, /[svh]\w+-[tblr]{2}/, "tb") + n;
              case 108:
                return j + n + MS + HC(n, /[svh]\w+-[tblr]{2}/, "tb-rl") + n;
              case 45:
                return j + n + MS + HC(n, /[svh]\w+-[tblr]{2}/, "lr") + n;
            }
            return j + n + MS + n + n;
        }
        return n;
      }(e.value, e.length);
      break;
    case Sv:
      return _$$l([_$$C(e, {
        value: HC(e.value, "@", "@" + j)
      })], t);
    case XZ:
      if (e.length) return kg(e.props, function (n) {
        switch (YW(n, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return _$$l([_$$C(e, {
              props: [HC(n, /:(read-\w+)/, ":" + vd + "$1")]
            })], t);
          case "::placeholder":
            return _$$l([_$$C(e, {
              props: [HC(n, /:(plac\w+)/, ":" + j + "input-$1")]
            }), _$$C(e, {
              props: [HC(n, /:(plac\w+)/, ":" + vd + "$1")]
            }), _$$C(e, {
              props: [HC(n, /:(plac\w+)/, MS + "input-$1")]
            })], t);
        }
        return "";
      });
  }
}];
var _ = function (e) {
  var n = e.key;
  if ("css" === n) {
    var i = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(i, function (e) {
      -1 !== e.getAttribute("data-emotion").indexOf(" ") && (document.head.appendChild(e), e.setAttribute("data-s", ""));
    });
  }
  var t = e.stylisPlugins || m;
  var r = {};
  var a = [];
  o = e.container || document.head;
  Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + n + ' "]'), function (e) {
    for (n = e.getAttribute("data-emotion").split(" "), i = 1, void 0; i < n.length; i++) {
      var n;
      var i;
      r[n[i]] = !0;
    }
    a.push(e);
  });
  var o;
  var s;
  var c;
  var h = [_$$A, MY(function (e) {
    c.insert(e);
  })];
  var _ = r1([p, g].concat(t, h));
  s = function (e, n, i, t) {
    var f;
    c = i;
    f = e ? e + "{" + n.styles + "}" : n.styles;
    _$$l(wE(f), _);
    t && (b.inserted[n.name] = !0);
  };
  var b = {
    key: n,
    sheet: new f({
      key: n,
      container: o,
      nonce: e.nonce,
      speedy: e.speedy,
      prepend: e.prepend,
      insertionPoint: e.insertionPoint
    }),
    nonce: e.nonce,
    inserted: r,
    registered: {},
    insert: s
  };
  b.sheet.hydrate(a);
  return b;
};
var b = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};
var y = /[A-Z]|^ms/g;
var v = /_EMO_([^_]+?)_([^]*?)_EMO_/g;
var w = function (e) {
  return 45 === e.charCodeAt(1);
};
var k = function (e) {
  return null != e && "boolean" != typeof e;
};
var S = function (e) {
  var n = Object.create(null);
  return function (i) {
    void 0 === n[i] && (n[i] = e(i));
    return n[i];
  };
}(function (e) {
  return w(e) ? e : e.replace(y, "-$&").toLowerCase();
});
var E = function (e, n) {
  switch (e) {
    case "animation":
    case "animationName":
      if ("string" == typeof n) return n.replace(v, function (e, n, i) {
        t = {
          name: n,
          styles: i,
          next: t
        };
        return n;
      });
  }
  return 1 === b[e] || w(e) || "number" != typeof n || 0 === n ? n : n + "px";
};
function x(e, n, i) {
  if (null == i) return "";
  if (void 0 !== i.__emotion_styles) return i;
  switch (typeof i) {
    case "boolean":
      return "";
    case "object":
      if (1 === i.anim) {
        t = {
          name: i.name,
          styles: i.styles,
          next: t
        };
        return i.name;
      }
      if (void 0 !== i.styles) {
        var f = i.next;
        if (void 0 !== f) for (; void 0 !== f;) {
          t = {
            name: f.name,
            styles: f.styles,
            next: t
          };
          f = f.next;
        }
        return i.styles + ";";
      }
      return function (e, n, i) {
        var t = "";
        if (Array.isArray(i)) for (var f = 0; f < i.length; f++) t += x(e, n, i[f]) + ";";else for (var r in i) {
          var a = i[r];
          if ("object" != typeof a) null != n && void 0 !== n[a] ? t += r + "{" + n[a] + "}" : k(a) && (t += S(r) + ":" + E(r, a) + ";");else if (Array.isArray(a) && "string" == typeof a[0] && (null == n || void 0 === n[a[0]])) for (var o = 0; o < a.length; o++) k(a[o]) && (t += S(r) + ":" + E(r, a[o]) + ";");else {
            var u = x(e, n, a);
            switch (r) {
              case "animation":
              case "animationName":
                t += S(r) + ":" + u + ";";
                break;
              default:
                t += r + "{" + u + "}";
            }
          }
        }
        return t;
      }(e, n, i);
    case "function":
      if (void 0 !== e) {
        var r = t;
        var a = i(e);
        t = r;
        return x(e, n, a);
      }
  }
  if (null == n) return i;
  var o = n[i];
  return void 0 !== o ? o : i;
}
var C = /label:\s*([^\s;{]+)\s*(;|$)/g;
function T(e, n, i) {
  if (1 === e.length && "object" == typeof e[0] && null !== e[0] && void 0 !== e[0].styles) return e[0];
  var f;
  var r = !0;
  var a = "";
  t = void 0;
  var o = e[0];
  null == o || void 0 === o.raw ? (r = !1, a += x(i, n, o)) : a += o[0];
  for (var u = 1; u < e.length; u++) {
    a += x(i, n, e[u]);
    r && (a += o[u]);
  }
  C.lastIndex = 0;
  for (var l = ""; null !== (f = C.exec(a));) l += "-" + f[1];
  return {
    name: function (e) {
      for (i = 0, t = 0, f = e.length, void 0; f >= 4; ++t, f -= 4) {
        var n;
        var i;
        var t;
        var f;
        n = (65535 & (n = 255 & e.charCodeAt(t) | (255 & e.charCodeAt(++t)) << 8 | (255 & e.charCodeAt(++t)) << 16 | (255 & e.charCodeAt(++t)) << 24)) * 0x5bd1e995 + ((n >>> 16) * 59797 << 16);
        n ^= n >>> 24;
        i = (65535 & n) * 0x5bd1e995 + ((n >>> 16) * 59797 << 16) ^ (65535 & i) * 0x5bd1e995 + ((i >>> 16) * 59797 << 16);
      }
      switch (f) {
        case 3:
          i ^= (255 & e.charCodeAt(t + 2)) << 16;
        case 2:
          i ^= (255 & e.charCodeAt(t + 1)) << 8;
        case 1:
          i ^= 255 & e.charCodeAt(t);
          i = (65535 & i) * 0x5bd1e995 + ((i >>> 16) * 59797 << 16);
      }
      i ^= i >>> 13;
      return (((i = (65535 & i) * 0x5bd1e995 + ((i >>> 16) * 59797 << 16)) ^ i >>> 15) >>> 0).toString(36);
    }(a) + l,
    styles: a,
    next: t
  };
}
function P(e, n, i) {
  var t = "";
  i.split(" ").forEach(function (i) {
    void 0 !== e[i] ? n.push(e[i] + ";") : i && (t += i + " ");
  });
  return t;
}
var L = function (e, n, i) {
  var t = e.key + "-" + n.name;
  !1 === i && void 0 === e.registered[t] && (e.registered[t] = n.styles);
};
var N = function (e, n, i) {
  L(e, n, i);
  var t = e.key + "-" + n.name;
  if (void 0 === e.inserted[n.name]) {
    var f = n;
    do {
      e.insert(n === f ? "." + t : "", f, e.sheet, !0);
      f = f.next;
    } while (void 0 !== f);
  }
};
function O(e, n) {
  if (void 0 === e.inserted[n.name]) return e.insert("", n, e.sheet, !0);
}
function $$A(e, n, i) {
  var t = [];
  var f = P(e, t, i);
  return t.length < 2 ? i : f + n(t);
}
var M = function e(n) {
  for (i = "", t = 0, void 0; t < n.length; t++) {
    var i;
    var t;
    var f = n[t];
    if (null != f) {
      var r = void 0;
      switch (typeof f) {
        case "boolean":
          break;
        case "object":
          if (Array.isArray(f)) r = e(f);else for (var a in r = "", f) f[a] && a && (r && (r += " "), r += a);
          break;
        default:
          r = f;
      }
      r && (i && (i += " "), i += r);
    }
  }
  return i;
};
export let $$R0 = function (e) {
  var n = _(e);
  n.sheet.speedy = function (e) {
    this.isSpeedy = e;
  };
  n.compat = !0;
  var i = function () {
    for (e = $$arguments.length, i = Array(e), t = 0, void 0; t < e; t++) {
      var e;
      var i;
      var t;
      i[t] = $$arguments[t];
    }
    var f = T(i, n.registered, void 0);
    N(n, f, !1);
    return n.key + "-" + f.name;
  };
  return {
    css: i,
    cx: function () {
      for (e = $$arguments.length, t = Array(e), f = 0, void 0; f < e; f++) {
        var e;
        var t;
        var f;
        t[f] = $$arguments[f];
      }
      return $$A(n.registered, i, M(t));
    },
    injectGlobal: function () {
      for (e = $$arguments.length, i = Array(e), t = 0, void 0; t < e; t++) {
        var e;
        var i;
        var t;
        i[t] = $$arguments[t];
      }
      var f = T(i, n.registered);
      O(n, f);
    },
    keyframes: function () {
      for (e = $$arguments.length, i = Array(e), t = 0, void 0; t < e; t++) {
        var e;
        var i;
        var t;
        i[t] = $$arguments[t];
      }
      var f = T(i, n.registered);
      var r = "animation-" + f.name;
      O(n, {
        name: f.name,
        styles: "@keyframes " + r + "{" + f.styles + "}"
      });
      return r;
    },
    hydrate: function (e) {
      e.forEach(function (e) {
        n.inserted[e] = !0;
      });
    },
    flush: function () {
      n.registered = {};
      n.inserted = {};
      n.sheet.flush();
    },
    sheet: n.sheet,
    cache: n,
    getRegisteredStyles: P.bind(null, n.registered),
    merge: $$A.bind(null, n.registered, i)
  };
};
export const A = $$R0;