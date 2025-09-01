import { L2, mE } from "../vendor/314131";
import { W4 } from "../vendor/998256";
import { qQ } from "../vendor/156870";
export function $$a0(e, n = 100, i = Infinity) {
  try {
    return function e(n, i, a = Infinity, o = Infinity, u = function () {
      let e = "function" == typeof WeakSet;
      let n = e ? new WeakSet() : [];
      return [function (i) {
        if (e) return !!n.has(i) || (n.add(i), !1);
        for (let e = 0; e < n.length; e++) if (n[e] === i) return !0;
        n.push(i);
        return !1;
      }, function (i) {
        if (e) n.$$delete(i);else for (let e = 0; e < n.length; e++) if (n[e] === i) {
          n.splice(e, 1);
          break;
        }
      }];
    }()) {
      let [l, d] = u;
      if (null == i || ["boolean", "string"].includes(typeof i) || "number" == typeof i && Number.isFinite(i)) return i;
      let s = function (e, n) {
        try {
          if ("domain" === e && n && "object" == typeof n && n._events) return "[Domain]";
          if ("domainEmitter" === e) return "[DomainEmitter]";
          if ("undefined" != typeof global && n === global) return "[Global]";
          if ("undefined" != typeof window && n === window) return "[Window]";
          if ("undefined" != typeof document && n === document) return "[Document]";
          if (L2(n)) return "[VueViewModel]";
          if (mE(n)) return "[SyntheticEvent]";
          if ("number" == typeof n && !Number.isFinite(n)) return `[${n}]`;
          if ("function" == typeof n) return `[Function: ${qQ(n)}]`;
          if ("symbol" == typeof n) return `[${String(n)}]`;
          if ("bigint" == typeof n) return `[BigInt: ${String(n)}]`;
          let i = function (e) {
            let n = Object.getPrototypeOf(e);
            return n ? n.constructor.name : "null prototype";
          }(n);
          if (/^HTML(\w*)Element$/.test(i)) return `[HTMLElement: ${i}]`;
          return `[object ${i}]`;
        } catch (e) {
          return `**non-serializable** (${e})`;
        }
      }(n, i);
      if (!s.startsWith("[object ")) return s;
      if (i.__sentry_skip_normalization__) return i;
      let c = "number" == typeof i.__sentry_override_normalization_depth__ ? i.__sentry_override_normalization_depth__ : a;
      if (0 === c) return s.replace("object ", "");
      if (l(i)) return "[Circular ~]";
      if (i && "function" == typeof i.toJSON) try {
        let n = i.toJSON();
        return e("", n, c - 1, o, u);
      } catch (e) {}
      let h = Array.isArray(i) ? [] : {};
      let p = 0;
      let g = W4(i);
      for (let n in g) {
        if (!Object.prototype.hasOwnProperty.call(g, n)) continue;
        if (p >= o) {
          h[n] = "[MaxProperties ~]";
          break;
        }
        let i = g[n];
        h[n] = e(n, i, c - 1, o, u);
        p++;
      }
      d(i);
      return h;
    }("", e, n, i);
  } catch (e) {
    return {
      ERROR: `**non-serializable** (${e})`
    };
  }
}
export const S8 = $$a0;
export const cd = function e(n, i = 3, t = 102400) {
  let f = $$a0(n, i);
  return ~-encodeURI(JSON.stringify(f)).split(/%..|./).length > t ? e(n, i - 1, t) : f;
};