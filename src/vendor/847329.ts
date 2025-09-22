export function makeParser(e) {
  let r;
  let n;
  let i;
  let a;
  let h;
  let d;
  let p;
  g();
  return {
    feed: m,
    reset: g
  };
  function g() {
    r = !0;
    n = "";
    i = 0;
    a = -1;
    h = void 0;
    d = void 0;
    p = "";
  }
  function m(e) {
    n = n ? n + e : e;
    r && o(n) && (n = n.slice(s.length));
    r = !1;
    let h = n.length;
    let d = 0;
    let p = !1;
    for (; d < h;) {
      let e;
      p && ("\n" === n[d] && ++d, p = !1);
      let r = -1;
      let s = a;
      for (let o = i; r < 0 && o < h; ++o) ":" === (e = n[o]) && s < 0 ? s = o - d : "\r" === e ? (p = !0, r = o - d) : "\n" === e && (r = o - d);
      if (r < 0) {
        i = h - d;
        a = s;
        break;
      }
      i = 0;
      a = -1;
      v(n, d, s, r);
      d += r + 1;
    }
    d === h ? n = "" : d > 0 && (n = n.slice(d));
  }
  function v(r, n, i, s) {
    if (0 === s) {
      p.length > 0 && (e({
        type: "event",
        id: h,
        event: d || void 0,
        data: p.slice(0, -1)
      }), p = "", h = void 0);
      d = void 0;
      return;
    }
    let o = i < 0;
    let a = r.slice(n, n + (o ? s : i));
    let g = 0;
    g = o ? s : " " === r[n + i + 1] ? i + 2 : i + 1;
    let m = n + g;
    let v = s - g;
    let y = r.slice(m, m + v).toString();
    if ("data" === a) p += y ? "".concat(y, "\n") : "\n";else if ("event" === a) d = y;else if ("id" !== a || y.includes("\0")) {
      if ("retry" === a) {
        let r = parseInt(y, 10);
        Number.isNaN(r) || e({
          type: "reconnect-interval",
          value: r
        });
      }
    } else h = y;
  }
}
let s = [239, 187, 191];
function o(e) {
  return s.every((r, n) => e.charCodeAt(n) === r);
}
// makeParser
export const C = makeParser;
