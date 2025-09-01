let i;
let s;
let o = (e, r) => r.some(r => e instanceof r);
function a() {
  return i || (i = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction]);
}
function h() {
  return s || (s = [IDBCursor.prototype.advance, IDBCursor.prototype.$$continue, IDBCursor.prototype.continuePrimaryKey]);
}
let d = new WeakMap();
let p = new WeakMap();
let g = new WeakMap();
let m = new WeakMap();
let v = new WeakMap();
function y(e) {
  let r = new Promise((r, n) => {
    let i = () => {
      e.removeEventListener("success", s);
      e.removeEventListener("error", o);
    };
    let s = () => {
      r(_(e.result));
      i();
    };
    let o = () => {
      n(e.error);
      i();
    };
    e.addEventListener("success", s);
    e.addEventListener("error", o);
  });
  r.then(r => {
    r instanceof IDBCursor && d.set(r, e);
  }).catch(() => { });
  v.set(r, e);
  return r;
}
function b(e) {
  if (p.has(e)) return;
  let r = new Promise((r, n) => {
    let i = () => {
      e.removeEventListener("complete", s);
      e.removeEventListener("error", o);
      e.removeEventListener("abort", o);
    };
    let s = () => {
      r();
      i();
    };
    let o = () => {
      n(e.error || new DOMException("AbortError", "AbortError"));
      i();
    };
    e.addEventListener("complete", s);
    e.addEventListener("error", o);
    e.addEventListener("abort", o);
  });
  p.set(e, r);
}
let O = {
  get(e, r, n) {
    if (e instanceof IDBTransaction) {
      if ("done" === r) return p.get(e);
      if ("objectStoreNames" === r) return e.objectStoreNames || g.get(e);
      if ("store" === r) return n.objectStoreNames[1] ? void 0 : n.objectStore(n.objectStoreNames[0]);
    }
    return _(e[r]);
  },
  set: (e, r, n) => (e[r] = n, !0),
  has: (e, r) => e instanceof IDBTransaction && ("done" === r || "store" === r) || r in e
};
function x(e) {
  O = e(O);
}
function w(e) {
  return e !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype ? h().includes(e) ? function(...r) {
    e.apply(S(this), r);
    return _(d.get(this));
  } : function(...r) {
    return _(e.apply(S(this), r));
  } : function(r, ...n) {
    let i = e.call(S(this), r, ...n);
    g.set(i, r.sort ? r.sort() : [r]);
    return _(i);
  };
}
function k(e) {
  return "function" == typeof e ? w(e) : (e instanceof IDBTransaction && b(e), o(e, a())) ? new Proxy(e, O) : e;
}
function _(e) {
  if (e instanceof IDBRequest) return y(e);
  if (m.has(e)) return m.get(e);
  let r = k(e);
  r !== e && (m.set(e, r), v.set(r, e));
  return r;
}
let S = e => v.get(e);
export function $$E1(e, r, {
  blocked: n,
  upgrade: i,
  blocking: s,
  terminated: o
} = {}) {
  let a = indexedDB.open(e, r);
  let h = _(a);
  i && a.addEventListener("upgradeneeded", e => {
    i(_(a.result), e.oldVersion, e.newVersion, _(a.transaction));
  });
  n && a.addEventListener("blocked", () => n());
  h.then(e => {
    o && e.addEventListener("close", () => o());
    s && e.addEventListener("versionchange", () => s());
  }).catch(() => { });
  return h;
}
export function $$A0(e, {
  blocked: r
} = {}) {
  let n = indexedDB.deleteDatabase(e);
  r && n.addEventListener("blocked", () => r());
  return _(n).then(() => void 0);
}
let C = ["get", "getKey", "getAll", "getAllKeys", "count"];
let T = ["put", "add", "delete", "clear"];
let I = new Map();
function P(e, r) {
  if (!(e instanceof IDBDatabase && !(r in e) && "string" == typeof r)) return;
  if (I.get(r)) return I.get(r);
  let n = r.replace(/FromIndex$/, "");
  let i = r !== n;
  let s = T.includes(n);
  if (!(n in (i ? IDBIndex : IDBObjectStore).prototype) || !(s || C.includes(n))) return;
  let o = async function(e, ...r) {
    let o = this.transaction(e, s ? "readwrite" : "readonly");
    let a = o.store;
    i && (a = a.index(r.shift()));
    return (await Promise.all([a[n](...r), s && o.done]))[0];
  };
  I.set(r, o);
  return o;
}
x(e => ({
  ...e,
  get: (r, n, i) => P(r, n) || e.get(r, n, i),
  has: (r, n) => !!P(r, n) || e.has(r, n)
}));
export const MR = $$A0;
export const P2 = $$E1; 
