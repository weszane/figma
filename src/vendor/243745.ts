import { Base64 } from "../vendor/567829";
import { p } from "../vendor/232877";
import { p as _$$p } from "../vendor/61286";
import { Regional_Indicator, Extended_Pictographic, Extend, ZWJ, CR, LF, Control, L, V, LV, LVT, T, SpacingMark, Prepend } from "../vendor/661872";
import a from "../vendor/383727";
let o = _$$p;
let i = p;
let u = Base64;
let c = new a(u.toUint8Array(o));
let s = new a(u.toUint8Array(i));
let f = {
  Initial: 0,
  ExtendOrZWJ: 1,
  NotBoundary: 2
};
module.exports = function (t) {
  let e = [];
  let r = [0];
  let o = [];
  for (let e = 0; e < t.length;) {
    let n = t.codePointAt(e);
    o.push(c.get(n) | s.get(n));
    e += n > 65535 ? 2 : 1;
    r.push(e);
  }
  for (let i = 0; i < o.length;) {
    let a = function (t, e) {
      let r = t.length;
      let o = 0;
      let i = f.Initial;
      for (let a = e; a + 1 < r; a++) {
        let r = t[a + 0];
        let u = t[a + 1];
        switch ((r & Regional_Indicator) != 0 || (o = 0), i) {
          case f.NotBoundary:
          case f.Initial:
            i = (r & Extended_Pictographic) != 0 ? f.ExtendOrZWJ : f.Initial;
            break;
          case f.ExtendOrZWJ:
            i = (r & Extend) != 0 ? f.ExtendOrZWJ : (r & ZWJ) != 0 && (u & Extended_Pictographic) != 0 ? f.NotBoundary : f.Initial;
        }
        if ((r & CR) == 0 || (u & LF) == 0) {
          if ((r & (Control | CR | LF)) != 0 || (u & (Control | CR | LF)) != 0) return a + 1 - e;
          if (((r & L) == 0 || (u & (L | V | LV | LVT)) == 0) && ((r & (LV | V)) == 0 || (u & (V | T)) == 0) && ((r & (LVT | T)) == 0 || (u & T) == 0) && (u & (Extend | ZWJ)) == 0 && (u & SpacingMark) == 0 && (r & Prepend) == 0 && i !== f.NotBoundary) {
            if ((r & Regional_Indicator) != 0 && (u & Regional_Indicator) != 0 && o % 2 == 0) {
              o++;
              continue;
            }
            return a + 1 - e;
          }
        }
      }
      return r - e;
    }(o, i);
    let u = r[i];
    let c = r[i + a];
    e.push(t.slice(u, c));
    i += a;
  }
  return e;
};