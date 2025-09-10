import { A } from "src/vendor/723372";
import { RI } from "src/905/36803";
export function $$a0(...e) {
  let t;
  let i = e.length;
  let s = 0;
  for (; s < i && (!(t = e[s]) || RI(t)); ++s);
  let o = !0;
  for (let t = s + 1; t < i; ++t) {
    let i = e[t];
    if (i && !RI(i)) {
      o = !1;
      break;
    }
  }
  if (o) return t || {};
  let l = {
    ...t
  };
  for (let t = s + 1; t < i; ++t) {
    let i = e[t];
    for (let e in i) l[e] ? e.match(/^on[A-Z]/) ? l[e] = function (e, t) {
      if (e || t) return e ? t ? (...i) => {
        e(...i);
        t(...i);
      } : e : t;
    }(l[e], i[e]) : "className" === e ? l[e] = A(l[e], i[e]) : "style" === e ? l[e] = {
      ...l[e],
      ...i[e]
    } : l[e] = i[e] : l[e] = i[e];
  }
  return l;
}
export const v = $$a0;
