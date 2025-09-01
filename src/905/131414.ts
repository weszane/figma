import { bB } from "../905/776065";
import { m$ } from "../905/170103";
import { CA } from "../905/456599";
import { Gm } from "../905/499389";
function o(e, t, i, n, r, a, s) {
  try {
    var o = e[a](s);
    var l = o.value;
  } catch (e) {
    i(e);
    return;
  }
  o.done ? t(l) : Promise.resolve(l).then(n, r);
}
function l(e) {
  return function () {
    var t = this;
    var i = arguments;
    return new Promise(function (n, r) {
      var a = e.apply(t, i);
      function s(e) {
        o(a, n, r, s, l, "next", e);
      }
      function l(e) {
        o(a, n, r, s, l, "throw", e);
      }
      s(void 0);
    });
  };
}
let d = ["back", "go back", "previous", "return", "revert", "back button", "arrow", "arrow back", "arrow left", "chevron left", "angle left", "arrow back icon", "arrow left icon", "chevron left icon", "angle left icon", "back arrow", "backwards", "vector back", "undo"];
function c() {
  return (c = l(function* (e) {
    var t;
    yield p(d, e);
    return new Map(yield Promise.all(d.map((t = l(function* (t) {
      let i = yield e.get(t);
      return [t, i];
    }), function (e) {
      return t.apply(this, arguments);
    }))));
  })).apply(this, arguments);
}
export function $$u1(e) {
  return e.characters && e.characters.length < 30 && e.characters.length > 1 ? e.characters : bB(e.name) ? null : e.name;
}
function p(e, t) {
  return m.apply(this, arguments);
}
function m() {
  return (m = l(function* (e, t) {
    let i = CA();
    if (e.length > 0) try {
      yield m$(i, e, e, "text", t, Gm);
    } catch (e) {
      console.error("Error getting text embeddings!", e);
    }
    return t;
  })).apply(this, arguments);
}
function h() {
  return (h = l(function* (e, t, i) {
    void 0 === i && (i = yield function (e) {
      return c.apply(this, arguments);
    }(t));
    let n = $$u1(e);
    if (!n) return [];
    let r = yield p([n], t);
    if (r && (yield r.size) > 0) {
      var a;
      let e = null !== (a = yield r.get(n)) && void 0 !== a ? a : null;
      return e && 0 !== e.length ? Object.values(i).map(t => $$_0(e, t.embedding)) : [];
    }
    return [];
  })).apply(this, arguments);
}
export function $$g2(e, t, i) {
  return f.apply(this, arguments);
}
function f() {
  return (f = l(function* (e, t, i) {
    return (yield function (e, t, i) {
      return h.apply(this, arguments);
    }(e, t, i)).some(e => e > .85);
  })).apply(this, arguments);
}
export function $$_0(e, t) {
  let i = 0;
  let n = 0;
  let r = 0;
  for (let a = 0; a < e.length; a++) {
    i += e[a] * t[a];
    n += e[a] * e[a];
    r += t[a] * t[a];
  }
  return i / (Math.sqrt(n) * Math.sqrt(r));
}
export const Lb = $$_0;
export const Qm = $$u1;
export const iQ = $$g2;