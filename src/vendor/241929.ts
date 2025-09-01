import { C } from "../vendor/575983";
class r extends Map {
  constructor(e, n = a) {
    if (super(), Object.defineProperties(this, {
      _intern: {
        value: new Map()
      },
      _key: {
        value: n
      }
    }), null != e) for (let [n, t] of e) this.set(n, t);
  }
  get(e) {
    return super.get(l(this, e));
  }
  has(e) {
    return super.has(l(this, e));
  }
  set(e, n) {
    return super.set(function ({
      _intern: e,
      _key: n
    }, t) {
      let r = n(t);
      return e.has(r) ? e.get(r) : (e.set(r, t), t);
    }(this, e), n);
  }
  delete(e) {
    return super.$$delete(function ({
      _intern: e,
      _key: n
    }, t) {
      let r = n(t);
      e.has(r) && (t = e.get(r), e.$$delete(r));
      return t;
    }(this, e));
  }
}
function l({
  _intern: e,
  _key: n
}, t) {
  let r = n(t);
  return e.has(r) ? e.get(r) : t;
}
function a(e) {
  return null !== e && "object" == typeof e ? e.valueOf() : e;
}
let u = Symbol("implicit");
export const A = function e() {
  var n = new r();
  var t = [];
  var l = [];
  var a = u;
  function o(e) {
    let r = n.get(e);
    if (void 0 === r) {
      if (a !== u) return a;
      n.set(e, r = t.push(e) - 1);
    }
    return l[r % l.length];
  }
  o.domain = function (e) {
    if (!arguments.length) return t.slice();
    for (let l of (t = [], n = new r(), e)) n.has(l) || n.set(l, t.push(l) - 1);
    return o;
  };
  o.range = function (e) {
    return arguments.length ? (l = Array.from(e), o) : l.slice();
  };
  o.unknown = function (e) {
    return arguments.length ? (a = e, o) : a;
  };
  o.copy = function () {
    return e(t, l).unknown(a);
  };
  C.apply(o, arguments);
  return o;
};