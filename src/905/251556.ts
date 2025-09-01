export function $$n0(e) {
  let t = [];
  let i = e => {
    if (e && e.toJSON && "function" == typeof e.toJSON && (e = e.toJSON()), e instanceof Set) return i(Array.from(e.values()));
    if (e instanceof Map) {
      let t = {};
      e.forEach((e, i) => {
        t[i] = e;
      });
      return i(t);
    }
    if (void 0 === e) return;
    if ("number" == typeof e) return isFinite(e) ? "" + e : "null";
    if ("object" != typeof e) return JSON.stringify(e);
    if (Array.isArray(e)) {
      let t = "[";
      for (let n = 0; n < e.length; n++) {
        n && (t += ",");
        t += i(e[n]) || "null";
      }
      return t + "]";
    }
    if (null === e) return "null";
    if (-1 !== t.indexOf(e)) throw TypeError("Converting circular structure to JSON");
    let n = t.push(e) - 1;
    let r = Object.keys(e).sort();
    let a = "";
    for (let t of r) {
      let n = i(e[t]);
      n && (a && (a += ","), a += JSON.stringify(t) + ":" + n);
    }
    t.splice(n, 1);
    return "{" + a + "}";
  };
  return i(e);
}
export const J = $$n0;