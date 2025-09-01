import { Vy } from "../vendor/780783";
import { _m } from "../vendor/853364";
import { M } from "../vendor/878996";
let $$a = 220 * _m;
let h = "$";
let d = 3;
export function $$p0(e, r = $$a) {
  let n = M(Object.prototype);
  let i = M(Array.prototype);
  let s = [];
  let m = new WeakMap();
  let v = g(e, h, void 0, s, m);
  let y = JSON.stringify(v);
  let b = y ? y.length : 0;
  if (b > r) {
    O(r, "discarded", e);
    return;
  }
  for (; s.length > 0 && b < r;) {
    let n = s.shift();
    let i = 0;
    if (Array.isArray(n.source)) for (let o = 0; o < n.source.length; o++) {
      let a = g(n.source[o], n.path, o, s, m);
      if (void 0 !== a ? b += JSON.stringify(a).length : b += 4, b += i, i = 1, b > r) {
        O(r, "truncated", e);
        break;
      }
      n.target[o] = a;
    } else for (let o in n.source) if (Object.prototype.hasOwnProperty.call(n.source, o)) {
      let a = g(n.source[o], n.path, o, s, m);
      if (void 0 !== a && (b += JSON.stringify(a).length + i + o.length + d, i = 1), b > r) {
        O(r, "truncated", e);
        break;
      }
      n.target[o] = a;
    }
  }
  n();
  i();
  return v;
}
function g(e, r, n, i, s) {
  let o = b(e);
  if (!o || "object" != typeof o) return m(o);
  let a = v(o);
  if ("[Object]" !== a && "[Array]" !== a && "[Error]" !== a) return a;
  let h = e;
  if (s.has(h)) return `[Reference seen at ${s.get(h)}]`;
  let d = void 0 !== n ? `${r}.${n}` : r;
  let p = Array.isArray(o) ? [] : {};
  s.set(h, d);
  i.push({
    source: o,
    target: p,
    path: d
  });
  return p;
}
function m(e) {
  return "bigint" == typeof e ? `[BigInt] ${e.toString()}` : "function" == typeof e ? `[Function] ${e.name || "unknown"}` : "symbol" == typeof e ? `[Symbol] ${e.description || e.toString()}` : e;
}
function v(e) {
  try {
    if (e instanceof Event) return y(e);
    if (e instanceof RegExp) return `[RegExp] ${e.toString()}`;
    let r = Object.prototype.toString.call(e).match(/\[object (.*)\]/);
    if (r && r[1]) return `[${r[1]}]`;
  } catch (e) {}
  return "[Unserializable]";
}
function y(e) {
  return {
    type: e.type,
    isTrusted: e.isTrusted,
    currentTarget: e.currentTarget ? v(e.currentTarget) : null,
    target: e.target ? v(e.target) : null
  };
}
function b(e) {
  let r = e;
  if (r && "function" == typeof r.toJSON) try {
    return r.toJSON();
  } catch (e) {}
  return e;
}
function O(e, r, n) {
  Vy.warn(`The data provided has been ${r} as it is over the limit of ${e} characters:`, n);
}
export const a = $$p0;