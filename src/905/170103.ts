import { Fo, ul } from "../figma_app/262240";
import { CA, Jq } from "../905/456599";
import { s as _$$s } from "../905/223112";
import { mD, JM } from "../905/950718";
import { bB } from "../905/776065";
import { Sm, yy, Ax, T4, Ft } from "../905/55006";
import { Gm } from "../905/499389";
let n;
let r;
function l(e, t, i, n, r, a, s) {
  try {
    var o = e[a](s);
    var l = o.value;
  } catch (e) {
    i(e);
    return;
  }
  o.done ? t(l) : Promise.resolve(l).then(n, r);
}
function d() {
  var e;
  return (e = function* (e, t) {
    return r(e, t);
  }, d = function () {
    var t = this;
    var i = arguments;
    return new Promise(function (n, r) {
      var a = e.apply(t, i);
      function s(e) {
        l(a, n, r, s, o, "next", e);
      }
      function o(e) {
        l(a, n, r, s, o, "throw", e);
      }
      s(void 0);
    });
  }).apply(this, arguments);
}
function h(e, t, i, n, r, a, s) {
  try {
    var o = e[a](s);
    var l = o.value;
  } catch (e) {
    i(e);
    return;
  }
  o.done ? t(l) : Promise.resolve(l).then(n, r);
}
function g(e) {
  return function () {
    var t = this;
    var i = arguments;
    return new Promise(function (n, r) {
      var a = e.apply(t, i);
      function s(e) {
        h(a, n, r, s, o, "next", e);
      }
      function o(e) {
        h(a, n, r, s, o, "throw", e);
      }
      s(void 0);
    });
  };
}
class f {
  get(e) {
    var t = this;
    return g(function* () {
      return yield t.backingCache.get(t.transformKey(e));
    })();
  }
  set(e, t) {
    var i = this;
    return g(function* () {
      "" !== i.transformKey(e) && (yield i.backingCache.set(i.transformKey(e), t));
    })();
  }
  has(e) {
    var t = this;
    return g(function* () {
      return yield t.backingCache.has(t.transformKey(e));
    })();
  }
  get size() {
    return this.backingCache.size;
  }
  transformKey(e) {
    return e;
  }
  constructor(e) {
    !function (e, t, i) {
      t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = i;
    }(this, "backingCache", void 0);
    this.backingCache = e;
  }
}
export class $$_0 extends f {}
export class $$A1 extends f {
  transformKey(e) {
    return $$y5(e);
  }
}
export function $$y5(e) {
  let t = e.toLowerCase();
  return (t = (t = t.replace(/[^a-zA-Z\s-]/g, "")).trim(), bB(t)) ? "" : t;
}
let b = new Map();
export function $$v4(e, t, i, n) {
  let r = e.children.map(e => Fo(e, e => "TEXT" === e.type)).flat();
  for (let s of (t.set(e.id, r), n)) !function (e, t) {
    let i = Fo(e, e => "TEXT" === e.type);
    t.set(e.id, i);
  }(s, i);
}
export function $$I2(e, t, i, n, r, a) {
  return E.apply(this, arguments);
}
function E() {
  return (E = g(function* (e, t, i, n, r, a) {
    if (t.length !== i.length) {
      console.error("Keys length does not match length of input values for type = " + n);
      return;
    }
    let s = (yield Promise.all(t.map((l = g(function* (e, t) {
      return (yield r.has(e)) ? [] : [t];
    }), function (e, t) {
      return l.apply(this, arguments);
    })))).flat();
    if (0 === s.length) return;
    t = s.map(e => t[e]);
    i = "image_s3" === n ? s.map(e => i[e]) : s.map(e => i[e]);
    let o = {};
    "image" === n ? o.images = i : "image_s3" === n ? (i = s.map(e => i[e]), o.image_s3_files = i) : o.text = i;
    try {
      let s = (yield e({
        model: a,
        input: o
      }))["image" === n || "image_s3" === n ? "encoded_images" : "encoded_text"];
      if (!s) {
        console.error("Embeddings are undefined");
        return;
      }
      if (s.length !== i.length) {
        console.error("Embeddings length does not match length of input values for type = " + n);
        return;
      }
      for (d = 0, void 0; d < i.length; d++) {
        var l;
        var d;
        r.set(t[d], s[d]);
      }
    } catch (e) {
      console.error("Error getting embeddings!", e);
      return Error("Error getting embeddings!", {
        cause: e
      });
    }
  })).apply(this, arguments);
}
function x() {
  return (x = g(function* (e, t, i, n, r = []) {
    let s = mD(e.id, "text");
    let o = t.get(e.id);
    if (!o) throw "Generate textNodesByPage before generateEmbeddingCacheForPage";
    let l = Array.from(new Set(o.map(e => e.characters).filter(e => !!e)));
    let d = Array.from(function (e) {
      let t = [];
      for (let i of e) ul(i, e => {
        if (!bB(e.name)) {
          let i = $$y5(e.name);
          i.length >= 2 && t.push(i);
        }
      });
      return new Set(t);
    }(n));
    l.push(...d);
    l.push(...r);
    let p = i.size;
    yield function (e, t) {
      return S.apply(this, arguments);
    }(l, i);
    JM(`Added ${(yield i.size) - (yield p)} text embeddings to cache`);
    s();
  })).apply(this, arguments);
}
function S() {
  return (S = g(function* (e, t) {
    e = Array.from(new Set(e = (e = e.map($$y5)).filter(e => "" !== e)));
    let i = CA();
    if (e.length > 0) try {
      let n = [];
      let r = 0;
      for (; r < e.length;) {
        let a = r + 16;
        let s = e.slice(r, a);
        let o = $$I2(i, s, s, "text", t, Gm);
        n.push(o);
        r = a;
      }
      yield Promise.all(n);
    } catch (e) {
      if (console.error("Error getting text embeddings!", e), _$$s()) throw e;
    }
  })).apply(this, arguments);
}
function w() {
  return (w = g(function* () {
    if (b.size > 0) return b;
    try {
      (yield require.t.bind(require, 271328, 17)).$$default.forEach(([e, t]) => {
        b.set(e, t);
      });
    } catch (e) {
      console.log("Error reading back embeddings cache", e);
    }
    return b;
  })).apply(this, arguments);
}
let C = e => {
  let t = e.slice(0, 4);
  let i = e.slice(4, 8);
  let n = e.slice(8);
  return `img/${t}/${i}/${n}`;
};
function T() {
  return (T = g(function* (e, t, i) {
    let n = mD(e.id, "image");
    yield function (e, t, i) {
      return k.apply(this, arguments);
    }(e, t, i);
    n();
  })).apply(this, arguments);
}
function k() {
  return (k = g(function* (e, t, i) {
    let n = CA();
    let r = t.get(e.id);
    if (!r) throw "Generate imageNodesByPage before generateImageEmbeddingCacheForPage";
    let a = new Set();
    for (let e of r) for (let t of e.fills || []) "IMAGE" === t.type && t.thumbnailHash && a.add(t.thumbnailHash);
    let o = Array.from(a);
    let l = 0;
    let d = i.size;
    let u = [];
    try {
      for (; l < o.length;) {
        let e = l + 16;
        let t = o.slice(l, e);
        let r = t.map(e => ({
          bucket: Jq(),
          key: C(e),
          region: null
        }));
        let a = $$I2(n, t, r, "image_s3", i, Gm);
        u.push(a);
        l = e;
      }
      yield Promise.all(u);
    } catch (e) {
      console.error("Error getting image embeddings!", e);
      return;
    }
    JM(`Added ${(yield i.size) - (yield d)} image embeddings to cache for page ${e.id}`);
  })).apply(this, arguments);
}
export function $$R3(e) {
  return N.apply(this, arguments);
}
function N() {
  return (N = g(function* (e, t = [], i = []) {
    let n = new $$_0(Sm());
    let r = new $$A1(yy());
    let s = Ax();
    let o = T4();
    let l = Ft();
    for (let [t, n] of (!function (e, t) {
      let i = [];
      for (let t of e.children) i.push(...Fo(t, e => Array.isArray(e.fills) && e.fills.some(e => "IMAGE" === e.type)));
      t.set(e.id, i);
    }(e, o), $$v4(e, l, s, i), yield function () {
      return w.apply(this, arguments);
    }(), b.entries())) r.set(t, n);
    yield Promise.all([function (e, t, i) {
      return T.apply(this, arguments);
    }(e, o, n), function (e, t, i, n) {
      return x.apply(this, arguments);
    }(e, l, r, i, t)]);
    return {
      imageEmbeddingsCache: n,
      textEmbeddingsCache: r,
      textNodes: l.get(e.id),
      textNodesByTLF: s,
      backEmbeddings: b
    };
  })).apply(this, arguments);
}
export const kH = $$_0;
export const a$ = $$A1;
export const m$ = $$I2;
export const fq = $$R3;
export const Fw = $$v4;
export const k_ = $$y5;