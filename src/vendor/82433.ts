var i;
var s = {};
var o = function () {
  if (i) return s;
  i = 1;
  Object.defineProperty(s, "__esModule", {
    value: !0
  });
  s.styleq = void 0;
  var e = new WeakMap();
  var r = "$$css";
  function n(n) {
    var i;
    var s;
    var o;
    null != n && (i = !0 === n.disableCache, s = !0 === n.disableMix, o = n.transform);
    return function () {
      for (n = [], a = "", h = null, d = i ? null : e, p = Array($$arguments.length), g = 0, void 0; g < $$arguments.length; g++) {
        var n;
        var a;
        var h;
        var d;
        var p;
        var g;
        p[g] = $$arguments[g];
      }
      for (; p.length > 0;) {
        var m = p.pop();
        if (null != m && !1 !== m) {
          if (Array.isArray(m)) {
            for (var v = 0; v < m.length; v++) p.push(m[v]);
            continue;
          }
          var y = null != o ? o(m) : m;
          if (y.$$css) {
            var b = "";
            if (null != d && d.has(y)) {
              var O = d.get(y);
              null != O && (b = O[0], n.push.apply(n, O[1]), d = O[2]);
            } else {
              var x = [];
              for (var w in y) {
                var k = y[w];
                w === r || ("string" == typeof k || null === k ? n.includes(w) || (n.push(w), null != d && x.push(w), "string" == typeof k && (b += b ? " " + k : k)) : console.error("styleq: ".concat(w, " typeof ").concat(String(k), ' is not "string" or "null".')));
              }
              if (null != d) {
                var _ = new WeakMap();
                d.set(y, [b, x, _]);
                d = _;
              }
            }
            b && (a = a ? b + " " + a : b);
          } else if (s) {
            null == h && (h = {});
            h = Object.assign({}, y, h);
          } else {
            var S = null;
            for (var E in y) {
              var A = y[E];
              void 0 === A || n.includes(E) || (null != A && (null == h && (h = {}), null == S && (S = {}), S[E] = A), n.push(E), d = null);
            }
            null != S && (h = Object.assign(S, h));
          }
        }
      }
      return [a, h];
    };
  }
  var o = n();
  s.styleq = o;
  o.factory = n;
  return s;
}();
let a = e => Error(`'stylex.${e}' should never be called at runtime. It should be compiled away by '@stylexjs/babel-plugin'`);
let h = e => a(`types.${e}`);
export function props() {
  for (e = $$arguments.length, r = Array(e), n = 0, void 0; n < e; n++) {
    var e;
    var r;
    var n;
    r[n] = $$arguments[n];
  }
  let [i, s] = o.styleq(r);
  let a = {};
  null != i && "" !== i && (a.className = i);
  null != s && Object.keys(s).length > 0 && (a.style = s);
  return a;
}
function p() {
  let {
    className,
    style
  } = props(...arguments);
  let n = {};
  null != className && "" !== className && (n.$$class = className);
  null != style && Object.keys(style).length > 0 && (n.style = Object.keys(style).map(e => `${e}:${style[e]};`).join(""));
  return n;
}
let g = function (e) {
  throw a("create");
};
let m = function (e) {
  throw a("defineVars");
};
let v = (e, r) => {
  throw a("createTheme");
};
let y = e => {
  throw a("include");
};
let b = {
  angle: e => {
    throw h("angle");
  },
  color: e => {
    throw h("color");
  },
  url: e => {
    throw h("url");
  },
  image: e => {
    throw h("image");
  },
  integer: e => {
    throw h("integer");
  },
  lengthPercentage: e => {
    throw h("lengthPercentage");
  },
  length: e => {
    throw h("length");
  },
  percentage: e => {
    throw h("percentage");
  },
  number: e => {
    throw h("number");
  },
  resolution: e => {
    throw h("resolution");
  },
  time: e => {
    throw h("time");
  },
  transformFunction: e => {
    throw h("transformFunction");
  },
  transformList: e => {
    throw h("transformList");
  }
};
let O = e => {
  throw a("keyframes");
};
let x = function () {
  throw a("firstThatWorks");
};
export function stylex() {
  for (e = $$arguments.length, r = Array(e), n = 0, void 0; n < e; n++) {
    var e;
    var r;
    var n;
    r[n] = $$arguments[n];
  }
  let [i] = o.styleq(r);
  return i;
}
stylex.props = props;
stylex.attrs = p;
stylex.create = g;
stylex.defineVars = m;
stylex.createTheme = v;
stylex.include = y;
stylex.keyframes = O;
stylex.firstThatWorks = x;
stylex.types = b;
export const Ay = stylex;
export const xk = props;
