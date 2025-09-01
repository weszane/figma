import { P } from "../vendor/748902";
function s(e, r, n = h()) {
  if (void 0 === r) return e;
  if ("object" != typeof r || null === r) return r;
  if (r instanceof Date) return new Date(r.getTime());
  if (r instanceof RegExp) {
    let e = r.flags || [r.global ? "g" : "", r.ignoreCase ? "i" : "", r.multiline ? "m" : "", r.sticky ? "y" : "", r.unicode ? "u" : ""].join("");
    return new RegExp(r.source, e);
  }
  if (n.hasAlreadyBeenSeen(r)) return;
  if (Array.isArray(r)) {
    let i = Array.isArray(e) ? e : [];
    for (let e = 0; e < r.length; ++e) i[e] = s(i[e], r[e], n);
    return i;
  }
  let o = "object" === P(e) ? e : {};
  for (let e in r) Object.prototype.hasOwnProperty.call(r, e) && (o[e] = s(o[e], r[e], n));
  return o;
}
export function $$o0(e) {
  return s(void 0, e);
}
export function $$a1(...e) {
  let r;
  for (let n of e) null != n && (r = s(r, n));
  return r;
}
function h() {
  if ("undefined" != typeof WeakSet) {
    let e = new WeakSet();
    return {
      hasAlreadyBeenSeen(r) {
        let n = e.has(r);
        n || e.add(r);
        return n;
      }
    };
  }
  let e = [];
  return {
    hasAlreadyBeenSeen(r) {
      let n = e.indexOf(r) >= 0;
      n || e.push(r);
      return n;
    }
  };
}
export const Go = $$o0;
export const kg = $$a1;